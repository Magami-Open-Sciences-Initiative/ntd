import type { Metadata } from "next";
import Link from "next/link";
import { listKind, counts, total } from "@/lib/graph";
import { KINDS } from "@/lib/schema";
import { KIND_FR, UI, frFor } from "@/lib/i18n";
import { SITE } from "@/lib/nav";

const t = UI.fr;

export const metadata: Metadata = {
  title: `${SITE.name} — une carte ouverte des maladies tropicales négligées`,
  description:
    "Une base de connaissances publique et sourcée sur les maladies tropicales négligées : maladies, agents pathogènes, vecteurs, traitements, diagnostics, essais, pays et recommandations.",
  alternates: {
    canonical: "/fr/",
    languages: { en: "/", fr: "/fr/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: `${SITE.name} — carte ouverte des maladies tropicales négligées`,
    description: "Une base de connaissances publique et sourcée sur les MTN.",
    url: `${SITE.url.replace(/\/$/, "")}/fr/`,
  },
};

export default function FrHome() {
  const c = counts();
  const n = total();
  const diseases = listKind("diseases");

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
          {t.partOf} {SITE.parent} · {t.langName}
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Les maladies tropicales négligées, cartographiées et documentées.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-2">
          Chaque maladie, agent pathogène, vecteur, traitement, diagnostic, cible, essai, institution,
          pays et recommandation du domaine — reliés entre eux, une page par objet, avec un résumé en
          langage clair.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-3">
          {n.toLocaleString("fr-FR")} objets liés · {c.diseases} maladies (la liste de l’OMS) ·{" "}
          {c.countries} pays
        </p>

        <div className="mt-8 rounded-xl border border-line bg-bg-alt p-5 text-sm leading-relaxed text-ink-2">
          <strong className="font-semibold text-ink">Traduction partielle, volontairement.</strong>{" "}
          L’interface, les noms des rubriques et un résumé français pour chaque maladie sont traduits.
          Le contenu détaillé — analyses approfondies, données, sources — reste en anglais pour
          l’instant, car le traduire sans relecture scientifique serait pire que de ne pas le traduire.
          <span className="mt-2 block">
            <Link href="/" className="link-underline">
              Voir tout le contenu en anglais →
            </Link>
          </span>
        </div>
      </section>

      <section className="border-y border-line bg-bg-alt">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
            Ce que contient la base
          </h2>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {KINDS.map((kind) => {
              const fr = KIND_FR[kind];
              const count = c[kind];
              const href = kind === "diseases" ? "/fr/diseases/" : `/${kind}/`;
              return (
                <Link
                  key={kind}
                  href={href}
                  className="flex items-baseline gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
                >
                  <span className="font-display text-base font-semibold text-ink">
                    {count.toLocaleString("fr-FR")}
                  </span>
                  <span>{fr.plural}</span>
                </Link>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
            Seule la rubrique Maladies existe en français
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              Les maladies tropicales négligées
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-2">
              Les {diseases.length} maladies désignées par l’OMS, avec un résumé français et un lien
              vers la fiche complète.
            </p>
          </div>
          <Link
            href="/fr/diseases/"
            className="link-underline whitespace-nowrap font-mono text-xs uppercase tracking-wider text-ink-3"
          >
            Tout voir →
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {diseases.map((d) => {
            const fr = frFor(d.id);
            return (
              <li key={d.id}>
                <Link
                  href={`/fr/diseases/${d.id}/`}
                  className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-rule"
                >
                  <h3 className="font-display text-lg text-ink">{fr?.name ?? d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    {fr?.tldr ?? d.record.tldr}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/fr/about/"
            className="rounded-full px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            {t.aboutLink}
          </Link>
          <a
            href="/api/v1/index.json"
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
          >
            {t.apiLink}
          </a>
        </div>
      </section>
    </div>
  );
}
