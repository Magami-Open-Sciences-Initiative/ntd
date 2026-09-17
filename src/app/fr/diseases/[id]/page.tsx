import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getNode, listKind, backlinksByKind } from "@/lib/graph";
import { frFor, KIND_FR, UI } from "@/lib/i18n";
import { KindBadge, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return listKind("diseases").map((d) => ({ id: d.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const node = getNode(id);
  if (!node || node.kind !== "diseases") return {};
  const fr = frFor(id);
  return {
    title: fr?.name ?? node.name,
    description: fr?.tldr ?? node.record.tldr,
    alternates: {
      canonical: `/fr/diseases/${id}/`,
      languages: { en: `/diseases/${id}/`, fr: `/fr/diseases/${id}/` },
    },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      title: fr?.name ?? node.name,
      description: fr?.tldr ?? node.record.tldr,
      url: `/fr/diseases/${id}/`,
    },
  };
}

export default async function FrDisease({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const node = getNode(id);
  if (!node || node.kind !== "diseases") notFound();

  const fr = frFor(id);
  const backlinks = backlinksByKind(id).filter((g) => g.kind !== "diseases");

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-3">
        <Link href="/fr/" className="hover:text-ink">
          {UI.fr.home}
        </Link>
        <span>/</span>
        <Link href="/fr/diseases/" className="hover:text-ink">
          {KIND_FR.diseases.plural}
        </Link>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <KindBadge kind="diseases" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
            {UI.fr.lastChecked} {String(node.record.asOf)}
          </span>
        </div>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          {fr?.name ?? node.name}
        </h1>
        <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-lg leading-relaxed text-ink-2">
          {fr?.tldr ?? node.record.tldr}
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-line bg-bg-alt p-5 text-sm leading-relaxed text-ink-2">
        <p>
          Cette page est un résumé en français. La fiche complète — analyse détaillée, chiffres,
          traitements, essais, pays et sources — est disponible en anglais.
        </p>
        <p className="mt-2">
          <Link href={`/diseases/${id}/`} className="link-underline text-ink">
            {UI.fr.readIn}
          </Link>
        </p>
      </section>

      <section className="mb-10">
        <SectionHeading>Résumé (en anglais)</SectionHeading>
        <p className="prose-magami leading-relaxed text-ink-2">{String(node.record.summary)}</p>
      </section>

      {backlinks.length > 0 ? (
        <section className="mb-10">
          <SectionHeading>Pages liées</SectionHeading>
          <div className="space-y-5">
            {backlinks.map((g) => (
              <div key={g.kind}>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-3">
                  {KIND_FR[g.kind].plural} ({g.nodes.length})
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.nodes.map((n) => (
                    <Link
                      key={n.id}
                      href={`/${n.kind}/${n.id}/`}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
            Ces pages sont en anglais
          </p>
        </section>
      ) : null}

      <section>
        <SectionHeading>{UI.fr.sources}</SectionHeading>
        <ul className="space-y-2 text-sm">
          {(node.record.links as { label: string; url: string }[]).map((l) => (
            <li key={l.url}>
              <a href={l.url} className="link-underline text-ink-2" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-ink-3">
          {UI.fr.lastChecked} {String(node.record.asOf)} · {UI.fr.verifyAtSource}
        </p>
      </section>
    </article>
  );
}
