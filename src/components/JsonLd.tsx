import { SITE } from "@/lib/nav";
import { citeApa, citePlain } from "@/lib/cite";
import type { Node } from "@/lib/graph";

function abs(path: string) {
  return `${SITE.url.replace(/\/$/, "")}${path}`;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function siteJsonLd() {
  const base = SITE.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        name: SITE.name,
        description: SITE.description,
        url: base,
        inLanguage: "en",
        publisher: { "@id": `${base}/#org` },
        license: `${base}/about/`,
      },
      {
        "@type": "Organization",
        "@id": `${base}/#org`,
        name: SITE.parent,
        url: SITE.parentUrl,
        description: SITE.description,
      },
    ],
  };
}

export function entityJsonLd(node: Node) {
  const base = SITE.url.replace(/\/$/, "");
  const r = node.record as Record<string, unknown>;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${base}/${node.kind}/${node.id}/#article`,
    headline: node.name,
    description: String(r.tldr),
    abstract: String(r.summary),
    dateModified: String(r.asOf),
    inLanguage: "en",
    url: `${base}/${node.kind}/${node.id}/`,
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#org` },
    license: `${base}/about/`,
    about: node.name,
    citation: [citePlain(node), citeApa(node)],
    isAccessibleForFree: true,
  };
}

export { abs };
