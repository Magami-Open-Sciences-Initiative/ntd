import type { Spike } from "../merge";

export const echinococcosisSpike: Spike = {
  tldr: "Tapeworm larvae from dogs that grow into slow, tumour-like cysts in the liver and lungs — and the first livestock vaccine that, combined with dog deworming, has made elimination a realistic goal.",

  summary:
    "Echinococcosis comes in two forms. Echinococcus granulosus causes cystic echinococcosis: a fluid-filled cyst that grows for years in the liver or lungs and may rupture without warning. Echinococcus multilocularis causes alveolar echinococcosis, which invades the liver like a slow cancer and is often fatal without lifelong treatment. People are accidental hosts, infected by eggs from dog faeces; dogs become infected by eating cysts in the organs of slaughtered livestock. What has changed is that the transmission cycle is now attackable from the animal side. A recombinant vaccine, EG95, protects sheep with 96–100% efficacy, is registered and in commercial production in China and Argentina, and is used extensively in China. WHO's assessment is that a package combining lamb vaccination, deworming dogs at least four times a year and culling older sheep could eliminate human cystic echinococcosis in under a decade — which would make this the rare NTD whose solution is entirely veterinary.",

  stats: [
    {
      label: "People living with echinococcosis",
      value: "> 1 million",
      number: 1,
      unit: "million people",
      geography: "global",
      note: "at any one time; cystic and alveolar disease combined",
      source: { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    },
    {
      label: "Deaths a year",
      value: "19,300",
      number: 19300,
      unit: "deaths",
      year: 2015,
      geography: "global",
      note: "WHO Foodborne Disease Burden Epidemiology Reference Group estimate",
      source: { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    },
    {
      label: "DALYs a year",
      value: "871,000",
      number: 871000,
      unit: "DALYs",
      year: 2015,
      geography: "global",
      source: { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    },
    {
      label: "Annual cost (cystic disease)",
      value: "US$ 3 billion",
      number: 3,
      unit: "billion USD",
      geography: "global",
      note: "treatment costs plus livestock losses",
      source: { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    },
    { label: "Alveolar disease", value: "High fatality without treatment" },
    {
      label: "EG95 vaccine efficacy in sheep",
      value: "96–100%",
      unit: "%",
      note: "recombinant antigen vaccine; registered and in commercial production in China and Argentina",
      source: { label: "WHO — echinococcosis prevention and control", url: "https://www.who.int/activities/strengthening-echinococcosis-prevention-and-control" },
    },
    {
      label: "Dog deworming needed",
      value: "≥ 4 times a year",
      note: "praziquantel, as part of the One Health package with EG95 lamb vaccination",
      source: { label: "WHO — echinococcosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    },
    {
      label: "Xizang canine infection rate",
      value: "5.63% → 0.50% (2016–2022)",
      note: "91% reduction across 74 counties under sustained dog deworming; compliance fell to 77% by 2022",
      source: { label: "Jiang et al. — dog deworming cost-outcome, Xizang (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42566482" },
    },
    {
      label: "Xinjiang incidence trend",
      value: "−17.7% per year (2017–2023)",
      note: "annual percent change under integrated control incl. monthly dog deworming and lamb vaccination",
      source: { label: "Spatiotemporal distribution and control of echinococcosis in Xinjiang (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12716753" },
    },
  ],

  timeline: [
    {
      date: "2000s",
      text: "The EG95 recombinant vaccine is developed against Echinococcus granulosus transmission in sheep.",
      refs: ["eg95-sheep-vaccine"],
    },
    {
      date: "2010s",
      text: "Morocco's Middle Atlas programme combines EG95 vaccination of sheep with deworming dogs, reducing infection in dogs, sheep and cattle.",
      refs: ["eg95-sheep-vaccine", "praziquantel"],
    },
    {
      date: "2020s",
      text: "EG95 is registered and commercially produced in China and Argentina, and used extensively across the Tibetan plateau.",
      refs: ["eg95-sheep-vaccine", "who"],
    },
    {
      date: "2024",
      text: "China's 2004–2022 surveillance analysis counts 89,844 cases and confirms the Tibetan plateau as the highest-burden region for both forms of the disease.",
      refs: ["who", "one-health-ntd-integration"],
    },
    {
      date: "2025",
      text: "WHO publishes its first treatment guideline for cystic echinococcosis, staging care by cyst type and size; a 194-patient randomised trial of albendazole for early alveolar disease in Kyrgyzstan completes and is posted to ClinicalTrials.gov.",
      refs: ["who", "albendazole", "ae-kyrgyzstan-albendazole-trial", "who-ce-treatment-guideline-2025"],
    },
    {
      date: "2026",
      text: "Whole-genome analysis maps E. granulosus diversity and a recombinant multiplex serology promises differential diagnosis of human cestodiases; Xizang reports a 91% fall in canine infection since 2016.",
      refs: ["genomic-surveillance", "cestode-multiplex-serology", "one-health-ntd-integration"],
    },
    {
      date: "2030",
      text: "China's programme integrates echinococcosis into economic development planning; modelling projects roughly 20,000 new cases over 2023–2030 if control is sustained.",
      refs: ["who", "eot"],
    },
  ],

  sections: [
    {
      id: "two-diseases",
      title: "Two diseases, one genus",
      body:
        "Cystic echinococcosis, or hydatid disease, grows slowly and silently. A person may carry a liver cyst for a decade before it causes pain, jaundice or a cough, and the first sign can be rupture — which can cause anaphylaxis or spread daughter cysts through the abdomen. The WHO classification of cysts (CE1 to CE5) guides whether to treat, drain, or simply watch.\n\nAlveolar echinococcosis is different in kind. Caused by Echinococcus multilocularis and transmitted mainly by foxes and dogs, it forms a spongy mass that invades surrounding tissue and metastasises like a cancer. Untreated it is fatal; treated, it usually requires lifelong albendazole and often surgery. It is a disease of the northern hemisphere — central Europe, Russia, China, Japan, North America — and its range in Europe has been expanding. A third, neotropical form from E. vogeli (polycystic, mainly liver) and the extremely rare E. oligarthrus occurs in rural Central and South America.",
      refs: ["alveolar-echinococcosis", "albendazole", "echinococcus"],
    },
    {
      id: "vaccine",
      title: "The EG95 vaccine changes the arithmetic",
      body:
        "Traditional control relied on deworming dogs and improving slaughter hygiene — both of which depend on sustained human behaviour, and both of which drift when programmes lose funding. Vaccinating sheep changes the calculation, because it removes the step in the cycle where dogs become infected. EG95 is a recombinant antigen vaccine with 96–100% protection in sheep, registered in China and Argentina and in commercial production.\n\nWHO's modelling of the combined package — vaccinate lambs, deworm dogs at least four times a year, and cull older sheep (whose cysts are most likely to infect dogs) — suggests human cystic echinococcosis could be eliminated in under ten years. Morocco's programme in the Middle Atlas tested the animal-side interventions in the field and reported infection falling substantially in dogs, sheep and cattle. Success stories so far have mostly come from islands, which tells you the method works and the difficulty is sustaining it over large connected areas.",
      refs: ["eg95-sheep-vaccine", "praziquantel", "zoonosis", "one-health"],
    },
    {
      id: "china",
      title: "China's national programme",
      body:
        "China carries the largest share of the global burden, concentrated on the Tibetan plateau and in pastoral communities where dogs, livestock and people live closely together — 89,844 cases were recorded nationally between 2004 and 2022, with the plateau showing the highest rates for both cystic and alveolar disease. Its response is the clearest test of whether echinococcosis can actually be eliminated at scale: dog registration, repeated (often monthly) deworming, sheep vaccination, patient screening and free treatment, embedded in local economic development plans rather than run as a vertical health campaign.\n\nThe results are measurable: across 74 counties of Xizang the canine infection rate fell 91%, from 5.63% to 0.50%, between 2016 and 2022, and Xinjiang's reported incidence fell 17.7% a year from 2017 to 2023. The remaining obstacles are practical: deworming compliance slipped to 77% by 2022, stray dog populations escape registration, the cost of sustaining monthly deworming is high and uneven between counties, and the plateau is vast and sparsely served.",
      refs: ["who", "one-health-ntd-integration", "surveillance-data-gap"],
    },
    {
      id: "treatment",
      title: "Diagnosis and treatment",
      body:
        "Diagnosis rests on imaging — ultrasound for abdominal cysts, CT and MRI for complicated or alveolar disease — supported by serology, which is sensitive but cannot reliably distinguish active from past infection. Ultrasound is portable and cheap enough for field use, and the standardised WHO cyst classification lets a district clinician decide between observation, drug treatment, drainage or surgery.\n\nTreatment is staged. Small, inactive cysts can be watched. Active cysts are treated with albendazole, sometimes with a procedure called PAIR (puncture, aspiration, injection, reaspiration) that collapses the cyst without open surgery. Larger or complicated cysts need surgery. Alveolar disease needs long-term or lifelong albendazole and specialist surgical care, and often recurs. In June 2025 WHO published its first treatment guideline for cystic disease, formalising this staging: albendazole alone for small CE1/CE3a cysts, PAIR plus albendazole for mid-sized ones, percutaneous treatment for large ones, surgery plus albendazole for multivesicular CE2/CE3b cysts — and, strikingly, every recommendation is conditional on very-low-certainty evidence, which is itself a finding about how thin the trial base is. None of this is simple, which is why prevention is the better investment.",
        refs: ["pair", "albendazole", "echinococcosis", "who-ce-treatment-guideline-2025"],
    },
    {
      id: "alveolar-europe",
      title: "Alveolar echinococcosis and the fox cycle",
      body:
        "While cystic disease is a problem of pastoral poverty, alveolar echinococcosis is quietly spreading in wealthy countries. Its cycle runs through foxes and small rodents, and the fox population has grown in European cities and countryside over recent decades. Human cases are rare but rising, and diagnosis is usually late because clinicians do not think of it — a liver mass that looks like cancer may be a parasite.\n\nThis makes alveolar echinococcosis an unusual NTD: a disease of affluence as well as poverty, with no vaccine in routine use, an expensive and lifelong treatment, and surveillance that depends on veterinarians noticing infection in foxes. It also makes plain why WHO frames echinococcosis as a One Health problem rather than a medical one.",
      refs: ["alveolar-echinococcosis", "one-health-ntd-integration", "woah", "zoonosis"],
    },
  ],

  technologies: ["eg95-sheep-vaccine", "pair"],
  institutions: ["who", "woah"],
  terms: ["alveolar-echinococcosis"],
};
