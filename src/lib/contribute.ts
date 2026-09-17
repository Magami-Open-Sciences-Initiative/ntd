import { SITE } from "./nav";

export type ContributionRecord = {
  kind: string;
  id: string;
  name: string;
  url: string;
  status?: string;
};

/** Absolute URL of an entity page, for pre-filling forms. */
export function pageUrl(kind: string, id: string): string {
  return `${SITE.url}/${kind}/${id}/`;
}

/** A pre-filled GitHub issue, opened by whoever is contributing. */
export function issueUrl(
  template: "expert-verification.yml" | "correction.yml",
  params: Record<string, string>,
): string {
  const q = new URLSearchParams({ template, ...params });
  return `${SITE.repo}/issues/new?${q.toString()}`;
}

/** A plain-text verification statement an expert can paste into an issue or an email. */
export function verificationStatement(r: ContributionRecord, date = new Date().toISOString().slice(0, 10)): string {
  return [
    `Expert verification: ${r.name}`,
    `Record: ${r.kind}/${r.id}`,
    `Page: ${r.url}`,
    `Date: ${date}`,
    `Current status: ${r.status ?? "unverified"}`,
    "",
    "My verdict (delete as appropriate): I have reviewed this page and it is accurate / it needs the corrections below.",
    "My expertise / how I work on this topic:",
    "Reviewer name and affiliation (for credit):",
    "Consent to be named as the reviewer: yes / no",
    "",
    "Corrections or comments (quote the sentence and give the source):",
    "",
    "Sources / citations I rely on:",
  ].join("\n");
}

/** The one-line entry a maintainer adds to src/data/verification.ts. */
export function verificationEntry(
  id: string,
  by: string,
  date: string,
  note: string,
): string {
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `  "${id}": { status: "verified", by: "${esc(by)}", date: "${esc(date)}", note: "${esc(note)}" },`;
}
