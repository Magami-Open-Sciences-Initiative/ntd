import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Scabies and other ectoparasitoses 2026 fact-check additions: the NEJM
 * severe-scabies combination trial and the dose-escalation negative, the
 * tungiasis DALY burden model and treatment trial, the African research
 * groups, and the people/ideas review. Ordinary records of their kind, kept
 * in one file so the review is visible as a set; wired into `index.ts`
 * alongside NOMA_2026.
 */
export const SCABIES_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "severe-scabies-ivermectin-permethrin",
        name: "Combined oral ivermectin and permethrin for severe scabies (NEJM 2026)",
        tldr: "The randomised trial showing combination therapy cures severe scabies better than permethrin alone — and that raising the ivermectin dose does not.",
        summary:
          "This randomised trial compared standard-dose oral ivermectin plus 5% permethrin cream against topical permethrin alone in patients with severe scabies — abundant mites, often crusted, in whom the probability of cure was previously uncertain and no randomised data existed. The combination improved cure, establishing that the win comes from pairing the two drugs rather than from escalating ivermectin; a parallel analysis confirmed that higher ivermectin doses do not improve outcomes. It gives the field its first randomised evidence for how to treat the most infectious, life-threatening form.",
        ...R,
        phase: "Randomised clinical trial",
        registry: "NEJM 2026 (Bernigaud et al.)",
        status: "Reported 2026",
        intervention: "Oral ivermectin (standard dose) plus 5% permethrin cream vs permethrin alone",
        result: "Combination therapy improved cure over permethrin alone; escalating ivermectin dose did not help.",
        links: [
          { label: "Combined oral ivermectin and 5% permethrin for severe scabies (NEJM 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42090793" },
        ],
        diseases: ["scabies"],
        pathogens: ["sarcoptes-scabiei"],
        drugs: ["ivermectin", "permethrin"],
        stats: [
          { label: "Finding", value: "Combination beats monotherapy", note: "dose escalation does not help" },
        ],
      },
      {
        id: "tungiasis-dimeticone-trial",
        name: "Dimeticone versus sodium carbonate for tungiasis",
        tldr: "A randomised comparison of two field treatments for embedded jigger fleas.",
        summary:
          "Tungiasis treatment is unglamorous and evidence is thin. This randomised, parallel-group study in Kenya compared dimeticone oils with sodium carbonate solution for embedded Tunga penetrans, one of the few head-to-head tests of field-usable treatments for the jigger flea. It addresses a disease that disables people who walk barefoot in infested soil, where the practical question is which simple topical actually works.",
        ...R,
        phase: "Randomised, parallel-group study",
        status: "Reported 2026",
        sponsor: "Kenyan and Japanese investigators",
        intervention: "Dimeticone oils versus sodium carbonate solution",
        result: "Compared efficacy of two field treatments for embedded Tunga penetrans.",
        links: [
          { label: "Dimeticone vs sodium carbonate for tungiasis (Trop Med Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/39042700" },
        ],
        diseases: ["scabies"],
        technologies: ["wash-interventions"],
        terms: ["tungiasis"],
      },
    ],
  },

  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "tungiasis-burden-model",
        name: "Tungiasis DALY burden model",
        tldr: "The first disability-adjusted life-year estimate of tungiasis, giving the jigger flea a quantified global burden.",
        summary:
          "Tungiasis has been on the WHO NTD roadmap since 2021 but had never had its burden estimated. A 2026 modelling study led by Antonopoulos with Elson, Mutebi, Thielecke and colleagues produced the first disability-adjusted life-year estimate across endemic countries in sub-Saharan Africa and Latin America, drawing on prevalence and severity data from Kenya, Uganda and elsewhere. Quantifying a burden is the precondition for counting it in national plans and funding — the same step noma and podoconiosis have each needed.",
        ...R,
        method: "Disability-adjusted life-year (DALY) modelling from prevalence and severity data",
        sampleType: "Population-level (no clinical sample)",
        performance: "First global DALY estimate for tungiasis in endemic countries",
        availability: "Published model; informs advocacy and national planning",
        links: [
          { label: "Global burden of tungiasis, DALY modelling (BMC Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42669661" },
        ],
        diseases: ["scabies"],
        bottlenecks: ["surveillance-data-gap"],
        terms: ["tungiasis", "daly"],
        stats: [
          { label: "Significance", value: "First DALY estimate", note: "tungiasis previously uncounted" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "kemri-tungiasis",
        name: "KEMRI-Wellcome Trust tungiasis group (Kilifi, Kenya)",
        tldr: "The Kenyan programme that turned tungiasis from a footnote into a measured disease.",
        summary:
          "The Kenya Medical Research Institute–Wellcome Trust Research Programme in Kilifi, with Lynne Elson and collaborators, runs the field epidemiology that has given tungiasis its first real numbers — prevalence and spatial distribution in the Kilifi health and demographic surveillance system, the impact on children's quality of life, and the household and parenting factors that shape risk. Working with Kenya's Ministry of Health, the group underpins the 2026 national and global burden estimates and the case for control.",
        ...R,
        institutionType: "Research programme",
        country: "Kenya",
        city: "Kilifi",
        focus: "Tungiasis epidemiology, burden and control in Kenya.",
        links: [
          { label: "Tungiasis in the Kilifi HDSS (BMJ Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41781022" },
        ],
        diseases: ["scabies"],
        technologies: ["vector-surveillance", "community-health-workers"],
        terms: ["tungiasis"],
      },
      {
        id: "makerere-tungiasis",
        name: "Makerere University tungiasis group (Uganda)",
        tldr: "The Ugandan veterinary-public-health group linking tungiasis across people and animals.",
        summary:
          "Francis Mutebi and colleagues at Makerere University's College of Veterinary Medicine work on tungiasis as a zoonosis — its burden in Ugandan communities, its animal reservoirs, and its management through both human and veterinary services. Their contribution to the 2026 global DALY model reflects why the disease needs a One Health response: the sand flea does not respect the line between livestock, pets and people.",
        ...R,
        institutionType: "University research group",
        country: "Uganda",
        focus: "Tungiasis epidemiology and One Health control.",
        links: [
          { label: "Global burden of tungiasis (BMC Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42669661" },
        ],
        diseases: ["scabies"],
        technologies: ["one-health-ntd-integration"],
        terms: ["tungiasis", "one-health"],
      },
      {
        id: "bahir-dar-derm",
        name: "Bahir Dar University dermatology group (Ethiopia)",
        tldr: "The Ethiopian dermatology group documenting scabies, tungiasis and climate-linked skin disease.",
        summary:
          "Wendemagegn Enbiale and the dermatovenereology group at Bahir Dar University in Ethiopia research scabies and tungiasis in the country's high-burden communities, and the effects of climate change on skin disease in the global South. Ethiopia has been among the most important settings for scabies mass treatment and for tungiasis research, and this group carries both lines.",
        ...R,
        institutionType: "University clinical research group",
        country: "Ethiopia",
        city: "Bahir Dar",
        focus: "Scabies, tungiasis and climate-sensitive skin disease in Ethiopia.",
        links: [
          { label: "Climate change and dermatologic diseases in the global South (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41207776" },
        ],
        diseases: ["scabies", "podoconiosis"],
        technologies: ["community-health-workers"],
        terms: ["tungiasis", "stigma-and-disability"],
      },
      {
        id: "knust-scabies",
        name: "KNUST scabies and vector research group (Ghana)",
        tldr: "The Kumasi group evaluating scabies diagnosis and the knock-on of filariasis mass treatment.",
        summary:
          "Jubin Osei-Mensah and Yaw Afrane at Kwame Nkrumah University of Science and Technology, Kumasi, study scabies diagnosis and the impact of onchocerciasis mass drug administration on the scabies burden in Ghana — an important real-world test of whether NTD campaigns inadvertently treat scabies, since ivermectin is shared between the two. It is the integration question the field needs answered with data.",
        ...R,
        institutionType: "University research group",
        country: "Ghana",
        city: "Kumasi",
        focus: "Scabies diagnosis and the effect of filariasis MDA on scabies burden.",
        links: [
          { label: "Scabies diagnosis and onchocerciasis MDA impact in Ghana (BMC Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42237269" },
        ],
        diseases: ["scabies", "onchocerciasis"],
        drugs: ["ivermectin"],
        technologies: ["mass-drug-administration"],
        terms: ["mda"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "lynne-elson",
        name: "Lynne Elson",
        tldr: "The KEMRI-Wellcome researcher who gave tungiasis its first real numbers.",
        summary:
          "Lynne Elson (KEMRI-Wellcome Trust, Kilifi, Kenya) leads the field epidemiology that has measured tungiasis — prevalence and spatial distribution in the Kilifi health and demographic surveillance system, the impact on children's quality of life, and the household behaviours that shape risk — and co-led the 2026 global DALY burden model. For a disease on the WHO roadmap since 2021 but never counted, her datasets are the evidence base.",
        ...R,
        era: "Contemporary",
        role: "Researcher, KEMRI-Wellcome Trust Research Programme, Kilifi, Kenya",
        knownFor: "Tungiasis epidemiology, quality-of-life and burden.",
        links: [
          { label: "Tungiasis in the Kilifi HDSS (BMJ Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41781022" },
        ],
        diseases: ["scabies"],
        institutions: ["kemri-tungiasis", "kemi"],
        countries: ["kenya"],
        technologies: ["vector-surveillance", "community-health-workers"],
        terms: ["tungiasis", "ntd"],
      },
      {
        id: "francis-mutebi",
        name: "Francis Mutebi",
        tldr: "The Makerere veterinary scientist treating tungiasis as a zoonosis.",
        summary:
          "Francis Mutebi (Makerere University, Uganda) studies tungiasis across people and animals — burden, reservoirs and management through both human and veterinary services — and co-led the 2026 global DALY model. His work is the One Health case for a sand flea that infects households and their animals alike.",
        ...R,
        era: "Contemporary",
        role: "Veterinary public health researcher, Makerere University, Uganda",
        knownFor: "Tungiasis epidemiology and One Health control.",
        links: [
          { label: "Global burden of tungiasis (BMC Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42669661" },
        ],
        diseases: ["scabies"],
        institutions: ["makerere-tungiasis"],
        countries: ["uganda"],
        technologies: ["one-health-ntd-integration"],
        terms: ["tungiasis", "one-health", "ntd"],
      },
      {
        id: "wendemagegn-enbiale",
        name: "Wendemagegn Enbiale",
        tldr: "The Ethiopian dermatologist linking scabies, tungiasis and climate change.",
        summary:
          "Wendemagegn Enbiale (Bahir Dar University, Ethiopia) researches scabies and tungiasis in Ethiopia's high-burden communities and the emerging effects of climate change on skin disease. Ethiopia has been central to scabies mass-treatment research and to tungiasis, and his group works at the intersection of the two with a climate lens.",
        ...R,
        era: "Contemporary",
        role: "Dermatologist, Bahir Dar University, Ethiopia",
        knownFor: "Scabies, tungiasis and climate-linked skin disease in Ethiopia.",
        links: [
          { label: "Climate change and dermatologic diseases in the global South (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41207776" },
        ],
        diseases: ["scabies", "podoconiosis"],
        institutions: ["bahir-dar-derm"],
        countries: ["ethiopia"],
        terms: ["tungiasis", "stigma-and-disability", "ntd"],
      },
      {
        id: "jubin-osei-mensah",
        name: "Jubin Osei-Mensah",
        tldr: "The Ghanaian veterinary researcher testing scabies diagnosis and MDA knock-on.",
        summary:
          "Jubin Osei-Mensah (KNUST, Kumasi) assessed scabies diagnosis and the impact of onchocerciasis mass drug administration on scabies burden in Ghana — evidence for whether a shared ivermectin campaign incidentally treats scabies, which matters for how programmes are designed and evaluated.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kwame Nkrumah University of Science and Technology, Ghana",
        knownFor: "Scabies diagnosis and filariasis MDA impact in Ghana.",
        links: [
          { label: "Scabies diagnosis and onchocerciasis MDA impact (BMC Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42237269" },
        ],
        diseases: ["scabies", "onchocerciasis"],
        institutions: ["knust-scabies"],
        countries: ["ghana"],
        technologies: ["mass-drug-administration"],
        terms: ["mda", "ntd"],
      },
      {
        id: "prince-charles-kudzordzi",
        name: "Prince-Charles Kudzordzi",
        tldr: "The Ghanaian parasitologist measuring community scabies knowledge and prevalence.",
        summary:
          "Prince-Charles Kudzordzi (University of Energy and Natural Resources, Ghana) works on neglected tropical diseases and One Health, including community prevalence and knowledge-attitudes-practices studies of scabies. Understanding what communities know about the mite — and do about it — is what determines whether case detection and MDA actually work.",
        ...R,
        era: "Contemporary",
        role: "Researcher, University of Energy and Natural Resources, Ghana",
        knownFor: "Community scabies prevalence and KAP.",
        links: [
          { label: "Community scabies KAP in Ghana (BMC Public Health 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40814086" },
        ],
        diseases: ["scabies"],
        countries: ["ghana"],
        technologies: ["community-health-workers"],
        terms: ["ntd"],
      },
      {
        id: "andrew-steer",
        name: "Andrew Steer",
        tldr: "The paediatrician behind the scabies mass-treatment trials.",
        summary:
          "Andrew Steer (Murdoch Children's Research Institute, Melbourne) has led the major trials establishing that mass drug administration controls scabies at population scale, from the Fiji studies onward, and co-authors the field's trial evidence including the RISE one-versus-two-dose comparison. If scabies MDA is now standard in high-burden settings, his trials are why.",
        ...R,
        era: "Contemporary",
        role: "Paediatrician and researcher, Murdoch Children's Research Institute, Melbourne",
        knownFor: "Scabies MDA trials (Fiji, Pacific).",
        links: [
          { label: "Steer scabies publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Steer+AC+scabies" },
        ],
        diseases: ["scabies"],
        trials: ["scabies-mda-one-vs-two"],
        terms: ["mda", "ntd"],
      },
      {
        id: "daniel-engelman",
        name: "Daniel Engelman",
        tldr: "The Melbourne researcher translating scabies trials into WHO guidance.",
        summary:
          "Daniel Engelman (Murdoch Children's Research Institute, Melbourne) is a leading author of the scabies control evidence base and of the WHO-aligned strategy work — mapping, simplified diagnostic criteria, and the trial and modelling evidence that shapes when and where mass treatment is recommended. He is a co-author of the RISE one-versus-two-dose trial.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Murdoch Children's Research Institute, Melbourne",
        knownFor: "Scabies control strategy and WHO guidance evidence.",
        links: [
          { label: "Engelman scabies publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Engelman+D+scabies" },
        ],
        diseases: ["scabies"],
        trials: ["scabies-mda-one-vs-two"],
        terms: ["mda", "ntd"],
      },
      {
        id: "charlotte-bernigaud",
        name: "Charlotte Bernigaud",
        tldr: "The French researcher who ran the severe-scabies combination trial.",
        summary:
          "Charlotte Bernigaud (Paris) is first author of the 2026 NEJM trial showing that combined oral ivermectin and topical permethrin cures severe scabies better than permethrin alone — the first randomised evidence for treating the most infectious, life-threatening form. She works on scabies biology, animal models and treatment, and on the neglected end of the disease spectrum.",
        ...R,
        era: "Contemporary",
        role: "Researcher, France",
        knownFor: "Severe-scabies combination therapy trial; scabies biology.",
        links: [
          { label: "Combined ivermectin and permethrin for severe scabies (NEJM 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42090793" },
        ],
        diseases: ["scabies"],
        drugs: ["ivermectin", "permethrin"],
        trials: ["severe-scabies-ivermectin-permethrin"],
        terms: ["ntd"],
      },
      {
        id: "olivier-chosidow",
        name: "Olivier Chosidow",
        tldr: "The French dermatologist who has led scabies clinical research for two decades.",
        summary:
          "Olivier Chosidow (Paris) is senior author of the 2026 NEJM severe-scabies combination trial and has led scabies clinical research for years — the trials and syntheses that define how the disease is treated. His group's work spans the full spectrum, from common scabies to the crusted form that seeds hospital outbreaks.",
        ...R,
        era: "Contemporary",
        role: "Dermatologist, France",
        knownFor: "Scabies clinical trials and treatment evidence.",
        links: [
          { label: "Combined ivermectin and permethrin for severe scabies (NEJM 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42090793" },
        ],
        diseases: ["scabies"],
        drugs: ["ivermectin", "permethrin"],
        trials: ["severe-scabies-ivermectin-permethrin"],
        terms: ["ntd"],
      },
      {
        id: "hermann-feldmeier",
        name: "Hermann Feldmeier",
        tldr: "The German researcher who has carried tungiasis science for decades.",
        summary:
          "Hermann Feldmeier (Charité, Berlin) is one of the longest-standing scientific voices on tungiasis, with work spanning its epidemiology, the life cycle of Tunga penetrans, and — in 2025 — community control that reduced prevalence, intensity and morbidity. His contribution to the 2026 DALY model reflects a career spent making an ignored disease measurable.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Charité University Medicine, Berlin",
        knownFor: "Tungiasis epidemiology and community control.",
        links: [
          { label: "Community tungiasis control, two years (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40472067" },
        ],
        diseases: ["scabies"],
        terms: ["tungiasis", "ntd"],
      },
      {
        id: "alistair-antonopoulos",
        name: "Alistair Antonopoulos",
        tldr: "First author of the first global tungiasis burden estimate.",
        summary:
          "Alistair Antonopoulos led the 2026 disability-adjusted life-year modelling of tungiasis in endemic countries — the first global burden estimate for a disease on the WHO roadmap since 2021 but never quantified. Giving tungiasis a number is what lets it compete for the attention it needs.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kreavet, Belgium",
        knownFor: "First global DALY estimate for tungiasis.",
        links: [
          { label: "Global burden of tungiasis, DALY modelling (BMC Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42669661" },
        ],
        diseases: ["scabies"],
        terms: ["tungiasis", "daly", "ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "scabies-integrated-skin-ntd",
        name: "Fold scabies MDA into every skin-NTD and ivermectin campaign",
        tldr: "The same ivermectin already treats scabies, onchocerciasis and filariasis — deliver them as one programme, not three.",
        summary:
          "Ivermectin is shared across scabies, onchocerciasis and lymphatic filariasis, yet the campaigns run separately, duplicating every visit, supply chain and cost. Ghana's KNUST group is already measuring how onchocerciasis MDA affects scabies burden; the WHO 2024 consultation on combined regimens and the integrated skin-NTD framework point the same way. The idea is to make scabies a deliberate co-target — add case detection, topical permethrin for those who cannot take ivermectin, and prevalence measurement to existing ivermectin campaigns, with the azithromycin-plus-combinations question tested head-to-head. It would close the scabies treatment gap at near-zero marginal delivery cost.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add scabies prevalence and impetigo measurement to ongoing onchocerciasis/LF MDA in two settings, comparing scabies outcomes against matched non-integrated areas, and cost the marginal integration.",
        owner: "National NTD programmes with WHO and the KNUST/KEMRI groups",
        links: [
          { label: "WHO — scabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/scabies" },
        ],
        diseases: ["scabies", "onchocerciasis", "lymphatic-filariasis"],
        drugs: ["ivermectin", "permethrin", "albendazole"],
        technologies: ["mass-drug-administration"],
        institutions: ["who", "knust-scabies", "kemi"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["mda", "preventive-chemotherapy"],
        stats: [
          { label: "Leverage", value: "Shared ivermectin", note: "one visit, three diseases" },
        ],
      },
      {
        id: "tungiasis-footwear-integration",
        name: "A tungiasis control package: footwear, treatment and One Health, counted",
        tldr: "The burden is now measured — pair footwear distribution with the best field treatment and animal control, and account for it nationally.",
        summary:
          "The 2026 DALY model finally quantifies tungiasis, and the treatment evidence — dimeticone tested head-to-head against sodium carbonate in Kenya — is improving, but control still runs on ad hoc extraction. The idea packages the field-proven elements: consistent footwear for at-risk children and the elderly, the best-validated topical treatment delivered through schools and community health workers, household sanitation to break the soil cycle, and veterinary treatment of animal reservoirs (the One Health half). Adding tungiasis to national NTD reporting would keep it funded rather than rediscovered.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Deploy a footwear-plus-treatment-plus-veterinary package in two endemic Kenyan and Ugandan communities, measuring prevalence, intensity, quality of life and cost per DALY averted against standard care.",
        owner: "KEMRI and Makerere with national NTD programmes",
        links: [
          { label: "Global burden of tungiasis (BMC Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42669661" },
        ],
        diseases: ["scabies"],
        institutions: ["kemri-tungiasis", "makerere-tungiasis"],
        technologies: ["one-health-ntd-integration", "wash-interventions", "community-health-workers"],
        bottlenecks: ["funding-gap", "surveillance-data-gap"],
        terms: ["tungiasis", "one-health", "daly"],
        stats: [
          { label: "New evidence", value: "First global DALY estimate (2026)", note: "plus a head-to-head treatment trial" },
        ],
      },
      {
        id: "scabies-outbreak-response",
        name: "A standing scabies outbreak-response playbook for camps and institutions",
        tldr: "Refugee camps, prisons and care homes are the highest-risk settings — give them a ready protocol and pre-positioned treatment.",
        summary:
          "Scabies outbreaks in crowded, closed settings — displacement camps, boarding schools, hospitals and care homes — are extended and hard to control, and displacement settings carry a documented high burden. Yet responses are improvised each time. The idea is a standing playbook: surveillance triggers, rapid confirmation, mass treatment of the whole affected population with ivermectin and topical permethrin, contact tracing across shared spaces, and pre-positioned drug stock, built on the WHO outbreak principles and the integrated skin-NTD approach. The same playbook would serve crusted-scabies hospital outbreaks, which seed community reinfection.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pre-position treatment stock and pilot the playbook in one displacement setting and one institutional outbreak, measuring time-to-control and secondary attack rates against historical responses.",
        owner: "WHO, UNHCR and national programmes with MSF",
        links: [
          { label: "Burden of scabies in displacement settings (PLoS NTD 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41433332" },
        ],
        diseases: ["scabies"],
        institutions: ["who", "msf"],
        drugs: ["ivermectin", "permethrin"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["mda", "ntd"],
        stats: [
          { label: "Risk", value: "Crowded, closed settings", note: "outbreaks extended and hard to control" },
        ],
      },
    ],
  },
];
