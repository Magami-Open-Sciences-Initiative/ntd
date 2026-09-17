/**
 * Second discovery pass: settle the 8 "candidate" accessions and resolve the
 * 12 "unresolved" ones from scripts/target-accessions.ts.
 *
 * Two strategies, cheapest first:
 *   "id"     — exact entry-name lookup (id:INHA_MYCTU). Fails SAFE: a wrong
 *              name returns nothing, never a false match. Preferred.
 *   "search" — name + strain-level taxid. Unreliable on its own, so every hit is
 *              printed with its length, which is checked against the known size
 *              of the protein.
 *
 * Usage: npx tsx scripts/find-targets.ts
 */

type Lookup = { id: string; strategy: "id" | "search"; q: string; taxid?: number; expect: string; aa?: string };

const LOOKUPS: Lookup[] = [
  // ---- candidates to settle ----
  { id: "pnca", strategy: "id", q: "PNCA_MYCTU", expect: "PncA nicotinamidase/pyrazinamidase", aa: "186" },
  { id: "pnca", strategy: "search", q: "gene:pncA", taxid: 83332, expect: "PncA (fallback)", aa: "186" },
  { id: "nmt", strategy: "search", q: "N-myristoyltransferase", taxid: 5664, expect: "NMT L. major", aa: "421" },
  { id: "ornithine-decarboxylase", strategy: "id", q: "DCOR_TRYBB", expect: "ODC T. brucei", aa: "468" },
  { id: "trypanosome-nitroreductase", strategy: "search", q: "nitroreductase", taxid: 5693, expect: "NTR T. cruzi", aa: "~205" },
  { id: "schistosome-hdac8", strategy: "search", q: "histone deacetylase 8", taxid: 6183, expect: "SmHDAC8", aa: "440" },
  { id: "schistosome-tgr", strategy: "search", q: "thioredoxin glutathione reductase", taxid: 6183, expect: "TGR fusion", aa: "~600" },
  { id: "schistosome-sulfotransferase", strategy: "search", q: "sulfotransferase", taxid: 6183, expect: "oxamniquine SULT", aa: "257" },

  // ---- unresolved ----
  { id: "penicillin-binding-protein", strategy: "search", q: "penicillin-binding protein", taxid: 160, expect: "PBP T. pallidum", aa: "600+" },
  { id: "penicillin-binding-protein", strategy: "id", q: "PBP1_TREPA", expect: "PBP1 T. pallidum (exact name)", aa: "600+" },
  { id: "cpsf3", strategy: "search", q: "CPSF3", taxid: 5691, expect: "CPSF3 T. brucei", aa: "~460" },
  { id: "cpsf3", strategy: "search", q: "cleavage and polyadenylation specificity factor subunit 3", taxid: 5691, expect: "CPSF3 (fallback)" },
  { id: "pfatp4", strategy: "search", q: "gene:PF3D7_1211900", taxid: 36329, expect: "PfATP4 3D7", aa: "~1400" },
  { id: "pfatp4", strategy: "id", q: "ATN1_PLAF7", expect: "PfATP4 3D7 (exact name)", aa: "~1400" },

  // dengue: mature proteins, not the polyprotein. Expected sizes are the check.
  { id: "dengue-ns5", strategy: "search", q: "gene:NS5", taxid: 11060, expect: "DENV2 NS5 full", aa: "~900" },
  { id: "dengue-ns4b", strategy: "search", q: "gene:NS4B", taxid: 11060, expect: "DENV2 NS4B", aa: "~248" },
  { id: "dengue-protease", strategy: "search", q: "gene:NS3", taxid: 11060, expect: "DENV2 NS3 (protease+helicase)", aa: "~618" },
  { id: "dengue-ns5", strategy: "id", q: "POLG_DEN2J", expect: "DENV2 polyprotein (reviewed reference)", aa: "3391" },

  { id: "rabies-glycoprotein", strategy: "search", q: "glycoprotein", taxid: 11292, expect: "Rabies G", aa: "524" },
  { id: "rabies-glycoprotein", strategy: "id", q: "GLYC_RABVP", expect: "Rabies G Pasteur (exact name)", aa: "524" },
  { id: "ebola-glycoprotein", strategy: "id", q: "VGP_EBOZM", expect: "EBOV GP Zaire Mayinga (reviewed)", aa: "676" },
  { id: "chikungunya-glycoprotein", strategy: "search", q: "E1 envelope protein", taxid: 37124, expect: "CHIKV E1", aa: "~435" },
  { id: "chikungunya-glycoprotein", strategy: "search", q: "structural polyprotein", taxid: 37124, expect: "CHIKV structural polyprotein", aa: "~1248" },

  { id: "insect-acetylcholinesterase", strategy: "search", q: "acetylcholinesterase", taxid: 7165, expect: "An. gambiae ace-1", aa: "~700" },
  { id: "pfor", strategy: "search", q: "pyruvate:ferredoxin oxidoreductase", taxid: 5911, expect: "PFOR (nitazoxanide target organism TBD)" },
];

function describe(r: Record<string, unknown>) {
  const pd = r.proteinDescription as Record<string, unknown> | undefined;
  const rec = (pd?.recommendedName as Record<string, unknown> | undefined)?.fullName as { value?: string } | undefined;
  const sub = pd?.submissionNames as { fullName?: { value?: string } }[] | undefined;
  const name = rec?.value ?? sub?.[0]?.fullName?.value ?? "(unnamed)";
  const org = (r.organism as { scientificName?: string } | undefined)?.scientificName ?? "?";
  const seq = r.sequence as { length?: number } | undefined;
  const reviewed = String(r.entryType ?? "").includes("reviewed (Swiss-Prot)") ? "reviewed" : "unreviewed";
  return `${r.primaryAccession} | ${String(r.uniProtkbId ?? "")} | ${name.slice(0, 46)} | ${org.slice(0, 22)} | ${seq?.length ?? "?"} aa | ${reviewed}`;
}

async function run(l: Lookup) {
  const url =
    l.strategy === "id"
      ? `https://rest.uniprot.org/uniprotkb/search?query=${encodeURIComponent("id:" + l.q)}&format=json&size=3`
      : `https://rest.uniprot.org/uniprotkb/search?query=${encodeURIComponent(l.q)}${l.taxid ? `+AND+organism_id:${l.taxid}` : ""}&format=json&size=3`;
  const res = await fetch(url, { headers: { "user-agent": "MagamiNTD/1.0 (target lookup)" } });
  const json = (await res.json()) as { results?: Record<string, unknown>[] };
  const label = l.strategy === "id" ? `id:${l.q}` : `${l.q}${l.taxid ? ` [${l.taxid}]` : ""}`;
  console.log(`\n### ${l.id}  — expect ${l.expect}${l.aa ? `, ~${l.aa} aa` : ""}`);
  console.log(`    ${label}`);
  const rs = json.results ?? [];
  if (!rs.length) console.log("    (none)");
  for (const r of rs) console.log("  " + describe(r));
}

async function main() {
  for (const l of LOOKUPS) {
    try {
      await run(l);
    } catch (e) {
      console.log(`\n### ${l.id}\n    ERROR ${(e as Error).message}`);
    }
    await new Promise((r) => setTimeout(r, 200));
  }
}

main();

export {};
