import type { Spike } from "../merge";

export const leishmaniasisSpike: Spike = {
  tldr: "Sandfly-borne parasites that cause skin sores, destructive mucosal damage or a fatal infection of internal organs — and in 2026 WHO recommended the first regimens free of antimony, replacing toxic injections with oral treatment.",

  summary:
    "Leishmaniasis has three faces. Cutaneous leishmaniasis leaves lifelong scars and is a major social burden across the Americas, the Middle East, Central Asia and North Africa. Mucosal leishmaniasis destroys the tissues of the nose and mouth. Visceral leishmaniasis, or kala-azar, attacks the spleen, liver and bone marrow and is fatal without treatment; it is concentrated in South Asia and East Africa. For seventy years the backbone of treatment was pentavalent antimony — painful injections with cardiac and pancreatic toxicity — and the drug was failing in the places that used it most. July 2026 marked a turning point: WHO issued major updates to its treatment guidelines recommending, for the first time, regimens free of sodium stibogluconate, replacing injections with oral miltefosine in eastern Africa and adding shorter options for post-kala-azar dermal leishmaniasis in both regions. South Asia has meanwhile gone furthest of any region toward eliminating visceral leishmaniasis, with Bangladesh becoming the first country validated as having done so and a regional initiative that has cut cases by 95%.",
  stats: [
    { label: "New cases a year", value: "≈ 1 million", note: "cutaneous and visceral combined" },
    { label: "People at risk", value: "> 1 billion" },
    { label: "Visceral disease untreated", value: "Almost always fatal" },
    { label: "First antimony-free regimens", value: "2026", note: "per WHO's July 2026 guideline update" },
    { label: "South Asia case reduction", value: "−95%", note: "over two decades of the regional initiative" },
    { label: "Endemic areas at elimination target", value: "98%", note: "in South Asia" },
  ],

  timeline: [
    {
      date: "2005",
      text: "The Regional Kala-azar Elimination Initiative begins in Bangladesh, India and Nepal, targeting visceral disease in South Asia.",
      refs: ["who", "antimonials"],
    },
    {
      date: "2023",
      text: "Bangladesh becomes the first country validated as having eliminated visceral leishmaniasis as a public health problem; Nepal reaches the target too.",
      refs: ["who", "eot"],
    },
    {
      date: "2025",
      text: "LXE408, a novel oral candidate developed with Novartis, completes two Phase II proof-of-concept studies in India and Ethiopia with promising results.",
      refs: ["lxe408", "dndi"],
    },
    {
      date: "2026",
      text: "WHO updates its leishmaniasis treatment guidelines, recommending the first SSG-free regimens for visceral disease and shorter, safer options for PKDL.",
      refs: ["who", "miltefosine", "liposomal-amphotericin-b"],
    },
  ],

  sections: [
    {
      id: "end-of-antimony",
      title: "2026: the end of antimony in the guidelines",
      body:
        "Pentavalent antimonials — sodium stibogluconate and meglumine antimoniate — have treated leishmaniasis for more than seventy years. They work, they are cheap, and they are toxic: a course of painful injections lasting weeks, with heart-rhythm disturbance and pancreatitis among the risks. In Bihar, India, decades of use produced resistance so widespread that the drugs were abandoned.\n\nWHO's July 2026 guideline update is the formal end of that era. For primary visceral leishmaniasis in eastern Africa it recommends alternative regimens free of sodium stibogluconate, replacing injections with oral miltefosine — the first time WHO has recommended an SSG-free regimen. For post-kala-azar dermal leishmaniasis it recommends shorter, safer treatments in both eastern Africa and South Asia, including liposomal amphotericin B alone or combined with miltefosine. Most of the newly recommended regimens were developed by DNDi and its partners, and the next step is LXE408, an oral candidate now in late-stage development.",
      refs: ["antimonials", "miltefosine", "liposomal-amphotericin-b", "lxe408", "dndi", "who"],
    },
    {
      id: "south-asia",
      title: "Elimination in South Asia — and why it is fragile",
      body:
        "South Asia is the field's biggest success and its clearest warning. The regional kala-azar elimination initiative, running for two decades across Bangladesh, India and Nepal, has driven a 95% reduction in cases, with 98% of endemic areas reaching the elimination target. Bangladesh became the first country in the world validated as having eliminated visceral leishmaniasis as a public health problem, and Nepal reached the target in 2023; India is close.\n\nThe fragility comes from what remains. Elimination as a public health problem is a threshold, not zero, and the parasite persists in a small number of people — including those with post-kala-azar dermal leishmaniasis, a skin condition that follows treated visceral disease and can act as a reservoir for sandflies. New foci have appeared in areas that were not endemic, including in India, and HIV co-infection changes both diagnosis and treatment. Maintaining the surveillance that would catch a resurgence is harder once the disease is no longer a visible emergency.",
      refs: ["pkdl", "rk39-rapid-test", "miltefosine", "surveillance-data-gap", "eot"],
    },
    {
      id: "east-africa",
      title: "East Africa and the weight of conflict",
      body:
        "Eastern Africa — Sudan, South Sudan, Ethiopia, Kenya, Somalia — carries the other great burden of visceral leishmaniasis, and it is a harder problem than South Asia. The rapid test that works well in Bangladesh is less sensitive here; antimonials remained in use longer because the alternatives cost more; and the region's conflicts displace exactly the populations most at risk.\n\nThe Sudan conflict has disrupted treatment and surveillance across a large endemic area, and displacement moves infected people into new places with sandflies but no clinical experience of the disease. This is why the 2026 guideline change matters so much for the region: an oral regimen that does not require hospitalisation or a reliable cold chain is far more usable in a setting where health facilities are damaged and patients are moving.",
      refs: ["direct-agglutination-test", "access-and-pricing", "funding-gap", "who"],
    },
    {
      id: "skin",
      title: "Cutaneous and mucosal disease: the neglected majority",
      body:
        "Cutaneous leishmaniasis is the most common form — roughly a million cases a year — and the most neglected relative to its burden. It is rarely fatal, so it has never attracted the urgency of visceral disease, yet the disfiguring scars it leaves cause stigma, especially for women and girls, and can mean exclusion from marriage, school and work. Cases are concentrated in conflict-affected areas: Syria, Afghanistan, Yemen, and parts of Latin America.\n\nTreatment is inconsistent. Depending on species and region, options range from local heat therapy and intralesional injections to systemic antimonials or miltefosine, and there is no simple way to tell which species is causing a lesion in a field clinic. Mucosal leishmaniasis, which destroys the nose and mouth, is rarer but far more destructive and needs systemic treatment. Compared with visceral disease, both forms suffer from a research gap in diagnostics and from the fact that many cases heal on their own — which makes it easy for health systems to do nothing.",
      refs: ["stigma-and-disability", "miltefosine", "antimonials", "diagnostics-gap"],
    },
    {
      id: "oral-future",
      title: "LXE408 and the oral future",
      body:
        "The goal the field has pursued for decades is a short, oral, safe treatment that works for every form of leishmaniasis. LXE408, developed by DNDi with Novartis, is the closest candidate: a first-in-class oral compound that completed two Phase II proof-of-concept studies in India and Ethiopia in 2025 with promising efficacy and safety, and which is being positioned as the drug that could finally move treatment away from injections entirely.\n\nThe obstacles are the familiar ones. Leishmania species differ in susceptibility, so a regimen that works in India may not work in East Africa or against cutaneous disease; paediatric and pregnancy data take years; and a non-profit has to fund late-stage trials for a disease with no commercial market. There is still no approved human vaccine, though candidates are in early trials.",
      refs: ["lxe408", "leishmaniasis-vaccine-candidates", "vaccine-gap", "ntd-drug-discovery-roadmap", "open-science-drug-discovery"],
    },
  ],

  drugs: ["lxe408"],
  trials: [],
  technologies: [],
  institutions: ["dndi", "who", "cideim"],
  terms: ["pkdl"],
};
