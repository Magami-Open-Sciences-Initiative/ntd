/**
 * Fetch protein sequences, PDB entries and AlphaFold models for the target
 * records and write `src/data/target-sequences.ts`.
 *
 * Fetched rather than hand-written, for the same reason as the drug structures:
 * an incorrect sequence is worse than no sequence. Two things make this script
 * more than a downloader:
 *
 *  1. It re-asserts the curation. `scripts/target-accessions.ts` records the
 *     protein name and exact length each accession is expected to have; if
 *     UniProt remaps an accession, or the entry is not what was curated, the
 *     fetch fails loudly instead of quietly attaching the wrong protein.
 *  2. It cross-checks two independent sources. AlphaFold reports its own copy
 *     of the sequence; if that disagrees with UniProt's, the run says so.
 *
 * AlphaFold URLs are read from its API response, never constructed: the file
 * version is not stable (it is v6 now, and a hand-built v4 URL 404s).
 *
 * Only `status: "verified"` targets are fetched. Targets with no single protein
 * are listed in NO_SEQUENCE in the data file with the reason.
 *
 * Usage: npm run fetch:targets
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { VERIFIED, UNCONFIRMED, NO_SEQUENCE } from "./target-accessions";

const UA = { "user-agent": "MagamiNTD/1.0 (target fetch)" };
const UF = "https://rest.uniprot.org/uniprotkb";
const AF = "https://alphafold.ebi.ac.uk/api/prediction";
const RCSB = "https://search.rcsb.org/rcsbsearch/v2/query";
const TS_OUT = join(process.cwd(), "src", "data", "target-sequences.ts");

/** How many PDB entry ids to record per target (the count is recorded in full). */
const PDB_SAMPLE = 6;

type UniProtEntry = {
  acc: string;
  entryName: string;
  proteinName: string;
  organism: string;
  reviewed: boolean;
  gene?: string;
  sequence: string;
  length: number;
};

type AlphaFoldModel = {
  page: string;
  pdb: string;
  cif: string;
  version: number;
  plddt: number;
  plddtVeryHigh: number;
  /** AlphaFold's own copy of the sequence, for the cross-check */
  sequence: string;
  start: number;
  end: number;
};

/** Only the UniProt response fields this script reads. */
type UniProtRaw = {
  primaryAccession?: string;
  uniProtkbId?: string;
  entryType?: string;
  proteinDescription?: {
    recommendedName?: { fullName?: { value?: string } };
    submissionNames?: { fullName?: { value?: string } }[];
  };
  organism?: { scientificName?: string };
  genes?: { geneName?: { value?: string } }[];
  sequence?: { value?: string; length?: number };
};

/** Only the AlphaFold response fields this script reads. */
type AlphaFoldRaw = {
  pdbUrl?: string;
  cifUrl?: string;
  latestVersion?: number;
  globalMetricValue?: number;
  fractionPlddtVeryHigh?: number;
  uniprotSequence?: string;
  sequence?: string;
  uniprotStart?: number;
  uniprotEnd?: number;
};

/** Only the RCSB search response fields this script reads. */
type RcsbRaw = { result_set?: { identifier: string }[]; total_count?: number };

async function getUniProt(acc: string): Promise<UniProtEntry> {
  const res = await fetch(`${UF}/${acc}.json`, { headers: UA });
  if (!res.ok) throw new Error(`UniProt ${res.status}`);
  const r = (await res.json()) as UniProtRaw;
  if (!r.primaryAccession || !r.uniProtkbId) throw new Error("UniProt response missing identity fields");
  const rec = r.proteinDescription?.recommendedName?.fullName?.value;
  const sub = r.proteinDescription?.submissionNames?.[0]?.fullName?.value;
  return {
    acc: r.primaryAccession,
    entryName: r.uniProtkbId,
    proteinName: rec ?? sub ?? "",
    organism: r.organism?.scientificName ?? "",
    reviewed: String(r.entryType ?? "").includes("reviewed (Swiss-Prot)"),
    gene: r.genes?.[0]?.geneName?.value,
    sequence: r.sequence?.value ?? "",
    length: r.sequence?.length ?? 0,
  };
}

