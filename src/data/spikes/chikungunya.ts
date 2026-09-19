import type { Spike } from "../merge";

const WHO_CHIK: { label: string; url: string } = {
  label: "WHO — chikungunya (fact sheet)",
  url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya",
};

export const chikungunyaSpike: Spike = {
  tldr: "An Aedes-borne virus that causes sudden fever and joint pain so severe it is hard to move, and can leave a minority of patients with pain for months or years — with one vaccine withdrawn in the US and the other expanding, while outbreaks surge on four continents.",

  summary:
    "Chikungunya is caused by the chikungunya virus (CHIKV), first identified in Tanzania in 1952, and transmitted by the same day-biting Aedes aegypti and Aedes albopictus mosquitoes as dengue and Zika. It begins abruptly, 4–8 days after a bite, with fever and severe, often debilitating joint pain; a minority of patients have joint pain for weeks, months or even years, which is a substantial economic burden in its own right. Newborns infected around delivery and older adults with underlying conditions are at higher risk of severe disease; deaths are uncommon and usually associated with pre-existing conditions. There is no specific antiviral — care is fever and pain control — though the nsP2 protease now has oral leads with mouse efficacy. Outbreaks have become more frequent and widespread since 2004, with the virus now reported in 119 countries and a major resurgence in 2025–2026 across the Americas (313,000 cases), Réunion (54,500 cases, 45 deaths) and Europe. Two vaccines are licensed: Ixchiq, whose US licence was suspended in August 2025 and withdrawn in January 2026 after chikungunya-like serious events, and Vimkunya, a virus-like-particle vaccine now approved in the US, EU, UK and Switzerland and submitted in Brazil.",

  stats: [
    {
      label: "Cases reported (2025)",
      value: "502,264 (186 deaths)",
      number: 502264,
      unit: "cases",
      year: 2025,
      geography: "global, 41 countries and territories",
      note: "208,335 confirmed; Americas 313,132 cases with 170 deaths; resurgence ongoing into 2026",
      source: { label: "PAHO — chikungunya epidemiological alert (Feb 2026)", url: "https://www.paho.org/en/documents/epidemiological-alert-chikungunya-10-february-2026" },
    },
    {
      label: "Vaccines licensed",
      value: "2",
      number: 2,
      unit: "vaccines",
      note: "Ixchiq (US licence withdrawn January 2026) and Vimkunya (US, EU, UK, Switzerland; Brazil submission 2026)",
      source: WHO_CHIK,
    },
    {
      label: "Ixchiq US withdrawal (2026)",
      value: "Licence suspended Aug 2025, withdrawn Jan 2026",
      note: "FDA cited chikungunya-like serious events including hospitalisations and encephalitis with one death; EMA lifted its elderly restriction; Brazil rollout continues",
      source: { label: "FDA — Ixchiq safety communication (Aug 2025)", url: "https://www.fda.gov/safety/medical-product-safety-information/fda-update-safety-ixchiq-chikungunya-vaccine-live-fda-suspends-biologics-license-fda-safety" },
    },
  ],

  timeline: [
    {
      date: "1952",
      text: "Chikungunya virus is first identified, in the United Republic of Tanzania; the name means 'that which bends up' in Kimakonde.",
      refs: ["who"],
    },
    {
      date: "2004",
      text: "Outbreaks become more frequent and widespread, driven partly by viral adaptation to Aedes albopictus and spread into immunologically naïve populations.",
      refs: ["aedes-albopictus", "climate-expansion"],
    },
    {
      date: "2023",
      text: "Ixchiq becomes the first vaccine of any kind licensed against chikungunya, a single-dose live-attenuated product.",
      refs: ["ixchiq"],
    },
    {
      date: "2025",
      text: "The FDA and CDC recommend pausing use of Ixchiq in people aged 60 and over after serious neurological and cardiac events.",
      refs: ["ixchiq"],
    },
    {
      date: "2025",
      text: "A second chikungunya vaccine, the virus-like-particle vaccine Vimkunya, is licensed in the US, EU and UK, giving the field two products.",
      refs: ["vimkunya"],
    },
    {
      date: "2025",
      text: "The FDA suspends Ixchiq's US licence over chikungunya-like serious events; Réunion's outbreak (54,500 confirmed cases) becomes the first mass-use setting for the vaccine.",
      refs: ["ixchiq"],
    },
    {
      date: "2026",
      text: "Valneva withdraws Ixchiq's US licence while Brazil approves locally made VLA1555 and launches a pilot Ixchiq campaign; Vimkunya gains Swiss approval and starts a paediatric Phase 3.",
      refs: ["ixchiq", "vimkunya", "butantan-chik-vla1555", "ixchiq-brazil-pvs", "vimkunya-pediatric"],
    },
  ],

  sections: [
    {
      id: "clinical",
      title: "A fever that leaves its mark on the joints",
      body:
        "Chikungunya is easy to confuse with dengue, Zika and other arboviral fevers because they share a vector, a season and a symptom set. What distinguishes it is the joint pain: it starts abruptly with fever, is often severe enough that people cannot walk or grip, and commonly affects the hands, wrists, ankles and feet. Most patients improve within a week or two, but a substantial minority have persistent or relapsing joint pain that can last for months or even years, with joint swelling and stiffness — a chronic burden that rarely appears in case counts but shows up in livelihoods. Because transmission is by day-biting Aedes mosquitoes that breed in domestic water containers, the same interventions that control dengue apply, and co-circulation means a patient must be tested for dengue before NSAIDs are used.",
      refs: ["aedes-aegypti", "aedes-albopictus", "who", "climate-expansion"],
    },
    {
      id: "vaccine-setback",
      title: "Two vaccines, one withdrawn in the US",
      body:
        "Chikungunya got its first licensed vaccine in 2023, which was a genuine advance for a disease with no specific treatment. Then in May 2025 the FDA and CDC recommended a pause in its use in people aged 60 and older while they investigated post-marketing reports of serious adverse events — seventeen in total, including two deaths, in people aged 62 to 89. In August 2025 the FDA went further and suspended Ixchiq's US licence over chikungunya-like illness in recipients, including hospitalisations and encephalitis with one death; in January 2026 Valneva voluntarily withdrew the US application. Europe's regulator lifted its own elderly restriction, and Brazil — which licensed Ixchiq in April 2025 and locally made VLA1555 in May 2026 — launched a pilot Ixchiq campaign in February 2026, so the product's future is now in endemic countries rather than traveller markets.\n\nThe second product, the virus-like-particle vaccine Vimkunya, was never subject to the pause: as a non-infectious VLP it cannot cause disease, and by April 2026 it held US, EU, UK and Swiss approvals with Brazil and Canada filings pending and a paediatric Phase 3 (ages 2–11) under way. It is a reminder that a licence is not the end of the story, and that post-marketing surveillance does real work — but the field has gone from two usable products to effectively one in the age group that needs protection most.",
      refs: ["ixchiq", "vimkunya", "butantan-chik-vla1555", "chikungunya-vaccination", "who"],
    },
    {
      id: "care",
      title: "Clinical care: analgesia and time",
      body:
        "There is no specific antiviral for chikungunya: management is rest, fluids, and paracetamol for fever and pain, with aspirin and other NSAIDs avoided until dengue is excluded because of bleeding risk. The clinical priorities are recognising severe disease in newborns and older adults, ruling out dengue and other co-circulating arboviruses, and managing persistent joint pain — which may need physiotherapy, analgesia and, in some patients, rheumatology input long after the acute illness has resolved.",
      refs: ["who", "community-health-workers", "surveillance-data-gap"],
    },
  ],

  drugs: ["ixchiq", "vimkunya", "butantan-chik-vla1555", "emetine"],
  trials: ["vla1553-trial", "chikv-vlp-followup", "ixchiq-brazil-pvs", "vimkunya-pediatric"],
  technologies: ["chikungunya-vaccination"],
  institutions: ["who", "paho", "valneva"],
  guidelines: ["arbovirus-clinical-guideline-2025"],
  terms: [],
};
