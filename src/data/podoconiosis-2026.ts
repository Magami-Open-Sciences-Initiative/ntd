import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Podoconiosis 2026 fact-check additions: the AI early-detection trial, the
 * researchers and institutions behind the field, and the ideas that the 2026
 * source cross-check (PLoS NTD burden review June 2026, Rwanda case-control
 * study Aug 2026, ICTRP, Open Targets, PubMed) showed were missing from the
 * graph. Ordinary records of their kind, kept in one file so the review is
 * visible as a set; wired into `index.ts` alongside ADDITIONS.
 *
 * Cross-check confirmed the disease page's core figures against its own
 * cited sources: 4 million affected and cases in >32 countries (18 in Africa)
 * are both stated in the two 2026 PLoS NTD papers the page cites. New
 * findings added: comorbidity with tungiasis, the WASH-access barrier to foot
 * care, and geostatistical mapping of skin NTDs.
 *
 * Honest negatives: Open Targets carries podoconiosis (MONDO_0005425) with 32
 * associated targets, all low-score inflammatory/immune genes (CD86 0.038,
 * CD40, CD4, TNF, IL1B) — consistent with the mineral-particle inflammation
 * the page describes, but no drug target, because there is no drug for a
 * geochemical disease. ChEMBL has no target because there is no pathogen.
 * G-FINDER does not cover podoconiosis: it is non-infectious and not on the
 * WHO NTD list, so it falls outside the survey's scope — which is itself the
 * disease's funding problem, stated in prose rather than given a false figure.
 */
