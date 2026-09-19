import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Mycetoma and deep mycoses 2026 fact-check additions: the standard-of-care
 * drug, the treatment-monitoring biomarker, the WHO fungal priority list, the
 * main other implantation mycosis, the researchers and the ideas that the
 * 2026 source cross-check (WHO mycetoma fact sheet, WHO fungal priority
 * pathogens list 2022, Fahal et al. Lancet Infect Dis 2024, G-FINDER 2024,
 * ClinicalTrials.gov, PubMed) showed were missing from the graph. Ordinary
 * records of their kind, kept in one file so the review is visible as a set;
 * wired into `index.ts` alongside ADDITIONS.
 *
 * Cross-check also corrected two wrong drug links on the mycetoma disease and
 * pathogen records — they listed antimonials and azithromycin, neither of
 * which is used for mycetoma — and replaced them with itraconazole (the
 * standard of care) and fosravuconazole.
 *
 * Honest negatives: Open Targets has no mycetoma disease entry (searching
 * returns leishmaniasis and other terms), and ChEMBL holds no Madurella
 * mycetomatis protein target, because the organism's drug targets are studied
 * through antifungal programmes for other fungi. G-FINDER reports mycetoma
 * R&D at under US$1m in 2023 — moved to the "almost no funding" group.
 */
