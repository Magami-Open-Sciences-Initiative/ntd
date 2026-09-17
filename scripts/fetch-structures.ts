/**
 * Fetch small-molecule structures from PubChem and write `src/data/structures.ts`.
 *
 * Structures are fetched rather than hand-written: an incorrect SMILES is worse
 * than no SMILES. Each entry records the PubChem CID it came from so it can be
 * re-checked. Biologics and vaccines have no small-molecule structure and are
 * listed separately with the reason.
 *
 * Usage: npm run fetch:structures
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PUG = "https://pubchem.ncbi.nlm.nih.gov/rest/pug";
const OUT_DIR = join(process.cwd(), "public", "structures");
const TS_OUT = join(process.cwd(), "src", "data", "structures.ts");

type Spec = { id: string; query?: string; cid?: number; note?: string };

/** Drugs with a defined small-molecule structure. */
const SPECS: Spec[] = [
  { id: "praziquantel", query: "Praziquantel" },
  { id: "arpraziquantel", query: "Arpraziquantel", note: "The (R)-enantiomer of praziquantel, developed as a paediatric dispersible tablet. It shares a connectivity SMILES with praziquantel and differs only in configuration, which the structure image shows." },
  { id: "oxamniquine", query: "Oxamniquine" },
  { id: "triclabendazole", query: "Triclabendazole" },
  { id: "ivermectin", cid: 6321424, note: "Structure shown is ivermectin B1a, the major component; the drug is a mixture of B1a and B1b." },
  { id: "moxidectin", query: "Moxidectin" },
  { id: "emodepside", query: "Emodepside" },
  { id: "albendazole", query: "Albendazole" },
  { id: "mebendazole", query: "Mebendazole" },
  { id: "tribendimidine", query: "Tribendimidine" },
  { id: "oxfendazole", query: "Oxfendazole" },
  { id: "diethylcarbamazine", query: "Diethylcarbamazine" },
  { id: "doxycycline", query: "Doxycycline" },
  { id: "benznidazole", query: "Benznidazole" },
  { id: "nifurtimox", query: "Nifurtimox" },
  { id: "fexinidazole", query: "Fexinidazole" },
  { id: "acoziborole", query: "Acoziborole" },
  { id: "eflornithine", query: "Eflornithine" },
  { id: "pentamidine", query: "Pentamidine" },
  { id: "suramin", query: "Suramin" },
  { id: "melarsoprol", query: "Melarsoprol" },
  { id: "miltefosine", query: "Miltefosine" },
  { id: "liposomal-amphotericin-b", query: "Amphotericin B", note: "The structure shown is amphotericin B; the product is the drug packaged in liposomes." },
  { id: "paromomycin", query: "Paromomycin" },
  { id: "antimonials", query: "Sodium stibogluconate", note: "Structure shown is sodium stibogluconate, the most widely used pentavalent antimonial." },
  { id: "dapsone", query: "Dapsone" },
  { id: "rifampicin", query: "Rifampicin" },
  { id: "clofazimine", query: "Clofazimine" },
  { id: "azithromycin", query: "Azithromycin" },
  { id: "benzathine-penicillin", query: "Benzathine benzylpenicillin" },
  { id: "permethrin", query: "Permethrin" },
  { id: "nitazoxanide", query: "Nitazoxanide" },
  { id: "lxe408", query: "LXE408" },
  { id: "bedaquiline", query: "Bedaquiline" },
  { id: "telacebec", query: "Telacebec" },
  { id: "mosnodenvir", query: "Mosnodenvir" },
  { id: "fosravuconazole", query: "Fosravuconazole" },
  { id: "olorofim", query: "Olorofim" },
  { id: "artesunate", query: "Artesunate" },
  {
    id: "artemether-lumefantrine",
    query: "Artemether",
    note: "Structure shown is artemether, the fast-acting component; the combination also contains lumefantrine (PubChem CID 6437380).",
  },
  { id: "primaquine", query: "Primaquine" },
  { id: "tafenoquine", query: "Tafenoquine" },
  { id: "chloroquine", query: "Chloroquine" },
  { id: "isoniazid", query: "Isoniazid" },
  { id: "pyrazinamide", query: "Pyrazinamide" },
  { id: "ethambutol", query: "Ethambutol" },
  { id: "pretomanid", query: "Pretomanid" },
  { id: "linezolid", query: "Linezolid" },
];