export const PODOCONIOSIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "podoconiosis-ai-detection",
        name: "AI-based early detection of skin NTDs (including podoconiosis)",
        tldr: "A trial using AI-assisted image recognition to find skin NTDs early — an attempt to give podoconiosis the screening tool it has never had.",
        summary:
          "Podoconiosis is diagnosed clinically, by a trained eye recognising the characteristic below-knee swelling in someone with a history of barefoot farming on irritant soil. In the rural highland communities where it occurs, that trained eye is scarce, so cases are found late, when swelling is established and irreversible. This trial (NCT07506967) tests early detection and AI-based management of skin-related neglected tropical diseases, using image recognition to help community-level workers identify cases sooner. If it works, it addresses the disease's central operational gap — early detection — and does so through a tool that can sit in a phone rather than a clinic. It also reflects the wider movement toward integrating skin NTDs into one screening pathway.",
        ...R,
        phase: "Diagnostic/management implementation trial",
        status: "Not yet recruiting",
        sponsor: "Investigator-led (skin NTD research collaboration)",
        intervention: "AI-assisted image-based detection and management of skin NTDs, including podoconiosis",
        result: "Pending; tests whether AI-assisted screening finds cases earlier than routine clinical detection.",
        registry: "ClinicalTrials.gov NCT07506967",
        registryUrl: "https://clinicaltrials.gov/study/NCT07506967",
        links: [
          { label: "Early detection and AI-based management of skin NTDs (NCT07506967)", url: "https://clinicaltrials.gov/study/NCT07506967" },
          { label: "Bushara et al. — modelling approaches for predicting skin NTD distribution (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/40220765/" },
        ],
        diseases: ["podoconiosis"],
        technologies: ["ai-microscopy", "mhealth-surveillance", "community-health-workers"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["ntd", "neglected-populations"],
        stats: [
          { label: "Stage", value: "Not yet recruiting" },
          { label: "Goal", value: "Find cases before swelling becomes irreversible" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "brighton-sussex",
        name: "Brighton and Sussex Medical School (podoconiosis group)",
        tldr: "The UK research group that, with Ethiopian partners, built the modern evidence base for podoconiosis — from genetics to stigma to burden.",
        summary:
          "The podoconiosis research group at Brighton and Sussex Medical School, long led by Gail Davey, is the academic centre of gravity for the disease. Working with Ethiopian institutions, it has produced the genetic evidence that podoconiosis has a heritable susceptibility component, the national mapping that gave Ethiopia the first real prevalence estimates, the mental-health and stigma research that shaped how the disease is understood, and the burden analyses that underpin advocacy. It is the clearest example in this corpus of a small, sustained research partnership between a high-income university and an African country's institutions producing almost everything known about a disease that the global system does not count.",
        ...R,
        institutionType: "University research group",
        country: "United Kingdom",
        city: "Brighton",
        focus: "Podoconiosis genetics, epidemiology, mapping, stigma and mental health; partnership with Ethiopian institutions.",
        links: [
          { label: "Davey et al. — podoconiosis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Davey+G+podoconiosis" },
        ],
        diseases: ["podoconiosis"],
        technologies: ["genomic-surveillance"],
        institutions: ["addis-ababa-university", "who"],
        countries: ["ethiopia"],
        terms: ["neglected-populations", "daly"],
      },
      {
        id: "addis-ababa-university",
        name: "Addis Ababa University",
        tldr: "Ethiopia's leading university and the African institutional home of podoconiosis research, teaching and clinical care.",
        summary:
          "Addis Ababa University, with its associated teaching hospitals and research centres, is the African institutional base for podoconiosis research and the partner without which the disease's evidence base could not exist. Ethiopian researchers at and around the university — including Kebede Deribe, Abebayehu Tora, Girmay Tadele and others — have led the field work, mapping, stigma research and clinical studies that define what is known about the disease, often in partnership with UK and international groups. Ethiopia carries the world's largest burden of podoconiosis, and the country's own researchers generate most of the knowledge about it — the model the corpus argues the whole NTD field should follow.",
        ...R,
        institutionType: "University",
        country: "Ethiopia",
        city: "Addis Ababa",
        focus: "Podoconiosis and skin-NTD research, epidemiology, clinical care and training.",
        links: [
          { label: "Deribe et al. — podoconiosis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Deribe+K+podoconiosis" },
        ],
        diseases: ["podoconiosis"],
        institutions: ["brighton-sussex", "who"],
        countries: ["ethiopia"],
        terms: ["neglected-populations", "daly"],
      },
      {
        id: "footwork",
        name: "Footwork — the International Podoconiosis Initiative",
        tldr: "The advocacy and programme organisation that put podoconiosis on the map and pushes to get it counted and funded.",
        summary:
          "Footwork (the International Podoconiosis Initiative) is the organisation dedicated to ending podoconiosis, working on prevention, treatment, advocacy and research coordination. Its role is the one the disease most needs: since podoconiosis is absent from WHO's NTD list and invisible in global statistics, someone has to argue for it to be counted, funded and included in programmes. Footwork supports footwear distribution, community foot-care programmes and the case for including podoconiosis in national NTD strategies and the WHO list — the advocacy that this corpus identifies as the difference between a disease being managed and a disease being ignored.",
        ...R,
        institutionType: "Non-governmental organisation / initiative",
        focus: "Podoconiosis prevention, treatment, advocacy and research coordination.",
        links: [
          { label: "The International Podoconiosis Initiative", url: "https://www.podo.org/" },
        ],
        diseases: ["podoconiosis"],
        technologies: ["foot-hygiene-and-bandaging"],
        terms: ["neglected-populations", "ntd"],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "gail-davey",
        name: "Gail Davey",
        tldr: "The physician-researcher who has led podoconiosis science for two decades and made a disease no one counted into one the world recognises.",
        summary:
          "Gail Davey is a physician and epidemiologist, emeritus professor at Brighton and Sussex Medical School and an honorary professor at Addis Ababa University, who has been the leading researcher in podoconiosis for over twenty years. She and her collaborators established that the disease has a genetic susceptibility component, produced the first rigorous prevalence mapping in Ethiopia, characterised its economic and mental-health burden, developed and tested community-based foot-care and footwear interventions, and drove the advocacy that took podoconiosis from an unstudied curiosity to a recognised neglected disease. She is the most cited author in the field by a wide margin, and her partnership model — international expertise committed to African institutional leadership — is the template the corpus holds up.",
        ...R,
        era: "Contemporary",
        role: "Physician and epidemiologist; emeritus professor, Brighton and Sussex Medical School; honorary professor, Addis Ababa University",
        knownFor: "Building the modern evidence base for podoconiosis and its recognition as a neglected disease.",
        links: [
          { label: "Davey et al. — podoconiosis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Davey+G+podoconiosis" },
        ],
        diseases: ["podoconiosis"],
        institutions: ["brighton-sussex", "addis-ababa-university"],
        countries: ["ethiopia"],
        technologies: ["genomic-surveillance", "foot-hygiene-and-bandaging"],
        terms: ["neglected-populations", "daly", "ntd"],
      },
      {
        id: "kebede-deribe",
        name: "Kebede Deribe",
        tldr: "The Ethiopian epidemiologist who produced the first real maps of podoconiosis — turning a disease of anecdotes into one of estimates.",
        summary:
          "Kebede Deribe is an Ethiopian epidemiologist who, with Gail Davey and others, produced the first robust, geostatistical mapping of podoconiosis — the modelling that converted scattered field surveys into national and continental estimates of who is affected and where. His work on the environmental determinants of the disease, its distribution across Africa, and its overlap with poverty and other NTDs gave advocates the evidence they needed, and he has since worked on NTD programmes and mapping at WHO and with international partners. Mapping is the step that makes a disease countable, and counting is what makes it fundable — which is why his contribution is central to the disease's progress.",
        ...R,
        era: "Contemporary",
        role: "Epidemiologist; podoconiosis mapping and NTD programme research, Ethiopia and internationally",
        knownFor: "First geostatistical mapping and distribution estimates of podoconiosis.",
        links: [
          { label: "Deribe et al. — podoconiosis mapping and burden (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Deribe+K+podoconiosis" },
        ],
        diseases: ["podoconiosis"],
        institutions: ["addis-ababa-university", "brighton-sussex", "who"],
        countries: ["ethiopia"],
        technologies: ["genomic-surveillance", "mhealth-surveillance"],
        terms: ["neglected-populations", "ntd", "daly"],
      },
      {
        id: "abebayehu-tora",
        name: "Abebayehu Tora",
        tldr: "The Ethiopian social scientist documenting the stigma and mental-health burden that makes podoconiosis more than a swollen leg.",
        summary:
          "Abebayehu Tora is an Ethiopian researcher whose work at Hawassa University and with international collaborators has documented the social and psychological dimensions of podoconiosis: the stigma, the exclusion from marriage, worship and school, the gendered burden on women, and the mental-health consequences that the disease's physical management alone does not address. His research established that podoconiosis carries a stigma as severe as lymphatic filariasis and that affected people face measurable discrimination, and he has worked on interventions to reduce it. He represents the part of the field that the corpus argues is inseparable from clinical care: a disease can be prevented with shoes and managed with washing, and still devastate a life if it is treated as shameful.",
        ...R,
        era: "Contemporary",
        role: "Social scientist; podoconiosis stigma and public-health research, Ethiopia",
        knownFor: "Documenting stigma and its social consequences in podoconiosis.",
        links: [
          { label: "Tora et al. — systemic productivity and stigma in podoconiosis (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Tora+A+podoconiosis" },
        ],
        diseases: ["podoconiosis"],
        institutions: ["addis-ababa-university"],
        countries: ["ethiopia"],
        bottlenecks: ["stigma-and-disability"],
        terms: ["neglected-populations", "daly"],
      },
      {
        id: "samuel-wanji",
        name: "Samuel Wanji",
        tldr: "The Cameroonian parasitologist who showed podoconiosis is not only an Ethiopian disease — and who bridges it with filarial research.",
        summary:
          "Samuel Wanji is a Cameroonian parasitologist at the University of Buea, one of Central Africa's leading researchers on neglected tropical diseases. His work extended podoconiosis research beyond the Ethiopian highlands, documenting the disease and its environmental determinants in Cameroon and helping establish that non-filarial lymphoedema occurs across African highland regions, not in one country. He has also worked extensively on lymphatic filariasis, loiasis and onchocerciasis, and his career embodies the diagnostic discipline the corpus repeatedly emphasises: distinguishing lymphatic filariasis from podoconiosis and other causes of lymphoedema is essential, because they look alike and require entirely different responses.",
        ...R,
        era: "Contemporary",
        role: "Professor of parasitology, University of Buea, Cameroon",
        knownFor: "Podoconiosis and filarial disease research in Cameroon and Central Africa.",
        links: [
          { label: "Wanji et al. — podoconiosis and lymphatic filariasis research (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Wanji+S+podoconiosis" },
        ],
        diseases: ["podoconiosis", "lymphatic-filariasis", "onchocerciasis"],
        countries: ["cameroon"],
        technologies: ["genomic-surveillance"],
        terms: ["neglected-populations", "zoonosis", "ntd"],
      },
      {
        id: "maya-semrau",
        name: "Maya Semrau",
        tldr: "The researcher who quantified the mental-health burden of podoconiosis, making depression and stigma measurable outcomes.",
        summary:
          "Maya Semrau is a researcher whose work with the podoconiosis group at Brighton and Sussex Medical School and Ethiopian partners established the scale of the disease's mental-health burden: high rates of depression and anxiety among people affected, driven by stigma and disability, and measurable with validated tools. Her research turned 'stigma' from a qualitative observation into a quantified outcome, which is what allows it to be tracked and addressed like any other aspect of disease burden. She represents the growing recognition — in podoconiosis as in leprosy, lymphatic filariasis and noma — that the psychological consequence of a visible, stigmatised condition is a core part of the disease, not a side effect.",
        ...R,
        era: "Contemporary",
        role: "Mental-health researcher; podoconiosis, stigma and global mental health",
        knownFor: "Quantifying the mental-health burden of podoconiosis.",
        links: [
          { label: "Semrau et al. — mental distress and podoconiosis (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Semrau+M+podoconiosis" },
        ],
        diseases: ["podoconiosis"],
        institutions: ["brighton-sussex"],
        bottlenecks: ["stigma-and-disability"],
        terms: ["neglected-populations", "daly"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "count-podoconiosis",
        name: "Count the uncounted: routine surveillance and geostatistical mapping for podoconiosis",
        tldr: "The disease is missing from the Global Burden of Disease study and WHO reporting — and being uncounted is why it is unfunded.",
        summary:
          "Podoconiosis affects an estimated four million people and remains absent from the Global Burden of Disease study, from WHO NTD reporting and from most national health information systems, so its prevalence rests on a small number of field surveys and geostatistical models. That is not a technical accident; it is why the disease has no dedicated funding stream and no place in mass programmes. The proposal is to make counting the intervention: add podoconiosis to national NTD surveillance and DHIS2 reporting in the countries where it occurs, extend the geostatistical mapping that already exists for Ethiopia and parts of Africa to every suspected endemic area, and use AI-assisted image screening and skin-NTD survey design to find cases where no clinician has looked. Geostatistical methods developed for other NTDs can be adapted; the obstacle is political will to count a disease the system has no box for.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add podoconiosis to routine NTD surveillance in endemic countries and complete continental geostatistical mapping; measure the change in prevalence estimates and in national budget lines allocated.",
        owner: "National NTD programmes with WHO, the Brighton–Addis research partnership and Footwork",
        links: [
          { label: "Hitimana et al. — health and economic burden of podoconiosis in East Africa (PLoS NTD 2026)", url: "https://doi.org/10.1371/journal.pntd.0014427" },
          { label: "Bushara et al. — modelling approaches for skin NTD distribution (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/40220765/" },
        ],
        diseases: ["podoconiosis"],
        technologies: ["mhealth-surveillance", "ai-microscopy", "genomic-surveillance"],
        institutions: ["who", "brighton-sussex", "addis-ababa-university", "footwork"],
        countries: ["ethiopia", "uganda", "cameroon"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["neglected-populations", "daly", "ntd"],
        stats: [
          { label: "Problem", value: "Absent from the Global Burden of Disease study" },
          { label: "Estimate rests on", value: "Partial field surveys, not a national count" },
        ],
      },
      {
        id: "integrate-podoconiosis-skin-ntds",
        name: "Put podoconiosis into the skin-NTD clinics that already exist",
        tldr: "It shares communities, a visible sign and a differential with leprosy and filariasis — so treat it in the same clinic, not a separate one it will never get.",
        summary:
          "Podoconiosis is not on the WHO NTD list, so it has no vertical programme and never will. But it is a visible skin and limb condition that occurs in exactly the communities where leprosy, lymphatic filariasis and other skin NTDs are already being found, and it must be distinguished from filariasis by any clinician working there. WHO now promotes integrated skin-NTD services, and podoconiosis is a natural fit: the same community health workers, the same training, the same foot-care and wound supplies, the same stigma-reduction work. The proposal is to add podoconiosis recognition and foot care to existing skin-NTD services in endemic districts, with misdiagnosis between filariasis and podoconiosis explicitly corrected, so the disease is managed through the platform the system already funds rather than waiting for a place on a list.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Integrate podoconiosis case-finding, foot care and footwear into skin-NTD services in endemic Ethiopian and Ugandan districts; measure cases detected, misdiagnosis corrected and treatment coverage.",
        owner: "National NTD programmes with WHO skin-NTD integration, Footwork and community organisations",
        links: [
          { label: "Ngowi et al. — podoconiosis patients' access to WASH (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/40635105/" },
          { label: "Early detection and AI-based management of skin NTDs (NCT07506967)", url: "https://clinicaltrials.gov/study/NCT07506967" },
        ],
        diseases: ["podoconiosis", "lymphatic-filariasis", "leprosy"],
        technologies: ["community-health-workers", "foot-hygiene-and-bandaging", "mhealth-surveillance", "wash-interventions"],
        institutions: ["who", "footwork"],
        countries: ["ethiopia", "uganda"],
        bottlenecks: ["diagnostics-gap", "stigma-and-disability", "workforce-and-capacity"],
        terms: ["neglected-populations", "wash", "ntd"],
        stats: [
          { label: "Leverage", value: "Skin-NTD clinics already find leprosy and filariasis in the same districts" },
          { label: "Key error to fix", value: "Podoconiosis is still mistaken for lymphatic filariasis" },
        ],
      },
      {
        id: "shoes-as-public-health",
        name: "Fund footwear as a public-health commodity, not a donation",
        tldr: "The entire prevention is a pair of shoes that poor families cannot keep replacing — so finance shoes the way nets are financed.",
        summary:
          "Podoconiosis is prevented by wearing shoes, and the evidence that footwear works is not in doubt. What fails is the economics: shoes wear out, children outgrow them, farming barefoot is practical, and families may own one pair between several members. Programmes have relied on donations and distribution, which reach people once and then stop. The proposal is to treat footwear as a sustained public-health commodity the way insecticide-treated nets are treated — locally produced, affordable, replaced on a schedule, distributed through schools and maternal and child health services alongside deworming and immunisation, and linked to podoconiosis prevalence reduction as a measured outcome. It is a development investment with a health return, and it is the only intervention that stops the disease before it starts.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pilot a sustained footwear programme through schools and child-health services in endemic districts, with local manufacture and scheduled replacement; measure shoe-wearing coverage and podoconiosis incidence over five years.",
        owner: "National programmes and development partners with Footwork and local manufacturers",
        links: [
          { label: "Hitimana et al. — economic burden of podoconiosis in East Africa (PLoS NTD 2026)", url: "https://doi.org/10.1371/journal.pntd.0014427" },
          { label: "PLoS NTD — promoting consistent shoe use among children at high risk (trial report)", url: "https://clinicaltrials.gov/study/NCT01160523" },
        ],
        diseases: ["podoconiosis"],
        technologies: ["foot-hygiene-and-bandaging", "community-health-workers"],
        institutions: ["footwork"],
        countries: ["ethiopia", "uganda"],
        bottlenecks: ["costs-and-financing", "neglected-populations"],
        terms: ["neglected-populations", "wash", "daly"],
        stats: [
          { label: "Prevention", value: "Consistent footwear — cheap, proven, and not sustained" },
          { label: "Model", value: "Finance and replace shoes like insecticide-treated nets" },
        ],
      },
    ],
  },
];
