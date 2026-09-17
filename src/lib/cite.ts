import type { Node } from "./graph";
import { SITE } from "./nav";

/**
 * Citation formats for a single corpus object.
 *
 * There is no DOI or versioned release yet, so a citation is built from the
 * stable page URL, the date the record was last checked (`asOf`) and the
 * reader's own access date. Readers should substitute the date they actually
 * looked at the page; the default here is the build month.
 */

export type CiteInputs = {
  /** The date the reader accessed the page, ISO (`2026-09-17`). */
  accessed?: string;
  /** The build month, used when no access date is given. */
  buildMonth?: string;
};

const BUILD_MONTH = SITE.updated;

function monthName(ym: string, monthStyle: "short" | "long" = "long"): string {
  const [y, m] = ym.split("-");
  const names = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const idx = Number(m) - 1;
  if (!names[idx]) return ym;
  return monthStyle === "short" ? `${names[idx].slice(0, 3)} ${y}` : `${names[idx]} ${y}`;
}

function accessLabel(accessed?: string, buildMonth = BUILD_MONTH): string {
  if (!accessed) return monthName(buildMonth);
  const [y, m, d] = accessed.split("-");
  const names = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const idx = Number(m) - 1;
  if (!names[idx] || !d) return accessed;
  return `${Number(d)} ${names[idx]} ${y}`;
}

export function pageUrl(node: Node): string {
  return `${SITE.url.replace(/\/$/, "")}/${node.kind}/${node.id}/`;
}

/** A one-line, human-readable citation. */
export function citePlain(node: Node, inputs: CiteInputs = {}): string {
  const accessed = accessLabel(inputs.accessed, inputs.buildMonth);
  return `${SITE.parent}. "${node.name}." ${SITE.name}, last checked ${node.record.asOf}. ${pageUrl(node)} (accessed ${accessed}).`;
}

/** APA 7th edition, web page form. */
export function citeApa(node: Node, inputs: CiteInputs = {}): string {
  const accessed = accessLabel(inputs.accessed, inputs.buildMonth);
  const year = node.record.asOf.slice(0, 4);
  return `${SITE.parent}. (${year}). ${node.name}. ${SITE.name}. Retrieved ${accessed}, from ${pageUrl(node)}`;
}

export function citeBibtex(node: Node, inputs: CiteInputs = {}): string {
  const accessed = accessLabel(inputs.accessed, inputs.buildMonth);
  const year = node.record.asOf.slice(0, 4);
  const key = `magamintd_${node.kind}_${node.id}`.replace(/[^a-zA-Z0-9_]/g, "_");
  return [
    `@misc{${key},`,
    `  title        = {${node.name}},`,
    `  author       = {{${SITE.parent}}},`,
    `  year         = {${year}},`,
    `  howpublished = {${SITE.name}},`,
    `  note         = {Last checked ${node.record.asOf}},`,
    `  url          = {${pageUrl(node)}},`,
    `  urldate      = {${accessed}}`,
    `}`,
  ].join("\n");
}

export function citeRis(node: Node, inputs: CiteInputs = {}): string {
  const accessed = accessLabel(inputs.accessed, inputs.buildMonth);
  const year = node.record.asOf.slice(0, 4);
  return [
    "TY  - ELEC",
    `TI  - ${node.name}`,
    `AU  - ${SITE.parent}`,
    `PY  - ${year}`,
    `T2  - ${SITE.name}`,
    `N1  - Last checked ${node.record.asOf}`,
    `UR  - ${pageUrl(node)}`,
    `Y2  - ${accessed}`,
    "ER  - ",
  ].join("\n");
}

/** Machine-readable citation block, used in the JSON API and JSON-LD. */
export function citeData(node: Node, inputs: CiteInputs = {}) {
  return {
    plain: citePlain(node, inputs),
    apa: citeApa(node, inputs),
    bibtex: citeBibtex(node, inputs),
    ris: citeRis(node, inputs),
    url: pageUrl(node),
    lastChecked: node.record.asOf,
    publisher: SITE.parent,
    licence: SITE.licenceData,
  };
}

/** The whole-corpus citation, for anyone citing the dataset rather than a page. */
export function corpusCitation(counts: Record<string, number>, total: number) {
  return {
    plain: `${SITE.parent}. ${SITE.name}: an open, cited map of neglected tropical diseases. ${total} linked objects across ${Object.keys(counts).length} kinds, last checked ${BUILD_MONTH}. ${SITE.url}`,
    url: SITE.url,
    lastChecked: BUILD_MONTH,
    publisher: SITE.parent,
    licence: SITE.licenceData,
  };
}
