import { describe, expect, it } from "vitest";
import { graph, total } from "./graph";
import { KINDS } from "./schema";

describe("the corpus", () => {
  it("parses and resolves every record without errors", () => {
    expect(graph().errors).toEqual([]);
  });

  it("gives every object a plain-English TLDR, a summary, a date and a source", () => {
    for (const node of graph().byId.values()) {
      expect(node.record.tldr.length, `${node.kind}/${node.id} tldr`).toBeGreaterThan(20);
      expect(node.record.summary.length, `${node.kind}/${node.id} summary`).toBeGreaterThan(60);
      expect(node.record.asOf, `${node.kind}/${node.id} asOf`).toMatch(/^\d{4}-\d{2}(-\d{2})?$/);
      expect(node.record.links.length, `${node.kind}/${node.id} links`).toBeGreaterThan(0);
    }
  });

  it("keeps backlinks symmetric with forward links", () => {
    const g = graph();
    for (const [from, refs] of g.forward) {
      for (const to of refs) {
        expect(g.backlinks.get(to)?.has(from), `${from} → ${to} has a backlink`).toBe(true);
      }
    }
  });

  it("has every kind populated", () => {
    const g = graph();
    for (const kind of KINDS) {
      expect(g.byKind.get(kind)?.length ?? 0, kind).toBeGreaterThan(0);
    }
    expect(total()).toBe(g.byId.size);
  });
});
