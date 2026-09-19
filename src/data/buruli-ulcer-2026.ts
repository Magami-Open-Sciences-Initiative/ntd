import type { Kind } from "@/lib/schema";
import { iso2, iso3, geonames } from "./codes";

const R = { asOf: "2026-09" };

/**
 * Buruli ulcer 2026 fact-check additions: the BLMs4BU shortening trial, the
 * Melbourne mosquito autodissemination trial, the nationwide Benin incidence
 * study, the mobile suitcase laboratory and RS-ratio biomarker diagnostics,
 * the GPR84 host target, and the Africa CDC / Kumasi / Angers / Benin groups
 * driving the current research. The fact-check corrections (ulceration timing,
 * the four standard laboratory methods, lesion-site distribution, BCG) went
 * into the disease record and spike. Wired into `index.ts` alongside YAWS_2026.
 */
export const BURULI_ULCER_2026: { kind: Kind; records: unknown[] }[] = [
  /* -------------------------------- trials -------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "blms4bu",
        name: "BLMs4BU: beta-lactam regimen to shorten Buruli ulcer therapy",
        tldr: "A Phase 2 trial testing whether adding amoxicillin-clavulanate lets the 8-week cure finish in 4 weeks.",
        summary:
          "Buruli ulcer is cured by eight weeks of rifampicin plus clarithromycin, but eight weeks is a long journey for patients far from a clinic. BLMs4BU is a Phase 2 randomised trial testing whether adding amoxicillin-clavulanate — a beta-lactam/beta-lactamase-inhibitor combination long used for other infections — to the standard rifampicin–clarithromycin pair allows the course to be cut to four weeks without loss of cure. It is led by the Fundación Agencia Aragonesa para la Investigación y Desarrollo (ARAID) with the University of Zaragoza and, critically, the Université d'Abomey-Calavi in Benin, where patients are enrolled; the Raoul Follereau Foundation, Anesvad, the Instituto de Salud Carlos III, the Tres Cantos Open Lab Foundation and GSK collaborate. Beginning in December 2021 with a target of 140 participants and a primary completion in 2026, it is the most advanced alternative to the telacebec route for shortening treatment — and unlike a new molecule, it uses two off-patent antibiotics already on the shelf.",
        ...R,
        phase: "Phase 2",
        registry: "NCT05169554",
        registryUrl: "https://clinicaltrials.gov/study/NCT05169554",
        status: "Ongoing",
        intervention: "Rifampicin + clarithromycin + amoxicillin–clavulanate for 4 weeks vs standard 8 weeks",
        result: "Primary endpoint pending; co-administered amoxicillin–clavulanate has shown a shortening effect in preclinical work.",
        links: [
          { label: "ClinicalTrials.gov — BLMs4BU (NCT05169554)", url: "https://clinicaltrials.gov/study/NCT05169554" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        drugs: ["rifampicin", "clarithromycin"],
        institutions: ["abomey-calavi"],
        terms: ["ntd"],
        stats: [
          { label: "Design", value: "140 participants, Phase 2", note: "RC8 (8 weeks) vs RCA4 (4 weeks)" },
          { label: "Start", value: "December 2021", note: "primary completion 2026" },
        ],
      },
      {
        id: "buruli-autodissemination-trial",
        name: "Autodissemination stations to cut Buruli ulcer risk (Melbourne trial)",
        tldr: "The first randomised evidence that controlling mosquitoes lowers human Buruli ulcer risk.",
        summary:
          "In urban Victoria the Buruli ulcer bacterium is transmitted in part by Aedes notoscriptus mosquitoes, which can pick M. ulcerans up from possum excreta and contaminate people they bite. This randomised controlled field trial, run in an endemic part of Melbourne between January and March 2024, deployed autodissemination mosquito-control stations containing pyriproxyfen (an insect growth regulator/larvicide) and the entomopathogenic fungus Beauveria bassiana: six geographic areas each received 100 stations for eight weeks, six control areas received none. The stations suppressed Aedes notoscriptus populations and reduced modelled Buruli ulcer risk, giving the first controlled evidence that vector control can lower human risk rather than merely correlating with it. Whether an equivalent intervention can be designed for African freshwater transmission cycles — where the vectors and reservoirs are different and largely unknown — remains the open question.",
        ...R,
        phase: "Randomised controlled field trial",
        registry: "Melbourne, Australia (2024)",
        status: "Reported 2026",
        intervention: "Autodissemination stations with pyriproxyfen + Beauveria bassiana vs no stations",
        result: "Suppressed Ae. notoscriptus and reduced Buruli ulcer risk.",
        links: [
          { label: "Autodissemination stations reduce Buruli ulcer risk (Nat Microbiol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42661072" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["mosquito-autodissemination", "early-warning-hotspots"],
        institutions: ["doherty-institute"],
        terms: ["vector-borne", "ntd"],
        stats: [
          { label: "Design", value: "6 intervention vs 6 control areas", note: "100 stations per area, 8 weeks" },
          { label: "Result", value: "Lower Buruli ulcer risk", note: "first controlled evidence for vector control" },
        ],
      },
      {
        id: "buruli-benin-incidence",
        name: "PCR-confirmed Buruli ulcer incidence in Benin, 2008–2024",
        tldr: "A 16-year nationwide study linking the falling incidence to shrinking water and warming — not just control.",
        summary:
          "As reported Buruli ulcer cases fell across Africa, the crucial question was whether the decline reflected real epidemiological change or failing surveillance. This nationwide, retrospective observational study used 16 years (2008–2024) of Benin's National Buruli Ulcer Control Programme records from four specialised centres — 2,568 PCR-confirmed patients — and integrated environmental and climatic data. Incidence fell by nearly 80%, from 1.37 to 0.24 per 10,000 inhabitants, with the steepest drop in children aged 15 or under and a disappearance of historical age and sex differences. The fall coincided with a 25–30% reduction in open water surface and a rise of more than 1°C in mean air temperature, and M. ulcerans DNA was undetectable in 122 aquatic sites sampled between 2021 and 2024. The authors read this as genuine epidemiological change in which climate and land use have played a part — which means foci may be disappearing, but also that they could re-emerge as conditions change, making continued surveillance essential.",
        ...R,
        phase: "Nationwide retrospective observational study",
        registry: "Benin, 2008–2024 (Lancet Global Health 2026)",
        status: "Reported 2026",
        intervention: "Not applicable (observational)",
        result: "Incidence fell ~80%, coinciding with shrinking open water and >1°C warming; M. ulcerans DNA undetectable in 122 aquatic sites.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["genomic-surveillance", "environmental-surveillance"],
        institutions: ["incit-angers", "abomey-calavi"],
        countries: ["benin"],
        terms: ["surveillance-data-gap", "ntd"],
        stats: [
          { label: "Patients", value: "2,568", number: 2568, unit: "patients", note: "PCR-confirmed, 2008–2024" },
          { label: "Incidence fall", value: "≈ 80%", number: -80, unit: "%", note: "1.37 → 0.24 per 10,000" },
          { label: "Environmental signal", value: "−25–30% open water", number: -30, unit: "%", note: "and >1°C warming; no M. ulcerans DNA in 122 aquatic sites" },
        ],
      },
    ],
  },

  /* ------------------------------ diagnostics ----------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "buruli-rpa-suitcase",
        name: "Mobile 'suitcase laboratory' (recombinase polymerase amplification)",
        tldr: "A field laboratory in two Pelican cases that brings M. ulcerans confirmation to the community.",
        summary:
          "Molecular PCR is the gold standard for confirming Buruli ulcer, but it usually happens in a reference laboratory far from where patients live, so results arrive too late to guide early treatment. This platform, developed and deployed in Ghana by the Kumasi Centre for Collaborative Research, packs a recombinase polymerase amplification (RPA) assay for M. ulcerans into two portable cases (each about 56 × 45.5 × 26.5 cm). Evaluated in the field, it showed that clinically suspected lesions can be confirmed close to the community, cutting the delay and the cost of transporting samples to a distant laboratory. It directly addresses WHO's research priority for a rapid, field-usable diagnostic — though RPA still needs a cold chain for reagents and trained staff, and it is a confirmation test rather than the simple point-of-care device the target product profile envisages.",
        ...R,
        method: "Recombinase polymerase amplification (RPA) for M. ulcerans DNA, in a portable two-case laboratory",
        sampleType: "Skin lesion swab / fine-needle aspirate",
        performance: "Demonstrated feasible for field deployment in Ghana; validated against the reference molecular test",
        availability: "Deployed in Ghana (Kumasi Centre for Collaborative Research); not yet routine",
        turnaround: "Hours, at or near the point of care",
        links: [
          { label: "Mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42081507" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["molecular-rpa"],
        institutions: ["kccr", "who"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Form factor", value: "Two portable cases", note: "≈56 × 45.5 × 26.5 cm each" },
        ],
      },
      {
        id: "buruli-rs-ratio-biomarker",
        name: "Ribosomal RNA synthesis ratio (RS-ratio) biomarker",
        tldr: "A metabolic-activity readout to judge whether a shorter Buruli ulcer regimen is actually working.",
        summary:
          "Comparing drug regimens against M. ulcerans normally relies on colony-forming-unit counts, which are slow and cumbersome — a real obstacle to testing shorter treatments. The ribosomal RNA synthesis ratio (RS-ratio) measures ribosome biogenesis as a proxy for bacterial metabolic activity, and is a promising predictive biomarker for treatment shortening in tuberculosis. This work evaluated it against M. ulcerans and found it tracks drug activity, offering a faster in-vitro way to screen candidate regimens. If it translates to patient samples, it could help identify who can safely stop antibiotics early — the biomarker that would make shortened therapy practical and safe rather than merely possible.",
        ...R,
        method: "Ribosomal RNA synthesis ratio (RS-ratio) as a proxy for mycobacterial metabolic activity",
        sampleType: "In-vitro culture; candidate for patient specimens",
        performance: "Tracks drug activity against M. ulcerans in vitro; patient validation pending",
        availability: "Research use",
        turnaround: "Faster than colony-forming-unit assays",
        links: [
          { label: "Ribosomal RNA synthesis ratio biomarker in M. ulcerans (Infect Dis Poverty 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42104494" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["molecular-pcr"],
        bottlenecks: ["diagnostics-gap"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Purpose", value: "Guide treatment shortening", note: "predictive biomarker, TB precedent" },
        ],
      },
    ],
  },

  /* -------------------------------- targets ------------------------------- */
  {
    kind: "targets",
    records: [
      {
        id: "gpr84",
        name: "GPR84 (orphan G-protein-coupled receptor)",
        tldr: "A host receptor that sustains the inflammation destroying tissue in Buruli ulcer — a host-directed target.",
        summary:
          "GPR84 is an orphan G-protein-coupled receptor expressed on myeloid cells. In Buruli ulcer, M. ulcerans was found to induce Gpr84 expression through Toll-like receptor 2, driving a self-amplifying proinflammatory cytokine loop that perpetuates tissue destruction. Genetic inactivation of GPR84 in mice led to spontaneous healing of ulcerative lesions, recapitulating the rare spontaneous healing seen in some human patients. It is a striking instance of a host-directed approach: rather than killing the bacterium, damping the host's own damaging inflammation could limit ulceration and disability. GPR84 also appears among the OpenTargets associations for Buruli ulcer, linking the experimental finding to human genetic evidence.",
        ...R,
        targetType: "Host protein (G-protein-coupled receptor)",
        organism: "Homo sapiens (host) — inflammation driven by Mycobacterium ulcerans infection",
        rationale:
          "Genetic inactivation in mice causes spontaneous healing of M. ulcerans lesions; sustains a TLR2-driven proinflammatory loop; an OpenTargets-associated gene for Buruli ulcer.",
        druggability: "Orphan GPCR with known small-molecule agonists/antagonists — a tractable host-directed target.",
        knownLigands: "GPR84 agonists and antagonists (research compounds)",
        links: [
          { label: "Science Translational Medicine — GPR84 drives inflammation in Buruli ulcer (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41984933" },
          { label: "Open Targets — Buruli ulcer disease (MONDO_0000327)", url: "https://platform.opentargets.org/disease/MONDO_0000327" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        terms: ["host-directed-therapy"],
        stats: [
          { label: "Mechanism", value: "Host proinflammatory loop", note: "knockout mice healed spontaneously" },
        ],
      },
      {
        id: "slc11a1",
        name: "SLC11A1 (NRAMP1)",
        tldr: "The strongest human genetic association with Buruli ulcer — a macrophage metal transporter shaping susceptibility.",
        summary:
          "SLC11A1 (also called NRAMP1) encodes a macrophage transporter of divalent metals that is central to innate control of intracellular pathogens, and it is the top-associated gene for Buruli ulcer in OpenTargets. Variants at this locus have been linked to altered susceptibility to mycobacterial disease, including Buruli ulcer, and this fits the known biology: the outcome of M. ulcerans infection depends heavily on how effectively the host's macrophages handle the bacterium. It is not yet a drug target — its value today is as a susceptibility and stratification signal, and as a reminder that Buruli ulcer outcome is a host-pathogen interaction, not only a bacterial one.",
        ...R,
        targetType: "Host protein (metal transporter)",
        organism: "Homo sapiens (host)",
        rationale:
          "Top OpenTargets association for Buruli ulcer disease; NRAMP1 controls macrophage handling of intracellular mycobacteria.",
        druggability: "Not directly druggable today; a susceptibility and stratification signal.",
        knownLigands: "None therapeutic; natural-allele variation under study",
        links: [
          { label: "Open Targets — Buruli ulcer disease (MONDO_0000327)", url: "https://platform.opentargets.org/disease/MONDO_0000327" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        terms: ["host-directed-therapy"],
        stats: [
          { label: "Open Targets association", value: "Top-ranked host gene", note: "susceptibility, not a drug target" },
        ],
      },
    ],
  },

  /* ---------------------------- institutions ---------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "kccr",
        name: "Kumasi Centre for Collaborative Research (KCCR), KNUST",
        tldr: "The Ghanaian centre that runs the country's Buruli ulcer diagnostics, epidemiology and AMR research.",
        summary:
          "The Kumasi Centre for Collaborative Research in Tropical Medicine, at Kwame Nkrumah University of Science and Technology, is the hub of Buruli ulcer research in Ghana. Its teams developed and field-tested the mobile suitcase laboratory and rapid RPA test for M. ulcerans, characterized secondary bacterial infections and antimicrobial resistance in Buruli ulcer lesions, run evidence-based targeting of districts for skin-NTD active surveillance, and work on yaws alongside Buruli ulcer under the integrated skin-NTD model. Ghana remains one of the countries that regularly reports Buruli ulcer, and KCCR supplies much of the operational evidence for early detection across West Africa.",
        ...R,
        institutionType: "Research centre",
        country: "Ghana",
        city: "Kumasi",
        focus: "Buruli ulcer and skin-NTD diagnostics, epidemiology, antimicrobial resistance and field deployment.",
        links: [
          { label: "Mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42081507" },
          { label: "Secondary infections and AMR in Buruli ulcer, Ghana (BMC Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42420877" },
        ],
        diseases: ["buruli-ulcer", "yaws"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["molecular-rpa", "genomic-surveillance"],
        institutions: ["who"],
        countries: ["ghana"],
        terms: ["skin-ntds", "ntd"],
      },
      {
        id: "incit-angers",
        name: "INCIT, INSERM, University of Angers",
        tldr: "The French laboratory behind much of the modern understanding of M. ulcerans transmission and pathogenesis.",
        summary:
          "The Immunity and Infectious Diseases Centre (INCIT) at the University of Angers and CHU Angers, with INSERM, has worked on Buruli ulcer for years — on M. ulcerans ecology and transmission, host immune responses, and clinical epidemiology in West Africa. Its researchers co-authored the 2026 nationwide Benin incidence study that linked the falling case numbers to environmental change, and the work identifying GPR84 as a driver of inflammation. It pairs laboratory pathogenesis with long-standing field collaborations in Benin, making it one of the most productive Buruli ulcer groups anywhere.",
        ...R,
        institutionType: "Research institute",
        country: "France",
        city: "Angers",
        focus: "M. ulcerans ecology, transmission and pathogenesis, with field collaborations in West Africa.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
          { label: "GPR84 drives inflammation in Buruli ulcer (Sci Transl Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41984933" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        targets: ["gpr84"],
        technologies: ["genomic-surveillance"],
        terms: ["host-directed-therapy"],
      },
      {
        id: "abomey-calavi",
        name: "Université d'Abomey-Calavi",
        tldr: "The Beninese university anchoring Buruli ulcer field research and the BLMs4BU trial.",
        summary:
          "The Université d'Abomey-Calavi in Benin, through its CIFRED doctoral and research structure, is a longstanding partner in Buruli ulcer research and the clinical site for the BLMs4BU shortening trial, alongside Benin's national control programme and the Raoul Follereau treatment centres. Benin has been among the countries reporting Buruli ulcer consistently, and the university's collaboration with the University of Angers produced the 2026 nationwide incidence study that quantified the disease's decline. Its role illustrates the essential African academic–clinical partnership behind Buruli ulcer evidence.",
        ...R,
        institutionType: "University",
        country: "Benin",
        city: "Abomey-Calavi",
        focus: "Buruli ulcer field epidemiology and clinical trials in Benin.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
          { label: "ClinicalTrials.gov — BLMs4BU (NCT05169554)", url: "https://clinicaltrials.gov/study/NCT05169554" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["incit-angers"],
        countries: ["benin"],
        terms: ["ntd"],
      },
      {
        id: "raoul-follereau",
        name: "Fondation Raoul Follereau",
        tldr: "The foundation whose local treatment centres deliver Buruli ulcer care and support Beninese research.",
        summary:
          "Fondation Raoul Follereau is an international NGO that has supported leprosy and Buruli ulcer care in West Africa for decades, operating diagnostic and treatment centres (CDTUB/CDTLUB) in Benin and elsewhere. Its centres — in Lalo, Pobè, Allada and Zagnanando — supplied patient data to the 2026 nationwide Benin incidence study and are clinical partners in the BLMs4BU shortening trial, through its Fondation Follereau Luxembourg. It exemplifies the service-delivery organisations without which Buruli ulcer patients would have no access to antibiotics or wound care, and whose routine data underpin much of the epidemiology.",
        ...R,
        institutionType: "NGO / care provider",
        country: "Benin",
        focus: "Buruli ulcer and leprosy diagnosis, treatment and rehabilitation in West Africa.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
        ],
        diseases: ["buruli-ulcer", "leprosy"],
        countries: ["benin"],
        terms: ["ntd"],
      },
    ],
  },

  /* -------------------------------- people -------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "karl-fai",
        name: "Karl N. Fai",
        tldr: "The Cameroonian physician at Africa CDC leading the 2026 authoritative review of Buruli ulcer in Africa.",
        summary:
          "Karl Fai (Africa Centres for Disease Control and Prevention, Addis Ababa, Ethiopia, of Cameroonian origin) led the 2026 Nature Reviews Disease Primers review 'Buruli ulcer in Africa: between innovation and pragmatism', which frames the field's central tension: real innovation in diagnostics and drugs set against the pragmatics of delivering care in remote, under-resourced districts. Working from the continental public-health body, his perspective connects the research pipeline to what national programmes can actually implement — the bridge the disease most needs.",
        ...R,
        era: "Contemporary",
        role: "Physician-researcher, Africa Centres for Disease Control and Prevention, Addis Ababa",
        knownFor: "Buruli ulcer in Africa; continental NTD strategy.",
        links: [
          { label: "Buruli ulcer in Africa: between innovation and pragmatism (Nat Rev Dis Primers 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42350410" },
        ],
        diseases: ["buruli-ulcer"],
        institutions: ["africa-cdc"],
        terms: ["ntd", "skin-ntds"],
      },
      {
        id: "dorothy-yeboah-manu",
        name: "Dorothy Yeboah-Manu",
        tldr: "The Ghanaian bacteriologist who has led Buruli ulcer laboratory research and molecular surveillance for two decades.",
        summary:
          "Dorothy Yeboah-Manu (Noguchi Memorial Institute for Medical Research, University of Ghana) is a leading African authority on Buruli ulcer and other mycobacterial diseases, with long-running work on the bacteriology, molecular epidemiology and laboratory confirmation of M. ulcerans, and on strengthening diagnostic capacity in Ghana and the region. She co-authored the 2026 work on evidence-based targeting of districts for skin-NTD active surveillance, connecting laboratory science to where surveillance should be concentrated. Her career spans the shift from surgery to antibiotics and from clinical to molecular diagnosis.",
        ...R,
        era: "Contemporary",
        role: "Professor / researcher, Noguchi Memorial Institute for Medical Research, University of Ghana",
        knownFor: "Buruli ulcer bacteriology and molecular epidemiology in Ghana.",
        links: [
          { label: "Evidence-based targeting of districts for skin-NTD surveillance, Ghana (PLOS Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41894359" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["noguchi"],
        countries: ["ghana"],
        technologies: ["genomic-surveillance"],
        terms: ["skin-ntds", "ntd"],
      },
      {
        id: "michael-frimpong",
        name: "Michael Frimpong",
        tldr: "The Ghanaian scientist who built the mobile suitcase laboratory for Buruli ulcer diagnosis.",
        summary:
          "Michael Frimpong (Kumasi Centre for Collaborative Research, KNUST, Ghana) develops point-of-care and field molecular diagnostics for Buruli ulcer and other skin NTDs. He is senior author of the 2026 field evaluation of the mobile 'suitcase laboratory' that performs recombinase polymerase amplification for M. ulcerans close to where patients present, and has driven rapid-test development for the disease. His work directly answers WHO's research priority for an early, field-usable confirmation test — the missing piece that keeps diagnosis late and disability common.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kumasi Centre for Collaborative Research, KNUST, Ghana",
        knownFor: "Field molecular diagnostics for Buruli ulcer and skin NTDs.",
        links: [
          { label: "Mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42081507" },
        ],
        diseases: ["buruli-ulcer"],
        diagnostics: ["buruli-rpa-suitcase", "buruli-ulcer-lamp"],
        institutions: ["kccr"],
        countries: ["ghana"],
        technologies: ["molecular-rpa"],
        terms: ["diagnostics-gap", "ntd"],
      },
      {
        id: "bernadette-agbavor",
        name: "Bernadette Agbavor",
        tldr: "The Ghanaian researcher characterizing co-infections and resistance in Buruli ulcer lesions.",
        summary:
          "Bernadette Agbavor (Kumasi Centre for Collaborative Research, KNUST, Ghana) works on the microbiology of Buruli ulcer lesions — including the field evaluation of the mobile suitcase laboratory and the characterization of secondary bacterial infections and antimicrobial-resistant Staphylococcus aureus in Ghanaian patients. Her work matters because Buruli ulcer wounds are frequently colonised by other bacteria that delay healing and can drive antibiotic resistance, a dimension often left out of the single-pathogen story.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kumasi Centre for Collaborative Research, KNUST, Ghana",
        knownFor: "Secondary infections and AMR in Buruli ulcer lesions.",
        links: [
          { label: "Mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42081507" },
          { label: "Secondary infections and AMR in Buruli ulcer, Ghana (BMC Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42420877" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["kccr"],
        countries: ["ghana"],
        terms: ["amr", "ntd"],
      },
      {
        id: "estelle-marion",
        name: "Estelle Marion",
        tldr: "The French researcher who quantified Benin's falling Buruli ulcer burden and linked it to the environment.",
        summary:
          "Estelle Marion (INCIT, INSERM, University of Angers) studies the ecology, transmission and epidemiology of Buruli ulcer, with sustained field collaborations in Benin. She is a senior author of the 2026 nationwide Benin study that combined 16 years of PCR-confirmed patient data with environmental and climatic variables, finding an ~80% fall in incidence alongside shrinking open water and warming — and no detectable M. ulcerans DNA in 122 aquatic sites. Her work reframes the African decline as possibly environmental as much as programmatic, with important implications for surveillance and for predicting re-emergence.",
        ...R,
        era: "Contemporary",
        role: "Researcher, INCIT, INSERM, University of Angers, France",
        knownFor: "Buruli ulcer ecology, transmission and epidemiology in West Africa.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["incit-angers", "abomey-calavi"],
        technologies: ["genomic-surveillance", "environmental-surveillance"],
        terms: ["ntd"],
      },
      {
        id: "laurent-marsollier",
        name: "Laurent Marsollier",
        tldr: "The French microbiologist behind key work on M. ulcerans ecology and host inflammation.",
        summary:
          "Laurent Marsollier (INCIT, INSERM, University of Angers) has spent his career on the environmental reservoir and transmission of M. ulcerans and on the host response to infection. He co-authored the 2026 nationwide Benin incidence study and the work identifying the orphan receptor GPR84 as a driver of the inflammation that destroys tissue in Buruli ulcer. His research spans the two hardest questions in the field — where the bacterium comes from, and why the host's own response causes so much damage.",
        ...R,
        era: "Contemporary",
        role: "Researcher, INCIT, INSERM, University of Angers, France",
        knownFor: "M. ulcerans ecology and host inflammation in Buruli ulcer.",
        links: [
          { label: "GPR84 drives inflammation in Buruli ulcer (Sci Transl Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41984933" },
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        targets: ["gpr84"],
        institutions: ["incit-angers"],
        terms: ["host-directed-therapy", "ntd"],
      },
      {
        id: "ghislain-sopoh",
        name: "Ghislain Emmanuel Sopoh",
        tldr: "The Beninese clinician-researcher at the centre of Benin's Buruli ulcer programme and research.",
        summary:
          "Ghislain Sopoh (Centre de diagnostic et de traitement de l'ulcère de Buruli, Allada, Benin) is a longstanding investigator of Buruli ulcer in Benin, involved in patient care, clinical epidemiology and the environmental study of M. ulcerans. He co-authored the 2026 nationwide Benin incidence study, which drew on the treatment-centre data he helps generate, and has contributed broadly to understanding the disease's evolution in one of its former heartlands. He represents the clinician-researchers whose routine work makes population-level Buruli ulcer research possible.",
        ...R,
        era: "Contemporary",
        role: "Clinician-researcher, CDTUB Allada, Benin",
        knownFor: "Buruli ulcer clinical care and epidemiology in Benin.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["abomey-calavi"],
        countries: ["benin"],
        terms: ["ntd"],
      },
      {
        id: "daniel-obrien",
        name: "Daniel P. O'Brien",
        tldr: "The Australian physician who documents the clinical complications of antibiotic-treated Buruli ulcer.",
        summary:
          "Daniel O'Brien (Australia) is a leading clinical researcher on Buruli ulcer, treating patients in Victoria and publishing on treatment outcomes, paradoxical reactions and the practical management of the disease. His 2026 report of a very late paradoxical reaction after antibiotic treatment is a reminder that even successfully treated Buruli ulcer can flare as the immune system reconstitutes, and that clinicians must recognise it rather than mistake it for treatment failure. In a disease where the drug pipeline is advancing fast, his work keeps the clinical reality — healing, relapse and immune complications — in view.",
        ...R,
        era: "Contemporary",
        role: "Physician-researcher, Australia",
        knownFor: "Clinical management and complications of Buruli ulcer.",
        links: [
          { label: "Very late paradoxical reaction after Buruli ulcer treatment (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42520070" },
        ],
        diseases: ["buruli-ulcer"],
        drugs: ["rifampicin", "clarithromycin"],
        institutions: ["doherty-institute"],
        terms: ["paradoxical-reaction", "ntd"],
      },
      {
        id: "charity-akenten",
        name: "Charity Wiafe Akenten",
        tldr: "The Ghanaian researcher mapping antimicrobial resistance in Buruli ulcer wounds.",
        summary:
          "Charity Wiafe Akenten (Kumasi Centre for Collaborative Research into Tropical Medicine, Ghana) studies the secondary bacterial infections that complicate Buruli ulcer, with a focus on the frequency and antimicrobial-resistance profile of Staphylococcus aureus, including methicillin resistance. Her 2026 study with the Bernhard Nocht Institute characterized these colonizers across PCR-confirmed patients, showing why wound microbiology and antibiotic stewardship matter alongside the antimycobacterial regimen. It is a reminder that a Buruli ulcer lesion is an ecosystem, not a single infection.",
        ...R,
        era: "Contemporary",
        role: "Researcher, Kumasi Centre for Collaborative Research, Ghana",
        knownFor: "Antimicrobial resistance in Buruli ulcer secondary infections.",
        links: [
          { label: "Secondary infections and AMR in Buruli ulcer, Ghana (BMC Infect Dis 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42420877" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["kccr"],
        countries: ["ghana"],
        terms: ["amr", "ntd"],
      },
    ],
  },

  /* -------------------------------- terms --------------------------------- */
  {
    kind: "terms",
    records: [
      {
        id: "skin-ntds",
        name: "Skin NTDs (integrated skin-NTD approach)",
        tldr: "Managing the skin-related neglected tropical diseases together, because they look alike and share a workforce.",
        summary:
          "The skin NTDs are a group of neglected diseases whose primary manifestation is on the skin — Buruli ulcer, leprosy, yaws, lymphatic filariasis, onchocerciasis, scabies, mycetoma, cutaneous leishmaniasis and others. WHO published a framework for their integrated control in 2022, on the logic that they present similarly, require overlapping clinical skills, and often co-exist in the same poor communities, so a single trained health worker and one surveillance system can find and manage several at once. For Buruli ulcer the approach is central: because early lesions resemble other skin conditions, integrating detection into skin-NTD programmes is the practical way to find cases before they become category III. WHO also released a Skin App to support field diagnosis.",
        ...R,
        category: "Programme approach",
        aka: "integrated skin NTDs, skin-related NTDs",
        links: [
          { label: "WHO — integrated control of skin NTDs (framework, 2022)", url: "https://www.who.int/publications/i/item/9789240051423" },
        ],
        related: ["ntd", "diagnostics-gap", "elimination"],
        stats: [
          { label: "Rationale", value: "Shared presentation, workforce and communities" },
          { label: "Buruli ulcer at stake", value: "Earlier detection", note: "less category III disease" },
        ],
      },
      {
        id: "host-directed-therapy",
        name: "Host-directed therapy",
        tldr: "Treating the host's damaging response rather than only the pathogen — relevant where inflammation causes the harm.",
        summary:
          "Host-directed therapy aims drugs at the host pathways that drive disease, rather than at the pathogen itself: damping excessive inflammation, modulating immune cell behaviour, or altering the tissue environment so the infection is better contained. It is being pursued in tuberculosis as a way to shorten treatment and limit lung damage, and it has an unusually clear rationale in Buruli ulcer, where it is the toxin mycolactone and the resulting inflammation — not bacterial burden alone — that destroy tissue. The 2026 finding that the orphan receptor GPR84 sustains a proinflammatory loop and that mice lacking it heal spontaneously is a direct example: a host molecule, not a bacterial one, that might be drugged to limit ulceration and disability while antibiotics kill the organism.",
        ...R,
        category: "Therapeutic strategy",
        aka: "host-directed therapy (HDT)",
        links: [
          { label: "Science Translational Medicine — GPR84 drives inflammation in Buruli ulcer (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41984933" },
        ],
        related: ["ntd", "amr", "drug-repurposing"],
        stats: [
          { label: "Buruli ulcer rationale", value: "Tissue damage is host-driven", note: "mycolactone suppresses immunity then inflammation destroys tissue" },
        ],
      },
      {
        id: "paradoxical-reaction",
        name: "Paradoxical reaction",
        tldr: "Clinical worsening during or after successful antibiotic treatment as immune responses recover — not treatment failure.",
        summary:
          "A paradoxical reaction is a worsening of symptoms or lesions during effective antimicrobial treatment, caused by a restored or exaggerated immune response rather than by treatment failure or resistance. It is well known in tuberculosis, leprosy and HIV-associated infections, and it occurs in Buruli ulcer, where lesions can deteriorate as antibiotics are working. Recognising it matters clinically: the correct response is usually to continue antibiotics and manage inflammation, not to switch drugs or operate unnecessarily. In Buruli ulcer, reactions can also appear unusually late — a 2026 report described a very late paradoxical reaction after treatment — so clinicians must remain alert long after the antibiotics stop.",
        ...R,
        category: "Clinical phenomenon",
        aka: "immune reconstitution inflammatory syndrome (IRIS), paradoxical worsening",
        links: [
          { label: "Very late paradoxical reaction after Buruli ulcer treatment (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42520070" },
        ],
        related: ["ntd", "host-directed-therapy"],
        stats: [
          { label: "Key point", value: "Not treatment failure", note: "continue antibiotics, manage inflammation" },
        ],
      },
    ],
  },

  /* ---------------------------- technologies ---------------------------- */
  {
    kind: "technologies",
    records: [
      {
        id: "molecular-rpa",
        name: "Recombinase polymerase amplification (RPA)",
        tldr: "An isothermal molecular test that can confirm an infection in a field laboratory without a thermal cycler.",
        summary:
          "Recombinase polymerase amplification is an isothermal nucleic-acid amplification method: instead of cycling temperatures as PCR does, it uses recombinase enzymes to open the DNA and a polymerase to extend primers at a single constant temperature, so it needs only a simple heat block rather than a thermal cycler. That makes it suitable for a portable, field-deployable laboratory — the basis of the mobile 'suitcase laboratory' that detects M. ulcerans in Ghana. RPA is fast (typically under 30 minutes), but like other molecular tests it needs cold-chain reagents, trained staff and quality control, so it is a step toward point-of-care confirmation rather than a fully self-contained device.",
        ...R,
        category: "Diagnostics",
        maturity: "In field evaluation",
        whatItDoes: "Amplifies target DNA at a constant temperature for rapid molecular confirmation of infection.",
        limitation: "Cold chain and trained operators; detection chemistry can be less familiar than PCR.",
        links: [
          { label: "Mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42081507" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        terms: ["sensitivity-specificity", "diagnostics-gap"],
      },
      {
        id: "environmental-surveillance",
        name: "Environmental surveillance",
        tldr: "Sampling water, soil, vectors and reservoirs for a pathogen to see where risk is, before people are infected.",
        summary:
          "Environmental surveillance looks for a pathogen outside human patients — in water, soil, animals, vectors or wastewater — to map where it circulates and to warn of risk. For Buruli ulcer it is unusually important because the mode of transmission is unknown: sampling aquatic environments for M. ulcerans DNA, and monitoring the possum-and-mosquito cycle in Australia, has located risk and even predicted human cases months in advance. In Africa, satellite-derived environmental data (open water, temperature, land use) can be combined with direct sampling to model where the disease is likely to persist or emerge. Its limits are that detecting DNA does not prove a viable transmission route, and that sampling campaigns are hard to sustain.",
        ...R,
        category: "Surveillance",
        maturity: "In use (research and programmes)",
        whatItDoes: "Detects pathogen markers in environmental reservoirs to map and forecast risk.",
        limitation: "Environmental detection does not establish transmission; sampling is labour-intensive.",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin, 2008–2024 (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
          { label: "Autodissemination stations reduce Buruli ulcer risk (Nat Microbiol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42661072" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        terms: ["surveillance-data-gap", "early-warning-hotspots"],
      },
      {
        id: "mosquito-autodissemination",
        name: "Mosquito autodissemination stations",
        tldr: "Stations that let mosquitoes pick up a larvicide and spread it to breeding sites themselves.",
        summary:
          "Autodissemination is vector control that exploits mosquito behaviour: stations attract adult mosquitoes, which pick up a transferable larvicide (such as pyriproxyfen) or an entomopathogenic fungus (such as Beauveria bassiana), then carry it to the hidden breeding sites where they lay eggs, contaminating the water and killing larvae. Because it uses the insects to deliver the control agent, it can reach cryptic breeding sites that spraying and source-reduction miss. A 2026 randomised controlled field trial in urban Melbourne suppressed Aedes notoscriptus and reduced modelled Buruli ulcer risk — the first controlled evidence that vector control can lower human Buruli ulcer risk. Its transferability to African freshwater transmission cycles, where the vectors and reservoirs are less certain, is unproven.",
        ...R,
        category: "Vector control",
        maturity: "Field-trial proven (Australia)",
        whatItDoes: "Uses mosquitoes to spread larvicide/fungus to breeding sites, suppressing vector populations.",
        limitation: "Proven for the Australian cycle only; African vectors and reservoirs uncertain.",
        links: [
          { label: "Autodissemination stations reduce Buruli ulcer risk (Nat Microbiol 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42661072" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["environmental-surveillance"],
        terms: ["vector-borne", "ntd"],
      },
    ],
  },

  /* ------------------------------ countries ------------------------------ */
  {
    kind: "countries",
    records: [
      {
        id: "benin",
        name: "Benin",
        codes: [iso2("BJ"), iso3("BEN"), geonames("2395170")],
        tldr: "A former Buruli ulcer heartland where a 16-year nationwide study found incidence fell ~80% as water shrank and temperatures rose.",
        summary:
          "Benin has been one of the countries most affected by Buruli ulcer, with specialized treatment centres in Lalo, Pobè, Allada and Zagnanando and a national control programme that produces unusually complete data. A 2026 nationwide study of 2,568 PCR-confirmed patients over 16 years recorded a fall in incidence of nearly 80%, from 1.37 to 0.24 per 10,000, with the steepest decline in children — and linked it to a 25–30% reduction in open water surface and more than 1°C of warming, while M. ulcerans DNA was undetectable in 122 aquatic sites. The country is also a clinical site for the BLMs4BU treatment-shortening trial, making it central both to understanding whether Buruli ulcer foci are disappearing and to testing shorter cures.",
        ...R,
        region: "West Africa",
        whoRegion: "African Region",
        burden:
          "Historically one of the highest-burden countries for Buruli ulcer, with the disease concentrated in the south; incidence has fallen sharply over 2008–2024.",
        elimination:
          "Not eliminated; the decline is being documented in detail. The open question is whether it reflects true epidemiological change or surveillance artefact — the 2026 study argues both environment and control contribute.",
        programme:
          "National Buruli ulcer control programme with specialised diagnostic and treatment centres, supported by Fondation Raoul Follereau and research partners including the University of Angers and Université d'Abomey-Calavi.",
        stats: [
          { label: "Confirmed cases studied, 2008–2024", value: "2,568", number: 2568, unit: "patients", note: "nationwide, PCR-confirmed" },
          { label: "Incidence decline", value: "≈ 80%", number: -80, unit: "%", note: "1.37 → 0.24 per 10,000" },
        ],
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
          { label: "WHO — Buruli ulcer", url: "https://www.who.int/news-room/fact-sheets/detail/buruli-ulcer-(mycobacterium-ulcerans-infection)" },
        ],
        diseases: ["buruli-ulcer", "leprosy"],
        institutions: ["abomey-calavi", "raoul-follereau", "incit-angers"],
        terms: ["ntd", "surveillance-data-gap"],
      },
    ],
  },

  /* --------------------------------- ideas --------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "buruli-find-cases-early-package",
        name: "Find cases early: evidence-based district targeting plus field molecular labs",
        tldr: "Combine district-level risk maps with mobile suitcase labs so Buruli ulcer is caught before category III.",
        summary:
          "Late presentation — a quarter of cases still category III at diagnosis — is the main driver of disability, and it persists because most endemic districts have neither a reason to look nor a way to confirm. Two 2026 advances now fit together: evidence-based targeting that uses routinely available data to rank districts for skin-NTD active surveillance, and the mobile suitcase laboratory that performs molecular confirmation in the community. The idea is to package them into a single operational intervention — a prioritised district list, community case-finding through trained health workers and teachers, and same-visit RPA confirmation — and to evaluate whether it shifts cases from category III to early detection and reduces contractures. It is deliberately not a new technology; it is the assembly of tools that already exist into the pathway WHO's research priorities call for.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Deploy the package in ranked districts of a West African country (e.g. Ghana or Benin), measuring the proportion of category III cases at diagnosis and time from lesion onset to confirmed treatment, against historical control.",
        owner: "National skin-NTD programmes with KCCR and the WHO Buruli ulcer laboratory network",
        links: [
          { label: "Evidence-based district targeting for skin-NTD surveillance (PLOS Glob Public Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41894359" },
          { label: "Mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (PLoS NTD 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42081507" },
        ],
        diseases: ["buruli-ulcer"],
        diagnostics: ["buruli-rpa-suitcase", "buruli-ulcer-lamp"],
        institutions: ["kccr", "noguchi", "who"],
        countries: ["ghana", "benin"],
        bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
        terms: ["skin-ntds", "ntd"],
        stats: [
          { label: "Problem", value: "25.2% category III at diagnosis", note: "road-map target <10% by 2030" },
        ],
      },
      {
        id: "buruli-host-directed-adjunct",
        name: "Host-directed adjunct to stop the damage antibiotics cannot",
        tldr: "Add a GPR84 antagonist to antibiotics to limit tissue destruction and disability.",
        summary:
          "Antibiotics kill M. ulcerans, but much of the permanent damage is inflicted by the host's own inflammatory response and by mycolactone before treatment starts. The 2026 discovery that GPR84 sustains a self-amplifying proinflammatory loop — and that mice lacking it heal lesions spontaneously — points to a concrete host-directed adjunct: a short, well-tolerated course of a GPR84 antagonist given alongside rifampicin–clarithromycin, aimed not at killing the bacterium but at limiting ulcer extension and scarring. The idea is attractive because it could help patients who present late (when tissue is already being destroyed) and because it uses a drug class independent of mycobacterial resistance. It needs medicinal-chemistry optimisation of GPR84 antagonists for safety in children and a Phase 2 add-on design, but it is the most novel therapeutic direction the field has seen in years.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Optimise a selective GPR84 antagonist, establish safety in juvenile animal models, then run a Phase 2 add-on trial alongside standard antibiotics measuring lesion-area change and time to healing.",
        owner: "Academic discovery groups (Angers/Geneva/Minho) with an industry or PDP partner",
        links: [
          { label: "GPR84 drives inflammation in Buruli ulcer (Sci Transl Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41984933" },
          { label: "Open Targets — Buruli ulcer disease (MONDO_0000327)", url: "https://platform.opentargets.org/disease/MONDO_0000327" },
        ],
        diseases: ["buruli-ulcer"],
        targets: ["gpr84"],
        drugs: ["rifampicin", "clarithromycin"],
        institutions: ["incit-angers"],
        bottlenecks: ["funding-gap"],
        terms: ["host-directed-therapy", "ntd"],
        stats: [
          { label: "Mechanism", value: "Antagonist, not antibiotic", note: "independent of mycobacterial resistance" },
        ],
      },
      {
        id: "buruli-environmental-early-warning-africa",
        name: "Environmental early-warning for Buruli ulcer in Africa",
        tldr: "Turn climate, water and reservoir monitoring into a forecast of where Buruli ulcer will appear next.",
        summary:
          "The 2026 Benin study showed that Buruli ulcer incidence tracks environmental change — shrinking open water, warming, land use — and that the bacterium could not be found in 122 aquatic sites where it once circulated, while Australia's possum-and-mosquito surveillance predicts human cases up to 39 months ahead. Together these suggest a prevention strategy the African programmes have never had: routine environmental monitoring — satellite-derived water and temperature data, targeted water/reservoir sampling, and genomic detection — feeding a spatial model that flags districts at risk of emergence or re-emergence. The value is anticipatory rather than reactive: instead of waiting for a cluster of late cases, a programme would know where to run active surveillance, train health workers and pre-position diagnostics. It also guards against complacency if foci do disappear, by watching for their return.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Build and prospectively validate an environmental risk model in two African countries, coupling satellite water/temperature data with periodic environmental sampling and skin-NTD surveillance, measuring lead time to detected human cases.",
        owner: "National programmes with universities and earth-observation partners",
        links: [
          { label: "PCR-confirmed Buruli ulcer incidence in Benin, 2008–2024 (Lancet Glob Health 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42497875" },
          { label: "Human-induced pressures drive Buruli ulcer distribution (Commun Med 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42243514" },
        ],
        diseases: ["buruli-ulcer"],
        technologies: ["environmental-surveillance", "genomic-surveillance", "early-warning-hotspots"],
        institutions: ["incit-angers", "abomey-calavi", "who"],
        countries: ["benin", "ghana"],
        bottlenecks: ["surveillance-data-gap", "funding-gap"],
        terms: ["ntd", "skin-ntds"],
        stats: [
          { label: "Lead time, Australia", value: "Up to 39 months", note: "possum-excreta signal precedes human cases" },
        ],
      },
    ],
  },
];
