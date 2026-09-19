import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Tuberculosis 2026 fact-check additions: the paediatric shortened-regimen
 * trial, the Ugandan and South African research leadership, and the ideas that
 * the 2026 source cross-check (WHO fact sheet 24 Mar 2026, WHO Global TB
 * Report 2025, G-FINDER 2024, ClinicalTrials.gov, ChEMBL, Open Targets,
 * PubMed) showed were missing from the graph. Ordinary records of their kind,
 * kept in one file so the review is visible as a set; wired into `index.ts`.
 *
 * Cross-check found the disease page one reporting year out of date: it
 * carried WHO's 2023 figures (10.8 million falling ill, 1.25 million deaths,
 * 161,000 with HIV) while the current fact sheet gives 2024 (10.7 million,
 * 1.23 million deaths, 150,000 with HIV). Those were corrected on the disease
 * record and spike, along with additions: the BPaLM scale-up (34,000 people
 * on shorter regimens in 2024), 83 million lives saved since 2000, the ~50%
 * catastrophic-cost figure, and the financing gap (US$22bn needed annually;
 * R&D US$806m per G-FINDER against a US$5bn target).
 *
 * The page also omitted the targets of two first-line drugs that were already
 * in the corpus: adding InhA (isoniazid) and PncA (pyrazinamide) makes the
 * existing target records render on the disease page. ChEMBL confirms both
 * (M. tuberculosis holds 89 curated targets), and Open Targets carries
 * tuberculosis as MONDO_0018076.
 */
