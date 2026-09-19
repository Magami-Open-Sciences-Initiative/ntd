import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Dengue 2026 fact-check additions: the Butantan-DV suspension, the
 * mosnodenvir NEJM data and rescue talks, the live NS4B/mAb antiviral
 * pipeline, the WHO 2026 Wolbachia review, 2024–2026 resurgence figures
 * (including Africa), and the people/ideas review. Ordinary records of their
 * kind, kept in one file so the review is visible as a set; wired into
 * `index.ts` alongside CHIKV_2026.
 */
export const DENGUE_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "qdenga",
        name: "Qdenga (TAK-003)",
        tldr: "The two-dose dengue vaccine for 6–16-year-olds in high-transmission settings — still the only WHO-recommended one.",
        summary:
          "Qdenga is a live-attenuated tetravalent dengue vaccine given in two doses three months apart, licensed in 40+ countries including Argentina, Brazil, Indonesia and Thailand. WHO's May 2024 position paper recommends it for children aged 6–16 in high-transmission settings — explicitly not younger children or low-transmission settings until DENV-3/DENV-4 protection in seronegatives is clarified. It remains the only WHO-recommended dengue vaccine after Butantan-DV's 2026 suspension, which makes resolving its serotype gaps the field's most urgent vaccine question.",
        ...R,
        drugClass: "Live-attenuated tetravalent vaccine",
        mechanism: "Induces neutralising antibodies against all four dengue serotypes after two doses.",
        indication: "Prevention of dengue in ages 6–16 in high-transmission settings.",
        administration: "Two intramuscular doses, 3 months apart.",
        status: "Licensed 40+ countries; WHO-recommended (2024) for 6–16y in high transmission",
        links: [
          { label: "WHO — dengue vaccine position paper (2024)", url: "https://www.who.int/publications/i/item/9789240091078" },
          { label: "CDC — dengue vaccines (2026)", url: "https://www.cdc.gov/dengue/hcp/vaccine/index.html" },
        ],
        diseases: ["dengue"],
        pathogens: ["dengue-virus"],
        technologies: ["dengue-vaccination"],
        trials: ["tak-003-dengue"],
        stats: [
          { label: "Schedule", value: "2 doses" },
          { label: "Licensed in", value: "40+ countries" },
        ],
      },
      {
        id: "butantan-dv",
        name: "Butantan-DV",
        tldr: "The world's first single-dose dengue vaccine — approved November 2025, suspended June 2026 pending a safety review.",
        summary:
          "Butantan-DV is a single-dose live-attenuated tetravalent vaccine from the NIH TV003 backbone, made by Instituto Butantan with WuXi as manufacturing partner. Phase 3 in 16,000+ volunteers across 14 Brazilian states showed 74.7% overall efficacy, 91.6% against severe dengue and 100% against hospitalisation; Anvisa approved it for ages 12–59 in November 2025 and rollout to health workers began February 2026. In June 2026 the ministry suspended the strategy as a precaution after two deaths, with an Anvisa expert review under way. Published efficacy centred on DENV-1/2, leaving DENV-3/4 protection — the same gap as Qdenga — to be clarified.",
        ...R,
        drugClass: "Live-attenuated tetravalent vaccine (single-dose)",
        mechanism: "Induces neutralising antibodies against dengue serotypes after one dose.",
        indication: "Prevention of dengue in ages 12–59 (Brazil).",
        administration: "Single intramuscular dose.",
        status: "Approved Nov 2025; rollout suspended Jun 2026 pending safety review",
        links: [
          { label: "Brazil single-dose vaccine rollout (Lancet Microbe 2026)", url: "https://www.thelancet.com/journals/lanmic/article/PIIS2666-5247(26)00042-X/fulltext" },
          { label: "Brazil suspends vaccinations (Lancet 2026)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)01239-0/fulltext" },
        ],
        diseases: ["dengue"],
        pathogens: ["dengue-virus"],
        technologies: ["dengue-vaccination"],
        trials: ["butantan-dv-dengue"],
        institutions: ["butantan-institute"],
        stats: [
          { label: "Efficacy overall", value: "74.7%", note: "91.6% severe, 100% hospitalisation" },
          { label: "Rollout", value: "Suspended Jun 2026", note: "precaution after two deaths; expert review" },
        ],
      },
    ],
  },

  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "eyu688-novartis-ph2",
        name: "EYU688 (Novartis NS4B inhibitor) Phase 2",
        tldr: "The live NS4B programme carrying dengue antivirals after mosnodenvir's halt.",
        summary:
          "EYU688 is a Novartis small-molecule NS4B inhibitor in an ongoing Phase 2 trial (NCT06006559) — the only industry small-molecule dengue antiviral still dosing after AT-752 and JNJ-64281802 were terminated on recruitment and deprioritisation. It targets the same replication-complex biology as mosnodenvir via a different molecule, and its readout decides whether the NS4B mechanism gets a second clinical chance.",
        ...R,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT06006559",
        registryUrl: "https://clinicaltrials.gov/study/NCT06006559",
        status: "Ongoing",
        sponsor: "Novartis",
        intervention: "EYU688, oral NS4B inhibitor",
        result: "Ongoing; viral-load and safety endpoints.",
        links: [
          { label: "Dengue therapeutic trials mapping review (PLoS NTD 2026)", url: "https://journals.plos.org/plosntds/article?id=10.1371%2Fjournal.pntd.0014382" },
        ],
        diseases: ["dengue"],
        targets: ["dengue-ns4b"],
        technologies: ["ai-drug-discovery"],
      },
      {
        id: "sii-dengue-mab-ph2",
        name: "Serum Institute dengue monoclonal antibody Phase 2",
        tldr: "A dengue mAb with Phase 2 complete and Phase 3 planned — passive immunisation for outbreaks.",
        summary:
          "The Serum Institute of India completed a Phase 2 dose-ranging trial of a dengue monoclonal antibody (CTRI/2021/07/035290, publication pending) and plans Phase 3 for Indian licensure. A potent mAb fills the gap small molecules leave: immediate protection for outbreak contacts and severe-case prophylaxis without waiting for vaccine immunity — the same logic as rabies immunoglobulin, applied to dengue.",
        ...R,
        phase: "Phase 2 (completed) / Phase 3 planned",
        registry: "CTRI/2021/07/035290",
        registryUrl: "https://trialsearch.who.int/Trial2.aspx?TrialID=CTRI/2021/07/035290",
        status: "Phase 2 complete, publication pending; Phase 3 planned",
        sponsor: "Serum Institute of India",
        intervention: "Dengue monoclonal antibody, dose-ranging",
        result: "Completed; results pending.",
        links: [
          { label: "Dengue therapeutic trials mapping review (PLoS NTD 2026)", url: "https://journals.plos.org/plosntds/article?id=10.1371%2Fjournal.pntd.0014382" },
        ],
        diseases: ["dengue"],
        technologies: ["recombinant-antivenoms"],
      },
      {
        id: "molnupiravir-dengue-brazil",
        name: "Molnupiravir for dengue and chikungunya (Brazil)",
        tldr: "Repurposing a COVID antiviral against two Aedes viruses in their heartland.",
        summary:
          "A Brazilian-registered trial (U1111-1306-1425) tests molnupiravir — the oral mutagenic nucleoside from the COVID pandemic — against dengue and chikungunya. Repurposing a stockpiled, oral, once-widely-made drug is the cheapest route to a dengue antiviral signal, and Brazil, running both diseases at scale, is the natural venue.",
        ...R,
        phase: "Phase 2",
        registry: "Brazilian Clinical Trials Registry U1111-1306-1425",
        status: "Active",
        intervention: "Molnupiravir, oral",
        result: "Ongoing; viral and clinical endpoints in dengue and chikungunya.",
        links: [
          { label: "Dengue therapeutic trials mapping review (PLoS NTD 2026)", url: "https://journals.plos.org/plosntds/article?id=10.1371%2Fjournal.pntd.0014382" },
        ],
        diseases: ["dengue", "chikungunya"],
        technologies: ["drug-repurposing"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "adama-gansane",
        name: "Adama Gansané",
        tldr: "The Burkinabè researcher measuring dengue where the 2024 surge hit hardest in Africa.",
        summary:
          "Adama Gansané leads dengue seroprevalence and knowledge-attitude-practice studies in Burkina Faso — the country WHO singled out in Africa's sharp 2024 rise. Community-level burden data from the Sahel, where dengue competes with malaria for every fever, is the denominator the continent's response has lacked.",
        ...R,
        era: "Contemporary",
        role: "Dengue researcher, Burkina Faso",
        knownFor: "National dengue KAP and seroprevalence studies.",
        links: [
          { label: "Dengue KAP, Burkina Faso (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ouedraogo+Gansane+dengue+KAP+Burkina" },
        ],
        diseases: ["dengue"],
        terms: ["ntd"],
      },
      {
        id: "mamadou-diagne-dengue",
        name: "Moussa M. Diagne",
        tldr: "The Dakar virologist pairing rapid dengue testing with sequencing.",
        summary:
          "Moussa Diagne of Institut Pasteur de Dakar evaluates MxA-based rapid testing combined with pathogen sequencing for dengue and characterises re-emerging Senegalese outbreaks genomically. A rapid test that both diagnoses and feeds sequences into surveillance is the diagnostic model Africa's arbovirusjeti needs.",
        ...R,
        era: "Contemporary",
        role: "Virologist, Institut Pasteur de Dakar",
        knownFor: "MxA rapid testing plus sequencing; Senegal outbreak genomics.",
        links: [
          { label: "MxA rapid testing with sequencing (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kane+Diagne+myxovirus+rapid+sequencing" },
        ],
        diseases: ["dengue", "chikungunya"],
        institutions: ["pasteur-dakar-arbo"],
        diagnostics: ["dengue-ns1-rdt", "molecular-pcr"],
        terms: ["ntd"],
      },
      {
        id: "samuel-langat",
        name: "Samuel K. Langat",
        tldr: "The Kenyan genomicist showing dengue persists locally rather than re-invading.",
        summary:
          "Samuel Langat's 2026 genomic investigation revealed local persistence and regional circulation of dengue in Kenya — endemic transmission, not repeated importation. That distinction decides strategy: persistent circulation justifies sustained vector control and vaccine planning, while importation framing justifies border screening that misses the point.",
        ...R,
        era: "Contemporary",
        role: "Genomic epidemiologist, Kenya",
        knownFor: "DENV persistence and circulation genomics in Kenya.",
        links: [
          { label: "DENV persistence in Kenya (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Langat+Limbaso+dengue+Kenya+genomic" },
        ],
        diseases: ["dengue"],
        countries: ["kenya"],
        vectors: ["aedes-aegypti"],
        technologies: ["genomic-surveillance"],
        terms: ["ntd"],
      },
      {
        id: "sophie-yacoub",
        name: "Sophie Yacoub",
        tldr: "The Oxford therapeutics lead deciding which dengue antivirals live or die.",
        summary:
          "Sophie Yacoub (University of Oxford / OUCRU Vietnam) is the clinical voice of dengue therapeutics: advisor on mosnodenvir, chair of the DSMB for Novartis's Phase 2 antiviral, and co-author of the 2026 mapping review that found only five antiviral RCTs in dengue history. Trial design and futility calls for dengue drugs increasingly run through her committee rooms.",
        ...R,
        era: "Contemporary",
        role: "Professor of Infectious Diseases, University of Oxford; OUCRU Vietnam",
        knownFor: "Dengue therapeutic trials leadership and DSMB chair.",
        links: [
          { label: "Mosnodenvir rescue outlook (Science 2026)", url: "https://www.science.org/content/article/antiviral-drug-abandoned-pharma-shows-promise-against-dengue" },
        ],
        diseases: ["dengue"],
        drugs: ["mosnodenvir"],
        trials: ["mosnodenvir-dengue", "eyu688-novartis-ph2"],
        terms: ["ntd"],
      },
      {
        id: "etienne-bilgo",
        name: "Etienne Bilgo",
        tldr: "The Burkinabè entomologist testing predator mosquitoes against Aedes.",
        summary:
          "Etienne Bilgo works on eco-friendly dengue control in Burkina Faso, including the predatory mosquito Toxorhynchites brevipalpis against Aedes aegypti larvae. Where insecticide resistance erodes spraying and Wolbachia needs factories, a self-sustaining predator is the low-infrastructure third option — evaluated where the burden actually is.",
        ...R,
        era: "Contemporary",
        role: "Medical entomologist, Burkina Faso",
        knownFor: "Toxorhynchites biocontrol of Aedes larvae.",
        links: [
          { label: "Toxorhynchites biocontrol (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Gnambani+Bilgo+Toxorhynchites+dengue" },
        ],
        diseases: ["dengue"],
        vectors: ["aedes-aegypti"],
        terms: ["vector-borne", "ntd"],
      },
      {
        id: "boubacar-diallo",
        name: "Boubacar Diallo",
        tldr: "First complete dengue genome from Sierra Leone — closing West Africa's sequencing gap.",
        summary:
          "Boubacar Diallo's team characterised Sierra Leone's first complete dengue genome in 2026. Countries without a single reference genome cannot track serotype invasions like DENV-3's return — and Sierra Leone just left that club, which is how regional genomic surveillance gets built, one country at a time.",
        ...R,
        era: "Contemporary",
        role: "Genomic researcher, Sierra Leone",
        knownFor: "First complete dengue genome, Sierra Leone.",
        links: [
          { label: "First dengue genome, Sierra Leone (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Campbell+Diallo+dengue+genome+Sierra+Leone" },
        ],
        diseases: ["dengue"],
        technologies: ["genomic-surveillance"],
        terms: ["ntd"],
      },
      {
        id: "titus-tugume",
        name: "Titus Tugume",
        tldr: "Multiple dengue serotypes circulating in Somalia — documented.",
        summary:
          "Titus Tugume's group with Denis Byarugaba (Makerere University Walter Reed Program) detected multiple dengue serotypes circulating in Somalia, a setting with almost no prior virological data. Co-circulating serotypes mean antibody-dependent enhancement risk and vaccine complexity in a fragile health system — the exact scenario the field's tools are least ready for.",
        ...R,
        era: "Contemporary",
        role: "Virology researcher, East Africa",
        knownFor: "Multi-serotype dengue circulation in Somalia.",
        links: [
          { label: "DENV serotypes in Somalia (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Tugume+Byarugaba+dengue+Somalia+serotypes" },
        ],
        diseases: ["dengue"],
        terms: ["ntd"],
      },
      {
        id: "kenji-morita",
        name: "Kenji Morita",
        tldr: "The Nagasaki immunologist mapping cross-reactive dengue immunity.",
        summary:
          "Kenji Morita (Nagasaki University) studies broadly cross-reactive neutralising versus enhancing antibody responses across dengue, Japanese encephalitis and Zika — the immunology that decides whether a vaccine or a second infection protects or harms. His 2026 work directly informs the DENV-3/4 seronegative question hanging over both licensed vaccines.",
        ...R,
        era: "Contemporary",
        role: "Professor of Virology, Nagasaki University",
        knownFor: "Cross-reactive flavivirus antibody responses.",
        links: [
          { label: "Cross-reactive nAb/enhancing responses (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Raekiansyah+Morita+dengue+Japanese+encephalitis+cross-reactive" },
        ],
        diseases: ["dengue"],
        drugs: ["qdenga", "butantan-dv"],
        terms: ["ntd"],
      },
      {
        id: "thanh-huyen",
        name: "Thanh B. Huyen",
        tldr: "Mapped every dengue therapeutic trial ever run — all five antiviral RCTs.",
        summary:
          "Thanh Huyen's June 2026 systematic mapping review (PLoS NTD) inventoried the entire dengue therapeutic trial landscape: five published antiviral RCTs in history, terminated AT-752 and JNJ-64281802 programmes, and the live EYU688/mAb/molnupiravir pipeline. Evidence synthesis this complete is what stops the field repeating failed designs — and what justifies the antiviral ideas below.",
        ...R,
        era: "Contemporary",
        role: "Evidence-synthesis researcher (OUCRU-linked review group)",
        knownFor: "Systematic mapping of dengue therapeutic trials (2026).",
        links: [
          { label: "Therapeutic trials mapping review (PLoS NTD 2026)", url: "https://journals.plos.org/plosntds/article?id=10.1371%2Fjournal.pntd.0014382" },
        ],
        diseases: ["dengue", "chikungunya"],
        trials: ["eyu688-novartis-ph2", "sii-dengue-mab-ph2", "mosnodenvir-dengue"],
        terms: ["ntd"],
      },
      {
        id: "siaka-debe",
        name: "Siaka Debe",
        tldr: "The Burkinabè epidemiologist measuring community dengue immunity in the Sahel.",
        summary:
          "Siaka Debe's community-based dengue seroprevalence work quantifies who has actually been infected in Sahelian populations — the background immunity that determines both outbreak risk and vaccine targeting. Without community (not facility) denominators, every Sahel dengue plan is built on hospital cases alone.",
        ...R,
        era: "Contemporary",
        role: "Epidemiologist, CNRFP, Ouagadougou",
        knownFor: "Community dengue seroprevalence, Sahel.",
        links: [
          { label: "Community seroprevalence (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Debe+Gansane+dengue+seroprevalence+community" },
        ],
        diseases: ["dengue"],
        terms: ["ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "dengue-single-dose-safety-platform",
        name: "A standing safety-and-effectiveness platform for single-dose live dengue vaccines",
        tldr: "The Butantan suspension proved 16,000-person trials are not enough — build the post-licensure AESI + test-negative platform now.",
        summary:
          "Butantan-DV's June 2026 suspension after two deaths shows a Phase 3 safety database cannot carry a single-dose live vaccine alone — the same lesson Ixchiq taught chikungunya a year earlier. The fix is standing infrastructure, not ad-hoc reviews: pre-agreed adverse-event-of-special-interest definitions, background-rate baselines by serotype history, and test-negative effectiveness protocols (like Brazil's Ixchiq PVS) activated at first rollout. Every future single-dose arbovirus vaccine — and there will be more — reuses it.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Stand up AESI surveillance plus test-negative effectiveness in the suspended rollout's catchment; pre-register the protocol as the template for the next single-dose arbovirus licensure.",
        owner: "Anvisa/Fiocruz with WHO and CEPI",
        links: [
          { label: "Brazil suspends vaccinations (Lancet 2026)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)01239-0/fulltext" },
        ],
        diseases: ["dengue"],
        drugs: ["butantan-dv", "qdenga"],
        trials: ["butantan-dv-dengue", "tak-003-dengue"],
        institutions: ["butantan-institute", "fiocruz", "who"],
        bottlenecks: ["vaccine-gap", "funding-gap"],
        terms: ["pdp"],
        stats: [
          { label: "Gap exposed", value: "Suspension after 2 deaths", note: "Phase 3 n≈16,000 insufficient for rare AESI" },
        ],
      },
      {
        id: "dengue-early-treatment-window",
        name: "An early-treatment (<48h) antiviral programme: rescue mosnodenvir, finish EYU688, trial the mAb",
        tldr: "Three live shots on goal — a rescued NS3–NS4B drug, an NS4B inhibitor, a monoclonal — all aimed at fever-under-48-hours.",
        summary:
          "Dengue antivirals fail twice: scientifically, because most patients present after viremia peaks, and commercially, because sponsors exit (J&J, Atea). The programme that fixes both: rescue mosnodenvir under a PDP sponsor for the <48h window its challenge data supports, finish Novartis's EYU688 Phase 2, and run the Serum Institute monoclonal to Phase 3 — with trial networks pre-enrolling febrile patients so dosing starts inside 48 hours, the window the mapping review shows is everything. The endpoint is hospitalisation averted, not viral load alone.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Platform trial enrolling febrile <48h patients across 3 endemic countries, testing EYU688 and SII mAb against standard care with hospitalisation as primary endpoint; parallel PDP licensing for mosnodenvir.",
        owner: "DNDi-style PDP with Novartis, Serum Institute, OUCRU trial network",
        links: [
          { label: "Mosnodenvir rescue outlook (Science 2026)", url: "https://www.science.org/content/article/antiviral-drug-abandoned-pharma-shows-promise-against-dengue" },
          { label: "Therapeutic trials mapping review (PLoS NTD 2026)", url: "https://journals.plos.org/plosntds/article?id=10.1371%2Fjournal.pntd.0014382" },
        ],
        diseases: ["dengue"],
        drugs: ["mosnodenvir"],
        targets: ["dengue-ns4b", "dengue-ns5"],
        trials: ["mosnodenvir-dengue", "eyu688-novartis-ph2", "sii-dengue-mab-ph2"],
        bottlenecks: ["funding-gap", "access-and-pricing"],
        terms: ["pdp"],
        stats: [
          { label: "History", value: "5 antiviral RCTs ever", note: "mapping review 2026" },
          { label: "Window", value: "<48h fever", note: "dosing must precede viremia peak" },
        ],
      },
      {
        id: "dengue-africa-surveillance",
        name: "An African dengue surveillance backbone: multiplex RDT plus genomics",
        tldr: "The sharpest 2024 rise met the thinnest data — multiplex NS1 RDTs plus ACEGID/CAGED sequencing in 10 countries.",
        summary:
          "Africa's 2024 dengue surge (Burkina Faso, Cabo Verde) is certainly undercounted: fevers default to malaria, NS1 RDTs are scarce, and only a handful of countries have reference genomes. The backbone: multiplex NS1 RDT rollout through the technically validated assays (Hauner/Ariën 2026), routine sequencing via ACEGID, CAGED and Institut Pasteur Dakar, and One Health reporting per Rwanda's imported-cases model. It doubles as the chikungunya/Zika backbone — one Aedes surveillance system, not three vertical ones.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Deploy multiplex NS1 RDT + sequencing in 10 African countries with febrile-illness enrolment, measuring confirmed-dengue fraction versus malaria-default diagnosis and time-to-serotype-alert.",
        owner: "Africa CDC with ACEGID, CAGED, WHO AFRO",
        links: [
          { label: "Multiplex PCR validation (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Hauner+Arien+multiplex+PCR+differential+dengue" },
          { label: "WHO dengue WER 2024 update", url: "https://www.who.int/publications/i/item/who-wer10052-665-678" },
        ],
        diseases: ["dengue", "chikungunya"],
        diagnostics: ["dengue-ns1-rdt", "molecular-pcr"],
        institutions: ["acegid", "africa-cdc", "who"],
        bottlenecks: ["funding-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Signal", value: "Africa's sharpest rise, thinnest data", note: "WER 2024" },
        ],
      },
    ],
  },
];
