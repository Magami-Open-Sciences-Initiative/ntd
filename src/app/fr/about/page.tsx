import type { Metadata } from "next";
import Link from "next/link";
import { KINDS } from "@/lib/schema";
import { counts, total } from "@/lib/graph";
import { KIND_FR, UI } from "@/lib/i18n";
import { SITE } from "@/lib/nav";

export const metadata: Metadata = {
  title: "À propos et méthodologie",
  description:
    "Comment Magami NTD est construit, ce que contient la base de connaissances, et ce que la traduction française couvre réellement.",
  alternates: { canonical: "/fr/about/", languages: { en: "/about/", fr: "/fr/about/" } },
};

export default function FrAbout() {
  const c = counts();
  const n = total();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl tracking-tight text-ink">À propos et méthodologie</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-2">
        {SITE.name} est une base de connaissances ouverte et sourcée sur les maladies tropicales
        négligées. C’est un projet de{" "}
        <a className="link-underline" href={SITE.parentUrl}>
          {SITE.parent}
        </a>
        , une organisation à but non lucratif qui utilise l’IA et la science ouverte pour accélérer
        la découverte de médicaments contre les maladies les plus négligées.
      </p>

      <div className="prose-magami mt-8">
        <h2 className="font-display text-2xl text-ink">Comment c’est construit</h2>
        <p>
          Tout le site est généré à partir d’un seul corpus ouvert : une fiche par objet, rédigée
          d’abord en langage clair, puis complétée par la couche technique. Chaque fiche porte un
          résumé court, un résumé long, la date de dernière vérification, au moins une source
          primaire, et des liens vers les autres objets auxquels elle se rapporte. La compilation
          vérifie chaque lien, rejette les références orphelines et les identifiants en double, et
          déduit automatiquement les liens entrants.
        </p>
        <p>
          Les chiffres et les dates sont calculés au moment de la compilation à partir du corpus, et
          jamais écrits dans le texte, de sorte qu’ils ne puissent pas devenir obsolètes.
        </p>

        <h2 className="font-display text-2xl text-ink">Ce que couvre le français</h2>
        <p>
          La traduction française est volontairement partielle. L’interface, les noms et descriptions
          des rubriques, et un résumé pour chacune des {c.diseases} maladies sont traduits. Le
          contenu détaillé — analyses approfondies, données chiffrées, essais, sources — reste en
          anglais.
        </p>
        <p>
          Ce choix est délibéré. Traduire automatiquement plusieurs centaines de pages de contenu
          scientifique sans relecture produirait des erreurs là où elles coûtent le plus cher. Une
          traduction partielle annoncée comme telle est plus honnête qu’une traduction complète non
          vérifiée, et la priorité suivante devrait être une relecture francophone, pas davantage de
          texte non relu.
        </p>

        <h2 className="font-display text-2xl text-ink">Le corpus aujourd’hui</h2>
      </div>

      <div className="my-6 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-alt text-left font-mono text-[11px] uppercase tracking-wider text-ink-3">
              <th className="px-4 py-2.5">Rubrique</th>
              <th className="px-4 py-2.5 text-right">Objets</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--line)] bg-surface">
            {KINDS.map((kind) => (
              <tr key={kind}>
                <td className="px-4 py-2.5 text-ink">{KIND_FR[kind].plural}</td>
                <td className="px-4 py-2.5 text-right font-mono text-ink-2">
                  {c[kind].toLocaleString("fr-FR")}
                </td>
              </tr>
            ))}
            <tr className="bg-bg-alt font-medium">
              <td className="px-4 py-2.5 text-ink">Total</td>
              <td className="px-4 py-2.5 text-right font-mono text-ink">
                {n.toLocaleString("fr-FR")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-magami">
        <h2 className="font-display text-2xl text-ink">Avertissement</h2>
        <p>
          Rien ici ne constitue un avis médical, et le contenu peut être incomplet, obsolète ou
          erroné. Vérifiez tout élément important à sa source primaire, que chaque page indique. Les
          décisions de traitement appartiennent aux patients et à leurs médecins.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-line bg-bg-alt p-5 text-sm text-ink-2">
        <p>
          Code sous licence AGPL-3.0 ; données sous licence CC BY-SA 4.0 — réutilisation libre, y
          compris commerciale, avec attribution et partage à l’identique.
        </p>
        <p className="mt-2">
          <Link href="/about/" className="link-underline text-ink">
            {UI.fr.readIn}
          </Link>
        </p>
      </div>
    </div>
  );
}
