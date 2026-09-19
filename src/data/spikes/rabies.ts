import type { Spike } from "../merge";

export const rabiesSpike: Spike = {
  tldr: "A virus from animal bites that is almost always fatal once symptoms start and almost always preventable if treated promptly — the target of a global push to reach zero human dog-mediated deaths by 2030.",

  summary:
    "Rabies is transmitted mainly by dog bites and travels along nerves to the brain, causing encephalitis that is nearly uniformly fatal once it begins. Prompt wound washing, a short course of vaccination and, for severe bites, rabies immunoglobulin prevent it essentially every time. Because dogs cause almost all human cases, the disease can be eliminated by vaccinating dogs — the strategy that removed dog-mediated human rabies from much of the Americas and from KwaZulu-Natal in South Africa. \"Zero by 30\", the global strategic plan agreed in 2015, aims for zero human deaths from dog-mediated rabies by 2030. The gap is not scientific: it is access. Most deaths happen where vaccine, immunoglobulin and timely care are unavailable or unaffordable; the cost of plasma-derived immunoglobulin is the single most stubborn obstacle in the treatment pathway; and no WHO-approved test can diagnose rabies before symptoms begin. In the Americas, where dog-mediated rabies is mostly controlled, bats are now the primary source of human infection. By September 2026, three countries — Bhutan, Chile and Mexico — had been validated as having eliminated dog-mediated human rabies.",

  stats: [
    {
      label: "Deaths a year",
      value: "44,203",
      number: 44203,
      unit: "deaths",
      year: 2021,
      geography: "global",
      note: "WHO Global Health Estimates model; earlier estimates ranged up to 59,000",
      source: { label: "WHO — rabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "People receiving PEP a year",
      value: "29 million",
      number: 29,
      unit: "million people",
      year: 2024,
      geography: "global",
      note: "over 29 million people receive human rabies vaccine annually",
      source: { label: "WHO — rabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "Deaths in children under 15",
      value: "40%",
      number: 40,
      unit: "%",
      geography: "global",
      note: "of rabies deaths",
      source: { label: "WHO — rabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "Human cases from dog bites",
      value: "99%",
      number: 99,
      unit: "%",
      geography: "global",
      source: { label: "WHO — rabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "Annual economic cost",
      value: "US$ 8.6 billion",
      number: 8.6,
      unit: "billion USD",
      geography: "global",
      note: "lost lives and livelihoods, medical care and associated costs",
      source: { label: "WHO — rabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "Countries validated free of dog-mediated rabies",
      value: "3",
      number: 3,
      unit: "countries",
      geography: "global",
      note: "Bhutan, Chile and Mexico, as of September 2026",
      source: { label: "WHO — rabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "Intradermal cost saving",
      value: "60–80%",
      unit: "%",
      note: "moving from intramuscular to intradermal administration cuts vaccine cost without losing efficacy, and improves completion",
      source: { label: "WHO — rabies (fact sheet, Sept 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "Average PEP cost",
      value: "≈ US$ 108",
      unit: "USD",
      year: 2018,
      geography: "global",
      note: "plus travel and lost income — unaffordable on US$1–2 a day",
      source: { label: "WHO — rabies (fact sheet, Sept 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    {
      label: "WHO-prequalified human vaccines",
      value: "3",
      number: 3,
      unit: "vaccines",
      year: 2024,
      geography: "global",
      note: "RABIVAX-S, VaxiRab N and VERORAB — the entire WHO-prequalified supply",
      source: { label: "WHO — rabies (fact sheet, Sept 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    },
    { label: "Target", value: "Zero by 30", note: "zero human dog-mediated deaths by 2030" },
    { label: "Dog vaccination needed", value: "≥ 70% coverage", unit: "%", note: "to interrupt transmission; culling dogs does not work" },
  ],

  timeline: [
    {
      date: "1885",
      text: "Louis Pasteur's post-exposure vaccination saves a boy bitten by a rabid dog, founding the vaccine era for rabies.",
    },
    {
      date: "2015",
      text: "Countries and partners call for zero human deaths from dog-mediated rabies by 2030, in the 'Zero by 30' goal.",
      refs: ["who"],
    },
    {
      date: "2018",
      text: "WHO publishes its rabies vaccine position paper, endorsing shorter, cheaper intradermal regimens that stretch scarce vaccine.",
      refs: ["rabies-dose-sparing", "rabies-vaccination"],
    },
    {
      date: "2018",
      text: "The global strategic plan sets out the dog-vaccination and PEP-access route to zero by 2030.",
      refs: ["elimination-roadmap", "one-health-ntd-integration"],
    },
    {
      date: "2024",
      text: "India's national action plan pursues elimination by 2030, combining mass dog vaccination with expanded PEP access.",
      refs: ["one-health-ntd-integration", "access-and-pricing"],
    },
    {
      date: "2024",
      text: "Gavi commits to boosting access to human rabies vaccines in more than 50 countries, bringing rabies into routine immunisation financing.",
      refs: ["gavi", "rabies-vaccination", "united-against-rabies"],
    },
    {
      date: "2025",
      text: "A phase 4 study reports on a rabies monoclonal antibody in category III exposures, advancing an alternative to plasma-derived immunoglobulin.",
      refs: ["rabies-monoclonal-antibody", "rabies-monoclonal-antibodies"],
    },
    {
      date: "2026",
      text: "Chile (14 September) and Bhutan (4 September) are validated by WHO for eliminating dog-transmitted human rabies, joining Mexico — the first three countries validated since the Zero by 30 plan.",
      refs: ["who", "eot", "united-against-rabies"],
    },
  ],

  sections: [
    {
      id: "zero-by-30",
      title: "Zero by 30: where it stands",
      body:
        "The goal is not to treat rabies but to stop it happening, and the route is well established: vaccinate enough dogs to break transmission, and make prompt post-exposure prophylaxis available to anyone bitten. Both halves are proven. The Americas have largely eliminated dog-mediated human rabies, and KwaZulu-Natal in South Africa achieved it with vaccine banks, trained staff and free access to treatment.\n\nProgress overall is slower than the target requires. India carries the largest burden and has committed to a national action plan aligned with 2030; models suggest that expanding PEP access is highly cost-effective across dozens of endemic countries, but that vaccine alone is not enough where dog vaccination coverage is low. The honest reading in 2026 is that zero by 30 is achievable in some countries and unlikely in others, and that the difference is political commitment and money rather than science.",
      refs: ["who", "one-health-ntd-integration", "elimination-roadmap", "access-and-pricing"],
    },
    {
      id: "dog-vaccination",
      title: "Vaccinating dogs is the intervention",
      body:
        "Because dogs cause almost all human rabies, and because rabies does not spread efficiently among dogs unless population density and turnover allow it, sustained vaccination at around 70% coverage interrupts transmission. That threshold is the target of mass dog-vaccination campaigns, and reaching it year after year is the hard part: dogs are free-roaming, unregistered, and owned by people who may not know vaccination is free.\n\nThis is the clearest One Health problem in the NTD list. The intervention sits with veterinary services and municipal authorities, the benefit accrues to human health, and the two budgets rarely speak. Success stories tend to share the same features — a reliable vaccine supply, community engagement and a surveillance system that notices when cases stop.",
      refs: ["one-health-ntd-integration", "rabies-vaccination", "zoonosis", "one-health"],
    },
    {
      id: "dose-sparing",
      title: "Dose-sparing and the regimen problem",
      body:
        "Post-exposure prophylaxis is a course, not a single shot, and every visit is a chance to drop out. WHO's 2018 position paper endorsed shorter intradermal regimens that use a fraction of the vaccine per patient, which means the same stock can treat several times as many bite victims. Getting people to complete the course is as important as starting it, and regimens that finish in a week perform better than those that drag on for a month.",
      refs: ["rabies-dose-sparing", "rabies-postexposure-prophylaxis", "rabies-vaccination"],
    },
    {
      id: "monoclonal",
      title: "Monoclonal antibodies in place of immunoglobulin",
      body:
        "For severe bites, vaccine alone is not enough: the patient needs antibodies immediately, before their own immune response develops. The standard product is human rabies immunoglobulin, derived from the plasma of vaccinated donors — expensive, in chronic short supply, and often simply not available where the bite happened.\n\nMonoclonal antibodies are the fix. Engineered antibodies against the viral glycoprotein can be produced at scale, consistently, without plasma, and two are licensed in India. A 2025 phase 4 study reported results for a monoclonal in category III exposures, and cocktails of antibodies are being evaluated as a second-line option when immunoglobulin is unavailable. The remaining questions are price, whether a single antibody covers the rabies variants in a region, and whether national guidelines will adopt them.",
      refs: ["rabies-monoclonal-antibody", "rabies-glycoprotein", "rabies-postexposure-prophylaxis", "access-and-pricing"],
    },
    {
      id: "why-people-die",
      title: "Why people still die",
      body:
        "Almost every rabies death is a failure of access, not of medicine. The bite happens far from a clinic; the person does not know that a wound must be washed immediately and that the vaccine course must start within hours; the clinic has no vaccine, or has it but charges for it; the immunoglobulin that a severe bite requires is not stocked. By the time symptoms appear, nothing can be done.\n\nThat is why rabies elimination is a health-systems and equity problem. The interventions are old, cheap relative to their benefit, and proven. Closing the gap means free or subsidised PEP, wound-care education, vaccine banks, and surveillance that documents where cases occur so that dog vaccination can be aimed there.",
      refs: ["access-and-pricing", "surveillance-data-gap", "community-health-workers", "stigma-and-disability"],
    },
  ],

  drugs: ["rabies-monoclonal-antibodies"],
  trials: ["rabies-monoclonal-antibody", "rabies-dose-sparing"],
  people: ["louis-nel", "claude-sabeta", "wanda-markotter", "thumbi-mwangi", "katie-hampson"],
  institutions: ["united-against-rabies", "gavi"],
  terms: ["eot", "zoonosis"],
};
