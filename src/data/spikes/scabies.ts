import type { Spike } from "../merge";

export const scabiesSpike: Spike = {
  tldr: "An intensely itchy mite infestation that spreads through crowded homes and drives bacterial skin infection — and the one NTD where treating a whole community with one drug is now standard.",

  summary:
    "Scabies is caused by a mite that burrows into the skin, causing an itch that is worst at night. It spreads easily in crowded households, schools and institutions, and in tropical communities it drives impetigo and, through that, post-streptococcal kidney disease and rheumatic heart disease. Ordinary scabies is treated with topical permethrin or oral ivermectin, but in high-burden settings whole-community mass treatment is what works, because reinfection from untreated contacts is relentless. Ivermectin is now on the WHO essential medicines list for scabies and several suppliers are prequalified; a cluster-randomised trial has suggested that a single round of mass treatment may be as effective as two; and moxidectin has shown high efficacy in trials, offering a longer-acting alternative. The wider group — scabies and other ectoparasitoses — also includes tungiasis, the jigger flea, which causes painful foot lesions in some of the same communities.",
  stats: [
    { label: "People affected at any time", value: "≈ 200 million" },
    { label: "Standard oral treatment", value: "Two doses of ivermectin", note: "200 µg/kg, one week apart" },
    { label: "Topical alternative", value: "Permethrin 5% cream" },
    { label: "Contraindication", value: "Pregnancy and children under 15 kg", note: "for ivermectin" },
    { label: "WHO listing", value: "Ivermectin on the EML for scabies", note: "with prequalified suppliers" },
    { label: "Downstream harm", value: "Impetigo, kidney disease, rheumatic heart disease" },
  ],

  timeline: [
    {
      date: "2017",
      text: "WHO adds scabies and other ectoparasitoses to its list of neglected tropical diseases.",
      refs: ["who"],
    },
    {
      date: "2021",
      text: "A systematic review and meta-analysis confirms that mass drug administration reduces scabies and impetigo prevalence.",
      refs: ["scabies-mda"],
    },
    {
      date: "2023",
      text: "A cluster-randomised non-inferiority trial finds that one round of ivermectin-based mass treatment may be as effective as two.",
      refs: ["scabies-mda-one-vs-two", "ivermectin"],
    },
    {
      date: "2024",
      text: "WHO consults on a guideline for combining mass drug administration regimens across multiple NTDs, including azithromycin with albendazole, DEC and ivermectin.",
      refs: ["who", "mass-drug-administration"],
    },
    {
      date: "2024",
      text: "Ivermectin is listed on the WHO essential medicines list for scabies, with prequalified suppliers, and moxidectin shows high efficacy in clinical trials.",
      refs: ["ivermectin", "moxidectin"],
    },
  ],

  sections: [
    {
      id: "mda",
      title: "Mass treatment is the intervention",
      body:
        "Treating one person with scabies fails, because the mite comes back from the people around them. That is why the field moved to mass drug administration: treating an entire community at once, usually with oral ivermectin, sometimes alongside topical permethrin for those who cannot take it. A systematic review and meta-analysis found that mass treatment reduces both scabies and impetigo prevalence, and programmes in Fiji, the Solomon Islands and Ethiopia have shown it can be delivered at scale.\n\nThe remaining questions are operational. A cluster-randomised non-inferiority trial tested whether one round of ivermectin mass treatment was as good as two and found that it may be — which matters, because each additional round multiplies cost and logistics. WHO's 2024 consultation on combining NTD mass-treatment regimens raised the possibility of giving scabies treatment alongside lymphatic filariasis or trachoma campaigns, using the same delivery machinery to reach communities already being visited.",
      refs: ["scabies-mda", "scabies-mda-one-vs-two", "mass-drug-administration", "ivermectin", "who"],
    },
    {
      id: "drugs",
      title: "Ivermectin, moxidectin and what comes next",
      body:
        "Ivermectin is now the backbone of scabies control and is listed on the WHO essential medicines list for the disease, with prequalified suppliers — a change that matters practically, because procurement of a quality-assured product is what makes national programmes possible. Two doses a week apart are recommended; it cannot be used in pregnancy or in children under 15 kilograms, who are treated with topical permethrin instead.\n\nBetter options are emerging. Moxidectin, a longer-acting relative of ivermectin already approved for river blindness, has shown high efficacy against scabies in clinical trials and could allow a single treatment with a longer window of protection. Spinosad, a topical suspension, is a newer alternative to permethrin, and afoxolaner outperformed two doses of ivermectin in a preclinical study. The pattern is unusual for an NTD: the drugs exist and are improving, and the constraint is delivery.",
      refs: ["ivermectin", "moxidectin", "permethrin", "who-essentials", "tpp"],
    },
    {
      id: "strep",
      title: "Why scabies matters beyond the itch",
      body:
        "Scabies is often described as a nuisance, which understates it. Scratching breaks the skin, streptococci and staphylococci colonise the lesions, and impetigo follows. In communities where this happens repeatedly in childhood, the immune consequences include post-streptococcal glomerulonephritis and rheumatic heart disease — cardiac damage that kills adults decades later. That chain is the strongest argument for treating scabies as a serious disease rather than a skin complaint.\n\nCrusted (Norwegian) scabies is a separate and more dangerous problem: in immunocompromised or elderly patients the mite multiplies into thousands, and the condition is highly transmissible and can seed outbreaks in hospitals and care homes. It needs aggressive treatment and isolation, and it is a reminder that the same mite can be a mild nuisance or a lethal complication depending on the host.",
      refs: ["permethrin", "stigma-and-disability", "community-health-workers"],
    },
    {
      id: "tungiasis",
      title: "Tungiasis and the other ectoparasitoses",
      body:
        "Scabies is grouped with other ectoparasitoses, and the most important is tungiasis — infestation by the jigger flea, Tunga penetrans, which burrows into the skin of the feet and produces painful, infected lesions. It affects people who walk barefoot in sandy soil in parts of sub-Saharan Africa and Latin America, particularly children and the elderly, and heavy infestation causes difficulty walking, secondary infection and sometimes tetanus.\n\nTreatment is unglamorous and imperfect: physical extraction, topical dimeticone, and in some programmes oral ivermectin, with evidence that is thinner than for scabies. Control depends on footwear, sanitation, treating animals that harbour the flea, and community campaigns. Like scabies, tungiasis is a disease of poverty that disappears when housing, footwear and water improve — and like scabies, it is on the NTD list largely so that it gets counted.",
      refs: ["tungiasis", "wash-interventions", "stigma-and-disability", "one-health-ntd-integration"],
    },
  ],

  technologies: ["scabies-mda"],
  trials: ["scabies-mda-one-vs-two"],
  institutions: ["who", "lshtm"],
  terms: ["tungiasis"],
};