export const TUBERCULOSIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "tb-children-shortened-regimen",
        name: "Shortened regimen for drug-susceptible TB in children",
        tldr: "A Phase 3 trial asking whether children can be cured in less than the standard six months.",
        summary:
          "Children with tuberculosis have long been treated with regimens extrapolated from adults — same drugs, scaled doses, same duration — even though their disease differs: it is more often paucibacillary, more often extrapulmonary, and harder to confirm bacteriologically. Shorter treatment would reduce the burden on families, improve completion and cut cost. This Phase 3 trial tests a shortened regimen for drug-susceptible TB in children, part of a broader shift in paediatric TB from adult-derived assumptions to directly generated evidence. It matters because children account for about 1.2 million of the people falling ill each year, and because they are among the groups the standard diagnostics miss, so a shorter, better-tolerated regimen has outsized value where the health system struggles to keep patients in care.",
        ...R,
        phase: "Phase 3",
        status: "Recruiting",
        sponsor: "International paediatric TB research consortium",
        intervention: "Shortened drug-susceptible TB regimen in children",
        result: "Pending; testing whether a shorter course is non-inferior in children with drug-susceptible TB.",
        registry: "ClinicalTrials.gov NCT06253715",
        registryUrl: "https://clinicaltrials.gov/study/NCT06253715",
        links: [
          { label: "Shortened regimen for drug-susceptible TB in children (NCT06253715)", url: "https://clinicaltrials.gov/study/NCT06253715" },
          { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        drugs: ["rifampicin", "isoniazid"],
        technologies: ["tb-preventive-treatment"],
        institutions: ["who"],
        terms: ["mdr-tb", "amr"],
        stats: [
          { label: "Children falling ill (2024)", value: "1.2 million", note: "of 10.7 million total" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "makerere-university",
        name: "Makerere University (TB research group)",
        tldr: "The Ugandan university that has become one of the world's most productive centres of tuberculosis research.",
        summary:
          "Makerere University in Kampala, with its School of Biomedical Sciences and long-standing collaborations with Case Western Reserve University, Johns Hopkins and others, has produced a remarkable share of the world's tuberculosis research — particularly on TB/HIV, diagnostics for people with HIV, and the immunology of TB infection. Researchers including Harriet Mayanja-Kizza and Moses Joloba have led studies that shaped how TB is diagnosed and treated in high-HIV-burden settings, and the affiliated Uganda National TB and Leprosy Programme translates that work into national policy. It is the clearest example in this corpus of an African institution generating the evidence for the disease that most affects its region, rather than receiving it.",
        ...R,
        institutionType: "University",
        country: "Uganda",
        city: "Kampala",
        focus: "Tuberculosis and TB/HIV research, diagnostics, immunology and clinical trials.",
        links: [
          { label: "Mayanja-Kizza et al. — TB research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mayanja-Kizza+H+tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        drugs: ["rifampicin", "isoniazid"],
        diagnostics: ["xpert-mtb-rif"],
        institutions: ["who"],
        countries: ["uganda"],
        terms: ["amr"],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "harriet-mayanja-kizza",
        name: "Harriet Mayanja-Kizza",
        tldr: "The Ugandan physician-scientist who has led TB/HIV research from Makerere for three decades.",
        summary:
          "Harriet Mayanja-Kizza is a Ugandan physician and professor at Makerere University, one of Africa's most cited tuberculosis researchers and a central figure in the long collaboration with Case Western Reserve University. Her work has spanned the immunology of tuberculosis infection and disease, the interaction between TB and HIV, diagnostic strategies for people with HIV in whom standard sputum tests perform poorly, and the clinical trials that inform treatment in high-burden settings. She has trained a generation of Ugandan and East African TB researchers, and her career embodies the point the TB field is belatedly acting on: the countries with the highest burden must generate and lead the research, not merely host it.",
        ...R,
        era: "Contemporary",
        role: "Physician and professor, Makerere University, Uganda",
        knownFor: "TB/HIV research, tuberculosis immunology and diagnostics in East Africa.",
        links: [
          { label: "Mayanja-Kizza et al. — tuberculosis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mayanja-Kizza+H+tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        drugs: ["rifampicin", "isoniazid"],
        diagnostics: ["xpert-mtb-rif", "tuberculin-skin-test"],
        institutions: ["makerere-university", "who"],
        countries: ["uganda"],
        terms: ["amr"],
      },
      {
        id: "stavia-turyahabwe",
        name: "Stavia Turyahabwe",
        tldr: "The Ugandan public-health leader running the national tuberculosis programme in a high-burden country.",
        summary:
          "Stavia Turyahabwe leads the Uganda National Tuberculosis and Leprosy Programme, the body responsible for translating TB research and global guidance into diagnosis, treatment and prevention across one of the world's high-burden countries. Programme leadership is where the gap between what is possible and what is delivered is actually closed: active case-finding, contact investigation, preventive treatment scale-up, drug-resistance surveillance and paediatric case detection all depend on national programmes doing the operational work. Turyahabwe also contributes to the research literature on programme performance and TB/HIV service delivery, making her one of the relatively few people operating simultaneously in research and implementation — the combination the End TB Strategy requires.",
        ...R,
        era: "Contemporary",
        role: "Programme manager, Uganda National Tuberculosis and Leprosy Programme",
        knownFor: "National TB programme leadership and operational research in Uganda.",
        links: [
          { label: "Turyahabwe et al. — tuberculosis programme research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Turyahabwe+S+tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        drugs: ["rifampicin", "isoniazid"],
        institutions: ["makerere-university", "who"],
        countries: ["uganda"],
        terms: ["amr"],
      },
      {
        id: "gerhard-walzl",
        name: "Gerhard Walzl",
        tldr: "The South African researcher who led the search for a blood test that predicts who will develop TB.",
        summary:
          "Gerhard Walzl is a South African immunologist at Stellenbosch University who directed one of the field's most ambitious efforts: finding a biomarker signature that predicts progression from latent TB infection to active disease, so that preventive treatment can be targeted at the people who need it rather than given indiscriminately. His work spans the immunology of tuberculosis, biomarkers of treatment response and the correlates of protection needed to evaluate new vaccines — questions the field must answer if it is to move beyond treating disease to preventing it. His leadership of large international biomarker consortia from a South African base reflects the country's outsized role in TB research relative to its population.",
        ...R,
        era: "Contemporary",
        role: "Immunologist; Stellenbosch University, South Africa",
        knownFor: "TB biomarkers, correlates of protection and immunology of tuberculosis.",
        links: [
          { label: "Walzl et al. — TB biomarker research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Walzl+G+tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        technologies: ["bcg-vaccine", "tb-preventive-treatment"],
        countries: ["south-africa"],
        terms: ["amr"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "close-tb-diagnosis-gap",
        name: "Find the millions who are diagnosed nowhere",
        tldr: "A large share of the people who develop TB each year never enter the system — and every one is untreated, infectious and uncounted.",
        summary:
          "The gap between the number of people WHO estimates develop tuberculosis and the number notified to programmes runs into the millions every year. The people missed are concentrated where diagnosis is hardest: children, who produce few bacteria and often cannot give a sputum sample; people with HIV, whose disease is frequently paucibacillary or extrapulmonary; and the very poor and remote, who never reach a facility. The same countries carry both the highest burden and the weakest laboratory and case-finding capacity. The proposal is to make finding them the programme's central metric: community-based active case-finding, expanded use of the newer rapid molecular and antigen-based tests with sample types that children and people with HIV can actually provide, computer-aided chest radiography for triage where it is being evaluated, and TB screening embedded in HIV, diabetes and maternal health services. A curable disease that kills 1.23 million people a year is not being defeated by biology but by people never being found.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Set and report a national case-detection target against the WHO incidence estimate; scale active case-finding plus child- and HIV-appropriate diagnostics in high-gap districts and measure the change in the notified-to-estimated ratio.",
        owner: "National TB programmes with WHO, the Global Fund and Stop TB Partnership",
        links: [
          { label: "WHO — tuberculosis (fact sheet, 24 March 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
          { label: "WHO — Global tuberculosis report", url: "https://www.who.int/teams/global-programme-on-tuberculosis-and-lung-health/tb-reports" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        diagnostics: ["xpert-mtb-rif", "molecular-pcr", "tuberculin-skin-test"],
        technologies: ["ai-microscopy", "community-health-workers", "mhealth-surveillance"],
        institutions: ["who", "stop-tb-partnership", "the-global-fund"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap", "access-and-pricing"],
        terms: ["amr", "daly"],
        stats: [
          { label: "Fell ill (2024)", value: "10.7 million", note: "against millions fewer notified" },
          { label: "Groups most missed", value: "Children and people with HIV" },
        ],
      },
      {
        id: "tb-catastrophic-costs",
        name: "End the catastrophic cost of being cured",
        tldr: "Half of people treated for TB and their households lose more than a fifth of household income — the End TB Strategy says zero.",
        summary:
          "Tuberculosis treatment is free at the point of care in most high-burden countries, yet WHO finds that about half of people treated for TB and their households face catastrophic costs — more than 20% of household income lost to direct medical payments, transport, food, accommodation and lost earnings during months of treatment. That is the gap between a free drug and an affordable illness, and it drives the behaviours that generate resistance: people stop treatment because they cannot afford to continue it, not because they do not understand it. The End TB Strategy's target is zero catastrophic costs, and the proposal is to treat social protection as a clinical intervention — cash transfers or transport vouchers, nutritional support, workplace protection, and measuring cost as a routine treatment outcome alongside cure, so that the programmes that cure the infection are accountable for the poverty it causes.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Measure patient cost surveys routinely in high-burden countries and deploy targeted cash, food or transport support during treatment; track the share of households facing catastrophic costs against the zero target.",
        owner: "National TB programmes with ministries of social welfare, WHO and the Global Fund",
        links: [
          { label: "WHO — tuberculosis (fact sheet, 24 March 2026): catastrophic costs", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        technologies: ["community-health-workers", "tb-preventive-treatment"],
        institutions: ["who", "the-global-fund", "stop-tb-partnership"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["daly"],
        stats: [
          { label: "Catastrophic costs", value: "≈ 50% of treated people and households", note: ">20% of household income" },
          { label: "End TB target", value: "Zero" },
        ],
      },
      {
        id: "scale-tpt-in-hiv",
        name: "Scale preventive treatment where HIV makes it urgent",
        tldr: "People with HIV are 12 times likelier to develop TB, yet only 61% of those who did were on antiretroviral therapy.",
        summary:
          "A quarter of the world's population carries latent TB, and about 5–10% will develop disease — but for people living with HIV the risk is roughly twelve times higher, and TB remains the leading cause of death among them. Preventive treatment works: short rifamycin-based regimens have replaced the old nine-month course and are far easier to complete, and people exposed to multidrug-resistant TB can now receive levofloxacin-based prevention. Yet the response falls short at every step. WHO found that only 82% of people who developed TB in 2024 had a documented HIV test, and only 61% of the estimated number of people living with HIV who developed TB received antiretroviral therapy. The proposal is to close the loop: test every person with TB for HIV and every person with HIV for TB, offer preventive treatment to all who need it, and ensure ART coverage approaches universal — the intervention set WHO has recommended since 2004 and which is estimated to have averted 9.8 million deaths, yet which still leaks at the last step.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "In high-HIV-burden countries, drive bidirectional TB/HIV screening, TPT uptake and ART coverage toward universal; measure HIV testing among TB patients, TPT initiation and completion, and ART coverage among those with both conditions.",
        owner: "National TB and HIV programmes with WHO, UNAIDS and the Global Fund",
        links: [
          { label: "WHO — tuberculosis (fact sheet, 24 March 2026): TB and HIV", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
        ],
        diseases: ["tuberculosis"],
        pathogens: ["mycobacterium-tuberculosis"],
        drugs: ["isoniazid", "rifampicin"],
        technologies: ["tb-preventive-treatment", "community-health-workers"],
        institutions: ["who", "the-global-fund", "stop-tb-partnership"],
        bottlenecks: ["access-and-pricing", "surveillance-data-gap"],
        terms: ["amr", "mdr-tb"],
        stats: [
          { label: "HIV risk multiplier", value: "12× more likely to develop TB" },
          { label: "ART coverage among HIV+ TB (2024)", value: "61% estimated" },
        ],
      },
    ],
  },
];
