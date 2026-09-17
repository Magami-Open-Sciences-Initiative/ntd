import { z } from "zod";

/* ------------------------------------------------------------------ *
 * Building blocks
 * ------------------------------------------------------------------ */

export const SourceSchema = z.object({
  label: z.string().min(2),
  url: z.url(),
});

/**
 * A headline figure shown as a stat tile — and, because it is data rather than
 * prose, a queryable fact. `value` stays the human string ("1,573"); the
 * optional `number`, `unit`, `year` and `geography` are what make a figure
 * comparable and filterable (all cases in 2023; every figure in mg/L; every
 * estimate for the WHO African Region). `source` is the citation for THIS
 * figure, not the record's general reading list, so a stat can be checked
 * without trusting the rest of the page.
 */
export const StatSchema = z.object({
  label: z.string().min(2),
  value: z.string().min(1),
  note: z.string().optional(),
  /** The figure as a number, for sorting and arithmetic (optional but preferred). */
  number: z.number().optional(),
  /** What the number counts, e.g. "cases", "countries", "%", "mg/L", "months". */
  unit: z.string().min(1).optional(),
  /** The year, or the end of the period, the figure describes. */
  year: z.number().int().min(1800).max(2100).optional(),
  /** Where it applies: "global", "WHO African Region", "Victoria, Australia". */
  geography: z.string().min(1).optional(),
  /** The specific source for this figure. */
  source: SourceSchema.optional(),
});

/** One entry in a timeline / roadmap step list. */
export const TimelineEntrySchema = z.object({
  date: z.string().min(1),
  text: z.string().min(1),
  refs: z.array(z.string()).optional(),
  source: SourceSchema.optional(),
});

/** A free-form titled block. */
export const SectionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  refs: z.array(z.string()).optional(),
});

/** "What is being done" / "standard of care" entry. */
export const CallSchema = z.object({
  title: z.string().min(1),
  detail: z.string().min(1),
  refs: z.array(z.string()).optional(),
  source: SourceSchema.optional(),
});

/**
 * Every relational field on every kind. The graph scans these for ids to
 * build forward links and backlinks; validation checks each id exists.
 * One name per kind, in the plural, matching the kind key.
 */
export const RefFields = {
  diseases: z.array(z.string()).optional(),
  pathogens: z.array(z.string()).optional(),
  vectors: z.array(z.string()).optional(),
  drugs: z.array(z.string()).optional(),
  diagnostics: z.array(z.string()).optional(),
  targets: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  trials: z.array(z.string()).optional(),
  institutions: z.array(z.string()).optional(),
  countries: z.array(z.string()).optional(),
  people: z.array(z.string()).optional(),
  roadmaps: z.array(z.string()).optional(),
  guidelines: z.array(z.string()).optional(),
  bottlenecks: z.array(z.string()).optional(),
  ideas: z.array(z.string()).optional(),
  terms: z.array(z.string()).optional(),
  related: z.array(z.string()).optional(),
};

export const REL_FIELDS = Object.keys(RefFields) as RelField[];
export type RelField = keyof typeof RefFields;

/**
 * Expert-verification status, shown on every page. Absent means "unverified"
 * (the honest default for a work-in-progress corpus). "in-review" means the
 * record has been cross-checked against primary sources by the project but has
 * not had a named subject-matter expert sign it off.
 */
export const VerificationSchema = z.object({
  status: z.enum(["verified", "in-review", "unverified"]),
  /** Who verified it, when the status is "verified". */
  by: z.string().optional(),
  /** When, e.g. "2026-09" or "2026-09-17". */
  date: z.string().optional(),
  /** What was checked, or what sign-off is still required. */
  note: z.string().optional(),
});

const Base = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  /** One or two sentences a newcomer understands. Plain English first. */
  tldr: z.string().min(10),
  /** The technical layer: a paragraph. */
  summary: z.string().min(20),
  /** The date this record was last checked, e.g. "2026-09". */
  asOf: z.string().min(4),
  /** At least one primary source. */
  links: z.array(SourceSchema).min(1),
  /** Expert-verification status; absent is treated as unverified. */
  verification: VerificationSchema.optional(),
  /** Optional shared extras every kind may carry. */
  stats: z.array(StatSchema).optional(),
  timeline: z.array(TimelineEntrySchema).optional(),
  sections: z.array(SectionSchema).optional(),
  ...RefFields,
});

