import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Noma 2026 fact-check additions: the Treponema sp. A candidate marker, the
 * Sokoto/Nigeria research groups, and the people/ideas review. The headline
 * corrections (the metagenomics paper is 2026, not 2024; the novel species is
 * Treponema sp. A; AMR in Prevotella) went into the disease record and spike.
 * Ordinary records of their kind, kept in one file so the review is visible
 * as a set; wired into `index.ts` alongside MALARIA_2026.
 */
export const NOMA_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "noma-microbiome-marker",
        name: "Treponema sp. A oral marker (candidate)",
        tldr: "A novel Treponema species found in 15 of 19 acute noma cases and absent from healthy mouths — a candidate marker, not yet a test.",
        summary:
          "The first deep shotgun-metagenomic study of noma (PLoS NTD, March 2026) profiled saliva from 19 Nigerian children with acute noma and recovered 40 high-quality Treponema genomes spanning 19 species, 14 of them novel. A novel species, 'Treponema sp. A', was detected in 15 of the 19 cases and was entirely absent from an internationally representative set of healthy saliva metagenomes; re-analysis of earlier 16S data from Niger showed the same pattern. That makes it the strongest candidate microbial marker yet for a disease with no point-of-care test. The authors are explicit that causation is unproven — sp. A could be a driver, a marker of dysbiosis, or a bystander — and that a field-deployable assay does not exist.",
        ...R,
        method: "Research-grade shotgun metagenomic detection of Treponema sp. A; no field assay",
        sampleType: "Saliva / oral sample",
        performance:
          "Detected in 15 of 19 acute noma cases and absent from healthy saliva metagenomes; replicated in independent Niger 16S data. Association only — causality not established.",
        availability: "Research use only; noma has no point-of-care diagnostic test",
        turnaround: "Laboratory sequencing; not yet a rapid test",
        links: [
          { label: "Shotgun metagenomic analysis of oral microbiomes in noma (PLoS NTD 2026)", url: "https://doi.org/10.1371/journal.pntd.0014118" },
        ],
        diseases: ["noma"],
        technologies: ["genomic-surveillance", "molecular-pcr"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Detection", value: "15 of 19 cases", note: "absent from healthy controls", source: { label: "Olaleye et al., PLoS NTD 2026", url: "https://doi.org/10.1371/journal.pntd.0014118" } },
          { label: "Novel species found", value: "14 of 19 Treponema species", note: "from 40 metagenome-assembled genomes" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "udus-sokoto-noma",
        name: "Usmanu Danfodiyo University / Sokoto noma research group (Nigeria)",
        tldr: "The Nigerian group producing the country's noma epidemiology, surgery and classification evidence.",
        summary:
          "The oral and maxillofacial surgery group at Usmanu Danfodiyo University and its teaching hospital in Sokoto, working with the Noma Children's Hospital, is the centre of Nigerian noma research. Its members (Ramat Braimah, Mujtaba Bala, Seidu Bello, Abdurrazaq Taiwo and colleagues) produced the Lancet Global Health spatial model of noma incidence in Nigeria, the national incidence and clinical-presentation estimates, the Braimah-Taiwo mandibulo-maxillary classification, and studies of recurrence, ocular complications and psychiatric outcomes. Nigeria carries the world's largest noma burden and led WHO's recognition of the disease; this group supplies the evidence its programme runs on.",
        ...R,
        institutionType: "University research group",
        country: "Nigeria",
        city: "Sokoto",
        focus: "Noma epidemiology, classification, surgical outcomes and mental health in Nigeria.",
        links: [
          { label: "Spatial distribution of noma incidence in Nigeria (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42114546" },
        ],
        diseases: ["noma"],
        institutions: ["noma-children-hospital", "msf"],
        technologies: ["community-health-workers"],
        terms: ["ntd"],
      },
      {
        id: "noma-survivors-association",
        name: "Noma Survivors Association",
        tldr: "A survivor-led body arguing that 'neglect' of noma should be reconsidered from the survivors' side.",
        summary:
          "The Noma Survivors Association is a survivor-led organisation that in 2025 published a BMJ Global Health analysis arguing that noma's recognition as an NTD is an opportunity to reconsider what neglect means in global health — centring survivors and the structural drivers of the disease rather than only medical intervention. Survivor-led advocacy is unusually rare in the NTD field and reframes noma as a rights and equity problem as much as a clinical one.",
        ...R,
        institutionType: "Survivor-led organisation",
        country: "Nigeria",
        focus: "Survivor advocacy, rights-based framing and mental health in noma.",
        links: [
          { label: "Noma as an NTD: reconsidering neglect (BMJ Glob Health 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40754343" },
        ],
        diseases: ["noma"],
        institutions: ["who"],
        terms: ["stigma-and-disability", "ntd"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "ramat-braimah",
        name: "Ramat Oyebunmi Braimah",
        tldr: "The Nigerian maxillofacial surgeon mapping where noma strikes and why.",
        summary:
          "Ramat Braimah (Usmanu Danfodiyo University, Sokoto) led the Lancet Global Health spatial-distribution modelling of noma in Nigeria (1999–2024) and the national incidence and clinical-presentation estimates, and co-developed the Braimah-Taiwo mandibulo-maxillary classification. His work gives Nigeria — and by extension the field — the district-level evidence needed to target noma detection where it is worst, rather than where it is convenient.",
        ...R,
        era: "Contemporary",
        role: "Maxillofacial surgeon, Usmanu Danfodiyo University, Sokoto, Nigeria",
        knownFor: "Noma epidemiology and classification in Nigeria.",
        links: [
          { label: "Spatial distribution of noma incidence in Nigeria (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42114546" },
        ],
        diseases: ["noma"],
        institutions: ["udus-sokoto-noma", "noma-children-hospital"],
        countries: ["nigeria"],
        terms: ["ntd"],
      },
      {
        id: "mujtaba-bala",
        name: "Mujtaba Bala",
        tldr: "The Sokoto surgeon studying noma recurrence, family risk and ocular damage.",
        summary:
          "Mujtaba Bala (Usmanu Danfodiyo University Teaching Hospital, Sokoto) has examined whether noma recurs after acute treatment (a clinical review of 34 patients), the household-level family factors that shape risk, and the ocular complications survivors carry. His work pushes back on assumptions — including the common belief that treated noma never returns — with data from the world's largest patient population.",
        ...R,
        era: "Contemporary",
        role: "Maxillofacial surgeon, Usmanu Danfodiyo University Teaching Hospital, Sokoto",
        knownFor: "Noma recurrence, family risk factors and ocular complications.",
        links: [
          { label: "Recurrence of noma (J Craniofac Surg 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40591488" },
        ],
        diseases: ["noma"],
        institutions: ["udus-sokoto-noma", "noma-children-hospital"],
        countries: ["nigeria"],
        terms: ["ntd"],
      },
      {
        id: "michael-olaleye",
        name: "Michael Olaleye",
        tldr: "First author of the metagenomic study that found Treponema sp. A in noma.",
        summary:
          "Michael Olaleye, at the Noma Children's Hospital in Sokoto with Médecins Sans Frontières, led the first deep shotgun-metagenomic study of noma — identifying the novel Treponema sp. A in 15 of 19 acute cases and the antibiotic-resistance determinants that threaten treatment. Working from the point of care, he also co-authored a study of healthcare workers' knowledge and practices, addressing the diagnostic delay that marks noma everywhere.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Noma Children's Hospital, Médecins Sans Frontières, Sokoto, Nigeria",
        knownFor: "First deep metagenomic study of noma; Treponema sp. A.",
        links: [
          { label: "Shotgun metagenomic analysis of oral microbiomes in noma (PLoS NTD 2026)", url: "https://doi.org/10.1371/journal.pntd.0014118" },
        ],
        diseases: ["noma"],
        institutions: ["noma-children-hospital", "msf"],
        countries: ["nigeria"],
        technologies: ["genomic-surveillance", "molecular-pcr"],
        terms: ["ntd"],
      },
      {
        id: "john-adeoye",
        name: "John Adeoye",
        tldr: "The oral epidemiologist linking noma to conflict, displacement and structural vulnerability.",
        summary:
          "John Adeoye (Faculty of Dentistry, University of Hong Kong) co-authored the Lancet Global Health analysis of noma's distribution in Nigeria that looked beyond geography to conflict, displacement and structural vulnerability, and co-authored the national spatial modelling study. His framing — that noma's map is a map of poverty and instability — connects the disease to the same structural drivers as other NTDs.",
        ...R,
        era: "Contemporary",
        role: "Oral and maxillofacial epidemiologist, University of Hong Kong",
        knownFor: "Structural drivers and spatial distribution of noma in Nigeria.",
        links: [
          { label: "Beyond geography: conflict and displacement in noma distribution (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42624804" },
        ],
        diseases: ["noma"],
        institutions: ["udus-sokoto-noma"],
        terms: ["ntd"],
      },
      {
        id: "heron-gebretsadik",
        name: "Heron Gezahegn Gebretsadik",
        tldr: "The Ethiopian researcher quantifying how rare noma has become — where it is still hidden.",
        summary:
          "Heron Gezahegn Gebretsadik has estimated the prevalence of noma in Ethiopia and, in 2026, assessed the disease's rarity by cumulative point prevalence — work that helps distinguish true reduction from under-detection. Ethiopia is one of the large 'noma belt' countries where the disease is both real and invisible in routine statistics, which makes careful estimation a precondition for targeting.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Ethiopia",
        knownFor: "Noma prevalence and rarity estimation in Ethiopia.",
        links: [
          { label: "Assessing the rarity of noma in Ethiopia (Pediatr Neonatol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Gebretsadik+noma+Ethiopia" },
        ],
        diseases: ["noma"],
        countries: ["ethiopia"],
        terms: ["ntd"],
      },
      {
        id: "aisha-yakubu",
        name: "A. I. Yakubu",
        tldr: "Measuring the psychological burden carried by families of noma survivors.",
        summary:
          "A. I. Yakubu (Department of Psychiatry, Federal University Birnin-Kebbi, Nigeria) studies the psychological burden on informal caregivers of noma survivors — the parents and relatives whose mental health is rarely counted but shapes a child's recovery. It is part of a broader shift in noma research toward mental health as core care rather than an afterthought.",
        ...R,
        era: "Contemporary",
        role: "Psychiatrist, Federal University Birnin-Kebbi, Nigeria",
        knownFor: "Caregiver psychological burden in noma.",
        links: [
          { label: "Psychological burden of care among noma caregivers (J Stomatol Oral Maxillofac Surg 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41478347" },
        ],
        diseases: ["noma"],
        countries: ["nigeria"],
        terms: ["stigma-and-disability", "ntd"],
      },
      {
        id: "carlos-chaccour",
        name: "Carlos Chaccour",
        tldr: "The Barcelona researcher testing active case-finding for noma beyond the clinic.",
        summary:
          "Carlos Chaccour (ISGlobal, Barcelona) with Marta Ribes has studied healthcare workers' knowledge of noma in Mozambique and made the case for active and passive case-finding to address noma's neglect where poverty is greatest. The work asks who finds the cases — a question as important as any drug, since noma is curable only when caught early enough for someone to see it.",
        ...R,
        era: "Contemporary",
        role: "Researcher, ISGlobal, Barcelona",
        knownFor: "Noma case-finding and KAP studies in Mozambique.",
        links: [
          { label: "Active and passive case finding for noma (BMJ Glob Health 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41005813" },
        ],
        diseases: ["noma"],
        technologies: ["community-health-workers"],
        terms: ["ntd"],
      },
      {
        id: "stuart-ainsworth",
        name: "Stuart Ainsworth",
        tldr: "The Liverpool microbiologist who led the metagenomics behind Treponema sp. A.",
        summary:
          "Stuart Ainsworth (University of Liverpool / Liverpool School of Tropical Medicine) is senior author of the first deep metagenomic study of noma and has written on the disease's recognition as an NTD. His laboratory frames noma as a microbial-ecology problem — the work that produced both the Treponema sp. A candidate marker and the finding of clinically alarming resistance in the bacteria noma treatment depends on.",
        ...R,
        era: "Contemporary",
        role: "Microbiologist, University of Liverpool / LSTM",
        knownFor: "Noma oral metagenomics; Treponema sp. A.",
        links: [
          { label: "Shotgun metagenomic analysis of oral microbiomes in noma (PLoS NTD 2026)", url: "https://doi.org/10.1371/journal.pntd.0014118" },
        ],
        diseases: ["noma"],
        institutions: ["lstm"],
        technologies: ["genomic-surveillance", "molecular-pcr"],
        terms: ["ntd"],
      },
      {
        id: "damilare-akintunde",
        name: "Damilare M. Akintunde",
        tldr: "First author of the review warning that antibiotic resistance threatens noma control.",
        summary:
          "Damilare Akintunde led the 2026 review of antimicrobial resistance in noma control, arguing that the disease's dependence on early broad-spectrum antibiotics is under-recognised and under-resourced — a costly neglect within an already neglected disease. It is the policy counterpart to the resistance genes his colleagues found in noma metagenomes.",
        ...R,
        era: "Contemporary",
        role: "Researcher, noma antimicrobial resistance",
        knownFor: "Review of antimicrobial resistance in noma control.",
        links: [
          { label: "Antimicrobial resistance in noma control (Trop Med Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42728602" },
        ],
        diseases: ["noma"],
        terms: ["amr", "ntd"],
      },
      {
        id: "suleman-idris",
        name: "Suleman H. Idris",
        tldr: "Senior author of the AMR-in-noma review and a Nigerian noma researcher.",
        summary:
          "Suleman Idris is senior author of the 2026 review of antimicrobial resistance in noma control, one of the Nigerian researchers building the case for resourcing early antibiotic treatment. The review's core argument — that noma's cure exists but its delivery does not — is the field's recurring refrain.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Nigeria",
        knownFor: "Antimicrobial resistance in noma control.",
        links: [
          { label: "Antimicrobial resistance in noma control (Trop Med Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42728602" },
        ],
        diseases: ["noma"],
        countries: ["nigeria"],
        terms: ["amr", "ntd"],
      },
      {
        id: "denys-baratti-mayer",
        name: "Denys Baratti-Mayer",
        tldr: "The Geneva researcher who quantified noma's economic and social cost.",
        summary:
          "Denys Baratti-Mayer (Geneva University Hospitals) has researched noma for years, including work with Mpinga and colleagues to model the economic and social costs of the disease and studies of survivors' experiences in Burkina Faso. By attaching a cost to a disease the world ignored, this line of work gave noma the kind of economic argument that moves funders.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Geneva University Hospitals, Switzerland",
        knownFor: "Economic and social cost of noma.",
        links: [
          { label: "Economic and social costs of noma (Trop Med Infect Dis 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35878131" },
        ],
        diseases: ["noma"],
        terms: ["stigma-and-disability", "ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "noma-early-detection-package",
        name: "A primary-care early-detection package for noma",
        tldr: "Train, equip and pay frontline workers to catch noma at stage 1 — the only stage where antibiotics prevent disfigurement.",
        summary:
          "Noma is curable at stages 0–1 with hygiene, chlorhexidine, antibiotics and nutrition, and devastating by stage 3 — yet there is no point-of-care test and health-worker awareness is poor (documented in Nigeria, Mozambique and beyond). The idea packages the operational fix: a short recognition-and-referral training for primary-care and community health workers, a simple visual job-aid built on the WHO stage classification, a guaranteed supply of the antibiotics and chlorhexidine, and integration into nutrition and immunisation clinics where the at-risk child already appears. Small pilots — including in internally displaced communities in northeast Nigeria, where conflict has driven resurgence — suggest it works; what is missing is national financing at scale.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Deploy the recognition-and-referral package in two high-burden Nigerian states plus one 'noma belt' country, measuring stage-at-presentation, antibiotic access and disfigurement outcomes against standard passive care.",
        owner: "National NTD/oral health programmes with WHO AFRO and MSF",
        links: [
          { label: "WHO AFRO — early detection and management of noma", url: "https://www.afro.who.int/publications/information-brochure-early-detection-and-management-noma" },
        ],
        diseases: ["noma"],
        institutions: ["who", "msf", "noma-children-hospital", "zero-noma"],
        technologies: ["community-health-workers", "mhealth-surveillance"],
        bottlenecks: ["diagnostics-gap", "access-and-pricing", "surveillance-data-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Window", value: "WHO stages 0–1", note: "where treatment prevents disfigurement" },
        ],
      },
      {
        id: "noma-microbiome-diagnostic",
        name: "Turn the noma microbiome marker into a field test",
        tldr: "Treponema sp. A points to a diagnostic — build it into something a clinic can use before gangrene.",
        summary:
          "The 2026 metagenomic study delivered the first credible microbial signature of noma: a novel Treponema sp. A in 15 of 19 cases and absent from healthy mouths, plus a dysbiosis pattern (Treponema, Porphyromonas, Bacteroides up; Streptococcus, Rothia down). The idea is to push that from association to a validated field test — targeted qPCR or a lateral-flow assay against sp. A and the broader signature, developed with FIND-style product-development support and validated prospectively against the WHO stages. Causality may never be proven, but a marker of noma dysbiosis would still let a health worker act at the stage that matters.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Develop a targeted assay against Treponema sp. A and the dysbiosis signature; validate prospectively in Nigerian and Ethiopian children against clinical staging, measuring sensitivity/specificity at stages 1–2.",
        owner: "LSTM/Liverpool with MSF, Noma Children's Hospital and a diagnostic developer",
        links: [
          { label: "Shotgun metagenomic analysis of oral microbiomes in noma (PLoS NTD 2026)", url: "https://doi.org/10.1371/journal.pntd.0014118" },
        ],
        diseases: ["noma"],
        diagnostics: ["noma-microbiome-marker", "molecular-pcr"],
        institutions: ["lstm", "noma-children-hospital", "msf", "find-dx"],
        bottlenecks: ["diagnostics-gap", "funding-gap"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Signal", value: "15 of 19 cases", note: "absent from healthy controls" },
        ],
      },
      {
        id: "noma-survivor-care-model",
        name: "Survivor-defined care: surgery plus mental health, counted",
        tldr: "Make mental health, stigma reduction and livelihoods part of noma care — and measure them.",
        summary:
          "The evidence now runs ahead of the programme: psychiatric morbidity and reduced quality of life are documented among surgically treated survivors, depressive symptoms among the facially disfigured, and a heavy psychological burden on caregivers — while survivor-led voices argue that 'saving faces is not enough'. The idea is a survivor-defined package that pairs reconstructive surgery with routine mental-health screening, stigma reduction, and school/ livelihood reintegration, with outcomes measured and reported alongside surgical success. It reframes the goal from a repaired face to a restored life.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add structured mental-health screening and stigma/livelihood support to a Sokoto-style surgical programme, measuring depression scores, quality of life and reintegration against surgery-only controls.",
        owner: "MSF/Noma Children's Hospital with Nigerian psychiatry groups and survivor organisations",
        links: [
          { label: "Saving faces is not enough (PLOS Ment Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Fastenau+noma+mental+health" },
        ],
        diseases: ["noma"],
        institutions: ["msf", "noma-children-hospital", "noma-survivors-association"],
        bottlenecks: ["stigma-and-disability", "funding-gap"],
        terms: ["stigma-and-disability", "ntd"],
        stats: [
          { label: "Gap", value: "Mental health not routine", note: "despite documented morbidity in survivors and caregivers" },
        ],
      },
    ],
  },
];
