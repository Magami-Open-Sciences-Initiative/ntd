/**
 * Curated UniProt accessions for the target records.
 *
 * Source of truth for `scripts/fetch-targets.ts`. Every accession here was
 * verified by hand against UniProt. Two traps this file exists to avoid:
 *
 *  1. TAXON LEVEL. Reviewed M. tuberculosis entries live under H37Rv (83332),
 *     NOT species M. tuberculosis (1773); P. falciparum under 3D7 (36329), not
 *     5833. Querying the species taxon silently returns arbitrary unreviewed
 *     strain variants — e.g. gene:inhA at 1773 gives Q4TUY1/M9TGV3, while the
 *     real InhA is P9WGR1 one taxon away.
 *  2. NAME MATCHING. Searching by protein name returns wrong proteins: dengue
 *     NS4B came back as a 3391 aa polyprotein, schistosome TGR as a plain
 *     thioredoxin reductase, the oxamniquine sulfotransferase as a heparan-
 *     sulfate enzyme. A wrong sequence is worse than no sequence.
 *
 * So: only `status: "verified"` is ever fetched, and the fetch re-asserts the
 * protein name and length before writing anything. A mismatch fails the fetch.
 *
 * HOW TO SETTLE AN UNSETTLED ACCESSION — use the PDB, not a name search. When a
 * report says "inhibitor X binds target Y", the structure deposited alongside it
 * names the exact protein: the entry's polymer entity carries the UniProt
 * accession, and its bound chemical components confirm the ligand. Six
 * independent CYP51/inhibitor complexes all cross-reference one accession, and
 * six oxamniquine complexes likewise — that is conclusive where name-matching is
 * not. `npm run verify:target --text "<query>"` does this, printing each entry's
 * accession, protein name and bound ligands. Where no structure exists (the
 * nitroreductase, the praziquantel channel) the accession has to come from the
 * paper itself, via the organism's locus name.
 */

export type VerifiedTarget = {
  /** Target record id in src/data/targets*.ts */
  id: string;
  /** UniProt primary accession — the thing that actually gets fetched */
  acc: string;
  /** What this protein is, in plain words, for the page */
  protein: string;
  /** Organism the sequence comes from — the NTD pathogen or vector itself */
  organism: string;
  /** Substring the UniProt protein name must contain (omit if the entry is unnamed) */
  expectName?: string;
  /** Exact length the fetched sequence must have */
  expectLength?: number;
  /** Anything a reader should know about provenance */
  note?: string;
};

