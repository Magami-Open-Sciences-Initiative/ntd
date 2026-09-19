import type { Kind } from "@/lib/schema";

const R = { asOf: "2026-09" };

/**
 * Rabies 2026 fact-check additions: the United Against Rabies forum, the
 * monoclonal-antibody drug class, the African and international researchers,
 * and the ideas that the 2026 source cross-check (WHO fact sheet 17 Sep 2026,
 * ClinicalTrials.gov, ChEMBL, Open Targets, PubMed) showed were missing from
 * the graph. Ordinary records of their kind, kept in one file so the review is
 * visible as a set; wired into `index.ts` alongside ADDITIONS.
 *
 * Cross-check confirmed the disease page's figures against the WHO fact sheet
 * (updated 17 September 2026): 44,203 deaths (2021 Global Health Estimates),
 * 40% children under 15, 99% dog-mediated, US$8.6 billion annual cost, 29
 * million people receiving PEP a year, and 3 validated countries (Bhutan,
 * Chile, Mexico) are all correct. Added: the Gavi funding route for human
 * rabies vaccine, the 3 WHO-prequalified vaccines, the 17 WOAH self-declared
 * countries, and the 60–80% cost reduction from intradermal administration.
 *
 * Honest negatives: Open Targets has no rabies-specific disease entry
 * (searching returns "Rhabdoviridae infectious disease"), and ChEMBL holds the
 * rabies glycoprotein only as strain-specific entries (ERA, CVS-11) — the
 * corpus's single rabies-glycoprotein target reflects that. G-FINDER's 2024
 * "Funding by disease" report carries no rabies line in the sections
 * reviewed, so no funding figure is asserted; the financing story for rabies
 * is Gavi's, which is documented and used instead.
 */
