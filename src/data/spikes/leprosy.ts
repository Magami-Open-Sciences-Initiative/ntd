import type { Spike } from "../merge";

export const leprosySpike: Spike = {
  tldr: "A slow bacterial infection of skin and nerves that is curable but still leaves disability — and whose case numbers have stopped falling despite a prevention strategy that works.",

  summary:
    "Leprosy is caused by Mycobacterium leprae, which grows slowly and prefers the cooler parts of the body: skin and peripheral nerves. It produces numb patches and, in the more severe forms, nerve damage, deformity and blindness. Multidrug therapy — rifampicin, dapsone and clofazimine — cures the infection, and a single dose of rifampicin prevents it in close contacts. The troubling feature of the last decade is that new-case detection has plateaued at around 200,000 a year rather than continuing to fall; 172,717 new cases were reported globally in 2024, a 5.5% decrease from 2023 and far from the trajectory needed for the WHO goal of interrupting transmission. Three countries — India, Brazil and Indonesia — report more than 10,000 cases each, and children account for 5.7% of new cases, with 266 of them already showing grade-2 disability at diagnosis. Those two facts, children and established disability, are the clearest evidence that transmission is continuing and that cases are still being found too late.",
  stats: [
    {
      label: "New cases (2024)",
      value: "172,717",
      number: 172717,
      unit: "cases",
      year: 2024,
      geography: "global",
      note: "−5.5% from 2023",
      source: { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    },
    {
      label: "New cases (2023)",
      value: "182,815",
      number: 182815,
      unit: "cases",
      year: 2023,
      geography: "global",
      note: "−14% from 2022",
      source: { label: "WHO — Global leprosy update (Weekly Epidemiological Record)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    },
    {
      label: "Countries reporting cases",
      value: "> 120",
      number: 120,
      unit: "countries",
      geography: "global",
      source: { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    },
    {
      label: "Countries above 10,000 cases",
      value: "3",
      number: 3,
      unit: "countries",
      geography: "global",
      note: "India, Brazil and Indonesia",
      source: { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    },
    {
      label: "Children among new cases",
      value: "5.7%",
      number: 5.7,
      unit: "%",
      year: 2024,
      geography: "global",
      note: "266 with grade-2 disability at diagnosis",
      source: { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    },
    {
      label: "Post-exposure prophylaxis",
      value: "~57–60%",
      unit: "%",
      note: "risk reduction from single-dose rifampicin",
      source: { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    },
  ],

  timeline: [
    {
      date: "1981",
      text: "WHO recommends multidrug therapy, replacing dapsone monotherapy and preventing resistance.",
      refs: ["rifampicin", "dapsone", "clofazimine"],
    },
    {
      date: "2018",
      text: "WHO recommends single-dose rifampicin as post-exposure prophylaxis for contacts of leprosy patients.",
      refs: ["sdr-pep", "rifampicin"],
    },
    {
      date: "2021",
      text: "The 'Towards Zero Leprosy' global strategy sets 2030 targets, including interruption of transmission in most countries.",
      refs: ["who", "eot"],
    },
    {
      date: "2024",
      text: "The PEOPLE trial reports a 40% reduction in leprosy incidence from double-dose rifampicin prophylaxis in the Comoros and Madagascar.",
      refs: ["people-leprosy-pep", "sdr-pep"],
    },
    {
      date: "2025",
      text: "WHO's global update reports 172,717 new cases for 2024, and frames the remaining task as going 'beyond zero cases' to what elimination really means.",
      refs: ["who", "stigma-and-disability"],
    },
    {
      date: "2025",
      text: "A Phase 3 trial of bedaquiline with rifampicin and clofazimine for multibacillary leprosy continues, alongside a bedaquiline prophylaxis trial.",
      refs: ["bedaquiline", "be-people-leprosy"],
    },
  ],

  sections: [
    {
      id: "plateau",
      title: "The numbers that will not fall",
      body:
        "For a disease with a cheap, effective, donated cure, leprosy's epidemiology is stubborn. New-case detection fell for years, then flattened: 182,815 new cases in 2023 and 172,717 in 2024. Detected cases are only a proxy for transmission, and the plateau has been read two ways — that programmes are finding roughly what is being transmitted, or that they are finding only the cases that present themselves and missing the rest.\n\nThe distribution matters as much as the total. India, Brazil and Indonesia between them report the overwhelming share of cases; fifty-five countries reported none at all, and 117 reported fewer than a thousand. That makes leprosy two different problems: a high-burden problem of sustained transmission in three large countries, and a low-burden problem of finding rare cases and preventing their contacts from developing disease.",
      refs: ["who", "surveillance-data-gap", "diagnostics-gap"],
    },
    {
      id: "prevention",
      title: "Prevention: one dose of rifampicin",
      body:
        "The most important change in leprosy control in the last decade is chemoprophylaxis. A single dose of rifampicin given to household and other close contacts of a patient reduces their risk of developing leprosy by roughly 57–60%, and WHO now recommends contact screening with single-dose rifampicin as post-exposure prophylaxis. It is simple, cheap and does not require identifying who among the contacts is infected.\n\nResearch is pushing the idea further. The PEOPLE trial tested double-dose rifampicin in the Comoros and Madagascar and found a 40% reduction in incidence at population level — evidence that prophylaxis can shift transmission, not just individual risk. Trials are now testing bedaquiline as prophylaxis (BE-PEOPLE), and combinations such as rifampicin with clarithromycin, on the reasoning that a stronger or longer-acting dose might protect more durably. BCG offers some cross-protection but is not a leprosy vaccine, and a purpose-built vaccine remains out of reach.",
      refs: ["sdr-pep", "people-leprosy-pep", "be-people-leprosy", "rifampicin", "vaccine-gap"],
    },
    {
      id: "new-drugs",
      title: "Bedaquiline and the search for a shorter cure",
      body:
        "Multidrug therapy works, but it is long: six months for paucibacillary disease and twelve for multibacillary, and people stop taking it. A shorter regimen would be easier to complete and to supervise. The most promising candidate is bedaquiline, developed for drug-resistant tuberculosis, which has a half-life of about five and a half months and greater activity against M. leprae than rifampicin — properties that make it attractive both as a treatment and as a prophylactic. A Phase 2 trial in Brazil found that bedaquiline monotherapy cleared M. leprae in multibacillary patients, and a Phase 3 trial of bedaquiline combined with rifampicin and clofazimine is under way.\n\nTelacebec, the same tuberculosis drug being tested in Buruli ulcer, is also being explored for leprosy, for the same reason: it is a mycobacterium. The recurring theme is that leprosy's drug pipeline is largely tuberculosis' pipeline, borrowed.",
      refs: ["bedaquiline", "telacebec", "rifampicin", "clofazimine", "drug-repurposing", "ntd-drug-discovery-roadmap"],
    },
    {
      id: "disability",
      title: "Disability, transmission and the grade-2 question",
      body:
        "Leprosy's most useful indicator is not how many cases are found but how much damage has already been done when they are found. Grade-2 disability means visible impairment — a foot ulcer, a clawed hand, an eye that cannot close — present at the moment of diagnosis, and it can only exist if the disease has been progressing unnoticed for months or years. Because children have the shortest possible incubation window, childhood cases are a direct sign of ongoing transmission, and grade-2 disability in a child is a failure of early detection twice over.\n\nThe 2024 figures — 5.7% of new cases in children, 266 of them with grade-2 disability — say that neither transmission nor late presentation has been solved. This is why WHO's framing has shifted from counting cases to what elimination actually means: interrupting transmission so that no child develops the disease, and preventing disability in everyone already infected through early diagnosis, nerve assessment and management of leprosy reactions.",
      refs: ["stigma-and-disability", "community-health-workers", "mhealth-surveillance", "eot"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis and the resistance question",
      body:
        "There is still no simple point-of-care test for leprosy. Diagnosis is clinical, requiring examination of skin patches and peripheral nerves by someone trained to look for sensory loss and nerve thickening, backed up by slit-skin smears that are insensitive in paucibacillary disease and by PCR that few clinics have. Antibody tests exist for research and mapping but do not perform well enough to diagnose an individual.\n\nDrug resistance is the quiet worry. Dapsone resistance drove the move to multidrug therapy in the first place, and rifampicin resistance — confirmed by molecular probes that detect mutations in the RNA polymerase gene — has appeared at low levels. Because leprosy is treated with the same rifampicin used for tuberculosis, resistance surveillance is a shared concern, and WHO maintains sentinel surveillance to track it. Maintaining that surveillance is unglamorous and easy to defund, and it is exactly what protects the cure.",
      refs: ["rna-polymerase", "dapsone", "molecular-pcr", "surveillance-data-gap", "who-essentials"],
    },
  ],

  drugs: ["bedaquiline"],
  trials: ["people-leprosy-pep", "be-people-leprosy"],
  institutions: ["gpzl", "who"],
  terms: ["sdr-pep"],
};
