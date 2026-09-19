import type { Spike } from "../merge";

export const sthSpike: Spike = {
  tldr: "Roundworm, whipworm and hookworm — gut worms that stunt and anaemic children across the tropics, where the drugs have worked for decades but are weakest against the worm that causes the most harm.",

  summary:
    "Soil-transmitted helminths infect about 1.5 billion people. Ascaris and Trichuris are ingested from contaminated food, water or hands; hookworm larvae penetrate bare feet. Heavy infections cause malnutrition, anaemia, poor growth and impaired learning, and hookworm accounts for more than half of the disease burden because of chronic blood loss. Control rests on periodic deworming with albendazole or mebendazole, among the cheapest effective interventions available. The uncomfortable truth is that these drugs work well against Ascaris, moderately against hookworm, and poorly against Trichuris, so the worm that is hardest to treat survives each round. The field has responded in three ways: new drug combinations (moxidectin with albendazole, which cured 69% of trichuriasis in a recent trial), new guidance from WHO in 2024 on accelerating elimination, and a long-running effort to develop a hookworm vaccine. WHO's 2030 target is elimination as a public health problem, defined as reducing moderate-to-heavy intensity infections below 2%.",
  stats: [
    {
      label: "People infected",
      value: "1.5 billion",
      number: 1.5,
      unit: "billion people",
      year: 2024,
      geography: "global",
      note: "about 24% of the world's population",
      source: { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    },
    {
      label: "Children needing treatment",
      value: "> 800 million",
      number: 800,
      unit: "million people",
      geography: "global",
      note: "260 million preschool-age and 654 million school-age children, plus 108 million adolescent girls and 138.8 million pregnant or lactating women",
      source: { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    },
    {
      label: "Strongyloidiasis infections",
      value: "> 600 million",
      number: 600,
      unit: "million people",
      geography: "global",
      note: "S. stercoralis; ivermectin has been available at affordable price since 2021",
      source: { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    },
    {
      label: "Children treated (2021)",
      value: "> 500 million",
      number: 500,
      unit: "million children",
      year: 2021,
      geography: "global",
      note: "62% of all children at risk",
      source: { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    },
    { label: "Hookworm share of burden", value: "> 50%", unit: "%", note: "of STH-related DALYs" },
    { label: "WHO 2030 target", value: "Elimination as a public health problem", note: "moderate-to-heavy infections below 2%" },
    { label: "Single-dose albendazole vs Trichuris", value: "Poor", note: "the weak point of mass treatment" },
    {
      label: "Moxidectin + albendazole",
      value: "69% cure",
      number: 69,
      unit: "%",
      note: "for trichuriasis in a 2025 Phase 3 trial — against 16% for albendazole alone",
      source: { label: "Schnoz et al., Lancet Infect Dis 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40675166/" },
    },
    {
      label: "DALYs lost (2010–2019)",
      value: "−50% or more",
      unit: "%",
      geography: "global",
      note: "the decade of scaled-up preventive chemotherapy",
      source: { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    },
    {
      label: "Women treated via LF programmes",
      value: "> 99 million",
      number: 99,
      unit: "million women",
      note: "women of reproductive age given albendazole through lymphatic filariasis elimination, 2021",
      source: { label: "WHO — soil-transmitted helminth infections (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    },
  ],

  timeline: [
    {
      date: "2001",
      text: "WHO sets a global target of treating at least 75% of school-aged children at risk with preventive chemotherapy.",
      refs: ["who", "mass-drug-administration"],
    },
    {
      date: "2017",
      text: "WHO reframes the STH goal from control toward elimination as a public health problem, with defined 2030 targets.",
      refs: ["who", "elimination"],
    },
    {
      date: "2024",
      text: "WHO releases new guidance to accelerate elimination of schistosomiasis and intestinal helminthiasis, and a separate guideline on the public health control of strongyloidiasis.",
      refs: ["who", "strongyloidiasis"],
    },
    {
      date: "2025",
      text: "A Phase 3 trial reports that moxidectin combined with albendazole cures 69% of trichuriasis, against only 16% for albendazole alone.",
      refs: ["moxidectin", "albendazole"],
    },
    {
      date: "2030",
      text: "The target date for eliminating STH as a public health problem, and for adding control of Strongyloides stercoralis morbidity to the programme.",
      refs: ["who", "eot"],
    },
  ],

  sections: [
    {
      id: "efficacy",
      title: "The drug problem: good for Ascaris, poor for Trichuris",
      body:
        "Albendazole and mebendazole are the cheapest effective medicines in public health, and they are given to hundreds of millions of children a year by teachers and community distributors. But their efficacy is uneven. Against Ascaris they are excellent; against hookworm they are moderate and vary by species, with Necator americanus responding less well than Ancylostoma; against Trichuris trichiura a single dose cures only a minority, and egg reduction rates are modest.\n\nThe practical consequence is that repeated mass treatment suppresses Ascaris and reduces hookworm burden while leaving Trichuris largely untouched, and the worm that survives each round is the one causing significant morbidity in children. It also raises the risk of selecting resistance: individual responses to albendazole are reduced in areas with high drug pressure, an early warning from the same class of drug that has already failed in livestock.",
      refs: ["albendazole", "mebendazole", "beta-tubulin", "funding-gap"],
    },
    {
      id: "combinations",
      title: "Combinations and the newer drugs",
      body:
        "The answer to uneven efficacy is combinations. Moxidectin with albendazole cured 69% of trichuriasis in a 2025 Phase 3 trial, against just 16% for albendazole alone — a 53-point gap — and moxidectin is already approved for onchocerciasis, which means its safety profile in humans is established. Triple-dose albendazole improves results against Ascaris and hookworm but only moderately against Trichuris. Tribendimidine, developed and used in China, acts on a different receptor and is active against worms that respond poorly to benzimidazoles, making it a candidate for rotation.\n\nEmodepside, discussed elsewhere for filarial disease, is also in development for STH and works through a different channel from ivermectin. The strategic point is that a mass-treatment programme should not depend on one drug class, and for Trichuris that dependence has been the weak link for twenty years.",
      refs: ["moxidectin", "albendazole", "tribendimidine", "emodepside", "slo-1", "drug-repurposing"],
    },
    {
      id: "guidance",
      title: "New WHO guidance and the shift to elimination",
      body:
        "WHO's 2024 guidance on accelerating elimination of schistosomiasis and intestinal helminthiasis revised the programme parameters, and a separate 2024 guideline addressed the public health control of strongyloidiasis — a worm transmitted through skin contact with contaminated soil in the same communities, and one that can cause fatal hyperinfection in people given steroids. Adding Strongyloides to the STH agenda matters because it is invisible to the standard stool tests and does not respond well to albendazole.\n\nThe 2030 goal is elimination as a public health problem rather than interruption of transmission, defined by reducing the prevalence of moderate-to-heavy intensity infections below 2%. That threshold is deliberately different from zero: STH cannot easily be eradicated while sanitation and soil remain contaminated, but the morbidity — the anaemia, stunting and poor school performance — can be driven down and kept down. WHO has set six 2030 targets, of which the last is the honest one: universal access to at least basic sanitation and hygiene in STH-endemic areas, without which the drug has to be given forever.",
      refs: ["who", "strongyloidiasis", "elimination", "eot", "wash-interventions"],
    },
    {
      id: "diagnostics",
      title: "Measuring what you treat",
      body:
        "Kato-Katz is the standard way to measure STH infection, and its sensitivity falls as intensity falls — the same problem that afflicts schistosomiasis monitoring. Because the 2030 target turns on the prevalence of moderate and heavy infections, programmes need methods sensitive enough to certify low levels, and increasingly they use concentration techniques such as Mini-FLOTAC, or molecular methods such as quantitative PCR, which detect far more infections but cost more.\n\nDiagnostics are also how resistance would be detected, and there is no routine surveillance for reduced albendazole efficacy in human populations — only research studies. A programme that cannot measure the intensity of infection or the efficacy of its drug is treating blind, which is why diagnostic investment is inseparable from the elimination target.",
      refs: ["kato-katz", "mini-flotac", "molecular-pcr", "diagnostics-gap", "sensitivity-specificity"],
    },
    {
      id: "vaccines-wash",
      title: "Vaccines, WASH and the long game",
      body:
        "Deworming treats infection but does not prevent reinfection, so it must be repeated indefinitely while soil and water remain contaminated. A hookworm vaccine has been pursued for decades and candidates have completed early clinical trials — the rationale being that even a partially protective vaccine that reduced the intensity of infection would add something drugs cannot. The evidence to date is that inducing durable immunity to a worm that has evolved to modulate the human immune response is hard.\n\nThe durable solution is water, sanitation and hygiene, which removes the environmental route of transmission entirely and is what made STH disappear from wealthy countries. Recognising that, WHO now recommends integrating preventive chemotherapy with WASH rather than running them as separate programmes. Deworming buys health now; sanitation is what ends the cycle.",
      refs: ["hookworm-vaccine-candidates", "sabin-vaccine-institute", "wash-interventions", "vaccine-gap", "one-health-ntd-integration"],
    },
  ],

  diagnostics: ["mini-flotac"],
  trials: ["mox-alb-trichuris-phase3", "emodepside-strongyloides"],
  guidelines: ["who-strongyloidiasis-guideline-2024"],
  people: ["stella-kepha", "moudachirou-ibikounle"],
  institutions: ["sabin-vaccine-institute", "who", "ivo-de-carneri"],
  terms: ["strongyloidiasis"],
};
