import type { Spike } from "../merge";

export const taeniasisCysticercosisSpike: Spike = {
  tldr: "The pork tapeworm gives people a gut worm, but its eggs cause cysts in the brain that are a leading preventable cause of epilepsy — and a pig vaccine plus a dewormer can now break the cycle.",

  summary:
    "A person gets the adult tapeworm, Taenia solium, by eating undercooked pork containing cysts. But if someone swallows the tapeworm's eggs — from contaminated food, water or their own hands — the larvae form cysts in the brain, causing neurocysticercosis, one of the most common preventable causes of epilepsy worldwide. Pigs are the intermediate host, and free-roaming pigs that eat human faeces keep the cycle going. What has changed is that the animal side of the cycle is now closable. TSOL18, a recombinant pig vaccine sold as Cysvax by Indian Immunologicals, prevents new cysts, and oxfendazole clears existing ones; a trial in Uganda found that three-monthly vaccination combined with oxfendazole eliminated transmission by pigs. Because people and pigs live in the same households, control is inherently a One Health problem: human treatment, pig vaccination, meat inspection and sanitation have to move together.",
  stats: [
    {
      label: "DALYs a year (2015)",
      value: "2.8 million",
      number: 2.8,
      unit: "million DALYs",
      year: 2015,
      geography: "global",
      note: "T. solium identified as a leading cause of deaths from foodborne diseases (WHO FERG)",
      source: { label: "WHO — taeniasis/cysticercosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
    },
    {
      label: "Epilepsy link",
      value: "30%",
      number: 30,
      unit: "%",
      geography: "endemic countries",
      note: "of epilepsy cases; up to 70% in some communities",
      source: { label: "WHO — taeniasis/cysticercosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
    },
    { label: "People with neurocysticercosis", value: "2.5–8.3 million", unit: "people", note: "older global estimate", source: { label: "WHO — taeniasis/cysticercosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" } },
    { label: "Pig vaccine", value: "TSOL18 (Cysvax)", note: "prevents new cysts in vaccinated pigs" },
    { label: "Combination used", value: "Vaccine + oxfendazole", note: "prevents new cysts and clears existing ones" },
    {
      label: "Uganda trial result",
      value: "Transmission eliminated in pigs",
      note: "with three-monthly vaccination and oxfendazole",
    },
    { label: "Driver", value: "Free-roaming pigs and poor sanitation" },
  ],

  timeline: [
    {
      date: "2015",
      text: "The TSOL18 pig vaccine is developed and licensed, giving control programmes a way to prevent new infections in pigs.",
      refs: ["tsol18-vaccine"],
    },
    {
      date: "2021",
      text: "A trial in Uganda reports that three-monthly vaccination with TSOL18 plus oxfendazole eliminated Taenia solium transmission by pigs.",
      refs: ["pig-vaccination-oxfendazole", "tsol18-vaccine", "oxfendazole"],
    },
    {
      date: "2020s",
      text: "WHO promotes prevention and control of Taenia solium through animals under a One Health approach, naming TSOL18 and oxfendazole.",
      refs: ["who", "one-health-ntd-integration"],
    },
    {
      date: "2024",
      text: "A randomised trial compares combined praziquantel and albendazole with albendazole alone for brain cysts, as evidence grows for dual therapy.",
      refs: ["cysticercosis-serology", "praziquantel", "albendazole"],
    },
    {
      date: "2020s",
      text: "The ring strategy — treating people and vaccinating pigs in a ring around a detected tapeworm carrier — is evaluated as an elimination approach.",
      refs: ["one-health-ntd-integration", "mass-drug-administration"],
    },
  ],

  sections: [
    {
      id: "pig-vaccine",
      title: "The pig vaccine that breaks the cycle",
      body:
        "Taenia solium has a step that can be removed: the pig. If pigs do not carry cysts, dogs do not matter and people cannot get the tapeworm from pork — and, crucially, the tapeworm carriers who contaminate the environment are never created. TSOL18, a recombinant vaccine against the parasite's oncosphere stage, prevents new cysts forming in vaccinated pigs. It is produced commercially as Cysvax by Indian Immunologicals, and WHO names it among the specific control measures for the pig population.\n\nThe vaccine does not clear cysts a pig already has, so it is given with oxfendazole, a benzimidazole that kills established cysts. A trial in Uganda gave pigs both every three months and found that transmission by pigs was eliminated. That combination — vaccinate and treat, repeatedly — is the closest thing to a switch that turns off the pig end of the cycle, and it is why Taenia solium control is one of the clearest cases for a One Health approach.",
      refs: ["tsol18-vaccine", "oxfendazole", "pig-vaccination-oxfendazole", "zoonosis", "one-health"],
    },
    {
      id: "ncc",
      title: "Neurocysticercosis: the epilepsy link",
      body:
        "Neurocysticercosis is what makes this disease matter. When a person swallows T. solium eggs, larvae form cysts in the brain, and the seizures, headaches and hydrocephalus they cause make it a leading preventable cause of epilepsy in endemic areas — in some communities, a substantial share of all epilepsy in adults. The clinical picture depends on where the cysts are and whether they are alive, degenerating or calcified: degenerating cysts provoke the most inflammation, while calcified lesions can still trigger seizures years later.\n\nThe epidemiology is also subtle. Tapeworm carriers are the source of eggs, and they may have no symptoms at all, so a person can transmit cysticercosis to their own household without knowing they carry a tapeworm. That is why finding and treating carriers is a control strategy in itself, and why sanitation — keeping pigs away from human faeces and people away from contaminated food and water — is inseparable from medical treatment.",
      refs: ["taenia-solium", "albendazole", "praziquantel", "wash-interventions", "stigma-and-disability"],
    },
    {
      id: "treatment",
      title: "Treating brain cysts: albendazole, with or without praziquantel",
      body:
        "Antiparasitic treatment of neurocysticercosis has become clearer over the last decade. Albendazole is superior to praziquantel for viable parenchymal cysts, and current guidance recommends albendazole monotherapy for one or two viable cysts and combination therapy with albendazole and praziquantel when there are more than two. A randomised trial has been comparing the combination against albendazole alone, and a systematic review suggests dual therapy improves cyst resolution. Treatment is always given with corticosteroids, because killing the cysts causes inflammation that can worsen symptoms.\n\nSurgery remains necessary for some cases — intraventricular cysts, hydrocephalus, or raised intracranial pressure — and shunt placement is a common intervention. Antiepileptic drugs control the seizures. The practical problem is that the patients who need this care are often in places where CT and MRI are unavailable, so diagnosis and follow-up rely on clinical judgement and serology rather than imaging.",
      refs: ["albendazole", "praziquantel", "cysticercosis-serology", "access-and-pricing"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis: serology, imaging and finding the carrier",
      body:
        "Diagnosis works differently at each end of the cycle. In pigs, tongue examination and carcass inspection are the traditional tools, and serology and ultrasound are used in research. In people, diagnosing a tapeworm carrier relies on stool examination for eggs or segments, or on coproantigen tests, all of which are insensitive and hard to apply at scale.\n\nDiagnosing brain cysts depends on imaging plus serology: the enzyme-linked immunoelectrotransfer blot and the rT24H assay detect antibodies to specific parasite antigens and are highly specific, but they indicate exposure rather than active disease and cannot show whether a lesion is alive. The practical need is a point-of-care test for active infection and for the tapeworm carrier state — the person who is actually spreading eggs — and that gap is one of the reasons control programmes cannot find the source they are trying to eliminate.",
      refs: ["cysticercosis-serology", "molecular-pcr", "diagnostics-gap", "sensitivity-specificity"],
    },
    {
      id: "one-health",
      title: "The ring strategy and One Health control",
      body:
        "Elimination of Taenia solium requires intervening on people and pigs at the same time and in the same place. The ring strategy operationalises that: when a tapeworm carrier is found, everyone in a defined radius is treated for taeniasis and the pigs in that area are vaccinated and treated with oxfendazole, so the parasite is removed at both ends of its cycle locally. It has been evaluated in endemic settings including northern Peru and is attractive because it targets effort where transmission is actually happening rather than treating whole districts.\n\nThe alternative is mass treatment of people and pigs, which is expensive and needs sustained delivery. Either way the interventions are the same set — human treatment, pig vaccination, pig treatment, meat inspection, sanitation and health education — and the obstacle is that they sit in different budgets and different ministries. Taenia solium is the disease that most clearly demonstrates why a One Health programme must be funded and managed as one thing.",
      refs: ["one-health-ntd-integration", "mass-drug-administration", "tsol18-vaccine", "wash-interventions", "funding-gap"],
    },
  ],

  technologies: ["tsol18-vaccine"],
  diagnostics: ["cysticercosis-serology"],
  trials: ["pig-vaccination-oxfendazole"],
  institutions: ["galvmed", "who"],
};