/** No small-molecule structure exists — record why rather than leaving a gap. */
const NO_STRUCTURE: Record<string, string> = {
  "snake-antivenom": "Not a single molecule: a polyclonal mixture of antibodies purified from the plasma of immunised animals.",
  "rabies-postexposure-prophylaxis": "Not a single molecule: an inactivated virus vaccine given with human rabies immunoglobulin.",
  ixchiq: "Not a single molecule: a live-attenuated chikungunya virus vaccine.",
  ansuvimab: "Not a small molecule: a monoclonal antibody, a protein of about 1,400 amino acids.",
};

type Entry = {
  cid: number;
  formula: string;
  weight: string;
  smiles: string;
  image: string;
  pubchem: string;
  note?: string;
};

async function getProperties(spec: Spec) {
  const key = spec.cid ? `cid/${spec.cid}` : `name/${encodeURIComponent(spec.query!)}`;
  const url = `${PUG}/compound/${key}/property/ConnectivitySMILES,IsomericSMILES,MolecularFormula,MolecularWeight/JSON`;
  const res = await fetch(url, { headers: { "user-agent": "MagamiNTD/1.0 (structure fetch)" } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const json = (await res.json()) as {
    PropertyTable: { Properties: Record<string, string | number>[] };
  };
  return json.PropertyTable.Properties[0];
}

async function getImage(cid: number) {
  const url = `${PUG}/compound/cid/${cid}/PNG?record_type=2d&image_size=400x400`;
  const res = await fetch(url, { headers: { "user-agent": "MagamiNTD/1.0 (structure fetch)" } });
  if (!res.ok) throw new Error(`image ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.byteLength < 500) throw new Error("image suspiciously small");
  writeFileSync(join(OUT_DIR, `${cid}.png`), buf);
  return buf.byteLength;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const entries: Record<string, Entry> = {};
  const failures: string[] = [];

  for (const spec of SPECS) {
    try {
      const p = await getProperties(spec);
      const cid = Number(p.CID);
      const bytes = await getImage(cid);
      entries[spec.id] = {
        cid,
        formula: String(p.MolecularFormula ?? ""),
        weight: String(p.MolecularWeight ?? ""),
        smiles: String(p.ConnectivitySMILES ?? ""),
          image: `/structures/${cid}.png`,
        pubchem: `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`,
        ...(spec.note ? { note: spec.note } : {}),
      };
      console.log(`  ok   ${spec.id.padEnd(28)} cid=${String(cid).padEnd(10)} ${bytes} bytes`);
    } catch (e) {
      failures.push(`${spec.id}: ${e instanceof Error ? e.message : String(e)}`);
      console.log(`  FAIL ${spec.id}`);
    }
    await new Promise((r) => setTimeout(r, 220));
  }

  const header = `/**
   * Small-molecule structures, fetched from PubChem by \`npm run fetch:structures\`.
   *
   * Do not hand-edit the SMILES: each entry records the PubChem CID it came from
   * so it can be re-fetched and checked.
   *
   * LIMITATION, stated plainly: PubChem's REST endpoint returns connectivity
   * SMILES only, with no stereochemistry. Two enantiomers therefore produce
   * identical strings here - praziquantel and arpraziquantel are the case in
   * point - and the 2D structure image is what carries the configuration. Do
   * not treat smiles as a stereochemical identifier.
   *
   * Compounds with no small-molecule structure are listed in NO_STRUCTURE.
   *
   * Generated file. Last fetched: ${new Date().toISOString().slice(0, 10)}.
   */

  export type Structure = {
    cid: number;
    formula: string;
    weight: string;
    smiles: string;
      image: string;
    pubchem: string;
    note?: string;
  };

  export const STRUCTURES: Record<string, Structure> = ${JSON.stringify(entries, null, 2)};

  /** Drugs with no small-molecule structure, and why. */
  export const NO_STRUCTURE: Record<string, string> = ${JSON.stringify(NO_STRUCTURE, null, 2)};
  `;

  writeFileSync(TS_OUT, header);

  console.log(`\n✓ wrote ${Object.keys(entries).length} structures to src/data/structures.ts`);
  console.log(`✓ wrote ${Object.keys(entries).length} images to public/structures/`);
  if (failures.length) {
    console.log(`\n✗ ${failures.length} failed:`);
    for (const f of failures) console.log(`  • ${f}`);
    process.exit(1);
  }
}

main();
