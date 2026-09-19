import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Leishmaniasis 2026 fact-check additions: the two trials behind WHO's July
 * 2026 guideline update, the guideline itself, the East African research
 * centre and researchers, and the ideas the 2026 source cross-check (WHO
 * guideline 28 July 2026, WHO news 29 July 2026, DNDi, ClinicalTrials.gov,
 * ChEMBL, G-FINDER 2024, PubMed) showed were missing from the leishmaniasis
 * graph. Ordinary records of their kind, kept in one file so the review is
 * visible as a set; wired into `index.ts` alongside ADDITIONS.
 *
 * Honest negatives from the cross-check, recorded here so they are not
 * re-searched: Open Targets carries leishmaniasis (MONDO_0011989) with 2,178
 * associated targets, but the top hits are immunoglobulin gene segments
 * (IGHG3, IGHG1, 0.59) — serology artefacts, not drug targets. ChEMBL has
 * real Leishmania protein entries (trypanothione reductase CHEMBL2176840,
 * ornithine decarboxylase CHEMBL6192, farnesyl pyrophosphate synthase
 * CHEMBL3693, cysteine protease CHEMBL4751, beta-tubulin CHEMBL3186) — the
 * corpus already carries trypanothione reductase and NMT; the others are
 * noted as a class rather than added one by one. G-FINDER 2024 reports
 * leishmaniasis R&D at about US$39 million in 2023, largely unchanged from
 * record lows — now a stat on the disease page.
 */
