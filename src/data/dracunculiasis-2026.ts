import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Dracunculiasis 2026 fact-check additions: the drug, trial, diagnostic,
 * guideline, ideas, person and institution that the 2026 source cross-check
 * (WHO WER global surveillance summary 2024, CDC MMWR Jan 2026, Carter Center
 * Jan 2026, ChEMBL, Open Targets, PubMed) showed were missing from the
 * guinea-worm graph. Ordinary records of their kind, kept in one file so the
 * review is visible as a set; wired into `index.ts` alongside ADDITIONS.
 *
 * Two honest negatives from the cross-check, recorded here so they are not
 * re-searched: Open Targets carries dracunculiasis (MONDO_0016472) with 38
 * associated human targets, all low-score animal-model text-mining hits
 * (top: ITGB2, score 0.058) — no validated therapeutic target, as expected
 * for a disease with no drug whose biology is parasite-side. ChEMBL carries
 * no Dracunculus-specific target entry. G-FINDER reports no standalone
 * dracunculiasis R&D line (it sits inside the helminth aggregate at minimal
 * funding); the eradication effort is operationally funded. No human
 * interventional trial for dracunculiasis exists in ICTRP/ClinicalTrials.gov;
 * the only trials are the veterinary flubendazole field studies below.
 */
export const DRACUNCULIASIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "flubendazole",
        name: "Flubendazole (veterinary, investigational for guinea worm in dogs)",
        tldr: "A benzimidazole worm medicine being tested in dogs — the only drug candidate aimed at the animal reservoir that now blocks guinea-worm eradication.",
        summary:
          "Flubendazole is a long-established benzimidazole anthelmintic used against gut worms in animals and people. It has no role in human guinea-worm disease, which has no drug treatment — the worm must still be wound out by hand. Its new significance is veterinary: laboratory ferret studies showed subcutaneous flubendazole disrupts embryo development inside female Dracunculus medinensis so larvae cannot infect copepods, and a 2019 randomised field trial in 23 Chadian villages (600 dogs) followed for 33 months found that villages receiving flubendazole together with proactive dog tethering had 83% fewer emerging dog worms than villages under baseline measures. A second, larger field trial (\"Flubendazole 2.0\") was designed to confirm the effect. If confirmed, this would be the first therapeutic tool the eradication programme has ever had against the dog reservoir.",
        ...R,
        drugClass: "Benzimidazole anthelmintic",
        mechanism:
          "Binds the colchicine site of beta-tubulin, blocking microtubule polymerisation; in D. medinensis it disrupts morula development in the worm uterus, leaving larvae immotile and unable to infect copepods.",
        indication: "Investigational: guinea-worm infection in domestic dogs (no human indication).",
        administration: "Subcutaneous injection, 15 mg/kg; field regimens tested repeat rounds months apart.",
        status: "Veterinary-licensed anthelmintic; investigational for D. medinensis — field-trial stage, not programmatic use",
        links: [
          { label: "ChEMBL — flubendazole (CHEMBL1454946)", url: "https://www.ebi.ac.uk/chembl/explore/compound/CHEMBL1454946" },
          { label: "Cleveland et al. — flubendazole trials in ferrets and dogs in Chad (2022)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9128682" },
          { label: "Dupper et al. — flubendazole plus tethering in dogs, Chad (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41628272" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        trials: ["flubendazole-dog-trial-chad"],
        institutions: ["university-of-georgia", "carter-center", "cdc"],
        stats: [
          { label: "ChEMBL max phase", value: "Phase 2", source: { label: "ChEMBL — flubendazole (CHEMBL1454946)", url: "https://www.ebi.ac.uk/chembl/explore/compound/CHEMBL1454946" } },
          { label: "Concurrent effect", value: "83% fewer dog worms", note: "flubendazole plus proactive tethering vs baseline, Mar–Aug 2021, 95% CI 76–88%", source: { label: "Dupper et al., PLoS NTD 2026", url: "https://pubmed.ncbi.nlm.nih.gov/41628272" } },
        ],
      },
    ],
  },
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "flubendazole-dog-trial-chad",
        name: "Flubendazole field trials in dogs, Chad (2019– )",
        tldr: "The first randomised trials of a drug against guinea worm — in dogs, not people — testing whether flubendazole plus tethering can close the animal reservoir.",
        summary:
          "Because human guinea-worm disease has no drug and no vaccine trial is possible, the only interventional trials in the field are veterinary. The first, run in 2019 across 23 high-burden Chadian villages, randomised 600 domestic dogs to subcutaneous flubendazole or placebo; the initial dog-level analysis found no significant difference, but a 33-month village-level follow-up showed flubendazole alone cut emerging dog worms by 63% and flubendazole with proactive tethering by 83% relative to baseline. A second, larger trial (\"Flubendazole 2.0\") was designed specifically for the realities that undermined the first — unreliable year-round access and high dog attrition — with results reported separately. The programme has never had a therapeutic tool; if the second trial confirms the effect, dog treatment becomes one.",
        ...R,
        phase: "Field RCT (veterinary)",
        status: "First trial complete with long-term follow-up published 2026; second trial designed 2026",
        sponsor: "Chad Guinea Worm Eradication Programme with the Carter Center, CDC and University of Georgia researchers",
        intervention: "Subcutaneous flubendazole (15 mg/kg) in domestic dogs, alone and with proactive tethering",
        result: "No significant dog-level difference in the first analysis; village-level modelling over 33 months: −63% (flubendazole alone), −55% (tethering alone), −83% (both together).",
        registry: "No public registry record (ICTRP/ClinicalTrials.gov carry no dracunculiasis interventional trial) — literature-reported field trial",
        links: [
          { label: "Cleveland et al. — flubendazole trials in ferrets and dogs in Chad (2022)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9128682" },
          { label: "Dupper et al. — concurrent flubendazole and tethering in dogs (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41628272" },
          { label: "Dupper et al. — Flubendazole 2.0 trial design (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42391310" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        drugs: ["flubendazole"],
        institutions: ["carter-center", "cdc", "university-of-georgia"],
        countries: ["chad"],
        stats: [
          { label: "Dogs randomised (2019)", value: "600", number: 600, unit: "dogs", year: 2019, geography: "Chad", source: { label: "Cleveland et al. 2022", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9128682" } },
          { label: "Villages", value: "23 in the first trial; 56 in the follow-up analysis", source: { label: "Dupper et al. 2026", url: "https://pubmed.ncbi.nlm.nih.gov/41628272" } },
          { label: "Combined reduction", value: "83% fewer emerging dog worms", note: "95% CI 76–88%, Mar–Aug 2021 window", source: { label: "Dupper et al. 2026", url: "https://pubmed.ncbi.nlm.nih.gov/41628272" } },
        ],
      },
    ],
  },
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "prepatent-guinea-worm-serology",
        name: "Prepatent guinea-worm serology (TRX/DUF148, experimental)",
        tldr: "The first blood test that can detect guinea worm in a dog months before the worm emerges — the missing tool for finding infections while they can still be contained.",
        summary:
          "Guinea worm has always been diagnosed by seeing the worm emerge, 10–14 months after infection — by which time containment is a race. Two recombinant antigens, TRX (thioredoxin-like) and DUF148, detect prepatent D. medinensis infection in dog serum by indirect ELISA: in a 2025 evaluation DUF148 reached 76.6% sensitivity, 85.2% specificity and an AUC of 0.87, with an antigen cocktail at 78.7% sensitivity. Cross-reactivity with other filarial sera (Brugia, Onchocerca lupi, shelter-dog panels) remains the limitation, and DUF148-derived peptides are being tested to fix it. A 2024 modelling study showed that even an imperfect prepatent test would pay off if used to target tethering, which is exactly the use WHO's 2024 target product profile specifies. The test is research-use-only, not a product.",
        ...R,
        method: "Indirect ELISA against recombinant TRX and DUF148 antigens (research-use-only)",
        sampleType: "Serum (dogs)",
        performance:
          "DUF148: 76.6% sensitivity, 85.2% specificity, AUC 0.87; cocktail: 78.7% sensitivity, 78.5% specificity. Cross-reacts with some other filarial infections.",
        availability: "Research-use-only; no manufactured product",
        stage: "Early development",
        links: [
          { label: "Hakimi et al. — TRX and DUF148 for prepatent detection in dogs (2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12678139" },
          { label: "WHO — target product profile: prepatent D. medinensis infection in animals (2024)", url: "https://www.who.int/publications/i/item/9789240090804" },
          { label: "Smalley et al. — potential impact of a prepatent test in dogs (2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11066357" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        technologies: ["genomic-surveillance", "mhealth-surveillance"],
        institutions: ["university-of-georgia", "who", "cdc"],
        guidelines: ["who-tpp-guinea-worm-diagnostics"],
        stats: [
          { label: "DUF148 sensitivity", value: "76.6%", note: "39/47 prepatent sera; specificity 85.2%, AUC 0.87", source: { label: "Hakimi et al. 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12678139" } },
          { label: "Status", value: "Research-use-only; no field-validated test exists" },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-tpp-guinea-worm-diagnostics",
        name: "WHO target product profiles for guinea-worm diagnostics (2024)",
        tldr: "WHO's specification for the two tests eradication still lacks: one that finds hidden infections in animals, one that finds the parasite in water.",
        summary:
          "In April 2024 WHO published two target product profiles that define what a useful guinea-worm diagnostic must do. The first covers detection of prepatent D. medinensis infection in animal hosts — a test usable where guinea worm is seen or suspected, to find infected dogs, cats and baboons months before a worm emerges so they can be tethered and followed. The second covers detection of D. medinensis analytes in environmental samples — water, aquatic animals and their waste — to identify at-risk geographies, target larvicide, and, crucially, to generate evidence of absence for certification, the way polio eradication uses environmental surveillance. Both profiles state plainly that no field-validated test of either kind exists yet.",
        ...R,
        issuer: "WHO",
        issued: "April 2024",
        status: "Current",
        scope: "Dracunculiasis eradication — animal and environmental diagnostics",
        recommendation:
          "Develop field-usable tests for prepatent infection in animal hosts and for parasite analytes in environmental samples; use the former to target tethering and containment, the latter to guide larvicide and to evidence absence for certification.",
        links: [
          { label: "WHO — TPP: prepatent D. medinensis infection in animals", url: "https://www.who.int/publications/i/item/9789240090804" },
          { label: "WHO — TPP: D. medinensis presence in environmental samples", url: "https://www.who.int/publications/i/item/9789240090781" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        diagnostics: ["prepatent-guinea-worm-serology"],
        institutions: ["who"],
        terms: ["elimination", "eot"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "test-and-tether-prepatent",
        name: "Test-and-tether: aim containment at infected dogs before worms emerge",
        tldr: "Use the coming prepatent blood test to decide which dogs get tethered, instead of tethering whole villages or only dogs that already show worms.",
        summary:
          "Proactive tethering works — it cut emerging dog worms by about half on its own in Chad — but tethering every dog through every transmission season is expensive, unpopular and hard to sustain, while tethering only visibly infected dogs comes months too late. Modelling shows a prepatent test, even an imperfect one, changes the arithmetic: test dogs, tether the positives, and spend the compliance budget where the parasite actually is. The TRX/DUF148 serology (76.6% sensitivity) is the first assay that could fill this role, and WHO's 2024 target product profile specifies exactly this use. The trial to run is a cluster-randomised comparison of test-and-tether against blanket seasonal tethering, measuring emerging worms per village and cost per worm averted.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Cluster-randomise high-burden villages to test-and-tether (prepatent serology, tether positives) versus blanket seasonal tethering; compare emerging dog worms per village and cost per worm averted over two transmission seasons.",
        owner: "Chad Guinea Worm Eradication Programme with the Carter Center, CDC and University of Georgia",
        links: [
          { label: "Smalley et al. — potential impact of a prepatent test in dogs (2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11066357" },
          { label: "Hakimi et al. — TRX and DUF148 for prepatent detection in dogs (2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12678139" },
          { label: "Dupper et al. — concurrent flubendazole and tethering in dogs (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41628272" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        diagnostics: ["prepatent-guinea-worm-serology"],
        drugs: ["flubendazole"],
        trials: ["flubendazole-dog-trial-chad"],
        technologies: ["mhealth-surveillance", "community-health-workers"],
        institutions: ["carter-center", "cdc", "university-of-georgia"],
        countries: ["chad", "cameroon", "ethiopia", "mali", "south-sudan", "angola"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["elimination", "eot", "one-health"],
        stats: [
          { label: "Tethering alone", value: "≈55% fewer dog worms", note: "Dupper et al. 2026, vs baseline" },
          { label: "Enabler", value: "First prepatent assay plus a WHO TPP specifying its use" },
        ],
      },
      {
        id: "guinea-worm-environmental-surveillance",
        name: "Environmental surveillance for guinea worm, on the polio model",
        tldr: "Test water and fish-gut waste for guinea-worm DNA so the programme can find transmission foci — and prove absence — without waiting for a worm to emerge.",
        summary:
          "Every guinea-worm intervention today is triggered by a worm emerging from a person or animal, which means surveillance sees transmission a year late. Polio eradication solved the equivalent problem with sewage sampling; WHO's 2024 target product profile calls for the guinea-worm analogue — detecting D. medinensis analytes in water, aquatic animals and their waste. A working environmental assay would let the programme map which water sources are actually infectious, aim temephos larvicide precisely instead of broadly, screen fish entrails (the suspected paratenic route in Chad) at markets and landing sites, and — most valuable at the endgame — generate evidence of absence to support certification. The science risk is sensitivity in large, dilute water bodies; the first field validation should be in Chad's Chari River villages where dog burden is highest and water sources are known.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Validate an eDNA assay against water sources in Chadian villages with known dog burden, then pilot market/landing-site screening of fish entrails; measure whether assay-positive sources predict next-season emergence.",
        owner: "WHO with the Chad Guinea Worm Eradication Programme, CDC reference laboratory and environmental-surveillance groups",
        links: [
          { label: "WHO — TPP: D. medinensis presence in environmental samples", url: "https://www.who.int/publications/i/item/9789240090781" },
          { label: "Cleveland et al. — searching for larvae in aquatic animals, Chad (2019)", url: "https://doi.org/10.1038/s41598-018-37567-7" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        technologies: ["genomic-surveillance", "mhealth-surveillance"],
        institutions: ["who", "cdc", "carter-center", "university-of-georgia"],
        countries: ["chad", "cameroon", "ethiopia", "south-sudan"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["elimination", "eot", "one-health", "wash"],
        stats: [
          { label: "Precedent", value: "Polio environmental surveillance guides certification" },
          { label: "Gap", value: "No field-validated environmental test exists (WHO TPP, 2024)" },
        ],
      },
      {
        id: "genotype-every-worm",
        name: "Genotype every worm: routine barcoding to direct the last mile",
        tldr: "Sequence every emerged guinea worm as routine surveillance, so each case can be traced to its source instead of merely counted.",
        summary:
          "At ten human cases a year, counting is no longer the problem — attribution is. Mitochondrial barcoding already proved its value: it showed Chadian dog and human worms are one shared population, and traced a 2019 Salamat outbreak of 22 human cases to a single female worm, distinguishing a point-source event from sustained local transmission. Making barcoding routine — every emerged worm, human or animal, sequenced and matched against the programme database — would tell managers whether a new case is importation or local failure, whether tethering is containing known lineages, and where unsampled transmission must be hiding. The cost is trivial against the programme's surveillance budget; the change is operational, folding the CDC reference laboratory's existing confirmation pipeline into a standing genomic watch.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Barcode every worm emerging in 2026–2027 across all six surveillance countries and link genotypes to village surveillance data; measure the share of cases attributable to known vs unknown transmission chains.",
        owner: "CDC reference laboratory with the Carter Center and national eradication programmes",
        links: [
          { label: "Guagliardo et al. — point-source outbreak traced by genetics, Chad (2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35544041" },
          { label: "Thiele et al. — linked surveillance and genetic data in Chad (2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8341693" },
          { label: "Durrant et al. — human and animal infections share one parasite population (2020)", url: "https://doi.org/10.1371/journal.pntd.0008623" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        technologies: ["genomic-surveillance"],
        institutions: ["cdc", "carter-center"],
        countries: ["chad", "cameroon", "ethiopia", "mali", "south-sudan", "angola"],
        bottlenecks: ["surveillance-data-gap"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Proof", value: "22-case outbreak traced to one female worm (Salamat, 2019)" },
          { label: "Scale", value: "Tens of worms a year — barcoding is cheap at this volume" },
        ],
      },
    ],
  },
  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "tchonfienet-moundai",
        name: "Tchonfienet Moundai",
        tldr: "The Chadian epidemiologist who runs the national guinea-worm eradication programme where most of the world's remaining transmission happens.",
        summary:
          "Tchonfienet Moundai coordinates Chad's Guinea Worm Eradication Programme (PNEVG-T) — the national programme that carries the heaviest load in the endgame, reporting the large majority of the world's remaining D. medinensis infections, overwhelmingly in dogs along the Chari River. He has co-authored the programme's defining studies, from the characterisation of Chad's peculiar dog-driven epidemiology to the flubendazole field trials and the surveillance-system analyses, bridging the village-based containment operation and the international research effort. Endgame eradication stands or falls on national coordinators of this kind, who hold the surveillance data, the community relationships and the containment response in the last endemic foci.",
        ...R,
        era: "Contemporary",
        role: "National Coordinator, Chad Guinea Worm Eradication Programme (PNEVG-T), Ministry of Public Health",
        knownFor: "Leading guinea-worm surveillance and containment in Chad; dog-reservoir epidemiology and intervention trials.",
        links: [
          { label: "Eberhard et al. — the peculiar epidemiology of dracunculiasis in Chad (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24406710" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        institutions: ["carter-center"],
        countries: ["chad"],
        technologies: ["case-containment", "mhealth-surveillance", "community-health-workers"],
        terms: ["elimination", "eot", "one-health"],
      },
    ],
  },
  /* ------------------------------ institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "university-of-georgia",
        name: "University of Georgia (guinea-worm research group)",
        tldr: "The veterinary research group behind the dog-reservoir science — paratenic hosts, flubendazole trials and prepatent diagnostics.",
        summary:
          "Researchers at the University of Georgia's College of Veterinary Medicine and Warnell School (Christopher Cleveland, Michael Yabsley and colleagues, with the Southeastern Cooperative Wildlife Disease Study) produced most of the biology that redefined the guinea-worm endgame: experimental proof that fish and frogs can carry D. medinensis larvae as paratenic/transport hosts, recovery of larvae from wild frogs in Chad, the ferret model showing flubendazole sterilises female worms, leadership of the 2019 Chadian dog field trial and its follow-ups, and development of the TRX/DUF148 prepatent serology. It is the programme's de facto parasitology laboratory, working with the Carter Center, CDC and Chad's national programme.",
        ...R,
        institutionType: "University research group",
        country: "United States",
        city: "Athens, Georgia",
        focus: "Guinea-worm reservoir biology: paratenic hosts, dog interventions, flubendazole trials and prepatent diagnostics.",
        links: [
          { label: "Cleveland et al. — flubendazole trials in ferrets and dogs in Chad (2022)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9128682" },
          { label: "Eberhard et al. — fish and frogs as paratenic hosts, Chad (2016)", url: "https://doi.org/10.3201/eid2208.160043" },
        ],
        diseases: ["dracunculiasis"],
        pathogens: ["dracunculus-medinensis"],
        drugs: ["flubendazole"],
        trials: ["flubendazole-dog-trial-chad"],
        diagnostics: ["prepatent-guinea-worm-serology"],
        institutions: ["carter-center", "cdc"],
        countries: ["chad"],
        terms: ["one-health", "elimination"],
        stats: [
          { label: "Role", value: "Lead science partner on the dog reservoir since 2012" },
        ],
      },
    ],
  },
];
