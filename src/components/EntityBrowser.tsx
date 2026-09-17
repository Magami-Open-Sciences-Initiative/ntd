"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Kind } from "@/lib/schema";
import { KIND_META } from "@/lib/schema";

export type BrowserRow = {
  id: string;
  name: string;
  tldr: string;
  group?: string;
  asOf: string;
};

export function EntityBrowser({
  kind,
  rows,
  groupLabel,
}: {
  kind: Kind;
  rows: BrowserRow[];
  groupLabel?: string;
}) {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("all");
  const [dir, setDir] = useState<"asc" | "desc">("asc");

  const groups = useMemo(() => {
    const set = new Set<string>();
    for (const r of rows) if (r.group) set.add(r.group);
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [rows]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const out = rows.filter((r) => {
      if (group !== "all" && r.group !== group) return false;
      if (!needle) return true;
      return (
        r.name.toLowerCase().includes(needle) ||
        r.tldr.toLowerCase().includes(needle) ||
        (r.group ?? "").toLowerCase().includes(needle)
      );
    });
    out.sort((a, b) => (dir === "asc" ? 1 : -1) * a.name.localeCompare(b.name));
    return out;
  }, [rows, q, group, dir]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Filter ${KIND_META[kind].plural.toLowerCase()}…`}
          className="min-w-56 flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-3 focus:border-rule"
        />
        {groups.length > 1 ? (
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            aria-label={groupLabel ?? "Group"}
            className="rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink-2 outline-none focus:border-rule"
          >
            <option value="all">All {groupLabel ? groupLabel.toLowerCase() + "s" : "groups"}</option>
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        ) : null}
        <button
          type="button"
          onClick={() => setDir((d) => (d === "asc" ? "desc" : "asc"))}
          className="rounded-lg border border-line bg-surface px-3 py-2 font-mono text-xs text-ink-2 transition-colors hover:border-rule hover:text-ink"
        >
          A→Z {dir === "asc" ? "↑" : "↓"}
        </button>
        <span className="font-mono text-xs text-ink-3">
          {filtered.length} / {rows.length}
        </span>
      </div>

      <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-xl border border-line bg-surface">
        {filtered.map((r) => (
          <li key={r.id}>
            <Link
              href={`/${kind}/${r.id}/`}
              className="grid gap-1 px-4 py-3.5 transition-colors hover:bg-bg-alt sm:grid-cols-[16rem_1fr] sm:gap-6"
            >
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-medium text-ink">{r.name}</span>
                {r.group ? (
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                    {r.group}
                  </span>
                ) : null}
              </div>
              <span className="text-sm leading-relaxed text-ink-2">{r.tldr}</span>
            </Link>
          </li>
        ))}
        {filtered.length === 0 ? (
          <li className="px-4 py-10 text-center text-sm text-ink-3">Nothing matches that filter.</li>
        ) : null}
      </ul>
    </div>
  );
}
