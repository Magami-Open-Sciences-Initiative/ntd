import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Chagas 2026 fact-check additions: the drugs, targets and trials that the
 * 2026 source cross-check (WHO April 2026 fact sheet, DNDi/AN2 June 2026 data,
 * FEXI-12/MULTIBENZ publications, G-FINDER 2024) showed were missing from the
 * Chagas graph. Ordinary records of their kind, kept in one file so the review
 * is visible as a set; wired into `index.ts` alongside ADDITIONS.
 */
export const CHAGAS_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "an2-502998",
        name: "AN2-502998",
        tldr: "An oral benzoxaborole CPSF3 inhibitor — the first Chagas candidate to cure naturally infected primates — heading for Phase II proof-of-concept in late 2026.",
        summary:
          "AN2-502998 (formerly AN15368) is a boron-based small molecule from AN2 Therapeutics that inhibits cleavage and polyadenylation specificity factor 3 (CPSF3) in Trypanosoma cruzi — the same RNA-processing target that acoziborole hits in sleeping sickness. In June 2026 AN2 reported 100% parasite elimination after 28 days of treatment in non-human primates with naturally acquired chronic T. cruzi infection, at exposures attainable in humans with no dose-limiting toxicities in the Phase 1 first-in-human study. DNDi joined development in July 2025, contributing its Latin American trial network, and a Phase II proof-of-concept study is planned to start late in 2026. There are no FDA-approved treatments for adults with chronic Chagas disease, so the programme carries priority-review-voucher eligibility.",
        ...R,
        drugClass: "Benzoxaborole (CPSF3 inhibitor)",
        mechanism:
          "Inhibits T. cruzi cleavage and polyadenylation specificity factor 3 (CPSF3), shutting down parasite mRNA processing.",
        indication: "Chronic Chagas disease (investigational).",
        administration: "Oral; 28-day course used in the primate efficacy study.",
        status: "Phase 1 complete (June 2026); Phase II proof-of-concept planned late 2026",
        links: [
          { label: "AN2 — positive enabling data for oral AN2-502998 (June 2026)", url: "https://investor.an2therapeutics.com/news-releases/news-release-details/an2-therapeutics-reports-positive-enabling-data-supporting" },
          { label: "DNDi — AN2 collaboration on AN2-502998 (July 2025)", url: "https://dndi.org/press-releases/2025/an2-therapeutics-and-dndi-collaborate-on-clinical-development-of-promising-new-oral-compound-to-treat-chronic-chagas-disease" },
        ],
        diseases: ["chagas"],
        pathogens: ["trypanosoma-cruzi"],
        targets: ["tc-cpsf3"],
        trials: ["an2-502998-phase2"],
        technologies: ["open-science-drug-discovery", "ai-drug-discovery"],
        institutions: ["dndi"],
        terms: ["pdp"],
        stats: [
          { label: "Primate efficacy", value: "100% parasite elimination", note: "28-day treatment of naturally infected primates, sustained through 4 months of follow-up", source: { label: "AN2 — enabling data (June 2026)", url: "https://investor.an2therapeutics.com/news-releases/news-release-details/an2-therapeutics-reports-positive-enabling-data-supporting" } },
          { label: "Phase 1 safety", value: "No dose-limiting toxicities", note: "at exposures consistent with primate efficacy thresholds" },
        ],
      },
      {
        id: "iid432",
        name: "IID432",
        tldr: "A cyanotriazole inhibitor of the Chagas parasite's topoisomerase II that delivered a single-dose sterile cure in a chronic mouse model.",
        summary:
          "IID432 is a Novartis cyanotriazole optimised for Chagas disease from a phenotypic kinetoplastid screen. It covalently engages a parasite-specific cysteine (Cys477) of T. cruzi topoisomerase II, trapping the enzyme on DNA while sparing the human TOP2A, with an EC50 of 8 nM. In a bioluminescent chronic mouse model a single oral dose of 25 mg/kg achieved sterile cure with no recrudescence after cyclophosphamide immunosuppression — reported as the first single-dose cure in a chronic T. cruzi model. Medicinal-chemistry optimisation removed the first-generation liabilities (lymphopenia, neutrophilia from sphingolipid-pathway modulation). It remains preclinical, but it is the most advanced new-chemical-class candidate behind AN2-502998.",
        ...R,
        drugClass: "Cyanotriazole (topoisomerase II inhibitor)",
        mechanism:
          "Covalent inhibition of T. cruzi topoisomerase II via a parasite-specific cysteine, stabilising the cleavage complex and causing parasite-selective DNA damage.",
        indication: "Chronic Chagas disease (preclinical).",
        administration: "Oral (preclinical).",
        status: "Preclinical; single-dose sterile cure in chronic mouse model",
        links: [
          { label: "Discovery of IID432 for Chagas disease (J Med Chem 2026)", url: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.5c02459" },
          { label: "IID432 single-dose clearance in chronic Chagas model (PNAS 2026)", url: "https://researchonline.lshtm.ac.uk/id/eprint/4683118/" },
        ],
        diseases: ["chagas"],
        pathogens: ["trypanosoma-cruzi"],
        targets: ["tc-topoisomerase-ii"],
        technologies: ["ai-drug-discovery", "open-science-drug-discovery"],
        stats: [
          { label: "Potency vs T. cruzi", value: "8 nM", number: 8, unit: "nM", note: "EC50", source: { label: "J Med Chem 2026", url: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.5c02459" } },
          { label: "Chronic-model cure", value: "Sterile cure from a single 25 mg/kg oral dose", note: "no recrudescence after 3 rounds of immunosuppression" },
        ],
      },
    ],
  },

  /* ------------------------------- targets ------------------------------- */
  {
    kind: "targets",
    records: [
      {
        id: "tc-cpsf3",
        name: "T. cruzi cleavage and polyadenylation specificity factor 3 (TcCPSF3)",
        tldr: "The mRNA-processing enzyme the Chagas candidate AN2-502998 blocks — the same target class that cured sleeping sickness with one dose.",
        summary:
          "CPSF3 is part of the machinery that matures messenger RNA. Acoziborole's cure of Gambiense sleeping sickness was traced to CPSF3 inhibition, and AN2-502998 applies the same benzoxaborole mechanism to Trypanosoma cruzi: 28 days of treatment eliminated the parasite in 100% of naturally infected primates. That makes TcCPSF3 the first Chagas target in decades with primate-level curative validation behind it, and the basis of the Phase II proof-of-concept study planned for late 2026.",
        ...R,
        targetType: "RNA-processing protein",
        organism: "Trypanosoma cruzi",
        rationale:
          "Benzoxaborole inhibition of the orthologous enzyme cured sleeping sickness; the T. cruzi orthologue now has primate-level curative validation via AN2-502998.",
        druggability:
          "Demonstrated by AN2-502998: orally available and curative in primates at clinically attainable exposures.",
        knownLigands: "AN2-502998 (AN15368) and related benzoxaboroles; acoziborole validates the class in T. brucei.",
        proteinAbsent:
          "No T. cruzi CPSF3 entry is usable: UniProt annotates only other cleavage-and-polyadenylation subunits (2, 5, 30 kDa) plus unnamed putatives, so annotation alone cannot pin the AN2-502998-bound orthologue to an accession.",
        links: [
          { label: "AN2 — AN2-502998 enabling data (June 2026)", url: "https://investor.an2therapeutics.com/news-releases/news-release-details/an2-therapeutics-reports-positive-enabling-data-supporting" },
          { label: "DNDi — AN2 collaboration (July 2025)", url: "https://dndi.org/press-releases/2025/an2-therapeutics-and-dndi-collaborate-on-clinical-development-of-promising-new-oral-compound-to-treat-chronic-chagas-disease" },
        ],
        pathogens: ["trypanosoma-cruzi"],
        diseases: ["chagas"],
        drugs: ["an2-502998"],
        technologies: ["ai-drug-discovery", "open-science-drug-discovery"],
        stats: [
          { label: "Validated by", value: "AN2-502998", note: "100% elimination in naturally infected primates" },
        ],
      },
      {
        id: "tc-topoisomerase-ii",
        name: "T. cruzi topoisomerase II (TcTopoII)",
        tldr: "The DNA-untangling enzyme a new cyanotriazole traps on parasite DNA, curing chronic mouse infection with one dose.",
        summary:
          "Topoisomerase II relieves torsional stress during DNA replication. IID432 stabilises the T. cruzi enzyme–DNA cleavage complex by covalently engaging Cys477, a cysteine absent from the human TOP2A, giving parasite selectivity with no off-target activity on human topoisomerases. A >150-fold potency shift in CRISPR TcTopoII mutants confirms the mechanism. It is the first Chagas target with a reported single-dose sterile cure in a chronic model.",
        ...R,
        targetType: "Enzyme (topoisomerase)",
        organism: "Trypanosoma cruzi",
        rationale:
          "Essential for parasite DNA replication, with a parasite-specific cysteine that allows covalent selectivity over the human enzyme.",
        druggability:
          "Preclinical: potent (EC50 8 nM), orally bioavailable, selective over human TOP2A; no clinical candidate yet.",
        knownLigands: "IID432 and the cyanotriazole series.",
        proteinAbsent:
          "Several T. cruzi topoisomerase II paralogs are annotated and the IID432 paper models the complex on human TOP2A (PDB 5GWK) rather than a parasite structure, so the bound isoform cannot be pinned to a UniProt accession.",
        links: [
          { label: "Discovery of IID432 (J Med Chem 2026)", url: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.5c02459" },
        ],
        pathogens: ["trypanosoma-cruzi"],
        diseases: ["chagas"],
        drugs: ["iid432"],
        technologies: ["ai-drug-discovery"],
        stats: [
          { label: "Selectivity handle", value: "Cys477", note: "parasite-specific cysteine; >150-fold shift in CRISPR mutants" },
          { label: "Status", value: "Preclinical" },
        ],
      },
      {
        id: "tc-impdh",
        name: "T. cruzi inosine monophosphate dehydrogenase (TcIMPDH)",
        tldr: "A guanine-nucleotide salvage enzyme proposed as a repurposing target — cancer IMPDH inhibitors already kill T. cruzi.",
        summary:
          "Inosine monophosphate dehydrogenase controls guanine nucleotide synthesis. A 2026 study showed the cancer drugs AVN-944 and merimepodib potently inhibit TcIMPDH with significant antiparasitic activity against T. cruzi. As approved-or-advanced molecules with known safety, they are repurposing candidates rather than new chemical entities — the cheapest route to a Chagas trial if in-vivo efficacy holds.",
        ...R,
        targetType: "Enzyme (dehydrogenase)",
        organism: "Trypanosoma cruzi",
        rationale:
          "Essential guanine-nucleotide salvage step; human-advanced inhibitors already exist and cross-react with the parasite enzyme.",
        druggability:
          "Repurposing-stage: AVN-944 and merimepodib are potent TcIMPDH inhibitors with antiparasitic activity; in-vivo cure data pending.",
        knownLigands: "AVN-944, merimepodib.",
        proteinAbsent:
          "Two identical-length CL Brener alleles (Q4DM82, Q4CUG6) plus strain variants are annotated, and the repurposing paper names no accession — so choosing one would be arbitrary.",
        links: [
          { label: "Exploring T. cruzi IMPDH as a promising target (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12959148" },
        ],
        pathogens: ["trypanosoma-cruzi"],
        diseases: ["chagas"],
        technologies: ["drug-repurposing", "ai-drug-discovery"],
        stats: [
          { label: "Status", value: "Repurposing-stage", note: "in-vitro potency plus antiparasitic activity; no clinical candidate yet" },
        ],
      },
      {
        id: "tc-lysrs",
        name: "T. cruzi lysyl-tRNA synthetase (TcLysRS)",
        tldr: "A protein-synthesis enzyme validated by a chromene inhibitor with oral efficacy in an acute mouse model.",
        summary:
          "Aminoacyl-tRNA synthetases are essential, druggable antiparasitic targets with a track record in malaria (e.g. febrifugine-halofuginone analogues). A 2026 study repositioned a chromene-based LysRS inhibitor developed for Plasmodium and Cryptosporidium into T. cruzi: compound 5 showed an EC50 of 0.9 µM against intracellular amastigotes with low host-cell toxicity and oral efficacy in an acute murine model, suppressing parasitemia and reducing tissue burden. It provides an independent chemical and structural validation of TcLysRS alongside the proteasome and topoisomerase II programmes.",
        ...R,
        targetType: "Enzyme (aminoacyl-tRNA synthetase)",
        organism: "Trypanosoma cruzi",
        rationale:
          "Essential for parasite protein synthesis; inhibitor showed oral in-vivo efficacy, and the class is precedented across parasites.",
        druggability:
          "Early: one chromene chemotype with acute-model efficacy and favourable oral bioavailability; no clinical candidate yet.",
        knownLigands: "Chromene-based compound 5 (unnamed).",
        proteinAbsent:
          "The inhibitor paper reports work in the Dm28c strain without naming a UniProt accession, and strain-specific entries cannot be chosen arbitrarily.",
        links: [
          { label: "Chromene LysRS inhibitor with in-vivo efficacy (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576447" },
        ],
        pathogens: ["trypanosoma-cruzi"],
        diseases: ["chagas"],
        technologies: ["drug-repurposing", "ai-drug-discovery"],
        stats: [
          { label: "Potency", value: "EC50 0.9 µM", note: "intracellular amastigotes", source: { label: "LysRS inhibitor study (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576447" } },
          { label: "Status", value: "Acute-model oral efficacy", note: "suppressed parasitemia and tissue burden" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "rhodes-rubi",
        name: "Research Unit in Bioinformatics (RUBi), Rhodes University",
        tldr: "The South African bioinformatics unit repurposing metabolic inhibitors toward T. cruzi.",
        summary:
          "RUBi, directed by Özlem Tastan Bishop at Rhodes University in Makhanda, South Africa, applies structural bioinformatics to neglected-disease drug discovery. Its 2026 work with the Swiss Tropical and Public Health Institute repurposed inhibitors of plasmodial aspartate transcarbamoylase toward Trypanosoma cruzi — a case of African computational capacity feeding the Chagas pipeline directly rather than through a northern intermediary.",
        ...R,
        institutionType: "University research unit",
        country: "South Africa",
        city: "Makhanda",
        focus: "Structural bioinformatics and computational drug discovery for neglected diseases.",
        links: [
          { label: "RUBi — people", url: "https://rubi.ru.ac.za/people/academic" },
          { label: "Repurposing plasmodial ATC inhibitors toward T. cruzi (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41886248" },
        ],
        diseases: ["chagas"],
        pathogens: ["trypanosoma-cruzi"],
        technologies: ["ai-drug-discovery", "drug-repurposing"],
      },
      {
        id: "nwu-pharmacen",
        name: "Centre of Excellence for Pharmaceutical Sciences (Pharmacen), North-West University",
        tldr: "The South African medicinal-chemistry group synthesising nitroimidazole hybrids against kinetoplastids.",
        summary:
          "Pharmacen at North-West University in Potchefstroom, South Africa — including the group of David D. N'Da — designs and synthesises nitroheterocyclic hybrids against kinetoplastid parasites. Its 2026 5-nitroimidazole-triazole series showed in-vitro anti-kinetoplastid activity, keeping a nitro-based Chagas chemistry alive on the African continent after fexinidazole's failure closed that line at DNDi.",
        ...R,
        institutionType: "University research centre",
        country: "South Africa",
        city: "Potchefstroom",
        focus: "Medicinal chemistry of anti-kinetoplastid agents.",
        links: [
          { label: "Nitroimidazole-triazole anti-kinetoplastids (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13370063" },
        ],
        diseases: ["chagas", "hat"],
        pathogens: ["trypanosoma-cruzi", "trypanosoma-brucei"],
        technologies: ["open-science-drug-discovery"],
      },
      {
        id: "unn-pharmacy",
        name: "Faculty of Pharmaceutical Sciences, University of Nigeria Nsukka",
        tldr: "The Nigerian group working on nano-delivery to rescue toxic or poorly absorbed antiparasitics.",
        summary:
          "The drug-delivery group of Anthony Attama and Adaeze Onugwu at the University of Nigeria Nsukka works on nanotechnology carriers for neglected protozoan diseases — the formulation science that could shorten benznidazole courses or salvage toxic candidates. Their 2026 review maps current advances and translational bottlenecks for nano-enabled antiprotozoals, a perspective from the continent that carries the largest NTD burden but almost no Chagas formulation work.",
        ...R,
        institutionType: "University faculty",
        country: "Nigeria",
        city: "Nsukka",
        focus: "Nanotechnology-based drug delivery for neglected protozoan diseases.",
        links: [
          { label: "Nanotechnology for neglected protozoan diseases (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42303167" },
        ],
        diseases: ["chagas"],
        technologies: ["drug-repurposing"],
      },
      {
        id: "vall-dhebron-prosics",
        name: "Vall d'Hebron / PROSICS Chagas programme, Barcelona",
        tldr: "The Spanish hospital group running the benznidazole short-course trials that could halve treatment duration.",
        summary:
          "The Infectious Diseases Department of Vall d'Hebron University Hospital with PROSICS Barcelona, led by Israel Molina, is the clinical engine of the benznidazole optimisation programme: senior authors of MULTIBENZ (2024), drivers of NuestroBen and BENLATINO, and authors of the widely cited Lancet Chagas review. As a non-endemic-country group treating mostly Latin American migrants, it is also the model for how screening works where the disease is imported rather than transmitted.",
        ...R,
        institutionType: "Hospital research programme",
        country: "Spain",
        city: "Barcelona",
        focus: "Chagas clinical trials, short-course benznidazole regimens, migrant screening.",
        links: [
          { label: "MULTIBENZ (Lancet Infect Dis 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218195" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        trials: ["multibenz-2024", "nuestroben-short-bzn", "benlatino-short-bzn"],
      },
      {
        id: "isglobal-chagas",
        name: "ISGlobal Chagas Initiative, Barcelona",
        tldr: "The research group that ran FEXI-12 and led the 2024 vaccines-and-therapies review.",
        summary:
          "The Barcelona Institute for Global Health's Chagas Initiative, with Maria-Jesus Pinazo and Julio Alonso-Padilla, ran the FEXI-12 fexinidazole trial that closed the azole-adjacent chapter, and led the 2024 Lancet Microbe review of Chagas vaccines and therapies. It bridges Latin American field sites and European trial infrastructure — the partnership shape the AN2 Phase 2 will reuse.",
        ...R,
        institutionType: "Global health research institute",
        country: "Spain",
        city: "Barcelona",
        focus: "Chagas clinical research, diagnostics, and therapy reviews.",
        links: [
          { label: "FEXI-12 (Lancet Infect Dis 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218194" },
        ],
        diseases: ["chagas"],
        drugs: ["fexinidazole"],
        trials: ["fexinidazole-chagas"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "ozlem-tastan-bishop",
        name: "Özlem Tastan Bishop",
        tldr: "The Rhodes University bioinformatician bringing African computational drug discovery to Chagas targets.",
        summary:
          "Özlem Tastan Bishop directs the Research Unit in Bioinformatics (RUBi) at Rhodes University, South Africa, and built the continent's first MSc programme in bioinformatics. Her group applies structural bioinformatics to neglected-disease targets, including the 2026 repurposing of plasmodial aspartate transcarbamoylase inhibitors toward Trypanosoma cruzi with the Swiss TPH. She represents the structural-computation capacity the Chagas pipeline needs for its new targets (CPSF3, topoisomerase II, IMPDH) — based in Africa rather than consulted from outside it.",
        ...R,
        era: "Contemporary",
        role: "Professor and Director, Research Unit in Bioinformatics (RUBi), Rhodes University",
        knownFor: "Structural bioinformatics for neglected-disease drug discovery; T. cruzi inhibitor repurposing.",
        links: [
          { label: "RUBi — people", url: "https://rubi.ru.ac.za/people/academic" },
          { label: "ATC inhibitors toward T. cruzi (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41886248" },
        ],
        diseases: ["chagas"],
        institutions: ["rhodes-rubi"],
        countries: ["south-africa"],
        technologies: ["ai-drug-discovery", "drug-repurposing"],
        terms: ["ntd"],
      },
      {
        id: "david-da-silva-nda",
        name: "David D. N'Da",
        tldr: "The North-West University chemist synthesising next-generation nitroheterocycles against kinetoplastids.",
        summary:
          "David D. N'Da works in medicinal chemistry at North-West University's Pharmacen centre in Potchefstroom, South Africa, designing nitroimidazole-based hybrids against kinetoplastid parasites. His 2026 5-nitroimidazole-triazole series is one of the few nitro-based Chagas chemistries still advancing after fexinidazole monotherapy was abandoned — notable because the nitro class, for all its toxicity, remains the only one with proven cures.",
        ...R,
        era: "Contemporary",
        role: "Medicinal chemist, Pharmacen, North-West University",
        knownFor: "Nitroimidazole-triazole anti-kinetoplastid hybrids.",
        links: [
          { label: "Nitroimidazole-triazole hybrids (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13370063" },
        ],
        diseases: ["chagas", "hat"],
        institutions: ["nwu-pharmacen"],
        countries: ["south-africa"],
        technologies: ["open-science-drug-discovery"],
        terms: ["ntd"],
      },
      {
        id: "anthony-attama",
        name: "Anthony A. Attama",
        tldr: "The Nigerian pharmaceutical scientist working on nano-delivery for antiprotozoal drugs.",
        summary:
          "Anthony Attama leads drug-delivery research in the Faculty of Pharmaceutical Sciences at the University of Nigeria Nsukka, with Adaeze Onugwu, on nanotechnology carriers for neglected protozoan diseases. Formulation science — getting more drug to the parasite with less toxicity — is the neglected half of the Chagas problem: benznidazole's 60-day course fails as much on tolerability as on potency, and nano-delivery is one of the few strategies that attacks the course length without a new molecule.",
        ...R,
        era: "Contemporary",
        role: "Professor of Pharmaceutics, University of Nigeria Nsukka",
        knownFor: "Nanotechnology drug delivery for neglected protozoan diseases.",
        links: [
          { label: "Nanotechnology for neglected protozoan diseases (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42303167" },
        ],
        diseases: ["chagas"],
        institutions: ["unn-pharmacy"],
        countries: ["nigeria"],
        drugs: ["benznidazole"],
        terms: ["ntd"],
      },
      {
        id: "israel-molina",
        name: "Israel Molina",
        tldr: "The Barcelona clinician leading the trials to shorten benznidazole from eight weeks to two.",
        summary:
          "Israel Molina heads the Infectious Diseases Department at Vall d'Hebron University Hospital with PROSICS Barcelona and is the most prolific recent Chagas clinical author. He is senior author of MULTIBENZ (2024), drives the NuestroBen and BENLATINO phase 3 short-course trials, and co-authored the Lancet Chagas review that frames the field. His programme treats mostly Latin American migrants, making it the reference for screening and care in non-endemic countries.",
        ...R,
        era: "Contemporary",
        role: "Head of Infectious Diseases, Vall d'Hebron University Hospital; PROSICS Barcelona",
        knownFor: "MULTIBENZ and the benznidazole short-course programme; Lancet Chagas review.",
        links: [
          { label: "MULTIBENZ (Lancet Infect Dis 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218195" },
        ],
        diseases: ["chagas"],
        institutions: ["vall-dhebron-prosics"],
        drugs: ["benznidazole"],
        trials: ["multibenz-2024", "nuestroben-short-bzn", "benlatino-short-bzn"],
        terms: ["ntd"],
        stats: [
          { label: "Key trial", value: "MULTIBENZ", note: "234 patients, 4 countries" },
        ],
      },
      {
        id: "maria-jesus-pinazo",
        name: "Maria-Jesus Pinazo",
        tldr: "The ISGlobal trialist who ran FEXI-12 and closed fexinidazole's Chagas chapter with data.",
        summary:
          "Maria-Jesus Pinazo of ISGlobal Barcelona led FEXI-12, the multicentre phase 2 trial that showed fexinidazole — the great hope borrowed from sleeping sickness — was tolerable but ineffective against T. cruzi, stopping monotherapy development. She also led the 2024 Lancet Microbe review of Chagas vaccines and therapies. Negative trials run well are what keep a neglected field honest, and hers is the exemplar.",
        ...R,
        era: "Contemporary",
        role: "Researcher, ISGlobal Chagas Initiative, Barcelona",
        knownFor: "FEXI-12 trial; Chagas vaccines and therapies review.",
        links: [
          { label: "FEXI-12 (Lancet Infect Dis 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218194" },
        ],
        diseases: ["chagas"],
        institutions: ["isglobal-chagas"],
        drugs: ["fexinidazole"],
        trials: ["fexinidazole-chagas"],
        terms: ["ntd"],
      },
      {
        id: "carlos-morillo",
        name: "Carlos Morillo",
        tldr: "Principal investigator of BENEFIT, the trial that proved clearing the parasite is not curing the heart.",
        summary:
          "Carlos Morillo of McMaster University and the Population Health Research Institute led BENEFIT, the 2,854-patient randomised trial showing benznidazole clears T. cruzi DNA without slowing cardiac deterioration in established cardiomyopathy. It is the largest Chagas trial ever run and the result every subsequent programme — short-course regimens, new candidates, early-treatment strategy — is built around.",
        ...R,
        era: "Contemporary",
        role: "Professor of Medicine, McMaster University; PHRI scientist",
        knownFor: "BENEFIT trial (NEJM 2015).",
        links: [
          { label: "BENEFIT (NEJM 2015)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1507574" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        trials: ["benefit-chagas"],
        terms: ["ntd"],
      },
      {
        id: "etienne-dumonteil",
        name: "Etienne Dumonteil",
        tldr: "The vector ecologist mapping where Chagas transmission actually happens now.",
        summary:
          "Etienne Dumonteil of Tulane University works on triatomine eco-epidemiology — sylvatic reservoirs, urbanisation of transmission, and why Southern Cone spraying successes do not transfer to the Gran Chaco or Amazon. As the pipeline chases drugs, his work defines where transmission persists and where surveillance must go, including the US Gulf Coast where autochthonous transmission is under-recognised.",
        ...R,
        era: "Contemporary",
        role: "Professor of Tropical Medicine, Tulane University",
        knownFor: "Triatomine eco-epidemiology and Chagas surveillance strategy.",
        links: [
          { label: "Dumonteil Chagas publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dumonteil+E%5BAuthor%5D+AND+%28Chagas+OR+Trypanosoma+cruzi%29" },
        ],
        diseases: ["chagas"],
        vectors: ["triatomine-bug"],
        terms: ["ntd", "elimination"],
      },
      {
        id: "alejandro-schijman",
        name: "Alejandro Schijman",
        tldr: "The molecular biologist whose PCR assays decide whether a Chagas drug worked.",
        summary:
          "Alejandro Schijman of INGEBI-CONICET in Buenos Aires develops the molecular tools — quantitative PCR, parasite-load monitoring, early antibody-decline serology — on which every Chagas trial endpoint depends. He co-authored the E1224 proof-of-concept trial and the 2026 consensus framework for a real-time PCR target product profile for therapeutic monitoring. Without a test of cure there is no drug registration; his laboratory builds it.",
        ...R,
        era: "Contemporary",
        role: "Researcher, INGEBI-CONICET, Buenos Aires",
        knownFor: "T. cruzi PCR diagnostics and test-of-cure biomarkers; E1224 trial.",
        links: [
          { label: "E1224 proof-of-concept (Lancet Infect Dis 2018)", url: "https://doi.org/10.1016/S1473-3099(17)30538-8" },
        ],
        diseases: ["chagas"],
        diagnostics: ["chagas-serology", "molecular-pcr"],
        trials: ["e1224-chagas", "fexinidazole-chagas"],
        terms: ["ntd"],
      },
      {
        id: "susana-sosa-estani",
        name: "Susana Sosa-Estani",
        tldr: "The DNDi Chagas clinical lead connecting Argentine field research to the global pipeline.",
        summary:
          "Susana Sosa-Estani bridges Argentina's CONICET epidemiology and DNDi's Chagas Clinical Program in Geneva, co-authoring MULTIBENZ and shaping the short-course and access agenda. She embodies the product-development-partnership model the field runs on: endemic-country science carried into multicentre trials rather than extracted from them.",
        ...R,
        era: "Contemporary",
        role: "Chagas Clinical Program, DNDi; CONICET researcher, Argentina",
        knownFor: "MULTIBENZ; DNDi Chagas access and clinical programme.",
        links: [
          { label: "MULTIBENZ protocol (Trials 2020)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7158046/" },
        ],
        diseases: ["chagas"],
        institutions: ["dndi"],
        drugs: ["benznidazole"],
        trials: ["multibenz-2024"],
        terms: ["ntd", "pdp"],
      },
      {
        id: "faustino-torrico",
        name: "Faustino Torrico",
        tldr: "The Bolivian trialist who ran E1224 and BENDITA where the burden is heaviest.",
        summary:
          "Faustino Torrico runs Chagas clinical research in Cochabamba, Bolivia — the country with the world's highest prevalence — leading the E1224 proof-of-concept trial and BENDITA (short-course benznidazole with and without fosravuconazole). Trials in the highest-burden setting, rather than in referral hospitals abroad, are why the short-course evidence generalises to the patients who need it.",
        ...R,
        era: "Contemporary",
        role: "Chagas clinical researcher, Cochabamba, Bolivia",
        knownFor: "E1224 and BENDITA trials in Bolivia.",
        links: [
          { label: "BENDITA (Lancet Infect Dis 2021)", url: "https://doi.org/10.1016/S1473-3099(20)30844-6" },
        ],
        diseases: ["chagas"],
        countries: ["bolivia"],
        drugs: ["benznidazole"],
        trials: ["e1224-chagas"],
        terms: ["ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "chagas-test-and-treat",
        name: "EMTCT-anchored test-and-treat for Chagas with short-course cures",
        tldr: "Fold systematic T. cruzi screening into existing maternal-health platforms and treat with 2-week benznidazole, then 28-day AN2-502998 — a hepatitis-C-style elimination play.",
        summary:
          "Congenital transmission is now the main worldwide route and is curable in newborns, yet screening depends on stand-alone Chagas programmes that miss most mothers. PAHO's EMTCT-Plus framework already bundles HIV, syphilis, hepatitis B and Chagas — but uptake of the Chagas component lags. Meanwhile treatment duration, the main driver of drop-out, is collapsing: 2-week benznidazole (MULTIBENZ/NuestroBen/BENLATINO) now, 28-day AN2-502998 next. Combining systematic antenatal screening through EMTCT platforms with short-course test-and-treat is the first credibly eliminable strategy the field has had — distinct from generic service integration because it targets the one transmission route existing tools can close.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Randomise districts to EMTCT-integrated systematic screening plus short-course test-and-treat versus the stand-alone Chagas programme, measuring maternal screening coverage, treatment completion, and congenital cases averted.",
        owner: "PAHO with CUIDA/Unitaid countries (Bolivia, Brazil, Colombia, Paraguay)",
        links: [
          { label: "WHO — Chagas disease (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
          { label: "PAHO — Chagas disease", url: "https://www.paho.org/en/topics/chagas-disease" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole", "an2-502998"],
        trials: ["multibenz-2024", "nuestroben-short-bzn", "an2-502998-phase2"],
        institutions: ["paho", "cuida-chagas", "unitaid"],
        technologies: ["mass-drug-administration"],
        bottlenecks: ["access-and-pricing", "funding-gap"],
        terms: ["congenital-chagas", "elimination", "eot"],
        stats: [
          { label: "Prize", value: "Congenital route closable with existing tools" },
          { label: "Enabler", value: "Treatment falling from 60 days toward 14–28" },
        ],
      },
      {
        id: "chagas-test-of-cure",
        name: "A registrable test of cure for Chagas disease",
        tldr: "Qualify a composite qPCR plus early antibody-decline endpoint so the next drug can actually be registered.",
        summary:
          "Every Chagas drug programme stalls at the same place: no test proves cure, so trials use sustained PCR negativity as a surrogate nobody has validated for registration. The pieces arrived in 2026 — a consensus framework for a real-time PCR target product profile for therapeutic monitoring, and proof that early antibody decline distinguishes regimens (E1224 data). A biomarker consortium that qualifies a composite PCR-plus-serology endpoint against 12-month outcomes across the short-course trials would unlock registration for AN2-502998, IID432 and everything behind them. This is distinct from multiplex point-of-care panels: it is a regulatory endpoint, not a diagnostic product.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pool individual-patient PCR and quantitative serology from FEXI-12, MULTIBENZ, NuestroBen and E1224; validate early antibody decline plus sustained qPCR negativity against 12-month outcomes as a surrogate endpoint.",
        owner: "DNDi with FIND, ISGlobal and INGEBI-CONICET",
        links: [
          { label: "DNDi — Chagas biomarkers", url: "https://dndi.org/research-development/portfolio/biomarkers/" },
          { label: "FEXI-12 (Lancet Infect Dis 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218194" },
        ],
        diseases: ["chagas"],
        diagnostics: ["chagas-serology", "molecular-pcr"],
        trials: ["fexinidazole-chagas", "multibenz-2024", "e1224-chagas"],
        institutions: ["dndi", "find-dx", "isglobal-chagas"],
        bottlenecks: ["funding-gap"],
        terms: ["pdp"],
        stats: [
          { label: "Blocks", value: "Registration of every Chagas candidate" },
          { label: "Pieces available", value: "PCR TPP framework + antibody-decline data (2026)" },
        ],
      },
      {
        id: "chagas-persistence-combos",
        name: "Persistence-directed, benznidazole-sparing combinations gated by washout assays",
        tldr: "Require sterile cure in washout/outgrowth assays plus chronic-model efficacy before any new monotherapy trial — and prioritise combos that cut benznidazole to a stub.",
        summary:
          "Azoles looked curative in standard in-vitro assays and failed in patients; the washout-and-outgrowth assay plus the bioluminescent chronic mouse model retrospectively separate benznidazole (works) from posaconazole/E1224 (do not). Making that pair a mandatory preclinical gate would have saved two failed trials. The positive direction is combinations: a selective T. cruzi cytochrome b inhibitor plus reduced-dose benznidazole achieved full efficacy in the chronic model, and the same logic applies to pairing AN2-502998 or IID432 with a benznidazole stub — shorter, safer, and resistant to single-target failure.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Mandate washout-sterile-cure plus chronic-model efficacy as the entry criterion for Chagas Phase 2; run a BENLATINO-style factorial of AN2-502998 or IID432 with 2-week benznidazole versus monotherapies.",
        owner: "DNDi discovery network with Novartis, H3D and RUBi",
        links: [
          { label: "Short-course combination in chronic model (2020)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7615676" },
          { label: "DNDi — Chagas R&D in review (2026)", url: "https://dndi.org/news/2026/2025-rd-programmes-in-review-chagas-disease" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole", "an2-502998", "iid432"],
        targets: ["tc-cpsf3", "tc-topoisomerase-ii"],
        trials: ["benlatino-short-bzn", "an2-502998-phase2", "chagasazol-posaconazole"],
        institutions: ["dndi", "rhodes-rubi"],
        bottlenecks: ["funding-gap"],
        terms: ["pdp"],
        stats: [
          { label: "Gate", value: "Washout sterile cure + chronic-model efficacy" },
          { label: "Precedent", value: "Cytochrome b inhibitor + low-dose benznidazole: full chronic-model efficacy" },
        ],
      },
    ],
  },

  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "multibenz-2024",
        name: "MULTIBENZ: shorter and lower benznidazole doses for chronic Chagas",
        tldr: "A 234-patient phase 2b trial showing a 2-week benznidazole course may match the standard 8 weeks.",
        summary:
          "MULTIBENZ randomised 234 adults with chronic Chagas disease in Argentina, Brazil, Colombia and Spain to benznidazole 300 mg/day for 60 days (control), 150 mg/day for 60 days, or 400 mg/day for 15 days, measuring sustained qPCR negativity over 12 months. Efficacy was maintained in the short-treatment arm, suggesting cutting treatment from 8 weeks to 2 weeks could preserve response while improving adherence and coverage — a finding to confirm in phase 3, and the basis for the ongoing NuestroBen and BENLATINO trials.",
        ...R,
        phase: "Phase 2b",
        registry: "ClinicalTrials.gov NCT03191162; EudraCT 2016-003789-21",
        registryUrl: "https://clinicaltrials.gov/study/NCT03191162",
        status: "Completed (2020 enrolment; reported 2024)",
        intervention: "Benznidazole 300 mg/day x 60 days vs 150 mg/day x 60 days vs 400 mg/day x 15 days",
        result:
          "Short 2-week high-dose course maintained parasitological response vs the 8-week standard; confirmation in phase 3 needed.",
        links: [
          { label: "MULTIBENZ (PubMed 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218195" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        stats: [
          { label: "Enrolment", value: "234", number: 234, unit: "participants", geography: "Argentina, Brazil, Colombia, Spain", source: { label: "MULTIBENZ (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38218195" } },
          { label: "Short arm", value: "15 days", note: "vs 60-day standard" },
        ],
      },
      {
        id: "nuestroben-short-bzn",
        name: "NuestroBen: short benznidazole regimens in the indeterminate and mild-cardiac forms",
        tldr: "An ongoing phase 3 non-inferiority trial testing 2- and 4-week benznidazole against the 8-week standard.",
        summary:
          "NuestroBen is a randomised, multicentre phase 3 non-inferiority trial in Argentina and Bolivia in adults with chronic indeterminate or mild-cardiac Chagas disease, testing whether 2- and 4-week benznidazole regimens match the standard 8-week course. Recruitment began in July 2023 with 140 participants enrolled by mid-2025. If non-inferiority holds, treatment duration — the main driver of drop-out — falls by two thirds.",
        ...R,
        phase: "Phase 3",
        registry: "ClinicalTrials.gov NCT04897516",
        registryUrl: "https://clinicaltrials.gov/study/NCT04897516",
        status: "Recruiting (started July 2023)",
        intervention: "Benznidazole 2- and 4-week regimens vs 8-week standard",
        result:
          "Ongoing; primary outcome is non-inferior parasitological efficacy.",
        links: [
          { label: "NuestroBen protocol (BMJ Open 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41027700" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        stats: [
          { label: "Enrolment so far", value: "140", number: 140, unit: "participants", year: 2025, geography: "Argentina and Bolivia", source: { label: "NuestroBen protocol (BMJ Open 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41027700" } },
        ],
      },
      {
        id: "benlatino-short-bzn",
        name: "BENLATINO: short benznidazole regimens in Bolivia and Colombia",
        tldr: "A Fiocruz-sponsored phase 3 non-inferiority trial of two short benznidazole regimens in indeterminate and mild-cardiac disease.",
        summary:
          "BENLATINO is a double-blind, phase 3 randomised, multicentre non-inferiority trial sponsored by Fiocruz, evaluating two short benznidazole regimens against the standard course in adults with chronic indeterminate or mild-cardiac Chagas disease in Bolivia and Colombia. Together with NuestroBen it forms the phase 3 confirmation of the MULTIBENZ short-course signal.",
        ...R,
        phase: "Phase 3",
        registry: "ClinicalTrials.gov NCT06339710",
        registryUrl: "https://clinicaltrials.gov/study/NCT06339710",
        status: "Recruiting",
        sponsor: "Fiocruz (Oswaldo Cruz Foundation)",
        intervention: "Two short benznidazole regimens vs standard course",
        result: "Ongoing; safety and efficacy non-inferiority.",
        links: [
          { label: "BENLATINO trial (ClinicalTrials.gov NCT06339710)", url: "https://clinicaltrials.gov/study/NCT06339710" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        institutions: ["fiocruz"],
      },
      {
        id: "chagasazol-posaconazole",
        name: "CHAGASAZOL: posaconazole vs benznidazole for chronic Chagas",
        tldr: "The randomised trial that showed the antifungal posaconazole fails where benznidazole works.",
        summary:
          "CHAGASAZOL randomised adults with chronic T. cruzi infection to low- or high-dose posaconazole vs benznidazole. Posaconazole showed initial antitrypanosomal activity, but significantly more posaconazole patients had treatment failure (positive RT-PCR on follow-up) than benznidazole patients. Together with the E1224/ravuconazole failure, it closed the repurposed-azole chapter and explains why the CYP51 record must be read as a caution, not a promise.",
        ...R,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT01162967",
        registryUrl: "https://clinicaltrials.gov/study/NCT01162967",
        status: "Reported negative for posaconazole",
        intervention: "Posaconazole (low/high dose) vs benznidazole",
        result:
          "Posaconazole failed significantly more often than benznidazole on sustained PCR negativity.",
        links: [
          { label: "Posaconazole vs benznidazole for chronic Chagas (NEJM 2014)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1313122" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        targets: ["cyp51"],
        stats: [
          { label: "Outcome", value: "Posaconazole inferior to benznidazole", note: "on sustained T. cruzi DNA negativity" },
        ],
      },
      {
        id: "e1224-chagas",
        name: "E1224 (ravuconazole prodrug) for chronic Chagas disease",
        tldr: "The DNDi proof-of-concept trial showing ravuconazole plus benznidazole offers no durable advantage.",
        summary:
          "E1224, the prodrug of the CYP51 inhibitor ravuconazole, was tested by DNDi in a randomised, placebo-controlled proof-of-concept trial in adults with chronic indeterminate Chagas disease, alone and with benznidazole. Parasite clearance was not sustained relative to benznidazole, confirming the CHAGASAZOL lesson for a second azole and redirecting the pipeline toward non-CYP51 mechanisms such as CPSF3 and topoisomerase II.",
        ...R,
        phase: "Phase 2 (proof-of-concept)",
        status: "Reported negative",
        intervention: "E1224 alone and with benznidazole vs benznidazole",
        sponsor: "DNDi",
        result:
          "No sustained advantage over benznidazole; azole monotherapy abandoned for Chagas.",
        links: [
          { label: "Benznidazole and three E1224 regimens (Lancet Infect Dis 2018)", url: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(23)00651-5/abstract" },
          { label: "DNDi — fexinidazole for Chagas", url: "https://dndi.org/research-development/portfolio/fexinidazole-chagas/" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole"],
        targets: ["cyp51"],
        institutions: ["dndi"],
      },
      {
        id: "lxe408-chagas",
        name: "LXE408 (Novartis) Phase II in chronic indeterminate Chagas",
        tldr: "A DNDi-supported Novartis Phase II study repurposing the leishmaniasis proteasome inhibitor for Chagas.",
        summary:
          "LXE408, the first-in-class oral kinetoplastid proteasome inhibitor developed by DNDi with Novartis for visceral leishmaniasis (two Phase II proof-of-concept studies completed in India and Ethiopia in 2025), is being evaluated with DNDi expertise in a Novartis Phase II study in patients with chronic indeterminate Chagas disease, per the DNDi 2025 Chagas factsheet. It tests whether a validated kinetoplastid mechanism transfers across parasites — the same bet that failed for fexinidazole and now gets a second hearing with a new class.",
        ...R,
        phase: "Phase 2",
        status: "Planned/active (per DNDi 2025 factsheet)",
        intervention: "LXE408, oral",
        result: "Pending; cross-parasite test of the kinetoplastid proteasome mechanism.",
        links: [
          { label: "DNDi Chagas factsheet 2025 (PDF)", url: "https://dndi.org/wp-content/uploads/2026/08/DNDi-Factsheet-Chagas-disease-2025.pdf" },
        ],
        diseases: ["chagas", "leishmaniasis"],
        drugs: ["lxe408"],
        targets: ["parasite-proteasome"],
        institutions: ["dndi"],
      },
      {
        id: "an2-502998-phase2",
        name: "AN2-502998 Phase II proof-of-concept in chronic Chagas",
        tldr: "The planned late-2026 efficacy trial of the CPSF3 inhibitor that cured naturally infected primates.",
        summary:
          "Following 100% parasite elimination in naturally infected primates and a clean Phase 1 profile at clinically attainable exposures (June 2026), AN2 Therapeutics with DNDi plans a Phase II proof-of-concept study of oral AN2-502998 in chronic Chagas disease starting late in 2026, run on DNDi's Latin American trial network with possible US and Australian sites. The goal is the first demonstration of a well-tolerated, short-course parasitological cure in chronic Chagas — the milestone fexinidazole and the azoles never reached.",
        ...R,
        phase: "Phase 2 (proof-of-concept, planned)",
        status: "Planned late 2026",
        intervention: "AN2-502998, oral",
        result: "Pending; primary outcome expected to be sustained parasite clearance.",
        links: [
          { label: "AN2 — enabling data (June 2026)", url: "https://investor.an2therapeutics.com/news-releases/news-release-details/an2-therapeutics-reports-positive-enabling-data-supporting" },
          { label: "DNDi — AN2 collaboration (July 2025)", url: "https://dndi.org/press-releases/2025/an2-therapeutics-and-dndi-collaborate-on-clinical-development-of-promising-new-oral-compound-to-treat-chronic-chagas-disease" },
        ],
        diseases: ["chagas"],
        drugs: ["an2-502998"],
        targets: ["tc-cpsf3"],
        institutions: ["dndi"],
      },
    ],
  },
];
