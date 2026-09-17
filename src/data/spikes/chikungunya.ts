import type { Spike } from "../merge";

const WHO_CHIK: { label: string; url: string } = {
  label: "WHO — chikungunya (fact sheet)",
  url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya",
};

export const chikungunyaSpike: Spike = {
  tldr: "An Aedes-borne virus that causes sudden fever and joint pain so severe it is hard to move, and can leave a minority of patients with pain for months or years — with a licensed vaccine the field cannot yet use in the people most at risk.",

  summary:
    "Chikungunya is caused by the chikungunya virus (CHIKV), first identified in Tanzania in 1952, and transmitted by the same day-biting Aedes aegypti and Aedes albopictus mosquitoes as dengue and Zika. It begins abruptly, 4–8 days after a bite, with fever and severe, often debilitating joint pain; a minority of patients have joint pain for weeks, months or even years, which is a substantial economic burden in its own right. Newborns infected around delivery and older adults with underlying conditions are at higher risk of severe disease; deaths are uncommon and usually associated with pre-existing conditions. There is no specific antiviral — care is fever and pain control — and outbreaks have become more frequent and widespread since 2004, with the virus now identified in more than 110 countries. Two vaccines are licensed, but the first was paused in people aged 60 and over in 2025 after serious adverse events, narrowing who can receive it.",

  stats: [
    {
      label: "Vaccine pause (2025)",
      value: "17 serious events, 2 deaths",
      number: 17,
      unit: "events",
      year: 2025,
      geography: "United States",
      note: "in recipients aged 62–89; FDA and CDC paused Ixchiq in people aged 60 and over",
      source: { label: "FDA/CDC — pause in use of Ixchiq in people 60 and older", url: "https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/fda-and-cdc-recommend-pause-use-ixchiq-chikungunya-vaccine-live-individuals-60-years-age-and-older" },
    },
    {
      label: "Vaccines licensed",
      value: "2",
      number: 2,
      unit: "vaccines",
      note: "Ixchiq and Vimkunya; neither is widely available yet",
      source: WHO_CHIK,
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
      text: "A second chikungunya vaccine, the virus-like-particle vaccine Vimkunya, is licensed, giving the field two products.",
      refs: ["vimkunya"],
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
      title: "Two vaccines, one paused",
      body:
        "Chikungunya got its first licensed vaccine in 2023, which was a genuine advance for a disease with no specific treatment. Then in May 2025 the FDA and CDC recommended a pause in its use in people aged 60 and older while they investigated post-marketing reports of serious adverse events — seventeen in total, including two deaths, in people aged 62 to 89. In August 2025 the FDA issued a further safety update. The events were neurological and cardiac, and the label already carried a warning that the live vaccine can cause severe or prolonged chikungunya-like reactions.\n\nThe practical effect is a narrowing of who can receive it: fine for younger travellers and some at-risk groups, not usable in the older adults who are most vulnerable to severe chikungunya. A second product, the virus-like-particle vaccine Vimkunya, was licensed in 2025 and is not subject to the same pause, but neither vaccine is widely available. It is a reminder that a licence is not the end of the story, and that post-marketing surveillance does real work — but it leaves the field without a product it can use in a large part of the population that needs protection.",
      refs: ["ixchiq", "vimkunya", "chikungunya-vaccination", "who"],
    },
    {
      id: "care",
      title: "Clinical care: analgesia and time",
      body:
        "There is no specific antiviral for chikungunya: management is rest, fluids, and paracetamol for fever and pain, with aspirin and other NSAIDs avoided until dengue is excluded because of bleeding risk. The clinical priorities are recognising severe disease in newborns and older adults, ruling out dengue and other co-circulating arboviruses, and managing persistent joint pain — which may need physiotherapy, analgesia and, in some patients, rheumatology input long after the acute illness has resolved.",
      refs: ["who", "community-health-workers", "surveillance-data-gap"],
    },
  ],

  drugs: ["ixchiq", "vimkunya"],
  technologies: ["chikungunya-vaccination"],
  institutions: ["who", "paho"],
  terms: [],
};