/* ------------------------------------------------------------------ *
 * Kinds
 * ------------------------------------------------------------------ */

export const DiseaseSchema = Base.extend({
  /** How a person acquires it. */
  transmission: z.string().optional(),
  /** Where the disease sits relative to the WHO NTD list. Absent = it is an NTD. */
  scope: z.string().optional(),
  /** Clinical picture in one paragraph. */
  clinical: z.string().optional(),
  /** How it is confirmed. */
  diagnosis: z.string().optional(),
  /** First-line management. */
  treatment: z.string().optional(),
  /** Public-health control strategy. */
  control: z.string().optional(),
  /** WHO grouping, e.g. "Preventive chemotherapy", "Vector-borne". */
  whogroup: z.string().optional(),
});

export const PathogenSchema = Base.extend({
  /** protozoan | helminth | bacterium | virus | fungus | ectoparasite | venomous animal */
  organism: z.string().optional(),
  taxonomy: z.string().optional(),
  biology: z.string().optional(),
  lifecycle: z.string().optional(),
  /** Where the pathogen occurs and where the burden is heaviest. */
  distribution: z.string().optional(),
  drugTargets: z.string().optional(),
});

export const VectorSchema = Base.extend({
  /** insect | mollusc | triatomine | mite | snake */
  group: z.string().optional(),
  family: z.string().optional(),
  ecology: z.string().optional(),
  /** Where the vector occurs and where it matters most. */
  distribution: z.string().optional(),
  control: z.string().optional(),
  insecticideResistance: z.string().optional(),
});

export const DrugSchema = Base.extend({
  drugClass: z.string().optional(),
  mechanism: z.string().optional(),
  /** Small-molecule structure, fetched from PubChem. Absent for biologics. */
  structure: z
    .object({
      cid: z.number(),
      formula: z.string(),
      weight: z.string(),
      smiles: z.string(),
      image: z.string(),
      pubchem: z.string(),
      note: z.string().optional(),
    })
    .optional(),
  /** Other members of the same drug class, not necessarily used for an NTD. */
  classSiblings: z
    .array(z.object({ name: z.string(), note: z.string().optional() }))
    .optional(),
  /** Where the target is genuinely unsettled, say so instead of inventing one. */
  targetNote: z.string().optional(),
  indication: z.string().optional(),
  administration: z.string().optional(),
  /** Development / regulatory status. */
  status: z.string().optional(),
  resistance: z.string().optional(),
  whoStatus: z.string().optional(),
});

export const DiagnosticSchema = Base.extend({
  method: z.string().optional(),
  sampleType: z.string().optional(),
  performance: z.string().optional(),
  availability: z.string().optional(),
  turnaround: z.string().optional(),
  /* ---- FIND Test Directory dimensions (finddx.org) ---- */
  /** FIND "Type of technology": Molecular, Immunoassay, Microscopy, ... */
  technology: z.string().optional(),
  /** FIND "Primary use case": screening, diagnostic/confirmatory, ... */
  useCase: z.string().optional(),
  /** FIND "Test format": rapid diagnostic test, NAT reagent kit, cartridge, ... */
  format: z.string().optional(),
  /** FIND "Laboratory / point of care". */
  setting: z.string().optional(),
  /** FIND "Instrument requirement". */
  instrument: z.string().optional(),
  /** FIND "Level of automation". */
  automation: z.string().optional(),
  /** FIND "Self-testing or professional use". */
  operator: z.string().optional(),
  /** FIND "Stage of development": RUO, late-stage development, regulatory achieved. */
  stage: z.string().optional(),
  /** FIND "Regulatory body": WHO EUL, CE-IVDD, US FDA 510(k), ... */
  regulatory: z.string().optional(),
  /** FIND "Validated sample types". */
  samples: z.array(z.string()).optional(),
  /** Named commercial or candidate products from the FIND Test Directory. */
  products: z
    .array(
      z.object({
        name: z.string(),
        manufacturer: z.string(),
        stage: z.string().optional(),
        format: z.string().optional(),
        note: z.string().optional(),
      }),
    )
    .optional(),
});

