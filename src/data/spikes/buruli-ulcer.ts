import type { Spike } from "../merge";

const WHO_AFRICA_20Y: { label: string; url: string } = {
  label: "WHO AFRO — Buruli ulcer in Africa: 20 years of progress (2025)",
  url: "https://iris.who.int/handle/10665/383376",
};
const WHO_RIS: { label: string; url: string } = {
  label: "WHO — Routine health information system data: Buruli ulcer (2025)",
  url: "https://iris.who.int/handle/10665/382160",
};
const WHO_TPP: { label: string; url: string } = {
  label: "WHO — Target product profile for a rapid Buruli ulcer test (2022)",
  url: "https://iris.who.int/handle/10665/353982",
};
const WHO_2012: { label: string; url: string } = {
  label: "WHO — Treatment of Mycobacterium ulcerans disease: guidance for health workers (2012)",
  url: "https://iris.who.int/handle/10665/77771",
};
const PLOS_16_DOSES: { label: string; url: string } = {
  label: "PLoS NTD — telacebec regimens sterilised mice after 16 doses (2020)",
  url: "https://doi.org/10.1371/journal.pntd.0007857",
};
const AAC_MIC: { label: string; url: string } = {
  label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)",
  url: "https://doi.org/10.1128/aac.00029-25",
};
const EID_POSSUM: { label: string; url: string } = {
  label: "Emerging Infectious Diseases — possum faeces as early warning (2025)",
  url: "https://doi.org/10.3201/eid3103.240657",
};
const LANCET_BENIN: { label: string; url: string } = {
  label: "Lancet Global Health — PCR-confirmed Buruli ulcer incidence in Benin, 2008–2024 (2026)",
  url: "https://pubmed.ncbi.nlm.nih.gov/42497875",
};
const NATMICROB_MOSQ: { label: string; url: string } = {
  label: "Nature Microbiology — autodissemination stations reduce Buruli ulcer risk (2026)",
  url: "https://pubmed.ncbi.nlm.nih.gov/42661072",
};
const PLOS_SUITCASE: { label: string; url: string } = {
  label: "PLoS NTD — mobile suitcase laboratory for Buruli ulcer diagnosis in Ghana (2026)",
  url: "https://pubmed.ncbi.nlm.nih.gov/42081507",
};
const STM_GPR84: { label: string; url: string } = {
  label: "Science Translational Medicine — GPR84 drives inflammation in Buruli ulcer (2026)",
  url: "https://pubmed.ncbi.nlm.nih.gov/41984933",
};
const NRDP_BU: { label: string; url: string } = {
  label: "Nature Reviews Disease Primers — Buruli ulcer in Africa (2026)",
  url: "https://pubmed.ncbi.nlm.nih.gov/42350410",
};
const GFINDER_BU: { label: string; url: string } = {
  label: "G-FINDER / Impact Global Health — Buruli ulcer R&D funding (2024)",
  url: "https://www.impactglobalhealth.org/insights/report-library/diseases-with-almost-no-funding--leptospirosis-scabies-buruli-ulcer-mycetoma-yaws--trachoma",
};