export const VERIFIED: VerifiedTarget[] = [
  // --- Mycobacterium tuberculosis (H37Rv, taxid 83332) ---
  { id: "inha", acc: "P9WGR1", protein: "Enoyl-[acyl-carrier-protein] reductase InhA", organism: "Mycobacterium tuberculosis", expectName: "Enoyl-[acyl-carrier-protein] reductase", expectLength: 269 },
  { id: "dpre1", acc: "P9WJF1", protein: "Decaprenylphosphoryl-beta-D-ribose oxidase DprE1", organism: "Mycobacterium tuberculosis", expectName: "Decaprenylphosphoryl", expectLength: 461 },
  { id: "qcrb", acc: "P9WP37", protein: "Cytochrome bc1 complex cytochrome b subunit QcrB", organism: "Mycobacterium tuberculosis", expectName: "Cytochrome bc1 complex cytochrome b", expectLength: 549 },
  { id: "atp-synthase", acc: "P9WPS1", protein: "ATP synthase subunit c (AtpE)", organism: "Mycobacterium tuberculosis", expectName: "ATP synthase subunit c", expectLength: 81 },
  { id: "rna-polymerase", acc: "P9WGY9", protein: "DNA-directed RNA polymerase subunit beta (RpoB)", organism: "Mycobacterium tuberculosis", expectName: "DNA-directed RNA polymerase subunit beta", expectLength: 1178 },
  { id: "embb", acc: "P9WNL7", protein: "Probable arabinosyltransferase B (EmbB)", organism: "Mycobacterium tuberculosis", expectName: "arabinosyltransferase", expectLength: 1098 },
  { id: "ddn", acc: "P9WP15", protein: "Deazaflavin-dependent nitroreductase Ddn", organism: "Mycobacterium tuberculosis", expectName: "Deazaflavin-dependent nitroreductase", expectLength: 151 },
  { id: "pnca", acc: "I6XD65", protein: "Nicotinamidase/pyrazinamidase PncA", organism: "Mycobacterium tuberculosis", expectName: "Nicotinamidase/pyrazinamidase", expectLength: 186 },

  // --- Mycobacterium leprae ---
  { id: "dihydropteroate-synthase", acc: "P0C0X1", protein: "Dihydropteroate synthase FolP1", organism: "Mycobacterium leprae", expectName: "Dihydropteroate synthase", expectLength: 284 },

  // --- Treponema pallidum ---
  { id: "penicillin-binding-protein", acc: "Q5FAC7", protein: "Penicillin-binding protein 1A", organism: "Treponema pallidum", expectName: "Penicillin-binding protein 1A", note: "from strain SS14; the Nichols reference strain carries the homologous TP_0574" },

  // --- Trypanosoma cruzi ---
  { id: "cruzain", acc: "P25779", protein: "Cruzain (cruzipain), cathepsin L-like cysteine protease", organism: "Trypanosoma cruzi", expectName: "Cruzipain", expectLength: 467 },
  { id: "trypanothione-reductase", acc: "P28593", protein: "Trypanothione reductase", organism: "Trypanosoma cruzi", expectName: "Trypanothione reductase", expectLength: 492 },
  { id: "cyp51", acc: "Q7Z1V1", protein: "Sterol 14-alpha demethylase (CYP51)", organism: "Trypanosoma cruzi", expectName: "Sterol 14", expectLength: 481, note: "settled by the PDB: six inhibitor-complex structures (3KSW, 3ZG2, 3ZG3, 4CK8, 4CK9, 4CKA) all cross-reference this accession, which is 99.6% identical to the other T. cruzi CYP51 entry" },

  // --- Trypanosoma brucei ---
  { id: "ornithine-decarboxylase", acc: "P07805", protein: "Ornithine decarboxylase (ODC)", organism: "Trypanosoma brucei", expectName: "Ornithine decarboxylase", expectLength: 423 },

  // --- Leishmania major ---
  { id: "nmt", acc: "Q4Q5S8", protein: "Glycylpeptide N-tetradecanoyltransferase (N-myristoyltransferase)", organism: "Leishmania major", expectName: "N-tetradecanoyltransferase", expectLength: 421 },

  // --- Schistosoma mansoni ---
  { id: "schistosome-tgr", acc: "Q962Y6", protein: "Thioredoxin glutathione reductase (TGR)", organism: "Schistosoma mansoni", expectName: "thioredoxin-disulfide reductase", expectLength: 598, note: "a selenoprotein fusion of thioredoxin reductase and glutaredoxin domains; the crystal structures use the 630 aa precursor A0A3Q0KFL1, which differs only by a 34-residue signal peptide" },
  { id: "schistosome-hdac8", acc: "A5H660", protein: "Histone deacetylase 8 (SmHDAC8)", organism: "Schistosoma mansoni", expectName: "histone deacetylase", expectLength: 440 },
  { id: "schistosome-sulfotransferase", acc: "G4VLE5", protein: "Sulfotransferase (the oxamniquine-activating enzyme)", organism: "Schistosoma mansoni", expectLength: 257, note: "settled by the PDB: six oxamniquine-complex structures (5BYJ, 5BYK, 6B4X, 6B4Y, 6B4Z, 6B50) all cross-reference this accession; the UniProt entry is unnamed, and the PDB names it the oxamniquine resistance protein" },

  // --- Onchocerca volvulus ---
  { id: "beta-tubulin", acc: "A0A8R1TPS6", protein: "Tubulin beta chain", organism: "Onchocerca volvulus", expectName: "Tubulin beta", expectLength: 444 },

  // --- Plasmodium falciparum (3D7, taxid 36329) ---
  { id: "pfatp4", acc: "A0A143ZZK9", protein: "P-type sodium-transporting ATPase 4 (PfATP4)", organism: "Plasmodium falciparum", expectName: "sodium-transporting ATPase", expectLength: 1264 },
  { id: "pfkelch13", acc: "Q8IDQ2", protein: "Kelch protein K13 (artemisinin resistance marker)", organism: "Plasmodium falciparum", expectLength: 726, note: "the entry is unnamed in UniProt; identified by locus PF3D7_1343700" },

  // --- Anopheles gambiae (the vector itself, not a stand-in) ---
  { id: "insect-sodium-channel", acc: "A0A1Y9HT44", protein: "Voltage-gated sodium channel, para-type", organism: "Anopheles gambiae", expectName: "Sodium channel", expectLength: 2128 },
  { id: "insect-acetylcholinesterase", acc: "Q869C3", protein: "Acetylcholinesterase (ace-1, the insecticide-resistance locus)", organism: "Anopheles gambiae", expectName: "Acetylcholinesterase", expectLength: 737 },

  // --- Zaire ebolavirus ---
  { id: "ebola-glycoprotein", acc: "Q05320", protein: "Envelope glycoprotein GP", organism: "Zaire ebolavirus", expectName: "Envelope glycoprotein", expectLength: 676, note: "Mayinga reference strain" },
];

/**
 * Resolved as single proteins, but the specific entry could NOT be confirmed.
 * Not fetched. Neither has a PDB structure, so the cross-reference method that
 * settled CYP51 and the sulfotransferase cannot be used; each needs its
 * accession taken from the paper that identified the target.
 */
