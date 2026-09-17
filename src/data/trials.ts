import type { RecordOf } from "@/lib/schema";

export const trials: RecordOf<"trials">[] = [
  {
    id: "acoziborole-hat",
    name: "Acoziborole single-dose trial for sleeping sickness",
    tldr: "A trial of a single oral dose of acoziborole that reported cure rates above 95% in Gambiense sleeping sickness, including late-stage disease.",
    summary:
      "DNDi and partners tested acoziborole, a benzoxaborole, as a single oral treatment for Gambiense human African trypanosomiasis in the Democratic Republic of the Congo and Guinea. Reported cure rates were very high across both early and late-stage disease without the lumbar puncture staging that older treatments required. If registration follows, treatment could be given in a village clinic with one tablet — no hospital, no infusions, no cold chain.",
    asOf: "2026-09",
    phase: "Phase 2/3",
    status: "Reported positive; approved 2026",
    intervention: "Acoziborole, three tablets in a single day",
    result:
      "Cure rates up to 96% reported in both first- and second-stage Gambiense disease, with a favourable safety profile. The European Medicines Agency approved it in 2026 and the DRC registered it in June 2026.",
    links: [
      { label: "DNDi — acoziborole for sleeping sickness", url: "https://dndi.org/diseases/sleeping-sickness/" },
      { label: "DNDi — DRC approves acoziborole", url: "https://dndi.org/press-releases/2026/drc-approves-use-acoziborole-breakthrough-one-day-oral-treatment-against-sleeping-sickness/" },
    ],
    diseases: ["hat"],
    drugs: ["acoziborole"],
    institutions: ["dndi", "who"],
    stats: [
      { label: "Treatment", value: "Three tablets, one day" },
      { label: "Reported cure", value: "Up to 96%" },
    ],
  },
  {
    id: "fexinidazole-hat",
    name: "Fexinidazole for sleeping sickness",
    tldr: "The trial that produced the first all-oral cure for sleeping sickness, covering both stages of Gambiense disease.",
    summary:
      "The pivotal fexinidazole study, run by DNDi with Sanofi and national programmes, showed that a 10-day oral course cured Gambiense sleeping sickness patients, including those with late-stage disease, without the need for hospital infusions. It led to approval in 2019 and to the drug's addition to the WHO essential medicines list. A follow-on study tested an adjusted regimen in patients with more severe disease.",
    asOf: "2026-09",
    phase: "Phase 2/3",
    status: "Reported positive",
    intervention: "Fexinidazole, oral, 10 days",
    result: "Non-inferior to the standard of care at the time, with an oral regimen that removed the need for staging and infusions.",
    links: [
      { label: "DNDi — fexinidazole", url: "https://dndi.org/diseases/sleeping-sickness/" },
    ],
    diseases: ["hat"],
    drugs: ["fexinidazole"],
    institutions: ["dndi"],
    stats: [
      { label: "Course", value: "10 days oral" },
      { label: "Approved", value: "2019" },
    ],
  },
  {
    id: "nect-hat",
    name: "NECT: nifurtimox–eflornithine combination therapy",
    tldr: "The trial that showed combining two older drugs made late-stage sleeping sickness far easier to treat.",
    summary:
      "NECT combined oral nifurtimox with fewer eflornithine infusions and was shown to be easier to deliver and at least as effective as eflornithine alone for second-stage Gambiense sleeping sickness. It became the WHO-recommended treatment for late-stage disease and was a landmark in making treatment practical in resource-limited hospitals. It has since been overtaken by fexinidazole and, potentially, acoziborole.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "Nifurtimox plus eflornithine",
    result: "Simpler and at least as effective as eflornithine monotherapy for second-stage disease.",
    links: [
      { label: "DNDi — sleeping sickness history", url: "https://dndi.org/diseases/sleeping-sickness/" },
    ],
    diseases: ["hat"],
    drugs: ["nifurtimox", "eflornithine"],
    institutions: ["dndi", "who"],
  },
  {
    id: "emodepside-oncho",
    name: "Emodepside for onchocerciasis and soil-transmitted helminths",
    tldr: "Clinical development of a veterinary dewormer as a new human treatment with a mechanism different from ivermectin.",
    summary:
      "DNDi and partners advanced emodepside into human trials for onchocerciasis and soil-transmitted helminths. Because it acts on the SLO-1 potassium channel rather than the ivermectin channel, it could be used where ivermectin is contraindicated — notably areas where Loa loa circulates and ivermectin risks severe reactions — and provides a second mechanism if resistance emerges.",
    asOf: "2026-09",
    phase: "Phase 2/3",
    status: "Active — Phase 2 part 1 complete, part 2 planned",
    intervention: "Emodepside, oral",
    result:
      "Ongoing. Part 1 of the Phase 2 trial met its criteria with efficacy against juvenile and adult worms; part 2 will select doses. See the dedicated part 2 record.",
    links: [
      { label: "DNDi — emodepside", url: "https://dndi.org/diseases/onchocerciasis/" },
    ],
    diseases: ["onchocerciasis", "sth"],
    drugs: ["emodepside"],
    related: ["emodepside-part2-oncho"],
    institutions: ["dndi"],
    targets: ["slo-1"],
  },
  {
    id: "moxidectin-oncho",
    name: "Moxidectin for river blindness",
    tldr: "The trial showing moxidectin suppresses river-blindness microfilariae longer than ivermectin, leading to its approval in 2018.",
    summary:
      "The pivotal moxidectin study, run with DNDi and WHO, compared a single dose against ivermectin and found better and more sustained suppression of skin microfilariae. That supported FDA approval in 2018, making moxidectin the first new onchocerciasis medicine in decades. It has not widely displaced ivermectin, which remains donated free for mass treatment.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "Moxidectin, single oral dose",
    result: "Superior and longer-lasting microfilarial suppression compared with ivermectin.",
    links: [
      { label: "WHO — onchocerciasis treatment", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis"],
    drugs: ["moxidectin", "ivermectin"],
    institutions: ["dndi", "who"],
  },
  {
    id: "ivermectin-dose-oncho",
    name: "High-dose ivermectin for onchocerciasis",
    tldr: "A trial showing that a higher dose of ivermectin kills more adult worms, strengthening the push toward elimination.",
    summary:
      "Because standard ivermectin suppresses microfilariae but does not kill adult worms efficiently, a higher-dose regimen was tested to see whether it could sterilise or kill more adults. The trial reported improved efficacy, which matters for elimination — a treatment that harms adult worms shortens the years of repeated mass administration a programme must sustain.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "High-dose ivermectin",
    result: "Greater effect on adult worm viability than the standard dose.",
    links: [
      { label: "WHO — onchocerciasis elimination", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis"],
    drugs: ["ivermectin"],
    institutions: ["who"],
  },
  {
    id: "benefit-chagas",
    name: "BENEFIT: benznidazole in chronic Chagas cardiomyopathy",
    tldr: "The largest Chagas treatment trial, which found that benznidazole cleared the parasite but did not clearly improve heart outcomes.",
    summary:
      "BENEFIT randomised thousands of patients with established Chagas cardiomyopathy to benznidazole or placebo. The drug reduced detectable parasite DNA, but after years of follow-up it did not significantly reduce cardiac deterioration. The result reshaped the field: it showed that treating late-stage disease is not the same as curing it, and that the priority is finding patients earlier and developing better drugs.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported negative on the primary clinical endpoint",
    intervention: "Benznidazole versus placebo",
    result:
      "Reduced parasite detection but no significant reduction in cardiac clinical deterioration over follow-up.",
    links: [
      { label: "WHO — Chagas disease treatment", url: "https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" },
    ],
    diseases: ["chagas"],
    drugs: ["benznidazole"],
    institutions: ["fiocruz"],
    stats: [
      { label: "Scale", value: "Thousands of patients followed for years" },
      { label: "Lesson", value: "Parasite clearance did not translate into cardiac benefit" },
    ],
  },
  {
    id: "dndi-0690-leishmaniasis",
    name: "DNDi-0690 for visceral leishmaniasis",
    tldr: "A non-profit-developed oxaborole tested as a new oral treatment for visceral leishmaniasis.",
    summary:
      "DNDi-0690 is an oxaborole that emerged from DNDi's discovery pipeline, associated with inhibition of the parasite enzyme N-myristoyltransferase. It entered clinical testing for visceral leishmaniasis as part of the effort to find an oral treatment that avoids the toxicity of antimonials and the logistics of infusions. It illustrates the non-profit pipeline filling a gap the market left empty.",
    asOf: "2026-09",
    phase: "Phase 2",
    status: "Active",
    intervention: "DNDi-0690, oral",
    result: "Ongoing; developed specifically for a disease with no commercial market.",
    links: [
      { label: "DNDi — leishmaniasis portfolio", url: "https://dndi.org/diseases/leishmaniasis/" },
    ],
    diseases: ["leishmaniasis"],
    institutions: ["dndi"],
    targets: ["nmt"],
  },
  {
    id: "miltefosine-vl-india",
    name: "Miltefosine and combinations for visceral leishmaniasis in South Asia",
    tldr: "Trials that brought oral miltefosine and short combination regimens to visceral leishmaniasis in India, then saw efficacy slip.",
    summary:
      "Miltefosine was developed as the first oral treatment for visceral leishmaniasis and was deployed at scale in Bihar after antimonials failed. Later studies tested combinations of liposomal amphotericin B, miltefosine and paromomycin to shorten treatment and stretch drug supply. Over time, cure rates with miltefosine fell, evidence of emerging resistance that makes combination therapy and new drugs essential.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Mixed — initial success, then declining efficacy",
    intervention: "Miltefosine and combination regimens",
    result:
      "Made oral treatment possible and supported elimination efforts; later cure rates with miltefosine declined in South Asia.",
    links: [
      { label: "WHO — visceral leishmaniasis elimination", url: "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis" },
    ],
    diseases: ["leishmaniasis"],
    drugs: ["miltefosine", "liposomal-amphotericin-b", "paromomycin"],
    institutions: ["who"],
    stats: [
      { label: "Region", value: "Bihar, India" },
      { label: "Trend", value: "Efficacy declined over years of use" },
    ],
  },
  {
    id: "praziquantel-pediatric",
    name: "Praziquantel in preschool-aged children",
    tldr: "Studies establishing a paediatric praziquantel formulation and dosing so that young children can be treated for schistosomiasis.",
    summary:
      "Preschool-aged children were long excluded from schistosomiasis treatment because the standard tablet was hard to give them and dosing was unestablished. Trials of a paediatric dispersible formulation, and pharmacokinetic studies to set the right dose, showed treatment is safe and effective in this group. That matters because very young children carry a high burden and were systematically left out of mass campaigns.",
    asOf: "2026-09",
    phase: "Phase 2/3",
    status: "Reported positive",
    intervention: "Paediatric praziquantel formulation",
    result: "Safe and effective in preschool-aged children, supporting inclusion in mass treatment.",
    links: [
      { label: "WHO — schistosomiasis in children", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diseases: ["schistosomiasis"],
    drugs: ["praziquantel"],
    institutions: ["who", "tdr"],
    stats: [
      { label: "Gap addressed", value: "Exclusion of children under 5 from treatment" },
    ],
  },
  {
    id: "yaws-azithromycin",
    name: "Azithromycin for yaws eradication",
    tldr: "The trial showing a single oral dose of azithromycin cures yaws as well as an injected penicillin, enabling mass eradication.",
    summary:
      "A landmark study in Papua New Guinea found that a single oral dose of azithromycin was non-inferior to injected benzathine penicillin for curing yaws. That result made community-wide mass treatment possible, and in 2012 WHO launched the Morges strategy to eradicate yaws. Progress has been slowed by resurges and by the difficulty of reaching the last affected communities.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "Single-dose azithromycin versus benzathine penicillin",
    result: "Oral azithromycin was non-inferior for curing yaws, enabling mass treatment.",
    links: [
      { label: "WHO — yaws eradication", url: "https://www.who.int/news-room/fact-sheets/detail/yaws" },
    ],
    diseases: ["yaws"],
    drugs: ["azithromycin", "benzathine-penicillin"],
    institutions: ["who"],
    stats: [
      { label: "Consequence", value: "Enabled the 2012 eradication strategy" },
    ],
  },
  {
    id: "trachoma-azithromycin",
    name: "Azithromycin mass treatment for trachoma",
    tldr: "Trials showing that single-dose azithromycin reduces the eye infection that causes trachoma, forming the 'A' in the SAFE strategy.",
    summary:
      "Randomised trials in Tanzania and elsewhere showed that single-dose oral azithromycin dramatically reduced the prevalence of the chlamydial eye infection that leads to trachoma, compared with topical treatment. This established the 'A' in WHO's SAFE strategy (surgery, antibiotics, facial cleanliness, environmental improvement) and turned trachoma from an intractable cause of blindness into an elimination target.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "Mass azithromycin treatment",
    result: "Large reductions in infection prevalence, underpinning the SAFE strategy and elimination targets.",
    links: [
      { label: "WHO — trachoma elimination", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    ],
    diseases: ["trachoma"],
    drugs: ["azithromycin"],
    institutions: ["who"],
  },
  {
    id: "tak-003-dengue",
    name: "TAK-003 (Qdenga) dengue vaccine trial",
    tldr: "A large trial of a two-dose dengue vaccine that protected against all four serotypes without needing prior-infection screening.",
    summary:
      "The TIDES trial evaluated TAK-003, a live-attenuated two-dose dengue vaccine, in more than twenty thousand children across Latin America and Asia. It showed protection against symptomatic and hospitalised dengue across serotypes, including in people with no prior dengue infection — removing the pre-vaccination screening requirement that had limited the earlier vaccine. TAK-003 is licensed in several countries.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "TAK-003, two-dose dengue vaccine",
    result: "Protection against symptomatic and hospitalised dengue across serotypes, without prior-infection screening.",
    links: [
      { label: "WHO — dengue vaccines", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
    ],
    diseases: ["dengue-chikungunya"],
    technologies: ["dengue-vaccination"],
    institutions: ["who"],
    stats: [
      { label: "Scale", value: "> 20,000 children" },
    ],
  },
  {
    id: "butantan-dv-dengue",
    name: "Butantan-DV single-dose dengue vaccine trial",
    tldr: "A Brazilian single-dose dengue vaccine trial reporting strong efficacy across serotypes and age groups.",
    summary:
      "Butantan-DV is a single-dose, live-attenuated tetravalent dengue vaccine developed in Brazil. A large randomised trial reported substantial efficacy against symptomatic dengue across all four serotypes and in both younger and older participants, with a good safety profile. A single-dose vaccine removes a major logistical obstacle for mass programmes in middle-income countries.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive",
    intervention: "Butantan-DV, single-dose dengue vaccine",
    result: "High efficacy against symptomatic dengue across serotypes and age groups.",
    links: [
      { label: "WHO — dengue vaccines", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
    ],
    diseases: ["dengue-chikungunya"],
    technologies: ["dengue-vaccination"],
    institutions: ["fiocruz"],
    stats: [
      { label: "Dosing", value: "Single dose" },
      { label: "Origin", value: "Brazil" },
    ],
  },
  {
    id: "rabies-dose-sparing",
    name: "Intradermal dose-sparing rabies PEP",
    tldr: "Trials showing that giving rabies vaccine into the skin uses far less product and stretches scarce supplies.",
    summary:
      "Intradermal regimens for rabies post-exposure prophylaxis use a fraction of the dose of intramuscular regimens while producing adequate immunity, which WHO has recommended since 2018. For countries where vaccine supply and cost limit access, dose-sparing can mean many more bite victims are treated from the same stock. The remaining obstacle is rabies immunoglobulin, which has no dose-sparing equivalent and remains the scarce, expensive component.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Reported positive; adopted in WHO guidance",
    intervention: "Intradermal rabies vaccine regimens",
    result: "Adequate immunogenicity with substantially less vaccine per patient.",
    links: [
      { label: "WHO — rabies post-exposure prophylaxis", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    ],
    diseases: ["rabies"],
    drugs: ["rabies-postexposure-prophylaxis"],
    technologies: ["rabies-vaccination"],
    institutions: ["who"],
    stats: [
      { label: "Effect", value: "Large reduction in vaccine used per patient" },
      { label: "Remaining gap", value: "Immunoglobulin has no dose-sparing substitute" },
    ],
  },
  {
    id: "snakebite-antivenom-trials",
    name: "Trials of snake antivenoms and next-generation products",
    tldr: "Clinical studies comparing antivenom doses and testing new products, aiming to fix a supply system that leaves most victims untreated.",
    summary:
      "Research on snakebite treatment spans dose-finding studies (how much antivenom is enough), comparisons between products from different manufacturers, and early work on recombinant antibodies. A recurring finding is that many antivenoms on the market are of uncertain quality, which is why WHO introduced a prequalification programme. The deeper problem is distribution and affordability, not a shortage of evidence.",
    asOf: "2026-09",
    phase: "Phase 2/3",
    status: "Multiple studies, mixed",
    intervention: "Antivenom dose regimens and candidate products",
    result:
      "Dose-finding evidence exists, but quality and access, not efficacy, are the main barriers; WHO prequalification is addressing product quality.",
    links: [
      { label: "WHO — snakebite antivenom prequalification", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    ],
    diseases: ["snakebite"],
    drugs: ["snake-antivenom"],
    institutions: ["who"],
  },
];