export const TargetSchema = Base.extend({
  targetType: z.string().optional(),
  organism: z.string().optional(),
  rationale: z.string().optional(),
  druggability: z.string().optional(),
  knownLigands: z.string().optional(),
  /** Sequence, predicted model and experimental structures, fetched from UniProt, AlphaFold and the PDB. */
  protein: z
    .object({
      uniprot: z.string(),
      entryName: z.string(),
      proteinName: z.string(),
      /** UniProt's own name for the entry, when it differs from proteinName */
      uniprotName: z.string().optional(),
      organism: z.string(),
      /** true when the UniProt entry is in UniProtKB/Swiss-Prot (reviewed) */
      reviewed: z.boolean(),
      gene: z.string().optional(),
      length: z.number(),
      sequence: z.string(),
      alphafold: z
        .object({
          page: z.string(),
          pdb: z.string(),
          cif: z.string(),
          version: z.number(),
          /** Mean pLDDT, 0-100; above 90 is confidently modelled */
          plddt: z.number(),
          plddtVeryHigh: z.number(),
        })
        .optional(),
      pdb: z.object({ ids: z.array(z.string()), total: z.number() }).optional(),
      note: z.string().optional(),
    })
    .optional(),
  /** Why this target has no single protein to attach. */
  proteinAbsent: z.string().optional(),
});

export const TechnologySchema = Base.extend({
  /** Vector control | Diagnostics | Drug discovery | AI & computation | Vaccines | WASH | ... */
  category: z.string().optional(),
  /** Approved | Standard of care | Phase 3 | Preclinical | Concept | Retired */
  maturity: z.string().optional(),
  whatItDoes: z.string().optional(),
  limitation: z.string().optional(),
});

export const TrialSchema = Base.extend({
  phase: z.string().optional(),
  status: z.string().optional(),
  sponsor: z.string().optional(),
  intervention: z.string().optional(),
  result: z.string().optional(),
  registry: z.string().optional(),
});

export const InstitutionSchema = Base.extend({
  institutionType: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  focus: z.string().optional(),
});

export const RoadmapSchema = Base.extend({
  family: z.string().optional(),
  steps: z.number().optional(),
  horizon: z.string().optional(),
});

export const CountrySchema = Base.extend({
  /** e.g. "West Africa", "South Asia", "Andean Latin America" */
  region: z.string().optional(),
  /** WHO region, e.g. "African Region" */
  whoRegion: z.string().optional(),
  /** What the NTD burden looks like here. */
  burden: z.string().optional(),
  /** What has been eliminated or validated, and what has not. */
  elimination: z.string().optional(),
  /** How the programmes are run and financed. */
  programme: z.string().optional(),
});

export const PersonSchema = Base.extend({
  /** "Historical" or "Contemporary". */
  era: z.string().optional(),
  /** Life dates where they are known, e.g. "1841–1912". */
  dates: z.string().optional(),
  /** What they do or did, in one line. */
  role: z.string().optional(),
  /** The contribution this corpus records them for. */
  knownFor: z.string().optional(),
});

export const GuidelineSchema = Base.extend({  /** Who issued it, e.g. "WHO". */
  issuer: z.string().optional(),
  /** When it was issued, e.g. "2022" or "July 2026". */
  issued: z.string().optional(),
  /** "Current" | "Superseded" | "Draft for consultation". */
  status: z.string().optional(),
  /** What it covers. */
  scope: z.string().optional(),
  /** The recommendation in plain terms. */
  recommendation: z.string().optional(),
  /** What it changed relative to previous guidance. */
  whatChanged: z.string().optional(),
});

export const BottleneckSchema = Base.extend({
  scope: z.string().optional(),
  blocked: z.string().optional(),
  why: z.string().optional(),
  whatWouldUnlock: z.string().optional(),
});

export const IdeaSchema = Base.extend({
  stage: z.string().optional(),
  proposedTest: z.string().optional(),
  owner: z.string().optional(),
});

export const TermSchema = Base.extend({
  category: z.string().optional(),
  aka: z.string().optional(),
});

/* ------------------------------------------------------------------ *
 * Registry
 * ------------------------------------------------------------------ */

export const SCHEMAS = {
  diseases: DiseaseSchema,
  pathogens: PathogenSchema,
  vectors: VectorSchema,
  drugs: DrugSchema,
  diagnostics: DiagnosticSchema,
  targets: TargetSchema,
  technologies: TechnologySchema,
  trials: TrialSchema,
  institutions: InstitutionSchema,
  countries: CountrySchema,
  people: PersonSchema,
  roadmaps: RoadmapSchema,
  guidelines: GuidelineSchema,
  bottlenecks: BottleneckSchema,
  ideas: IdeaSchema,
  terms: TermSchema,
} as const;