export const LEISHMANIASIS_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "mf-pm-east-africa-phase3",
        name: "Miltefosine + paromomycin for visceral leishmaniasis in eastern Africa (Phase 3)",
        tldr: "The DNDi trial in four African countries that gave WHO the evidence to recommend the first SSG-free regimen for kala-azar.",
        summary:
          "Sodium stibogluconate plus paromomycin was the standard treatment for visceral leishmaniasis in eastern Africa: 17 days of injections with serious cardiac and pancreatic toxicity. This DNDi-led Phase 3, open-label, randomised non-inferiority trial compared it with a shorter 14-day regimen of oral miltefosine plus injectable paromomycin in 439 patients across Ethiopia, Kenya, Sudan and Uganda — including the MSF treatment centre at Abdurafi in Ethiopia. Its positive results underpinned WHO's July 2026 recommendation of miltefosine plus paromomycin as an SSG-free first-line regimen for primary VL in the region, cutting treatment duration and one injection while reducing toxicity. It is the African counterpart to the South Asian trials that made Bangladesh's elimination possible, and the evidence base for the region that now carries the world's largest VL burden.",
        ...R,
        phase: "Phase 3, randomised controlled non-inferiority",
        status: "Completed; supported the WHO July 2026 guideline recommendation",
        sponsor: "Drugs for Neglected Diseases initiative (DNDi), with MSF and national programmes",
        intervention: "Oral miltefosine + injectable paromomycin (14 days) versus SSG + paromomycin (17 days)",
        result: "Non-inferior and better tolerated; basis for WHO's first SSG-free recommendation for eastern Africa.",
        registry: "ClinicalTrials.gov NCT03129646",
        registryUrl: "https://clinicaltrials.gov/study/NCT03129646",
        links: [
          { label: "Miltefosine/paromomycin Phase 3 for VL in eastern Africa (ClinicalTrials.gov NCT03129646)", url: "https://clinicaltrials.gov/study/NCT03129646" },
          { label: "WHO — updates treatment guidelines on VL and PKDL (July 2026)", url: "https://www.who.int/news/item/29-07-2026-who-updates-treatment-guidelines-on-visceral-and-post-kala-azar-dermal-leishmaniasis" },
          { label: "DNDi — visceral leishmaniasis portfolio and achievements", url: "https://dndi.org/diseases/visceral-leishmaniasis/projects-achievements" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["miltefosine", "paromomycin", "antimonials"],
        technologies: ["open-science-drug-discovery"],
        institutions: ["dndi", "msf", "who"],
        countries: ["ethiopia", "kenya", "sudan", "uganda"],
        terms: ["pkdl", "pdp", "ntd"],
        stats: [
          { label: "Enrolment", value: "439", number: 439, unit: "patients", year: 2021, geography: "Ethiopia, Kenya, Sudan, Uganda", source: { label: "ClinicalTrials.gov NCT03129646", url: "https://clinicaltrials.gov/study/NCT03129646" } },
          { label: "Regimen", value: "14 days, one fewer injection than the 17-day standard" },
        ],
      },
      {
        id: "lxe408-vl-phase2",
        name: "LXE408 Phase II for visceral leishmaniasis (India and Ethiopia)",
        tldr: "The parallel India and Ethiopia Phase II studies of the oral proteasome inhibitor that could finally make kala-azar treatment pill-only.",
        summary:
          "LXE408 is a first-in-class oral inhibitor of the kinetoplastid proteasome, developed by DNDi with Novartis. Two Phase II studies ran in parallel to reflect the differences between the two great burden regions: a randomised, multicentre study in India (approximately 95 adults and adolescents, including a single-dose liposomal amphotericin B calibrator arm) and a randomised, single-centre study in Ethiopia (52 patients, comparing 14 days of oral LXE408 with the local standard of care, SSG plus paromomycin). Recruitment and follow-up completed in 2025 — India finalised 95 patients in March with follow-up to September, Ethiopia completed 52 in May with final visits in November — and results from both are expected in 2026. If positive, LXE408 would be the first all-oral, short-course cure for visceral leishmaniasis, removing injections, hospitalisation and cold chain.",
        ...R,
        phase: "Phase 2, randomised open-label",
        status: "Follow-up completed 2025; results expected 2026",
        sponsor: "DNDi with Novartis, and partners in India and Ethiopia",
        intervention: "Oral LXE408 (300 mg once daily for 7 or 14 days) versus local standard of care (liposomal amphotericin B in India; SSG + paromomycin in Ethiopia)",
        result: "Pending; the first test of an oral proteasome inhibitor as a short-course cure for visceral leishmaniasis.",
        registry: "ClinicalTrials.gov NCT05957978 (Ethiopia); DNDi-LXE408-01-VL (India)",
        registryUrl: "https://clinicaltrials.gov/study/NCT05957978",
        links: [
          { label: "DNDi — LXE408 Phase 2 protocol synopsis (India)", url: "https://dndi.org/wp-content/uploads/2023/10/DNDi-LXE408-01-VL-Clinical-Trial-Protocol-Synopsis.pdf" },
          { label: "LXE408 Ethiopia Phase II (ClinicalTrials.gov NCT05957978)", url: "https://clinicaltrials.gov/study/NCT05957978" },
          { label: "DNDi — 2025 R&D programmes in review: leishmaniasis", url: "https://dndi.org/news/2026/2025-rd-programmes-in-review-leishmaniasis" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["lxe408"],
        targets: ["parasite-proteasome"],
        technologies: ["open-science-drug-discovery", "ai-drug-discovery"],
        institutions: ["dndi", "university-of-gondar"],
        countries: ["india", "ethiopia"],
        terms: ["pdp", "ntd"],
        stats: [
          { label: "Ethiopia enrolment", value: "52", number: 52, unit: "patients", year: 2025, geography: "Ethiopia", source: { label: "DNDi 2025 leishmaniasis review", url: "https://dndi.org/news/2026/2025-rd-programmes-in-review-leishmaniasis" } },
          { label: "India enrolment", value: "95", number: 95, unit: "patients", year: 2025, geography: "India" },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-leishmaniasis-guideline-2026",
        name: "WHO guidelines on treatment of VL and PKDL in eastern Africa and South-East Asia (2026)",
        tldr: "The guideline that retired sodium stibogluconate as first-line treatment for kala-azar in eastern Africa and shortened PKDL treatment in both regions.",
        summary:
          "Published 28 July 2026, this is the first WHO guideline to recommend regimens free of sodium stibogluconate (SSG) for primary visceral leishmaniasis. For eastern Africa it recommends a 14-day course of oral miltefosine plus injectable paromomycin, replacing the 17-day SSG-plus-paromomycin combination — one fewer injection and less toxicity — with SSG retained only for patients who cannot take the new regimen. For post-kala-azar dermal leishmaniasis it recommends shorter, safer combinations in both regions: paromomycin plus miltefosine in eastern Africa, and liposomal amphotericin B alone or with a short miltefosine course in South-East Asia, replacing 30–60 days of SSG or a 12-week miltefosine course. It also covers relapse management in South-East Asia, updates miltefosine's safety profile with measures against ocular adverse events, and introduces weight-band allometric dosing. WHO estimates almost half of primary VL patients and all PKDL patients could benefit.",
        ...R,
        issuer: "WHO",
        issued: "28 July 2026",
        status: "Current",
        scope: "Treatment of visceral leishmaniasis and post-kala-azar dermal leishmaniasis in eastern Africa and South-East Asia (HIV-negative patients)",
        recommendation:
          "For eastern Africa primary VL, use oral miltefosine plus injectable paromomycin (14 days) rather than SSG plus paromomycin; for PKDL, use shorter combinations (paromomycin plus miltefosine in eastern Africa; liposomal amphotericin B ± short miltefosine in South-East Asia).",
        whatChanged:
          "First SSG-free recommendation for visceral leishmaniasis in eastern Africa; shorter PKDL regimens in both regions; miltefosine ocular-safety measures and allometric dosing.",
        links: [
          { label: "WHO — updates treatment guidelines on VL and PKDL (29 July 2026)", url: "https://www.who.int/news/item/29-07-2026-who-updates-treatment-guidelines-on-visceral-and-post-kala-azar-dermal-leishmaniasis" },
          { label: "WHO guidelines on leishmaniases (2026)", url: "https://www.who.int/publications/i/item/9789240123298" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["miltefosine", "paromomycin", "liposomal-amphotericin-b", "antimonials"],
        trials: ["mf-pm-east-africa-phase3"],
        institutions: ["who", "dndi"],
        terms: ["pkdl", "ntd"],
        stats: [
          { label: "Beneficiaries", value: "≈ half of primary VL and all PKDL patients", note: "WHO estimate" },
        ],
      },
    ],
  },
  /* ------------------------------- institutions --------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "university-of-gondar",
        name: "University of Gondar — Leishmaniasis Research and Treatment Centre",
        tldr: "The Ethiopian centre that runs much of the world's visceral leishmaniasis clinical research, from VL/HIV co-infection to the LXE408 trial.",
        summary:
          "The Leishmaniasis Research and Treatment Centre (LRTC) at the University of Gondar, in Ethiopia's Amhara region, is one of the most productive visceral leishmaniasis research sites in the world. It has led or hosted work on VL/HIV co-infection — including the liposomal amphotericin B plus miltefosine combination now recommended for people living with HIV — on diagnostic algorithms using urine antigen and blood PCR, and on new treatments, including the Ethiopian arm of the LXE408 Phase II study. Alongside the MSF-supported centre at Abdurafi and the Armauer Hansen Research Institute in Addis Ababa, it represents the shift of VL research to the countries that carry the burden — evidence generated in Gondar now shapes WHO guidance used across eastern Africa.",
        ...R,
        institutionType: "University research and treatment centre",
        country: "Ethiopia",
        city: "Gondar",
        focus: "Visceral leishmaniasis clinical trials, VL/HIV co-infection, diagnostics and treatment access.",
        links: [
          { label: "WHO — LXE408 Phase II enters trial in Ethiopia (April 2024)", url: "https://www.who.int/news/item/23-04-2024-promising-patient-friendly-oral-drug-against-visceral-leishmaniasis-enters-phase-ii-clinical-trial-in-ethiopia" },
          { label: "DNDi — visceral leishmaniasis portfolio", url: "https://dndi.org/diseases/visceral-leishmaniasis/projects-achievements" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["lxe408", "liposomal-amphotericin-b", "miltefosine"],
        trials: ["lxe408-vl-phase2", "mf-pm-east-africa-phase3"],
        institutions: ["dndi", "msf", "who"],
        countries: ["ethiopia"],
        terms: ["ntd"],
        stats: [
          { label: "Role", value: "Host site for the Ethiopian LXE408 Phase II trial" },
        ],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "ermias-diro",
        name: "Ermias Diro",
        tldr: "The Ethiopian physician who has led visceral leishmaniasis treatment research in Gondar, including the trials behind today's guidelines.",
        summary:
          "Ermias Diro is an infectious-diseases physician at the University of Gondar's Leishmaniasis Research and Treatment Centre who has become one of the most cited voices in visceral leishmaniasis clinical research. His work spans the questions that matter most in eastern Africa: how to treat VL in people living with HIV, how to identify patients using urine antigen and blood PCR, and how new regimens perform in the field. He has co-authored the trials and diagnostic studies that now underpin eastern African treatment guidance, including the miltefosine-paromomycin evidence and the diagnostic algorithms that make earlier, cooler diagnosis possible. He represents the generation of African principal investigators now shaping WHO recommendations for the region with the largest VL burden.",
        ...R,
        era: "Contemporary",
        role: "Infectious-diseases physician and researcher, University of Gondar, Ethiopia",
        knownFor: "Visceral leishmaniasis treatment and diagnostics in eastern Africa, including VL/HIV co-infection.",
        links: [
          { label: "Diro et al. — urine antigen and blood PCR diagnostic algorithm for VL (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42743918" },
          { label: "University of Gondar — Leishmaniasis Research and Treatment Centre", url: "https://dndi.org/diseases/visceral-leishmaniasis/projects-achievements" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["liposomal-amphotericin-b", "miltefosine"],
        institutions: ["university-of-gondar", "dndi"],
        countries: ["ethiopia"],
        terms: ["ntd", "zoonosis"],
      },
      {
        id: "eleni-ayele",
        name: "Eleni Ayele",
        tldr: "The Ethiopian co-principal investigator who brought the first Phase II trial of a new chemical entity for kala-azar to an endemic country.",
        summary:
          "Eleni Ayele is a physician and researcher at the Leishmaniasis Research and Treatment Centre, University of Gondar, and co-principal investigator of the Ethiopian Phase II trial of LXE408 — the first time a novel chemical entity for visceral leishmaniasis was tested in an endemic country rather than only in India. She has described the trial's significance plainly: current treatment options are toxic, need injections and cold chain, and force patients to travel far and stay hospitalised. Her framing of the goal — an oral treatment given at primary-healthcare level near patients' homes, enabling earlier treatment and reduced transmission — is the argument for trials in the places the disease actually is.",
        ...R,
        era: "Contemporary",
        role: "Physician and clinical researcher, University of Gondar, Ethiopia",
        knownFor: "Co-leading the LXE408 Phase II trial in Ethiopia; VL treatment access.",
        links: [
          { label: "WHO — LXE408 Phase II enters trial in Ethiopia (April 2024)", url: "https://www.who.int/news/item/23-04-2024-promising-patient-friendly-oral-drug-against-visceral-leishmaniasis-enters-phase-ii-clinical-trial-in-ethiopia" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["lxe408"],
        trials: ["lxe408-vl-phase2"],
        institutions: ["university-of-gondar", "dndi"],
        countries: ["ethiopia"],
        terms: ["ntd"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "pkdl-endgame-surveillance",
        name: "Treat PKDL as the elimination endgame",
        tldr: "Find and cure post-kala-azar dermal leishmaniasis, the skin reservoir that can restart kala-azar after transmission is declared interrupted.",
        summary:
          "Bangladesh was validated as having eliminated visceral leishmaniasis while post-kala-azar dermal leishmaniasis — a skin condition following treated VL that stays infectious to sandflies — remained under-detected. TDR surveys found a PKDL prevalence of 36 per 10,000 in Bangladesh and 2.23 per 10,000 in Nepal, most cases lacking knowledge of the disease and many facing stigma, with no routine active case detection. Since elimination is a threshold rather than zero, PKDL is where resurgence would come from. WHO's 2026 guideline now provides shorter PKDL regimens; the proposal is to pair them with active detection: integrated screening at dermatology and leprosy clinics for skin lesions that test negative for leprosy, community education, and linkage to the shortened treatments, so the reservoir is closed rather than assumed away.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Add PKDL screening to leprosy and dermatology clinics in Bangladesh, Nepal and Bihar; measure cases detected per 10,000 and proportion completing the new short regimens.",
        owner: "National kala-azar elimination programmes with WHO/TDR and dermatology networks",
        links: [
          { label: "TDR — PKDL prevalence and treatment-seeking in Nepal and Bangladesh", url: "https://tdr.who.int/our-work/research-for-implementation/neglected-tropical-diseases-research/visceral-leishmaniasis-research/elimination-of-visceral-leishmaniasis-in-bangladesh-the-power-of-using-evidence-for-policy-making" },
          { label: "WHO — guidelines on leishmaniases (2026)", url: "https://www.who.int/publications/i/item/9789240123298" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        drugs: ["miltefosine", "paromomycin", "liposomal-amphotericin-b"],
        diagnostics: ["rk39-rapid-test", "molecular-pcr"],
        institutions: ["who", "dndi"],
        countries: ["bangladesh", "nepal", "india"],
        bottlenecks: ["surveillance-data-gap", "stigma-and-disability", "diagnostics-gap"],
        terms: ["pkdl", "eot", "ntd"],
        stats: [
          { label: "PKDL prevalence", value: "36 per 10,000 (Bangladesh); 2.23 per 10,000 (Nepal)", note: "TDR surveys" },
          { label: "Stakes", value: "The reservoir that can restart eliminated transmission" },
        ],
      },
      {
        id: "east-africa-vl-elimination",
        name: "An East African kala-azar elimination initiative, modelled on South Asia",
        tldr: "Replicate the South Asian elimination playbook — early diagnosis, complete treatment, vector control, surveillance — in the region that now carries the burden.",
        summary:
          "South Asia cut visceral leishmaniasis by about 95% and produced the world's first validated elimination, using a coherent package: rK39 rapid diagnosis, complete case management, integrated vector management, surveillance and social mobilisation, backed by a regional initiative and a strategic framework. Eliminating VL in one region simply moved the global burden to eastern Africa, where the same tools work less well — the rapid test is less sensitive, conflict displaces the at-risk population, and health facilities are damaged. The experience and the disease's biology (humans are the main reservoir for L. donovani in South Asia) are transferable; the delivery is not. The proposal is a formal East African initiative across Ethiopia, Kenya, South Sudan, Sudan and Uganda, adapting the South Asian framework to conflict-affected and nomadic populations, with the newly recommended shorter regimens and the LXE408 pipeline timed to arrive with it.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Agree a regional framework with shared elimination targets and surveillance across the five countries; measure case detection, treatment completion and incidence against the South Asian trajectory.",
        owner: "WHO AFRO and EMRO with IGAD, national programmes, DNDi and MSF",
        links: [
          { label: "Visceral leishmaniasis elimination in South Asia — lessons for East Africa (BMJ Glob Health 2026)", url: "https://gh.bmj.com/content/11/3/e023521" },
          { label: "WHO — updates treatment guidelines on VL and PKDL (July 2026)", url: "https://www.who.int/news/item/29-07-2026-who-updates-treatment-guidelines-on-visceral-and-post-kala-azar-dermal-leishmaniasis" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        diagnostics: ["rk39-rapid-test", "direct-agglutination-test"],
        drugs: ["miltefosine", "paromomycin", "liposomal-amphotericin-b"],
        trials: ["mf-pm-east-africa-phase3"],
        institutions: ["who", "dndi", "msf"],
        countries: ["ethiopia", "kenya", "south-sudan", "sudan", "uganda"],
        bottlenecks: ["surveillance-data-gap", "funding-gap", "diagnostics-gap"],
        terms: ["eot", "ntd", "vector-borne"],
        stats: [
          { label: "South Asian result", value: "≈95% case reduction; Bangladesh validated 2023" },
          { label: "Where burden moved", value: "Eastern Africa now carries the largest share" },
        ],
      },
      {
        id: "field-species-identification",
        name: "Field-ready species identification for cutaneous leishmaniasis",
        tldr: "A rapid test that names the Leishmania species in a skin lesion, so a rural clinic can pick the right treatment instead of guessing.",
        summary:
          "Cutaneous leishmaniasis is the most common form — roughly a million cases a year — and treatment is inconsistent because it depends on the species: some lesions heal alone, some need local therapy, some need systemic treatment, and species differ in drug susceptibility. In a field clinic there is no simple way to tell them apart, so decisions are made blind. A point-of-care molecular or antigen test that identifies the species (or at least the complex) from a lesion sample would let programmes treat the cases that need it, avoid systemic toxicity in those that do not, and generate the species-level surveillance that is currently missing from nearly every endemic country. The prototype technology exists in reference laboratories; the work is a field-usable format, a cost low enough for national programmes, and validation across the species that matter in Africa, the Middle East and Latin America.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Develop and validate a point-of-care species-identification assay against reference PCR in three endemic settings; measure treatment appropriateness and cost per correctly managed case.",
        owner: "Diagnostic developers with WHO, FIND and national programme laboratories",
        links: [
          { label: "WHO — leishmaniasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
          { label: "DNDi — cutaneous leishmaniasis portfolio", url: "https://dndi.org/diseases/cutaneous-leishmaniasis/" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        diagnostics: ["molecular-pcr"],
        technologies: ["crispr-diagnostics", "molecular-lamp", "ai-microscopy"],
        institutions: ["who", "dndi"],
        bottlenecks: ["diagnostics-gap", "access-and-pricing"],
        terms: ["ntd", "sensitivity-specificity", "vector-borne"],
        stats: [
          { label: "Burden", value: "≈600,000–1 million cutaneous cases a year" },
          { label: "Gap", value: "No field test tells the species apart" },
        ],
      },
    ],
  },
];
