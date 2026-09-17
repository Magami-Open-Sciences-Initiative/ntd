import type { RecordOf } from "@/lib/schema";

/**
 * Trials added during the registry cross-check (ClinicalTrials.gov, PACTR and
 * ChiCTR), and trials whose registration was found while verifying the existing
 * list. Kept in one file so the registry pass is visible as a set; the graph
 * treats these identically to the trials in `trials.ts`.
 *
 * Every record cites its source registry record directly. ChiCTR is behind a
 * web application firewall that blocks automated retrieval, so its one record
 * here cites the registration number and the peer-reviewed publication that
 * reports it rather than a fetchable registry page.
 */
export const registryTrials: RecordOf<"trials">[] = [
  {
    id: "moxidectin-mda-trial",
    name: "Moxidectin versus ivermectin as mass drug administration",
    tldr: "A 52,000-person cluster-randomised trial testing whether moxidectin can replace ivermectin in mass treatment for onchocerciasis and other neglected tropical diseases.",
    summary:
      "Moxidectin is a single-dose drug that clears Onchocerca volvulus microfilariae more durably than ivermectin in individual treatment. This cluster-randomised Phase 4 trial, led by the Kirby Institute in Angola with WHO and a large partner group, tests whether that advantage holds when moxidectin is used as mass drug administration across whole communities, and whether it also reduces soil-transmitted helminths and scabies. It began in August 2025 and is the first test at scale of moxidectin as a public-health MDA tool rather than an individual treatment.",
    asOf: "2026-09",
    phase: "Phase 4",
    status: "Recruiting (started August 2025)",
    sponsor: "Kirby Institute, with WHO and partners",
    intervention: "Moxidectin versus ivermectin, community-wide mass drug administration",
    result: "Ongoing; primary outcome is the prevalence of Onchocerca volvulus microfilariae. Primary completion estimated 2029.",
    registry: "ClinicalTrials.gov NCT07145736",
    links: [
      { label: "Moxidectin vs ivermectin MDA cluster trial (ClinicalTrials.gov NCT07145736)", url: "https://clinicaltrials.gov/study/NCT07145736" },
      { label: "WHO — onchocerciasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis", "sth", "scabies"],
    drugs: ["moxidectin", "ivermectin"],
    institutions: ["who"],
    stats: [
      { label: "Planned enrolment", value: "52,000", number: 52000, unit: "people", year: 2025, geography: "Angola", source: { label: "ClinicalTrials.gov NCT07145736", url: "https://clinicaltrials.gov/study/NCT07145736" } },
      { label: "Design", value: "Cluster-randomised" },
    ],
  },
  {
    id: "stop-hat-phase3",
    name: "Stop Transmission of Gambiense HAT (acoziborole)",
    tldr: "A Phase 3 study treating seropositive people with acoziborole to interrupt transmission of Gambiense sleeping sickness in the DRC.",
    summary:
      "Screening for Gambiense human African trypanosomiasis identifies people who are seropositive but not yet confirmed cases. This Phase 3 intervention study, led by the Institute of Tropical Medicine in Antwerp with DNDi and the DRC's national programme, treats seropositive people with single-dose acoziborole and measures whether that interrupts transmission — a test of the drug as an elimination tool rather than only a cure. It began in March 2024 and is recruiting 2,500 participants in the Democratic Republic of the Congo.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Recruiting (started March 2024)",
    sponsor: "Institute of Tropical Medicine, Antwerp, with DNDi",
    intervention: "Acoziborole, single oral dose, in g-HAT-seropositive people",
    result: "Ongoing; co-primary outcomes are interruption of transmission of T. b. gambiense and safety assessment. Primary completion estimated end 2026.",
    registry: "ClinicalTrials.gov NCT07789743",
    links: [
      { label: "Stop Transmission of Gambiense HAT (ClinicalTrials.gov NCT07789743)", url: "https://clinicaltrials.gov/study/NCT07789743" },
      { label: "WHO — human African trypanosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/trypanosomiasis-human-african-(sleeping-sickness)" },
    ],
    diseases: ["hat"],
    drugs: ["acoziborole"],
    institutions: ["dndi", "who"],
    stats: [
      { label: "Planned enrolment", value: "2,500", number: 2500, unit: "participants", year: 2024, geography: "Democratic Republic of the Congo", source: { label: "ClinicalTrials.gov NCT07789743", url: "https://clinicaltrials.gov/study/NCT07789743" } },
    ],
  },
  {
    id: "ida-oncho-trial",
    name: "IDA (ivermectin–DEC–albendazole) for onchocerciasis",
    tldr: "A PACTR-registered African trial of the three-drug IDA regimen in people with onchocerciasis, after pre-treatment with ivermectin.",
    summary:
      "The triple-drug regimen of ivermectin, diethylcarbamazine and albendazole (IDA) is the accelerating strategy for lymphatic filariasis elimination, but it had not been safely tested in people who also carry Onchocerca volvulus, because DEC can provoke severe reactions in onchocerciasis. This trial, registered in the Pan African Clinical Trials Registry in 2019 with a target of 300 participants, gave ivermectin first to clear microfilariae and then tested IDA, measuring both safety and efficacy against adult worms — an improved macrofilaricide would be a major advance for onchocerciasis elimination. It is a good illustration of African-led, registry-based research that does not appear in ClinicalTrials.gov.",
    asOf: "2026-09",
    phase: "Randomised controlled trial",
    status: "Registered 2019 (PACTR)",
    sponsor: "African research consortium (PACTR registration)",
    intervention: "Ivermectin pre-treatment followed by IDA (ivermectin + diethylcarbamazine + albendazole)",
    result: "Testing safety and macrofilaricidal efficacy of IDA in onchocerciasis; reported through the registry record.",
    registry: "PACTR201906665550709",
    links: [
      { label: "IDA for Onchocerciasis (PACTR201906665550709)", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=8210" },
      { label: "WHO — onchocerciasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis", "lymphatic-filariasis"],
    drugs: ["ivermectin", "diethylcarbamazine", "albendazole"],
    stats: [
      { label: "Target enrolment", value: "300", number: 300, unit: "participants", year: 2019, source: { label: "PACTR201906665550709", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=8210" } },
    ],
  },
  {
    id: "takeoff-lf",
    name: "TAKeOFF: test-and-treat for lymphatic filariasis elimination",
    tldr: "A Phase 3 PACTR-registered trial testing a test-and-treat strategy, rather than mass treatment, for eliminating lymphatic filariasis in Ghana and Tanzania.",
    summary:
      "As lymphatic filariasis programmes approach elimination, mass drug administration becomes less efficient and the residual infections are harder to find. TAKeOFF tests a targeted alternative: screen for infection and treat those who test positive, rather than treating entire communities. The Phase 3 trial is registered in the Pan African Clinical Trials Registry in 2024 and planned for Ghana and Tanzania with a target of 324 participants. It speaks to a practical problem the WHO road map does not solve on its own — how to finish elimination once prevalence is low.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Registered 2024 (PACTR)",
    sponsor: "African research consortium (PACTR registration)",
    intervention: "Test-and-treat strategy for lymphatic filariasis",
    result: "Testing whether test-and-treat achieves elimination more efficiently than mass drug administration; reported through the registry record.",
    registry: "PACTR202409873380150",
    links: [
      { label: "TAKeOFF test-and-treat for LF (PACTR202409873380150)", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=31895" },
      { label: "WHO — lymphatic filariasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
    ],
    diseases: ["lymphatic-filariasis"],
    drugs: ["ivermectin", "albendazole", "diethylcarbamazine"],
    stats: [
      { label: "Target enrolment", value: "324", number: 324, unit: "participants", year: 2024, geography: "Ghana and Tanzania", source: { label: "PACTR202409873380150", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=31895" } },
    ],
  },
  {
    id: "bdq4lep-leprosy",
    name: "BDQ4LEP: bedaquiline for multibacillary leprosy (Mali)",
    tldr: "A PACTR-registered pilot trial of bedaquiline added to standard multidrug therapy for multibacillary leprosy in Mali.",
    summary:
      "Leprosy treatment has been unchanged for decades, and shorter or stronger regimens are needed. BDQ4LEP is a pilot clinical trial run in Mali and registered retrospectively in the Pan African Clinical Trials Registry in 2024, testing bedaquiline — already used for drug-resistant tuberculosis — in people with multibacillary leprosy. It complements the BE-PEOPLE prophylaxis trials by testing bedaquiline as treatment, and it is one of the relatively few leprosy treatment trials registered in an African registry.",
    asOf: "2026-09",
    phase: "Pilot clinical trial",
    status: "Completed (PACTR registration, 2024)",
    sponsor: "Malian national programme and partners",
    intervention: "Bedaquiline added to multidrug therapy for multibacillary leprosy",
    result: "Completed; a pilot evaluation of bedaquiline-containing treatment for multibacillary leprosy.",
    registry: "PACTR202408643515316",
    links: [
      { label: "BDQ4LEP (PACTR202408643515316)", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=31799" },
      { label: "WHO — leprosy (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
    ],
    diseases: ["leprosy"],
    drugs: ["bedaquiline", "rifampicin", "dapsone", "clofazimine"],
    institutions: ["who"],
  },
  {
    id: "schistoact-kenya",
    name: "SCHISTOACT: praziquantel with antimalarials in Kenyan children",
    tldr: "A Kenyan PACTR-registered trial comparing praziquantel alone with praziquantel plus antimalarial combinations in children with bilharzia.",
    summary:
      "Schistosomiasis and malaria overlap across much of sub-Saharan Africa, and the antimalarials artesunate and mefloquine also have activity against schistosomes. SCHISTOACT, registered in the Pan African Clinical Trials Registry in 2020 and run in Kirinyaga county, Kenya, compared praziquantel alone with combinations that add an antimalarial in school-aged children with Schistosoma mansoni. It is a pragmatic African-registered study of whether an existing drug combination can improve cure rates where both infections are common.",
    asOf: "2026-09",
    phase: "Randomised controlled trial",
    status: "Completed (PACTR registration, 2020)",
    sponsor: "Kenyan research consortium",
    intervention: "Praziquantel versus praziquantel plus antimalarial combinations",
    result: "Completed; compared cure with praziquantel alone versus combinations with antimalarials in children.",
    registry: "PACTR202001919442161",
    links: [
      { label: "SCHISTOACT (PACTR202001919442161)", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=9591" },
      { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diseases: ["schistosomiasis"],
    drugs: ["praziquantel"],
  },
  {
    id: "tomokeza-sudan-ebola",
    name: "Tokomeza Ebola: Sudan ebolavirus vaccine ring trial (Uganda)",
    tldr: "A PACTR-registered ring-vaccination trial of a Sudan ebolavirus vaccine in Uganda, launched during the 2025 outbreak.",
    summary:
      "The 2022–2023 Sudan ebolavirus outbreak in Uganda had no licensed vaccine. A ring-vaccination trial was launched, using the same design that proved rVSV-ZEBOV worked in Guinea: vaccinate the contacts of each case and their contacts, and compare incidence inside and outside the rings. Tokomeza Ebola (Solidarity against Ebola) was registered in the Pan African Clinical Trials Registry in February 2025 and targets 150 participants. It matters because Sudan ebolavirus is a distinct virus from Zaire ebolavirus, the licensed vaccines do not cover it, and the trial is the fastest route from an outbreak to evidence.",
    asOf: "2026-09",
    phase: "Randomised ring-vaccination trial",
    status: "Recruiting (registered February 2025)",
    sponsor: "Ugandan national programme with WHO and partners",
    intervention: "Candidate Sudan ebolavirus vaccine, ring vaccination",
    result: "Ongoing; comparing Ebola incidence in vaccinated versus unvaccinated rings.",
    registry: "PACTR202502515126090",
    links: [
      { label: "Tokomeza Ebola (PACTR202502515126090)", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=33374" },
      { label: "WHO — Ebola disease (health topic)", url: "https://www.who.int/health-topics/ebola-disease" },
    ],
    diseases: ["ebola"],
    technologies: ["ring-vaccination", "ebola-vaccines"],
    institutions: ["who"],
    stats: [
      { label: "Target enrolment", value: "150", number: 150, unit: "participants", year: 2025, geography: "Uganda", source: { label: "PACTR202502515126090", url: "https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=33374" } },
    ],
  },
  {
    id: "schisto-japonica-control",
    name: "Integrated control of Schistosoma japonicum (China)",
    tldr: "A ChiCTR-registered study of an integrated control strategy for Schistosoma japonicum in China, emphasising cattle as the reservoir.",
    summary:
      "In China, Schistosoma japonicum is a zoonosis in which water buffalo and cattle are the main reservoir, so control has to include the animals as well as people. This study, registered with the Chinese Clinical Trial Registry as ChiCTR-PRC-12002405, assessed an integrated strategy that combined human treatment with interventions targeting bovines in a marshland area. It is included here as a representative of the Chinese trial registry, which indexes a large volume of NTD research from China that is otherwise invisible in Western databases. ChiCTR's site blocks automated retrieval, so the citation is to the registration number and the peer-reviewed report of the trial.",
    asOf: "2026-09",
    phase: "Community intervention study",
    status: "Completed (reported 2013)",
    sponsor: "Chinese national schistosomiasis programme",
    intervention: "Integrated human and bovine-targeted control of S. japonicum",
    result: "Reported in PLoS Neglected Tropical Diseases (2013); the integrated strategy reduced S. japonicum infection in the intervention area.",
    registry: "ChiCTR-PRC-12002405",
    links: [
      { label: "Chinese Clinical Trial Registry (ChiCTR)", url: "https://www.chictr.org.cn/indexEN.html" },
      { label: "Assessing an integrated control strategy for S. japonicum (PLoS NTD 2013)", url: "https://doi.org/10.1371/journal.pntd.0002122" },
    ],
    diseases: ["schistosomiasis"],
    drugs: ["praziquantel"],
  },
  {
    id: "r21-seasonal-mass",
    name: "Seasonal R21 mass vaccination for malaria elimination",
    tldr: "A Phase 3 trial testing seasonal mass R21/Matrix-M vaccination as a way to interrupt malaria transmission in The Gambia and Burkina Faso.",
    summary:
      "Malaria vaccines are recommended for children, but seasonal mass vaccination of entire communities could interrupt transmission rather than only protect individuals. This Phase 3 trial, led by the London School of Hygiene and Tropical Medicine with The Gambia's national malaria programme, gave three doses of R21/Matrix-M to all age groups in selected areas ahead of the transmission season and measured PCR-confirmed infection at peak season. It is a test of a campaign strategy that could complement, or in some settings replace, routine childhood immunisation. The registry lists its status as unknown, and no results had been posted at the time of the last check.",
    asOf: "2026-09",
    phase: "Phase 3",
    status: "Status unknown in registry (started 2024)",
    sponsor: "London School of Hygiene and Tropical Medicine, with The Gambia's national malaria programme",
    intervention: "R21/Matrix-M, three doses, mass vaccination of all age groups",
    result: "Primary outcome is PCR-confirmed malaria prevalence in all age groups at peak transmission season; no results posted in the registry.",
    registry: "ClinicalTrials.gov NCT06578572",
    links: [
      { label: "Seasonal R21 mass vaccination (ClinicalTrials.gov NCT06578572)", url: "https://clinicaltrials.gov/study/NCT06578572" },
      { label: "WHO — malaria (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
    ],
    diseases: ["malaria"],
    technologies: ["malaria-vaccines"],
    institutions: ["lshtm", "who"],
    stats: [
      { label: "Planned enrolment", value: "16,200", number: 16200, unit: "people", year: 2024, geography: "The Gambia and Burkina Faso", source: { label: "ClinicalTrials.gov NCT06578572", url: "https://clinicaltrials.gov/study/NCT06578572" } },
    ],
  },
  {
    id: "varespladib-snakebite",
    name: "BRAVIO: varespladib for snakebite envenoming",
    tldr: "A Phase 2 trial of varespladib, a drug designed to work against many snake venoms, added to standard antivenom.",
    summary:
      "Antivenom is specific to the snake that bit the patient, expensive, and often unavailable — so a drug that works across many venoms would be transformative. Varespladib inhibits secretory phospholipase A2, a toxin family present in many snake venoms. The BRAVIO trial, sponsored by Ophirex, gave intravenous then oral varespladib alongside standard of care to people bitten by vipers and elapids, measuring severity and recovery. It completed in November 2024; a broad-spectrum snakebite drug remains one of the field's highest priorities.",
    asOf: "2026-09",
    phase: "Phase 2",
    status: "Completed (November 2024)",
    sponsor: "Ophirex, Inc.",
    intervention: "Varespladib, intravenous followed by oral, added to standard of care",
    result: "Completed; primary outcomes were venom-severity score for viper bites and time to recovery of head-lift for elapid bites.",
    registry: "ClinicalTrials.gov NCT05717062",
    links: [
      { label: "BRAVIO varespladib trial (ClinicalTrials.gov NCT05717062)", url: "https://clinicaltrials.gov/study/NCT05717062" },
      { label: "WHO — snakebite envenoming (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    ],
    diseases: ["snakebite"],
    technologies: ["recombinant-antivenoms"],
    stats: [
      { label: "Enrolment", value: "140", number: 140, unit: "participants", year: 2024, source: { label: "ClinicalTrials.gov NCT05717062", url: "https://clinicaltrials.gov/study/NCT05717062" } },
    ],
  },
  {
    id: "sm14-vaccine",
    name: "Sm14 schistosomiasis vaccine in school children",
    tldr: "A Phase 2b trial of the Sm14 vaccine in Senegalese school children, one of the few schistosomiasis vaccine candidates to reach field testing.",
    summary:
      "Sm14 is a fatty-acid-binding protein vaccine developed by the Oswaldo Cruz Foundation in Brazil, one of only a handful of schistosomiasis vaccine candidates to reach clinical testing. This Phase 2b trial, run in Senegal in school children who were healthy or infected with S. mansoni and/or S. haematobium, tested safety and immunogenicity with the GLA-SE adjuvant. It completed in 2019. Vaccines matter for schistosomiasis because praziquantel is the only drug in use and does not prevent reinfection, so a vaccine would change the elimination calculus.",
    asOf: "2026-09",
    phase: "Phase 2b",
    status: "Completed (2019)",
    sponsor: "Oswaldo Cruz Foundation (Fiocruz), with partners",
    intervention: "Sm14 vaccine with GLA-SE adjuvant",
    result: "Completed; reported safety and immunogenicity in Senegalese school children.",
    registry: "ClinicalTrials.gov NCT03799510",
    links: [
      { label: "Sm14 Phase 2b in school children (ClinicalTrials.gov NCT03799510)", url: "https://clinicaltrials.gov/study/NCT03799510" },
      { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diseases: ["schistosomiasis"],
    institutions: ["fiocruz"],
    stats: [
      { label: "Enrolment", value: "95", number: 95, unit: "children", year: 2019, geography: "Senegal", source: { label: "ClinicalTrials.gov NCT03799510", url: "https://clinicaltrials.gov/study/NCT03799510" } },
    ],
  },
  {
    id: "arpraziquantel-introduction",
    name: "Arpraziquantel for preschool-aged children (introduction study)",
    tldr: "A large implementation study introducing the child-friendly arpraziquantel tablet to preschool-aged children in Kenya, Côte d'Ivoire and Uganda.",
    summary:
      "Arpraziquantel is the paediatric formulation of praziquantel for children from 3 months to 6 years, a group that carries a heavy schistosome burden but was almost never treated because the standard tablet is large and bitter. After a positive European Medicines Agency opinion in 2023 and WHO prequalification in 2024, this small-scale public-health intervention study introduced the dispersible tablet to preschool-aged children in Kenya, Côte d'Ivoire and Uganda, aiming to enrol 18,500 children and working out how to deliver it through routine services. It is the delivery counterpart to the efficacy trial, and a model for turning a new formulation into programme practice.",
    asOf: "2026-09",
    phase: "Implementation study",
    status: "Recruiting (started November 2024)",
    sponsor: "Swiss TPH and partners, with Unlimit Health",
    intervention: "Arpraziquantel 150 mg dispersible tablet",
    result: "Ongoing; primary outcome is platform performance for arpraziquantel distribution in preschool-aged children.",
    registry: "ClinicalTrials.gov NCT06698510",
    links: [
      { label: "Arpraziquantel introduction study (ClinicalTrials.gov NCT06698510)", url: "https://clinicaltrials.gov/study/NCT06698510" },
      { label: "WHO — schistosomiasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diseases: ["schistosomiasis"],
    drugs: ["arpraziquantel"],
    institutions: ["pediatric-praziquantel-consortium", "who"],
    stats: [
      { label: "Planned enrolment", value: "18,500", number: 18500, unit: "children", year: 2024, geography: "Kenya, Côte d'Ivoire and Uganda", source: { label: "ClinicalTrials.gov NCT06698510", url: "https://clinicaltrials.gov/study/NCT06698510" } },
    ],
  },
  {
    id: "ivermectin-scabies-young-children",
    name: "ITCHY: ivermectin for scabies in children under 5",
    tldr: "A Phase 2 study of ivermectin dosing and safety in children younger than 5, a group for whom the drug is not currently recommended.",
    summary:
      "Ivermectin is highly effective against scabies but is not recommended for children under 15 kg or under 5 years, which excludes the age group with the highest scabies prevalence. The ITCHY study, led by the Murdoch Children's Research Institute in Laos, measured ivermectin drug exposure and safety in children younger than 5 to establish a dose that works without unacceptable side effects. It completed in mid-2026 and directly addresses a labelling gap that has kept a cheap, single-dose treatment away from the children who need it most.",
    asOf: "2026-09",
    phase: "Phase 2",
    status: "Active, not recruiting (started June 2025)",
    sponsor: "Murdoch Children's Research Institute, with the Lao Tropical and Public Health Institute",
    intervention: "Ivermectin tablets, dose-finding in children under 5",
    result: "Ongoing; primary outcome is ivermectin drug exposure (area under the concentration–time curve).",
    registry: "ClinicalTrials.gov NCT05500326",
    links: [
      { label: "ITCHY study (ClinicalTrials.gov NCT05500326)", url: "https://clinicaltrials.gov/study/NCT05500326" },
      { label: "WHO — scabies (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/scabies" },
    ],
    diseases: ["scabies"],
    drugs: ["ivermectin"],
    stats: [
      { label: "Enrolment", value: "120", number: 120, unit: "children", year: 2025, geography: "Laos", source: { label: "ClinicalTrials.gov NCT05500326", url: "https://clinicaltrials.gov/study/NCT05500326" } },
    ],
  },
  {
    id: "oncho-epilepsy-ivermectin",
    name: "OAETREAT: extra ivermectin in onchocerciasis-associated epilepsy",
    tldr: "A Phase 4 trial testing whether additional ivermectin treatment reduces seizures in people with onchocerciasis-associated epilepsy.",
    summary:
      "In onchocerciasis-endemic areas, a substantial share of epilepsy is associated with the infection, especially where transmission is intense. OAETREAT, led by the University of Antwerp in the Democratic Republic of the Congo with European Research Council funding, gave extra rounds of ivermectin to people with onchocerciasis-associated epilepsy and measured seizure freedom. It completed in 2019 and is one of the few trials to treat the neurological consequence of an NTD, not just the infection itself.",
    asOf: "2026-09",
    phase: "Phase 4",
    status: "Completed (2019)",
    sponsor: "University of Antwerp, funded by the European Research Council",
    intervention: "Additional ivermectin treatment",
    result: "Completed; primary outcome was seizure freedom.",
    registry: "ClinicalTrials.gov NCT03852303",
    links: [
      { label: "OAETREAT (ClinicalTrials.gov NCT03852303)", url: "https://clinicaltrials.gov/study/NCT03852303" },
      { label: "WHO — onchocerciasis (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/onchocerciasis" },
    ],
    diseases: ["onchocerciasis"],
    drugs: ["ivermectin"],
    stats: [
      { label: "Enrolment", value: "197", number: 197, unit: "people", year: 2019, geography: "Democratic Republic of the Congo", source: { label: "ClinicalTrials.gov NCT03852303", url: "https://clinicaltrials.gov/study/NCT03852303" } },
    ],
  },
  {
    id: "chikv-vlp-followup",
    name: "Vimkunya long-term follow-up (CHIKV VLP)",
    tldr: "A Phase 3 follow-up study tracking how long the virus-like-particle chikungunya vaccine keeps antibody levels up, and how a booster performs.",
    summary:
      "Vimkunya, a virus-like-particle chikungunya vaccine, was licensed in 2025 after trials showed a single dose produces neutralising antibodies. This Phase 3 long-term follow-up study, sponsored by Bavarian Nordic, follows 715 adults and adolescents for up to five years after a single or booster dose, measuring how many keep a protective antibody titre and how they respond to a booster. Durability data of this kind decide whether a vaccine needs a booster and how it can be used in outbreak response, and it is the kind of post-licensure evidence that a newly approved NTD vaccine depends on.",
    asOf: "2026-09",
    phase: "Phase 3 (long-term follow-up)",
    status: "Active, not recruiting (started August 2023)",
    sponsor: "Bavarian Nordic",
    intervention: "CHIKV virus-like-particle vaccine, single dose or booster",
    result: "Ongoing; primary outcomes are the proportion maintaining protective neutralising titres yearly to five years and the booster response rate.",
    registry: "ClinicalTrials.gov NCT06007183",
    links: [
      { label: "CHIKV VLP long-term follow-up (ClinicalTrials.gov NCT06007183)", url: "https://clinicaltrials.gov/study/NCT06007183" },
      { label: "WHO — chikungunya (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya" },
    ],
    diseases: ["chikungunya"],
    drugs: ["vimkunya"],
    technologies: ["chikungunya-vaccination"],
    stats: [
      { label: "Enrolment", value: "715", number: 715, unit: "participants", year: 2023, source: { label: "ClinicalTrials.gov NCT06007183", url: "https://clinicaltrials.gov/study/NCT06007183" } },
    ],
  },
];
