import type { Spike } from "../merge";

export const yawsSpike: Spike = {
  tldr: "A childhood bacterial infection of skin and bone that one dose of azithromycin cures — and the only NTD whose declared goal is worldwide eradication, now threatened by resistance to that single drug.",

  summary:
    "Yaws affects children under 15 in warm, humid, poor rural communities and causes painless skin lesions that progress, if untreated, to destructive lesions of skin, bone and cartilage years later. A single oral dose of azithromycin cures it as effectively as injected penicillin, which is what makes mass treatment and eradication feasible — and in 2012 WHO launched the Morges strategy, aiming to eradicate yaws by treating entire endemic communities. Progress was real but the target has slipped repeatedly, and two problems stand in the way. The first is that the serological tests used to diagnose yaws cannot distinguish it from venereal syphilis, so programmes cannot easily tell whether they are seeing endemic transmission or a different disease. The second, and more dangerous, is azithromycin resistance: resistant strains have emerged in Papua New Guinea and caused local transmission, which threatens the strategy that depends on a single antibiotic.",
  stats: [
    { label: "Target", value: "Eradication", note: "the Morges strategy, launched 2012" },
    { label: "Goal by 2030", value: "Eradication", note: "WHO's current target year" },
    {
      label: "Cure",
      value: "A single oral dose",
      note: "azithromycin 30 mg/kg (max 2 g); mass treatment needs ≥90% coverage",
      source: { label: "WHO — yaws (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    },
    {
      label: "Countries still endemic",
      value: "13",
      number: 13,
      unit: "countries",
      year: 2021,
      geography: "global",
      note: "123,866 cases reported from 13 countries in 2021, of which 1,102 were confirmed in 9",
      source: { label: "WHO — yaws (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    },
    {
      label: "Main threat",
      value: "Azithromycin resistance",
      note: "reported in Papua New Guinea, 2018",
      source: { label: "WHO — yaws (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    },
    { label: "Countries certified free", value: "A handful", note: "India among them; eradication is not yet complete anywhere" },
  ],

  timeline: [
    {
      date: "1950s",
      text: "A global yaws campaign treats millions with penicillin and drives cases down sharply across the tropics.",
      refs: ["benzathine-penicillin"],
    },
    {
      date: "1970s",
      text: "The campaign ends and yaws resurges as surveillance lapses, because the last cases were never eliminated.",
      refs: ["surveillance-data-gap"],
    },
    {
      date: "2012",
      text: "WHO launches the Morges strategy, aiming to eradicate yaws by mass treatment with oral azithromycin.",
      refs: ["total-community-treatment", "azithromycin", "who"],
    },
    {
      date: "2018",
      text: "Azithromycin-resistant yaws is reported in Papua New Guinea, with evidence of local transmission of resistant strains.",
      refs: ["azithromycin", "macrolide-resistance"],
    },
    {
      date: "2024",
      text: "Large-scale total community treatment is implemented across the Congo Basin, targeting more than 1.5 million people.",
      refs: ["total-community-treatment"],
    },
    {
      date: "2025",
      text: "Reviews of yaws clinical features, diagnosis and treatment call for better diagnostics, including a test for azithromycin resistance.",
      refs: ["yaws-dual-rdt", "macrolide-resistance"],
    },
  ],

  sections: [
    {
      id: "morges",
      title: "The Morges strategy and total community treatment",
      body:
        "The Morges strategy is straightforward: find endemic communities, treat everyone in them with a single dose of oral azithromycin, and repeat until transmission stops. This is total community treatment, and it is followed by total targeted treatment, in which only cases and their contacts are treated, as prevalence falls. The approach is credible because azithromycin is a one-dose cure that can be given by a community health worker without an injection, which is what made the 1950s penicillin campaigns logistically difficult.\n\nIt has been applied at scale, most recently across the Congo Basin, where rounds in Cameroon, the Central African Republic and the Republic of Congo targeted more than one and a half million people. The challenge is that yaws responds to treatment but recurs when surveillance weakens — the exact failure of the 1950s campaign — so a successful round must be followed by years of case-finding and treatment, not a declaration of victory.",
      refs: ["total-community-treatment", "azithromycin", "community-health-workers", "elimination"],
    },
    {
      id: "resistance",
      title: "Azithromycin resistance: the threat to eradication",
      body:
        "A disease whose eradication strategy rests on one antibiotic is exposed, and yaws is now exposed. Resistance to azithromycin in Treponema pallidum pertenue has been reported in Papua New Guinea, with evidence that resistant strains are transmitting locally. Because the entire Morges strategy is built on mass azithromycin, the emergence of resistance is not a complication — it is a threat to the goal itself.\n\nThe response has been to build alternatives and detection at the same time. Benzathine penicillin remains effective and can be used where azithromycin fails or is contraindicated, but it must be injected and needs a cold chain. WHO and partners have developed target product profiles for two diagnostics: a rapid test for yaws itself, and a test that can detect the macrolide resistance mutations, so programmes can see where resistance is emerging rather than discovering it after a campaign fails. That second test does not yet exist as a field product.",
      refs: ["macrolide-resistance", "azithromycin", "benzathine-penicillin", "yaws-dual-rdt", "diagnostics-gap"],
    },
    {
      id: "diagnosis",
      title: "Diagnosis: dual rapid tests and the syphilis problem",
      body:
        "The standard test for yaws detects antibodies to treponemes, and it cannot distinguish yaws from venereal syphilis — both are caused by Treponema pallidum subspecies. In a community where both occur, that ambiguity makes it hard to know what a positive result means, and hard to be confident that what is being treated is endemic transmission rather than imported syphilis. Dual rapid diagnostic tests that combine a treponemal and a non-treponemal test improve the picture by distinguishing active from past infection, and they are being used in yaws programmes.\n\nMolecular typing of the organism provides the definitive answer and has shown that yaws strains cluster geographically, which helps trace transmission. But it needs laboratory capacity that most endemic districts do not have. The diagnostic gap is at the heart of why yaws eradication has proved harder than it looked in 2012: a programme cannot certify the disappearance of a disease it cannot reliably distinguish from another.",
      refs: ["yaws-dual-rdt", "molecular-pcr", "sensitivity-specificity", "who"],
    },
    {
      id: "last-mile",
      title: "The Congo Basin and the last mile",
      body:
        "Yaws persists in tropical forest and coastal communities across West and Central Africa, Southeast Asia and the Pacific — places that are humid, remote and often served by the weakest health systems. Eradication requires reaching everyone in them repeatedly, and it requires doing so in countries where civil conflict, displacement and distance make even a single round difficult. The Congo Basin programmes are the current test of whether large-scale mass treatment can be delivered across borders.\n\nThe historical warning is sharp: yaws was nearly eliminated once before, and it came back because the last cases were left untreated and surveillance stopped. Eradication is not the absence of cases today but the certainty that there are none anywhere, sustained long enough to be sure — and that means the hardest and least visible work comes at the very end.",
      refs: ["who", "surveillance-data-gap", "access-and-pricing", "elimination"],
    },
    {
      id: "harder-than-trachoma",
      title: "Why yaws is harder than trachoma",
      body:
        "Trachoma has a single causative bacterium, a clear clinical grading system and an intervention for every stage of disease. Yaws has the same one-dose cure but a much weaker measurement apparatus: serology that cannot separate it from syphilis, confirmation that needs molecular testing, and no simple way to prove that transmission has stopped. That difference in measurability is the main reason one programme is close to elimination and the other keeps missing its target date.\n\nWhat yaws needs is therefore less a new drug than better sight: a field test that confirms infection and distinguishes it from syphilis, a test for macrolide resistance, and surveillance strong enough to certify an absence. Those are unglamorous requirements, but they are the difference between a campaign that lowers cases and one that ends a disease.",
      refs: ["diagnostics-gap", "yaws-dual-rdt", "macrolide-resistance", "sensitivity-specificity", "eot"],
    },
  ],

  technologies: ["total-community-treatment"],
  diagnostics: ["yaws-dual-rdt"],
  institutions: ["who"],
  terms: ["macrolide-resistance"],
};
