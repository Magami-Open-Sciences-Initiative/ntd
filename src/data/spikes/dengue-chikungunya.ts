import type { Spike } from "../merge";

export const dengueChikungunyaSpike: Spike = {
  tldr: "Two mosquito-borne viral diseases spread by day-biting Aedes mosquitoes that are exploding in tropical cities — and the target of the fastest-moving vaccine and vector-control research in the field.",

  summary:
    "Dengue and chikungunya are both transmitted by Aedes mosquitoes and both cause sudden fever with severe joint and muscle pain. Dengue has four serotypes, and a second infection with a different serotype carries a higher risk of severe dengue with plasma leakage and shock — which is why case management is mostly careful fluid therapy. Chikungunya rarely kills but leaves a substantial minority with joint pain lasting months or years. Neither has an approved antiviral. The last two years have been the most consequential in decades, in both directions: 2024 brought a record outbreak of more than thirteen million dengue cases in the Americas; Brazil approved the world's first single-dose dengue vaccine in November 2025; large-scale Wolbachia deployments showed reductions in dengue of 60–90% across cities in Indonesia, Brazil and Colombia; and, against that, a promising dengue antiviral was discontinued, and the chikungunya vaccine was paused in people over 60 after serious adverse events.",

  stats: [
    {
      label: "Dengue in the Americas, 2024",
      value: "> 13 million cases",
      note: "a record; 22,684 severe and 8,186 deaths (PAHO)",
    },
    { label: "Infections a year, globally", value: "≈ 100–400 million" },
    { label: "At risk", value: "≈ half the world's population" },
    {
      label: "Qdenga (TAK-003)",
      value: "2 doses, ages 6–16",
      note: "high-transmission settings, per WHO's May 2024 position paper",
    },
    {
      label: "Butantan-DV",
      value: "Single dose",
      note: "approved in Brazil, November 2025, ages 12–59",
    },
    {
      label: "Wolbachia",
      value: "16.1 million people protected",
      note: "15 countries; ~1.5 million dengue cases prevented (WMP 2025)",
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
      text: "The Americas report a record dengue season — more than thirteen million cases — and the United States reports a 359% rise over its historical average.",
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
      text: "FDA and CDC recommend pausing use of the chikungunya vaccine Ixchiq in people aged 60 and over after serious neurological and cardiac events.",
      refs: ["ixchiq"],
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
        "The 2024 dengue season in the Americas broke every record: more than thirteen million reported cases, over twenty-two thousand classified as severe, and more than eight thousand deaths. The United States, which usually sees dengue only in travellers, recorded a 359% increase over its 2010–2023 average, with sustained outbreaks in Puerto Rico and the U.S. Virgin Islands. In early 2025 PAHO warned that renewed circulation of the DENV-3 serotype — which many populations have not seen recently — could drive further outbreaks.\n\nThe drivers are well understood and hard to reverse: urbanisation that creates breeding sites in water storage and discarded containers, unreliable piped water that forces households to store water, international travel that moves serotypes between regions, and a warming climate that expands the range of Aedes albopictus into temperate zones. Because Aedes aegypti bites during the day and breeds in domestic containers, bed nets do not work and house spraying reaches only part of the population.",
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
      id: "chikungunya-vaccine",
      title: "Chikungunya's vaccine setback",
      body:
        "Chikungunya got its first licensed vaccine in 2023, which was a genuine advance for a disease with no specific treatment. Then in May 2025 the FDA and CDC recommended a pause in its use in people aged 60 and older while they investigated post-marketing reports of serious adverse events — seventeen in total, including two deaths, in people aged 62 to 89. In August 2025 the FDA issued a further safety update. The events were neurological and cardiac, and the label already carried a warning that the live vaccine can cause severe or prolonged chikungunya-like reactions.\n\nThe practical effect is a narrowing of who can receive it: fine for younger travellers and some at-risk groups, not usable in the older adults who are most vulnerable to severe chikungunya. It is a reminder that a licensed vaccine is not the end of the story, and that post-marketing surveillance does real work — but it leaves the field with a licensed product it cannot use in a large part of the population that needs protection.",
      refs: ["ixchiq", "dengue-vaccination", "who"],
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
        "For a patient with dengue, the treatment is careful fluid management and close watching for warning signs — abdominal pain, persistent vomiting, bleeding, restlessness — around the time the fever breaks, when plasma leakage can cause shock. Getting that right saves lives, and getting it wrong in either direction causes harm; too little fluid and the patient deteriorates, too much and they develop pulmonary oedema. This is why WHO's clinical guidance and national protocols emphasise monitoring rather than a drug.\n\nFor chikungunya there is even less to offer: analgesia for joint pain, and time. Neonates and older adults are at risk of severe disease, and a minority of patients have joint pain for months or years, which is a substantial economic burden in its own right. Neither disease has a specific treatment, which is exactly why the vaccine and vector-control results above matter so much.",
      refs: ["who", "community-health-workers", "surveillance-data-gap"],
    },
  ],

  drugs: ["mosnodenvir", "ixchiq"],
  trials: ["awed-wolbachia", "mosnodenvir-dengue"],
  technologies: ["wolbachia-method"],
  institutions: ["world-mosquito-program", "butantan-institute", "paho"],
  terms: [],
};
