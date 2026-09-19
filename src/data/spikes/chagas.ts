import type { Spike } from "../merge";

export const chagasSpike: Spike = {
  tldr: "An American trypanosome infection spread by kissing bugs, blood transfusion and from mother to child that damages the heart decades after it begins — and that most of the people carrying it have never been diagnosed.",

  summary:
    "Chagas disease is caused by Trypanosoma cruzi and affects about 8 million people, mostly in Latin America, though migration has made it a concern in the United States, Europe and beyond. The acute phase is usually mild and unnoticed; up to a third of those infected develop chronic cardiac disease with arrhythmias, heart failure or sudden death, and some develop digestive complications. Two old drugs, benznidazole and nifurtimox, cure it well in the acute phase and in children but are far less effective once the heart is involved, and the sixty-day course with frequent side effects means many people never finish treatment. The defining fact of the disease is the care gap: the great majority of infected people do not know it, so they are neither treated nor monitored. PAHO's Elimination Initiative and the Unitaid-funded CUIDA Chagas project are now built around closing that gap, with congenital transmission — from mother to newborn — as the priority route. A better drug remains elusive: fexinidazole, which looked promising in an early Chagas trial, did not eliminate the parasite in follow-up (FEXI-12), and the next candidate, the oral CPSF3 inhibitor AN2-502998, is expected to begin Phase II proof-of-concept testing in late 2026.",

  stats: [
    {
      label: "People infected",
      value: "8 million",
      number: 8,
      unit: "million people",
      year: 2026,
      geography: "global (mainly Latin America)",
      note: "WHO estimate, April 2026",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
    {
      label: "Deaths a year",
      value: "> 10,000",
      number: 10000,
      unit: "deaths",
      year: 2026,
      geography: "global",
      note: "WHO estimate; PAHO estimates about 12,000",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
    {
      label: "At risk",
      value: "> 100 million",
      number: 100,
      unit: "million people",
      geography: "global",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
    {
      label: "Undiagnosed",
      value: "The great majority",
      note: "most infected people have never been tested, let alone treated; DNDi estimates fewer than 10% know their status",
      source: { label: "DNDi — Chagas disease", url: "https://dndi.org/diseases/chagas/" },
    },
    {
      label: "Vector transmission verified interrupted",
      value: "8 countries",
      number: 8,
      unit: "countries",
      geography: "Americas",
      note: "verified interruption of domiciliary vectorial transmission: full territory in Chile, Paraguay and Uruguay, plus part of the territory in Argentina, Brazil, Colombia, Peru and Bolivia (WHO 2026); 17 countries claimed interruption under the sub-regional initiatives (PAHO)",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
    {
      label: "Blood donors screened",
      value: "21",
      number: 21,
      unit: "endemic countries",
      geography: "Americas",
      note: "universal screening in all blood banks of the 21 continental Latin American countries",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
    {
      label: "Congenital transmission",
      value: "Now the main route",
      note: "over 10,000 new cases a year worldwide",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
    {
      label: "Treatment course",
      value: "60 days (benznidazole); 60–90 days (nifurtimox)",
      number: 60,
      unit: "days",
      note: "benznidazole or nifurtimox; adverse reactions in up to 40% of adults",
      source: { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    },
  ],

  timeline: [
    {
      date: "1909",
      text: "Carlos Chagas identifies the parasite, its triatomine vector and the human disease — a rare single discovery of all three.",
    },
    {
      date: "1991",
      text: "The Southern Cone Initiative begins, using house spraying and blood-bank screening to interrupt transmission across the region.",
      refs: ["indoor-residual-spraying", "triatomine-bug"],
    },
    {
      date: "2015",
      text: "The BENEFIT trial reports that benznidazole reduced parasite detection but did not improve cardiac outcomes in established disease.",
      refs: ["benefit-chagas"],
    },
    {
      date: "2017",
      text: "Benznidazole is approved in the United States for children aged 2 to 12, widening access outside Latin America.",
      refs: ["benznidazole"],
    },
    {
      date: "2022",
      text: "PAHO and Unitaid launch CUIDA Chagas, a project to eliminate congenital transmission in Bolivia, Brazil, Colombia and Paraguay.",
      refs: ["cuida-chagas", "paho", "unitaid"],
    },
    {
      date: "2024",
      text: "The FEXI-12 follow-up trial confirms fexinidazole's tolerability but not its ability to eliminate the parasite, ending its Chagas monotherapy candidacy.",
      refs: ["fexinidazole-chagas", "fexinidazole"],
    },
    {
      date: "2026",
      text: "DNDi and AN2 report 100% parasite elimination in naturally infected primates and a clean Phase 1 profile for the oral CPSF3 inhibitor AN2-502998, with a Phase II proof-of-concept study to begin in Latin America late in the year.",
      refs: ["dndi", "an2-502998", "an2-502998-phase2"],
    },
  ],

  sections: [
    {
      id: "care-gap",
      title: "The diagnosis and treatment gap",
      body:
        "Chagas disease is a case study in what happens when a disease has a cheap, effective treatment that almost nobody receives. The great majority of infected people are undiagnosed, because the chronic phase is silent for decades and because testing is not routine even in endemic regions. Of those diagnosed, only a small minority are treated.\n\nThe reasons are practical: two different serological tests are needed to confirm a diagnosis, which is harder than it sounds in a rural clinic; the treatment course is sixty days; and the side effects — rash, neuropathy, bone-marrow suppression — cause many patients to stop. A doctor who is not sure a patient will finish a difficult course, for a disease that may never cause symptoms, faces a genuine dilemma. The field's answer is to treat children and women of reproductive age, where the benefit is clearest, and to find people earlier through congenital screening rather than waiting for heart disease.",
      refs: ["chagas-serology", "benznidazole", "nifurtimox", "access-and-pricing", "diagnostics-gap"],
    },
    {
      id: "failed-drugs",
      title: "What failed: fexinidazole and the hunt for a better drug",
      body:
        "Fexinidazole is one of the great NTD success stories for sleeping sickness — the first all-oral cure. It was therefore reasonable to hope it would work for Chagas disease, which is caused by a related trypanosome. An early Phase 2 trial in chronic Chagas was encouraging enough to raise hopes, showing high efficacy at treatment durations of less than three days, but the study was interrupted for tolerability reasons.\n\nThe fuller answer came later and was negative. A follow-up trial confirmed that fexinidazole was well tolerated but found that it did not eliminate the parasite — the drug was not effective for Chagas. This is the ordinary, unglamorous reality of antiparasitic drug development, and it is why DNDi's pipeline has moved on. A new Phase II proof-of-concept study with AN2 is planned to begin in Latin America in late 2026, drawing on trial sites and infrastructure built over years. Until something works, the field is stuck with two drugs from the 1960s and 1970s.",
      refs: ["fexinidazole-chagas", "dndi", "cruzain", "cyp51", "trypanosome-nitroreductase", "ntd-drug-discovery-roadmap", "funding-gap"],
    },
    {
      id: "elimination-push",
      title: "PAHO's elimination push and CUIDA Chagas",
      body:
        "The Americas have a regional elimination framework — PAHO's Elimination Initiative — with Chagas disease named among the targets, supported by a published monitoring framework and a set of costed 'best buys'. Rather than aiming at zero transmission everywhere at once, it focuses on the routes that can be closed: vector transmission in houses, transmission through blood and organs, and transmission from mother to child.\n\nCUIDA Chagas, funded by Unitaid and implemented with PAHO in Bolivia, Brazil, Colombia and Paraguay, is the congenital arm. It is testing shorter and simpler ways to screen pregnant women and treat newborns, because the current pathway — confirm with two serological tests, then treat for sixty days — loses most people along the way. Elimination of congenital transmission is achievable with existing tools; the barrier is the health system, not the science.",
      refs: ["paho", "cuida-chagas", "unitaid", "congenital-chagas", "elimination"],
    },
    {
      id: "transmission",
      title: "From the triatomine to the blood bank and the newborn",
      body:
        "The classic route is a triatomine bug feeding at night and defecating near the bite, so that the person scratches the parasite into the wound. That route has been largely closed in the Southern Cone by house spraying, plastering walls and replacing thatched roofs, and vector transmission has been interrupted in all or part of seventeen countries.\n\nAs vector transmission fell, the other routes became relatively more important. Blood transfusion transmission was stopped in most of Latin America by universal donor screening, though it remains a risk where screening is absent. Organ transplantation and congenital transmission — the parasite crossing the placenta — are now the routes that keep the disease alive in cities and in non-endemic countries, which is why screening pregnant women and screening donated blood are the highest-yield interventions available.",
      refs: ["triatomine-bug", "chagas-serology", "congenital-chagas", "paho"],
    },
    {
      id: "vector-map",
      title: "Vector control's unfinished map",
      body:
        "The Southern Cone success has a boundary. Triatoma infestans, the main domestic vector, was driven out of houses across a vast area — but in the Gran Chaco and especially in the Amazon basin, transmission involves sylvatic bugs and animal reservoirs that house spraying cannot reach. In the Amazon, the more common route is foodborne: contamination of fruit juices such as açaí by infected bugs or their faeces, producing outbreaks of acute disease.\n\nPyrethroid resistance has also appeared in the Gran Chaco, eroding the tool that worked for thirty years. The result is a two-speed epidemic: near-elimination in some regions, persistent or under-recognised transmission in others, with migration carrying infection to cities where neither patients nor doctors expect it.",
      refs: ["triatomine-bug", "insecticide-resistance-crisis", "climate-expansion", "surveillance-data-gap"],
    },
    {
      id: "living-with",
      title: "Living with Chagas: the cardiac burden",
      body:
        "For the roughly one in three infected people who develop cardiac disease, the parasite is only part of the problem. Chagas cardiomyopathy causes dangerous arrhythmias, heart failure and sudden death, and it often strikes people in their forties and fifties, in the middle of working life. Managing it needs rhythm monitoring, heart-failure treatment, anticoagulation for some patients and, for a minority, a pacemaker or defibrillator.\n\nAccess to that care is uneven, and the implantable devices that prevent sudden death are expensive and concentrated in cities. This is the part of Chagas that migration has exported: cardiologists in Madrid, Miami and Geneva now see patients whose disease was acquired decades earlier in Latin America, and diagnosing it requires thinking of a disease that is not on the list for the country they are practising in.",
      refs: ["stigma-and-disability", "access-and-pricing", "who", "daly"],
    },
  ],

  trials: ["benefit-chagas", "fexinidazole-chagas", "multibenz-2024", "nuestroben-short-bzn"],
  institutions: ["paho", "cuida-chagas", "dndi", "fiocruz", "cideim", "who", "unitaid"],
  terms: ["congenital-chagas"],
};
