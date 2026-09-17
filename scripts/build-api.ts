import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { buildGraph } from "@/lib/graph";
import { KINDS } from "@/lib/schema";
import { citeData } from "@/lib/cite";
import { SITE } from "@/lib/nav";

const OUT = join(process.cwd(), "public", "api", "v1");
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const g = buildGraph();
if (g.errors.length) {
  console.error("Corpus invalid; run `npm run validate` first.");
  process.exit(1);
}

function write(path: string, data: unknown) {
  const full = join(OUT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, JSON.stringify(data, null, 2) + "\n");
}

const index = {
  name: SITE.name,
  description:
    "An open, cited map of neglected tropical diseases. One page per object; every count is a link.",
  licence: `Code ${SITE.licenceCode}; data ${SITE.licenceData}, free for individual and educational use with attribution.`,
  citation: {
    plain: `${SITE.parent}. ${SITE.name}. ${SITE.url}`,
    attribution: `Data from ${SITE.name} (${SITE.url.replace(/^https?:\/\//, "")})`,
    formats: "Every object's JSON carries a `citation` object with plain, APA, BibTeX and RIS forms.",
  },
  counts: Object.fromEntries(KINDS.map((k) => [k, g.byKind.get(k)?.length ?? 0])),
  total: g.byId.size,
  endpoints: Object.fromEntries(
    KINDS.map((k) => [k, `/api/v1/${k}.json`]),
  ),
};
write("index.json", index);

for (const kind of KINDS) {
  const nodes = g.byKind.get(kind) ?? [];
  write(
    `${kind}.json`,
    {
      kind,
      count: nodes.length,
      objects: nodes.map((n) => ({
        id: n.id,
        name: n.name,
        tldr: n.record.tldr,
        asOf: n.record.asOf,
        url: `/${kind}/${n.id}/`,
      })),
    },
  );
  for (const n of nodes) {
    const backlinks = (g.backlinks.get(n.id) ?? []) as Set<string>;
    write(`${kind}/${n.id}.json`, {
      kind,
      ...n.record,
      url: `/${kind}/${n.id}/`,
      citation: citeData(n),
      // `links` below is the graph's edge list; keep the record's own primary
      // sources (and any per-stat sources inside `stats`) reachable too.
      sources: n.record.links,
      links: {
        outgoing: [...(g.forward.get(n.id) ?? [])],
        incoming: [...backlinks],
      },
    });
  }
}

console.log(`✓ wrote static JSON API to public/api/v1 (${g.byId.size + KINDS.length + 1} files)`);
