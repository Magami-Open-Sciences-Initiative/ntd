import type { RecordOf } from "@/lib/schema";

/**
 * A deliberately small, well-documented set. Names, roles and affiliations are
 * the highest-risk content in a corpus like this, so this kind holds only people
 * whose contribution is definitional and whose record is documented at the
 * linked source. It needs expansion by contributors who know the field.
 */
export const people: RecordOf<"people">[] = [
  {
    id: "armauer-hansen",
    name: "Gerhard Armauer Hansen",
    tldr: "The Norwegian physician who identified the bacterium that causes leprosy in 1873 — the first pathogen shown to cause human disease.",
    summary:
      "Armauer Hansen identified Mycobacterium leprae in 1873, at a time when leprosy was widely attributed to heredity or moral failing. The finding was the first demonstration that a bacterium causes a human disease, and it reframed leprosy as an infectious condition that could in principle be treated — though that took another century. Hansen's later attempt to transmit the disease by inoculating a patient cost him his post, and the disease is still often called Hansen's disease in an effort to reduce the stigma attached to the word leprosy.",
    asOf: "2026-09",
    era: "Historical",
    dates: "1841–1912",
    role: "Physician and bacteriologist, Bergen, Norway",
    knownFor: "Identifying Mycobacterium leprae as the cause of leprosy (1873).",
    links: [
      { label: "WHO — leprosy", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    ],
    diseases: ["leprosy"],
    pathogens: ["mycobacterium-leprae"],
    terms: ["stigma-and-disability", "ntd"],
    stats: [
      { label: "Discovery", value: "1873" },
      { label: "Significance", value: "First pathogen shown to cause human disease" },
    ],
  },
  {
    id: "carlos-chagas",
    name: "Carlos Chagas",
    tldr: "The Brazilian physician who discovered the parasite, the insect vector and the human disease that now bear his name.",
    summary:
      "In a single body of work between 1907 and 1909, Carlos Chagas described Trypanosoma cruzi in the gut of triatomine bugs, identified the parasite in a child, and established the disease as a distinct clinical entity — an achievement with few parallels in medical history, since it is rare for one investigator to identify a pathogen, its vector and the disease it causes. The condition he described still affects millions of people across Latin America and has no safe, short, reliably curative treatment.",
    asOf: "2026-09",
    era: "Historical",
    dates: "1879–1934",
    role: "Physician and researcher, Instituto Oswaldo Cruz, Brazil",
    knownFor: "Discovering Trypanosoma cruzi, its triatomine vector and Chagas disease.",
    links: [
      { label: "PAHO — Chagas disease", url: "https://www.paho.org/en/topics/chagas-disease" },
    ],
    diseases: ["chagas"],
    pathogens: ["trypanosoma-cruzi"],
    vectors: ["triatomine-bug"],
    countries: ["brazil"],
    institutions: ["fiocruz"],
    terms: ["vector-borne", "ntd"],
    stats: [
      { label: "Discovery", value: "1909" },
    ],
  },
  {
    id: "louis-pasteur",
    name: "Louis Pasteur",
    tldr: "The French chemist whose 1885 post-exposure vaccination saved a boy bitten by a rabid dog, founding modern rabies prevention.",
    summary:
      "Louis Pasteur developed the first rabies vaccine, and in 1885 he used it after a bite — a post-exposure intervention that had never been attempted in a person. The patient survived, and the approach became the basis of rabies prevention worldwide: vaccinate before the virus reaches the central nervous system. Rabies is still incurable once symptoms begin, so Pasteur's intervention remains the entire strategy more than a century later; what has changed is that it is now highly effective and almost universally available in wealthy countries, and still out of reach for many of the people who need it.",
    asOf: "2026-09",
    era: "Historical",
    dates: "1822–1895",
    role: "Chemist and microbiologist, Paris",
    knownFor: "Developing the first rabies vaccine and treating the first patient (1885).",
    links: [
      { label: "Institut Pasteur — international network", url: "https://www.pasteur.fr/en" },
    ],
    diseases: ["rabies"],
    pathogens: ["rabies-virus"],
    drugs: ["rabies-postexposure-prophylaxis"],
    technologies: ["rabies-vaccination"],
    terms: ["one-health"],
    stats: [
      { label: "First human use", value: "1885" },
      { label: "Legacy", value: "Post-exposure prophylaxis" },
    ],
  },
  {
    id: "jimmy-carter",
    name: "Jimmy Carter",
    tldr: "The former US president whose Carter Center has led the Guinea Worm Eradication Program since 1986, taking cases from millions to ten.",
    summary:
      "Jimmy Carter founded the Carter Center in 1982 and made Guinea worm disease its signature campaign, leading the global eradication programme from 1986 in partnership with WHO, UNICEF, CDC and national ministries of health. Under his leadership the campaign reduced human cases from an estimated 3.5 million a year to ten in 2025 — achieved without a vaccine or a drug, using safe water, case containment and surveillance. He said he wanted to outlast the last Guinea worm, and the disease is now close to being the second human disease ever eradicated.",
    asOf: "2026-09",
    era: "Contemporary",
    dates: "1924–2024",
    role: "Founder, The Carter Center; 39th President of the United States",
    knownFor: "Leading the global Guinea worm eradication campaign.",
    links: [
      { label: "The Carter Center — Guinea worm disease", url: "https://www.cartercenter.org/programs/guinea-worm/" },
    ],
    diseases: ["dracunculiasis"],
    institutions: ["carter-center"],
    countries: ["south-sudan", "chad", "ethiopia"],
    technologies: ["case-containment", "wash-interventions"],
    terms: ["elimination", "eot", "ntd"],
    stats: [
      { label: "Campaign since", value: "1986" },
      { label: "Cases at the start", value: "≈ 3.5 million/yr" },
    ],
  },
  {
    id: "donald-hopkins",
    name: "Donald Hopkins",
    tldr: "The Carter Center leader who built the scientific and operational case that Guinea worm could be eradicated without a drug or a vaccine.",
    summary:
      "Donald Hopkins led health programmes at the Carter Center for decades and was central to the strategy that made Guinea worm eradication credible: water treatment, cloth filters, case containment, reporting rewards and relentless surveillance, none of which depended on a new medicine. He also worked on smallpox eradication earlier in his career, which makes him one of the few people to have worked on two eradication programmes. Eradication of a disease without a vaccine or a drug is a claim that rests on the architecture he and his colleagues built.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Former Vice President for Health Programs, The Carter Center",
    knownFor: "Shaping the Guinea worm eradication strategy, and work on smallpox eradication.",
    links: [
      { label: "The Carter Center — Guinea worm disease", url: "https://www.cartercenter.org/programs/guinea-worm/" },
    ],
    diseases: ["dracunculiasis"],
    institutions: ["carter-center"],
    technologies: ["case-containment"],
    terms: ["elimination", "eot"],
  },
  {
    id: "mwele-malecela",
    name: "Mwele Ntuli Malecela",
    tldr: "The Tanzanian scientist who directed WHO's neglected tropical diseases department and pushed the field toward elimination targets.",
    summary:
      "Mwele Ntuli Malecela was Director of the World Health Organization's Department of Control of Neglected Tropical Diseases from 2018 until her death in February 2022. A Tanzanian researcher by background, she had earlier led Tanzania's national institute for medical research and the country's lymphatic filariasis and onchocerciasis programmes. Her tenure at WHO coincided with the development of the 2021–2030 NTD road map, with its explicit elimination and eradication targets, and she was widely recognised as a champion for women and girls within the field. A mentorship programme for women in NTDs was named in her memory.",
    asOf: "2026-09",
    era: "Contemporary",
    dates: "1963–2022",
    role: "Director, Department of Control of Neglected Tropical Diseases, WHO",
    knownFor: "Leading WHO's NTD department through the 2021–2030 road map; championing women in the field.",
    links: [
      { label: "WHO — mourning Dr Mwelecele Ntuli Malecela", url: "https://www.who.int/news/item/11-02-2022-who-mourns-dr-mwelecele-ntuli-malecela" },
      { label: "Uniting to Combat NTDs — tribute", url: "https://unitingtocombatntds.org/en/news-and-views/tribute-dr-mwele-ntuli-malecela/" },
    ],
    diseases: ["lymphatic-filariasis", "onchocerciasis"],
    institutions: ["who", "uniting-ntds"],
    countries: ["tanzania"],
    roadmaps: ["elimination-roadmap"],
    guidelines: ["ntd-road-map-2021-2030"],
    terms: ["elimination", "eot", "ntd"],
    stats: [
      { label: "At WHO", value: "2018–2022" },
      { label: "Died", value: "10 February 2022" },
    ],
  },
  {
    id: "ahmed-fahal",
    name: "Ahmed Hassan Fahal",
    tldr: "The Sudanese surgeon who built the Mycetoma Research Centre and made a neglected disease visible to the world.",
    summary:
      "Ahmed Hassan Fahal is a Professor of Surgery at the University of Khartoum and the founding Director of the Mycetoma Research Centre, which he established in the early 1990s and built into the world's leading centre for the disease — treating patients, training clinicians across the mycetoma belt, running the largest case series, and hosting the first randomised clinical trial of a eumycetoma drug. He also directs the Sudanese national mycetoma control programme. Recognition of mycetoma as a neglected tropical disease in 2016 owed much to the case he and his colleagues assembled from a single hospital in Khartoum, and the war that began in 2023 has devastated the institution he built.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Professor of Surgery, University of Khartoum; founding Director, Mycetoma Research Centre",
    knownFor: "Building the world's leading mycetoma centre and making the disease an NTD.",
    links: [
      { label: "Professor Ahmed Hassan Fahal — about", url: "https://www.ahmedfahal.net/index.php/about" },
    ],
    diseases: ["mycetoma"],
    institutions: ["mrc-khartoum"],
    countries: ["sudan"],
    drugs: ["fosravuconazole"],
    trials: ["fosravuconazole-mycetoma"],
    terms: ["ntd", "stigma-and-disability"],
    stats: [
      { label: "Founded the MRC", value: "Early 1990s" },
      { label: "Recognition", value: "Mycetoma added to the WHO NTD list, 2016" },
    ],
  },
  {
    id: "david-molyneux",
    name: "David Molyneux",
    tldr: "A long-standing figure in the neglected tropical diseases field who helped build the case for treating them as a single, fundable group.",
    summary:
      "David Molyneux spent much of his career at the Liverpool School of Tropical Medicine, which he directed, and has been one of the most persistent advocates for treating neglected tropical diseases as a coherent group rather than a scatter of unprofitably obscure infections. That framing — adopted by WHO and by donors — is the reason a single mass treatment campaign can now address several diseases at once, and it underpins the push for integrated delivery that most programmes rely on.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Former Director, Liverpool School of Tropical Medicine",
    knownFor: "Advocacy for NTDs as a group, and for integrated, low-cost mass treatment.",
    links: [
      { label: "Liverpool School of Tropical Medicine — Professor David Molyneux", url: "https://www.lstmed.ac.uk/about/people/professor-david-molyneux" },
    ],
    diseases: ["lymphatic-filariasis", "onchocerciasis", "schistosomiasis", "trachoma"],
    institutions: ["lstm", "who"],
    technologies: ["mass-drug-administration"],
    terms: ["ntd", "mda", "preventive-chemotherapy"],
  },
  {
    id: "marshall-lightowlers",
    name: "Marshall Lightowlers",
    tldr: "The University of Melbourne veterinary scientist who developed the pig vaccine that breaks the Taenia solium cycle.",
    summary:
      "Marshall Lightowlers, a professor at the University of Melbourne, developed TSOL18, the recombinant vaccine against Taenia solium in pigs. It is the first licensed vaccine against porcine cysticercosis and, in combination with oxfendazole, has been shown to eliminate transmission by pigs — which removes the step that creates the human tapeworm carriers who contaminate the environment with the eggs that cause neurocysticercosis. It is one of the clearest cases in the NTD field of a human brain disease being controlled by a veterinary vaccine.",
    asOf: "2026-09",
    era: "Contemporary",
    role: "Professor, Faculty of Veterinary and Agricultural Sciences, University of Melbourne",
    knownFor: "Developing the TSOL18 pig vaccine (Cysvax) against Taenia solium.",
    links: [
      { label: "GALVmed — first licensed vaccine against porcine cysticercosis", url: "https://www.galvmed.org/news/first-ever-licenced-vaccine-major-cause-epilepsy-developing-world/" },
      { label: "TSOL18 vaccine and oxfendazole for control of Taenia solium (PLOS NTD)", url: "https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0008785" },
    ],
    diseases: ["taeniasis-cysticercosis"],
    pathogens: ["taenia-solium"],
    technologies: ["tsol18-vaccine"],
    institutions: ["galvmed"],
    countries: ["uganda"],
    terms: ["one-health", "zoonosis"],
    stats: [
      { label: "Developed", value: "TSOL18 (Cysvax)" },
      { label: "Licensed", value: "First vaccine against porcine cysticercosis" },
    ],
  },
];
