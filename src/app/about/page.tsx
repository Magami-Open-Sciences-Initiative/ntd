import type { Metadata } from "next";
import Link from "next/link";
import { KINDS, KIND_META } from "@/lib/schema";
import { counts, total } from "@/lib/graph";
import { kindHref, SITE } from "@/lib/nav";

export const metadata: Metadata = { title: "About & methodology" };

export default function AboutPage() {
  const c = counts();
  const n = total();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl tracking-tight text-ink">About &amp; methodology</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-2">
        {SITE.name} is an open, cited knowledge graph of neglected tropical diseases. It is a project of{" "}
        <a className="link-underline" href={SITE.parentUrl}>
          {SITE.parent}
        </a>
        , a non-profit that uses AI and open science to accelerate drug discovery for the diseases that
        carry the greatest burden and the least funding.
      </p>

      <div className="prose-magami mt-8">
        <h2 className="font-display text-2xl text-ink">How it is built</h2>
        <p>
          The whole site is generated from a single open corpus: one record per object, written in plain
          English and then expanded with the technical layer. Each record carries a short TL;DR, a longer
          summary, the date it was last checked, at least one primary source, and links to the other
          objects it relates to. The build resolves every link, rejects dangling references and duplicate
          ids, and derives backlinks automatically — so a fact stated once shows up everywhere it matters.
        </p>
        <p>
          Counts and dates are computed at build time from the corpus, never written into the copy, so
          they cannot go stale. The same corpus is published as a static JSON API under{" "}
          <a className="link-underline" href="/api/v1/index.json">
            /api/v1/
          </a>
          , and it is designed so that a machine can read it as easily as a person.
        </p>

        <h2 className="font-display text-2xl text-ink">What is covered, and what is not</h2>
        <p>
          The corpus is built around the WHO&rsquo;s 21 neglected tropical diseases. It also covers
          five adjacent diseases — podoconiosis, Zika, malaria, tuberculosis and Ebola — because
          they overlap the field in pathogens, vectors, drugs, diagnostics, delivery platforms and
          countries. Each of those five states on its page that it is <em>not</em> on the WHO NTD
          list. Malaria and tuberculosis have their own WHO programmes and far larger budgets, and
          podoconiosis is not infectious and is not formally listed at all. Keeping that boundary
          explicit matters: the NTD field exists precisely because some diseases lack the attention
          others receive.
        </p>

        <h2 className="font-display text-2xl text-ink">The corpus so far</h2>
      </div>

      <div className="my-6 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-alt text-left font-mono text-[11px] uppercase tracking-wider text-ink-3">
              <th className="px-4 py-2.5">Kind</th>
              <th className="px-4 py-2.5">What it holds</th>
              <th className="px-4 py-2.5 text-right">Objects</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--line)] bg-surface">
            {KINDS.map((kind) => (
              <tr key={kind}>
                <td className="px-4 py-2.5">
                  <Link href={kindHref(kind)} className="link-underline text-ink">
                    {KIND_META[kind].plural}
                  </Link>
                </td>
                <td className="px-4 py-2.5 text-ink-2">{KIND_META[kind].blurb}</td>
                <td className="px-4 py-2.5 text-right font-mono text-ink-2">{c[kind]}</td>
              </tr>
            ))}
            <tr className="bg-bg-alt font-medium">
              <td className="px-4 py-2.5 text-ink">Total</td>
              <td className="px-4 py-2.5" />
              <td className="px-4 py-2.5 text-right font-mono text-ink">{n}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-magami">
        <h2 className="font-display text-2xl text-ink">Principles</h2>
        <p>
          <strong className="text-ink">One page per object, links everywhere.</strong> If it can be a
          page, it is a page, so a reader can walk from a disease to its pathogen, its vector, its
          treatments, its diagnostics, the trials behind them, and the people running them.
        </p>
        <p>
          <strong className="text-ink">Plain English first.</strong> Every page opens with a TL;DR a
          newcomer understands, and the technical layer follows.
        </p>
        <p>
          <strong className="text-ink">Cited, dated, honest about gaps.</strong> Every record links a
          primary source, states the date it was last checked, and says so when something is unknown
          rather than guessing.
        </p>
        <p>
          <strong className="text-ink">Nothing stale by design.</strong> Counts and dates come from the
          corpus at build time.
        </p>

        <h2 className="font-display text-2xl text-ink">Status and how to help</h2>
        <p>
          This is a work in progress. The corpus is seeded but far from complete: some fields are thin,
          some diseases have fewer sources than they deserve, and the depth is uneven. Every record is a
          file in a public repository, and fixing a fact, adding a source or proposing an idea is a
          welcome change. If you work on one of these diseases, your correction is worth more than our
          effort.
        </p>

        <h2 className="font-display text-2xl text-ink">Disclaimer</h2>
        <p>
          Nothing here is medical advice, and the content may be incomplete, out of date or wrong. Verify
          anything that matters at its primary source, which every page links. Treatment decisions belong
          with patients and their clinicians.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-line bg-bg-alt p-5 text-sm text-ink-2">
        <p>
          Corpus last updated {SITE.updated}. Code is open source; the data is free to reuse with
          attribution to {SITE.name}.
        </p>
      </div>
    </div>
  );
}
