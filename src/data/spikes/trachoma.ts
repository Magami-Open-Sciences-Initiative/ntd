import type { Spike } from "../merge";

export const trachomaSpike: Spike = {
  tldr: "A bacterial eye infection that, after decades of reinfection, turns the eyelashes inward and blinds — and the NTD programme closest to finishing the job.",

  summary:
    "Trachoma is caused by Chlamydia trachomatis and spreads eye to eye through fingers, shared cloths and eye-seeking flies, especially where faces are unwashed and water is scarce. Repeated childhood infections scar the inner eyelid; over years the lid turns inward and the lashes scrape the cornea, causing pain and irreversible blindness. Women are blinded up to four times as often as men. Prevention uses the SAFE strategy — surgery for trichiasis, antibiotics, facial cleanliness and environmental improvement — and it has worked better than almost any other NTD intervention: by 4 September 2026, thirty-three countries had been validated as having eliminated trachoma as a public health problem, across every WHO region. The remaining work is the endgame: about 92 million people still living in endemic areas (March 2026), the surgery backlog for people already blinded by in-turned lashes, and the fact that mass azithromycin selects for macrolide resistance that could undermine the antibiotic arm of the strategy.",
  stats: [
    {
      label: "People at risk",
      value: "92 million",
      number: 92,
      unit: "million people",
      year: 2026,
      geography: "global",
      note: "live in trachoma-endemic areas (WHO, March 2026 data)",
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
      value: "33",
      number: 33,
      unit: "countries",
      year: 2026,
      geography: "global",
      note: "as of 4 September 2026, including Algeria, China, Egypt, Ghana, India, Malawi, Nepal, Senegal and Timor-Leste",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Blind or visually impaired",
      value: "1.9 million",
      number: 1.9,
      unit: "million people",
      geography: "global",
      note: "about 1.4% of all blindness worldwide; women affected up to 4× as often as men",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Trichiasis surgery (2025)",
      value: "98,829",
      number: 98829,
      unit: "operations",
      year: 2025,
      geography: "global",
      note: "people who received corrective surgery for trachomatous trichiasis",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Antibiotic treatment (2025)",
      value: "47.4 million (47% coverage)",
      number: 47.4,
      unit: "million people",
      year: 2025,
      geography: "global",
      note: "global antibiotic coverage 47%",
      source: { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    },
    {
      label: "Economic cost",
      value: "US$2.9–5.3 billion/year",
      unit: "USD/year",
      geography: "global",
      note: "lost productivity from blindness and visual impairment; rising to US$8 billion when trichiasis is included",
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
    { label: "Target", value: "Elimination as a public health problem by 2030" },
  ],

  timeline: [
    {
      date: "1993",
      text: "WHO adopts the SAFE strategy — surgery, antibiotics, facial cleanliness, environmental improvement — as the framework for trachoma control.",
      refs: ["safe-strategy", "who"],
    },
    {
      date: "1996",
      text: "WHO launches the Alliance for the Global Elimination of Trachoma by 2020 (GET2020).",
      refs: ["who"],
    },
    {
      date: "1998",
      text: "The World Health Assembly adopts resolution WHA51.11, targeting elimination of trachoma as a public health problem, and the International Trachoma Initiative is founded to manage Pfizer's azithromycin donation.",
      refs: ["iti", "azithromycin", "who"],
    },
    {
      date: "2006",
      text: "The STAR trial finds that a single dose of azithromycin after trichiasis surgery cuts recurrence by about a third.",
      refs: ["star-trichiasis", "azithromycin"],
    },
    {
      date: "2025",
      text: "Papua New Guinea, Burundi, Senegal and Fiji are validated, taking the total to 26 and covering every endemic WHO region.",
      refs: ["who", "iti"],
    },
    {
      date: "2026",
      text: "By 4 September 2026, thirty-three countries had been validated as having eliminated trachoma as a public health problem, with 92 million people still at risk (March 2026 data).",
      refs: ["who", "ictc"],
    },
  ],

  sections: [
    {
      id: "finishing",
      title: "The programme closest to finishing",
      body:
        "Trachoma is the strongest argument that NTD elimination is achievable. The tools are unglamorous and the strategy is a list — surgery for people whose lids have already turned in, repeated mass azithromycin for communities with active infection, face-washing, and water and sanitation — but it has driven prevalence down across whole regions. Thirty-three countries have been validated as having eliminated it as a public health problem, and an estimated 92 million people remain at risk (March 2026 data).\n\nWhat is left is the hard part. The remaining endemic districts are often the poorest, most remote and most water-scarce, and they are where the 'F' and 'E' of SAFE matter most and are hardest to deliver. Countries that have stopped mass treatment must keep surveying to prove that transmission is really gone, because a district that looks clean on paper and then seeds new infections is the failure mode that would undo the programme.",
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
