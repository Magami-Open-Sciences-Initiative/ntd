import Link from "next/link";
import { KINDS, KIND_META } from "@/lib/schema";
import { counts, getNode, total } from "@/lib/graph";
import { entityHref, kindHref, SITE } from "@/lib/nav";
import { KindBadge } from "@/components/ui";

const FEATURED_DISEASES = [
  "schistosomiasis",
  "hat",
  "leishmaniasis",
  "lymphatic-filariasis",
  "dengue-chikungunya",
  "trachoma",
];

const FEATURED_ROADMAPS = ["vector-control-roadmap", "ntd-diagnostics-roadmap", "elimination-roadmap"];
const FEATURED_BOTTLENECKS = ["funding-gap", "insecticide-resistance-crisis", "diagnostics-gap"];
const FEATURED_IDEAS = ["poc-molecular-panels", "climate-informed-ntd-forecasting", "open-antiparasitic-consortium"];

export default function Home() {
  const c = counts();
  const n = total();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
          {SITE.parent} · open science
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Total information dominance on neglected tropical diseases.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-2">
          Every pathogen, vector, treatment, diagnostic, target, trial, institution, roadmap, bottleneck
          and idea in the field — linked together, one page each, plain English first. The state of the
          art, the history, and what is coming.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-3">
          {n.toLocaleString()} linked objects. Every count is a link.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
          {KINDS.map((kind) => (
            <Link
              key={kind}
              href={kindHref(kind)}
              className="group flex items-baseline gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
            >
              <span className="font-display text-base font-semibold text-ink">
                {c[kind].toLocaleString()}
              </span>
              <span>{KIND_META[kind].plural}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-bg-alt">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <Audience
            title="Patient, family or community"
            blurb="Start from the disease, in plain English, with the technical layer one click away."
            links={[
              { label: "Research a disease", href: kindHref("diseases") },
              { label: "Treatments", href: kindHref("drugs") },
              { label: "Diagnostics", href: kindHref("diagnostics") },
            ]}
          />
          <Audience
            title="Clinician or researcher"
            blurb="Pathogens, vectors, drug targets and trials — cited and linked in every direction."
            links={[
              { label: "Pathogens", href: kindHref("pathogens") },
              { label: "Drug targets", href: kindHref("targets") },
              { label: "Trials", href: kindHref("trials") },
            ]}
          />
          <Audience
            title="Builder, funder or policymaker"
            blurb="Where the field is stuck, who is working on it, and where the white space is."
            links={[
              { label: "Bottlenecks", href: kindHref("bottlenecks") },
              { label: "Ideas", href: kindHref("ideas") },
              { label: "Roadmaps", href: kindHref("roadmaps") },
            ]}
          />
        </div>
      </section>

      <Section
        title="The map"
        intro="One page per object, links everywhere. Pick a kind and browse every record."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KINDS.map((kind) => (
            <Link
              key={kind}
              href={kindHref(kind)}
              className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-rule"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <KindBadge kind={kind} plural />
                <span className="font-display text-xl font-semibold text-ink">
                  {c[kind].toLocaleString()}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-2">{KIND_META[kind].blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Neglected tropical diseases"
        intro="The 21 conditions the WHO names, each with what causes it, who it strikes and what can be done."
        more={{ label: "All diseases", href: kindHref("diseases") }}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DISEASES.map((id) => {
            const node = getNode(id);
            if (!node) return null;
            return (
              <Link
                key={id}
                href={entityHref(node.kind, node.id)}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-rule"
              >
                <h3 className="font-display text-xl text-ink">{node.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{node.record.tldr}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        title="Strategy: roadmaps, bottlenecks and ideas"
        intro="History to horizon for each technology family, the constraints slowing everything, and the fixes with a proposed test."
        more={{ label: "All roadmaps", href: kindHref("roadmaps") }}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <Column title="Roadmaps" href={kindHref("roadmaps")} ids={FEATURED_ROADMAPS} />
          <Column title="Bottlenecks" href={kindHref("bottlenecks")} ids={FEATURED_BOTTLENECKS} />
          <Column title="Ideas" href={kindHref("ideas")} ids={FEATURED_IDEAS} />
        </div>
      </Section>

      <Section title="Contribute" intro="Every object is a record in an open corpus. Fix a fact, add a source, propose an idea.">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/about/"
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            About &amp; methodology
          </Link>
          <a
            href="/api/v1/index.json"
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
          >
            Open data API
          </a>
        </div>
      </Section>
    </div>
  );
}

function Audience({
  title,
  blurb,
  links,
}: {
  title: string;
  blurb: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{blurb}</p>
      <ul className="mt-3 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline text-sm text-ink-2">
              {l.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Section({
  title,
  intro,
  more,
  children,
}: {
  title: string;
  intro?: string;
  more?: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-ink">{title}</h2>
          {intro ? <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-2">{intro}</p> : null}
        </div>
        {more ? (
          <Link href={more.href} className="link-underline whitespace-nowrap font-mono text-xs uppercase tracking-wider text-ink-3">
            {more.label} →
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Column({ title, href, ids }: { title: string; href: string; ids: string[] }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="font-mono text-xs uppercase tracking-wider text-ink-3">{title}</h3>
        <Link href={href} className="link-underline font-mono text-[11px] text-ink-3">
          all →
        </Link>
      </div>
      <ul className="space-y-3">
        {ids.map((id) => {
          const node = getNode(id);
          if (!node) return null;
          return (
            <li key={id}>
              <Link href={entityHref(node.kind, node.id)} className="block rounded-lg border border-line bg-surface p-4 transition-colors hover:border-rule">
                <span className="font-medium text-ink">{node.name}</span>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{node.record.tldr}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
