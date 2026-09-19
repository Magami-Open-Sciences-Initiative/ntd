import type { RecordOf } from "@/lib/schema";
import { iso2, iso3, geonames } from "./codes";

/** Countries added by later reviews. */
export const extraCountries: RecordOf<"countries">[] = [
  {
    id: "guinea",
    name: "Guinea",
    codes: [iso2("GN"), iso3("GIN"), geonames("2420477")],
    tldr: "A West African country that eliminated sleeping sickness as a public health problem in 2025 and helped test the single-dose cure.",
    summary:
      "Guinea was validated by WHO in January 2025 as having eliminated human African trypanosomiasis as a public health problem, one of only four countries to have reached that status, and it was one of the settings where acoziborole was clinically tested. The achievement is notable because Guinea's health system was devastated by the 2014–2016 Ebola epidemic, which killed health workers and eroded trust in clinics — and it rebuilt enough surveillance and case-finding capacity to drive a parasitic disease to elimination within a decade. The country also carries onchocerciasis, lymphatic filariasis, schistosomiasis and soil-transmitted helminths.",
    asOf: "2026-09",
    region: "West Africa",
    whoRegion: "African Region",
    burden:
      "Sleeping sickness was endemic in the coastal and forest regions and has been driven to elimination; onchocerciasis and lymphatic filariasis are present, and schistosomiasis and soil-transmitted helminths are widespread.",
    elimination:
      "Validated by WHO in January 2025 as having eliminated human African trypanosomiasis as a public health problem. Elimination programmes for lymphatic filariasis and onchocerciasis are under way.",
    programme:
      "Active case-finding and treatment for sleeping sickness, built back up after the Ebola epidemic, alongside community-directed ivermectin treatment and preventive chemotherapy for the helminths and filariae.",
    stats: [
      { label: "Sleeping sickness", value: "Eliminated as a public health problem, 2025" },
      { label: "Acoziborole", value: "Tested here" },
    ],
    links: [
      { label: "WHO — Guinea eliminates human African trypanosomiasis as a public health problem", url: "https://www.who.int/news/item/29-01-2025-guinea-eliminates-human-african-trypanosomiasis-as-a-public-health-problem" },
      { label: "WHO — Guinea country page", url: "https://www.who.int/countries/gin" },
    ],
    diseases: ["hat", "onchocerciasis", "lymphatic-filariasis", "schistosomiasis", "sth"],
    people: ["mamadou-camara"],
    institutions: ["who", "dndi"],
    terms: ["elimination", "eot", "ntd"],
  },
];

