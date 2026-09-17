import type { Metadata } from "next";
import Link from "next/link";
import { counts, total, listKind } from "@/lib/graph";
import { corpusCitation } from "@/lib/cite";
import { SITE } from "@/lib/nav";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cite this work",
  description:
    "How to cite Magami NTD as a whole, or any single page in it, with plain text, APA, BibTeX and RIS formats, and the licence terms.",
  alternates: { canonical: "/cite/" },
};

const c = corpusCitation(counts(), total());

function Example({ label, children }: { label: string; children: string }) {
  return (
    <div className="mb-4">
      <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-ink-3">{label}</div>
      <pre className="overflow-x-auto rounded-lg border border-line bg-surface px-4 py-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-ink-2">
        {children}
      </pre>
    </div>
  );
}

export default function CitePage() {
  const example = listKind("drugs").find((d) => d.id === "praziquantel");

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl tracking-tight text-ink">Cite this work</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-2">
        Everything here is free to cite. Every page has a <strong className="text-ink">Cite this
        page</strong> section with ready-made plain text, APA, BibTeX and RIS, and each record is
        only as current as the date it says it was last checked — so cite that date and your own
        access date.
      </p>

      <div className="prose-magami mt-8">
        <p>
          There is no DOI yet. Until there is, the stable page URL is the identifier: pages are
          generated from a fixed corpus and their URLs do not change. If you need a versioned,
          citable snapshot, ask and we will tag a release and archive it so it gets a DOI.
        </p>
      </div>

      <section className="mt-10">
        <SectionHeading>Citing the whole corpus</SectionHeading>
        <Example label="Plain text">{c.plain}</Example>
        <Example
          label="BibTeX"
          >{`@misc{magamintd,
  title        = {${SITE.name}: an open, cited map of neglected tropical diseases},
  author       = {{${SITE.parent}}},
  year         = {${c.lastChecked.slice(0, 4)}},
  howpublished = {${SITE.name}},
  note         = {Last checked ${c.lastChecked}},
  url          = {${SITE.url}},
  urldate      = {YYYY-MM-DD}
}`}</Example>
      </section>

      <section className="mt-10">
        <SectionHeading>Citing a single page</SectionHeading>
        <p className="mb-4 text-sm leading-relaxed text-ink-2">
          {example ? (
            <>
              Example, for{" "}
              <Link href={`/drugs/${example.id}/`} className="link-underline text-ink">
                {example.name}
              </Link>
              :
            </>
          ) : null}
        </p>
        {example ? (
          <>
            <Example label="Plain text">
              {`${SITE.parent}. "${example.name}." ${SITE.name}, last checked ${example.record.asOf}. ${SITE.url.replace(/\/$/, "")}/drugs/${example.id}/ (accessed YYYY-MM-DD).`}
            </Example>
            <Example
              label="BibTeX"
              >{`@misc{magamintd_drugs_${example.id},
  title        = {${example.name}},
  author       = {{${SITE.parent}}},
  year         = {${example.record.asOf.slice(0, 4)}},
  howpublished = {${SITE.name}},
  note         = {Last checked ${example.record.asOf}},
  url          = {${SITE.url.replace(/\/$/, "")}/drugs/${example.id}/},
  urldate      = {YYYY-MM-DD}
}`}</Example>
            <Example
              label="RIS"
              >{`TY  - ELEC
TI  - ${example.name}
AU  - ${SITE.parent}
PY  - ${example.record.asOf.slice(0, 4)}
T2  - ${SITE.name}
N1  - Last checked ${example.record.asOf}
UR  - ${SITE.url.replace(/\/$/, "")}/drugs/${example.id}/
Y2  - YYYY-MM-DD
ER  - `}</Example>
          </>
        ) : null}
        <p className="text-sm leading-relaxed text-ink-2">
          Substitute <span className="font-mono text-xs">YYYY-MM-DD</span> with your access date.
          Every object page also exposes these formats in its JSON at{" "}
          <span className="font-mono text-xs">/api/v1/&lt;kind&gt;/&lt;id&gt;.json</span>.
        </p>
      </section>

      <section className="mt-10">
        <SectionHeading>Licence and attribution</SectionHeading>
        <div className="prose-magami">
          <p>
            <strong className="text-ink">Data:</strong> {SITE.licenceData}. Free to share and adapt
            for non-commercial use, with attribution. Anywhere you reuse it, include the line{" "}
            <em>&ldquo;Data from {SITE.name} ({SITE.url.replace(/^https?:\/\//, "")})&rdquo;</em> and
            a link. Commercial use needs a licence — please get in touch.
          </p>
          <p>
            <strong className="text-ink">Code:</strong> {SITE.licenceCode}. See{" "}
            <span className="font-mono text-xs">LICENSE</span> and{" "}
            <span className="font-mono text-xs">LICENSE-DATA</span> in the repository.
          </p>
          <p>
            <strong className="text-ink">Third-party material</strong> remains its owners&rsquo;
            property. Records link to their primary sources rather than reproducing them, and each
            source is the thing to cite for the underlying fact.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading>Corrections</SectionHeading>
        <div className="prose-magami">
          <p>
            If you cite something here and find it wrong, please tell us — a correction from someone
            who works on the disease is worth more than anything we can do ourselves. Every record is
            a file in an open repository and fixes are welcome.
          </p>
        </div>
      </section>
    </div>
  );
}
