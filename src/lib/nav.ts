import type { Kind } from "./schema";
import { KIND_META } from "./schema";

/**
 * The path the site is served under. Empty at a domain root (local dev, or a
 * custom domain); "/<repo>" on a GitHub Pages project URL. Set by the deploy
 * workflow from `actions/configure-pages`.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an internal, root-relative path (a public asset or a plain <a>) with the base path. */
export function withBase(path: string): string {
  if (!BASE_PATH || /^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}

export const SITE = {
  name: "Magami NTD",
  short: "Magami NTD",
  long: "Magami Neglected Tropical Diseases",
  parent: "Magami Open Sciences Initiative",
  parentUrl: "https://magamios.org",
  /** The public origin. Set by the deploy workflow; the custom domain by default. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ntd.magamios.org",
  licenceCode: "AGPL-3.0-only",
  licenceData: "CC BY-SA 4.0",
  tagline:
    "An open, cited map of neglected tropical diseases: pathogens, vectors, treatments, diagnostics, trials, and what is coming.",
  description:
    "Magami NTD is a public, cited knowledge graph of neglected tropical diseases — one cited, linked page for each object it covers, with a plain-English TL;DR on every page.",
  repo: "https://github.com/Magami-Open-Sciences-Initiative/ntd",
  /** Where verification notes and corrections can be emailed. */
  contactEmail: "hello@magamios.org",
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
      { label: KIND_META.resistance.plural, href: kindHref("resistance") },
      { label: KIND_META.ideas.plural, href: kindHref("ideas") },
    ],
  },
  {
    title: "Reference",
    items: [{ label: KIND_META.terms.plural, href: kindHref("terms") }],
  },
];
