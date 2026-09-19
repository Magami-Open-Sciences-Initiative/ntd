/**
 * Economics × equity analysis over the corpus.
 *
 * Joins countries → the diseases they carry → the interventions those diseases
 * use, using the equity flags added in `implementation-economics.ts`, to answer
 * questions prose cannot: where do a coverage gap and a security constraint
 * coincide, and are the interventions used there adapted to the setting?
 *
 *   npx tsx scripts/equity-analysis.ts
 *   npx tsx scripts/equity-analysis.ts --query gender
 *   npx tsx scripts/equity-analysis.ts --query disability
 *   npx tsx scripts/equity-analysis.ts --country dr-congo
 *   npx tsx scripts/equity-analysis.ts --json
 *
 * Flags: on a country, coverageGap / conflictAffected / genderInequality /
 * disabilityGap are deficits. On an intervention, conflictAdapted /
 * genderResponsive / disabilityInclusive are mitigations.
 */

import { buildGraph, type Node } from "@/lib/graph";

type Rec = Record<string, unknown>;

const QUERIES: Record<string, { country: string; mitigation: string }> = {
  security: { country: "conflictAffected", mitigation: "conflictAdapted" },
  coverage: { country: "coverageGap", mitigation: "conflictAdapted" },
  gender: { country: "genderInequality", mitigation: "genderResponsive" },
  disability: { country: "disabilityGap", mitigation: "disabilityInclusive" },
};

type G = ReturnType<typeof buildGraph>;

const flags = (g: G, id: string): Rec => ((g.byId.get(id)?.record as Rec)?.equity as Rec) ?? {};
const refs = (n: Node | undefined, key: string): string[] => {
  const v = (n?.record as Rec)?.[key];
  return Array.isArray(v) ? (v as string[]) : [];
};
const nameOf = (g: G, id: string): string => g.byId.get(id)?.name ?? id;

function main(): number {
  const args = process.argv.slice(2);
  const json = args.includes("--json");
  const countryFilter = args.includes("--country") ? args[args.indexOf("--country") + 1] : "";
  const queryArg = args.includes("--query") ? args[args.indexOf("--query") + 1] : "security";
  const spec = QUERIES[queryArg] ?? QUERIES.security;

  const g = buildGraph();
  const countries = [...g.byId.values()].filter((n) => n.kind === "countries");
  const flagged = countries.filter(
    (c) => flags(g, c.id).coverageGap === true && flags(g, c.id)[spec.country] === true,
  );

  const rows: {
    country: string;
    name: string;
    region: string;
    flags: string[];
    note: string;
    diseases: {
      id: string;
      name: string;
      interventions: { id: string; name: string; adapted: boolean }[];
      costs: { cost: string; per: string; intervention: string }[];
    }[];
  }[] = [];

  for (const c of flagged) {
    if (countryFilter && c.id !== countryFilter) continue;
    const e = flags(g, c.id);
    const row = {
      country: c.id,
      name: c.name,
      region: String((c.record as Rec).region ?? ""),
      flags: Object.entries(e).filter(([, v]) => v === true).map(([k]) => k),
      note: String(e.note ?? ""),
      diseases: [] as {
        id: string;
        name: string;
        interventions: { id: string; name: string; adapted: boolean }[];
        costs: { cost: string; per: string; intervention: string }[];
      }[],
    };
    for (const did of refs(c, "diseases")) {
      const d = g.byId.get(did);
      if (!d || d.kind !== "diseases") continue;
      const interventions = refs(d, "technologies").map((t) => ({
        id: t,
        name: nameOf(g, t),
        adapted: flags(g, t)[spec.mitigation] === true,
      }));
      const costs = (((d.record as Rec).costs as Rec[]) ?? []).map((x) => ({
        cost: String(x.cost ?? ""),
        per: String(x.per ?? ""),
        intervention: String(x.intervention ?? ""),
      }));
      row.diseases.push({ id: did, name: d.name, interventions, costs });
    }
    rows.push(row);
  }

  const unadapted = rows.flatMap((r) =>
    r.diseases
      .filter((d) => d.interventions.length > 0 && !d.interventions.some((i) => i.adapted))
      .map((d) => ({ country: r.country, countryName: r.name, disease: d.name })),
  );

  const withCosts = rows.flatMap((r) =>
    r.diseases.filter((d) => d.costs.length).map((d) => ({ country: r.country, disease: d.name, costs: d.costs })),
  );

  if (json) {
    console.log(
      JSON.stringify(
        { query: queryArg, countryFlag: spec.country, mitigation: spec.mitigation, countries: rows, unadapted, withCosts },
        null,
        2,
      ),
    );
    return 0;
  }

  console.log(`\nEquity × ${queryArg} overlap`);
  console.log("=".repeat(64));
  console.log(`Countries with coverageGap AND ${spec.country}: ${rows.length}`);
  console.log(`Mitigation checked on interventions: ${spec.mitigation}\n`);

  for (const r of rows) {
    console.log(`● ${r.name} (${r.country}) — ${r.region} [${r.flags.join(", ")}]`);
    if (r.note) console.log(`    ${r.note}`);
    for (const d of r.diseases) {
      if (!d.interventions.length) continue;
      const adapted = d.interventions.filter((i) => i.adapted).map((i) => i.name);
      const mark = adapted.length ? `adapted: ${adapted.join(", ")}` : "NO mitigation";
      console.log(`    – ${d.name}: ${mark}`);
    }
    console.log("");
  }

  console.log("Unadapted country–disease pairs (delivery-design gaps):");
  if (!unadapted.length) console.log("  (none)");
  for (const u of unadapted) console.log(`  ${u.countryName} → ${u.disease}`);

  if (withCosts.length) {
    console.log("\nCost context:");
    for (const w of withCosts)
      for (const c of w.costs) console.log(`  ${w.country} · ${w.disease}: ${c.cost} ${c.per} — ${c.intervention}`);
  }
  return 0;
}

process.exit(main());
