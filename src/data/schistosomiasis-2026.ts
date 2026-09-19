import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Schistosomiasis 2026 fact-check additions: the WHO monitoring-and-evaluation
 * framework that accelerates elimination, male genital schistosomiasis, the
 * zoonotic hybrids that complicate control, the arpraziquantel implementation
 * study, the African and hybrid researchers, and the ideas that the 2026
 * source cross-check (WHO fact sheet 23 Feb 2026, WHO guidance 31 Oct 2024,
 * G-FINDER 2024, ClinicalTrials.gov, ChEMBL, Open Targets, PubMed) showed
 * were missing from the graph. Ordinary records of their kind, kept in one
 * file so the review is visible as a set; wired into `index.ts`.
 *
 * Cross-check confirmed the disease page's figures against the WHO fact sheet
 * (23 February 2026): 253.7 million requiring preventive treatment in 2024,
 * 93.9% in Africa, 79 countries with transmission (50 needing mass treatment),
 * 14,353 deaths, 39.6% coverage overall and 61.7% of school-aged children are
 * all correct. Added: 100.5 million people actually treated in 2024, the new
 * confirmation of S. haematobium in Cabo Verde, and the ~60% fall in
 * school-aged prevalence over a decade.
 *
 * Honest negatives: Open Targets lists schistosomiasis (MONDO_0015254) but
 * the associated targets are human immune genes; ChEMBL holds the real
 * parasite proteins — thioredoxin glutathione reductase, HDAC8, cathepsin B1,
 * dihydroorotate dehydrogenase — and the corpus already carries TGR and
 * HDAC8. G-FINDER 2024 reports schistosomiasis R&D down 23% in 2023, still the
 * highest-funded helminth disease.
 */
