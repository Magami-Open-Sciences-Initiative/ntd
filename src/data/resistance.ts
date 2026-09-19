/**
 * Resistance as a first-class record.
 *
 * Each record answers: what is resisted, how the resistance works, where it has
 * been seen, how it is watched, and what it threatens — and links out to the
 * drugs, vectors, targets, pathogens and countries concerned, so a drug page and
 * a vector page both surface the resistance that affects them through backlinks.
 *
 * The seed set is deliberately the well-documented cases: where resistance is
 * genuinely established (oxamniquine, antimony, pyrethroids, MDR-TB) it is
 * labelled as such, and where the field is still arguing (praziquantel,
 * ivermectin) the record says so rather than overstating the evidence.
 */
export const resistance = [
  {
    id: "praziquantel-reduced-efficacy",
    name: "Reduced praziquantel efficacy in Schistosoma mansoni",
    tldr: "In some communities repeated praziquantel no longer clears Schistosoma mansoni as reliably as it once did — the field's most serious open question about its only drug.",
    summary:
      "Praziquantel is the only drug used at scale against schistosomiasis, and mass treatment has driven down morbidity across Africa. But cure rates below the ~80–90% expected of a full course have been reported for S. mansoni in Senegal, Uganda and Tanzania. It is not yet clear whether this is heritable drug resistance, transient tolerance, reinfection or differences in drug exposure — no validated molecular marker of praziquantel resistance exists. Because praziquantel is the single point of failure for roughly 250 million people, even a partial loss of efficacy is treated as a strategic threat, not a local curiosity.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic",
    status: "Suspected — no confirmed resistance marker",
    driver:
      "Repeated community-wide praziquantel treatment (preventive chemotherapy), often with incomplete coverage that leaves some parasites exposed to sub-lethal doses.",
    mechanism:
      "Not established. Candidate explanations include variants in the schistosome transient receptor potential channel SmTRPMPZQ that praziquantel opens to paralyse the worm, and differences in drug exposure and metabolism, rather than a simple heritable resistance gene.",
    geography:
      "Persistently low cure rates reported in Senegal; reduced efficacy reported in Uganda and Tanzania. The signal is patchy rather than uniform across a country.",
    surveillance:
      "WHO recommends therapeutic-efficacy monitoring, but few national programmes test cure rates routinely, so most evidence comes from research studies rather than standing surveillance.",
    impact:
      "Praziquantel is the only widely used drug for a disease affecting hundreds of millions; a real fall in efficacy would force combination therapy or a new drug, and no alternative exists at scale.",
    links: [
      { label: "WHO: Schistosomiasis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
      { label: "Literature search: praziquantel reduced efficacy S. mansoni", url: "https://pubmed.ncbi.nlm.nih.gov/?term=praziquantel+reduced+efficacy+Schistosoma+mansoni" },
    ],
    drugs: ["praziquantel"],
    vectors: ["freshwater-snails"],
    pathogens: ["schistosoma"],
    targets: ["schistosome-trp-channel"],
    diseases: ["schistosomiasis"],
    countries: ["senegal", "uganda", "tanzania"],
    institutions: ["who", "lshtm"],
    technologies: ["genomic-surveillance"],
    bottlenecks: ["surveillance-data-gap"],
    terms: ["amr"],
    related: ["oxamniquine-resistance"],
    stats: [
      { label: "Drug options at scale", value: "1", note: "praziquantel" },
      { label: "Expected cure rate", value: "~80–90%", note: "full course" },
    ],
  },
  {
    id: "oxamniquine-resistance",
    name: "Oxamniquine resistance in Schistosoma mansoni",
    tldr: "The clearest example of drug resistance in a human helminth: oxamniquine stopped working because the parasite mutated the enzyme that switches the drug on.",
    summary:
      "Oxamniquine is a prodrug: the parasite itself activates it. A schistosome sulfotransferase (SmSULT-OR) converts oxamniquine into its toxic form, and when that enzyme is lost the drug has no effect. Clinical and laboratory resistance appeared in Brazil and Kenya in the era when oxamniquine was the treatment for S. mansoni, and the genetic basis was pinned down by Valentim et al. (Science, 2013): loss-of-function mutations in the sulfotransferase. Oxamniquine has since been displaced by praziquantel, so the resistance is now mainly of mechanistic interest — but it is a working demonstration that helminths can evolve resistance to a drug on a human-treatment timescale.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic",
    status: "Documented (historic)",
    driver: "Oxamniquine monotherapy in Brazil and Kenya before praziquantel became standard treatment.",
    mechanism:
      "Loss-of-function mutations in the schistosome sulfotransferase SmSULT-OR, which activates oxamniquine from prodrug to toxin. The parasite escapes by failing to activate the drug — a resistance mechanism with few precedents in helminths.",
    geography: "Field and laboratory resistance documented in Brazil and Kenya.",
    surveillance:
      "Worked out in the laboratory; clinical surveillance effectively ended when oxamniquine was withdrawn from routine use.",
    impact:
      "Historical for schistosomiasis itself, but a warning for prodrug-based antiparasitics: the vulnerable step is the enzyme that activates the drug, and that step can be lost.",
    links: [
      { label: "Valentim et al., Science 2013 — genetic basis of schistosome drug resistance", url: "https://pubmed.ncbi.nlm.nih.gov/24263136/" },
      { label: "Literature search: oxamniquine derivatives and resistance", url: "https://pubmed.ncbi.nlm.nih.gov/?term=oxamniquine+resistance+sulfotransferase+Schistosoma" },
    ],
    drugs: ["oxamniquine"],
    vectors: ["freshwater-snails"],
    pathogens: ["schistosoma"],
    diseases: ["schistosomiasis"],
    countries: ["brazil", "kenya"],
    technologies: ["genomic-surveillance"],
    terms: ["amr"],
    related: ["praziquantel-reduced-efficacy"],
  },
  {
    id: "pyrethroid-resistance-anopheles",
    name: "Pyrethroid resistance in Anopheles mosquitoes",
    tldr: "Malaria mosquitoes across Africa have evolved resistance to the pyrethroids that coat bed nets — the single biggest threat to malaria vector control.",
    summary:
      "Pyrethroids are the only insecticide class approved for use on long-lasting insecticidal nets and the mainstay of indoor residual spraying. Resistance is now widespread across sub-Saharan Africa and comes by two routes: target-site mutations in the voltage-gated sodium channel (the kdr mutations, L1014F and L1014S) that stop pyrethroids binding, and metabolic resistance in which cytochrome P450s and glutathione S-transferases break the insecticide down. The response has been to change the tools rather than the chemistry alone — piperonyl-butoxide (PBO) nets that block the P450s, dual-active-ingredient nets, and new insecticide classes for spraying.",
    asOf: "2026-09",
    resistanceType: "Insecticide",
    status: "Widespread",
    driver:
      "Mass distribution of pyrethroid-treated nets and indoor residual spraying, which applies near-continuous selection pressure to mosquito populations.",
    mechanism:
      "Two main routes: target-site mutations in the voltage-gated sodium channel (kdr, L1014F/L1014S); and metabolic resistance, where cytochrome P450s (e.g. CYP6M2, CYP6P3) and glutathione S-transferases detoxify the insecticide.",
    geography:
      "Widespread across sub-Saharan Africa, with high-frequency kdr and strong metabolic resistance reported in West, Central and East Africa.",
    surveillance:
      "WHO's Global Malaria Programme insecticide-resistance monitoring, national vector-control programmes and the IR Mapper database track resistance and inform which nets and sprays countries may deploy.",
    impact:
      "Erodes the two main vector-control tools; forces a shift to PBO nets, dual-active-ingredient nets and new insecticide classes for indoor spraying.",
    links: [
      { label: "Multi-omics analysis of pyrethroid resistance in the Anopheles gambiae complex (BMC Genomics, 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42410533/" },
      { label: "IR Mapper — global insecticide resistance mapping", url: "https://www.irmapper.com/" },
      { label: "WHO: Vector-borne diseases", url: "https://www.who.int/news-room/fact-sheets/detail/vector-borne-diseases" },
    ],
    vectors: ["anopheles-mosquito"],
    drugs: ["permethrin"],
    pathogens: ["plasmodium"],
    diseases: ["malaria"],
    countries: ["nigeria", "ghana", "cameroon", "uganda", "tanzania", "malawi"],
    institutions: ["who", "ivcc", "lshtm"],
    technologies: ["vector-surveillance", "genomic-surveillance"],
    bottlenecks: ["insecticide-resistance-crisis"],
    terms: ["insecticide-resistance"],
    related: ["pyrethroid-resistance-aedes"],
    stats: [
      { label: "Routine screening", value: "WHO-recommended", note: "per vector-control programme" },
    ],
  },
  {
    id: "pyrethroid-resistance-aedes",
    name: "Pyrethroid resistance in Aedes mosquitoes",
    tldr: "The day-biting Aedes that carry dengue, Zika and chikungunya have also developed pyrethroid resistance, weakening the emergency spraying relied on during outbreaks.",
    summary:
      "Aedes aegypti and Ae. albopictus are the vectors of dengue, Zika and chikungunya, and with no antiviral treatment and limited vaccine availability, vector control is the only lever. Pyrethroids are the mainstay of that control — fogging, space spraying, household aerosols and treated materials — and resistance is now documented across Latin America, Asia and parts of Africa. The mechanisms are the same as in malaria vectors, kdr target-site mutations and metabolic detoxification, and Ae. aegypti additionally shows behavioural avoidance of treated surfaces. Resistance narrows the options for emergency outbreak response and pushes programmes toward larvicides, source reduction and biological control such as Wolbachia.",
    asOf: "2026-09",
    resistanceType: "Insecticide",
    status: "Widespread",
    driver:
      "Decades of pyrethroid use in fogging, space spraying and household products, plus agricultural pyrethroid exposure selecting the same populations.",
    mechanism:
      "Target-site kdr mutations in the voltage-gated sodium channel and metabolic detoxification by P450s; Ae. aegypti also shows behavioural avoidance of insecticide-treated surfaces.",
    geography:
      "Documented across Latin America (Brazil, Mexico, Colombia), Asia (Indonesia, the Philippines, Thailand) and parts of Africa.",
    surveillance:
      "National vector-control programmes and research networks; less standardised globally than malaria insecticide-resistance monitoring.",
    impact:
      "Removes the principal tool for emergency dengue, chikungunya and Zika control and reinforces the move to larvicides, source reduction and Wolbachia-based approaches.",
    links: [
      { label: "Literature search: pyrethroid resistance in Aedes", url: "https://pubmed.ncbi.nlm.nih.gov/?term=pyrethroid+resistance+Aedes+aegypti" },
      { label: "WHO: Dengue and severe dengue", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
    ],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    drugs: ["permethrin"],
    pathogens: ["dengue-virus", "chikungunya-virus"],
    diseases: ["dengue", "chikungunya", "zika"],
    countries: ["brazil", "indonesia", "philippines"],
    institutions: ["who", "ivcc"],
    technologies: ["vector-surveillance"],
    bottlenecks: ["insecticide-resistance-crisis"],
    terms: ["insecticide-resistance"],
    related: ["pyrethroid-resistance-anopheles"],
  },
  {
    id: "benzimidazole-resistance-sth",
    name: "Benzimidazole resistance in soil-transmitted helminths",
    tldr: "The deworming drugs given to hundreds of millions of children a year have a known escape route — well documented in livestock worms and now being watched for in people.",
    summary:
      "Albendazole and mebendazole are the cheapest, most widely used anthelmintics in the world and the backbone of soil-transmitted helminth control. Their weak point is known precisely: point mutations in beta-tubulin that reduce drug binding. In livestock nematodes those mutations are common and resistance is a routine problem. In human STH, resistance-associated genotypes have been detected at low frequency, and Trichuris trichiura in particular responds poorly to a single dose of albendazole — which may reflect pharmacology as much as resistance. Whether human-programme treatment is actually failing is still debated, and there is no routine efficacy surveillance to settle it.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic",
    status: "Documented in livestock; emerging and monitored in humans",
    driver:
      "Frequent repeated mass deworming in human programmes, and in livestock decades of intensive benzimidazole use.",
    mechanism:
      "Point mutations in beta-tubulin (notably F167Y, E198A and F200Y) that reduce benzimidazole binding to the parasite's microtubules.",
    geography:
      "Resistance is common in sheep and cattle nematodes worldwide; resistance-associated genotypes have been reported at low frequency in human hookworm and Trichuris in Africa, Asia and Latin America.",
    surveillance:
      "No routine efficacy surveillance in human programmes; WHO and research groups monitor cure rates and resistance genotypes through studies rather than standing systems.",
    impact:
      "The benzimidazoles are the cheapest and most widely used NTD drugs; losing them would undercut deworming programmes worldwide, and Trichuris already responds poorly to a single dose.",
    links: [
      { label: "Benzimidazole resistance-associated mutations in hookworm tubulin (Vet World, 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/39897360/" },
      { label: "WHO: Soil-transmitted helminth infections", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    ],
    drugs: ["albendazole", "mebendazole"],
    pathogens: ["soil-transmitted-helminths"],
    targets: ["beta-tubulin"],
    diseases: ["sth"],
    countries: ["tanzania", "ethiopia"],
    institutions: ["who"],
    technologies: ["genomic-surveillance"],
    bottlenecks: ["surveillance-data-gap"],
    terms: ["amr"],
  },
  {
    id: "triclabendazole-resistance-fasciola",
    name: "Triclabendazole resistance in Fasciola",
    tldr: "Liver flukes in livestock have repeatedly beaten the one drug that kills both their immature and adult stages — and it is the only drug recommended for human fascioliasis.",
    summary:
      "Triclabendazole is unusual in being effective against both immature and adult Fasciola, which is why it became the veterinary drug of choice and the WHO-recommended treatment for human fascioliasis. Resistance appeared in Australian sheep in the 1990s and is now widespread in livestock, and a 2023 study mapped it to a single major locus with dominant inheritance. Human reduced cure rates have been reported on the Bolivian Altiplano and in Egypt. Because no other drug reliably kills immature flukes, losing triclabendazole would leave human fascioliasis without a fully effective option.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic",
    status: "Widespread in livestock; reported in humans",
    driver:
      "Intensive repeated triclabendazole use in livestock; the drug's own effectiveness against immature flukes shortens the generation time it leaves behind.",
    mechanism:
      "Mapped to a single major locus with dominant inheritance in Fasciola hepatica; the causal gene and the precise target are still under study.",
    geography:
      "Livestock resistance widespread in Australia, Europe and South America; human reduced cure rates reported on the Bolivian Altiplano and in Egypt.",
    surveillance:
      "Veterinary surveillance is routine in some countries; human efficacy monitoring is limited to research cohorts.",
    impact:
      "Triclabendazole has no established alternative for human fascioliasis, and no other drug kills immature flukes as reliably.",
    links: [
      { label: "Major locus conferring triclabendazole resistance in Fasciola hepatica (PLoS Pathog, 2023)", url: "https://pubmed.ncbi.nlm.nih.gov/36701396/" },
      { label: "Literature search: triclabendazole resistance", url: "https://pubmed.ncbi.nlm.nih.gov/?term=triclabendazole+resistance+Fasciola" },
    ],
    drugs: ["triclabendazole"],
    pathogens: ["foodborne-trematodes"],
    diseases: ["foodborne-trematodiases"],
    countries: ["bolivia"],
    institutions: ["who"],
    terms: ["amr"],
  },
  {
    id: "ivermectin-suboptimal-response",
    name: "Sub-optimal ivermectin response in Onchocerca volvulus",
    tldr: "After decades of mass ivermectin, some Onchocerca worms clear less completely than they should — a signal onchocerciasis elimination programmes cannot ignore.",
    summary:
      "Ivermectin kills the microfilariae of Onchocerca volvulus and temporarily sterilises the adult worms, and annual or twice-yearly community treatment is the backbone of onchocerciasis elimination. In parts of Ghana and Cameroon, microfilarial loads have fallen more slowly than mass treatment predicts. A genome-wide study (PLoS NTD, 2017) found that parasite populations in those areas had lost genetic diversity — a pattern consistent with selection — but stopped short of calling it resistance, because genetic drift under shrinking populations produces a similar signature. Changes in the ivermectin receptor (a glutamate-gated chloride channel) and in beta-tubulin have been implicated in other parasites, but no simple marker of ivermectin resistance in Onchocerca has been validated.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic (macrocyclic lactone)",
    status: "Suspected",
    driver: "Annual or twice-yearly mass ivermectin treatment sustained over more than two decades.",
    mechanism:
      "Not resolved. Candidate changes in the parasite's glutamate-gated chloride channel (GluCl, the ivermectin receptor) and in beta-tubulin; soft selective sweeps and genetic drift make the signal hard to interpret.",
    geography: "Sub-optimal responses reported in parts of Ghana, Cameroon and elsewhere, and debated.",
    surveillance: "Research and programme monitoring rather than a standing resistance-surveillance system.",
    impact:
      "Ivermectin is the backbone of onchocerciasis elimination; losing it would strand the 10–15 years of annual treatment the strategy depends on.",
    links: [
      { label: "Genome-wide analysis of ivermectin response in Onchocerca volvulus (PLoS NTD, 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28746337/" },
      { label: "WHO: Onchocerciasis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    drugs: ["ivermectin", "moxidectin"],
    vectors: ["blackfly"],
    pathogens: ["onchocerca-volvulus"],
    targets: ["glucl"],
    diseases: ["onchocerciasis"],
    countries: ["ghana", "cameroon"],
    institutions: ["who", "gates-foundation"],
    technologies: ["genomic-surveillance", "xenomonitoring"],
    bottlenecks: ["surveillance-data-gap"],
    terms: ["amr"],
  },
  {
    id: "azithromycin-macrolide-resistance",
    name: "Macrolide resistance from mass azithromycin",
    tldr: "Single-dose azithromycin drives trachoma and yaws elimination — and mass use of it can breed macrolide resistance in the bacteria around it.",
    summary:
      "Azithromycin is the cornerstone of trachoma elimination and of the strategy to eradicate yaws: one oral dose, given to whole communities. Repeated mass distribution is a strong selective pressure, and macrolide resistance in off-target bacteria has been documented — a 2022 Lancet Microbe study found nasopharyngeal Streptococcus pneumoniae resistance in the setting of azithromycin mass drug administration. Treatment failures have also been reported in yaws. The concern is not that the trachoma or yaws organism easily becomes resistant, but that the single-drug strategy is exposed: if resistance spreads to the target pathogen, both elimination goals rest on a therapy that no longer works.",
    asOf: "2026-09",
    resistanceType: "Antibiotic (macrolide)",
    status: "Documented in off-target bacteria; treatment failures reported",
    driver: "Repeated annual mass azithromycin distribution across whole districts and communities.",
    mechanism:
      "Macrolide resistance through erm genes and 23S rRNA methylation, which prevent the drug from binding the bacterial ribosome.",
    geography:
      "Macrolide resistance in pneumococci documented in trachoma programmes in Africa; azithromycin treatment failure reported in yaws in parts of the Pacific and Africa.",
    surveillance: "Research studies and AMR monitoring nested in some programmes; not universal.",
    impact:
      "Threatens both trachoma elimination and yaws eradication, which each depend on one cheap, single-dose antibiotic.",
    links: [
      { label: "Nasopharyngeal pneumococcal macrolide resistance under azithromycin MDA (Lancet Microbe, 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35156069/" },
      { label: "WHO: Trachoma fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
      { label: "WHO: Yaws fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    ],
    drugs: ["azithromycin"],
    pathogens: ["chlamydia-trachomatis", "treponema-pallidum-pertenue"],
    diseases: ["trachoma", "yaws"],
    countries: ["tanzania", "ethiopia", "papua-new-guinea"],
    institutions: ["who"],
    technologies: ["mhealth-surveillance"],
    terms: ["amr"],
  },
  {
    id: "antimony-resistance-leishmania",
    name: "Antimony resistance in Leishmania donovani",
    tldr: "In Bihar, India, the old antimony drugs stopped working so thoroughly they had to be abandoned — a textbook case of resistance reshaping a treatment guideline.",
    summary:
      "Pentavalent antimonials were the first-line treatment for visceral leishmaniasis for most of the twentieth century. In the hyperendemic Bihar region of India, failure rates climbed through the 1990s and 2000s until a large fraction of patients did not respond, and the region abandoned antimonials for miltefosine and then liposomal amphotericin B. The mechanism is a textbook combination: reduced drug uptake through downregulation of the aquaglyceroporin AQP1, increased efflux, and raised intracellular trypanothione that detoxifies the drug. Bihar is now a standing example of how fast monotherapy in a high-transmission setting can select resistance, and of how a programme responds once it has.",
    asOf: "2026-09",
    resistanceType: "Antiprotozoal (antimony)",
    status: "Documented — led to abandonment",
    driver: "Widespread outpatient antimony use, including sub-curative courses, in a hyperendemic region.",
    mechanism:
      "Reduced uptake through downregulation of the aquaglyceroporin AQP1 and increased efflux by ABC transporters; raised intracellular trypanothione, which detoxifies the drug.",
    geography: "Bihar, India (with high failure rates); also reported in Nepal and parts of South America.",
    surveillance: "Programme-led; antimonials were withdrawn in favour of combination therapy rather than monitored further.",
    impact:
      "Drove the shift to combination regimens for visceral leishmaniasis and stands as a caution that monotherapy selects resistance quickly.",
    links: [
      { label: "WHO: Leishmaniasis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
      { label: "Literature search: antimony resistance in L. donovani", url: "https://pubmed.ncbi.nlm.nih.gov/?term=antimony+resistance+Leishmania+donovani+Bihar" },
    ],
    drugs: ["antimonials", "miltefosine", "liposomal-amphotericin-b"],
    vectors: ["sandfly"],
    pathogens: ["leishmania"],
    diseases: ["leishmaniasis"],
    countries: ["india", "nepal"],
    institutions: ["who", "dndi"],
    terms: ["amr"],
  },
  {
    id: "azole-resistance-kinetoplastids",
    name: "Azole (CYP51) resistance in kinetoplastid parasites",
    tldr: "Azoles looked like ready-made antiparasitics because they hit a parasite enzyme, CYP51 — but the parasites can mutate it, and the drugs underperformed in Chagas trials.",
    summary:
      "CYP51 (sterol 14α-demethylase) is essential to Trypanosoma cruzi, Leishmania and T. brucei and is the target of the azole antifungals, which made azoles an attractive repurposing proposition. In the laboratory, CYP51 point mutations and overexpression confer azole resistance in trypanosomatids, and the enzyme is the resistance mechanism as well as the target. Clinically, posaconazole and ravuconazole (as E1224) underperformed benznidazole against Chagas disease and were not taken forward. Azoles are not licensed for Chagas disease or sleeping sickness, so this remains a laboratory rather than a clinical resistance problem — but it is a caution for any programme that bets on CYP51.",
    asOf: "2026-09",
    resistanceType: "Antifungal (azole)",
    status: "Laboratory; not a licensed-therapy problem",
    driver:
      "Laboratory selection, and in fungi clinical azole use; azoles are not standard therapy for the kinetoplastid diseases.",
    mechanism:
      "Point mutations in CYP51 that reduce azole binding, and CYP51 overexpression — the same enzyme that is the drug target.",
    geography: "Laboratory-documented for T. cruzi and Leishmania; clinical relevance remains investigational.",
    surveillance: "Laboratory only; there is no clinical azole-resistance surveillance because no azole is licensed for these diseases.",
    impact:
      "Explains why azole monotherapy underperformed in Chagas disease and is a caution for CYP51-targeting programmes, including early-stage leishmaniasis and sleeping-sickness work.",
    links: [
      { label: "CYP51 inhibition assay for Trypanosoma cruzi compound triaging (PLoS NTD, 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/26394211/" },
      { label: "Literature search: CYP51 azole resistance in trypanosomatids", url: "https://pubmed.ncbi.nlm.nih.gov/?term=CYP51+azole+resistance+Trypanosoma" },
    ],
    targets: ["cyp51"],
    drugs: ["fosravuconazole"],
    vectors: ["tsetse-fly", "triatomine-bug"],
    pathogens: ["trypanosoma-cruzi", "trypanosoma-brucei", "leishmania"],
    diseases: ["chagas", "hat", "leishmaniasis"],
    institutions: ["dndi"],
    technologies: ["ai-drug-discovery", "drug-repurposing"],
    terms: ["amr"],
  },
  {
    id: "multidrug-resistant-tb",
    name: "Multidrug-resistant tuberculosis",
    tldr: "TB resistant to the two drugs that defined its treatment — and increasingly to the newer backbone as well — is one of the largest antimicrobial-resistance problems in the world.",
    summary:
      "Multidrug-resistant TB (MDR-TB) is resistant to at least rifampicin and isoniazid, the two drugs that made short-course TB treatment possible. Extensively drug-resistant TB (XDR-TB) adds resistance to a fluoroquinolone and to at least one of bedaquiline or linezolid. WHO estimates that around 400,000 people develop MDR or rifampicin-resistant TB each year, and only a fraction are diagnosed and treated. Resistance accumulates stepwise through target mutations, and is driven by interrupted or incomplete treatment in the patient and by transmission of already-resistant strains. Treatment is longer, more toxic and far more expensive than for drug-susceptible TB.",
    asOf: "2026-09",
    resistanceType: "Antibiotic (antitubercular)",
    status: "Widespread",
    driver:
      "Monotherapy and interrupted or incomplete treatment, plus direct transmission of already-resistant strains.",
    mechanism:
      "Stepwise target mutations: katG and the inhA promoter (isoniazid), rpoB (rifampicin), then gyrA for fluoroquinolones and further mutations for newer and second-line drugs.",
    geography: "Global; the highest absolute numbers are in India, China, the Russian Federation and South Africa.",
    surveillance:
      "WHO's Global TB Programme drug-resistance surveillance and national reference laboratories, using Xpert MTB/RIF, line-probe assays and whole-genome sequencing.",
    impact:
      "Turns a curable disease into a long, toxic and expensive one, and can undo TB control where resistant strains spread.",
    links: [
      { label: "WHO: Tuberculosis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      { label: "Literature search: global burden of multidrug-resistant TB", url: "https://pubmed.ncbi.nlm.nih.gov/?term=multidrug-resistant+tuberculosis+global+burden" },
    ],
    drugs: ["isoniazid", "rifampicin", "bedaquiline", "linezolid"],
    targets: ["inha", "rna-polymerase"],
    pathogens: ["mycobacterium-tuberculosis"],
    diseases: ["tuberculosis"],
    countries: ["india", "south-africa", "indonesia"],
    institutions: ["who", "africa-cdc", "cdc"],
    technologies: ["genomic-surveillance"],
    bottlenecks: ["drug-resistant-tb"],
    terms: ["mdr-tb", "amr"],
  },
  {
    id: "artemisinin-partial-resistance",
    name: "Artemisinin partial resistance in Plasmodium falciparum",
    tldr: "Malaria parasites in East Africa are clearing more slowly after artemisinin treatment — the early stage of resistance that once preceded full failure in the Mekong.",
    summary:
      "Artemisinin-based combination therapies (ACTs) are the first-line treatment for falciparum malaria worldwide. Partial resistance — delayed parasite clearance caused by mutations in the Kelch13 propeller domain — first appeared in the Greater Mekong subregion and has now emerged independently in Africa, including Rwanda and Uganda. On its own, partial resistance does not cause treatment failure, because the partner drug still clears the parasite; full failure comes when the partner drug also fails. Molecular surveillance shows the markers spreading, and WHO keeps therapeutic-efficacy guidance under review. Because ACTs are the only first-line therapy, this is treated as an early warning that must be contained before partner-drug resistance follows.",
    asOf: "2026-09",
    resistanceType: "Antimalarial",
    status: "Established (partial); ACT failure not yet widespread",
    driver:
      "Decades of ACT use and, historically, artemisinin monotherapy, which exposes parasites to sub-therapeutic drug levels.",
    mechanism:
      "Mutations in the Kelch13 propeller domain reduce the parasite's activation of artemisinin, slowing clearance. Full treatment failure requires the partner drug to fail as well.",
    geography:
      "First in the Greater Mekong subregion; now established in Rwanda, Uganda and elsewhere in East Africa, with markers detected more widely.",
    surveillance:
      "WHO and national programmes run therapeutic-efficacy studies and molecular surveillance, including Kelch13 genotyping.",
    impact:
      "ACTs are the only first-line malaria treatment; partial resistance is the early signal that must be contained before partner-drug resistance makes ACTs fail outright.",
    links: [
      { label: "Mapping molecular markers of artemisinin partial resistance in Africa (Lancet Infect Dis, 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42413528/" },
      { label: "Kelch13 mutations mediating artemisinin resistance in East Africa (PLoS One, 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42520053/" },
      { label: "WHO: Malaria fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
    ],
    drugs: ["artesunate", "artemether-lumefantrine"],
    vectors: ["anopheles-mosquito"],
    targets: ["pfkelch13"],
    pathogens: ["plasmodium"],
    diseases: ["malaria"],
    countries: ["uganda", "ethiopia"],
    institutions: ["who", "ifakara"],
    technologies: ["genomic-surveillance"],
    bottlenecks: ["antimalarial-resistance"],
    terms: ["artemisinin-resistance", "amr"],
  },
  {
    id: "scabies-acaricide-resistance",
    name: "Acaricide resistance in Sarcoptes scabiei",
    tldr: "The scabies mite has developed tolerance to permethrin and ivermectin in the communities where those drugs are used most, much as insects resist insecticides.",
    summary:
      "Scabies is treated with topical permethrin or oral ivermectin, and mass ivermectin distribution has become a control tool in high-burden settings. In the communities where those drugs are used most, the mite has begun to respond less well: a knockdown-resistance mutation in the voltage-sensitive sodium channel and glutathione S-transferase detoxification have been linked to permethrin tolerance, and mites from repeatedly treated communities show increasing in-vitro tolerance to ivermectin. Crusted scabies and repeated mass treatment are the settings where selection is strongest, and because permethrin and ivermectin are also the fallbacks for each other, losing either narrows the options for ordinary and crusted disease alike.",
    asOf: "2026-09",
    resistanceType: "Acaricide (insecticide and anthelmintic)",
    status: "Documented",
    driver:
      "Repeated community-wide ivermectin mass drug administration and widespread topical permethrin use.",
    mechanism:
      "Permethrin tolerance is linked to a knockdown-resistance mutation in the voltage-sensitive sodium channel and to glutathione S-transferase detoxification; ivermectin tolerance appears as reduced in-vitro susceptibility in mites from repeatedly treated communities.",
    geography:
      "Reported in scabies-endemic communities, with permethrin tolerance documented in both clinical and in-vitro studies.",
    surveillance: "Research-based; there is no routine acaricide-resistance surveillance in scabies programmes.",
    impact:
      "Permethrin and oral ivermectin are the two treatments for scabies; losing either narrows the options for ordinary scabies and especially for crusted scabies, where both are already combined.",
    links: [
      { label: "Knockdown mutation linked to permethrin tolerance in S. scabiei (JEADV, 2023)", url: "https://pubmed.ncbi.nlm.nih.gov/37356045/" },
      { label: "Longitudinal evidence of increasing ivermectin tolerance in scabies mites (Arch Dermatol, 2009)", url: "https://pubmed.ncbi.nlm.nih.gov/19620572/" },
      { label: "Glutathione S-transferases detoxifying acaricides in S. scabiei (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41831858/" },
    ],
    drugs: ["permethrin", "ivermectin"],
    targets: ["insect-sodium-channel", "glucl"],
    pathogens: ["sarcoptes-scabiei"],
    diseases: ["scabies"],
    institutions: ["who"],
    technologies: ["genomic-surveillance"],
    terms: ["insecticide-resistance", "amr"],
  },
  {
    id: "leprosy-drug-resistance",
    name: "Drug resistance in leprosy",
    tldr: "Dapsone and rifampicin resistance in Mycobacterium leprae is real but still uncommon; because leprosy is treated with a fixed multidrug regimen, it is watched closely.",
    summary:
      "Leprosy is treated with multidrug therapy — dapsone, rifampicin and clofazimine — and that fixed combination is one reason resistance has stayed uncommon. Dapsone resistance maps to folP1 (dihydropteroate synthase), rifampicin resistance to rpoB, and fluoroquinolone resistance to gyrA; clofazimine resistance has not been confirmed. The WHO Global Leprosy Programme has surveyed resistance since 2008, and resistant and multidrug-resistant strains continue to be found in several countries, though at low prevalence and with patchy surveillance. Because the regimen is the whole of leprosy treatment, even a low level of resistance matters for individual relapses and for the reliability of a fixed three-drug course.",
    asOf: "2026-09",
    resistanceType: "Antibiotic (antileprosy)",
    status: "Documented, still uncommon",
    driver:
      "Historic dapsone monotherapy, which selected resistance, and incomplete or interrupted multidrug therapy; rifampicin resistance can also arise de novo.",
    mechanism:
      "Point mutations in folP1 (dihydropteroate synthase, dapsone), rpoB (RNA polymerase, rifampicin) and gyrA (fluoroquinolones); clofazimine resistance has not been confirmed.",
    geography:
      "Resistant strains reported in India, Brazil, Ethiopia and elsewhere, at low but non-zero prevalence with incomplete surveillance.",
    surveillance:
      "WHO Global Leprosy Programme drug-resistance surveillance, using molecular testing for folP1, rpoB and gyrA at sentinel sites.",
    impact:
      "Multidrug therapy is the whole of leprosy treatment; dapsone or rifampicin resistance threatens individual cure and the reliability of a fixed regimen.",
    links: [
      { label: "WHO: Leprosy fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
      { label: "Review: drug resistance in Mycobacterium leprae (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41476900/" },
      { label: "Geographical trends of drug-resistant M. leprae (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41432848/" },
    ],
    drugs: ["dapsone", "rifampicin", "clofazimine"],
    targets: ["dihydropteroate-synthase", "rna-polymerase"],
    pathogens: ["mycobacterium-leprae"],
    diseases: ["leprosy"],
    countries: ["india", "brazil", "ethiopia"],
    institutions: ["who"],
    technologies: ["genomic-surveillance"],
    bottlenecks: ["surveillance-data-gap"],
    terms: ["amr"],
  },
  {
    id: "benznidazole-nifurtimox-resistance-chagas",
    name: "Benznidazole and nifurtimox resistance in Trypanosoma cruzi",
    tldr: "The two drugs that treat Chagas disease are prodrugs the parasite activates itself — and losing that activation is the main route to resistance.",
    summary:
      "Benznidazole and nifurtimox are nitroheterocyclic prodrugs: the parasite's own type I nitroreductase reduces them into the reactive species that kill it, so reduced nitroreductase activity is the principal route to resistance. Susceptibility also differs between T. cruzi lineages, and treatment failure in established chronic disease is common — frequently from parasite persistence and drug exposure rather than confirmed resistance. With only two drugs in use and no alternative regimen for chronic infection, resistance or poor response in either leaves a very thin repertoire, which is why combination therapy and new chemical scaffolds are a priority.",
    asOf: "2026-09",
    resistanceType: "Antiprotozoal (nitroheterocycle)",
    status: "Documented (laboratory); clinical failures frequent",
    driver:
      "Long courses of the only two available drugs, and natural variation in drug susceptibility between parasite lineages.",
    mechanism:
      "Benznidazole and nifurtimox are prodrugs reduced by a parasite type I nitroreductase; loss of that activation step confers resistance, with contributions from drug efflux and oxidative-stress defences.",
    geography:
      "Laboratory-documented across T. cruzi lineages; clinical treatment failure is widespread in chronic Chagas disease.",
    surveillance:
      "No routine resistance surveillance; treatment response is followed clinically and by PCR in research settings.",
    impact:
      "Only two drugs are in use for Chagas disease; resistance or poor response in either leaves a very thin repertoire.",
    links: [
      { label: "Mechanisms of T. cruzi resistance to benznidazole and nifurtimox (Acta Trop, 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41365456/" },
      { label: "Tissue-specific persistence in a drug-resistant T. cruzi model (ACS Infect Dis, 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42725975/" },
      { label: "WHO: Chagas disease fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    ],
    drugs: ["benznidazole", "nifurtimox"],
    targets: ["trypanosome-nitroreductase"],
    pathogens: ["trypanosoma-cruzi"],
    diseases: ["chagas"],
    vectors: ["triatomine-bug"],
    countries: ["brazil", "bolivia"],
    institutions: ["who", "dndi"],
    technologies: ["genomic-surveillance"],
    terms: ["amr"],
    related: ["azole-resistance-kinetoplastids"],
  },
  {
    id: "benzimidazole-treatment-failure-echinococcosis",
    name: "Benzimidazole treatment failure in echinococcosis",
    tldr: "Albendazole and mebendazole are the only medical treatment for echinococcosis, and they often do not cure — resistance is suspected in some failures but rarely proven.",
    summary:
      "Benzimidazoles are parasitostatic: they stop the larval cyst growing but frequently do not kill it, so treatment runs for months to years and relapse is common. In the laboratory, benzimidazole resistance can be selected in Echinococcus multilocularis, with changes in beta-tubulin; clinically, treatment failure is common but usually reflects poor drug penetration into the cyst and the drug's static action rather than confirmed resistance. With only two benzimidazoles available and surgery not always possible, a genuinely resistant Echinococcus would leave medical management without a drug — which is why the distinction between treatment failure and true resistance matters.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic",
    status: "Suspected (treatment failure); resistance rarely proven",
    driver: "Very long courses of albendazole or mebendazole, often as the only medical option.",
    mechanism:
      "Benzimidazoles bind beta-tubulin; resistance selected in the laboratory is associated with beta-tubulin changes, while clinical failure is more often pharmacokinetic or intrinsic to the drug's parasitostatic action.",
    geography:
      "Treatment failure is reported wherever echinococcosis is managed; confirmed resistance remains a laboratory phenomenon.",
    surveillance: "No routine resistance surveillance; response is judged by imaging and serology over years.",
    impact:
      "With only two benzimidazoles, a truly resistant Echinococcus would leave medical management without a drug, and surgical cure is not always possible.",
    links: [
      { label: "WHO: Echinococcosis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
      { label: "Literature search: benzimidazole resistance in Echinococcus", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Echinococcus+benzimidazole+resistance+beta-tubulin" },
    ],
    drugs: ["albendazole", "mebendazole"],
    targets: ["beta-tubulin"],
    pathogens: ["echinococcus"],
    diseases: ["echinococcosis"],
    institutions: ["who"],
    terms: ["amr"],
  },
  {
    id: "lf-anthelmintic-response",
    name: "Anthelmintic response monitoring in lymphatic filariasis",
    tldr: "No drug resistance has been confirmed in the filarial worms that cause lymphatic filariasis — but the MDA drugs are only partly macrofilaricidal, so response is watched closely.",
    summary:
      "Lymphatic filariasis elimination relies on annual mass treatment with ivermectin plus albendazole, or DEC plus albendazole in Asia. Unlike onchocerciasis and the soil-transmitted helminths, Wuchereria bancrofti has not shown confirmed anthelmintic resistance; the known limitation is pharmacological, because these drugs clear microfilariae far better than adult worms, so repeated rounds can leave the adult worms that keep an infection alive. Because ivermectin and albendazole are shared with onchocerciasis and deworming programmes, resistance appearing in any one of them would matter for all — and the absence of a validated resistance marker is a surveillance gap rather than a clean bill of health.",
    asOf: "2026-09",
    resistanceType: "Anthelmintic",
    status: "Not established — watched",
    driver: "Repeated annual mass drug administration sustained over many years.",
    mechanism:
      "No confirmed resistance mechanism in W. bancrofti. The known limitation is pharmacological: the drugs are more microfilaricidal than macrofilaricidal, and Wolbachia-targeting doxycycline is used where adult worms must be cleared.",
    geography: "No confirmed resistant focus; monitoring is programme-wide.",
    surveillance:
      "Transmission assessment surveys (TAS) and xenomonitoring track whether transmission persists; molecular resistance markers are not yet in routine use.",
    impact:
      "If ivermectin or albendazole resistance emerged in lymphatic filariasis it would also threaten the onchocerciasis and deworming programmes that share the drugs.",
    links: [
      { label: "WHO: Lymphatic filariasis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
      { label: "Literature search: anthelmintic response in W. bancrofti", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Wuchereria+bancrofti+ivermectin+response+mass+drug+administration" },
    ],
    drugs: ["ivermectin", "albendazole", "diethylcarbamazine", "doxycycline"],
    targets: ["glucl", "beta-tubulin", "wolbachia"],
    pathogens: ["lymphatic-filarial-worms"],
    diseases: ["lymphatic-filariasis"],
    vectors: ["culex-mosquito"],
    institutions: ["who", "gates-foundation"],
    technologies: ["xenomonitoring", "mhealth-surveillance"],
    bottlenecks: ["surveillance-data-gap"],
    terms: ["amr"],
    related: ["ivermectin-suboptimal-response"],
  },
];