export const MYCETOMA_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "itraconazole",
        name: "Itraconazole",
        tldr: "The azole antifungal that is the standard of care for eumycetoma — taken for months to years, and the benchmark every new candidate is measured against.",
        summary:
          "Itraconazole is the mainstay of medical treatment for eumycetoma, usually combined with surgery, and is also used for other deep and implantation mycoses. It inhibits fungal cytochrome P450 14α-demethylase (CYP51), blocking ergosterol synthesis in the cell membrane. For mycetoma it must be taken for a year or more at 400 mg daily, and even then cure is not guaranteed — in the only randomised trial ever run in the disease, 75% of patients on itraconazole plus surgery were cured at 12 months. Its limitations are the reason the field keeps looking: a long course, drug-drug interactions, cost and variable access in the endemic countries where it is most needed. WHO lists it among essential medicines, but in practice availability and price remain barriers.",
        ...R,
        drugClass: "Triazole antifungal",
        mechanism:
          "Inhibits cytochrome P450 14α-demethylase (CYP51), blocking ergosterol synthesis and disrupting the fungal cell membrane.",
        indication: "Eumycetoma; other deep and implantation mycoses.",
        administration: "Oral, typically 400 mg daily for 12 months or more in mycetoma.",
        status: "Standard of care for eumycetoma; WHO essential medicine",
        resistance: "Azole resistance is a growing concern in Aspergillus and Candida and is monitored; mycetoma breakpoints remain poorly defined.",
        links: [
          { label: "Fahal et al. — fosravuconazole versus itraconazole, Lancet Infect Dis 2024", url: "https://pubmed.ncbi.nlm.nih.gov/39098321/" },
          { label: "WHO — mycetoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        technologies: ["drug-repurposing"],
        institutions: ["who"],
        terms: ["ntd"],
        stats: [
          { label: "12-month cure", value: "75%", note: "with surgery, in the Sudan Phase 2 trial", source: { label: "Fahal et al., Lancet Infect Dis 2024", url: "https://pubmed.ncbi.nlm.nih.gov/39098321/" } },
          { label: "Course length", value: "12 months or more" },
        ],
      },
    ],
  },
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "beta-d-glucan-treatment-monitoring",
        name: "(1,3)-β-D-glucan serum monitoring",
        tldr: "A panfungal blood marker being tested as a way to tell whether eumycetoma treatment is working — a test the disease has never had.",
        summary:
          "(1,3)-β-D-glucan is a cell-wall component released by many fungi, including Madurella mycetomatis, and can be measured in serum. In a 2024 study of 104 patients receiving itraconazole or fosravuconazole in Sudan, serial β-D-glucan concentrations were measured over treatment to see whether they tracked clinical outcome — an attempt to give mycetoma a treatment-monitoring biomarker. The need is acute: cure is currently judged only by the slow disappearance of a mass and sinuses over a year, so neither patient nor clinician can tell early whether a painful, expensive regimen is working. A reliable biomarker would let ineffective treatment be changed sooner and shorter courses be tested.",
        ...R,
        method: "Serum (1,3)-β-D-glucan assay (panfungal cell-wall biomarker)",
        sampleType: "Serum",
        performance:
          "Research-stage for mycetoma; evaluated for correlation with clinical outcome, not yet validated as a monitoring test.",
        availability: "Reference laboratories with the assay; not a field test",
        stage: "Evaluated in a 104-patient treatment cohort (2024)",
        products: [
          { name: "Fungitell Assay", manufacturer: "Associates of Cape Cod", stage: "Regulatory achieved", format: "Laboratory assay", note: "the reference (1,3)-β-D-glucan assay", url: "https://fungitell.com" },
          { name: "β-Glucan Test", manufacturer: "FUJIFILM Wako Pure Chemical", stage: "Regulatory achieved", format: "Laboratory assay", url: "https://fujifilm.com/ffwk/en" },
        ],
        links: [
          { label: "Nyuykonge et al. — β-D-glucan to monitor azole therapy in eumycetoma (Mycoses 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/37872649/" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["ntd", "sensitivity-specificity"],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-fungal-priority-pathogens-list",
        name: "WHO fungal priority pathogens list (2022)",
        tldr: "The first global priority list for fungal pathogens — and the document that put eumycetoma agents in its high-priority group.",
        summary:
          "Published in October 2022, the WHO fungal priority pathogens list (FPPL) was the first systematic global effort to rank fungal pathogens by unmet R&D need and public-health importance, dividing 19 fungi into critical, high and medium priority groups. It placed eumycetoma causative agents in the high-priority group, alongside Histoplasma, Mucorales, Fusarium and others — recognition that a disease affecting the world's poorest people, with no reliable treatment, is a priority by need rather than by market. The report proposes action in three areas: strengthening laboratory capacity and surveillance, sustainable investment in research and development, and public-health interventions. Its relevance to mycetoma is direct: it names a disease that G-FINDER shows receives under US$1m a year in R&D and has no point-of-care diagnostic.",
        ...R,
        issuer: "WHO",
        issued: "25 October 2022",
        status: "Current",
        scope: "Priority fungal pathogens, including eumycetoma causative agents (high-priority group)",
        recommendation:
          "Strengthen laboratory capacity and surveillance, invest sustainably in R&D, and implement public-health interventions for priority fungal pathogens including the eumycetoma agents.",
        whatChanged:
          "First global systematic prioritisation of fungal pathogens; placed eumycetoma agents in the high-priority group.",
        links: [
          { label: "WHO — fungal priority pathogens list (2022)", url: "https://www.who.int/publications/i/item/9789240060241" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        institutions: ["who"],
        terms: ["ntd", "amr"],
        stats: [
          { label: "Eumycetoma ranking", value: "High-priority group" },
          { label: "Pathogens listed", value: "19 fungi across three priority groups" },
        ],
      },
    ],
  },
  /* ------------------------------- pathogens ------------------------------ */
  {
    kind: "pathogens",
    records: [
      {
        id: "sporothrix",
        name: "Sporothrix species",
        tldr: "The fungus that causes sporotrichosis — classically from soil and thorns, and now spreading in cities through infected cats.",
        summary:
          "Sporothrix schenckii and related species cause sporotrichosis, an implantation mycosis acquired when the fungus enters through a skin injury while handling soil, plants or thorny vegetation. It usually produces nodules along lymph channels, and is treated with itraconazole, terbinafine or potassium iodide depending on the form. The reason it sits with mycetoma among the deep mycoses is a newer and more alarming one: a zoonotic transmission cycle has emerged in Brazil, where cats infected with Sporothrix brasiliensis transmit the fungus to people, and large urban outbreaks have occurred — making an organism once associated with gardeners and farmers a city disease of growing concern. It illustrates how the deep mycoses are changing with urbanisation and human-animal contact.",
        ...R,
        organism: "Fungus (ascomycete)",
        taxonomy: "Ophiostomataceae, Sporothrix",
        biology:
          "Dimorphic fungus: a mould in the environment and a yeast in tissue; enters through skin injury and spreads along lymphatics.",
        lifecycle:
          "Acquired from soil, plants and plant debris; in Brazil, cats with S. brasiliensis transmit infection to humans through scratches and bites.",
        distribution:
          "Worldwide in soil and plants; a major zoonotic problem in Brazil, with urban outbreaks from cat-to-human transmission.",
        drugTargets: "Addressed by azoles (itraconazole) and terbinafine; no dedicated drug-discovery programme.",
        links: [
          { label: "WHO — mycetoma, chromoblastomycosis and other deep mycoses", url: "https://www.who.int/health-topics/mycetoma-chromoblastomycosis-and-other-deep-mycoses" },
        ],
        diseases: ["mycetoma"],
        drugs: ["itraconazole"],
        terms: ["ntd", "zoonosis", "one-health"],
        stats: [
          { label: "Transmission", value: "Environmental, and zoonotic via cats in Brazil" },
          { label: "Main species of concern", value: "Sporothrix brasiliensis" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "erasmus-mc",
        name: "Erasmus MC, Rotterdam — mycetoma research group",
        tldr: "The Dutch laboratory that supplies the mycology and drug-susceptibility science behind the Sudanese-led mycetoma trials.",
        summary:
          "The Department of Medical Microbiology and Infectious Diseases at Erasmus MC in Rotterdam, led on mycetoma by Wendy van de Sande, is the main laboratory partner to the Mycetoma Research Centre in Khartoum. It works on the identification and antifungal susceptibility of Madurella mycetomatis — including the epidemiological cut-off values for itraconazole and ravuconazole, the β-D-glucan biomarker, and in vitro testing of new antifungals. It is a good example of the collaboration the field depends on: high-burden countries provide patients, clinical expertise and trials, while reference laboratories provide the mycology and drug-susceptibility methods that most endemic settings cannot yet run themselves.",
        ...R,
        institutionType: "University medical centre, reference laboratory",
        country: "Netherlands",
        city: "Rotterdam",
        focus:
          "Mycetoma mycology: species identification, antifungal susceptibility, biomarkers and new-drug testing.",
        links: [
          { label: "Nyuykonge et al. — epidemiological cut-off values for M. mycetomatis (Mycoses 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/36005544/" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        drugs: ["itraconazole", "fosravuconazole"],
        institutions: ["mrc-khartoum"],
        terms: ["ntd"],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "wendy-van-de-sande",
        name: "Wendy van de Sande",
        tldr: "The Dutch mycologist whose Erasmus MC laboratory supplies the mycology and drug-testing behind mycetoma's trials.",
        summary:
          "Wendy van de Sande leads mycetoma research at Erasmus MC in Rotterdam and is the field's most prominent non-clinical scientist, with a body of work on the diagnosis, antifungal susceptibility and treatment of Madurella mycetomatis. Her laboratory established the epidemiological cut-off values that make azole susceptibility testing meaningful in mycetoma, tested the in vitro activity of newer antifungals, and developed the β-D-glucan biomarker for monitoring treatment. Much of the modern scientific foundation the mycetoma trials stand on comes from her group's partnership with the Khartoum centre.",
        ...R,
        era: "Contemporary",
        role: "Medical mycologist; Erasmus MC, Rotterdam, Netherlands",
        knownFor: "Mycology, antifungal susceptibility and biomarkers for Madurella mycetomatis.",
        links: [
          { label: "Nyuykonge et al. — β-D-glucan to monitor azole therapy in eumycetoma (Mycoses 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/37872649/" },
          { label: "Nyuykonge et al. — epidemiological cut-off values, M. mycetomatis (Mycoses 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/36005544/" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        drugs: ["itraconazole", "fosravuconazole"],
        diagnostics: ["beta-d-glucan-treatment-monitoring"],
        institutions: ["erasmus-mc", "mrc-khartoum"],
        terms: ["ntd"],
      },
      {
        id: "eiman-siddig",
        name: "Eiman Siddig",
        tldr: "The Sudanese mycologist and molecular researcher translating mycetoma diagnosis into laboratory tools usable in endemic settings.",
        summary:
          "Eiman Siddig is a Sudanese researcher, formerly of the Mycetoma Research Centre at the University of Khartoum and now working in the Netherlands, whose work spans the molecular identification of mycetoma agents, diagnostic methods and the epidemiology of the disease in Sudan. She has co-authored key studies on β-D-glucan monitoring, antifungal cut-off values and the molecular characterisation of Madurella and other agents, contributing to the effort to replace slow culture with reliable molecular diagnosis. Her career illustrates a familiar pattern in neglected-disease research: Sudanese scientists who built the country's expertise and then had to continue their work abroad as conflict made it impossible at home.",
        ...R,
        era: "Contemporary",
        role: "Mycologist and molecular researcher; formerly Mycetoma Research Centre, University of Khartoum",
        knownFor: "Molecular diagnosis and epidemiology of mycetoma in Sudan.",
        links: [
          { label: "Nyuykonge, Siddig et al. — β-D-glucan to monitor azole therapy (Mycoses 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/37872649/" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        institutions: ["mrc-khartoum", "erasmus-mc"],
        countries: ["sudan"],
        terms: ["ntd"],
      },
      {
        id: "borna-nyaoke",
        name: "Borna Nyaoke",
        tldr: "The Kenyan physician at DNDi who led delivery of the first mycetoma drug trial and works to make neglected-disease trials African-led.",
        summary:
          "Borna Nyaoke is a Kenyan physician and clinical-research lead at the Drugs for Neglected Diseases initiative (DNDi) who was centrally involved in the fosravuconazole trial for eumycetoma and in the wider effort to run neglected-disease trials in the countries the diseases affect. Her work sits at the point where the politics of global health meets clinical practice: making trials possible in low-resource and conflict-affected settings, ensuring African investigators lead, and keeping diseases like mycetoma on research agendas despite minimal commercial interest. She represents the African trial leadership that the field increasingly, and rightly, expects.",
        ...R,
        era: "Contemporary",
        role: "Physician and clinical research lead, Drugs for Neglected Diseases initiative (DNDi), Kenya",
        knownFor: "Co-leading the first mycetoma randomised trial; African-led clinical research capacity.",
        links: [
          { label: "Fahal et al. — fosravuconazole versus itraconazole, Lancet Infect Dis 2024", url: "https://pubmed.ncbi.nlm.nih.gov/39098321/" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        trials: ["fosravuconazole-mycetoma"],
        institutions: ["dndi"],
        countries: ["kenya"],
        terms: ["ntd", "pdp"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "point-of-care-mycetoma-diagnosis",
        name: "A point-of-care test that tells fungal from bacterial mycetoma",
        tldr: "The single decision that determines treatment — fungal or bacterial — is still made by eye, culture or an MRI, and WHO says there is no field test.",
        summary:
          "Every mycetoma case turns on one question: is it fungal (eumycetoma) or bacterial (actinomycetoma)? The two need completely different drugs, and getting it wrong wastes a year of treatment and lets the disease advance toward amputation. Yet WHO's own fact sheet states there is no point-of-care rapid diagnostic test usable in the field, and even culture misclassifies. The proposal is to build a field test that identifies the agent from a grain or fine-needle sample — molecular or immunochromatographic — and validate it against reference PCR at district level, so the fungal/bacterial call can be made where the patient is. China's synthetic survey and the β-D-glucan work show the tools are within reach; what is missing is a product designed for a village clinic.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Develop and field-validate a point-of-care assay that distinguishes eumycetoma from actinomycetoma against reference PCR, measured by correct treatment initiation and cost per case.",
        owner: "Diagnostic developers with WHO, FIND and the Erasmus MC–Khartoum network",
        links: [
          { label: "WHO — mycetoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
          { label: "WHO — fungal priority pathogens list (2022)", url: "https://www.who.int/publications/i/item/9789240060241" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        diagnostics: ["mycetoma-ultrasound", "molecular-pcr", "beta-d-glucan-treatment-monitoring"],
        technologies: ["crispr-diagnostics", "molecular-lamp", "ai-microscopy"],
        institutions: ["who", "erasmus-mc"],
        bottlenecks: ["diagnostics-gap", "access-and-pricing"],
        terms: ["ntd", "sensitivity-specificity"],
        stats: [
          { label: "Gap", value: "No point-of-care test exists (WHO)" },
          { label: "Why it matters", value: "Fungal and bacterial forms need different drugs" },
        ],
      },
      {
        id: "piggyback-antifungal-trials",
        name: "Test the antifungal pipeline against mycetoma before it closes",
        tldr: "Olorofim, fosmanogepix and other new antifungals are active against Madurella in the lab — but none has a mycelium trial, because the market is the Sahel.",
        summary:
          "Mycetoma has no reliable cure, but the wider antifungal pipeline is producing compounds with real activity against Madurella mycetomatis — olorofim (a dihydroorotate dehydrogenase inhibitor) and fosmanogepix among them — and neither is being developed for the disease. This is the structural failure of neglected-disease drug development: a molecule can work in the laboratory and never reach a patient because no company has a commercial reason to trial it in Sudan. The proposal is a coordinated, funded programme to test the most promising pipeline antifungals in eumycetoma as soon as they reach a stage where a trial is possible, with pre-agreed protocols, a standing trial site network across Sudan, Ethiopia, Mexico and India, and DNDi-style non-profit sponsorship — so that a drug developed for a rich-country fungus is not lost to a poor-country one.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Screen the leading pipeline antifungals against M. mycetomatis and advance the best into an adaptive trial, with a standing multi-country site network and pre-approved protocols to start within months, not years.",
        owner: "DNDi with antifungal developers, Erasmus MC and endemic-country centres",
        links: [
          { label: "G-FINDER 2024 — mycetoma R&D under US$1m", url: "https://cdn.impactglobalhealth.org/media/G-FINDER%202024_Full%20report.pdf" },
          { label: "WHO — fungal priority pathogens list (2022)", url: "https://www.who.int/publications/i/item/9789240060241" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        drugs: ["olorofim", "fosravuconazole", "itraconazole"],
        technologies: ["open-science-drug-discovery", "drug-repurposing"],
        institutions: ["dndi", "erasmus-mc", "who"],
        bottlenecks: ["funding-gap", "access-and-pricing"],
        terms: ["ntd", "pdp"],
        stats: [
          { label: "Mycetoma R&D (2023)", value: "under US$1 million worldwide" },
          { label: "Candidates in hand", value: "Olorofim and fosmanogepix active in vitro" },
        ],
      },
      {
        id: "integrate-mycetoma-skin-ntds",
        name: "Detect mycetoma inside the skin-NTD clinics that already exist",
        tldr: "Add mycetoma case-finding to leprosy and other skin-NTD services, so the disease is caught before amputation instead of after.",
        summary:
          "Mycetoma is diagnosed late almost everywhere, because patients present only when the swelling is large and the nearest clinician who recognises it may be hundreds of kilometres away. WHO now promotes an integrated skin-NTD approach — the same clinics, community health workers and training that find leprosy, lymphatic filariasis and other skin conditions — and mycetoma fits it exactly: a visible, palpable skin and subcutaneous disease in the same poor, rural, barefoot populations. The proposal is to add a simple ultrasound and grain-sampling pathway to existing skin-NTD services in endemic districts, with community health workers trained to recognise the early swelling and refer, using the 'dot-in-circle' ultrasound sign as the confirmatory step. It turns a rare, specialised disease into something a general skin clinic can find, before the only option is amputation.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Integrate mycetoma screening and ultrasound into skin-NTD clinics in endemic districts of Sudan, Ethiopia and Mexico; measure stage at diagnosis and amputation rate against the current baseline.",
        owner: "National NTD programmes with WHO skin-NTD integration and the Mycetoma Research Centre network",
        links: [
          { label: "WHO — mycetoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
          { label: "WHO — global meeting on skin NTDs (2025)", url: "https://www.who.int/news/item/24-03-2025-second-global-meeting-on-skin-ntds-focuses-on-advancing-integration-and-innovation" },
        ],
        diseases: ["mycetoma", "leprosy"],
        pathogens: ["mycetoma-agents"],
        diagnostics: ["mycetoma-ultrasound"],
        technologies: ["community-health-workers", "mhealth-surveillance", "ai-microscopy"],
        institutions: ["who", "mrc-khartoum"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap", "stigma-and-disability"],
        terms: ["ntd", "one-health"],
        stats: [
          { label: "Precedent", value: "Integrated skin-NTD services find leprosy and other skin diseases" },
          { label: "Goal", value: "Diagnose before amputation becomes the only option" },
        ],
      },
    ],
  },
];