/** Countries added to place the African contributors in this corpus. */
export const moreCountries: RecordOf<"countries">[] = [
  {
    id: "south-africa",
    name: "South Africa",
    codes: [iso2("ZA"), iso3("ZAF"), geonames("953987")],
    tldr: "The country with one of the world's heaviest tuberculosis and HIV burdens, and a research system that has shaped the evidence for both.",
    summary:
      "South Africa carries a very large share of the global tuberculosis burden, including a substantial share of its drug-resistant cases, and has one of the largest HIV epidemics — a combination that makes tuberculosis the country's leading cause of death and gives its treatment programme global significance. It also has the strongest biomedical research base on the continent, which is why so many of the trials and policy decisions described in this corpus involve South African institutions and researchers. Malaria transmission is limited to the north-east and is a target for elimination.",
    asOf: "2026-09",
    region: "Southern Africa",
    whoRegion: "African Region",
    burden:
      "Tuberculosis at very high incidence including multidrug-resistant disease; a large HIV epidemic driving tuberculosis mortality; schistosomiasis and soil-transmitted helminths in the north-east; malaria in Limpopo, Mpumalanga and KwaZulu-Natal; snakebite in rural areas.",
    elimination:
      "Malaria elimination is a stated goal in the low-transmission provinces. Tuberculosis and HIV are managed as a combined programme; drug-resistant tuberculosis is a national priority rather than an elimination target.",
    programme:
      "A large public antiretroviral and tuberculosis programme, national drug-resistance surveillance, and research institutions that run vaccine, drug and diagnostic trials for the region.",
    stats: [
      { label: "Tuberculosis", value: "Among the world's highest burdens" },
      { label: "Malaria", value: "Limited to the north-east", note: "elimination goal" },
      { label: "Research", value: "The continent's largest biomedical base" },
    ],
    links: [
      { label: "WHO Regional Office for Africa — South Africa country page", url: "https://www.afro.who.int/countries/south-africa" },
      { label: "WHO — South Africa country page", url: "https://www.who.int/countries/zaf" },
    ],
    diseases: ["tuberculosis", "schistosomiasis", "sth", "snakebite", "malaria", "scabies"],
    people: ["salim-abdool-karim", "quarraisha-abdool-karim", "glenda-gray", "shabir-madhi", "bongani-mayosi", "hoosen-coovadia", "malegapuru-makgoba", "aaron-motsoaledi"],
    institutions: ["who"],
    terms: ["mdr-tb", "amr", "ntd"],
  },
  {
    id: "senegal",
    name: "Senegal",
    codes: [iso2("SN"), iso3("SEN"), geonames("2245662")],
    tldr: "A West African country that has eliminated trachoma, is close on onchocerciasis, and hosts a regional vaccine and diagnostic manufacturer.",
    summary:
      "Senegal has eliminated trachoma as a public health problem and is among the countries closing in on onchocerciasis elimination, while continuing to control malaria, schistosomiasis and soil-transmitted helminths. It is also unusual in the region for its manufacturing capacity: the Institut Pasteur de Dakar produces vaccines and diagnostics, which matters for a continent that has historically depended on imported supply. Its research and public health institutions have produced several of the figures in this corpus.",
    asOf: "2026-09",
    region: "West Africa",
    whoRegion: "African Region",
    burden:
      "Malaria across most of the country; schistosomiasis in the Senegal River basin; soil-transmitted helminths; onchocerciasis in the south-east; historically human African trypanosomiasis.",
    elimination:
      "Trachoma eliminated and validated. Onchocerciasis transmission is close to interruption in much of the country. Malaria control is sustained but elimination is not yet in reach.",
    programme:
      "National malaria and neglected tropical disease programmes delivering preventive chemotherapy and vector control, supported by WHO and partners, with the Institut Pasteur de Dakar providing laboratory and manufacturing capacity.",
    stats: [
      { label: "Trachoma", value: "Eliminated and validated" },
      { label: "Onchocerciasis", value: "Close to interruption" },
      { label: "Manufacturing", value: "Institut Pasteur de Dakar" },
    ],
    links: [
      { label: "WHO Regional Office for Africa — Senegal country page", url: "https://www.afro.who.int/countries/senegal" },
      { label: "WHO — Senegal country page", url: "https://www.who.int/countries/sen" },
    ],
    diseases: ["trachoma", "malaria", "schistosomiasis", "sth", "onchocerciasis"],
    people: ["ibrahima-soce-fall", "awa-marie-coll-seck"],
    institutions: ["ipd", "who"],
    terms: ["elimination", "preventive-chemotherapy", "ntd"],
  },
  {
    id: "mali",
    name: "Mali",
    codes: [iso2("ML"), iso3("MLI"), geonames("2453866")],
    tldr: "A West African country with a broad NTD burden whose research centre has shaped understanding of malaria drug resistance.",
    summary:
      "Mali carries malaria, schistosomiasis, soil-transmitted helminths, trachoma, onchocerciasis and leprosy, and has a history of guinea worm and human African trypanosomiasis. Its Malaria Research and Training Centre at the University of Bamako has been a leading source of work on malaria parasite genetics and antimalarial drug resistance in Africa, which is the science that makes molecular resistance surveillance possible. Much of the country's NTD work is delivered through donor-supported campaigns in a difficult security environment.",
    asOf: "2026-09",
    region: "West Africa (Sahel)",
    whoRegion: "African Region",
    burden:
      "Malaria is the dominant burden; schistosomiasis, soil-transmitted helminths and trachoma are widespread; onchocerciasis and leprosy are present; guinea worm was historically endemic.",
    elimination:
      "Trachoma elimination has advanced; onchocerciasis and lymphatic filariasis programmes continue. Insecurity in the north and centre restricts access to parts of the country.",
    programme:
      "National preventive chemotherapy campaigns alongside malaria control, with research capacity concentrated at the University of Bamako and its malaria research centre.",
    stats: [
      { label: "Dominant burden", value: "Malaria" },
      { label: "Research strength", value: "Malaria genetics and drug resistance" },
    ],
    links: [
      { label: "WHO Regional Office for Africa — Mali country page", url: "https://www.afro.who.int/countries/mali" },
      { label: "WHO — Mali country page", url: "https://www.who.int/countries/mli" },
    ],
    diseases: ["malaria", "schistosomiasis", "sth", "trachoma", "onchocerciasis", "leprosy", "dracunculiasis"],
    people: ["abdoulaye-djimde"],
    institutions: ["who", "ntd-support-center"],
    terms: ["artemisinin-resistance", "mda", "ntd"],
  },
  {
    id: "botswana",
    name: "Botswana",
    codes: [iso2("BW"), iso3("BWA"), geonames("933860")],
    tldr: "A southern African country whose main infectious-disease burden is tuberculosis and HIV, with a strong national research and public health record.",
    summary:
      "Botswana's burden is dominated by HIV and tuberculosis rather than by the classical neglected tropical diseases, and it has run one of Africa's most effective antiretroviral programmes. It appears in this corpus mainly through the people it has produced in global health — including a WHO Regional Director for Africa and a former UNAIDS regional director — and as an example of a country whose health system is strong enough to run its own research. Schistosomiasis and soil-transmitted helminths occur in the north, particularly around the Okavango and Chobe river systems.",
    asOf: "2026-09",
    region: "Southern Africa",
    whoRegion: "African Region",
    burden:
      "HIV and tuberculosis are the dominant infectious-disease burdens; schistosomiasis and soil-transmitted helminths occur in northern districts. Most neglected tropical diseases are absent or of limited transmission.",
    elimination:
      "No NTD elimination target is central to the national programme; the priority is HIV and tuberculosis control.",
    programme:
      "A strong public antiretroviral programme, national tuberculosis surveillance, and research and public health institutions that have supplied senior figures to WHO, UNAIDS and other agencies.",
    stats: [
      { label: "Principal burden", value: "HIV and tuberculosis" },
      { label: "NTD transmission", value: "Limited to the north" },
    ],
    links: [
      { label: "WHO Regional Office for Africa — Botswana country page", url: "https://www.afro.who.int/countries/botswana" },
      { label: "WHO — Botswana country page", url: "https://www.who.int/countries/bwa" },
    ],
    diseases: ["schistosomiasis", "sth", "tuberculosis"],
    people: ["sheila-tlou"],
    institutions: ["who"],
    terms: ["amr", "ntd"],
  },
];
