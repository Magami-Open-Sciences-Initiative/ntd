import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { KINDS, type Kind } from "@/lib/schema";
import { getNode, graph } from "@/lib/graph";
import { EntityDetail } from "@/components/EntityDetail";
import { JsonLd, entityJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/nav";
import { hasFrench } from "@/lib/i18n";

export function generateStaticParams() {
  const g = graph();
  return KINDS.flatMap((kind) =>
    (g.byKind.get(kind) ?? []).map((n) => ({ kind, id: n.id })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kind: string; id: string }>;
}): Promise<Metadata> {
  const { kind, id } = await params;
  if (!KINDS.includes(kind as Kind)) return {};
  const node = getNode(id);
  if (!node || node.kind !== kind) return {};
  return {
    title: node.name,
    description: node.record.tldr,
    alternates: {
      canonical: `/${kind}/${id}/`,
      languages: {
        en: `/${kind}/${id}/`,
        ...(kind === "diseases" && hasFrench(id) ? { fr: `/fr/diseases/${id}/` } : {}),
      },
    },
    openGraph: {
      type: "article",
      title: `${node.name} · ${SITE.name}`,
      description: node.record.tldr,
      url: `${SITE.url.replace(/\/$/, "")}/${kind}/${id}/`,
      siteName: SITE.name,
    },
  };
}

export default async function EntityPage({
  params,
}: {
  params: Promise<{ kind: string; id: string }>;
}) {
  const { kind, id } = await params;
  if (!KINDS.includes(kind as Kind)) notFound();
  const node = getNode(id);
  if (!node || node.kind !== kind) notFound();
  return (
    <>
      <JsonLd data={entityJsonLd(node)} />
      <EntityDetail node={node} />
    </>
  );
}
