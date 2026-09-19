import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Ebola 2026 fact-check additions: the drug, diagnostic, trial, guideline,
 * ideas, people and institution that the 2026 source cross-check (WHO fact
 * sheet April 2025, EPI-WIN February 2025, DONs for Uganda SVD 2025, DRC
 * Kasai EVD 2025 and DRC Bundibugyo 2026, FDA, ChEMBL, Open Targets,
 * G-FINDER EID scope, PubMed) showed were missing from the Ebola graph.
 * Ordinary records of their kind, kept in one file so the review is visible
 * as a set; wired into `index.ts` alongside ADDITIONS.
 *
 * Two honest negatives from the cross-check, recorded here so they are not
 * re-searched: Open Targets carries Ebola haemorrhagic fever
 * (MONDO_0005737) with 389 associated human targets, but the top hit
 * (KCNH2, 0.18, clinical-datatype only) is a drug-safety artefact and the
 * rest are low-score literature text-mining — no validated human therapeutic
 * target, as expected for a disease whose licensed countermeasures all hit
 * the viral glycoprotein. ChEMBL carries the licensed antibodies (ansuvimab,
 * atoltivimab, maftivimab, odesivimab) and Ebola-GP-encoding vaccines as
 * drug entries, but no small-molecule Ebola target programme. G-FINDER
 * tracks Ebola only inside its Emerging Infectious Disease survey (in scope
 * since the 2015 survey), not the neglected-disease survey — see the 2024
 * EID landscape report.
 */
