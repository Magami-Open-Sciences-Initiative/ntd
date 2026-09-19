import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Chikungunya 2026 fact-check additions: the vaccine-regulation shake-up
 * (Ixchiq US withdrawal, Vimkunya expansion, Brazil-made VLA1555), the nsP2
 * antiviral pipeline, the 2025–2026 resurgence figures, the WHO 2025
 * arbovirus clinical guideline, and the people/ideas review. Ordinary records
 * of their kind, kept in one file so the review is visible as a set; wired
 * into `index.ts` alongside CHAGAS_2026.
 */
export const CHIKV_2026: { kind: Kind; records: unknown[] }[] = [
  /* ------------------------------- targets ------------------------------- */
  {
    kind: "targets",
    records: [
      {
        id: "chikv-nsp2",
        name: "CHIKV non-structural protein 2 (nsP2) protease/helicase",
        tldr: "The viral enzyme that cuts the chikungunya polyprotein — now with oral leads that work in mice.",
        summary:
          "nsP2 carries the cysteine protease that cleaves the viral non-structural polyprotein plus the helicase that unwinds viral RNA; without it there is no replication. Vinyl-sulfone leads J12/J13 inhibit the protease, are orally bioavailable, and ameliorated disease in mice; the covalent fragment RA-0002034 (PNAS) is cell-active across alphaviruses; and repurposed emetine blocks the helicase, cutting viremia and joint swelling in mice (2026). No candidate has entered human trials, but nsP2 is the first CHIKV target with more than one chemically validated in-vivo-active series.",
        ...R,
        targetType: "Viral enzyme (cysteine protease + RNA helicase)",
        organism: "Chikungunya virus",
        rationale:
          "Essential for polyprotein processing and RNA unwinding; inhibition blocks replication across alphaviruses.",
        druggability:
          "Early but converging: oral vinyl sulfones, covalent fragments, a peptide lead (P1, IC50 4.6 µM) and a repurposed drug all hit nsP2 with mouse efficacy for two series.",
        knownLigands: "J12/J13 vinyl sulfones; RA-0002034 covalent fragment; emetine (helicase); peptide P1.",
        proteinAbsent:
          "nsP2 is a cleavage product of the P1234 polyprotein (reviewed Q8JUX6/Q5XXP4, 2474 aa) with no standalone UniProt entry — the same situation as the dengue NS5/protease records. The protease domain structure PDB 4ZTB exists.",
        links: [
          { label: "nsP2 vinyl-sulfone leads with mouse efficacy", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11440364" },
          { label: "Emetine inhibits nsP2 helicase in cells and mice (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13386891" },
          { label: "ChEMBL — Chikungunya virus (2,297 bioactivities)", url: "https://www.ebi.ac.uk/chembl/explore/target/CHEMBL4296563" },
        ],
        pathogens: ["chikungunya-virus"],
        diseases: ["chikungunya"],
        drugs: ["emetine"],
        technologies: ["ai-drug-discovery", "drug-repurposing"],
        stats: [
          { label: "ChEMBL bioactivities", value: "2,297", number: 2297, unit: "bioactivities", note: "whole-organism phenotypic screens (CHEMBL4296563)" },
          { label: "Status", value: "Preclinical", note: "two series with mouse efficacy; no human trials" },
        ],
      },
    ],
  },

  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "butantan-chik-vla1555",
        name: "Butantan-chik (VLA1555)",
        tldr: "Brazil's locally made Ixchiq — approved May 2026, the LMIC-manufacturing answer to the vaccine-access gap.",
        summary:
          "VLA1555 is Valneva's IXCHIQ strain transferred to Instituto Butantan for local manufacture. Brazil's regulator ANVISA approved it in May 2026 after licensing imported IXCHIQ in April 2025, and Butantan committed to an affordable Latin American price. With Valneva/Serum Institute's India deal discontinued, Butantan is the only Southern-hemisphere manufacturer of a chikungunya vaccine — the matched counterpart to Butantan-DV for dengue, and the reason the Ixchiq story continues after the US withdrawal.",
        ...R,
        drugClass: "Live-attenuated vaccine (locally manufactured)",
        mechanism: "Induces neutralising antibodies against chikungunya virus after a single dose.",
        indication: "Prevention of chikungunya disease.",
        administration: "Single intramuscular dose.",
        status: "Licensed Brazil (May 2026); public-system incorporation expected",
        links: [
          { label: "Valneva — company presentation (July 2026)", url: "https://valneva.com/wp-content/uploads/2026/07/Valneva_Company_Presentation-July-2026.pdf" },
        ],
        diseases: ["chikungunya"],
        pathogens: ["chikungunya-virus"],
        technologies: ["chikungunya-vaccination"],
        institutions: ["butantan-institute", "valneva"],
        terms: ["elimination"],
        stats: [
          { label: "Approved", value: "May 2026", note: "ANVISA; locally manufactured" },
        ],
      },
      {
        id: "emetine",
        name: "Emetine (repurposed antiviral candidate for chikungunya)",
        tldr: "An old amoebiasis drug that blocks the CHIKV nsP2 helicase and prevented joint swelling in mice.",
        summary:
          "Emetine, long used against amoebiasis, was shown in 2026 to bind CHIKV nsP2 and inhibit its helicase activity, suppressing replication in cells and — unusually for the field — reducing viremia and preventing joint swelling in a mouse model. As an approved molecule with known (narrow) safety margins, it is a repurposing candidate rather than a development candidate: the value is proof that the helicase is druggable in vivo, and a bridge until J12/J13-class leads mature. Emetine's cardiac toxicity at systemic doses means it is a mechanistic landmark, not a regimen.",
        ...R,
        drugClass: "Ipecac alkaloid (repurposed)",
        mechanism: "Binds CHIKV nsP2 and inhibits its helicase function, blocking viral RNA unwinding.",
        indication: "Chikungunya (investigational repurposing); amoebiasis (approved).",
        administration: "Oral/investigational for CHIKV; approved use is strictly limited by toxicity.",
        status: "Preclinical for CHIKV (mouse efficacy 2026)",
        resistance: "Not applicable; no clinical use against CHIKV.",
        links: [
          { label: "Emetine inhibits nsP2 helicase in cells and mice (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13386891" },
        ],
        diseases: ["chikungunya"],
        pathogens: ["chikungunya-virus"],
        targets: ["chikv-nsp2"],
        technologies: ["drug-repurposing"],
        stats: [
          { label: "Mouse outcome", value: "Reduced viremia, prevented joint swelling", note: "2026 repurposing study" },
          { label: "Caveat", value: "Narrow safety margin", note: "cardiac toxicity limits systemic use" },
        ],
      },
    ],
  },

  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "ixchiq-brazil-pvs",
        name: "Ixchiq pilot vaccination strategy (PVS) in Brazil",
        tldr: "The post-licensure effectiveness campaign that moved Ixchiq's future to endemic countries.",
        summary:
          "Launched in February 2026 with Instituto Butantan in selected Brazilian municipalities, the pilot vaccination strategy targets adults 18–59 with 20–40% coverage (about 45,000 vaccinated to date) and doubles as the post-marketing effectiveness and safety study regulators required. It runs under a CEPI grant and with Butantan's locally made VLA1555 arriving in May 2026 — the first large-scale test of whether a chikungunya vaccine can be deployed reactively where the disease actually circulates.",
        ...R,
        phase: "Phase 4 (effectiveness)",
        status: "Active (started February 2026)",
        sponsor: "Valneva with Instituto Butantan; CEPI grant support",
        intervention: "Single-dose Ixchiq in adults 18–59, municipality campaign",
        result: "Ongoing; primary outcomes are effectiveness and safety in a real-world endemic setting.",
        links: [
          { label: "Valneva — chikungunya programme", url: "https://valneva.com/research-development/chikungunya/" },
        ],
        diseases: ["chikungunya"],
        drugs: ["ixchiq", "butantan-chik-vla1555"],
        institutions: ["valneva", "butantan-institute"],
        stats: [
          { label: "Vaccinated so far", value: "≈ 45,000", number: 45000, unit: "people", note: "target 20–40% coverage in pilot municipalities", source: { label: "Valneva — company presentation (July 2026)", url: "https://valneva.com/wp-content/uploads/2026/07/Valneva_Company_Presentation-July-2026.pdf" } },
        ],
      },
      {
        id: "vimkunya-pediatric",
        name: "Vimkunya paediatric Phase 3 (ages 2–11)",
        tldr: "The trial extending the VLP vaccine to children — the age expansion Ixchiq lost.",
        summary:
          "Bavarian Nordic initiated a Phase 3 study of single-dose CHIKV VLP in children aged 2 to 11, the first paediatric trial of the vaccine, aiming to extend the labelled population below the current 12-year floor. Children matter for chikungunya both as a vulnerable group (neonatal and paediatric severe disease) and as an outbreak-driving cohort; with Ixchiq's paediatric future uncertain after the US withdrawal, this trial decides whether any chikungunya vaccine reaches children.",
        ...R,
        phase: "Phase 3",
        status: "Recruiting",
        sponsor: "Bavarian Nordic",
        intervention: "Single-dose CHIKV VLP in children 2–11 years",
        result: "Ongoing; safety and immunogenicity versus the adult correlate of protection.",
        links: [
          { label: "Bavarian Nordic — paediatric Phase 3 initiation", url: "https://www.bavarian-nordic.com/investor/news/news.aspx?news=7238" },
        ],
        diseases: ["chikungunya"],
        drugs: ["vimkunya"],
        technologies: ["chikungunya-vaccination"],
      },
      {
        id: "vimkunya-older-adults",
        name: "Vimkunya over-65 Phase 3",
        tldr: "The trial proving the VLP vaccine works in the elderly — the group the live vaccine lost.",
        summary:
          "A randomised, double-blind, placebo-controlled Phase 3 trial of CHIKV VLP in adults older than 65 (Lancet 2025) showed safety and immunogenicity in exactly the age group where Ixchiq caused chikungunya-like serious events. Together with the cross-lineage neutralisation data, it is why Vimkunya — not Ixchiq — is now the product for older travellers and endemic elderly populations.",
        ...R,
        phase: "Phase 3",
        status: "Reported positive",
        sponsor: "Bavarian Nordic",
        intervention: "Single-dose CHIKV VLP in adults over 65",
        result: "Safe and immunogenic in the over-65 population.",
        links: [
          { label: "VLP safety and immunogenicity over 65 (Lancet 2025)", url: "https://doi.org/10.1016/S0140-6736(25)00372-1" },
        ],
        diseases: ["chikungunya"],
        drugs: ["vimkunya"],
        technologies: ["chikungunya-vaccination"],
      },
    ],
  },

  /* ------------------------------ guidelines ------------------------------ */
  {
    kind: "guidelines",
    records: [
      {
        id: "arbovirus-clinical-guideline-2025",
        name: "WHO clinical management guideline for arboviral diseases (2025)",
        tldr: "The first WHO guideline covering dengue, chikungunya, Zika and yellow fever together.",
        summary:
          "Issued in July 2025, this is WHO's first clinical-management guideline to treat the four major arboviral diseases as one problem — recognising that dengue, chikungunya, Zika and yellow fever co-circulate, share vectors, and are routinely confused. For chikungunya it standardises analgesia-first care (paracetamol until dengue is excluded), newborn and elderly risk stratification, and persistent-arthralgia follow-up. It is the document the disease page's clinical section should now cite instead of the fact sheet alone.",
        ...R,
        issuer: "WHO",
        issued: "July 2025",
        status: "Current",
        scope: "Clinical management of dengue, chikungunya, Zika and yellow fever.",
        recommendation: "Paracetamol-first pain control with dengue exclusion before NSAIDs; risk-stratify newborns and older adults; follow persistent joint pain.",
        links: [
          { label: "WHO — new arbovirus clinical guidelines (July 2025)", url: "https://www.who.int/news/item/10-07-2025-new-who-guidelines-for-clinical-management-of-arboviral-diseases--dengue--chikungunya--zika-and-yellow-fever" },
        ],
        diseases: ["chikungunya", "dengue"],
        institutions: ["who"],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "valneva",
        name: "Valneva",
        tldr: "The specialty vaccine company behind Ixchiq — first to license, first to withdraw in the US, now pivoting to Brazil.",
        summary:
          "Valneva's single-shot live-attenuated VLA1553 became Ixchiq, the world's first licensed chikungunya vaccine (US 2023, EU/Canada/UK/Brazil after). After the FDA suspended the US licence in August 2025 and Valneva withdrew it in January 2026, the programme's centre moved to Brazil: a February 2026 pilot campaign and locally made VLA1555 via Instituto Butantan (approved May 2026), backed by a $41.3M CEPI access grant. The arc — accelerated approval on antibody titres, post-marketing safety action, endemic-country manufacturing — is the case study for how outbreak vaccines live or die after licensure.",
        ...R,
        institutionType: "Vaccine company",
        country: "France",
        city: "Saint-Herblain",
        focus: "Ixchiq development, safety follow-up, and endemic-country access via Butantan.",
        links: [
          { label: "Valneva — chikungunya programme", url: "https://valneva.com/research-development/chikungunya/" },
        ],
        diseases: ["chikungunya"],
        drugs: ["ixchiq", "butantan-chik-vla1555"],
        trials: ["vla1553-trial", "ixchiq-brazil-pvs"],
        stats: [
          { label: "Durability", value: "95% seroresponse at 4 years", note: "single shot" },
          { label: "CEPI access grant", value: "$41.3M", note: "for broader LMIC access" },
        ],
      },
      {
        id: "krisp-stellenbosch",
        name: "KRISP / Stellenbosch University (Tulio de Oliveira group)",
        tldr: "The South African genomics hub tracking chikungunya's African circulation.",
        summary:
          "The KwaZulu-Natal Research Innovation and Sequencing Platform and Stellenbosch University group led by Tulio de Oliveira — the team behind landmark SARS-CoV-2 variant work — now applies genomic epidemiology to chikungunya in Africa, including a 2026 Nature Ecology & Evolution primer and transmission-dynamics studies. African sequencing capacity watching an African-origin virus is the surveillance story the field needs.",
        ...R,
        institutionType: "Genomics research platform",
        country: "South Africa",
        focus: "Genomic epidemiology of chikungunya and other arboviruses in Africa.",
        links: [
          { label: "Chikungunya virus (Nat Ecol Evol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ramphal+Y+chikungunya+de+Oliveira" },
        ],
        diseases: ["chikungunya"],
        technologies: ["genomic-surveillance"],
      },
      {
        id: "acegid",
        name: "African Centre of Excellence for Genomics of Infectious Diseases (ACEGID)",
        tldr: "The Nigerian centre whose mosquito surveillance caught chikungunya circulating nationwide.",
        summary:
          "ACEGID at Redeemer's University, led by Christian Happi, runs nationwide Aedes surveillance that in 2025 detected yellow fever and chikungunya viruses across Nigerian mosquito populations. Built for Ebola and Lassa, its sequencing network is now the early-warning system for arboviruses in West Africa — exactly the sensitive surveillance PAHO's 2026 alert demands, on the continent where the virus was born.",
        ...R,
        institutionType: "Genomics centre of excellence",
        country: "Nigeria",
        focus: "Nationwide arbovirus surveillance and sequencing in West Africa.",
        links: [
          { label: "Nationwide Aedes surveillance, Nigeria (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Nwangwu+UC+Happi+chikungunya+Aedes" },
        ],
        diseases: ["chikungunya", "dengue"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["genomic-surveillance", "vector-surveillance"],
      },
      {
        id: "pasteur-dakar-arbo",
        name: "Institut Pasteur de Dakar arbovirus group",
        tldr: "The Senegalese group redefining which mosquitoes carry chikungunya and sequencing its return.",
        summary:
          "Mawlouth Diallo's group at Institut Pasteur de Dakar combines vector-competence work — 2025 findings challenging Aedes aegypti's primacy as the chikungunya vector — with genomic characterisation of the re-emerging Kedougou outbreak. Francophone West Africa's reference laboratory doing both entomology and genomics in-country is the capacity model for the region's recurrent outbreaks.",
        ...R,
        institutionType: "Reference laboratory research group",
        country: "Senegal",
        city: "Dakar",
        focus: "Chikungunya vector competence and outbreak genomics in West Africa.",
        links: [
          { label: "Kedougou outbreak genomics (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dieng+I+Diagne+chikungunya+Kedougou" },
        ],
        diseases: ["chikungunya", "dengue"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["genomic-surveillance", "vector-surveillance"],
      },
      {
        id: "icipe-arbovirus",
        name: "ICIPE arbovirus ecology group (Kenya)",
        tldr: "The Kenyan institute documenting novel vectors and xenomonitoring for chikungunya.",
        summary:
          "The International Centre of Insect Physiology and Ecology in Nairobi, with researchers including Daniel Tchouassi, documented the invasive Aedes vittatus transmitting chikungunya in Kenya and leads systematic reviews of xenomonitoring for arboviruses. Vector ecology from the East African setting — where urbanisation is creating new transmission interfaces — complements the West African surveillance picture.",
        ...R,
        institutionType: "Insect research institute",
        country: "Kenya",
        city: "Nairobi",
        focus: "Arbovirus vector ecology and xenomonitoring in East Africa.",
        links: [
          { label: "Aedes vittatus in CHIKV transmission, Kenya (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Musili+Lutomiah+vittatus+chikungunya" },
        ],
        diseases: ["chikungunya", "dengue"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["vector-surveillance", "xenomonitoring"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "tulio-de-oliveira",
        name: "Tulio de Oliveira",
        tldr: "The South African genomicist turning Africa's sequencing power on chikungunya.",
        summary:
          "Tulio de Oliveira (KRISP, University of KwaZulu-Natal and Stellenbosch University) led the genomic epidemiology that defined the COVID-19 variant era from Africa. His group now applies the same platform to chikungunya's African circulation and transmission dynamics. His presence in this list is the point: the virus first identified in Tanzania in 1952 is finally being sequenced at scale on the continent where it originated.",
        ...R,
        era: "Contemporary",
        role: "Director, KRISP; Professor, Stellenbosch University",
        knownFor: "Genomic epidemiology from Africa; chikungunya circulation studies.",
        links: [
          { label: "Chikungunya virus (Nat Ecol Evol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Ramphal+Y+chikungunya+de+Oliveira" },
        ],
        diseases: ["chikungunya"],
        institutions: ["krisp-stellenbosch"],
        countries: ["south-africa"],
        technologies: ["genomic-surveillance"],
        terms: ["ntd"],
      },
      {
        id: "christian-happi",
        name: "Christian Happi",
        tldr: "The Nigerian genomicist whose mosquito net caught chikungunya going nationwide.",
        summary:
          "Christian Happi directs ACEGID at Redeemer's University, Nigeria — the sequencing centre built for Ebola and Lassa that in 2025 documented yellow fever and chikungunya viruses across Nigerian Aedes populations. His network is West Africa's early-warning system for the arbovirus surge, and the proof that world-class pathogen genomics can be headquartered in Ede, not exported from it.",
        ...R,
        era: "Contemporary",
        role: "Director, ACEGID, Redeemer's University",
        knownFor: "Nationwide arbovirus genomic surveillance in Nigeria.",
        links: [
          { label: "Nationwide Aedes surveillance, Nigeria (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Nwangwu+UC+Happi+chikungunya+Aedes" },
        ],
        diseases: ["chikungunya", "dengue"],
        institutions: ["acegid"],
        countries: ["nigeria"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["genomic-surveillance", "vector-surveillance"],
        terms: ["ntd"],
      },
      {
        id: "mawlouth-diallo",
        name: "Mawlouth Diallo",
        tldr: "The Dakar entomologist questioning which mosquito really carries chikungunya.",
        summary:
          "Mawlouth Diallo of Institut Pasteur de Dakar pairs vector-competence experiments with outbreak genomics, including the re-emerging Kedougou focus. His 2025 work challenging Aedes aegypti's assumed primacy as the chikungunya vector matters operationally: control aimed at the wrong species fails, and secondary vectors (vittatus, albopictus) are expanding with urbanisation and climate.",
        ...R,
        era: "Contemporary",
        role: "Medical entomologist, Institut Pasteur de Dakar",
        knownFor: "Chikungunya vector competence and Kedougou outbreak genomics.",
        links: [
          { label: "Kedougou outbreak genomics (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Dieng+I+Diagne+chikungunya+Kedougou" },
        ],
        diseases: ["chikungunya"],
        institutions: ["pasteur-dakar-arbo"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        technologies: ["vector-surveillance"],
        terms: ["vector-borne", "ntd"],
      },
      {
        id: "daniel-tchouassi",
        name: "Daniel Tchouassi",
        tldr: "The ICIPE ecologist building xenomonitoring for East African arboviruses.",
        summary:
          "Daniel Tchouassi of ICIPE Nairobi works on mosquito arbovirus ecology — including the invasive Aedes vittatus now implicated in Kenyan chikungunya transmission — and systematic xenomonitoring evidence. East Africa's urbanising transmission interfaces are the next frontier the field must surveil, and his group writes the methods.",
        ...R,
        era: "Contemporary",
        role: "Researcher, International Centre of Insect Physiology and Ecology, Nairobi",
        knownFor: "Arbovirus xenomonitoring and novel-vector documentation in Kenya.",
        links: [
          { label: "Aedes vittatus in CHIKV transmission, Kenya (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Musili+Lutomiah+vittatus+chikungunya" },
        ],
        diseases: ["chikungunya"],
        institutions: ["icipe-arbovirus"],
        countries: ["kenya"],
        technologies: ["vector-surveillance", "xenomonitoring"],
        terms: ["vector-borne", "ntd"],
      },
      {
        id: "desiree-labeaud",
        name: "A. Desiree LaBeaud",
        tldr: "The Stanford physician-scientist measuring chikungunya's true burden in Kenyan children.",
        summary:
          "A. Desiree LaBeaud (Stanford) has run Kenyan cohort studies for two decades quantifying dengue and chikungunya seroprevalence, seroconversion risk factors, and paediatric burden — the denominator data without which vaccine targeting is guesswork. Her urban-cohort work with Kenyan partners underpins the endemic-transmission evidence base for East Africa.",
        ...R,
        era: "Contemporary",
        role: "Professor of Pediatrics and Epidemiology, Stanford University; Kenya cohort lead",
        knownFor: "Kenyan seroprevalence cohorts; paediatric arbovirus burden.",
        links: [
          { label: "Dengue/chikungunya seroprevalence, urban Kenya (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Bayrau+LaBeaud+dengue+chikungunya+seroprevalence" },
        ],
        diseases: ["chikungunya", "dengue"],
        countries: ["kenya"],
        terms: ["ntd"],
      },
      {
        id: "doudou-ouedraogo",
        name: "Donald D. Ouédraogo",
        tldr: "The Burkinabè rheumatologist documenting what chikungunya does to joints after the fever ends.",
        summary:
          "Donald Ouédraogo's 2026 PLoS NTD study quantified post-chikungunya chronic arthralgia frequency and risk factors in Burkina Faso — the African chronic-burden evidence the DALY models need. Rheumatology follow-up in Ouagadougou, not just acute-fever counts, is what turns arthralgia from an anecdote into a care pathway.",
        ...R,
        era: "Contemporary",
        role: "Rheumatologist and researcher, Burkina Faso",
        knownFor: "Post-chikungunya chronic arthralgia epidemiology.",
        links: [
          { label: "Post-chikungunya chronic arthralgia, Burkina Faso (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kabore+Ouedraogo+chikungunya+arthralgia+Burkina" },
        ],
        diseases: ["chikungunya"],
        terms: ["ntd"],
      },
      {
        id: "henrik-salje",
        name: "Henrik Salje",
        tldr: "The modeller who finally counted chikungunya: 35 million infections a year.",
        summary:
          "Henrik Salje (Cambridge) led the 2025 Nature Medicine global-burden study — 35 million annual infections, 17.8 million symptomatic, outbreaks every ~6 years — plus the Paraguay reactive-campaign model showing an infection-blocking vaccine could have prevented 88% of cases. His numbers are now the denominator for every vaccine-introduction decision, and the reason the field can argue burden in the same units as dengue.",
        ...R,
        era: "Contemporary",
        role: "Professor of Epidemiology, University of Cambridge",
        knownFor: "Global CHIKV burden estimates; reactive vaccination modelling.",
        links: [
          { label: "Global burden and vaccination benefit (Nat Med 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12283390" },
        ],
        diseases: ["chikungunya"],
        terms: ["ntd", "elimination"],
        stats: [
          { label: "Burden estimated", value: "35M infections/yr", note: "17.8M symptomatic" },
        ],
      },
      {
        id: "scott-weaver",
        name: "Scott Weaver",
        tldr: "The UTMB alphavirologist who has defined chikungunya science for two decades.",
        summary:
          "Scott Weaver (University of Texas Medical Branch) is the field's senior alphavirologist: fatal-outcome pathophysiology, the Americas decade-of-burden review, the 2025 Nature Reviews Microbiology synthesis, and the study showing Ixchiq's strain is not mosquito-transmissible. When a new claim about chikungunya emerges — vector shifts, fatality risk, vaccine transmissibility — his laboratory is usually where it gets tested.",
        ...R,
        era: "Contemporary",
        role: "Professor of Microbiology and Immunology, UTMB Galveston",
        knownFor: "Alphavirus pathogenesis, emergence, and burden reviews.",
        links: [
          { label: "CHIKV and emerging arthritogenic alphaviruses (Nat Rev Microbiol 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=de+Souza+Weaver+chikungunya+arthritogenic+alphaviruses" },
        ],
        diseases: ["chikungunya"],
        vectors: ["aedes-aegypti", "aedes-albopictus"],
        terms: ["vector-borne", "ntd"],
      },
      {
        id: "andreas-suhrbier",
        name: "Andreas Suhrbier",
        tldr: "The immunologist explaining why chikungunya arthritis refuses to end.",
        summary:
          "Andreas Suhrbier (QIMR Berghofer, Australia) leads the immunopathogenesis of chronic chikungunya arthritis — innate sensing, interferon dysregulation, and why joint disease persists after viremia clears — plus insect-specific-virus vaccine platforms. His work is the bridge between the rheumatology clinic and the antiviral lab: chronicity is immunological, so the cure schedule must be too.",
        ...R,
        era: "Contemporary",
        role: "Head, Inflammation Biology, QIMR Berghofer",
        knownFor: "Chronic CHIKV arthritis immunopathogenesis.",
        links: [
          { label: "Innate sensing of CHIKV (Front Immunol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Suhrbier+chikungunya+innate+alphavirus" },
        ],
        diseases: ["chikungunya"],
        terms: ["ntd"],
      },
      {
        id: "nadine-wressnigg",
        name: "Nadine Wressnigg",
        tldr: "The Valneva physician-scientist who took Ixchiq from Phase 3 to licensure.",
        summary:
          "Nadine Wressnigg led the VLA1553 clinical programme culminating in the 2023 Lancet Phase 3 and the world's first chikungunya licensure — then steered it through the 2025–2026 safety crisis into the Brazil pivot. Industry trialists rarely appear in NTD pantheons; a single-shot vaccine that reached 95% four-year seroresponse earns the exception.",
        ...R,
        era: "Contemporary",
        role: "Clinical development lead, Valneva (VLA1553/Ixchiq)",
        knownFor: "VLA1553 Phase 3 and first CHIKV licensure.",
        links: [
          { label: "Single-shot live-attenuated CHIKV vaccine Phase 3 (Lancet 2023)", url: "https://pubmed.ncbi.nlm.nih.gov/37321235" },
        ],
        diseases: ["chikungunya"],
        institutions: ["valneva"],
        drugs: ["ixchiq"],
        trials: ["vla1553-trial"],
        terms: ["ntd"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "chikv-reactive-vlp-campaigns",
        name: "Reactive single-dose VLP campaigns for chikungunya outbreaks",
        tldr: "Use Vimkunya's non-infectious single dose the way the models say works: vaccinate reactively around outbreaks, starting with the elderly.",
        summary:
          "The Paraguay model (88% of cases preventable with an infection-blocking vaccine even when deployed late) plus Réunion's 2025 mass Ixchiq use prove reactive chikungunya vaccination is operationally possible. Vimkunya's profile — single dose, non-infectious, over-65 data, 12+ label expanding downward — fits outbreak response in a way Ixchiq no longer can. The missing piece is a standing protocol: pre-positioned doses, a seroprotection-correlate trigger, and CEPI/Gavi financing so a 2026-style resurgence meets vaccine instead of press releases. This is distinct from routine immunisation debates: it treats the vaccine as an outbreak tool like reactive OCV.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pre-position Vimkunya with a deployment protocol in two high-risk settings; on outbreak declaration, run a ring/cluster reactive campaign measuring cases averted versus modelled counterfactual and safety in over-65s.",
        owner: "CEPI with PAHO/WHO and Bavarian Nordic",
        links: [
          { label: "Paraguay reactive-campaign model (Nat Med 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12283388" },
          { label: "PAHO epidemiological alert (Feb 2026)", url: "https://www.paho.org/en/documents/epidemiological-alert-chikungunya-10-february-2026" },
        ],
        diseases: ["chikungunya"],
        drugs: ["vimkunya"],
        trials: ["vimkunya-older-adults", "chikv-vlp-followup"],
        bottlenecks: ["vaccine-gap", "funding-gap"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Modelled impact", value: "88% of cases preventable", note: "Paraguay outbreak, infection-blocking vaccine" },
          { label: "Precedent", value: "Réunion 2025 mass Ixchiq use", note: "54,500 cases, first reactive deployment" },
        ],
      },
      {
        id: "chikv-nsp2-antiviral-program",
        name: "An nsP2-directed antiviral programme for chronic chikungunya",
        tldr: "Push the oral vinyl-sulfone leads and emetine's helicase signal toward the first CHIKV antiviral, aimed at persistent arthralgia.",
        summary:
          "Chikungunya has vaccines but no antiviral, and vaccines cannot help the millions already living with persistent arthralgia. nsP2 is now the obvious bet: J12/J13 vinyl sulfones (oral, mouse-efficacious), the RA-0002034 covalent fragment (cell-active, broad-alphavirus), peptide P1, and emetine's in-vivo helicase validation. A coordinated lead-optimisation programme — with the washout-plus-chronic-model gating the Chagas work recommends — could deliver what dengue never has: a small-molecule antiviral for an Aedes virus, with chronic arthritis (not just acute viremia) as the endpoint.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Optimise J12/J13 to a preclinical candidate; test against persistent-arthralgia mouse models with joint swelling (not only viremia) as the readout, plus emetine dose-ranging as a repurposing control.",
        owner: "UNC antiviral group with NIAID/CEPI antiviral funding",
        links: [
          { label: "nsP2 vinyl-sulfone leads with mouse efficacy", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11440364" },
          { label: "Covalent nsP2 fragment RA-0002034 (PNAS)", url: "https://www.pnas.org/doi/10.1073/pnas.2409166121" },
        ],
        diseases: ["chikungunya"],
        drugs: ["emetine"],
        targets: ["chikv-nsp2"],
        trials: ["vimkunya-pediatric"],
        bottlenecks: ["funding-gap"],
        terms: ["pdp"],
        stats: [
          { label: "Leads", value: "J12/J13 + RA-0002034 + P1 + emetine", note: "four chemotypes, one target" },
          { label: "Endpoint that matters", value: "Persistent arthralgia", note: "not acute viremia" },
        ],
      },
      {
        id: "chikv-chronic-care-pathway",
        name: "A chronic-arthralgia care pathway with counted DALYs",
        tldr: "Turn post-chikungunya joint disease from an anecdote into a rheumatology pathway — and make the DALY models pay for it.",
        summary:
          "The 0.96–2.3M DALY estimates and the Burkina Faso arthralgia cohort prove chronic joint disease is the bulk of chikungunya's burden, yet no guideline-country pathway exists for it: patients bounce between GPs, NSAIDs, and neglect. A standardised pathway — 3-month rheumatology referral trigger, physiotherapy, disease-activity scoring borrowed from rheumatoid arthritis, and inclusion in national burden accounting — would convert invisible disability into fundable demand, the same move lymphoedema care made for filariasis. It also creates the trial population an nsP2 antiviral needs.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Pilot a 3-month referral-plus-physiotherapy pathway in two post-outbreak settings (Americas + West Africa), measuring disability scores and cost per DALY averted against usual care.",
        owner: "WHO with rheumatology societies and PAHO",
        links: [
          { label: "Post-chikungunya arthralgia, Burkina Faso (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Kabore+Ouedraogo+chikungunya+arthralgia+Burkina" },
          { label: "WHO arbovirus clinical guideline (2025)", url: "https://www.who.int/news/item/10-07-2025-new-who-guidelines-for-clinical-management-of-arboviral-diseases--dengue--chikungunya--zika-and-yellow-fever" },
        ],
        diseases: ["chikungunya"],
        guidelines: ["arbovirus-clinical-guideline-2025"],
        institutions: ["who", "paho"],
        bottlenecks: ["funding-gap"],
        terms: ["ntd", "elimination"],
        stats: [
          { label: "Burden", value: "0.96–2.3M DALYs (2020)", note: "mostly chronic disability" },
        ],
      },
    ],
  },
];