async function getAlphaFold(acc: string): Promise<AlphaFoldModel | null> {
  const res = await fetch(`${AF}/${acc}`, { headers: UA });
  if (res.status === 404) return null; // valid accession, no model
  if (!res.ok) throw new Error(`AlphaFold ${res.status}`);
  const arr = (await res.json()) as AlphaFoldRaw[];
  const d = Array.isArray(arr) ? arr[0] : undefined;
  if (!d) return null;
  if (!d.pdbUrl || !d.cifUrl) throw new Error("AlphaFold prediction returned without model URLs");
  return {
    page: `https://alphafold.ebi.ac.uk/entry/${acc}`,
    pdb: d.pdbUrl,
    cif: d.cifUrl,
    version: d.latestVersion ?? 0,
    plddt: d.globalMetricValue ?? 0,
    plddtVeryHigh: d.fractionPlddtVeryHigh ?? 0,
    sequence: d.uniprotSequence ?? d.sequence ?? "",
    start: d.uniprotStart ?? 1,
    end: d.uniprotEnd ?? 0,
  };
}

async function getPdb(acc: string): Promise<{ ids: string[]; total: number }> {
  const res = await fetch(RCSB, {
    method: "POST",
    headers: { ...UA, "content-type": "application/json" },
    body: JSON.stringify({
      query: {
        type: "terminal",
        service: "text",
        parameters: {
          attribute:
            "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession",
          operator: "exact_match",
          value: acc,
        },
      },
      return_type: "entry",
      request_options: { paginate: { start: 0, rows: PDB_SAMPLE } },
    }),
  });
  if (res.status === 204 || res.status === 404) return { ids: [], total: 0 };
  if (!res.ok) throw new Error(`RCSB ${res.status}`);
  const j = (await res.json()) as RcsbRaw;
  return {
    ids: (j.result_set ?? []).map((r) => r.identifier),
    total: j.total_count ?? 0,
  };
}

type Entry = {
  uniprot: string;
  entryName: string;
  proteinName: string;
  /** UniProt's own name, kept only when it differs from the curated label */
  uniprotName?: string;
  organism: string;
  reviewed: boolean;
  gene?: string;
  length: number;
  sequence: string;
  alphafold?: Omit<AlphaFoldModel, "sequence" | "start" | "end">;
  pdb?: { ids: string[]; total: number };
  note?: string;
};

