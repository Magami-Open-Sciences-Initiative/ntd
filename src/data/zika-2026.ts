import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Zika virus disease 2026 fact-check additions: the NS5 antiviral target, the
 * completed DNA-vaccine efficacy trial, the Uganda Virus Research Institute,
 * the clinical and African researchers, and the ideas that the 2026 source
 * cross-check (WHO fact sheet 6 Nov 2025, ClinicalTrials.gov, ChEMBL, Open
 * Targets, G-FINDER, PubMed) showed were missing from the graph. Ordinary
 * records of their kind, kept in one file so the review is visible as a set;
 * wired into `index.ts` alongside ADDITIONS.
 *
 * Cross-check confirmed the page's figures against the WHO fact sheet
 * (6 November 2025): 92 countries with mosquito transmission, the 5–15%
 * congenital-complication estimate, and the February–November 2016 PHEIC are
 * all correct. The 5–15% figure now rests on a 2025 individual-participant
 * meta-analysis, which is cited. Added: neuropathy and myelitis alongside
 * Guillain-Barré, fetal loss and preterm birth, the first local European
 * transmission in 2019, the Global Arbovirus Initiative, and the sexual-
 * transmission window guidance.
 *
 * Honest negatives: G-FINDER's neglected-disease report carries no separate
 * Zika line — Aedes-borne Zika R&D is captured under multi-disease vector
 * control with dengue and chikungunya, so no funding figure is asserted here.
 * ChEMBL holds Zika NS5, NS3 and the genome polyprotein, confirming the
 * antiviral target added below. African Zika research is thin: the discovery
 * site (Uganda) and the Dakar reference laboratory publish little on the
 * virus, which the African-surveillance idea addresses.
 */
