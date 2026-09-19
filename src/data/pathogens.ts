import type { RecordOf } from "@/lib/schema";

export const pathogens: RecordOf<"pathogens">[] = [
  {
    id: "trypanosoma-brucei",
    name: "Trypanosoma brucei",
    tldr: "A single-celled parasite carried by the tsetse fly that causes sleeping sickness in people and nagana in cattle.",
    summary:
      "Trypanosoma brucei is an extracellular protozoan that lives in blood, lymph and eventually the brain. Two subspecies cause human disease: T. b. gambiense in West and Central Africa, which runs a slow chronic course over years, and T. b. rhodesiense in East and Southern Africa, which is acute and can kill within weeks. It evades the immune system by repeatedly changing its surface coat, which is why a vaccine has never worked.",
    asOf: "2026-09",
    organism: "Protozoan parasite",
    taxonomy: "Kinetoplastida, Trypanosomatidae",
    biology:
      "The parasite's variant surface glycoprotein coat is swapped by antigenic variation, so the immune system is always one step behind and the infection relapses in waves.",
    lifecycle:
      "Tsetse flies take up trypomastigotes when feeding; the parasites multiply in the fly's midgut and salivary glands and are injected into the next human or animal host.",
    drugTargets:
      "Sterol 14α-demethylase (CYP51) for azole antifungals, and cleavage and polyadenylation specificity factor 3 (CPSF3), the target of acoziborole.",
    links: [
      { label: "WHO — Human African trypanosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/trypanosomiasis-human-african-(sleeping-sickness)" },
    ],
    diseases: ["hat"],
    vectors: ["tsetse-fly"],
    targets: ["cyp51", "cpsf3"],
    drugs: ["fexinidazole", "acoziborole", "eflornithine", "nifurtimox", "pentamidine", "suramin", "melarsoprol"],
    technologies: ["ai-drug-discovery", "open-science-drug-discovery"],
    stats: [
      { label: "Cases (2022)", value: "≈ 800", note: "reported; down from 26,000 in 2000" },
      { label: "Case fatality", value: "Near 100% untreated" },
    ],
    timeline: [
      { date: "1895", text: "David Bruce identifies the trypanosome in cattle in Zululand." },
      { date: "1902", text: "Trypanosomes found in the blood of a sleeping-sickness patient." },
      { date: "2009", text: "NECT (nifurtimox–eflornithine combination therapy) simplifies treatment for late-stage disease." },
      { date: "2019", text: "Fexinidazole becomes the first all-oral cure for Gambiense sleeping sickness." },
      { date: "2024", text: "Acoziborole enters late-stage development as a single-dose oral treatment." },
    ],
  },
  {
    id: "trypanosoma-cruzi",
    name: "Trypanosoma cruzi",
    tldr: "The parasite carried by blood-sucking triatomine bugs that causes Chagas disease, which can damage the heart decades after infection.",
    summary:
      "Trypanosoma cruzi infects about 8 million people worldwide, mostly in Latin America. The acute phase is usually mild and unnoticed; the chronic phase can follow years later with cardiomyopathy, heart failure and sudden death in about a third of those infected. It is also transmitted by blood transfusion, organ transplant and from mother to child, which is why blood-bank screening matters even outside endemic areas.",
    asOf: "2026-09",
    organism: "Protozoan parasite",
    taxonomy: "Kinetoplastida, Trypanosomatidae",
    biology:
      "Trypomastigotes invade host cells and multiply as intracellular amastigotes; the immune response contains but does not clear the infection, leaving lifelong persistence.",
    lifecycle:
      "Triatomine bugs take a blood meal and defecate nearby; the person scratches the faeces into the bite wound or a mucous membrane, transferring the parasite.",
    drugTargets:
      "The cysteine protease cruzain and sterol 14α-demethylase (CYP51) are the best-studied drug targets; the nitro drugs (benznidazole, nifurtimox, fexinidazole) are prodrugs activated by the parasite type I nitroreductase. Newer validated targets include the mRNA-processing factor CPSF3 (AN2-502998) and topoisomerase II (IID432).",
    links: [
      { label: "WHO — Chagas disease", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    ],
    diseases: ["chagas"],
    vectors: ["triatomine-bug"],
    targets: ["cruzain", "cyp51", "trypanosome-nitroreductase", "tc-cpsf3", "tc-topoisomerase-ii"],
    drugs: ["benznidazole", "nifurtimox", "fexinidazole", "an2-502998"],
    technologies: ["ai-drug-discovery", "alphafold-structure-prediction"],
    stats: [
      { label: "People infected", value: "8 million", note: "WHO estimate, April 2026" },
      { label: "Annual deaths", value: "> 10,000", note: "WHO estimate; PAHO estimates about 12,000" },
      { label: "Chronic cardiac involvement", value: "≈ 30%", note: "of those infected; about 1 in 10 develop digestive, neurological or mixed alterations" },
      { label: "People at risk", value: "> 100 million", note: "global; congenital transmission now the main route worldwide with over 10,000 new cases a year" },
    ],
  },
  {
    id: "leishmania",
    name: "Leishmania species",
    tldr: "Parasites spread by sandflies that cause skin sores, disfiguring mucosal damage, or a fatal infection of internal organs.",
    summary:
      "Leishmania species cause three main syndromes: cutaneous leishmaniasis (skin ulcers that heal with scars), mucosal leishmaniasis (destruction of the nose and mouth), and visceral leishmaniasis, which attacks the spleen, liver and bone marrow and is fatal without treatment. Roughly 20 species infect people; over 90 sandfly species transmit them. Treatment is long, toxic and increasingly failing in South Asia, and there is no approved vaccine.",
    asOf: "2026-09",
    organism: "Protozoan parasite",
    taxonomy: "Kinetoplastida, Trypanosomatidae",
    biology:
      "The parasite is an obligate intracellular amastigote inside macrophages, which both hides it from antibodies and gives it access to the immune cells it disables.",
    lifecycle:
      "Sandflies inject promastigotes when feeding; they are taken up by macrophages and convert to amastigotes, which multiply and reinfect the next sandfly.",
    drugTargets:
      "N-myristoyltransferase, trypanothione reductase and CYP51 are pursued because the parasite's antioxidant and sterol pathways differ enough from the human host to be selective.",
    links: [
      { label: "WHO — Leishmaniasis", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    ],
    diseases: ["leishmaniasis"],
    vectors: ["sandfly"],
    targets: ["nmt", "trypanothione-reductase", "cyp51"],
    drugs: ["liposomal-amphotericin-b", "miltefosine", "paromomycin", "antimonials"],
    technologies: ["ai-drug-discovery", "drug-repurposing", "leishmaniasis-vaccine-candidates"],
    stats: [
      { label: "New cases a year", value: "≈ 1 million", note: "cutaneous and visceral combined" },
      { label: "People at risk", value: "> 1 billion" },
      { label: "Visceral leishmaniasis deaths", value: "20,000–40,000/yr", note: "untreated it is almost always fatal" },
    ],
  },
  {
    id: "schistosoma",
    name: "Schistosoma species",
    tldr: "Blood flukes that live in the veins around the bladder or gut and release eggs that damage organs; people catch them wading or swimming in fresh water.",
    summary:
      "Schistosoma mansoni, S. haematobium and S. japonicum are water-borne trematodes whose larvae, released by freshwater snails, penetrate human skin. Adult worms live in the veins and lay eggs that lodge in the bladder or intestine, driving chronic inflammation and scarring. S. haematobium causes bladder disease and is a major risk factor for bladder cancer; S. mansoni causes liver fibrosis and portal hypertension. More than 200 million people are infected, mostly in sub-Saharan Africa.",
    asOf: "2026-09",
    organism: "Helminth (blood fluke)",
    taxonomy: "Trematoda, Schistosomatidae",
    biology:
      "Adult worms pair and live for years in the veins, evading immunity by coating themselves in host molecules; pathology comes largely from eggs trapped in tissue.",
    lifecycle:
      "Eggs passed in urine or stool hatch in fresh water, infect a specific snail species, and emerge as cercariae that penetrate human skin — so the snail is both an amplifier and a control target.",
    drugTargets:
      "Praziquantel's target was long unknown and now points to a schistosome transient receptor potential (TRP) ion channel; thioredoxin glutathione reductase and histone deacetylase 8 are pursued for new drugs.",
    links: [
      { label: "WHO — Schistosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diseases: ["schistosomiasis"],
    vectors: ["freshwater-snails"],
    targets: ["schistosome-trp-channel", "schistosome-tgr", "schistosome-hdac8"],
    drugs: ["praziquantel", "oxamniquine"],
    diagnostics: ["kato-katz", "point-of-care-cca", "molecular-pcr"],
    technologies: ["mass-drug-administration", "wash-interventions", "snail-control", "ai-microscopy"],
    stats: [
      { label: "People infected", value: "> 200 million" },
      { label: "People needing treatment", value: "≈ 250 million" },
      { label: "Deaths a year", value: "≈ 12,000", note: "the true figure is debated and likely higher" },
    ],
    timeline: [
      { date: "1851", text: "Theodor Bilharz finds the parasite in Egypt; the disease is called bilharzia." },
      { date: "1970s", text: "Praziquantel is developed, becoming the single drug used worldwide." },
      { date: "2020s", text: "The molecular target of praziquantel is traced to a schistosome TRP channel." },
    ],
  },
  {
    id: "soil-transmitted-helminths",
    name: "Soil-transmitted helminths",
    tldr: "Roundworm, whipworm and hookworm — gut worms spread through contaminated soil that affect hundreds of millions of children.",
    summary:
      "The main soil-transmitted helminths are Ascaris lumbricoides (roundworm), Trichuris trichiura (whipworm) and the hookworms Necator americanus and Ancylostoma duodenale. They spread where sanitation is poor and people walk barefoot or eat unwashed food. Heavy infections cause anaemia, stunting, poor school performance and, for hookworm, chronic blood loss. They are the classic target of school-based deworming, which is one of the cheapest interventions in public health.",
    asOf: "2026-09",
    organism: "Helminth (nematodes)",
    taxonomy: "Nematoda",
    biology:
      "All three complete part of their cycle in soil; Ascaris and Trichuris are ingested, while hookworm larvae actively penetrate the skin of bare feet.",
    lifecycle:
      "Eggs (Ascaris, Trichuris) or larvae (hookworm) mature in warm, moist soil and infect a new human host, so sanitation breaks the cycle at its source.",
    drugTargets:
      "Benzimidazoles bind nematode beta-tubulin to stop microtubule assembly; ivermectin opens glutamate-gated chloride channels to paralyse the worm.",
    links: [
      { label: "WHO — Soil-transmitted helminth infections", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    ],
    diseases: ["sth"],
    targets: ["beta-tubulin", "glucl"],
    drugs: ["albendazole", "mebendazole", "ivermectin", "tribendimidine", "emodepside"],
    diagnostics: ["kato-katz", "formol-ether-concentration", "molecular-pcr"],
    technologies: ["mass-drug-administration", "wash-interventions", "hookworm-vaccine-candidates"],
    stats: [
      { label: "People infected", value: "≈ 1.5 billion", note: "all three species combined" },
      { label: "Children needing treatment", value: "> 800 million" },
    ],
  },
  {
    id: "onchocerca-volvulus",
    name: "Onchocerca volvulus",
    tldr: "A filarial worm spread by blackflies that causes intense itching and can blind people — river blindness.",
    summary:
      "Onchocerca volvulus is a filarial nematode transmitted by the bite of blackflies that breed in fast-flowing rivers, which is why the disease is called river blindness. Adult worms live in nodules under the skin and release millions of microfilariae that migrate through the skin and eye. The result is severe dermatitis and, after years of exposure, irreversible blindness. Ivermectin mass treatment transformed the disease from a cause of mass blindness to a target for elimination.",
    asOf: "2026-09",
    organism: "Helminth (filarial nematode)",
    taxonomy: "Nematoda, Onchocercidae",
    biology:
      "Adult worms live for up to 15 years, so treatment must be repeated; the pathology is driven by microfilariae dying in skin and eye tissue.",
    lifecycle:
      "Blackflies take up microfilariae when feeding; they develop in the fly and are injected into the next person, where they mature over a year into adults.",
    drugTargets:
      "Ivermectin and moxidectin open the worm's glutamate-gated chloride channels (GluCl); emodepside acts on the SLO-1 channel; doxycycline targets the endosymbiotic Wolbachia.",
    links: [
      { label: "WHO — Onchocerciasis", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis"],
    vectors: ["blackfly"],
    targets: ["glucl", "slo-1", "wolbachia"],
    drugs: ["ivermectin", "moxidectin", "doxycycline", "emodepside"],
    technologies: ["mass-drug-administration", "onchocerciasis-vaccine-candidates", "ai-microscopy"],
    stats: [
      { label: "People at risk", value: "> 220 million" },
      { label: "People infected", value: "≈ 15 million" },
      { label: "Vision loss", value: "≈ 1 million", note: "attributable cases" },
    ],
    timeline: [
      { date: "1975", text: "The Onchocerciasis Control Programme begins in West Africa, initially using larvicide against the blackfly." },
      { date: "1987", text: "Merck commits to donate Mectizan (ivermectin) free for as long as needed." },
      { date: "1995", text: "The African Programme for Onchocerciasis Control extends community-directed treatment across the continent." },
      { date: "2018", text: "Moxidectin is approved for onchocerciasis, giving a longer-acting alternative." },
      { date: "2023", text: "High-dose ivermectin improves efficacy in a large trial, strengthening the elimination push." },
    ],
  },
  {
    id: "lymphatic-filarial-worms",
    name: "Lymphatic filarial worms",
    tldr: "Filarial worms spread by mosquitoes that block the lymph system, causing the swelling of elephantiasis and the pain of hydrocele.",
    summary:
      "Wuchereria bancrofti, Brugia malayi and Brugia timori are mosquito-borne filariae that live in the lymphatic vessels. Most infections are asymptomatic, but in a minority the lymph channels become blocked and the limbs or scrotum swell permanently — the disfigurement long stigmatised as elephantiasis. Lymphatic filariasis is a leading global cause of disability, and its endosymbiotic Wolbachia bacteria is both part of the pathology and a drug target.",
    asOf: "2026-09",
    organism: "Helminth (filarial nematode)",
    taxonomy: "Nematoda, Onchocercidae",
    biology:
      "The worms depend on Wolbachia bacteria for survival and reproduction, an unusual dependence that makes an antibacterial drug an antifilarial one.",
    lifecycle:
      "Mosquitoes take up microfilariae, which develop into infective larvae and are deposited on the skin at the next blood meal, entering through the bite puncture.",
    drugTargets: "The endosymbiont Wolbachia is targeted by doxycycline; the worms' ion channels are targeted by ivermectin; albendazole hits beta-tubulin.",
    links: [
      { label: "WHO — Lymphatic filariasis", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
    ],
    diseases: ["lymphatic-filariasis"],
    vectors: ["culex-mosquito"],
    targets: ["wolbachia", "glucl", "beta-tubulin"],
    drugs: ["diethylcarbamazine", "ivermectin", "albendazole", "doxycycline"],
    technologies: ["mass-drug-administration", "insecticide-treated-nets"],
    stats: [
      { label: "People infected", value: "≈ 120 million" },
      { label: "People at risk", value: "> 850 million" },
      { label: "Countries endemic", value: "44" },
    ],
  },
  {
    id: "dracunculus-medinensis",
    name: "Dracunculus medinensis",
    tldr: "The guinea worm — a metre-long parasite that emerges through the skin of the leg, and the disease closest to eradication in history.",
    summary:
      "Guinea worm infection is contracted by drinking water containing copepods that carry the larvae. A year later a painful blister forms, usually on the leg, and a worm up to a metre long emerges over weeks. There is no drug and no vaccine; elimination rests entirely on safe water, filtering and containing every case. Cases have fallen from an estimated 3.5 million a year in the 1980s to a small number, making it the next candidate for eradication after smallpox and polio.",
    asOf: "2026-09",
    organism: "Helminth (nematode)",
    taxonomy: "Nematoda, Dracunculidae",
    biology:
      "There is no effective treatment once infection is established; the worm must be wound out slowly over days to weeks, and secondary bacterial infection is the main danger.",
    lifecycle:
      "People drink water containing infected copepods; larvae are released in the gut, mature, and the female emerges a year later to release larvae into water, closing the cycle.",
    links: [
      { label: "WHO — Dracunculiasis", url: "https://www.who.int/news-room/fact-sheets/detail/dracunculiasis-(guinea-worm-disease)" },
    ],
    diseases: ["dracunculiasis"],
    technologies: ["wash-interventions", "mhealth-surveillance", "community-health-workers"],
    stats: [
      { label: "Cases in the 1980s", value: "≈ 3.5 million/yr", note: "estimated" },
      { label: "Cases (recent years)", value: "10 in 2025, the lowest ever recorded", number: 10, unit: "cases", year: 2025, geography: "global", note: "provisional human cases; 15 in 2024, 14 in 2023", source: { label: "The Carter Center — 10 human cases reported in 2025 (Jan 2026)", url: "https://www.cartercenter.org/news/guinea-worm-announcement" } },
      { label: "Objective", value: "Eradication", note: "certification under way" },
    ],
    timeline: [
      { date: "1986", text: "The Guinea Worm Eradication Programme begins with the Carter Center and WHO." },
      { date: "1989", text: "Cases fall below one million a year." },
      { date: "2010s", text: "Chad reports infections linked to fish and frogs as paratenic hosts, complicating elimination." },
      { date: "2024", text: "Fifteen human cases are confirmed worldwide; 664 animal infections are reported, mostly dogs in Cameroon and Chad." },
    ],
  },
  {
    id: "taenia-solium",
    name: "Taenia solium",
    tldr: "The pork tapeworm — eating undercooked pork causes gut tapeworm, but swallowing its eggs causes cysts in the brain and epilepsy.",
    summary:
      "Taenia solium has an unusual double burden. The adult tapeworm, acquired by eating undercooked pork containing cysts, lives in the human gut. But if a person swallows the tapeworm's eggs — from contaminated food, water or hands — the larvae form cysts in the brain, causing neurocysticercosis, which is a leading preventable cause of epilepsy worldwide. Pigs are the intermediate host and free-roaming pigs that eat human faeces complete the cycle.",
    asOf: "2026-09",
    organism: "Helminth (cestode)",
    taxonomy: "Cestoda, Taeniidae",
    biology:
      "Neurocysticercosis causes seizures, headaches and hydrocephalus; the inflammatory response to dying cysts, not the cyst itself, drives much of the damage.",
    lifecycle:
      "Humans are the only definitive host and carry the adult worm; pigs ingest eggs and develop cysts in muscle, which are then eaten undercooked.",
    drugTargets: "Benzimidazoles bind beta-tubulin in the parasite, and praziquantel disrupts its tegument and calcium handling.",
    links: [
      { label: "WHO — Taeniasis/cysticercosis", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
    ],
    diseases: ["taeniasis-cysticercosis"],
    targets: ["beta-tubulin", "schistosome-trp-channel"],
    drugs: ["albendazole", "praziquantel"],
    technologies: ["wash-interventions", "one-health-ntd-integration"],
    stats: [
      { label: "People with neurocysticercosis", value: "2.5–8.3 million", note: "estimated" },
      { label: "Epilepsy link", value: "A leading preventable cause" },
    ],
  },
  {
    id: "echinococcus",
    name: "Echinococcus species",
    tldr: "Tapeworms from dogs that grow into slow, cyst-like masses in the human liver and lungs — hydatid disease.",
    summary:
      "Echinococcus granulosus causes cystic echinococcosis, in which a fluid-filled cyst grows for years in the liver or lungs; Echinococcus multilocularis causes alveolar echinococcosis, an invasive, tumour-like disease with a high fatality rate if untreated. People are accidental intermediate hosts, infected by eggs from the faeces of dogs (or foxes, for E. multilocularis). Control depends on deworming dogs and stopping livestock and dogs from sharing a cycle of infection.",
    asOf: "2026-09",
    organism: "Helminth (cestode)",
    taxonomy: "Cestoda, Taeniidae",
    biology:
      "The cyst can grow for years and may rupture, releasing daughter cysts that spread the infection; alveolar disease behaves like a slow-growing cancer.",
    lifecycle:
      "Dogs (definitive hosts) shed eggs in faeces; people ingest eggs and become dead-end hosts, while livestock that ingest eggs develop cysts, which dogs eat to close the cycle.",
    links: [
      { label: "WHO — Echinococcosis", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    ],
    diseases: ["echinococcosis"],
    drugs: ["albendazole"],
    technologies: ["one-health-ntd-integration", "ai-microscopy"],
    stats: [
      { label: "People with cystic echinococcosis", value: "> 1 million", note: "at any one time" },
      { label: "Annual DALYs", value: "≈ 1 million", note: "WHO estimate" },
    ],
  },
  {
    id: "foodborne-trematodes",
    name: "Foodborne trematodes",
    tldr: "Flukes caught from eating raw or undercooked fish, shellfish, aquatic plants or crustaceans; some raise the risk of bile-duct cancer.",
    summary:
      "The foodborne trematodiases include clonorchiasis and opisthorchiasis (liver flukes), paragonimiasis (lung fluke) and fascioliasis (liver fluke of livestock). People are infected by eating raw fish, crab, watercress or other freshwater plants. Chronic Clonorchis and Opisthorchis infection is a Group 1 carcinogen for cholangiocarcinoma, the bile-duct cancer, making these worms a cancer risk as well as a parasitic disease.",
    asOf: "2026-09",
    organism: "Helminth (trematodes)",
    taxonomy: "Trematoda",
    biology:
      "Adult flukes live in the bile ducts, lung or liver, shedding eggs into the environment; chronic bile-duct infection drives fibrosis and malignant transformation.",
    lifecycle:
      "Eggs reach water and infect snails; the flukes then use a second host — fish, crustacean or aquatic plant — which people eat raw, completing the cycle.",
    links: [
      { label: "WHO — Foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
    ],
    diseases: ["foodborne-trematodiases"],
    drugs: ["triclabendazole", "praziquantel"],
    technologies: ["wash-interventions", "one-health-ntd-integration"],
    stats: [
      { label: "People infected", value: "> 56 million", note: "all foodborne trematodes combined" },
      { label: "Cancer link", value: "Clonorchis and Opisthorchis are Group 1 carcinogens" },
    ],
  },
  {
    id: "mycobacterium-leprae",
    name: "Mycobacterium leprae",
    tldr: "The bacterium that causes leprosy, which damages skin and peripheral nerves and can leave permanent disability if treated late.",
    summary:
      "Mycobacterium leprae grows extremely slowly and prefers the cooler parts of the body — skin and peripheral nerves. The result is patches of numb skin and, in the severe forms, nerve damage, deformity and blindness. It is not highly contagious; most people who are exposed never develop the disease. Multidrug therapy cures the infection, but the damage done before diagnosis is often irreversible, so early detection is everything.",
    asOf: "2026-09",
    organism: "Bacterium",
    taxonomy: "Actinomycetota, Mycobacteriaceae",
    biology:
      "The bacterium cannot be cultured in the lab, which slowed research for a century; it replicates inside macrophages and Schwann cells, and the immune response determines whether disease is paucibacillary or multibacillary.",
    lifecycle:
      "Transmitted by prolonged close contact via respiratory droplets; the incubation period averages about five years and can exceed twenty.",
    drugTargets: "Rifampicin inhibits bacterial RNA polymerase; dapsone inhibits dihydropteroate synthase; DprE1 is a target for new drugs against mycobacteria.",
    links: [
      { label: "WHO — Leprosy", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    ],
    diseases: ["leprosy"],
    targets: ["rna-polymerase", "dpre1"],
    drugs: ["rifampicin", "dapsone", "clofazimine"],
    technologies: ["community-health-workers", "mhealth-surveillance"],
    stats: [
      { label: "New cases a year", value: "≈ 170,000–200,000" },
      { label: "Grade-2 disability at diagnosis", value: "Disability already present in a substantial share" },
    ],
    timeline: [
      { date: "1873", text: "Gerhard Armauer Hansen identifies the bacterium — the first pathogen shown to cause human disease." },
      { date: "1981", text: "WHO recommends multidrug therapy, replacing dapsone monotherapy and preventing resistance." },
      { date: "2000", text: "Leprosy is eliminated as a public-health problem at the global level (prevalence below 1 per 10,000)." },
      { date: "2018", text: "Rifampicin becomes the standard single-dose post-exposure prophylaxis for contacts." },
    ],
  },
  {
    id: "mycobacterium-ulcerans",
    name: "Mycobacterium ulcerans",
    tldr: "A slow-growing mycobacterium related to the agents of leprosy and tuberculosis that produces a tissue-destroying toxin, causing the painless Buruli ulcer.",
    summary:
      "Mycobacterium ulcerans lives in warm, slow-moving water and releases mycolactone, a toxin that destroys fat and skin tissue and suppresses the local immune response — so the ulcer is painless. It grows best at 30–33 °C, below human core body temperature, which is one reason the lesions are on cooler surfaces such as the arms and legs. Its mycolactone genes sit on a plasmid, pMUM001, and the insertion sequence IS2404 is the target of the PCR test used for diagnosis. Buruli ulcer is the third most common mycobacterial disease in people who are not immunocompromised, after tuberculosis and leprosy. Without treatment the ulcer expands and leaves severe scarring and contractures.",
    asOf: "2026-09",
    organism: "Bacterium",
    taxonomy: "Actinomycetota, Mycobacteriaceae — Mycobacterium ulcerans, in the M. ulcerans–marinum clade",
    biology:
      "The disease is entirely toxin-driven: mycolactone kills cells and blocks immune signalling, which is why the lesion is painless and why antibiotics alone can be slow. The toxin is encoded on the plasmid pMUM001, and the insertion sequence IS2404 — present in many copies — is what PCR targets.",
    lifecycle:
      "The reservoir is environmental, linked to slow-moving or stagnant water; in Africa aquatic insects and water contact are suspected, while in Victoria, Australia, possums are a major wildlife reservoir and mosquitoes the transmitting vector. Transmission is not from person to person and remains incompletely understood.",
    links: [
      { label: "WHO — Buruli ulcer", url: "https://www.who.int/news-room/fact-sheets/detail/buruli-ulcer" },
    ],
    diseases: ["buruli-ulcer"],
    drugs: ["rifampicin", "clarithromycin", "moxifloxacin", "telacebec"],
    technologies: ["genomic-surveillance", "ai-microscopy"],
    stats: [
      {
        label: "Countries that have ever reported cases",
        value: "33",
        number: 33,
        unit: "countries",
        geography: "global",
        source: { label: "WHO AFRO — Buruli ulcer in Africa: 20 years of progress (2025)", url: "https://iris.who.int/handle/10665/383376" },
      },
      {
        label: "Rank among mycobacterial diseases",
        value: "Third",
        note: "after tuberculosis and leprosy, in people who are not immunocompromised",
        source: { label: "WHO — Routine health information system data: Buruli ulcer (2025)", url: "https://iris.who.int/handle/10665/382160" },
      },
      { label: "Focus", value: "West and Central Africa, and coastal Australia" },
    ],
  },
  {
    id: "sarcoptes-scabiei",
    name: "Sarcoptes scabiei",
    tldr: "The microscopic mite that burrows into skin and causes scabies, an intensely itchy rash that spreads easily in crowded homes.",
    summary:
      "The scabies mite burrows into the outer layer of skin and lays eggs, causing an itch that is often worst at night and a rash that invites bacterial infection. Ordinary scabies may carry a few dozen mites, but in crusted (Norwegian) scabies there are thousands, and it is highly transmissible. Impetigo and, in severe cases, post-streptococcal kidney disease and rheumatic heart disease follow scabies outbreaks in tropical communities.",
    asOf: "2026-09",
    organism: "Ectoparasite (mite)",
    taxonomy: "Arachnida, Sarcoptidae",
    biology:
      "The itch is an allergic response to the mite and its products, which is why it can appear weeks after a first infestation and within days on reinfection.",
    lifecycle:
      "Female mites burrow and lay eggs in the stratum corneum; larvae emerge and mature on the skin, and transmission is by prolonged skin-to-skin contact, including in households.",
    links: [
      { label: "WHO — Scabies", url: "https://www.who.int/news-room/fact-sheets/detail/scabies" },
    ],
    diseases: ["scabies"],
    drugs: ["permethrin", "ivermectin"],
    technologies: ["mass-drug-administration", "community-health-workers"],
    stats: [
      { label: "People affected at any time", value: "≈ 200 million" },
      { label: "Burden", value: "Major contributor to skin-related DALYs" },
    ],
  },
  {
    id: "treponema-pallidum-pertenue",
    name: "Treponema pallidum subsp. pertenue",
    tldr: "The bacterium that causes yaws — disfiguring skin and bone lesions in children that a single dose of azithromycin can cure.",
    summary:
      "Yaws is a chronic bacterial infection of skin and bone that mainly affects children under 15 in warm, humid, poor rural communities. It begins with a painless skin lesion and progresses, if untreated, to destructive lesions of the skin, bone and cartilage years later. Yaws is closely related to the bacterium that causes syphilis but is spread by skin contact in childhood rather than sexually. A single oral dose of azithromycin cures it, which is why a global eradication effort is under way.",
    asOf: "2026-09",
    organism: "Bacterium",
    taxonomy: "Spirochaetes, Treponemataceae",
    biology:
      "The bacterium cannot be cultured in routine labs, so diagnosis rests on clinical signs and serology; the immune response cross-reacts with other treponemes.",
    lifecycle:
      "Spread by direct skin-to-skin contact with an infectious lesion, typically among children playing together; there is no animal reservoir.",
    links: [
      { label: "WHO — Yaws", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    ],
    diseases: ["yaws"],
    drugs: ["azithromycin", "benzathine-penicillin"],
    technologies: ["mass-drug-administration", "community-health-workers"],
    stats: [
      { label: "Regions affected", value: "West Africa, Oceania, Southeast Asia" },
      { label: "Goal", value: "Eradication", note: "the Morges strategy, launched 2012" },
    ],
  },
  {
    id: "chlamydia-trachomatis",
    name: "Chlamydia trachomatis",
    tldr: "A bacterium that infects the eye, and after repeated episodes scars the eyelid so lashes scrape the cornea and cause blindness.",
    summary:
      "Trachoma is caused by specific serovars of Chlamydia trachomatis. Repeated eye infections in childhood provoke inflammation that scars the conjunctiva; over decades the scarred eyelid turns inward and the lashes rub the cornea — trichiasis — which is painful and causes irreversible blindness. It is the leading infectious cause of blindness and is concentrated in the poorest, driest and most water-scarce communities.",
    asOf: "2026-09",
    organism: "Bacterium",
    taxonomy: "Chlamydiae, Chlamydiaceae",
    biology:
      "Trachoma is an intracellular bacterium with a biphasic developmental cycle; the scarring is an immune consequence of repeated infection, not the bacterium directly.",
    lifecycle:
      "Transmitted eye-to-eye by fingers, shared towels and eye-seeking flies, especially where faces are unwashed and water is scarce.",
    links: [
      { label: "WHO — Trachoma", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    ],
    diseases: ["trachoma"],
    drugs: ["azithromycin"],
    diagnostics: ["trachoma-grading"],
    technologies: ["mass-drug-administration", "wash-interventions"],
    stats: [
      { label: "People at risk", value: "≈ 100 million" },
      { label: "Blindness", value: "Leading infectious cause" },
    ],
  },
  {
    id: "rabies-virus",
    name: "Rabies virus",
    tldr: "A virus that travels from a bite up the nerves to the brain, where it causes almost uniformly fatal encephalitis once symptoms begin.",
    summary:
      "Rabies virus is a lyssavirus transmitted mainly by dog bites. It travels along peripheral nerves to the central nervous system and, once symptoms appear, is almost always fatal — but it is entirely preventable by prompt wound washing and post-exposure vaccination, with rabies immunoglobulin for severe bites. Most human deaths are in Africa and Asia and are linked to poor access to vaccines and immunoglobulin, not to a lack of science.",
    asOf: "2026-09",
    organism: "Virus",
    taxonomy: "Rhabdoviridae, Lyssavirus",
    biology:
      "The virus moves from the bite site to the brain along nerves at a slow, predictable rate — which is exactly the window that post-exposure vaccination exploits.",
    lifecycle:
      "After a bite the virus replicates in muscle, enters peripheral nerves, and ascends to the brain; it then spreads outward to the salivary glands, closing the cycle via a further bite.",
    drugTargets: "The viral glycoprotein, which mediates entry and is the antigen in vaccines, is the main target; there is no licensed antiviral once symptoms start.",
    links: [
      { label: "WHO — Rabies", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    ],
    diseases: ["rabies"],
    targets: ["rabies-glycoprotein"],
    drugs: ["rabies-postexposure-prophylaxis"],
    technologies: ["rabies-vaccination", "one-health-ntd-integration"],
    stats: [
      { label: "Deaths a year", value: "≈ 59,000" },
      { label: "Age group most affected", value: "Children under 15", note: "≈ 40% of deaths" },
      { label: "Source", value: "Dog bites cause most human cases", note: "≈ 99%" },
    ],
  },
  {
    id: "dengue-virus",
    name: "Dengue virus",
    tldr: "Four related mosquito-borne viruses that cause a severe, bone-aching fever and occasionally a life-threatening plasma leak.",
    summary:
      "Dengue virus has four serotypes (DENV-1 to 4). Infection with one gives lifelong immunity to that serotype but only transient protection against the others, and a second infection with a different serotype raises the risk of severe dengue — the plasma leakage, bleeding and shock that can be fatal. It is the world's fastest-spreading mosquito-borne viral infection, driven by urbanisation, travel and the Aedes aegypti mosquito.",
    asOf: "2026-09",
    organism: "Virus",
    taxonomy: "Flaviviridae, Orthoflavivirus",
    biology:
      "Antibody-dependent enhancement explains why a second, different-serotype infection is more dangerous; the mainstay of care is careful fluid management, not a specific drug.",
    lifecycle:
      "Aedes mosquitoes pick up the virus from a viraemic person and, after an incubation period, transmit it at a later bite; the mosquito is the primary amplifying system in cities.",
    drugTargets: "The viral NS5 polymerase and the NS2B-NS3 protease are the main targets for antivirals, none yet approved.",
    links: [
      { label: "WHO — Dengue and severe dengue", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
    ],
    diseases: ["dengue"],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    targets: ["dengue-ns5", "dengue-protease"],
    technologies: ["dengue-vaccination", "vector-surveillance", "gene-drive-mosquitoes"],
    stats: [
      { label: "Infections a year", value: "≈ 100–400 million" },
      { label: "At risk", value: "≈ half the world's population" },
      { label: "Serotypes", value: "Four" },
    ],
  },
  {
    id: "chikungunya-virus",
    name: "Chikungunya virus",
    tldr: "An Aedes-borne virus that causes sudden fever and joint pain so severe it can persist for months.",
    summary:
      "Chikungunya virus causes an abrupt fever with disabling joint and muscle pain; most people recover, but a substantial minority have joint pain lasting months or years. Outbreaks are explosive and move with travellers and Aedes mosquitoes — 502,264 cases were reported across 41 countries in 2025, with resurgence into 2026. There is no specific antiviral, though the nsP2 protease now has oral leads with mouse efficacy; two vaccines are licensed (Ixchiq, withdrawn in the US in 2026; Vimkunya, expanding), and control otherwise rests on Aedes control.",
    asOf: "2026-09",
    organism: "Virus",
    taxonomy: "Togaviridae, Alphavirus",
    biology:
      "The virus targets joints and connective tissue, which explains the persistent rheumatic symptoms; immunity after infection is long-lasting.",
    lifecycle:
      "Aedes mosquitoes transmit the virus between people and can also maintain local cycles; infection in the mosquito is lifelong, so a single bite can transmit later.",
    drugTargets: "The nsP2 cysteine protease/helicase — essential for polyprotein processing — is the leading antiviral target; the E1/E2 envelope glycoproteins are the vaccine antigens.",
    links: [
      { label: "WHO — Chikungunya", url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya" },
    ],
    diseases: ["chikungunya"],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    targets: ["chikungunya-glycoprotein", "chikv-nsp2"],
    drugs: ["ixchiq", "vimkunya", "butantan-chik-vla1555", "emetine"],
    technologies: ["vector-surveillance", "dengue-vaccination", "chikungunya-vaccination"],
    stats: [
      { label: "Cases reported (2025)", value: "502,264 (186 deaths)", note: "41 countries and territories" },
      { label: "Persistent joint pain", value: "Up to a third of patients, months to years" },
      { label: "Vaccines", value: "Ixchiq (US withdrawn 2026) and Vimkunya (expanding)", note: "plus Brazil-made VLA1555" },
    ],
  },
  {
    id: "snake-venom",
    name: "Snake venom",
    tldr: "A mixture of toxins injected in a bite that can destroy tissue, paralyse muscles or make blood clot uncontrollably.",
    summary:
      "Snakebite envenoming is not an infection but belongs in the NTD group because of who it affects: agricultural workers, children and poor rural communities with no reliable access to antivenom. Venoms differ by species — some cause coagulopathy and bleeding, some paralyse the respiratory muscles, some destroy local tissue — which is why antivenom must match the snakes present in a region. Most deaths are preventable with the right antivenom, given quickly.",
    asOf: "2026-09",
    organism: "Venomous animal (toxin)",
    taxonomy: "Elapidae, Viperidae and others",
    biology:
      "Venom is a cocktail of enzymes and peptides that varies within and between species, which is why a single universal antivenom has proved so hard to design.",
    lifecycle:
      "Not transmitted between people; envenoming follows a bite, usually during agricultural work or at night in rural areas where lighting and footwear are absent.",
    links: [
      { label: "WHO — Snakebite envenoming", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    ],
    diseases: ["snakebite"],
    drugs: ["snake-antivenom"],
    technologies: ["recombinant-antivenoms"],
    stats: [
      { label: "Bites a year", value: "1.8–2.7 million" },
      { label: "Deaths a year", value: "80,000–140,000" },
      { label: "Amputations and disability", value: "≈ 400,000/yr", note: "permanent disability from bites" },
    ],
  },
  {
    id: "mycetoma-agents",
    name: "Mycetoma-causing organisms",
    tldr: "Fungi and bacteria that enter through a skin injury and grow into a painless, steadily enlarging swelling that destroys tissue and bone.",
    summary:
      "Mycetoma is a chronic infection caused either by fungi (eumycetoma, most often Madurella mycetomatis) or by bacteria (actinomycetoma, including Nocardia and Actinomadura). The organism enters through a thorn prick or a small injury, most commonly on the foot, and over years the swelling enlarges and drains grains through sinuses. It is concentrated in the 'mycetoma belt' around the Sahel, where barefoot agricultural work is common. Treatment is long, and fungal mycetoma responds poorly to current drugs.",
    asOf: "2026-09",
    organism: "Fungus and bacterium",
    taxonomy: "Ascomycota and Actinomycetota",
    biology:
      "Fungal mycetoma forms grains in tissue that resist drug penetration and often require surgery; bacterial mycetoma responds better to antibiotics.",
    lifecycle:
      "Acquired from the environment through skin trauma; there is no person-to-person transmission, so the focus is early diagnosis and avoiding delay.",
    links: [
      { label: "WHO — Mycetoma", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
    ],
    diseases: ["mycetoma"],
    drugs: ["itraconazole", "fosravuconazole"],
    technologies: ["genomic-surveillance", "ai-microscopy"],
    stats: [
      { label: "Reported cases", value: "Tens of thousands across the mycetoma belt" },
      { label: "Fungal vs bacterial", value: "Fungal mycetoma is the harder to treat" },
    ],
  },
];
