import type { Spike } from "../merge";

export const trachomaSpike: Spike = {
  tldr: "A bacterial eye infection that, after decades of reinfection, turns the eyelashes inward and blinds — and the NTD programme closest to finishing the job.",

  summary:
    "Trachoma is caused by Chlamydia trachomatis and spreads eye to eye through fingers, shared cloths and eye-seeking flies, especially where faces are unwashed and water is scarce. Repeated childhood infections scar the inner eyelid; over years the lid turns inward and the lashes scrape the cornea, causing pain and irreversible blindness. Prevention uses the SAFE strategy — surgery for trichiasis, antibiotics, facial cleanliness and environmental improvement — and it has worked better than almost any other NTD intervention. By January 2026 the number of people globally requiring trachoma interventions had fallen below 100 million for the first time, and twenty-seven countries had been validated as having eliminated trachoma as a public health problem, with at least one in every endemic WHO region. The remaining work is the endgame: the last districts with persistent transmission, the surgery backlog for people already blinded by in-turned lashes, and the fact that mass azithromycin selects for macrolide resistance that could undermine the antibiotic arm of the strategy.",
  stats: [
    {
      label: "People at risk",
      value: "92 million",
      number: 92,
      unit: "million people",
      year: 2026,
      geography: "global",
      note: "live in trachoma-endemic areas (WHO, March 2026)",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "People requiring interventions",
      value: "< 100 million",
      number: 100,
      unit: "million people",
      note: "first time below 100 million, reported January 2026",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Countries where it is a public health problem",
      value: "29",
      number: 29,
      unit: "countries",
      year: 2026,
      geography: "global",
      note: "in at least part of the country",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Countries validated",
      value: "27",
      number: 27,
      unit: "countries",
      geography: "global",
      note: "with at least one in every endemic WHO region",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Blind or visually impaired",
      value: "1.9 million",
      number: 1.9,
      unit: "million people",
      geography: "global",
      note: "about 1.4% of all blindness worldwide",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Antibiotic coverage (2025)",
      value: "47%",
      number: 47,
      unit: "%",
      year: 2025,
      geography: "global",
      note: "47.4 million people treated with antibiotics in 2025",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Azithromycin donated",
      value: "> 1.1 billion doses",
      number: 1.1,
      unit: "billion doses",
      geography: "global",
      note: "by Pfizer through the ITI, extended to 2030",
      source: { label: "International Trachoma Initiative", url: "https://www.trachoma.org/" },
    },
    { label: "Strategy", value: "SAFE", note: "surgery, antibiotics, facial cleanliness, environment" },
    { label: "Leading cause", value: "Infectious blindness worldwide" },
    { label: "Target", value: "Elimination as a public health problem by 2030" },
  ],

  timeline: [
    {
      date: "1998",
      text: "The International Trachoma Initiative is founded and begins managing Pfizer's donation of azithromycin.",
      refs: ["iti", "azithromycin"],
    },
    {
      date: "1998",
      text: "WHO launches the Alliance for the Global Elimination of Trachoma, setting the SAFE strategy as the framework.",
      refs: ["safe-strategy", "who"],
    },
    {
      date: "2006",
      text: "A trial finds that a single dose of azithromycin after trichiasis surgery cuts recurrence by about a third.",
      refs: ["star-trichiasis", "azithromycin"],
    },
    {
      date: "2025",
      text: "Egypt and Fiji are validated, making 27 countries in total and at least one in every endemic region.",
      refs: ["who", "iti"],
    },
    {
      date: "2026",
      text: "WHO reports that the global population requiring trachoma interventions has fallen below 100 million for the first time.",
      refs: ["who", "ictc"],
    },
  ],

  sections: [
    {
      id: "finishing",
      title: "The programme closest to finishing",
      body:
        "Trachoma is the strongest argument that NTD elimination is achievable. The tools are unglamorous and the strategy is a list — surgery for people whose lids have already turned in, repeated mass azithromycin for communities with active infection, face-washing, and water and sanitation — but it has driven prevalence down across whole regions. Twenty-seven countries have been validated as having eliminated it as a public health problem, and the population still needing interventions has fallen below 100 million for the first time.\n\nWhat is left is the hard part. The remaining endemic districts are often the poorest, most remote and most water-scarce, and they are where the 'F' and 'E' of SAFE matter most and are hardest to deliver. Countries that have stopped mass treatment must keep surveying to prove that transmission is really gone, because a district that looks clean on paper and then seeds new infections is the failure mode that would undo the programme.",
      refs: ["who", "elimination-roadmap", "surveillance-data-gap", "ictc"],
    },
    {
      id: "safe",
      title: "SAFE: four interventions, one disease",
      body:
        "The SAFE strategy is the clearest example in the NTD field of matching an intervention to each stage of a disease. Surgery treats trichiasis in people whose eyelids have already turned inward. Antibiotics reduce the pool of infection in the community. Facial cleanliness reduces transmission between children. Environmental improvement — water supply and latrines — attacks the conditions that let the infection spread at all, and flies, which feed on eye and nose discharge, are part of what sanitation disrupts.\n\nThe strategy is deliberately broader than medicine, and that is why trachoma is a useful test of integration. It requires health programmes to work with water and education sectors, and it is one of the reasons WHO now recommends combining preventive chemotherapy with water and sanitation rather than running them separately. Where SAFE has been fully delivered, the results are unambiguous; where one letter has been dropped, elimination is slower.",
      refs: ["safe-strategy", "wash-interventions", "mass-drug-administration", "azithromycin"],
    },
    {
      id: "surgery",
      title: "Surgery, and the recurrence problem",
      body:
        "Trachomatous trichiasis is the stage of the disease that blinds and the stage that surgery addresses: an operation rotates the eyelid so the lashes no longer touch the cornea. It is effective and it is not permanent. Trichiasis returns after surgery in a substantial proportion of patients, and recurrence means renewed pain and renewed risk to the cornea — so a person may need surgery more than once.\n\nResearch has given a clear, cheap way to reduce recurrence: a single dose of azithromycin after surgery cut recurrence by about a third compared with topical tetracycline, and reduced severe recurrence at one year. That finding argues for combining the 'S' and the 'A' of SAFE at the level of the individual patient. It also means surgical programmes need follow-up, which is difficult among the people who need it most — and it means the true burden is not only those awaiting a first operation but everyone whose trichiasis has come back.",
      refs: ["star-trichiasis", "azithromycin", "who", "stigma-and-disability"],
    },
    {
      id: "resistance",
      title: "Azithromycin: scale, donation and the resistance question",
      body:
        "The trachoma programme runs on donated azithromycin — more than 1.1 billion doses from Pfizer, managed by the International Trachoma Initiative, with the donation extended to 2030. That scale is an achievement in itself, and it is also the programme's vulnerability. Mass administration of a macrolide antibiotic to whole communities selects for macrolide resistance in the bacteria that are exposed to it, including pneumococci and other respiratory organisms, not just Chlamydia.\n\nBecause the elimination strategy depends on repeated rounds of azithromycin in affected districts, resistance is a genuine threat to finishing the job, and one reason programmes stop mass treatment as soon as surveys show that it is safe to do so and then rely on surveillance. It places trachoma in the middle of the broader question of antibiotic stewardship: a donated antibiotic has driven a disease to the edge of elimination while simultaneously applying selection pressure that no one finds easy to quantify.",
      refs: ["azithromycin", "macrolide-resistance", "iti", "who-essentials"],
    },
    {
      id: "endgame",
      title: "Grading, mapping and proving it is over",
      body:
        "Trachoma is graded by eye, using the WHO simplified system, in population surveys that decide whether a district needs mass treatment. That makes the programme dependent on human graders, whose agreement varies — which is why photographic grading and artificial intelligence are being adopted to standardise assessment. As prevalence falls, programmes run impact surveys and then surveillance surveys, and the whole endgame rests on these measurements: a country can only be validated when the surveys say transmission has stopped and the evidence survives review.\n\nMolecular testing for C. trachomatis adds a more specific signal than clinical grading, and it is increasingly used in surveillance. The pattern mirrors the rest of the NTD field: the closer a programme gets to elimination, the more it depends on diagnostics sensitive and specific enough to certify an absence — and the more costly that becomes, precisely when the visible disease has gone.",
      refs: ["trachoma-grading", "ai-microscopy", "molecular-pcr", "sensitivity-specificity", "diagnostics-gap"],
    },
  ],

  technologies: ["safe-strategy"],
  trials: ["star-trichiasis"],
  institutions: ["iti", "ictc", "who"],
  terms: ["trichiasis", "macrolide-resistance"],
};
