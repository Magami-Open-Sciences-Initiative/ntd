import type { Spike } from "../merge";

const WHO_DENGUE: { label: string; url: string } = {
  label: "WHO — dengue and severe dengue (fact sheet)",
  url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue",
};

export const dengueSpike: Spike = {
  tldr: "A mosquito-borne virus with four serotypes that causes sudden fever and, on a second infection with a different serotype, can leak plasma and kill — and 2024 was its worst year on record.",

  summary:
    "Dengue is caused by four serotypes of dengue virus and transmitted by day-biting Aedes aegypti and Aedes albopictus mosquitoes. A first infection is usually mild or silent; a second infection with a different serotype is the dangerous one, because antibody-dependent enhancement raises the risk of severe dengue — plasma leakage and shock around the time the fever breaks. That biology is why case management is careful fluid therapy rather than a drug, and why vaccine development has been so hard. Reported cases rose from 505,430 in 2000 to 14.4 million in 2024 (11,201 deaths) across more than 100 countries; 2025 fell back sharply in the Americas but kept all four serotypes circulating. There is still no approved antiviral, though mosnodenvir's challenge-trial data (NEJM) awaits a new sponsor and Novartis's NS4B inhibitor EYU688 is in Phase 2. On prevention, Wolbachia is heading for a WHO recommendation in late 2027 — while Brazil's single-dose Butantan-DV, approved in November 2025, was suspended in June 2026 pending a safety review.",

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
    {
      date: "2026",
      text: "Brazil suspends the Butantan-DV rollout in June pending a safety review after two deaths; the NEJM publishes mosnodenvir's challenge-trial data as adoption talks continue.",
      refs: ["butantan-dv", "qdenga", "mosnodenvir-dengue", "mosnodenvir"],
    },
    {
      date: "2026",
      text: "WHO opens a systematic review of Wolbachia population replacement, with a recommendation expected in late 2027.",
      refs: ["wolbachia-method", "world-mosquito-program", "who"],
    },
  ],

  sections: [
    {
      id: "surge",
      title: "The 2024 surge and what is driving it",
      body:
        "The 2024 dengue season broke every record: 14,434,584 cases reported to WHO (7.7 million confirmed, 52,738 severe, 11,201 deaths) across more than 100 countries on all continents. The Americas carried over 90% of the total, with over thirteen million cases; Brazil alone reported 10.2 million cases and 6,321 deaths, alongside large epidemics in Argentina, Mexico, Colombia and Paraguay, while Indonesia and India topped Asia and Burkina Faso and Cabo Verde marked Africa's sharp rise. In early 2025 PAHO warned that renewed circulation of the DENV-3 serotype — which many populations have not seen recently — could drive further outbreaks. The year then fell back: the Americas reported 4.46 million suspected cases with 2,207 deaths in 2025 (down 66% and 74%), and early 2026 ran 60% below 2025 — but all four serotypes circulated throughout, keeping severe-disease risk high.\n\nThe drivers are well understood and hard to reverse: urbanisation that creates breeding sites in water storage and discarded containers, unreliable piped water that forces households to store water, international travel that moves serotypes between regions, and a warming climate that expands the range of Aedes albopictus into temperate zones. Because Aedes aegypti bites during the day and breeds in domestic containers, bed nets do not work and house spraying reaches only part of the population.",
      refs: ["aedes-aegypti", "aedes-albopictus", "climate-expansion", "paho", "vector-surveillance"],
    },
    {
      id: "vaccines",
      title: "Two vaccines, very different",
      body:
        "Dengue vaccination is unusually hard because there are four serotypes and a second infection with a different one is more dangerous. The first licensed vaccine required pre-screening for prior infection, which limited its usefulness. The second, Qdenga (TAK-003), works without screening and WHO's May 2024 position paper recommends it for children aged 6 to 16 in settings of high transmission intensity, as a two-dose schedule — but explicitly not for younger children, and not in low-to-moderate transmission settings until questions about protection against DENV-3 and DENV-4 in people who have never had dengue are resolved.\n\nBrazil took a different route. Butantan-DV, a single-dose live-attenuated vaccine developed by the Butantan Institute (from the NIH TV003 backbone) with WuXi as manufacturing partner, showed 74.7% overall efficacy, 91.6% against severe dengue and 100% against hospitalisation; Brazil's regulator approved it in November 2025 for ages 12 to 59, rollout to health workers began in February 2026 — and in June 2026 the ministry suspended the strategy as a precaution after two deaths, with Anvisa convening an expert review. A single dose still matters enormously for campaigns, but the suspension shows a Phase 3 safety database of ~16,000 is not the end of the story. Note the serotype caveat from the trial readouts: published efficacy centred on DENV-1 and DENV-2, with DENV-3/4 protection less established — the same shadow that hangs over Qdenga.",
      refs: ["dengue-vaccination", "tak-003-dengue", "butantan-dv-dengue", "qdenga", "butantan-dv", "butantan-institute", "vaccine-gap"],
    },
    {
      id: "wolbachia",
      title: "Wolbachia: the strongest new tool",
      body:
        "Wolbachia is a bacterium that, once established in Aedes aegypti, makes the mosquito far less able to transmit dengue, chikungunya and Zika — and because it is inherited through the mosquito's eggs, it spreads and persists without repeated releases. The evidence has accumulated from a gold-standard randomised trial to city-scale deployments: 77% fewer dengue cases in Yogyakarta, 89% in Niterói in Brazil with a corresponding drop in chikungunya, and reductions above 90% in Bello and Itagüí in Colombia even during the severe 2024 national outbreak. Campo Grande, Brazil recorded a 63% decline.\n\nBy its 2025 review the World Mosquito Program reported 16.1 million people protected across fifteen countries, an estimated 1.5 million dengue cases prevented and US$455 million in avoided healthcare costs, with new deployments beginning in Peru and Timor-Leste. In June 2026 WHO opened a formal systematic review of population replacement (plus suppression), with an integrated vector-control Guideline Development Group expected in Q1 2027 and recommendations in late 2027 — the step that turns a programme into policy. Economics already support it: modelling for Colombian cities found benefit-cost ratios above five to one over ten years. The method is not a vaccine and does not stop every case, but no other dengue intervention has produced reductions this large and this durable at city scale.",
      refs: ["wolbachia-method", "world-mosquito-program", "awed-wolbachia", "aedes-aegypti", "vector-control-roadmap", "who"],
    },
    {
      id: "antiviral",
      title: "The antiviral that did not make it",
      body:
        "A drug that stopped dengue early would change everything, because care is currently supportive and hospitals fill during outbreaks. The most advanced candidate was mosnodenvir (formerly JNJ-1802), a small molecule blocking the NS3–NS4B interaction that protected volunteers in a human challenge model — 6 of 10 high-dose recipients uninfected, the rest low-viraemia — published in the NEJM. The Phase 2 field study (~1,600 enrolled across South America and Asia) was halted in October 2024 when J&J exited infectious diseases, and the compound now sits in limbo with adoption talks under way.\n\nIt is no longer alone. A June 2026 systematic mapping review found only five published antiviral RCTs in dengue history (ivermectin ×2, chloroquine, two HCV repurposings) — and a live pipeline: Novartis's NS4B inhibitor EYU688 in Phase 2, a Serum Institute dengue monoclonal with Phase 2 complete and Phase 3 planned, and a molnupiravir trial for dengue and chikungunya in Brazil. AT-752 (NS5 polymerase) and JNJ-64281802 (NS3–NS4B) were terminated on recruitment and deprioritisation. The lesson of mosnodenvir stands: challenge-model success plus ~1,600 field participants still was not enough without a sponsor willing to finish — but for the first time there is more than one shot on goal.",
      refs: ["mosnodenvir", "mosnodenvir-dengue", "eyu688-novartis-ph2", "sii-dengue-mab-ph2", "dengue-ns5", "dengue-ns4b", "funding-gap"],
    },
    {
      id: "care",
      title: "Clinical care: still fluid management",
      body:
        "For a patient with dengue, the treatment is careful fluid management and close watching for warning signs — abdominal pain, persistent vomiting, bleeding, restlessness — around the time the fever breaks, when plasma leakage can cause shock. Getting that right saves lives, and getting it wrong in either direction causes harm: too little fluid and the patient deteriorates, too much and they develop pulmonary oedema. This is why WHO's clinical guidance and national protocols emphasise monitoring and a clear case classification — dengue without warning signs, with warning signs, and severe dengue — rather than a drug.",
      refs: ["who", "community-health-workers", "surveillance-data-gap"],
    },
  ],

  drugs: ["mosnodenvir", "qdenga", "butantan-dv"],
  trials: ["awed-wolbachia", "mosnodenvir-dengue", "tak-003-dengue", "butantan-dv-dengue", "eyu688-novartis-ph2", "sii-dengue-mab-ph2"],
  technologies: ["wolbachia-method", "dengue-vaccination"],
  institutions: ["world-mosquito-program", "butantan-institute", "paho", "who"],
  guidelines: ["arbovirus-clinical-guideline-2025"],
  terms: [],
};
