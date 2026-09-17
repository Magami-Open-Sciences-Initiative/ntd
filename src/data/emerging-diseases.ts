import type { RecordOf } from "@/lib/schema";

/**
 * Diseases outside the WHO's 21 neglected tropical diseases, included because
 * they overlap with the NTD field in pathogens, vectors, drugs, diagnostics and
 * countries. Each carries an explicit `scope` so the corpus never blurs the
 * boundary between an NTD and a disease that is simply also neglected.
 */
export const emergingDiseases: RecordOf<"diseases">[] = [
  {
    id: "podoconiosis",
    name: "Podoconiosis (non-filarial elephantiasis)",
    tldr: "A non-infectious swelling of the legs caused by walking barefoot on irritant volcanic soil — preventable with shoes and treatable with washing and bandaging.",
    summary:
      "Podoconiosis is not an infection and not transmitted between people. It develops in people who walk barefoot on red clay soils derived from volcanic rock, whose microscopic mineral particles penetrate the skin of the feet and are carried to the lymph nodes, causing progressive inflammation and blockage. Over years the lower legs swell permanently, with episodes of pain, itching and secondary infection. It is concentrated in highland areas of tropical Africa, Central and South America and India, affects an estimated four million people, and is entirely preventable with footwear and manageable with simple foot care. Because it is non-infectious and affects poor farming communities, it has been largely absent from health statistics — which is why it is missing from the WHO NTD list even as it appears in the same communities as the diseases that are on it.",
    asOf: "2026-09",
    scope: "Not on the WHO NTD list — a neglected non-infectious disease, included for context",
    whogroup: "Non-infectious (geochemical)",
    transmission:
      "Not transmitted. Caused by prolonged barefoot contact with irritant volcanic clay soil, so it clusters in specific highland geologies rather than spreading between people.",
    clinical:
      "Progressive, usually bilateral swelling of the lower legs; early stages itch and burn, later stages develop hard nodules, skin thickening and moss-like growths. Painful acute attacks with fever occur and accelerate the disease.",
    diagnosis: "Clinical, by history of barefoot exposure to irritant soil with characteristic swelling; it is distinguished from lymphatic filariasis chiefly by the absence of filarial infection and by its bilateral, below-knee pattern.",
    treatment:
      "No drug cures it. Management is foot hygiene, soaking, emollients, elevation, compression bandaging and treatment of secondary infection; established swelling is not fully reversible, so prevention matters most.",
    control:
      "Footwear, health education, and community-based foot care. Mass drug administration has no role. Because it is a disease of poverty rather than of infection, control is a development intervention.",
    links: [
      { label: "Literature search: podoconiosis", url: "https://pubmed.ncbi.nlm.nih.gov/?term=podoconiosis" },
    ],
    diseases: [],
    technologies: ["foot-hygiene-and-bandaging"],
    countries: ["ethiopia", "uganda"],
    institutions: ["who"],
    terms: ["neglected-populations", "wash", "daly"],
    bottlenecks: ["stigma-and-disability", "costs-and-financing"],
    stats: [
      { label: "People affected", value: "≈ 4 million", note: "estimated, across tropical highlands" },
      { label: "Cause", value: "Volcanic clay soil microparticles" },
      { label: "Prevention", value: "Footwear" },
      { label: "Infectious?", value: "No" },
    ],
    timeline: [
      {
        date: "1970s",
        text: "Ernest Price establishes that the disease is not filarial and links it to irritant volcanic soil, naming it podoconiosis.",
      },
      {
        date: "2011",
        text: "WHO recognises podoconiosis as a neglected condition, though it is not added to the formal NTD list.",
      },
      {
        date: "2010s",
        text: "Community-based treatment and footwear programmes in Ethiopia show the disease can be prevented and managed at scale.",
      },
      {
        date: "2020s",
        text: "Podoconiosis remains absent from WHO NTD reporting, and prevalence estimates still rest on a small number of field surveys.",
      },
    ],
  },

  {
    id: "zika",
    name: "Zika virus disease",
    tldr: "A mostly mild mosquito-borne infection that became a global emergency when it was found to cause severe birth defects.",
    summary:
      "Zika virus is transmitted by Aedes mosquitoes — the same day-biting species that carry dengue and chikungunya — and also sexually and from mother to fetus. Most infections cause a mild fever, rash and joint pain, or no symptoms at all, which is why it spread across the Americas before anyone noticed what it was doing. The reason it matters is congenital Zika syndrome: infection in pregnancy can cause microcephaly, brain abnormalities, seizures and developmental delay. The 2015–2016 epidemic in Brazil produced thousands of affected children and was declared a Public Health Emergency of International Concern. There is no specific treatment and no licensed vaccine.",
    asOf: "2026-09",
    scope: "Not an NTD — an emerging arboviral disease, included for context",
    whogroup: "Arboviral (Aedes-borne)",
    transmission:
      "Bites of Aedes aegypti and Aedes albopictus; also sexual transmission, blood transfusion, and vertical transmission from mother to fetus.",
    clinical:
      "Usually mild or asymptomatic: low fever, maculopapular rash, conjunctivitis, joint and muscle pain. The serious consequence is congenital Zika syndrome — microcephaly, brain malformation, ocular lesions and developmental disability — and, less commonly, Guillain-Barré syndrome in adults.",
    diagnosis: "Molecular testing (RT-PCR) on blood or urine within the first days of illness; serology afterwards, complicated by cross-reaction with dengue and other flaviviruses.",
    treatment: "Supportive care. There is no antiviral and no vaccine.",
    control:
      "Aedes control by reducing container breeding sites, larvicides and adulticides, plus prevention of sexual transmission, screening of blood donors, and strengthened birth-defect surveillance to detect the syndrome early.",
    links: [
      { label: "WHO — Zika virus (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
    ],
    pathogens: ["zika-virus"],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    diagnostics: ["zika-rt-pcr"],
    technologies: ["vector-surveillance", "wolbachia-method", "dengue-vaccination"],
    trials: [],
    institutions: ["who", "paho", "fiocruz"],
    bottlenecks: ["outbreak-response", "surveillance-data-gap", "climate-expansion"],
    terms: ["congenital-zika-syndrome", "vector-borne", "neglected-populations"],
    stats: [
      { label: "Global emergency", value: "Feb–Nov 2016", note: "WHO Public Health Emergency of International Concern" },
      { label: "Brazil, 2015–16", value: "Thousands of congenital cases", note: "concentrated in the northeast" },
      { label: "Antiviral", value: "None" },
      { label: "Licensed vaccine", value: "None" },
    ],
    timeline: [
      { date: "1947", text: "The virus is first isolated in a rhesus monkey in the Zika Forest of Uganda." },
      { date: "2007", text: "The first documented outbreak outside Africa and Asia occurs on Yap Island in Micronesia." },
      { date: "2015", text: "The virus reaches Brazil and spreads rapidly across the Americas; a rise in microcephaly cases is noticed." },
      { date: "2016", text: "WHO declares a Public Health Emergency of International Concern; congenital Zika syndrome is characterised." },
      { date: "2016", text: "The link to Guillain-Barré syndrome is confirmed, and Aedes-borne transmission is established as the main route." },
    ],
  },

  {
    id: "malaria",
    name: "Malaria",
    tldr: "A mosquito-borne parasite that kills a child roughly every minute, and the world's most heavily funded disease of poverty.",
    summary:
      "Malaria is caused by Plasmodium parasites transmitted by Anopheles mosquitoes. Plasmodium falciparum is the deadliest, dominating in sub-Saharan Africa, where the disease kills mostly children under five. It causes cyclical fever, anaemia and, in severe cases, cerebral malaria, respiratory distress and death within days. Cases and deaths fell substantially between 2000 and 2015 through insecticide-treated nets, indoor spraying, rapid diagnostic tests and artemisinin-based combination therapy, but progress has since stalled and in some places reversed as resistance to insecticides and to antimalarials has spread, and as funding has flattened. Two vaccines are now recommended, a fact that would have been unthinkable a decade ago. Malaria is not classified as an NTD, but it overlaps the field entirely — the same vectors, the same communities, the same delivery platforms.",
    asOf: "2026-09",
    scope: "Not an NTD — a major disease of poverty with its own WHO programme, included for context",
    whogroup: "Vector-borne (Anopheles)",
    transmission:
      "Bites of infected female Anopheles mosquitoes, which feed mainly between dusk and dawn; also through blood transfusion and from mother to child, and by sharing needles.",
    clinical:
      "Fever, chills, headache and malaise, often cyclical; severe falciparum malaria causes cerebral involvement, severe anaemia, metabolic acidosis, respiratory distress and multi-organ failure, and can kill within 24 hours of the first symptoms.",
    diagnosis: "Rapid diagnostic tests detecting parasite antigens, and microscopy of stained thick and thin blood films; molecular testing for confirmation, species identification and resistance surveillance.",
    treatment:
      "Artemisinin-based combination therapy for uncomplicated falciparum malaria; intravenous artesunate for severe disease; primaquine or tafenoquine to clear liver-stage parasites in vivax and ovale malaria.",
    control:
      "Insecticide-treated nets and indoor residual spraying, chemoprevention in pregnant women and young children, seasonal chemoprevention, prompt diagnosis and treatment, and now vaccination — under pressure from insecticide and antimalarial resistance.",
    links: [
      { label: "WHO — malaria (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
      { label: "WHO — World malaria report 2024", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2024" },
    ],
    pathogens: ["plasmodium"],
    vectors: ["anopheles-mosquito"],
    drugs: ["artesunate", "artemether-lumefantrine", "primaquine", "tafenoquine", "chloroquine"],
    diagnostics: ["malaria-rdt", "microscopy-thick-smear", "molecular-pcr"],
    targets: ["pfatp4", "pfkelch13"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "malaria-vaccines", "seasonal-malaria-chemoprevention", "gene-drive-mosquitoes", "ai-vector-identification"],
    trials: ["rts-s-malaria-pilot", "r21-matrix-m"],
    institutions: ["who", "medicines-for-malaria-venture", "the-global-fund", "gates-foundation", "ifakara", "kemi"],
    bottlenecks: ["antimalarial-resistance", "insecticide-resistance-crisis", "funding-gap", "climate-expansion"],
    terms: ["artemisinin-resistance", "vector-borne", "mda"],
    guidelines: ["who-malaria-guidelines"],
    stats: [
      { label: "Cases (2023)", value: "≈ 263 million", note: "WHO estimate" },
      { label: "Deaths (2023)", value: "≈ 597,000" },
      { label: "Children under 5", value: "≈ 76%", note: "of deaths in the African Region" },
      { label: "Region most affected", value: "Africa", note: "≈ 94% of cases" },
      { label: "Vaccines recommended", value: "2", note: "RTS,S/AS01 and R21/Matrix-M" },
    ],
    timeline: [
      { date: "1897", text: "Ronald Ross shows that mosquitoes transmit malaria, work that won the Nobel Prize." },
      { date: "1955", text: "WHO launches a global malaria eradication campaign, later abandoned as unachievable with the tools of the time." },
      { date: "2000", text: "The Abuja Declaration and the Global Fund renew investment; cases and deaths begin a long decline." },
      { date: "2001", text: "Artemisinin-based combination therapy is adopted as first-line treatment as chloroquine resistance spreads." },
      { date: "2021", text: "WHO recommends RTS,S/AS01, the first malaria vaccine, for children in high-transmission settings." },
      { date: "2023", text: "WHO recommends R21/Matrix-M, a second vaccine with greater and cheaper supply." },
      { date: "2020s", text: "Progress stalls: artemisinin partial resistance in East Africa and insecticide resistance erode the gains." },
    ],
  },

  {
    id: "tuberculosis",
    name: "Tuberculosis",
    tldr: "The world's deadliest single infectious disease after COVID-19, and the disease that has produced the most drug-resistant strains.",
    summary:
      "Tuberculosis is caused by Mycobacterium tuberculosis and usually attacks the lungs, spreading through the air when someone with pulmonary disease coughs. Most infected people never become ill, but about a tenth develop active disease, and the risk is far higher with HIV, diabetes, malnutrition or immunosuppression. Treating it requires a combination of drugs for months, and decades of incomplete or interrupted treatment have produced multidrug-resistant and extensively drug-resistant strains that are far harder and more expensive to cure. It remains one of the top causes of death worldwide, concentrated in the same poor countries as the NTDs, and it shares drugs, diagnostics and laboratories with leprosy and Buruli ulcer.",
    asOf: "2026-09",
    scope: "Not an NTD — a major disease of poverty with its own WHO programme, included for context",
    whogroup: "Airborne bacterial",
    transmission: "Inhaled droplets from a person with active pulmonary tuberculosis, through coughing, sneezing or speaking; prolonged close contact drives most transmission.",
    clinical:
      "Weeks of cough, often with blood, plus fever, night sweats, weight loss and fatigue; extrapulmonary disease affects lymph nodes, bone, meninges and other organs, and is more common with HIV.",
    diagnosis: "Sputum testing with molecular assays that also detect rifampicin resistance, smear microscopy, culture, chest radiography and, increasingly, computer-aided reading; latent infection detected by tuberculin skin test or interferon-gamma release assay.",
    treatment:
      "A multi-drug regimen for four to six months for drug-susceptible disease, with longer regimens including newer drugs such as bedaquiline and pretomanid for resistant disease; treatment must be completed to avoid relapse and resistance.",
    control:
      "Active case-finding and prompt treatment, contact investigation, preventive treatment for high-risk contacts and people with HIV, BCG vaccination of infants, infection control, and surveillance for drug resistance.",
    links: [
      { label: "WHO — tuberculosis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      { label: "WHO — Global tuberculosis report 2024", url: "https://www.who.int/teams/global-programme-on-tuberculosis-and-lung-health/tb-reports/global-tuberculosis-report-2024" },
    ],
    pathogens: ["mycobacterium-tuberculosis", "mycobacterium-leprae"],
    drugs: ["isoniazid", "pyrazinamide", "ethambutol", "pretomanid", "bedaquiline", "rifampicin", "linezolid", "clofazimine"],
    diagnostics: ["xpert-mtb-rif", "tuberculin-skin-test", "molecular-pcr", "gene-cartridge-test"],
    targets: ["atp-synthase", "dpre1", "rna-polymerase", "ddn"],
    technologies: ["bcg-vaccine", "tb-preventive-treatment", "drug-repurposing", "open-science-drug-discovery"],
    trials: ["tb-practecal", "m72-as01e-trial"],
    institutions: ["who", "stop-tb-partnership", "tb-alliance", "the-global-fund", "icmr"],
    bottlenecks: ["drug-resistant-tb", "funding-gap", "diagnostics-gap", "access-and-pricing"],
    terms: ["mdr-tb", "amr", "daly"],
    guidelines: ["who-tb-report"],
    stats: [
      { label: "People falling ill (2023)", value: "≈ 10.8 million", note: "WHO estimate" },
      { label: "Deaths (2023)", value: "≈ 1.25 million", note: "including 161,000 among people with HIV" },
      { label: "Drug-resistant cases", value: "≈ 400,000/yr", note: "multidrug-resistant or rifampicin-resistant" },
      { label: "Leading cause", value: "Infectious disease mortality", note: "after COVID-19" },
    ],
    timeline: [
      { date: "1882", text: "Robert Koch identifies Mycobacterium tuberculosis as the cause, and the organism still bears his name." },
      { date: "1944", text: "Streptomycin becomes the first effective treatment, but resistance appears almost immediately." },
      { date: "1970s", text: "Short-course combination regimens make cure routine in wealthy countries." },
      { date: "1993", text: "WHO declares tuberculosis a global emergency as cases surge with HIV in sub-Saharan Africa." },
      { date: "2022", text: "WHO recommends the BPaLM regimen — a six-month, injection-free cure for multidrug-resistant disease." },
      { date: "2020s", text: "Cases rise again after the pandemic disrupted diagnosis and treatment worldwide." },
    ],
  },

  {
    id: "ebola",
    name: "Ebola disease",
    tldr: "A viral haemorrhagic fever with a case fatality rate that can reach 90%, controlled by vaccines, antibodies and contact tracing rather than by treatment.",
    summary:
      "Ebola disease is caused by orthoebolaviruses and causes fever, vomiting, diarrhoea and haemorrhage, with a case fatality rate that has ranged from about 25% to 90% depending on the outbreak and the standard of care. It spreads through direct contact with the blood or body fluids of someone who is ill or has died, which makes carers, burial attendants and health workers especially vulnerable. The 2014–2016 West African outbreak killed more than 11,000 people and exposed how badly the world was equipped for it. Outbreaks are driven by spillover from animal reservoirs, with fruit bats implicated, and are ended by finding and isolating cases, tracing contacts, and — since 2015 — vaccinating the contacts of cases in a ring. Two monoclonal antibody treatments are now licensed, which made Ebola the first filovirus disease with specific therapy.",
    asOf: "2026-09",
    scope: "Not an NTD — an epidemic-prone viral haemorrhagic fever, included for context",
    whogroup: "Viral haemorrhagic fever (zoonotic)",
    transmission:
      "Direct contact with blood or body fluids of an infected person or corpse, including at funerals; spillover to humans from infected wild animals, with fruit bats implicated as a reservoir.",
    clinical:
      "Abrupt fever, fatigue, muscle pain, headache and sore throat, followed by vomiting, diarrhoea, rash and — in severe cases — haemorrhage, shock, organ failure and death; case fatality has ranged from about 25% to 90%.",
    diagnosis: "Molecular testing (RT-PCR) of blood for the virus; antibody and antigen tests; testing is complicated early in infection when viral loads are low, so repeat testing is common.",
    treatment:
      "Supportive care with fluid, electrolyte and organ support, plus two licensed monoclonal antibody products for Zaire ebolavirus; this is the first filovirus disease with specific treatments.",
    control:
      "Case finding and isolation, contact tracing, safe and dignified burials, infection prevention in health facilities, and ring vaccination with ERVEBO around cases — the strategy that helped end the 2018–2020 outbreak in the Democratic Republic of the Congo.",
    links: [
      { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" },
    ],
    pathogens: ["ebolavirus"],
    drugs: ["ansuvimab"],
    diagnostics: ["ebola-rt-pcr"],
    targets: ["ebola-glycoprotein"],
    technologies: ["ebola-vaccines", "ring-vaccination", "community-health-workers", "mhealth-surveillance"],
    trials: ["ebola-ring-vaccination-trial", "palme-ebola-trial"],
    institutions: ["who", "msf", "cepi"],
    bottlenecks: ["outbreak-response", "conflict-and-displacement", "workforce-and-capacity"],
    terms: ["one-health", "zoonosis", "case-fatality-ratio"],
    stats: [
      { label: "Case fatality rate", value: "25–90%", note: "varies by outbreak and care" },
      { label: "West Africa, 2014–16", value: "> 11,000 deaths" },
      { label: "DRC, 2018–20", value: "2,287 deaths", note: "the second-largest outbreak" },
      { label: "Licensed vaccines", value: "1 earlier, more now", note: "ERVEBO (rVSV-ZEBOV) first licensed 2019" },
      { label: "Licensed treatments", value: "2 monoclonal antibodies" },
    ],
    timeline: [
      { date: "1976", text: "The virus is identified in simultaneous outbreaks in Zaire (now DRC) and Sudan, giving it the name of the Zaire river." },
      { date: "2014", text: "An outbreak begins in West Africa and becomes the largest ever, spreading across Guinea, Sierra Leone and Liberia." },
      { date: "2015", text: "A ring-vaccination trial in Guinea shows the rVSV-ZEBOV vaccine protects contacts, a landmark result." },
      { date: "2019", text: "The first Ebola vaccine is licensed, and the 2018–20 DRC outbreak is the first in which vaccination is used at scale." },
      { date: "2020", text: "Two monoclonal antibody treatments are shown to improve survival, and are later licensed." },
      { date: "2020s", text: "Successive outbreaks in Uganda and the DRC are contained quickly with vaccination and contact tracing." },
    ],
  },
];
