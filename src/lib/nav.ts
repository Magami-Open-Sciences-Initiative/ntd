import type { Kind } from "./schema";
import { KIND_META } from "./schema";

export const SITE = {
  name: "Magami NTD",
  short: "Magami NTD",
  long: "Magami Neglected Tropical Diseases",
  parent: "Magami Open Sciences Initiative",
  parentUrl: "https://magamios.org",
  /** Set this to the real deployment origin before publishing. */
  url: "https://ntd.magamios.org",
  licenceCode: "MIT",
  licenceData: "CC BY-NC 4.0",
  tagline:
    "An open, cited map of neglected tropical diseases: pathogens, vectors, treatments, diagnostics, trials, and what is coming.",
  description:
    "Magami NTD is a public, cited knowledge graph of neglected tropical diseases — one page for every disease, pathogen, vector, treatment, diagnostic, target, technology, trial, institution, roadmap, bottleneck and idea, with a plain-English TL;DR on every page.",
  repo: "https://github.com/Magami-Open-Sciences-Initiative/ntd",
  /** Where contribution forms and issues live. */
  contribute: "/contribute/",
  updated: "2026-09",
};

export type NavItem = { label: string; href: string };
export type NavGroup = { title: string; items: NavItem[] };

export function kindHref(kind: Kind): string {
  return `/${kind}/`;
}

export function entityHref(kind: Kind, id: string): string {
  return `/${kind}/${id}/`;
}

export const NAV: NavGroup[] = [
  {
    title: "Start here",
    items: [
      { label: "Overview", href: "/" },
      { label: "Search", href: "/search/" },
      { label: "About", href: "/about/" },
      { label: "Contribute & verify", href: "/contribute/" },
    ],
  },
  {
    title: "Diseases & pathogens",
    items: [
      { label: KIND_META.diseases.plural, href: kindHref("diseases") },
      { label: KIND_META.pathogens.plural, href: kindHref("pathogens") },
      { label: KIND_META.vectors.plural, href: kindHref("vectors") },
    ],
  },
  {
    title: "Treatments & tools",
    items: [
      { label: KIND_META.drugs.plural, href: kindHref("drugs") },
      { label: KIND_META.diagnostics.plural, href: kindHref("diagnostics") },
      { label: KIND_META.targets.plural, href: kindHref("targets") },
      { label: KIND_META.technologies.plural, href: kindHref("technologies") },
      { label: KIND_META.trials.plural, href: kindHref("trials") },
    ],
  },
  {
    title: "Who does the work",
    items: [
      { label: KIND_META.institutions.plural, href: kindHref("institutions") },
      { label: KIND_META.countries.plural, href: kindHref("countries") },
      { label: KIND_META.people.plural, href: kindHref("people") },
    ],
  },
  {
    title: "Strategy",
    items: [
      { label: KIND_META.roadmaps.plural, href: kindHref("roadmaps") },
      { label: KIND_META.guidelines.plural, href: kindHref("guidelines") },
      { label: KIND_META.bottlenecks.plural, href: kindHref("bottlenecks") },
      { label: KIND_META.ideas.plural, href: kindHref("ideas") },
    ],
  },
  {
    title: "Reference",
    items: [{ label: KIND_META.terms.plural, href: kindHref("terms") }],
  },
];
