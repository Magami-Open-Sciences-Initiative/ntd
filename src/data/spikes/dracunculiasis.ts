import type { Spike } from "../merge";

export const dracunculiasisSpike: Spike = {
  tldr: "A metre-long worm that emerges through the skin a year after drinking contaminated water — and in 2025 it reached its lowest human case count ever, ten, putting eradication within reach.",

  summary:
    "Guinea worm has no drug and no vaccine. It is prevented entirely by safe water, filtering, and containing every case so that no larvae reach water. The campaign has worked: cases have fallen from an estimated 3.5 million a year in the 1986 baseline to ten human cases worldwide in 2025, the lowest ever recorded, down from fifteen in 2024 and thirteen in 2022. Only three countries reported human cases, and 200 countries have now been certified free of the disease. What stands between the world and eradication is the animal reservoir. The same parasite infects dogs, cats and baboons, and in Chad it also appears to use fish and frogs as paratenic hosts — hosts in which the larvae survive without developing — which breaks the simple assumption that transmission runs only through drinking water. Cameroon, where animal infections now concentrate, showed how fragile progress is when surveillance lapses. Eradication is a matter of years, but the last years are the hardest.",

  stats: [
    {
      label: "Human cases, 2025",
      value: "10",
      number: 10,
      unit: "cases",
      year: 2025,
      geography: "global",
      note: "lowest ever recorded; provisional",
      source: { label: "The Carter Center — Guinea worm disease case totals", url: "https://www.cartercenter.org/health/guinea_worm/case-totals.html" },
    },
    {
      label: "Human cases, 2024",
      value: "13",
      number: 13,
      unit: "cases",
      year: 2024,
      geography: "global",
      note: "provisional (WHO); 2023: 14, 2022: 13, 2015: 22",
      source: { label: "WHO — dracunculiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/dracunculiasis-(guinea-worm-disease)" },
    },
    {
      label: "Cases by country, 2025",
      value: "Chad 4, Ethiopia 4, South Sudan 2",
      note: "10 human cases across three countries",
    },
    {
      label: "Animal infections, 2024",
      value: "661",
      number: 661,
      unit: "animals",
      year: 2024,
      geography: "Africa",
      note: "Cameroon 312, Chad 281 (234 dogs and 47 cats), Angola 36 dogs, Mali 29, Ethiopia 2 baboons, South Sudan 1 cat",
      source: { label: "WHO — dracunculiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/dracunculiasis-(guinea-worm-disease)" },
    },
    {
      label: "Countries certified free",
      value: "200",
      number: 200,
      unit: "countries and territories",
      year: 2024,
      geography: "global",
      note: "within 188 Member States; six still to certify",
      source: { label: "WHO — dracunculiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/dracunculiasis-(guinea-worm-disease)" },
    },
    { label: "Target", value: "Eradication by 2030", note: "WHO goal, covering animals as well as people" },
  ],

  timeline: [
    {
      date: "1986",
      text: "The Guinea Worm Eradication Programme begins with the Carter Center and WHO, at an estimated 3.5 million cases a year.",
      refs: ["carter-center", "who"],
    },
    {
      date: "1989",
      text: "Annual cases fall below one million for the first time.",
      refs: ["carter-center"],
    },
    {
      date: "2010s",
      text: "Infections linked to fish and frog paratenic hosts complicate elimination in Chad, and dog infections become the dominant burden.",
      refs: ["paratenic-host"],
    },
    {
      date: "2023",
      text: "Fourteen human cases are reported worldwide, the second-lowest count on record at the time.",
      refs: ["cdc"],
    },
    {
      date: "2025",
      text: "The World Health Assembly adopts resolution WHA78.14, renewing the global commitment to accelerate eradication.",
      refs: ["who", "carter-center"],
    },
    {
      date: "2026",
      text: "The Carter Center reports only ten human cases worldwide in 2025 — a 33% fall from 2024 and the lowest ever recorded.",
      refs: ["carter-center", "cdc"],
    },
  ],

  sections: [
    {
      id: "ten-cases",
      title: "Ten cases: the smallest number in history",
      body:
        "Ten human cases of guinea worm were reported worldwide in 2025, a third fewer than the fifteen of 2024 and the lowest number ever recorded. They occurred in just three countries: four each in Chad and Ethiopia, and two in South Sudan. Since the campaign began in 1986, incidence has fallen by more than 99.99%.\n\nEach case is investigated individually, because the parasite's epidemiology now turns on single events: one person who enters a water source with an emerging worm can seed a whole village's infections a year later. That is why the programme's core metrics are not just case counts but containment rates — the proportion of cases detected before the worm can release larvae into water — and why the reward for reporting a case is a meaningful part of the strategy.",
      refs: ["case-containment", "carter-center", "community-health-workers"],
    },
    {
      id: "animals",
      title: "The animal reservoir and the paratenic-host puzzle",
      body:
        "The worm infects dogs, cats and baboons as well as people, and it is the same species, Dracunculus medinensis. Eradication therefore requires stopping infection in animals too, and animal infections now outnumber human cases by a factor of dozens — 664 in 2024 alone.\n\nChad added a further complication. There, infections have been linked to fish and frogs that act as paratenic hosts: the larvae survive inside them without developing, so a person or dog that eats the fish or frog can become infected. That breaks the old model in which the only route was drinking water containing infected copepods, and it means interventions designed around water alone may not be sufficient. Understanding and interrupting this route is the central scientific problem standing between the programme and zero.",
      refs: ["paratenic-host", "cdc", "genomic-surveillance", "wash-interventions"],
    },
    {
      id: "cameroon-chad",
      title: "Cameroon's setback and Chad's progress",
      body:
        "Chad was once the global epicentre of animal infections. It has now reported six consecutive years of progress, with infections in domestic animals falling by roughly 47%. That is the result of sustained water treatment, tethering of dogs, surveillance and community engagement.\n\nCameroon shows the opposite lesson. After new infections were discovered, a slow remobilisation allowed indigenous transmission to become re-established, seeded by infected community-owned dogs crossing the border from Chad. A single lapse in surveillance and response in one country can undo years of progress in a neighbour, which is why the programme is coordinated regionally rather than nationally, and why cross-border dog movement is now a specific focus.",
      refs: ["carter-center", "cdc", "surveillance-data-gap", "one-health-ntd-integration"],
    },
    {
      id: "what-requires",
      title: "What eradication now requires",
      body:
        "There are no scientific breakthroughs left to make. The tools are safe water, water treatment with larvicide, cloth filters, case containment, cash rewards for reporting cases, and intensive surveillance in the last endemic villages — plus, for the animal reservoir, tethering dogs, treating water sources where dogs drink, and investigating every animal infection.\n\nThe obstacles are logistical and human. Endemic villages are among the most remote and least served in the world; some are in conflict zones, and insecurity in parts of the Sahel interrupts surveillance directly. Eradication programmes must keep funding and attention on a disease that has almost disappeared, which is exactly when political will is hardest to sustain — the classic problem of the last mile.",
      refs: ["case-containment", "funding-gap", "climate-expansion", "mhealth-surveillance"],
    },
    {
      id: "certification",
      title: "Certification: 200 countries and six to go",
      body:
        "Certification is the formal proof that a country is free of transmission, and it requires years of documented surveillance rather than the mere absence of reported cases. WHO has now certified 200 countries as free of dracunculiasis; six remain uncertified, including the countries still reporting cases and those where transmission has recently stopped but not yet been verified over time.\n\nThe 2030 target covers animals as well as people, so certification will depend on demonstrating that the dog and wildlife reservoir is also closed. Guinea worm would be only the second human disease ever eradicated, after smallpox — and the first to be eradicated without a vaccine or a drug, using water, behaviour and surveillance alone.",
      refs: ["who", "eot", "elimination", "carter-center"],
    },
  ],

  technologies: ["case-containment"],
  institutions: ["carter-center", "who", "cdc", "gates-foundation", "ntd-support-center"],
  terms: ["paratenic-host"],
};
