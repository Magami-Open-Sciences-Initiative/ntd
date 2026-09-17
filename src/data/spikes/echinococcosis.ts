import type { Spike } from "../merge";

export const echinococcosisSpike: Spike = {
  tldr: "Tapeworm larvae from dogs that grow into slow, tumour-like cysts in the liver and lungs — and the first livestock vaccine that, combined with dog deworming, has made elimination a realistic goal.",

  summary:
    "Echinococcosis comes in two forms. Echinococcus granulosus causes cystic echinococcosis: a fluid-filled cyst that grows for years in the liver or lungs and may rupture without warning. Echinococcus multilocularis causes alveolar echinococcosis, which invades the liver like a slow cancer and is often fatal without lifelong treatment. People are accidental hosts, infected by eggs from dog faeces; dogs become infected by eating cysts in the organs of slaughtered livestock. What has changed is that the transmission cycle is now attackable from the animal side. A recombinant vaccine, EG95, protects sheep with 96–100% efficacy, is registered and in commercial production in China and Argentina, and is used extensively in China. WHO's assessment is that a package combining lamb vaccination, deworming dogs at least four times a year and culling older sheep could eliminate human cystic echinococcosis in under a decade — which would make this the rare NTD whose solution is entirely veterinary.",

  stats: [
    { label: "People with cystic echinococcosis", value: "> 1 million", note: "at any one time" },
    { label: "DALYs a year", value: "≈ 1 million", note: "WHO estimate" },
    { label: "EG95 vaccine efficacy in sheep", value: "96–100%" },
    { label: "Dog deworming needed", value: "≥ 4 times a year", note: "praziquantel" },
    { label: "Dogs under management in China", value: "≈ 2 million", note: "in endemic townships, 2024" },
    { label: "China's elimination target", value: "2030" },
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
      text: "China reports roughly two million dogs registered and dewormed across endemic townships as part of its national elimination programme.",
      refs: ["who", "one-health-ntd-integration"],
    },
    {
      date: "2030",
      text: "China's national roadmap aims for elimination of echinococcosis, integrating it into economic development planning.",
      refs: ["who", "eot"],
    },
  ],

  sections: [
    {
      id: "two-diseases",
      title: "Two diseases, one genus",
      body:
        "Cystic echinococcosis, or hydatid disease, grows slowly and silently. A person may carry a liver cyst for a decade before it causes pain, jaundice or a cough, and the first sign can be rupture — which can cause anaphylaxis or spread daughter cysts through the abdomen. The WHO classification of cysts (CE1 to CE5) guides whether to treat, drain, or simply watch.\n\nAlveolar echinococcosis is different in kind. Caused by Echinococcus multilocularis and transmitted mainly by foxes and dogs, it forms a spongy mass that invades surrounding tissue and metastasises like a cancer. Untreated it is fatal; treated, it usually requires lifelong albendazole and often surgery. It is a disease of the northern hemisphere — central Europe, Russia, China, Japan, North America — and its range in Europe has been expanding.",
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
        "China carries the largest share of the global burden, concentrated on the Tibetan plateau and in pastoral communities where dogs, livestock and people live closely together. Its response is the clearest test of whether echinococcosis can actually be eliminated at scale: dog registration, repeated deworming, sheep vaccination, patient screening and free treatment, embedded in local economic development plans rather than run as a vertical health campaign.\n\nBy 2024 the programme reported roughly two million dogs under registration and deworming in endemic townships. A nineteen-year retrospective concluded that continued and expanded wildlife and dog deworming should further reduce human prevalence. The remaining obstacles are practical: stray dog populations that are not registered, the sheer cost of sustaining four rounds of deworming a year, and the fact that the plateau is vast and sparsely served.",
      refs: ["who", "one-health-ntd-integration", "surveillance-data-gap"],
    },
    {
      id: "treatment",
      title: "Diagnosis and treatment",
      body:
        "Diagnosis rests on imaging — ultrasound for abdominal cysts, CT and MRI for complicated or alveolar disease — supported by serology, which is sensitive but cannot reliably distinguish active from past infection. Ultrasound is portable and cheap enough for field use, and the standardised WHO cyst classification lets a district clinician decide between observation, drug treatment, drainage or surgery.\n\nTreatment is staged. Small, inactive cysts can be watched. Active cysts are treated with albendazole, sometimes with a procedure called PAIR (puncture, aspiration, injection, reaspiration) that collapses the cyst without open surgery. Larger or complicated cysts need surgery. Alveolar disease needs long-term or lifelong albendazole and specialist surgical care, and often recurs. None of this is simple, which is why prevention is the better investment.",
      refs: ["pair", "albendazole", "echinococcosis"],
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