export type Kind = keyof typeof SCHEMAS;
export const KINDS = Object.keys(SCHEMAS) as Kind[];

export type Entity = z.infer<typeof Base> & Record<string, unknown>;

/** A figure with its unit, year, geography and per-figure citation. */
export type Stat = z.infer<typeof StatSchema>;

/** Expert-verification status. */
export type Verification = z.infer<typeof VerificationSchema>;

/** Narrow a stored record to a kind's parsed shape. */
export type RecordOf<K extends Kind> = z.infer<(typeof SCHEMAS)[K]>;

/* ------------------------------------------------------------------ *
 * Presentation metadata + field layout per kind
 * ------------------------------------------------------------------ */

export type FieldType =
  | "prose"
  | "list"
  | "refs"
  | "stats"
  | "timeline"
  | "sections"
  | "calls"
  | "structure"
  | "siblings"
  | "protein"
  | "targets"
  | "products";

export type FieldSpec = { key: string; label: string; type: FieldType };

export const KIND_META: Record<
  Kind,
  { singular: string; plural: string; blurb: string; lead: number }
> = {
  diseases: {
    singular: "Disease",
    plural: "Diseases",
    blurb: "Every neglected tropical disease the WHO names, with what causes it, who it strikes, and what can be done.",
    lead: 4,
  },
  pathogens: {
    singular: "Pathogen",
    plural: "Pathogens",
    blurb: "The parasites, worms, bacteria, viruses, fungi and venoms behind the diseases.",
    lead: 3,
  },
  vectors: {
    singular: "Vector",
    plural: "Vectors",
    blurb: "The mosquitoes, flies, snails, bugs and mites that carry disease — and how to control them.",
    lead: 3,
  },
  drugs: {
    singular: "Treatment",
    plural: "Treatments",
    blurb: "Medicines that cure or control NTDs, from decades-old essential medicines to candidates in trials.",
    lead: 4,
  },
  diagnostics: {
    singular: "Diagnostic",
    plural: "Diagnostics",
    blurb: "How an infection is confirmed: from a stool smear under a microscope to a blood test that decides treatment.",
    lead: 3,
  },
  targets: {
    singular: "Target",
    plural: "Targets",
    blurb: "The molecules in a parasite a drug can switch off, and why they are hard or easy to drug.",
    lead: 3,
  },
  technologies: {
    singular: "Technology",
    plural: "Technologies",
    blurb: "The tools that fight NTDs: vector control, vaccines, diagnostics, drug discovery and AI.",
    lead: 3,
  },
  trials: {
    singular: "Trial",
    plural: "Trials",
    blurb: "Landmark and current studies, with results stated in plain terms.",
    lead: 3,
  },
  institutions: {
    singular: "Institution",
    plural: "Institutions",
    blurb: "The institutes, agencies, funders and product-development partnerships doing the work.",
    lead: 3,
  },
  countries: {
    singular: "Country",
    plural: "Countries",
    blurb: "Where the burden is, what has been eliminated, and how the programmes are run.",
    lead: 3,
  },
  people: {
    singular: "Person",
    plural: "People",
    blurb: "The people whose work this corpus records — historical discoverers and the contemporary field.",
    lead: 3,
  },
  roadmaps: {
    singular: "Roadmap",
    plural: "Roadmaps",
    blurb: "History to horizon for each family of technology, step by step.",
    lead: 2,
  },
  guidelines: {
    singular: "Guideline",
    plural: "Guidelines",
    blurb: "The recommendations that set what programmes actually do — and what changed when they were updated.",
    lead: 2,
  },
  bottlenecks: {
    singular: "Bottleneck",
    plural: "Bottlenecks",
    blurb: "The constraints slowing progress, and what would unlock them.",
    lead: 2,
  },
  ideas: {
    singular: "Idea",
    plural: "Ideas",
    blurb: "Hypotheses and fixes, each with a proposed test.",
    lead: 3,
  },
  terms: {
    singular: "Term",
    plural: "Glossary",
    blurb: "Plain-English definitions of the words this field uses.",
    lead: 4,
  },
};

/**
 * Which fields render, in what order and under what heading, on a detail page.
 * Relational fields are handled uniformly by the "refs" type.
 */
