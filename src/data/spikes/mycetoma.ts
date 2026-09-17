import type { Spike } from "../merge";

export const mycetomaSpike: Spike = {
  tldr: "Fungal or bacterial infections that enter through a thorn prick and steadily destroy the foot or hand over years — and the first randomised trial for a treatment, run in a war zone.",

  summary:
    "Mycetoma begins after a thorn prick or small injury and grows into a painless swelling that eventually discharges grains through sinuses, destroying skin, muscle and bone. It is caused either by fungi (eumycetoma, mainly Madurella mycetomatis) or bacteria (actinomycetoma) and the two need completely different treatment: bacterial disease responds to long antibiotic courses, while fungal disease responds poorly to the available drugs and often ends in amputation. It is concentrated in the 'mycetoma belt' around the Sahel, and it affects young adults in their productive years, which is why the disability is as much economic as medical. The last few years have produced both the first randomised clinical trial for a eumycetoma drug — fosravuconazole, run from Khartoum with DNDi and Eisai — and a catastrophe: the war in Sudan has disrupted the Mycetoma Research Centre, the world's leading centre for the disease.",
  stats: [
    { label: "Reporting countries", value: "> 30" },
    { label: "Geography", value: "The Sahel 'mycetoma belt'", note: "Sudan carries the largest burden" },
    { label: "Age affected", value: "Young adults", note: "20–40, in productive years" },
    { label: "Standard fungal treatment", value: "Itraconazole 200 mg twice daily", note: "for months to years" },
    {
      label: "First randomised trial",
      value: "Fosravuconazole",
      note: "once weekly; not superior to itraconazole, but safe and simpler",
    },
    { label: "Outcome in advanced disease", value: "Amputation", note: "common in fungal mycetoma" },
  ],

  timeline: [
    {
      date: "2016",
      text: "WHO adds mycetoma to its list of neglected tropical diseases, bringing the first global attention to the disease.",
      refs: ["who"],
    },
    {
      date: "2019",
      text: "The first randomised clinical trial for a eumycetoma treatment begins in Khartoum, testing fosravuconazole against itraconazole.",
      refs: ["fosravuconazole-mycetoma", "fosravuconazole"],
    },
    {
      date: "2023",
      text: "War in Sudan disrupts the Mycetoma Research Centre at the University of Khartoum, paralysing the world's leading centre for the disease.",
      refs: ["mrc-khartoum", "dndi"],
    },
    {
      date: "2024",
      text: "The trial reports that neither dose of fosravuconazole was superior to itraconazole, but that it caused no new safety concerns and needed only weekly dosing.",
      refs: ["fosravuconazole-mycetoma", "fosravuconazole"],
    },
    {
      date: "2026",
      text: "Ten years after WHO recognition, mycetoma remains a disease with no reliably effective antifungal and a research base disrupted by conflict.",
      refs: ["who", "mrc-khartoum"],
    },
  ],

  sections: [
    {
      id: "trial",
      title: "The first randomised trial — and what it actually showed",
      body:
        "Fosravuconazole was the first drug ever tested against eumycetoma in a randomised, double-blind trial, run at a single centre in Sudan by the Mycetoma Research Centre with DNDi and Eisai. It compared two once-weekly doses against daily itraconazole, the standard of care, with surgery at six months. The result was not a victory on efficacy: neither dose was superior to itraconazole, and both had numerically lower cure rates.\n\nWhat the trial did establish was that a once-weekly oral regimen is safe and tolerable, which matters in a disease treated for a year or more and in patients who travel long distances to a clinic. It also proved that a rigorous randomised trial is possible in one of the hardest settings in the world, and it built the trial infrastructure and the mycetoma community that future studies depend on. That is a real result even when the primary endpoint is not met.",
      refs: ["fosravuconazole-mycetoma", "fosravuconazole", "mrc-khartoum", "dndi"],
    },
    {
      id: "sudan",
      title: "The Sudan conflict and the loss of the world's centre",
      body:
        "Sudan is the country with the greatest burden of mycetoma and home to the Mycetoma Research Centre at the University of Khartoum, which for decades was the global hub for diagnosis, treatment, training and research. When war broke out in 2023, the centre's work was paralysed — clinics disrupted, patients unable to travel, research and follow-up interrupted, and staff displaced.\n\nThe consequences extend beyond Sudan. Because mycetoma is concentrated in one region, the field depends on a small number of centres, and losing one removes most of the world's clinical capacity at the moment the first drug trial was reporting. It is a reminder of how fragile research on neglected diseases is when it sits in a conflict zone, and why the field has been trying to distribute expertise to other endemic countries.",
      refs: ["mrc-khartoum", "funding-gap", "surveillance-data-gap", "who"],
    },
    {
      id: "pipeline",
      title: "The antifungal pipeline and the drugs mycetoma does not have",
      body:
        "Fungal mycetoma has no reliable cure. Itraconazole and other azoles are used for months to years with modest results, and surgery or amputation is often needed. The bright spot is that the antifungal pipeline for other infections is producing compounds with activity against Madurella mycetomatis — most notably olorofim, which inhibits an enzyme in pyrimidine synthesis and has shown excellent in vitro activity against the fungus, and fosmanogepix, a broad-spectrum agent in development.\n\nNeither is being developed for mycetoma, and that is the recurring problem: a drug can be active in the laboratory and never be trialled in the disease, because there is no commercial reason to run a trial in the Sahel. The field's best route is to piggyback on antifungal development for other indications and find the funding to test those drugs where they are needed.",
      refs: ["olorofim", "fosravuconazole", "funding-gap", "ntd-drug-discovery-roadmap", "open-science-drug-discovery"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis: ultrasound, grains and the bacterial question",
      body:
        "The first question in mycetoma is whether it is fungal or bacterial, because the treatments are entirely different. Ultrasound has become a key tool: the characteristic 'dot-in-circle' sign is highly suggestive and can be seen in a district hospital, which is far more practical than waiting for culture. Identifying the organism still depends on examining the grains — the colonies the organism forms in tissue — under a microscope, by culture, or increasingly by molecular methods such as PCR and MALDI-TOF mass spectrometry.\n\nIn practice most diagnosis is clinical and most patients present late, when the swelling is already large. There is no point-of-care test, and the diagnostic gap is one reason the disease is caught only once it has done substantial damage.",
      refs: ["mycetoma-ultrasound", "molecular-pcr", "ai-microscopy", "diagnostics-gap"],
    },
    {
      id: "other-mycoses",
      title: "Chromoblastomycosis, sporotrichosis and the other deep mycoses",
      body:
        "Mycetoma is grouped with other deep mycoses that WHO recognises as NTDs, and each has its own profile. Chromoblastomycosis follows a skin injury and produces slow, wart-like nodules that are disfiguring and difficult to cure, treated with itraconazole, terbinafine, flucytosine or cryotherapy depending on the case. Sporotrichosis is caused by Sporothrix species and has become a zoonosis of growing concern in Brazil, where cats transmit it to people and large outbreaks have occurred in cities.\n\nTogether these diseases form a small, poorly counted group with no reliable treatment and little research, kept on the NTD list partly because naming them is the only way to get them counted at all. Their common feature is that they are caused by environmental organisms entering through the skin of people who farm, walk barefoot, or work with soil and plants.",
      refs: ["chromoblastomycosis", "stigma-and-disability", "surveillance-data-gap"],
    },
  ],

  drugs: ["fosravuconazole", "olorofim"],
  trials: ["fosravuconazole-mycetoma"],
  diagnostics: ["mycetoma-ultrasound"],
  institutions: ["mrc-khartoum", "dndi", "who"],
  terms: ["chromoblastomycosis"],
};
