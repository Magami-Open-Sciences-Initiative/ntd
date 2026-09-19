import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Lymphatic-filariasis 2026 fact-check additions: the rifampicin short-course
 * RCT, the Wb5 biomarker, two African institutions, and the people/ideas
 * review. (The headline correction — 21 validated, not 23 — went straight
 * into the spike.) Ordinary records of their kind, kept in one file so the
 * review is visible as a set; wired into `index.ts` alongside HAT_2026.
 */
export const LF_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "rifampicin-lf-ghana",
        name: "High-dose rifampicin plus albendazole for LF (Ghana RCT)",
        tldr: "A randomised trial showing a short rifampicin course rapidly clears circulating filarial antigen.",
        summary:
          "Alexander Debrah's group at KNUST ran a randomised clinical trial of high-dose rifampicin plus albendazole in lymphatic filariasis, reporting rapid clearance of circulating filarial antigen (Pathogens, 2026). Rifampicin hits Wolbachia like doxycycline but in a far shorter, more potent course — a realistic macrofilaricidal regimen where 4–6 weeks of doxycycline is not. It is the most promising short-course adulticidal signal since oxfendazole entered Phase II.",
        ...R,
        phase: "Randomised clinical trial",
        status: "Reported 2026",
        intervention: "High-dose rifampicin plus albendazole",
        result: "Rapid clearance of circulating filarial antigen; step toward short-course macrofilaricidal therapy.",
        links: [
          { label: "Rifampicin plus albendazole RCT (Pathogens 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kutu+Debrah+rifampicin+albendazole+filarial+antigen" },
        ],
        diseases: ["lymphatic-filariasis"],
        drugs: ["albendazole", "doxycycline"],
        targets: ["wolbachia"],
        stats: [
          { label: "Design", value: "Randomised clinical trial", note: "Ghana" },
        ],
      },
    ],
  },

  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "wb5-biomarker",
        name: "Wb5 antigen biomarker",
        tldr: "A new circulating biomarker for watching MDA actually work, from the NIH filariasis group.",
        summary:
          "Wb5, reported by Bennuru and colleagues (PLoS NTD 2025), is a novel Wuchereria bancrofti biomarker for monitoring mass-drug-administration efficacy and success. Where the filarial test strip detects established adult-worm antigen, Wb5 offers a complementary readout of programme impact — the kind of tool post-validation surveillance needs as countries move from counting treatments to confirming interruption.",
        ...R,
        method: "Circulating antigen biomarker assay",
        sampleType: "Blood",
        performance: "Reported as an MDA-efficacy monitor; field validation under way.",
        availability: "Research use; programme evaluation studies",
        links: [
          { label: "Wb5 biomarker (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Pietrow+Bennuru+Wb5+Wuchereria+biomarker" },
        ],
        diseases: ["lymphatic-filariasis"],
        pathogens: ["lymphatic-filarial-worms"],
        technologies: ["lateral-flow-assays"],
        terms: ["eot", "sensitivity-specificity"],
        stats: [
          { label: "Use", value: "MDA efficacy monitoring", note: "complements FTS antigen testing" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "knust-filarial",
        name: "KNUST filariasis group (Ghana)",
        tldr: "The Kumasi group running Ghana's macrofilaricidal trials and antigen-clearance studies.",
        summary:
          "Alexander Debrah's group at the Kwame Nkrumah University of Science and Technology runs the clinical end of Ghana's filariasis programme: the high-dose rifampicin-plus-albendazole RCT and longitudinal antigen-clearance cohorts that teach the field what 'cure' looks like serologically. Anglophone West Africa's trial capacity for filarial disease sits largely here.",
        ...R,
        institutionType: "University research group",
        country: "Ghana",
        city: "Kumasi",
        focus: "Filarial clinical trials and antigen-clearance cohorts.",
        links: [
          { label: "Rifampicin plus albendazole RCT (Pathogens 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kutu+Debrah+rifampicin+albendazole+filarial+antigen" },
        ],
        diseases: ["lymphatic-filariasis"],
        drugs: ["albendazole", "doxycycline"],
        trials: ["rifampicin-lf-ghana"],
        targets: ["wolbachia"],
      },
      {
        id: "irss-burkina",
        name: "IRSS xenomonitoring group (Burkina Faso)",
        tldr: "The Burkinabè entomologists proving transmission is gone — by testing the mosquitoes.",
        summary:
          "Roch Dabiré's group at the Institut de Recherche en Sciences de la Santé documents the absence of Wuchereria in Anopheles a full decade after mass treatment stopped, and refines the Culicidae collection methods xenomonitoring depends on. Negative xenomonitoring is the hardest evidence in elimination; producing it in the Sahel, where complicating vectors abound, is the discipline the endgame needs.",
        ...R,
        institutionType: "Research institute group",
        country: "Burkina Faso",
        focus: "Xenomonitoring and vector methods for filariasis endgame surveillance.",
        links: [
          { label: "Ten years without MDA, no Wuchereria (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Nikiema+Dabire+Wuchereria+Anopheles+mass+drug" },
        ],
        diseases: ["lymphatic-filariasis"],
        technologies: ["vector-surveillance", "xenomonitoring"],
        terms: ["eot"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "dziedzom-desouza",
        name: "Dziedzom de Souza",
        tldr: "The Noguchi scientist writing the state of filariasis epidemiology and watching Ghana past MDA.",
        summary:
          "Dziedzom de Souza of the Noguchi Memorial Institute, Ghana, led the 2026 Clinical Microbiology Reviews state-of-the-field on LF epidemiology and control, and documents transmission a decade after mass treatment stopped in Gomoa. Ghanaian science evaluating Ghana's endgame — including Mansonella speciation most programmes ignore — is the surveillance the continent needs.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Noguchi Memorial Institute for Medical Research, Ghana",
        knownFor: "LF epidemiology review; post-MDA transmission studies.",
        links: [
          { label: "LF epidemiology and control perspectives (Clin Microbiol Rev 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=de+Souza+Bockarie+lymphatic+filariasis+perspectives" },
        ],
        diseases: ["lymphatic-filariasis"],
        institutions: ["noguchi"],
        countries: ["ghana"],
        terms: ["elimination", "eot", "ntd"],
      },
      {
        id: "roch-dabire",
        name: "Roch Kounbobr Dabiré",
        tldr: "The Burkinabè entomologist whose empty mosquito traps are elimination's best evidence.",
        summary:
          "Roch Dabiré of IRSS Burkina Faso showed no Wuchereria bancrofti in Anopheles a decade after mass treatment ended, and builds the collection methods xenomonitoring stands on. In the endgame, proving absence beats counting treatments — and his traps do it.",
        ...R,
        era: "Contemporary",
        role: "Medical entomologist, IRSS, Burkina Faso",
        knownFor: "Post-MDA xenomonitoring; Culicidae collection methods.",
        links: [
          { label: "Ten years without MDA, no Wuchereria (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Nikiema+Dabire+Wuchereria+Anopheles+mass+drug" },
        ],
        diseases: ["lymphatic-filariasis"],
        institutions: ["irss-burkina"],
        technologies: ["vector-surveillance", "xenomonitoring"],
        terms: ["elimination", "eot", "ntd"],
      },
      {
        id: "sammy-njenga",
        name: "Sammy Njenga",
        tldr: "The KEMRI scientist accelerating Kenya's endgame with triple-drug therapy.",
        summary:
          "Sammy Njenga of KEMRI Wells Trust drives Kenya's IDA-accelerated programme and the coastal transmission-interruption assessments, plus Zimbabwe's shrinking treatment map with regional partners. East Africa's endgame runs on his cohorts.",
        ...R,
        era: "Contemporary",
        role: "Researcher, KEMRI, Kenya",
        knownFor: "IDA acceleration; coastal transmission interruption.",
        links: [
          { label: "Njenga filariasis publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Njenga+SM+lymphatic+filariasis+Kenya" },
        ],
        diseases: ["lymphatic-filariasis"],
        institutions: ["kemi"],
        countries: ["kenya"],
        drugs: ["ivermectin", "diethylcarbamazine", "albendazole"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "alexander-debrah",
        name: "Alexander Yaw Debrah",
        tldr: "The Kumasi trialist shortening macrofilaricidal therapy from weeks to days.",
        summary:
          "Alexander Debrah of KNUST ran the randomised trial of high-dose rifampicin plus albendazole that rapidly cleared circulating filarial antigen — the first credible short-course adulticidal regimen since doxycycline's impractical 4–6 weeks. His antigen-clearance cohorts also define what cure looks like serologically.",
        ...R,
        era: "Contemporary",
        role: "Researcher, KNUST, Kumasi, Ghana",
        knownFor: "Rifampicin short-course RCT; antigen-clearance cohorts.",
        links: [
          { label: "Rifampicin plus albendazole RCT (Pathogens 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kutu+Debrah+rifampicin+albendazole+filarial+antigen" },
        ],
        diseases: ["lymphatic-filariasis"],
        institutions: ["knust-filarial"],
        countries: ["ghana"],
        drugs: ["albendazole", "doxycycline"],
        trials: ["rifampicin-lf-ghana"],
        targets: ["wolbachia"],
        terms: ["ntd", "pdp"],
      },
      {
        id: "moses-bockarie",
        name: "Moses Bockarie",
        tldr: "The Sierra Leonean epidemiologist co-writing the field's direction.",
        summary:
          "Moses Bockarie co-led the 2026 Clinical Microbiology Reviews perspectives on LF epidemiology and control, bringing a career across West African filariasis programmes to the question of what the endgame needs. Senior African authorship on agenda-setting reviews is itself the capacity milestone.",
        ...R,
        era: "Contemporary",
        role: "Epidemiologist (West Africa filariasis programmes)",
        knownFor: "LF control perspectives; programme epidemiology.",
        links: [
          { label: "LF epidemiology and control perspectives (Clin Microbiol Rev 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=de+Souza+Bockarie+lymphatic+filariasis+perspectives" },
        ],
        diseases: ["lymphatic-filariasis"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "lisa-buwa-komoreng",
        name: "Lisa Buwa-Komoreng",
        tldr: "Counting elephantiasis where the maps leave it blank — Southern Africa.",
        summary:
          "Lisa Buwa-Komoreng's 2024 comprehensive review of elephantiasis prevalence in Southern Africa (with SADC-region seroprevalence work) documents the morbidity the treatment-counting programmes miss. The 36 million living with chronic manifestations need counters before they get care.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Southern Africa (SADC filariasis reviews)",
        knownFor: "Elephantiasis prevalence in Southern Africa.",
        links: [
          { label: "Buwa-Komoreng filariasis publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Buwa-Komoreng+elephantiasis+filariasis" },
        ],
        diseases: ["lymphatic-filariasis"],
        terms: ["ntd"],
      },
      {
        id: "sasisekhar-bennuru",
        name: "Sasisekhar Bennuru",
        tldr: "Discovered Wb5, the biomarker for watching MDA actually work.",
        summary:
          "Sasisekhar Bennuru (NIH) identified Wb5, a novel Wuchereria biomarker for monitoring mass-drug-administration efficacy — the programme-impact readout to sit beside the FTS. Diagnostics that measure success, not just infection, are what post-validation surveillance runs on.",
        ...R,
        era: "Contemporary",
        role: "Researcher, NIH filariasis group",
        knownFor: "Wb5 MDA-efficacy biomarker.",
        links: [
          { label: "Wb5 biomarker (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Pietrow+Bennuru+Wb5+Wuchereria+biomarker" },
        ],
        diseases: ["lymphatic-filariasis"],
        diagnostics: ["wb5-biomarker", "filarial-test-strip"],
        terms: ["eot", "ntd"],
      },
      {
        id: "thomas-nutman",
        name: "Thomas Nutman",
        tldr: "The NIH immunologist behind the biomarkers and the basic-care economics.",
        summary:
          "Thomas Nutman (NIH) spans Wb5 biomarker development to the Mali basic-package-of-care study showing care improves socioeconomic conditions — the two ends of the LF problem: measuring success and deserving it. His laboratory's filarial immunology underpins half the field's tools.",
        ...R,
        era: "Contemporary",
        role: "Senior investigator, NIH",
        knownFor: "Filarial immunology; Wb5; morbidity-care evidence.",
        links: [
          { label: "Basic package of care and socioeconomic outcomes (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dolo+Nutman+basic+package+care+socio-economic" },
        ],
        diseases: ["lymphatic-filariasis"],
        diagnostics: ["wb5-biomarker"],
        terms: ["ntd"],
      },
      {
        id: "housseini-dolo",
        name: "Housseini Dolo",
        tldr: "Showed basic lymphoedema care pays — in Mali, in livelihoods.",
        summary:
          "Housseini Dolo's 2026 implementation study showed a basic package of lymphoedema care improved socioeconomic conditions for Malian patients. Morbidity management is usually framed as charity; his data frame it as economics — the argument that unlocks domestic financing.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Mali",
        knownFor: "Basic-care package socioeconomic outcomes.",
        links: [
          { label: "Basic package of care and socioeconomic outcomes (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dolo+Nutman+basic+package+care+socio-economic" },
        ],
        diseases: ["lymphatic-filariasis"],
        countries: ["mali"],
        terms: ["ntd"],
      },
      {
        id: "philip-budge",
        name: "Philip Budge",
        tldr: "The WashU modeller deciding where IDA goes next.",
        summary:
          "Philip Budge (Washington University) models IDA impact and programme strategy — including the analyses behind triple-drug acceleration decisions. With 35 countries still needing MDA and IDA unusable where onchocerciasis circulates, his maps allocate the scarce effective regimens.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Washington University",
        knownFor: "IDA strategy modelling.",
        links: [
          { label: "Budge filariasis publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Budge+lymphatic+filariasis+IDA" },
        ],
        diseases: ["lymphatic-filariasis"],
        drugs: ["ivermectin", "diethylcarbamazine", "albendazole"],
        terms: ["elimination", "ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "lf-short-macrofilaricide",
        name: "Finish a short-course macrofilaricide: rifampicin regimen plus oxfendazole",
        tldr: "Two live adulticidal tracks — Ghana's rifampicin RCT and India's oxfendazole Phase IIa — need one coordinated finish.",
        summary:
          "The programme's founding weakness is adult worms surviving every regimen. Two tracks now move: high-dose rifampicin plus albendazole clearing antigen rapidly in a Ghana RCT, and oxfendazole in ICMR Phase IIa. The idea is a coordinated finish — harmonised adult-viability endpoints (ultrasound worm-nest clearance plus antigen dynamics), a head-to-head or sequential strategy, and a target product profile for a 1–2-week macrofilaricidal course. The first short adulticidal regimen collapses 4–6-year MDA timelines wherever it lands.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Harmonise endpoints across the Ghana rifampicin and India oxfendazole trials; run a head-to-head adult-viability comparison with ultrasound plus antigen readouts.",
        owner: "DNDi with KNUST, ICMR and WHO",
        links: [
          { label: "Rifampicin plus albendazole RCT (Pathogens 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kutu+Debrah+rifampicin+albendazole+filarial+antigen" },
          { label: "WHO — lymphatic filariasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
        ],
        diseases: ["lymphatic-filariasis"],
        drugs: ["oxfendazole", "albendazole", "doxycycline"],
        trials: ["rifampicin-lf-ghana", "oxfendazole-lf"],
        targets: ["wolbachia", "beta-tubulin"],
        bottlenecks: ["funding-gap"],
        terms: ["pdp"],
        stats: [
          { label: "Prize", value: "First short adulticidal regimen", note: "collapses multi-year MDA" },
        ],
      },
      {
        id: "lf-post-validation-surveillance",
        name: "A funded post-validation surveillance standard: FTS + Wb5 + xenomonitoring",
        tldr: "Twenty-one countries validated, persistent transmission at seven years — surveillance is the programme now.",
        summary:
          "Lawford 2025 (transmission seven years after MDA ended) and the 2026 post-validation surveillance review make the mandate explicit, but PVS is the least funded phase. The standard: annual FTS in children plus Wb5 impact readouts plus mosquito xenomonitoring in former foci, with a response protocol (targeted IDA/test-and-treat, per TAKeOFF evidence) on any signal. Fund it as elimination insurance — a fraction of one MDA round — or the validations will quietly expire.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Cost a standard PVS package across three validated countries; compare resurgence detection lead-time against passive surveillance.",
        owner: "WHO with validated-country programmes and FIND",
        links: [
          { label: "Post-validation surveillance review (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12846383" },
        ],
        diseases: ["lymphatic-filariasis"],
        diagnostics: ["filarial-test-strip", "wb5-biomarker", "brugia-test-plus"],
        trials: ["takeoff-lf"],
        institutions: ["who", "find-dx", "irss-burkina"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["eot", "elimination"],
        stats: [
          { label: "Warning", value: "Transmission 7 years post-MDA", note: "Lawford 2025" },
        ],
      },
      {
        id: "lf-mmdp-at-scale",
        name: "MMDP at scale: hydrocele surgery camps plus lymphoedema self-care, financed as economics",
        tldr: "36 million live with chronic disease; the Mali data prove care pays — fund it like treatment, not charity.",
        summary:
          "The programme counts treatments, not the 25 million hydrocele and 15 million lymphoedema cases. Dolo 2026 (Mali) showed basic care improves socioeconomic conditions — the domestic-financing argument. The package exists (ADL treatment, self-care, hydrocele surgery); what is missing is scale financing: surgery camps clearing hydrocele backlogs country by country, lymphoedema self-care through community health workers, and burden accounting in every dossier. A validation without MMDP coverage should be provisional.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "National hydrocele-backlog clearance plus self-care rollout in two countries, measuring DALYs averted and household income against MMDP cost.",
        owner: "National programmes with WHO and NGOs",
        links: [
          { label: "Basic package of care and socioeconomic outcomes (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dolo+Nutman+basic+package+care+socio-economic" },
          { label: "WHO — lymphatic filariasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
        ],
        diseases: ["lymphatic-filariasis"],
        institutions: ["who"],
        bottlenecks: ["funding-gap", "access-and-pricing"],
        terms: ["ntd"],
        stats: [
          { label: "Living with chronic disease", value: "≥ 36 million", note: "25M hydrocele, 15M lymphoedema" },
        ],
      },
    ],
  },
];
