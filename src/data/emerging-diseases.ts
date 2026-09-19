import type { RecordOf } from "@/lib/schema";
import { icd10 } from "./icd10";

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
    icd10: [icd10("I89.0", "Lymphoedema, not elsewhere classified — no ICD-10 code specific to podoconiosis")],
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
      { label: "PLoS NTD — health and economic burden of podoconiosis in East Africa (2026)", url: "https://doi.org/10.1371/journal.pntd.0014427" },
      { label: "PLoS NTD — podoconiosis in Rwanda (2026)", url: "https://doi.org/10.1371/journal.pntd.0014652" },
    ],
    diseases: [],
    technologies: ["foot-hygiene-and-bandaging", "community-health-workers"],
    trials: ["podoconiosis-ai-detection"],
    countries: ["ethiopia", "uganda", "cameroon"],
    institutions: ["who", "brighton-sussex", "addis-ababa-university", "footwork"],
    people: ["gail-davey", "kebede-deribe", "abebayehu-tora", "samuel-wanji", "maya-semrau"],
    terms: ["neglected-populations", "wash", "daly", "tungiasis"],
    bottlenecks: ["stigma-and-disability", "costs-and-financing", "surveillance-data-gap"],
    stats: [
      {
        label: "People affected",
        value: "4 million",
        number: 4,
        unit: "million people",
        geography: "global",
        note: "estimated; absent from the Global Burden of Disease study",
        source: { label: "PLoS NTD — health and economic burden of podoconiosis in East Africa (2026)", url: "https://doi.org/10.1371/journal.pntd.0014427" },
      },
      {
        label: "Countries with documented cases",
        value: "> 32",
        number: 32,
        unit: "countries",
        geography: "global",
        note: "18 of them in Africa",
        source: { label: "PLoS NTD — podoconiosis in Rwanda (2026)", url: "https://doi.org/10.1371/journal.pntd.0014652" },
      },
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
        date: "2012",
        text: "A genetic study shows podoconiosis has a heritable susceptibility component, identifying the first HLA associations.",
      },
      {
        date: "2026",
        text: "Systematic reviews confirm an estimated 4 million people affected and cases in more than 32 countries, while the disease stays absent from the Global Burden of Disease study; a trial opens AI-based early detection of skin NTDs including podoconiosis.",
        refs: ["podoconiosis-ai-detection"],
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
    icd10: [icd10("A92.5", "Zika virus disease")],
    transmission:
      "Bites of Aedes aegypti and Aedes albopictus; also sexual transmission, blood transfusion, and vertical transmission from mother to fetus.",
    clinical:
      "Usually mild or asymptomatic: low fever, maculopapular rash, conjunctivitis, joint and muscle pain, lasting 2–7 days. The serious consequences are congenital Zika syndrome — microcephaly, brain malformation, ocular and hearing abnormalities and developmental disability, as well as fetal loss, stillbirth and preterm birth — and, in adults and older children, Guillain-Barré syndrome, neuropathy and myelitis.",
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
    targets: ["zika-ns5"],
    technologies: ["vector-surveillance", "wolbachia-method", "dengue-vaccination"],
    trials: ["zika-dna-vaccine-vrc705"],
    institutions: ["who", "paho", "fiocruz", "uvri", "ipd"],
    people: ["patricia-brasil", "julius-lutwama", "ousmane-faye"],
    bottlenecks: ["outbreak-response", "surveillance-data-gap", "climate-expansion", "vaccine-gap"],
    terms: ["congenital-zika-syndrome", "vector-borne", "neglected-populations"],
    stats: [
      {
        label: "Global emergency",
        value: "Feb–Nov 2016",
        note: "WHO Public Health Emergency of International Concern over microcephaly and other neurological disorders",
        source: { label: "WHO — Zika virus (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
      },
      {
        label: "Countries reporting mosquito transmission",
        value: "92",
        number: 92,
        unit: "countries and territories",
        geography: "global",
        note: "surveillance remains limited, so this is a floor",
        source: { label: "WHO — Zika virus (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
      },
      {
        label: "Congenital complications",
        value: "5–15%",
        unit: "%",
        geography: "global",
        note: "of infants born to women infected during pregnancy have evidence of Zika-related complications",
        source: { label: "WHO — Zika virus (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
      },
      { label: "Brazil, 2015–16", value: "Thousands of congenital cases", note: "concentrated in the northeast", source: { label: "WHO — Zika virus (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" } },
      { label: "Global trend", value: "Declining since 2017", note: "but transmission persists at low levels in the Americas, Asia and Africa", source: { label: "WHO — Zika virus (fact sheet, 6 November 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" } },
      { label: "First local European cases", value: "2019", note: "mosquito-transmitted transmission reported in Europe", source: { label: "WHO — Zika virus (fact sheet, 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" } },
      { label: "Antiviral", value: "None" },
      { label: "Licensed vaccine", value: "None", note: "the largest efficacy trial (VRC 705, n=2,428) completed without a licensed product" },
    ],
    timeline: [
      { date: "1947", text: "The virus is first isolated in a rhesus monkey in the Zika Forest of Uganda." },
      { date: "2007", text: "The first documented outbreak outside Africa and Asia occurs on Yap Island in Micronesia." },
      { date: "2015", text: "The virus reaches Brazil and spreads rapidly across the Americas; a rise in microcephaly cases is noticed." },
      { date: "2016", text: "WHO declares a Public Health Emergency of International Concern; congenital Zika syndrome is characterised." },
      { date: "2016", text: "The link to Guillain-Barré syndrome is confirmed, and Aedes-borne transmission is established as the main route." },
      { date: "2017", text: "Global cases decline sharply after the epidemic peak; transmission persists at low levels in the Americas, Asia and Africa." },
      { date: "2019", text: "The first locally acquired mosquito-transmitted Zika cases are reported in Europe." },
      { date: "2022", text: "WHO launches the Global Arbovirus Initiative, folding Zika, dengue and chikungunya into one surveillance and control framework." },
      { date: "2025", text: "An individual-participant meta-analysis firms up the estimate that 5–15% of pregnancies infected with Zika have evidence of Zika-related complications." },
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
    icd10: [icd10("B50", "Plasmodium falciparum malaria"), icd10("B51", "Plasmodium vivax malaria"), icd10("B52", "Plasmodium malariae malaria"), icd10("B54", "Malaria, unspecified")],
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
    drugs: ["artesunate", "artemether-lumefantrine", "primaquine", "tafenoquine", "chloroquine", "ganaplacide", "cipargamin"],
    diagnostics: ["malaria-rdt", "microscopy-thick-smear", "molecular-pcr"],
    targets: ["pfatp4", "pfkelch13"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "malaria-vaccines", "seasonal-malaria-chemoprevention", "gene-drive-mosquitoes", "ai-vector-identification"],
    trials: ["rts-s-malaria-pilot", "r21-matrix-m", "kaluma-ganlum-ph3", "mvip-mortality-evaluation", "cipargamin-ganlum-ph2"],
    institutions: ["who", "medicines-for-malaria-venture", "the-global-fund", "gates-foundation", "ifakara", "kemi"],
    bottlenecks: ["antimalarial-resistance", "insecticide-resistance-crisis", "funding-gap", "climate-expansion"],
    terms: ["artemisinin-resistance", "vector-borne", "mda"],
    guidelines: ["who-malaria-guidelines"],
    stats: [
      { label: "Cases (2024)", value: "282 million", number: 282, unit: "million cases", year: 2024, geography: "80 countries", note: "up about 9 million (3%) on 2023; 2.3B cases and 14M deaths averted since 2000", source: { label: "WHO — World malaria report 2025", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2025" } },
      { label: "Deaths (2024)", value: "610,000", number: 610000, unit: "deaths", year: 2024, geography: "global", note: "up from 598,000 in 2023; 1M lives saved by new tools in 2024 alone", source: { label: "WHO — malaria (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" } },
      { label: "African Region share", value: "95%", number: 95, unit: "%", year: 2024, geography: "WHO African Region", note: "265 million cases and 579,000 deaths; 11 countries carry two-thirds of the global burden", source: { label: "WHO — malaria (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" } },
      { label: "Children under 5", value: "~76%", unit: "%", geography: "WHO African Region", note: "of all malaria deaths in the Region (438,000 children in 2024)", source: { label: "WHO — malaria (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" } },
      { label: "Vaccines recommended", value: "2", number: 2, unit: "vaccines", note: "RTS,S/AS01 (2021) and R21/Matrix-M (2023); 25 African countries rolling out, >10M children/yr targeted; RTS,S cut all-cause child mortality 13% (Lancet 2026)", source: { label: "WHO — malaria vaccines Q&A", url: "http://who.int/news-room/questions-and-answers/item/q-a-on-rts-s-malaria-vaccine" } },
      { label: "Funding (2024)", value: "$3.9 billion (42% of target)", number: 3.9, unit: "USD billion", year: 2024, geography: "global", note: "against the $9.3B annual target; ODA down ~21%", source: { label: "WHO — World malaria report 2025", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2025" } },
    ],
    timeline: [
      { date: "1897", text: "Ronald Ross shows that mosquitoes transmit malaria, work that won the Nobel Prize." },
      { date: "1955", text: "WHO launches a global malaria eradication campaign, later abandoned as unachievable with the tools of the time." },
      { date: "2000", text: "The Abuja Declaration and the Global Fund renew investment; cases and deaths begin a long decline." },
      { date: "2001", text: "Artemisinin-based combination therapy is adopted as first-line treatment as chloroquine resistance spreads." },
      { date: "2021", text: "WHO recommends RTS,S/AS01, the first malaria vaccine, for children in high-transmission settings." },
      { date: "2023", text: "WHO recommends R21/Matrix-M, a second vaccine with greater and cheaper supply." },
      { date: "2025", text: "GanLum (ganaplacide-lumefantrine) meets its Phase 3 primary endpoint — the first novel malaria treatment since 1999; Swissmedic approves Coartem Baby for infants under 5 kg.", refs: ["ganaplacide", "kaluma-ganlum-ph3"] },
      { date: "2026", text: "A Lancet evaluation confirms RTS,S cut all-cause child mortality 13% across Ghana, Kenya and Malawi; artemisinin partial resistance is confirmed in 4 African countries and suspected in 4 more.", refs: ["mvip-mortality-evaluation", "pfkelch13"] },
      { date: "2020s", text: "Progress stalls: artemisinin partial resistance in East Africa and insecticide resistance erode the gains.", refs: ["pfkelch13"] },
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
    icd10: [icd10("A15", "Respiratory tuberculosis, bacteriologically confirmed"), icd10("A18", "Tuberculosis of other organs"), icd10("A19", "Miliary tuberculosis")],
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
    pathogens: ["mycobacterium-tuberculosis"],
    drugs: ["isoniazid", "pyrazinamide", "ethambutol", "pretomanid", "bedaquiline", "rifampicin", "linezolid", "clofazimine", "moxifloxacin"],
    diagnostics: ["xpert-mtb-rif", "tuberculin-skin-test", "molecular-pcr", "gene-cartridge-test"],
    targets: ["atp-synthase", "dpre1", "rna-polymerase", "ddn", "inha", "pnca"],
    technologies: ["bcg-vaccine", "tb-preventive-treatment", "drug-repurposing", "open-science-drug-discovery"],
    trials: ["tb-practecal", "m72-as01e-trial", "tb-children-shortened-regimen"],
    institutions: ["who", "stop-tb-partnership", "tb-alliance", "the-global-fund", "icmr", "makerere-university"],
    people: ["harriet-mayanja-kizza", "stavia-turyahabwe", "gerhard-walzl"],
    bottlenecks: ["drug-resistant-tb", "funding-gap", "diagnostics-gap", "access-and-pricing"],
    terms: ["mdr-tb", "amr", "daly"],
    guidelines: ["who-tb-report"],
    stats: [
      {
        label: "People falling ill",
        value: "10.7 million",
        number: 10.7,
        unit: "million people",
        year: 2024,
        geography: "global",
        note: "WHO estimate; 5.8M men, 3.7M women, 1.2M children",
        source: { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      },
      {
        label: "Deaths",
        value: "1.23 million",
        number: 1.23,
        unit: "million people",
        year: 2024,
        geography: "global",
        note: "including 150,000 among people with HIV; the world's leading cause of death from a single infectious agent",
        source: { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      },
      {
        label: "Drug-resistant TB treatment gap",
        value: "2 in 5",
        note: "of people with drug-resistant TB accessed treatment in 2024",
        source: { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      },
      {
        label: "On shorter MDR regimens (2024)",
        value: "34,000",
        number: 34000,
        unit: "people",
        year: 2024,
        geography: "global",
        note: "BPaLM/BDLLfxC, up from 5,653 in 2023 and 1,744 in 2022",
        source: { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      },
      {
        label: "Lives saved since 2000",
        value: "83 million",
        note: "WHO estimate",
        source: { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      },
      {
        label: "Catastrophic costs",
        value: "≈ 50%",
        note: "of people treated for TB face costs above 20% of household income; End TB target is zero",
        source: { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      },
      { label: "Where the burden is", value: "87% in 30 high-burden countries", note: "two-thirds in India, Indonesia, the Philippines, China and Pakistan" },
      { label: "Leading cause", value: "Infectious disease mortality" },
    ],
    timeline: [
      { date: "1882", text: "Robert Koch identifies Mycobacterium tuberculosis as the cause, and the organism still bears his name." },
      { date: "1944", text: "Streptomycin becomes the first effective treatment, but resistance appears almost immediately." },
      { date: "1970s", text: "Short-course combination regimens make cure routine in wealthy countries." },
      { date: "1993", text: "WHO declares tuberculosis a global emergency as cases surge with HIV in sub-Saharan Africa." },
      { date: "2022", text: "WHO recommends the BPaLM regimen — a six-month, injection-free cure for multidrug-resistant disease, and it is scaled up rapidly thereafter." },
      { date: "2024", text: "WHO reports 10.7 million people falling ill and 1.23 million deaths in 2024; about 34,000 people with drug-resistant TB start the six-month all-oral regimens, up from 5,653 in 2023." },
      { date: "2026", text: "TB remains the world's leading cause of death from a single infectious agent, with only about two in five people with drug-resistant TB accessing treatment." },
    ],
  },

  {
    id: "ebola",
    name: "Ebola disease",
    tldr: "A viral haemorrhagic fever with a case fatality rate that can reach 90%, controlled by vaccines, antibodies and contact tracing rather than by treatment.",
    summary:
      "Ebola disease is caused by orthoebolaviruses, of which three — Ebola virus, Sudan virus and Bundibugyo virus — have caused large outbreaks, with a case fatality rate that has ranged from about 25% to 90% depending on the virus, the outbreak and the standard of care. It spreads through direct contact with the blood or body fluids of someone who is ill or has died, which makes carers, burial attendants and health workers especially vulnerable. The 2014–2016 West African outbreak killed more than 11,000 people and exposed how badly the world was equipped for it. Licensed vaccines and antibody treatments exist only for Ebola virus (Zaire) disease; Sudan and Bundibugyo virus diseases have no licensed countermeasures, and a large Bundibugyo outbreak in the Democratic Republic of the Congo was declared a Public Health Emergency of International Concern in May 2026. Outbreaks are driven by spillover from animal reservoirs, with fruit bats implicated, and — for Zaire Ebola — are ended by finding and isolating cases, tracing contacts, and vaccinating the contacts of cases in a ring. Two monoclonal antibody treatments are licensed for Zaire ebolavirus, which made Ebola the first filovirus disease with specific therapy.",
    asOf: "2026-09",
    scope: "Not an NTD — an epidemic-prone viral haemorrhagic fever, included for context",
    whogroup: "Viral haemorrhagic fever (zoonotic)",
    icd10: [icd10("A98.4", "Ebola virus disease")],
    transmission:
      "Direct contact with blood or body fluids of an infected person or corpse, including at funerals; spillover to humans from infected wild animals, with fruit bats implicated as a reservoir.",
    clinical:
      "Abrupt fever, fatigue, muscle pain, headache and sore throat, followed by vomiting, diarrhoea, rash and — in severe cases — haemorrhage, shock, organ failure and death; case fatality has ranged from about 25% to 90%.",
    diagnosis: "Molecular testing (RT-PCR) of blood for the virus; antibody and antigen tests; testing is complicated early in infection when viral loads are low, so repeat testing is common.",
    treatment:
      "Supportive care with fluid, electrolyte and organ support, plus two licensed monoclonal antibody products (ansuvimab/Ebanga and atoltivimab–maftivimab–odesivimab/Inmazeb) for Zaire ebolavirus; there are no licensed treatments for Sudan or Bundibugyo virus disease, though candidate antibodies and remdesivir were used under trial or compassionate-use protocols in 2025–2026.",
    control:
      "Case finding and isolation, contact tracing, safe and dignified burials, infection prevention in health facilities, and — for Zaire Ebola — ring vaccination with ERVEBO around cases, backed since 2021 by a 500,000-dose global stockpile; the strategy that helped end the 2018–2020 outbreak in the Democratic Republic of the Congo.",
    links: [
      { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" },
    ],
    pathogens: ["ebolavirus"],
    drugs: ["ansuvimab", "inmazeb"],
    diagnostics: ["ebola-rt-pcr", "ebola-rdt-oraquick"],
    targets: ["ebola-glycoprotein"],
    technologies: ["ebola-vaccines", "ring-vaccination", "community-health-workers", "mhealth-surveillance"],
    trials: ["ebola-ring-vaccination-trial", "palme-ebola-trial", "tomokeza-sudan-ebola", "ervebo-bundibugyo-ring-trial"],
    institutions: ["who", "msf", "cepi", "inrb"],
    bottlenecks: ["outbreak-response", "conflict-and-displacement", "workforce-and-capacity"],
    terms: ["one-health", "zoonosis", "case-fatality-ratio"],
    stats: [
      {
        label: "Case fatality rate",
        value: "25–90%",
        unit: "%",
        geography: "global",
        note: "average around 50%; varies by outbreak and care",
        source: { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" },
      },
      { label: "Incubation period", value: "2–21 days", unit: "days", geography: "global", source: { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" } },
      { label: "West Africa, 2014–16", value: "28,616 cases; 11,310 deaths", number: 28616, unit: "cases", year: 2016, note: "the largest Ebola virus outbreak on record, across Guinea, Liberia and Sierra Leone", source: { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" } },
      { label: "DRC, 2018–20", value: "3,470 cases; 2,287 deaths", number: 3470, unit: "cases", year: 2020, note: "the second-largest outbreak; first with vaccination at scale and proven antibody treatments", source: { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" } },
      { label: "Outbreaks since 1976", value: "42", number: 42, unit: "outbreaks", year: 2025, geography: "global", note: "31 Ebola virus (23,045 cases, 14,885 deaths), 8 Sudan virus, 2 Bundibugyo virus",       source: { label: "WHO EPI-WIN — Ebola disease overview (Feb 2025)", url: "https://cdn.who.int/media/docs/default-source/crs-crr/25-02-05_epi-win_ebola-disease_a.-legand.pdf?sfvrsn=dbacb3a6_1" } },
      { label: "Uganda, Sudan virus 2022", value: "164 cases; 77 deaths", number: 164, unit: "cases", year: 2023, geography: "Uganda", note: "no licensed vaccine or treatment exists for Sudan virus", source: { label: "WHO — Sudan virus disease, Uganda (DON, Jan 2025)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2025-DON555" } },
      { label: "Uganda, Sudan virus 2025", value: "14 cases; 4 deaths", number: 14, unit: "cases", year: 2025, geography: "Uganda", note: "first-ever Sudan-virus efficacy trial (Tokomeza) launched during this outbreak; declared over 26 Apr 2025", source: { label: "WHO — Sudan virus disease, Uganda (DON, Apr 2025)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2025-DON566" } },
      { label: "DRC Kasai, Ebola virus 2025", value: "64 cases; 45 deaths (CFR 70.3%)", number: 64, unit: "cases", year: 2025, geography: "Democratic Republic of the Congo", note: "16th DRC outbreak; ring vaccination reached 47,577 people; declared over 1 Dec 2025", source: { label: "WHO — Ebola virus disease, DRC (DON, Dec 2025)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2025-DON589" } },
      { label: "DRC, Bundibugyo virus 2026", value: "6,778 confirmed cases (7 Sep 2026)", number: 6778, unit: "cases", year: 2026, geography: "Democratic Republic of the Congo", note: "ongoing; declared a PHEIC 16 May 2026; CFR ≈44–48%; no licensed vaccine or treatment", source: { label: "WHO — Bundibugyo virus disease, DRC (DON, Sep 2026)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON617" } },
      { label: "Licensed vaccines", value: "2", number: 2, unit: "vaccines", note: "ERVEBO (2019) and Zabdeno/Mvabea (2020) — both against Zaire ebolavirus only; none for Sudan or Bundibugyo", source: { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" } },
      { label: "Global Ervebo stockpile", value: "500,000 doses", number: 500000, unit: "doses", year: 2021, geography: "global", note: "Gavi-funded, ICG-managed since Jan 2021; preventive HCW vaccination added Jun 2024", source: { label: "WHO — Ebola vaccine stockpiles (ICG)", url: "https://www.who.int/groups/icg/ebola-virus-disease/ebola-stockpiles" } },
      { label: "Licensed treatments", value: "2 monoclonal antibodies", note: "Inmazeb and Ebanga (2020)", source: { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" } },
    ],
    timeline: [
      { date: "1976", text: "The virus is identified in simultaneous outbreaks in Zaire (now DRC) and Sudan, giving it the name of the Zaire river." },
      { date: "2014", text: "An outbreak begins in West Africa and becomes the largest ever, spreading across Guinea, Sierra Leone and Liberia." },
      { date: "2015", text: "A ring-vaccination trial in Guinea shows the rVSV-ZEBOV vaccine protects contacts, a landmark result." },
      { date: "2019", text: "The first Ebola vaccine is licensed, and the 2018–20 DRC outbreak is the first in which vaccination is used at scale." },
      { date: "2020", text: "Two monoclonal antibody treatments are shown to improve survival, and are later licensed." },
      { date: "2021", text: "Flare-ups in Guinea and the DRC are traced by sequencing to persistent virus in survivors, proving outbreaks can restart without new spillover." },
      { date: "2022", text: "A Sudan virus outbreak in Uganda causes 164 cases and 77 deaths with no licensed vaccine or treatment available." },
      { date: "2025", text: "A second Uganda Sudan-virus outbreak (14 cases) hosts the first-ever Sudan efficacy trial, Tokomeza; a Zaire outbreak in DRC Kasai (64 cases, CFR 70%) is contained with ring vaccination." },
      { date: "2026", text: "A Bundibugyo virus outbreak in the DRC becomes the largest filovirus outbreak on record and is declared a PHEIC; a Phase 3 ring trial tests whether Ervebo cross-protects." },
    ],
  },
];
