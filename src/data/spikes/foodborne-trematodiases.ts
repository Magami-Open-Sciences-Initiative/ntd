import type { Spike } from "../merge";

export const foodborneTrematodiasesSpike: Spike = {
  tldr: "Flukes caught from raw fish, crab and watercress; two of them cause bile-duct cancer, and the only drug for fascioliasis is losing potency after decades of use in livestock.",

  summary:
    "This group includes the liver flukes Clonorchis and Opisthorchis, the lung fluke Paragonimus and Fasciola, the large liver fluke of livestock. People are infected by eating raw or undercooked freshwater fish, crabs, or aquatic plants such as watercress. The two liver flukes are classified as Group 1 carcinogens: chronic infection inflames the bile ducts and causes cholangiocarcinoma, a cancer with a very poor prognosis, which makes these worms a cancer risk as well as a parasitic disease. Praziquantel treats clonorchiasis and opisthorchiasis; triclabendazole treats fascioliasis and paragonimiasis and is donated by Novartis through WHO. The serious warning is resistance: widespread triclabendazole use in livestock has driven treatment failures in humans, with cure rates falling in cohorts in Peru and Bolivia, and there is no established alternative. For a disease whose control depends on a single drug, that is the central problem of the next decade.",
  stats: [
    {
      label: "People infected",
      value: "> 56 million",
      number: 56,
      unit: "million people",
      geography: "global",
      note: "all foodborne trematodes combined (WHO)",
      source: { label: "WHO — foodborne trematodiases (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
    },
    {
      label: "People at risk",
      value: "> 750 million",
      number: 750,
      unit: "million people",
      geography: "global",
      source: { label: "WHO — foodborne trematodiases (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
    },
    { label: "Species that infect people", value: "> 100", number: 100, unit: "species", source: { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" } },
    { label: "Cancer link", value: "Group 1 carcinogen", note: "Clonorchis sinensis and Opisthorchis viverrini cause cholangiocarcinoma; O. felineus not classified", source: { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" } },
    { label: "Triclabendazole donated", value: "1.15 million patients", note: "2006–2016, via WHO (Novartis Egaten donation continues)", source: { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" } },
    { label: "Treatment", value: "Praziquantel TID 2–3 days or 40 mg/kg single dose (liver flukes); triclabendazole 10 mg/kg single dose (fascioliasis)", note: "only fascioliasis/paragonimiasis preventive chemotherapy is single-dose", source: { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" } },
    { label: "Burden", value: "> 2 million DALYs/year", number: 2000000, unit: "DALYs/year", note: "≈200,000 illnesses, >7,000 deaths (WHO FERG 2015)", source: { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" } },
  ],

  timeline: [
    {
      date: "1997",
      text: "Triclabendazole is approved for human use in Egypt, followed by France in 2002.",
      refs: ["triclabendazole"],
    },
    {
      date: "2006",
      text: "A WHO-guided donation programme begins; Novartis provides triclabendazole free for fascioliasis in endemic countries.",
      refs: ["triclabendazole", "who"],
    },
    {
      date: "2019",
      text: "The FDA approves triclabendazole (Egaten) for fascioliasis in patients aged six and over.",
      refs: ["triclabendazole"],
    },
    {
      date: "2021",
      text: "A cohort of children in highland Peru shows low cure rates with triclabendazole, especially after a single dose — evidence of emerging treatment failure; later work shows 74% can still be cured with repeated doses, so 'resistance' needs biomarkers.",
      refs: ["triclabendazole", "nitazoxanide"],
    },
    {
      date: "2023",
      text: "A genetic cross maps triclabendazole resistance in Fasciola hepatica to a single 3.2 Mbp dominantly inherited locus — the first genome-wide resistance mapping in the parasite.",
      refs: ["triclabendazole", "fasciola-cathepsin-l"],
    },
    {
      date: "2026",
      text: "Recruiting trials test the two escape routes: tribendimidine/praziquantel/albendazole head-to-head for clonorchiasis in Guangxi, and paediatric arpraziquantel dose-ranging for Opisthorchis in children.",
      refs: ["tribendimidine", "praziquantel", "arpraziquantel", "tribendimidine-clonorchiasis-guangxi", "arpraziquantel-opisthorchis-children"],
    },
    {
      date: "2020s",
      text: "Thailand's cholangiocarcinoma screening programme links liver-fluke control to cancer surveillance, treating the cancer at the end of the infection.",
      refs: ["cascap", "cholangiocarcinoma"],
    },
  ],

  sections: [
    {
      id: "cancer",
      title: "The cancer at the end of the infection",
      body:
        "Cholangiocarcinoma is a cancer of the bile ducts with a grim prognosis, and in parts of East and Southeast Asia chronic infection with Clonorchis or Opisthorchis is one of its leading causes — which is why both are classified as Group 1 carcinogens. The mechanism is chronic inflammation: adult flukes living in the bile ducts provoke years of irritation, fibrosis and cell turnover that eventually become malignant.\n\nThis turns a parasitic infection into a cancer-control problem. In northeast Thailand, where Opisthorchis is endemic and raw fish dishes are traditional, the response has been a combined programme of drug treatment, food-safety education and ultrasound screening for early bile-duct changes — the reasoning being that by the time a patient has symptoms, the cancer is usually advanced. It is one of the few places in the NTD field where parasite control and oncology are deliberately run together.",
      refs: ["cholangiocarcinoma", "cascap", "praziquantel", "who"],
    },
    {
      id: "resistance",
      title: "Two drugs, one of them failing",
      body:
        "Praziquantel treats clonorchiasis and opisthorchiasis, and triclabendazole treats fascioliasis and paragonimiasis. For fascioliasis there is no established alternative — nitazoxanide, the only plausible substitute, cured only about 30% of patients in one Egyptian series, and was ineffective in a Peruvian case series of patients who had already failed triclabendazole.\n\nThe resistance problem has a clear origin. Triclabendazole has been used intensively in livestock for decades, and Fasciola in sheep and cattle developed resistance; a 2023 genetic cross mapped it to a single 3.2 Mbp dominantly inherited locus. Human infections show reduced cure rates (11.6% failure in Cusco children), particularly after a single dose, and juvenile flukes are intrinsically less susceptible than adults — but a Peruvian salvage cohort cured 74% with repeated doses, so 'resistance' is over-diagnosed without biomarkers. The response is better stewardship in animals, higher or repeated human doses, and second drugs: tribendimidine (single 400 mg, ~90% cure in O. viverrini) is now in a head-to-head Phase 4 against praziquantel and albendazole for clonorchiasis, and paediatric arpraziquantel is dose-ranging in Opisthorchis-infected children.",
      refs: ["triclabendazole", "nitazoxanide", "praziquantel", "tribendimidine", "arpraziquantel", "funding-gap"],
    },
    {
      id: "donation",
      title: "The donation and who it reaches",
      body:
        "Novartis donates triclabendazole to WHO for the treatment of fascioliasis and paragonimiasis in endemic countries; between 2006 and 2016 the programme treated about 1.15 million patients. WHO recommends preventive chemotherapy with a single 10 mg/kg dose in subdistricts, villages or communities where cases cluster, and recommends treating all confirmed cases — and suspected cases in endemic areas.\n\nThe limit of a donated drug is that it reaches only the people a health system can find. Fascioliasis is concentrated in Andean communities, the Nile Delta and parts of Asia and Iran, often in places with weak primary care; paragonimiasis is patchy and under-recognised. Increasing the donation's impact is less about the drug than about diagnosis and distribution.",
      refs: ["triclabendazole", "who", "access-and-pricing", "mass-drug-administration"],
    },
    {
      id: "food-safety",
      title: "Food safety is the intervention",
      body:
        "Every one of these infections is acquired by eating something. Raw freshwater fish dishes, undercooked crab, and watercress or other aquatic plants fertilised with human or animal waste are the routes. That makes the most durable intervention culinary and agricultural rather than medical: cooking fish thoroughly, freezing it where appropriate, preventing untreated waste from reaching ponds, and managing livestock so that Fasciola does not cycle between cattle, snails and plants.\n\nFood-safety education is cheap and effective in principle, but it asks people to change what they eat, and traditional raw-fish dishes are strongly held. Programmes that succeed pair treatment with local engagement — working through markets, restaurants and schools rather than issuing advice — and accept that behaviour change is slower than drug administration.",
      refs: ["wash-interventions", "one-health-ntd-integration", "community-health-workers"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis: crude and improving",
      body:
        "Most infections are confirmed by finding eggs in stool, which is insensitive when the worm burden is low and cannot distinguish past from current infection reliably. For Fasciola, eggs appear only after the fluke matures, so early infection is missed; antigen tests (coproantigen and urine antigen assays) have been developed and perform better in the acute phase, and serology is useful epidemiologically but stays positive after cure. Imaging — ultrasound and CT — matters for the bile-duct and lung complications, and for cancer surveillance.\n\nAs with the other helminthiases, the diagnostic gap bites hardest exactly where decisions are most consequential: telling whether a community's transmission has actually stopped, and detecting the early bile-duct changes that precede cholangiocarcinoma.",
      refs: ["diagnostics-gap", "molecular-pcr", "cholangiocarcinoma", "sensitivity-specificity"],
    },
  ],

  drugs: ["triclabendazole", "praziquantel", "tribendimidine", "nitazoxanide"],
  trials: ["tribendimidine-clonorchiasis-guangxi", "arpraziquantel-opisthorchis-children", "egaten-fascioliasis-safety"],
  targets: ["fasciola-cathepsin-l"],
  institutions: ["who", "cascap"],
  terms: ["cholangiocarcinoma"],
};
