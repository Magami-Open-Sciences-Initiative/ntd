import type { Kind } from "@/lib/schema";
import { applySpikes, type Spike } from "./merge";
import { diseases } from "./diseases";
import { pathogens } from "./pathogens";
import { vectors } from "./vectors";
import { drugs } from "./drugs";
import { diagnostics } from "./diagnostics";
import { targets } from "./targets";
import { technologies } from "./technologies";
import { trials } from "./trials";
import { institutions } from "./institutions";
import { countries } from "./countries";
import { people } from "./people";
import { roadmaps } from "./roadmaps";
import { guidelines } from "./guidelines";
import { bottlenecks } from "./bottlenecks";
import { resistance } from "./resistance";
import { ideas } from "./ideas";
import { terms } from "./terms";
import { ADDITIONS } from "./additions";
import { CHAGAS_2026 } from "./chagas-2026";
import { CHIKV_2026 } from "./chikungunya-2026";
import { DENGUE_2026 } from "./dengue-2026";
import { FBT_2026 } from "./foodborne-2026";
import { HAT_2026 } from "./hat-2026";
import { LF_2026 } from "./lf-2026";
import { MALARIA_2026 } from "./malaria-2026";
import { NOMA_2026 } from "./noma-2026";
import { SCABIES_2026 } from "./scabies-2026";
import { SNAKEBITE_2026 } from "./snakebite-2026";
import { TRACHOMA_2026 } from "./trachoma-2026";
import { YAWS_2026 } from "./yaws-2026";
import { BURULI_ULCER_2026 } from "./buruli-ulcer-2026";
import { DRACUNCULIASIS_2026 } from "./dracunculiasis-2026";
import { EBOLA_2026 } from "./ebola-2026";
import { ECHINOCOCCOSIS_2026 } from "./echinococcosis-2026";
import { LEISHMANIASIS_2026 } from "./leishmaniasis-2026";
import { LEPROSY_2026 } from "./leprosy-2026";
import { MYCETOMA_2026 } from "./mycetoma-2026";
import { ONCHOCERCIASIS_2026 } from "./onchocerciasis-2026";
import { PODOCONIOSIS_2026 } from "./podoconiosis-2026";
import { RABIES_2026 } from "./rabies-2026";
import { SCHISTOSOMIASIS_2026 } from "./schistosomiasis-2026";
import { STH_2026 } from "./sth-2026";
import { TAENIASIS_CYSTICERCOSIS_2026 } from "./taeniasis-cysticercosis-2026";
import { TUBERCULOSIS_2026 } from "./tuberculosis-2026";
import { ZIKA_2026 } from "./zika-2026";
import { DB_LINKS } from "./db-links";
import { INSTITUTION_COUNTRIES } from "./institution-countries";
import { INSTITUTION_WEBSITES, INSTITUTION_CONTACTS } from "./institution-websites";
import { DISEASE_SPIKES } from "./spikes";
import { DRUG_DEEPDIVES } from "./deep-drugs";
import { africanPeople } from "./people-africa";
import { extraCountries, moreCountries } from "./countries-extra";
import { extraInstitutions } from "./institutions-extra";
import { africanPeopleMore } from "./people-africa-2";
import { EMERGING_ADDITIONS } from "./additions-emerging";
import { registryTrials } from "./trials-registry";
import { findDiagnostics } from "./diagnostics-find";
import { VERIFICATION } from "./verification";
import { emergingDiseases } from "./emerging-diseases";
import { EXTRA_SOURCES } from "./extra-sources";
import { PATHOGEN_COUNTRIES } from "./pathogen-countries";
import { VECTOR_COUNTRIES } from "./vector-countries";
import { DRUG_ENRICHMENT } from "./drug-enrichment";
import { DRUG_ACCESS } from "./access-2026";
import { COUNTRY_EQUITY, TECH_ECONOMICS, DISEASE_COSTS, DIAGNOSTIC_EQUITY, EQUITY_ECONOMICS_2026 } from "./implementation-economics";
import { SCRAPED_PRICE_PATCHES } from "./access-prices.generated";
import { DIAGNOSTIC_ENRICHMENT } from "./diagnostic-enrichment";
import { TARGETS_EXTRA } from "./targets-extra";
import { STRUCTURES, type Structure } from "./structures";
import {
  TARGET_SEQUENCES,
  NO_SEQUENCE as TARGETS_WITHOUT_SEQUENCE,
  UNCONFIRMED as TARGETS_UNCONFIRMED,
  type TargetSequence,
} from "./target-sequences";

