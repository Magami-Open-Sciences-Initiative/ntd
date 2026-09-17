import type { RecordOf } from "@/lib/schema";

/**
 * African contributors to the knowledge in this corpus.
 *
 * This set is deliberately short and each record cites a specific page that
 * documents the person. Named people are the highest-risk content here, so the
 * bar is a verifiable role rather than reputation, and the kind needs expansion
 * by contributors who know the field. Sources are biographical or institutional
 * rather than scientific citations.
 */
export const africanPeople: RecordOf<"people">[] = [
  {
    id: "erick-miaka",
    name: "Erick Mwamba Miaka",
    tldr: "The Congolese physician who directs the national programme for the country that reports more than half of Africa's sleeping sickness.",
    summary:
      "Erick Mwamba Miaka directs the Democratic Republic of the Congo's national human African trypanosomiasis control programme, which carries the largest share of the world's remaining sleeping sickness burden — 330 of roughly 600 cases across Africa in 2024. That position makes the DRC programme the decisive one for eliminating the disease, and it is why the country's registration of acoziborole in June 2026 mattered so much: a single-dose oral cure becomes usable at scale first where the cases are. His programme combines active case-finding with tsetse control under conditions of conflict and weak infrastructure that make both difficult.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Director, National Programme for the Control of Human African Trypanosomiasis, Democratic Republic of the Congo",
    knownFor: "Leading the national sleeping-sickness programme that carries Africa's largest remaining burden.",
    links: [
      { label: "DNDi — DRC approves acoziborole (statement by Dr Miaka)", url: "https://dndi.org/press-releases/2026/drc-approves-use-acoziborole-breakthrough-one-day-oral-treatment-against-sleeping-sickness/" },
    ],
    diseases: ["hat"],
    drugs: ["acoziborole", "fexinidazole"],
    countries: ["dr-congo"],
    institutions: ["dndi", "who"],
    technologies: ["tiny-targets", "case-containment"],
    terms: ["elimination", "eot", "ntd"],
    stats: [
      { label: "Country burden", value: "330 cases in 2024", note: "more than half of Africa's total" },
    ],
  },
  {
    id: "mamadou-camara",
    name: "Mamadou Camara",
    tldr: "The Guinean coordinator whose national programme helped test acoziborole and is now preparing to use it.",
    summary:
      "Mamadou Camara coordinates Guinea's national human African trypanosomiasis control programme, one of the countries where acoziborole was clinically tested. Guinea reached elimination of sleeping sickness as a public health problem and was validated by WHO in January 2025, which makes its programme one of the four to have achieved that status. Its experience is directly relevant to the rest of the region: a country with a small remaining burden that has to keep looking, using a treatment simple enough to be given where the last cases occur.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Coordinator, National Human African Trypanosomiasis Control Programme, Guinea",
    knownFor: "Leading Guinea's programme to WHO validation of elimination as a public health problem (2025).",
    links: [
      { label: "DNDi — DRC approves acoziborole (statement by Mamadou Camara)", url: "https://dndi.org/press-releases/2026/drc-approves-use-acoziborole-breakthrough-one-day-oral-treatment-against-sleeping-sickness/" },
      { label: "WHO — Guinea eliminates human African trypanosomiasis as a public health problem", url: "https://www.who.int/news/item/29-01-2025-guinea-eliminates-human-african-trypanosomiasis-as-a-public-health-problem" },
    ],
    diseases: ["hat"],
    drugs: ["acoziborole"],
    countries: ["guinea"],
    institutions: ["who", "dndi"],
    terms: ["elimination", "eot"],
    stats: [
      { label: "Validation", value: "January 2025" },
    ],
  },
  {
    id: "matshidiso-moeti",
    name: "Matshidiso Moeti",
    tldr: "The Botswanan physician who led WHO's Africa region for a decade, covering the NTD programmes of 47 countries.",
    summary:
      "Matshidiso Rebecca Natalie Moeti is a Botswanan physician and public health specialist who served as WHO Regional Director for Africa from February 2015 to February 2025 — the first woman to hold the post. The regional office she led oversees the NTD programmes of 47 member states, which is where most of the world's neglected tropical disease burden sits, and its technical support is a large part of why countries in the region have been able to reach elimination thresholds for lymphatic filariasis, trachoma, sleeping sickness and onchocerciasis. She was succeeded in 2025 by Mohamed Yakub Janabi of Tanzania.",
    asOf: "2026-09",
    era: "Contemporary",
    dates: "born 1954",
    role: "Regional Director, WHO Regional Office for Africa (2015–2025)",
    knownFor: "Leading WHO's Africa region, which oversees the NTD programmes of 47 countries.",
    links: [
      { label: "Wikipedia — Matshidiso Moeti", url: "https://en.wikipedia.org/wiki/Matshidiso_Moeti" },
    ],
    countries: ["dr-congo", "nigeria", "ethiopia"],
    institutions: ["who"],
    terms: ["ntd", "elimination"],
    stats: [
      { label: "In office", value: "2015–2025" },
      { label: "First", value: "Woman to lead WHO AFRO" },
    ],
  },
  {
    id: "mohamed-janabi",
    name: "Mohamed Yakub Janabi",
    tldr: "The Tanzanian who took over WHO's Africa region in 2025, inheriting the NTD elimination targets for the continent.",
    summary:
      "Mohamed Yakub Janabi of Tanzania was elected WHO Regional Director for Africa in 2025, succeeding Matshidiso Moeti. The office is responsible for the technical support behind the continent's NTD programmes, and he inherits the 2030 targets for eliminating lymphatic filariasis, trachoma, onchocerciasis and sleeping sickness across the region — with the remaining high-burden countries, Nigeria and the Democratic Republic of the Congo among them, determining whether those targets are met.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Regional Director, WHO Regional Office for Africa (from 2025)",
    knownFor: "Leading WHO's Africa region through the 2030 NTD elimination targets.",
    links: [
      { label: "Wikipedia — Mohamed Yakub Janabi", url: "https://en.wikipedia.org/wiki/Mohamed_Yakub_Janabi" },
    ],
    countries: ["tanzania", "nigeria", "dr-congo"],
    institutions: ["who"],
    terms: ["ntd", "elimination", "eot"],
  },
  {
    id: "jean-kaseya",
    name: "Jean Kaseya",
    tldr: "The Congolese public health leader who directs Africa CDC, the continent's own agency for disease surveillance and laboratory networks.",
    summary:
      "Jean Kaseya is a Congolese medical doctor and public health specialist who became Director-General of the Africa Centres for Disease Control and Prevention in 2023, succeeding its founding director John Nkengasong. Africa CDC works on surveillance, laboratory networks and emergency response across the continent — the same infrastructure that NTD programmes depend on for case-finding, confirmation and elimination verification. Its emphasis on regional laboratory capacity is directly relevant to one of the field's persistent bottlenecks: the shortage of diagnostic and sequencing capacity where the diseases actually occur.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Director-General, Africa Centres for Disease Control and Prevention",
    knownFor: "Leading Africa CDC's surveillance, laboratory and emergency response networks.",
    links: [
      { label: "Wikipedia — Jean Kaseya", url: "https://en.wikipedia.org/wiki/Jean_Kaseya" },
    ],
    countries: ["dr-congo"],
    institutions: ["who"],
    technologies: ["genomic-surveillance", "mhealth-surveillance"],
    terms: ["ntd", "elimination"],
  },
  {
    id: "john-nkengasong",
    name: "John Nkengasong",
    tldr: "The Cameroonian virologist who founded Africa CDC, arguing that Africa needed its own disease surveillance capacity.",
    summary:
      "John N. Nkengasong is a Cameroonian-American virologist whose doctoral research was the first to characterise the genetic subtypes of HIV in Africa, and who went on to found and lead the Africa Centres for Disease Control and Prevention as its inaugural director from 2016 to 2022. He has been a persistent advocate for African-owned laboratory and surveillance systems — the argument that the continent should be able to diagnose and track its own outbreaks rather than sending samples abroad. That capability is precisely what NTD elimination verification requires, and the same argument now underpins calls for regional genomic surveillance and manufacturing.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Inaugural Director, Africa CDC (2016–2022); US Global AIDS Coordinator (2022–2025)",
    knownFor: "Founding Africa CDC and building the case for African-owned laboratory and surveillance capacity.",
    links: [
      { label: "Wikipedia — John Nkengasong", url: "https://en.wikipedia.org/wiki/John_Nkengasong" },
    ],
    countries: ["cameroon"],
    institutions: ["who"],
    technologies: ["genomic-surveillance", "mhealth-surveillance"],
    terms: ["ntd", "surveillance-data-gap"],
    stats: [
      { label: "Founded Africa CDC", value: "2016" },
      { label: "Doctoral work", value: "First characterisation of HIV subtypes in Africa" },
    ],
  },
];