export const EBOLA_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "inmazeb",
        name: "Inmazeb (atoltivimab + maftivimab + odesivimab)",
        tldr: "A three-antibody cocktail that was the first treatment ever approved for Ebola — shown superior to ZMapp and remdesivir in the PALM trial.",
        summary:
          "Inmazeb (REGN-EB3) combines three fully human monoclonal antibodies that bind non-overlapping regions of the Zaire ebolavirus glycoprotein, so a single escape mutation cannot defeat it. In the 681-patient PALM randomised trial during the 2018–2020 DRC outbreak it reduced mortality more than ZMapp or remdesivir, with the clearest benefit when given early, and the trial was stopped early for superiority. The US FDA approved it on 14 October 2020 — the first approval of any Ebola treatment — for adults and children including neonates born to positive mothers, and BARDA contracted a six-year supply for the US stockpile. WHO strongly recommends Inmazeb or ansuvimab for confirmed Zaire ebolavirus disease. Like ansuvimab it covers only Zaire ebolavirus, not Sudan or Bundibugyo virus.",
        ...R,
        drugClass: "Monoclonal antibody cocktail (3 IgG1)",
        mechanism:
          "Three antibodies bind distinct, non-overlapping epitopes on the Ebola virus glycoprotein, blocking cell entry and driving immune clearance; the cocktail design guards against viral escape.",
        indication: "Zaire ebolavirus infection, adults and children including neonates.",
        administration: "Single intravenous infusion, 50 mg/kg of each antibody.",
        status: "Licensed (US FDA, Oct 2020 — first-ever Ebola treatment approval); WHO strong recommendation",
        links: [
          { label: "Regeneron — FDA approval of Inmazeb (Oct 2020)", url: "https://investor.regeneron.com/node/24386/pdf" },
          { label: "Markham — REGN-EB3 first approval (2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7799152" },
          { label: "ChEMBL — atoltivimab", url: "https://www.ebi.ac.uk/chembl/explore/compound/CHEMBL4298183" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        targets: ["ebola-glycoprotein"],
        trials: ["palme-ebola-trial"],
        institutions: ["who"],
        stats: [
          { label: "PALM trial size", value: "681 patients", number: 681, unit: "patients", year: 2019, geography: "Democratic Republic of the Congo", source: { label: "Regeneron — FDA approval of Inmazeb (Oct 2020)", url: "https://investor.regeneron.com/node/24386/pdf" } },
          { label: "Approval", value: "14 Oct 2020 — first FDA-approved Ebola treatment" },
        ],
      },
    ],
  },
  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "ebola-rdt-oraquick",
        name: "OraQuick Ebola rapid antigen test",
        tldr: "The first licensed rapid test for Ebola — a 30-minute strip for blood and cadaveric oral fluid, with a 2026 successor covering all ebolaviruses.",
        summary:
          "Until 2019 every Ebola diagnosis required a molecular laboratory, which outbreaks often had to build from tents. The OraQuick Ebola Rapid Antigen Test, a lateral-flow strip detecting Ebolavirus-genus antigens in fingerstick or venous blood and in cadaveric oral fluid, became the first Ebola rapid test the US FDA allowed to market (De Novo, 10 October 2019). Results are presumptive and must be confirmed by RT-PCR; clinical sensitivity was 84% in patient blood and 97% in cadaveric buccal swabs, with specificity above 98%. Its genus-level design — it does not distinguish Zaire, Sudan, Bundibugyo or Taï Forest viruses — became an asset in 2026: the OraQuick Ebola 2.0 version, under emergency authorisation, explicitly covers all four, and was positioned for the Bundibugyo response alongside Cepheid's donated Xpert Hemorrhagic Fever cartridges on the existing GeneXpert footprint.",
        ...R,
        method: "Lateral-flow immunoassay for Ebolavirus-genus antigens",
        sampleType: "Fingerstick or venous whole blood; cadaveric oral fluid",
        turnaround: "30 minutes, visually read",
        performance:
          "Presumptive only — every result must be confirmed by RT-PCR. Sensitivity 84% in patient blood, 97% in cadaveric swabs; specificity 98–100%. Does not distinguish virus species.",
        availability: "Licensed in the US since 2019; deployed in outbreak settings where molecular testing is unavailable",
        stage: "Regulatory achieved (US FDA De Novo 2019); 2.0 version under emergency authorisation 2026",
        links: [
          { label: "FDA — first rapid Ebola test allowed to market (Oct 2019)", url: "https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/ebola" },
          { label: "Wang et al. — clinical evaluation of OraQuick Ebola (2023)", url: "https://pubmed.ncbi.nlm.nih.gov/36851550" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        diagnostics: ["ebola-rt-pcr", "molecular-pcr"],
        institutions: ["who"],
        bottlenecks: ["diagnostics-gap", "outbreak-response"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Time to result", value: "30 minutes" },
          { label: "Cadaveric swab sensitivity", value: "97.1%", source: { label: "Wang et al. 2023", url: "https://pubmed.ncbi.nlm.nih.gov/36851550" } },
        ],
      },
    ],
  },
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "ervebo-bundibugyo-ring-trial",
        name: "Ervebo cross-protection ring trial for Bundibugyo virus (DRC, 2026)",
        tldr: "A Phase 3 ring trial asking whether the Zaire Ebola vaccine works against Bundibugyo — the fastest route to a countermeasure the outbreak does not have.",
        summary:
          "With no licensed vaccine for Bundibugyo virus and thousands of cases accumulating, WHO's vaccine advisory group (TAG-CVP) reviewed preliminary animal data suggesting Ervebo partially cross-protects against Bundibugyo — particularly against death — and on 31 July 2026 recommended prioritising Ervebo in a randomised clinical trial rather than using it outside research. A Phase 3 ring-vaccination trial of Ervebo against Bundibugyo virus disease launched in the DRC in August 2026, alongside a post-exposure-prophylaxis medicine trial in Ituri province. WHO issued emergency guidance on Ervebo use during Bundibugyo outbreaks on 31 August 2026 and a Bundibugyo vaccine target product profile in July 2026, while CEPI funded a fifth Bundibugyo-specific candidate. Efficacy is unproven and results are months away; a Bundibugyo-specific vaccine remains the preferred option.",
        ...R,
        phase: "Phase 3 ring-vaccination trial",
        status: "Launched August 2026; results pending",
        sponsor: "DRC national programme with WHO and partners",
        intervention: "Ervebo (rVSV-ZEBOV) in rings around Bundibugyo cases, randomised",
        result: "Pending; cross-protection suggested only by preliminary animal data so far.",
        registry: "Protocol under WHO CORE framework for filovirus trials",
        links: [
          { label: "UN News — new Ebola vaccine trial launches in DRC (Aug 2026)", url: "https://news.un.org/en/story/2026/08/1168072" },
          { label: "UN News — hopes raised over new vaccine as child deaths pass 300 (Aug 2026)", url: "https://news.un.org/en/story/2026/08/1168100" },
          { label: "C&EN — Ebola vaccine enters Phase 3 trial (Aug 2026)", url: "https://cen.acs.org/pharmaceuticals/vaccines/ebola-vaccine-trial-drc/104/web/2026/08" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        technologies: ["ring-vaccination", "ebola-vaccines"],
        institutions: ["who", "cepi", "inrb", "gavi"],
        countries: ["dr-congo"],
        stats: [
          { label: "Context", value: "6,778 confirmed Bundibugyo cases by 7 Sep 2026", source: { label: "WHO — Bundibugyo DON (Sep 2026)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON617" } },
        ],
      },
    ],
  },
  /* ------------------------------- guidelines ----------------------------- */
  {
    kind: "guidelines",
    records: [
      {
        id: "who-bvd-vaccine-guidance-2026",
        name: "WHO Bundibugyo vaccine guidance and target product profile (2026)",
        tldr: "The emergency rulebook for using the Zaire vaccine against a virus it was never licensed for — plus the specification for the Bundibugyo vaccine the world needs.",
        summary:
          "Faced with a PHEIC-grade Bundibugyo outbreak and no licensed countermeasure, WHO produced two documents in mid-2026. The target product profile for Bundibugyo virus disease vaccines (14 July 2026) specifies what a purpose-built vaccine must achieve. The emergency guidance on the use of licensed Ebola vaccine during Bundibugyo outbreaks (31 August 2026) sets the conditions for using Ervebo — the only licensed Ebola vaccine — against Bundibugyo: inside carefully designed research such as the Phase 3 ring trial, so that cross-protection is actually measured rather than assumed. Together with the IHR Emergency Committee's temporary recommendations (August 2026), they are the policy scaffolding for responding to a filovirus with borrowed tools.",
        ...R,
        issuer: "WHO",
        issued: "July–August 2026",
        status: "Current (emergency)",
        scope: "Bundibugyo virus disease vaccines and emergency use of Ervebo",
        recommendation:
          "Use Ervebo against Bundibugyo only inside research that measures efficacy (ring trial first); develop Bundibugyo-specific vaccines to the July 2026 target product profile as the preferred option.",
        links: [
          { label: "WHO — emergency guidance on Ervebo use during Bundibugyo outbreaks (Aug 2026)", url: "https://www.who.int/countries/cod" },
          { label: "WHO — Ebola outbreak DRC 2026 situation page", url: "https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        trials: ["ervebo-bundibugyo-ring-trial"],
        technologies: ["ebola-vaccines", "ring-vaccination"],
        institutions: ["who", "cepi", "gavi"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "close-the-filovirus-species-gap",
        name: "Close the filovirus species gap: licensed Sudan and Bundibugyo countermeasures",
        tldr: "Finish the job Ervebo started — licensed vaccines and antibodies for the two ebolaviruses that still have none.",
        summary:
          "Every licensed filovirus countermeasure covers one of at least four human-pathogenic ebolaviruses. Sudan virus killed 77 people in Uganda in 2022–23 with nothing to offer but supportive care; Bundibugyo virus then caused the largest filovirus outbreak on record in 2026. The pieces exist: Sabin's ChAd3-SUDV (BARDA-funded, 100,000 doses contracted), IAVI's rVSV-SUDV (trialled in Tokomeza), five Bundibugyo candidates under CEPI, MappBio Sudan monoclonals, and the CORE trial protocols that let efficacy be tested inside an outbreak. What is missing is pre-agreed trial readiness — ethics pre-approval, prepositioned doses, ring-trial teams on standby — so the next outbreak's 14 cases are enough for an answer instead of ending the trial before it starts. The 2026 PHEIC is the forcing event; the idea is to treat species-gap products with the urgency the Zaire products got in 2014–2016.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pre-approve generic ring-trial protocols and preposition Sudan/Bundibugyo candidates in Uganda, DRC and South Sudan; measure time from outbreak declaration to first participant enrolled in the next outbreak.",
        owner: "WHO R&D Blueprint with CEPI, BARDA, EDCTP, Makerere University, UVRI and INRB",
        links: [
          { label: "Sabin — $35M BARDA award for Sudan and Marburg vaccines (2023)", url: "https://www.sabin.org/resources/sabin-receives-35-million-for-ebola-sudan-marburg-vaccine-production/" },
          { label: "WHO — candidate vaccine and treatments enabled for Uganda (Jan 2025)", url: "https://www.who.int/news/item/31-01-2025-who-and-partners-enable-access-to-candidate-vaccine-and-treatments-for-outbreak-of-sudan-ebola-virus-disease-in-uganda" },
          { label: "G-FINDER EID scope — Ebola tracked since the 2015 survey", url: "https://gfinderdata.impactglobalhealth.org/assets/media/pdf/EID_R&D_scope.pdf" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        trials: ["tomokeza-sudan-ebola", "ervebo-bundibugyo-ring-trial"],
        technologies: ["ebola-vaccines", "ring-vaccination"],
        institutions: ["who", "cepi", "inrb", "gavi"],
        countries: ["uganda", "dr-congo", "south-sudan"],
        bottlenecks: ["vaccine-gap", "outbreak-response", "funding-gap"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Gap", value: "0 licensed countermeasures for Sudan or Bundibugyo virus" },
          { label: "Precedent", value: "Zaire went from nothing to vaccine + 2 treatments in 5 years (2014–2020)" },
        ],
      },
      {
        id: "survivor-persistence-watch",
        name: "Survivor persistence watch: stop outbreaks that restart from the cured",
        tldr: "Treat male survivors as a known transmission reservoir — semen screening, vaccination and stigma-free follow-up — because flare-ups now come from persistence, not just spillover.",
        summary:
          "Sequencing proved the 2021 Guinea flare-up came from virus persisting in a survivor's semen for more than 500 days, and a 2021 DRC outbreak traced to a 2018–20 survivor's relapse — outbreaks restarting without any new spillover. With tens of thousands of survivors across West and Central Africa, persistence is a standing source of re-emergence that case-counting misses entirely. A standing programme — semen RNA screening with supported abstinence or barrier provision until clearance, prioritised vaccination of survivors and their partners, longitudinal clinics that manage post-Ebola sequelae (which is what brings survivors back voluntarily), and sequencing of every new index case against survivor registries — would convert the most sensitive population from a blind spot into the surveillance network's outer ring. It must be built with survivor associations, because stigma is what keeps semen samples from being given.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Enrol male survivors in Guinea, DRC and Uganda into quarterly semen screening plus vaccination; measure clearance documentation rate and time from any flare-up index case to persistence-vs-spillover attribution by sequencing.",
        owner: "National survivor programmes with WHO, MSF and survivor associations",
        links: [
          { label: "Diallo et al. — Ebola resurgence in Guinea linked to survivor semen persistence (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27585800" },
          { label: "WHO — Ebola disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/ebola-disease" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        technologies: ["genomic-surveillance", "ebola-vaccines", "mhealth-surveillance", "community-health-workers"],
        institutions: ["who", "msf", "inrb", "cdc"],
        countries: ["guinea", "dr-congo", "uganda"],
        bottlenecks: ["surveillance-data-gap", "stigma-and-disability"],
        terms: ["elimination", "eot", "one-health"],
        stats: [
          { label: "Proof", value: "2021 Guinea flare-up from >500-day semen persistence" },
          { label: "Population", value: "Tens of thousands of survivors under follow-up" },
        ],
      },
      {
        id: "decentralized-filovirus-testing",
        name: "Decentralised filovirus testing on the GeneXpert footprint",
        tldr: "Put confirmatory-quality molecular testing in every treatment centre using the TB machines already there — plus RDT triage where even those cannot reach.",
        summary:
          "Ebola diagnosis still depends on reference laboratories, while the machines that could replace them are already installed: GeneXpert systems blanket DRC, Uganda, South Sudan and Rwanda for tuberculosis. Cepheid's Xpert Hemorrhagic Fever cartridge (Zaire, Sudan, Taï Forest, Bundibugyo, Marburg, Lassa) plus the June 2026 donation of cartridges to DRC and Uganda showed the model — run filovirus testing on the TB footprint, with OraQuick RDTs (30 minutes, blood and cadaveric swabs) as triage where no instrument exists and RT-PCR confirmation where it does. The 2026 Bundibugyo daily case rate exceeded West Africa's early pace partly because expanded testing found cases faster; making that capacity permanent, with pre-agreed sample-transport and result-reporting protocols, is the cheapest way to shorten every future outbreak's detection delay.",
        ...R,
        stage: "Pilot",
        proposedTest:
          "Equip 50 treatment centres and district labs across DRC and Uganda with Xpert Hemorrhagic Fever cartridges plus OraQuick triage; measure median symptom-onset-to-confirmation time before and after.",
        owner: "National laboratories with WHO, Africa CDC, FIND and Cepheid",
        links: [
          { label: "Cepheid — Bundibugyo outbreak diagnostic response (2026)", url: "https://www.cepheid.com/en-NO/insights/insight-hub/community-and-global-health/2026/08/ebola-bundibugyo-outbreak-updates.html" },
          { label: "FDA — first rapid Ebola test allowed to market (Oct 2019)", url: "https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/ebola" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        diagnostics: ["ebola-rt-pcr", "ebola-rdt-oraquick"],
        technologies: ["genomic-surveillance", "mhealth-surveillance", "gene-cartridge-test"],
        institutions: ["who", "africa-cdc", "inrb", "cdc"],
        countries: ["dr-congo", "uganda", "south-sudan"],
        bottlenecks: ["diagnostics-gap", "outbreak-response", "funding-gap"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Footprint", value: "GeneXpert installed across DRC, Uganda, South Sudan, Rwanda" },
          { label: "Triage", value: "30-minute RDT; confirmation by cartridge PCR" },
        ],
      },
    ],
  },
  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "sabue-mulangu",
        name: "Sabue Mulangu",
        tldr: "The Congolese physician who led the PALM trial — the study that gave Ebola its first proven treatments — from inside the outbreak.",
        summary:
          "Sabue Mulangu, an infectious-disease physician at the University of Kinshasa and the DRC National Institute of Biomedical Research, was the first author and national lead of the PALM randomised trial, which compared four Ebola treatments during the 2018–2020 outbreak and identified ansuvimab and REGN-EB3 as life-saving. Running a rigorous multi-arm trial in treatment centres in an active conflict zone — where centres were attacked and health workers killed — set the template for epidemic research: African principal investigators, international support, and interim analyses that stop the trial the moment an answer appears. He continues to lead Ebola and filovirus clinical research in the DRC.",
        ...R,
        era: "Contemporary",
        role: "Physician and clinical researcher; University of Kinshasa and INRB, Democratic Republic of the Congo",
        knownFor: "Leading the PALM trial that proved the first Ebola treatments.",
        links: [
          { label: "Mulangu et al. — randomised trial of Ebola therapeutics, PALM (NEJM 2019)", url: "https://pubmed.ncbi.nlm.nih.gov/31774950" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        drugs: ["ansuvimab", "inmazeb"],
        trials: ["palme-ebola-trial"],
        institutions: ["inrb"],
        countries: ["dr-congo"],
        terms: ["elimination", "eot"],
      },
      {
        id: "placide-mbala",
        name: "Placide Mbala-Kingebeni",
        tldr: "The Congolese genomic epidemiologist whose sequencing traces each Ebola outbreak to spillover, survivor — or importation — and who co-led the first Bundibugyo treatment report.",
        summary:
          "Placide Mbala-Kingebeni leads pathogen genomics at the DRC National Institute of Biomedical Research, where full-genome sequencing of every outbreak's index cases has become routine under his watch — including the finding that the 2025 Kasai outbreak was a fresh zoonotic spillover. His 66-paper Ebola publication record spans reservoir ecology, molecular epidemiology and clinical research, and in August 2026 he co-authored the first report of a Bundibugyo virus disease case treated with monoclonal antibodies plus remdesivir — the earliest clinical signal for a Bundibugyo therapeutic. He represents the shift this corpus argues for: the sequencing that decides what an outbreak is now happens in Kinshasa, not in Atlanta or Hamburg.",
        ...R,
        era: "Contemporary",
        role: "Genomic epidemiologist; National Institute of Biomedical Research, Kinshasa",
        knownFor: "Ebola genomic epidemiology in the DRC; first Bundibugyo mAb-plus-remdesivir case report.",
        links: [
          { label: "Bundibugyo case treated with mAbs and remdesivir (Nat Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42742180" },
          { label: "WHO — Ebola virus disease, DRC Kasai (DON, Dec 2025)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2025-DON589" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        technologies: ["genomic-surveillance"],
        institutions: ["inrb"],
        countries: ["dr-congo"],
        terms: ["elimination", "eot", "one-health"],
      },
    ],
  },
  /* ------------------------------ institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "inrb",
        name: "Institut National de Recherche Biomédicale (INRB)",
        tldr: "The Kinshasa institute that confirms every DRC Ebola outbreak, sequences its viruses and runs its trials.",
        summary:
          "The INRB is the Democratic Republic of the Congo's national biomedical research institute and the laboratory backbone of every Ebola response in the country: its Kinshasa laboratory confirmed the 2025 Kasai outbreak's samples as Zaire ebolavirus within days, it runs the full-genome sequencing that distinguishes spillover from survivor relapse, and its clinicians co-led the PALM trial. Led historically by Jean-Jacques Muyembe-Tamfum and powered by researchers including Sabue Mulangu and Placide Mbala-Kingebeni, it is the institution that makes African-led filovirus science — from the Tokomeza model in Uganda to the 2026 Bundibugyo trials — possible. Its BSL-3/4-adjacent capacity in a low-resource setting is the capability the rest of the continent is now building toward.",
        ...R,
        institutionType: "National research institute",
        country: "Democratic Republic of the Congo",
        city: "Kinshasa",
        focus: "Filovirus reference diagnostics, genomic epidemiology and clinical trials; national outbreak confirmation.",
        links: [
          { label: "WHO AFRO — DRC declares Ebola outbreak in Kasai (Sep 2025)", url: "https://www.afro.who.int/countries/democratic-republic-congo/news/democratic-republic-congo-declares-ebola-virus-disease" },
          { label: "Mulangu et al. — PALM trial (NEJM 2019)", url: "https://pubmed.ncbi.nlm.nih.gov/31774950" },
        ],
        diseases: ["ebola"],
        pathogens: ["ebolavirus"],
        drugs: ["ansuvimab", "inmazeb"],
        trials: ["palme-ebola-trial", "ervebo-bundibugyo-ring-trial"],
        diagnostics: ["ebola-rt-pcr"],
        technologies: ["genomic-surveillance", "ebola-vaccines"],
        institutions: ["who", "africa-cdc"],
        countries: ["dr-congo"],
        terms: ["elimination", "one-health"],
        stats: [
          { label: "Role", value: "Confirms and sequences every DRC Ebola outbreak" },
        ],
      },
    ],
  },
];
