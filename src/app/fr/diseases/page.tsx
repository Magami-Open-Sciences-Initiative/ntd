import type { Metadata } from "next";
import Link from "next/link";
import { listKind } from "@/lib/graph";
import { KIND_FR, frFor } from "@/lib/i18n";
import { KindBadge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Maladies tropicales négligées",
  description:
    "Les 21 maladies tropicales négligées désignées par l'OMS, avec un résumé en français et un lien vers la fiche complète.",
  alternates: { canonical: "/fr/diseases/", languages: { en: "/diseases/", fr: "/fr/diseases/" } },
};

export default function FrDiseases() {
  const diseases = listKind("diseases");
  const meta = KIND_FR.diseases;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <div className="mb-3">
          <KindBadge kind="diseases" plural />
        </div>
        <h1 className="font-display text-4xl tracking-tight text-ink">{meta.plural}</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-2">{meta.blurb}</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-3">
          {diseases.length} maladies
        </p>
      </header>

      <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-xl border border-line bg-surface">
        {diseases.map((d) => {
          const fr = frFor(d.id);
          return (
            <li key={d.id}>
              <Link
                href={`/fr/diseases/${d.id}/`}
                className="grid gap-1 px-4 py-3.5 transition-colors hover:bg-bg-alt sm:grid-cols-[18rem_1fr] sm:gap-6"
              >
                <span className="font-medium text-ink">{fr?.name ?? d.name}</span>
                <span className="text-sm leading-relaxed text-ink-2">{fr?.tldr ?? d.record.tldr}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
