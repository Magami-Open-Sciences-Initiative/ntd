import type { RecordOf } from "@/lib/schema";

export const vectors: RecordOf<"vectors">[] = [
  {
    id: "aedes-aegypti",
    name: "Aedes aegypti",
    tldr: "The yellow-fever mosquito — a day-biting city dweller that is the main transmitter of dengue, chikungunya and Zika.",
    summary:
      "Aedes aegypti is the most important urban mosquito for viral disease. It bites during the day, breeds in small containers of clean water — tyres, buckets, flower pots, water tanks — and lives in and around houses, so it is not controlled by bed nets. Because it prefers people and breeds in domestic water storage, it follows urbanisation and unreliable piped water.",
    asOf: "2026-09",
    group: "Insect (mosquito)",
    family: "Culicidae",
    ecology:
      "Eggs survive drying for months, so populations rebound after the first rain or the refilling of a container; larvae need only a few millilitres of water.",
    control:
      "Control is environmental source reduction (covering and emptying containers), larvicides, adulticides during outbreaks, and community mobilisation — bed nets do little because the mosquito bites by day.",
    insecticideResistance:
      "Pyrethroid resistance is widespread, and resistance to other classes is growing, which limits the adulticide response to outbreaks.",
    links: [
      { label: "WHO — dengue and Aedes control", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
    ],
    diseases: ["dengue", "chikungunya"],
    pathogens: ["dengue-virus", "chikungunya-virus"],
    technologies: ["vector-surveillance", "gene-drive-mosquitoes", "sterile-insect-technique", "ai-vector-identification"],
    stats: [
      { label: "Global reach", value: "Present in most tropical and subtropical cities" },
      { label: "Biting habit", value: "Day-biting", note: "so nets at night are ineffective" },
    ],
  },
  {
    id: "aedes-albopictus",
    name: "Aedes albopictus",
    tldr: "The Asian tiger mosquito — a hardier relative of Aedes aegypti that has spread into temperate regions and carries the same viruses.",
    summary:
      "Aedes albopictus transmits dengue, chikungunya and Zika and, unlike Aedes aegypti, tolerates cooler temperatures and survives winters as eggs. That has let it establish in southern Europe, North America and China, where it causes the sporadic outbreaks that were once confined to the tropics. It breeds in both natural and artificial containers, including tree holes and discarded plastics.",
    asOf: "2026-09",
    group: "Insect (mosquito)",
    family: "Culicidae",
    ecology:
      "Cold-tolerant eggs allow overwintering in temperate zones; the species is an aggressive daytime biter and a competent vector of several arboviruses.",
    control:
      "The same container-reduction approach as Aedes aegypti, with added emphasis on surveillance for new introductions because elimination from a new region is possible early.",
    links: [
      { label: "ECDC — Aedes albopictus", url: "https://www.ecdc.europa.eu/en/disease-vectors/facts/mosquito-factsheets/aedes-albopictus" },
    ],
    diseases: ["dengue", "chikungunya"],
    pathogens: ["dengue-virus", "chikungunya-virus"],
    technologies: ["vector-surveillance", "sterile-insect-technique", "ai-vector-identification"],
    stats: [
      { label: "Range", value: "Tropical to temperate", note: "established in Europe and North America" },
    ],
  },
  {
    id: "tsetse-fly",
    name: "Tsetse fly (Glossina)",
    tldr: "The blood-feeding fly of Africa that transmits sleeping sickness to people and nagana to cattle.",
    summary:
      "Tsetse flies are found only in sub-Saharan Africa and are unusual among insects in that females give birth to live larvae one at a time. Both sexes feed on blood and transmit Trypanosoma brucei. Control has historically used baited traps, insecticide-treated targets and the sterile insect technique; the fly's restricted range is the main reason sleeping sickness transmission has been pushed down so far.",
    asOf: "2026-09",
    group: "Insect (fly)",
    family: "Glossinidae",
    ecology:
      "Tsetse require shade and warm temperatures, so their distribution is patchy and tied to vegetation, rivers and lakes — which makes spatially targeted control effective.",
    control:
      "Insecticide-treated traps and targets, live-bait spraying of cattle, and the sterile insect technique, which suppresses an isolated population such as on an island.",
    links: [
      { label: "WHO — Human African trypanosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/trypanosomiasis-human-african-(sleeping-sickness)" },
    ],
    diseases: ["hat"],
    pathogens: ["trypanosoma-brucei"],
    technologies: ["tsetse-traps", "sterile-insect-technique", "vector-surveillance"],
    stats: [
      { label: "Range", value: "Sub-Saharan Africa only" },
      { label: "Reproduction", value: "One larva at a time", note: "which limits population growth and aids control" },
    ],
  },
  {
    id: "sandfly",
    name: "Sandflies (Phlebotomus and Lutzomyia)",
    tldr: "Small, silent, night-biting flies that transmit leishmaniasis.",
    summary:
      "Sandflies are about a third the size of a mosquito and bite at dusk and at night with little sound, so people are often unaware they were bitten. Phlebotomus species transmit Old World leishmaniasis in Africa, Asia and southern Europe; Lutzomyia species transmit New World disease in Latin America. Their breeding sites are moist organic matter — animal burrows, cracks in walls, soil — which makes them harder to attack than container-breeding mosquitoes.",
    asOf: "2026-09",
    group: "Insect (fly)",
    family: "Psychodidae",
    ecology:
      "Females need a blood meal to develop eggs and can also feed on dogs, rodents and other animals, so animal reservoirs keep transmission going even where people are treated.",
    control:
      "Insecticide-treated nets, indoor residual spraying, treating dogs, and environmental management; the small mesh required makes some nets less effective and the insects' habit of biting below the net edge is a problem.",
    links: [
      { label: "WHO — Leishmaniasis", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    ],
    diseases: ["leishmaniasis"],
    pathogens: ["leishmania"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "vector-surveillance"],
    stats: [
      { label: "Transmitting species", value: "> 90" },
    ],
  },
  {
    id: "blackfly",
    name: "Blackflies (Simulium)",
    tldr: "Day-biting flies that breed in fast-flowing rivers and transmit river blindness.",
    summary:
      "Simulium blackflies breed in turbulent, well-oxygenated rivers and bite during the day, which is why onchocerciasis is concentrated along the rivers that these flies use as breeding grounds — the same rivers communities depend on for water and land. Larvicides applied to the river can suppress the fly, and this was the foundation of the original West African control programme before ivermectin existed.",
    asOf: "2026-09",
    group: "Insect (fly)",
    family: "Simuliidae",
    ecology:
      "Larvae attach to rocks and vegetation in fast-flowing water; the female is a strong flier and takes a blood meal by day, so occupational exposure to rivers drives infection.",
    control:
      "River larviciding with environmentally targeted insecticides, plus widespread ivermectin mass treatment, which together pushed transmission down in the Americas and much of Africa.",
    links: [
      { label: "WHO — Onchocerciasis", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis"],
    pathogens: ["onchocerca-volvulus"],
    technologies: ["mass-drug-administration", "vector-surveillance"],
    stats: [
      { label: "Breeding habitat", value: "Fast-flowing rivers" },
      { label: "Americas", value: "Transmission interrupted in most of the region" },
    ],
  },
  {
    id: "culex-mosquito",
    name: "Culex mosquitoes",
    tldr: "Night-biting mosquitoes that breed in stagnant water and transmit lymphatic filariasis.",
    summary:
      "Culex quinquefasciatus is the main lymphatic filariasis vector in urban and peri-urban settings, breeding in polluted, stagnant water — latrines, open drains, septic tanks. Because it bites at night, insecticide-treated nets do reduce transmission, but the breeding sites are extensive where sanitation is poor, which links filariasis control to sanitation and drainage.",
    asOf: "2026-09",
    group: "Insect (mosquito)",
    family: "Culicidae",
    ecology:
      "Culex prefers organically polluted water, so urban filariasis is concentrated where drainage and sanitation fail; the mosquito rests indoors, which makes indoor spraying useful.",
    control:
      "Bed nets, indoor residual spraying, drainage and sanitation, alongside mass drug administration to reduce the reservoir of microfilariae.",
    links: [
      { label: "WHO — Lymphatic filariasis", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
    ],
    diseases: ["lymphatic-filariasis"],
    pathogens: ["lymphatic-filarial-worms"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "wash-interventions"],
    stats: [
      { label: "Breeding site", value: "Stagnant, polluted water" },
    ],
  },
  {
    id: "freshwater-snails",
    name: "Freshwater snails",
    tldr: "The intermediate hosts of schistosomes — the worms cannot complete their cycle without the right snail species.",
    summary:
      "Schistosoma species each need a specific snail intermediate host: Bulinus for S. haematobium, Biomphalaria for S. mansoni, Oncomelania for S. japonicum. Infected snails release cercariae that penetrate human skin in fresh water. Because the parasite cannot reproduce without the snail, the snail is a bottleneck that can be attacked with molluscicides, environmental management, or by changing the habitat — which is why snail control is being revisited as an elimination tool alongside praziquantel.",
    asOf: "2026-09",
    group: "Mollusc (snail)",
    family: "Planorbidae and others",
    ecology:
      "Snail distribution depends on water chemistry, vegetation, temperature and flow; irrigation schemes and dams expand suitable habitat and have driven outbreaks.",
    control:
      "Mollusciciding (notably niclosamide), environmental modification, and integrating snail control with water and sanitation; each has ecological trade-offs that have made programmes cautious.",
    links: [
      { label: "WHO — Schistosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diseases: ["schistosomiasis"],
    pathogens: ["schistosoma"],
    technologies: ["snail-control", "wash-interventions", "vector-surveillance"],
    stats: [
      { label: "Host specificity", value: "One snail genus per schistosome species" },
    ],
  },
  {
    id: "triatomine-bug",
    name: "Triatomine bugs (kissing bugs)",
    tldr: "Blood-sucking bugs that live in the cracks of poor rural houses and transmit Chagas disease through their faeces.",
    summary:
      "Triatomine bugs — Rhodnius, Triatoma and Panstrongylus — feed at night and defecate close to the bite, transferring Trypanosoma cruzi when the person scratches. They colonise cracks in mud walls, thatched roofs, and behind furniture, so housing quality determines risk. House spraying and improved housing have interrupted transmission in much of the Southern Cone, but the bug persists in the Amazon and in the Gran Chaco.",
    asOf: "2026-09",
    group: "Insect (true bug)",
    family: "Reduviidae",
    ecology:
      "The bugs are domestic in many regions but sylvatic in others, feeding on rodents, opossums and armadillos, so a wildlife reservoir prevents elimination everywhere.",
    control:
      "Residual insecticide spraying of houses, plastering and improving walls and roofs, bed nets in some settings, and screening blood donors to stop transfusion transmission.",
    insecticideResistance:
      "Pyrethroid resistance has been reported in parts of the Gran Chaco, threatening vector control there.",
    links: [
      { label: "WHO — Chagas disease", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    ],
    diseases: ["chagas"],
    pathogens: ["trypanosoma-cruzi"],
    technologies: ["indoor-residual-spraying", "vector-surveillance"],
    stats: [
      { label: "Main genera", value: "Triatoma, Rhodnius, Panstrongylus" },
      { label: "Transmission route", value: "Faeces, not the bite itself" },
    ],
  },
];
