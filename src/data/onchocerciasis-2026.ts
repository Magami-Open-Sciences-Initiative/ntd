import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Onchocerciasis 2026 fact-check additions: onchocerciasis-associated
 * epilepsy, the new rapid diagnostic test in development, the two active
 * trials the graph was missing, the African and epilepsy researchers, and
 * the ideas that the 2026 source cross-check (WHO fact sheet 4 Dec 2025,
 * WER 100(41):451–460, G-FINDER 2024, ClinicalTrials.gov, ChEMBL, Open
 * Targets, PubMed) showed were missing. Ordinary records of their kind, kept
 * in one file so the review is visible as a set; wired into `index.ts`.
 *
 * Cross-check also corrected the spike: Senegal has stopped treatment (2022)
 * and is under post-treatment surveillance, not merely "close behind"
 * verification; and the unsourced "eleven African countries" claim was
 * replaced with WHO's exact list of countries that have stopped MDA in at
 * least one focus.
 *
 * Honest negatives: Open Targets carries onchocerciasis (MONDO_0017137) with
 * 125 associated targets, all low-score host immunology (CALR 0.028, IGHE,
 * IL5) — no drug target, as expected for a disease whose drugs act on the
 * parasite. ChEMBL lists only three O. volvulus proteins — chitinase, the
 * glutamate-gated chloride channel (the ivermectin target, already in the
 * corpus) and glutamate-cysteine ligase — reflecting how little the parasite
 * proteome has been characterised.
 */