export const KIND_FIELDS: Record<Kind, FieldSpec[]> = {
  diseases: [
    { key: "scope", label: "Scope", type: "prose" },
    { key: "whogroup", label: "WHO group", type: "prose" },
    { key: "pathogens", label: "Caused by", type: "refs" },
    { key: "vectors", label: "Spread by", type: "refs" },
    { key: "countries", label: "Where it occurs", type: "refs" },
    { key: "transmission", label: "Transmission", type: "prose" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "clinical", label: "Clinical picture", type: "prose" },
    { key: "diagnosis", label: "Diagnosis", type: "prose" },
    { key: "diagnostics", label: "Diagnostics", type: "refs" },
    { key: "treatment", label: "Treatment", type: "prose" },
    { key: "drugs", label: "Treatments", type: "refs" },
    { key: "targets", label: "Drug targets", type: "refs" },
    { key: "control", label: "Control", type: "prose" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "trials", label: "Trials", type: "refs" },
    { key: "institutions", label: "Who is working on it", type: "refs" },
    { key: "roadmaps", label: "Roadmaps", type: "refs" },
    { key: "bottlenecks", label: "Bottlenecks", type: "refs" },
    { key: "ideas", label: "Ideas", type: "refs" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  pathogens: [
    { key: "organism", label: "Type", type: "prose" },
    { key: "taxonomy", label: "Taxonomy", type: "prose" },
    { key: "biology", label: "Biology", type: "prose" },
    { key: "lifecycle", label: "Life cycle", type: "prose" },
    { key: "distribution", label: "Where it occurs", type: "prose" },
    { key: "countries", label: "Countries where it is prevalent", type: "refs" },
    { key: "diseases", label: "Diseases it causes", type: "refs" },
    { key: "vectors", label: "Vectors", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "drugTargets", label: "Drug targets", type: "prose" },
    { key: "targets", label: "Targets", type: "refs" },
    { key: "drugs", label: "Treatments", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  vectors: [
    { key: "group", label: "Group", type: "prose" },
    { key: "family", label: "Family", type: "prose" },
    { key: "ecology", label: "Ecology", type: "prose" },
    { key: "distribution", label: "Where it occurs", type: "prose" },
    { key: "countries", label: "Countries where it is prevalent", type: "refs" },
    { key: "diseases", label: "Diseases it carries", type: "refs" },
    { key: "pathogens", label: "Pathogens it carries", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "control", label: "Control", type: "prose" },
    { key: "insecticideResistance", label: "Insecticide resistance", type: "prose" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  drugs: [
    { key: "drugClass", label: "Class", type: "prose" },
    { key: "mechanism", label: "Mechanism", type: "prose" },
    { key: "structure", label: "Structure", type: "structure" },
    { key: "classSiblings", label: "Others in this class", type: "siblings" },
    { key: "indication", label: "Used for", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "pathogens", label: "Pathogens", type: "refs" },
    { key: "targets", label: "Targets", type: "targets" },
    { key: "administration", label: "How it is given", type: "prose" },
    { key: "status", label: "Status", type: "prose" },
    { key: "whoStatus", label: "WHO listing", type: "prose" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "resistance", label: "Resistance", type: "prose" },
    { key: "trials", label: "Trials", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  diagnostics: [
    { key: "method", label: "Method", type: "prose" },
    { key: "technology", label: "Technology", type: "prose" },
    { key: "useCase", label: "Use case", type: "prose" },
    { key: "format", label: "Test format", type: "prose" },
    { key: "setting", label: "Setting", type: "prose" },
    { key: "instrument", label: "Instrument", type: "prose" },
    { key: "automation", label: "Automation", type: "prose" },
    { key: "operator", label: "Operator", type: "prose" },
    { key: "sampleType", label: "Sample", type: "prose" },
    { key: "samples", label: "Validated sample types", type: "prose" },
    { key: "turnaround", label: "Turnaround", type: "prose" },
    { key: "performance", label: "Performance", type: "prose" },
    { key: "stage", label: "Stage of development", type: "prose" },
    { key: "regulatory", label: "Regulatory status", type: "prose" },
    { key: "products", label: "Representative products", type: "products" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "pathogens", label: "Pathogens", type: "refs" },
    { key: "availability", label: "Availability", type: "prose" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  targets: [
    { key: "targetType", label: "Target type", type: "prose" },
    { key: "organism", label: "Organism", type: "prose" },
    { key: "rationale", label: "Why it matters", type: "prose" },
    { key: "druggability", label: "Druggability", type: "prose" },
    { key: "knownLigands", label: "Known ligands", type: "prose" },
    { key: "protein", label: "Protein", type: "protein" },
    { key: "proteinAbsent", label: "Protein", type: "prose" },
    { key: "pathogens", label: "Pathogens", type: "refs" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  technologies: [
    { key: "category", label: "Category", type: "prose" },
    { key: "maturity", label: "Maturity", type: "prose" },
    { key: "whatItDoes", label: "What it does", type: "prose" },
    { key: "limitation", label: "Limitation", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "pathogens", label: "Pathogens", type: "refs" },
    { key: "vectors", label: "Vectors", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  trials: [
    { key: "phase", label: "Phase", type: "prose" },
    { key: "status", label: "Status", type: "prose" },
    { key: "intervention", label: "Intervention", type: "prose" },
    { key: "sponsor", label: "Sponsor", type: "prose" },
    { key: "result", label: "Result", type: "prose" },
    { key: "registry", label: "Registry", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "institutions", label: "Institutions", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "timeline", label: "Milestones", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  institutions: [
    { key: "institutionType", label: "Type", type: "prose" },
    { key: "country", label: "Country", type: "prose" },
    { key: "city", label: "City", type: "prose" },
    { key: "focus", label: "Focus", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "trials", label: "Trials", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  countries: [
    { key: "region", label: "Region", type: "prose" },
    { key: "whoRegion", label: "WHO region", type: "prose" },
    { key: "burden", label: "Burden", type: "prose" },
    { key: "elimination", label: "Elimination status", type: "prose" },
    { key: "programme", label: "How the programmes work", type: "prose" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "diseases", label: "NTDs here", type: "refs" },
    { key: "institutions", label: "Who works here", type: "refs" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  people: [
    { key: "era", label: "Era", type: "prose" },
    { key: "dates", label: "Dates", type: "prose" },
    { key: "role", label: "Role", type: "prose" },
    { key: "knownFor", label: "Known for", type: "prose" },
    { key: "stats", label: "At a glance", type: "stats" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "institutions", label: "Institutions", type: "refs" },
    { key: "countries", label: "Countries", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  roadmaps: [
    { key: "family", label: "Family", type: "prose" },
    { key: "horizon", label: "Horizon", type: "prose" },
    { key: "timeline", label: "The steps", type: "timeline" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "stats", label: "At a glance", type: "stats" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  guidelines: [
    { key: "issuer", label: "Issued by", type: "prose" },
    { key: "issued", label: "Date", type: "prose" },
    { key: "status", label: "Status", type: "prose" },
    { key: "scope", label: "Scope", type: "prose" },
    { key: "recommendation", label: "What it recommends", type: "prose" },
    { key: "whatChanged", label: "What changed", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "institutions", label: "Issuing bodies", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "stats", label: "At a glance", type: "stats" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  bottlenecks: [
    { key: "scope", label: "Scope", type: "prose" },
    { key: "blocked", label: "What it blocks", type: "prose" },
    { key: "why", label: "Why it persists", type: "prose" },
    { key: "whatWouldUnlock", label: "What would unlock it", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "countries", label: "Countries", type: "refs" },
    { key: "people", label: "People", type: "refs" },
    { key: "ideas", label: "Ideas", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "timeline", label: "History", type: "timeline" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  ideas: [
    { key: "stage", label: "Stage", type: "prose" },
    { key: "proposedTest", label: "Proposed test", type: "prose" },
    { key: "owner", label: "Who could run it", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "bottlenecks", label: "Bottlenecks it addresses", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "countries", label: "Countries", type: "refs" },
    { key: "stats", label: "Key figures", type: "stats" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "terms", label: "Glossary", type: "refs" },
  ],
  terms: [
    { key: "aka", label: "Also known as", type: "prose" },
    { key: "category", label: "Category", type: "prose" },
    { key: "diseases", label: "Diseases", type: "refs" },
    { key: "technologies", label: "Technologies", type: "refs" },
    { key: "drugs", label: "Drugs", type: "refs" },
    { key: "sections", label: "Detail", type: "sections" },
    { key: "related", label: "Related terms", type: "refs" },
  ],
};
