import type { Spike } from "../merge";

export const leishmaniasisSpike: Spike = {
  tldr: "Sandfly-borne parasites that cause skin sores, destructive mucosal damage or a fatal infection of internal organs — and in 2026 WHO recommended the first regimens free of sodium stibogluconate for visceral disease in eastern Africa.",

  summary:
    "Leishmaniasis has three faces. Cutaneous leishmaniasis leaves lifelong scars and is a major social burden across the Americas, the Middle East, Central Asia and North Africa. Mucosal leishmaniasis destroys the tissues of the nose and mouth. Visceral leishmaniasis, or kala-azar, attacks the spleen, liver and bone marrow and is fatal without treatment; it is concentrated in South Asia and East Africa. For seventy years the backbone of treatment was pentavalent antimony — painful injections with cardiac and pancreatic toxicity — and the drug was failing in the places that used it most. July 2026 marked a turning point: WHO issued major updates to its treatment guidelines recommending, for the first time, regimens free of sodium stibogluconate (SSG) for primary visceral disease in eastern Africa, replacing the 17-day SSG-plus-paromomycin course with a 14-day oral miltefosine-plus-paromomycin combination, and adding shorter options for post-kala-azar dermal leishmaniasis in both regions. The oral drug replaces the antimonial, but paromomycin is still injected — so this is a shorter, safer regimen, not yet an injection-free one. South Asia has meanwhile gone furthest of any region toward eliminating visceral leishmaniasis, with Bangladesh in 2023 becoming the first country in the world validated as having done so and a regional initiative that has cut cases by about 95%.",
  stats: [
    {
      label: "New cases a year",
      value: "700,000–1 million",
      unit: "cases/year",
      geography: "global",
      note: "all forms; only a fraction are reported to WHO",
      source: { label: "WHO — leishmaniasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    },
    {
      label: "Visceral cases a year",
      value: "50,000–90,000",
      unit: "cases",
      geography: "global",
      note: "only 25–45% are reported to WHO",
      source: { label: "WHO — leishmaniasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    },
    {
      label: "Cutaneous cases a year",
      value: "600,000–1 million",
      unit: "cases",
      geography: "global",
      note: "about 95% occur in the Americas, the Mediterranean basin, the Middle East and central Asia",
      source: { label: "WHO — leishmaniasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    },
    { label: "At risk", value: "> 1 billion", unit: "people", geography: "global", source: { label: "WHO — leishmaniasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" } },
    {
      label: "Visceral deaths untreated",
      value: "> 95%",
      number: 95,
      unit: "%",
      note: "fatal if left untreated",
      source: { label: "WHO — leishmaniasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    },
    { label: "First SSG-free regimens", value: "2026", year: 2026, note: "per WHO's July 2026 guideline update; oral miltefosine + injectable paromomycin for eastern Africa VL" },
    { label: "South Asia case reduction", value: "−95%", unit: "%", note: "regional initiative, over about a decade; 97% between 2011 and 2022" },
    { label: "Endemic areas at elimination target", value: "99.6%", unit: "%", note: "772 of 775 implementation units in South Asia by 2022" },
    { label: "G-FINDER R&D funding", value: "US$ 39 million", number: 39, unit: "million USD", year: 2023, geography: "global", note: "neglected-disease R&D, largely unchanged from record lows", source: { label: "G-FINDER 2024 Neglected Disease R&D report", url: "https://cdn.impactglobalhealth.org/media/G-FINDER%202024_Full%20report.pdf" } },
  ],

  timeline: [
    {
      date: "2005",
      text: "The Regional Kala-azar Elimination Initiative begins in Bangladesh, India and Nepal, targeting visceral disease in South Asia.",
      refs: ["who", "antimonials"],
    },
    {
      date: "2023",
      text: "Bangladesh becomes the first country validated as having eliminated visceral leishmaniasis as a public health problem; India's reported incidence also reaches the threshold, though it is not yet validated.",
      refs: ["who", "eot"],
    },
    {
      date: "2025",
      text: "The two LXE408 Phase II studies complete recruitment and follow-up in India (95 patients) and Ethiopia (52 patients); results are expected in 2026.",
      refs: ["lxe408", "dndi"],
    },
    {
      date: "2026",
      text: "WHO updates its leishmaniasis treatment guidelines, recommending the first SSG-free regimens for visceral disease in eastern Africa (oral miltefosine plus injectable paromomycin) and shorter options for PKDL in both regions.",
      refs: ["who", "miltefosine", "liposomal-amphotericin-b", "paromomycin"],
    },
  ],

  sections: [
    {
      id: "end-of-antimony",
      title: "2026: the end of antimony in the guidelines",
      body:
        "Pentavalent antimonials — sodium stibogluconate and meglumine antimoniate — have treated leishmaniasis for more than seventy years. They work, they are cheap, and they are toxic: a course of painful injections lasting weeks, with heart-rhythm disturbance and pancreatitis among the risks. In Bihar, India, decades of use produced resistance so widespread that the drugs were abandoned.\n\nWHO's July 2026 guideline update is the formal end of that era for eastern Africa. It recommends, for the first time, an SSG-free regimen for primary visceral disease: a 14-day course of oral miltefosine plus injectable paromomycin, replacing the 17-day SSG-plus-paromomycin combination — one injection fewer and less toxicity. SSG remains an option for patients who cannot take the new regimen. For post-kala-azar dermal leishmaniasis, shorter treatments are recommended in both regions: paromomycin plus miltefosine in eastern Africa, and liposomal amphotericin B alone or with a short miltefosine course in South Asia, replacing 30–60 days of SSG or a 12-week miltefosine course. The update also reframes miltefosine's safety, adding measures against ocular side effects and weight-band dosing. Most of the newly recommended regimens were developed by DNDi and its partners, and the next step is LXE408, an oral candidate whose Phase II results are due in 2026.",
      refs: ["antimonials", "miltefosine", "liposomal-amphotericin-b", "lxe408", "dndi", "who"],
    },
    {
      id: "south-asia",
      title: "Elimination in South Asia — and why it is fragile",
      body:
        "South Asia is the field's biggest success and its clearest warning. The regional kala-azar elimination initiative, running for two decades across Bangladesh, India and Nepal, has driven a roughly 95% reduction in cases, with 772 of 775 implementation units (99.6%) reaching the elimination target by 2022. Bangladesh became the first country in the world validated as having eliminated visceral leishmaniasis as a public health problem, in 2023; India's reported incidence also crossed the threshold in 2023 but is not yet validated, and Nepal has cut cases by about 88% and is still working to reach the last implementation units.\n\nThe fragility comes from what remains. Elimination as a public health problem is a threshold, not zero, and the parasite persists in a small number of people — including those with post-kala-azar dermal leishmaniasis, a skin condition that follows treated visceral disease and can act as a reservoir for sandflies. New foci have appeared in areas that were not endemic, including in India and Nepal, and HIV co-infection changes both diagnosis and treatment. Maintaining the surveillance that would catch a resurgence is harder once the disease is no longer a visible emergency.",
      refs: ["pkdl", "rk39-rapid-test", "miltefosine", "surveillance-data-gap", "eot"],
    },
    {
      id: "east-africa",
      title: "East Africa and the weight of conflict",
      body:
        "Eastern Africa — Sudan, South Sudan, Ethiopia, Kenya, Somalia — carries the other great burden of visceral leishmaniasis, and it is a harder problem than South Asia. The rapid test that works well in Bangladesh is less sensitive here; antimonials remained in use longer because the alternatives cost more; and the region's conflicts displace exactly the populations most at risk.\n\nThe Sudan conflict has disrupted treatment and surveillance across a large endemic area, and displacement moves infected people into new places with sandflies but no clinical experience of the disease. This is why the 2026 guideline change matters so much for the region: a 14-day regimen with fewer injections and less toxicity is far more usable where health facilities are damaged and patients are moving — though it still needs a cold chain for the paromomycin component, which is exactly why a fully oral candidate such as LXE408 matters next.",
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
        "The goal the field has pursued for decades is a short, oral, safe treatment that works for every form of leishmaniasis. LXE408, developed by DNDi with Novartis, is the closest candidate: a first-in-class parasite-selective proteasome inhibitor, tested in two Phase II studies that completed recruitment and follow-up in India (95 patients) and Ethiopia (52 patients) in 2025, with results expected in 2026. A Phase II study in cutaneous leishmaniasis in the Americas began in 2026. If the results hold, it would move treatment away from injections entirely.\n\nThe obstacles are the familiar ones. Leishmania species differ in susceptibility, so a regimen that works in India may not work in East Africa or against cutaneous disease; paediatric and pregnancy data take years; and a non-profit has to fund late-stage trials for a disease with no commercial market. There is still no approved human vaccine, though candidates are in early trials.",
      refs: ["lxe408", "leishmaniasis-vaccine-candidates", "vaccine-gap", "ntd-drug-discovery-roadmap", "open-science-drug-discovery"],
    },
  ],

  drugs: ["lxe408"],
  trials: ["mf-pm-east-africa-phase3", "lxe408-vl-phase2"],
  guidelines: ["who-leishmaniasis-guideline-2026"],
  technologies: ["leishmaniasis-vaccine-candidates"],
  institutions: ["dndi", "who", "cideim", "university-of-gondar"],
  terms: ["pkdl"],
};