export const ZIKA_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- targets ------------------------------- */
  {
    kind: "targets",
    records: [
      {
        id: "zika-ns5",
        name: "Zika virus NS5 (RNA-dependent RNA polymerase)",
        tldr: "The viral enzyme that copies Zika's genome — the most pursued antiviral target for a virus with no treatment.",
        summary:
          "NS5 is the largest Zika virus protein and carries the RNA-dependent RNA polymerase that replicates the viral genome, together with a methyltransferase that caps it. Both activities are essential and have no close human counterpart, which is what makes NS5 the principal target for direct-acting antivirals against Zika and the related flaviviruses. The challenge is selectivity: dengue's NS5 is structurally similar, so a drug that works across the flaviviruses must either be safe in both or specific enough to treat the right one — a particular problem where Zika and dengue co-circulate and cannot be told apart clinically. ChEMBL records Zika NS5, NS3 and the genome polyprotein, reflecting a real but early drug-discovery effort that has produced no licensed antiviral.",
        ...R,
        targetType: "Viral enzyme (RNA-dependent RNA polymerase / methyltransferase)",
        organism: "Zika virus",
        rationale:
          "Essential for viral genome replication and capping, with no close human homologue; the main target for flavivirus antivirals.",
        druggability:
          "Druggable in principle and pursued in discovery, but no antiviral has reached licensing; selectivity against dengue NS5 is the central problem.",
        knownLigands: "Investigational polymerase and methyltransferase inhibitors; none approved.",
        links: [
          { label: "ChEMBL — Zika virus NS5", url: "https://www.ebi.ac.uk/chembl/target_report_card/CHEMBL4523952" },
          { label: "WHO — Zika virus (fact sheet, 6 November 2025)", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
        ],
        pathogens: ["zika-virus"],
        diseases: ["zika"],
        technologies: ["ai-drug-discovery", "open-science-drug-discovery"],
        stats: [
          { label: "Function", value: "Viral genome replication and capping" },
          { label: "Status", value: "No licensed Zika antiviral exists" },
        ],
      },
    ],
  },
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "zika-dna-vaccine-vrc705",
        name: "VRC 705: Zika DNA vaccine Phase 2/2b efficacy trial",
        tldr: "The largest Zika vaccine efficacy trial ever run — completed, but without a licensed product because the epidemic receded before it could prove itself.",
        summary:
          "VRC 705 was a Phase 2/2b randomised trial of a Zika virus DNA vaccine in 2,428 healthy adults and adolescents across the Americas, designed to test efficacy against infection in populations where the virus was actively transmitting. It was the field's best attempt to license a Zika vaccine, and it illustrates the trap of epidemic vaccine development: as Zika cases collapsed from 2017 onward, so did the incidence the trial needed to measure against, and the study could not deliver the efficacy signal a licence requires. The trial completed, but no Zika vaccine has been licensed. It is the clearest example in this corpus of why vaccines for intermittent epidemics need advance-purchase commitments and trial platforms that do not depend on an outbreak being live where the trial is running.",
        ...R,
        phase: "Phase 2/2b",
        status: "Completed",
        sponsor: "Vaccine Research Center, NIAID, with partners across the Americas",
        intervention: "Zika virus DNA vaccine (VRC-ZKADNA090-00-VP), two-dose regimen",
        result: "Completed; the collapse in Zika incidence after 2017 prevented a definitive efficacy result, and no vaccine was licensed.",
        registry: "ClinicalTrials.gov NCT03110770",
        registryUrl: "https://clinicaltrials.gov/study/NCT03110770",
        links: [
          { label: "VRC 705 Zika DNA vaccine (NCT03110770)", url: "https://clinicaltrials.gov/study/NCT03110770" },
          { label: "WHO — Zika virus (fact sheet, 2025): no vaccine available", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
        ],
        diseases: ["zika"],
        pathogens: ["zika-virus"],
        technologies: ["dengue-vaccination", "vector-surveillance"],
        institutions: ["who", "paho"],
        countries: ["brazil"],
        bottlenecks: ["vaccine-gap", "funding-gap", "outbreak-response"],
        terms: ["vector-borne"],
        stats: [
          { label: "Enrolment", value: "2,428", number: 2428, unit: "participants", source: { label: "ClinicalTrials.gov NCT03110770", url: "https://clinicaltrials.gov/study/NCT03110770" } },
          { label: "Outcome", value: "Completed without a licensed vaccine" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "uvri",
        name: "Uganda Virus Research Institute (UVRI)",
        tldr: "The institute at the site of Zika's discovery in 1947, and a long-standing African centre for arbovirus research.",
        summary:
          "The Uganda Virus Research Institute at Entebbe sits in the country where Zika virus was first isolated in 1947, in the Zika Forest, and has been a centre of African arbovirology ever since — working on Zika, yellow fever, dengue, chikungunya, Rift Valley fever and other mosquito-borne viruses. Its scientists, including Julius Lutwama, have documented arbovirus circulation across Uganda and East Africa, a region where the viruses that cause explosive epidemics elsewhere circulate quietly and are barely counted. The institute embodies both the promise and the gap: Africa is the origin of several of the viruses that later became global emergencies, yet African arbovirus surveillance remains underfunded, so the next epidemic is often first detected on another continent.",
        ...R,
        institutionType: "National research institute",
        country: "Uganda",
        city: "Entebbe",
        focus: "Arbovirus surveillance, diagnostics and research, including Zika and other Aedes-borne viruses.",
        links: [
          { label: "Lutwama et al. — arbovirus research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Lutwama+JJ+arbovirus" },
          { label: "WHO — Zika virus (fact sheet, 2025): first identified in Uganda, 1947", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
        ],
        diseases: ["zika", "dengue", "chikungunya"],
        pathogens: ["zika-virus"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        diagnostics: ["zika-rt-pcr", "molecular-pcr"],
        technologies: ["vector-surveillance", "genomic-surveillance"],
        institutions: ["who"],
        countries: ["uganda"],
        terms: ["vector-borne"],
        people: ["julius-lutwama"],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "patricia-brasil",
        name: "Patrícia Brasil",
        tldr: "The Brazilian clinician who followed the pregnant women of the 2015–16 epidemic and defined congenital Zika syndrome.",
        summary:
          "Patrícia Brasil is an infectious-diseases physician at Fiocruz in Rio de Janeiro who led one of the key clinical cohorts of the Zika epidemic — following pregnant women infected with the virus and documenting the range of outcomes in their infants. Her work helped establish congenital Zika syndrome as a distinct condition, characterised its features beyond microcephaly, and quantified the risk of adverse outcomes in pregnancy. She is one of the clinicians who turned a signal noticed in the northeast into a defined syndrome, and she has continued to work on the long-term needs of the affected children. Her contribution is the clinical counterpart to the laboratory and vector work: without careful follow-up of pregnancies, the virus's most serious consequence would still be conjecture.",
        ...R,
        era: "Contemporary",
        role: "Infectious-diseases physician; Fiocruz, Rio de Janeiro, Brazil",
        knownFor: "Clinical characterisation of congenital Zika syndrome during the 2015–16 epidemic.",
        links: [
          { label: "Brasil et al. — Zika in pregnancy (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Brasil+P+Zika+pregnancy" },
        ],
        diseases: ["zika"],
        pathogens: ["zika-virus"],
        diagnostics: ["zika-rt-pcr"],
        institutions: ["fiocruz", "paho"],
        countries: ["brazil"],
        terms: ["congenital-zika-syndrome", "vector-borne", "neglected-populations"],
      },
      {
        id: "julius-lutwama",
        name: "Julius Julian Lutwama",
        tldr: "The Ugandan virologist documenting arbovirus circulation in the country where Zika was discovered.",
        summary:
          "Julius Lutwama is a virologist at the Uganda Virus Research Institute whose work has mapped the circulation of Zika, yellow fever, dengue, chikungunya, Rift Valley fever and other arboviruses across Uganda and the wider region. His research is the quiet, essential kind the epidemic-driven field neglects: sustained surveillance that documents which viruses are present, where, and at what levels, in a country that is the geographic origin of several viruses that later caused global emergencies. That work is what would give the world early warning of the next arboviral threat — and its chronic underfunding is why outbreaks are so often first identified somewhere else.",
        ...R,
        era: "Contemporary",
        role: "Virologist; Uganda Virus Research Institute, Entebbe",
        knownFor: "Arbovirus surveillance and research in Uganda, including Zika.",
        links: [
          { label: "Lutwama et al. — arbovirus research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Lutwama+JJ+arbovirus" },
        ],
        diseases: ["zika", "dengue", "chikungunya"],
        pathogens: ["zika-virus"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["vector-surveillance", "genomic-surveillance", "mhealth-surveillance"],
        institutions: ["uvri", "who"],
        countries: ["uganda"],
        terms: ["vector-borne"],
      },
      {
        id: "ousmane-faye",
        name: "Ousmane Faye",
        tldr: "The Senegalese virologist at Institut Pasteur de Dakar whose arbovirus work covers Zika and its relatives across West Africa.",
        summary:
          "Ousmane Faye is a Senegalese virologist at the Institut Pasteur de Dakar, one of Africa's principal arbovirus reference centres, with a large body of work on Zika, dengue, chikungunya, yellow fever and Rift Valley fever across West Africa and beyond. His research spans the molecular epidemiology of these viruses, their circulation in the region, and the laboratory capacity that African countries need to detect them. He represents the reference-laboratory backbone that makes African surveillance possible — and the case for investing in it, given that the continent is the origin of viruses the rest of the world fears.",
        ...R,
        era: "Contemporary",
        role: "Virologist; Institut Pasteur de Dakar, Senegal",
        knownFor: "Arbovirus molecular epidemiology and reference laboratory capacity in West Africa.",
        links: [
          { label: "Faye et al. — arbovirus research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Faye+O+arbovirus" },
        ],
        diseases: ["zika", "dengue", "chikungunya"],
        pathogens: ["zika-virus"],
        technologies: ["genomic-surveillance", "vector-surveillance"],
        institutions: ["ipd", "who"],
        countries: ["senegal"],
        terms: ["vector-borne", "zoonosis"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "zika-africa-surveillance",
        name: "Surveil Zika where it was discovered",
        tldr: "Africa is the origin of Zika and several other epidemic arboviruses, yet its surveillance is the thinnest — so the next threat will be found elsewhere first.",
        summary:
          "Zika virus was discovered in a Ugandan forest in 1947, and Africa is the source of yellow fever, chikungunya and several other viruses that later caused global emergencies. Yet WHO notes that surveillance remains limited globally, and it is thinnest in exactly the continent where the viruses circulate quietly. The consequence is a systematic blind spot: African circulation goes uncounted, so when a virus emerges it is typically first recognised in the Americas or Asia, after it has already spread, and African populations are absent from the epidemiology that shapes the response. The proposal is to fund sustained African arbovirus surveillance as a global public good — strengthening the institutes that already do this work (Uganda Virus Research Institute, Institut Pasteur de Dakar and others), building a regional genomic and serological baseline for Zika, dengue and chikungunya, and linking it to Aedes vector monitoring, so that the next epidemic is detected at its origin rather than its destination.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Fund multi-year arbovirus surveillance in a network of African reference laboratories, establishing Zika seroprevalence and genomic baselines alongside vector monitoring; measure detection lead time for any new arboviral emergence.",
        owner: "WHO Global Arbovirus Initiative with Africa CDC, national institutes and Institut Pasteur network",
        links: [
          { label: "WHO — Zika virus (fact sheet, 6 November 2025): limited global surveillance", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
          { label: "WHO — Global Arbovirus Initiative", url: "https://www.who.int/initiatives/global-arbovirus-initiative" },
        ],
        diseases: ["zika", "dengue", "chikungunya"],
        pathogens: ["zika-virus"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["genomic-surveillance", "vector-surveillance", "mhealth-surveillance"],
        institutions: ["who", "uvri", "ipd", "africa-cdc"],
        countries: ["uganda", "senegal", "kenya", "nigeria"],
        bottlenecks: ["surveillance-data-gap", "funding-gap", "climate-expansion"],
        terms: ["vector-borne", "one-health", "neglected-populations"],
        stats: [
          { label: "Origin", value: "Zika first isolated in Uganda, 1947" },
          { label: "Gap", value: "Surveillance remains limited globally (WHO)" },
        ],
      },
      {
        id: "flavivirus-differential-diagnostic",
        name: "A test that can tell Zika from dengue",
        tldr: "After the first week, no test reliably distinguishes them — which is exactly the dilemma of a pregnant woman with a rash.",
        summary:
          "Zika diagnosis works only in a narrow window: RT-PCR detects the virus for about a week, after which testing is serological and serology cannot reliably separate Zika from dengue, because the flaviviruses are closely related and antibodies cross-react. That failure is worst where it matters most — in tropical cities where both circulate and a pregnant woman with a rash needs to know which virus she has, since only one threatens her fetus. Current guidance even tells clinicians to manage an undiagnosed dengue-like illness as dengue, avoiding NSAIDs, because the distinction cannot be made. The proposal is a field-deployable differential test, whether a better serological assay, an antigen test or a molecular panel, validated where dengue and Zika co-circulate, with a usable window beyond the acute phase. WHO's own 2022 laboratory guidance and the arbovirus initiative name this as a priority; it is the single change that would make Zika's burden visible and its prevention possible.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Develop and field-validate a differential Zika/dengue assay with an extended detection window, tested against reference panels in co-endemic settings; measure correct attribution of congenital cases.",
        owner: "Diagnostic developers with WHO, PAHO, FIND and reference laboratories",
        links: [
          { label: "WHO — laboratory testing for Zika and dengue (2022)", url: "https://www.who.int/publications/i/item/WHO-ZIKV_DENV-LAB-2022.1" },
          { label: "WHO — Zika virus (fact sheet, 6 November 2025): diagnosis and cross-reaction", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
        ],
        diseases: ["zika", "dengue", "chikungunya"],
        pathogens: ["zika-virus"],
        diagnostics: ["zika-rt-pcr", "molecular-pcr"],
        technologies: ["crispr-diagnostics", "molecular-lamp", "ai-microscopy"],
        institutions: ["who", "paho"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["vector-borne", "sensitivity-specificity", "congenital-zika-syndrome"],
        stats: [
          { label: "Window", value: "RT-PCR useful for about a week" },
          { label: "Stakes", value: "Pregnancy outcomes depend on the distinction" },
        ],
      },
      {
        id: "congenital-zika-lifelong-care",
        name: "Fund the lifetime of care a congenital epidemic creates",
        tldr: "The emergency ended; the children did not. Their therapy, education and support are the part no PHEIC mechanism funds.",
        summary:
          "The 2015–16 epidemic produced thousands of children with congenital Zika syndrome — microcephaly, brain malformation, seizures, feeding difficulties, hearing and vision impairment and developmental disability — who need years of therapy, special education and medical care, often in poor regions with limited rehabilitation services. The emergency declaration, the research mobilisation and the vaccine funding all ended with the outbreak; the lifetime of care that follows has no equivalent mechanism, and its cost falls on families and fragile local services. WHO's own language is that Zika can cause fetal loss, stillbirth and preterm birth and that complications occur after both symptomatic and asymptomatic infection — meaning the burden is larger than the visible microcephaly cases. The proposal is to treat the care of affected children as a standing commitment: dedicated rehabilitation and developmental services in affected regions, family support and social protection, surveillance that follows the cohort into adulthood, and financing that is not tied to an emergency declaration. It is the same asymmetry the corpus records across congenital NTDs — prevention is funded, disability is not.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Establish funded long-term follow-up and rehabilitation cohorts for children with congenital Zika syndrome in affected regions; measure developmental outcomes, service access and family economic burden.",
        owner: "National health and disability services with PAHO/WHO and rehabilitation organisations",
        links: [
          { label: "WHO — Zika virus (fact sheet, 6 November 2025): congenital complications and fetal loss", url: "https://www.who.int/news-room/fact-sheets/detail/zika-virus" },
          { label: "Pérez et al. — adverse fetal and perinatal outcomes, meta-analysis (eClinicalMedicine 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Perez+EA+Zika+pregnancy+meta-analysis" },
        ],
        diseases: ["zika"],
        pathogens: ["zika-virus"],
        institutions: ["who", "paho", "fiocruz"],
        countries: ["brazil"],
        bottlenecks: ["stigma-and-disability", "access-and-pricing", "funding-gap"],
        terms: ["congenital-zika-syndrome", "neglected-populations", "daly"],
        stats: [
          { label: "Congenital complications", value: "5–15% of infected pregnancies" },
          { label: "The gap", value: "Emergency funding ends; care needs do not" },
        ],
      },
    ],
  },
];
