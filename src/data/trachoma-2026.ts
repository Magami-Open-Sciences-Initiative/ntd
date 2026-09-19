import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Trachoma 2026 fact-check additions: the surgery and MDA endgame trials,
 * AI-assisted grading, the elimination-verification institutions, and the
 * people/ideas review. The headline corrections (33 countries validated, not
 * 27; the Alliance dates) went into the disease record and spike. Ordinary
 * records of their kind, kept in one file so the review is visible as a set;
 * wired into `index.ts` alongside SNAKEBITE_2026.
 */
export const TRACHOMA_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "keto-trachoma",
        name: "KETO: Kebele Elimination of Trachoma for Ocular Health",
        tldr: "An Ethiopian trial testing whether stopping MDA earlier is safe once infection is low.",
        summary:
          "The Kebele Elimination of Trachoma for Ocular Health study, in Ethiopia, tested whether it is safe to stop annual azithromycin mass drug administration sooner than standard practice once infection prevalence has fallen — a question central to the endgame, because each additional round costs money and applies macrolide selection pressure. It is one of the trials that lets programmes stop mass treatment with evidence rather than habit.",
        ...R,
        phase: "Cluster-randomised implementation trial",
        registry: "ClinicalTrials.gov NCT03335072",
        registryUrl: "https://clinicaltrials.gov/study/NCT03335072",
        status: "Active, not recruiting",
        sponsor: "Ethiopian national programme with international partners",
        intervention: "Azithromycin MDA stopping decision based on infection prevalence",
        result: "Tests whether MDA can be stopped earlier without re-emergence of infection.",
        links: [
          { label: "KETO trial (ClinicalTrials.gov NCT03335072)", url: "https://clinicaltrials.gov/study/NCT03335072" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        countries: ["ethiopia"],
        technologies: ["mass-drug-administration"],
        terms: ["mda", "elimination"],
      },
      {
        id: "restore-tt-surgery",
        name: "RESTORE: comparing approaches to repeat trichiasis surgery",
        tldr: "A trial of how best to re-operate the people whose in-turned lashes come back.",
        summary:
          "Trichiasis recurs after surgery in a substantial proportion of patients, so some people need operating more than once. RESTORE compares two approaches to repeat trichiasis surgery delivered by integrated eye-care workers, addressing one of the endgame's most stubborn problems: the recurrent-surgery backlog among people already blinded by trachoma, often in settings where surgical capacity is thinnest.",
        ...R,
        phase: "Randomised controlled trial",
        registry: "ClinicalTrials.gov NCT07322302",
        registryUrl: "https://clinicaltrials.gov/study/NCT07322302",
        status: "Recruiting",
        intervention: "Two approaches to repeat trichiasis surgery, delivered by integrated eye-care workers",
        result: "Ongoing; comparing outcomes of repeat-surgery strategies.",
        links: [
          { label: "RESTORE trial (ClinicalTrials.gov NCT07322302)", url: "https://clinicaltrials.gov/study/NCT07322302" },
        ],
        diseases: ["trachoma"],
        technologies: ["community-health-workers"],
        terms: ["trichiasis"],
      },
      {
        id: "flame-trichiasis",
        name: "FLAME: fluorometholone after trichiasis surgery",
        tldr: "A trial of adjunctive anti-inflammatory drops to reduce trichiasis recurrence after surgery.",
        summary:
          "The FLAME trial tested whether adding the corticosteroid fluorometholone after trachomatous trichiasis surgery reduces recurrence — attacking the recurrence problem pharmacologically rather than by operating again. Because the scarring that causes in-turned lashes is an inflammatory response, damping it around the time of surgery is a plausible route to better long-term outcomes, and FLAME is one of the field's attempts to prove it.",
        ...R,
        phase: "Randomised controlled trial",
        status: "Reported",
        intervention: "Topical fluorometholone as adjunct to trichiasis surgery",
        result: "Tested whether adjunctive anti-inflammatory therapy reduces trichiasis recurrence.",
        links: [
          { label: "FLAME trial references (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=FLAME+trachomatous+trichiasis+fluorometholone" },
        ],
        diseases: ["trachoma"],
        technologies: ["community-health-workers"],
        terms: ["trichiasis"],
      },
      {
        id: "azithromycin-mda-sti",
        name: "STI prevalence after azithromycin mass drug administration",
        tldr: "Does mass azithromycin for trachoma affect other sexually transmitted infections? A study asking the stewardship question.",
        summary:
          "Mass azithromycin for trachoma reaches whole communities and selects for macrolide resistance in many organisms. This study measured sexually transmitted infection prevalence following azithromycin mass drug administration, probing the broad-spectrum consequences of a donated antibiotic given at scale — the stewardship question the trachoma endgame cannot ignore, since the antibiotic arm of SAFE depends on a drug whose resistance footprint is still being measured.",
        ...R,
        phase: "Observational study",
        status: "Reported 2026",
        intervention: "Azithromycin MDA (exposure) and STI prevalence (outcome)",
        result: "Measured STI prevalence following azithromycin MDA, informing stewardship.",
        links: [
          { label: "STI prevalence after azithromycin MDA (Sex Transm Infect 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42509037" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        technologies: ["mass-drug-administration"],
        terms: ["mda", "macrolide-resistance"],
      },
    ],
  },

  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "ai-trachoma-grading",
        name: "Photographic and AI-assisted trachoma grading",
        tldr: "Standardising the eye exam with photographs and machine learning, so prevalence surveys agree.",
        summary:
          "Trachoma is graded by eye using the WHO simplified system, which makes survey results depend on how human graders differ. Photographic grading — with images later read centrally, increasingly by machine-learning models — reduces that variability and allows remote quality assurance. As prevalence falls and surveys decide whether a district can stop mass treatment, the reliability of grading becomes the whole ballgame; AI-assisted grading is how programmes are trying to make the measurements trustworthy and cheaper to repeat.",
        ...R,
        method: "Anterior-segment photography with expert or AI-assisted grading against the WHO simplified system",
        sampleType: "Ocular photographs",
        performance:
          "Designed to reduce inter-grader variability versus live clinical grading; models perform best where training data match the setting.",
        availability: "Used in surveys and quality assurance in several programmes; not yet universal",
        turnaround: "Images read centrally or in-field",
        links: [
          { label: "Training data recorders for high-quality trachoma photographs (Am J Trop Med Hyg 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42447856" },
        ],
        diseases: ["trachoma"],
        technologies: ["ai-microscopy"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Why it matters", value: "Survey results decide when MDA stops", note: "inter-grader variability is the weak point" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "proctor-foundation",
        name: "Francis I. Proctor Foundation (UCSF)",
        tldr: "The San Francisco group running the trials and diagnostics that define trachoma endgame questions.",
        summary:
          "The Francis I. Proctor Foundation at the University of California, San Francisco, is a leading centre for trachoma research on transmission, diagnostics and mass-treatment strategy — including work on whether azithromycin MDA should be modified in different mortality settings, and on the gap between clinical signs and molecular infection. Its researchers have shaped several of the questions that decide when the world stops treating.",
        ...R,
        institutionType: "Research institute",
        country: "United States",
        city: "San Francisco",
        focus: "Trachoma transmission, diagnostics and MDA strategy.",
        links: [
          { label: "Proctor Foundation — trachoma research", url: "https://proctor.ucsf.edu/" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        institutions: ["who", "iti"],
      },
      {
        id: "fred-hollows-foundation",
        name: "The Fred Hollows Foundation",
        tldr: "The eye-health NGO delivering trachoma surgery and programmes across Africa, Asia and the Pacific.",
        summary:
          "The Fred Hollows Foundation works on avoidable blindness, including trachoma elimination programmes across Africa, Asia and the Pacific — supporting surgery for trichiasis, surveillance, and the integration of eye health into local services. Along with Sightsavers and Orbis it carries much of the actual surgical delivery that turns the 'S' of SAFE into operations.",
        ...R,
        institutionType: "Non-governmental organisation",
        country: "Australia",
        focus: "Trachoma elimination and avoidable-blindness programmes.",
        links: [
          { label: "The Fred Hollows Foundation", url: "https://www.hollows.org/" },
        ],
        diseases: ["trachoma"],
        technologies: ["community-health-workers"],
        terms: ["trichiasis"],
      },
      {
        id: "sightsavers",
        name: "Sightsavers",
        tldr: "The eye-health NGO running trachoma surgery, surveys and the Tropical Data standard.",
        summary:
          "Sightsavers is an international eye-health NGO that delivers trachoma surgery, mass drug administration support and prevalence surveys across Africa and Asia, and helps run the Tropical Data programme that standardises trachoma survey methods globally. Like Fred Hollows and Orbis, it carries the operational weight of the 'S' and the survey backbone on which elimination decisions rest.",
        ...R,
        institutionType: "Non-governmental organisation",
        country: "United Kingdom",
        focus: "Trachoma surgery, surveys and neglected tropical disease eye care.",
        links: [
          { label: "Sightsavers — neglected tropical diseases", url: "https://www.sightsavers.org/" },
        ],
        diseases: ["trachoma"],
        technologies: ["community-health-workers"],
        institutions: ["who", "task-force-global-health"],
        terms: ["trichiasis", "elimination"],
      },
      {
        id: "task-force-global-health",
        name: "Task Force for Global Health",
        tldr: "The NGO that hosts the International Trachoma Initiative and the Tropical Data survey platform.",
        summary:
          "The Task Force for Global Health, based in Decatur, Georgia, hosts the International Trachoma Initiative — which manages Pfizer's azithromycin donation — and the Tropical Data programme that standardises trachoma prevalence surveys worldwide. The donation and the survey standards are the two pieces of infrastructure the whole elimination programme runs on.",
        ...R,
        institutionType: "Non-governmental organisation",
        country: "United States",
        city: "Decatur, Georgia",
        focus: "Hosting the ITI and Tropical Data; trachoma survey standards and medicine donation.",
        links: [
          { label: "Task Force for Global Health", url: "https://www.taskforce.org/" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        institutions: ["iti", "ictc", "who"],
        terms: ["mda", "elimination"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "matthew-burton",
        name: "Matthew J. Burton",
        tldr: "The London ophthalmologist who has led trachoma's clinical trials and endgame science.",
        summary:
          "Matthew Burton (International Centre for Eye Health, London School of Hygiene & Tropical Medicine) is among the most prolific current trachoma researchers, working on trichiasis surgery, azithromycin treatment, and the immunology and epidemiology that underpin the SAFE strategy. His trials and reviews define much of what programmes do, and he has been central to the field's shift from control to elimination.",
        ...R,
        era: "Contemporary",
        role: "Professor of Ophthalmology, International Centre for Eye Health, LSHTM",
        knownFor: "Trachoma clinical trials, trichiasis surgery and endgame science.",
        links: [
          { label: "Burton trachoma publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Burton+MJ+trachoma" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        institutions: ["lshtm"],
        technologies: ["mass-drug-administration"],
        terms: ["trichiasis", "elimination"],
      },
      {
        id: "ben-arnold",
        name: "Benjamin F. Arnold",
        tldr: "The UCSF biostatistician measuring transmission as trachoma nears elimination.",
        summary:
          "Benjamin Arnold (Francis I. Proctor Foundation, UCSF) works on the epidemiology and statistics of trachoma elimination — seroprevalence as a signal of transmission, spatial heterogeneity as populations approach the threshold, and the study designs that decide when mass treatment can stop. As prevalence falls, the questions become statistical as much as clinical, and his work governs how programmes read the evidence.",
        ...R,
        era: "Contemporary",
        role: "Associate Professor, Francis I. Proctor Foundation, UCSF",
        knownFor: "Trachoma transmission measurement and elimination statistics.",
        links: [
          { label: "Sub-district trachoma seroprevalence (J Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42470677" },
        ],
        diseases: ["trachoma"],
        institutions: ["proctor-foundation"],
        diagnostics: ["trachoma-grading"],
        terms: ["elimination", "eot", "sensitivity-specificity"],
      },
      {
        id: "scott-nash",
        name: "Scott D. Nash",
        tldr: "The Task Force epidemiologist who ran the azithromycin mortality trials.",
        summary:
          "Scott Nash (Task Force for Global Health, with The Carter Center's trachoma programme) designed and leads analyses of the large cluster-randomised trials of azithromycin mass drug administration, including the surprising question of whether mass azithromycin affects childhood mortality. His work sits at the intersection of trachoma elimination and the broader child-survival effects of a donated antibiotic.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Task Force for Global Health (with The Carter Center)",
        knownFor: "Azithromycin MDA cluster trials; trachoma epidemiology.",
        links: [
          { label: "Nash trachoma publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Nash+SD+trachoma" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        institutions: ["task-force-global-health", "carter-center"],
        technologies: ["mass-drug-administration"],
        terms: ["mda"],
      },
      {
        id: "jeremy-keenan",
        name: "Jeremy D. Keenan",
        tldr: "The UCSF clinician testing what active trachoma actually means.",
        summary:
          "Jeremy Keenan (Francis I. Proctor Foundation, UCSF) works on the correspondence — and frequent mismatch — between the clinical signs of active trachoma and molecular tests for C. trachomatis infection, and on treatment strategy in the endgame. If clinical grading over- or under-states infection as prevalence falls, programmes risk treating when they need not or stopping too early; his work tests that directly.",
        ...R,
        era: "Contemporary",
        role: "Professor of Ophthalmology, Francis I. Proctor Foundation, UCSF",
        knownFor: "Clinical–molecular discordance in trachoma; treatment strategy.",
        links: [
          { label: "Active trachoma vs chlamydial infection (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/40971876" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        institutions: ["proctor-foundation"],
        diagnostics: ["trachoma-grading", "molecular-pcr"],
        terms: ["sensitivity-specificity"],
      },
      {
        id: "martin-holland",
        name: "Martin J. Holland",
        tldr: "The London immunologist explaining why reinfection scars the eyelid.",
        summary:
          "Martin Holland (London School of Hygiene & Tropical Medicine) studies the immunology and transcriptomics of the human conjunctival response to Chlamydia trachomatis — why repeated infection produces the scarring that eventually blinds, and why some people progress faster. The scarring that causes trichiasis is immune-mediated, so understanding that response is what could interrupt the disease before surgery is needed.",
        ...R,
        era: "Contemporary",
        role: "Professor, London School of Hygiene & Tropical Medicine",
        knownFor: "Trachoma immunology and conjunctival transcriptomics.",
        links: [
          { label: "Conjunctival epithelial transcriptomics in trachoma (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42100661" },
        ],
        diseases: ["trachoma"],
        institutions: ["lshtm"],
        technologies: ["genomic-surveillance"],
        terms: ["trichiasis"],
      },
      {
        id: "caleb-mpyet",
        name: "Caleb Mpyet",
        tldr: "The Nigerian ophthalmologist mapping trachoma across Africa's survey network.",
        summary:
          "Caleb Mpyet (University of Jos, Nigeria, with Sightsavers) is one of Africa's leading trachoma epidemiologists, running and teaching prevalence surveys across Nigeria and the region — including the impact surveys that decide when districts stop treatment. Trachoma elimination rests on survey data, and Mpyet has helped generate and quality-assure much of the African evidence base.",
        ...R,
        era: "Contemporary",
        role: "Professor of Ophthalmology, University of Jos, Nigeria",
        knownFor: "African trachoma prevalence surveys and impact assessment.",
        links: [
          { label: "Mpyet trachoma publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mpyet+C+trachoma" },
        ],
        diseases: ["trachoma"],
        countries: ["nigeria"],
        diagnostics: ["trachoma-grading"],
        institutions: ["sightsavers"],
        terms: ["elimination"],
      },
      {
        id: "njomo-dunstan",
        name: "Dunstan W. Njomo",
        tldr: "The Kenyan scientist integrating trachoma surveys with other NTD work.",
        summary:
          "Dunstan Njomo (Kenya Medical Research Institute) works on neglected tropical disease epidemiology and control in Kenya, including trachoma surveys and the integration of trachoma assessment with other disease programmes. Integration is the practical route to reaching the last remote districts affordably, and his work tests how it is done.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kenya Medical Research Institute (KEMRI)",
        knownFor: "Trachoma and NTD epidemiology in Kenya.",
        links: [
          { label: "Njomo/KEMRI trachoma publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Njomo+DW+trachoma" },
        ],
        diseases: ["trachoma"],
        institutions: ["kemi"],
        countries: ["kenya"],
        diagnostics: ["trachoma-grading"],
        terms: ["elimination", "ntd"],
      },
      {
        id: "gilbert-baayenda",
        name: "Gilbert Baayenda",
        tldr: "The Ugandan programme leader carrying trachoma to the last districts.",
        summary:
          "Gilbert Baayenda (The Fred Hollows Foundation, Uganda) works on trachoma programme implementation and surveillance in Uganda, including field-embedded training approaches to strengthen survey capacity. His work is the delivery end of elimination: getting trained teams and reliable data into the districts where transmission persists.",
        ...R,
        era: "Contemporary",
        role: "Programme researcher, The Fred Hollows Foundation, Uganda",
        knownFor: "Trachoma programme delivery and survey training in Uganda.",
        links: [
          { label: "Field-embedded trachoma training in Uganda (Int J Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42217748" },
        ],
        diseases: ["trachoma"],
        countries: ["uganda"],
        institutions: ["fred-hollows-foundation"],
        terms: ["elimination"],
      },
      {
        id: "thinavhuyo-netangaheni",
        name: "Thinavhuyo Robert Netangaheni",
        tldr: "The South African researcher tackling persistent and recrudescent trachoma.",
        summary:
          "Thinavhuyo Robert Netangaheni (with Orbis International) studies strategies to address persistent and recrudescent trachoma — the districts where infection keeps returning despite control efforts. Recrudescence after apparent success is the endgame's worst failure mode, and his work asks what it takes to finish rather than to nearly finish.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Orbis International (South Africa / Ethiopia)",
        knownFor: "Persistent and recrudescent trachoma strategies.",
        links: [
          { label: "Strategies for persistent and recrudescent trachoma (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41489080" },
        ],
        diseases: ["trachoma"],
        countries: ["south-africa"],
        technologies: ["mass-drug-administration"],
        terms: ["elimination", "eot"],
      },
      {
        id: "anthony-solomon",
        name: "Anthony W. Solomon",
        tldr: "The WHO medical officer who coordinates global trachoma elimination.",
        summary:
          "Anthony Solomon leads WHO's work on trachoma as a medical officer in the Global Neglected Tropical Diseases Programme — the guidance, the survey standards, the elimination dossiers and the validation decisions that turn country data into official recognition. In the endgame, the person who writes the rules of proof matters as much as the surgeons.",
        ...R,
        era: "Contemporary",
        role: "Medical Officer, Global Neglected Tropical Diseases Programme, WHO",
        knownFor: "Global trachoma elimination coordination and validation.",
        links: [
          { label: "WHO — trachoma", url: "https://www.who.int/health-topics/trachoma" },
        ],
        diseases: ["trachoma"],
        institutions: ["who"],
        terms: ["elimination", "eot"],
      },
      {
        id: "emma-harding-esch",
        name: "Emma M. Harding-Esch",
        tldr: "The London epidemiologist standardising how trachoma is measured.",
        summary:
          "Emma Harding-Esch (London School of Hygiene & Tropical Medicine) works on the laboratory and survey methodology of trachoma — the Tropical Data standards, molecular testing and the diagnostic accuracy questions that decide whether a district's measured prevalence is trustworthy. As elimination nears, the reliability of measurement is the binding constraint.",
        ...R,
        era: "Contemporary",
        role: "Associate Professor, London School of Hygiene & Tropical Medicine",
        knownFor: "Trachoma survey methods and molecular diagnostics.",
        links: [
          { label: "Harding-Esch trachoma publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Harding-Esch+EM+trachoma" },
        ],
        diseases: ["trachoma"],
        institutions: ["lshtm", "task-force-global-health"],
        diagnostics: ["trachoma-grading", "molecular-pcr"],
        terms: ["sensitivity-specificity", "elimination"],
      },
      {
        id: "john-kaldor",
        name: "John M. Kaldor",
        tldr: "The Australian epidemiologist behind trachoma elimination evidence in the Pacific.",
        summary:
          "John Kaldor (Kirby Institute, UNSW Sydney) works on the epidemiology of trachoma and other infectious diseases, including the Australian and Pacific trachoma surveillance and treatment trials that have informed how programmes run in remote settings. Australia's Indigenous trachoma burden is among the highest in a high-income country, and the Australian evidence has fed global practice.",
        ...R,
        era: "Contemporary",
        role: "Professor, Kirby Institute, UNSW Sydney",
        knownFor: "Trachoma epidemiology and surveillance in Australia and the Pacific.",
        links: [
          { label: "Australian Trachoma Surveillance Report 2024 (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42475723" },
        ],
        diseases: ["trachoma"],
        diagnostics: ["trachoma-grading"],
        terms: ["elimination"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "trachoma-post-elimination-surveillance",
        name: "A funded post-elimination surveillance system for trachoma",
        tldr: "33 countries validated — the failure mode is recrudescence, so make surveillance permanent and cheap.",
        summary:
          "Validated countries must prove that transmission has stopped, and persistent or recrudescent trachoma is the documented failure mode. Yet post-elimination surveillance competes for money with the next emergency. The idea is to industrialise it: standardised Tropical Data surveys on a fixed cycle, AI-assisted photographic grading to cut cost and variability, molecular testing in equivocal districts, and integration into primary care and school health so that a new case is found by the system that already exists. Elimination is a one-off achievement; freedom from trachoma is a maintenance cost, and the field should fund it as one.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Cost and run an integrated post-elimination surveillance package (periodic surveys + AI grading + molecular confirmation in primary care) in three validated countries over five years, tracking recrudescence detection and cost per district.",
        owner: "WHO with Ministries of Health, ITI/Task Force and eye-health NGOs",
        links: [
          { label: "Post-elimination trachoma surveillance (JBI Evid Synth 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42338192" },
        ],
        diseases: ["trachoma"],
        diagnostics: ["trachoma-grading", "ai-trachoma-grading", "molecular-pcr"],
        institutions: ["who", "task-force-global-health", "fred-hollows-foundation"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Stakes", value: "33 validated countries", note: "recrudescence is the failure mode" },
        ],
      },
      {
        id: "trachoma-tt-backlog",
        name: "Clear the trichiasis and repeat-surgery backlog",
        tldr: "Millions already blinded need surgery and often re-surgery — finance it as a defined endgame target.",
        summary:
          "Mass treatment prevents future blindness; it does nothing for the people whose lashes already scrape the cornea, and recurrence means some need operating more than once. In 2025 only 98,829 people received trichiasis surgery worldwide — far fewer than the backlog implies. The idea is to treat surgery as an explicit endgame deliverable: estimate the true backlog (including recurrence) district by district, train and equip integrated eye-care workers to deliver outreach, combine surgery with azithromycin to cut recurrence, and report surgery against a target the way MDA coverage is reported. Elimination that leaves the already-blinded untreated is not finished.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Map and clear the trichiasis/repeat-surgery backlog in two countries via outreach camps with recurrence-reduction adjuncts, measuring cases operated, recurrence at one year, and cost per person.",
        owner: "National eye-health programmes with Fred Hollows, Sightsavers, Orbis and WHO",
        links: [
          { label: "WHO — trachoma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        trials: ["restore-tt-surgery", "flame-trichiasis"],
        institutions: ["who", "fred-hollows-foundation"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["trichiasis"],
        stats: [
          { label: "2025 surgery", value: "98,829 people", note: "against a large recurring backlog" },
        ],
      },
      {
        id: "trachoma-macrolide-stewardship",
        name: "Quantify and manage the macrolide-resistance footprint of trachoma MDA",
        tldr: "A donated antibiotic is finishing trachoma — measure its resistance cost so the next programme inherits the lesson.",
        summary:
          "More than 1.1 billion doses of azithromycin have been given for trachoma, selecting for macrolide resistance far beyond Chlamydia. The idea is to make that cost visible and manageable: standardised resistance monitoring (including pneumococcal and gut-organism markers) as part of MDA programmes, surveillance built on the community-level AMR monitoring piloted after mass administration, and a documented policy of stopping MDA as soon as surveys permit. Trachoma is the world's largest experiment in population-level macrolide exposure; the field should read out its results deliberately rather than discover them.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Run harmonised macrolide-resistance surveillance alongside MDA in three countries, quantifying resistance before, during and after mass treatment, and modelling the trade-off against trachoma burden.",
        owner: "WHO with national AMR programmes and research groups",
        links: [
          { label: "Community-level AMR monitoring after mass administration (Gates Open Res 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42244934" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        institutions: ["who", "task-force-global-health"],
        bottlenecks: ["funding-gap"],
        terms: ["mda", "macrolide-resistance", "amr"],
        stats: [
          { label: "Exposure", value: "> 1.1 billion doses donated", note: "the field's largest macrolide campaign" },
        ],
      },
    ],
  },
];