/**
 * Every array that becomes part of the graph. More than one entry may share a
 * kind — records are pooled per kind — so the base files hold the corpus and
 * `additions.ts` holds the records added by later reviews.
 */
const RAW_INPUTS: { kind: Kind; records: unknown[] }[] = [
  { kind: "diseases", records: diseases },
  { kind: "diseases", records: emergingDiseases },
  { kind: "pathogens", records: pathogens },
  { kind: "vectors", records: vectors },
  { kind: "drugs", records: drugs },
  { kind: "diagnostics", records: diagnostics },
  { kind: "diagnostics", records: findDiagnostics },
  { kind: "targets", records: targets },
  { kind: "technologies", records: technologies },
  { kind: "trials", records: trials },
  { kind: "trials", records: registryTrials },
  { kind: "institutions", records: institutions },
  { kind: "countries", records: countries },
  { kind: "countries", records: extraCountries },
  { kind: "countries", records: moreCountries },
  { kind: "institutions", records: extraInstitutions },
  { kind: "people", records: people },
  { kind: "people", records: africanPeople },
  { kind: "people", records: africanPeopleMore },
  { kind: "roadmaps", records: roadmaps },
  { kind: "guidelines", records: guidelines },
  { kind: "bottlenecks", records: bottlenecks },
  { kind: "resistance", records: resistance },
  { kind: "ideas", records: ideas },
  { kind: "terms", records: terms },
  ...ADDITIONS,
  ...CHAGAS_2026,
  ...CHIKV_2026,
  ...DENGUE_2026,
  ...FBT_2026,
  ...HAT_2026,
  ...LF_2026,
  ...MALARIA_2026,
  ...NOMA_2026,
  ...SCABIES_2026,
  ...SNAKEBITE_2026,
  ...TRACHOMA_2026,
  ...YAWS_2026,
  ...BURULI_ULCER_2026,
  ...DRACUNCULIASIS_2026,
  ...EBOLA_2026,
  ...ECHINOCOCCOSIS_2026,
  ...LEISHMANIASIS_2026,
  ...LEPROSY_2026,
  ...MYCETOMA_2026,
  ...ONCHOCERCIASIS_2026,
  ...PODOCONIOSIS_2026,
  ...RABIES_2026,
  ...SCHISTOSOMIASIS_2026,
  ...STH_2026,
  ...TAENIASIS_CYSTICERCOSIS_2026,
  ...TUBERCULOSIS_2026,
  ...ZIKA_2026,
  ...EMERGING_ADDITIONS,
  ...EQUITY_ECONOMICS_2026,
  ...TARGETS_EXTRA,
];

/** Standardised-database links (NCBI Taxonomy, GBIF, domain DBs) per pathogen/vector. */
const DB_PATCHES = DB_LINKS as unknown as Record<string, Spike>;

/**
 * Institution patches: domicile as a graph ref to its corpus country record,
 * plus the verified homepage (and a note when the link points to a parent body).
 */
const INSTITUTION_PATCHES: Record<string, Spike> = Object.fromEntries(
  Object.entries(INSTITUTION_COUNTRIES).map(([id, cs]) => [id, { countries: cs } as Spike]),
);
for (const [id, w] of Object.entries(INSTITUTION_WEBSITES)) {
  INSTITUTION_PATCHES[id] = {
    ...(INSTITUTION_PATCHES[id] ?? {}),
    website: w.url,
    ...(w.note ? { websiteNote: w.note } : {}),
  };
}
for (const [id, c] of Object.entries(INSTITUTION_CONTACTS)) {
  INSTITUTION_PATCHES[id] = { ...(INSTITUTION_PATCHES[id] ?? {}), contact: c };
}

