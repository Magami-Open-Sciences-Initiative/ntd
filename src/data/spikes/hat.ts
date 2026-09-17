import type { Spike } from "../merge";

export const hatSpike: Spike = {
  tldr: "A tsetse-borne parasite that attacks the brain if untreated — now curable with a single day of tablets, and moving country by country toward elimination.",

  summary:
    "Human African trypanosomiasis is caused by Trypanosoma brucei and transmitted by tsetse flies. The Gambiense form, in West and Central Africa, is chronic and progresses over years; the Rhodesiense form, in East and Southern Africa, is acute and can kill within weeks. Once the parasite crosses into the brain, the disease causes sleep disturbance, neurological damage and death. Two decades of active case-finding, better drugs and tsetse control have brought reported cases from more than 26,000 in 2000 to roughly 600 in 2024, more than half of them in the Democratic Republic of the Congo. In 2026 the treatment story completed its transformation: acoziborole, a three-tablet single-dose oral cure effective in both stages of Gambiense disease, was approved in Europe and then registered in the DRC — the first country, and the one with the largest burden. Elimination is no longer a slogan: Togo and Côte d'Ivoire were the first countries validated as having eliminated Gambiense HAT as a public health problem, followed by Guinea in January 2025 and Kenya in August 2025.",

  stats: [
    { label: "Cases (2024)", value: "≈ 600", note: "Democratic Republic of the Congo reported 330" },
    { label: "Cases (2000)", value: "> 26,000", note: "reported across Africa" },
    { label: "Acoziborole cure rate", value: "Up to 96%", note: "both stages, single dose" },
    { label: "Regimen", value: "Three tablets, one day", note: "adults and adolescents ≥ 12 years, ≥ 40 kg" },
    {
      label: "Countries validated for elimination",
      value: "4",
      note: "Togo, Côte d'Ivoire, Guinea (2025), Kenya (2025)",
    },
    { label: "WHO target", value: "Eliminate Gambiense HAT by 2030" },
  ],

  timeline: [
    {
      date: "2019",
      text: "Fexinidazole is approved as the first all-oral cure, a ten-day course covering both stages of Gambiense disease.",
      refs: ["fexinidazole", "fexinidazole-hat"],
    },
    {
      date: "2024",
      text: "The Democratic Republic of the Congo reports 330 cases — more than half of all cases in Africa that year.",
      refs: ["dndi"],
    },
    {
      date: "2025",
      text: "Guinea and then Kenya are validated by WHO as having eliminated Gambiense sleeping sickness as a public health problem.",
      refs: ["who", "eot"],
    },
    {
      date: "2026",
      text: "The European Medicines Agency approves acoziborole, a three-tablet single-dose treatment for both stages of Gambiense disease.",
      refs: ["acoziborole", "dndi"],
    },
    {
      date: "2026",
      text: "The Democratic Republic of the Congo registers acoziborole, the first country to approve it, opening the path to importation across Central and West Africa.",
      refs: ["acoziborole", "dndi", "who"],
    },
  ],

  sections: [
    {
      id: "single-dose",
      title: "The single-dose era",
      body:
        "The treatment history of sleeping sickness is one of the fastest transformations in the NTD field. Melarsoprol, an arsenic compound given by intravenous injection, caused a fatal encephalopathy in a small percentage of patients. Eflornithine reduced that but needed infusions over days. NECT combined it with oral nifurtimox and simplified the regimen. Fexinidazole, approved in 2019, was the first all-oral cure and removed the need for hospitalisation and lumbar-puncture staging for many patients.\n\nAcoziborole completes the arc. A single oral dose of three tablets cures up to 96% of patients across both stages of Gambiense disease, in adults and adolescents weighing at least 40 kilograms — no injections, no hospital, no cold chain. The European Medicines Agency approved it in 2026 and the Democratic Republic of the Congo registered it in June 2026, with other Central and West African countries expected to authorise importation. The clinical significance is that a disease that required weeks of hospital care can now be treated in a village clinic in a day.",
      refs: ["acoziborole", "fexinidazole", "nifurtimox", "eflornithine", "melarsoprol"],
    },
    {
      id: "elimination",
      title: "Elimination is now a country-by-country fact",
      body:
        "WHO's aim is to eliminate Gambiense sleeping sickness as a public health problem, and that is turning into a list of validated countries rather than an aspiration. Togo and Côte d'Ivoire were the first to be validated; Guinea followed in January 2025 and Kenya in August 2025. Each validation requires years of case-finding, treatment and surveillance showing that transmission has been interrupted, not merely reduced.\n\nWhat makes this achievable is the combination of a low burden with a tool that works: when cases are few and a single dose cures them, the effort shifts from mass screening to hunting individual cases and following their contacts. The remaining endemic burden is concentrated in the Democratic Republic of the Congo and a handful of neighbours, which is why the DRC's registration of acoziborole matters more than any other country's.",
      refs: ["who", "eot", "elimination-roadmap", "dndi"],
    },
    {
      id: "rhodesiense",
      title: "Rhodesiense: the harder half",
      body:
        "The Rhodesiense form of the disease gets a fraction of the attention and remains genuinely difficult. It is acute, progresses to the brain within weeks, and affects pastoral and fishing communities in East and Southern Africa where it is often a zoonosis with an animal reservoir. Fexinidazole is not effective enough in severe Rhodesiense disease, so late-stage patients still rely on melarsoprol, the arsenic drug with the dangerous side effect profile.\n\nThere is no single-dose cure for Rhodesiense disease, no rapid diagnostic test comparable to the antibody screening used for Gambiense, and the animal reservoir means human treatment alone cannot interrupt transmission. Improving this half of the disease is the next task in the field, and it depends on both drug development and veterinary control.",
      refs: ["melarsoprol", "suramin", "fexinidazole", "zoonosis", "vaccine-gap"],
    },
    {
      id: "tsetse",
      title: "Tsetse control does the other half of the work",
      body:
        "Treating patients prevents death but does not stop transmission, because the tsetse fly keeps moving the parasite between people and animals. Integrating vector control with case-finding was essential to the decline, and the tools have become cheaper and more targeted: insecticide-treated traps and low-cost targets, the sterile insect technique used to suppress isolated fly populations, and insecticide treatment of cattle in pastoral areas.\n\nTsetse are slow breeders with restricted habitats, which makes them unusually vulnerable to sustained control. That is why a disease that once infected hundreds of thousands a year can be pushed out of a country — and why the surveillance has to continue after the last case, since a reservoir in flies or animals can re-establish transmission.",
      refs: ["tsetse-traps", "tiny-targets", "sterile-insect-technique", "vector-surveillance"],
    },
    {
      id: "last-mile",
      title: "The last mile in conflict zones",
      body:
        "The countries where sleeping sickness persists are among the hardest places to run a health programme. The Democratic Republic of the Congo, South Sudan and the Central African Republic have large areas of insecurity and displacement, where case-finding teams cannot go and patients cannot travel. Undetected cases in conflict areas are the main threat to elimination, because the disease can resurge silently and be discovered only when a new outbreak appears.\n\nWhat helps is simplicity: a test that can be done by a community health worker and a treatment that is a single dose means a mobile team can cover far more ground, and a patient in a remote area can be cured without referral. Acoziborole's greatest contribution may be less its cure rate than the fact that it removes almost every logistical barrier to treating the last cases.",
      refs: ["community-health-workers", "surveillance-data-gap", "catt", "acoziborole"],
    },
  ],

  drugs: ["acoziborole"],
  trials: ["acoziborole-hat"],
  technologies: ["tiny-targets"],
  institutions: ["dndi", "who"],
  terms: [],
};
