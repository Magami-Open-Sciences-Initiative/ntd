import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Taeniasis and cysticercosis 2026 fact-check additions: the PAHO/WHO
 * preventive-chemotherapy guideline, the elimination-versus-control and
 * pig-management trials, the African and global researchers, and the ideas
 * that the 2026 source cross-check (WHO fact sheet 11 Jan 2022,
 * ClinicalTrials.gov, ChEMBL, Open Targets, G-FINDER, PubMed) showed were
 * missing from the graph. Ordinary records of their kind, kept in one file so
 * the review is visible as a set; wired into `index.ts` alongside ADDITIONS.
 *
 * Cross-check confirmed the disease page's figures against the WHO fact sheet:
 * 2.8 million DALYs (2015 FERG), 30% of epilepsy cases rising to 70% in some
 * communities, and 2.56–8.30 million people with NCC are all correct. Added:
 * the ">80% of the world's 50 million people with epilepsy live in LMICs"
 * context, the 2–3 year persistence of untreated taeniasis, and the Bayer
 * taenicide donation.
 *
 * A CORRECTION: the disease page listed "schistosome-trp-channel" among its
 * targets, but that record is explicitly the Schistosoma protein. Praziquantel
 * acts on homologous TRP channels in Taenia, not on the schistosome channel
 * itself, so the cross-species link was removed from both records and the
 * relationship stated in prose instead. The fact sheet itself is dated
 * 11 January 2022 and has not been refreshed.
 *
 * Honest negatives: Open Targets carries cysticercosis (MONDO_0015484) but
 * lists only dexamethasone, albendazole and praziquantel as drugs and no
 * pathogen target. ChEMBL has no Taenia solium protein target at all — only
 * the laboratory models T. pisiformis and T. crassiceps and the genus as a
 * whole-organism record. G-FINDER's 2024 report has no taeniasis or
 * cysticercosis line in the sections reviewed, so no funding figure is
 * asserted.
 */
