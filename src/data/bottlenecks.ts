import type { RecordOf } from "@/lib/schema";

export const bottlenecks: RecordOf<"bottlenecks">[] = [
  {
    id: "funding-gap",
    name: "The funding gap for neglected disease science",
    tldr: "NTDs affect over a billion people but receive a tiny share of health research money, because the people affected cannot pay for the products.",
    summary:
      "The defining bottleneck of the NTD field is that the diseases are neglected by design: they affect people whose governments and health systems cannot fund research and development, so the commercial incentive to develop drugs, vaccines and diagnostics is absent. The work is carried by a small number of public and philanthropic funders and by product development partnerships. The consequence is not only that fewer products exist, but that the products that do exist depend on continued charitable funding and donated medicines, which can be withdrawn.",
    asOf: "2026-09",
    scope: "Global",
    blocked: "Everything upstream: basic biology, drug and vaccine discovery, diagnostics development, and the retention of researchers in the field.",
    why: "The market prices a medicine by what patients or insurers can pay; for NTDs that is close to nothing, so the private return does not cover the cost of development.",
    whatWouldUnlock:
      "Sustainable public and philanthropic funding, prize and pull incentives that pay for outcomes, regional manufacturing capacity, and domestic health financing in endemic countries.",
    links: [
      { label: "WHO — global observatory on health R&D", url: "https://www.who.int/observatories/global-observatory-on-health-research-and-development" },
    ],
    diseases: ["hat", "chagas", "leishmaniasis", "buruli-ulcer", "mycetoma", "noma", "snakebite", "echinococcosis"],
    institutions: ["dndi", "gates-foundation", "wellcome", "uniting-ntds"],
    technologies: ["open-science-drug-discovery"],
    roadmaps: ["ntd-drug-discovery-roadmap"],
    terms: ["pdp", "ntd"],
    stats: [
      { label: "People affected", value: "> 1 billion" },
      { label: "Core cause", value: "No commercial market" },
      { label: "Dependence", value: "Public and philanthropic funding" },
    ],
  },
  {
    id: "diagnostics-gap",
    name: "The diagnostics gap",
    tldr: "For many NTDs there is no accurate, field-ready test, so programmes cannot tell who is infected or whether transmission has stopped.",
    summary:
      "Diagnosis is the least commercially attractive part of the NTD toolbox, and it shows. Many diseases rely on a microscope and a trained technician; the rapid tests that exist mostly detect antibodies, which stay positive after cure and cannot distinguish past from current infection. This matters most at the end of an elimination campaign, when the goal is to confirm that transmission has stopped and the tests available are least reliable at exactly the low infection intensities that remain. Without better diagnostics, programmes treat blind and cannot verify success.",
    asOf: "2026-09",
    scope: "Global",
    blocked:
      "Accurate case detection, elimination verification, resistance monitoring and the targeting of scarce treatments.",
    why: "Diagnostics for poor settings have thin margins, need cold chains and field validation, and face fragmented demand across many diseases and countries.",
    whatWouldUnlock:
      "Non-profit diagnostic developers such as FIND, WHO prequalification, target product profiles that specify the field conditions, and pooled procurement to create market volume.",
    links: [
      { label: "FIND — diagnostics for neglected diseases", url: "https://www.finddx.org/" },
    ],
    diseases: ["schistosomiasis", "sth", "leishmaniasis", "hat", "lymphatic-filariasis", "onchocerciasis", "chagas", "mycetoma"],
    institutions: ["find-dx", "who", "tdr"],
    diagnostics: ["kato-katz", "point-of-care-cca", "antibody-rdt", "molecular-lamp"],
    technologies: ["crispr-diagnostics", "ai-microscopy", "molecular-pcr"],
    roadmaps: ["ntd-diagnostics-roadmap"],
    terms: ["sensitivity-specificity", "elimination"],
    stats: [
      { label: "Common gap", value: "Antibody tests cannot tell active from past infection" },
      { label: "Worst at", value: "Low-intensity infection, at elimination" },
    ],
  },
  {
    id: "insecticide-resistance-crisis",
    name: "Insecticide resistance",
    tldr: "Mosquitoes, flies and bugs are surviving the chemicals used against them, eroding the main lever against vector-borne disease.",
    summary:
      "Decades of pyrethroid use — for bed nets, indoor spraying and agriculture — have selected vector populations that survive the standard dose. Because the same class is used in both public health and farming, there is little chemical space left to rotate into. Resistance is now widespread in Aedes, Anopheles and Culex mosquitoes and has appeared in triatomine bugs, threatening dengue, lymphatic filariasis and Chagas control. The response is new active ingredients, dual-ingredient nets, and non-chemical methods, all of which take years and sustained investment to bring to scale.",
    asOf: "2026-09",
    scope: "Global, wherever vectors are controlled with chemicals",
    blocked: "The effectiveness of insecticide-treated nets, indoor residual spraying and outbreak adulticiding.",
    why: "Heavy and overlapping use of a small number of chemical classes, combined with agricultural use of the same compounds, selects for resistance faster than new products can be developed.",
    whatWouldUnlock:
      "New insecticide classes and mixtures, resistance monitoring to guide rotation, and complementary non-chemical methods such as sterile-insect release and environmental management.",
    links: [
      { label: "WHO — Global vector control response", url: "https://www.who.int/publications/i/item/9789241512978" },
    ],
    diseases: ["dengue-chikungunya", "lymphatic-filariasis", "chagas", "leishmaniasis"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "gene-drive-mosquitoes", "sterile-insect-technique"],
    institutions: ["ivcc", "who", "ifakara"],
    vectors: ["aedes-aegypti", "culex-mosquito", "triatomine-bug"],
    roadmaps: ["vector-control-roadmap"],
    terms: ["insecticide-resistance", "vector-borne"],
    stats: [
      { label: "Main class affected", value: "Pyrethroids" },
      { label: "Why it hurts", value: "Same class used on nets and in spraying" },
    ],
  },
  {
    id: "vaccine-gap",
    name: "The vaccine gap for parasitic disease",
    tldr: "There is no licensed vaccine for any parasitic NTD — not schistosomiasis, leishmaniasis, hookworm, onchocerciasis or Chagas.",
    summary:
      "Vaccines are the most cost-effective tools in medicine, and for the NTDs caused by parasites there are none. The reasons compound: parasites are complex and immune-evasive, many have life cycles that no single antigen can block, none can be cheaply grown for study, and there is no market to fund late-stage trials. The result is a field stuck in early clinical testing, while the viral and bacterial NTDs — rabies, dengue, chikungunya, and to some extent leprosy and trachoma — have vaccines or promising candidates.",
    asOf: "2026-09",
    scope: "Global",
    blocked: "Durable prevention for the parasitic NTDs, which currently depend on repeated drug treatment or vector control.",
    why: "Parasite immunology is genuinely hard, there is no commercial return, and each disease needs its own product and trials.",
    whatWouldUnlock:
      "Platform technologies (viral vectors, mRNA) that lower the cost of trying, and sustained public funding for late-stage parasitic vaccine trials.",
    links: [
      { label: "WHO — vaccine research and development", url: "https://www.who.int/observatories/global-observatory-on-health-research-and-development" },
    ],
    diseases: ["schistosomiasis", "sth", "leishmaniasis", "onchocerciasis", "chagas"],
    technologies: ["hookworm-vaccine-candidates", "leishmaniasis-vaccine-candidates", "onchocerciasis-vaccine-candidates"],
    roadmaps: ["ntd-vaccines-roadmap"],
    terms: ["ntd"],
    stats: [
      { label: "Parasitic NTD vaccines licensed", value: "None" },
      { label: "Stage of most candidates", value: "Preclinical to early clinical" },
    ],
  },
  {
    id: "access-and-pricing",
    name: "Access and pricing",
    tldr: "Even where a treatment exists, it may not reach the people who need it — because of price, supply, cold chain, or the fact that it is not registered where the disease occurs.",
    summary:
      "NTD medicines are often donated or cheap, and yet access remains the final bottleneck. Obstacles include products not registered or not available in endemic countries, the need for a cold chain or an infusion in settings without reliable electricity, prices set for other markets, and health systems too weak to deliver. Antivenom and rabies immunoglobulin illustrate the problem at its worst: the science works, and people die because the product is not where they are, or costs more than they can pay.",
    asOf: "2026-09",
    scope: "Global and country-level",
    blocked: "Getting effective treatments to patients, which makes the upstream science look less successful than it is.",
    why: "Pricing and registration follow commercial markets, supply chains are built for richer countries, and weak health systems cannot absorb complex regimens.",
    whatWouldUnlock:
      "WHO prequalification, donated-access and pooled-purchasing agreements, regional manufacturing, and regimen simplification such as a single oral dose.",
    links: [
      { label: "WHO — essential medicines and access", url: "https://www.who.int/health-topics/essential-medicines" },
    ],
    diseases: ["snakebite", "rabies", "chagas", "leishmaniasis", "mycetoma", "leprosy"],
    drugs: ["snake-antivenom", "rabies-postexposure-prophylaxis", "benznidazole", "miltefosine"],
    institutions: ["who", "uniting-ntds", "dndi"],
    terms: ["who-essentials", "tpp"],
    stats: [
      { label: "Worst example", value: "Antivenom and rabies immunoglobulin" },
      { label: "Common obstacle", value: "Registration and cold chain" },
    ],
  },
  {
    id: "surveillance-data-gap",
    name: "The surveillance and data gap",
    tldr: "For many NTDs nobody knows how many people are affected or exactly where, which makes it impossible to target control or prove elimination.",
    summary:
      "Several NTDs have no reliable global case count. Buruli ulcer, mycetoma and noma are reported from dozens of countries but the true burden is unknown; snakebite deaths are estimated because they occur outside health systems; cases of many diseases are simply not recorded. Weak surveillance means programmes cannot direct treatment where it is needed, cannot detect resurgence, and cannot produce the evidence needed to certify elimination. The gap is worst in exactly the places with the least laboratory and reporting capacity.",
    asOf: "2026-09",
    scope: "Global, worst in the poorest and most remote districts",
    blocked: "Targeted control, elimination verification, and any credible estimate of burden for advocacy and funding.",
    why: "Weak laboratory networks, no case-based reporting for most diseases, and diagnoses made outside the formal health system.",
    whatWouldUnlock:
      "Case-based surveillance with digital reporting, strengthened laboratory networks in endemic countries, xenomonitoring and genomic tools, and integrated disease surveillance platforms.",
    links: [
      { label: "WHO — NTD surveillance and data", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    diseases: ["buruli-ulcer", "mycetoma", "noma", "snakebite", "dracunculiasis", "yaws"],
    technologies: ["mhealth-surveillance", "genomic-surveillance", "xenomonitoring", "vector-surveillance"],
    institutions: ["who", "cdc", "ntd-support-center"],
    roadmaps: ["elimination-roadmap"],
    terms: ["elimination", "ntd"],
    stats: [
      { label: "Diseases without a reliable global count", value: "Several, including Buruli ulcer and noma" },
      { label: "Consequence", value: "No burden estimate, no elimination evidence" },
    ],
  },
  {
    id: "climate-expansion",
    name: "Climate change and the expansion of NTD ranges",
    tldr: "Warming is shifting and widening the areas where vectors and parasites can survive, moving disease into populations with no history of it.",
    summary:
      "Dengue and chikungunya are already moving into temperate regions as Aedes albopictus establishes itself, and warming rivers and changing rainfall can extend the range of blackflies, sandflies and snails. The danger is not only new geography but new populations: a health system that has never seen dengue may not recognise it, and a community with no immunity is vulnerable to an explosive outbreak. Climate also disrupts the water and sanitation conditions that drive the water-borne NTDs, making the environmental part of control harder.",
    asOf: "2026-09",
    scope: "Global, with new range shifts in temperate zones",
    blocked: "Preparedness and control in places that have never had the disease, and the stability of existing programmes as ecology changes.",
    why: "A warming climate expands vector habitats and alters rainfall and water patterns that drive transmission, faster than health systems adapt.",
    whatWouldUnlock:
      "Climate-informed surveillance and forecasting, vector surveillance in previously non-endemic areas, and health-system readiness for unfamiliar diseases.",
    links: [
      { label: "WHO — climate change and health", url: "https://www.who.int/health-topics/climate-change" },
    ],
    diseases: ["dengue-chikungunya", "schistosomiasis", "leishmaniasis", "onchocerciasis", "dracunculiasis"],
    technologies: ["vector-surveillance", "mhealth-surveillance", "ai-vector-identification"],
    vectors: ["aedes-aegypti", "aedes-albopictus"],
    terms: ["vector-borne", "one-health"],
    stats: [
      { label: "Example", value: "Aedes albopictus establishing in Europe and North America" },
      { label: "Risk", value: "Outbreaks in immunologically naive populations" },
    ],
  },
  {
    id: "stigma-and-disability",
    name: "Stigma and disability",
    tldr: "Many NTDs leave lifelong disfigurement, and the social exclusion that follows outlasts the infection itself.",
    summary:
      "Leprosy, lymphatic filariasis, noma, mycetoma and Buruli ulcer can leave visible disfigurement, and the resulting stigma excludes people from work, marriage and community life long after the infection is cured. Disability is also a treatment outcome: late diagnosis of leprosy or Buruli ulcer causes avoidable nerve damage and contractures. Programmes that focus only on infection miss the point for the people affected, which is why mental health support, reconstructive surgery, lymphoedema care and anti-stigma work are part of NTD programmes, not an afterthought.",
    asOf: "2026-09",
    scope: "Global, especially where the disease is disfiguring and poorly understood",
    blocked: "Full recovery for people who are cured of infection but not of its consequences, and early presentation for treatment.",
    why: "Visible disfigurement and historical fear of these diseases drive exclusion, and stigma discourages people from seeking diagnosis early.",
    whatWouldUnlock:
      "Early detection, disability prevention and rehabilitation, mental health support, and community education to dismantle the stigma itself.",
    links: [
      { label: "WHO — disability and NTDs", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    diseases: ["leprosy", "lymphatic-filariasis", "noma", "mycetoma", "buruli-ulcer", "leishmaniasis", "trachoma"],
    technologies: ["community-health-workers", "mass-drug-administration"],
    institutions: ["who"],
    terms: ["ntd", "daly"],
    stats: [
      { label: "Preventable", value: "Much of the disability comes from late diagnosis" },
      { label: "Outlasts the disease", value: "Stigma persists after cure" },
    ],
  },
];
