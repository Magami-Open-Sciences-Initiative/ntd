import type { RecordOf } from "@/lib/schema";

export const terms: RecordOf<"terms">[] = [
  {
    id: "ntd",
    name: "Neglected tropical disease (NTD)",
    tldr: "A group of infectious diseases that affect mainly poor communities in the tropics and have historically been left out of research and funding.",
    summary:
      "The World Health Organization currently names 21 conditions as neglected tropical diseases. They are 'neglected' not because they are rare — over a billion people are affected — but because the people they strike have little political or commercial voice, so the market has under-invested in treatments, diagnostics and vaccines. Most are infectious, many are vector-borne or parasitic, and several are formally targeted for elimination or eradication.",
    asOf: "2026-09",
    category: "Policy",
    aka: "NTD, neglected tropical diseases",
    links: [
      { label: "WHO — Neglected tropical diseases", url: "https://www.who.int/news-room/fact-sheets/detail/neglected-tropical-diseases" },
    ],
    diseases: [
      "buruli-ulcer", "chagas", "dengue", "chikungunya", "dracunculiasis", "echinococcosis",
      "foodborne-trematodiases", "hat", "leishmaniasis", "leprosy", "lymphatic-filariasis",
      "mycetoma", "noma", "onchocerciasis", "rabies", "scabies", "schistosomiasis",
      "sth", "snakebite", "taeniasis-cysticercosis", "trachoma", "yaws",
    ],
  },
  {
    id: "mda",
    name: "Mass drug administration (MDA)",
    tldr: "Giving a whole at-risk community a safe medicine at the same time, whether or not each person is tested, to break transmission of a parasite.",
    summary:
      "Mass drug administration is the backbone of NTD control for the preventive-chemotherapy diseases. Instead of diagnosing every individual, programmes treat an entire district on a schedule — often annually — using medicines that are safe, cheap and donated. Repeated rounds reduce the pool of infection below the level at which transmission can sustain itself. Coverage, not just distribution, is what matters: WHO sets a target of at least 65% of the eligible population treated in each round.",
    asOf: "2026-09",
    category: "Programme",
    aka: "MDA, mass treatment",
    links: [
      { label: "WHO — Preventive chemotherapy", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    technologies: ["mass-drug-administration"],
    related: ["preventive-chemotherapy", "elimination"],
  },
  {
    id: "preventive-chemotherapy",
    name: "Preventive chemotherapy",
    tldr: "Regular, large-scale treatment of at-risk populations with donated medicines to prevent the diseases that worms and filariae cause.",
    summary:
      "Preventive chemotherapy (PC) is the WHO strategy of treating whole communities on a fixed schedule for five diseases that respond to the same small set of donated drugs: lymphatic filariasis, onchocerciasis, schistosomiasis, soil-transmitted helminthiases and trachoma. The drugs are provided free by manufacturers, and the campaigns are run through schools, community distributors and health workers. PC does not sterilise anyone; it lowers the burden of infection and the disability it causes.",
    asOf: "2026-09",
    category: "Programme",
    links: [
      { label: "WHO — Preventive chemotherapy", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    technologies: ["mass-drug-administration"],
    related: ["mda", "ntd"],
  },
  {
    id: "daly",
    name: "Disability-adjusted life year (DALY)",
    tldr: "A single number that combines years lost to early death and years lived with disability, used to compare how much disease a condition causes.",
    summary:
      "The DALY is the standard metric of population disease burden. One DALY equals one lost year of healthy life: years of life lost (YLL) to premature death plus years lived with disability (YLD), weighted by severity. NTDs as a group are estimated to cause tens of millions of DALYs a year, and conditions such as schistosomiasis and lymphatic filariasis contribute heavily through long-term disability rather than death.",
    asOf: "2026-09",
    category: "Metrics",
    aka: "DALY",
    links: [
      { label: "WHO — Global Health Estimates", url: "https://www.who.int/data/global-health-estimates" },
    ],
    related: ["ntd"],
  },
  {
    id: "elimination",
    name: "Elimination, eradication and control",
    tldr: "Control means reducing a disease; elimination means stopping transmission in a place; eradication means wiping the pathogen off the planet.",
    summary:
      "Public health uses three words precisely. Control reduces disease burden to an acceptable level but the disease persists. Elimination of transmission means zero new locally acquired cases in a defined area, while the pathogen may still exist elsewhere and imported cases can occur. Eradication means the pathogen no longer exists anywhere and interventions can stop. Several NTDs — dracunculiasis, yaws, trachoma, lymphatic filariasis and onchocerciasis — have WHO elimination or eradication goals, each with a verification process.",
    asOf: "2026-09",
    category: "Policy",
    aka: "elimination, eradication",
    links: [
      { label: "WHO — NTD roadmap and targets", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    roadmaps: ["elimination-roadmap"],
    related: ["ntd", "mda"],
  },
  {
    id: "vector-borne",
    name: "Vector-borne disease",
    tldr: "A disease spread by a living carrier — usually an insect, bug or snail — rather than directly from person to person.",
    summary:
      "Many NTDs are vector-borne: a mosquito, sandfly, blackfly, tsetse, triatomine bug or snail carries the pathogen and passes it when it bites or, for snails, by releasing infectious larvae into water. Vector-borne transmission means control has two levers — treat the person, or attack the vector — and the second often breaks transmission more durably. Insecticide resistance is now eroding that lever.",
    asOf: "2026-09",
    category: "Transmission",
    aka: "vector-borne",
    links: [
      { label: "WHO — Vector-borne diseases", url: "https://www.who.int/news-room/fact-sheets/detail/vector-borne-diseases" },
    ],
    vectors: ["aedes-aegypti", "aedes-albopictus", "tsetse-fly", "sandfly", "blackfly", "culex-mosquito", "freshwater-snails", "triatomine-bug"],
    related: ["ntd", "insecticide-resistance"],
  },
  {
    id: "zoonosis",
    name: "Zoonosis",
    tldr: "An infection that passes from animals to people.",
    summary:
      "Several NTDs are zoonoses with animal reservoirs that cannot be treated away — echinococcosis and taeniasis/cysticercosis from dogs and pigs, foodborne trematodiases from fish and snails, rabies from dogs, and trypanosomiasis and leishmaniasis from animal hosts. For these, human treatment alone cannot eliminate the disease; control must act on the animal or environmental source, which is why a One Health approach is required.",
    asOf: "2026-09",
    category: "Transmission",
    aka: "zoonotic",
    links: [
      { label: "WHO — One Health", url: "https://www.who.int/health-topics/one-health" },
    ],
    diseases: ["echinococcosis", "taeniasis-cysticercosis", "rabies", "foodborne-trematodiases", "leishmaniasis"],
    related: ["one-health"],
  },
  {
    id: "wash",
    name: "WASH (water, sanitation and hygiene)",
    tldr: "Clean water, safe toilets and hygiene — the interventions that stop the worms and bacteria that spread through contaminated water and soil.",
    summary:
      "Access to safe water, basic sanitation and hygiene (WASH) is a recognised NTD intervention, not just general development. Schistosomiasis, soil-transmitted helminthiases, trachoma and dracunculiasis all spread through water, stool or contaminated soil, and repeated drug treatment cannot durably control them where sanitation is absent. WHO now recommends integrating WASH with preventive chemotherapy and vector control rather than running them separately.",
    asOf: "2026-09",
    category: "Prevention",
    aka: "WASH",
    links: [
      { label: "WHO — WASH and NTDs", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    technologies: ["wash-interventions"],
    related: ["one-health", "ntd"],
  },
  {
    id: "tpp",
    name: "Target product profile (TPP)",
    tldr: "A written specification of what a new medicine or test must do to be useful in the real setting — for example be a single oral dose that cures without refrigeration.",
    summary:
      "A target product profile is how NTD developers define success before they start. Because the setting is usually a rural clinic or a community campaign, the TPP often demands more than efficacy: oral administration, a single dose, stability without a cold chain, safety in children and pregnancy, and a cost low enough for a donated or mass-purchased programme. A candidate that works but fails the TPP — say, an infusion given over days — will not reach the people who need it.",
    asOf: "2026-09",
    category: "Development",
    aka: "TPP",
    links: [
      { label: "WHO — target product profiles", url: "https://www.who.int/observatories/global-observatory-on-health-research-and-development" },
    ],
    related: ["ntd", "pdp"],
  },
  {
    id: "sensitivity-specificity",
    name: "Sensitivity and specificity",
    tldr: "Sensitivity is how often a test correctly finds people who have the disease; specificity is how often it correctly clears people who do not.",
    summary:
      "Every diagnostic trades off the two. A highly sensitive test misses few cases but may falsely flag healthy people; a highly specific test rarely gives a false positive but may miss cases. In NTD programmes the right balance depends on the job: mapping and elimination-verification need high specificity so that a 'zero cases' claim is credible, while case-finding in a treatment setting may favour sensitivity. Assays for the same parasite differ widely — for instance, Kato-Katz under-detects low-intensity infections, which is exactly the situation at the end of an elimination campaign.",
    asOf: "2026-09",
    category: "Diagnostics",
    aka: "sensitivity, specificity",
    links: [
      { label: "WHO — diagnostic evaluations and target product profiles", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    related: ["rdt", "diagnostics-gap"],
  },
  {
    id: "poc-cca",
    name: "Point-of-care circulating cathodic antigen (POC-CCA)",
    tldr: "A urine strip test that detects schistosome antigens, giving a result in minutes without a microscope or a stool sample.",
    summary:
      "POC-CCA is a lateral-flow assay that detects circulating cathodic antigen from adult schistosomes in urine. It is quick, needs no microscopy and detects most heavy infections, which makes it attractive for mapping and monitoring. Its trade-offs are that it can read positive for weeks after a cure (so it is poor for test-of-cure), its sensitivity for light Schistosoma haematobium infection is debated, and it remains a research product rather than a fully WHO-prequalified, widely procured device.",
    asOf: "2026-09",
    category: "Diagnostics",
    aka: "CAA, circulating cathodic antigen",
    links: [
      { label: "WHO — schistosomiasis diagnostics", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
    ],
    diagnostics: ["point-of-care-cca"],
    related: ["schistosomiasis", "kato-katz"],
  },
  {
    id: "rdt",
    name: "Rapid diagnostic test (RDT)",
    tldr: "A lateral-flow strip that detects an infection from a finger-prick of blood or a drop of urine in about fifteen minutes, with no laboratory.",
    summary:
      "RDTs brought diagnosis out of the laboratory to the village. In NTD control the best-known examples are the rK39 strip for visceral leishmaniasis and antigen or antibody strips for lymphatic filariasis and HAT. They share the lateral-flow format: sample flows along a membrane past a line of antibodies, and a coloured line means a positive. Their limitations are heat sensitivity, batch-to-batch variability, and the fact that antibody tests stay positive after a cured infection.",
    asOf: "2026-09",
    category: "Diagnostics",
    aka: "RDT",
    links: [
      { label: "FIND — diagnostics for neglected diseases", url: "https://www.finddx.org/" },
    ],
    diagnostics: ["rk39-rapid-test", "antibody-rdt"],
    technologies: ["lateral-flow-assays"],
    related: ["diagnostics-gap"],
  },
  {
    id: "lamp",
    name: "Loop-mediated isothermal amplification (LAMP)",
    tldr: "A DNA test that runs at a single warm temperature, so it can be done without a laboratory thermocycler.",
    summary:
      "LAMP amplifies DNA at a constant temperature, typically around 60-65°C, using a strand-displacing polymerase and a set of primers. Because it needs no thermal cycling, it can run on a simple heat block or even body heat, which suits field settings where a PCR machine is unavailable. For NTDs it has been developed for schistosomiasis, leishmaniasis and other parasites, though reagent cost, contamination control and cold-chain and electricity requirements still limit routine use.",
    asOf: "2026-09",
    category: "Diagnostics",
    aka: "LAMP",
    links: [
      { label: "FIND — molecular diagnostics", url: "https://www.finddx.org/" },
    ],
    diagnostics: ["molecular-lamp"],
    related: ["pcr"],
  },
  {
    id: "pcr",
    name: "Polymerase chain reaction (PCR)",
    tldr: "A laboratory method that copies a specific piece of a pathogen's DNA many times over so that even a tiny amount can be detected.",
    summary:
      "PCR is the most sensitive way to detect many parasites and viruses, and quantitative PCR can estimate how much is present. For NTDs it is used for confirmation, for low-intensity infections that microscopy misses, and increasingly on pooled samples for surveillance. Its limits in the field are cost, the need for a clean laboratory, a power supply, cold-chain reagents and trained staff — all of which the point-of-care molecular tests now trying to remove.",
    asOf: "2026-09",
    category: "Diagnostics",
    aka: "PCR, qPCR",
    links: [
      { label: "WHO — molecular diagnostics for NTDs", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    diagnostics: ["molecular-pcr", "gene-cartridge-test"],
    technologies: ["crispr-diagnostics", "genomic-surveillance"],
    related: ["lamp"],
  },
  {
    id: "insecticide-resistance",
    name: "Insecticide resistance",
    tldr: "When mosquitoes and other vectors survive the chemicals used against them, so nets and sprays stop killing them.",
    summary:
      "Decades of pyrethroid use have selected mosquito populations that survive the standard dose, and resistance is now widespread across Africa and Asia. Because the same pyrethroids are used on bed nets and in indoor spraying, there is little chemical space left to switch to. Resistance erodes the main lever against vector-borne NTDs and dengue, and it is the reason new active ingredients, mixtures and non-chemical methods such as gene drive and sterile-insect release are being pursued.",
    asOf: "2026-09",
    category: "Vector control",
    aka: "insecticide resistance",
    links: [
      { label: "WHO — Global vector control response", url: "https://www.who.int/publications/i/item/9789241512978" },
    ],
    bottlenecks: ["insecticide-resistance-crisis"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "gene-drive-mosquitoes"],
    related: ["vector-borne"],
  },
  {
    id: "who-essentials",
    name: "WHO Model List of Essential Medicines",
    tldr: "The WHO's list of the medicines a health system must have; inclusion signals that a drug is proven, safe and needed everywhere.",
    summary:
      "The WHO Model List of Essential Medicines is a core reference for what a functioning health system should stock. Almost every first-line NTD medicine is on it — praziquantel, ivermectin, albendazole, benznidazole, miltefosine, dapsone, rifampicin and others — which is why these are the treatments programmes actually deploy. A medicine's absence from the list, or its presence only in an unaffordable form, is a recurring NTD bottleneck.",
    asOf: "2026-09",
    category: "Policy",
    aka: "WHO EML, essential medicines",
    links: [
      { label: "WHO — Essential medicines list", url: "https://list.essentialmeds.org/" },
    ],
    related: ["access-and-pricing"],
  },
  {
    id: "pdp",
    name: "Product development partnership (PDP)",
    tldr: "A non-profit organisation that develops medicines and tests for diseases the commercial market ignores, often with public and philanthropic money.",
    summary:
      "Because an NTD drug cannot earn a normal return, development is carried by product development partnerships — non-profits that take a candidate from discovery to registration on public and philanthropic funding, then hand it to a manufacturer or a donated-access programme. DNDi is the exemplar, with a portfolio spanning sleeping sickness, Chagas disease, leishmaniasis and filarial infections. PDPs are the reason several NTDs have had a new medicine in the past two decades.",
    asOf: "2026-09",
    category: "Development",
    aka: "PDP",
    links: [
      { label: "DNDi — Diseases for which we develop treatments", url: "https://dndi.org/diseases/" },
    ],
    institutions: ["dndi"],
    technologies: ["open-science-drug-discovery"],
    related: ["funding-gap", "tpp"],
  },
  {
    id: "one-health",
    name: "One Health",
    tldr: "Treating human, animal and environmental health as one system, because NTDs that live in animals cannot be stopped by treating people alone.",
    summary:
      "One Health is the recognition that human health, animal health and the environment are connected. For zoonotic NTDs it is not an abstraction but a requirement: rabies is controlled by vaccinating dogs, echinococcosis by deworming dogs and controlling livestock slaughter, and foodborne trematodiases by managing the fish, snails and livestock that complete the cycle. Programme silos between the health and agriculture sectors remain a persistent obstacle.",
    asOf: "2026-09",
    category: "Policy",
    aka: "One Health",
    links: [
      { label: "WHO — One Health", url: "https://www.who.int/health-topics/one-health" },
    ],
    related: ["zoonosis", "wash"],
  },
];
