"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Kind } from "@/lib/schema";
import { KIND_META } from "@/lib/schema";

export type SearchEntry = { id: string; kind: Kind; name: string; tldr: string };

export function SearchBox({ index }: { index: SearchEntry[] }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    const terms = needle.split(/\s+/).filter(Boolean);
    const scored: { e: SearchEntry; score: number }[] = [];
    for (const e of index) {
      const name = e.name.toLowerCase();
      const hay = `${name} ${e.tldr.toLowerCase()}`;
      let score = 0;
      for (const t of terms) {
        if (name === t) score += 12;
        else if (name.startsWith(t)) score += 8;
        else if (name.includes(t)) score += 5;
        if (hay.includes(t)) score += 1;
      }
      if (score > 0) scored.push({ e, score });
    }
    scored.sort((a, b) => b.score - a.score || a.e.name.localeCompare(b.e.name));
    return scored.slice(0, 60).map((s) => s.e);
  }, [q, index]);

  return (
    <div>
      <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search every disease, pathogen, drug, target, trial…"
        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none placeholder:text-ink-3 focus:border-rule"
      />
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-3">
        {q.trim().length < 2
          ? `${index.length.toLocaleString()} objects indexed`
          : `${results.length} result${results.length === 1 ? "" : "s"}`}
      </p>

      <ul className="mt-6 divide-y divide-[var(--line)] overflow-hidden rounded-xl border border-line bg-surface">
        {results.map((e) => (
          <li key={`${e.kind}/${e.id}`}>
            <Link
              href={`/${e.kind}/${e.id}/`}
              className="grid gap-1 px-4 py-3.5 transition-colors hover:bg-bg-alt sm:grid-cols-[16rem_1fr] sm:gap-6"
            >
              <span className="flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-ink">{e.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                  {KIND_META[e.kind].singular}
                </span>
              </span>
              <span className="text-sm leading-relaxed text-ink-2">{e.tldr}</span>
            </Link>
          </li>
        ))}
        {q.trim().length >= 2 && results.length === 0 ? (
          <li className="px-4 py-10 text-center text-sm text-ink-3">
            Nothing matched. Try a shorter or different term.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
