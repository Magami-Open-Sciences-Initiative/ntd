import type { RecordOf } from "@/lib/schema";

export const targets: RecordOf<"targets">[] = [
  {
    id: "cyp51",
    name: "Sterol 14α-demethylase (CYP51)",
    tldr: "An enzyme parasites need to build their cell membranes; the same enzyme the antifungal drug class attacks.",
    summary:
      "CYP51 builds ergosterol, the parasite's equivalent of cholesterol. Because the parasite cannot simply take up host sterol in the way it needs, blocking CYP51 is lethal — and because CYP51 is a well-understood antifungal target with a large library of existing inhibitors, it is one of the cheapest starting points for new antiparasitic drugs. Azole antifungals such as posaconazole and ravuconazole have been repurposed into Chagas and leishmaniasis trials.",
    asOf: "2026-09",
    targetType: "Enzyme (cytochrome P450)",
    organism: "Trypanosoma cruzi, Leishmania, fungi",
    rationale:
      "Ergosterol synthesis is essential to the parasite and structurally different enough from human cholesterol synthesis for selectivity.",
    druggability:
      "Highly druggable: thousands of known azole inhibitors, oral availability, and clinical precedent from antifungals.",
    knownLigands: "Posaconazole, ravuconazole and other experimental azoles; fosravuconazole is tested in mycetoma.",
    links: [
      { label: "Literature search: Trypanosoma cruzi CYP51 and inhibitors", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Trypanosoma+cruzi+CYP51+inhibitor" },
    ],
    pathogens: ["trypanosoma-cruzi", "leishmania", "trypanosoma-brucei"],
    diseases: ["chagas", "leishmaniasis"],
    drugs: ["fosravuconazole"],
    technologies: ["ai-drug-discovery", "drug-repurposing"],
    stats: [
      { label: "Pathway", value: "Ergosterol biosynthesis" },
      { label: "Precedent", value: "Azole antifungals in clinical use" },
    ],
  },
  {
    id: "cpsf3",
    name: "Cleavage and polyadenylation specificity factor 3 (CPSF3)",
    tldr: "The newly identified target of acoziborole, the single-dose drug candidate for sleeping sickness.",
    summary:
      "CPSF3 is part of the machinery that matures messenger RNA. Acoziborole binds it in Trypanosoma brucei and shuts down RNA processing, killing the parasite with a single oral dose — a striking result for a disease whose older treatments required intravenous infusions over days. The target was identified using chemical genetics and genome-scale screening, and it illustrates how a modern antiparasitic target can be found even without a large commercial programme.",
    asOf: "2026-09",
    targetType: "RNA-processing protein",
    organism: "Trypanosoma brucei",
    rationale:
      "Acoziborole's potency and single-dose cure in sleeping sickness were traced to CPSF3 inhibition, making it a validated target.",
    druggability:
      "Demonstrated by acoziborole itself: orally available, long-acting and effective in a single dose.",
    knownLigands: "Acoziborole (SCYX-7158) and related benzoxaboroles.",
    links: [
      { label: "DNDi — acoziborole for sleeping sickness", url: "https://dndi.org/diseases/sleeping-sickness/" },
    ],
    pathogens: ["trypanosoma-brucei"],
    diseases: ["hat"],
    drugs: ["acoziborole"],
    technologies: ["ai-drug-discovery"],
    stats: [
      { label: "Validated by", value: "Acoziborole", note: "single-dose oral cure in trials" },
    ],
  },
  {
    id: "cruzain",
    name: "Cruzain (T. cruzi cysteine protease)",
    tldr: "A digestive enzyme the Chagas parasite needs to survive in the blood; a long-pursued drug target.",
    summary:
      "Cruzain is the major cysteine protease of Trypanosoma cruzi and is required for the parasite to break down proteins, invade cells and evade the immune response. It is one of the oldest rationally pursued antiparasitic targets, with three decades of inhibitor chemistry behind it, yet no cruzain inhibitor has reached the clinic — a cautionary example of how a good target does not guarantee a usable drug.",
    asOf: "2026-09",
    targetType: "Enzyme (cysteine protease)",
    organism: "Trypanosoma cruzi",
    rationale:
      "Essential for parasite nutrition and host-cell invasion, with a well-characterised active site and a large inhibitor literature.",
    druggability:
      "Chemically tractable — potent inhibitors exist — but pharmacokinetics, selectivity and in-vivo efficacy have repeatedly not translated.",
    knownLigands: "Vinyl sulfones, nitrile- and ketoamide-based inhibitors from academic and non-profit programmes.",
    links: [
      { label: "Chagas disease drug discovery", url: "https://dndi.org/diseases/chagas/" },
    ],
    pathogens: ["trypanosoma-cruzi"],
    diseases: ["chagas"],
    technologies: ["ai-drug-discovery", "alphafold-structure-prediction"],
    stats: [
      { label: "Years pursued", value: "Three decades of inhibitor work" },
      { label: "Clinical candidates", value: "None approved to date" },
    ],
  },
  {
    id: "nmt",
    name: "N-myristoyltransferase (NMT)",
    tldr: "An enzyme that attaches a fatty acid to proteins — essential in Leishmania and Trypanosoma, and genetically validated as a drug target.",
    summary:
      "N-myristoyltransferase catalyses the attachment of myristate to proteins, a modification that controls where proteins go in the cell. Genetic studies showed that the Leishmania and Trypanosoma enzymes are essential — the parasite dies without them — and the human enzyme is different enough for selective inhibitors. The oxaborole drug candidate DNDi-0690 has been associated with this line of work, making NMT one of the more promising non-azole targets.",
    asOf: "2026-09",
    targetType: "Enzyme (acyltransferase)",
    organism: "Leishmania, Trypanosoma brucei",
    rationale:
      "Essential by genetic knockout and structurally distinct from the human orthologue, giving a genuine selectivity window.",
    druggability:
      "Tractable: high-throughput screening and structure-guided design have produced potent, selective inhibitors.",
    knownLigands: "Benzofuran and oxaborole series; DNDi-0690 progressed into a leishmaniasis clinical trial.",
    links: [
      { label: "DNDi — leishmaniasis", url: "https://dndi.org/diseases/leishmaniasis/" },
    ],
    pathogens: ["leishmania", "trypanosoma-brucei"],
    diseases: ["leishmaniasis", "hat"],
    technologies: ["ai-drug-discovery", "alphafold-structure-prediction", "open-science-drug-discovery"],
    stats: [
      { label: "Validation", value: "Essential in genetic studies" },
      { label: "Candidate", value: "DNDi-0690", note: "oxaborole, in clinical development" },
    ],
  },
  {
    id: "trypanothione-reductase",
    name: "Trypanothione reductase",
    tldr: "The parasite's dedicated antioxidant enzyme — a system humans do not have, so a drug against it should spare the patient.",
    summary:
      "Trypanothione is a small molecule unique to trypanosomatids and leishmaniae that mops up oxidative damage. Trypanothione reductase regenerates it, and the parasite cannot survive without this antioxidant defence. Because humans use a different system (glutathione), the enzyme is an attractive target for selective drugs — though after decades of effort no inhibitor has yet proved itself in patients.",
    asOf: "2026-09",
    targetType: "Enzyme (oxidoreductase)",
    organism: "Trypanosoma, Leishmania",
    rationale: "The parasite's antioxidant system differs fundamentally from the human one, offering a wide selectivity window.",
    druggability:
      "Appealing in theory and chemically active in vitro, but achieving potency, selectivity and in-vivo exposure together has been hard.",
    knownLigands: "Various tricyclic and peptide-based inhibitors, mostly preclinical.",
    links: [
      { label: "Literature search: trypanothione reductase as a drug target", url: "https://pubmed.ncbi.nlm.nih.gov/?term=trypanothione+reductase+drug+target" },
    ],
    pathogens: ["trypanosoma-cruzi", "trypanosoma-brucei", "leishmania"],
    diseases: ["chagas", "hat", "leishmaniasis"],
    technologies: ["ai-drug-discovery"],
    stats: [
      { label: "Uniqueness", value: "Absent from humans" },
      { label: "Clinical status", value: "Preclinical" },
    ],
  },
  {
    id: "schistosome-trp-channel",
    name: "Schistosome TRP ion channel",
    tldr: "The ion channel praziquantel opens; identifying it finally explained how the main anti-schistosomal drug works.",
    summary:
      "For forty years after praziquantel became the only drug used against schistosomiasis, no one knew what it bound. Work using the free-living relative Dugesia and then schistosomes themselves traced its action to a transient receptor potential (TRP) ion channel: the drug opens it, calcium floods into the worm, and the worm contracts and dies. Naming the target opens the door to designing new drugs that hit the same channel — important, because praziquantel is a single point of failure for treating 250 million people.",
    asOf: "2026-09",
    targetType: "Ion channel",
    organism: "Schistosoma",
    rationale: "It is the receptor for praziquantel, the only widely used drug, and its discovery makes rational design possible.",
    druggability:
      "Ion channels are a druggable class, but schistosome TRP channels are only now being characterised, so designed ligands remain early.",
    knownLigands: "Praziquantel and its stereoisomers",
    links: [
      { label: "Praziquantel's target identified (Nature Communications)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=praziquantel+TRP+channel+schistosome" },
    ],
    pathogens: ["schistosoma", "taenia-solium"],
    diseases: ["schistosomiasis", "taeniasis-cysticercosis"],
    drugs: ["praziquantel"],
    technologies: ["alphafold-structure-prediction", "ai-drug-discovery"],
    stats: [
      { label: "Years unidentified", value: "≈ 40" },
      { label: "What it explains", value: "Praziquantel's paralysis and contraction of the worm" },
    ],
    timeline: [
      { date: "1970s", text: "Praziquantel enters use without a known molecular target." },
      { date: "2020", text: "A schistosome TRP channel is identified as the receptor that praziquantel opens." },
    ],
  },
  {
    id: "schistosome-tgr",
    name: "Thioredoxin glutathione reductase (TGR)",
    tldr: "The schistosome enzyme that keeps the worm's internal environment chemically balanced; a candidate target for new drugs.",
    summary:
      "Schistosomes manage oxidative stress through a single enzyme, thioredoxin glutathione reductase, that performs several jobs other organisms split between separate enzymes. Inactivating it cripples the worm's defence against the oxidative burst host immune cells use, which is why it has been explored both as a target for small molecules and as a vaccine antigen.",
    asOf: "2026-09",
    targetType: "Enzyme (oxidoreductase)",
    organism: "Schistosoma mansoni",
    rationale: "A single multifunctional enzyme central to antioxidant defence; knocking it down sensitises the worm to immune killing.",
    druggability: "Tractable in vitro; selective inhibitors with in-vivo efficacy remain largely preclinical.",
    links: [
      { label: "Literature search: schistosome thioredoxin glutathione reductase", url: "https://pubmed.ncbi.nlm.nih.gov/?term=schistosome+thioredoxin+glutathione+reductase" },
    ],
    pathogens: ["schistosoma"],
    diseases: ["schistosomiasis"],
    technologies: ["ai-drug-discovery"],
    stats: [
      { label: "Role", value: "Central antioxidant defence" },
      { label: "Status", value: "Preclinical" },
    ],
  },
  {
    id: "schistosome-hdac8",
    name: "Schistosome histone deacetylase 8 (SmHDAC8)",
    tldr: "A schistosome enzyme that controls which genes are active; a structural quirk makes it selectively druggable.",
    summary:
      "Histone deacetylases remove acetyl groups from histones and thereby switch genes on and off. SmHDAC8 is a schistosome isoform whose active-site structure differs from the human enzymes in a way that allows selective inhibitors. Blocking it disrupts the worm's development and survival, and it is one of the more biochemically validated non-praziquantel targets for schistosomiasis.",
    asOf: "2026-09",
    targetType: "Enzyme (deacetylase)",
    organism: "Schistosoma mansoni",
    rationale: "A structurally distinct isoform with an exploitable difference from human HDACs, controlling parasite gene expression.",
    druggability: "Good: the human HDAC field provides deep medicinal-chemistry know-how, and selective inhibitors have been designed.",
    knownLigands: "Hydroxamate- and thiol-based inhibitors reported to be selective over human HDAC8.",
    links: [
      { label: "Literature search: SmHDAC8 and selective inhibitors", url: "https://pubmed.ncbi.nlm.nih.gov/?term=SmHDAC8+schistosome+histone+deacetylase+inhibitor" },
    ],
    pathogens: ["schistosoma"],
    diseases: ["schistosomiasis"],
    technologies: ["alphafold-structure-prediction", "ai-drug-discovery"],
    stats: [
      { label: "Class", value: "Epigenetic enzyme" },
      { label: "Status", value: "Preclinical" },
    ],
  },
  {
    id: "beta-tubulin",
    name: "Nematode beta-tubulin",
    tldr: "The protein that builds the worm's cellular skeleton and the target of the deworming drugs albendazole and mebendazole.",
    summary:
      "Benzimidazole dewormers bind nematode beta-tubulin and prevent it from assembling microtubules, which stops the worm from absorbing nutrients and dividing cells. The drugs work across many worms — Ascaris, Trichuris, hookworm — which is why they are the workhorses of school deworming. The catch is resistance: a single point mutation in beta-tubulin reduces binding, and benzimidazole resistance in livestock worms signals what could happen in human programmes.",
    asOf: "2026-09",
    targetType: "Structural protein (tubulin)",
    organism: "Nematodes (Ascaris, Trichuris, hookworm, filariae)",
    rationale: "Essential for cell structure and division; already validated by two global deworming drugs.",
    druggability: "Fully validated clinically — the target of the most widely used anthelmintics.",
    knownLigands: "Albendazole, mebendazole, triclabendazole and related benzimidazoles.",
    links: [
      { label: "WHO — soil-transmitted helminths and deworming", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    ],
    pathogens: ["soil-transmitted-helminths", "lymphatic-filarial-worms", "taenia-solium"],
    diseases: ["sth", "lymphatic-filariasis", "taeniasis-cysticercosis", "echinococcosis"],
    drugs: ["albendazole", "mebendazole", "triclabendazole"],
    technologies: ["mass-drug-administration"],
    stats: [
      { label: "People treated", value: "Hundreds of millions a year" },
      { label: "Resistance risk", value: "Confirmed in livestock, monitored in people" },
    ],
  },
  {
    id: "glucl",
    name: "Glutamate-gated chloride channel (GluCl)",
    tldr: "A channel in worm nerve cells that ivermectin opens, paralysing and killing the parasite.",
    summary:
      "GluCl is an invertebrate ion channel absent from vertebrates, which is why ivermectin can kill worms and lice while being remarkably safe for humans. Opening the channel lets chloride flood the nerve cell, silencing it, so the worm is paralysed and cannot feed. Ivermectin's discovery won the 2015 Nobel Prize and it remains the backbone of onchocerciasis and lymphatic filariasis control.",
    asOf: "2026-09",
    targetType: "Ion channel (ligand-gated)",
    organism: "Nematodes and ectoparasites",
    rationale: "Absent from vertebrates, giving an exceptional safety margin, and essential to worm nerve function.",
    druggability: "Clinically validated at enormous scale by ivermectin.",
    knownLigands: "Ivermectin, moxidectin, other macrocyclic lactones.",
    links: [
      { label: "WHO — onchocerciasis and ivermectin", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    pathogens: ["onchocerca-volvulus", "lymphatic-filarial-worms", "soil-transmitted-helminths"],
    diseases: ["onchocerciasis", "lymphatic-filariasis", "sth", "scabies"],
    drugs: ["ivermectin", "moxidectin"],
    technologies: ["mass-drug-administration"],
    stats: [
      { label: "Nobel Prize", value: "2015 (ivermectin)", note: "shared for avermectin and artemisinin" },
      { label: "Safety margin", value: "Channel absent in vertebrates" },
    ],
  },
  {
    id: "slo-1",
    name: "SLO-1 potassium channel",
    tldr: "The worm channel that the new deworming drug emodepside opens, paralysing parasites including the filariae.",
    summary:
      "SLO-1 is a large-conductance calcium-activated potassium channel found in nematode nerve and muscle. Emodepside, long used in veterinary medicine, activates it and paralyses the worm. Because SLO-1 is a different channel from the one ivermectin hits, emodepside offers an alternative for worms and settings where ivermectin cannot be used — and it is in clinical trials for onchocerciasis and soil-transmitted helminths.",
    asOf: "2026-09",
    targetType: "Ion channel (potassium)",
    organism: "Nematodes",
    rationale: "A separate mechanism from ivermectin, useful where macrocyclic lactones are contraindicated or failing.",
    druggability: "Validated in veterinary use; clinical development for human filariasis and STH is under way.",
    knownLigands: "Emodepside (and the related PF1022A class).",
    links: [
      { label: "DNDi — emodepside development", url: "https://dndi.org/diseases/onchocerciasis/" },
    ],
    pathogens: ["onchocerca-volvulus", "soil-transmitted-helminths"],
    diseases: ["onchocerciasis", "sth"],
    drugs: ["emodepside"],
    technologies: ["open-science-drug-discovery"],
    stats: [
      { label: "Origin", value: "Veterinary anthelmintic" },
      { label: "Human status", value: "In clinical trials" },
    ],
  },
  {
    id: "wolbachia",
    name: "Wolbachia endosymbiont",
    tldr: "A bacterium living inside filarial worms that the worm cannot survive without — so an antibiotic becomes an antiparasitic drug.",
    summary:
      "Wolbachia is an intracellular bacterium found in most filarial worms, including those causing lymphatic filariasis and onchocerciasis. The worm depends on it for energy metabolism and reproduction, so a course of doxycycline eradicates the bacteria, sterilises adult worms and eventually kills them. This makes an ordinary antibiotic a slow-acting but durable antifilarial treatment, and it is the reason Wolbachia is both a drug target and a driver of the inflammatory reactions that cause some filarial disease.",
    asOf: "2026-09",
    targetType: "Bacterial endosymbiont",
    organism: "Wolbachia in filarial nematodes",
    rationale: "The worm's obligate dependency means killing the bacterium kills the worm, using drugs already on the shelf.",
    druggability: "Fully druggable: doxycycline is cheap and available, but a 4–6 week course is impractical for mass campaigns.",
    knownLigands: "Doxycycline, minocycline, rifampicin.",
    links: [
      { label: "WHO — lymphatic filariasis and doxycycline", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
    ],
    pathogens: ["lymphatic-filarial-worms", "onchocerca-volvulus"],
    diseases: ["lymphatic-filariasis", "onchocerciasis"],
    drugs: ["doxycycline"],
    technologies: ["drug-repurposing"],
    stats: [
      { label: "Course length", value: "4–6 weeks", note: "too long for mass administration" },
      { label: "Effect", value: "Sterilises and eventually kills adult worms" },
    ],
  },
  {
    id: "rna-polymerase",
    name: "Bacterial RNA polymerase",
    tldr: "The enzyme that copies DNA into RNA, and the target of rifampicin, the cornerstone of leprosy and Buruli ulcer treatment.",
    summary:
      "Rifampicin binds bacterial RNA polymerase and blocks transcription, killing mycobacteria including Mycobacterium leprae and M. ulcerans. It is so effective that a single dose is used for leprosy post-exposure prophylaxis, and it anchors multidrug therapy. Rifampicin resistance is the main threat to leprosy control, and it is also a first-line drug for tuberculosis, which makes stewardship of the drug a shared concern.",
    asOf: "2026-09",
    targetType: "Enzyme (RNA polymerase)",
    organism: "Mycobacterium leprae, M. ulcerans, other bacteria",
    rationale: "Essential and clinically validated; a single dose is enough to prevent leprosy in contacts.",
    druggability: "Fully validated clinically across tuberculosis, leprosy and Buruli ulcer.",
    knownLigands: "Rifampicin, rifabutin, rifapentine.",
    links: [
      { label: "WHO — leprosy", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    ],
    pathogens: ["mycobacterium-leprae", "mycobacterium-ulcerans"],
    diseases: ["leprosy", "buruli-ulcer"],
    drugs: ["rifampicin"],
    technologies: ["mass-drug-administration", "drug-repurposing"],
    stats: [
      { label: "Role", value: "First-line in leprosy and Buruli ulcer" },
      { label: "Shared with", value: "Tuberculosis treatment" },
    ],
  },
  {
    id: "dpre1",
    name: "DprE1 (decarprenylphosphoryl-β-D-ribose 2′-epimerase)",
    tldr: "An enzyme mycobacteria use to build their waxy cell wall; one of the most promising new drug targets from tuberculosis research.",
    summary:
      "DprE1 builds arabinogalactan, a key component of the mycobacterial cell wall that makes these bacteria tough and drug-resistant. Inhibitors of DprE1 — developed largely in tuberculosis drug discovery — kill mycobacteria including M. leprae, and because the target is absent from human cells they can be selective and well tolerated. The work shows how investment in one mycobacterial disease can benefit another, since leprosy and Buruli ulcer share the same genus.",
    asOf: "2026-09",
    targetType: "Enzyme (epimerase)",
    organism: "Mycobacterium species",
    rationale: "Essential for cell-wall construction and absent from humans; validated by potent inhibitors that kill mycobacteria.",
    druggability: "Highly promising: multiple chemical series with whole-cell activity and in-vivo efficacy in TB models.",
    knownLigands: "Benzothiazinones (for example BTZ-043) and other DprE1 inhibitor series.",
    links: [
      { label: "Literature search: DprE1 as a tuberculosis and leprosy target", url: "https://pubmed.ncbi.nlm.nih.gov/?term=DprE1+inhibitor+tuberculosis+leprosy" },
    ],
    pathogens: ["mycobacterium-leprae", "mycobacterium-ulcerans"],
    diseases: ["leprosy", "buruli-ulcer"],
    technologies: ["ai-drug-discovery", "open-science-drug-discovery"],
    stats: [
      { label: "Provenance", value: "Tuberculosis drug discovery" },
      { label: "Status", value: "Preclinical for leprosy" },
    ],
  },
  {
    id: "dengue-ns5",
    name: "Dengue NS5 polymerase",
    tldr: "The viral enzyme that copies the dengue genome, and the main target for a dengue antiviral.",
    summary:
      "NS5 is the largest dengue protein and contains the RNA-dependent RNA polymerase that replicates the viral genome, plus a methyltransferase that helps the virus disguise its RNA from the immune system. Its active site is distinct from human polymerases, and both nucleoside and non-nucleoside inhibitors have shown activity in laboratory and animal studies. No dengue antiviral is approved, but NS5 is the most advanced target.",
    asOf: "2026-09",
    targetType: "Viral enzyme (polymerase)",
    organism: "Dengue virus",
    rationale: "Essential for viral replication and structurally distinct from host enzymes, allowing selective inhibition.",
    druggability: "Tractable in vitro, with several advanced chemical series; clinical proof in patients is still missing.",
    knownLigands: "Nucleoside analogues and allosteric non-nucleoside inhibitors.",
    links: [
      { label: "WHO — dengue", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
    ],
    pathogens: ["dengue-virus"],
    diseases: ["dengue-chikungunya"],
    technologies: ["ai-drug-discovery", "alphafold-structure-prediction"],
    stats: [
      { label: "Approved antivirals", value: "None" },
      { label: "Most advanced target", value: "NS5 polymerase" },
    ],
  },
  {
    id: "dengue-protease",
    name: "Dengue NS2B-NS3 protease",
    tldr: "The viral scissors that cut the dengue proteins apart so the virus can assemble; a target borrowed from hepatitis C research.",
    summary:
      "The NS3 protein is a protease that, with its NS2B cofactor, cleaves the viral polyprotein into functional pieces. Blocking it stops the virus from maturing. The target is attractive because hepatitis C yielded successful protease inhibitors, giving a roadmap; the difficulty for dengue is that the active site is flatter and more exposed, so inhibitor design has been harder than for hepatitis C.",
    asOf: "2026-09",
    targetType: "Viral enzyme (protease)",
    organism: "Dengue virus",
    rationale: "Essential for viral maturation and precedented by hepatitis C protease inhibitors.",
    druggability: "Challenging: the shallow active site makes potent, selective inhibitors harder to achieve than in hepatitis C.",
    knownLigands: "Peptidomimetic inhibitors, mostly preclinical.",
    links: [
      { label: "Literature search: dengue NS2B-NS3 protease inhibitors", url: "https://pubmed.ncbi.nlm.nih.gov/?term=dengue+NS2B-NS3+protease+inhibitor" },
    ],
    pathogens: ["dengue-virus"],
    diseases: ["dengue-chikungunya"],
    technologies: ["ai-drug-discovery"],
    stats: [
      { label: "Precedent", value: "Hepatitis C protease inhibitors" },
      { label: "Status", value: "Preclinical" },
    ],
  },
  {
    id: "rabies-glycoprotein",
    name: "Rabies glycoprotein (G)",
    tldr: "The protein on the virus surface that lets it enter nerve cells and the antigen every rabies vaccine is built around.",
    summary:
      "The rabies glycoprotein mediates attachment and entry into host cells and is the only viral protein exposed on the surface, so it is the target of neutralising antibodies and the antigen in all licensed vaccines. Because the virus has only five proteins and a slow, nerve-bound journey, the glycoprotein is also the focus of efforts to design a single-dose vaccine or a monoclonal antibody that could replace scarce rabies immunoglobulin.",
    asOf: "2026-09",
    targetType: "Viral surface protein",
    organism: "Rabies virus",
    rationale: "The sole target of protective antibodies; the protein every licensed vaccine and immunoglobulin is directed against.",
    druggability: "Validated as a vaccine and antibody target; small-molecule inhibition is not the approach here.",
    knownLigands: "Neutralising monoclonal antibodies under development as immunoglobulin replacements.",
    links: [
      { label: "WHO — rabies", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    ],
    pathogens: ["rabies-virus"],
    diseases: ["rabies"],
    drugs: ["rabies-postexposure-prophylaxis"],
    technologies: ["rabies-vaccination"],
    stats: [
      { label: "Virus proteins", value: "Five" },
      { label: "Role", value: "Entry and the sole protective antigen" },
    ],
  },
  {
    id: "insect-acetylcholinesterase",
    name: "Insect acetylcholinesterase",
    tldr: "The enzyme that shuts off nerve signals in insects, and the target of several classes of insecticide used against vectors.",
    summary:
      "Acetylcholinesterase breaks down the neurotransmitter acetylcholine to end a nerve signal. Insecticides in the organophosphate and carbamate classes inhibit it, so the signal never stops and the insect dies. It is one of the oldest insecticide targets and central to vector control, but resistance mutations in the enzyme and increased metabolic detoxification have made many populations insensitive — a reason vector control is diversifying toward new chemistries and non-chemical methods.",
    asOf: "2026-09",
    targetType: "Enzyme (esterase)",
    organism: "Insects (mosquitoes, flies, bugs)",
    rationale: "Essential for normal nerve function and the target of established insecticide classes.",
    druggability: "Validated by decades of insecticide use, but resistance has eroded its value.",
    knownLigands: "Organophosphates (malathion), carbamates (bendiocarb).",
    links: [
      { label: "WHO — vector control and insecticide resistance", url: "https://www.who.int/publications/i/item/9789241512978" },
    ],
    vectors: ["aedes-aegypti", "culex-mosquito", "triatomine-bug"],
    diseases: ["dengue-chikungunya", "lymphatic-filariasis", "chagas"],
    technologies: ["indoor-residual-spraying", "insecticide-treated-nets"],
    stats: [
      { label: "Insecticide classes", value: "Organophosphates, carbamates" },
      { label: "Threat", value: "Widespread resistance" },
    ],
  },
];