/** Structures as per-record patches, so a drug page can render its molecule. */const STRUCTURE_PATCHES: Record<string, Spike> = Object.fromEntries(
  Object.entries(STRUCTURES).map(([id, s]: [string, Structure]) => [id, { structure: s }]),
);

/** Fetched protein data as per-record patches, so a target page can render its sequence. */
const SEQUENCE_PATCHES: Record<string, Spike> = Object.fromEntries(
  Object.entries(TARGET_SEQUENCES).map(([id, s]: [string, TargetSequence]) => [id, { protein: s }]),
);

/**
 * Targets with no protein to show, and why. Covers both the ones that are not a
 * single protein at all and the ones whose exact entry could not be confirmed,
 * so no target page leaves a silent gap where a sequence would be.
 */
const PROTEIN_ABSENT_PATCHES: Record<string, Spike> = Object.fromEntries([
  ...Object.entries(TARGETS_WITHOUT_SEQUENCE).map(([id, reason]) => [id, { proteinAbsent: reason }]),
  ...Object.entries(TARGETS_UNCONFIRMED).map(([id, why]) => [id, { proteinAbsent: why }]),
]);

/**
 * Deep dives layered per record. Later maps win field by field, so a drug can be
 * touched by its prose deep dive and its structure and its class list at once.
 */
const DEEP_DIVES: Partial<Record<Kind, Record<string, Spike>>> = {
  diseases: mergeSpikes(DISEASE_SPIKES, DISEASE_COSTS),
  drugs: mergeSpikes(DRUG_DEEPDIVES, STRUCTURE_PATCHES, DRUG_ENRICHMENT, DRUG_ACCESS, SCRAPED_PRICE_PATCHES),
  pathogens: mergeSpikes(PATHOGEN_COUNTRIES, DB_PATCHES),
  vectors: mergeSpikes(VECTOR_COUNTRIES, DB_PATCHES),
  targets: mergeSpikes(SEQUENCE_PATCHES, PROTEIN_ABSENT_PATCHES),
  diagnostics: mergeSpikes(DIAGNOSTIC_ENRICHMENT, DIAGNOSTIC_EQUITY),
  institutions: INSTITUTION_PATCHES,
  technologies: TECH_ECONOMICS,
  countries: COUNTRY_EQUITY,
};

function mergeSpikes(...maps: Record<string, Spike>[]): Record<string, Spike> {
  const out: Record<string, Spike> = {};
  for (const m of maps) {
    for (const [id, spike] of Object.entries(m)) {
      out[id] = { ...(out[id] ?? {}), ...spike };
    }
  }
  return out;
}

export const ALL_INPUTS: { kind: Kind; records: unknown[] }[] = RAW_INPUTS.map(
  ({ kind, records }) => {
    const spikes = DEEP_DIVES[kind];
    const deepened = spikes ? applySpikes(records as { id: string }[], spikes) : records;
    return { kind, records: withVerification(withExtraSources(deepened)) };
  },
);

/**
 * Attach the expert-verification status in `verification.ts` by record id.
 * Absent means unverified, so no record is ever silently marked reviewed.
 */
function withVerification(records: unknown[]): unknown[] {
  return records.map((r) => {
    const rec = r as { id: string };
    const v = VERIFICATION[rec.id];
    return v ? { ...rec, verification: v } : r;
  });
}

/**
 * Append the additional primary sources in `extra-sources.ts`, deduplicated by
 * URL against the record's existing links.
 */
function withExtraSources(records: unknown[]): unknown[] {
  return records.map((r) => {
    const rec = r as { id: string; links?: { label: string; url: string }[] };
    const extra = EXTRA_SOURCES[rec.id];
    if (!extra) return r;
    const existing = rec.links ?? [];
    const seen = new Set(existing.map((l) => l.url));
    const added = extra.filter((l) => !seen.has(l.url));
    if (!added.length) return r;
    return { ...rec, links: [...existing, ...added] };
  });
}