export const TAENIASIS_CYSTICERCOSIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "paho-who-taeniasis-pc-guideline",
        name: "Guideline for preventive chemotherapy for the control of T. solium taeniasis",
        tldr: "The PAHO/WHO guideline for treating tapeworm carriers at scale — the human half of T. solium control.",
        summary:
          "Taenia solium control needs the human tapeworm carrier found and treated, because the carrier is the source of the eggs that cause neurocysticercosis in other people. This PAHO/WHO guideline sets out how to use preventive chemotherapy for taeniasis — single-dose praziquantel (10 mg/kg), niclosamide, or albendazole 400 mg for three days — in populations rather than only in individuals who present with symptoms. It matters because most carriers have no symptoms at all, so passive treatment never reaches the source; the guideline is the framework for the 'treatment of human taeniasis' intervention that WHO classes as a core rapid-impact measure, alongside pig vaccination and treatment.",
        ...R,
        issuer: "PAHO / WHO",
        status: "Current",
        scope: "Preventive chemotherapy for the control of Taenia solium taeniasis in endemic populations",
        recommendation:
          "Treat human taeniasis with single-dose praziquantel, niclosamide or albendazole, delivered as preventive chemotherapy to endemic populations rather than only to symptomatic individuals.",
        links: [
          { label: "WHO — taeniasis/cysticercosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["praziquantel", "albendazole"],
        institutions: ["who", "paho"],
        terms: ["one-health", "mda", "ntd", "wash"],
        stats: [
          { label: "Praziquantel dose", value: "10 mg/kg single dose" },
          { label: "Albendazole alternative", value: "400 mg for 3 consecutive days" },
        ],
      },
    ],
  },
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "taenia-elimination-vs-control",
        name: "Taenia solium elimination versus control in Peru",
        tldr: "The trial that asked whether T. solium can be eliminated from a community, or only kept in check.",
        summary:
          "Control of Taenia solium reduces transmission; elimination ends it, and the difference determines how long a programme must run and what it must do. This study in Peru compared elimination strategies against conventional control, testing whether an intensified combination of human treatment, pig interventions and surveillance could drive the parasite out of defined communities rather than merely suppressing it. It is part of the evidence base — with the ring strategy and the Zambian and Tanzanian trials — that decides whether elimination is a realistic programme goal or an aspiration, and its setting in a long-studied Peruvian endemic area gives it unusually complete baseline data.",
        ...R,
        phase: "Community intervention study",
        status: "Completed",
        sponsor: "Cysticercosis Working Group in Peru and partners",
        intervention: "Intensified elimination package (human taeniasis treatment, pig interventions, surveillance) versus control",
        result: "Compared elimination and control strategies; contributed to the evidence on how far T. solium can be driven down.",
        registry: "ClinicalTrials.gov NCT02612896",
        registryUrl: "https://clinicaltrials.gov/study/NCT02612896",
        links: [
          { label: "Taenia solium elimination versus control (NCT02612896)", url: "https://clinicaltrials.gov/study/NCT02612896" },
          { label: "WHO — taeniasis/cysticercosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["praziquantel", "albendazole", "oxfendazole"],
        technologies: ["tsol18-vaccine", "one-health-ntd-integration", "mass-drug-administration"],
        institutions: ["cysticercosis-working-group", "who"],
        people: ["hector-garcia"],
        terms: ["one-health", "elimination", "eot", "ntd"],
        stats: [
          { label: "Question", value: "Elimination, or only control?" },
          { label: "Setting", value: "Endemic Peru, long-studied" },
        ],
      },
      {
        id: "efecab-burkina-faso",
        name: "EFECAB: improving pig management to prevent epilepsy (Burkina Faso)",
        tldr: "An African trial testing whether managing pigs reduces epilepsy — linking animal husbandry directly to a child neurology outcome.",
        summary:
          "EFECAB was a community trial in Burkina Faso testing whether improved pig management and hygiene could reduce Taenia solium transmission and downstream neurocysticercosis-associated epilepsy — a disease where the outcome of interest is measured not in animals but in children's seizures. It is one of the clearest One Health trials in the field: the intervention sits with pig keeping and sanitation, and the benefit is prevented epilepsy. Its African setting matters, because most of the field's evidence has come from Latin America and Asia, and control strategies built there must be tested where the parasite's epidemiology, pig husbandry and health systems differ. It represents the shift of T. solium research into the continent that carries the growing burden.",
        ...R,
        phase: "Community intervention trial",
        status: "Completed",
        sponsor: "International research partnership with Burkinabè institutions",
        intervention: "Improved pig management and hygiene to reduce T. solium transmission",
        result: "Evaluated whether pig-management interventions reduce transmission and epilepsy burden in an African setting.",
        registry: "ClinicalTrials.gov NCT03095339",
        registryUrl: "https://clinicaltrials.gov/study/NCT03095339",
        links: [
          { label: "EFECAB — improving pig management to prevent epilepsy (NCT03095339)", url: "https://clinicaltrials.gov/study/NCT03095339" },
          { label: "WHO — taeniasis/cysticercosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        technologies: ["one-health-ntd-integration", "wash-interventions", "community-health-workers"],
        institutions: ["who"],
        terms: ["one-health", "zoonosis", "wash", "ntd"],
        stats: [
          { label: "Outcome", value: "Epilepsy prevented, not just pigs treated" },
          { label: "Setting", value: "Burkina Faso" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "cysticercosis-working-group",
        name: "Cysticercosis Working Group in Peru",
        tldr: "The Peruvian research consortium that has produced most of the world's evidence on Taenia solium and neurocysticercosis.",
        summary:
          "The Cysticercosis Working Group in Peru, based at the Universidad Peruana Cayetano Heredia and long led by Héctor García, is the single most productive source of research on Taenia solium infection and neurocysticercosis. Its work spans the diagnostic assays (the immunoelectrotransfer blot and rT24H antigen tests), the clinical management of brain cysts and the trials that settled it, the epidemiology of transmission, and field studies of control including elimination-versus-control designs. Almost every practical advance in neurocysticercosis care — including the evidence for combination antiparasitic therapy — carries its imprint. It shows what sustained, single-focus research can achieve for a disease the global system does not fund.",
        ...R,
        institutionType: "University research consortium",
        country: "Peru",
        city: "Lima",
        focus: "Taenia solium epidemiology, diagnostics, neurocysticercosis treatment and control.",
        links: [
          { label: "Garcia et al. — cysticercosis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Garcia+HH+cysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["albendazole", "praziquantel"],
        diagnostics: ["cysticercosis-serology"],
        trials: ["taenia-elimination-vs-control"],
        people: ["hector-garcia"],
        terms: ["one-health", "ntd"],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "hector-garcia",
        name: "Héctor H. García",
        tldr: "The Peruvian neurologist who has led the world's research on neurocysticercosis and its treatment.",
        summary:
          "Héctor García is a Peruvian neurologist and the most cited researcher in cysticercosis, having led the Cysticercosis Working Group in Peru through decades of work that defined how neurocysticercosis is diagnosed and treated. His trials established that albendazole is superior to praziquantel for viable parenchymal cysts, that combination therapy improves resolution when there are multiple cysts, and that corticosteroids are essential to control the inflammation treatment provokes. He also drove the diagnostic tools — the immunoelectrotransfer blot and the rT24H assay — that made field serology possible. Neurocysticercosis care today rests on evidence his group produced, and he represents the Latin American research leadership that has, unusually, stayed ahead of the disease's global neglect.",
        ...R,
        era: "Contemporary",
        role: "Neurologist; Universidad Peruana Cayetano Heredia, Peru; Cysticercosis Working Group in Peru",
        knownFor: "Defining the diagnosis and treatment of neurocysticercosis.",
        links: [
          { label: "Garcia et al. — neurocysticercosis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Garcia+HH+neurocysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["albendazole", "praziquantel"],
        diagnostics: ["cysticercosis-serology"],
        institutions: ["cysticercosis-working-group"],
        terms: ["ntd", "stigma-and-disability"],
      },
      {
        id: "kabemba-mwape",
        name: "Kabemba E. Mwape",
        tldr: "The Zambian veterinary parasitologist mapping and controlling T. solium at the pig-human interface.",
        summary:
          "Kabemba Mwape is a Zambian veterinary parasitologist at the University of Zambia whose work has made Zambia one of the best-characterised T. solium settings in Africa. He has studied the parasite's transmission between free-roaming pigs and people, the burden of porcine and human cysticercosis in Eastern Province, the spatial distribution of infection, and the feasibility of control interventions in rural communities where pig keeping is central to livelihoods. His research supplies the African evidence the field has lacked — most T. solium work has been done in Latin America and Asia — and it is the kind of veterinary-side, One Health science that control programmes cannot be built without.",
        ...R,
        era: "Contemporary",
        role: "Veterinary parasitologist; University of Zambia",
        knownFor: "T. solium transmission and control research at the pig-human interface in Zambia.",
        links: [
          { label: "Mwape et al. — Taenia solium research in Zambia (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mwape+KE+Taenia+solium" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        technologies: ["one-health-ntd-integration", "tsol18-vaccine"],
        terms: ["one-health", "zoonosis", "ntd"],
      },
      {
        id: "helena-ngowi",
        name: "Helena A. Ngowi",
        tldr: "The Tanzanian researcher documenting community knowledge and control of T. solium in northern Tanzania.",
        summary:
          "Helena Ngowi is a Tanzanian researcher at Sokoine University of Agriculture whose work has characterised the epidemiology, risk factors and community understanding of Taenia solium in northern Tanzania — a region where cysticercosis is a recognised cause of epilepsy and where pig keeping is widespread. Her studies of how communities perceive the disease, of transmission risk in pig-raising households, and of intervention acceptability, provide the implementation knowledge that control programmes need before they can work: why people keep free-roaming pigs, whether they will treat them, and what would make them change. She is part of the East African research capacity that the field increasingly depends on.",
        ...R,
        era: "Contemporary",
        role: "Researcher; Sokoine University of Agriculture, Tanzania",
        knownFor: "Epidemiology, risk factors and community control of T. solium in Tanzania.",
        links: [
          { label: "Ngowi et al. — Taenia solium research in Tanzania (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ngowi+HA+Taenia+solium" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        technologies: ["one-health-ntd-integration", "wash-interventions", "community-health-workers"],
        countries: ["tanzania"],
        terms: ["one-health", "zoonosis", "stigma-and-disability", "ntd"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "find-the-tapeworm-carrier",
        name: "Find the tapeworm carrier, not just the epilepsy patient",
        tldr: "The person spreading the eggs has no symptoms and no test good enough to find them — which is why the cycle never closes.",
        summary:
          "Neurocysticercosis is caused by eggs shed in the faeces of a person carrying an adult T. solium tapeworm, and that carrier usually has no symptoms at all. So every programme treats the downstream disease — seizures, cysts, epilepsy — while the source goes undetected, and household members of a carrier are at elevated risk without anyone knowing why. Diagnosis of the carrier state depends on stool microscopy for eggs or segments, which is insensitive and species-non-specific, or on coproantigen tests that are hard to deploy at scale. WHO itself lists improved, simple, cost-effective diagnostics as a continuing need and published target product profiles for taeniasis and porcine cysticercosis diagnosis in 2017. The proposal is to finish the job: a field-usable test for the active tapeworm carrier, deployed in the communities where transmission occurs, so that treatment reaches the person actually spreading the parasite.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Develop and field-validate a point-of-care test for active T. solium taeniasis (carrier state), integrated into community screening; measure carriers detected and treated and the resulting reduction in porcine infection.",
        owner: "Diagnostic developers with WHO, PAHO and the cysticercosis research networks",
        links: [
          { label: "WHO — taeniasis/cysticercosis (fact sheet): diagnostic need and TPPs", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        diagnostics: ["cysticercosis-serology", "molecular-pcr"],
        technologies: ["molecular-lamp", "crispr-diagnostics"],
        institutions: ["who", "cysticercosis-working-group"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["one-health", "ntd", "sensitivity-specificity"],
        stats: [
          { label: "The gap", value: "Carriers are asymptomatic and hard to detect" },
          { label: "WHO status", value: "Diagnostic TPPs published 2017; need remains" },
        ],
      },
      {
        id: "ncc-epilepsy-integration",
        name: "Treat neurocysticercosis through epilepsy services",
        tldr: "NCC causes 30–70% of epilepsy in endemic areas — so the epilepsy clinic is where the parasite is actually found.",
        summary:
          "Neurocysticercosis is the most frequent preventable cause of epilepsy worldwide, accounting for about 30% of epilepsy in endemic countries and up to 70% in some communities, and more than 80% of the world's 50 million people with epilepsy live in low- and lower-middle-income countries. Yet the two problems are managed in separate silos: epilepsy care focuses on seizure control and rarely investigates a parasitic cause, while T. solium programmes focus on pigs and carriers and rarely reach people with seizures. The proposal is deliberate integration — training epilepsy and primary-care clinicians to consider NCC, ensuring imaging and antiparasitic treatment are accessible where epilepsy is treated, linking epilepsy registers to cysticercosis surveillance so the burden becomes visible, and addressing the stigma that attaches to both conditions in girls and women especially. It finds the disease where it presents.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Integrate NCC investigation and treatment into epilepsy care in endemic districts; measure the proportion of epilepsy patients investigated for NCC, treated, and seizure-free, and the stigma reduction achieved.",
        owner: "National epilepsy and NTD programmes with WHO and neurology associations",
        links: [
          { label: "WHO — taeniasis/cysticercosis (fact sheet): epilepsy link and stigma", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
          { label: "WHO guidelines on management of T. solium neurocysticercosis", url: "https://www.who.int/publications/i/item/9789240032231" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["albendazole", "praziquantel"],
        diagnostics: ["cysticercosis-serology"],
        technologies: ["mhealth-surveillance", "community-health-workers"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap", "stigma-and-disability", "workforce-and-capacity", "access-and-pricing"],
        terms: ["ntd", "stigma-and-disability"],
        stats: [
          { label: "Epilepsy attributable", value: "≈30% (up to 70% in some communities)" },
          { label: "Where patients are", value: ">80% of the world's 50 million live in LMICs" },
        ],
      },
      {
        id: "scale-one-health-pig-package",
        name: "Scale the pig package alongside the donated taenicides",
        tldr: "The human drug is now donated; the pig half — vaccinate and treat — is what actually closes the cycle.",
        summary:
          "T. solium control has two halves, and only one is funded. WHO has negotiated the donation of taenicides from Bayer, so treating human carriers at scale is becoming feasible. The pig half — TSOL18 vaccination plus oxfendazole, which a Ugandan trial showed eliminated transmission by pigs when given three-monthly — is proven but not routinely funded or delivered, and it sits with veterinary and agricultural authorities rather than health ministries. The proposal is to scale the two together as a single financed package: use the donated human drug through health programmes, and fund and deliver pig vaccination and treatment through veterinary services, with shared surveillance and a shared outcome measure (porcine infection and human epilepsy). It is the One Health principle the corpus argues for, applied to the disease that demonstrates it most clearly — and the missing ingredient is not science but a budget that crosses ministries.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Fund and deliver TSOL18 plus oxfendazole alongside donated taenicides in defined endemic districts, governed by a shared health–veterinary plan; measure porcine cysticercosis, human taeniasis and NCC incidence.",
        owner: "Health and agriculture ministries with WHO, WOAH, FAO, GALVmed and Bayer",
        links: [
          { label: "WHO — taeniasis/cysticercosis (fact sheet): pig interventions and taenicide donation", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
          { label: "TSOL18 vaccine and oxfendazole trial (Uganda)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=TSOL18+oxfendazole+Uganda" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["oxfendazole", "praziquantel", "albendazole"],
        technologies: ["tsol18-vaccine", "one-health-ntd-integration", "mass-drug-administration"],
        institutions: ["who", "galvmed"],
        bottlenecks: ["funding-gap", "access-and-pricing"],
        terms: ["one-health", "zoonosis", "ntd", "elimination"],
        stats: [
          { label: "Human half", value: "Taenicides donated via WHO (Bayer)" },
          { label: "Pig half", value: "TSOL18 + oxfendazole proven, not routinely funded" },
        ],
      },
    ],
  },
];
