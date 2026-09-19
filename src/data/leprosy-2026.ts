import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Leprosy 2026 fact-check additions: the vaccine, diagnostic, guideline,
 * institution, researchers and ideas that the 2026 source cross-check (WHO
 * Global leprosy update 2024 in WER 100(37), WHO elimination framework 2023,
 * G-FINDER 2024, ClinicalTrials.gov, Open Targets, ChEMBL, PubMed) showed
 * were missing from the leprosy graph. Ordinary records of their kind, kept
 * in one file so the review is visible as a set; wired into `index.ts`
 * alongside ADDITIONS.
 *
 * Honest negatives from the cross-check, recorded here so they are not
 * re-searched: Open Targets carries leprosy (MONDO_0005124) with 1,238
 * associated targets, but the top hits are host-susceptibility genes
 * (LACC1 0.51, TNFSF15 0.45, RIPK2 0.44, NOD2) — immunogenetics, not drug
 * targets. ChEMBL holds no M. leprae protein target entry at all (only the
 * organism record, CHEMBL3301409) because the bacillus cannot be cultured
 * in vitro and its drug targets are studied as M. tuberculosis homologues —
 * the corpus's RNA polymerase and DprE1 targets are that borrowing, stated
 * on their pages. G-FINDER 2024 reports record leprosy R&D of US$19m in
 * 2023, over half from industry and focused on late-stage bedaquiline
 * testing.
 */
