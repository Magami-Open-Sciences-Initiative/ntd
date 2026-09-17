/**
 * Resolve a drug target to its exact UniProt accession by way of the Protein
 * Data Bank.
 *
 * WHY THIS WORKS: a PDB entry is a structure someone actually solved, and the
 * entry records the UniProt accession of the protein in the crystal - plus the
 * chemical components bound in it. So when a literature report says "inhibitor X
 * binds target Y", the structure deposited alongside it names the exact paralog,
 * which is precisely what a name search cannot give you.
 *
 * For a target whose paralog is unsettled, find the paper (or the bound ligand),
 * then read the accession off the structure. Add the confirmed accession to
 * scripts/target-accessions.ts with an `expectName`/`expectLength`, and the
 * fetch will re-assert it.
 *
 * Usage:
 *   npx tsx scripts/verify-target.ts --text "Trypanosoma cruzi sterol 14alpha-demethylase"
 *   npx tsx scripts/verify-target.ts --ligand OXM          # by chemical component id
 *   npx tsx scripts/verify-target.ts --pdb 3K1O 4H6O       # read named entries
 */

const UA = { "user-agent": "MagamiNTD/1.0 (target verification)" };
const RCSB_SEARCH = "https://search.rcsb.org/rcsbsearch/v2/query";
const RCSB_DATA = "https://data.rcsb.org/rest/v1/core";

type SearchQuery = Record<string, unknown>;

function buildQuery(kind: "text" | "ligand", value: string): SearchQuery {
  if (kind === "ligand") {
    return {
      type: "terminal",
      service: "chemical",
      parameters: { value, type: "descriptor", descriptor_type: "InChI" },
    };
  }
  return { type: "terminal", service: "full_text", parameters: { value } };
}

async function search(kind: "text" | "ligand", value: string, rows: number): Promise<string[]> {
  const res = await fetch(RCSB_SEARCH, {
    method: "POST",
    headers: { ...UA, "content-type": "application/json" },
    body: JSON.stringify({
      query: buildQuery(kind, value),
      return_type: "entry",
      request_options: { paginate: { start: 0, rows } },
    }),
  });
  if (res.status === 204 || res.status === 404) return [];
  if (!res.ok) throw new Error(`RCSB search ${res.status}`);
  const j = (await res.json()) as { result_set?: { identifier: string }[] };
  return (j.result_set ?? []).map((r) => r.identifier);
}

/** Ligand search needs an InChI, so resolve a chem comp id to one first. */
async function inchiForChemComp(id: string): Promise<string | null> {
  const res = await fetch(`${RCSB_DATA}/chemcomp/${id.toUpperCase()}`, { headers: UA });
  if (!res.ok) return null;
  const j = (await res.json()) as ChemCompRaw;
  return j.rcsb_chem_comp_descriptor?.InChI ?? null;
}

/** Only the RCSB fields this script reads. */
type ChemCompRaw = { rcsb_chem_comp_descriptor?: { InChI?: string } };
type RcsbEntryRaw = {
  struct?: { title?: string };
  rcsb_entry_info?: {
    nonpolymer_bound_components?: string[];
    polymer_entity_count?: number;
  };
};
type RcsbEntityRaw = {
  rcsb_polymer_entity?: { pdbx_description?: string };
  rcsb_entity_source_organism?: { scientific_name?: string }[];
  rcsb_polymer_entity_container_identifiers?: {
    reference_sequence_identifiers?: { database_accession?: string; database_name?: string }[];
  };
};

type EntryReport = {
  id: string;
  title: string;
  ligands: string[];
  chains: { uniprot: string; name: string; organism: string }[];
};

async function describeEntry(id: string): Promise<EntryReport | null> {
  const res = await fetch(`${RCSB_DATA}/entry/${id}`, { headers: UA });
  if (!res.ok) return null;
  const e = (await res.json()) as RcsbEntryRaw;
  const info = e.rcsb_entry_info ?? {};
  const ligands: string[] = info.nonpolymer_bound_components ?? [];
  const count: number = info.polymer_entity_count ?? 1;

  const chains: EntryReport["chains"] = [];
  for (let i = 1; i <= Math.min(count, 4); i++) {
    const pr = await fetch(`${RCSB_DATA}/polymer_entity/${id}/${i}`, { headers: UA });
    if (!pr.ok) continue;
    const p = (await pr.json()) as RcsbEntityRaw;
    const xrefs =
      p.rcsb_polymer_entity_container_identifiers?.reference_sequence_identifiers ?? [];
    const name: string = p.rcsb_polymer_entity?.pdbx_description ?? "(unnamed)";
    const organism: string = p.rcsb_entity_source_organism?.[0]?.scientific_name ?? "?";
    for (const x of xrefs) {
      if (x.database_accession && (x.database_name ?? "UniProt").includes("UniProt")) {
        chains.push({ uniprot: x.database_accession, name, organism });
      }
    }
  }
  return { id: id.toUpperCase(), title: e.struct?.title ?? "", ligands, chains };
}

async function main() {
  const argv = process.argv.slice(2);
  const mode = argv[0];
  const values = argv.slice(1);

  if (!mode || !values.length) {
    console.log("usage: --text <query> | --ligand <CHEMCOMP_ID> | --pdb <ID...>");
    process.exit(1);
  }

  let entries: string[] = [];
  if (mode === "--pdb") {
    entries = values.map((v) => v.toUpperCase());
  } else if (mode === "--ligand") {
    const inchi = await inchiForChemComp(values[0]);
    if (!inchi) {
      console.log(`no chemical component ${values[0]}`);
      process.exit(1);
    }
    entries = await search("ligand", inchi, 6);
    console.log(`# entries containing ${values[0].toUpperCase()}: ${entries.length}`);
  } else if (mode === "--text") {
    entries = await search("text", values.join(" "), 6);
    console.log(`# full-text search: ${values.join(" ")}  →  ${entries.length} entries`);
  } else {
    console.log(`unknown mode ${mode}`);
    process.exit(1);
  }

  for (const id of entries) {
    const r = await describeEntry(id);
    if (!r) continue;
    console.log(`\n## ${r.id}  — ${r.title.slice(0, 100)}`);
    console.log(`   ligands: ${r.ligands.join(", ") || "(none)"}`);
    if (!r.chains.length) console.log("   no UniProt cross-reference on this entry");
    for (const c of r.chains) {
      console.log(`   ${c.uniprot.padEnd(11)} ${c.name.slice(0, 54)} | ${c.organism.slice(0, 30)}`);
    }
    await new Promise((res) => setTimeout(res, 120));
  }
}

main();

export {};
