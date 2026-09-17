import type { RecordOf } from "@/lib/schema";

/** Institutions added by later reviews. */
export const extraInstitutions: RecordOf<"institutions">[] = [
  {
    id: "africa-cdc",
    name: "Africa Centres for Disease Control and Prevention (Africa CDC)",
    tldr: "The African Union's own public health agency, built to give the continent its own surveillance, laboratory and emergency response capacity.",
    summary:
      "Africa CDC was established in 2016 as the African Union's specialised agency for public health, with a mandate to strengthen surveillance, laboratory networks and emergency response across the continent. It grew out of the recognition — sharpened by the 2014–2016 Ebola outbreak — that African outbreaks should not depend on capacity flown in from elsewhere. Its Regional Integrated Surveillance and Laboratory Networks aim to give every region the ability to detect and confirm disease, which is the same capability that NTD elimination verification requires. It runs its own manufacturing and diagnostics partnerships, and coordinates the continent's response to outbreaks including mpox and COVID-19.",
    asOf: "2026-09",
    institutionType: "Continental public health agency",
    country: "Ethiopia",
    city: "Addis Ababa",
    focus:
      "Continental disease surveillance, laboratory networks, emergency preparedness and response, and African manufacturing capacity.",
    links: [
      { label: "Africa CDC", url: "https://www.africacdc.org/" },
      { label: "Wikipedia — Africa Centres for Disease Control and Prevention", url: "https://en.wikipedia.org/wiki/Africa_Centres_for_Disease_Control_and_Prevention" },
    ],
    diseases: ["ebola", "dengue-chikungunya", "hat"],
    people: ["john-nkengasong", "jean-kaseya", "chikwe-ihekweazu"],
    institutions: ["who", "cepi", "the-global-fund"],
    technologies: ["genomic-surveillance", "mhealth-surveillance", "ebola-vaccines"],
    terms: ["outbreak-response", "surveillance-data-gap", "ntd"],
    stats: [
      { label: "Established", value: "2016" },
      { label: "Mandate", value: "African-owned surveillance and response" },
    ],
  },
];
