import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Echinococcosis 2026 fact-check additions: the trial, guideline, target,
 * diagnostic, person and ideas that the 2026 source cross-check (WHO fact
 * sheet, WHO CE treatment guideline June 2025, WHO Q&A August 2025,
 * ClinicalTrials.gov, ChEMBL, Open Targets, G-FINDER scope, PubMed) showed
 * were missing from the echinococcosis graph. Ordinary records of their
 * kind, kept in one file so the review is visible as a set; wired into
 * `index.ts` alongside ADDITIONS.
 *
 * Two honest negatives from the cross-check, recorded here so they are not
 * re-searched: Open Targets carries echinococcosis (MONDO_0005738) with 171
 * associated human targets, all low-score literature text-mining (top IL21,
 * 0.06) — immune-response noise, no therapeutic target. G-FINDER's 2024
 * neglected-disease reporting carries no standalone echinococcosis line;
 * control R&D is veterinary-led (EG95, dog deworming) and sits outside the
 * human product pipeline the survey tracks.
 */
export const ECHINOCOCCOSIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "ae-kyrgyzstan-albendazole-trial",
        name: "Albendazole for early alveolar echinococcosis (Kyrgyzstan)",
        tldr: "The first randomised trial asking whether early alveolar lesions need albendazole at all — or whether some resolve on their own.",
        summary:
          "Ultrasound surveillance in Osh province, Kyrgyzstan, found a new focus of alveolar echinococcosis with about 6% prevalence, most lesions small. Because albendazole is parasitostatic rather than curative and is otherwise given for life, the trial randomised 194 people with early-stage lesions to albendazole (400 mg twice daily) or placebo, watching lesions by imaging and serology: if treated lesions regress while untreated ones progress, early treatment is justified; if both regress, many early cases resolve spontaneously and lifelong treatment is overtreatment. Run 2017–2023 and posted to ClinicalTrials.gov in September 2025, it is the rare prospective experiment in a field that runs almost entirely on retrospective series — and its design concedes the central uncertainty of alveolar disease management.",
        ...R,
        phase: "Phase 2, randomised placebo-controlled",
        status: "Completed 2023; posted September 2025",
        sponsor: "Investigator-led surveillance programme, Osh province, Kyrgyzstan",
        intervention: "Albendazole 2 × 400 mg daily versus placebo in early-stage alveolar lesions",
        result: "Posted 2025; the pre-specified readouts contrast lesion regression on drug against spontaneous resolution without it.",
        registry: "ClinicalTrials.gov NCT07182305",
        registryUrl: "https://clinicaltrials.gov/study/NCT07182305",
        links: [
          { label: "Albendazole for early alveolar echinococcosis (ClinicalTrials.gov NCT07182305)", url: "https://clinicaltrials.gov/study/NCT07182305" },
          { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        drugs: ["albendazole"],
        stats: [
          { label: "Enrolment", value: "194", number: 194, unit: "participants", year: 2023, geography: "Osh province, Kyrgyzstan", source: { label: "ClinicalTrials.gov NCT07182305", url: "https://clinicaltrials.gov/study/NCT07182305" } },
          { label: "Focus prevalence", value: "≈ 6%", note: "ultrasound surveillance south of Gulcha" },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-ce-treatment-guideline-2025",
        name: "WHO guideline for treatment of cystic echinococcosis (2025)",
        tldr: "The first WHO treatment guideline for hydatid disease: stage-specific care by cyst type and size — built on admittedly very-low-certainty evidence.",
        summary:
          "Published 16 June 2025, this is the first WHO guideline devoted to treating cystic echinococcosis, written for clinicians at every tier and resource level. Its core is seven conditional recommendations keyed to the WHO-IWGE cyst stages: albendazole alone for small CE1/CE3a cysts under 5 cm; PAIR plus albendazole for 5–10 cm; percutaneous treatment (PAIR preferred over standard catheterisation) above 10 cm; albendazole first for small multivesicular CE2/CE3b cysts and surgery plus albendazole above 5 cm; praziquantel plus albendazole when spillage occurs; watch-and-wait imaging for inactive cysts; and albendazole alone as an option for small pulmonary cysts. Every recommendation is conditional, most on very-low-certainty evidence or expert consensus — the guideline's most important message is how little randomised evidence supports any choice, which is a research agenda in itself.",
        ...R,
        issuer: "WHO",
        issued: "June 2025",
        status: "Current",
        scope: "Treatment of uncomplicated cystic echinococcosis (hepatic and pulmonary)",
        recommendation:
          "Stage care by cyst type and size: drugs alone for small active cysts, PAIR plus drugs for mid-sized, percutaneous treatment for large, surgery plus drugs for multivesicular disease, watch-and-wait for inactive cysts.",
        whatChanged:
          "First WHO treatment guideline for the disease; formalised stage-specific care and exposed the near-absence of randomised evidence behind every option.",
        links: [
          { label: "WHO — guidelines for the treatment of cystic echinococcosis (2025)", url: "https://www.who.int/publications/i/item/9789240110472" },
          { label: "Executive summary (NCBI Bookshelf)", url: "https://www.ncbi.nlm.nih.gov/books/NBK616284" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        drugs: ["albendazole", "praziquantel"],
        diagnostics: ["cestode-multiplex-serology"],
        technologies: ["pair"],
        institutions: ["who"],
        terms: ["ntd"],
        stats: [
          { label: "Recommendations", value: "7, all conditional", note: "very-low-certainty evidence or expert consensus throughout" },
        ],
      },
    ],
  },
  /* -------------------------------- targets ------------------------------- */
  {
    kind: "targets",
    records: [
      {
        id: "eg-thioredoxin-glutathione-reductase",
        name: "E. granulosus thioredoxin glutathione reductase (Eg-TGR)",
        tldr: "The parasite's single-point redox defence — one enzyme doing the work of two human ones — and the most concrete small-molecule target in Echinococcus.",
        summary:
          "Echinococcus granulosus fuses thioredoxin and glutathione reduction into one enzyme, thioredoxin glutathione reductase, where humans use two separate systems — which makes Eg-TGR a selectively attackable chokepoint for the parasite's defence against oxidative damage. It is the only Echinococcus protein with a standalone entry in ChEMBL (CHEMBL4523369; UniProt Q869D7), with screened compound series but no licensed drug. The therapeutic prize is specific: albendazole is merely parasitostatic, condemning alveolar patients to lifelong treatment, while a curative redox inhibitor could end it. The same enzyme is an established target in schistosomes, so chemistry can be carried across rather than started over.",
        ...R,
        targetType: "Redox enzyme (selenoprotein)",
        organism: "Echinococcus granulosus",
        rationale:
          "Single fused redox enzyme with no exact human equivalent; blocking it collapses the parasite's oxidative defence. Validated target class in related flatworms.",
        druggability: "Screened series in ChEMBL; no licensed ligand. Repurposing from schistosome TGR programmes is the fastest route.",
        knownLigands: "Investigational compound series in ChEMBL; no approved drug.",
        links: [
          { label: "ChEMBL — thioredoxin glutathione reductase, E. granulosus", url: "https://www.ebi.ac.uk/chembl/target_report_card/CHEMBL4523369" },
          { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
        ],
        pathogens: ["echinococcus"],
        diseases: ["echinococcosis", "schistosomiasis"],
        stats: [
          { label: "Selectivity basis", value: "Fused enzyme; humans use two separate systems" },
        ],
      },
    ],
  },
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "cestode-multiplex-serology",
        name: "Recombinant multiplex serology for human cestodiases",
        tldr: "One blood test that tells hydatid cysts, alveolar lesions and tapeworm cysts apart — the differential diagnosis serology has never been able to do.",
        summary:
          "Serology for echinococcosis is sensitive but notoriously cross-reactive: a positive test cannot reliably say whether the patient has cystic disease, alveolar disease or neurocysticercosis — three conditions with entirely different treatments. A 2026 recombinant-antigen multiplex panel was built specifically for this differential diagnosis of human cestodiases, moving the field from single-antigen ELISAs toward a pattern-of-reactivity answer. It is research-stage, not a product, but it addresses the exact failure the disease page names — serology that cannot distinguish active from past infection or one cestode from another — and would slot directly into ultrasound-led screening programmes where imaging finds a lesion and serology must name it.",
        ...R,
        method: "Recombinant-antigen multiplex immunoassay",
        sampleType: "Serum",
        performance:
          "Research-stage; designed for differential diagnosis across cestodiases rather than single-disease sensitivity.",
        availability: "Research-use-only; no manufactured product",
        stage: "Early development",
        links: [
          { label: "Sánchez-Ovejero et al. — multiplex serology for human cestodiases (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42751739" },
          { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
        ],
        diseases: ["echinococcosis", "taeniasis-cysticercosis"],
        pathogens: ["echinococcus", "taenia-solium"],
        technologies: ["ai-microscopy"],
        terms: ["sensitivity-specificity"],
        bottlenecks: ["diagnostics-gap"],
      },
    ],
  },
  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "hamouda-babba",
        name: "Hamouda Babba",
        tldr: "The Tunisian parasitologist documenting North Africa's hydatid burden — from livestock prevalence to the immune genetics of infected children.",
        summary:
          "Hamouda Babba's group at the University of Monastir has built the modern evidence base for cystic echinococcosis in Tunisia, one of the Mediterranean's most endemic countries: slaughterhouse and dog surveys showing where transmission concentrates, zoonotic-threat assessments of livestock prevalence, and — most recently — studies of interleukin-1β polymorphisms in Tunisian children with cystic disease, asking why some exposed children develop cysts and others do not. With two dozen echinococcosis publications, his work is the North African counterpart to the China-centred control literature: the epidemiology of a hyperendemic country where control programmes have repeatedly failed to hold, and where stray dogs, clandestine slaughter and camel strains complicate the standard package.",
        ...R,
        era: "Contemporary",
        role: "Parasitologist; University of Monastir, Tunisia",
        knownFor: "Echinococcosis epidemiology, livestock prevalence and host immunogenetics in Tunisia.",
        links: [
          { label: "IL-1β polymorphisms in Tunisian children with cystic echinococcosis (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41633927" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        technologies: ["genomic-surveillance"],
        terms: ["zoonosis", "one-health", "ntd"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "curative-ae-therapy",
        name: "A curative drug for alveolar echinococcosis to replace lifelong albendazole",
        tldr: "Move alveolar treatment from lifelong parasite suppression to a finite curative course, starting with the parasite's redox chokepoint.",
        summary:
          "Alveolar echinococcosis is the only NTD whose standard of care is explicitly lifelong: albendazole merely arrests the metacestode, so patients take it for decades, with liver monitoring, teratogenicity constraints and cumulative cost. The Kyrgyzstan trial now asks whether some early patients need no drug at all; the complementary question is whether any patient needs it forever. E. granulosus thioredoxin glutathione reductase — one fused enzyme where humans have two systems — is the most concrete small-molecule opening, with ChEMBL compound series and carry-over chemistry from schistosome TGR programmes. The proposal is a focused redox-inhibitor pipeline plus combination trials (albendazole plus a curative-intent partner, measured by PET negativity and recurrence-free survival off drug), aimed at a finite course that ends treatment rather than extending it.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Advance two TGR-inhibitor series through E. multilocularis metacestode models to a Phase 2a finite-course trial with off-drug recurrence-free survival as the endpoint.",
        owner: "Academic redox-drug groups with DNDi-style PDP support and the WHO-IWGE network",
        links: [
          { label: "ChEMBL — thioredoxin glutathione reductase, E. granulosus", url: "https://www.ebi.ac.uk/chembl/target_report_card/CHEMBL4523369" },
          { label: "Albendazole for early alveolar echinococcosis (NCT07182305)", url: "https://clinicaltrials.gov/study/NCT07182305" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        drugs: ["albendazole"],
        trials: ["ae-kyrgyzstan-albendazole-trial"],
        targets: ["eg-thioredoxin-glutathione-reductase"],
        technologies: ["open-science-drug-discovery"],
        bottlenecks: ["funding-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Status quo", value: "Lifelong parasitostatic albendazole for alveolar disease" },
          { label: "Opening", value: "Single fused redox enzyme; no human equivalent" },
        ],
      },
      {
        id: "livestock-financed-elimination-packages",
        name: "Sell elimination packages to livestock ministries, not health ministries",
        tldr: "Fund EG95 plus dog-deworming as agricultural investment — the US$3 billion cyst bill is mostly livestock losses, but health budgets are asked to pay.",
        summary:
          "Cystic echinococcosis costs about US$3 billion a year, mostly in condemned offal and lost livestock productivity — yet control is financed as a health programme, which is why Morocco's national programme stalls on breeder cost objections and Tunisia's fails on stray dogs and clandestine slaughter. The Xizang cost-outcome analysis (91% canine reduction, county costs mostly under 50,000 CNY per point of reduction) finally gives agriculture ministries a priced, working input-output model. The proposal: package EG95 lamb vaccination with monthly dog deworming as a livestock-productivity investment co-signed by agriculture and trade ministries, with slaughterhouse condemnation data — not human case counts — as the performance metric, and pilot it in Morocco and Tunisia where the Middle Atlas and Tataouine studies already mapped the failure points.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pilot agriculture-financed EG95-plus-deworming zones in Morocco and Tunisia with slaughterhouse condemnation rates as the primary endpoint over five years.",
        owner: "Agriculture and health ministries with WOAH, WHO and livestock-industry co-funding",
        links: [
          { label: "Jiang et al. — dog deworming cost-outcome, Xizang (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42566482" },
          { label: "Morocco EG95-plus-deworming feasibility (2021)", url: "https://pubmed.ncbi.nlm.nih.gov/33971556" },
          { label: "Tunisia One Health perspective for a future control programme (2024)", url: "https://www.parasite-journal.org/articles/parasite/full_html/2024/01/parasite230013/parasite230013.html" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        technologies: ["eg95-sheep-vaccine", "one-health-ntd-integration"],
        institutions: ["who", "woah"],
        bottlenecks: ["funding-gap", "surveillance-data-gap"],
        terms: ["one-health", "zoonosis", "ntd"],
        stats: [
          { label: "Annual cost", value: "≈ US$3 billion, mostly livestock" },
          { label: "Proof of cost-outcome", value: "Xizang: 91% canine reduction, mostly <50,000 CNY per point" },
        ],
      },
      {
        id: "early-ae-screen-and-stage",
        name: "Ultrasound-led early detection of alveolar echinococcosis in Central Asia",
        tldr: "Find alveolar lesions while they are small and curable, using the screening machinery China already proved at million-person scale.",
        summary:
          "Alveolar echinococcosis is usually diagnosed late, when the liver mass mimics cancer and only heroic surgery plus lifelong drugs remain — yet China's survey of 1.2 million people and the Kyrgyzstan focus (6% prevalence, mostly small lesions) show early disease is findable by portable ultrasound in the communities that carry it. The proposal is standing screen-and-stage programmes across the Central Asian alveolar belt (Kyrgyzstan, Xinjiang, Tibetan plateau fringes): periodic village ultrasound, multiplex serology to name what imaging finds, immediate staging into watch, drug or surgery tracks per the 2025 WHO logic, and enrolment of early cases into the Kyrgyzstan-trial lineage of studies that will finally say which small lesions need treatment. Early AE is one of the few NTD presentations where screening converts a fatal disease into a manageable one.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Screen 100,000 people across Kyrgyz and Xinjiang foci with ultrasound plus multiplex serology; measure stage-shift (share of cases found early) and five-year outcomes by track.",
        owner: "National CDC programmes with WHO, HERACLES/European registry expertise and FIND-style diagnostic support",
        links: [
          { label: "Albendazole for early alveolar echinococcosis (NCT07182305)", url: "https://clinicaltrials.gov/study/NCT07182305" },
          { label: "Sánchez-Ovejero et al. — multiplex serology for human cestodiases (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42751739" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        diagnostics: ["cestode-multiplex-serology"],
        trials: ["ae-kyrgyzstan-albendazole-trial"],
        technologies: ["ai-microscopy", "genomic-surveillance"],
        institutions: ["who"],
        bottlenecks: ["surveillance-data-gap", "diagnostics-gap", "funding-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Precedent", value: "1.2M people screened by ultrasound in China" },
          { label: "Yield where tried", value: "≈6% AE prevalence in the Kyrgyz focus" },
        ],
      },
    ],
  },
];
