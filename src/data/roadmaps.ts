import type { RecordOf } from "@/lib/schema";

export const roadmaps: RecordOf<"roadmaps">[] = [
  {
    id: "vector-control-roadmap",
    name: "Vector control roadmap: nets and spraying → new chemistries → genetic control",
    tldr: "How the fight against disease-carrying insects moved from chemical sprays to engineered mosquitoes, and why resistance forced the change.",
    summary:
      "Vector control began with environmental management and larvicides, then scaled up with insecticide-treated nets and indoor residual spraying, which together drove large reductions in vector-borne disease. Pyrethroid resistance has since eroded that advantage, and because the same chemicals are used in agriculture and public health, there is little chemical space left. The roadmap now runs through new active ingredients, combinations, and non-chemical methods including sterile-insect release and gene drive — with the last of these raising governance questions no previous tool has.",
    asOf: "2026-09",
    family: "Vector control",
    horizon: "1900s → 2035",
    links: [
      { label: "WHO — Global vector control response", url: "https://www.who.int/publications/i/item/9789241512978" },
    ],
    timeline: [
      {
        date: "1900s–1940s",
        text: "Environmental management and early larvicides: draining swamps, oiling water, removing breeding sites.",
        refs: ["snail-control"],
      },
      {
        date: "1950s–1960s",
        text: "Indoor residual spraying with DDT drives major reductions in mosquito-borne disease, then resistance and environmental concerns end the campaigns.",
        refs: ["indoor-residual-spraying", "insecticide-resistance"],
      },
      {
        date: "1990s–2000s",
        text: "Insecticide-treated nets scale up massively, becoming the dominant vector-control tool for night-biting mosquitoes.",
        refs: ["insecticide-treated-nets"],
      },
      {
        date: "2000s–2010s",
        text: "Pyrethroid resistance spreads across Africa and Asia, and the same class is used on nets and in spraying, leaving few alternatives.",
        refs: ["insecticide-resistance-crisis", "insecticide-resistance"],
      },
      {
        date: "2010s",
        text: "New active ingredients and dual-ingredient nets reach WHO policy; IVCC and industry rebuild the public-health insecticide pipeline.",
        refs: ["ivcc"],
      },
      {
        date: "2010s–2020s",
        text: "Sterile insect technique suppresses tsetse and is trialled against mosquitoes; gene-drive mosquitoes advance to contained testing.",
        refs: ["sterile-insect-technique", "gene-drive-mosquitoes", "tsetse-traps"],
      },
      {
        date: "2020s–2035",
        text: "Surveillance becomes data-driven, with AI species identification and xenomonitoring; the question is whether genetic tools can be governed and deployed responsibly.",
        refs: ["ai-vector-identification", "vector-surveillance", "xenomonitoring"],
      },
    ],
    diseases: ["dengue-chikungunya", "lymphatic-filariasis", "chagas", "hat", "leishmaniasis", "onchocerciasis"],
    terms: ["vector-borne", "insecticide-resistance"],
    stats: [
      { label: "Dominant tool", value: "Insecticide-treated nets" },
      { label: "Main threat", value: "Pyrethroid resistance" },
      { label: "Frontier", value: "Genetic control" },
    ],
  },
  {
    id: "ntd-diagnostics-roadmap",
    name: "NTD diagnostics roadmap: microscopy → rapid tests → molecular and AI",
    tldr: "How diagnosis moved from a microscope in a district laboratory to tests that can be run and read in a village.",
    summary:
      "NTD diagnosis began with microscopy — Kato-Katz for worm eggs, blood films for trypanosomes, skin snips for onchocerciasis — which is cheap and specific but needs a trained microscopist and misses light infections. Rapid lateral-flow tests brought diagnosis to the point of care, though most detect antibodies and therefore cannot distinguish past from current infection. The next layer is molecular: LAMP, PCR and cartridge tests detect light infections, CRISPR platforms promise molecular sensitivity without a laboratory, and AI microscopy addresses the shortage of trained readers. The unresolved problem is that elimination needs tests that say whether transmission has truly stopped, and most current tools are not sensitive or specific enough for that.",
    asOf: "2026-09",
    family: "Diagnostics",
    horizon: "1900s → 2035",
    links: [
      { label: "FIND — diagnostics for neglected diseases", url: "https://www.finddx.org/" },
    ],
    timeline: [
      {
        date: "1900s–1990s",
        text: "Microscopy is the only tool: stool smears, blood films and skin snips, requiring laboratories and trained staff.",
        refs: ["kato-katz", "microscopy-thick-smear", "skin-snip"],
      },
      {
        date: "1990s–2000s",
        text: "Card and lateral-flow antibody tests bring screening to the field, enabling mapping and active case finding.",
        refs: ["catt", "lateral-flow-assays", "antibody-rdt"],
      },
      {
        date: "2000s–2010s",
        text: "Antigen tests and improved rapid tests support case detection, but most still cannot tell active from past infection.",
        refs: ["rk39-rapid-test", "point-of-care-cca"],
      },
      {
        date: "2010s",
        text: "Molecular methods — PCR and then LAMP — show the sensitivity that microscopy lacks, at the cost of laboratory infrastructure.",
        refs: ["molecular-pcr", "molecular-lamp"],
      },
      {
        date: "2020s",
        text: "Cartridge-based molecular platforms and CRISPR diagnostics bring near-molecular sensitivity towards the point of care.",
        refs: ["gene-cartridge-test", "crispr-diagnostics"],
      },
      {
        date: "2020s",
        text: "AI microscopy and genomic surveillance begin to address the microscopist shortage and the need to distinguish local from imported cases.",
        refs: ["ai-microscopy", "genomic-surveillance"],
      },
      {
        date: "2020s–2035",
        text: "The remaining gap is a test that can certify elimination: sensitive enough for light infection, specific enough to trust a zero.",
        refs: ["diagnostics-gap", "sensitivity-specificity"],
      },
    ],
    diseases: ["schistosomiasis", "sth", "leishmaniasis", "hat", "lymphatic-filariasis", "onchocerciasis", "chagas"],
    terms: ["sensitivity-specificity", "elimination"],
    institutions: ["find-dx", "who", "tdr"],
    stats: [
      { label: "Reference method", value: "Microscopy" },
      { label: "Bottleneck", value: "Light infections and elimination verification" },
      { label: "Frontier", value: "CRISPR and AI microscopy" },
    ],
  },
  {
    id: "ntd-drug-discovery-roadmap",
    name: "NTD drug discovery roadmap: screening → target-based design → AI and open science",
    tldr: "How finding a drug for a disease nobody will pay for moved from trial-and-error to computational design and non-profit development.",
    summary:
      "NTD drug discovery began with empirical screening — testing compounds on parasites and hoping — and produced praziquantel, ivermectin and the benzimidazoles, drugs that are still the backbone of treatment decades later. Target-based design followed, but repeatedly found that a validated target does not guarantee a usable drug. The current era couples AI-driven target and molecule design with the product development partnership model, which solves the market problem rather than the science problem: non-profits carry candidates from discovery to registration and then secure access. AlphaFold and structure prediction have removed one long-standing barrier by giving models of parasite proteins that were never crystallised.",
    asOf: "2026-09",
    family: "Drug discovery",
    horizon: "1970s → 2035",
    links: [
      { label: "DNDi — portfolio", url: "https://dndi.org/portfolio/" },
    ],
    timeline: [
      {
        date: "1970s",
        text: "Empirical screening produces praziquantel and ivermectin — still the backbone of NTD treatment today.",
        refs: ["praziquantel", "ivermectin"],
      },
      {
        date: "1980s–1990s",
        text: "Benzimidazoles scale up for deworming and filariasis, and mass donation programmes begin.",
        refs: ["albendazole", "mebendazole"],
      },
      {
        date: "2000s",
        text: "Target-based discovery identifies appealing enzymes — cruzain, trypanothione reductase, NMT — but few inhibitors reach patients.",
        refs: ["cruzain", "trypanothione-reductase", "nmt"],
      },
      {
        date: "2003",
        text: "DNDi is founded, proving that a non-profit can take a candidate to registration for a disease with no market.",
        refs: ["dndi", "open-science-drug-discovery"],
      },
      {
        date: "2010s",
        text: "Fexinidazole and then acoziborole show that oral and single-dose cures are achievable for sleeping sickness.",
        refs: ["fexinidazole", "acoziborole", "cpsf3"],
      },
      {
        date: "2020s",
        text: "AlphaFold and AI-driven design make unpursued parasite targets tractable for small teams.",
        refs: ["alphafold-structure-prediction", "ai-drug-discovery"],
      },
      {
        date: "2020s–2035",
        text: "Repurposing, combination therapy, and new anthelmintics such as emodepside aim to pre-empt resistance to the drugs that carry whole programmes.",
        refs: ["emodepside", "drug-repurposing", "slo-1"],
      },
    ],
    diseases: ["hat", "chagas", "leishmaniasis", "onchocerciasis", "schistosomiasis", "sth"],
    terms: ["pdp", "tpp"],
    institutions: ["dndi", "tdr"],
    stats: [
      { label: "Model", value: "Product development partnership" },
      { label: "Landmark", value: "First all-oral cure for sleeping sickness" },
      { label: "Frontier", value: "AI-driven design for parasites" },
    ],
  },
  {
    id: "snakebite-roadmap",
    name: "Snakebite roadmap: horse serum → safer antivenoms → recombinant antibodies",
    tldr: "From crude animal-derived antivenom to engineered antibodies, with the real problem remaining distribution and quality.",
    summary:
      "Antivenom has been made the same way for over a century: immunise horses with venom and harvest the antibodies. That produces a product that works, but which varies between batches, needs a cold chain, and can cause severe allergic reactions. The roadmap has three strands — improving current products and their quality through WHO prequalification, making antivenoms more affordable and available where bites happen, and developing recombinant human antibodies that could be produced consistently at scale. The last is scientifically hard because venom is a cocktail, so a product must combine antibodies against many toxins.",
    asOf: "2026-09",
    family: "Antivenom",
    horizon: "1890s → 2035",
    links: [
      { label: "WHO — Snakebite envenoming", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    ],
    timeline: [
      {
        date: "1890s",
        text: "The first antivenoms are produced by immunising animals with snake venom.",
      },
      {
        date: "1900s–2000s",
        text: "Antivenom manufacturing spreads, but quality varies widely and products fail to match local snake species.",
      },
      {
        date: "2017",
        text: "Snakebite envenoming is added to the WHO list of neglected tropical diseases, creating a global framework.",
        refs: ["snakebite"],
      },
      {
        date: "2018",
        text: "WHO launches a strategy to halve deaths and disability from snakebite by 2030.",
        refs: ["who"],
      },
      {
        date: "2020s",
        text: "WHO prequalification raises product quality standards, and work on recombinant antivenoms advances.",
        refs: ["snake-antivenom", "recombinant-antivenoms"],
      },
      {
        date: "2020s–2035",
        text: "The goal is defined, affordable antibody cocktails that can be produced at scale — and delivered to the clinics that need them.",
        refs: ["access-and-pricing"],
      },
    ],
    diseases: ["snakebite"],
    terms: ["ntd", "tpp"],
    institutions: ["who"],
    stats: [
      { label: "Method unchanged", value: "Animal immunisation" },
      { label: "Target", value: "Halve deaths and disability by 2030" },
      { label: "Frontier", value: "Recombinant antibody cocktails" },
    ],
  },
  {
    id: "elimination-roadmap",
    name: "Elimination roadmap: mass treatment → surveillance and response → verification",
    tldr: "How NTD programmes move from treating everyone to proving that transmission has actually stopped.",
    summary:
      "Elimination programmes follow a recognisable arc. Mass treatment first drives prevalence down, working best for diseases with safe single-dose medicines and no animal reservoir. As prevalence falls, the strategy shifts to surveillance and response — finding the last cases and acting on each one — which requires diagnostics sensitive enough to detect light infection and systems that can react quickly. The final stage is verification and certification, where an independent body confirms that transmission has stopped and that the evidence is sound. Dracunculiasis, yaws, trachoma, lymphatic filariasis and onchocerciasis are at different points on this arc, and each has been slowed by a different obstacle: animal hosts, resurge, diagnostics, or the sheer difficulty of reaching the last communities.",
    asOf: "2026-09",
    family: "Strategy",
    horizon: "1980s → 2035",
    links: [
      { label: "WHO — NTD roadmap 2021–2030", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    timeline: [
      {
        date: "1980s",
        text: "The guinea worm programme shows that a disease with no drug can be eliminated with water, containment and surveillance.",
        refs: ["dracunculiasis", "wash-interventions"],
      },
      {
        date: "1990s–2000s",
        text: "Mass drug administration scales up for filariasis, onchocerciasis, schistosomiasis and soil-transmitted helminths.",
        refs: ["mass-drug-administration", "mda"],
      },
      {
        date: "2012",
        text: "The yaws eradication strategy and WHO's NTD roadmap set explicit elimination and eradication targets.",
        refs: ["yaws", "who"],
      },
      {
        date: "2010s",
        text: "Trachoma and lymphatic filariasis elimination advance; countries begin to reach and pass the WHO thresholds.",
        refs: ["trachoma", "lymphatic-filariasis", "elimination"],
      },
      {
        date: "2015–2020s",
        text: "The strategy shifts toward surveillance and response, needing sensitive diagnostics and one-health integration for zoonotic diseases.",
        refs: ["diagnostics-gap", "one-health-ntd-integration"],
      },
      {
        date: "2024",
        text: "Brazil becomes the twentieth country validated as having eliminated lymphatic filariasis as a public health problem.",
        refs: ["lymphatic-filariasis", "fiocruz"],
      },
      {
        date: "2025",
        text: "WHO verifies Niger as the first country in the African Region to eliminate onchocerciasis — a milestone for the elimination era.",
        refs: ["onchocerciasis", "who", "eot"],
      },
      {
        date: "2020s–2030",
        text: "Verification and certification become the main work, alongside reaching the last communities and preventing resurgence.",
        refs: ["who", "funding-gap"],
      },
    ],
    diseases: ["dracunculiasis", "yaws", "trachoma", "lymphatic-filariasis", "onchocerciasis", "hat"],
    terms: ["elimination", "mda", "preventive-chemotherapy"],
    institutions: ["who", "uniting-ntds", "gates-foundation"],
    stats: [
      { label: "Stage 1", value: "Mass treatment" },
      { label: "Stage 2", value: "Surveillance and response" },
      { label: "Stage 3", value: "Verification" },
    ],
  },
  {
    id: "ntd-vaccines-roadmap",
    name: "NTD vaccines roadmap: a near-empty field → recombinant antigens → licensed products",
    tldr: "Vaccines exist for only a few NTDs; the roadmap is the long, underfunded path from antigen discovery to a licensed product.",
    summary:
      "Vaccines are the most cost-effective tools in medicine, yet NTDs have almost none. Rabies and dengue vaccines exist and work, and chikungunya now has a licensed product, but for the parasitic NTDs — schistosomiasis, leishmaniasis, hookworm, onchocerciasis and Chagas — there is nothing approved. The reasons are the same market failure that stalled drug development, compounded by the fact that parasites are complex, immune-evasive and hard to grow. The roadmap runs through recombinant-antigen discovery, viral-vectored and mRNA platforms, and the hard question of how to fund and trial a vaccine whose market cannot pay for it.",
    asOf: "2026-09",
    family: "Vaccines",
    horizon: "1990s → 2040",
    links: [
      { label: "WHO — immunisation, vaccines and biologicals", url: "https://www.who.int/teams/immunization-vaccines-and-biologicals" },
    ],
    timeline: [
      {
        date: "pre-2000",
        text: "Rabies vaccines are long established and effective; no vaccine exists for any parasitic NTD.",
        refs: ["rabies-vaccination"],
      },
      {
        date: "2010s",
        text: "Candidate vaccines for hookworm, leishmaniasis and schistosomiasis enter early clinical testing, mostly on public funding.",
        refs: ["hookworm-vaccine-candidates", "leishmaniasis-vaccine-candidates"],
      },
      {
        date: "2015–2020",
        text: "A dengue vaccine is licensed but requires pre-vaccination screening; a second-generation product removes that requirement.",
        refs: ["dengue-vaccination", "tak-003-dengue"],
      },
      {
        date: "2020s",
        text: "Single-dose dengue and licensed chikungunya vaccines show that arboviral NTDs can be prevented by immunisation.",
        refs: ["butantan-dv-dengue"],
      },
      {
        date: "2020s",
        text: "Onchocerciasis and schistosomiasis vaccine candidates remain preclinical or early, held back by hard immunology and no market.",
        refs: ["onchocerciasis-vaccine-candidates", "vaccine-gap"],
      },
      {
        date: "2020s–2040",
        text: "mRNA and viral-vector platforms lower the cost of trying; the remaining barrier is funding late-stage trials and manufacturing.",
        refs: ["funding-gap"],
      },
    ],
    diseases: ["rabies", "dengue-chikungunya", "sth", "leishmaniasis", "schistosomiasis", "onchocerciasis", "chagas"],
    technologies: ["rabies-vaccination", "dengue-vaccination", "hookworm-vaccine-candidates", "leishmaniasis-vaccine-candidates"],
    institutions: ["who", "gates-foundation"],
    stats: [
      { label: "Licensed NTD vaccines", value: "Rabies, dengue, chikungunya" },
      { label: "Parasitic NTD vaccines", value: "None approved" },
      { label: "Core obstacle", value: "Market failure, plus hard parasite immunology" },
    ],
  },
  {
    id: "ai-ntd-roadmap",
    name: "AI in NTDs roadmap: pattern recognition → foundation models → agents across the pipeline",
    tldr: "From reading microscope images to designing molecules and shaping field operations, AI is entering NTD work at every stage.",
    summary:
      "AI entered NTDs through image analysis: reading microscope slides to count parasites and identify vectors, tasks that suffered from scarce and tired expert eyes. It has since spread through the pipeline — predicting parasite protein structures, generating and prioritising drug candidates, and now forecasting outbreaks and supporting programme decisions. The promise is disproportionate for NTDs, because a small team can now do work that once required industrial resources. The risk is equally real: models trained on thin data, deployed without local validation, or bought at the expense of the basic laboratory and surveillance capacity that generates the data they depend on.",
    asOf: "2026-09",
    family: "AI & computation",
    horizon: "2010s → 2035",
    links: [
      { label: "TDR — research and innovation for infectious diseases of poverty", url: "https://tdr.who.int/" },
    ],
    timeline: [
      {
        date: "2010s",
        text: "Machine learning begins to read microscopy images, addressing the shortage of trained microscopists.",
        refs: ["ai-microscopy"],
      },
      {
        date: "2020",
        text: "AlphaFold makes predicted protein structures available for essentially every parasite gene, opening new targets.",
        refs: ["alphafold-structure-prediction"],
      },
      {
        date: "2020s",
        text: "AI-driven design and virtual screening let small non-profit teams pursue targets that once needed a company.",
        refs: ["ai-drug-discovery", "dndi"],
      },
      {
        date: "2020s",
        text: "AI species identification widens vector surveillance beyond districts with entomologists.",
        refs: ["ai-vector-identification", "vector-surveillance"],
      },
      {
        date: "2020s",
        text: "Genomic and clinical data feed models for outbreak forecasting and elimination verification, though data gaps limit them.",
        refs: ["genomic-surveillance", "climate-expansion"],
      },
      {
        date: "2020s–2035",
        text: "The open question is whether AI adds capacity in endemic countries or deepens dependence on systems owned elsewhere.",
        refs: ["funding-gap", "surveillance-data-gap"],
      },
    ],
    diseases: ["schistosomiasis", "sth", "leishmaniasis", "dengue-chikungunya", "buruli-ulcer"],
    technologies: ["ai-drug-discovery", "alphafold-structure-prediction", "ai-microscopy", "ai-vector-identification"],
    institutions: ["dndi", "tdr", "find-dx"],
    stats: [
      { label: "Earliest use", value: "Image analysis" },
      { label: "Highest-leverage use", value: "Drug and target discovery" },
      { label: "Risk", value: "Thin data and low local capacity" },
    ],
  },
];
