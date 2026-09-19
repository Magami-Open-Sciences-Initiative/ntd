import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Soil-transmitted helminthiases 2026 fact-check additions: the moxidectin-
 * albendazole Phase 3 trial, emodepside for strongyloidiasis, the WHO
 * strongyloidiasis guideline, the African researchers and the field site, and
 * the ideas that the 2026 source cross-check (WHO STH fact sheet, WHO news
 * Aug 2024 and Jun 2024, Lancet Infect Dis 2025, ClinicalTrials.gov, G-FINDER,
 * PubMed) showed were missing from the graph. Ordinary records of their kind,
 * kept in one file so the review is visible as a set; wired into `index.ts`.
 *
 * Cross-check confirmed the disease page's figures against the WHO fact sheet:
 * 1.5 billion infected (24% of the world), the age-group numbers behind the
 * ">800 million needing treatment" stat, >600 million S. stercoralis, and
 * ">500 million children treated in 2021 (62%)" are all correct. Added the
 * moxidectin-albendazole comparator (69% vs 16% for albendazole alone), the
 * >50% fall in STH DALYs between 2010 and 2019, and the six WHO 2030 targets.
 * The fact sheet itself is dated 18 January 2023 and has not been refreshed —
 * noted as a currency caveat rather than treated as current.
 *
 * Honest negatives: Open Targets carries no soil-transmitted helminth disease
 * entry at all (search returns zero), and ChEMBL has no Ascaris, Trichuris or
 * Necator protein targets — only Ancylostoma ceylanicum and A. caninum as
 * whole-organism records. The corpus's beta-tubulin and GluCl targets are
 * therefore borrowed from better-characterised organisms, reflecting how
 * under-annotated the STH parasite proteomes are. G-FINDER reports helminth
 * R&D as a group ($94m in 2023, down 14%); STH has no separate line.
 */
