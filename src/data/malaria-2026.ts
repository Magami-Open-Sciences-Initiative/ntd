import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Malaria 2026 fact-check additions: GanLum Phase 3, cipargamin, the MVIP
 * mortality evaluation, and the people/ideas review. Ordinary records of
 * their kind, kept in one file so the review is visible as a set; wired
 * into `index.ts` alongside LF_2026.
 */
export const MALARIA_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "ganaplacide",
        name: "Ganaplacide (KAF156, in GanLum)",
        tldr: "The first new-acting malaria drug to clear Phase 3 since 1999 — once-daily granules, 97.4% efficacy.",
        summary:
          "Ganaplacide is an imidazolopiperazine found in a 2.3-million-molecule Novartis screen, disrupting the parasite's internal protein secretory pathway (resistance markers in CARL and transporter genes, not kelch13). In GanLum — paired with once-daily lumefantrine as three days of granules — the KALUMA Phase 3 (1,688 patients, 34 sites, 12 African countries) met non-inferiority against Coartem at 97.4% PCR-corrected efficacy, with transmission-blocking activity. Novartis seeks approvals; if granted, this is the first novel malaria treatment in a quarter-century and the designated answer to artemisinin partial resistance.",
        ...R,
        drugClass: "Imidazolopiperazine",
        mechanism:
          "Disrupts parasite intracellular protein secretion/transport (exact target undetermined; CARL, UDP-galactose and Acetyl-CoA transporter mutations mark reduced susceptibility).",
        indication: "Acute uncomplicated P. falciparum malaria (in GanLum; regulatory review).",
        administration: "Oral granules, once daily for 3 days (with lumefantrine).",
        status: "Phase 3 met primary endpoint (Nov 2025); approvals sought",
        links: [
          { label: "Novartis — KALUMA Phase 3 meets endpoint (Nov 2025)", url: "https://www.novartis.com/news/media-releases/novartis-phase-iii-trial-next-generation-malaria-treatment-klu156-ganlum-meets-primary-endpoint-potential-combat-antimalarial-resistance" },
          { label: "MMV — GanLum pipeline", url: "https://www.mmv.org/mmv-pipeline-antimalarial-drugs/ganaplacide-lumefantrine" },
        ],
        diseases: ["malaria"],
        pathogens: ["plasmodium"],
        trials: ["kaluma-ganlum-ph3"],
        institutions: ["medicines-for-malaria-venture"],
        terms: ["artemisinin-resistance"],
        stats: [
          { label: "Efficacy", value: "97.4%", note: "PCR-corrected, vs 94.0% Coartem" },
          { label: "Trial", value: "1,688 patients, 12 countries", note: "KALUMA NCT05842954" },
        ],
      },
      {
        id: "cipargamin",
        name: "Cipargamin (KAE609)",
        tldr: "A very-fast PfATP4 killer in Phase 2 — alone for severe malaria, paired with GanLum for the field.",
        summary:
          "Cipargamin (ex-KAE609) inhibits PfATP4, the parasite's essential sodium efflux pump — a mechanism unrelated to artemisinins, with very rapid parasite killing and gametocyte activity suggesting transmission blocking. Novartis/MMV have completed oral Phase 2 and IV severe-malaria studies and now test it paired with GanLum (NCT05750628) for a simplified regimen. Its challenge is the classic one: finding the partner that prevents resistance to a single-dose-capable killer.",
        ...R,
        drugClass: "Spiroindolone (PfATP4 inhibitor)",
        mechanism: "Inhibits PfATP4 sodium efflux, collapsing parasite sodium homeostasis.",
        indication: "Uncomplicated (with GanLum) and severe malaria IV (investigational).",
        administration: "Oral (combination) / intravenous (severe).",
        status: "Phase 2 (oral + IV severe); GanLum combination Phase 2",
        links: [
          { label: "MMV — cipargamin pipeline", url: "https://www.mmv.org/mmv-pipeline-antimalarial-drugs/cipargamin" },
        ],
        diseases: ["malaria"],
        pathogens: ["plasmodium"],
        targets: ["pfatp4"],
        trials: ["cipargamin-ganlum-ph2"],
        institutions: ["medicines-for-malaria-venture"],
        terms: ["artemisinin-resistance"],
        stats: [
          { label: "Killing speed", value: "Very fast", note: "plus gametocyte activity" },
        ],
      },
    ],
  },

  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "kaluma-ganlum-ph3",
        name: "KALUMA: ganaplacide-lumefantrine Phase 3",
        tldr: "1,688 patients across 12 African countries: 97.4% efficacy, non-inferior to Coartem.",
        summary:
          "KALUMA (NCT05842954) randomised 1,688 adults and children with acute uncomplicated falciparum malaria at 34 sites in 12 sub-Saharan countries to once-daily GanLum granules for three days versus twice-daily Coartem. GanLum met non-inferiority at 97.4% PCR-corrected efficacy (99.2% per-protocol) with transmission-blocking signals. Presented at ASTMH 2025; regulatory filings to follow.",
        ...R,
        phase: "Phase 3",
        registry: "ClinicalTrials.gov NCT05842954",
        registryUrl: "https://clinicaltrials.gov/study/NCT05842954",
        status: "Met primary endpoint (Nov 2025)",
        sponsor: "Novartis with MMV and WANECAM-2; EDCTP funding",
        intervention: "Ganaplacide-lumefantrine once daily × 3 days vs artemether-lumefantrine",
        result: "Non-inferior at 97.4% PCR-corrected efficacy.",
        links: [
          { label: "Novartis — KALUMA meets endpoint (Nov 2025)", url: "https://www.novartis.com/news/media-releases/novartis-phase-iii-trial-next-generation-malaria-treatment-klu156-ganlum-meets-primary-endpoint-potential-combat-antimalarial-resistance" },
        ],
        diseases: ["malaria"],
        drugs: ["ganaplacide"],
        institutions: ["medicines-for-malaria-venture"],
        stats: [
          { label: "Enrolment", value: "1,688", number: 1688, unit: "participants", geography: "12 African countries" },
          { label: "Efficacy", value: "97.4% vs 94.0%", note: "PCR-corrected" },
        ],
      },
      {
        id: "mvip-mortality-evaluation",
        name: "MVIP mortality evaluation (Lancet 2026)",
        tldr: "RTS,S cut all-cause child mortality 13% — one in eight deaths averted in Ghana, Kenya, Malawi.",
        summary:
          "The observational evaluation of the cluster-randomised Malaria Vaccine Implementation Programme (Ghana, Kenya, Malawi, 2019–2023; 1.29M first doses) found RTS,S introduction associated with 13% lower all-cause young-child mortality and 22% fewer severe-malaria admissions, with no residual safety signals — despite only 71% three-dose and 40% four-dose uptake. It converts the vaccine debate from efficacy to delivery: impact holds at real-world coverage, so the 25 rollout countries should expect equal or better.",
        ...R,
        phase: "Observational (cluster-randomised implementation)",
        status: "Reported (Lancet, May 2026)",
        intervention: "RTS,S introduction through routine immunisation",
        result: "13% all-cause mortality reduction; 22% fewer severe admissions.",
        links: [
          { label: "MVIP mortality evaluation (Lancet 2026)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00248-5/fulltext" },
          { label: "WHO — vaccine saves lives (May 2026)", url: "https://www.who.int/news/item/08-05-2026-new-evidence-confirms-malaria-vaccine-saves-child-lives-and-will-have-high-impact-in-wider-rollout" },
        ],
        diseases: ["malaria"],
        technologies: ["malaria-vaccines"],
        institutions: ["who"],
        stats: [
          { label: "Mortality cut", value: "−13%", note: "≈1 in 8 deaths averted; 1.29M first doses" },
          { label: "Severe admissions", value: "−22%", note: "no safety signals" },
        ],
      },
      {
        id: "cipargamin-ganlum-ph2",
        name: "Cipargamin plus GanLum Phase 2",
        tldr: "Pairing the fastest killer with the newest drug for a simplified regimen.",
        summary:
          "Novartis/MMV test cipargamin (PfATP4) with GanLum (NCT05750628) to see whether the combination permits simplified dosing while protecting both mechanisms from resistance. Phase 2 oral and IV-severe studies of cipargamin are complete; this pairing decides its field future.",
        ...R,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT05750628",
        registryUrl: "https://clinicaltrials.gov/study/NCT05750628",
        status: "Active",
        sponsor: "Novartis with MMV",
        intervention: "Cipargamin plus ganaplacide-lumefantrine",
        result: "Ongoing; go/no-go to Phase 3.",
        links: [
          { label: "MMV — GanLum plus cipargamin pipeline", url: "https://www.mmv.org/mmv-pipeline-antimalarial-drugs/ganaplacide-lumefantrinecipargamin" },
        ],
        diseases: ["malaria"],
        drugs: ["cipargamin", "ganaplacide"],
        targets: ["pfatp4"],
        institutions: ["medicines-for-malaria-venture"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "victor-mwapasa",
        name: "Victor Mwapasa",
        tldr: "First author of the Lancet study proving malaria vaccines cut child deaths.",
        summary:
          "Victor Mwapasa (Kamuzu University of Health Sciences, Malawi) led the MVIP mortality evaluation showing RTS,S averts one in eight young-child deaths in Ghana, Kenya and Malawi. Malawian-led evidence on a Malawian-delivered programme — the authorship the rollout era requires.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kamuzu University of Health Sciences, Malawi",
        knownFor: "MVIP mortality evaluation (Lancet 2026).",
        links: [
          { label: "MVIP mortality evaluation (Lancet 2026)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00248-5/fulltext" },
        ],
        diseases: ["malaria"],
        countries: ["malawi"],
        technologies: ["malaria-vaccines"],
        terms: ["ntd"],
      },
      {
        id: "halidou-tinto",
        name: "Halidou Tinto",
        tldr: "The Burkinabè trialist writing the vaccine-advance story from Nanoro.",
        summary:
          "Halidou Tinto (IRSS Nanoro, Burkina Faso) leads malaria vaccine and drug trials at one of Africa's premier field stations — from RTS,S pilots to the BMJ advances review. When a malaria tool needs African efficacy data, Nanoro is where it is generated.",
        ...R,
        era: "Contemporary",
        role: "Researcher, IRSS Nanoro, Burkina Faso",
        knownFor: "Malaria vaccine and drug trials.",
        links: [
          { label: "Tinto malaria publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Tinto+H+malaria+vaccine+Burkina" },
        ],
        diseases: ["malaria"],
        technologies: ["malaria-vaccines"],
        terms: ["ntd"],
      },
      {
        id: "deus-ishengoma",
        name: "Deus Ishengoma",
        tldr: "The Ifakara genomicist tracking resistance across East Africa.",
        summary:
          "Deus Ishengoma (Ifakara Health Institute, Tanzania) leads Pfs230 diversity and drug-resistance genomics across four East African countries — the molecular surveillance that tells programmes whether their drugs still work. Ifakara's cohorts are the region's early-warning system.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Ifakara Health Institute, Tanzania",
        knownFor: "Antimalarial-resistance genomics in East Africa.",
        links: [
          { label: "Ishengoma malaria publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ishengoma+DS+malaria+Tanzania" },
        ],
        diseases: ["malaria"],
        institutions: ["ifakara"],
        countries: ["tanzania"],
        terms: ["artemisinin-resistance", "ntd"],
      },
      {
        id: "yaw-afrane",
        name: "Yaw Asare Afrane",
        tldr: "The Ghanaian entomologist measuring insecticide failure in real villages.",
        summary:
          "Yaw Afrane (University of Ghana) documents high Anopheles insecticide resistance in Ghanaian communities and links biting behaviour to transmission risk — field entomology that decides whether nets still protect. Resistance measured in huts, not just bottles.",
        ...R,
        era: "Contemporary",
        role: "Entomologist, University of Ghana",
        knownFor: "Insecticide-resistance field surveillance.",
        links: [
          { label: "Afrane Anopheles publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Afrane+YA+Anopheles+Ghana+resistance" },
        ],
        diseases: ["malaria"],
        vectors: ["anopheles-mosquito"],
        terms: ["vector-borne", "ntd"],
      },
      {
        id: "alfred-amambua-ngwa",
        name: "Alfred Amambua-Ngwa",
        tldr: "Standardising how Africa measures whether its malaria drugs work.",
        summary:
          "Alfred Amambua-Ngwa (MRC Unit The Gambia) works on ex-vivo drug-susceptibility assay variance — the metrology behind every resistance claim — plus population genomics. When IC50s disagree between labs, his standardisation decides which warning is real.",
        ...R,
        era: "Contemporary",
        role: "Researcher, MRC Unit The Gambia",
        knownFor: "Antimalarial susceptibility assay standardisation; genomics.",
        links: [
          { label: "Amambua-Ngwa malaria publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Amambua-Ngwa+antimalarial+Gambia" },
        ],
        diseases: ["malaria"],
        terms: ["artemisinin-resistance", "ntd"],
      },
      {
        id: "charles-wondji",
        name: "Charles Wondji",
        tldr: "The pyrethroid-resistance biologist tracing Africa's insecticide crisis to its genes.",
        summary:
          "Charles Wondji (University of Florida; founder of CRID Cameroon) leads the genetics of pyrethroid-resistance escalation in African Anopheles — signature-of-selection studies showing how fast resistance evolves under net pressure. His work is the evidence base for rotating off pyrethroids to dual-AI nets.",
        ...R,
        era: "Contemporary",
        role: "Professor, University of Florida; CRID Cameroon founder",
        knownFor: "Pyrethroid-resistance genomics.",
        links: [
          { label: "Wondji pyrethroid publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Wondji+pyrethroid+Cameroon+resistance" },
        ],
        diseases: ["malaria"],
        vectors: ["anopheles-mosquito"],
        technologies: ["insecticide-treated-nets"],
        terms: ["vector-borne", "ntd"],
      },
      {
        id: "ghyslain-mombo-ngoma",
        name: "Ghyslain Mombo-Ngoma",
        tldr: "Testing single-dose cures in Gabon — including for the drugs mothers avoid.",
        summary:
          "Ghyslain Mombo-Ngoma (CERMEL, Gabon) trials single-dose antimalarial cures such as sulfadoxine-pyrimethamine — the simplicity agenda for the hardest-to-reach patients, including pregnancy contexts where options narrow. Central African trial leadership for regimens the region will actually use.",
        ...R,
        era: "Contemporary",
        role: "Clinical researcher, CERMEL, Gabon",
        knownFor: "Single-dose antimalarial cure trials.",
        links: [
          { label: "Mombo-Ngoma antimalarial publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mombo-Ngoma+antimalarial+Gabon" },
        ],
        diseases: ["malaria"],
        terms: ["ntd"],
      },
      {
        id: "martin-fitchet",
        name: "Martin Fitchet",
        tldr: "The MMV chief calling drug resistance a ticking clock — and funding the answer.",
        summary:
          "Martin Fitchet (CEO, Medicines for Malaria Venture) leads the PDP behind GanLum, cipargamin, Coartem Baby and the first-trimester Phase 3 — the entire post-artemisinin pipeline. His 'ticking clock' framing at KALUMA set the deployment urgency the field now works to.",
        ...R,
        era: "Contemporary",
        role: "CEO, Medicines for Malaria Venture",
        knownFor: "GanLum Phase 3; post-artemisinin pipeline.",
        links: [
          { label: "MMV 2025 achievements", url: "https://www.mmv.org/our-work/mmvs-2025-achievements" },
        ],
        diseases: ["malaria"],
        institutions: ["medicines-for-malaria-venture"],
        drugs: ["ganaplacide", "cipargamin"],
        trials: ["kaluma-ganlum-ph3"],
        terms: ["pdp", "artemisinin-resistance"],
      },
      {
        id: "sujata-vaidyanathan",
        name: "Sujata Vaidyanathan",
        tldr: "Novartis Global Health lead turning a 2.3-million-molecule screen into GanLum.",
        summary:
          "Sujata Vaidyanathan (Head, Novartis Global Health Development Unit) drove GanLum from high-throughput hit to Phase 3 success across 12 African countries — industry global-health R&D that stayed the course through resistance warnings. The 1.1 billion Coartem courses at no profit are the access precedent her filings must match.",
        ...R,
        era: "Contemporary",
        role: "Head, Global Health Development Unit, Novartis",
        knownFor: "GanLum Phase 3 development.",
        links: [
          { label: "Novartis — KALUMA meets endpoint (Nov 2025)", url: "https://www.novartis.com/news/media-releases/novartis-phase-iii-trial-next-generation-malaria-treatment-klu156-ganlum-meets-primary-endpoint-potential-combat-antimalarial-resistance" },
        ],
        diseases: ["malaria"],
        drugs: ["ganaplacide", "cipargamin"],
        trials: ["kaluma-ganlum-ph3"],
        terms: ["pdp", "artemisinin-resistance"],
      },
      {
        id: "arnaud-le-menach",
        name: "Arnaud Le Menach",
        tldr: "Lead author of the World Malaria Report 2025 — the person who counted the crisis.",
        summary:
          "Arnaud Le Menach (Head, Strategic Information for Impact, WHO Global Malaria Programme) led the World Malaria Report 2025 with its resistance chapter: 282M cases, $3.9B funding at 42% of target, confirmed partial artemisinin resistance in four African countries. Surveillance leadership this central deserves a name on the page that cites its numbers.",
        ...R,
        era: "Contemporary",
        role: "Head of Strategic Information for Impact, WHO Global Malaria Programme",
        knownFor: "World Malaria Report 2025.",
        links: [
          { label: "World malaria report 2025", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2025" },
        ],
        diseases: ["malaria"],
        institutions: ["who"],
        terms: ["ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "malaria-mft-resistance",
        name: "Multiple first-line therapies to outrun artemisinin resistance",
        tldr: "Deploy GanLum alongside ACTs — not after them — with resistance-gated rotation per focus.",
        summary:
          "The report's own recommendation: avoid over-reliance on a single drug. With GanLum approaching registration and partial artemisinin resistance confirmed in four African countries (suspected in four more), the window for multiple-first-line-therapy deployment is now — different regimens in adjacent foci, kelch13-gated switching, and partner-drug efficacy monitoring as routine. Waiting until ACTs fail repeats the chloroquine catastrophe on fast-forward.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Deploy GanLum as a co-first-line in high-resistance foci post-approval, measuring kelch13 prevalence and ACT efficacy versus ACT-only controls over three transmission seasons.",
        owner: "National programmes with MMV, WHO and the Global Fund",
        links: [
          { label: "World malaria report 2025", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2025" },
        ],
        diseases: ["malaria"],
        drugs: ["ganaplacide", "artesunate", "artemether-lumefantrine", "cipargamin"],
        trials: ["kaluma-ganlum-ph3"],
        institutions: ["medicines-for-malaria-venture", "who", "the-global-fund"],
        bottlenecks: ["antimalarial-resistance", "funding-gap"],
        terms: ["artemisinin-resistance", "pdp"],
        stats: [
          { label: "Window", value: "Before ACTs fail", note: "confirmed partial ART-R in 4 African countries" },
        ],
      },
      {
        id: "malaria-hrp2-switch",
        name: "A funded switch off HRP2-only RDTs where deletions exceed thresholds",
        tldr: "42 countries report pfhrp2/3 deletions — fund the LDH/pan switch before blind spots grow.",
        summary:
          "Parasites lacking pfhrp2/3 are invisible to the commonest rapid tests, above 15% in six countries and newly reported in Vietnam (2024); South Africa finds deletions in nearly all discordant samples. The idea: a financed, WHO-coordinated switch to LDH/pan-antigen RDTs wherever deletions cross thresholds, with reactive genomic surveillance — diagnostic resistance treated with the same urgency as drug resistance, before invisible transmission compounds it.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Fund RDT-switch pilots in three high-deletion settings, measuring case-detection recovery and cost per additional case found.",
        owner: "WHO with FIND, the Global Fund and national programmes",
        links: [
          { label: "World malaria report 2025", url: "https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2025" },
        ],
        diseases: ["malaria"],
        diagnostics: ["malaria-rdt", "molecular-pcr"],
        institutions: ["who", "find-dx", "the-global-fund"],
        bottlenecks: ["diagnostics-gap", "funding-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Spread", value: "42 countries", note: ">15% in six" },
        ],
      },
      {
        id: "malaria-vaccine-plus",
        name: "Vaccine-plus delivery: every malaria shot visit delivers nets, vitamin A and catch-up shots",
        tldr: "The four-dose schedule is a delivery platform — use all four contacts, and fund the 25-country rollout.",
        summary:
          "The MVIP evaluation showed two things: 13% mortality reduction at modest coverage, and that unprotected children got reached — vaccine visits found the missed. With 25 countries targeting >10M children a year but financing short (ODA −21%, $3.9B at 42% of target), the idea is vaccine-plus: every malaria contact delivers ITNs, vitamin A and missed routine shots, turning the schedule's burden into the system's best outreach tool — and a financed plan to close the purchase gap before supply sufficiency goes to waste.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Compare vaccine-plus integrated visits versus standalone rollout on all-cause mortality, ITN coverage and cost per child fully protected.",
        owner: "Gavi with WHO, UNICEF and national EPI programmes",
        links: [
          { label: "MVIP mortality evaluation (Lancet 2026)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00248-5/fulltext" },
        ],
        diseases: ["malaria"],
        technologies: ["malaria-vaccines", "insecticide-treated-nets"],
        institutions: ["who", "the-global-fund"],
        bottlenecks: ["funding-gap", "access-and-pricing"],
        terms: ["ntd"],
        stats: [
          { label: "Reach", value: ">10M children/yr, 25 countries", note: "purchase gap is the constraint" },
        ],
      },
    ],
  },
];