export const buruliUlcerSpike: Spike = {
  tldr: "A painless skin ulcer caused by a bacterium related to leprosy that destroys tissue and, untreated, can disable permanently — with a repurposed tuberculosis drug now in a Phase 2 trial that could shorten eight weeks of antibiotics to one to four.",

  summary:
    "Buruli ulcer starts as a painless lump or swelling and becomes a large ulcer, usually on the arms or legs. It is caused by Mycobacterium ulcerans, whose toxin mycolactone destroys fat and skin and suppresses the immune response, which is why the lesion does not hurt — and why people often delay seeking care until the damage is extensive. Antibiotics replaced surgery two decades ago and WHO now recommends eight weeks of rifampicin plus clarithromycin, with moxifloxacin as the alternative; surgery is left for complications. What is moving fastest is the drug pipeline: telacebec, developed for tuberculosis, is extremely potent against M. ulcerans and began a Phase 2 trial (TREAT-BU) in July 2024 after sterilising mice in sixteen doses, while BLMs4BU is testing four weeks with amoxicillin-clavulanate. What remains stubborn is the biology — the exact route of transmission is still unknown, there is no simple point-of-care test, and cases are increasingly reported from Victoria, Australia, where mosquitoes and possums have been implicated, as well as from West and Central Africa. Reported cases in the WHO African Region fell by more than 70% between 2004 and 2023, from 5,871 to 1,573, and a 2026 nationwide study in Benin found the decline tracked shrinking open water and warming as much as control — evidence that some foci may be disappearing for environmental reasons, which makes continued surveillance essential.",

  stats: [
    {
      label: "Countries that have ever reported cases",
      value: "33",
      number: 33,
      unit: "countries",
      geography: "global",
      note: "cumulative; over 80% of cases are in the WHO African Region",
      source: WHO_AFRICA_20Y,
    },
    {
      label: "Reported cases, WHO African Region",
      value: "1,573",
      number: 1573,
      unit: "cases",
      year: 2023,
      geography: "WHO African Region",
      note: "down from 5,871 in 2004",
      source: WHO_AFRICA_20Y,
    },
    {
      label: "Reported cases, global",
      value: "1,952",
      number: 1952,
      unit: "cases",
      year: 2023,
      geography: "global",
      note: "12 countries reported; the African Region accounted for 1,573 (81%) and the Western Pacific 379 (19%)",
      source: WHO_AFRICA_20Y,
    },
    {
      label: "Change in reported cases since 2004",
      value: "−73%",
      number: -73,
      unit: "%",
      year: 2023,
      geography: "WHO African Region",
      note: "2004: 5,871 → 2023: 1,573 cases",
      source: WHO_AFRICA_20Y,
    },
    {
      label: "Laboratory-confirmed at diagnosis",
      value: "46.3%",
      number: 46.3,
      unit: "%",
      year: 2022,
      geography: "global",
      note: "982 of 2,121 reported cases; WHO asks endemic countries to confirm at least 70%",
      source: WHO_RIS,
    },
    {
      label: "Laboratory-confirmation target",
      value: "70%",
      number: 70,
      unit: "%",
      geography: "global",
      note: "WHO's requirement for endemic countries",
      source: WHO_TPP,
    },
    {
      label: "Category III (late) at diagnosis",
      value: "25.2%",
      number: 25.2,
      unit: "%",
      year: 2022,
      geography: "global",
      note: "road-map target is under 10% by 2030",
      source: WHO_RIS,
    },
    {
      label: "Standard treatment",
      value: "8 weeks",
      unit: "weeks",
      note: "rifampicin + clarithromycin, all oral; rifampicin + moxifloxacin if clarithromycin is unsuitable",
      source: WHO_2012,
    },
    {
      label: "Leading candidate",
      value: "Telacebec",
      note: "MIC 0.0000075 mg/L, the lowest of any drug tested; Phase 2 (TREAT-BU) started July 2024",
      source: AAC_MIC,
    },
    {
      label: "Mouse sterilisation",
      value: "16 doses",
      number: 16,
      unit: "doses",
      note: "telacebec-containing intermittent regimens cured mice of M. ulcerans",
      source: PLOS_16_DOSES,
    },
    {
      label: "Early warning, Australia",
      value: "Up to 39 months",
      number: 39,
      unit: "months",
      note: "M. ulcerans DNA in possum faeces preceded human cases in Geelong",
      source: EID_POSSUM,
    },
    {
      label: "Countries regularly reporting to WHO",
      value: "14 of 33",
      number: 14,
      unit: "countries",
      geography: "global",
      note: "of the 33 that have ever reported Buruli ulcer",
      source: WHO_AFRICA_20Y,
    },
    {
      label: "Lesion site",
      value: "55% lower limbs",
      number: 55,
      unit: "%",
      geography: "global",
      note: "35% upper limbs, 10% elsewhere",
      source: WHO_2012,
    },
    {
      label: "Decline in Benin, 2010–2024",
      value: "≈ 80%",
      number: -80,
      unit: "%",
      year: 2024,
      geography: "Benin",
      note: "incidence 1.37 → 0.24 per 10,000; coincided with a 25–30% loss of open water and >1°C warming; M. ulcerans DNA undetectable in 122 aquatic sites",
      source: LANCET_BENIN,
    },
    {
      label: "Vector control, urban Australia",
      value: "Autodissemination stations",
      note: "a randomised field trial reduced Ae. notoscriptus populations and Buruli ulcer risk in Melbourne",
      source: NATMICROB_MOSQ,
    },
    {
      label: "Host target, 2026",
      value: "GPR84",
      note: "genetic inactivation led to spontaneous healing of M. ulcerans lesions in mice",
      source: STM_GPR84,
    },
    {
      label: "R&D funding, 2023",
      value: "$1.5 million",
      number: 1.5,
      unit: "USD million",
      year: 2023,
      geography: "global",
      note: "up 62% from a 2021 record low but less than half the pre-2021 average; no private-sector funding for a third year",
      source: GFINDER_BU,
    },
  ],

  timeline: [
    {
      date: "1948",
      text: "MacCallum and colleagues describe Mycobacterium ulcerans in the Bairnsdale district of Australia, giving the disease one of its older names.",
    },
    {
      date: "1998",
      text: "WHO establishes the Global Buruli Ulcer Initiative, and the Yamoussoukro Declaration commits affected countries to earlier detection and treatment.",
      refs: ["who"],
    },
    {
      date: "2004",
      text: "World Health Assembly resolution WHA57.1 urges intensified surveillance and research on diagnosis, treatment and prevention.",
      refs: ["who", "surveillance-data-gap"],
    },
    {
      date: "2009",
      text: "The Cotonou Declaration calls for greater political commitment, early case detection and wider access to antibiotic treatment.",
      refs: ["who"],
    },
    {
      date: "2012",
      text: "WHO's guidance for health workers sets out the 8-week antibiotic regimens for Buruli ulcer, including the all-oral rifampicin–clarithromycin combination that later becomes first-line.",
      refs: ["rifampicin", "who"],
    },
    {
      date: "2019",
      text: "WHO establishes the Buruli ulcer Laboratory Network for Africa (BU-LABNET) to strengthen PCR confirmation in endemic countries, coordinated by the Centre Pasteur of Cameroon.",
      refs: ["bu-labnet", "who"],
    },
    {
      date: "2020",
      text: "Telacebec-containing regimens sterilise M. ulcerans in mice after only 16 doses, opening the route to an ultrashort regimen.",
      refs: ["telacebec"],
    },
    {
      date: "2024",
      text: "The Phase 2 TREAT-BU trial of telacebec begins in Australia, sponsored by Barwon Health with TB Alliance as collaborator.",
      refs: ["treat-bu", "telacebec", "tb-alliance"],
    },
    {
      date: "2025",
      text: "WHO reviews twenty years of progress: 33 countries have reported cases, and African Region cases are down more than 70% since 2004 but are still diagnosed late.",
      refs: ["who", "surveillance-data-gap"],
    },
    {
      date: "2026",
      text: "A nationwide Benin study attributes a ~80% fall in incidence to environmental change (shrinking water, warming); a Melbourne randomised trial shows mosquito autodissemination stations reduce Buruli ulcer risk; GPR84 is identified as a host inflammation driver; and a mobile suitcase laboratory is deployed for diagnosis in Ghana.",
      refs: ["buruli-benin-incidence", "buruli-autodissemination-trial", "gpr84", "buruli-rpa-suitcase"],
    },
  ],

  sections: [
    {
      id: "treatment",
      title: "Treatment: from surgery to antibiotics to something faster",
      body:
        "For decades the only treatment was surgical — wide excision and skin grafting — which meant disfigurement, long hospital stays and recurrence. The discovery that antibiotics could cure early lesions transformed care: the all-oral combination of rifampicin and clarithromycin for eight weeks is now standard, surgery is reserved for large lesions, contractures and complications, and rifampicin plus moxifloxacin is the recommended alternative when clarithromycin cannot be used.\n\nEight weeks is still a long time for a patient who must travel to a clinic, and the next goal is shortening it. Telacebec, a tuberculosis drug, is the most promising candidate: its minimum inhibitory concentration against M. ulcerans is 0.0000075 mg/L — the lowest of the eight drugs compared in a 2025 head-to-head study, against 0.5 mg/L for both rifampicin and clarithromycin — and in mouse models it sterilised the infection after only sixteen doses. The Phase 2 TREAT-BU trial tests 10–28 days of telacebec rather than eight weeks of standard care. In parallel, the BLMs4BU trial is testing a four-week regimen that adds amoxicillin-clavulanate to the standard pair, and researchers are screening tuberculosis and non-tuberculous-mycobacterial drugs — epetraborole, moxifloxacin, omadacycline, bedaquiline, clofazimine — for repurposing, on the reasoning that a field with no commercial market should borrow from one that has a pipeline.",
      refs: ["telacebec", "treat-bu", "blms4bu", "rifampicin", "clarithromycin", "moxifloxacin", "clofazimine", "drug-repurposing", "ntd-drug-discovery-roadmap"],
    },
    {
      id: "transmission",
      title: "The transmission puzzle",
      body:
        "After eighty years, nobody knows exactly how people acquire M. ulcerans. The bacterium lives in environmental water, and in Africa the suspects have long been aquatic insects and water contact near slow-moving or stagnant water; DNA has been found in water bugs, but direct transmission to humans has never been demonstrated. A 2026 nationwide study in Benin found M. ulcerans DNA undetectable in 122 aquatic sites sampled between 2021 and 2024, while incidence fell about 80% alongside shrinking open water and warming — evidence that some foci are fading for environmental reasons.\n\nAustralia has since supplied a stronger lead. In Victoria, where cases have been rising and spreading, both mosquitoes and possums have been implicated — possums are a major wildlife reservoir and shed the bacterium in their faeces, mosquitoes can pick it up and bite people, and the average incubation period is about 4.8 months. A 2025 study in Geelong found M. ulcerans DNA in possum faeces up to 39 months before human cases appeared, turning possum-excreta and genomic surveillance into an early-warning system rather than a reaction to an outbreak. In 2026 a randomised controlled field trial in Melbourne showed that autodissemination stations dispensing pyriproxyfen and the fungus Beauveria bassiana suppressed Aedes notoscriptus mosquitoes and reduced Buruli ulcer risk — the first controlled evidence that vector control can lower human risk, though transferability to African transmission cycles is unproven.",
      refs: ["doherty-institute", "early-warning-hotspots", "buruli-autodissemination-trial", "mosquito-autodissemination", "buruli-benin-incidence", "genomic-surveillance", "who"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis and early detection",
      body:
        "Buruli ulcer is confirmed by one of four standard laboratory methods — PCR for the IS2404 sequence (the recommended test), direct microscopy, histopathology or culture — all of which need a laboratory that most endemic districts do not have. WHO asks endemic countries to laboratory-confirm at least 70% of cases, and in 2022 only 46.3% of reported cases were confirmed; the clinical consequence is that diagnosis is often made on appearance, late, when the lesion is already large.\n\nSeveral approaches aim at earlier detection. The most practical is moving the molecular test into the field: in 2026 a mobile 'suitcase laboratory' using recombinase polymerase amplification (RPA) was deployed in Ghana, bringing confirmation close to where patients present. A second is detecting mycolactone, the toxin itself: a 2022 WHO target product profile sets out what a rapid test at primary-health-care level would have to achieve, and named mycolactone detection and loop-mediated isothermal amplification among the priority needs. A third is a treatment-monitoring biomarker — the ribosomal RNA synthesis ratio (RS-ratio), being evaluated to judge drug activity and guide shortened regimens. Training and simple imaging, including AI-assisted microscopy for mycobacterial lesions, are also being explored. None is yet routine, and the gap is one of the reasons late presentation and disability persist.",
      refs: ["buruli-rpa-suitcase", "mycolactone-detection", "buruli-rs-ratio-biomarker", "molecular-pcr", "ai-microscopy", "diagnostics-gap"],
    },
    {
      id: "disability",
      title: "Disability, stigma and the cost of late presentation",
      body:
        "Buruli ulcer is rarely fatal and frequently disabling. Because the lesion is painless, people wait; because treatment is delayed, the ulcer extends and healing leaves contractures that restrict the elbow, knee or ankle. A quarter of reported cases were already category III at diagnosis in 2022 — the road map's target is to bring that below 10% by 2030. A farmer who can no longer bend a joint has lost income, and children who miss months of school fall behind permanently.\n\nThe disease also carries stigma, as the other skin-related NTDs do, and in some communities the ulcer is attributed to witchcraft or to a curse rather than an infection. Early detection is therefore not only a laboratory problem but an educational one, and WHO's research priorities include working with traditional healers, who are often the first people patients consult.",
      refs: ["stigma-and-disability", "community-health-workers", "daly", "noguchi", "surveillance-data-gap"],
    },
    {
      id: "pipeline",
      title: "The pipeline: borrowing from tuberculosis",
      body:
        "Buruli ulcer is caused by a mycobacterium, and so are tuberculosis and leprosy — which means the enormous investment in tuberculosis drug discovery can be mined for drugs that also work here. That is the strategy behind testing telacebec, epetraborole, moxifloxacin and omadacycline against M. ulcerans in the laboratory and in trials.\n\nIt is a pragmatic route for a disease with no commercial market: instead of inventing a molecule, take one whose safety has already been established for another infection and prove it works here. The risk is that a tuberculosis drug may be optimised for the lung and not for a skin lesion, and that supply for Buruli ulcer will always be secondary to tuberculosis demand — but it is the most plausible path to a shorter cure. A complementary route emerged in 2026: rather than targeting the bacterium, host-directed therapy could calm the inflammation that drives tissue destruction. The orphan receptor GPR84 was shown to sustain a proinflammatory loop in M. ulcerans infection, and mice lacking it healed their lesions spontaneously — raising the prospect of an anti-inflammatory adjunct to antibiotics that limits ulceration and disability.",
      refs: ["telacebec", "tb-alliance", "dpre1", "gpr84", "open-science-drug-discovery", "funding-gap"],
    },
  ],

  drugs: ["telacebec", "rifampicin", "clarithromycin", "moxifloxacin", "clofazimine"],
  trials: ["treat-bu", "blms4bu", "buruli-autodissemination-trial", "buruli-benin-incidence"],
  diagnostics: ["mycolactone-detection", "buruli-rpa-suitcase", "buruli-rs-ratio-biomarker"],
  technologies: ["early-warning-hotspots", "mosquito-autodissemination", "genomic-surveillance", "drug-repurposing"],
  institutions: ["tb-alliance", "doherty-institute", "who", "noguchi", "bu-labnet", "kccr", "incit-angers", "abomey-calavi", "africa-cdc"],
  terms: ["skin-ntds", "host-directed-therapy"],
};
