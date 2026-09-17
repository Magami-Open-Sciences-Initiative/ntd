import type { Spike } from "../merge";

export const onchocerciasisSpike: Spike = {
  tldr: "A blackfly-borne worm that causes relentless itching and, after years, irreversible blindness — and the first disease in the African Region to be eliminated by a country.",

  summary:
    "Onchocerciasis is caused by Onchocerca volvulus, a filarial worm transmitted by blackflies that breed in fast-flowing rivers. Adult worms live up to 15 years in nodules under the skin and release millions of microfilariae that migrate through skin and eye, causing severe dermatitis and slowly progressive, irreversible blindness. Mass treatment with donated ivermectin — once or twice a year, community-directed, at very high coverage — has transformed the disease: transmission has been interrupted across most of Latin America and in parts of Africa, and on 30 January 2025 WHO verified Niger as the first country in the African Region to eliminate it. What remains is harder: years of continued treatment where transmission persists, the risk of resurgence if programmes stop early, areas where Loa loa co-circulation blocks ivermectin, no drug that reliably kills the long-lived adult worms, and diagnostics that are imprecise exactly at the low infection levels that elimination verification requires.",

  stats: [
    { label: "People at risk", value: "> 220 million" },
    { label: "People infected", value: "≈ 15 million", note: "WHO estimate; some analyses put it higher" },
    { label: "Vision loss", value: "≈ 1 million", note: "attributable cases" },
    {
      label: "Countries verified free of transmission",
      value: "5",
      note: "Niger (2025), plus Colombia, Ecuador, Mexico and Guatemala",
    },
    {
      label: "Ivermectin reach, 2024–2025",
      value: "84% of endemic areas",
      note: "88% of those reached effective coverage (WHO)",
    },
    {
      label: "African countries with a focus interrupted",
      value: "11",
      note: "in at least one area, per a 2025 analysis",
    },
  ],

  timeline: [
    {
      date: "2018",
      text: "Moxidectin is approved for onchocerciasis after a trial showing longer microfilarial suppression than ivermectin.",
      refs: ["moxidectin", "moxidectin-oncho"],
    },
    {
      date: "2021",
      text: "The WHO NTD roadmap 2021–2030 sets elimination-of-transmission targets and pushes programmes beyond control.",
      refs: ["elimination-roadmap", "elimination"],
    },
    {
      date: "2023",
      text: "A high-dose ivermectin trial reports greater effect on adult worm viability, strengthening the elimination push.",
      refs: ["ivermectin-dose-oncho", "ivermectin"],
    },
    {
      date: "2025",
      text: "WHO verifies Niger as the first country in the African Region to eliminate onchocerciasis — the fifth globally.",
      refs: ["who", "eot"],
    },
    {
      date: "2025",
      text: "Emodepside's Phase II part 1 meets its criteria against juvenile and adult worms; paediatric ivermectin work joins IVM-KIDS.",
      refs: ["emodepside-part2-oncho", "ivm-kids-paediatric", "emodepside"],
    },
  ],

  sections: [
    {
      id: "elimination-status",
      title: "Where elimination stands",
      body:
        "The Americas finished first. Colombia, Ecuador, Mexico and Guatemala have all been verified by WHO as having eliminated transmission, the result of twice-yearly treatment and strong surveillance. In Africa, Niger was verified in January 2025 — the first country on the continent — and Senegal is close behind. A 2025 analysis found that eleven African countries have interrupted transmission in at least one focus, which is not the same as country-wide verification but shows the arc is real.\n\nThe cautionary case is Burkina Faso, where transmission was thought interrupted and then resurged after interventions stopped. That is the central lesson of the elimination era: treatment has to continue until the adult worms have died out naturally, which can take 15 years, and stopping early can undo a decade of work. WHO's 2024–2025 progress report found ivermectin was distributed in 84% of known endemic implementation units, of which 88% reached effective coverage — good numbers, but the last units are the hardest to reach.",
      refs: ["who", "elimination-roadmap", "eot"],
    },
    {
      id: "loa-loa",
      title: "The Loa loa problem",
      body:
        "Ivermectin kills microfilariae quickly, and in people carrying a heavy load of Loa loa — a different filarial worm — that sudden die-off can cause severe or fatal neurological reactions. As a result, mass treatment is not given in parts of Central Africa where the two worms overlap, leaving millions of people in exactly the areas with the highest onchocerciasis burden without the tool that works everywhere else.\n\nThis is the strongest argument for a drug with a different mechanism or a safer profile. Emodepside and oxfendazole are both being tested partly because they could be used where ivermectin cannot.",
      refs: ["ivermectin", "emodepside", "oxfendazole", "ewhorm-oxfendazole"],
    },
    {
      id: "pipeline",
      title: "The drug pipeline: beyond ivermectin",
      body:
        "Ivermectin suppresses microfilariae but does not reliably kill the adult worms, so treatment must continue for the worm's lifetime. A macrofilaricide — a drug that kills the adults in one or a few doses — would transform elimination by shortening programmes from fifteen years to a handful.\n\nThree candidates are closest. Moxidectin is approved and lasts longer than ivermectin, but is not yet in mass programmes. Emodepside, which acts on a different channel (SLO-1), met its Phase II part 1 criteria against both juvenile and adult worms, and part 2 will select doses, with recruitment planned for late 2026. Oxfendazole, a benzimidazole used in veterinary medicine, is in Phase II across onchocerciasis, loiasis and trichuriasis through the eWHORM partnership. A fourth project, DNDI-6166, is on hold for lack of funding — a reminder that this pipeline is only as strong as its funding.",
      refs: ["emodepside", "emodepside-part2-oncho", "moxidectin", "oxfendazole", "ewhorm-oxfendazole", "funding-gap"],
    },
    {
      id: "diagnostics-last-mile",
      title: "Diagnostics at the last mile",
      body:
        "Proving that transmission has stopped is a diagnostic problem, and onchocerciasis diagnostics are not well suited to it. Skin snips for microfilariae are invasive and become insensitive as infection falls. The Ov-16 antibody test, which underpins much of the elimination mapping, stays positive for years after the last worm dies — so a positive result in a child means transmission happened, but a positive result in an adult may mean nothing current at all. Molecular and xenomonitoring methods are more specific but demand laboratory capacity.\n\nA 2025 review framed this as the field's binding constraint: programmes are being asked to certify a negative with tools that are imperfect at exactly the levels that matter.",
      refs: ["skin-snip", "antibody-rdt", "molecular-pcr", "xenomonitoring", "diagnostics-gap", "eot"],
    },
    {
      id: "control-to-elimination",
      title: "From control to elimination: what changed",
      body:
        "For thirty years the goal was control — prevent blindness by suppressing microfilariae. The shift to elimination came from three things: evidence that ivermectin could interrupt transmission rather than merely suppress disease, the arrival of a rapid antibody test that could tell whether a child had ever been infected, and the 2021–2030 WHO roadmap setting explicit elimination targets.\n\nElimination changes the arithmetic. It demands higher coverage, twice-yearly treatment in some settings, vector control alongside drugs, and a surveillance system able to detect a single residual focus. It also means the decision to stop is as consequential as the decision to start.",
      refs: ["elimination", "mass-drug-administration", "blackfly", "who"],
    },
    {
      id: "morbidity",
      title: "Morbidity and the people already blind",
      body:
        "Onchocerciasis control is a public-health success that leaves a residual population behind: those already blinded or living with severe, chronic skin disease. Their needs are not met by preventing new infections. Onchocercal skin disease causes years of disabling itch, and the depigmentation and thickening that follow carry stigma of their own.\n\nThis is the part of NTD work that drug donations do not address, and it is why rehabilitation, skin care and mental-health support belong in an onchocerciasis programme alongside ivermectin.",
      refs: ["stigma-and-disability", "daly"],
    },
  ],

  drugs: ["oxfendazole"],
  trials: ["emodepside-part2-oncho", "ewhorm-oxfendazole", "ivm-kids-paediatric"],
  institutions: ["gone", "dndi"],
  terms: ["eot"],
};
