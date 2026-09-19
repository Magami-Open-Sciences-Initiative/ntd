import type { Spike } from "../merge";

export const snakebiteSpike: Spike = {
  tldr: "A poisoning that kills and disables poor rural communities — and where the science is improving while the products reaching patients are often the wrong ones.",

  summary:
    "Snakebite envenoming is included among the NTDs because of who it strikes: farmers, herders and children in poor rural areas with the least access to care. Venom can destroy tissue, paralyse muscles or cause uncontrollable bleeding and clotting, depending on the species. Treatment is antivenom matched to the local snakes, and most deaths and amputations are preventable with fast access to the right product — which makes this a logistics, quality and affordability problem at least as much as a scientific one. Three developments define the current moment. The products: investigations in 2025 documented substandard and inappropriate antivenoms being sold across sub-Saharan Africa, including Indian antivenoms that cannot neutralise African venoms, so patients can be treated and still die. The science: engineered antibodies and nanobodies reached proof-of-concept against snake venoms in 2025–2026, and in February 2026 WHO published its first target product profiles for novel small-molecule and antibody treatments. The framework: WHO's Snakebite Information and Data Platform and geospatial burden models are, at last, giving the field numbers to plan against.",
  stats: [
    {
      label: "People bitten a year",
      value: "5.4 million",
      number: 5.4,
      unit: "million people",
      geography: "global",
      source: { label: "WHO — snakebite envenoming (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    },
    {
      label: "Envenomings a year",
      value: "1.8–2.7 million",
      unit: "envenomings",
      geography: "global",
      note: "up to 2 million in Asia; 435,000–580,000 bites needing treatment in Africa",
      source: { label: "WHO — snakebite envenoming (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    },
    {
      label: "Deaths a year",
      value: "81,410–137,880",
      unit: "deaths",
      geography: "global",
      note: "WHO estimate",
      source: { label: "WHO — snakebite envenoming (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    },
    {
      label: "Permanent disability",
      value: "≈ 400,000",
      number: 400000,
      unit: "people/year",
      geography: "global",
      note: "about three times as many amputations and other permanent disabilities as deaths",
      source: { label: "WHO — snakebite envenoming (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    },
    {
      label: "India",
      value: "≈ 58,000 deaths/year",
      number: 58000,
      unit: "deaths/year",
      geography: "India",
      note: "2000–2019 average; official hospital figures undercount by an order of magnitude",
      source: { label: "Suraweera et al., eLife 2020", url: "https://pubmed.ncbi.nlm.nih.gov/32543344" },
    },
    { label: "WHO target", value: "Halve deaths and disability by 2030", note: "strategy launched 2019" },
    { label: "The core requirement", value: "Match the antivenom to the region's snakes" },
  ],

  timeline: [
    {
      date: "2017",
      text: "Snakebite envenoming is added to the WHO list of neglected tropical diseases, creating a global framework.",
      refs: ["snakebite"],
    },
    {
      date: "2019",
      text: "WHO launches a strategy to halve deaths and disability from snakebite by 2030, with a budget of about US$136 million.",
      refs: ["who", "snake-antivenom"],
    },
    {
      date: "2023",
      text: "WHO publishes public-benefit target product profiles for conventional antivenoms for sub-Saharan Africa, followed in 2024 by South Asia.",
      refs: ["who", "snake-antivenom"],
    },
    {
      date: "2025",
      text: "Investigations document substandard and inappropriate antivenoms across sub-Saharan Africa, including Indian products ineffective against African venoms.",
      refs: ["snake-antivenom", "access-and-pricing"],
    },
    {
      date: "2025",
      text: "Engineered antibodies and nanobodies reach proof-of-concept against snake venoms, pointing toward scalable, consistent products.",
      refs: ["recombinant-antivenoms", "nanobody-antivenoms"],
    },
    {
      date: "2026",
      text: "WHO publishes its first target product profiles for novel snakebite treatments — small-molecule and engineered-antibody therapeutics for hospital and pre-hospital use.",
      refs: ["snakebite-novel-tpp-2026", "recombinant-antivenoms"],
    },
    {
      date: "2025",
      text: "Nigeria, which records tens of thousands of bites a year, plans domestic antivenom production through a state-owned drugs company.",
      refs: ["who", "access-and-pricing"],
    },
  ],

  sections: [
    {
      id: "bad-products",
      title: "The wrong antivenom is worse than none",
      body:
        "Antivenom is species-specific. A product raised against Indian snakes does not neutralise the venom of an African carpet viper, no matter how much is given — and yet investigations in 2025 found Indian antivenoms being sold and used across sub-Saharan Africa, alongside products of unverified potency. A patient who receives an ineffective antivenom has been given false reassurance, has often paid for it out of pocket, and may die while a health worker believes treatment has been given.\n\nThe response is regulation and prequalification. WHO maintains a risk assessment and prequalification pathway for snake antivenoms, and the evidence mapping of national regulations shows how uneven the rules are. For a product that is expensive, heat-sensitive and life-saving, quality assurance is not a bureaucratic nicety — it is the intervention.",
      refs: ["snake-antivenom", "who", "access-and-pricing", "funding-gap"],
    },
    {
      id: "next-gen",
      title: "Recombinant antivenoms and the 2026 WHO guidance",
      body:
        "Conventional antivenom is made by immunising horses or sheep with venom and harvesting the antibodies. That produces a working product but one that varies between batches, needs a cold chain, carries a risk of allergic reactions, and must be manufactured region by region because venoms differ. Engineered antibodies — human monoclonal antibodies and, more recently, nanobodies — could be produced consistently at scale with no animals involved.\n\nThe difficulty is that venom is a cocktail of many toxins, so a recombinant product must combine antibodies against several of them. In 2025–2026 that barrier began to fall: an oligoclonal nanobody-based recombinant antivenom protected mice challenged with cobra and king cobra venoms, and engineered-antibody approaches reached proof-of-concept against several venoms. In February 2026 WHO published its first target product profiles for novel snakebite treatments — one for hospital use (as an adjunct to, or replacement for, conventional antivenom, against any species) and one for pre-hospital use that could 'buy time' to reach a hospital. The unresolved question is commercial: these products will be more expensive to develop, and the market is poor rural communities, which is why public and philanthropic funding has carried the work this far.",
      refs: ["recombinant-antivenoms", "snake-antivenom", "tpp", "open-science-drug-discovery"],
    },
    {
      id: "access",
      title: "Access, cost and the distance to a clinic",
      body:
        "Most snakebite deaths happen for reasons that have nothing to do with pharmacology. The bite occurs far from a health facility; transport is unavailable at night; the clinic has no antivenom or has run out; the patient cannot pay; the antivenom is not stored cold; or it is given too late, after tissue damage or paralysis is established. In Nigeria, which records tens of thousands of bites a year, hospitals report recurrent shortages even as demand rises.\n\nFixing this means stock at the right level of the health system, removal of out-of-pocket costs, better roads and emergency transport, and training for health workers to recognise envenoming and give antivenom early. Nigeria's plan to produce antivenom domestically through a state-owned company is one attempt to shorten the supply chain — the same logic that has regional vaccine manufacturing in Africa.",
      refs: ["access-and-pricing", "community-health-workers", "snake-antivenom", "who"],
    },
    {
      id: "diagnostics",
      title: "Diagnosis: which snake, and is it even envenoming?",
      body:
        "Not every bite injects venom, and antivenom carries real risks including severe allergic reactions, so the decision to give it depends on recognising envenoming — progressive swelling, coagulopathy, paralysis — rather than on identifying the snake. In practice most bites are treated on syndrome and geography, which is why antivenoms are manufactured as regional polyvalent products.\n\nA rapid diagnostic that identified the biting species or the venom in the patient would change management, and work is under way on venom-detection assays and on-the-spot approaches. At present most of the world has no such test, and the standard tools — coagulation tests and clinical assessment — are what a district hospital can do. Improving that, and the 20-minute tests in development, is one of the field's clearest unmet needs.",
      refs: ["diagnostics-gap", "molecular-pcr", "who"],
    },
  ],

  drugs: ["snake-antivenom"],
  trials: ["snakebite-antivenom-trials", "varespladib-snakebite", "pan-african-antivenom-cameroon"],
  institutions: ["who", "msf", "lstm"],
  guidelines: ["snakebite-strategy-2019"],
  terms: [],
};