export const LEPROSY_2026: { kind: Kind; records: unknown[] }[] = [
  /* ----------------------------- technologies ----------------------------- */
  {
    kind: "technologies",
    records: [
      {
        id: "lepvax",
        name: "LepVax — a leprosy-specific vaccine",
        tldr: "The first vaccine developed specifically for leprosy, and the only leprosy vaccine in clinical development — in Phase Ib trials led from Brazil.",
        summary:
          "LepVax, developed by American Leprosy Missions, is a defined recombinant protein vaccine designed around antigens of Mycobacterium leprae — the first candidate built for leprosy itself rather than borrowed from tuberculosis, and the only leprosy vaccine in clinical development. A Phase Ib trial is being run by Fiocruz in Brazil, evaluating the vaccine for both prevention among contacts and adjunctive treatment. For a disease whose control still depends on finding cases late and giving chemoprophylaxis to their contacts, a vaccine would change the arithmetic — and its existence answers the standing claim that leprosy is simply too slow and too poorly understood to vaccinate against. The field's own strategy documents treat an effective vaccine as the missing tool for interrupting transmission.",
        ...R,
        category: "Vaccines",
        maturity: "Phase Ib",
        whatItDoes:
          "Induces immunity against M. leprae in contacts and, potentially, as adjunctive treatment in patients.",
        limitation:
          "Earliest clinical stage; single candidate; must prove efficacy in a disease with a very long incubation period and no simple biomarker of protection.",
        links: [
          { label: "G-FINDER 2024 — pipeline update: LepVax Phase Ib", url: "https://cdn.impactglobalhealth.org/media/G-FINDER%202024_Full%20report.pdf" },
          { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        institutions: ["fiocruz"],
        countries: ["brazil"],
        bottlenecks: ["vaccine-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Stage", value: "Phase Ib", note: "the only leprosy vaccine in clinical development" },
          { label: "Trial lead", value: "Fiocruz, Brazil" },
        ],
      },
    ],
  },
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "leprosy-skin-test-antigens",
        name: "Leprosy skin test antigens (MLSA-LAM and MLCwA)",
        tldr: "Candidate skin-test antigens designed to reveal leprosy infection before disease appears — a missing piece of leprosy diagnosis.",
        summary:
          "Diagnosing leprosy still depends on a trained examiner finding skin patches with sensory loss and thickened nerves; there is no simple test that shows who is infected but not yet ill, which is exactly what control needs to interrupt transmission. New leprosy skin-test antigens — MLSA-LAM and MLCwA — were evaluated in a Phase 1 study sponsored by NIAID, the first step toward a test of infection rather than disease. They matter because a positive skin test given to contacts could target prophylaxis and surveillance the way the tuberculin test targeted preventive treatment for tuberculosis; leprosy has never had that tool, and the poor performance of antibody tests in paucibacillary disease is why it is needed.",
        ...R,
        method: "Intradermal skin-test antigens (late-type hypersensitivity), in Phase 1 evaluation",
        sampleType: "Intradermal test read by inspection",
        turnaround: "48–72 hours (typical skin-test timing)",
        performance:
          "Research-stage; evaluated for safety and immunogenicity, not yet for diagnostic accuracy in the field.",
        availability: "Research-use-only; no marketed product",
        stage: "Phase 1 (NIAID, NCT01920750)",
        links: [
          { label: "NIAID — new leprosy skin test antigens, Phase 1 (NCT01920750)", url: "https://clinicaltrials.gov/study/NCT01920750" },
          { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["ntd", "sensitivity-specificity"],
        stats: [
          { label: "Stage", value: "Phase 1 safety/immunogenicity (n=10)" },
          { label: "Purpose", value: "Detect infection, not just disease" },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-leprosy-elimination-framework",
        name: "WHO technical guidance on interrupting transmission and eliminating leprosy (2023)",
        tldr: "The framework that redefined leprosy elimination as a subnational, phased achievement with verification — not a global case-count threshold.",
        summary:
          "Published in 2023, this guidance accompanied the shift in leprosy's paradigm from 'elimination as a public health problem' (a 1-per-10,000 threshold reached globally in 2000) to elimination of leprosy disease, defined and verified country by country. It sets out a three-phase Leprosy Elimination Framework: reaching interruption of transmission, then elimination, then post-elimination surveillance. Two tools operationalise it — the Leprosy Elimination Monitoring Tool (LEMT), a traffic-light scheme tracking progress nationally and subnationally, and the Leprosy Programme and Transmission Assessment (LPTA) tool, which adds programmatic criteria (political commitment, implementation, surveillance) to the epidemiological achievement. WHO uses both to verify a country's elimination, and Jordan became the first country verified under it in August 2024 — the framework's proof of concept.",
        ...R,
        issuer: "WHO",
        issued: "2023",
        status: "Current",
        scope: "Interruption of transmission and elimination of leprosy disease, with verification and post-elimination surveillance",
        recommendation:
          "Define and verify elimination subnationally and in phases using the Leprosy Elimination Framework, monitored by LEMT and assessed by LPTA; maintain post-elimination surveillance after verification.",
        whatChanged:
          "Replaced the global 1-per-10,000 threshold with a country-by-country, phased and verified definition of elimination; created the LEMT and LPTA tools.",
        links: [
          { label: "WHO — Global leprosy update, 2024 (WER 100(37):365–384)", url: "https://www.who.int/publications/i/item/who-wer10037-365-384" },
          { label: "WHO — Towards zero leprosy: global leprosy strategy 2021–2030", url: "https://www.who.int/publications/i/item/9789240020221" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        institutions: ["who"],
        terms: ["eot", "ntd"],
        stats: [
          { label: "First verified country", value: "Jordan, August 2024" },
          { label: "Phases", value: "3 — interruption, elimination, post-elimination surveillance" },
        ],
      },
    ],
  },
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "ahri",
        name: "Armauer Hansen Research Institute (AHRI)",
        tldr: "The Ethiopian institute named for the discoverer of the leprosy bacillus, and a centre of African-led leprosy immunology and field research.",
        summary:
          "The Armauer Hansen Research Institute in Addis Ababa — named for Gerhard Armauer Hansen, who identified Mycobacterium leprae in 1873 — is Ethiopia's principal biomedical research institute and one of Africa's most important leprosy research centres. Its scientists work on the immunology of leprosy and the leprosy reactions that cause nerve damage, on diagnostics, and on active case detection and contact tracing in the field, often with the All Africa Leprosy, Tuberculosis and Rehabilitation Training Centre (ALERT) hospital. AHRI represents the shift the leprosy field needs: research on the disease conducted where the disease is, by researchers who live there, rather than only in high-income-country laboratories.",
        ...R,
        institutionType: "National biomedical research institute",
        country: "Ethiopia",
        city: "Addis Ababa",
        focus: "Leprosy and tuberculosis immunology, diagnostics, active case detection and contact tracing.",
        links: [
          { label: "Lema, Bobosha et al. — active case detection and contact tracing, Kokosa, Ethiopia (PLoS One 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42057581" },
        ],
        diseases: ["leprosy", "tuberculosis"],
        pathogens: ["mycobacterium-leprae"],
        institutions: ["who"],
        countries: ["ethiopia"],
        terms: ["ntd", "one-health"],
      },
    ],
  },
  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "kidist-bobosha",
        name: "Kidist Bobosha",
        tldr: "The Ethiopian immunologist at AHRI who works on leprosy diagnostics, reactions and finding cases in the field.",
        summary:
          "Kidist Bobosha is a senior scientist at the Armauer Hansen Research Institute in Addis Ababa and one of Africa's leading leprosy researchers, with dozens of publications spanning the immunology of leprosy and its reactions, the search for better diagnostics, and active case detection and contact tracing in Ethiopian communities. Her work on reaching people at risk — finding cases and tracing contacts in rural districts — addresses the exact gap the WHO update flags: that active case finding and contact screening are reported by too few countries, and that late diagnosis is what leaves people with permanent disability. She represents the African-led research that leprosy control depends on and that the field has historically under-funded.",
        ...R,
        era: "Contemporary",
        role: "Senior scientist, Armauer Hansen Research Institute, Addis Ababa, Ethiopia",
        knownFor: "Leprosy immunology, diagnostics and active case detection in Ethiopia.",
        links: [
          { label: "Lema, Bobosha, Kasang et al. — active case detection and contact tracing, Kokosa, Ethiopia (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42057581" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        institutions: ["ahri", "who"],
        countries: ["ethiopia"],
        technologies: ["community-health-workers"],
        terms: ["ntd", "sdr-pep"],
      },
      {
        id: "nimer-ortuno-gutierrez",
        name: "Nimer Ortuño-Gutiérrez",
        tldr: "The leprosy epidemiologist who has documented Mozambique's burden and driven post-exposure prophylaxis into national policy.",
        summary:
          "Nimer Ortuño-Gutiérrez is a leprosy epidemiologist whose work has centred on Mozambique, one of the highest-burden countries in Africa, and on translating the evidence for single-dose rifampicin post-exposure prophylaxis into national programme practice. His research has characterised the burden and transmission patterns in Mozambique and examined how contact screening and prophylaxis perform in real programme conditions — the operational questions that decide whether a proven intervention actually reaches contacts. Mozambique is among the countries where leprosy programmes depend on external support, so its evidence base and its ability to sustain case-finding and prophylaxis are a test of the global strategy's equity claims.",
        ...R,
        era: "Contemporary",
        role: "Leprosy epidemiologist; research and programme support, Mozambique",
        knownFor: "Leprosy epidemiology in Mozambique and implementation of post-exposure prophylaxis.",
        links: [
          { label: "Ortuño-Gutiérrez et al. — leprosy research in Mozambique (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ortuno-Gutierrez+N+leprosy" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        technologies: ["community-health-workers", "mhealth-surveillance"],
        terms: ["ntd", "sdr-pep"],
      },
      {
        id: "roberta-pinheiro",
        name: "Roberta Olmo Pinheiro",
        tldr: "The Brazilian immunologist at Fiocruz leading leprosy research and the clinical development of the LepVax vaccine.",
        summary:
          "Roberta Olmo Pinheiro leads leprosy research at Fiocruz in Brazil, the country with the second-highest case burden and the setting for several of the field's most important studies — including the LepVax vaccine's Phase Ib trial and the bedaquiline work funded through industry R&D. Her laboratory works on the immunology of the leprosy spectrum and of leprosy reactions, the immune events that cause nerve damage even after treatment has begun. Brazil's combination of high burden and strong research capacity makes it the field's most productive South American centre, and Pinheiro is among its most cited leprosy scientists.",
        ...R,
        era: "Contemporary",
        role: "Immunologist; leprosy research lead, Fiocruz, Brazil",
        knownFor: "Leprosy immunology and reactions; LepVax clinical development.",
        links: [
          { label: "G-FINDER 2024 — LepVax Phase Ib led by Fiocruz", url: "https://cdn.impactglobalhealth.org/media/G-FINDER%202024_Full%20report.pdf" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        technologies: ["lepvax"],
        institutions: ["fiocruz"],
        countries: ["brazil"],
        terms: ["ntd"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "prophylaxis-for-every-contact",
        name: "Make post-exposure prophylaxis reach every contact, everywhere",
        tldr: "Single-dose rifampicin is proven and recommended — but only around 37 of 188 reporting countries actually record giving it to contacts.",
        summary:
          "Single-dose rifampicin cuts a contact's risk of developing leprosy by roughly 57–60%, the PEOPLE trial showed that double-dose prophylaxis reduces incidence at population level, and WHO recommends contact screening with prophylaxis. Yet the global update found that only about 90 of 188 reporting countries supplied data on contact screening, and only 37 provided data on prophylaxis provision — a gap between an evidence-based, cheap, donated intervention and the people it should reach. The obstacles are logistics, rifampicin availability, programme inertia and residual academic caution, not science. The proposal is to make contact screening and prophylaxis a funded, monitored core indicator — the way the South Asian kala-azar initiative made case detection an operational target — with the number of contacts screened and given prophylaxis reported by every programme, and with neighbourhood-level (not only household) prophylaxis scaled where incidence warrants it.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Adopt contacts-screened and prophylaxis-given as reported core indicators in all 23 priority countries; measure the share of index cases with documented contact screening and the number of contacts receiving prophylaxis over three years.",
        owner: "WHO Global Leprosy Programme with national programmes, ILEP and Novartis/Nippon Foundation donors",
        links: [
          { label: "WHO — Global leprosy update, 2024 (WER 100(37):365–384)", url: "https://www.who.int/publications/i/item/who-wer10037-365-384" },
          { label: "ILEP — commentary on the 2024 update", url: "https://ilepfederation.org/global-leprosy-hansen-disease-update-2024-beyond-zero-cases-what-elimination-of-leprosy-really-means/" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        drugs: ["rifampicin"],
        trials: ["people-leprosy-pep"],
        technologies: ["community-health-workers", "mhealth-surveillance"],
        institutions: ["who"],
        terms: ["sdr-pep", "ntd", "eot"],
        stats: [
          { label: "Efficacy", value: "57–60% risk reduction (single dose)" },
          { label: "Uptake gap", value: "Only ~37 of 188 reporting countries gave prophylaxis data" },
        ],
      },
      {
        id: "verify-elimination-subnationally",
        name: "Verify elimination country by country, the way Jordan did",
        tldr: "Turn leprosy elimination from a case-count milestone into a verified, subnational, phased achievement — and fund post-elimination surveillance.",
        summary:
          "Leprosy has been 'eliminated as a public health problem' since 2000, yet 172,717 cases were detected in 2024 and transmission continues. The problem is that the old threshold was a national average that concealed high-burden districts within low-burden countries. WHO's 2023 framework fixed the definition — phased elimination verified with the LEMT and LPTA tools — and Jordan became the first country verified under it in 2024, moving into post-elimination surveillance. The proposal is to make this the organising goal: every country and subnational unit mapped on a progress ladder, verification pursued and reported, and post-elimination surveillance funded as an explicit commitment rather than allowed to lapse when case numbers fall. It converts a headline number into a standing accountability structure, and it is the only framing that closes the gap between 'eliminated' and 'still transmitting'.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Require all priority countries to report LEMT/LPTA progress subnationally; aim for a defined number of verified countries by 2030 with funded post-elimination surveillance plans.",
        owner: "WHO with ministries of health and ILEP member organisations",
        links: [
          { label: "WHO — Global leprosy update, 2024: Beyond zero cases (WER 100(37))", url: "https://www.who.int/publications/i/item/who-wer10037-365-384" },
          { label: "WHO — technical guidance on interruption of transmission and elimination of leprosy", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        institutions: ["who"],
        bottlenecks: ["surveillance-data-gap", "stigma-and-disability", "funding-gap"],
        terms: ["eot", "ntd"],
        stats: [
          { label: "Precedent", value: "Jordan, first verified country (August 2024)" },
          { label: "Why it matters", value: "National averages hid high-burden districts" },
        ],
      },
      {
        id: "leprosy-nerve-function-monitoring",
        name: "Measure nerve function at every diagnosis and treatment completion",
        tldr: "Grade-2 disability is leprosy's real outcome measure — but nerve assessment was recorded for only about 16% of cases at treatment completion.",
        summary:
          "Leprosy's damage is nerve damage, and grade-2 disability at diagnosis (9,124 cases in 2024, 5.3%) is the field's most honest indicator that cases are found late. Yet the global update found that nerve function assessment at treatment completion was reported for only about 16% of new cases, and treatment-completion data were available for only around half of reporting countries. Without standard measurement the field cannot tell whether early detection and reaction management are preventing disability — the outcome that matters most to patients. The proposal is to make standardised nerve function assessment at diagnosis and at treatment completion a universal reporting requirement, with leprosy reaction incidence (the 2024 report counted 14,689 type-1 reactions and 5,652 ENL from 75 countries) tracked alongside it, so disability prevention becomes measurable and can be improved.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Adopt standardised nerve-function assessment at diagnosis and treatment completion as a core indicator across priority countries; measure the share of cases with recorded assessment and the incidence of new disability during and after treatment.",
        owner: "WHO Global Leprosy Programme with national programmes and ALERT/AHRI clinical sites",
        links: [
          { label: "WHO — Global leprosy update, 2024 (WER 100(37):365–384)", url: "https://www.who.int/publications/i/item/who-wer10037-365-384" },
          { label: "ILEP — commentary on the 2024 update", url: "https://ilepfederation.org/global-leprosy-hansen-disease-update-2024-beyond-zero-cases-what-elimination-of-leprosy-really-means/" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        technologies: ["community-health-workers", "mhealth-surveillance"],
        institutions: ["who", "ahri"],
        bottlenecks: ["surveillance-data-gap", "stigma-and-disability", "diagnostics-gap"],
        terms: ["ntd", "eot"],
        stats: [
          { label: "Reporting gap", value: "Nerve assessment at treatment completion: ~16% of cases" },
          { label: "Reactions recorded (2024)", value: "14,689 type 1; 5,652 ENL" },
        ],
      },
    ],
  },
];
