import type { Spike } from "../merge";

export const buruliUlcerSpike: Spike = {
  tldr: "A painless skin ulcer caused by a bacterium related to leprosy that destroys tissue and, untreated, can disable permanently — with a repurposed tuberculosis drug now in trials that could cut eight weeks of antibiotics to a handful of doses.",

  summary:
    "Buruli ulcer starts as a painless lump or swelling and becomes a large ulcer, usually on the arms or legs. It is caused by Mycobacterium ulcerans, whose toxin mycolactone destroys fat and skin and suppresses the immune response, which is why the lesion does not hurt — and why people often delay seeking care until the damage is extensive. Antibiotics replaced surgery two decades ago and WHO now recommends eight weeks of rifampicin plus clarithromycin, which cures most lesions and leaves surgery for complications. What is moving fastest is the drug pipeline: telacebec, developed for tuberculosis, is extremely potent against M. ulcerans and entered a Phase 2 trial (TREAT-BU) in 2024 after sterilising mice in sixteen doses. What remains stubborn is the biology — the exact route of transmission is still unknown, there is no simple point-of-care test, and the disease is increasingly reported from Australia, where mosquitoes and possums have been implicated, as well as from West and Central Africa.",

  stats: [
    { label: "Reporting countries", value: "> 30" },
    {
      label: "Reported cases a year",
      value: "A few thousand",
      note: "true burden unknown; reporting is incomplete",
    },
    { label: "Standard treatment", value: "8 weeks", note: "rifampicin + clarithromycin, all oral" },
    {
      label: "Leading candidate",
      value: "Telacebec",
      note: "sterilised mice in 16 doses; Phase 2 started 2024",
    },
    { label: "Australia", value: "Mosquitoes and possums", note: "implicated in transmission in Victoria" },
    {
      label: "Early warning",
      value: "2–6 years",
      note: "hotspots detectable before human cases, per a 2024 tool",
    },
  ],

  timeline: [
    {
      date: "1948",
      text: "The infection is first described in the Bairnsdale district of Australia, giving it one of its older names.",
    },
    {
      date: "1998",
      text: "WHO launches the Global Buruli Ulcer Initiative, putting the disease on the international agenda.",
      refs: ["who"],
    },
    {
      date: "2004",
      text: "WHO declares Buruli ulcer an emerging disease and begins standardising surveillance and reporting.",
      refs: ["who", "surveillance-data-gap"],
    },
    {
      date: "2017",
      text: "WHO recommends fully oral rifampicin plus clarithromycin for eight weeks, replacing the injectable streptomycin regimen.",
      refs: ["rifampicin", "who"],
    },
    {
      date: "2024",
      text: "TB Alliance initiates the Phase 2 TREAT-BU trial of telacebec for Buruli ulcer after it sterilised mice in 16 doses.",
      refs: ["treat-bu", "telacebec", "tb-alliance"],
    },
    {
      date: "2025",
      text: "Australian consensus guidelines are updated, recommending dual antibiotic therapy and mosquito-bite prevention.",
      refs: ["doherty-institute"],
    },
  ],

  sections: [
    {
      id: "treatment",
      title: "Treatment: from surgery to antibiotics to something faster",
      body:
        "For decades the only treatment was surgical — wide excision and skin grafting — which meant disfigurement, long hospital stays and recurrence. The discovery that antibiotics could cure early lesions transformed care: the all-oral combination of rifampicin and clarithromycin for eight weeks is now standard, and surgery is reserved for large lesions, contractures and complications.\n\nEight weeks is still a long time for a patient who must travel to a clinic, and the next goal is shortening it. Telacebec, a tuberculosis drug, is the most promising candidate: it has the lowest minimum inhibitory concentration of any drug tested against M. ulcerans, and in mouse models it sterilised the infection after only sixteen doses. A Phase 2 proof-of-concept trial began in 2024. In parallel, researchers are testing a four-week regimen that adds amoxicillin-clavulanate to the standard pair, and screening tuberculosis and non-tuberculous-mycobacterial drugs — epetraborole, moxifloxacin, omadacycline, bedaquiline — for repurposing, on the reasoning that a field with no commercial market should borrow from one that has a pipeline.",
      refs: ["telacebec", "treat-bu", "rifampicin", "clofazimine", "drug-repurposing", "ntd-drug-discovery-roadmap"],
    },
    {
      id: "transmission",
      title: "The transmission puzzle",
      body:
        "After eighty years, nobody knows exactly how people acquire M. ulcerans. The bacterium lives in environmental water, and in Africa the suspects have long been aquatic insects and water contact near slow-moving or stagnant water; DNA has been found in water bugs, but direct transmission to humans has never been demonstrated.\n\nAustralia has since supplied a stronger lead. In Victoria, where cases have been rising and spreading, both mosquitoes and possums have been implicated — possums carry the bacterium, mosquitoes can pick it up and bite people — and public health advice now includes avoiding mosquito bites around endemic areas. If mosquitoes are a route there, control measures change. A 2024 tool from the Doherty Institute flags emerging hotspots two to six years before human infections appear, which turns surveillance from reaction into prediction.",
      refs: ["doherty-institute", "early-warning-hotspots", "genomic-surveillance", "who"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis and early detection",
      body:
        "Buruli ulcer is confirmed by PCR for the IS2404 sequence, by culture, or by histopathology — all of which need a laboratory that most endemic districts do not have. The clinical consequence is that diagnosis is often made on appearance, late, when the lesion is already large.\n\nTwo approaches aim at earlier detection. One is detecting mycolactone, the toxin itself, in tissue — fluorescent thin-layer chromatography has been evaluated at district level, and a point-of-care test for the toxin is a WHO research priority because it would allow treatment to start in a primary health centre. The other is training and simple imaging, where AI-assisted microscopy is being explored for mycobacterial lesions. Neither is yet a field-ready test, and the gap is one of the reasons late presentation and disability persist.",
      refs: ["mycolactone-detection", "molecular-pcr", "ai-microscopy", "diagnostics-gap"],
    },
    {
      id: "disability",
      title: "Disability, stigma and the cost of late presentation",
      body:
        "Buruli ulcer is rarely fatal and frequently disabling. Because the lesion is painless, people wait; because treatment is delayed, the ulcer extends and healing leaves contractures that restrict the elbow, knee or ankle. A farmer who can no longer bend a joint has lost income, and children who miss months of school fall behind permanently.\n\nThe disease also carries stigma, as the other skin-related NTDs do, and in some communities the ulcer is attributed to witchcraft or to a curse rather than an infection. Early detection is therefore not only a laboratory problem but an educational one, and WHO's research priorities include working with traditional healers, who are often the first people patients consult.",
      refs: ["stigma-and-disability", "community-health-workers", "daly", "noguchi"],
    },
    {
      id: "pipeline",
      title: "The pipeline: borrowing from tuberculosis",
      body:
        "Buruli ulcer is caused by a mycobacterium, and so are tuberculosis and leprosy — which means the enormous investment in tuberculosis drug discovery can be mined for drugs that also work here. That is the strategy behind testing telacebec, epetraborole, moxifloxacin and omadacycline against M. ulcerans in the laboratory and in trials.\n\nIt is a pragmatic route for a disease with no commercial market: instead of inventing a molecule, take one whose safety has already been established for another infection and prove it works here. The risk is that a tuberculosis drug may be optimised for the lung and not for a skin lesion, and that supply for Buruli ulcer will always be secondary to tuberculosis demand — but it is the most plausible path to a shorter cure.",
      refs: ["telacebec", "tb-alliance", "dpre1", "open-science-drug-discovery", "funding-gap"],
    },
  ],

  drugs: ["telacebec"],
  trials: ["treat-bu"],
  diagnostics: ["mycolactone-detection"],
  technologies: ["early-warning-hotspots"],
  institutions: ["tb-alliance", "doherty-institute", "who", "noguchi"],
};