async function main() {
  const entries: Record<string, Entry> = {};
  const failures: string[] = [];
  const warnings: string[] = [];

  for (const t of VERIFIED) {
    const problems: string[] = [];
    try {
      const u = await getUniProt(t.acc);

      if (u.acc !== t.acc) problems.push(`accession remapped ${t.acc} → ${u.acc}`);
      if (t.expectLength && u.length !== t.expectLength)
        problems.push(`length ${u.length}, expected ${t.expectLength}`);
      if (t.expectName && !u.proteinName.toLowerCase().includes(t.expectName.toLowerCase()))
        problems.push(`name "${u.proteinName}" does not contain "${t.expectName}"`);
      if (!u.sequence) problems.push("empty sequence");

      if (problems.length) {
        failures.push(`${t.id} (${t.acc}): ${problems.join("; ")}`);
        console.log(`  FAIL ${t.id.padEnd(30)} ${t.acc}`);
        continue;
      }

      const af = await getAlphaFold(t.acc);
      if (af && af.sequence && af.sequence !== u.sequence) {
        warnings.push(
          `${t.id} (${t.acc}): AlphaFold sequence differs from UniProt (${af.sequence.length} vs ${u.sequence.length} aa) — recorded without the model`,
        );
      }
      if (af && (af.start > 1 || (af.end && af.end < u.length))) {
        warnings.push(`${t.id} (${t.acc}): AlphaFold model covers only residues ${af.start}-${af.end}`);
      }

      const pdb = await getPdb(t.acc);

      const afNote = af && af.sequence === u.sequence ? af : null;
      entries[t.id] = {
        uniprot: u.acc,
        entryName: u.entryName,
        // The curated label is the displayed description: it is hand-written and
        // says what the protein is TO THIS TARGET, which UniProt's name often
        // does not (it is "Sulfotransferase" where the label says which one).
        // UniProt's name is kept alongside when it differs.
        proteinName: t.protein,
        ...(u.proteinName && u.proteinName !== t.protein ? { uniprotName: u.proteinName } : {}),
        organism: u.organism,
        reviewed: u.reviewed,
        ...(u.gene ? { gene: u.gene } : {}),
        length: u.length,
        sequence: u.sequence,
        ...(afNote
          ? {
              alphafold: {
                page: afNote.page,
                pdb: afNote.pdb,
                cif: afNote.cif,
                version: afNote.version,
                plddt: afNote.plddt,
                plddtVeryHigh: afNote.plddtVeryHigh,
              },
            }
          : {}),
        ...(pdb.ids.length ? { pdb } : {}),
        ...(t.note ? { note: t.note } : {}),
      };

      console.log(
        `  ok   ${t.id.padEnd(30)} ${u.acc.padEnd(11)} ${String(u.length).padStart(5)} aa  ` +
          `pdb=${String(pdb.total).padStart(4)}  af=${afNote ? `pLDDT ${afNote.plddt}` : "none"}`,
      );
    } catch (e) {
      failures.push(`${t.id} (${t.acc}): ${e instanceof Error ? e.message : String(e)}`);
      console.log(`  FAIL ${t.id.padEnd(30)} ${t.acc}`);
    }
    await new Promise((r) => setTimeout(r, 220));
  }

  if (failures.length) {
    console.log(`\n✗ ${failures.length} failed — NOT writing src/data/target-sequences.ts`);
    for (const f of failures) console.log(`  • ${f}`);
    process.exit(1);
  }

  const header = `/**
 * Protein sequences, PDB entries and AlphaFold models for the drug targets,
 * fetched by \`npm run fetch:targets\`.
 *
 * Do not hand-edit. Each entry records the UniProt accession it came from, and
 * the fetch re-asserts the protein name and sequence length before writing, so
 * a remapped or wrong accession fails the run rather than being published.
 *
 * AlphaFold file URLs are read from the AlphaFold API and are versioned by it
 * (currently v6); do not construct them by hand.
 *
 * LIMITATION, stated plainly: these are computationally predicted models, not
 * experimental structures. The pLDDT confidence is recorded per target because
 * a low-confidence region of a model should not be read like a solved structure.
 * Experimental structures, where they exist, are the PDB entries.
 *
 * Targets with no single protein to attach are listed in NO_SEQUENCE with the
 * reason. Model-organism stand-ins are deliberately not used.
 *
 * Generated file. Last fetched: ${new Date().toISOString().slice(0, 10)}.
 */

export type TargetSequence = {
  /** UniProt accession the sequence came from */
  uniprot: string;
  /** UniProt entry name, e.g. INHA_MYCTU */
  entryName: string;
  proteinName: string;
  /** UniProt's own name for the entry, when it differs from proteinName */
  uniprotName?: string;
  organism: string;
  /** true when the entry is in UniProtKB/Swiss-Prot (reviewed) */
  reviewed: boolean;
  gene?: string;
  length: number;
  /** The amino-acid sequence, one-letter code */
  sequence: string;
  /** AlphaFold predicted model, absent when AlphaFold has none for this entry */
  alphafold?: {
    page: string;
    /** Direct model download (PDB format) */
    pdb: string;
    cif: string;
    /** AlphaFold model version */
    version: number;
    /** Mean pLDDT over the model, 0-100; above 90 is confidently modelled */
    plddt: number;
    /** Fraction of residues with pLDDT above 90 */
    plddtVeryHigh: number;
  };
  /** Experimental structures in the PDB, and how many exist in total */
  pdb?: { ids: string[]; total: number };
  note?: string;
};

export const TARGET_SEQUENCES: Record<string, TargetSequence> = ${JSON.stringify(entries, null, 2)};

/** Targets with no single protein to attach, and why. */
export const NO_SEQUENCE: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(NO_SEQUENCE.map((n) => [n.id, n.reason])),
    null,
    2,
  )};

/**
 * Targets that ARE a single protein, but whose exact entry could not be
 * confirmed, so nothing is attached. The reason is shown on the page; the fix
 * (how to settle the accession) is recorded in scripts/target-accessions.ts.
 */
export const UNCONFIRMED: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(UNCONFIRMED.map((u) => [u.id, u.why])),
    null,
    2,
  )};
`;

  mkdirSync(join(process.cwd(), "src", "data"), { recursive: true });
  writeFileSync(TS_OUT, header);

  const withAf = Object.values(entries).filter((e) => e.alphafold).length;
  const withPdb = Object.values(entries).filter((e) => e.pdb).length;
  console.log(`\n✓ wrote ${Object.keys(entries).length} targets to src/data/target-sequences.ts`);
  console.log(`  ${withAf} have AlphaFold models, ${withPdb} have experimental PDB entries`);
  if (warnings.length) {
    console.log(`\n! ${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`  • ${w}`);
  }
}

main();
