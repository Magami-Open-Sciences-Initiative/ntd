import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Yaws 2026 fact-check additions: the three-round MDA trial, linezolid and
 * the LAMP resistance assay, the Ghana/Côte d'Ivoire/One Health groups, and
 * the people/ideas review. The headline correction (15 endemic countries,
 * not 13) and the H. ducreyi diagnostic pitfall went into the disease record
 * and spike. Ordinary records of their kind, kept in one file so the review
 * is visible as a set; wired into `index.ts` alongside TRACHOMA_2026.
 */
export const YAWS_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "yaws-three-round-trial",
        name: "Three rounds of mass azithromycin for yaws eradication (Papua New Guinea)",
        tldr: "The trial showing three MDA rounds at six-month intervals beat one — reshaping how yaws is treated.",
        summary:
          "This trial in Papua New Guinea compared three rounds of mass azithromycin at six-month intervals with a single round, and found that repeated dosing significantly reduced both active and latent yaws. It is one of the most consequential yaws results in years: it showed that one round of total community treatment is not enough where transmission is intense, and it supports combining repeated MDA with active surveillance between rounds to interrupt transmission sooner. The finding directly changed operational guidance for the endemic countries still running campaigns.",
        ...R,
        phase: "Cluster-randomised trial",
        registry: "NCT03490123; Papua New Guinea; reported 2022",
        registryUrl: "https://clinicaltrials.gov/study/NCT03490123",
        status: "Reported positive",
        intervention: "Three rounds of mass azithromycin (6-month intervals) vs one round",
        result: "Three rounds reduced active and latent yaws substantially more than one.",
        links: [
          { label: "Three rounds of mass azithromycin for yaws (Lancet 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/34986286" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin"],
        technologies: ["total-community-treatment", "mass-drug-administration"],
        terms: ["mda", "elimination"],
        stats: [
          { label: "Finding", value: "3 rounds beat 1", note: "active and latent yaws both reduced more" },
        ],
      },
      {
        id: "linezolid-yaws",
        name: "Linezolid for yaws (including macrolide-resistant disease)",
        tldr: "A cheap oral oxazolidinone evaluated as the back-up to azithromycin.",
        summary:
          "Because the entire yaws eradication strategy rests on a single antibiotic, a resistance-proof alternative matters. Linezolid — a low-cost oral oxazolidinone — has in-vitro and in-vivo activity against Treponema pallidum, and clinical research is evaluating it as a treatment for macrolide-resistant yaws. If it works at a practical dose, it gives programmes a second oral option that does not depend on the cold chain and injections that benzathine penicillin requires.",
        ...R,
        phase: "Clinical evaluation (drug repurposing)",
        registry: "NCT05764876",
        registryUrl: "https://clinicaltrials.gov/study/NCT05764876",
        status: "Under investigation",
        intervention: "Linezolid, oral",
        result: "Activity against T. pallidum; being assessed as an alternative for macrolide-resistant yaws.",
        links: [
          { label: "Linezolid activity against T. pallidum (2021)", url: "https://pubmed.ncbi.nlm.nih.gov/33721817" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        drugs: ["azithromycin"],
        terms: ["macrolide-resistance"],
      },
      {
        id: "yaws-mda-transmission-2026",
        name: "Repeated MDA and yaws transmission (retrospective genomic analysis)",
        tldr: "Genomic tracking showing that repeated mass treatment actually reduces transmission, not just cases.",
        summary:
          "This retrospective analysis used genomic and epidemiological data to measure the effect of repeated mass drug administration on yaws transmission — testing whether the fall in reported cases reflects genuine interruption or merely suppressed detection. Genomic transmission tracking gives the evidence that programmes need to certify progress, and it complements the three-round trial by showing what repeated MDA does to the parasite population over time.",
        ...R,
        phase: "Retrospective genomic analysis",
        registry: "Lancet Microbe 2026",
        status: "Reported 2026",
        intervention: "Repeated mass azithromycin administration",
        result: "Repeated MDA reduced yaws transmission, supporting the current eradication strategy.",
        links: [
          { label: "Effect of repeated MDA on yaws transmission (Lancet Microbe 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41512898" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        drugs: ["azithromycin"],
        technologies: ["genomic-surveillance", "mass-drug-administration"],
        terms: ["elimination", "eot"],
      },
    ],
  },

  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "lamp-yaws",
        name: "LAMP assay for yaws and azithromycin resistance",
        tldr: "A field-usable molecular test for treponemes and the resistance mutations, trialled in West Africa.",
        summary:
          "Loop-mediated isothermal amplification (LAMP) can detect Treponema DNA without the laboratory infrastructure PCR needs. The EDCTP is supporting evaluation of a LAMP assay that detects both treponemes and azithromycin-resistance mutations in Cameroon, Côte d'Ivoire and Ghana — the piece that would let programmes monitor for resistance in the field rather than discovering it after a campaign fails. It answers one of the two diagnostic target product profiles WHO set for yaws eradication: the resistance test.",
        ...R,
        method: "Loop-mediated isothermal amplification (LAMP) detecting Treponema DNA and macrolide-resistance mutations",
        sampleType: "Skin lesion swab",
        performance: "Designed for field use without a full molecular laboratory; under evaluation",
        availability: "In evaluation in Cameroon, Côte d'Ivoire and Ghana (EDCTP-supported)",
        turnaround: "Same-day where deployed",
        links: [
          { label: "WHO — yaws (fact sheet, LAMP evaluation)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        technologies: ["molecular-lamp"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["sensitivity-specificity", "macrolide-resistance"],
        stats: [
          { label: "What it detects", value: "Treponemes + resistance mutations", note: "the missing field resistance test" },
        ],
      },
    ],
  },

  /* ------------------------------ pathogens ------------------------------ */
  {
    kind: "pathogens",
    records: [
      {
        id: "treponema-pallidum-endemicum",
        name: "Treponema pallidum subsp. endemicum",
        tldr: "The bejel (endemic syphilis) bacterium — non-venereal in the Sahel, but now turning up as an STI in Japan and Cuba.",
        summary:
          "Bejel, or endemic syphilis, is one of the endemic treponematoses alongside yaws and pinta, and was formally named Treponema pallidum subsp. endemicum in 2026 (the third subspecies distinguished by genomics, with subsp. pallidum and subsp. pertenue). Historically it affects children in arid, disadvantaged communities of the Sahel, the Middle East and parts of Asia, spreading by skin and mucous-membrane contact rather than sexually, and causing oral lesions and later destructive gummatous lesions of skin and bone. The notable recent development is its appearance as a sexually transmitted infection: whole-genome analyses have identified subsp. endemicum in men who have sex with men in Japan (2019–2023) and in Cuba, where it had been misdiagnosed as venereal syphilis — blurring the classical divide between the venereal and non-venereal treponematoses.",
        ...R,
        organism: "Bacterium",
        taxonomy: "Spirochaetes, Treponemataceae",
        reservoir: "Humans",
        biology:
          "Genetically close to T. pallidum subsp. pallidum (syphilis) and subsp. pertenue (yaws) but a distinct subspecies by genomics; uncultivable in routine laboratories, so it is identified by serology and PCR/whole-genome sequencing.",
        lifecycle:
          "Classically spread by non-sexual skin and mucous-membrane contact, especially among children in arid, resource-poor settings; recent evidence of sexual transmission among men who have sex with men shows the route is not fixed.",
        links: [
          { label: "Formal description of the T. pallidum subspecies, incl. subsp. endemicum (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42495970" },
          { label: "Whole-genome analysis of subsp. endemicum among MSM, Japan 2020–2023 (EID 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41987031" },
          { label: "Bejel among men who have sex with men, Japan (EID 2019)", url: "https://pubmed.ncbi.nlm.nih.gov/31310214" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin", "benzathine-penicillin"],
        technologies: ["genomic-surveillance"],
        stats: [
          { label: "Formal subspecies naming", value: "2026", year: 2026, note: "subsp. endemicum formally described" },
          { label: "Transmission", value: "Non-venereal — classically", note: "sexual transmission documented in Japan and Cuba" },
        ],
      },
      {
        id: "treponema-carateum",
        name: "Treponema carateum",
        tldr: "The pinta bacterium — a skin-only treponeme of the Americas whose current status nobody is sure of.",
        summary:
          "Pinta is the third endemic treponematosis, caused by Treponema carateum (a species distinct from T. pallidum, and not covered by the 2026 subspecies reclassification). It is confined to the skin — it does not attack bone or cartilage — and presents as pigmentary changes that can become disfiguring. Historically it affected poor rural communities in Latin America, spread by skin-to-skin contact. Pinta has had no confirmed cases reported for decades and may have been eliminated, but with no dedicated surveillance and no clear confirmation, its true current status is unknown — the same evidentiary gap that keeps 76 formerly yaws-endemic countries in WHO's 'unknown' group. Ancient-genome work from the Americas, including a 5,500-year-old T. pallidum genome from Colombia, is filling in the deep history of the treponematoses on the continent.",
        ...R,
        organism: "Bacterium",
        taxonomy: "Spirochaetes, Treponemataceae",
        reservoir: "Humans",
        biology:
          "Uncultivable in routine laboratories; identified by serology and molecular methods. Unlike the other treponematoses, disease is limited to the skin, with pigmentary and atrophic changes rather than bone or cartilage destruction.",
        lifecycle:
          "Spread by direct skin-to-skin contact in rural Latin America; no non-human reservoir is known.",
        links: [
          { label: "WHO — Yaws (describes the endemic treponematoses, incl. pinta)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
          { label: "A 5,500-year-old Treponema pallidum genome from Colombia (Science 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41570125" },
        ],
        diseases: ["yaws"],
        technologies: ["genomic-surveillance"],
        stats: [
          { label: "Current status", value: "Unknown", note: "no confirmed cases for decades; no dedicated surveillance" },
          { label: "Distribution", value: "Latin America (historically)" },
        ],
      },
    ],
  },

  /* -------------------------------- terms -------------------------------- */
  {
    kind: "terms",
    records: [
      {
        id: "endemic-treponematoses",
        name: "Endemic treponematoses",
        tldr: "Three closely related non-venereal treponemal diseases — yaws, bejel and pinta — grouped because they share a biology and a control strategy.",
        summary:
          "The endemic treponematoses are yaws (Treponema pallidum subsp. pertenue), bejel or endemic syphilis (T. pallidum subsp. endemicum) and pinta (T. carateum). All are caused by uncultivable spirochaetes closely related to the agent of venereal syphilis, all are transmitted by skin or mucous-membrane contact rather than sexually (at least classically), and all are treated with the same drugs — azithromycin or benzathine penicillin. Grouping matters operationally: because serology cannot tell the treponemes apart, a yaws programme's surveillance must actively separate true yaws from syphilis, from bejel, from Haemophilus ducreyi ulcers, and from pinta. Yaws is by far the most common and the only one with a formal eradication target; pinta's current status is unknown, and bejel — classically a disease of the arid Sahel — has more recently appeared as a sexually transmitted infection in East Asia and Cuba.",
        ...R,
        category: "Disease group",
        aka: "non-venereal treponematoses, endemic syphilis (bejel), pinta",
        links: [
          { label: "WHO — Yaws (endemic treponematoses)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
        ],
        related: ["ntd", "elimination", "sensitivity-specificity"],
        stats: [
          { label: "The three diseases", value: "Yaws, bejel, pinta" },
          { label: "Only one with an eradication target", value: "Yaws", note: "bejel and pinta are not formally targeted" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "kccr-yaws",
        name: "Kumasi Centre for Collaborative Research (KCCR) yaws group, Ghana",
        tldr: "The Ghanaian group producing the seroprevalence, geospatial and treatment-outcome evidence for yaws.",
        summary:
          "The Kumasi Centre for Collaborative Research in Tropical Medicine at KNUST, with researchers including Richard Phillips, Yaw Amoako and Abigail Agbanyo, runs yaws seroprevalence and geospatial epidemiology, studies the effect of Haemophilus ducreyi co-infection on treatment outcomes, and supports Ghana's national yaws programme. Ghana is one of the west African countries still known to be endemic, and this group supplies the national evidence base.",
        ...R,
        institutionType: "Research centre",
        country: "Ghana",
        city: "Kumasi",
        focus: "Yaws seroprevalence, geospatial epidemiology and treatment outcomes in Ghana.",
        links: [
          { label: "Seroprevalence and geospatial epidemiology of yaws, Ghana (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41100565" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        drugs: ["azithromycin"],
        institutions: ["who"],
        countries: ["ghana"],
      },
      {
        id: "fli-one-health",
        name: "Friedrich-Loeffler-Institut One Health group (Germany)",
        tldr: "The German One Health group that finds — and rules out — yaws in African skin ulcers and wildlife.",
        summary:
          "The Institute of International Animal Health/One Health at the Friedrich-Loeffler-Institut, with Sascha Knauf, applies a One Health lens to treponemal disease in Africa: surveying skin ulcers in schoolchildren and detecting Haemophilus ducreyi where yaws was suspected, and investigating treponemes in non-human primates to understand the reservoir question. Their work tests the assumption — still uncertain — that humans are the only reservoir of yaws.",
        ...R,
        institutionType: "Research institute group",
        country: "Germany",
        focus: "One Health investigation of treponemal disease and H. ducreyi in Africa.",
        links: [
          { label: "Absence of human yaws and detection of H. ducreyi in Tanzania (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42743363" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        terms: ["one-health", "zoonosis"],
      },
      {
        id: "pnlub-ci",
        name: "Côte d'Ivoire national yaws and Buruli ulcer programme",
        tldr: "The Ivorian programme treating yaws and Buruli ulcer as one skin-NTD problem.",
        summary:
          "Côte d'Ivoire's national programme for Buruli ulcer and other ulcerative skin diseases (PNLUB) runs yaws active case-detection surveys — including a 15-district survey reported in 2026 — and embodies the integrated skin-NTD approach WHO recommends, where yaws, Buruli ulcer and other ulcerating conditions are found and managed together. It is the operational model for reaching the last cases through the skin-NTD rather than a stand-alone yaws programme.",
        ...R,
        institutionType: "National disease programme",
        country: "Côte d'Ivoire",
        focus: "Integrated yaws and Buruli ulcer case-detection and skin-NTD control.",
        links: [
          { label: "Yaws active case detection in 15 districts of Côte d'Ivoire (PLoS One 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42207768" },
        ],
        diseases: ["yaws", "buruli-ulcer"],
        technologies: ["community-health-workers"],
        institutions: ["who"],
        terms: ["elimination"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "david-smajs",
        name: "David Šmajs",
        tldr: "The Czech genomicist who has defined the Treponema subspecies behind yaws.",
        summary:
          "David Šmajs (Masaryk University, Brno) is among the most prolific current authors on treponemal disease, working on the genomics, taxonomy and typing of Treponema pallidum subspecies — including the 2026 formal reclassification of the subspecies. Because yaws, syphilis, bejel and pinta are near-identical subspecies, understanding their genomes is how programmes tell them apart, and Šmajs's laboratory supplies that.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Masaryk University, Brno, Czech Republic",
        knownFor: "Treponema pallidum genomics, taxonomy and typing.",
        links: [
          { label: "Formal description of the T. pallidum subspecies (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42495970" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        technologies: ["genomic-surveillance"],
        terms: ["ntd"],
      },
      {
        id: "sascha-knauf",
        name: "Sascha Knauf",
        tldr: "The One Health researcher disentangling yaws from its look-alikes.",
        summary:
          "Sascha Knauf (Friedrich-Loeffler-Institut, Germany) investigates treponemal disease and Haemophilus ducreyi across the human–animal interface in Africa — including surveys that find H. ducreyi where yaws was suspected, and work on treponemes in non-human primates. His evidence asks whether humans really are the only reservoir, and stops clinical look-alikes from being counted as yaws.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Friedrich-Loeffler-Institut, Germany",
        knownFor: "One Health treponemal disease and H. ducreyi in Africa.",
        links: [
          { label: "Absence of human yaws, detection of H. ducreyi (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42743363" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        institutions: ["fli-one-health"],
        terms: ["one-health", "zoonosis", "ntd"],
      },
      {
        id: "michael-marks",
        name: "Michael Marks",
        tldr: "The London researcher who has mapped yaws and its diagnostics for a decade.",
        summary:
          "Michael Marks (London School of Hygiene & Tropical Medicine) has worked extensively on yaws epidemiology, diagnostics and the syphilis-distinction problem, and on the integrated skin-NTD approach that WHO recommends. His work on rapid tests and on how yaws behaves in the Pacific underpins the diagnostic agenda the eradication strategy depends on.",
        ...R,
        era: "Contemporary",
        role: "Associate Professor, London School of Hygiene & Tropical Medicine",
        knownFor: "Yaws epidemiology, diagnostics and skin-NTD integration.",
        links: [
          { label: "Marks yaws publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Marks+M+yaws" },
        ],
        diseases: ["yaws"],
        institutions: ["lshtm"],
        diagnostics: ["yaws-dual-rdt"],
        terms: ["diagnostics-gap", "ntd"],
      },
      {
        id: "richard-phillips",
        name: "Richard Odame Phillips",
        tldr: "The Ghanaian infectious-diseases lead building the yaws evidence in West Africa.",
        summary:
          "Richard Phillips (Kumasi Centre for Collaborative Research, KNUST, Ghana) leads research on yaws and other skin NTDs in Ghana, including seroprevalence and geospatial epidemiology and treatment-outcome studies. Ghana remains one of the known-endemic countries, and his group is the national research backbone for the eradication effort.",
        ...R,
        era: "Contemporary",
        role: "Professor of Medicine, Kumasi Centre for Collaborative Research, KNUST, Ghana",
        knownFor: "Yaws and skin-NTD research in Ghana.",
        links: [
          { label: "Seroprevalence and geospatial epidemiology of yaws, Ghana (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41100565" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin"],
        institutions: ["kccr-yaws"],
        countries: ["ghana"],
        terms: ["ntd"],
      },
      {
        id: "yaw-amoako",
        name: "Yaw Agyeman Amoako",
        tldr: "The Ghanaian researcher testing how co-infections change yaws treatment.",
        summary:
          "Yaw Amoako (KCCR, KNUST, Ghana) works on yaws treatment outcomes and the role of Haemophilus ducreyi co-infection — a question that matters because many ulcers treated as yaws are actually a different organism, so outcomes attributed to yaws may reflect a mixed caseload. His studies also look at nutritional status in people with yaws.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kumasi Centre for Collaborative Research, KNUST, Ghana",
        knownFor: "Yaws treatment outcomes and H. ducreyi co-infection.",
        links: [
          { label: "H. ducreyi co-infection and yaws treatment outcomes (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41911295" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin"],
        institutions: ["kccr-yaws"],
        countries: ["ghana"],
        terms: ["ntd"],
      },
      {
        id: "abigail-agbanyo",
        name: "Abigail Agbanyo",
        tldr: "The Ghanaian researcher mapping where yaws persists.",
        summary:
          "Abigail Agbanyo (KCCR, KNUST, Ghana) works on the seroprevalence and geospatial epidemiology of yaws in Ghana and on the role of H. ducreyi co-infection. Knowing where yaws still circulates — district by district — is the precondition for targeting mass treatment in a country working toward eradication.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kumasi Centre for Collaborative Research, KNUST, Ghana",
        knownFor: "Yaws seroprevalence and geospatial epidemiology in Ghana.",
        links: [
          { label: "Seroprevalence and geospatial epidemiology of yaws, Ghana (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41100565" },
        ],
        diseases: ["yaws"],
        institutions: ["kccr-yaws"],
        countries: ["ghana"],
        diagnostics: ["yaws-dual-rdt"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "sara-eyangoh",
        name: "Sara Eyangoh",
        tldr: "The Cameroonian scientist anchoring yaws and skin-NTD work at the Centre Pasteur.",
        summary:
          "Sara Eyangoh (Centre Pasteur du Cameroun, Yaoundé) works on yaws and other skin-related neglected tropical diseases in Cameroon, one of the central African countries central to the eradication effort — including investigating the bacterial causes of yaws-like ulcers in children and their environment. Laboratory science from the Congo Basin is what enables case confirmation there.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Centre Pasteur du Cameroun, Yaoundé",
        knownFor: "Yaws and skin-NTD laboratory research in Cameroon.",
        links: [
          { label: "Bacterial agents in yaws-like ulcers, Cameroon (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42507723" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        diagnostics: ["molecular-pcr"],
        countries: ["cameroon"],
        terms: ["ntd"],
      },
      {
        id: "blaise-beng",
        name: "Blaise V. Beng",
        tldr: "The Cameroonian researcher investigating yaws-like ulcers in children.",
        summary:
          "Blaise Beng (University of Yaoundé I / Centre Pasteur du Cameroun) studies the bacterial agents behind yaws-like ulcers in children and their environment in Cameroon, disentangling true yaws from H. ducreyi and other causes. Correctly attributing ulcers is the difference between a programme that eradicates yaws and one that chases look-alikes.",
        ...R,
        era: "Contemporary",
        role: "Researcher, University of Yaoundé I / Centre Pasteur du Cameroun",
        knownFor: "Aetiology of yaws-like ulcers in Cameroon.",
        links: [
          { label: "Bacterial agents in yaws-like ulcers, Cameroon (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42507723" },
        ],
        diseases: ["yaws"],
        diagnostics: ["molecular-pcr"],
        countries: ["cameroon"],
        terms: ["ntd"],
      },
      {
        id: "aboa-koffi",
        name: "Aboa Paul Koffi",
        tldr: "The Ivorian programme physician running yaws case-detection surveys.",
        summary:
          "Aboa Paul Koffi (Côte d'Ivoire national programme for Buruli ulcer and ulcerative skin diseases) leads active case-detection surveys for yaws, including a 15-district survey reported in 2026. The Ivorian programme is a working example of the integrated skin-NTD model, finding yaws through the same teams that manage Buruli ulcer.",
        ...R,
        era: "Contemporary",
        role: "Programme physician, Côte d'Ivoire national skin-NTD programme",
        knownFor: "Yaws active case-detection surveys in Côte d'Ivoire.",
        links: [
          { label: "Yaws active case detection in 15 districts of Côte d'Ivoire (PLoS One 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42207768" },
        ],
        diseases: ["yaws"],
        institutions: ["pnlub-ci"],
        technologies: ["community-health-workers"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "amber-barton",
        name: "Amber Barton",
        tldr: "The Sanger Institute researcher quantifying how repeated MDA cuts yaws transmission.",
        summary:
          "Amber Barton (Wellcome Sanger Institute, UK) uses genomics and epidemiological analysis to measure the effect of repeated mass drug administration on yaws transmission — including a 2026 retrospective analysis. Genomic transmission tracking is how the field moves from counting cases to proving that transmission has actually fallen.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Wellcome Sanger Institute, UK",
        knownFor: "Genomic analysis of yaws transmission and MDA impact.",
        links: [
          { label: "Effect of repeated MDA on yaws transmission (Lancet Microbe 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41512898" },
        ],
        diseases: ["yaws"],
        technologies: ["genomic-surveillance", "mass-drug-administration"],
        terms: ["elimination", "eot"],
      },
      {
        id: "oriol-mitja",
        name: "Oriol Mitjà",
        tldr: "The Barcelona physician behind the pivotal yaws azithromycin and three-round trials.",
        summary:
          "Oriol Mitjà (Barcelona) led the pivotal work showing a single oral azithromycin dose cures yaws and, later, the Papua New Guinea trial demonstrating that three rounds of mass treatment beat one — the results that underpin the Morges strategy and its revision. Much of the evidence base for yaws eradication comes from his group's Pacific trials.",
        ...R,
        era: "Contemporary",
        role: "Physician-researcher, Barcelona",
        knownFor: "Azithromycin for yaws; three-round MDA trial.",
        links: [
          { label: "Three rounds of mass azithromycin for yaws (Lancet 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/34986286" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin"],
        trials: ["yaws-azithromycin", "yaws-three-round-trial"],
        terms: ["mda", "elimination"],
      },
      {
        id: "kingsley-asiedu",
        name: "Kingsley Asiedu",
        tldr: "The WHO physician who has led the global yaws eradication drive.",
        summary:
          "Kingsley Asiedu (WHO) has coordinated the global yaws eradication effort from Geneva — developing the Morges strategy, securing the azithromycin donation, and supporting countries to run mass treatment and surveillance. In a programme with one drug, one strategy and no vaccine, the WHO coordination function is itself a critical intervention.",
        ...R,
        era: "Contemporary",
        role: "Medical Officer, Department of Control of Neglected Tropical Diseases, WHO",
        knownFor: "Global yaws eradication strategy and coordination.",
        links: [
          { label: "WHO — yaws", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
        ],
        diseases: ["yaws"],
        institutions: ["who"],
        terms: ["elimination", "eot"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "yaws-resistance-test-policy",
        name: "Deploy a field resistance test with a pre-agreed response rule",
        tldr: "Get the LAMP resistance assay into campaigns with a written rule for what to do when resistance appears.",
        summary:
          "Yaws eradication rests on one antibiotic, and resistant strains already exist in Papua New Guinea. The EDCTP LAMP assay will give programmes a field test for both treponemes and macrolide-resistance mutations — but a test without a response rule is theatre. The idea pairs the assay's rollout with an explicit protocol: confirm treatment failure at four weeks, test, and switch failures to benzathine penicillin or (once validated) linezolid, while flagging the district for intensified surveillance. It turns resistance detection from a research question into an operational reflex, which is the only form that protects an eradication campaign.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Introduce the LAMP resistance assay in three west African districts with a written switch protocol; measure time from treatment failure to confirmed resistance, and the proportion of failures correctly re-treated.",
        owner: "WHO with national programmes and EDCTP-supported laboratories",
        links: [
          { label: "WHO — yaws (fact sheet, LAMP evaluation)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin", "benzathine-penicillin"],
        diagnostics: ["lamp-yaws", "yaws-dual-rdt"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap", "funding-gap"],
        terms: ["macrolide-resistance", "elimination"],
        stats: [
          { label: "Stakes", value: "One-drug eradication strategy", note: "resistance is the existential risk" },
        ],
      },
      {
        id: "yaws-last-mile-surveillance",
        name: "Prove the absence: integrated skin-NTD surveillance for the last mile",
        tldr: "76 formerly endemic countries have unknown status — find the hidden cases with skin-NTD teams, not yaws-only campaigns.",
        summary:
          "Yaws cannot be certified eradicated while 76 countries that were endemic in the 1950s have unknown current status, and stand-alone yaws surveillance will never be funded to visit them all. The integrated skin-NTD model — finding yaws, Buruli ulcer, leprosy and other ulcerative conditions with one trained team — is the affordable way to assess them. The idea is a prioritised global surveillance sweep: use existing skin-NTD frameworks and school-based screening to classify the group B countries, with PCR or LAMP confirmation of any suspected case, so the eradication map is based on evidence rather than assumption.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Run integrated skin-NTD active surveillance in a prioritised set of previously endemic countries with unknown status, classifying each and confirming suspected cases molecularly.",
        owner: "WHO with national skin-NTD programmes and partners",
        links: [
          { label: "Challenges to last-mile surveillance (Trop Med Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42188852" },
          { label: "WHO — integrated control of skin NTDs", url: "https://www.who.int/publications/i/item/9789240051423" },
        ],
        diseases: ["yaws", "buruli-ulcer", "leprosy"],
        diagnostics: ["lamp-yaws", "molecular-pcr"],
        institutions: ["who", "pnlub-ci"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Gap", value: "76 countries, unknown status", note: "formerly endemic in the 1950s" },
        ],
      },
      {
        id: "yaws-ducreyi-differential",
        name: "Make H. ducreyi a first-class differential in every yaws programme",
        tldr: "~40% of 'yaws' ulcers are H. ducreyi — test for it, or programmes treat and miscount the wrong disease.",
        summary:
          "About 40% of ulcers clinically misidentified as yaws are caused by Haemophilus ducreyi, and co-infection is associated with worse treatment outcomes — yet most programmes treat on appearance. The idea is to make dual-pathogen testing standard: include H. ducreyi detection in yaws case definitions and surveillance, train frontline workers in the differential, and ensure azithromycin mass treatment is evaluated separately for true treponemal and ducreyi lesions. If a programme cannot say what fraction of the ulcers it treats are actually yaws, it cannot claim to be eliminating yaws — and the appearance-based count may have flattered or obscured progress for years.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add H. ducreyi PCR/LAMP to yaws active case detection in two countries, and re-analyse treatment outcomes by causative organism; adjust case definitions from the results.",
        owner: "National skin-NTD programmes with KCCR and reference laboratories",
        links: [
          { label: "H. ducreyi co-infection and yaws treatment outcomes (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41911295" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin"],
        diagnostics: ["lamp-yaws", "molecular-pcr", "yaws-dual-rdt"],
        institutions: ["kccr-yaws", "fli-one-health"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["sensitivity-specificity", "elimination"],
        stats: [
          { label: "Pitfall", value: "~40% of yaws-like ulcers are H. ducreyi", note: "clinical diagnosis over-counts yaws" },
        ],
      },
      {
        id: "bejel-into-syphilis-differential",
        name: "Put bejel (subsp. endemicum) into every syphilis differential",
        tldr: "Bejel is circulating as an STI in Japan and Cuba — clinics calling it syphilis may be treating the wrong subspecies.",
        summary:
          "For a century the venereal/non-venereal treponematoses were treated as separate worlds, but whole-genome sequencing has shown T. pallidum subsp. endemicum — the classical cause of bejel — transmitting sexually among men who have sex with men in Japan (2019–2023) and in Cuba, where it was misdiagnosed as venereal syphilis. That matters because bejel and syphilis, while both azithromycin- or penicillin-sensitive, have different natural histories, different partner-notification implications and different surveillance meanings: a bejel case recorded as syphilis inflates syphilis counts and hides a re-emerging non-venereal treponeme. The idea is to add subsp. endemicum to the molecular differential in syphilis genomic surveillance, and to prompt clinicians in low-endemic settings to consider bejel when a 'syphilis' case has atypical mouth or skin lesions.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Genotype a sample of 'syphilis' isolates (or lesions) in at least two settings with MSM transmission using subspecies-specific assays, and estimate the proportion that are subsp. endemicum; feed results into national syphilis surveillance.",
        owner: "National STI programmes with reference laboratories and genomic surveillance partners",
        links: [
          { label: "Whole-genome analysis of subsp. endemicum among MSM, Japan 2020–2023 (EID 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41987031" },
          { label: "Formal description of the T. pallidum subspecies (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42495970" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin", "benzathine-penicillin"],
        technologies: ["genomic-surveillance", "molecular-pcr"],
        bottlenecks: ["surveillance-data-gap", "diagnostics-gap"],
        terms: ["endemic-treponematoses", "sensitivity-specificity", "elimination"],
        stats: [
          { label: "New evidence", value: "Bejel as an STI", note: "MSM, Japan and Cuba" },
        ],
      },
      {
        id: "pinta-status-verification",
        name: "Find out whether pinta still exists",
        tldr: "Pinta may be the first human disease eradicated by accident — or it may persist unmeasured. Nobody knows.",
        summary:
          "Pinta, the skin-only endemic treponematosis of Latin America, has had no confirmed case for decades and is widely assumed to have disappeared — but there has been no dedicated surveillance to verify it, and serology cannot distinguish it from other treponemes. Much as 76 formerly yaws-endemic countries remain in WHO's 'unknown' group, pinta's true status is an inference rather than a measurement. The idea is a low-cost verification survey: use existing skin-NTD and dermatology networks in historically endemic areas of Latin America to look for pigmentary lesions consistent with pinta, confirm any candidate molecularly (since T. carateum is genetically distinct), and either document the last cases or produce the negative evidence needed to declare pinta eliminated. A disease eliminated unnoticed deserves at least a record of when it went.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Integrated skin-NTD or dermatology-based active surveillance for pinta-compatible lesions in historically endemic Latin American areas, with molecular confirmation of any candidate; if none found, publish the negative result to support an elimination claim.",
        owner: "PAHO with national dermatology and skin-NTD programmes and reference laboratories",
        links: [
          { label: "WHO — Yaws (endemic treponematoses, incl. pinta)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
          { label: "A 5,500-year-old Treponema pallidum genome from Colombia (Science 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41570125" },
        ],
        diseases: ["yaws"],
        diagnostics: ["molecular-pcr"],
        technologies: ["genomic-surveillance"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["endemic-treponematoses", "elimination", "eot"],
        stats: [
          { label: "The gap", value: "No confirmed cases for decades", note: "but no surveillance either" },
        ],
      },
    ],
  },
];
