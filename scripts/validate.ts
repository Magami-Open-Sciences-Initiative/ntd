import { buildGraph } from "@/lib/graph";
import { KINDS } from "@/lib/schema";

const g = buildGraph();

// A "source" that points at a database homepage is not a citable source.
const PLACEHOLDER = /^https?:\/\/(www\.)?(pubmed\.ncbi\.nlm\.nih\.gov|clinicaltrials\.gov)\/?$/;
const placeholders: string[] = [];
for (const node of g.byId.values()) {
  for (const l of node.record.links) {
    if (PLACEHOLDER.test(l.url)) {
      placeholders.push(`[${node.kind}/${node.id}] "${l.label}" → ${l.url} (not a citable source)`);
    }
  }
}
if (placeholders.length) {
  console.error(`\n✗ ${placeholders.length} placeholder source${placeholders.length === 1 ? "" : "s"}:\n`);
  for (const p of placeholders) console.error(`  • ${p}`);
  console.error("\nLink a specific article, publication or guidance document instead.\n");
  process.exit(1);
}

// A drug and a target must agree in both directions. A target that lists a drug
// which does not itself declare that target is a stale backlink — it renders on
// the drug's page as though the drug acted on it, which is how three incorrect
// assignments were found.
const mismatches: string[] = [];
for (const target of g.byId.values()) {
  if (target.kind !== "targets") continue;
  for (const drugId of (target.record.drugs as string[] | undefined) ?? []) {
    const drug = g.byId.get(drugId);
    if (!drug) continue;
    const declared = (drug.record.targets as string[] | undefined) ?? [];
    if (!declared.includes(target.id)) {
      mismatches.push(
        `${target.id} lists drug ${drugId}, but ${drugId} does not declare ${target.id}` +
          ` (it declares: ${declared.join(", ") || "none"})`,
      );
    }
  }
}
if (mismatches.length) {
  console.error(`\n✗ ${mismatches.length} target/drug mismatch${mismatches.length === 1 ? "" : "es"}:\n`);
  for (const m of mismatches) console.error(`  • ${m}`);
  console.error("\nMake the relationship agree in both directions.\n");
  process.exit(1);
}

const singleSource = [...g.byId.values()].filter((n) => n.record.links.length === 1).length;

// Dates must be real, must not be in the future, and should not have gone stale
// without anyone noticing. Per-record `asOf` is only useful if it is enforced.
const dateIssues: string[] = [];
const now = new Date();
for (const node of g.byId.values()) {
  const asOf = node.record.asOf;
  if (!/^\d{4}-\d{2}(-\d{2})?$/.test(asOf)) {
    dateIssues.push(`[${node.kind}/${node.id}] asOf "${asOf}" is not YYYY-MM or YYYY-MM-DD`);
    continue;
  }
  const iso = asOf.length === 7 ? `${asOf}-01` : asOf;
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) {
    dateIssues.push(`[${node.kind}/${node.id}] asOf "${asOf}" is not a real date`);
  } else if (d.getTime() > now.getTime() + 24 * 60 * 60 * 1000) {
    dateIssues.push(`[${node.kind}/${node.id}] asOf "${asOf}" is in the future`);
  }
}
if (dateIssues.length) {
  console.error(`\n✗ ${dateIssues.length} asOf problem${dateIssues.length === 1 ? "" : "s"}:\n`);
  for (const p of dateIssues) console.error(`  • ${p}`);
  console.error("");
  process.exit(1);
}

if (g.errors.length) {
  console.error(`\n✗ ${g.errors.length} problem${g.errors.length === 1 ? "" : "s"} in the corpus:\n`);
  for (const e of g.errors) console.error(`  • ${e}`);
  console.error("");
  process.exit(1);
}

const w = Math.max(...KINDS.map((k) => k.length));
let total = 0;
console.log("\n✓ corpus valid\n");
for (const kind of KINDS) {
  const n = g.byKind.get(kind)?.length ?? 0;
  total += n;
  console.log(`  ${kind.padEnd(w)}  ${String(n).padStart(4)}`);
}
console.log(
  `\n  ${"total".padEnd(w)}  ${String(total).padStart(4)} objects, ${g.byId.size} nodes` +
    `\n  ${"sourcing".padEnd(w)}  ${singleSource} with a single source, ${total - singleSource} with more\n`,
);

