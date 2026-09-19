import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Foodborne-trematodiases 2026 fact-check additions: the tribendimidine
 * alternative completing Phase 4 testing, paediatric arpraziquantel for
 * Opisthorchis, the Egaten safety study, the cathepsin-L vaccine target, the
 * 2023 resistance-locus mapping, and the people/ideas review. Ordinary
 * records of their kind, kept in one file so the review is visible as a set;
 * wired into `index.ts` alongside DENGUE_2026.
 */
export const FBT_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------- targets ------------------------------- */
  {
    kind: "targets",
    records: [
      {
        id: "fasciola-cathepsin-l",
        name: "Fasciola cathepsin L proteases (FhCL)",
        tldr: "The gut enzymes the liver fluke needs to burrow and feed — the leading vaccine target for fascioliasis.",
        summary:
          "Cathepsin L cysteine proteases digest host tissue as juvenile Fasciola migrate through the gut wall and liver, and cathepsin L1/L3 are the most advanced vaccine antigens for fascioliasis (John Dalton group and others), with protection demonstrated in livestock models. As drug targets they offer a route around triclabendazole's unknown mechanism and spreading resistance: an inhibitor here kills by starvation rather than by the benzimidazole pathway. ChEMBL holds single-protein entries (CHEMBL5169145/5169140) with early bioactivities.",
        ...R,
        targetType: "Enzyme family (cysteine proteases)",
        organism: "Fasciola hepatica, Fasciola gigantica",
        rationale:
          "Essential for migration and feeding; validated as vaccine antigens in livestock and chemically tractable as proteases (cf. cruzain).",
        druggability:
          "Vaccine-validated; small-molecule inhibition early — ChEMBL single-protein entries carry only single bioactivities each.",
        knownLigands: "Early vinyl-sulfone and peptidic inhibitors; vaccine formulations with adjuvant.",
        proteinAbsent:
          "No usable full-length entry: the reviewed Q09093 is a 20-aa fragment and the TrEMBL entries are unnamed fragments of 166–326 aa, so annotation alone cannot pin the vaccine antigen to an accession.",
        links: [
          { label: "ChEMBL — Cathepsin L1 (F. hepatica)", url: "https://www.ebi.ac.uk/chembl/explore/target/CHEMBL5169145" },
          { label: "OpenTargets — fascioliasis (cathepsin association)", url: "https://platform.opentargets.org/" },
        ],
        pathogens: ["foodborne-trematodes"],
        diseases: ["foodborne-trematodiases"],
        technologies: ["ai-drug-discovery", "open-science-drug-discovery"],
        stats: [
          { label: "Role", value: "Migration and feeding proteases" },
          { label: "Status", value: "Vaccine-validated in livestock; inhibitors early" },
        ],
      },
    ],
  },

  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "tribendimidine-clonorchiasis-guangxi",
        name: "Albendazole vs tribendimidine vs praziquantel for clonorchiasis (Guangxi)",
        tldr: "The head-to-head Phase 4 that could give liver flukes their second drug.",
        summary:
          "This recruiting Phase 4 trial in Guangxi randomises clonorchiasis patients to albendazole, single-dose tribendimidine (400 mg), or praziquantel. It follows the Laos Phase 2 non-inferiority result (tribendimidine vs praziquantel for O. viverrini) and the network meta-analysis (~90% cure for single-dose tribendimidine in opisthorchiasis): a positive readout makes tribendimidine — already registered in China for soil-transmitted helminths — the first credible alternative to praziquantel monotherapy for liver flukes.",
        ...R,
        phase: "Phase 4",
        registry: "ClinicalTrials.gov NCT07074444",
        registryUrl: "https://clinicaltrials.gov/study/NCT07074444",
        status: "Recruiting (started July 2025)",
        sponsor: "First Affiliated Hospital of Guangxi Medical University",
        intervention: "Albendazole vs tribendimidine 400 mg single dose vs praziquantel",
        result: "Ongoing; cure-rate comparison.",
        links: [
          { label: "Guangxi clonorchiasis trial (ClinicalTrials.gov NCT07074444)", url: "https://clinicaltrials.gov/study/NCT07074444" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["tribendimidine", "praziquantel", "albendazole"],
        stats: [
          { label: "Design", value: "Three-arm head-to-head", note: "started July 2025" },
        ],
      },
      {
        id: "arpraziquantel-opisthorchis-children",
        name: "Paediatric arpraziquantel dose-ranging for Opisthorchis (Keiser)",
        tldr: "Extending the child-friendly praziquantel to liver-fluke-infected children.",
        summary:
          "Jennifer Keiser's group is running a Phase 2 dose-ranging trial of arpraziquantel (20–60 mg/kg) in children infected with Opisthorchis viverrini (NCT07262814, recruiting from July 2026). Arpraziquantel — the dispersible paediatric praziquantel developed for schistosomiasis — was never dosed for liver flukes in children, the group with the heaviest infection intensity. Success adds a child formulation to the fluke arsenal at almost no discovery cost.",
        ...R,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT07262814",
        registryUrl: "https://clinicaltrials.gov/study/NCT07262814",
        status: "Recruiting (started July 2026)",
        sponsor: "Jennifer Keiser",
        intervention: "Arpraziquantel 20–60 mg/kg, dose-ranging in children",
        result: "Ongoing; efficacy and safety by dose.",
        links: [
          { label: "Paediatric arpraziquantel for Opisthorchis (ClinicalTrials.gov NCT07262814)", url: "https://clinicaltrials.gov/study/NCT07262814" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["arpraziquantel"],
        stats: [
          { label: "Doses", value: "20–60 mg/kg", note: "five ascending arms in children" },
        ],
      },
      {
        id: "egaten-fascioliasis-safety",
        name: "Egaten safety and outcomes in fascioliasis (Novartis, 6y+)",
        tldr: "The completed Phase 4 that documented triclabendazole's real-world safety in children.",
        summary:
          "Novartis's completed Phase 4 study (NCT04230148, from 2022) evaluated safety, tolerability and clinical outcomes of Egaten (triclabendazole) in fascioliasis patients aged six and over. As the only modern company-sponsored dataset on the drug's paediatric safety profile, it underpins the donation programme's continued use while resistance work proceeds — and sets the baseline any second drug must beat.",
        ...R,
        phase: "Phase 4",
        registry: "ClinicalTrials.gov NCT04230148",
        registryUrl: "https://clinicaltrials.gov/study/NCT04230148",
        status: "Completed",
        sponsor: "Novartis",
        intervention: "Egaten (triclabendazole) in fascioliasis, ages 6+",
        result: "Completed; safety/tolerability and clinical outcomes.",
        links: [
          { label: "Egaten fascioliasis study (ClinicalTrials.gov NCT04230148)", url: "https://clinicaltrials.gov/study/NCT04230148" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["triclabendazole"],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "khon-kaen-tm",
        name: "Khon Kaen University tropical-disease group (Thailand)",
        tldr: "The group that turned a liver-fluke province into the world's cholangiocarcinoma screening model.",
        summary:
          "Researchers at Khon Kaen University — Paiboon Sithithaworn (diagnostics), Sirikachorn Tangkawattana (pathology) and the CASCAP screening programme — built the evidence chain from Opisthorchis infection through ultrasound-detectable bile-duct change to cholangiocarcinoma care. Northeast Thailand's >80%-prevalence villages made it the natural laboratory; the group's output (urinary antigen RDTs, CCA cohorts, control modelling) is the template for pairing parasite control with oncology anywhere liver flukes are endemic.",
        ...R,
        institutionType: "University research group",
        country: "Thailand",
        city: "Khon Kaen",
        focus: "Opisthorchis diagnostics, cholangiocarcinoma screening and control.",
        links: [
          { label: "Cholangiocarcinoma Screening and Care Program", url: "https://cascap.kku.ac.th/" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["praziquantel"],
        diagnostics: ["molecular-pcr"],
        institutions: ["cascap", "who"],
        terms: ["cholangiocarcinoma"],
      },
      {
        id: "novosibirsk-icg-fluke",
        name: "Institute of Cytology and Genetics, Opisthorchis felineus group (Novosibirsk)",
        tldr: "The Siberian group keeping the 'European liver fluke' on the research map.",
        summary:
          "Maria Pakharukova's group at the Institute of Cytology and Genetics SB RAS works on Opisthorchis felineus — the Siberian liver fluke infecting millions across Russia and Eastern Europe, whose carcinogenicity remains unclassified for lack of data. Their programme spans genomics, proteomics, xenobiotic-metabolism and hamster carcinogenicity models: the work that will decide whether Europe's own liver fluke joins the Group 1 list or is exonerated.",
        ...R,
        institutionType: "Research institute group",
        country: "Russia",
        city: "Novosibirsk",
        focus: "O. felineus genomics, carcinogenicity and drug effects.",
        links: [
          { label: "Opisthorchiidae insights from O. felineus (2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11010525" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["praziquantel"],
        terms: ["cholangiocarcinoma"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "paiboon-sithithaworn",
        name: "Paiboon Sithithaworn",
        tldr: "The Khon Kaen diagnostician whose tests find the flukes the microscopes miss.",
        summary:
          "Paiboon Sithithaworn of Khon Kaen University developed the stool-antigen, serological and urinary-antigen diagnostics that made Opisthorchis control measurable — including the rapid urinary antigen test now used to assess drug treatment. In a field where Kato-Katz misses light infections and serology cannot distinguish cure, his assays are the difference between guessing and knowing.",
        ...R,
        era: "Contemporary",
        role: "Professor of Parasitology, Khon Kaen University",
        knownFor: "Opisthorchis diagnostics; urinary antigen RDT.",
        links: [
          { label: "Sithithaworn opisthorchiasis publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Sithithaworn+P+opisthorchiasis" },
        ],
        diseases: ["foodborne-trematodiases"],
        institutions: ["khon-kaen-tm", "cascap"],
        diagnostics: ["molecular-pcr"],
        terms: ["cholangiocarcinoma", "ntd"],
      },
      {
        id: "sirikachorn-tangkawattana",
        name: "Sirikachorn Tangkawattana",
        tldr: "The veterinary pathologist tracing the fluke-to-cancer sequence.",
        summary:
          "Sirikachorn Tangkawattana of Khon Kaen University's veterinary faculty works on the pathology linking Opisthorchis infection to cholangiocarcinoma — the animal-model and histopathological evidence that chronic inflammation becomes malignancy. Veterinary pathology informing human oncology is One Health in its purest form.",
        ...R,
        era: "Contemporary",
        role: "Veterinary pathologist, Khon Kaen University",
        knownFor: "Liver-fluke carcinogenesis pathology.",
        links: [
          { label: "Tangkawattana fluke publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Tangkawattana+opisthorchis+cholangiocarcinoma" },
        ],
        diseases: ["foodborne-trematodiases"],
        institutions: ["khon-kaen-tm", "cascap"],
        terms: ["cholangiocarcinoma", "one-health", "ntd"],
      },
      {
        id: "maria-pakharukova",
        name: "Maria Pakharukova",
        tldr: "The Novosibirsk scientist deciding whether Europe's liver fluke causes cancer.",
        summary:
          "Maria Pakharukova of the Institute of Cytology and Genetics SB RAS leads the Opisthorchis felineus programme — proteomics, xenobiotic metabolism, and the hamster carcinogenicity work that will determine whether the Siberian liver fluke is a Group 1 carcinogen like its Asian relatives. Millions are infected; the answer changes screening policy from the Ob basin to the Baltics.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Institute of Cytology and Genetics SB RAS, Novosibirsk",
        knownFor: "O. felineus genomics, proteomics and carcinogenic potential.",
        links: [
          { label: "Opisthorchiidae insights from O. felineus (2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11010525" },
        ],
        diseases: ["foodborne-trematodiases"],
        institutions: ["novosibirsk-icg-fluke"],
        terms: ["cholangiocarcinoma", "ntd"],
      },
      {
        id: "jennifer-keiser",
        name: "Jennifer Keiser",
        tldr: "The Swiss TPH trialist giving liver flukes their second and paediatric drugs.",
        summary:
          "Jennifer Keiser of the Swiss Tropical and Public Health Institute ran the Laos Phase 2 that made tribendimidine a credible praziquantel alternative for opisthorchiasis and now leads the paediatric arpraziquantel dose-ranging trial in Opisthorchis-infected children. Repurposing approved drugs across worms — STH to liver fluke, schistosomiasis to opisthorchiasis — is her signature, and the cheapest R&D the field gets.",
        ...R,
        era: "Contemporary",
        role: "Professor, Swiss Tropical and Public Health Institute",
        knownFor: "Tribendimidine Laos trial; paediatric arpraziquantel for Opisthorchis.",
        links: [
          { label: "Tribendimidine vs praziquantel, Laos (Lancet Infect Dis)", url: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(17)30624-2/fulltext" },
        ],
        diseases: ["foodborne-trematodiases", "schistosomiasis", "sth"],
        drugs: ["tribendimidine", "arpraziquantel", "praziquantel"],
        trials: ["arpraziquantel-opisthorchis-children"],
        terms: ["ntd", "pdp"],
      },
      {
        id: "somphou-sayasone",
        name: "Somphou Sayasone",
        tldr: "The Lao trialist who proved tribendimidine works where the flukes are.",
        summary:
          "Somphou Sayasone led the Champasak Phase 2 non-inferiority trial of single-dose tribendimidine against praziquantel for O. viverrini — the in-country evidence without which a Chinese-registered drug stays a rumour in Laos. Field trials in hyperendemic villages, not referral hospitals, are what make an alternative drug real.",
        ...R,
        era: "Contemporary",
        role: "Clinical researcher, Champasak, Laos",
        knownFor: "Tribendimidine Phase 2 for opisthorchiasis.",
        links: [
          { label: "Tribendimidine vs praziquantel, Laos (Lancet Infect Dis)", url: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(17)30624-2/fulltext" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["tribendimidine", "praziquantel"],
        terms: ["ntd"],
      },
      {
        id: "samson-mukaratirwa",
        name: "Samson Mukaratirwa",
        tldr: "The Zimbabwean parasitologist mapping Fasciola across Southern Africa.",
        summary:
          "Samson Mukaratirwa (University of KwaZulu-Natal and Ross University) works on Fasciola diversity, snail susceptibility and distribution across Southern Africa — cattle in eight provinces, lymnaeid compatibility, Malawi population structure. African Fasciola is overwhelmingly a livestock problem that seeds human infection; his programme watches the animal reservoir the human trials depend on.",
        ...R,
        era: "Contemporary",
        role: "Professor of Parasitology, University of KwaZulu-Natal / Ross University",
        knownFor: "Fasciola diversity and snail compatibility in Southern Africa.",
        links: [
          { label: "Fasciola diversity, Southern Africa (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Mukaratirwa+Fasciola+2025" },
        ],
        diseases: ["foodborne-trematodiases"],
        countries: ["south-africa"],
        terms: ["one-health", "ntd"],
      },
      {
        id: "luis-marcos",
        name: "Luis Marcos",
        tldr: "The Peruvian clinician documenting triclabendazole failure — and its salvage.",
        summary:
          "Luis Marcos (Universidad Peruana Cayetano Heredia) with Angélica Terashima documented the Cusco children failing triclabendazole (11.6%) and then showed 74% can still be cured with repeated doses — reframing 'resistance' as a dosing and biomarker problem. In the Altiplano, where human failure meets livestock resistance, his cohort is the clinical conscience of the field.",
        ...R,
        era: "Contemporary",
        role: "Clinician-researcher, Instituto de Medicina Tropical Alexander von Humboldt, Lima",
        knownFor: "Triclabendazole failure and multi-dose salvage in Peru.",
        links: [
          { label: "Triclabendazole and treatment failures (review)", url: "https://pubmed.ncbi.nlm.nih.gov/33267701" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["triclabendazole", "nitazoxanide"],
        terms: ["ntd"],
      },
      {
        id: "menbao-qian",
        name: "Men-Bao Qian",
        tldr: "The China CDC epidemiologist who counted clonorchiasis and reviewed every drug.",
        summary:
          "Men-Bao Qian of China's National Institute of Parasitic Diseases led the global clonorchiasis epidemiology review and the 2024 Clinical Microbiology Reviews synthesis, plus the Lancet Microbe network meta-analysis of liver-fluke drugs. Counting 56 million infections starts with his maps; choosing the second drug starts with his numbers.",
        ...R,
        era: "Contemporary",
        role: "Researcher, National Institute of Parasitic Diseases, China CDC",
        knownFor: "Clonorchiasis epidemiology; liver-fluke drug meta-analysis.",
        links: [
          { label: "Clonorchiasis/opisthorchiasis review (Clin Microbiol Rev 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10938900" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["praziquantel", "tribendimidine", "albendazole"],
        terms: ["ntd"],
      },
      {
        id: "silvana-scarcella",
        name: "Silvana Scarcella",
        tldr: "The Argentine veterinarian tracking triclabendazole resistance from the livestock side.",
        summary:
          "Silvana Scarcella (CIVETAN-CONICET, Tandil) studies Fasciola egg morphometrics and resistance across host species in Argentina — the veterinary mirror of the human failure cohorts. Resistance is born in cattle; her work reads its early signs before it reaches children.",
        ...R,
        era: "Contemporary",
        role: "Veterinary parasitologist, CIVETAN-CONICET, Tandil",
        knownFor: "Fasciola resistance surveillance across hosts.",
        links: [
          { label: "Fasciola egg morphometrics across hosts (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Scarcella+Fasciola+eggs+host+species" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["triclabendazole"],
        terms: ["one-health", "ntd"],
      },
      {
        id: "vincente-belizario",
        name: "Vincente Belizario Jr.",
        tldr: "The Filipino physician tracking paragonimiasis where TB gets the blame.",
        summary:
          "Vincente Belizario Jr. (University of the Philippines Manila) works on paragonimiasis and other foodborne trematodes in the Philippines — the setting where lung-fluke cases disappear into tuberculosis registers. Joint paragonimiasis-TB detection, which WHO explicitly recommends, starts with clinicians who look for both.",
        ...R,
        era: "Contemporary",
        role: "Physician-researcher, University of the Philippines Manila",
        knownFor: "Paragonimiasis surveillance in the Philippines.",
        links: [
          { label: "Belizario paragonimiasis publications (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Belizario+VY+paragonimiasis" },
        ],
        diseases: ["foodborne-trematodiases"],
        countries: ["philippines"],
        drugs: ["triclabendazole", "praziquantel"],
        terms: ["ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "fbt-tribendimidine-track",
        name: "A registration track for tribendimidine against liver flukes",
        tldr: "Turn the Guangxi Phase 4 into a WHO recommendation: the first second drug for clonorchiasis and opisthorchiasis.",
        summary:
          "Liver flukes have exactly one recommended drug; tribendimidine (single 400 mg, ~90% cure in O. viverrini, registered in China for STH) is the only alternative with Phase 2 non-inferiority and a Phase 4 head-to-head under way. The idea is a deliberate registration track: pre-agreed non-inferiority margins with WHO, pooled Guangxi/Laos data, and a preventive-chemotherapy recommendation on success — plus combination testing with praziquantel to protect both drugs. Monotherapy with the only drug is how resistance stories start; this ends it.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Complete Guangxi three-arm Phase 4; submit pooled tribendimidine liver-fluke dossier for WHO recommendation with a combination arm.",
        owner: "WHO with China CDC, Swiss TPH and Lao investigators",
        links: [
          { label: "Liver-fluke drug network meta-analysis (Lancet Microbe 2022)", url: "https://www.thelancet.com/journals/lanmic/article/PIIS2666-5247(22)00026-X/fulltext" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["tribendimidine", "praziquantel", "albendazole"],
        trials: ["tribendimidine-clonorchiasis-guangxi"],
        bottlenecks: ["funding-gap", "access-and-pricing"],
        terms: ["pdp"],
        stats: [
          { label: "Prize", value: "First second drug for liver flukes" },
          { label: "Signal", value: "~90% cure, single 400 mg", note: "O. viverrini" },
        ],
      },
      {
        id: "fbt-resistance-one-health",
        name: "One Health containment of triclabendazole resistance with a molecular marker",
        tldr: "Use the 3.2 Mbp resistance locus as a surveillance marker across cattle, snails and children — and enforce the multi-dose salvage protocol.",
        summary:
          "The 2023 mapping of TCBZ resistance to a single dominantly inherited 3.2 Mbp locus gives the field what it lacked: a trackable marker. The programme: livestock stewardship (rotation off blanket TCBZ, building on the Ethiopian oxyclozanide/albendazole cattle data), molecular surveillance of the locus in cattle, snails and human cases, and a standardised multi-dose salvage protocol (74% cure in Peru) so 'failure' triggers a regimen, not a shrug. Resistance that is dominant and mappable can be managed; resistance that is anecdotal cannot.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pilot locus-marker surveillance in linked cattle-snail-human sites (Altiplano + Nile Delta), paired with a standardised salvage protocol, measuring failure rates before and after.",
        owner: "WOAH/FAO with national veterinary and health programmes",
        links: [
          { label: "TCBZ resistance locus (2023)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9904461" },
          { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["triclabendazole", "nitazoxanide"],
        targets: ["fasciola-cathepsin-l"],
        bottlenecks: ["funding-gap"],
        terms: ["one-health", "pdp"],
        stats: [
          { label: "Marker", value: "3.2 Mbp dominant locus", note: "0.25% of the genome, 30 genes" },
          { label: "Salvage", value: "74% cure with repeated doses", note: "Peru cohort" },
        ],
      },
      {
        id: "fbt-tb-joint-detection",
        name: "Joint paragonimiasis–tuberculosis detection in TB non-responders",
        tldr: "Find the lung flukes hiding in TB registers with a reflex test — the cheapest case-finding in the NTD field.",
        summary:
          "Paragonimiasis is routinely misdiagnosed as tuberculosis, treated with months of useless anti-TB drugs while lung damage progresses. WHO already recommends joint detection; the idea is to operationalise it: a reflex Paragonimus workup (sputum microscopy, serology, then PCR) for every TB suspect who is smear-negative or failing treatment in co-endemic areas of Africa, Asia and Latin America. No new drug, no new test — just a protocol change that converts wasted TB treatment into cured fluke infections, and finally counts a disease the maps leave blank.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Add reflex Paragonimus testing to TB diagnostic algorithms in three co-endemic districts, measuring cases found, TB drugs avoided, and cost per cure.",
        owner: "National TB and NTD programmes with WHO",
        links: [
          { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["triclabendazole", "praziquantel"],
        diagnostics: ["molecular-pcr"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["ntd"],
        stats: [
          { label: "Cost", value: "Protocol change, no new product" },
          { label: "Prize", value: "Counts the uncounted disease" },
        ],
      },
    ],
  },
];