export const SCHISTOSOMIASIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* --------------------------------- terms -------------------------------- */
  {
    kind: "terms",
    records: [
      {
        id: "male-genital-schistosomiasis",
        name: "Male genital schistosomiasis (MGS)",
        tldr: "Schistosome eggs in the male genital tract — the male counterpart to FGS, and far less recognised.",
        summary:
          "Female genital schistosomiasis is increasingly recognised, but Schistosoma haematobium eggs also lodge in the male genital tract, causing male genital schistosomiasis (MGS): ejaculatory pain, blood in the semen (haematospermia), and pathology of the seminal vesicles and prostate that can impair fertility. WHO now describes MGS explicitly alongside FGS, but it is rarely diagnosed — semen is not examined in routine schistosomiasis testing, and the symptoms are attributed to other conditions or not reported at all. Like FGS, it is a reason the 'treat everyone at risk' campaigns matter: an infection that is never diagnosed is one that the single-dose cure never reaches, and one that leaves behind genital pathology long after the worms are cleared.",
        ...R,
        links: [
          { label: "WHO — schistosomiasis (fact sheet, 23 February 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        diagnostics: ["kato-katz", "point-of-care-cca", "molecular-pcr"],
        terms: ["fgs", "ntd", "stigma-and-disability"],
        stats: [
          { label: "Cause", value: "S. haematobium eggs in the male genital tract" },
          { label: "Recognition", value: "Described by WHO, but rarely diagnosed" },
        ],
      },
      {
        id: "schistosome-hybrids",
        name: "Schistosome hybrids and zoonotic transmission",
        tldr: "Human and animal schistosomes interbreed — so the parasite can have an animal reservoir that treating people alone will never clear.",
        summary:
          "Schistosomiasis has been taught as a purely human disease, with humans the reservoir for the species that infect them. That is no longer fully true. Hybrids of human and animal schistosomes — Schistosoma haematobium crossed with the cattle parasite S. bovis, and with S. mattheei — have been found in people in many sub-Saharan African countries, and some are capable of transmission. The 2013 outbreak in Corsica, France, was traced to a hybrid with animal origins. This matters for elimination: if the parasite can cycle through livestock or wildlife, then treating people alone cannot interrupt transmission, and the goal requires the same One Health approach as the zoonotic NTDs — veterinary surveillance, and consideration of animal hosts in control planning.",
        ...R,
        links: [
          { label: "WHO — schistosomiasis (fact sheet, 23 February 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        vectors: ["freshwater-snails"],
        technologies: ["genomic-surveillance", "one-health-ntd-integration", "snail-control"],
        terms: ["one-health", "zoonosis", "elimination", "ntd"],
        stats: [
          { label: "Hybrids reported", value: "S. haematobium–S. bovis and S. haematobium–S. mattheei" },
          { label: "Proof of transmission", value: "Corsica, France, 2013" },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-schisto-me-framework-2024",
        name: "WHO monitoring and evaluation framework for schistosomiasis and STH (2024)",
        tldr: "The 2024 guide that tells programmes how to track progress and adjust as epidemiology changes on the road to elimination.",
        summary:
          "Published on 31 October 2024 as the framework 'Assessing schistosomiasis and soil-transmitted helminthiases control programmes: monitoring and evaluation', this guidance gives national programme managers and health teams detailed, adaptable methods to assess progress, refine interventions, adjust medicine needs and allocate resources as disease patterns shift. It is aligned with the 2021–2030 NTD road map and WHO's treatment guidelines, and it matters because elimination turns on measurement: as prevalence falls, the standard tools lose sensitivity, programmes must decide when to stop mass treatment and move to surveillance, and the epidemiology itself is changing through hybrids and new foci such as Cabo Verde. The framework is what turns 'eliminate as a public health problem' from a goal into a monitored trajectory.",
        ...R,
        issuer: "WHO",
        issued: "31 October 2024",
        status: "Current",
        scope: "Monitoring and evaluation of schistosomiasis and soil-transmitted helminthiasis control and elimination programmes",
        recommendation:
          "Use standardised monitoring to track progress, adapt interventions as epidemiology changes, adjust medicine needs and allocate resources toward elimination as a public health problem.",
        whatChanged:
          "Provided the operational monitoring-and-evaluation framework for the elimination phase, complementing the 2022 treatment guideline.",
        links: [
          { label: "WHO — new guidance to accelerate elimination (31 October 2024)", url: "https://www.who.int/news/item/31-10-2024-new-guidance-to-accelerate-elimination-of-schistosomiasis-and-intestinal-helminthiasis" },
          { label: "WHO — schistosomiasis (fact sheet, 23 February 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis", "sth"],
        pathogens: ["schistosoma"],
        drugs: ["praziquantel"],
        diagnostics: ["kato-katz", "point-of-care-cca", "molecular-pcr"],
        institutions: ["who"],
        terms: ["elimination", "eot", "ntd", "mda"],
      },
    ],
  },
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "arpraziquantel-implementation",
        name: "Introduction of arpraziquantel for schistosomiasis control",
        tldr: "The implementation study that moves the child-friendly schistosomiasis tablet from approval into national programmes.",
        summary:
          "Arpraziquantel — the dispersible 150 mg tablet for preschool-aged children — was recommended by the European Medicines Agency in 2023, WHO-prequalified in 2024, and first given to a child in Uganda in 2025. This implementation study (NCT06698510) addresses the step that decides whether that matters at scale: how a country actually introduces a second praziquantel product into its preventive-chemotherapy programme. That means training, supply chain, dosing in children from 3 months, integration with the existing school and community platforms, and the willingness to include the age group that was always left out. Approval is not access; this study is where access is built.",
        ...R,
        phase: "Implementation study",
        status: "Recruiting",
        sponsor: "National programme with the Pediatric Praziquantel Consortium and partners",
        intervention: "Arpraziquantel dispersible tablets for preschool-aged children (3 months – 6 years)",
        result: "Pending; tests feasibility, coverage and integration of a second praziquantel product into national programmes.",
        registry: "ClinicalTrials.gov NCT06698510",
        registryUrl: "https://clinicaltrials.gov/study/NCT06698510",
        links: [
          { label: "Introduction of arpraziquantel for schistosomiasis control (NCT06698510)", url: "https://clinicaltrials.gov/study/NCT06698510" },
          { label: "WHO — schistosomiasis (fact sheet, 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        drugs: ["arpraziquantel", "praziquantel"],
        technologies: ["mass-drug-administration", "community-health-workers"],
        institutions: ["pediatric-praziquantel-consortium", "who"],
        countries: ["uganda"],
        terms: ["mda", "preventive-chemotherapy", "ntd"],
        stats: [
          { label: "Age group", value: "3 months – 6 years" },
          { label: "The step", value: "From regulatory approval to programme delivery" },
        ],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "narcis-kabatereine",
        name: "Narcis B. Kabatereine",
        tldr: "The Ugandan parasitologist who built one of Africa's largest schistosomiasis control programmes and the evidence behind it.",
        summary:
          "Narcis Kabatereine is a Ugandan parasitologist, long associated with Uganda's Vector Control Division and the national neglected tropical disease programme, and one of Africa's most influential figures in schistosomiasis and soil-transmitted helminth control. His work bridged epidemiology and programme delivery at a scale unusual in the field: mapping infection across Uganda, generating the evidence on praziquantel treatment and reinfection, and helping build and evaluate the mass-treatment programmes that now reach school-aged children across much of Africa. He represents the model the field needs — an African scientist embedded in both research and the national programme, so that the evidence and the delivery are the same conversation.",
        ...R,
        era: "Contemporary",
        role: "Parasitologist; national NTD programme and Vector Control Division, Uganda",
        knownFor: "Building the evidence base and delivery of schistosomiasis and STH control in Uganda.",
        links: [
          { label: "Kabatereine et al. — schistosomiasis control research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kabatereine+NB+schistosomiasis" },
        ],
        diseases: ["schistosomiasis", "sth"],
        pathogens: ["schistosoma"],
        drugs: ["praziquantel"],
        technologies: ["mass-drug-administration", "community-health-workers"],
        countries: ["uganda"],
        terms: ["mda", "preventive-chemotherapy", "ntd"],
      },
      {
        id: "bonnie-webster",
        name: "Bonnie L. Webster",
        tldr: "The molecular parasitologist who revealed that human and animal schistosomes interbreed — a finding that changed the elimination calculus.",
        summary:
          "Bonnie Webster is a molecular parasitologist at the Natural History Museum in London whose work on the genetics of Schistosoma species identified the hybrids between human and animal schistosomes — S. haematobium crossed with the cattle parasite S. bovis — that occur in people across sub-Saharan Africa. That finding matters for elimination because it means the parasite can have an animal reservoir, so treating people alone may not interrupt transmission, and it was central to understanding the Corsican outbreak. Her molecular epidemiology puts a hard scientific fact behind what had been a convenient assumption: that schistosomiasis is a disease of humans only.",
        ...R,
        era: "Contemporary",
        role: "Molecular parasitologist; Natural History Museum, London, United Kingdom",
        knownFor: "Discovering schistosome hybrids and their implications for control.",
        links: [
          { label: "Webster et al. — schistosome hybrids and genomics (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Webster+BL+schistosoma+hybrid" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        technologies: ["genomic-surveillance"],
        terms: ["one-health", "zoonosis", "elimination"],
      },
      {
        id: "amadou-garba",
        name: "Amadou Garba-Djirmay",
        tldr: "The WHO scientist from Niger who coordinates global schistosomiasis and STH control guidance.",
        summary:
          "Amadou Garba-Djirmay is a Nigerien parasitologist and scientist in WHO's Global Neglected Tropical Diseases Programme, where he has been central to the evidence and guidance that shape schistosomiasis and soil-transmitted helminth control worldwide — including the 2022 treatment guideline and the 2024 monitoring-and-evaluation framework. His career combines field epidemiology in the Sahel with the technical work of translating that evidence into WHO recommendations used by every endemic country. He is a clear example of African scientific leadership operating at the centre of global policy, not at its periphery.",
        ...R,
        era: "Contemporary",
        role: "Parasitologist; Global Neglected Tropical Diseases Programme, WHO",
        knownFor: "Evidence and guidance for global schistosomiasis and STH control.",
        links: [
          { label: "WHO — new guidance to accelerate elimination (2024)", url: "https://www.who.int/news/item/31-10-2024-new-guidance-to-accelerate-elimination-of-schistosomiasis-and-intestinal-helminthiasis" },
        ],
        diseases: ["schistosomiasis", "sth"],
        pathogens: ["schistosoma"],
        drugs: ["praziquantel"],
        technologies: ["mass-drug-administration"],
        institutions: ["who"],
        terms: ["mda", "preventive-chemotherapy", "elimination", "ntd"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "one-health-schisto-hybrids",
        name: "Bring livestock into schistosomiasis control",
        tldr: "Human and cattle schistosomes interbreed — so the 'treat everyone' strategy may never interrupt transmission on its own.",
        summary:
          "The elimination model for schistosomiasis assumes humans are the reservoir, so treating people repeatedly should eventually break transmission. The discovery of S. haematobium–S. bovis hybrids in people across sub-Saharan Africa undermines that assumption: if the parasite cycles through cattle and other animals, then human treatment alone leaves a reservoir that can reseed transmission, exactly as animal hosts do for the zoonotic NTDs. The proposal is to extend schistosomiasis control into a One Health programme — screening livestock and other animal hosts for schistosome infection, genomic surveillance to detect and track hybrids, treatment or management of animal reservoirs where they matter, and veterinary representation in national schistosomiasis programmes. It is the same shift the echinococcosis and rabies fields had to make, arriving late in a disease that was long assumed to be purely human.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Survey livestock and other animal hosts for schistosome infection in hybrid-endemic districts, use genomics to map hybrid transmission, and pilot veterinary interventions alongside human treatment to measure added impact.",
        owner: "National NTD and veterinary programmes with WHO, WOAH and the Natural History Museum genomics network",
        links: [
          { label: "WHO — schistosomiasis (fact sheet, 23 February 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        vectors: ["freshwater-snails"],
        technologies: ["genomic-surveillance", "one-health-ntd-integration", "snail-control"],
        institutions: ["who", "woah"],
        countries: ["uganda", "mali", "senegal"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["one-health", "zoonosis", "elimination", "eot", "ntd"],
        stats: [
          { label: "Assumption broken", value: "Humans are the only reservoir" },
          { label: "Evidence", value: "S. haematobium–S. bovis hybrids in many African countries" },
        ],
      },
      {
        id: "fix-adult-praziquantel-supply",
        name: "Close the adult praziquantel supply gap",
        tldr: "WHO names limited praziquantel availability for adults as the major limitation — and adults are the ones contaminating the water.",
        summary:
          "The 2022 guideline widened treatment from school-aged children to everyone over two, because adults are often the ones entering water and contaminating it, and treating them is what stops reinfection of children. But WHO states plainly that a major limitation on schistosomiasis control has been the limited availability of praziquantel, particularly for adults, and coverage data show the consequence: 61.7% of school-aged children were reached in 2024 against 39.6% of all people needing treatment. The child-focused donation pipeline and the school-delivery platform do not reach adults. The proposal is to close that gap deliberately — expand the donated supply and its pledging to cover adults, extend delivery through community and adult health platforms rather than only schools, and report adult coverage as its own indicator so the shortfall is visible. The drug carries the whole programme; the programme has to reach everyone at risk.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Increase adult praziquantel supply and deliver through community platforms in high-prevalence districts; measure adult coverage, reinfection rates in children, and progress toward the ≥75% all-age target.",
        owner: "WHO and national programmes with praziquantel donors and manufacturers",
        links: [
          { label: "WHO — schistosomiasis (fact sheet, 23 February 2026): adult supply limitation", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        drugs: ["praziquantel"],
        technologies: ["mass-drug-administration", "community-health-workers"],
        institutions: ["who"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["mda", "preventive-chemotherapy", "ntd"],
        stats: [
          { label: "Coverage gap (2024)", value: "61.7% of children vs 39.6% of all people needing treatment" },
          { label: "WHO's words", value: "Adult praziquantel availability is a major limitation" },
        ],
      },
      {
        id: "integrate-fgs-mgs-srh",
        name: "Put genital schistosomiasis into sexual and reproductive health care",
        tldr: "FGS and MGS hide inside clinics that treat them as STIs — so integrate diagnosis and praziquantel where those patients already go.",
        summary:
          "Female genital schistosomiasis affects an estimated 56 million women and girls in sub-Saharan Africa, and male genital schistosomiasis is even less recognised; both are routinely misdiagnosed as sexually transmitted infections, and FGS increases susceptibility to HIV. The patients are already in contact with services — family planning, antenatal care, HIV clinics, STI clinics — but those services are not looking for schistosomiasis, and schistosomiasis programmes are not looking in the genital tract. The proposal is to integrate: train sexual and reproductive health and HIV staff to recognise FGS and MGS, add praziquantel treatment pathways within those clinics, and include genital schistosomiasis in both disease programmes' surveillance. It turns two under-diagnosed conditions into a case-finding opportunity inside services that already see the affected population.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Integrate FGS/MGS recognition and praziquantel treatment into SRH and HIV services in high-endemic districts; measure diagnosis rates, treatment uptake, and HIV-risk reduction against baseline.",
        owner: "National schistosomiasis and SRH/HIV programmes with WHO and women's health organisations",
        links: [
          { label: "WHO — schistosomiasis (fact sheet, 23 February 2026): FGS, MGS and HIV risk", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
          { label: "WHO — female genital schistosomiasis", url: "https://www.who.int/publications/i/item/9789241509299" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        drugs: ["praziquantel"],
        diagnostics: ["point-of-care-cca", "kato-katz", "molecular-pcr"],
        technologies: ["community-health-workers", "mass-drug-administration"],
        institutions: ["who"],
        countries: ["malawi", "tanzania", "ghana"],
        bottlenecks: ["diagnostics-gap", "stigma-and-disability", "workforce-and-capacity"],
        terms: ["fgs", "ntd", "stigma-and-disability", "elimination"],
        stats: [
          { label: "FGS burden", value: "≈ 56 million women and girls in sub-Saharan Africa" },
          { label: "Common error", value: "Misdiagnosed as a sexually transmitted infection" },
        ],
      },
    ],
  },
];
