import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { allNodes } from "@/lib/graph";
import { KINDS, KIND_META } from "@/lib/schema";
import { SITE } from "@/lib/nav";

const OUT = join(process.cwd(), "public");
mkdirSync(OUT, { recursive: true });
const base = SITE.url.replace(/\/$/, "");

// --- llms.txt: a short, curated map for language models -------------------
const counts = Object.fromEntries(
  KINDS.map((k) => [k, allNodes().filter((n) => n.kind === k).length]),
);

const llms = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a project of ${SITE.parent} (${SITE.parentUrl}). It is ${allNodes().length} linked
objects across ${KINDS.length} kinds, generated from an open corpus. Every object has a plain-English
TL;DR, a longer summary, the date it was last checked, and at least one primary source.

Work in progress: content is being built and checked in the open and may be incomplete, out of date
or wrong. Verify anything that matters at its primary source. Nothing here is medical advice.

## Machine-readable access
- Full corpus digest: ${base}/llms-full.txt
- JSON API index: ${base}/api/v1/index.json
- Per-kind lists: ${base}/api/v1/<kind>.json
- Per-object records: ${base}/api/v1/<kind>/<id>.json

## Kinds
${KINDS.map((k) => `- ${KIND_META[k].plural} (${counts[k]}): ${base}/${k}/ — ${KIND_META[k].blurb}`).join("\n")}

## Licence
Code: ${SITE.licenceCode}. Data: ${SITE.licenceData}, free to reuse (including commercially) with attribution and share-alike, so derivatives stay open. Credit it as "${SITE.name} (${base})".
`;
writeFileSync(join(OUT, "llms.txt"), llms);

// --- llms-full.txt: every object, with full text for diseases -------------
const parts: string[] = [
  `# ${SITE.name} — full corpus`,
  "",
  `Generated from the corpus. ${allNodes().length} objects. Licence: data ${SITE.licenceData}; code ${SITE.licenceCode}.`,
  `Attribution: "${SITE.name} (${base})". Verify at source. Not medical advice.`,
  "",
];

for (const kind of KINDS) {
  parts.push(`\n## ${KIND_META[kind].plural}\n`);
  const nodes = allNodes()
    .filter((n) => n.kind === kind)
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const n of nodes) {
    const r = n.record as Record<string, unknown>;
    parts.push(`### ${n.name}`);
    parts.push(`URL: ${base}/${n.kind}/${n.id}/`);
    parts.push(`TL;DR: ${String(r.tldr)}`);
    parts.push(`Summary: ${String(r.summary)}`);
    if (kind === "diseases") {
      const secs = (r.sections as { title: string; body: string }[] | undefined) ?? [];
      for (const s of secs) {
        parts.push(`\n${s.title}: ${s.body.replace(/\n\n+/g, " ")}`);
      }
    }
    const links = (r.links as { label: string; url: string }[]) ?? [];
    parts.push(`Sources: ${links.map((l) => `${l.label} <${l.url}>`).join("; ")}`);
    parts.push("");
  }
}
writeFileSync(join(OUT, "llms-full.txt"), parts.join("\n"));

console.log(
  `✓ wrote public/llms.txt and public/llms-full.txt (${allNodes().length} objects, ${KINDS.length} kinds)`,
);
