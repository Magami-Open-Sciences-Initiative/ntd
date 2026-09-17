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
import { ideas } from "./ideas";
import { terms } from "./terms";
import { ADDITIONS } from "./additions";
import { DISEASE_SPIKES } from "./spikes";
import { DRUG_DEEPDIVES } from "./deep-drugs";
import { africanPeople } from "./people-africa";
import { extraCountries, moreCountries } from "./countries-extra";
import { extraInstitutions } from "./institutions-extra";
import { africanPeopleMore } from "./people-africa-2";
import { EMERGING_ADDITIONS } from "./additions-emerging";
import { emergingDiseases } from "./emerging-diseases";
import { EXTRA_SOURCES } from "./extra-sources";
import { PATHOGEN_COUNTRIES } from "./pathogen-countries";
import { VECTOR_COUNTRIES } from "./vector-countries";
import { DRUG_ENRICHMENT } from "./drug-enrichment";
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
  { kind: "targets", records: targets },
  { kind: "technologies", records: technologies },
  { kind: "trials", records: trials },
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
  { kind: "ideas", records: ideas },
  { kind: "terms", records: terms },
  ...ADDITIONS,
  ...EMERGING_ADDITIONS,
  ...TARGETS_EXTRA,
];

/** Structures as per-record patches, so a drug page can render its molecule. */
const STRUCTURE_PATCHES: Record<string, Spike> = Object.fromEntries(
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
  diseases: DISEASE_SPIKES,
  drugs: mergeSpikes(DRUG_DEEPDIVES, STRUCTURE_PATCHES, DRUG_ENRICHMENT),
  pathogens: PATHOGEN_COUNTRIES,
  vectors: VECTOR_COUNTRIES,
  targets: mergeSpikes(SEQUENCE_PATCHES, PROTEIN_ABSENT_PATCHES),
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
    return { kind, records: withExtraSources(deepened) };
  },
);

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
