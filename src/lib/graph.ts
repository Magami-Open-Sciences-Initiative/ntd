import { SCHEMAS, REL_FIELDS, type Kind } from "./schema";
import { ALL_INPUTS } from "@/data";

export type Node = {
  id: string;
  kind: Kind;
  name: string;
  record: Record<string, unknown> & {
    id: string;
    name: string;
    tldr: string;
    summary: string;
    asOf: string;
    links: { label: string; url: string }[];
  };
};

export type Graph = {
  byId: Map<string, Node>;
  byKind: Map<Kind, Node[]>;
  forward: Map<string, Set<string>>;
  backlinks: Map<string, Set<string>>;
  errors: string[];
};

export function buildGraph(
  inputs: { kind: Kind; records: unknown[] }[] = ALL_INPUTS,
): Graph {
  const byId = new Map<string, Node>();
  const byKind = new Map<Kind, Node[]>();
  const errors: string[] = [];

  for (const { kind, records } of inputs) {
    const schema = SCHEMAS[kind];
    const list: Node[] = [];
    for (const raw of records) {
      const parsed = schema.safeParse(raw);
      if (!parsed.success) {
        const id =
          raw && typeof raw === "object" && "id" in raw
            ? String((raw as { id: unknown }).id)
            : "(no id)";
        const issues = parsed.error.issues
          .map((i) => `${i.path.join(".") || "<root>"}: ${i.message}`)
          .join("; ");
        errors.push(`[${kind}] ${id} failed schema — ${issues}`);
        continue;
      }
      const rec = parsed.data as Node["record"];
      if (byId.has(rec.id)) {
        errors.push(`duplicate id "${rec.id}" (${kind}) — ids are unique across the whole graph`);
        continue;
      }
      const node: Node = { id: rec.id, kind, name: rec.name, record: rec };
      byId.set(rec.id, node);
      list.push(node);
    }
    byKind.set(kind, [...(byKind.get(kind) ?? []), ...list]);
  }

  const forward = new Map<string, Set<string>>();
  const backlinks = new Map<string, Set<string>>();

  for (const node of byId.values()) {
    const out = new Set<string>();
    const add = (ref: unknown, field: string) => {
      if (typeof ref !== "string" || !ref || ref === node.id) return;
      if (!byId.has(ref)) {
        errors.push(`dangling reference: ${node.kind}/${node.id} → "${ref}" (field: ${field})`);
        return;
      }
      out.add(ref);
      let back = backlinks.get(ref);
      if (!back) {
        back = new Set<string>();
        backlinks.set(ref, back);
      }
      back.add(node.id);
    };

    for (const field of REL_FIELDS) {
      const raw = node.record[field];
      if (!raw) continue;
      for (const ref of Array.isArray(raw) ? raw : [raw]) add(ref, field);
    }

    // References nested inside timeline steps and detail sections.
    for (const [listName, label] of [
      ["timeline", "timeline[].refs"],
      ["sections", "sections[].refs"],
    ] as const) {
      const list = node.record[listName];
      if (!Array.isArray(list)) continue;
      for (const entry of list) {
        if (!entry || typeof entry !== "object") continue;
        const refs = (entry as { refs?: unknown }).refs;
        if (!Array.isArray(refs)) continue;
        for (const ref of refs) add(ref, label);
      }
    }

    forward.set(node.id, out);
  }

  return { byId, byKind, forward, backlinks, errors };
}

let cached: Graph | null = null;
export function graph(): Graph {
  if (!cached) cached = buildGraph();
  return cached;
}

export function getNode(id: string): Node | undefined {
  return graph().byId.get(id);
}

export function listKind(kind: Kind): Node[] {
  return (graph().byKind.get(kind) ?? []).slice().sort((a, b) => a.name.localeCompare(b.name));
}

export function counts(): Record<Kind, number> {
  const g = graph();
  const out = {} as Record<Kind, number>;
  for (const [kind, nodes] of g.byKind) out[kind] = nodes.length;
  return out;
}

export function total(): number {
  return graph().byId.size;
}

/** Every node in the graph. */
export function allNodes(): Node[] {
  return [...graph().byId.values()];
}

/** Resolve an array of ids to nodes, dropping unknown ids. */
export function resolve(ids: string[] | undefined): Node[] {
  if (!ids) return [];
  const g = graph();
  return ids.map((id) => g.byId.get(id)).filter((n): n is Node => Boolean(n));
}

export type GroupedRefs = { kind: Kind; label: string; nodes: Node[] }[];

/** Backlinks for a node, grouped by the kind of the referring object. */
export function backlinksByKind(id: string): GroupedRefs {
  const g = graph();
  const ids = g.backlinks.get(id);
  if (!ids) return [];
  const groups = new Map<Kind, Node[]>();
  for (const ref of ids) {
    const node = g.byId.get(ref);
    if (!node) continue;
    const arr = groups.get(node.kind) ?? [];
    arr.push(node);
    groups.set(node.kind, arr);
  }
  return [...groups.entries()]
    .map(([kind, nodes]) => ({
      kind,
      label: kind,
      nodes: nodes.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => b.nodes.length - a.nodes.length);
}

/** Forward references grouped by kind (what this object points at). */
export function outgoingByKind(id: string): GroupedRefs {
  const g = graph();
  const node = g.byId.get(id);
  if (!node) return [];
  const groups = new Map<Kind, Node[]>();
  for (const field of REL_FIELDS) {
    const raw = node.record[field];
    if (!raw) continue;
    for (const ref of Array.isArray(raw) ? raw : [raw]) {
      const target = g.byId.get(ref);
      if (!target) continue;
      const arr = groups.get(target.kind) ?? [];
      arr.push(target);
      groups.set(target.kind, arr);
    }
  }
  return [...groups.entries()]
    .map(([kind, nodes]) => ({
      kind,
      label: kind,
      nodes: [...new Map(nodes.map((n) => [n.id, n])).values()].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    }))
    .sort((a, b) => b.nodes.length - a.nodes.length);
}

/** A single search index over the whole corpus. */
export type SearchHit = {
  id: string;
  kind: Kind;
  name: string;
  tldr: string;
  score: number;
};

export function search(query: string, limit = 40): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];
  for (const node of graph().byId.values()) {
    const name = node.name.toLowerCase();
    const hay = `${name} ${node.record.tldr} ${String(node.record.aka ?? "")}`.toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (name === t) score += 12;
      else if (name.startsWith(t)) score += 8;
      else if (name.includes(t)) score += 5;
      if (hay.includes(t)) score += 1;
    }
    if (score > 0) {
      hits.push({ id: node.id, kind: node.kind, name: node.name, tldr: node.record.tldr, score });
    }
  }
  return hits.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)).slice(0, limit);
}
