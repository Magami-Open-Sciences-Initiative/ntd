import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * HAT 2026 fact-check additions: ACOZI-KIDS and StrogHAT trials, the DRC
 * control programme institution, and the people/ideas review. (Drug and
 * target records needed no additions: acoziborole/fexinidazole updates went
 * into the base records.) Ordinary records of their kind, kept in one file
 * so the review is visible as a set; wired into `index.ts` alongside FBT_2026.
 */
export const HAT_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "acozi-kids",
        name: "ACOZI-KIDS: single-dose acoziborole in children 1–14",
        tldr: "The trial closing the paediatric gap — crushed single-dose tablets for the youngest patients.",
        summary:
          "ACOZI-KIDS (EDCTP2-funded, DRC and Guinea) tested single-dose acoziborole in 35 children aged 1 to 14 across all weight bands, with crushed tablets for those unable to swallow whole ones. Recruitment completed in March 2025 and 12-month follow-up in 2026. Children were historically the most neglected subgroup — adult tablets, no dosing data — so this small trial carries the registration for everyone the pivotal adult study left out.",
        ...R,
        phase: "Phase 2/3 (paediatric)",
        registry: "ClinicalTrials.gov NCT05433350",
        registryUrl: "https://clinicaltrials.gov/study/NCT05433350",
        status: "Recruitment complete (Mar 2025); follow-up through 2026",
        sponsor: "DNDi with DRC and Guinea national programmes; EDCTP2 funding",
        intervention: "Single-dose acoziborole (whole or crushed tablets), ages 1–14",
        result: "Pending 12-month follow-up; supports paediatric registration.",
        links: [
          { label: "EDCTP — single-dose treatment approved (Mar 2026)", url: "https://www.global-health-edctp3.europa.eu/news-and-events/news/new-single-dose-oral-treatment-approved-fight-sleeping-sickness-2026-03-18_en" },
        ],
        diseases: ["hat"],
        drugs: ["acoziborole"],
        targets: ["cpsf3"],
        institutions: ["dndi"],
        stats: [
          { label: "Enrolment", value: "35", number: 35, unit: "children", geography: "DRC and Guinea", note: "ages 1–14, all weight bands" },
        ],
      },
      {
        id: "stroghat",
        name: "StrogHAT: test-and-treat to interrupt transmission",
        tldr: "Screen 95% of an at-risk population, treat seropositives with one dose — 455,000 tests toward zero prevalence.",
        summary:
          "StrogHAT (€4M EU contribution) tests whether systematic screening plus single-dose acoziborole for eligible seropositives can interrupt Gambiense transmission: over two years 454,871 screening tests reached 95% of the at-risk study population, 0.43% seropositive, 803 enrolled and treated by end 2025, with a final-year prevalence survey to judge whether the approach drove prevalence to zero. It is the operational proof of the test-and-treat strategy acoziborole makes possible — treatment as transmission control, not just cure.",
        ...R,
        phase: "Implementation trial",
        registry: "ClinicalTrials.gov NCT06356974",
        registryUrl: "https://clinicaltrials.gov/study/NCT06356974",
        status: "Active; 803 treated by end 2025, final prevalence survey pending",
        sponsor: "EDCTP consortium",
        intervention: "Population screening + single-dose acoziborole for eligible seropositives",
        result: "Ongoing; endpoint is area prevalence reaching zero.",
        links: [
          { label: "EDCTP — single-dose treatment approved (Mar 2026)", url: "https://www.global-health-edctp3.europa.eu/news-and-events/news/new-single-dose-oral-treatment-approved-fight-sleeping-sickness-2026-03-18_en" },
        ],
        diseases: ["hat"],
        drugs: ["acoziborole"],
        targets: ["cpsf3"],
        institutions: ["dndi"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Screened", value: "454,871", number: 454871, unit: "tests", note: "95% of the at-risk population; 0.43% seropositive" },
          { label: "Treated", value: "803", number: 803, unit: "people", year: 2025 },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "pnltha-drc",
        name: "PNLTHA — DRC national sleeping-sickness control programme",
        tldr: "The programme carrying over half the world's cases toward 2030 elimination.",
        summary:
          "The Programme National de Lutte contre la Trypanosomiase Humaine Africaine, directed by Erick Miaka, runs the DRC's screening, treatment and surveillance — from 3,206 notified cases in 2014 to under 400 in 2023 and 330 in 2024 — and hosted the pivotal acoziborole, ACOZI-KIDS and StrogHAT trials. With the DRC holding the majority of remaining global burden, this is the programme on which eradication arithmetic depends.",
        ...R,
        institutionType: "National control programme",
        country: "Democratic Republic of the Congo",
        city: "Kinshasa",
        focus: "HAT screening, treatment, surveillance and trial hosting.",
        links: [
          { label: "DRC aims to eliminate sleeping sickness by 2030 (WHO AFRO 2024)", url: "https://afro.who.int/node/19462" },
        ],
        diseases: ["hat"],
        drugs: ["acoziborole", "fexinidazole"],
        trials: ["acoziborole-hat", "acozi-kids", "stroghat"],
        institutions: ["who", "dndi"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Cases", value: "3,206 (2014) → 330 (2024)", note: "notified, DRC" },
        ],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "junior-matangila",
        name: "Junior Matangila",
        tldr: "The DNDi DRC scientist arguing acoziborole finishes the job.",
        summary:
          "Junior Matangila of DNDi in the DRC works across the acoziborole programme from trial to registration, making the case that single-dose treatment 'accelerates progress toward finishing the job' of elimination. Country-office science — running pivotal studies where patients live — is DNDi's model, and he is its Kinshasa face.",
        ...R,
        era: "Contemporary",
        role: "Scientist, DNDi DRC",
        knownFor: "Acoziborole programme in the DRC.",
        links: [
          { label: "New drug could boost elimination (2026)", url: "https://www.infectiousdiseaseadvisor.com/news/new-drug-could-boost-efforts-to-wipe-out-sleeping-sickness" },
        ],
        diseases: ["hat"],
        institutions: ["dndi", "pnltha-drc"],
        countries: ["dr-congo"],
        drugs: ["acoziborole"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "fabrice-boyom",
        name: "Fabrice Fekam Boyom",
        tldr: "The Yaoundé biochemist mining Cameroonian plants for the next antiparasitic.",
        summary:
          "Fabrice Boyom of the University of Yaoundé I leads bio-guided discovery of antiparasitic natural products — including 2026 aminosteroid and Gardenia work with trypanosome activity. With industry libraries closed to NTDs, African biodiversity screened by African laboratories is a discovery channel the field underuses.",
        ...R,
        era: "Contemporary",
        role: "Professor of Biochemistry, University of Yaoundé I",
        knownFor: "Antiparasitic natural products from Cameroonian flora.",
        links: [
          { label: "Boyom trypanosome publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Boyom+FF+trypanosoma" },
        ],
        diseases: ["hat"],
        technologies: ["drug-repurposing", "ai-drug-discovery"],
        terms: ["ntd"],
      },
      {
        id: "enock-matovu",
        name: "Enock Matovu",
        tldr: "The Makerere veterinarian proving restricted spraying can finish Rhodesiense tsetse.",
        summary:
          "Enock Matovu of Makerere University, with Dennis Muhanguzi, showed restricted insecticide application on cattle is a last-mile option for eliminating acute (Rhodesiense) sleeping sickness in Uganda — vector control sized for pastoralist settings where traps and targets stall. Rhodesiense's animal reservoir makes veterinarians eliminationists, and he is chief among them.",
        ...R,
        era: "Contemporary",
        role: "Professor, Makerere University College of Veterinary Medicine",
        knownFor: "Restricted insecticide application for Rhodesiense elimination.",
        links: [
          { label: "Matovu tsetse publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Matovu+E+tsetse+trypanosomiasis" },
        ],
        diseases: ["hat"],
        countries: ["uganda"],
        technologies: ["tsetse-traps", "sterile-insect-technique"],
        terms: ["one-health", "elimination", "ntd"],
      },
      {
        id: "johnson-ouma",
        name: "Johnson O. Ouma",
        tldr: "The FIND-Kenya diagnostician holding the post-validation surveillance line.",
        summary:
          "Johnson Ouma of FIND-Kenya in Nairobi co-led the 2025 'bold strides' review of gHAT elimination and works on the diagnostics Kenya needs now that it is validated: detecting resurgence without mass screening. Post-validation surveillance is the least funded phase of elimination; his group designs it.",
        ...R,
        era: "Contemporary",
        role: "Researcher, FIND-Kenya, Nairobi",
        knownFor: "gHAT elimination review; post-validation diagnostics.",
        links: [
          { label: "Ouma elimination publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ouma+JO+gambiense+elimination" },
        ],
        diseases: ["hat"],
        institutions: ["find-dx"],
        countries: ["kenya"],
        diagnostics: ["catt", "molecular-pcr"],
        terms: ["elimination", "eot", "ntd"],
      },
      {
        id: "brice-rotureau",
        name: "Brice Rotureau",
        tldr: "The Pasteur parasitologist who built Guinea's elimination model on research-embedded control.",
        summary:
          "Brice Rotureau (Institut Pasteur / Institut Pasteur de Guinée) directs the parasitology behind Guinea's validation — integrating training and translational research into the national programme, down to the stumpy-form transmissibility science. The 'Guinean model' he articulates is now the template other countries copy.",
        ...R,
        era: "Contemporary",
        role: "Director of Research, Institut Pasteur; Parasitology Unit, Institut Pasteur de Guinée",
        knownFor: "Guinea elimination model; transmissible-form biology.",
        links: [
          { label: "Guinea validation (Pasteur, Feb 2025)", url: "https://www.pasteur.fr/en/press-area/press-documents/ird-dndi-institut-pasteur-guinee-and-institut-pasteur-welcome-who-validation-elimination-sleeping" },
        ],
        diseases: ["hat"],
        institutions: ["institut-pasteur"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "monica-mugnier",
        name: "Monica Mugnier",
        tldr: "The Johns Hopkins biologist asking where the parasite hides.",
        summary:
          "Monica Mugnier (Johns Hopkins) studies Trypanosoma brucei tissue reservoirs and antigenic variation — the biology behind the elimination endgame's hardest question: what persists when blood looks clear. Her caution ('this isn't solved yet') is the scientific counterweight to programmatic optimism, and the reason surveillance must outlive the last reported case.",
        ...R,
        era: "Contemporary",
        role: "Assistant Professor, Johns Hopkins University",
        knownFor: "T. brucei reservoirs and antigenic variation.",
        links: [
          { label: "Mugnier trypanosome publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mugnier+MR+Trypanosoma+brucei" },
        ],
        diseases: ["hat"],
        terms: ["ntd"],
      },
      {
        id: "david-horn",
        name: "David Horn",
        tldr: "The Dundee geneticist whose screens map every druggable corner of the trypanosome.",
        summary:
          "David Horn (University of Dundee) runs genome-scale functional screens in Trypanosoma brucei — drug-resistance mechanisms, essential genes, differentiation — producing the target lists the whole field mines. Basic parasitology this systematic is infrastructure, and Dundee is its headquarters.",
        ...R,
        era: "Contemporary",
        role: "Professor of Parasitology, University of Dundee",
        knownFor: "Genome-scale T. brucei functional screens.",
        links: [
          { label: "Horn trypanosome publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Horn+D+Trypanosoma+brucei+Dundee" },
        ],
        diseases: ["hat"],
        targets: ["cpsf3", "trypanothione-reductase"],
        technologies: ["ai-drug-discovery"],
        terms: ["ntd"],
      },
      {
        id: "epco-hasker",
        name: "Epco Hasker",
        tldr: "The Antwerp epidemiologist running the test-and-treat endgame trial.",
        summary:
          "Epco Hasker (Institute of Tropical Medicine Antwerp) leads the STROGHAT intervention study — 455,000 screened, 803 treated — testing whether systematic test-and-treat interrupts transmission. Implementation epidemiology at this scale is what converts a registered drug into an elimination result.",
        ...R,
        era: "Contemporary",
        role: "Professor of Epidemiology, Institute of Tropical Medicine Antwerp",
        knownFor: "STROGHAT test-and-treat study.",
        links: [
          { label: "STROGHAT protocol (Open Res Eur)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Nicco+Hasker+STROGHAT" },
        ],
        diseases: ["hat"],
        drugs: ["acoziborole"],
        trials: ["stroghat", "stop-hat-phase3"],
        terms: ["elimination", "eot", "ntd"],
      },
      {
        id: "jose-ramon-franco",
        name: "Jose Ramon Franco",
        tldr: "The WHO officer who counts every sleeping-sickness case on earth.",
        summary:
          "Jose Ramon Franco runs WHO's HAT surveillance — the Global Health Observatory indicators, the village-level Atlas with FAO, the dossier reviews behind all ten elimination validations. In a disease heading for zero, the counter is the programme: his datasets are where elimination is verified or falsified.",
        ...R,
        era: "Contemporary",
        role: "HAT surveillance lead, WHO",
        knownFor: "Global HAT Atlas and elimination validation data.",
        links: [
          { label: "WHO HAT data (GHO)", url: "https://www.who.int/data/gho/data/themes/topics/human-african-trypanosomiasis" },
        ],
        diseases: ["hat"],
        institutions: ["who"],
        terms: ["elimination", "eot", "ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "hat-test-and-treat-scale",
        name: "Scale StrogHAT test-and-treat to every remaining focus",
        tldr: "Screen 95%, treat seropositives with one dose, survey to zero — the strategy that ends Gambiense HAT.",
        summary:
          "StrogHAT proved the operations: 455,000 screening tests, 95% population coverage, 803 single-dose treatments. The idea is to templatise it — mobile teams, RDT-first screening, same-day acoziborole, contact follow-up, final prevalence survey — and roll it across the DRC's remaining foci and the handful of neighbours, funded as elimination infrastructure rather than research. Acoziborole without test-and-treat is just a better drug; with it, it is the end of transmission.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Replicate the StrogHAT protocol in three new foci, measuring cost per focus cleared and time to zero prevalence versus standard passive screening.",
        owner: "PNLTHA programmes with DNDi, EDCTP and WHO",
        links: [
          { label: "EDCTP — single-dose treatment approved (Mar 2026)", url: "https://www.global-health-edctp3.europa.eu/news-and-events/news/new-single-dose-oral-treatment-approved-fight-sleeping-sickness-2026-03-18_en" },
        ],
        diseases: ["hat"],
        drugs: ["acoziborole"],
        trials: ["stroghat", "stop-hat-phase3", "acozi-kids"],
        institutions: ["pnltha-drc", "dndi", "who"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Template", value: "455k screened, 803 treated", note: "StrogHAT to zero prevalence" },
        ],
      },
      {
        id: "hat-rhodesiense-one-health",
        name: "A One Health endgame for Rhodesiense: cattle, tsetse, fexinidazole",
        tldr: "Treat the cows, trap the flies, roll out the oral drug — the first real Rhodesiense elimination package.",
        summary:
          "Rhodesiense HAT has never had a strategy because it has neither a drug fit for villages nor a reservoir plan. Now it has both halves: fexinidazole as first-line oral treatment (Ethiopia, Malawi, Zimbabwe, Zambia) and proven veterinary tools — restricted cattle spraying (Matovu, Uganda) plus tiny targets. The idea bundles them into a single Rhodesiense package per focus: human test-and-treat, cattle treatment, tsetse suppression, with the Zambezi traveller cases as the early-warning network. Elimination of the gambiense form by 2030 means nothing if rhodesiense simmers in cattle.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Deploy the bundled package in two Rhodesiense foci (Uganda, Malawi/Zambia), measuring human incidence, cattle prevalence and tsetse density against matched controls.",
        owner: "National programmes with FAO/PAAT, DNDi and WHO",
        links: [
          { label: "Rhodesiense in a US traveller (MMWR 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11925269" },
        ],
        diseases: ["hat"],
        drugs: ["fexinidazole", "suramin"],
        vectors: ["tsetse-fly"],
        technologies: ["tsetse-traps", "tiny-targets", "sterile-insect-technique"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["one-health", "elimination", "zoonosis"],
        stats: [
          { label: "2025 burden", value: "41 cases", note: "small enough to end, zoonotic enough to persist" },
        ],
      },
      {
        id: "hat-rhodesiense-rdt",
        name: "A rapid test for Rhodesiense sleeping sickness",
        tldr: "Gambiense has CATT and RDTs; Rhodesiense has microscopy — close the diagnostic gap the drug rollout needs.",
        summary:
          "Fexinidazole's Rhodesiense rollout will stall without a field test: serological screening exists only for Gambiense, so Rhodesiense diagnosis still needs microscopy and clinical suspicion in pastoral settings. WHO's Institut Pasteur biobank holds Rhodesiense patient samples precisely for this; the idea is a funded development track — antigen discovery from the biobank, lateral-flow prototyping with FIND, field validation in Malawi/Uganda/Zambia — with a target product profile mirroring the Gambiense RDT. A drug without a diagnostic treats travellers, not epidemics.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Screen biobank-derived candidates against Rhodesiense sera, prototype the best two as lateral-flow RDTs, and validate against microscopy in three foci.",
        owner: "FIND with WHO biobank, Institut Pasteur and national programmes",
        links: [
          { label: "WHO HAT fact sheet (diagnosis)", url: "https://www.who.int/news-room/fact-sheets/detail/trypanosomiasis-human-african-(sleeping-sickness)" },
        ],
        diseases: ["hat"],
        diagnostics: ["catt", "molecular-pcr"],
        institutions: ["find-dx", "who", "institut-pasteur"],
        bottlenecks: ["funding-gap"],
        terms: ["pdp"],
        stats: [
          { label: "Gap", value: "No Rhodesiense RDT", note: "Gambiense has CATT + RDTs" },
        ],
      },
    ],
  },
];
