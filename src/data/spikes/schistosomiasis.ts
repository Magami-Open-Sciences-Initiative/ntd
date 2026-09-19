import type { Spike } from "../merge";

export const schistosomiasisSpike: Spike = {
  tldr: "Blood flukes caught by wading or swimming in fresh water that cause bladder and bowel disease and, long term, cancer and organ damage — and, since 2024, a treatment designed for the youngest children.",

  summary:
    "Schistosomiasis affects more than 200 million people, most in sub-Saharan Africa. Larvae released by freshwater snails penetrate the skin of anyone who wades, swims or washes in lakes and rivers, and children are especially vulnerable. The eggs the worms lay lodge in the bladder or intestine and provoke chronic inflammation, causing blood in the urine or stool, anaemia, bladder disease and — for Schistosoma haematobium — a substantial risk of bladder cancer. Praziquantel, a single dose, remains the treatment, and population treatment together with water, sanitation and snail control is the strategy. Three things have recently changed the picture: the 2022 WHO guideline that widened treatment to everyone over two, extended it to pregnant and lactating women, and reopened snail control as an elimination tool; the arrival of arpraziquantel, a dispersible tablet for preschool-aged children that reached its first patient in Uganda in 2025; and the first controlled human infection studies of a schistosomiasis vaccine. What has not changed is that a single drug carries the whole programme, and that diagnosis remains crude at the low intensities where elimination is decided.",

  stats: [
    {
      label: "People needing preventive treatment",
      value: "253.7 million",
      number: 253.7,
      unit: "million people",
      year: 2024,
      geography: "global",
      note: "an estimated 93.9% of them live in Africa",
      source: { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    },
    {
      label: "Countries with transmission",
      value: "79",
      number: 79,
      unit: "countries",
      geography: "global",
      note: "preventive chemotherapy needed in 50 with moderate-to-high transmission",
      source: { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    },
    {
      label: "Deaths a year",
      value: "14,353",
      number: 14353,
      unit: "deaths",
      year: 2024,
      geography: "global",
      note: "widely considered an undercount",
      source: { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    },
    {
      label: "People treated (2024)",
      value: "> 100.5 million",
      number: 100.5,
      unit: "million people",
      year: 2024,
      geography: "global",
      note: "of the 253.7 million needing treatment; adults lag children badly",
      source: { label: "WHO — schistosomiasis (fact sheet, Feb 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    },
    {
      label: "R&D funding trend",
      value: "−23% in 2023",
      unit: "%",
      year: 2023,
      geography: "global",
      note: "down US$10m; still the highest-funded helminth disease, but over half the fall was vaccine R&D",
      source: { label: "G-FINDER 2024 Neglected Disease R&D report", url: "https://cdn.impactglobalhealth.org/media/G-FINDER%202024_Full%20report.pdf" },
    },
    {
      label: "Treatment coverage (2024)",
      value: "39.6%",
      number: 39.6,
      unit: "%",
      year: 2024,
      geography: "global",
      note: "of people requiring treatment reached; 61.7% of school-aged children",
      source: { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    },
    {
      label: "Age group newly treatable",
      value: "3 months – 6 years",
      note: "with arpraziquantel dispersible tablets",
    },
    {
      label: "Treatment threshold",
      value: "> 10% prevalence",
      note: "annual preventive chemotherapy, ≥ 75% coverage, everyone aged 2+",
    },
    {
      label: "Female genital schistosomiasis",
      value: "≈ 56 million",
      note: "women and girls in sub-Saharan Africa (WHO estimate)",
      source: { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    },
  ],

  timeline: [
    {
      date: "2022",
      text: "WHO publishes a new guideline: treat everyone aged 2 and over where prevalence exceeds 10%, include pregnant and lactating women, and combine treatment with WASH and focal snail control.",
      refs: ["who", "snail-control", "wash-interventions"],
    },
    {
      date: "2023",
      text: "The European Medicines Agency adopts a positive scientific opinion on arpraziquantel for preschool-aged children.",
      refs: ["arpraziquantel", "pediatric-praziquantel-consortium"],
    },
    {
      date: "2024",
      text: "Arpraziquantel is prequalified for WHO procurement under the EMA Article 58 procedure.",
      refs: ["arpraziquantel", "who"],
    },
    {
      date: "2025",
      text: "The first preschool-aged child is treated with arpraziquantel, in Uganda, through an implementation study.",
      refs: ["arpraziquantel", "pediatric-praziquantel-consortium"],
    },
    {
      date: "2024",
      text: "WHO publishes a monitoring-and-evaluation framework for schistosomiasis and STH control, giving programmes the tools to track progress and adapt as epidemiology changes.",
      refs: ["who", "who-schisto-me-framework-2024"],
    },
    {
      date: "2025",
      text: "A controlled human infection challenge study of the Sm-p80 (SchistoShield) vaccine advances, and a trial adds anti-inflammatory therapy for female genital schistosomiasis.",
      refs: ["schistoshield", "wings4fgs-fgs", "fgs"],
    },
    {
      date: "2025",
      text: "The first preschool-aged children are treated with arpraziquantel in Uganda; an implementation study follows to bring the child-friendly tablet into national programmes.",
      refs: ["arpraziquantel", "arpraziquantel-implementation", "pediatric-praziquantel-consortium"],
    },
    {
      date: "2026",
      text: "WHO confirms Schistosoma haematobium transmission in Cabo Verde, a country not previously considered endemic — evidence that the disease's geography is still moving.",
      refs: ["who", "schistosoma"],
    },
  ],

  sections: [
    {
      id: "children",
      title: "A medicine for the youngest children",
      body:
        "Preschool-aged children have always carried schistosomiasis and were almost always left out of treatment: the standard tablet is large, bitter and hard to dose in a small child, and the evidence base for treating under-fives was thin. The result was that the group with the highest intensity of infection in many communities was systematically untreated, and reinfected, year after year.\n\nArpraziquantel closes that gap. It is a 150 mg dispersible tablet with an acceptable taste and stability in hot, humid conditions, developed by the Pediatric Praziquantel Consortium for children from 3 months to 6 years and active against both Schistosoma mansoni and S. haematobium. The European Medicines Agency gave a positive scientific opinion in December 2023, WHO prequalified it in 2024, and the first preschool-aged child was treated in Uganda in early 2025. Inclusion in the WHO essential medicines list and national roll-out are the next steps; the remaining question is whether countries can afford and deliver a second praziquantel product alongside the first.",
      refs: ["arpraziquantel", "pediatric-praziquantel-consortium", "praziquantel", "who-essentials", "access-and-pricing"],
    },
    {
      id: "guideline-2022",
      title: "The 2022 guideline changed the rules",
      body:
        "WHO's 2022 guideline on control and elimination of human schistosomiasis reset the programme parameters. Annual preventive chemotherapy is recommended where prevalence exceeds 10%, aiming for at least 75% coverage across all age groups from two years old — a wider net than the earlier school-age focus, because adults are often the ones contaminating water. Treatment is recommended for infected pregnant and lactating women, excluding the first trimester, and for preschool children using the paediatric formulation.\n\nThe guideline also made the strategy larger than a drug: it recommends combining treatment with water, sanitation and hygiene and with environmental interventions. That is the recognition that praziquantel treats people but does not stop them being reinfected the next time they enter the water.",
      refs: ["who", "mass-drug-administration", "wash-interventions", "mda"],
    },
    {
      id: "snail-control",
      title: "Snail control returns",
      body:
        "Because each schistosome species needs a specific freshwater snail to complete its life cycle, killing the snails breaks transmission before anyone is infected. Snail control was central to early programmes, fell out of favour when praziquantel arrived, and has now returned to elimination plans: the 2022 guideline recommends focal mollusciciding with niclosamide where it is feasible, alongside water engineering and environmental management.\n\nThe evidence is not uniform. Chemical snail control produced large reductions in China, but a comparable effort in Laos had little effect — the difference being ecology, water chemistry and how well the snail population was understood. The honest summary is that snail control works where it is targeted with local knowledge, and is not a plug-in.",
      refs: ["snail-control", "freshwater-snails", "who"],
    },
    {
      id: "fgs",
      title: "Female genital schistosomiasis",
      body:
        "When Schistosoma haematobium eggs lodge in the genital tract they cause lesions, pain, bleeding and discharge — a condition, female genital schistosomiasis, that affects an estimated 56 million women and girls in sub-Saharan Africa. It is routinely misdiagnosed as a sexually transmitted infection, and because the lesions are vascular it increases susceptibility to HIV. The male counterpart, male genital schistosomiasis, causes ejaculatory pain and blood in the semen, can impair fertility, and is even less recognised — WHO describes it, but semen is not part of routine testing, so it is almost never diagnosed.\n\nTreatment with praziquantel clears the worms, but the inflammatory damage can persist, so research has moved to whether adding an anti-inflammatory to praziquantel reduces long-term scarring — the question the WINGS-4-FGS trial is designed to answer. FGS is also a case study in why 'treat everyone' campaigns matter: an infection dismissed as something else is an infection that never gets the one-dose cure.",
      refs: ["wings4fgs-fgs", "fgs", "praziquantel", "stigma-and-disability"],
    },
    {
      id: "vaccines",
      title: "Vaccines and new drugs",
      body:
        "There is no schistosomiasis vaccine, and the case for one is strong because praziquantel does not prevent reinfection — a vaccine that reduced infection intensity would add something the drug cannot. The most advanced candidate is SchistoShield (Sm-p80 with a GLA-SE adjuvant), which completed early clinical testing and is being evaluated with a controlled human infection model, where volunteers are deliberately exposed to a defined number of cercariae so that protection can be measured directly. That design is unusual in parasitology and is itself a milestone.\n\nOn the drug side, the fear is that a single medicine carries a quarter of a billion people. DNDi and Merck have assembled a schistosomiasis translational platform and a shared 'compound box' of characterised molecules to test against the parasite, and the 2020 identification of praziquantel's molecular target — a schistosome TRP channel — makes rational design of a second drug possible for the first time.",
      refs: ["schistoshield", "vaccine-gap", "schistosome-trp-channel", "open-science-drug-discovery", "ntd-vaccines-roadmap"],
    },
    {
      id: "diagnostics",
      title: "Diagnosis and the elimination problem",
      body:
        "Schistosomiasis is diagnosed mostly by looking for eggs — Kato-Katz smears for S. mansoni, urine filtration for S. haematobium — or by detecting an antigen with the POC-CCA urine strip. All of them lose sensitivity as infection intensity falls, which is precisely what happens as a programme succeeds. A district can look free of schistosomiasis because the test cannot see the few remaining light infections, not because they are absent.\n\nMolecular methods, including LAMP and PCR, and AI-assisted microscopy are the responses, but they bring cost, power and laboratory requirements. The field's unresolved need is a test sensitive enough to find the last infections and specific enough to trust a negative — the same wall that onchocerciasis and lymphatic filariasis elimination programmes have hit.",
      refs: ["kato-katz", "point-of-care-cca", "molecular-lamp", "ai-microscopy", "diagnostics-gap", "sensitivity-specificity"],
    },
  ],

  drugs: ["arpraziquantel"],
  trials: ["schistoshield", "wings4fgs-fgs", "arpraziquantel-implementation"],
  guidelines: ["who-schisto-me-framework-2024"],
  people: ["narcis-kabatereine", "bonnie-webster", "amadou-garba"],
  institutions: ["pediatric-praziquantel-consortium", "dndi", "icmr"],
  terms: ["fgs", "male-genital-schistosomiasis", "schistosome-hybrids", "eot"],
};