export const UNCONFIRMED: { id: string; why: string; how: string }[] = [
  {
    id: "schistosome-trp-channel",
    why: "no PDB structure exists for the praziquantel-binding channel, and two S. mansoni TRP-channel paralogs (1150 and 1201 aa) are annotated, so annotation alone cannot say which one PZQ binds",
    how: "map the gene from the report that identified it (Park et al. 2023) to a UniProt accession via its S. mansoni locus name (Smp_...), then read back the entry name and length",
  },
  {
    id: "trypanosome-nitroreductase",
    why: "no PDB structure for a trypanosome nitroreductase; and the record may conflate two organisms — fexinidazole is activated by the T. brucei enzyme, benznidazole by the T. cruzi one",
    how: "settle the organism first, then take the accession from the paper that identified the prodrug activator (Baker/Wilkinson groups) and read back the entry name and length",
  },
  {
    id: "tc-cpsf3",
    why: "UniProt annotates only other cleavage-and-polyadenylation subunits (2, 5, 30 kDa) plus unnamed putatives for T. cruzi — no entry identifiable as the AN2-502998-bound CPSF3 orthologue",
    how: "take the accession from the AN2/DNDi development papers via the TriTrypDB locus of the T. cruzi CPSF3 orthologue (cf. T. brucei Tb927.4.1340), then read back the entry name and length",
  },
  {
    id: "tc-topoisomerase-ii",
    why: "several T. cruzi topoisomerase II paralogs are annotated (reviewed P30190 plus strain-specific TrEMBL entries) and the IID432 paper models on human TOP2A (PDB 5GWK), so the bound isoform is not pinned to an accession",
    how: "take the isoform from the IID432 discovery paper (René et al., J Med Chem 2026) via its TriTrypDB locus, then read back the entry name and length",
  },
  {
    id: "tc-impdh",
    why: "two identical-length CL Brener alleles (Q4DM82, Q4CUG6) plus strain variants; the repurposing paper (Lobo-Rojas et al. 2026) names no accession",
    how: "take the accession from the paper's methods via its TriTrypDB locus, then read back the entry name and length",
  },
  {
    id: "tc-lysrs",
    why: "the chromene-inhibitor paper reports work in the Dm28c strain without naming a UniProt accession",
    how: "take the accession from the paper (2026, PMC13576447) via its TriTrypDB locus for the Dm28c LysRS, then read back the entry name and length",
  },
  {
    id: "chikv-nsp2",
    why: "nsP2 is a cleavage product of the P1234 polyprotein (reviewed Q8JUX6/Q5XXP4, 2474 aa) with no standalone UniProt entry; the protease domain structure PDB 4ZTB exists",
    how: "no fetch possible until UniProt annotates mature-chain accessions; if that happens, take the nsP2 mature chain of the S27-African reference strain via its locus and read back the entry name and length",
  },
  {
    id: "fasciola-cathepsin-l",
    why: "the reviewed Q09093 is a 20-aa fragment and the TrEMBL entries are unnamed fragments of 166-326 aa, so annotation alone cannot pin the vaccine antigen to an accession",
    how: "take the accession from the Dalton-group cathepsin-L vaccine papers via its GenBank/locus identifier, then read back the entry name and length",
  },
];

/**
 * No single protein to attach. Either not a protein at all, or UniProt has no
 * usable standalone entry for it. These get an explanatory note on the page.
 * No model-organism stand-ins, by decision.
 */
export const NO_SEQUENCE: { id: string; reason: string }[] = [
  // not a protein
  { id: "haem-detoxification", reason: "a biochemical process, not a protein" },
  { id: "artemisinin-activation", reason: "a mechanism of action, not a protein" },
  { id: "bacterial-ribosome", reason: "a multi-subunit complex, not a single protein" },
  { id: "parasite-ribosome", reason: "a multi-subunit complex, not a single protein" },
  { id: "parasite-proteasome", reason: "a multi-subunit complex, not a single protein" },
  { id: "ergosterol", reason: "a membrane lipid, not a protein" },
  { id: "venom-toxins", reason: "a mixture of peptides, not one protein" },
  { id: "wolbachia", reason: "a bacterial endosymbiont, not a protein" },
  { id: "fungal-dhodh", reason: "no Madurella mycetomatis dihydroorotate dehydrogenase entry exists" },
  { id: "glucl", reason: "characterised in C. elegans, a model organism rather than the NTD worm" },
  { id: "slo-1", reason: "characterised in C. elegans, a model organism rather than the NTD worm" },
  { id: "nematode-nachr", reason: "characterised in C. elegans, a model organism rather than the NTD worm" },
  // no usable standalone entry
  { id: "dengue-ns5", reason: "the DENV2 proteome is annotated as one polyprotein (P07564); the mature NS5 is a cleavage product with no full-length standalone entry" },
  { id: "dengue-ns4b", reason: "as above — NS4B exists only within the DENV2 polyprotein P07564" },
  { id: "dengue-protease", reason: "as above — NS3 exists only within the DENV2 polyprotein P07564; the standalone hits are partial constructs" },
  { id: "rabies-glycoprotein", reason: "only unreviewed strain variants are deposited; a reference strain would have to be chosen arbitrarily" },
  { id: "chikungunya-glycoprotein", reason: "only 172 aa E1 fragments and an unreviewed nonstructural polyprotein are deposited" },
  { id: "cpsf3", reason: "no T. brucei CPSF3 entry is available to check against" },
  { id: "pfor", reason: "no reviewed pyruvate:ferredoxin oxidoreductase entry exists, and the NTD-relevant organism is unsettled" },
];
