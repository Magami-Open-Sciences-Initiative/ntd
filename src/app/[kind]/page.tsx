import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { KINDS, KIND_META, type Kind } from "@/lib/schema";
import { listKind } from "@/lib/graph";
import { EntityBrowser, type BrowserRow } from "@/components/EntityBrowser";
import { KindBadge } from "@/components/ui";

const GROUP_FIELD: Record<Kind, string | undefined> = {
  diseases: "whogroup",
  pathogens: "organism",
  vectors: "group",
  drugs: "drugClass",
  diagnostics: "sampleType",
  targets: "targetType",
  technologies: "category",
  trials: "phase",
  institutions: "country",
  countries: "whoRegion",
  people: "era",
  roadmaps: "family",
  guidelines: "issuer",
  bottlenecks: "scope",
  resistance: "resistanceType",
  ideas: "stage",
  terms: "category",
};

const GROUP_LABEL: Partial<Record<Kind, string>> = {
  resistance: "resists",
  diseases: "WHO group",
  pathogens: "type",
  vectors: "group",
  drugs: "class",
  diagnostics: "sample",
  targets: "target type",
  technologies: "category",
  trials: "phase",
  institutions: "country",
  countries: "region",
  people: "era",
  roadmaps: "family",
  guidelines: "issuer",
  bottlenecks: "scope",
  ideas: "stage",
  terms: "category",
};

export function generateStaticParams() {
  return KINDS.map((kind) => ({ kind }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kind: string }>;
}): Promise<Metadata> {
  const { kind } = await params;
  if (!KINDS.includes(kind as Kind)) return {};
  return { title: KIND_META[kind as Kind].plural };
}

export default async function KindIndexPage({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  if (!KINDS.includes(kind as Kind)) notFound();
  const k = kind as Kind;
  const meta = KIND_META[k];
  const nodes = listKind(k);

  const gf = GROUP_FIELD[k];
  const rows: BrowserRow[] = nodes.map((n) => {
    const raw = gf ? n.record[gf] : undefined;
    return {
      id: n.id,
      name: n.name,
      tldr: n.record.tldr,
      asOf: n.record.asOf,
      group: typeof raw === "string" && raw.length <= 40 ? raw : undefined,
    };
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <div className="mb-3">
          <KindBadge kind={k} plural />
        </div>
        <h1 className="font-display text-4xl tracking-tight text-ink">{meta.plural}</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-2">{meta.blurb}</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-3">
          {nodes.length.toLocaleString()} {nodes.length === 1 ? meta.singular.toLowerCase() : "objects"}
        </p>
      </header>
      <EntityBrowser kind={k} rows={rows} groupLabel={GROUP_LABEL[k]} />
    </div>
  );
}
