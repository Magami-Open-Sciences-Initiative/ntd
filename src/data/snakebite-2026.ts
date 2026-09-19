import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Snakebite envenoming 2026 fact-check additions: the WHO novel-treatment
 * target product profiles, the nanobody/recombinant-antivenom push, the
 * Pan-African antivenom and Kenya quality-control work, the burden-modelling
 * and access groups, and the people/ideas review. Ordinary records of their
 * kind, kept in one file so the review is visible as a set; wired into
 * `index.ts` alongside SCABIES_2026.
 */
export const SNAKEBITE_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ guidelines ------------------------------ */
  {
    kind: "guidelines",
    records: [
      {
        id: "snakebite-novel-tpp-2026",
        name: "WHO target product profiles for novel snakebite treatments (2026)",
        tldr: "WHO's first TPPs for small-molecule and engineered-antibody snakebite treatments, for hospital and pre-hospital use.",
        summary:
          "In February 2026 WHO published its first target product profiles for novel snakebite therapeutics — small-molecule drugs and engineered-antibody biologics — for researchers, regulators and manufacturers. Two profiles were issued: one for hospital use (a treatment that may adjunct to or replace conventional antivenom, effective against any venomous snake species), and one for pre-hospital use that could 'buy time' to reach hospital or abrogate the need to go. They complement the 2023 sub-Saharan Africa and 2024 South Asia TPPs for conventional antivenoms, and are deliberately similar so the market becomes more equitable. It is the guidance that tells developers what a product must do before it is designed.",
        ...R,
        issuer: "WHO",
        issued: "February 2026",
        status: "Current",
        scope: "Novel small-molecule and engineered-antibody treatments for snakebite envenoming; hospital and pre-hospital settings.",
        recommendation: "Products should be designed to match clinical need in at-risk populations, be safe and effective against any venomous species, and suit either hospital or pre-hospital use.",
        whatChanged: "Extends WHO's target product profiles (conventional antivenoms, 2023–2024) to novel therapeutics in early-stage development and clinical trials.",
        links: [
          { label: "WHO — novel snakebite treatment TPPs (Feb 2026)", url: "https://www.who.int/publications/i/item/9789240119703" },
          { label: "WHO — new guidance published (27 Feb 2026)", url: "https://www.who.int/news/item/27-02-2026-new-who-guidance-on-novel-snakebite-treatments-published" },
        ],
        diseases: ["snakebite"],
        technologies: ["recombinant-antivenoms", "nanobody-antivenoms"],
        institutions: ["who"],
      },
    ],
  },

  /* ------------------------------ technologies ---------------------------- */
  {
    kind: "technologies",
    records: [
      {
        id: "nanobody-antivenoms",
        name: "Nanobody-based recombinant antivenoms",
        tldr: "Tiny engineered antibodies produced in cells, not horses — an oligoclonal mix that protected mice against cobra venoms.",
        summary:
          "Nanobodies are single-domain antibody fragments, small and stable, that can be engineered and produced recombinantly rather than harvested from immunised animals. Because venom is a cocktail of toxins, an effective product must be oligoclonal — several nanobodies combined. In 2026 an oligoclonal nanobody-based recombinant antivenom protected mice challenged with venoms from cobras and king cobras, a proof-of-concept for the engineered-antibody route. The advantages are consistency, scalability and no animal immunisation; the challenges are covering every important toxin, and the economics of a market made up of poor rural communities — which is why WHO's 2026 novel-treatment target product profiles matter.",
        ...R,
        category: "Drug discovery",
        maturity: "Preclinical proof-of-concept",
        whatItDoes:
          "Uses recombinantly produced single-domain antibodies, combined into an oligoclonal product, to neutralise multiple venom toxins consistently and at scale.",
        limitation:
          "No licensed product yet; must cover a large toxin repertoire; manufacturing cost versus a poor-country market remains the central risk.",
        links: [
          { label: "Oligoclonal nanobody antivenom protects mice (Sci Transl Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42715346" },
          { label: "Engineering antivenom: research progress and future directions (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42644833" },
        ],
        diseases: ["snakebite"],
        pathogens: ["snake-venom"],
        technologies: ["recombinant-antivenoms"],
        terms: ["tpp"],
      },
    ],
  },

  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "pan-african-antivenom-cameroon",
        name: "Pan-African polyvalent antivenom in Cameroon",
        tldr: "A prospective study of a pan-African antivenom's safety and efficacy in a West/Central African setting.",
        summary:
          "This study evaluated the safety and efficacy of a Pan-African polyvalent antivenom used to treat snakebites in Cameroon — a direct test of a product intended to cover the venoms of a whole continent, in a region where mismatched and substandard antivenoms have been documented. It reports on the practical question that matters most in African health facilities: does this product actually work, and is it safe, where patients present late and cold chains are fragile.",
        ...R,
        phase: "Prospective observational study",
        status: "Reported 2026",
        intervention: "Pan-African polyvalent snake antivenom",
        result: "Safety and efficacy outcomes for snakebite patients treated in Cameroon.",
        links: [
          { label: "Pan-African polyvalent antivenom in Cameroon (Toxins 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41745725" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        countries: ["cameroon"],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "kenya-antivenom-qc-lab",
        name: "Kenya National Antivenom Quality Control Laboratory",
        tldr: "The Kenyan laboratory testing whether the antivenoms on the market actually work.",
        summary:
          "Established to give Kenya its own capacity to assess antivenom quality, this laboratory published preclinical efficacy results for four antivenoms against Kenyan snake venoms in 2026. It is the national answer to the quality crisis: instead of trusting a product's label, test its neutralising potency against the country's own snakes before it reaches patients. Kenya's move mirrors WHO's call for stronger national regulatory control as the fix for substandard and mismatched antivenoms.",
        ...R,
        institutionType: "National quality-control laboratory",
        country: "Kenya",
        focus: "Preclinical efficacy testing of snake antivenoms against national venoms.",
        links: [
          { label: "Establishing the Kenya National Antivenom QC Laboratory (Toxins 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41745771" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["who"],
        terms: ["tpp"],
      },
      {
        id: "snakebite-research-hospital-kaltungo",
        name: "Snakebite Treatment & Research Hospital, Kaltungo (Nigeria)",
        tldr: "A Nigerian hospital at the centre of the world's clinical snakebite evidence.",
        summary:
          "The Snakebite Treatment and Research Hospital in Kaltungo, Gombe State, Nigeria, treats a large volume of snakebite patients and has become a hub for clinical snakebite research in Africa — including studies of paediatric mortality, coagulopathy, and the comparative performance of different antivenoms. Working with the Bayero University Kano group, it produces the African clinical evidence that the field's guidelines increasingly depend on.",
        ...R,
        institutionType: "Specialist hospital and research site",
        country: "Nigeria",
        city: "Kaltungo",
        focus: "Clinical care and research on snakebite envenoming in Nigeria.",
        links: [
          { label: "Paediatric snakebite mortality, northeast Nigeria (Wellcome Open Res 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42723691" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        countries: ["nigeria"],
      },
      {
        id: "kccr-snakebite",
        name: "Kumasi Centre for Collaborative Research (KCCR), Ghana",
        tldr: "The Ghanaian research centre building the country's snakebite epidemiology and clinical evidence.",
        summary:
          "The Kumasi Centre for Collaborative Research in Tropical Medicine, at Kwame Nkrumah University of Science and Technology, runs snakebite epidemiology, clinical and community-engagement research in northern Ghana with Dutch and international partners — including studies of clinical presentation, compartment syndrome management, and community attitudes to snakes. It is one of West Africa's most productive snakebite research bases outside Nigeria.",
        ...R,
        institutionType: "Research centre",
        country: "Ghana",
        city: "Kumasi",
        focus: "Snakebite epidemiology, clinical management and community engagement in Ghana.",
        links: [
          { label: "Clinical presentation and management in northern Ghana (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41385603" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        countries: ["ghana"],
      },
      {
        id: "icp-costa-rica",
        name: "Instituto Clodomiro Picado (University of Costa Rica)",
        tldr: "The Costa Rican institute that is both a leading antivenom maker and the field's scientific conscience.",
        summary:
          "The Instituto Clodomiro Picado at the University of Costa Rica manufactures antivenoms and produces a large share of the world's snakebite science — from venom proteomics to antivenom design, preclinical models and global access advocacy. Its researchers (notably José María Gutiérrez) have shaped the field's understanding of how antivenoms work, why animal models must be aligned with clinical needs, and why the access problem is as urgent as the science.",
        ...R,
        institutionType: "Research institute and manufacturer",
        country: "Costa Rica",
        city: "San José",
        focus: "Venom and antivenom research, manufacture and global access advocacy.",
        links: [
          { label: "Animal models in venom and antivenom research (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42507656" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["who"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "abdulrazaq-habib",
        name: "Abdulrazaq G. Habib",
        tldr: "The Nigerian physician whose antivenom research and advocacy built Africa's snakebite case.",
        summary:
          "Abdulrazaq Habib (Bayero University Kano and Aminu Kano Teaching Hospital, Nigeria) is one of Africa's leading snakebite researchers and the most prolific African voice in the recent literature — on antivenom access, clinical management and the burden in Nigeria. He has shaped WHO's strategy work and trained a generation of Nigerian snakebite clinicians; when global snakebite policy is written, his evidence from Kano is in it.",
        ...R,
        era: "Contemporary",
        role: "Professor of Infectious and Tropical Diseases, Bayero University Kano, Nigeria",
        knownFor: "African snakebite clinical research and antivenom access.",
        links: [
          { label: "Habib snakebite publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Habib+AG+snakebite" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["snakebite-research-hospital-kaltungo"],
        countries: ["nigeria"],
        terms: ["ntd"],
      },
      {
        id: "muhammad-hamza",
        name: "Muhammad Hamza",
        tldr: "The Kano clinician-researcher testing antivenoms against Nigerian reality.",
        summary:
          "Muhammad Hamza (College of Health Sciences, Bayero University Kano, Nigeria) works on clinical snakebite and antivenom in Nigeria, including critical appraisal of the comparative antivenom evidence. His work helps hold the field's clinical claims to account where the patients are.",
        ...R,
        era: "Contemporary",
        role: "Clinician-researcher, Bayero University Kano, Nigeria",
        knownFor: "Clinical snakebite and antivenom research in Nigeria.",
        links: [
          { label: "Hamza snakebite publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Hamza+M+snakebite+Kano" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        countries: ["nigeria"],
        terms: ["ntd"],
      },
      {
        id: "nicholas-hamman",
        name: "Nicholas A. Hamman",
        tldr: "The Kaltungo physician quantifying who dies of snakebite — and why.",
        summary:
          "Nicholas Hamman (Snakebite Treatment & Research Hospital, Kaltungo, Gombe State, Nigeria) studies the determinants of mortality after snakebite envenoming and paediatric outcomes at one of the world's highest-volume treatment centres. His matched case-control work identifies the modifiable factors — delay, antivenom access, presentation — that decide survival.",
        ...R,
        era: "Contemporary",
        role: "Physician-researcher, Snakebite Treatment & Research Hospital, Kaltungo, Nigeria",
        knownFor: "Determinants of snakebite mortality in Nigeria.",
        links: [
          { label: "Determinants of mortality following snakebite (Trans R Soc Trop Med Hyg 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41450277" },
        ],
        diseases: ["snakebite"],
        institutions: ["snakebite-research-hospital-kaltungo"],
        countries: ["nigeria"],
        terms: ["ntd"],
      },
      {
        id: "john-amuasi",
        name: "John H. Amuasi",
        tldr: "The Kumasi research leader putting Ghanaian snakebite on the map.",
        summary:
          "John Amuasi (Kumasi Centre for Collaborative Research in Tropical Medicine, KNUST, Ghana) leads and co-authors a broad programme of snakebite and NTD research in Ghana, including clinical management and community engagement studies with Dutch and international partners. He is among the most prominent Ghanaian voices in global health and NTDs.",
        ...R,
        era: "Contemporary",
        role: "Research lead, Kumasi Centre for Collaborative Research in Tropical Medicine, KNUST, Ghana",
        knownFor: "Snakebite and NTD research in Ghana.",
        links: [
          { label: "Venom-induced compartment syndrome management (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42536674" },
        ],
        diseases: ["snakebite"],
        institutions: ["kccr-snakebite"],
        countries: ["ghana"],
        terms: ["ntd"],
      },
      {
        id: "leslie-aglanu",
        name: "Leslie Mawuli Aglanu",
        tldr: "The Ghanaian epidemiologist documenting snakebite in northern Ghana.",
        summary:
          "Leslie Aglanu (University Medical Centre Groningen, with the Kumasi collaborators) studies the clinical presentation and management of snakebite envenoming in northern Ghana — building the West African epidemiological and clinical picture that informs antivenom planning.",
        ...R,
        era: "Contemporary",
        role: "Epidemiologist, University Medical Centre Groningen (Ghana collaborations)",
        knownFor: "Snakebite clinical epidemiology in northern Ghana.",
        links: [
          { label: "Clinical presentation and management in northern Ghana (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41385603" },
        ],
        diseases: ["snakebite"],
        institutions: ["kccr-snakebite"],
        countries: ["ghana"],
        terms: ["ntd"],
      },
      {
        id: "george-oluoch",
        name: "George O. Oluoch",
        tldr: "The immunologist running Kenya's antivenom quality-control laboratory.",
        summary:
          "George Oluoch (Centre for Snakebite Research and Interventions, Liverpool School of Tropical Medicine, with Kenyan institutions) helped establish the Kenya National Antivenom Quality Control Laboratory and published its preclinical efficacy testing of four antivenoms against Kenyan venoms. Assessing whether the antivenom on the shelf actually neutralises the local snake is, in his work, an intervention in itself.",
        ...R,
        era: "Contemporary",
        role: "Immunologist, Centre for Snakebite Research and Interventions, LSTM (Kenya)",
        knownFor: "Kenya antivenom quality control; policy pathways for access.",
        links: [
          { label: "Establishing the Kenya National Antivenom QC Laboratory (Toxins 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41745771" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["kenya-antivenom-qc-lab", "lstm"],
        countries: ["kenya"],
        terms: ["tpp", "ntd"],
      },
      {
        id: "nick-casewell",
        name: "Nicholas R. Casewell",
        tldr: "The Liverpool venom scientist mapping what antivenoms must neutralise.",
        summary:
          "Nicholas Casewell (Centre for Snakebite Research and Interventions, Liverpool School of Tropical Medicine) studies venom evolution and composition and has been central to the antivenom quality crisis and to policy work for equitable access in Africa. His laboratory's venomics explains why a product that works against one snake's venom fails against another — the science beneath the access problem.",
        ...R,
        era: "Contemporary",
        role: "Director, Centre for Snakebite Research and Interventions, Liverpool School of Tropical Medicine",
        knownFor: "Venom evolution, antivenom efficacy and access policy.",
        links: [
          { label: "Policy pathways for equitable antivenom access in Africa (PLOS Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42154730" },
        ],
        diseases: ["snakebite"],
        institutions: ["lstm"],
        technologies: ["recombinant-antivenoms"],
        terms: ["ntd"],
      },
      {
        id: "andreas-laustsen",
        name: "Andreas H. Laustsen",
        tldr: "The Danish engineer building antivenoms from antibodies, not horses.",
        summary:
          "Andreas Laustsen (Technical University of Denmark) is the leading proponent of recombinant antivenom engineering — using monoclonal antibodies and mixtures designed to cover venom toxins rather than animal-derived immunoglobulin. His group's work on reporting standards and future directions has shaped how the field measures and compares engineered products.",
        ...R,
        era: "Contemporary",
        role: "Professor, Technical University of Denmark",
        knownFor: "Recombinant antivenom engineering.",
        links: [
          { label: "Engineering antivenom: progress and future directions (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42644833" },
        ],
        diseases: ["snakebite"],
        technologies: ["recombinant-antivenoms", "nanobody-antivenoms"],
        terms: ["tpp", "ntd"],
      },
      {
        id: "kartik-sunagar",
        name: "Kartik Sunagar",
        tldr: "The Indian scientist whose nanobody antivenom protected mice against cobra venoms.",
        summary:
          "Kartik Sunagar (Indian Institute of Science, Bengaluru) leads venom genomics and recombinant-antivenom research in India, including the 2026 oligoclonal nanobody antivenom that protected mice against cobra and king cobra venoms — one of the proof-of-concept results behind the engineered-antibody push. India carries the world's heaviest snakebite burden, so an Indian laboratory delivering the next-generation product is fitting.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Indian Institute of Science, Bengaluru",
        knownFor: "Nanobody-based recombinant antivenom; venom genomics.",
        links: [
          { label: "Oligoclonal nanobody antivenom protects mice (Sci Transl Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42715346" },
        ],
        diseases: ["snakebite"],
        countries: ["india"],
        technologies: ["nanobody-antivenoms", "recombinant-antivenoms"],
        terms: ["ntd"],
      },
      {
        id: "jose-gutierrez",
        name: "José María Gutiérrez",
        tldr: "The Costa Rican scientist who has defined how antivenoms are studied and judged.",
        summary:
          "José María Gutiérrez (Instituto Clodomiro Picado, University of Costa Rica) has spent decades shaping the science and policy of antivenoms — their mechanisms, preclinical assessment and global access. His 2026 work on aligning animal models in venom and antivenom research addresses the recurring problem that discoveries and products are evaluated in ways that do not match how they will be used in patients.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Instituto Clodomiro Picado, University of Costa Rica",
        knownFor: "Antivenom science, preclinical models and access.",
        links: [
          { label: "Animal models in venom and antivenom research (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42507656" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["icp-costa-rica"],
        terms: ["ntd"],
      },
      {
        id: "wuelton-monteiro",
        name: "Wuelton Monteiro",
        tldr: "The Brazilian researcher decentralising antivenom to reach the Amazon.",
        summary:
          "Wuelton Monteiro (Fundação de Medicina Tropical Doutor Heitor Vieira Dourado, Brazil) researches snakebite and antivenom access in the Amazon, including a decentralisation programme that puts antivenom closer to remote communities — with implementation and ethical analyses. In a country where most bites occur far from hospitals, moving the treatment is the intervention.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Fundação de Medicina Tropical, Brazil",
        knownFor: "Antivenom decentralisation in the Brazilian Amazon.",
        links: [
          { label: "Decentralisation of antivenom treatment (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/40305592" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        countries: ["brazil"],
        terms: ["ntd"],
      },
      {
        id: "jacqueline-sachett",
        name: "Jacqueline Sachett",
        tldr: "The Brazilian clinician putting antivenom where the patients are.",
        summary:
          "Jacqueline Sachett (Brazil) works alongside Wuelton Monteiro on snakebite treatment and antivenom decentralisation in the Amazon, and on the ethical questions of extending treatment to indigenous and remote territories. Her clinical and implementation research is about making an existing cure reachable.",
        ...R,
        era: "Contemporary",
        role: "Clinician-researcher, Brazil",
        knownFor: "Antivenom access and decentralisation in the Amazon.",
        links: [
          { label: "Ethical considerations in decentralising antivenom (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42507666" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        countries: ["brazil"],
        terms: ["ntd"],
      },
      {
        id: "david-lalloo",
        name: "David G. Lalloo",
        tldr: "The Liverpool clinician behind the new global burden estimates.",
        summary:
          "David Lalloo (Liverpool School of Tropical Medicine) co-led the 2026 literature review and geostatistical modelling that produced updated estimates of the global snakebite burden — the numbers countries use to justify antivenom procurement and plan placement. Reliable burden data is the field's long-standing weak point, and this work addresses it directly.",
        ...R,
        era: "Contemporary",
        role: "Professor, Liverpool School of Tropical Medicine",
        knownFor: "Global snakebite burden estimation.",
        links: [
          { label: "Estimates of global burden of snakebite (PLoS Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42640884" },
        ],
        diseases: ["snakebite"],
        institutions: ["lstm"],
        terms: ["ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "african-antivenom-manufacturing",
        name: "Regional African antivenom manufacturing with national quality control",
        tldr: "Make the right antivenom in Africa, and test every batch against African venoms before it reaches a patient.",
        summary:
          "The access crisis has two halves: too little affordable, appropriate antivenom, and too much substandard or mismatched product on the market. The fix being built in pieces — Nigeria's plan for domestic production, the Kenya National Antivenom Quality Control Laboratory, WHO prequalification and the 2023 sub-Saharan Africa target product profile — needs to be joined into one strategy: regionally manufactured, WHO-prequalified polyvalent antivenoms, with every national regulator able to verify potency against its own snakes. Local manufacture shortens the supply chain and builds pandemic-style resilience; national QC stops the wrong product reaching patients at all.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Stand up a regional manufacturing-and-QC consortium (Nigeria producer plus Kenya-style national labs), tracking proportion of procured antivenom that is WHO-listed and potency-verified, and price per vial, over three years.",
        owner: "African Union/Africa CDC with WHO, national regulators and manufacturers",
        links: [
          { label: "Policy pathways for equitable antivenom access in Africa (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42154730" },
          { label: "Establishing the Kenya National Antivenom QC Laboratory (Toxins 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41745771" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["kenya-antivenom-qc-lab", "who", "lstm"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["tpp", "ntd"],
        stats: [
          { label: "Gap", value: "Substandard and mismatched products", note: "documented across sub-Saharan Africa" },
        ],
      },
      {
        id: "snakebite-prehospital-adjunct",
        name: "A pre-hospital 'buy-time' treatment, delivered at community level",
        tldr: "The 2026 WHO TPP's pre-hospital profile points to a drug or antibody a health worker can give before the hospital.",
        summary:
          "Most deaths happen because the hospital is hours away. WHO's 2026 novel-treatment TPPs include a pre-hospital profile whose job is to 'buy time' to reach hospital or avert the trip entirely — a small molecule or engineered antibody stable and simple enough for a community health worker. Candidates exist in theory: broad-spectrum small-molecule inhibitors (such as matrix metalloproteinase inhibitors for tissue damage, or phospholipase A2 inhibitors like varespladib) and fast-acting antibody formats. The idea is to develop and field-test one against this profile, coupled with the village emergency-care models being piloted in Tanzania and the decentralisation programmes in Brazil — treatment moving toward the patient, as it must.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Select a candidate meeting the WHO pre-hospital TPP; trial it in a community/village emergency-care model, measuring time to definitive care, tissue damage and mortality against standard transport-only care.",
        owner: "WHO with PDPs, LSTM and national programmes",
        links: [
          { label: "WHO — novel snakebite treatment TPPs (Feb 2026)", url: "https://www.who.int/publications/i/item/9789240119703" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        technologies: ["recombinant-antivenoms", "nanobody-antivenoms"],
        institutions: ["who", "lstm"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["tpp", "ntd"],
        stats: [
          { label: "Target", value: "Buy time pre-hospital", note: "WHO TPP, February 2026" },
        ],
      },
      {
        id: "snakebite-geospatial-platform",
        name: "Geospatial targeting: put antivenom where snakes and people meet",
        tldr: "Use the new burden models and the WHO data platform to place antivenom and training at district level, not by guesswork.",
        summary:
          "The 2026 geostatistical burden estimates and climate-driven snake-redistribution models, alongside WHO's Snakebite Information and Data Platform, make it possible to predict where envenoming risk is highest and where antivenom should sit. The idea is to operationalise them: combine species-distribution models with health-facility mapping to place antivenom, cold-chain capacity and clinician training at the right district level, then monitor stock-outs against predicted need. In settings where antivenom is scarce and expensive, getting the last mile right is the highest-yield intervention the data can now support.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Use the WHO platform and burden models to optimise antivenom placement in two countries, measuring stock-out frequency and time-to-antivenom against current distribution.",
        owner: "WHO with national programmes and geospatial research groups",
        links: [
          { label: "Estimates of global burden of snakebite (PLoS Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42640884" },
        ],
        diseases: ["snakebite"],
        drugs: ["snake-antivenom"],
        institutions: ["who", "lstm"],
        bottlenecks: ["surveillance-data-gap", "access-and-pricing"],
        terms: ["ntd"],
        stats: [
          { label: "New tools", value: "Geospatial burden models + WHO data platform" },
        ],
      },
    ],
  },
];
