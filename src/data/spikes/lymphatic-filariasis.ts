import type { Spike } from "../merge";

export const lymphaticFilariasisSpike: Spike = {
  tldr: "Mosquito-borne filarial worms that block the lymph system and cause the permanent swelling of elephantiasis — a disease 23 countries have now eliminated as a public health problem.",

  summary:
    "Lymphatic filariasis is caused by Wuchereria bancrofti, Brugia malayi and Brugia timori, spread by mosquitoes. Most infections are asymptomatic, but in a minority the lymphatic vessels become blocked and the limbs or scrotum swell permanently — a disfiguring, disabling and heavily stigmatised condition. Mass drug administration has driven enormous progress: 23 countries and territories have now been validated by WHO as having eliminated lymphatic filariasis as a public health problem, Brazil being the twentieth in 2024 after China became the first in 2007. Triple-drug therapy combining ivermectin, DEC and albendazole clears microfilariae far faster than earlier regimens and can accelerate the endgame. What is not solved is the last mile: transmission can persist years after treatment stops, the available diagnostics miss the Brugia species, no drug reliably kills the adult worms, and the people already living with lymphoedema and hydrocele need care that mass treatment does not provide.",

  stats: [
    { label: "People infected", value: "≈ 120 million" },
    { label: "People at risk", value: "> 850 million" },
    {
      label: "Countries validated as eliminating it as a public health problem",
      value: "23",
      note: "China first (2007), Brazil the twentieth (2024)",
    },
    { label: "Road map target", value: "58 of 72 endemic countries", note: "≥ 80% validated by 2030" },
    { label: "Accelerating regimen", value: "IDA", note: "ivermectin + DEC + albendazole, single dose" },
    {
      label: "Doxycycline course",
      value: "4–6 weeks",
      note: "targets the Wolbachia bacteria the worms depend on; impractical for mass use",
    },
  ],

  timeline: [
    {
      date: "2000",
      text: "The Global Programme to Eliminate Lymphatic Filariasis is launched, built on annual mass treatment with donated medicines.",
      refs: ["mass-drug-administration", "who"],
    },
    {
      date: "2017",
      text: "WHO recommends triple-drug therapy (IDA) for lymphatic filariasis where onchocerciasis is not co-endemic.",
      refs: ["triple-drug-therapy-ida", "ivermectin", "diethylcarbamazine", "albendazole"],
    },
    {
      date: "2024",
      text: "Brazil becomes the twentieth country validated as having eliminated lymphatic filariasis as a public health problem.",
      refs: ["who", "fiocruz", "eot"],
    },
    {
      date: "2025",
      text: "Twenty-three countries have been validated, and India's ICMR starts a Phase IIa trial of oxfendazole as a possible treatment for the worm itself.",
      refs: ["oxfendazole-lf", "icmr", "oxfendazole"],
    },
  ],

  sections: [
    {
      id: "the-count",
      title: "Elimination as a public health problem: the count",
      body:
        "Success here is measured against a specific threshold rather than zero transmission. A country is validated as having eliminated lymphatic filariasis as a public health problem when transmission has been reduced below a defined level and that status survives a rigorous dossier review — China was first, in 2007, and by the end of 2025 twenty-three countries and territories had been validated, including Bangladesh, Malawi, Sri Lanka, Thailand, Togo, Yemen, Brazil and a long list of Pacific island states.\n\nThe 2021–2030 road map aims for at least 80% of endemic countries — 58 of 72 — to reach that status by 2030. That is an ambitious target, and the countries still in the programme are, by definition, the ones where transmission has been hardest to break: high-burden India and Nigeria, and settings where the vector or the parasite behaves differently.",
      refs: ["who", "elimination-roadmap", "eot", "uniting-ntds"],
    },
    {
      id: "ida",
      title: "Triple-drug therapy (IDA)",
      body:
        "The original regimen was two drugs, and it worked, but slowly: transmission often survived many annual rounds. A single co-administered dose of ivermectin, diethylcarbamazine and albendazole — IDA — clears microfilariae far more completely in the first round than two-drug combinations, and modelling and field experience suggest it can cut the number of years of treatment needed to reach the threshold. WHO recommended it in 2017, and countries including Kenya have used it to accelerate their programmes.\n\nThere is a limit: DEC can cause severe reactions in people who also carry onchocerciasis or Loa loa, so IDA cannot be used where those are co-endemic. That rules it out across much of West and Central Africa, which is exactly where the burden is highest — one more reason the drug pipeline matters.",
      refs: ["triple-drug-therapy-ida", "ivermectin", "diethylcarbamazine", "albendazole", "mass-drug-administration"],
    },
    {
      id: "endgame",
      title: "The endgame problem: transmission that persists",
      body:
        "The uncomfortable finding of the last few years is that lymphatic filariasis can keep transmitting after mass treatment stops. A 2025 study documented persistent transmission seven years after an MDA programme ended — a warning that a programme can look successful on paper and still leave a reservoir that reignites.\n\nThat makes post-validation surveillance the defining task of the current phase. Countries that have been validated must keep looking: antigen testing in children, xenomonitoring of mosquito pools, and rapid investigation of any new case. It also argues for treating long enough, at high enough coverage, rather than declaring victory when prevalence falls.",
      refs: ["eot", "xenomonitoring", "molecular-pcr", "surveillance-data-gap", "elimination-roadmap"],
    },
    {
      id: "diagnostics",
      title: "Diagnostics: the FTS and the Brugia gap",
      body:
        "Diagnosis rests on detection of circulating filarial antigen from adult W. bancrofti worms, most practically with the filarial test strip, a rapid antigen test that — unlike antibody tests — falls after the worms die and so can show whether transmission has actually stopped. It underpins mapping, impact assessment and post-validation surveillance.\n\nThe gap is Brugia. The standard antigen test does not detect B. malayi, which causes a large share of the disease in South and Southeast Asia, so programmes there have had to rely on antibody tests that cannot distinguish current from past infection. A second-generation test, Brugia Test Plus, detects antibodies to two Brugia antigens and performed reliably in hot, humid field conditions — an example of a diagnostic developed specifically to fill a hole the existing tools left.",
      refs: ["filarial-test-strip", "brugia-test-plus", "antibody-rdt", "lateral-flow-assays", "diagnostics-gap"],
    },
    {
      id: "macrofilaricide",
      title: "Curing the worm, not only blocking transmission",
      body:
        "Every drug in the lymphatic filariasis programme suppresses microfilariae; none reliably kills the adult worms. That is why programmes must run for years: treatment stops new infections and reduces the pool, but the adults keep producing larvae until they die naturally. A macrofilaricide — a course that kills the adults — would shorten programmes dramatically and would also help the individual patient rather than only the community.\n\nThe closest candidate is oxfendazole, a veterinary benzimidazole being developed by DNDi with partners. In 2025 the Indian Council of Medical Research began a Phase IIa proof-of-concept trial for lymphatic filariasis in India. Doxycycline already sterilises and eventually kills adult worms by targeting their Wolbachia symbiont, but its four-to-six week course makes it useless for mass campaigns; it remains a targeted, individual treatment.",
      refs: ["oxfendazole", "oxfendazole-lf", "doxycycline", "wolbachia", "dndi"],
    },
    {
      id: "morbidity",
      title: "Morbidity management and disability",
      body:
        "Mass treatment prevents new infections; it does not reverse lymphoedema, hydrocele or the recurrent skin infections that afflict people already affected. The programme's second pillar is therefore morbidity management: hygiene and skin care to prevent painful adenolymphangitis attacks, elevation and exercise to reduce swelling, surgery for hydrocele, and mental-health and anti-stigma support.\n\nThis matters because the disability and the stigma are what make lymphatic filariasis a disease of poverty. A person cured of infection can still be excluded from work and marriage by a swollen leg, and a programme that only distributes tablets has not finished the job.",
      refs: ["stigma-and-disability", "community-health-workers", "daly", "who"],
    },
  ],

  drugs: ["oxfendazole"],
  trials: ["oxfendazole-lf"],
  diagnostics: ["filarial-test-strip", "brugia-test-plus"],
  technologies: ["triple-drug-therapy-ida"],
  institutions: ["icmr", "dndi"],
  terms: ["eot"],
};
