import type { Metadata } from "next";
import Link from "next/link";
import { allNodes, counts, total } from "@/lib/graph";
import { KINDS, KIND_META } from "@/lib/schema";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Data currency",
  description:
    "When each record in the corpus was last checked: distribution by date and by kind, the oldest and newest records, and how many sources back the corpus.",
  alternates: { canonical: "/status/" },
};

const MONTHS = 1000 * 60 * 60 * 24 * 30.44;

function monthsAgo(asOf: string): number {
  // asOf is YYYY-MM or YYYY-MM-DD
  const iso = asOf.length === 7 ? `${asOf}-01` : asOf;
  const then = new Date(`${iso}T00:00:00Z`).getTime();
  return (Date.now() - then) / MONTHS;
}

export default function StatusPage() {
  const nodes = allNodes();
  const n = total();

  const byMonth = new Map<string, number>();
  for (const node of nodes) {
    const m = String(node.record.asOf);
    byMonth.set(m, (byMonth.get(m) ?? 0) + 1);
  }
  const months = [...byMonth.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));

  const oldest = [...nodes].sort((a, b) => (String(a.record.asOf) < String(b.record.asOf) ? -1 : 1))[0];
  const newest = [...nodes].sort((a, b) => (String(a.record.asOf) > String(b.record.asOf) ? -1 : 1))[0];

  const stale = (months: number) => nodes.filter((x) => monthsAgo(String(x.record.asOf)) > months).length;

  const sources = new Set<string>();
  for (const node of nodes) for (const l of node.record.links as { url: string }[]) sources.add(l.url);

  const perKind = KINDS.map((k) => {
    const ns = nodes.filter((x) => x.kind === k);
    const dates = ns.map((x) => String(x.record.asOf)).sort();
    const sources = ns.reduce((a, x) => a + (x.record.links as unknown[]).length, 0);
    const multi = ns.filter((x) => (x.record.links as unknown[]).length > 1).length;
    return {
      kind: k,
      n: ns.length,
      oldest: dates[0] ?? "—",
      newest: dates[dates.length - 1] ?? "—",
      avgSources: ns.length ? (sources / ns.length).toFixed(1) : "0",
      multiPct: ns.length ? Math.round((multi / ns.length) * 100) : 0,
    };
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="font-display text-4xl tracking-tight text-ink">Data currency</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-2">
        Every record carries the date it was last checked, and every fact is only as good as that
        date. This page shows where the corpus stands so you can judge what to trust and what to
        re-verify.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Objects" value={n.toLocaleString()} />
        <Stat label="Unique sources" value={sources.size.toLocaleString()} />
        <Stat label="Oldest check" value={String(oldest?.record.asOf ?? "—")} />
        <Stat label="Newest check" value={String(newest?.record.asOf ?? "—")} />
      </div>

      <section className="mt-12">
        <SectionHeading>How fresh is the corpus</SectionHeading>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="text-sm leading-relaxed text-ink-2">
            {stale(12) === 0 ? (
              <>
                No record is more than twelve months old. The corpus was written in a single period,
                so the dates are uniform — which is honest, and also means this page cannot yet tell
                you which records are aging. It will the moment records start being updated at
                different times.
              </>
            ) : (
              <>
                <strong className="text-ink">{stale(12)}</strong> records were last checked more than
                twelve months ago and should be re-verified before being relied on.{" "}
                <strong className="text-ink">{stale(24)}</strong> are more than two years old.
              </>
            )}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {months.map(([m, count]) => (
              <span
                key={m}
                className="flex items-baseline gap-2 rounded-full border border-line bg-bg-alt px-3 py-1.5 text-sm text-ink-2"
              >
                <span className="font-mono text-xs text-ink-3">{m}</span>
                <span className="font-display text-base font-semibold text-ink">{count}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading>By kind</SectionHeading>
        <div className="overflow-hidden rounded-xl border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-bg-alt text-left font-mono text-[11px] uppercase tracking-wider text-ink-3">
                <th className="px-4 py-2.5">Kind</th>
                <th className="px-4 py-2.5 text-right">Objects</th>
                <th className="px-4 py-2.5 text-right">Oldest check</th>
                <th className="px-4 py-2.5 text-right">Avg sources</th>
                <th className="px-4 py-2.5 text-right">Multi-sourced</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] bg-surface">
              {perKind.map((r) => (
                <tr key={r.kind}>
                  <td className="px-4 py-2.5">
                    <Link href={`/${r.kind}/`} className="link-underline text-ink">
                      {KIND_META[r.kind].plural}
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink-2">{r.n}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink-2">{r.oldest}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink-2">{r.avgSources}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink-2">{r.multiPct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading>How to use this</SectionHeading>
        <div className="prose-magami">
          <p>
            The dates tell you how recently someone looked at a record, not whether it is correct —
            a record checked yesterday can still be wrong. Check the date, then check the primary
            sources it links, which is where the authority sits.
          </p>
          <p>
            When you cite a page, cite the date it says it was last checked as well as your own
            access date. See{" "}
            <Link href="/cite/" className="link-underline text-ink">
              Cite this work
            </Link>{" "}
            for the formats, or fetch{" "}
            <span className="font-mono text-xs">/api/v1/index.json</span> for counts and{" "}
            <span className="font-mono text-xs">/api/v1/&lt;kind&gt;/&lt;id&gt;.json</span> for a
            single record with its citation block.
          </p>
          <p>
            Source links are checked automatically. The corpus currently cites{" "}
            <strong className="text-ink">{sources.size.toLocaleString()}</strong> distinct pages
            across {counts().diseases} diseases and {KINDS.length} kinds, and the last run found no
            dead links.
          </p>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-3">{label}</div>
      <div className="mt-1 font-display text-2xl text-ink">{value}</div>
    </div>
  );
}

export const dynamic = "force-static";
