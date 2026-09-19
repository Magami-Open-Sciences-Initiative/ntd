import type { RecordOf } from "@/lib/schema";
import { iso2, iso3, geonames } from "./codes";

const who = (iso3: string, label: string) => ({
  label: `WHO — ${label}`,
  url: `https://www.who.int/countries/${iso3}`,
});

export const countries: RecordOf<"countries">[] = [
  {
    id: "nigeria",
    name: "Nigeria",
    codes: [iso2("NG"), iso3("NGA"), geonames("2328926")],
    tldr: "The country with the largest NTD burden in Africa, and the one whose programmes shape the continent's elimination prospects.",
    summary:
      "Nigeria carries the heaviest concentration of neglected tropical diseases in Africa: lymphatic filariasis, onchocerciasis, schistosomiasis, soil-transmitted helminths and trachoma are all endemic at scale, and it has the world's highest burden of noma and one of the highest of snakebite. With roughly a fifth of Africa's population, its programme performance determines whether continental elimination targets are met. It also has genuine strengths: a national NTD programme that runs mass administration at very large scale, a specialist noma hospital in Sokoto, and research institutions that lead on Buruli ulcer and yaws.",
    asOf: "2026-09",
    region: "West Africa",
    whoRegion: "African Region",
    burden:
      "Lymphatic filariasis and onchocerciasis are widespread, schistosomiasis and soil-transmitted helminths affect tens of millions, and trachoma has been endemic across the north. Noma, snakebite envenoming, rabies, leprosy, Buruli ulcer and yaws are all present, and several overlap in the same poor rural districts.",
    elimination:
      "Trachoma has been eliminated as a public health problem and validated by WHO. Lymphatic filariasis and onchocerciasis elimination programmes are under way at national scale, and yaws remains a target. Human African trypanosomiasis is not a major burden.",
    programme:
      "The national NTD programme delivers preventive chemotherapy through community-directed distributors and schools, with support from the NTD Support Center, WHO and NGOs. Snakebite and noma care depend heavily on specialist centres and humanitarian organisations rather than routine primary care.",
    stats: [
      { label: "Population", value: "> 220 million", note: "the largest in Africa" },
      { label: "Snakebites a year", value: "≈ 43,000", note: "with recurrent antivenom shortages" },
      { label: "Trachoma", value: "Eliminated and validated" },
    ],
    links: [who("nga", "Nigeria")],
    diseases: ["lymphatic-filariasis", "onchocerciasis", "schistosomiasis", "sth", "trachoma", "noma", "snakebite", "rabies", "leprosy", "buruli-ulcer", "yaws"],
    institutions: ["who", "msf", "noma-children-hospital", "zero-noma", "ntd-support-center"],
    terms: ["ntd", "mda", "elimination"],
  },
  {
    id: "dr-congo",
    name: "Democratic Republic of the Congo",
    codes: [iso2("CD"), iso3("COD"), geonames("203312")],
    tldr: "The last great stronghold of sleeping sickness and a centre of onchocerciasis, lymphatic filariasis and schistosomiasis.",
    summary:
      "The Democratic Republic of the Congo reports more than half of all human African trypanosomiasis cases in Africa — 330 of roughly 600 in 2024 — which makes its national programme the decisive one for eliminating the disease. It also carries a heavy burden of onchocerciasis, lymphatic filariasis, schistosomiasis, soil-transmitted helminths, leprosy and rabies. Its size, weak road network and areas of conflict make delivery and surveillance exceptionally difficult, and it was the first country to register acoziborole after its European approval, a signal of how central it is to the endgame.",
    asOf: "2026-09",
    region: "Central Africa",
    whoRegion: "African Region",
    burden:
      "Gambiense sleeping sickness in the west and centre, onchocerciasis and lymphatic filariasis across much of the country, schistosomiasis and soil-transmitted helminths widely, plus leprosy and rabies. Conflict in the east compounds every programme.",
    elimination:
      "Sleeping sickness is the country's signature target: cases have fallen from tens of thousands in the 1990s to a few hundred, and acoziborole — a single-dose oral cure registered in the DRC in June 2026 — is expected to accelerate the final push. No NTD has yet been certified eliminated nationally.",
    programme:
      "Active case-finding for sleeping sickness with mobile teams, community-directed ivermectin treatment for onchocerciasis, and large-scale preventive chemotherapy for the helminths and filariae, delivered with WHO, DNDi and NGO partners under difficult logistical conditions.",
    stats: [
      { label: "Sleeping sickness cases, 2024", value: "330", note: "more than half of Africa's total" },
      { label: "Acoziborole registered", value: "June 2026", note: "the first country to approve it" },
    ],
    links: [who("cod", "Democratic Republic of the Congo")],
    diseases: ["hat", "onchocerciasis", "lymphatic-filariasis", "schistosomiasis", "sth", "leprosy", "rabies"],
    institutions: ["who", "dndi"],
    terms: ["ntd", "mda", "elimination", "eot"],
  },
  {
    id: "india",
    name: "India",
    codes: [iso2("IN"), iso3("IND"), geonames("1269750")],
    tldr: "The world's largest leprosy and lymphatic filariasis burden, and the country that has driven kala-azar and trachoma to elimination.",
    summary:
      "India accounts for the largest single share of global leprosy and lymphatic filariasis, and it has been the site of some of the field's biggest successes: visceral leishmaniasis has been driven to the elimination threshold across the endemic districts of Bihar and neighbouring states, and trachoma has been eliminated and validated. It also carries substantial soil-transmitted helminth, schistosomiasis-adjacent and dengue burden, and a very large snakebite burden concentrated in rural agricultural communities.",
    asOf: "2026-09",
    region: "South Asia",
    whoRegion: "South-East Asia Region",
    burden:
      "Leprosy and lymphatic filariasis above 10,000 new cases each, historically the world's largest visceral leishmaniasis burden, soil-transmitted helminths widely, dengue expanding, and tens of thousands of snakebites a year.",
    elimination:
      "Trachoma eliminated and validated. Visceral leishmaniasis has reached the WHO elimination threshold across endemic areas, and Bangladesh's earlier validation put regional elimination on the map. Lymphatic filariasis elimination is advancing with triple-drug therapy. Leprosy remains the largest national burden in the world.",
    programme:
      "Mass drug administration for filariasis at enormous scale, kala-azar elimination built on rapid diagnostic tests and liposomal amphotericin B, a national snakebite programme with domestic antivenom manufacturing, and leprosy multidrug therapy through the public health system with the ICMR leading research.",
    stats: [
      { label: "Leprosy", value: "> 10,000 new cases a year", note: "the world's largest burden" },
      { label: "Kala-azar", value: "Elimination threshold reached" },
      { label: "Trachoma", value: "Eliminated and validated" },
    ],
    links: [who("ind", "India")],
    diseases: ["leprosy", "lymphatic-filariasis", "leishmaniasis", "trachoma", "sth", "dengue", "chikungunya", "snakebite", "rabies"],
    institutions: ["icmr", "who", "dndi"],
    terms: ["ntd", "mda", "elimination"],
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    codes: [iso2("ET"), iso3("ETH"), geonames("337996")],
    tldr: "A high-burden country across almost the whole NTD list, and the site of the world's first large-scale snakebite and podoconiosis work.",
    summary:
      "Ethiopia has one of the broadest NTD portfolios in Africa: soil-transmitted helminths and schistosomiasis at huge scale, trachoma and lymphatic filariasis, onchocerciasis, visceral leishmaniasis in the lowlands, and rabies and snakebite. It is also one of the countries where guinea worm still appears, with dog, cat and baboon infections complicating the final push. Its research institutions and field programmes are among the strongest on the continent, which is why it is a trial site for several new treatments.",
    asOf: "2026-09",
    region: "East Africa (Horn of Africa)",
    whoRegion: "African Region",
    burden:
      "Soil-transmitted helminths and schistosomiasis affect tens of millions; trachoma has been a major cause of blindness; visceral leishmaniasis is endemic in the lowlands; rabid dog bites and snakebite envenoming cause a steady toll; and dracunculiasis has not yet been interrupted because of animal infections.",
    elimination:
      "Trachoma elimination has advanced substantially. Guinea worm remains uneliminated, with animal infections in dogs, cats and baboons. Visceral leishmaniasis and lymphatic filariasis elimination programmes are under way.",
    programme:
      "School-based and community deworming at national scale, trachoma work through the SAFE strategy with donated azithromycin, and leishmaniasis treatment through a network of centres that has hosted trials of new oral regimens.",
    stats: [
      { label: "Children needing deworming", value: "Tens of millions" },
      { label: "Guinea worm", value: "Not yet eliminated", note: "animal infections persist" },
    ],
    links: [who("eth", "Ethiopia")],
    diseases: ["sth", "schistosomiasis", "trachoma", "lymphatic-filariasis", "onchocerciasis", "leishmaniasis", "rabies", "snakebite", "dracunculiasis"],
    institutions: ["who", "dndi", "tdr"],
    terms: ["ntd", "mda", "preventive-chemotherapy", "wash"],
  },
  {
    id: "brazil",
    name: "Brazil",
    codes: [iso2("BR"), iso3("BRA"), geonames("3469034")],
    tldr: "The country that eliminated lymphatic filariasis, developed a single-dose dengue vaccine, and carries most of the Americas' Chagas and leishmaniasis burden.",
    summary:
      "Brazil is the most consequential NTD country in the Americas. It was validated as having eliminated lymphatic filariasis as a public health problem in 2024, it has the region's largest Chagas disease burden alongside leishmaniasis in its many forms, and it developed and approved Butantan-DV, the world's first single-dose dengue vaccine. Leprosy remains a large burden, and schistosomiasis is endemic in the northeast. Its public research and manufacturing institutions — Fiocruz and Butantan — are among the few in the world that combine research, development and production for neglected diseases.",
    asOf: "2026-09",
    region: "South America",
    whoRegion: "Region of the Americas",
    burden:
      "Chagas disease in its chronic cardiac form, cutaneous and mucosal leishmaniasis, leprosy above 10,000 new cases a year, schistosomiasis in the northeast, dengue with record epidemics, and sporotrichosis emerging as an urban zoonosis.",
    elimination:
      "Verified by WHO in 2024 as having eliminated lymphatic filariasis as a public health problem — the twentieth country to do so. Chagas vector transmission has been interrupted across large areas, and the country is now focused on congenital transmission and oral outbreaks.",
    programme:
      "A universal public health system delivering free treatment, with Fiocruz producing diagnostics and medicines and Butantan manufacturing vaccines and antivenoms; the Unitaid-funded CUIDA Chagas project runs here on congenital transmission.",
    stats: [
      { label: "Lymphatic filariasis", value: "Eliminated, 2024", note: "the twentieth country validated" },
      { label: "Leprosy", value: "> 10,000 new cases a year" },
      { label: "Dengue vaccine", value: "Butantan-DV approved 2025", note: "world's first single-dose" },
    ],
    links: [who("bra", "Brazil")],
    diseases: ["chagas", "leishmaniasis", "leprosy", "lymphatic-filariasis", "dengue", "chikungunya", "schistosomiasis", "snakebite"],
    institutions: ["fiocruz", "butantan-institute", "paho", "cideim"],
    terms: ["ntd", "elimination", "eot", "congenital-chagas"],
  },
  {
    id: "sudan",
    name: "Sudan",
    codes: [iso2("SD"), iso3("SDN"), geonames("366755")],
    tldr: "The world centre of mycetoma and a major visceral leishmaniasis burden, whose health system has been devastated by war.",
    summary:
      "Sudan is the country with the greatest burden of mycetoma, home to the Mycetoma Research Centre at the University of Khartoum that was for decades the global hub for the disease. It also carries a large visceral leishmaniasis burden, schistosomiasis and soil-transmitted helminths, trachoma and snakebite. Since war began in 2023, clinics, research and surveillance have been disrupted, patients displaced, and the first randomised mycetoma trial reported into a country whose health system was collapsing around it.",
    asOf: "2026-09",
    region: "North-East Africa",
    whoRegion: "Eastern Mediterranean Region",
    burden:
      "Mycetoma concentrated in the mycetoma belt, visceral leishmaniasis in the east and south, schistosomiasis and soil-transmitted helminths along the Nile, trachoma, and snakebite in agricultural areas.",
    elimination:
      "No NTD is yet eliminated nationally. The war has reversed progress: treatment and follow-up interrupted, surveillance broken, and research paused. Mycetoma remains without a reliably effective antifungal.",
    programme:
      "Historically delivered through the Mycetoma Research Centre, national leishmaniasis centres and WHO-supported campaigns. Since 2023 the response depends heavily on humanitarian organisations and whatever services can be kept running.",
    stats: [
      { label: "Mycetoma", value: "The world's largest burden" },
      { label: "Mycetoma Research Centre", value: "Disrupted by war, 2023" },
    ],
    links: [who("sdn", "Sudan")],
    diseases: ["mycetoma", "leishmaniasis", "schistosomiasis", "sth", "trachoma", "snakebite"],
    institutions: ["mrc-khartoum", "who", "msf", "dndi"],
    terms: ["ntd", "one-health"],
  },
  {
    id: "south-sudan",
    name: "South Sudan",
    codes: [iso2("SS"), iso3("SSD"), geonames("7909807")],
    tldr: "One of the last countries with guinea worm, and a place where conflict and flooding make every NTD programme harder.",
    summary:
      "South Sudan is one of only three countries still reporting human guinea worm cases, with two in 2025, and it carries a heavy burden of visceral leishmaniasis, onchocerciasis, lymphatic filariasis, schistosomiasis, trachoma and soil-transmitted helminths. Conflict, displacement and seasonal flooding repeatedly interrupt programmes and move populations through areas where surveillance is absent, which is why it appears in almost every difficult-elimination story in the field.",
    asOf: "2026-09",
    region: "East Africa",
    whoRegion: "African Region",
    burden:
      "Guinea worm has not been interrupted; visceral leishmaniasis causes recurring outbreaks; onchocerciasis, lymphatic filariasis, schistosomiasis and soil-transmitted helminths are widespread; trachoma is a leading cause of blindness.",
    elimination:
      "Guinea worm remains the headline target and the hardest, because containment requires reaching every case in a country where reaching anywhere is difficult. Trachoma elimination has made progress where programmes have been sustained.",
    programme:
      "The Carter Center leads guinea worm containment with WHO and the Ministry of Health, using case rewards, water treatment and filters; preventive chemotherapy is delivered in windows when security allows.",
    stats: [
      { label: "Guinea worm, 2025", value: "2 human cases" },
      { label: "Key obstacle", value: "Conflict and flooding" },
    ],
    links: [who("ssd", "South Sudan")],
    diseases: ["dracunculiasis", "leishmaniasis", "onchocerciasis", "lymphatic-filariasis", "schistosomiasis", "trachoma", "sth"],
    institutions: ["carter-center", "who", "msf", "ntd-support-center"],
    terms: ["ntd", "elimination", "eot", "mda"],
  },
  {
    id: "tanzania",
    name: "Tanzania",
    codes: [iso2("TZ"), iso3("TZA"), geonames("149590")],
    tldr: "A high-burden East African country with strong research capacity on schistosomiasis, filariasis and vector control.",
    summary:
      "Tanzania carries lymphatic filariasis, onchocerciasis, schistosomiasis, soil-transmitted helminths, trachoma and leishmaniasis, and it hosts the Ifakara Health Institute, one of the world's leading centres for vector biology and field trials of vector-control tools. Its research capacity means several of the field's most important trials — from net technologies to drug combinations — have been run here, and it is a site for the eWHORM basket trial of oxfendazole.",
    asOf: "2026-09",
    region: "East Africa",
    whoRegion: "African Region",
    burden:
      "Lymphatic filariasis and onchocerciasis in many districts, schistosomiasis and soil-transmitted helminths at high prevalence, trachoma in the centre and north, and visceral and cutaneous leishmaniasis in focal areas.",
    elimination:
      "Trachoma elimination has been validated. Lymphatic filariasis and onchocerciasis programmes are progressing toward the elimination thresholds, and helminth control is at national scale.",
    programme:
      "Community-directed treatment and school deworming, trachoma work through SAFE, and a strong research pipeline led by the Ifakara Health Institute and the National Institute for Medical Research.",
    stats: [
      { label: "Trachoma", value: "Eliminated and validated" },
      { label: "Research role", value: "Hosts the Ifakara Health Institute" },
    ],
    links: [who("tza", "United Republic of Tanzania")],
    diseases: ["lymphatic-filariasis", "onchocerciasis", "schistosomiasis", "sth", "trachoma", "leishmaniasis"],
    institutions: ["ifakara", "who", "dndi"],
    terms: ["ntd", "mda", "vector-borne"],
  },
  {
    id: "cameroon",
    name: "Cameroon",
    codes: [iso2("CM"), iso3("CMR"), geonames("2233387")],
    tldr: "A Central African country where dog infections have made guinea worm harder to finish, and a centre of onchocerciasis and filariasis.",
    summary:
      "Cameroon has become the most important country for guinea worm animal infections, reporting the largest number of infected dogs in recent years after a lapse in surveillance allowed transmission to be re-established from across the Chad border. It also carries a heavy burden of onchocerciasis, lymphatic filariasis, schistosomiasis, soil-transmitted helminths and trachoma, and it was one of the countries where large-scale total community treatment for yaws was implemented.",
    asOf: "2026-09",
    region: "Central Africa",
    whoRegion: "African Region",
    burden:
      "Onchocerciasis and lymphatic filariasis across much of the country, schistosomiasis and soil-transmitted helminths widely, trachoma in the north, and guinea worm in dogs, with sporadic human cases.",
    elimination:
      "Guinea worm remains uneliminated, with the largest animal burden globally — a reminder that a programme can look finished and then be re-established. Yaws and trachoma programmes are active.",
    programme:
      "The Carter Center and WHO support guinea worm surveillance, tethering of dogs and water treatment; preventive chemotherapy campaigns cover the filariae and helminths, and yaws mass treatment has been delivered at scale in the Congo Basin.",
    stats: [
      { label: "Guinea worm in dogs, 2024", value: "310 infections", note: "the largest animal burden" },
      { label: "Setback", value: "Transmission re-established", note: "after a surveillance lapse" },
    ],
    links: [who("cmr", "Cameroon")],
    diseases: ["dracunculiasis", "onchocerciasis", "lymphatic-filariasis", "schistosomiasis", "sth", "trachoma", "yaws"],
    institutions: ["carter-center", "who"],
    terms: ["ntd", "elimination", "eot", "mda"],
  },
  {
    id: "ghana",
    name: "Ghana",
    codes: [iso2("GH"), iso3("GHA"), geonames("2300660")],
    tldr: "A West African country that has eliminated trachoma and runs strong Buruli ulcer, yaws and filariasis programmes.",
    summary:
      "Ghana has eliminated trachoma as a public health problem and is working toward elimination of lymphatic filariasis and yaws. It carries onchocerciasis and schistosomiasis, and it is one of the most important countries for Buruli ulcer research and treatment, with the Noguchi Memorial Institute for Medical Research providing laboratory capacity and field support for West Africa.",
    asOf: "2026-09",
    region: "West Africa",
    whoRegion: "African Region",
    burden: "Onchocerciasis and lymphatic filariasis across much of the country, schistosomiasis and soil-transmitted helminths widely, and Buruli ulcer in focal districts.",
    elimination:
      "Trachoma eliminated and validated. Lymphatic filariasis and yaws elimination programmes are under way, with mass treatment and case-finding.",
    programme:
      "Community-directed treatment for onchocerciasis and filariasis, active Buruli ulcer case-finding and treatment with rifampicin and clarithromycin, and yaws mass treatment, supported by the Noguchi Institute's laboratory network.",
    stats: [
      { label: "Trachoma", value: "Eliminated and validated" },
      { label: "Research", value: "Noguchi Institute, Accra" },
    ],
    links: [who("gha", "Ghana")],
    diseases: ["trachoma", "lymphatic-filariasis", "onchocerciasis", "schistosomiasis", "sth", "buruli-ulcer", "yaws"],
    institutions: ["noguchi", "who", "dndi"],
    terms: ["ntd", "elimination", "mda"],
  },
  {
    id: "uganda",
    name: "Uganda",
    codes: [iso2("UG"), iso3("UGA"), geonames("226074")],
    tldr: "The only country with both forms of sleeping sickness, and the first to treat a child with the new paediatric schistosomiasis medicine.",
    summary:
      "Uganda is unusual in having both Gambiense and Rhodesiense sleeping sickness, which makes its national programme a test of two different control problems at once. It also carries schistosomiasis, soil-transmitted helminths, onchocerciasis, trachoma and rabies, and it was where the first preschool-aged child was treated with arpraziquantel in 2025 — a milestone for the youngest children with schistosomiasis. Its vector-control and vaccine trials, including TSOL18 pig vaccination for cysticercosis, have shaped practice well beyond its borders.",
    asOf: "2026-09",
    region: "East Africa",
    whoRegion: "African Region",
    burden:
      "Both forms of human African trypanosomiasis, schistosomiasis and soil-transmitted helminths at high prevalence, onchocerciasis in the west, trachoma in the east, and porcine cysticercosis in pig-keeping areas.",
    elimination:
      "Uganda has interrupted Rhodesiense transmission in several foci and is working toward elimination of the Gambiense form. Trachoma elimination has advanced, and the country is a leading site for helminth control research.",
    programme:
      "Tsetse control with tiny targets alongside case-finding for sleeping sickness, mass praziquantel treatment for schistosomiasis including the new paediatric formulation, and One Health work on Taenia solium with pig vaccination and oxfendazole.",
    stats: [
      { label: "First arpraziquantel patient", value: "2025", note: "the first preschool child treated" },
      { label: "Sleeping sickness", value: "Both forms present" },
    ],
    links: [who("uga", "Uganda")],
    diseases: ["hat", "schistosomiasis", "sth", "onchocerciasis", "trachoma", "rabies", "taeniasis-cysticercosis"],
    institutions: ["who", "dndi"],
    terms: ["ntd", "elimination", "eot", "one-health"],
  },
  {
    id: "malawi",
    name: "Malawi",
    codes: [iso2("MW"), iso3("MWI"), geonames("927384")],
    tldr: "A southern African country that has eliminated trachoma, lymphatic filariasis and is pressing on with schistosomiasis control.",
    summary:
      "Malawi has been one of the most successful southern African countries in NTD elimination, validated for both trachoma and lymphatic filariasis as public health problems. Schistosomiasis and soil-transmitted helminths remain widespread, particularly around Lake Malawi, and the country's community health worker networks are among the strongest in the region — which is why its programmes have performed well even with limited resources.",
    asOf: "2026-09",
    region: "Southern Africa",
    whoRegion: "African Region",
    burden:
      "Schistosomiasis is a major burden in lakeshore districts, soil-transmitted helminths are widespread, and trachoma and lymphatic filariasis were endemic until elimination.",
    elimination:
      "Trachoma and lymphatic filariasis have both been eliminated as public health problems and validated by WHO, making Malawi one of the few countries to have cleared two NTDs.",
    programme:
      "Community-directed preventive chemotherapy delivered through health surveillance assistants, schistosomiasis treatment for school-aged children and adults around the lake, and sustained surveillance after elimination.",
    stats: [
      { label: "NTDs eliminated", value: "2", note: "trachoma and lymphatic filariasis" },
      { label: "Delivery model", value: "Health surveillance assistants" },
    ],
    links: [who("mwi", "Malawi")],
    diseases: ["trachoma", "lymphatic-filariasis", "schistosomiasis", "sth"],
    institutions: ["who", "ntd-support-center"],
    terms: ["ntd", "elimination", "eot", "mda"],
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    codes: [iso2("BD"), iso3("BGD"), geonames("1210997")],
    tldr: "The first country in the world validated for eliminating visceral leishmaniasis, and a pioneer of dengue and cholera research.",
    summary:
      "Bangladesh was the first country in the world to be validated as having eliminated visceral leishmaniasis as a public health problem, in 2023, capping a two-decade regional effort built on rapid diagnostic testing and single-dose liposomal amphotericin B. It has also eliminated lymphatic filariasis and trachoma. Dengue is a growing problem, and icddr,b in Dhaka is one of the world's leading institutions for enteric and arboviral research.",
    asOf: "2026-09",
    region: "South Asia",
    whoRegion: "South-East Asia Region",
    burden:
      "Visceral leishmaniasis and post-kala-azar dermal leishmaniasis were endemic across 45 districts; lymphatic filariasis has been eliminated; dengue has caused record urban epidemics; soil-transmitted helminths remain widespread.",
    elimination:
      "First country validated for eliminating visceral leishmaniasis as a public health problem (2023). Trachoma and lymphatic filariasis also eliminated and validated.",
    programme:
      "Kala-azar elimination built on rK39 rapid tests, single-dose liposomal amphotericin B and active case-finding, with post-elimination surveillance for PKDL and relapse; dengue response through Aedes control and clinical care.",
    stats: [
      { label: "Visceral leishmaniasis", value: "Eliminated, 2023", note: "the world's first validation" },
      { label: "NTDs eliminated", value: "3", note: "VL, trachoma and lymphatic filariasis" },
    ],
    links: [who("bgd", "Bangladesh")],
    diseases: ["leishmaniasis", "lymphatic-filariasis", "trachoma", "dengue", "chikungunya", "sth"],
    institutions: ["icddrb", "who", "dndi"],
    terms: ["ntd", "elimination", "eot"],
  },
  {
    id: "nepal",
    name: "Nepal",
    codes: [iso2("NP"), iso3("NPL"), geonames("1282988")],
    tldr: "A country that has eliminated trachoma and visceral leishmaniasis and is close on lymphatic filariasis, despite difficult terrain.",
    summary:
      "Nepal has reached the elimination threshold for trachoma, visceral leishmaniasis and lymphatic filariasis, which is a notable achievement for a country whose mountainous terrain makes delivery hard. Leprosy and soil-transmitted helminths remain, and snakebite envenoming is a significant and under-recognised cause of death in rural agricultural districts.",
    asOf: "2026-09",
    region: "South Asia",
    whoRegion: "South-East Asia Region",
    burden:
      "Trachoma, visceral leishmaniasis and lymphatic filariasis were endemic and have reached elimination targets; leprosy and soil-transmitted helminths persist; snakebite is a leading cause of preventable rural death.",
    elimination:
      "Validated for trachoma and visceral leishmaniasis, reaching the lymphatic filariasis target in 2023. Post-elimination surveillance is the current focus.",
    programme:
      "Mass drug administration for filariasis, kala-azar case-finding and treatment, leprosy multidrug therapy through the public system, and snakebite care through a national protocol and antivenom distribution.",
    stats: [
      { label: "NTDs at elimination target", value: "3", note: "trachoma, VL, lymphatic filariasis" },
      { label: "Ongoing burden", value: "Leprosy and snakebite" },
    ],
    links: [who("npl", "Nepal")],
    diseases: ["trachoma", "leishmaniasis", "lymphatic-filariasis", "leprosy", "sth", "snakebite"],
    institutions: ["who", "dndi"],
    terms: ["ntd", "elimination", "eot"],
  },
  {
    id: "indonesia",
    name: "Indonesia",
    codes: [iso2("ID"), iso3("IDN"), geonames("1643084")],
    tldr: "The country with the third-largest leprosy burden, and a vast archipelago where lymphatic filariasis and dengue are endemic.",
    summary:
      "Indonesia reports more than 10,000 new leprosy cases a year — one of only three countries to do so — and faces lymphatic filariasis, soil-transmitted helminths, schistosomiasis in a single valley in Sulawesi, dengue and yaws. Its geography, with thousands of inhabited islands, makes elimination programmes logistically formidable, and it is one of the countries where the Brugia species of filarial worm is important, which is why a Brugia-specific diagnostic was developed.",
    asOf: "2026-09",
    region: "South-East Asia",
    whoRegion: "South-East Asia Region",
    burden:
      "Leprosy above 10,000 new cases a year, lymphatic filariasis in many provinces including Brugia species, dengue with frequent outbreaks, soil-transmitted helminths widely, and yaws in eastern provinces.",
    elimination:
      "Regional elimination of lymphatic filariasis has been achieved in some provinces but not nationally; yaws remains a target; schistosomiasis persists in the Lake Lindu valley despite long control efforts.",
    programme:
      "Annual mass drug administration for filariasis in endemic districts, leprosy multidrug therapy with contact screening and rifampicin prophylaxis, and yaws mass treatment in the east, delivered across a highly decentralised health system.",
    stats: [
      { label: "Leprosy", value: "> 10,000 new cases a year" },
      { label: "Filarial species", value: "Includes Brugia malayi" },
    ],
    links: [who("idn", "Indonesia")],
    diseases: ["leprosy", "lymphatic-filariasis", "dengue", "chikungunya", "sth", "yaws", "schistosomiasis"],
    institutions: ["who", "find-dx"],
    terms: ["ntd", "mda", "vector-borne"],
  },
  {
    id: "yemen",
    name: "Yemen",
    codes: [iso2("YE"), iso3("YEM"), geonames("69543")],
    tldr: "A country at war that has nonetheless eliminated lymphatic filariasis and trachoma, while fighting leishmaniasis and dengue.",
    summary:
      "Yemen has eliminated lymphatic filariasis and trachoma as public health problems despite a devastating conflict, which says as much about the resilience of its health workers as about the interventions. Cutaneous leishmaniasis is a major burden — the conflict has produced large outbreaks in displacement settings — and dengue and soil-transmitted helminths are widespread. It is one of the clearest examples of a country achieving elimination targets while its health system is under extreme strain.",
    asOf: "2026-09",
    region: "Middle East (Arabian Peninsula)",
    whoRegion: "Eastern Mediterranean Region",
    burden: "Cutaneous leishmaniasis at high incidence, particularly in conflict-affected areas; dengue outbreaks; soil-transmitted helminths; schistosomiasis in focal areas.",
    elimination:
      "Trachoma and lymphatic filariasis eliminated and validated, achieved during conflict. Leishmaniasis and dengue remain major and worsening problems.",
    programme:
      "Mass drug administration and SAFE delivered through whatever health structures remain functional, with humanitarian partners filling gaps; leishmaniasis treatment is constrained by supply and access.",
    stats: [
      { label: "NTDs eliminated", value: "2", note: "during active conflict" },
      { label: "Ongoing burden", value: "Cutaneous leishmaniasis, dengue" },
    ],
    links: [who("yem", "Yemen")],
    diseases: ["lymphatic-filariasis", "trachoma", "leishmaniasis", "dengue", "chikungunya", "sth"],
    institutions: ["who", "msf"],
    terms: ["ntd", "elimination", "eot"],
  },
  {
    id: "chad",
    name: "Chad",
    codes: [iso2("TD"), iso3("TCD"), geonames("2434508")],
    tldr: "The epicentre of guinea worm animal infections, where the parasite appears to use fish and frogs as paratenic hosts.",
    summary:
      "Chad is the country where guinea worm eradication has become hardest to finish. It reports the largest number of human cases of any country and, until recently, the largest animal burden; infections have been linked to fish and frogs acting as paratenic hosts, which breaks the assumption that transmission runs only through drinking water. It has also made genuine progress, with animal infections falling for six consecutive years. The country carries schistosomiasis, soil-transmitted helminths and trachoma as well.",
    asOf: "2026-09",
    region: "Central Africa (Sahel)",
    whoRegion: "African Region",
    burden:
      "Guinea worm in people and dogs, with an unexplained fish and frog transmission route; schistosomiasis and soil-transmitted helminths widely; trachoma in parts of the country.",
    elimination:
      "Guinea worm is not eliminated and Chad is the main obstacle to global eradication. Chad has reported six consecutive years of progress reducing animal infections.",
    programme:
      "Intensive guinea worm surveillance with case containment, cash rewards, water treatment and dog tethering, run by the Carter Center and WHO with the Ministry of Health; preventive chemotherapy for the helminths.",
    stats: [
      { label: "Human guinea worm, 2025", value: "4 cases", note: "the largest of any country" },
      { label: "Animal infections", value: "Falling for six years" },
      { label: "Transmission puzzle", value: "Fish and frog paratenic hosts" },
    ],
    links: [who("tcd", "Chad")],
    diseases: ["dracunculiasis", "schistosomiasis", "sth", "trachoma"],
    institutions: ["carter-center", "who", "cdc"],
    terms: ["ntd", "elimination", "eot", "paratenic-host", "one-health"],
  },
  {
    id: "angola",
    name: "Angola",
    codes: [iso2("AO"), iso3("AGO"), geonames("3351879")],
    tldr: "A country where guinea worm persists in dogs, alongside onchocerciasis, schistosomiasis and a heavy rabies burden.",
    summary:
      "Angola is one of the countries still reporting guinea worm infections, predominantly in dogs, which keeps it in the small group standing between the world and eradication. It also carries onchocerciasis, schistosomiasis, lymphatic filariasis, soil-transmitted helminths, leprosy and a substantial rabies burden from dog bites. Its health system is recovering from decades of conflict, and much of its NTD work depends on partnership support.",
    asOf: "2026-09",
    region: "Southern Africa",
    whoRegion: "African Region",
    burden:
      "Guinea worm in dogs, onchocerciasis and lymphatic filariasis in focal areas, schistosomiasis and soil-transmitted helminths widely, leprosy, and a high rabies burden.",
    elimination:
      "Guinea worm not eliminated. Onchocerciasis transmission has been interrupted in some areas but elimination is not yet verified. Trachoma has been eliminated and validated.",
    programme:
      "Guinea worm surveillance and containment with the Carter Center and WHO, community-directed ivermectin treatment for onchocerciasis, and preventive chemotherapy for the helminths, with support from the NTD Support Center.",
    stats: [
      { label: "Guinea worm", value: "Persists in dogs" },
      { label: "Trachoma", value: "Eliminated and validated" },
    ],
    links: [who("ago", "Angola")],
    diseases: ["dracunculiasis", "onchocerciasis", "schistosomiasis", "lymphatic-filariasis", "sth", "leprosy", "rabies"],
    institutions: ["carter-center", "who", "ntd-support-center"],
    terms: ["ntd", "elimination", "eot", "one-health"],
  },
  {
    id: "bolivia",
    name: "Bolivia",
    codes: [iso2("BO"), iso3("BOL"), geonames("3923057")],
    tldr: "A country at the centre of Chagas disease, and the setting for long-running fascioliasis work on the Altiplano.",
    summary:
      "Bolivia has the highest Chagas disease prevalence in the world and is one of the countries where congenital transmission is the focus of elimination efforts, including through the Unitaid-funded CUIDA Chagas project. Cutaneous and mucosal leishmaniasis are endemic in the lowlands, and the Altiplano has been one of the most important settings for human fascioliasis research and for the triclabendazole treatment failures that now worry the field.",
    asOf: "2026-09",
    region: "Andean South America",
    whoRegion: "Region of the Americas",
    burden:
      "Chagas disease at the highest prevalence globally, with vector, congenital and oral transmission; cutaneous and mucosal leishmaniasis; fascioliasis hyperendemic on the Altiplano; dengue in the lowlands.",
    elimination:
      "Chagas vector transmission has been interrupted across much of the country, and the national focus has shifted to congenital transmission and oral outbreaks. Echinococcosis is also present.",
    programme:
      "House spraying and housing improvement against triatomine bugs, blood-donor screening, and congenital screening and treatment of newborns through the CUIDA Chagas project with PAHO and Unitaid.",
    stats: [
      { label: "Chagas", value: "The world's highest prevalence" },
      { label: "Fascioliasis", value: "Hyperendemic on the Altiplano" },
    ],
    links: [who("bol", "Bolivia (Plurinational State of)")],
    diseases: ["chagas", "leishmaniasis", "foodborne-trematodiases", "dengue", "chikungunya", "echinococcosis"],
    institutions: ["paho", "cuida-chagas", "who"],
    terms: ["ntd", "elimination", "eot", "congenital-chagas"],
  },
  {
    id: "philippines",
    name: "Philippines",
    codes: [iso2("PH"), iso3("PHL"), geonames("1694008")],
    tldr: "An archipelago where schistosomiasis, lymphatic filariasis, leprosy and rabies are all endemic across thousands of islands.",
    summary:
      "The Philippines carries schistosomiasis in the Visayas and Mindanao, lymphatic filariasis in many provinces, leprosy and soil-transmitted helminths, and a significant rabies burden addressed through dog vaccination and post-exposure prophylaxis. Yaws was historically endemic and is no longer a major problem. Its geography makes uniform coverage difficult and gives its programmes a strongly decentralised character.",
    asOf: "2026-09",
    region: "South-East Asia",
    whoRegion: "Western Pacific Region",
    burden:
      "Schistosomiasis japonica in focal provinces, lymphatic filariasis in many provinces, leprosy and soil-transmitted helminths, and rabies causing a substantial number of deaths each year.",
    elimination:
      "Lymphatic filariasis elimination is progressing province by province; schistosomiasis remains endemic in 28 provinces; rabies elimination is a national target with dog vaccination and PEP.",
    programme:
      "Schistosomiasis mass treatment, filariasis MDA, leprosy multidrug therapy with contact prophylaxis, and a national rabies programme combining dog vaccination with free post-exposure prophylaxis.",
    stats: [
      { label: "Schistosomiasis", value: "Endemic in 28 provinces" },
      { label: "Rabies", value: "National elimination target" },
    ],
    links: [who("phl", "Philippines")],
    diseases: ["schistosomiasis", "lymphatic-filariasis", "leprosy", "sth", "rabies", "dengue", "chikungunya"],
    institutions: ["who"],
    terms: ["ntd", "mda", "elimination", "one-health"],
  },
  {
    id: "papua-new-guinea",
    name: "Papua New Guinea",
    codes: [iso2("PG"), iso3("PNG"), geonames("2088628")],
    tldr: "The country where azithromycin-resistant yaws emerged, threatening the eradication strategy.",
    summary:
      "Papua New Guinea has one of the world's largest yaws burdens and is the place where azithromycin-resistant yaws was reported, with evidence of local transmission of resistant strains — the single most serious threat to the global eradication strategy. It also carries lymphatic filariasis, leprosy, soil-transmitted helminths, trachoma, a heavy burden of snakebite and Buruli ulcer, across terrain and a health system that make delivery very difficult.",
    asOf: "2026-09",
    region: "Melanesia (Pacific)",
    whoRegion: "Western Pacific Region",
    burden:
      "Yaws at high prevalence including resistant strains, lymphatic filariasis, leprosy, soil-transmitted helminths, trachoma (now eliminated), Buruli ulcer, and one of the highest snakebite burdens in the Pacific.",
    elimination:
      "Trachoma has been eliminated and validated. Yaws remains a major burden and is the principal obstacle to global eradication because of azithromycin resistance.",
    programme:
      "Yaws total community treatment with azithromycin, filariasis MDA, leprosy multidrug therapy, and snakebite care that depends on antivenom availability and rapid access to health facilities.",
    stats: [
      { label: "Yaws", value: "Resistant strains circulating", note: "reported 2018" },
      { label: "Trachoma", value: "Eliminated and validated" },
    ],
    links: [who("png", "Papua New Guinea")],
    diseases: ["yaws", "lymphatic-filariasis", "leprosy", "sth", "trachoma", "snakebite", "buruli-ulcer"],
    institutions: ["who", "msf"],
    terms: ["ntd", "elimination", "eot", "macrolide-resistance"],
  },
  {
    id: "kenya",
    name: "Kenya",
    codes: [iso2("KE"), iso3("KEN"), geonames("192950")],
    tldr: "A country that eliminated sleeping sickness as a public health problem in 2025 and leads on vector control research.",
    summary:
      "Kenya was validated by WHO in August 2025 as having eliminated human African trypanosomiasis as a public health problem, one of only four countries to have reached that status. It also carries visceral leishmaniasis, schistosomiasis, soil-transmitted helminths, lymphatic filariasis and dengue, and its research and vector-control institutions are central to the East African response. It has used triple-drug therapy to accelerate its lymphatic filariasis programme.",
    asOf: "2026-09",
    region: "East Africa",
    whoRegion: "African Region",
    burden:
      "Rhodesiense sleeping sickness in the west until recently; visceral leishmaniasis in arid northern counties; schistosomiasis and soil-transmitted helminths widely; lymphatic filariasis in coastal counties; dengue in Mombasa and the northeast.",
    elimination:
      "Validated in August 2025 as having eliminated human African trypanosomiasis as a public health problem. Lymphatic filariasis elimination is accelerating with triple-drug therapy.",
    programme:
      "Tsetse control alongside case-finding for sleeping sickness, triple-drug MDA for filariasis, deworming at national scale, and visceral leishmaniasis diagnosis and treatment with rK39 testing and combination therapy.",
    stats: [
      { label: "Sleeping sickness", value: "Eliminated as a public health problem, 2025" },
      { label: "Filariasis", value: "Triple-drug therapy (IDA) used" },
    ],
    links: [who("ken", "Kenya")],
    diseases: ["hat", "leishmaniasis", "schistosomiasis", "sth", "lymphatic-filariasis", "dengue", "chikungunya"],
    institutions: ["kemi", "who", "dndi"],
    terms: ["ntd", "elimination", "eot"],
  },
];
