import type { Spike } from "../merge";

const WHO_DENGUE: { label: string; url: string } = {
  label: "WHO — dengue and severe dengue (fact sheet)",
  url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue",
};

export const dengueSpike: Spike = {
  tldr: "A mosquito-borne virus with four serotypes that causes sudden fever and, on a second infection with a different serotype, can leak plasma and kill — and 2024 was its worst year on record.",

  summary:
    "Dengue is caused by four serotypes of dengue virus and transmitted by day-biting Aedes aegypti and Aedes albopictus mosquitoes. A first infection is usually mild or silent; a second infection with a different serotype is the dangerous one, because antibody-dependent enhancement raises the risk of severe dengue — plasma leakage and shock around the time the fever breaks. That biology is why case management is careful fluid therapy rather than a drug, and why vaccine development has been so hard. Reported cases rose from 505,430 in 2000 to a record 14.6 million in 2024, with more than 12,000 deaths and more than 100 countries affected on all continents. There is still no approved antiviral, but the last two years brought a wave of good news on prevention: 2024 was a record year for Wolbachia deployments, and Brazil approved the world's first single-dose dengue vaccine in November 2025.",

  stats: [
    {
      label: "Wolbachia, Yogyakarta",
      value: "−77% dengue",
      number: -77,
      unit: "%",
      geography: "Yogyakarta, Indonesia",
      note: "cluster-randomised trial; 86% fewer hospitalisations",
      source: { label: "AWED trial (NEJM, 2021)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2030243" },
    },
    {
      label: "Wolbachia, Niterói",
      value: "−89% dengue",
      number: -89,
      unit: "%",
      geography: "Niterói, Brazil",
      source: { label: "World Mosquito Program — global impact", url: "https://www.worldmosquitoprogram.org/" },
    },
    {
      label: "Secondary infection",
      value: "Higher risk of severe dengue",
      note: "a second infection with a different serotype drives antibody-dependent enhancement",
      source: WHO_DENGUE,
    },
  ],

  timeline: [
    {
      date: "2021",
      text: "The AWED cluster-randomised trial in Yogyakarta, Indonesia, reports that Wolbachia-infected mosquitoes cut dengue by 77% and hospitalisations by 86%.",
      refs: ["awed-wolbachia", "wolbachia-method", "world-mosquito-program"],
    },
    {
      date: "2024",
      text: "The Americas report a record dengue season — more than thirteen million cases — and the global total reaches 14.6 million, the highest ever recorded.",
      refs: ["paho", "vector-borne"],
    },
    {
      date: "2024",
      text: "WHO issues its third dengue vaccine position paper, recommending Qdenga for children aged 6–16 in high-transmission settings only.",
      refs: ["dengue-vaccination", "who"],
    },
    {
      date: "2025",
      text: "PAHO warns of heightened outbreak risk from renewed circulation of the DENV-3 serotype.",
      refs: ["paho"],
    },
    {
      date: "2025",
      text: "Brazil's regulator approves Butantan-DV, the world's first single-dose dengue vaccine, for ages 12–59.",
      refs: ["butantan-dv-dengue", "butantan-institute"],
    },
    {
      date: "2025",
      text: "Johnson & Johnson discontinues the Phase 2 field study of its dengue antiviral mosnodenvir despite encouraging early results.",
      refs: ["mosnodenvir-dengue", "mosnodenvir"],
    },
  ],

  sections: [
    {
      id: "surge",
      title: "The 2024 surge and what is driving it",
      body:
        "The 2024 dengue season broke every record: 14.6 million cases reported to WHO, more than 12,000 deaths, and more than 100 countries affected on all continents. The Americas carried the largest share, with over thirteen million cases, more than twenty-two thousand classified as severe and more than eight thousand deaths; the United States, which usually sees dengue only in travellers, recorded a 359% increase over its 2010–2023 average, with sustained outbreaks in Puerto Rico and the U.S. Virgin Islands. Europe recorded 308 locally relevant cases in France, Italy and Spain, plus 1,291 cases and four deaths in the French overseas territories of Mayotte and Réunion. In early 2025 PAHO warned that renewed circulation of the DENV-3 serotype — which many populations have not seen recently — could drive further outbreaks; the first seven months of 2025 still produced more than four million cases and more than three thousand deaths across 97 countries.\n\nThe drivers are well understood and hard to reverse: urbanisation that creates breeding sites in water storage and discarded containers, unreliable piped water that forces households to store water, international travel that moves serotypes between regions, and a warming climate that expands the range of Aedes albopictus into temperate zones. Because Aedes aegypti bites during the day and breeds in domestic containers, bed nets do not work and house spraying reaches only part of the population.",
      refs: ["aedes-aegypti", "aedes-albopictus", "climate-expansion", "paho", "vector-surveillance"],
    },
    {
      id: "vaccines",
      title: "Two vaccines, very different",
      body:
        "Dengue vaccination is unusually hard because there are four serotypes and a second infection with a different one is more dangerous. The first licensed vaccine required pre-screening for prior infection, which limited its usefulness. The second, Qdenga (TAK-003), works without screening and WHO's May 2024 position paper recommends it for children aged 6 to 16 in settings of high transmission intensity, as a two-dose schedule — but explicitly not for younger children, and not in low-to-moderate transmission settings until questions about protection against DENV-3 and DENV-4 in people who have never had dengue are resolved.\n\nBrazil has taken a different route. Butantan-DV, developed by the Butantan Institute with a Chinese manufacturing partner, is the world's first single-dose dengue vaccine; Brazil's regulator approved it in November 2025 for people aged 12 to 59, with incorporation into the national immunisation programme planned for 2026 and more than a million doses prepared. A single dose matters enormously for campaigns: it removes the second visit, and in a country that has had the largest dengue burden in the world, it puts a locally developed product at the centre of the response.",
      refs: ["dengue-vaccination", "tak-003-dengue", "butantan-dv-dengue", "butantan-institute", "vaccine-gap"],
    },
    {
      id: "wolbachia",
      title: "Wolbachia: the strongest new tool",
      body:
        "Wolbachia is a bacterium that, once established in Aedes aegypti, makes the mosquito far less able to transmit dengue, chikungunya and Zika — and because it is inherited through the mosquito's eggs, it spreads and persists without repeated releases. The evidence has accumulated from a gold-standard randomised trial to city-scale deployments: 77% fewer dengue cases in Yogyakarta, 89% in Niterói in Brazil with a corresponding drop in chikungunya, and reductions above 90% in Bello and Itagüí in Colombia even during the severe 2024 national outbreak. Campo Grande, Brazil recorded a 63% decline.\n\nBy its 2025 review the World Mosquito Program reported 16.1 million people protected across fifteen countries, an estimated 1.5 million dengue cases prevented and US$455 million in avoided healthcare costs, with new deployments beginning in Peru and Timor-Leste. Economics support it: modelling for Colombian cities found benefit-cost ratios above five to one over ten years. The method is not a vaccine and does not stop every case, but no other dengue intervention has produced reductions this large and this durable at city scale.",
      refs: ["wolbachia-method", "world-mosquito-program", "awed-wolbachia", "aedes-aegypti", "vector-control-roadmap"],
    },
    {
      id: "antiviral",
      title: "The antiviral that did not make it",
      body:
        "A drug that stopped dengue early would change everything, because care is currently supportive and hospitals fill during outbreaks. The most advanced candidate was mosnodenvir (formerly JNJ-1802), a small molecule that showed it could protect volunteers in a human challenge model — a genuinely promising result that raised expectations of a preventive antiviral.\n\nIn 2025 the company discontinued the Phase 2 field study, despite the drug having been safe and well tolerated in earlier phases. The reasons are commercial and strategic as much as scientific, but the consequence for the field is real: there is still no approved dengue antiviral, and the challenge-model signal did not translate into a field-usable product. It is a caution about how much weight a challenge-model result can carry, and about who is willing to fund late-stage trials for a disease whose main market is poor.",
      refs: ["mosnodenvir", "mosnodenvir-dengue", "dengue-ns5", "funding-gap"],
    },
    {
      id: "care",
      title: "Clinical care: still fluid management",
      body:
        "For a patient with dengue, the treatment is careful fluid management and close watching for warning signs — abdominal pain, persistent vomiting, bleeding, restlessness — around the time the fever breaks, when plasma leakage can cause shock. Getting that right saves lives, and getting it wrong in either direction causes harm: too little fluid and the patient deteriorates, too much and they develop pulmonary oedema. This is why WHO's clinical guidance and national protocols emphasise monitoring and a clear case classification — dengue without warning signs, with warning signs, and severe dengue — rather than a drug.",
      refs: ["who", "community-health-workers", "surveillance-data-gap"],
    },
  ],

  drugs: ["mosnodenvir"],
  trials: ["awed-wolbachia", "mosnodenvir-dengue"],
  technologies: ["wolbachia-method"],
  institutions: ["world-mosquito-program", "butantan-institute", "paho"],
  terms: [],
};