export const STH_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "mox-alb-trichuris-phase3",
        name: "Moxidectin + albendazole for trichuriasis (Phase 3, Pemba Island)",
        tldr: "The trial that finally beat whipworm: 69% cure with the combination against 16% for albendazole alone.",
        summary:
          "Trichuris trichiura is the weak point of deworming. A single dose of albendazole — the backbone of mass treatment — cures only a small minority, so the worm that causes much of the morbidity survives every round. This double-blind, randomised, superiority Phase 3 trial at a primary school on Pemba Island, Tanzania, compared moxidectin plus albendazole against albendazole alone and placebo in 224 children aged 6–11. The combination cured 69% (77 of 111) against 16% (11 of 68) with albendazole alone — an absolute difference of 53 percentage points — with a safety profile similar to placebo. It is the clearest evidence yet that a combination regimen can do what the standard single drug cannot, and it sets up the policy question the field has avoided: whether to change what hundreds of millions of children receive.",
        ...R,
        phase: "Phase 3, randomised double-blind superiority",
        status: "Reported positive, 2025",
        sponsor: "Swiss Tropical and Public Health Institute with the Public Health Laboratory Ivo de Carneri, Pemba",
        intervention: "Moxidectin plus albendazole versus albendazole alone versus placebo (single oral doses)",
        result: "Cure rate 69% with moxidectin-albendazole versus 16% with albendazole alone (absolute difference 53.2 points, 95% CI 39.6–64.2).",
        registry: "ClinicalTrials.gov NCT06188715",
        registryUrl: "https://clinicaltrials.gov/study/NCT06188715",
        links: [
          { label: "Schnoz et al. — moxidectin-albendazole for trichuriasis (Lancet Infect Dis 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40675166/" },
          { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["moxidectin", "albendazole"],
        technologies: ["mass-drug-administration", "drug-repurposing"],
        institutions: ["ivo-de-carneri"],
        people: ["jennifer-keiser"],
        countries: ["tanzania"],
        terms: ["mda", "preventive-chemotherapy", "ntd"],
        stats: [
          { label: "Enrolment", value: "224 children", number: 224, unit: "children", year: 2024, geography: "Pemba Island, Tanzania", source: { label: "Schnoz et al., Lancet Infect Dis 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40675166/" } },
          { label: "Cure rate", value: "69% vs 16%", note: "moxidectin+albendazole versus albendazole alone" },
        ],
      },
      {
        id: "emodepside-strongyloides",
        name: "Emodepside for Strongyloides stercoralis infection (Phase 2)",
        tldr: "A Phase 2 trial of emodepside against the soil worm that deworming campaigns miss entirely.",
        summary:
          "Strongyloides stercoralis is the STH that mass deworming cannot touch: it does not respond to albendazole or mebendazole, it is invisible to the standard stool tests, and in an immunocompromised person it can multiply unchecked into a fatal hyperinfection. WHO added its control as a 2030 objective, possible because prequalified ivermectin became affordable in 2021. This Phase 2 trial tested emodepside — a depsipeptide already in development for filarial disease, acting on a different channel from ivermectin — in adults infected with Strongyloides, and completed. It matters as a second option: relying on ivermectin alone repeats the single-drug dependency that left Trichuris untreated for twenty years.",
        ...R,
        phase: "Phase 2",
        status: "Completed",
        sponsor: "Investigator-led with the drug's developer",
        intervention: "Emodepside in adults with Strongyloides stercoralis infection",
        result: "Completed; evaluated as an alternative to ivermectin for strongyloidiasis.",
        registry: "ClinicalTrials.gov NCT06373835",
        registryUrl: "https://clinicaltrials.gov/study/NCT06373835",
        links: [
          { label: "Emodepside in adults infected with Strongyloides (NCT06373835)", url: "https://clinicaltrials.gov/study/NCT06373835" },
          { label: "WHO — guideline on public health control of human strongyloidiasis (2024)", url: "https://www.who.int/news/item/02-08-2024-who-releases-guideline-on-public-health-control-of-human-strongyloidiasis" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["emodepside", "ivermectin"],
        technologies: ["drug-repurposing"],
        institutions: ["who"],
        terms: ["strongyloidiasis", "ntd"],
        stats: [
          { label: "Why it matters", value: "S. stercoralis ignores albendazole and standard stool tests" },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-strongyloidiasis-guideline-2024",
        name: "WHO guideline on public health control of human strongyloidiasis (2024)",
        tldr: "The first WHO guideline for the soil worm that deworming campaigns have always missed — and that can be fatal.",
        summary:
          "Released on 2 August 2024, this guideline addresses Strongyloides stercoralis, which infects an estimated 600 million people in the same poor communities as the other soil-transmitted helminths but is different in three ways that matter: it needs different diagnostic methods (so it is routinely missed), it does not respond to albendazole or mebendazole (so it is untouched by mass deworming), and it can reproduce inside the host, causing a fatal hyperinfection syndrome in people whose immunity is suppressed — including by the steroids used for other conditions. WHO added its control as a 2030 objective, which became feasible when prequalified ivermectin turned affordable in 2021. The guideline sets out how to find and treat it through the same delivery platforms used for the other STHs.",
        ...R,
        issuer: "WHO",
        issued: "2 August 2024",
        status: "Current",
        scope: "Public health control of human strongyloidiasis, including diagnosis and treatment through preventive-chemotherapy platforms",
        recommendation:
          "Include Strongyloides stercoralis control in STH programmes using ivermectin through existing delivery platforms, with appropriate diagnostics rather than standard stool microscopy alone.",
        whatChanged:
          "First WHO guideline for strongyloidiasis; made it a formal 2030 objective rather than an unrecognised gap in deworming.",
        links: [
          { label: "WHO — guideline on public health control of human strongyloidiasis (2 August 2024)", url: "https://www.who.int/news/item/02-08-2024-who-releases-guideline-on-public-health-control-of-human-strongyloidiasis" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["ivermectin"],
        diagnostics: ["molecular-pcr"],
        institutions: ["who"],
        terms: ["strongyloidiasis", "elimination", "ntd", "mda"],
        stats: [
          { label: "People infected", value: "> 600 million globally" },
          { label: "Missed because", value: "Needs different diagnostics; ignores albendazole" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "ivo-de-carneri",
        name: "Public Health Laboratory Ivo de Carneri (Pemba, Tanzania)",
        tldr: "The Tanzanian island laboratory that has hosted a generation of STH drug trials and training.",
        summary:
          "The Public Health Laboratory Ivo de Carneri on Pemba Island, Tanzania, is a parasitic-disease research and training laboratory that has been the field site for many of the most important soil-transmitted helminth treatment trials — including the Phase 3 moxidectin-albendazole trichuriasis trial that reported 69% cure in 2025. Its combination of a well-characterised endemic population, local laboratory capacity and long-standing international partnerships has made it a reference site for STH drug efficacy testing and diagnostics. It represents the model the field needs: trials of drugs for tropical worms run where the worms are, with African investigators as authors rather than subjects.",
        ...R,
        institutionType: "Research and training laboratory",
        country: "Tanzania",
        city: "Chake Chake, Pemba Island",
        focus: "Soil-transmitted helminth drug trials, diagnostics and research training.",
        links: [
          { label: "Schnoz et al. — moxidectin-albendazole trichuriasis trial, Pemba (Lancet Infect Dis 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40675166/" },
        ],
        diseases: ["sth", "schistosomiasis"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["moxidectin", "albendazole"],
        trials: ["mox-alb-trichuris-phase3"],
        countries: ["tanzania"],
        terms: ["ntd", "preventive-chemotherapy"],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "stella-kepha",
        name: "Stella Kepha",
        tldr: "The Kenyan epidemiologist generating Africa's evidence on deworming, WASH and child health.",
        summary:
          "Stella Kepha is a Kenyan epidemiologist whose research has shaped the evidence base for soil-transmitted helminth control in East Africa — studies of the epidemiology and intensity of infection in Kenyan schoolchildren, of the effectiveness of school-based deworming and of whether water, sanitation and hygiene interventions add anything to preventive chemotherapy. Her work addresses the central question the field faces: whether repeated deworming is enough, or whether the environmental transmission route must be closed at the same time. She is part of the African research leadership that the STH field depends on and that the corpus argues should be the norm.",
        ...R,
        era: "Contemporary",
        role: "Epidemiologist; soil-transmitted helminths and child health, Kenya",
        knownFor: "Evidence on deworming, WASH and STH epidemiology in East Africa.",
        links: [
          { label: "Kepha et al. — STH and deworming research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kepha+S+soil-transmitted+helminth" },
        ],
        diseases: ["sth", "schistosomiasis"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["albendazole"],
        technologies: ["mass-drug-administration", "wash-interventions", "community-health-workers"],
        countries: ["kenya"],
        terms: ["mda", "preventive-chemotherapy", "wash", "elimination"],
      },
      {
        id: "moudachirou-ibikounle",
        name: "Moudachirou Ibikounlé",
        tldr: "The Beninese parasitologist documenting deworming outcomes and drug efficacy in West Africa.",
        summary:
          "Moudachirou Ibikounlé is a Beninese parasitologist at the University of Abomey-Calavi whose work covers the epidemiology of soil-transmitted helminths and schistosomiasis in Benin and West Africa, the effectiveness of preventive chemotherapy, and — crucially — the monitoring of drug efficacy against the worms. His research addresses the question that decides whether mass deworming keeps working: whether albendazole still clears the parasites in the populations being treated, and what happens if it does not. He represents the West African scientific capacity that STH control needs to detect resistance where it would first appear.",
        ...R,
        era: "Contemporary",
        role: "Parasitologist; University of Abomey-Calavi, Benin",
        knownFor: "STH and schistosomiasis epidemiology and drug-efficacy monitoring in West Africa.",
        links: [
          { label: "Ibikounlé et al. — STH research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ibikounle+M+soil-transmitted+helminth" },
        ],
        diseases: ["sth", "schistosomiasis"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["albendazole", "mebendazole"],
        technologies: ["mass-drug-administration"],
        terms: ["mda", "preventive-chemotherapy", "amr", "ntd"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "adopt-combination-trichuris",
        name: "Change the deworming drug for whipworm",
        tldr: "69% versus 16% is not a marginal result — the field should be deciding how to adopt moxidectin-albendazole, not whether.",
        summary:
          "For twenty years trichuriasis has been the acknowledged weak point of deworming: albendazole is excellent against Ascaris, moderate against hookworm and poor against Trichuris, so repeated mass treatment suppresses two worms while leaving the one that causes significant childhood morbidity. The Phase 3 moxidectin-albendazole trial changed the evidence: 69% cure in children against 16% for albendazole alone, with a placebo-like safety profile, and moxidectin is already approved and used for onchocerciasis. The proposal is to move from evidence to policy — review the trial against programme criteria, assess cost and supply for a 20-fold increase in moxidectin volume, decide whether the combination replaces or is targeted at high-Trichuris areas, and get a WHO recommendation and a funded supply chain in place. The alternative is to keep giving children a drug that misses the worm in most of them.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "WHO review of moxidectin-albendazole against programme criteria, with a costing and supply analysis; pilot adoption in high-predominance Trichuris districts measuring cure and moderate-to-heavy-intensity reduction.",
        owner: "WHO with national deworming programmes, donors and manufacturers",
        links: [
          { label: "Schnoz et al. — moxidectin-albendazole for trichuriasis (Lancet Infect Dis 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40675166/" },
          { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["moxidectin", "albendazole"],
        trials: ["mox-alb-trichuris-phase3"],
        technologies: ["mass-drug-administration", "drug-repurposing"],
        institutions: ["who"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["mda", "preventive-chemotherapy", "ntd"],
        stats: [
          { label: "The result", value: "69% vs 16% cure for Trichuris" },
          { label: "The question", value: "Whether the combination replaces albendazole alone" },
        ],
      },
      {
        id: "sth-efficacy-surveillance",
        name: "Monitor whether deworming still works",
        tldr: "Hundreds of millions of children receive a drug whose efficacy no one routinely measures — the same mistake made with livestock.",
        summary:
          "The benzimidazole drugs used in human deworming are the same class that has already failed against worms in livestock through decades of intensive use. Yet there is no routine surveillance for reduced albendazole and mebendazole efficacy in the human populations being treated — only individual research studies, like those of Ibikounlé's group. A programme can treat the same communities for years without knowing whether cure rates are falling, and the first sign of resistance may be a change in morbidity rather than a laboratory signal. The proposal is to build efficacy surveillance into deworming the way it is built into tuberculosis and malaria programmes: define cure-rate thresholds, test a sample of communities periodically, report results nationally and to WHO, and use the data to decide when to switch or combine drugs. It is unglamorous, cheap relative to the programmes it protects, and it is what makes the difference between losing the drugs quietly and losing them visibly.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add periodic albendazole/mebendazole efficacy testing to national deworming programmes; define action thresholds and report cure rates for all three main STH species over time.",
        owner: "WHO with national programmes and reference laboratories",
        links: [
          { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
          { label: "Human STH benzimidazole resistance study (NCT04326868)", url: "https://clinicaltrials.gov/study/NCT04326868" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["albendazole", "mebendazole"],
        diagnostics: ["kato-katz", "mini-flotac", "molecular-pcr"],
        technologies: ["mass-drug-administration", "genomic-surveillance"],
        institutions: ["who"],
        bottlenecks: ["surveillance-data-gap", "diagnostics-gap"],
        terms: ["amr", "mda", "preventive-chemotherapy", "ntd"],
        stats: [
          { label: "Current state", value: "No routine human efficacy surveillance" },
          { label: "Precedent for failure", value: "Benzimidazoles already failed in livestock" },
        ],
      },
      {
        id: "bring-strongyloides-into-pc",
        name: "Find and treat the worm the deworming programme cannot see",
        tldr: "Strongyloides ignores albendazole and hides from stool microscopy — so 600 million infections are untouched by mass treatment.",
        summary:
          "Strongyloides stercoralis infects an estimated 600 million people in the same communities as the other STHs, but three properties keep it invisible to deworming: it needs different diagnostic methods, so standard Kato-Katz and the programmes built on it miss it; it does not respond to albendazole or mebendazole, so the mass-treatment drugs do nothing; and it can reproduce inside the host, causing a fatal hyperinfection when immunity is suppressed — including by steroids given for asthma, arthritis or cancer. WHO made its control a 2030 objective and ivermectin became affordable in 2021, but pilot interventions are only just evaluating how to deliver it. The proposal is to scale that delivery through the platforms that already exist — adding the right diagnostic to STH surveys, distributing ivermectin alongside deworming where strongyloidiasis is endemic, and ensuring clinicians know to screen and treat before starting steroids.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Add Strongyloides-specific diagnosis to national STH surveys and deliver ivermectin through existing deworming platforms in endemic districts; measure detection and treatment coverage and the incidence of hyperinfection.",
        owner: "WHO with national NTD programmes and clinical services using immunosuppression",
        links: [
          { label: "WHO — guideline on public health control of human strongyloidiasis (2024)", url: "https://www.who.int/news/item/02-08-2024-who-releases-guideline-on-public-health-control-of-human-strongyloidiasis" },
          { label: "Emodepside in adults infected with Strongyloides (NCT06373835)", url: "https://clinicaltrials.gov/study/NCT06373835" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["ivermectin", "emodepside"],
        diagnostics: ["molecular-pcr"],
        technologies: ["mass-drug-administration", "community-health-workers"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap", "access-and-pricing", "workforce-and-capacity"],
        terms: ["strongyloidiasis", "mda", "preventive-chemotherapy", "ntd"],
        stats: [
          { label: "Infections", value: "> 600 million globally" },
          { label: "Untouched because", value: "Diagnostics miss it; albendazole does not work" },
        ],
      },
    ],
  },
];