export const RABIES_2026: { kind: Kind; records: unknown[] }[] = [
  /* ----------------------------- institutions ----------------------------- */
  {
    kind: "institutions",
    records: [
      {
        id: "united-against-rabies",
        name: "United Against Rabies",
        tldr: "The WHO–FAO–WOAH forum that coordinates the global push to end human deaths from dog-mediated rabies by 2030.",
        summary:
          "United Against Rabies (UAR) is the multi-stakeholder forum launched by the three international agencies that share responsibility for rabies — WHO (human health), FAO (food and agriculture) and WOAH (animal health) — to advocate for and coordinate action toward Zero by 30, the goal of zero human deaths from dog-mediated rabies by 2030. Its existence is itself the point: rabies is a disease where the intervention (dog vaccination) sits with veterinary and municipal authorities, the benefit (prevented human deaths) accrues to health systems, and the treatment (post-exposure prophylaxis) is delivered by clinics. No single ministry owns it, which is why progress lags a target that the science fully supports. UAR is the mechanism built to bridge that gap.",
        ...R,
        institutionType: "Multi-stakeholder forum (WHO, FAO, WOAH)",
        focus: "Coordinating and advocating for the global elimination of human deaths from dog-mediated rabies by 2030.",
        links: [
          { label: "United Against Rabies", url: "https://www.unitedagainstrabies.org" },
          { label: "WHO — rabies (fact sheet, 17 September 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["rabies-vaccination", "one-health-ntd-integration"],
        institutions: ["who", "woah"],
        terms: ["one-health", "zoonosis", "elimination", "eot"],
        stats: [
          { label: "Founding agencies", value: "WHO, FAO and WOAH" },
          { label: "Goal", value: "Zero human deaths from dog-mediated rabies by 2030" },
        ],
      },
    ],
  },
  /* ------------------------------ treatments ------------------------------ */
  {
    kind: "drugs",
    records: [
      {
        id: "rabies-monoclonal-antibodies",
        name: "Rabies monoclonal antibodies",
        tldr: "Engineered antibodies that replace scarce, plasma-derived rabies immunoglobulin — the fix for the treatment pathway's most stubborn bottleneck.",
        summary:
          "For category III exposures — transdermal bites, mucous-membrane contact or bat exposure — post-exposure prophylaxis needs antibodies as well as vaccine, to neutralise the virus before it reaches the nervous system. The standard product is human rabies immunoglobulin (RIG), derived from the plasma of vaccinated donors: expensive, in chronic global shortage, and frequently unavailable at the clinic where the bite is treated. Monoclonal antibodies (RmAb) against the rabies glycoprotein are produced at scale and consistently, without plasma, and two are licensed in India. A 2025 phase 4 study reported outcomes for a monoclonal in category III exposures, and cocktails are being evaluated where immunoglobulin cannot be obtained. WHO's 2026 fact sheet lists RmAb alongside RIG as an indicated option, and the remaining barriers are price, regional coverage of rabies virus variants, and adoption into national guidelines.",
        ...R,
        drugClass: "Monoclonal antibody (antiviral)",
        mechanism:
          "Bind and neutralise the rabies virus glycoprotein, preventing the virus from entering and spreading through nerve cells before vaccine-induced immunity develops.",
        indication: "Category III rabies exposure, alongside rabies vaccine.",
        administration: "Infiltrated into and around the wound, as with rabies immunoglobulin.",
        status: "Two licensed in India; WHO-listed as an alternative to rabies immunoglobulin",
        links: [
          { label: "WHO — rabies (fact sheet, 17 September 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
          { label: "Lancet — rabies monoclonal antibody PEP (2025)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00735-4/fulltext" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        targets: ["rabies-glycoprotein"],
        trials: ["rabies-monoclonal-antibody"],
        technologies: ["rabies-vaccination"],
        institutions: ["who"],
        bottlenecks: ["access-and-pricing", "costs-and-financing"],
        terms: ["zoonosis", "one-health"],
        stats: [
          { label: "Advantage", value: "Scalable and plasma-free, unlike RIG" },
          { label: "Licensed in", value: "India (two products)" },
        ],
      },
    ],
  },
  /* --------------------------------- people ------------------------------- */
  {
    kind: "people",
    records: [
      {
        id: "louis-nel",
        name: "Louis H. Nel",
        tldr: "The South African virologist who has coordinated the global rabies elimination effort and its African strategy.",
        summary:
          "Louis Nel is a South African virologist at the University of Pretoria and one of the world's leading authorities on rabies, having directed the Global Alliance for Rabies Control and served as a driving force behind the global strategic plan and the United Against Rabies forum. His work has combined laboratory virology with the international policy and coordination that dog-mediated rabies elimination requires — bridging the WHO, FAO and WOAH partners that share responsibility for a disease no single ministry owns. He represents African scientific leadership at the centre of a global elimination programme, in a field where South Africa's research capacity has long outmatched its burden.",
        ...R,
        era: "Contemporary",
        role: "Virologist; University of Pretoria, South Africa",
        knownFor: "Global rabies elimination strategy and coordination; African rabies virology.",
        links: [
          { label: "WHO — rabies (fact sheet, 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
          { label: "United Against Rabies", url: "https://www.unitedagainstrabies.org" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["rabies-vaccination", "one-health-ntd-integration"],
        institutions: ["united-against-rabies", "who"],
        countries: ["south-africa"],
        terms: ["one-health", "zoonosis", "elimination"],
      },
      {
        id: "claude-sabeta",
        name: "Claude Sabeta",
        tldr: "The South African researcher mapping the rabies virus variants that circulate in dogs and wildlife across southern Africa.",
        summary:
          "Claude Sabeta is a South African virologist whose work at the Agricultural Research Council's Onderstepoort Veterinary Institute and the University of Pretoria has characterised the rabies virus variants circulating in dogs, jackals, mongooses and bats across southern Africa. This molecular epidemiology matters operationally: knowing which variant is responsible tells a programme whether dog vaccination can interrupt transmission or whether a wildlife reservoir complicates it, and it is how vaccine coverage and outbreak sources are tracked. He is part of the South African research cluster — with Louis Nel and Wanda Markotter — that has made the country a centre of rabies science disproportionate to its case burden.",
        ...R,
        era: "Contemporary",
        role: "Virologist; Onderstepoort Veterinary Institute and University of Pretoria, South Africa",
        knownFor: "Molecular epidemiology of rabies virus variants in southern Africa.",
        links: [
          { label: "WHO — rabies (fact sheet, 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["genomic-surveillance"],
        countries: ["south-africa"],
        terms: ["one-health", "zoonosis"],
      },
      {
        id: "wanda-markotter",
        name: "Wanda Markotter",
        tldr: "The South African virologist who leads work on bat-borne lyssaviruses and the wildlife side of rabies.",
        summary:
          "Wanda Markotter directs the Centre for Viral Zoonoses at the University of Pretoria and is one of Africa's leading zoonotic-virus researchers, with a body of work on rabies and related lyssaviruses in bats and other wildlife. Her research addresses the part of rabies that dog-focused programmes do not reach: the bat lyssaviruses that cause rare but almost invariably fatal human infections, and the wildlife reservoirs that complicate elimination. As dog-mediated rabies recedes, bats become the primary source of human rabies in some regions — WHO notes this is now the case in the Americas — which makes the wildlife and bat reservoir an increasingly important frontier for a disease the world is trying to eliminate.",
        ...R,
        era: "Contemporary",
        role: "Virologist; director, Centre for Viral Zoonoses, University of Pretoria, South Africa",
        knownFor: "Bat lyssaviruses and wildlife rabies reservoirs.",
        links: [
          { label: "WHO — rabies (fact sheet, 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["genomic-surveillance", "one-health-ntd-integration"],
        countries: ["south-africa"],
        terms: ["one-health", "zoonosis"],
      },
      {
        id: "thumbi-mwangi",
        name: "Samuel Thumbi Mwangi",
        tldr: "The Kenyan epidemiologist building One Health surveillance for rabies and other zoonoses in East Africa.",
        summary:
          "Thumbi Mwangi is a Kenyan veterinary epidemiologist at the University of Nairobi and the Kenya Medical Research Institute's Centre for Global Health Research, working on the intersection of human and animal health where rabies sits. His research on zoonotic disease surveillance, dog population dynamics and community-level rabies control addresses the operational core of elimination in East Africa: knowing where dogs are, how many are vaccinated, and where bites and deaths occur. He is part of the generation of African One Health researchers the field depends on, working at the interface of veterinary and human systems in the countries that carry the greatest burden.",
        ...R,
        era: "Contemporary",
        role: "Veterinary epidemiologist; University of Nairobi and KEMRI, Kenya",
        knownFor: "One Health surveillance and rabies control research in East Africa.",
        links: [
          { label: "WHO — rabies (fact sheet, 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["one-health-ntd-integration", "mhealth-surveillance", "community-health-workers"],
        countries: ["kenya"],
        terms: ["one-health", "zoonosis"],
      },
      {
        id: "katie-hampson",
        name: "Katie Hampson",
        tldr: "The epidemiologist whose models showed how many dogs must be vaccinated, and when, to interrupt rabies transmission.",
        summary:
          "Katie Hampson, professor of infectious disease epidemiology at the University of Glasgow, has produced much of the quantitative evidence underpinning rabies elimination: how much dog vaccination coverage is needed and how it must be sustained to interrupt transmission, how dog population turnover erodes immunity, and the burden and cost-effectiveness of rabies across Africa and Asia. Her work with Tanzanian and other African partners, including the Serengeti rabies programme, turned the 70% coverage target from a rule of thumb into a modelled requirement and demonstrated that sustained, community-delivered dog vaccination can interrupt transmission in a very low-resource setting — evidence that now underpins the global strategy.",
        ...R,
        era: "Contemporary",
        role: "Professor of infectious disease epidemiology, University of Glasgow, United Kingdom",
        knownFor: "Quantitative evidence on dog vaccination coverage, rabies transmission and burden.",
        links: [
          { label: "WHO — rabies (fact sheet, 2026)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["rabies-vaccination", "one-health-ntd-integration", "genomic-surveillance"],
        countries: ["tanzania"],
        terms: ["one-health", "zoonosis", "elimination"],
      },
    ],
  },
  /* --------------------------------- ideas -------------------------------- */
  {
    kind: "ideas",
    records: [
      {
        id: "free-pep-at-point-of-care",
        name: "Free rabies PEP at the point of care, financed like a vaccine",
        tldr: "Almost every rabies death is a failure to reach or afford treatment — so remove the fee, stock the clinics, and count PEP like immunisation.",
        summary:
          "Rabies post-exposure prophylaxis is a course of vaccine, and for severe bites antibodies too, and WHO records the average cost of PEP at around US$108 plus travel and lost income — a devastating sum for someone earning US$1–2 a day. The consequence is that people delay, drop out after the first dose, or never start, and die of a disease that is essentially always preventable. Gavi's inclusion of rabies vaccine in its investment strategy since 2021 and its June 2024 commitment to boost access across more than 50 countries is the beginning of a financing solution. The proposal is to complete it: make PEP free at the point of care in Gavi-eligible and endemic countries, finance it through the immunisation and discretionary funding routes as a public good rather than a patient purchase, and report PEP delivery and completion as programme indicators — the same way vaccine coverage is tracked.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Introduce free PEP with tracked completeness in a defined group of endemic countries and measure time from bite to first dose, course completion, and human rabies deaths against baseline; scale with Gavi and domestic financing.",
        owner: "WHO and United Against Rabies with Gavi, UNICEF and national health ministries",
        links: [
          { label: "WHO — rabies (fact sheet, 17 September 2026): PEP cost and access", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
          { label: "Gavi to boost access to human rabies vaccines in over 50 countries (June 2024)", url: "https://www.who.int/news/item/13-06-2024-gavi-to-boost-access-to-life-saving-rabies-vaccines-human-in-over-50-countries-gavi-who-and-uar" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        drugs: ["rabies-postexposure-prophylaxis"],
        technologies: ["rabies-vaccination", "community-health-workers", "mhealth-surveillance"],
        institutions: ["who", "gavi", "united-against-rabies"],
        bottlenecks: ["access-and-pricing", "costs-and-financing", "surveillance-data-gap"],
        terms: ["one-health", "zoonosis"],
        stats: [
          { label: "PEP cost", value: "≈ US$108 (2018) plus travel and lost income" },
          { label: "Financing turn", value: "Gavi inclusion since 2021; 50+ countries in 2024" },
        ],
      },
      {
        id: "replace-rig-with-monoclonals",
        name: "Replace plasma-derived immunoglobulin with monoclonal antibodies, at scale",
        tldr: "Severe bites need antibodies, and the plasma-derived product is scarce and expensive — monoclonals are the scalable fix.",
        summary:
          "For category III exposures, vaccine alone is not enough: the patient needs neutralising antibodies immediately, and the standard product — human rabies immunoglobulin — is made from the plasma of vaccinated donors, is in chronic global shortage, and is often simply absent where the bite happened. Monoclonal antibodies against the rabies glycoprotein are manufactured at scale, consistently and without plasma, and two are licensed in India. The 2025 phase 4 and cocktail studies point the same way. The proposal is to make the switch deliberate: fund and register monoclonals for rabies in all endemic regions, have WHO and national guidelines list them as first-line alongside RIG, negotiate pricing at the volumes Gavi purchasing can deliver, and verify that the products neutralise the rabies virus variants circulating in each region. Closing the immunoglobulin gap is the single change that most improves the treatment of severe exposures.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Register and price rabies monoclonals across endemic regions, adopt them into national guidelines, and measure the share of category III patients receiving any antibody product and the case fatality in that group.",
        owner: "WHO with manufacturers, Gavi and national regulatory authorities",
        links: [
          { label: "WHO — rabies (fact sheet, 2026): RIG and monoclonal antibodies", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
          { label: "Lancet — rabies monoclonal antibody PEP (2025)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00735-4/fulltext" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        drugs: ["rabies-monoclonal-antibodies", "rabies-postexposure-prophylaxis"],
        targets: ["rabies-glycoprotein"],
        trials: ["rabies-monoclonal-antibody"],
        technologies: ["rabies-vaccination"],
        institutions: ["who", "gavi"],
        bottlenecks: ["access-and-pricing", "costs-and-financing"],
        terms: ["zoonosis", "one-health"],
        stats: [
          { label: "Problem", value: "Human RIG is plasma-derived, scarce and expensive" },
          { label: "Solution", value: "Scalable monoclonals, two already licensed in India" },
        ],
      },
      {
        id: "count-rabies-deaths",
        name: "Count the deaths: surveillance robust enough to measure Zero by 30",
        tldr: "The 44,203 annual figure is modelled, not counted, because rabies surveillance is weak — and you cannot verify zero without counting.",
        summary:
          "WHO is explicit that the exact number of global rabies deaths is uncertain, that the 44,203 figure comes from its 2021 Global Health Estimates model, and that deaths are likely substantially underreported because surveillance is weak and cases are misdiagnosed — paralytic rabies in particular is confused with other neurological disease. This is a problem for a programme whose goal is zero: without reliable counting, no country can demonstrate that it has reached it. The same weakness affects the animal side, where dog rabies surveillance determines whether vaccination is working. The proposal is to make death and exposure reporting a funded, standard part of rabies programmes — reinforced by the One Health workforce and the surveillance and reporting that WHO's own response framework already asks for — so that the path to Zero by 30 is measured as it is walked rather than reconstructed by a model at the end.",
        ...R,
        stage: "Proposal",
        proposedTest:
          "Strengthen human and animal rabies surveillance in a defined group of endemic countries — case definitions, laboratory confirmation, mandatory reporting, and bite/exposure registers — and measure the change in confirmed detections and the ability to document the absence of deaths.",
        owner: "WHO and United Against Rabies with national health and veterinary services and WOAH",
        links: [
          { label: "WHO — rabies (fact sheet, 17 September 2026): uncertainty in the death estimate", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
          { label: "United Against Rabies", url: "https://www.unitedagainstrabies.org" },
        ],
        diseases: ["rabies"],
        pathogens: ["rabies-virus"],
        technologies: ["mhealth-surveillance", "genomic-surveillance", "one-health-ntd-integration"],
        institutions: ["who", "woah", "cdc", "united-against-rabies"],
        bottlenecks: ["surveillance-data-gap", "access-and-pricing", "workforce-and-capacity"],
        terms: ["one-health", "zoonosis", "elimination", "eot"],
        stats: [
          { label: "The problem", value: "44,203 is a model estimate; deaths are under-reported" },
          { label: "Why it matters", value: "You cannot verify zero without counting" },
        ],
      },
    ],
  },
];
