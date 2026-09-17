import type { RecordOf } from "@/lib/schema";

export const ideas: RecordOf<"ideas">[] = [
  {
    id: "open-antiparasitic-consortium",
    name: "An open, pooled antiparasitic compound library",
    tldr: "Pool the compound collections of industry and academia into one openly screened library for parasitic disease.",
    summary:
      "Most large pharmaceutical companies hold millions of compounds that will never be tested against a parasite, while NTD researchers screen libraries of a few thousand. A shared, openly accessible screening library — with standardised assay protocols and results published regardless of outcome — would let every NTD group test against the same diverse chemical space and would stop the same compounds being screened repeatedly by different labs. The model already exists in fragments; the idea is to make it systematised and to make negative results as valuable as positive ones.",
    asOf: "2026-09",
    stage: "Proposal",
    proposedTest:
      "Establish a pooled library of at least a few hundred thousand compounds, screen it against a defined panel of parasites with open protocols, and publish all results including inactivity.",
    owner: "DNDi, TDR, and industry partners willing to share compounds",
    links: [
      { label: "DNDi — discovery and open collaboration", url: "https://dndi.org/portfolio/" },
    ],
    diseases: ["hat", "chagas", "leishmaniasis", "schistosomiasis", "onchocerciasis"],
    bottlenecks: ["funding-gap"],
    technologies: ["open-science-drug-discovery", "ai-drug-discovery"],
    terms: ["pdp"],
    stats: [
      { label: "Problem", value: "Screening capacity scattered across small groups" },
      { label: "Value", value: "Negative results are rarely published" },
    ],
  },
  {
    id: "ai-target-hopping",
    name: "AI-guided target hopping between parasites",
    tldr: "Use protein-structure similarity to carry a drug that works against one parasite onto a related one.",
    summary:
      "Trypanosomes, Leishmania and schistosomes share many essential enzymes, and a compound that works against one may bind the equivalent protein in another. With structure predictions now available for essentially every parasite gene, the equivalent targets can be identified computationally, and existing inhibitor chemistry can be tested against them. This turns every advance in one NTD into potential progress for several others, which is exactly what a fields with scarce funding needs.",
    asOf: "2026-09",
    stage: "Pilot",
    proposedTest:
      "Map the essential targets of one parasite onto its relatives, predict cross-binding for known inhibitors, and test the top predictions in whole-parasite assays.",
    owner: "Academic groups and DNDi's discovery network",
    links: [
      { label: "AlphaFold Protein Structure Database", url: "https://alphafold.ebi.ac.uk/" },
    ],
    diseases: ["hat", "chagas", "leishmaniasis", "schistosomiasis"],
    bottlenecks: ["funding-gap", "vaccine-gap"],
    technologies: ["ai-drug-discovery", "alphafold-structure-prediction", "drug-repurposing"],
    targets: ["cyp51", "nmt", "cruzain"],
    stats: [
      { label: "Leverage", value: "One target family, several diseases" },
      { label: "Enabler", value: "Predicted structures for parasite proteins" },
    ],
  },
  {
    id: "poc-molecular-panels",
    name: "Point-of-care molecular panels for NTDs",
    tldr: "One cartridge that tests for several co-endemic NTDs at once, so a district can diagnose what it is actually treating.",
    summary:
      "In most endemic areas several NTDs overlap — schistosomiasis, soil-transmitted helminths, lymphatic filariasis — and diagnosis requires a microscope, a trained technician and separate tests per disease. A single cartridge that detects several parasites from one sample would let a clinic diagnose accurately without a laboratory and would strengthen surveillance at the same time. The technology exists in the tuberculosis cartridge; the work is adapting it to different sample types and a panel of targets, and making the cost per test low enough for mass use.",
    asOf: "2026-09",
    stage: "Pilot",
    proposedTest:
      "Develop and field-validate a multiplex cartridge against microscopy in a district where multiple NTDs are co-endemic, measuring sensitivity and cost per case detected.",
    owner: "FIND and diagnostic manufacturers, with national programmes",
    links: [
      { label: "FIND — multiplex diagnostics", url: "https://www.finddx.org/" },
    ],
    diseases: ["schistosomiasis", "sth", "lymphatic-filariasis", "leishmaniasis"],
    bottlenecks: ["diagnostics-gap"],
    technologies: ["crispr-diagnostics", "molecular-lamp", "gene-cartridge-test"],
    diagnostics: ["molecular-pcr", "kato-katz"],
    stats: [
      { label: "Precedent", value: "Tuberculosis cartridge platforms" },
      { label: "Barrier", value: "Cost per test and sample preparation" },
    ],
  },
  {
    id: "integrate-ntd-services",
    name: "Integrate NTD services into other disease programmes",
    tldr: "Deliver NTD screening and treatment through HIV, tuberculosis, immunisation and antenatal platforms instead of stand-alone campaigns.",
    summary:
      "NTD campaigns often run separately from the rest of primary care, which duplicates logistics and misses people who only attend for another reason. Integrating NTD screening and treatment with HIV and tuberculosis clinics, immunisation sessions, antenatal care and school health would reach people already in contact with services, and would make NTD work less dependent on vertical, donor-funded campaigns. The risk is that NTDs get lost inside another programme's priorities, so integration needs explicit targets and monitoring.",
    asOf: "2026-09",
    stage: "Pilot",
    proposedTest:
      "Add NTD screening and deworming to an existing HIV or antenatal platform in a district and compare coverage and cost with the stand-alone campaign.",
    owner: "Ministries of health with WHO and TDR support",
    links: [
      { label: "WHO — integration of NTD services", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    diseases: ["schistosomiasis", "sth", "lymphatic-filariasis", "leprosy", "scabies"],
    bottlenecks: ["access-and-pricing", "surveillance-data-gap"],
    technologies: ["community-health-workers", "mass-drug-administration", "mhealth-surveillance"],
    stats: [
      { label: "Attack", value: "Vertical campaign inefficiency" },
      { label: "Risk", value: "NTDs losing priority inside other programmes" },
    ],
  },
  {
    id: "community-led-vector-control",
    name: "Community-led vector control with local entomology",
    tldr: "Train residents to identify breeding sites and manage their own vectors, instead of relying on spraying teams that visit rarely.",
    summary:
      "Vector control for Aedes and for Chagas vectors ultimately depends on what happens inside and around houses: uncovered water containers, discarded tyres, cracks in walls. A trained, resourced community that can find and eliminate its own breeding sites, and report changes, can suppress vectors continuously rather than during a rare campaign visit. This is not a new idea — community-directed treatment transformed onchocerciasis — but it has rarely been resourced properly or linked to entomological data that tells people whether their effort is working.",
    asOf: "2026-09",
    stage: "Pilot",
    proposedTest:
      "Equip neighbourhood groups with simple larval surveys and the authority to act, and measure vector indices against comparable areas under conventional spraying.",
    owner: "Municipalities and national vector programmes, with research partners",
    links: [
      { label: "WHO — community engagement in vector control", url: "https://www.who.int/publications/i/item/9789241512978" },
    ],
    diseases: ["dengue-chikungunya", "chagas"],
    bottlenecks: ["insecticide-resistance-crisis", "funding-gap"],
    technologies: ["vector-surveillance", "community-health-workers", "ai-vector-identification"],
    vectors: ["aedes-aegypti", "triatomine-bug"],
    stats: [
      { label: "Leverage", value: "Breeding sites inside people's homes" },
      { label: "Precedent", value: "Community-directed treatment for onchocerciasis" },
    ],
  },
  {
    id: "pooled-purchasing-ntd-drugs",
    name: "Pooled purchasing and regional manufacturing for NTD medicines",
    tldr: "Buy NTD medicines jointly across countries and make more of them regionally, so supply does not depend on distant manufacturers.",
    summary:
      "Even donated medicines depend on manufacturing, shipping and warehousing that can fail, and non-donated products such as antivenom and rabies immunoglobulin are bought at whatever price each country can negotiate alone. Pooled procurement across countries would create market volume and bargaining power; regional manufacturing, as Institut Pasteur de Dakar and Fiocruz already demonstrate, would shorten supply chains and build local capability. The combination turns access from a charitable matter into a system that can be sustained and held to account.",
    asOf: "2026-09",
    stage: "Pilot",
    proposedTest:
      "Pool procurement for one non-donated NTD product across several countries and compare price, lead time and stockout rates with individual purchasing.",
    owner: "Regional economic communities, WHO, and manufacturers such as Institut Pasteur de Dakar and Fiocruz",
    links: [
      { label: "WHO — access to medicines and local production", url: "https://www.who.int/health-topics/essential-medicines" },
    ],
    diseases: ["snakebite", "rabies", "chagas", "leishmaniasis"],
    bottlenecks: ["access-and-pricing", "funding-gap"],
    technologies: ["open-science-drug-discovery"],
    institutions: ["ipd", "fiocruz", "who"],
    stats: [
      { label: "Target", value: "Non-donated products like antivenom" },
      { label: "Benefit", value: "Volume, price and shorter supply chains" },
    ],
  },
  {
    id: "ntd-genomic-network",
    name: "A distributed NTD genomic surveillance network",
    tldr: "Sequence parasites in the countries where they occur, not only in reference labs abroad, and share the data openly.",
    summary:
      "Genomic surveillance can distinguish local transmission from imported cases, detect drug resistance early and track how parasites move — all critical for elimination and for protecting scarce medicines. But most sequencing happens far from where the samples come from, creating delays and leaving endemic countries without the capability. A network of regional sequencing hubs, with shared protocols, open data and local bioinformatics training, would put the capability where it is needed and speed up the response to resistance and resurgence.",
    asOf: "2026-09",
    stage: "Proposal",
    proposedTest:
      "Stand up regional sequencing hubs for one disease, compare turnaround and cost against shipping samples to a distant reference laboratory, and publish all genomes openly.",
    owner: "National public health institutes with WHO, Wellcome and academic partners",
    links: [
      { label: "WHO — genomic surveillance", url: "https://www.who.int/initiatives/genomic-surveillance-strategy" },
    ],
    diseases: ["hat", "buruli-ulcer", "leishmaniasis", "chagas", "dengue-chikungunya"],
    bottlenecks: ["surveillance-data-gap", "funding-gap"],
    technologies: ["genomic-surveillance", "molecular-pcr", "mhealth-surveillance"],
    institutions: ["who", "wellcome", "kemi", "noguchi"],
    stats: [
      { label: "Gap", value: "Sequencing capacity far from the sample" },
      { label: "Value", value: "Resistance detection and elimination evidence" },
    ],
  },
  {
    id: "recombinant-antivenom-platform",
    name: "A shared platform for recombinant antivenoms",
    tldr: "Build one engineering platform that produces antivenom cocktails for many regions, instead of a separate horse-serum product for each.",
    summary:
      "Conventional antivenom must be manufactured region by region because venoms differ, which fragments the market and guarantees shortages. If human monoclonal antibodies against the common venom toxin families were developed on a shared platform, products for different regions could be assembled by mixing the appropriate antibodies, the way a formula is adjusted. This would make manufacture consistent, cold-chain-friendly and scalable, and it would let a country that lacks its own production still have a matched product.",
    asOf: "2026-09",
    stage: "Proposal",
    proposedTest:
      "Develop monoclonal antibodies against the shared toxin families of two regions' medically important snakes and test whether a region-specific cocktail is protective in animal models.",
    owner: "Recombinant-antivenom research groups with WHO support",
    links: [
      { label: "WHO — snakebite antivenom innovation", url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming" },
    ],
    diseases: ["snakebite"],
    bottlenecks: ["access-and-pricing", "funding-gap"],
    technologies: ["recombinant-antivenoms"],
    drugs: ["snake-antivenom"],
    roadmaps: ["snakebite-roadmap"],
    stats: [
      { label: "Current model", value: "Region-specific horse serum" },
      { label: "Proposed model", value: "One platform, mixed cocktails" },
    ],
  },
  {
    id: "climate-informed-ntd-forecasting",
    name: "Climate-informed NTD forecasting and early warning",
    tldr: "Use climate and vector data to forecast where outbreaks and range expansions will happen, so control can start before the cases.",
    summary:
      "Dengue outbreaks follow rainfall and temperature with a lead time that makes forecasting possible, and vector range shifts can be anticipated from climate and land-use data. A forecasting system that combined climate, vector surveillance and case reports could let a district begin vector control or stock treatment before an outbreak peaks, rather than after. The obstacles are data availability in the places at risk and the fact that a warning is only useful if someone has the budget and authority to act on it.",
    asOf: "2026-09",
    stage: "Pilot",
    proposedTest:
      "Build and prospectively evaluate a dengue early-warning system in one city, measuring whether alerts precede outbreaks and whether they change control actions.",
    owner: "National vector programmes with academic modelling groups and WHO",
    links: [
      { label: "WHO — climate change and health", url: "https://www.who.int/health-topics/climate-change" },
    ],
    diseases: ["dengue-chikungunya", "leishmaniasis"],
    bottlenecks: ["climate-expansion", "surveillance-data-gap"],
    technologies: ["vector-surveillance", "mhealth-surveillance", "genomic-surveillance"],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    stats: [
      { label: "Lead time", value: "Dengue follows climate with weeks of warning" },
      { label: "Barrier", value: "Warning is useless without authority to act" },
    ],
  },
  {
    id: "include-pregnant-women-in-trials",
    name: "Include pregnant women in NTD treatment research",
    tldr: "Stop excluding pregnant women from trials by default, which leaves the people most at risk with no evidence on how to treat them.",
    summary:
      "Pregnant women are routinely excluded from NTD treatment trials out of caution, with the result that the group most vulnerable to some infections — and to the consequences for the fetus — has the least evidence about treatment. For diseases where the drug is already widely used in pregnancy without harm, and where untreated infection itself harms the pregnancy, the ethical balance points toward inclusion with proper monitoring rather than exclusion. This requires a deliberate change in trial design and regulatory expectation.",
    asOf: "2026-09",
    stage: "Proposal",
    proposedTest:
      "For a treatment already used in pregnancy, run a monitored pharmacokinetic and safety study in pregnancy and use it to update guidance, rather than continuing to exclude.",
    owner: "Trial sponsors, regulators and TDR",
    links: [
      { label: "WHO — ethics and research in pregnancy", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    diseases: ["schistosomiasis", "sth", "leishmaniasis", "hat", "chagas"],
    bottlenecks: ["access-and-pricing", "stigma-and-disability"],
    technologies: ["mass-drug-administration"],
    terms: ["tpp", "ntd"],
    stats: [
      { label: "Default", value: "Pregnancy excluded from most NTD trials" },
      { label: "Consequence", value: "No evidence for the group most at risk" },
    ],
  },
];
