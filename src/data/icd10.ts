/**
 * ICD-10 codes for the disease records.
 *
 * `icd10(code, label)` builds the structured entry used on every disease page.
 * The URL points at the official WHO ICD-10 browser (Version 2019), deep-linked
 * to the code — e.g. https://icd.who.int/browse10/2019/en#/A90 — so a reader can
 * check the classification at its source rather than trusting the corpus.
 *
 * Codes are the WHO ICD-10 (international) codes. Where a disease has several
 * relevant codes (malaria, the soil-transmitted helminths, dengue) each is a
 * separate entry. Where ICD-10 has no condition-specific code, the record uses
 * the code the condition actually falls under and says so plainly in the label
 * rather than inventing one.
 */
export const ICD10_BASE = "https://icd.who.int/browse10/2019/en";

export type Icd10 = { code: string; label: string; url: string };

export function icd10(code: string, label: string): Icd10 {
  return { code, label, url: `${ICD10_BASE}#/${code}` };
}
