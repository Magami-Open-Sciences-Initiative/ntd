import type { Metadata } from "next";
import { allNodes } from "@/lib/graph";
import { SearchBox, type SearchEntry } from "@/components/SearchBox";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  const index: SearchEntry[] = allNodes().map((n) => ({
    id: n.id,
    kind: n.kind,
    name: n.name,
    tldr: n.record.tldr,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="font-display text-4xl tracking-tight text-ink">Search</h1>
      <p className="mt-3 mb-8 max-w-2xl text-base leading-relaxed text-ink-2">
        Every object in the corpus, searchable by name and summary. No sign-in, no tracking.
      </p>
      <SearchBox index={index} />
    </div>
  );
}
