import Link from "next/link";
import type { Kind, Stat } from "@/lib/schema";
import { KIND_META } from "@/lib/schema";
import { kindStyle } from "@/lib/text";
import { entityHref } from "@/lib/nav";
import type { Node } from "@/lib/graph";

export function Tip({ children, tip }: { children: React.ReactNode; tip: string }) {
  return (
    <span className="cursor-help border-b border-dotted border-ink-3/70" title={tip}>
      {children}
    </span>
  );
}

export function KindBadge({ kind, plural = false }: { kind: Kind; plural?: boolean }) {
  return (
    <span
      className="kind-badge inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
      style={kindStyle(kind)}
    >
      {plural ? KIND_META[kind].plural : KIND_META[kind].singular}
    </span>
  );
}

export function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-3 scroll-mt-24 border-b border-rule pb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-3"
    >
      {children}
    </h2>
  );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="bg-surface p-4">
          <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">{s.label}</dt>
          <dd className="mt-1 font-display text-2xl leading-tight text-ink">
            {s.value}
            {s.unit && !s.value.toLowerCase().includes(s.unit.toLowerCase()) ? (
              <span className="ml-1 font-mono text-xs font-normal text-ink-3">{s.unit}</span>
            ) : null}
          </dd>
          {s.year || s.geography ? (
            <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-3">
              {[s.geography, s.year ? String(s.year) : null].filter(Boolean).join(" · ")}
            </dd>
          ) : null}
          {s.note ? <dd className="mt-1 text-xs text-ink-3">{s.note}</dd> : null}
          {s.source ? (
            <dd className="mt-2">
              <a
                href={s.source.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-ink-3 underline decoration-dotted underline-offset-2 hover:text-ink"
              >
                {s.source.label}
              </a>
            </dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

export function Chip({ node }: { node: Node }) {
  return (
    <Link
      href={entityHref(node.kind, node.id)}
      style={kindStyle(node.kind)}
      className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
    >
      <span className="kind-dot h-1.5 w-1.5 shrink-0 rounded-full" />
      {node.name}
    </Link>
  );
}

export function Collapse({ summary, children }: { summary: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-line bg-surface">
      <summary className="cursor-pointer list-none px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-3 group-open:text-ink">
        <span className="mr-2 inline-block transition-transform group-open:rotate-90">▸</span>
        {summary}
      </summary>
      <div className="border-t border-line px-4 py-4">{children}</div>
    </details>
  );
}
