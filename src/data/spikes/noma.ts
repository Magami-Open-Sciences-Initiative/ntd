import type { Spike } from "../merge";

export const nomaSpike: Spike = {
  tldr: "A gangrenous infection of the mouth and face in severely malnourished children that can be stopped with antibiotics if caught early, and destroys a face within days if it is not.",

  summary:
    "Noma begins as a small sore inside the mouth in a child weakened by malnutrition, poor oral hygiene and disease, and can destroy the cheek, lips, nose and jaw within days. It is not caused by a single pathogen but by the mouth's own bacteria in a child whose defences have collapsed, and it is a marker of extreme deprivation rather than a disease that spreads. Most children who develop it die without treatment; survivors are left with severe facial disfigurement, difficulty eating and speaking, and deep social exclusion. The picture has changed in three ways recently: WHO recognised noma as a neglected tropical disease in December 2023, the twenty-first on its list, which brought the first global framework for surveillance and care; researchers identified a previously unknown bacterium strongly associated with the disease, opening a path to earlier diagnosis; and the world's largest surgical programme, in Sokoto, Nigeria, has continued to rebuild faces while calling for the early detection that would make surgery unnecessary.",
  stats: [
    {
      label: "New cases a year",
      value: "140,000",
      number: 140000,
      unit: "cases",
      year: 1998,
      geography: "global",
      note: "WHO estimate, with prevalence estimated at 770,000; these are the latest WHO burden estimates",
      source: { label: "WHO — noma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/noma" },
    },
    { label: "Age affected", value: "Children aged 2–6" },
    {
      label: "Fatality",
      value: "≈ 90%",
      unit: "%",
      note: "without treatment; recent evidence suggests it can be lower and is greatly reduced by early treatment",
      source: { label: "WHO — noma (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/noma" },
    },
    { label: "Added to the WHO NTD list", value: "15 December 2023", note: "the twenty-first NTD" },
    {
      label: "Surgery in Sokoto, Nigeria",
      value: "1,203 operations for 837 patients",
      note: "MSF programme, since 2014",
    },
    { label: "Early treatment", value: "Antibiotics", note: "can stop the disease before it destroys tissue" },
  ],

  timeline: [
    {
      date: "2023",
      text: "On 15 December, WHO officially recognises noma as a neglected tropical disease, with Nigeria as the lead sponsor country.",
      refs: ["who", "noma-children-hospital"],
    },
    {
      date: "2024",
      text: "A WHO and IDDO scoping review of the noma evidence base calls for standardised reporting, increased surveillance and better early detection.",
      refs: ["who", "iddo"],
    },
    {
      date: "2024",
      text: "Researchers identify a previously unknown bacterium strongly associated with noma and show the disease severely disrupts the oral microbiome.",
      refs: ["lstm", "molecular-pcr"],
    },
    {
      date: "2025",
      text: "The ZeroNoma initiative marks World NTD Day, and MSF completes another round of reconstructive surgery for survivors in Sokoto, Nigeria.",
      refs: ["zero-noma", "msf"],
    },
    {
      date: "2026",
      text: "A review of antimicrobial resistance in noma control warns that early broad-spectrum antibiotic treatment is essential and under-resourced.",
      refs: ["who"],
    },
  ],

  sections: [
    {
      id: "recognition",
      title: "Recognition, and what it changes",
      body:
        "Noma was for most of its history a disease of the poorest people in the world that appeared in no global health statistics. WHO's decision in December 2023 to add it to the neglected tropical disease list changed its administrative status: it now has a place in the NTD road map, a reporting obligation, and a route to funding and research that did not exist before. Nigeria led the request, which is fitting, since Nigerian surgeons and hospitals carry much of the world's noma burden.\n\nRecognition does not treat a single patient. What it does is make the disease countable, and being countable is the precondition for everything else — surveillance, funding, trials, and the training of clinicians who might otherwise never see a case.",
      refs: ["who", "zero-noma", "surveillance-data-gap"],
    },
    {
      id: "bacterium",
      title: "The new bacterium and the microbiome",
      body:
        "Noma has no single causative organism, which has always made it hard to study: it is a polymicrobial process in a malnourished child. In 2024 researchers identified a previously unknown bacterium strongly associated with the disease and found that noma profoundly disrupts the oral microbiome as a whole. That matters because it suggests a possible diagnostic marker — a way to recognise the disease before it becomes gangrenous — and because it reframes noma as a microbial ecology problem rather than a simple infection.\n\nAny diagnostic would be valuable. Noma is treatable at the stage when it is still necrotising gingivitis, with oral hygiene, debridement, antibiotics and chlorhexidine, but by the time the face is swollen and gangrenous, treatment can only limit the damage. A test that identified children at the earliest stage would change the outcome rather than just the statistics.",
      refs: ["lstm", "molecular-pcr", "diagnostics-gap", "ai-microscopy"],
    },
    {
      id: "surgery",
      title: "Rebuilding faces in Sokoto",
      body:
        "The largest noma programme in the world is in Sokoto, northern Nigeria, where the Noma Children's Hospital and Médecins Sans Frontières have run surgical missions since 2014. Over that period MSF's teams have performed more than 1,200 operations on over 800 patients, reconstructing cheeks, lips, noses and jaws in multiple stages, and providing nutrition, physiotherapy and speech therapy alongside surgery. Another round in 2025 treated 55 survivors.\n\nThe surgical need is enormous and permanent: every year of untreated cases adds survivors who need reconstructive surgery for decades, and the capacity to do that complex work exists in very few places. This is why the field's emphasis has moved toward prevention and early detection — not to replace surgery, but because a disease prevented is a face never destroyed.",
      refs: ["msf", "noma-children-hospital", "stigma-and-disability", "community-health-workers"],
    },
    {
      id: "antibiotics",
      title: "Antibiotics, resistance and the cost of late treatment",
      body:
        "Early noma responds to broad-spectrum antibiotics, which is remarkable for a disease that looks like a spreading gangrene, and it is the reason early detection is everything. But the antibiotics must be available and given immediately, and a 2026 review of antimicrobial resistance in noma control argued that this dependence is under-recognised: where health systems are weak, children arrive after the window in which antibiotics would have stopped the disease, and where antibiotics are used indiscriminately, resistance becomes a further threat.\n\nThe practical requirement is unglamorous — functioning primary care, trained health workers who recognise the early mouth lesion, and a reliable supply of affordable antibiotics — which is exactly the infrastructure that extreme poverty removes. Noma is, in that sense, a disease whose cure already exists and whose elimination depends on development.",
      refs: ["who", "community-health-workers", "access-and-pricing", "wash"],
    },
    {
      id: "prevention",
      title: "Stopping noma before it starts",
      body:
        "Noma's risk factors are malnutrition, poor oral hygiene, unsafe water, untreated childhood illness such as measles, and extreme poverty. That list makes prevention a development problem rather than a medical one: nutrition programmes, immunisation, oral health care, clean water and sanitation, and getting children treated for the illnesses that weaken them. Some programmes have integrated oral health screening into nutrition clinics so that early noma is seen before it progresses.\n\nBecause it is not contagious, noma does not spread from child to child, and a community that meets basic needs can make it disappear — it has effectively vanished from wealthy countries. That is why its persistence is read as an index of deprivation, and why the case for action is as much about equity as about medicine.",
      refs: ["wash", "vaccine-gap", "ntd", "stigma-and-disability"],
    },
  ],

  institutions: ["msf", "zero-noma", "lstm", "who", "noma-children-hospital"],
  terms: ["eot"],
};
