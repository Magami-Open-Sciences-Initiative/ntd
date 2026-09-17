import type { RecordOf } from "@/lib/schema";

export const diseases: RecordOf<"diseases">[] = [
  {
    id: "buruli-ulcer",
    name: "Buruli ulcer",
    tldr: "A painless skin ulcer caused by a bacterium related to leprosy that destroys tissue and, untreated, can disable permanently.",
    summary:
      "Buruli ulcer starts as a painless lump or swelling and develops into a large ulcer, usually on the arms or legs. It is caused by Mycobacterium ulcerans, whose toxin mycolactone destroys fat and skin and suppresses the immune response, which is why the lesion does not hurt. Early treatment with antibiotics cures it; late treatment leaves scarring and contractures that can limit movement for life. It is concentrated in West and Central Africa and in parts of Australia.",
    asOf: "2026-09",
    whogroup: "Skin-related",
    transmission:
      "Acquired from the environment, probably near slow-moving or stagnant water; the exact route is not established and it is not transmitted person to person.",
    clinical: "A painless nodule, plaque or swelling that becomes a painless ulcer with undermined edges; oedema is common in children.",
    diagnosis: "Clinical, supported by PCR on a swab or tissue and, in some settings, microscopy for acid-fast bacilli.",
    treatment: "A course of rifampicin plus clarithromycin for eight weeks; surgery is reserved for complications and impaired healing.",
    control:
      "Early detection and treatment to prevent disability, plus community education and wound care; there is no vaccine.",
    links: [
      { label: "WHO — Buruli ulcer", url: "https://www.who.int/news-room/fact-sheets/detail/buruli-ulcer" },
    ],
    pathogens: ["mycobacterium-ulcerans"],
    drugs: ["rifampicin", "clofazimine", "azithromycin"],
    technologies: ["genomic-surveillance", "ai-microscopy"],
    institutions: ["who", "noguchi"],
    bottlenecks: ["surveillance-data-gap", "funding-gap"],
    stats: [
      { label: "Reporting countries", value: "> 30" },
      { label: "Focus", value: "West and Central Africa, coastal Australia" },
      { label: "Disability", value: "Contractures and scarring if treated late" },
    ],
  },
  {
    id: "chagas",
    name: "Chagas disease",
    tldr: "An American trypanosome infection spread by kissing bugs and blood transfusion that damages the heart decades after it begins.",
    summary:
      "Chagas disease is caused by Trypanosoma cruzi and affects six to seven million people, mostly in Latin America, though migration has made it a global concern. The acute phase is usually mild and unnoticed; up to a third of those infected develop chronic cardiac disease with arrhythmias, heart failure or sudden death, and some develop digestive complications. Two old drugs cure it well in the acute phase but are far less effective once the heart is involved, and a 60-day course with frequent side effects means many people never finish treatment.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission:
      "Triatomine bug faeces entering a bite wound or mucous membrane; also blood transfusion, organ transplant, congenital transmission and contaminated food.",
    clinical:
      "Acute: fever and swelling at the bite site, usually unrecognised. Chronic: cardiac arrhythmias, cardiomyopathy, heart failure, and oesophageal or colonic dilatation.",
    diagnosis: "Parasite detection in blood during the acute phase; two concordant serological tests for chronic infection.",
    treatment: "Benznidazole or nifurtimox for 60 days; most effective in acute and early chronic infection.",
    control:
      "Indoor residual spraying and housing improvement against the bug, blood-donor screening, congenital screening and detection of infected women of childbearing age.",
    links: [
      { label: "WHO — Chagas disease", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    ],
    pathogens: ["trypanosoma-cruzi"],
    vectors: ["triatomine-bug"],
    targets: ["cruzain", "cyp51"],
    drugs: ["benznidazole", "nifurtimox"],
    diagnostics: ["chagas-serology", "molecular-pcr"],
    technologies: ["ai-drug-discovery", "drug-repurposing"],
    trials: ["benefit-chagas"],
    institutions: ["who", "fiocruz", "cideim"],
    bottlenecks: ["funding-gap", "access-and-pricing"],
    terms: ["vector-borne", "ntd"],
    stats: [
      { label: "People infected", value: "6–7 million" },
      { label: "Deaths a year", value: "≈ 12,000" },
      { label: "Chronic cardiac involvement", value: "Up to 30%" },
    ],
  },
  {
    id: "dengue-chikungunya",
    name: "Dengue and chikungunya",
    tldr: "Two mosquito-borne viral diseases spread by day-biting Aedes mosquitoes that are exploding in tropical cities worldwide.",
    summary:
      "Dengue and chikungunya are both transmitted by Aedes mosquitoes and both cause sudden fever with severe joint and muscle pain. Dengue has four serotypes, and a second infection with a different serotype carries a higher risk of severe dengue with plasma leakage and shock — which is why case management is mostly careful fluid therapy. Chikungunya rarely kills but leaves a substantial minority with joint pain lasting months or years. Neither has an approved antiviral; control rests on the mosquito, and vaccines now exist for both but are not deployed at the scale the burden demands.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission:
      "Bites of infected Aedes aegypti and Aedes albopictus mosquitoes, which breed in domestic water containers and bite during the day.",
    clinical:
      "High fever, severe headache, joint and muscle pain and rash; dengue can progress to plasma leakage and shock around the time the fever breaks.",
    diagnosis: "Antigen or molecular tests for dengue during the acute phase; serology later. Chikungunya is diagnosed by molecular test or serology.",
    treatment: "Supportive care with careful fluid management for dengue; analgesia for chikungunya. No specific antiviral.",
    control:
      "Container removal and source reduction, larvicides and adulticides, community mobilisation, and — for dengue — vaccination where supply allows.",
    links: [
      { label: "WHO — Dengue and severe dengue", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
      { label: "WHO — Chikungunya", url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya" },
    ],
    pathogens: ["dengue-virus", "chikungunya-virus"],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    targets: ["dengue-ns5", "dengue-protease"],
    technologies: ["dengue-vaccination", "vector-surveillance", "gene-drive-mosquitoes", "sterile-insect-technique", "ai-vector-identification"],
    trials: ["tak-003-dengue", "butantan-dv-dengue"],
    institutions: ["who", "fiocruz", "ipd", "icddrb"],
    bottlenecks: ["insecticide-resistance-crisis", "climate-expansion", "vaccine-gap"],
    terms: ["vector-borne", "elimination"],
    stats: [
      { label: "Dengue infections a year", value: "≈ 100–400 million" },
      { label: "At risk", value: "≈ half the world's population" },
      { label: "Severe dengue", value: "Plasma leakage and shock; mostly children in some regions" },
    ],
  },
  {
    id: "dracunculiasis",
    name: "Dracunculiasis (guinea-worm disease)",
    tldr: "A metre-long worm that emerges through the skin a year after drinking contaminated water — and the disease closest to eradication.",
    summary:
      "Guinea worm has no drug and no vaccine. It is prevented entirely by safe water, filtering, and containing every case so that no larvae reach water. Cases have fallen from an estimated 3.5 million a year in the 1980s to a handful, and only a few countries still report transmission. The last obstacle is the recent discovery that larvae can also be carried by fish and frogs as paratenic hosts in Chad, which complicates a disease once thought to be purely water-borne.",
    asOf: "2026-09",
    whogroup: "Others",
    transmission:
      "Drinking water containing copepods (water fleas) that carry the larvae; in Chad, fish and frogs may also harbour the parasite.",
    clinical:
      "A painful blister usually on the lower leg, followed by the slow emergence of a worm over days to weeks; secondary bacterial infection is the main risk.",
    diagnosis: "Direct observation of the worm emerging; no laboratory test is needed.",
    treatment: "No drug kills it; the worm is slowly wound out and the wound is kept clean to prevent infection.",
    control:
      "Safe drinking water, water filtration and treatment, case containment, surveillance and cash rewards for reporting cases.",
    links: [
      { label: "WHO — Dracunculiasis", url: "https://www.who.int/news-room/fact-sheets/detail/dracunculiasis-(guinea-worm-disease)" },
    ],
    pathogens: ["dracunculus-medinensis"],
    technologies: ["wash-interventions", "mhealth-surveillance", "community-health-workers"],
    institutions: ["who", "cdc", "gates-foundation"],
    bottlenecks: ["surveillance-data-gap", "climate-expansion"],
    terms: ["elimination", "ntd", "wash"],
    stats: [
      { label: "Cases in the 1980s", value: "≈ 3.5 million/yr" },
      { label: "Cases recently", value: "Single digits to low tens" },
      { label: "Goal", value: "Eradication" },
    ],
    timeline: [
      { date: "1986", text: "The Guinea Worm Eradication Programme begins with the Carter Center and WHO." },
      { date: "1989", text: "Annual cases fall below one million." },
      { date: "2010s", text: "Infections linked to fish and frog paratenic hosts complicate elimination in Chad." },
      { date: "2024", text: "Human cases remain in single digits to low tens across a few countries." },
    ],
  },
  {
    id: "echinococcosis",
    name: "Echinococcosis (hydatid disease)",
    tldr: "Tapeworm larvae from dogs that grow into slow, tumour-like cysts in the liver and lungs, sometimes for years before they cause symptoms.",
    summary:
      "Cystic echinococcosis, caused by Echinococcus granulosus, produces fluid-filled cysts in the liver and lungs that grow slowly and may go unnoticed for years; rupture can cause severe allergic reactions. Alveolar echinococcosis, from E. multilocularis, behaves like an invasive cancer of the liver and is often fatal without prolonged treatment. Both are controlled by deworming dogs, keeping dogs away from livestock carcasses, and slaughter hygiene — a One Health problem as much as a medical one.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission:
      "Ingesting eggs from the faeces of infected dogs (cystic) or foxes and dogs (alveolar); dogs become infected by eating cysts in livestock organs, including from uncontrolled slaughter.",
    clinical:
      "Slowly growing liver or lung cysts causing abdominal pain, jaundice or cough; rupture can cause anaphylaxis, and alveolar disease invades like a tumour.",
    diagnosis: "Ultrasound and imaging with serology; alveolar disease needs imaging plus serology and, where available, molecular confirmation.",
    treatment: "Surgery and cyst management for cystic disease, with prolonged albendazole; alveolar disease needs long-term albendazole and specialist care.",
    control: "Deworming dogs, controlled slaughter, hygiene, and — for E. multilocularis — managing the fox and rodent cycle.",
    links: [
      { label: "WHO — Echinococcosis", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    ],
    pathogens: ["echinococcus"],
    drugs: ["albendazole"],
    technologies: ["one-health-ntd-integration", "ai-microscopy"],
    institutions: ["who", "lshtm"],
    bottlenecks: ["surveillance-data-gap", "funding-gap"],
    terms: ["zoonosis", "one-health", "ntd"],
    stats: [
      { label: "People with cystic disease", value: "> 1 million at a time" },
      { label: "DALYs a year", value: "≈ 1 million" },
      { label: "Alveolar disease", value: "High fatality without treatment" },
    ],
  },
  {
    id: "foodborne-trematodiases",
    name: "Foodborne trematodiases",
    tldr: "Flukes caught from raw fish, crab, watercress and other freshwater food; some cause bile-duct cancer.",
    summary:
      "This group includes the liver flukes Clonorchis and Opisthorchis, the lung fluke Paragonimus and the liver fluke Fasciola. People are infected by eating raw or undercooked freshwater fish and crabs, infected water plants such as watercress, or by consuming contaminated water. Chronic clonorchiasis and opisthorchiasis are classified as Group 1 carcinogens for cholangiocarcinoma, so these worms are a cancer risk as well as a parasitic disease. The burden falls on river-basin communities where raw freshwater fish dishes are traditional.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission:
      "Eating raw or undercooked freshwater fish, crabs or crustaceans, or aquatic plants carrying the infective larvae.",
    clinical:
      "Often asymptomatic; heavy or long-standing infection causes bile-duct inflammation, jaundice, liver disease and, for Clonorchis and Opisthorchis, cholangiocarcinoma.",
    diagnosis: "Stool microscopy for eggs, supported by molecular tests; imaging for bile-duct and cancer complications.",
    treatment: "Triclabendazole for fascioliasis and paragonimiasis; praziquantel for the liver flukes.",
    control:
      "Health education about cooking fish and shellfish, food safety, sanitation to stop eggs reaching water, and treating infected people.",
    links: [
      { label: "WHO — Foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
    ],
    pathogens: ["foodborne-trematodes"],
    drugs: ["triclabendazole", "praziquantel"],
    technologies: ["wash-interventions", "one-health-ntd-integration"],
    institutions: ["who"],
    bottlenecks: ["diagnostics-gap", "surveillance-data-gap"],
    terms: ["zoonosis", "one-health", "ntd"],
    stats: [
      { label: "People infected", value: "> 56 million" },
      { label: "Cancer link", value: "Clonorchis and Opisthorchis are Group 1 carcinogens" },
      { label: "Geography", value: "East and Southeast Asia, and South America for fascioliasis" },
    ],
  },
  {
    id: "hat",
    name: "Human African trypanosomiasis (sleeping sickness)",
    tldr: "A tsetse-borne parasite that attacks the brain if untreated, causing sleep disturbance, neurological damage and death.",
    summary:
      "Human African trypanosomiasis is caused by Trypanosoma brucei. The Gambiense form, in West and Central Africa, is chronic and progresses over years; the Rhodesiense form, in East and Southern Africa, is acute and can kill within weeks. The infection begins with fever and swollen lymph nodes and progresses, once the parasite crosses into the brain, to sleep disturbance, confusion, convulsions and death. Cases have fallen dramatically — from 26,000 reported in 2000 to under a thousand — and treatment has gone from arsenic to a single oral dose.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission: "The bite of an infected tsetse fly (Glossina species).",
    clinical:
      "First stage: fever, headaches and lymphadenopathy. Second stage: sleep disturbance, neurological and psychiatric signs, and progressive deterioration.",
    diagnosis: "Antibody screening (CATT) followed by microscopic or molecular confirmation of parasites.",
    treatment: "Fexinidazole orally for Gambiense disease; pentamidine or suramin for first stage, and melarsoprol for late-stage Rhodesiense disease.",
    control:
      "Active case finding and treatment, tsetse control using traps and targets, and cross-border surveillance; near-elimination is a realistic goal.",
    links: [
      { label: "WHO — Human African trypanosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/trypanosomiasis-human-african-(sleeping-sickness)" },
    ],
    pathogens: ["trypanosoma-brucei"],
    vectors: ["tsetse-fly"],
    targets: ["cpsf3", "cyp51"],
    drugs: ["fexinidazole", "acoziborole", "eflornithine", "nifurtimox", "pentamidine", "suramin", "melarsoprol"],
    diagnostics: ["catt", "microscopy-thick-smear", "molecular-pcr"],
    technologies: ["tsetse-traps", "sterile-insect-technique", "open-science-drug-discovery"],
    trials: ["acoziborole-hat", "fexinidazole-hat", "nect-hat"],
    institutions: ["who", "dndi"],
    bottlenecks: ["surveillance-data-gap", "funding-gap"],
    terms: ["vector-borne", "elimination", "ntd"],
    stats: [
      { label: "Reported cases (2024)", value: "≈ 600", note: "down from 26,000 in 2000" },
      { label: "Fatality untreated", value: "Near 100%" },
      { label: "Form most common", value: "Gambiense, in West and Central Africa" },
    ],
    timeline: [
      { date: "2000", text: "More than 26,000 cases are reported across Africa." },
      { date: "2009", text: "NECT simplifies treatment for late-stage disease." },
      { date: "2019", text: "Fexinidazole is approved as the first all-oral cure." },
      { date: "2020s", text: "Reported cases fall below 1,000 a year." },
    ],
  },
  {
    id: "leishmaniasis",
    name: "Leishmaniasis",
    tldr: "Sandfly-borne parasites that cause skin sores, destructive mucosal damage or a fatal infection of internal organs.",
    summary:
      "Cutaneous leishmaniasis leaves lifelong scars and is a major social burden; mucosal leishmaniasis destroys the tissues of the nose and mouth; visceral leishmaniasis attacks the spleen, liver and bone marrow and is fatal without treatment. Over ninety sandfly species transmit roughly twenty Leishmania species. Treatment is long, toxic and increasingly failing in South Asia, and there is no approved human vaccine — though recovery from the skin form confers lifelong immunity, proving a vaccine is biologically possible.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission: "The bite of infected female sandflies, with dogs and rodents acting as animal reservoirs for some species.",
    clinical:
      "Cutaneous: painless, slowly enlarging skin ulcers. Mucosal: destruction of the nose, mouth and throat. Visceral: prolonged fever, weight loss, enlarged spleen and liver, and pancytopenia.",
    diagnosis: "Parasite detection from a lesion or tissue for cutaneous disease; rK39 rapid test, DAT and tissue confirmation for visceral disease.",
    treatment:
      "Liposomal amphotericin B, miltefosine, paromomycin or combinations for visceral disease; local or systemic treatment for cutaneous disease depending on region and species.",
    control:
      "Sandfly control, treating animal reservoirs, early diagnosis and treatment, and case detection to reduce the human reservoir for the visceral form.",
    links: [
      { label: "WHO — Leishmaniasis", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    ],
    pathogens: ["leishmania"],
    vectors: ["sandfly"],
    targets: ["nmt", "trypanothione-reductase", "cyp51"],
    drugs: ["liposomal-amphotericin-b", "miltefosine", "paromomycin", "antimonials"],
    diagnostics: ["rk39-rapid-test", "direct-agglutination-test", "molecular-pcr"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "ai-drug-discovery", "leishmaniasis-vaccine-candidates", "drug-repurposing"],
    trials: ["dndi-0690-leishmaniasis", "miltefosine-vl-india"],
    institutions: ["who", "dndi", "cideim"],
    bottlenecks: ["diagnostics-gap", "access-and-pricing", "stigma-and-disability"],
    terms: ["vector-borne", "zoonosis", "ntd"],
    stats: [
      { label: "New cases a year", value: "≈ 1 million", note: "cutaneous and visceral combined" },
      { label: "At risk", value: "> 1 billion" },
      { label: "Visceral deaths untreated", value: "Almost always fatal" },
    ],
  },
  {
    id: "leprosy",
    name: "Leprosy (Hansen's disease)",
    tldr: "A slow bacterial infection of skin and nerves that is curable, but leaves permanent disability and stigma if found late.",
    summary:
      "Leprosy is caused by Mycobacterium leprae and affects the skin and peripheral nerves, causing numb patches and, in more severe forms, nerve damage, deformity and blindness. It is not very contagious; most people exposed never develop it. Multidrug therapy — rifampicin, dapsone and clofazimine — cures the infection, and a single dose of rifampicin prevents it in close contacts. The persistent problems are late diagnosis, the disability that results, and the stigma that outlives the disease.",
    asOf: "2026-09",
    whogroup: "Skin-related",
    transmission: "Prolonged close contact with untreated cases, via respiratory droplets; not acquired from touching a person casually.",
    clinical:
      "Pale or reddish skin patches with sensory loss, thickened peripheral nerves, and reactions that can cause acute nerve damage; untreated, deformity and blindness.",
    diagnosis: "Clinical skin and nerve examination; slit-skin smear and, where available, PCR. Every borderland case needs nerve assessment.",
    treatment:
      "Multidrug therapy for 6 or 12 months; a single dose of rifampicin as post-exposure prophylaxis for contacts; steroids for nerve reactions.",
    control:
      "Early detection, contact screening and rifampicin prophylaxis, multidrug therapy, and disability prevention and stigma reduction.",
    links: [
      { label: "WHO — Leprosy", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    ],
    pathogens: ["mycobacterium-leprae"],
    targets: ["rna-polymerase", "dpre1"],
    drugs: ["rifampicin", "dapsone", "clofazimine"],
    diagnostics: ["gene-cartridge-test"],
    technologies: ["community-health-workers", "mhealth-surveillance", "mass-drug-administration"],
    institutions: ["who", "lshtm"],
    bottlenecks: ["stigma-and-disability", "access-and-pricing", "vaccine-gap"],
    terms: ["ntd", "mda"],
    stats: [
      { label: "New cases a year", value: "≈ 170,000–200,000" },
      { label: "Disability at diagnosis", value: "Present in a substantial share of new cases" },
      { label: "Cure", value: "Multidrug therapy" },
    ],
    timeline: [
      { date: "1873", text: "Gerhard Armauer Hansen identifies Mycobacterium leprae." },
      { date: "1981", text: "WHO recommends multidrug therapy, preventing resistance from dapsone monotherapy." },
      { date: "2000", text: "Leprosy is eliminated as a global public-health problem." },
      { date: "2018", text: "WHO recommends single-dose rifampicin for contacts of leprosy patients." },
    ],
  },
  {
    id: "lymphatic-filariasis",
    name: "Lymphatic filariasis (elephantiasis)",
    tldr: "Mosquito-borne filarial worms that block the lymph system, causing the permanent swelling of elephantiasis and hydrocele.",
    summary:
      "Lymphatic filariasis is caused by Wuchereria bancrofti, Brugia malayi and Brugia timori. Most infections are asymptomatic, but in a minority the lymphatic vessels become blocked, and the limbs or scrotum swell permanently — a disfiguring, disabling and heavily stigmatised condition. Treatment kills the microfilariae and reduces transmission, but it cannot reverse the swelling once it is established, so a second effort is needed to relieve the lymphoedema and prevent the painful skin infections that worsen it.",
    asOf: "2026-09",
    whogroup: "Preventive chemotherapy",
    transmission: "Bites of infected Culex, Anopheles and Aedes mosquitoes, depending on the region.",
    clinical:
      "Often asymptomatic; advanced disease causes lymphoedema of the legs, arms, breasts and genitalia, hydrocele in men, and recurrent skin infections.",
    diagnosis: "Microscopy for microfilariae and antigen tests in blood; antibody tests are used for mapping exposure.",
    treatment: "Annual single-dose combinations: albendazole with DEC outside Africa, or albendazole with ivermectin in Africa; doxycycline for individual treatment.",
    control:
      "Annual mass drug administration at high coverage, plus morbidity management and lymphoedema care; elimination is the goal.",
    links: [
      { label: "WHO — Lymphatic filariasis", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
    ],
    pathogens: ["lymphatic-filarial-worms"],
    vectors: ["culex-mosquito"],
    targets: ["wolbachia", "glucl", "beta-tubulin"],
    drugs: ["diethylcarbamazine", "ivermectin", "albendazole", "doxycycline"],
    diagnostics: ["antibody-rdt", "molecular-pcr"],
    technologies: ["mass-drug-administration", "insecticide-treated-nets", "indoor-residual-spraying", "xenomonitoring"],
    institutions: ["who", "ntd-support-center", "gates-foundation"],
    bottlenecks: ["access-and-pricing", "stigma-and-disability", "surveillance-data-gap"],
    terms: ["mda", "preventive-chemotherapy", "elimination", "ntd"],
    stats: [
      { label: "People infected", value: "≈ 120 million" },
      { label: "People at risk", value: "> 850 million" },
      { label: "Endemic countries", value: "44" },
    ],
  },
  {
    id: "mycetoma",
    name: "Mycetoma and other deep mycoses",
    tldr: "Fungal or bacterial infections that enter through a skin injury and steadily destroy the foot or hand over years.",
    summary:
      "Mycetoma begins after a thorn prick or small injury and grows into a painless swelling that eventually discharges grains through sinuses, destroying skin, muscle and bone. It is caused either by fungi (eumycetoma, mainly Madurella mycetomatis) or bacteria (actinomycetoma), and the two need completely different treatment. It is concentrated in the 'mycetoma belt' around the Sahel, where people work barefoot in thorny terrain, and it affects young adults in their productive years. Fungal mycetoma responds poorly to available drugs and often needs amputation.",
    asOf: "2026-09",
    whogroup: "Skin-related",
    transmission: "Environmental organisms entering through a skin injury, typically from thorns or sharp vegetation; not person to person.",
    clinical: "A painless, slowly enlarging swelling with sinuses that discharge grains; the foot is most often affected, and bone is destroyed over time.",
    diagnosis: "Ultrasound and imaging plus identification of the grains and organism by microscopy and culture; molecular tests help distinguish fungal from bacterial.",
    treatment:
      "Bacterial mycetoma: long antibiotic courses. Fungal mycetoma: long azole or other antifungal therapy with surgery, and amputation for advanced disease.",
    control:
      "Early presentation, footwear, avoiding thorn injury, and improved access to diagnosis and follow-up; considered a neglected disease within the NTDs.",
    links: [
      { label: "WHO — Mycetoma", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
    ],
    pathogens: ["mycetoma-agents"],
    drugs: ["antimonials", "azithromycin"],
    technologies: ["genomic-surveillance", "ai-microscopy"],
    institutions: ["who"],
    bottlenecks: ["diagnostics-gap", "access-and-pricing", "stigma-and-disability"],
    terms: ["ntd"],
    stats: [
      { label: "Geography", value: "The Sahel 'mycetoma belt'" },
      { label: "Age affected", value: "Young adults, in productive years" },
      { label: "Fungal form", value: "Hardest to treat; often needs surgery" },
    ],
  },
  {
    id: "noma",
    name: "Noma (cancrum oris)",
    tldr: "A gangrenous infection of the mouth and face in severely malnourished children that destroys tissue and leaves survivors disfigured.",
    summary:
      "Noma begins as a small sore inside the mouth in a child weakened by malnutrition, poor oral hygiene and disease, and can destroy the cheek, lips, nose and jaw within days. It is a polymicrobial infection, not one pathogen, and it is rare but devastating: most children who develop it die without treatment, and survivors are left with severe facial disfigurement, difficulty eating and speaking, and deep social exclusion. Noma was added to the WHO NTD list in 2023, which brought the first global framework for surveillance and care.",
    asOf: "2026-09",
    whogroup: "Skin-related",
    transmission:
      "Not transmitted — it arises from the mouth's own bacteria in a malnourished, immunocompromised child, and is a marker of extreme deprivation.",
    clinical: "A sore in the mouth that becomes an oedematous, then gangrenous, lesion destroying the cheek, nose or jaw, often within days.",
    diagnosis: "Clinical; the diagnosis is made on appearance, and early stages are easily missed.",
    treatment: "Immediate nutritional support and antibiotics, followed by reconstructive surgery for survivors and rehabilitation.",
    control:
      "Poverty reduction, nutrition, oral hygiene and immunisation, plus early detection and free reconstructive surgery for survivors.",
    links: [
      { label: "WHO — Noma", url: "https://www.who.int/news-room/fact-sheets/detail/noma" },
    ],
    technologies: ["community-health-workers", "mhealth-surveillance"],
    institutions: ["who"],
    bottlenecks: ["stigma-and-disability", "surveillance-data-gap", "funding-gap"],
    terms: ["ntd"],
    stats: [
      { label: "Added to the WHO NTD list", value: "2023" },
      { label: "Who it affects", value: "Children aged 2–6 in extreme poverty" },
      { label: "Fatality", value: "Very high without treatment" },
    ],
  },
  {
    id: "onchocerciasis",
    name: "Onchocerciasis (river blindness)",
    tldr: "A blackfly-borne worm that causes relentless itching and, after years, irreversible blindness.",
    summary:
      "Onchocerciasis is caused by Onchocerca volvulus, a filarial worm transmitted by blackflies that breed in fast-flowing rivers. Adult worms live in nodules under the skin and release microfilariae that migrate through skin and eye, causing severe dermatitis and slowly progressive blindness. Mass treatment with ivermectin, donated free, has made it a target for elimination and has already interrupted transmission in much of Latin America and parts of Africa.",
    asOf: "2026-09",
    whogroup: "Preventive chemotherapy",
    transmission: "The bite of infected blackflies (Simulium), which breed in fast-flowing rivers and bite during the day.",
    clinical:
      "Intense itching, skin nodules containing adult worms, skin depigmentation and thickening, and eye disease progressing to irreversible blindness.",
    diagnosis: "Skin snips for microfilariae historically; now antibody tests and molecular methods, plus nodule examination.",
    treatment: "Ivermectin annually, or moxidectin; doxycycline targets the Wolbachia symbiont.",
    control:
      "Community-directed mass ivermectin treatment, vector larviciding of rivers, and now elimination campaigns with verification.",
    links: [
      { label: "WHO — Onchocerciasis", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    pathogens: ["onchocerca-volvulus"],
    vectors: ["blackfly"],
    targets: ["glucl", "slo-1", "wolbachia"],
    drugs: ["ivermectin", "moxidectin", "doxycycline", "emodepside"],
    diagnostics: ["skin-snip", "antibody-rdt", "molecular-pcr"],
    technologies: ["mass-drug-administration", "community-health-workers", "xenomonitoring", "onchocerciasis-vaccine-candidates"],
    trials: ["emodepside-oncho", "moxidectin-oncho", "ivermectin-dose-oncho"],
    institutions: ["who", "dndi", "gates-foundation"],
    bottlenecks: ["funding-gap", "surveillance-data-gap", "vaccine-gap"],
    terms: ["mda", "preventive-chemotherapy", "elimination", "ntd"],
    stats: [
      { label: "People at risk", value: "> 220 million" },
      { label: "People infected", value: "≈ 15 million" },
      { label: "Vision loss", value: "≈ 1 million attributable cases" },
    ],
    timeline: [
      { date: "1975", text: "The Onchocerciasis Control Programme begins in West Africa." },
      { date: "1987", text: "Merck donates ivermectin free for as long as needed." },
      { date: "1995", text: "Community-directed treatment extends coverage across Africa." },
      { date: "2023", text: "High-dose ivermectin improves efficacy, strengthening elimination efforts." },
    ],
  },
  {
    id: "rabies",
    name: "Rabies",
    tldr: "A virus from animal bites that is almost always fatal once symptoms start, and almost always preventable if treated promptly.",
    summary:
      "Rabies is transmitted mainly by dog bites and travels along nerves to the brain, causing encephalitis that is nearly uniformly fatal once it begins. Prompt wound washing, vaccination and, for severe bites, rabies immunoglobulin prevent it essentially every time. Deaths happen almost entirely where people cannot reach or afford that treatment, which is why the burden is concentrated in Africa and Asia and why vaccinating dogs is the most effective intervention.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission: "The bite or scratch of an infected animal, most often a dog; bats are an important source in some regions.",
    clinical: "Anxiety and tingling at the wound site progressing to hydrophobia, agitation, paralysis and coma; once symptomatic, it is almost always fatal.",
    diagnosis: "Clinical suspicion, confirmed post mortem or by molecular testing of tissue and saliva.",
    treatment: "No effective treatment once symptoms begin; prevention is post-exposure wound washing, vaccination and immunoglobulin.",
    control:
      "Dog vaccination to eliminate the reservoir, prompt PEP access, and surveillance of animal bites; elimination of dog-mediated human rabies is the goal.",
    links: [
      { label: "WHO — Rabies", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    ],
    pathogens: ["rabies-virus"],
    targets: ["rabies-glycoprotein"],
    drugs: ["rabies-postexposure-prophylaxis"],
    technologies: ["rabies-vaccination", "one-health-ntd-integration"],
    trials: ["rabies-dose-sparing"],
    institutions: ["who", "cdc", "ipd"],
    bottlenecks: ["access-and-pricing", "vaccine-gap", "surveillance-data-gap"],
    terms: ["zoonosis", "one-health", "elimination", "ntd"],
    stats: [
      { label: "Deaths a year", value: "≈ 59,000" },
      { label: "Children affected", value: "≈ 40% of deaths" },
      { label: "Source", value: "Dog bites cause ≈ 99% of human cases" },
    ],
  },
  {
    id: "scabies",
    name: "Scabies and other ectoparasitoses",
    tldr: "An intensely itchy mite infestation that spreads through crowded homes and drives bacterial skin infection in the tropics.",
    summary:
      "Scabies is caused by a mite that burrows into the skin, causing an itch that is worst at night. It spreads easily in crowded households, schools and institutions, and in tropical communities it is a major driver of impetigo and, through that, of post-streptococcal kidney disease and rheumatic heart disease. Ordinary scabies is treated with topical permethrin or oral ivermectin, but whole-community mass treatment is often needed in high-burden settings because reinfection from untreated contacts is relentless.",
    asOf: "2026-09",
    whogroup: "Skin-related",
    transmission: "Prolonged skin-to-skin contact, including within households and institutions; the crusted form spreads more easily by contact and fomites.",
    clinical:
      "Intense itching worse at night, burrows and a papular rash; scratching leads to bacterial infection, and crusted scabies carries thousands of mites.",
    diagnosis: "Clinical, supported by microscopy of skin scrapings or dermoscopy where available.",
    treatment: "Topical permethrin or oral ivermectin, treating the patient and all close contacts; mass treatment where prevalence is high.",
    control:
      "Case detection and household treatment, community mass treatment, and addressing the crowding and poverty that spread it.",
    links: [
      { label: "WHO — Scabies", url: "https://www.who.int/news-room/fact-sheets/detail/scabies" },
    ],
    pathogens: ["sarcoptes-scabiei"],
    targets: ["glucl", "insect-acetylcholinesterase"],
    drugs: ["permethrin", "ivermectin"],
    technologies: ["mass-drug-administration", "community-health-workers"],
    institutions: ["who", "lshtm"],
    bottlenecks: ["access-and-pricing", "stigma-and-disability"],
    terms: ["mda", "ntd"],
    stats: [
      { label: "People affected", value: "≈ 200 million at any time" },
      { label: "Downstream harm", value: "Impetigo, kidney disease and rheumatic heart disease" },
    ],
  },
  {
    id: "schistosomiasis",
    name: "Schistosomiasis (bilharzia)",
    tldr: "Blood flukes caught by wading or swimming in fresh water that cause bladder and bowel disease and, long term, cancer and organ damage.",
    summary:
      "Schistosomiasis affects more than 200 million people, most in sub-Saharan Africa. People are infected when larvae released by freshwater snails penetrate their skin; children who swim or wash in lakes and rivers are especially vulnerable. The eggs the worms lay lodge in the bladder or intestine and provoke chronic inflammation, causing blood in the urine or stool, anaemia, bladder disease and, for Schistosoma haematobium, a substantial risk of bladder cancer. A single dose of praziquantel treats it, and repeated population treatment together with water, sanitation and snail control is the strategy.",
    asOf: "2026-09",
    whogroup: "Preventive chemotherapy",
    transmission: "Skin contact with fresh water containing cercariae released by infected freshwater snails.",
    clinical:
      "Blood in urine or stool, abdominal pain, anaemia and poor growth; chronic infection causes bladder fibrosis, kidney obstruction, liver fibrosis and bladder cancer risk.",
    diagnosis: "Kato-Katz stool examination and urine filtration for eggs; POC-CCA antigen testing and molecular tests where available.",
    treatment: "Praziquantel, 40 mg/kg, as a single dose, repeated as programmes require; treating children in mass campaigns is the backbone.",
    control:
      "Regular mass praziquantel treatment, water and sanitation, snail control, health education about safe water contact, and children's treatment.",
    links: [
      { label: "WHO — Schistosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    pathogens: ["schistosoma"],
    vectors: ["freshwater-snails"],
    targets: ["schistosome-trp-channel", "schistosome-tgr", "schistosome-hdac8"],
    drugs: ["praziquantel", "oxamniquine"],
    diagnostics: ["kato-katz", "point-of-care-cca", "molecular-pcr", "molecular-lamp"],
    technologies: ["mass-drug-administration", "snail-control", "wash-interventions", "ai-microscopy"],
    trials: ["praziquantel-pediatric"],
    institutions: ["who", "lshtm", "kemi"],
    bottlenecks: ["diagnostics-gap", "vaccine-gap"],
    terms: ["mda", "preventive-chemotherapy", "elimination", "wash", "ntd"],
    stats: [
      { label: "People infected", value: "> 200 million" },
      { label: "People needing treatment", value: "≈ 250 million" },
      { label: "Deaths a year", value: "≈ 12,000", note: "likely under-counted" },
    ],
    timeline: [
      { date: "1851", text: "Theodor Bilharz discovers the parasite, and the disease takes his name." },
      { date: "1970s", text: "Praziquantel is developed and becomes the single global treatment." },
      { date: "2000s", text: "Mass treatment campaigns expand, especially for school-aged children." },
      { date: "2020s", text: "Snail control and WASH return to elimination plans alongside praziquantel." },
    ],
  },
  {
    id: "sth",
    name: "Soil-transmitted helminthiases",
    tldr: "Roundworm, whipworm and hookworm — gut worms spread through contaminated soil that stunt and anaemic children across the tropics.",
    summary:
      "Soil-transmitted helminths infect about 1.5 billion people. Ascaris and Trichuris are ingested from contaminated food, water or hands; hookworm larvae penetrate bare feet. Heavy infections cause malnutrition, anaemia, poor growth and impaired learning, and hookworm causes chronic blood loss. They are controlled by periodic deworming of at-risk groups, especially children, which is among the cheapest effective health interventions available, together with sanitation and hygiene to stop reinfection.",
    asOf: "2026-09",
    whogroup: "Preventive chemotherapy",
    transmission:
      "Ingestion of eggs from contaminated soil, food or hands (Ascaris, Trichuris), or skin penetration by larvae from contaminated soil (hookworm).",
    clinical:
      "Often none with light infection; heavy infection causes abdominal pain, diarrhoea, malnutrition, anaemia, stunting and impaired cognitive development.",
    diagnosis: "Kato-Katz stool examination for egg counts; concentration and molecular methods for light infections.",
    treatment: "Albendazole or mebendazole, given periodically to at-risk groups as preventive chemotherapy.",
    control:
      "Regular deworming of preschool and school-aged children, WASH to reduce reinfection, and health education.",
    links: [
      { label: "WHO — Soil-transmitted helminth infections", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
    ],
    pathogens: ["soil-transmitted-helminths"],
    targets: ["beta-tubulin", "glucl"],
    drugs: ["albendazole", "mebendazole", "ivermectin", "tribendimidine", "emodepside"],
    diagnostics: ["kato-katz", "formol-ether-concentration", "molecular-pcr"],
    technologies: ["mass-drug-administration", "wash-interventions", "community-health-workers", "hookworm-vaccine-candidates"],
    institutions: ["who", "ntd-support-center", "kemi"],
    bottlenecks: ["diagnostics-gap", "access-and-pricing", "vaccine-gap"],
    terms: ["mda", "preventive-chemotherapy", "wash", "ntd"],
    stats: [
      { label: "People infected", value: "≈ 1.5 billion" },
      { label: "Children needing treatment", value: "> 800 million" },
      { label: "Intervention cost", value: "Among the cheapest in public health" },
    ],
  },
  {
    id: "snakebite",
    name: "Snakebite envenoming",
    tldr: "A poisoning, not an infection, but one that kills and disables poor rural communities where antivenom does not reach.",
    summary:
      "Snakebite envenoming is included among the NTDs because of who it strikes: farmers, herders and children in poor rural areas with the least access to care. Venom can destroy tissue, paralyse muscles or cause uncontrollable bleeding and clotting, depending on the species. Treatment is antivenom matched to the local snakes, and most deaths and amputations are preventable with fast access to the right product — which is more a logistics, quality and affordability problem than a scientific one.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission: "Not transmitted; caused by the bite of a venomous snake, usually during agricultural work or at night.",
    clinical:
      "Local swelling, blistering and tissue death, or systemic effects: paralysis, coagulopathy and bleeding, kidney injury and shock.",
    diagnosis: "Clinical, guided by the species and syndrome (cytotoxic, neurotoxic or coagulopathic); no rapid test identifies envenoming in the field.",
    treatment: "Intravenous antivenom matched to the region's snakes, plus supportive care; antivenom delays are the main cause of death and disability.",
    control:
      "Antivenom availability and quality through WHO prequalification, community education, better access to care, and research on recombinant antivenoms.",
    links: [
      { label: "WHO — Snakebite envenoming", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    ],
    pathogens: ["snake-venom"],
    drugs: ["snake-antivenom"],
    technologies: ["recombinant-antivenoms"],
    trials: ["snakebite-antivenom-trials"],
    institutions: ["who"],
    bottlenecks: ["access-and-pricing", "surveillance-data-gap", "funding-gap"],
    terms: ["ntd"],
    stats: [
      { label: "Bites a year", value: "1.8–2.7 million" },
      { label: "Deaths a year", value: "80,000–140,000" },
      { label: "Permanent disability", value: "≈ 400,000/yr" },
    ],
  },
  {
    id: "taeniasis-cysticercosis",
    name: "Taeniasis and cysticercosis (including neurocysticercosis)",
    tldr: "The pork tapeworm gives people a gut worm, but its eggs cause cysts in the brain that are a leading preventable cause of epilepsy.",
    summary:
      "A person gets the adult tapeworm, Taenia solium, by eating undercooked pork containing cysts. But if someone swallows the tapeworm's eggs — from contaminated food, water or their own hands — the larvae form cysts in the brain, causing neurocysticercosis, which is one of the most common preventable causes of epilepsy worldwide. Pigs are the intermediate host, and free-roaming pigs that eat human faeces keep the cycle going, which makes this a One Health problem rooted in sanitation and pig husbandry.",
    asOf: "2026-09",
    whogroup: "Vector-borne and zoonotic",
    transmission:
      "Taeniasis from eating undercooked pork with cysts; cysticercosis from ingesting T. solium eggs from human faeces through contaminated food, water or hands.",
    clinical:
      "The adult worm often causes little more than mild symptoms; brain cysts cause seizures, headaches, hydrocephalus and, occasionally, death.",
    diagnosis: "Stool examination for tapeworm segments and eggs; brain imaging plus serology for neurocysticercosis.",
    treatment: "Albendazole or praziquantel for the tapeworm and for brain cysts, with corticosteroids and anticonvulsants as needed.",
    control:
      "Sanitation to stop pigs accessing human faeces, meat inspection and safe cooking, deworming of people with taeniasis, and pig vaccination where available.",
    links: [
      { label: "WHO — Taeniasis/cysticercosis", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
    ],
    pathogens: ["taenia-solium"],
    targets: ["beta-tubulin", "schistosome-trp-channel"],
    drugs: ["albendazole", "praziquantel"],
    technologies: ["wash-interventions", "one-health-ntd-integration"],
    institutions: ["who", "cdc"],
    bottlenecks: ["surveillance-data-gap", "stigma-and-disability", "funding-gap"],
    terms: ["zoonosis", "one-health", "wash", "ntd"],
    stats: [
      { label: "People with neurocysticercosis", value: "2.5–8.3 million" },
      { label: "Epilepsy link", value: "A leading preventable cause" },
      { label: "Driver", value: "Free-roaming pigs and poor sanitation" },
    ],
  },
  {
    id: "trachoma",
    name: "Trachoma",
    tldr: "A bacterial eye infection that, after decades of reinfection, turns the eyelashes inward and blinds — the leading infectious cause of blindness.",
    summary:
      "Trachoma is caused by Chlamydia trachomatis and spreads eye to eye through fingers, shared cloths and eye-seeking flies, especially where faces are unwashed and water is scarce. Repeated childhood infections scar the inner eyelid; over years the lid turns inward and the lashes scrape the cornea, causing pain and irreversible blindness. Prevention uses the SAFE strategy — surgery for trichiasis, antibiotics, facial cleanliness and environmental improvement — and many countries have eliminated it as a public health problem.",
    asOf: "2026-09",
    whogroup: "Preventive chemotherapy",
    transmission: "Direct and indirect contact with eye and nose discharge, spread by fingers, cloths, and flies; associated with water scarcity and poor hygiene.",
    clinical:
      "Follicular and intense conjunctival inflammation in childhood; later scarring, in-turned lashes (trichiasis) and corneal opacity causing blindness.",
    diagnosis: "Clinical grading using the WHO simplified system; photographic and AI-assisted grading are being adopted.",
    treatment: "Mass azithromycin for communities above a prevalence threshold; eyelid surgery for trichiasis.",
    control: "The SAFE strategy: surgery, antibiotics, facial cleanliness and environmental improvement, especially water supply.",
    links: [
      { label: "WHO — Trachoma", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    ],
    pathogens: ["chlamydia-trachomatis"],
    drugs: ["azithromycin"],
    diagnostics: ["trachoma-grading"],
    technologies: ["mass-drug-administration", "wash-interventions", "ai-microscopy"],
    trials: ["trachoma-azithromycin"],
    institutions: ["who", "gates-foundation", "lshtm"],
    bottlenecks: ["stigma-and-disability", "surveillance-data-gap"],
    terms: ["mda", "preventive-chemotherapy", "elimination", "wash", "ntd"],
    stats: [
      { label: "People at risk", value: "≈ 100 million" },
      { label: "Leading cause", value: "Infectious blindness worldwide" },
      { label: "Strategy", value: "SAFE" },
    ],
    timeline: [
      { date: "1998", text: "WHO launches the Alliance for the Global Elimination of Trachoma by 2020 (GET2020)." },
      { date: "2000s", text: "Azithromycin mass treatment trials establish the 'A' in the SAFE strategy." },
      { date: "2010s", text: "Country after country reaches the elimination threshold and is validated." },
      { date: "2020s", text: "The number of people at risk falls sharply, though the last districts are the hardest." },
    ],
  },
  {
    id: "yaws",
    name: "Yaws and other endemic treponematoses",
    tldr: "A childhood bacterial infection of skin and bone that one dose of azithromycin cures, making it a formal eradication target.",
    summary:
      "Yaws affects children under 15 in warm, humid, poor rural communities and causes painless skin lesions that progress, if untreated, to destructive lesions of skin, bone and cartilage years later. A single oral dose of azithromycin cures it as effectively as an injected penicillin, which is what makes mass treatment and eradication feasible. WHO's 2012 Morges strategy aimed to eradicate yaws; progress has been interrupted by resurges, particularly in the Pacific, but the tools are sufficient if the last communities can be reached.",
    asOf: "2026-09",
    whogroup: "Skin-related",
    transmission: "Direct skin-to-skin contact with an infectious lesion, usually among children playing together.",
    clinical:
      "An initial painless papule or ulcer, followed by a secondary eruption; late disease destroys skin, bone and cartilage of the nose, palate and legs.",
    diagnosis: "Clinical plus serology, which cross-reacts with other treponemal infections; molecular typing helps distinguish recent from old infection.",
    treatment: "A single oral dose of azithromycin, or injected benzathine penicillin G.",
    control:
      "Mass treatment of affected communities, repeated as needed, with active case finding and surveillance for resurgence.",
    links: [
      { label: "WHO — Yaws", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    ],
    pathogens: ["treponema-pallidum-pertenue"],
    drugs: ["azithromycin", "benzathine-penicillin"],
    technologies: ["mass-drug-administration", "community-health-workers", "mhealth-surveillance"],
    trials: ["yaws-azithromycin"],
    institutions: ["who"],
    bottlenecks: ["surveillance-data-gap", "access-and-pricing", "stigma-and-disability"],
    terms: ["mda", "elimination", "ntd"],
    stats: [
      { label: "Goal", value: "Eradication" },
      { label: "Strategy launched", value: "2012 (Morges)" },
      { label: "Cure", value: "A single oral dose" },
    ],
    timeline: [
      { date: "1950s", text: "A global yaws campaign treats millions and drives cases down sharply." },
      { date: "1970s", text: "The campaign ends and yaws resurges as surveillance lapses." },
      { date: "2012", text: "WHO launches the Morges strategy to eradicate yaws by mass azithromycin treatment." },
      { date: "2010s–2020s", text: "Eradication proves difficult, with resurges in parts of the Pacific and Africa." },
    ],
  },
];