export const ONCHOCERCIASIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* --------------------------------- terms -------------------------------- */
  {
    kind: "terms",
    records: [
      {
        id: "onchocerciasis-associated-epilepsy",
        name: "Onchocerciasis-associated epilepsy (and nodding syndrome)",
        tldr: "Epilepsy in children caused by early infection with the river-blindness worm — the complication that turns elimination into child protection.",
        summary:
          "Onchocerciasis-associated epilepsy (OAE) is a form of epilepsy that appears in previously healthy children living in areas of intense Onchocerca volvulus transmission, often beginning with clusters of seizures. Nodding syndrome — repetitive head-dropping attacks in children — is its most familiar and severe presentation, described in Uganda, South Sudan and Tanzania since the 1990s. WHO's 2025 fact sheet now states the association directly: early exposure to O. volvulus is associated with epilepsy in children. The mechanism is not fully settled, but the epidemiological link between high transmission and seizure incidence is strong, which is why community-directed ivermectin treatment is now studied as epilepsy prevention and why trials measure seizure incidence as an outcome. It shifts the case for elimination from preventing blindness decades later to protecting a generation of children now.",
        ...R,
        links: [
          { label: "WHO — onchocerciasis (fact sheet, 4 December 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
          { label: "Colebunders et al. — onchocerciasis-associated epilepsy (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Colebunders+R+onchocerciasis+epilepsy" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        technologies: ["mass-drug-administration", "community-health-workers"],
        people: ["robert-colebunders", "joseph-siewe-fodjo"],
        countries: ["uganda", "south-sudan", "tanzania"],
        terms: ["ntd", "elimination", "eot"],
        stats: [
          { label: "Association", value: "Confirmed by WHO, 2025 fact sheet" },
          { label: "Where described", value: "Uganda, South Sudan, Tanzania and other high-transmission areas" },
        ],
      },
    ],
  },
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "oncho-rapid-diagnostic-test",
        name: "Rapid diagnostic test for onchocerciasis elimination (in development)",
        tldr: "A candidate field test meant to certify that transmission has stopped — the tool onchocerciasis verification is missing.",
        summary:
          "Proving that onchocerciasis transmission has stopped is the field's binding constraint. Skin snips are invasive and go blind at low infection levels; the Ov-16 antibody test stays positive for years after the last worm dies, so in adults it cannot distinguish past from current transmission; and molecular methods need laboratory capacity. A rapid diagnostic test designed specifically to support onchocerciasis elimination is in development, with a field evaluation study recruiting (NCT06350851). If it delivers a specific, low-cost, field-usable signal of recent or current infection, it would supply the evidence WHO needs to verify elimination and to justify stopping treatment — the decision the whole endgame turns on. WHO's diagnostic advisory group has named new onchocerciasis diagnostics a specific priority.",
        ...R,
        method: "Rapid diagnostic test (antigen or biomarker), in development",
        sampleType: "Blood (field-collected)",
        performance: "Not yet established; being evaluated for use in elimination verification.",
        availability: "Research-stage; field evaluation recruiting",
        stage: "In development and field evaluation (NCT06350851)",
        links: [
          { label: "New rapid diagnostic test for onchocerciasis elimination (NCT06350851)", url: "https://clinicaltrials.gov/study/NCT06350851" },
          { label: "WHO — onchocerciasis (fact sheet, December 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["ntd", "elimination", "eot", "sensitivity-specificity"],
        stats: [
          { label: "Purpose", value: "Evidence to verify elimination and justify stopping treatment" },
          { label: "Stage", value: "Field evaluation recruiting (n≈400)" },
        ],
      },
    ],
  },
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "oncho-combination-regimens-ph2",
        name: "Novel combination regimens for onchocerciasis (Liberia)",
        tldr: "A Phase 2 trial testing drug combinations to kill adult worms — the macrofilaricidal goal the field has chased for decades.",
        summary:
          "Ivermectin suppresses microfilariae but does not reliably kill the adult Onchocerca volvulus worms, which live up to 15 years — so treatment must continue for the worm's lifetime, and elimination programmes are locked into a 10–15 year horizon. This Phase 2 trial at a site in Liberia tests novel combinations of existing and repurposed drugs for their effect on adult worms, with an estimated 300 participants (NCT06070116). Combination therapy is a deliberate strategy: pairing drugs with different mechanisms may achieve what single agents have not, and could shorten the treatment horizon that currently defines elimination. It is also a sign of the field's geographic broadening — a West African site testing the next generation of treatment.",
        ...R,
        phase: "Phase 2",
        status: "Active, not recruiting",
        sponsor: "Washington University School of Medicine",
        intervention: "Novel combination regimens (adult-worm / macrofilaricidal endpoints)",
        result: "Pending; testing whether combinations improve adult-worm killing over ivermectin alone.",
        registry: "ClinicalTrials.gov NCT06070116",
        registryUrl: "https://clinicaltrials.gov/study/NCT06070116",
        links: [
          { label: "Novel combination regimens for onchocerciasis (NCT06070116)", url: "https://clinicaltrials.gov/study/NCT06070116" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        drugs: ["ivermectin"],
        technologies: ["drug-repurposing"],
        terms: ["ntd", "elimination", "eot"],
        stats: [
          { label: "Enrolment", value: "300 (estimated)", number: 300, unit: "participants", source: { label: "ClinicalTrials.gov NCT06070116", url: "https://clinicaltrials.gov/study/NCT06070116" } },
          { label: "Goal", value: "Kill adult worms — shorten the 10–15 year horizon" },
        ],
      },
      {
        id: "oncho-rapid-diagnostic-trial",
        name: "Field evaluation of a rapid diagnostic test for onchocerciasis elimination",
        tldr: "The field study that decides whether a new rapid test can do the job skin snips and Ov-16 cannot — certify that transmission has stopped.",
        summary:
          "This study evaluates a newly developed rapid diagnostic test for onchocerciasis against the diagnostics programmes currently use, with an estimated 400 participants, sponsored by Bioaster (NCT06350851). Its importance is programme-level rather than individual: if the test is specific enough to distinguish recent infection from old exposure, it can support the stopping decisions and post-treatment surveillance that elimination verification depends on — the single hardest technical problem in the onchocerciasis endgame, and one WHO's diagnostic advisory group has flagged as a priority. A test that works in the field would also make the repeated, expensive surveys that currently rely on laboratory methods cheaper and faster.",
        ...R,
        phase: "Diagnostic field evaluation",
        status: "Recruiting",
        sponsor: "Bioaster, with partners",
        intervention: "New rapid diagnostic test versus current diagnostic methods",
        result: "Pending; the test's field performance determines whether it can support stopping and verification decisions.",
        registry: "ClinicalTrials.gov NCT06350851",
        registryUrl: "https://clinicaltrials.gov/study/NCT06350851",
        links: [
          { label: "Rapid diagnostic test for onchocerciasis elimination (NCT06350851)", url: "https://clinicaltrials.gov/study/NCT06350851" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        diagnostics: ["oncho-rapid-diagnostic-test", "antibody-rdt", "skin-snip"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["ntd", "eot", "sensitivity-specificity"],
        stats: [
          { label: "Enrolment", value: "400 (estimated)", number: 400, unit: "participants", source: { label: "ClinicalTrials.gov NCT06350851", url: "https://clinicaltrials.gov/study/NCT06350851" } },
        ],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "robert-colebunders",
        name: "Robert Colebunders",
        tldr: "The Belgian physician who established onchocerciasis-associated epilepsy as a distinct, preventable disease in African children.",
        summary:
          "Robert Colebunders, emeritus professor at the University of Antwerp, built the evidence that onchocerciasis causes epilepsy in children — the finding that reframed river blindness from an adult eye disease into a cause of childhood neurological disability. He and his collaborators linked nodding syndrome and other seizure disorders to high Onchocerca volvulus transmission in Uganda, South Sudan, Tanzania and the DRC, argued that prevention of new infections prevents epilepsy, and helped establish onchocerciasis-associated epilepsy (OAE) as a recognised condition with its own research agenda and WHO attention. He is among the most cited authors in the onchocerciasis literature, and his work is the reason elimination is now argued for in terms of protecting children.",
        ...R,
        era: "Contemporary",
        role: "Emeritus professor of infectious diseases, University of Antwerp, Belgium",
        knownFor: "Establishing onchocerciasis-associated epilepsy and nodding syndrome.",
        links: [
          { label: "Colebunders et al. — onchocerciasis-associated epilepsy (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Colebunders+R+onchocerciasis+epilepsy" },
          { label: "WHO — onchocerciasis (fact sheet, 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        terms: ["onchocerciasis-associated-epilepsy", "ntd", "elimination"],
      },
      {
        id: "daniel-boakye",
        name: "Daniel Adjei Boakye",
        tldr: "The Ghanaian parasitologist who has led African research on onchocerciasis transmission, vector control and elimination.",
        summary:
          "Daniel Adjei Boakye is a Ghanaian parasitologist and former director of the Noguchi Memorial Institute for Medical Research at the University of Ghana, whose work spans the transmission dynamics, vectors and control of onchocerciasis and lymphatic filariasis. He has been central to African-led research on Simulium vectors, on the epidemiology of infection in Ghana and neighbouring countries, and on the tools that elimination verification needs — including xenomonitoring and molecular surveillance. His career represents the African scientific leadership that makes continental elimination credible, and the Noguchi Institute is one of the region's key laboratories for vector-borne NTD research.",
        ...R,
        era: "Contemporary",
        role: "Parasitologist; former director, Noguchi Memorial Institute for Medical Research, University of Ghana",
        knownFor: "Onchocerciasis and lymphatic filariasis transmission, vectors and control in Africa.",
        links: [
          { label: "Boakye et al. — onchocerciasis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Boakye+DA+onchocerciasis" },
        ],
        diseases: ["onchocerciasis", "lymphatic-filariasis"],
        pathogens: ["onchocerca-volvulus"],
        technologies: ["xenomonitoring", "vector-surveillance"],
        institutions: ["noguchi", "who"],
        countries: ["ghana"],
        terms: ["ntd", "elimination"],
      },
      {
        id: "joseph-siewe-fodjo",
        name: "Joseph Nelson Siewe Fodjo",
        tldr: "The Cameroonian researcher mapping onchocerciasis-associated epilepsy and testing whether treatment prevents it.",
        summary:
          "Joseph Nelson Siewe Fodjo is a Cameroonian physician-researcher who works on onchocerciasis-associated epilepsy and nodding syndrome, first with Robert Colebunders' group in Antwerp and increasingly leading studies himself. His work has characterised the burden of epilepsy in onchocerciasis-endemic communities in Cameroon, South Sudan and elsewhere, examined its association with transmission intensity, and studied whether strengthened community-directed treatment reduces new seizures. He embodies the field's African leadership on the complication that now drives the elimination argument: African researchers studying a disease of African children, in the communities where it occurs.",
        ...R,
        era: "Contemporary",
        role: "Physician-researcher, onchocerciasis-associated epilepsy; Cameroon and international collaborations",
        knownFor: "Epidemiology of onchocerciasis-associated epilepsy and its prevention.",
        links: [
          { label: "Siewe Fodjo et al. — onchocerciasis-associated epilepsy (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Siewe+Fodjo+JN+onchocerciasis" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        technologies: ["mass-drug-administration", "community-health-workers"],
        countries: ["cameroon", "south-sudan"],
        terms: ["onchocerciasis-associated-epilepsy", "ntd", "elimination"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "eliminate-to-prevent-epilepsy",
        name: "Argue for elimination in children's seizures, not adult blindness",
        tldr: "If river blindness causes childhood epilepsy, then interrupting transmission protects children within years — and the case for elimination becomes urgent rather than generational.",
        summary:
          "The traditional case for onchocerciasis control was preventing blindness in adults — a benefit that takes decades to appear and is hard to demonstrate, which is partly why funding has declined since moxidectin's approval. The recognition that early Onchocerca volvulus infection causes epilepsy in children changes the argument entirely: the outcome being prevented is childhood seizures and lifelong cognitive disability, in the children of communities being treated now. The proposal is to make onchocerciasis-associated epilepsy an explicit, quantified programme outcome — measure seizure incidence in high-transmission foci, evaluate community-directed treatment as epilepsy prevention, integrate epilepsy surveillance into NTD programmes in co-endemic countries (Uganda, South Sudan, Tanzania, DRC, Cameroon), and give funders and ministries an outcome that is immediate, visible and morally undeniable rather than a slow statistical decline.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add epilepsy incidence to onchocerciasis programme monitoring in high-transmission foci; assess whether intensified/continued treatment reduces new childhood seizures and quantify the epilepsy burden averted.",
        owner: "National NTD and epilepsy programmes with WHO and the OAE research network",
        links: [
          { label: "WHO — onchocerciasis (fact sheet, December 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
          { label: "Colebunders et al. — onchocerciasis-associated epilepsy", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Colebunders+R+onchocerciasis+epilepsy" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        technologies: ["mass-drug-administration", "community-health-workers", "mhealth-surveillance"],
        institutions: ["who"],
        countries: ["uganda", "south-sudan", "tanzania", "cameroon"],
        bottlenecks: ["funding-gap", "surveillance-data-gap", "stigma-and-disability"],
        terms: ["onchocerciasis-associated-epilepsy", "ntd", "elimination", "eot"],
        stats: [
          { label: "Turn", value: "Prevention measured in children, not decades-later blindness" },
          { label: "Would counter", value: "Declining funding since 2018 (−22% in 2023)" },
        ],
      },
      {
        id: "validate-stopping-and-verification",
        name: "Validate the evidence that lets a country stop treating",
        tldr: "The decision to stop is as consequential as the decision to start — and the tests for making it are imperfect exactly where it matters.",
        summary:
          "Burkina Faso showed that stopping treatment early can be followed by resurgence, and countries now attempting elimination must decide when to stop in the face of diagnostics that mislead. Skin snips go negative before infection is truly gone; the Ov-16 antibody test stays positive for years after the last worm dies; and xenomonitoring needs capacity most endemic districts do not have. The proposal is a coordinated programme to validate stopping thresholds and post-verification surveillance with the newer molecular and rapid assays — including the rapid diagnostic test in field evaluation — across the countries that have stopped treatment in a focus (Senegal, Equatorial Guinea, Ethiopia, Mali, Nigeria, Sudan, Tanzania, Togo, Uganda). Their real-world experience is the only dataset that can settle what 'stopped' should mean.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pool surveillance data and samples from countries that have stopped MDA in a focus, compare diagnostics against outcomes, and define validated stopping thresholds and post-verification surveillance protocols.",
        owner: "WHO with national programmes, GONE and the diagnostic developers",
        links: [
          { label: "WHO — onchocerciasis (fact sheet, December 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
          { label: "WHO — onchocerciasis 2024 statistics (WER 100(41):451–460)", url: "https://www.who.int/publications/i/item/who-wer10041-451-460" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        diagnostics: ["oncho-rapid-diagnostic-test", "antibody-rdt", "skin-snip", "molecular-pcr"],
        technologies: ["xenomonitoring", "genomic-surveillance", "mhealth-surveillance"],
        institutions: ["who", "gone"],
        countries: ["senegal", "ethiopia", "mali", "nigeria", "sudan", "tanzania", "uganda"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["eot", "elimination", "ntd", "sensitivity-specificity"],
        stats: [
          { label: "Precedent", value: "Burkina Faso resurged after stopping early" },
          { label: "Countries to learn from", value: "9 African countries have stopped MDA in at least one focus" },
        ],
      },
      {
        id: "reach-mobile-migrant-populations",
        name: "Reach the mobile and migrant populations elimination leaves behind",
        tldr: "The last transmission will hide among people no fixed clinic can count — mobile pastoralists, migrants and communities in insecurity.",
        summary:
          "WHO's own research priorities for onchocerciasis name the problem first: optimizing strategies to reach marginalised and migratory populations. Elimination programmes are built on community-directed treatment in fixed, mapped villages, but the people who remain untreated are often those who move — pastoralists, seasonal labourers, displaced families and communities in conflict-affected areas where security disrupts programmes. A single untreated focus can seed resurgence across a border, which is why GONE exists and why the last mile is coordinated regionally. The proposal is cross-border, mobile delivery: route-based treatment points, migrant registration and tracking, integration with other health services that mobile populations already use, and cross-border data sharing so an untreated focus on one side of a border is visible from the other.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Design and pilot cross-border mobile treatment and surveillance in a migratory corridor, measuring coverage among mobile groups and detecting untreated foci through shared data.",
        owner: "National NTD programmes with GONE, WHO AFRO and regional economic communities",
        links: [
          { label: "WHO — onchocerciasis (fact sheet, December 2025): research priorities", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
        ],
        diseases: ["onchocerciasis"],
        pathogens: ["onchocerca-volvulus"],
        technologies: ["community-health-workers", "mhealth-surveillance", "mass-drug-administration"],
        institutions: ["who", "gone"],
        bottlenecks: ["surveillance-data-gap", "funding-gap", "workforce-and-capacity"],
        terms: ["ntd", "elimination", "eot"],
        stats: [
          { label: "WHO priority", value: "Reaching marginalised and migratory populations" },
          { label: "Why it matters", value: "One untreated focus can seed resurgence across a border" },
        ],
      },
    ],
  },
];
