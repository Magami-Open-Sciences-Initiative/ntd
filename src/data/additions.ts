import type { Kind } from "@/lib/schema";

/**
 * The 2026 review additions: records that deepen the four flagship diseases
 * (onchocerciasis, schistosomiasis, rabies, lymphatic filariasis) with what has
 * changed most recently. They are ordinary records of their kind, kept in one
 * file so the review is visible as a set; the graph treats them identically to
 * the base files. Multiple files may contribute records to the same kind.
 */
const REVIEW = { asOf: "2026-09" };

export const ADDITIONS: { kind: Kind; records: unknown[] }[] = [
  /* ---------------------------- treatments ---------------------------- */
  {
    kind: "drugs",
    records: [
      {
        id: "arpraziquantel",
        name: "Arpraziquantel",
        tldr: "A child-friendly dispersible tablet that finally treats schistosomiasis in preschool-aged children, who were excluded from the standard medicine.",
        summary:
          "Arpraziquantel is a paediatric formulation of praziquantel's active enantiomer, developed by the Pediatric Praziquantel Consortium for children from 3 months to 6 years — a group that carries a heavy schistosome burden but was almost never treated, because the standard tablet is large, bitter and of unestablished dosing in small children. It is a 150 mg dispersible tablet with an acceptable taste and stability in hot, humid climates, and is active against both Schistosoma mansoni and S. haematobium. The European Medicines Agency adopted a positive scientific opinion in December 2023 and WHO prequalified it in 2024, and the first preschool-aged child was treated in Uganda in early 2025 through an implementation study.",
        ...REVIEW,
        drugClass: "Pyrazinoisoquinoline (paediatric formulation)",
        mechanism:
          "Shares praziquantel's mechanism — opens a schistosome transient receptor potential (TRP) ion channel, paralysing and damaging the worm — reformulated so a small child can take it.",
        indication: "Schistosomiasis in preschool-aged children (3 months to 6 years).",
        administration: "Oral dispersible tablet, weight-based dosing, dissolvable in water.",
        status: "EMA positive scientific opinion (2023); WHO prequalified (2024); country roll-out under way",
        resistance:
          "Same class and mechanism as praziquantel, so resistance concerns are shared rather than separate.",
        links: [
          { label: "WHO — EMA positive scientific opinion on arpraziquantel", url: "https://www.who.int/news/item/07-02-2024-european-medicines-agency-(ema)-adopts-a-positive-scientific-opinion-on-arpraziquantel" },
          { label: "Pediatric Praziquantel Consortium", url: "https://www.pediatricpraziquantelconsortium.org/" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        targets: ["schistosome-trp-channel"],
        technologies: ["mass-drug-administration"],
        institutions: ["pediatric-praziquantel-consortium", "who"],
        terms: ["preventive-chemotherapy", "tpp"],
        stats: [
          { label: "Dose form", value: "150 mg dispersible tablet" },
          { label: "Age range", value: "3 months – 6 years" },
          { label: "First patient treated", value: "2025, Uganda" },
        ],
        timeline: [
          { date: "2012", text: "The Pediatric Praziquantel Consortium is formed to develop a child-friendly treatment." },
          { date: "2023", text: "The European Medicines Agency adopts a positive scientific opinion." },
          { date: "2024", text: "WHO prequalifies arpraziquantel for procurement." },
          { date: "2025", text: "The first preschool-aged child is treated, in Uganda." },
        ],
      },
      {
        id: "oxfendazole",
        name: "Oxfendazole",
        tldr: "A veterinary dewormer being developed as a treatment that could kill the adult worms of river blindness, lymphatic filariasis and loiasis.",
        summary:
          "Oxfendazole is a benzimidazole used for decades in animals, now in clinical development for human filarial disease by DNDi and partners. What makes it interesting is the possibility of macrofilaricidal activity — killing adult worms rather than only suppressing their offspring — which would shorten elimination programmes that currently must run for the 10–15 year lifespan of the adult parasite, and would treat the patient rather than only the community. Phase II work is running across several infections: the eWHORM partnership's basket trial in Africa, where trichuriasis recruitment is complete and onchocerciasis and loiasis sites have opened, and a Phase IIa proof-of-concept trial for lymphatic filariasis started in India by the ICMR in 2025. A commercialisable tablet formulation is in development.",
        ...REVIEW,
        drugClass: "Benzimidazole",
        mechanism:
          "Binds nematode beta-tubulin, disrupting microtubule assembly and the worm's metabolism; the hope is that it kills adults, not only microfilariae.",
        indication: "Onchocerciasis, lymphatic filariasis and loiasis (investigational).",
        administration: "Oral tablet (human formulation in development).",
        status: "Phase II across multiple filarial infections",
        links: [
          { label: "DNDi — oxfendazole", url: "https://dndi.org/research-development/portfolio/oxfendazole/" },
        ],
        diseases: ["onchocerciasis", "lymphatic-filariasis"],
        pathogens: ["onchocerca-volvulus", "lymphatic-filarial-worms"],
        targets: ["beta-tubulin"],
        technologies: ["open-science-drug-discovery"],
        institutions: ["dndi", "icmr"],
        trials: ["ewhorm-oxfendazole", "oxfendazole-lf"],
        stats: [
          { label: "Origin", value: "Veterinary anthelmintic" },
          { label: "The prize", value: "A macrofilaricide — kills adult worms" },
        ],
      },
    ],
  },

  /* ---------------------------- diagnostics ---------------------------- */
  {
    kind: "diagnostics",
    records: [
      {
        id: "filarial-test-strip",
        name: "Filarial test strip (FTS)",
        tldr: "A rapid antigen test for lymphatic filariasis that falls after the worms die, so it can show whether transmission has actually stopped.",
        summary:
          "The FTS is a lateral-flow test for circulating filarial antigen from adult Wuchereria bancrofti worms. Its crucial advantage over antibody tests is behaviour after cure: because it detects the parasite's own antigen rather than the host's antibody response, it falls when the adult worms die, so a negative result means something about the present rather than the past. It is used for mapping, for assessing the impact of mass treatment and for post-validation surveillance, and it is far more practical than night blood films, which require a sample taken when microfilariae are in the bloodstream. It does not detect Brugia species, which is why a brugian test was developed separately.",
        ...REVIEW,
        method: "Lateral-flow antigen immunoassay",
        sampleType: "Finger-prick blood (usable during the day, unlike night blood films)",
        turnaround: "Minutes",
        performance:
          "Detects current W. bancrofti infection and falls after the adult worms die; does not detect Brugia.",
        availability: "Used in national programmes for mapping, impact assessment and post-validation surveillance",
        links: [
          { label: "WHO — lymphatic filariasis diagnostics", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
        ],
        diseases: ["lymphatic-filariasis"],
        pathogens: ["lymphatic-filarial-worms"],
        technologies: ["lateral-flow-assays"],
        terms: ["eot", "sensitivity-specificity"],
        stats: [
          { label: "Target", value: "W. bancrofti antigen" },
          { label: "Advantage", value: "Falls after cure, unlike antibody tests" },
        ],
      },
      {
        id: "brugia-test-plus",
        name: "Brugia Test Plus (BT+)",
        tldr: "A second-generation rapid test for the Brugia species that the standard filariasis antigen test cannot detect.",
        summary:
          "Brugia malayi and B. timori cause a large share of lymphatic filariasis in South and Southeast Asia, and the standard circulating-filarial-antigen test does not see them. The alternative — antibody tests — cannot distinguish current from past infection. Brugia Test Plus detects IgG4 antibodies against two Brugia antigens simultaneously, was independently evaluated in Malaysia, the United States and Indonesia, and performed reproducibly in high-temperature, high-humidity field conditions. It is an example of a diagnostic built to fill a specific hole in the elimination toolkit rather than a general improvement.",
        ...REVIEW,
        method: "Dual-antigen lateral-flow antibody assay",
        sampleType: "Finger-prick blood",
        turnaround: "Minutes",
        performance:
          "Meets the surveillance target product profile; reproducible in hot, humid field conditions.",
        availability: "Developed and field-evaluated; entering programme use",
        links: [
          { label: "Drugs & Diagnostics for Tropical Diseases — lymphatic filariasis", url: "https://www.ddtd.org/lymphatic-filariasis" },
        ],
        diseases: ["lymphatic-filariasis"],
        pathogens: ["lymphatic-filarial-worms"],
        technologies: ["lateral-flow-assays"],
        institutions: ["find-dx"],
        terms: ["sensitivity-specificity"],
        stats: [
          { label: "Fills the gap", value: "B. malayi and B. timori" },
          { label: "Format", value: "Two antigens in one test" },
        ],
      },
    ],
  },

  /* ------------------------------ technologies ------------------------------ */
  {
    kind: "technologies",
    records: [
      {
        id: "triple-drug-therapy-ida",
        name: "Triple-drug therapy (IDA)",
        tldr: "Ivermectin, DEC and albendazole given together in one dose, which clears filarial worms faster than two-drug regimens and can shorten elimination programmes.",
        summary:
          "IDA is a single co-administered dose of ivermectin, diethylcarbamazine and albendazole for lymphatic filariasis. Compared with the earlier two-drug regimens it removes microfilariae from the blood far more completely after the first round, and modelling and field experience suggest it can cut the number of annual treatment rounds a country needs to reach the elimination threshold. WHO recommended it in 2017, and programmes including Kenya's have used it to accelerate. Its limitation is geographic: DEC is unsafe in people who also carry onchocerciasis or Loa loa, so IDA cannot be used where those infections co-circulate — which excludes much of West and Central Africa.",
        ...REVIEW,
        category: "Preventive chemotherapy",
        maturity: "WHO-recommended standard regimen where onchocerciasis is absent",
        whatItDoes:
          "Clears microfilariae more completely in a single round than two-drug therapy, accelerating time to the elimination threshold.",
        limitation:
          "Cannot be used where onchocerciasis or Loa loa are co-endemic, because DEC can cause severe reactions in those infections.",
        links: [
          { label: "WHO — lymphatic filariasis treatment", url: "https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis" },
        ],
        diseases: ["lymphatic-filariasis"],
        drugs: ["ivermectin", "diethylcarbamazine", "albendazole"],
        technologies: ["mass-drug-administration"],
        institutions: ["who"],
        terms: ["mda", "preventive-chemotherapy"],
        stats: [
          { label: "Recommended", value: "2017" },
          { label: "Constraint", value: "Not where onchocerciasis or Loa loa co-circulate" },
        ],
      },
    ],
  },

  /* ------------------------------ institutions ------------------------------ */
  {
    kind: "institutions",
    records: [
      {
        id: "icmr",
        name: "Indian Council of Medical Research (ICMR)",
        tldr: "India's apex biomedical research body, which carries the world's largest lymphatic filariasis burden and runs the trials trying to end it.",
        summary:
          "The ICMR is India's national medical research agency, funding and running research across infectious disease, including the country's large lymphatic filariasis and visceral leishmaniasis programmes. In 2025 it initiated a Phase IIa proof-of-concept trial of oxfendazole as a treatment for lymphatic filariasis, with DNDi providing the investigational product and technical support — significant because India accounts for the single largest share of the global filariasis burden, so an Indian trial of a potential macrofilaricide is the trial that matters most for the endgame.",
        ...REVIEW,
        institutionType: "Public health research agency",
        country: "India",
        city: "New Delhi",
        focus:
          "National biomedical research, including lymphatic filariasis elimination, leishmaniasis and tuberculosis.",
        links: [
          { label: "Indian Council of Medical Research", url: "https://www.icmr.gov.in/" },
        ],
        diseases: ["lymphatic-filariasis", "leishmaniasis", "leprosy"],
        drugs: ["oxfendazole"],
        trials: ["oxfendazole-lf"],
        institutions: ["who", "dndi"],
        stats: [
          { label: "Burden", value: "India carries the largest share of global LF" },
        ],
      },
      {
        id: "gone",
        name: "Global Onchocerciasis Network for Elimination (GONE)",
        tldr: "A network of national programmes and partners coordinating the final push to eliminate river blindness, with a focus on Africa.",
        summary:
          "GONE brings together national onchocerciasis programmes, WHO, donors, non-governmental organisations and researchers to coordinate the transition from controlling river blindness to eliminating it. Its work is unglamorous but decisive: aligning treatment and surveillance protocols across borders, sharing the evidence needed for a country to be verified as free of transmission, advocating for the funding that elimination requires beyond control, and supporting the countries now attempting what Niger achieved in 2025. Networks like this matter in the endgame, when progress depends on the weakest link in a region rather than the strongest.",
        ...REVIEW,
        institutionType: "Coordination network",
        country: "Global",
        focus:
          "Coordinating onchocerciasis elimination across national programmes, evidence for verification, and advocacy for sustained funding.",
        links: [
          { label: "WHO — onchocerciasis elimination networks", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases/onchocerciasis" },
        ],
        diseases: ["onchocerciasis"],
        institutions: ["who", "gates-foundation"],
        terms: ["eot", "elimination"],
      },
      {
        id: "pediatric-praziquantel-consortium",
        name: "Pediatric Praziquantel Consortium",
        tldr: "The public-private partnership that developed arpraziquantel, the first schistosomiasis treatment designed for preschool-aged children.",
        summary:
          "The Pediatric Praziquantel Consortium was formed to solve a specific, long-ignored problem: the standard schistosomiasis drug could not practically be given to children under about six, so the age group with the heaviest infection intensity in many communities went untreated. Its partners — including Merck KGaA, Astellas, the Swiss Tropical and Public Health Institute and European and African research institutions, with public funding — took arpraziquantel from formulation through clinical trials, a European Medicines Agency positive scientific opinion in 2023 and WHO prequalification in 2024, and supported the implementation study in which the first child was treated in Uganda in 2025.",
        ...REVIEW,
        institutionType: "Product development partnership",
        country: "Switzerland",
        city: "Geneva",
        focus:
          "Development and introduction of a paediatric schistosomiasis treatment, and access for preschool-aged children.",
        links: [
          { label: "Pediatric Praziquantel Consortium", url: "https://www.pediatricpraziquantelconsortium.org/" },
        ],
        diseases: ["schistosomiasis"],
        drugs: ["arpraziquantel"],
        institutions: ["who", "dndi"],
        terms: ["pdp", "tpp"],
        stats: [
          { label: "Deliverable", value: "Arpraziquantel" },
          { label: "Milestone", value: "First child treated, 2025" },
        ],
      },
    ],
  },

  /* --------------------------------- trials --------------------------------- */
  {
    kind: "trials",
    records: [
      {
        id: "emodepside-part2-oncho",
        name: "Emodepside Phase II part 2 for river blindness",
        tldr: "The dose-selection stage of emodepside's clinical development, after part 1 showed it works against adult as well as juvenile worms.",
        summary:
          "The final analysis of part 1 of emodepside's Phase II trial confirmed a favourable safety profile and efficacy against both juvenile and adult Onchocerca volvulus worms, meeting the criteria to proceed. Part 2 will investigate selected doses and their safety, tolerability and pharmacokinetics, with recruitment planned to begin in the third quarter of 2026. The significance is the adulticidal signal: ivermectin does not reliably kill adult worms, so a drug that does would shorten the fifteen-year treatment horizon that currently defines onchocerciasis elimination.",
        ...REVIEW,
        phase: "Phase 2 (part 2)",
        registry: "ClinicalTrials.gov NCT05180461 (Phase 2 part 2)",
        status: "Part 1 positive; part 2 planned for late 2026",
        intervention: "Emodepside, oral, dose selection",
        result:
          "Part 1 met its criteria with efficacy against juvenile and adult worms and no major safety concerns.",
        links: [
          { label: "DNDi — emodepside for river blindness", url: "https://dndi.org/research-development/portfolio/emodepside/" },
        ],
        diseases: ["onchocerciasis"],
        drugs: ["emodepside"],
        targets: ["slo-1"],
        institutions: ["dndi"],
        stats: [
          { label: "Part 1", value: "Positive, including adult worms" },
          { label: "Part 2 recruitment", value: "Planned Q3 2026" },
        ],
      },
      {
        id: "ewhorm-oxfendazole",
        name: "eWHORM basket trial of oxfendazole",
        tldr: "An African-European partnership testing one drug against several worm infections at once, including river blindness and loiasis.",
        summary:
          "The eWHORM partnership runs a basket trial — a single protocol testing oxfendazole across multiple helminth infections simultaneously — with clinical sites in Africa. Recruitment for trichuriasis was completed in Tanzania and sites for onchocerciasis and loiasis opened, alongside a Phase IIa dose-escalation study for loiasis in Gabon. The design is a response to a practical problem in NTD research: running one trial per infection is unaffordable, and a drug that works against several worms at once is exactly what a mass-treatment programme would want.",
        ...REVIEW,
        phase: "Phase 2",
        registry: "PACTR202412611774752",
        status: "Active; trichuriasis recruitment complete, filarial arms open",
        intervention: "Oxfendazole across multiple helminth infections",
        sponsor: "DNDi and the eWHORM partnership",
        result: "Ongoing; a basket design testing one drug against several parasites in parallel.",
        links: [
          { label: "eWHORM — African-European partnership", url: "https://www.ewhorm.org/" },
        ],
        diseases: ["onchocerciasis", "sth"],
        drugs: ["oxfendazole"],
        targets: ["beta-tubulin"],
        institutions: ["dndi"],
        terms: ["pdp"],
      },
      {
        id: "oxfendazole-lf",
        name: "Oxfendazole Phase IIa for lymphatic filariasis (India)",
        tldr: "A proof-of-concept trial asking whether oxfendazole can treat lymphatic filariasis by killing the adult worms.",
        summary:
          "In 2025 the Indian Council of Medical Research initiated a Phase IIa proof-of-concept trial of oxfendazole for lymphatic filariasis in India, with DNDi supplying the investigational product and providing technical support and co-monitoring. India carries the largest single share of the global filariasis burden, so a trial there tests the drug where it matters most. If oxfendazole shows macrofilaricidal activity it would address the core limitation of the current programme: every existing drug suppresses microfilariae without reliably killing adults, which is why treatment must continue for years.",
        ...REVIEW,
        phase: "Phase 2a",
        status: "Active, initiated 2025",
        intervention: "Oxfendazole, oral",
        sponsor: "Indian Council of Medical Research, with DNDi support",
        result: "Ongoing; a proof-of-concept test of macrofilaricidal activity.",
        links: [
          { label: "DNDi — oxfendazole for lymphatic filariasis", url: "https://dndi.org/research-development/portfolio/oxfendazole-for-lymphatic-filariasis/" },
        ],
        diseases: ["lymphatic-filariasis"],
        drugs: ["oxfendazole"],
        targets: ["beta-tubulin"],
        institutions: ["icmr", "dndi"],
      },
      {
        id: "ivm-kids-paediatric",
        name: "IVM-KIDS: paediatric ivermectin",
        tldr: "A consortium working out the right ivermectin dose for children under 15 kg and developing a dispersible formulation for them.",
        summary:
          "Ivermectin dosing was never properly established for the youngest and smallest children — those under 15 kilograms — and the tablet is hard for them to take, so very young children have largely been excluded from mass treatment for river blindness and lymphatic filariasis. The IVM-KIDS consortium, led by the London School of Hygiene & Tropical Medicine, is generating the dosing data and developing a novel oral dispersible formulation; DNDi joined in 2025. The work is unglamorous and closes the same kind of gap that arpraziquantel closed for schistosomiasis.",
        ...REVIEW,
        phase: "Clinical pharmacology and formulation",
        status: "Active; consortium joined by DNDi in 2025",
        intervention: "Ivermectin dosing below 15 kg and a dispersible formulation",
        sponsor: "IVM-KIDS consortium, led by LSHTM",
        result: "Ongoing; aims to extend treatment to children currently excluded.",
        links: [
          { label: "DNDi — paediatric ivermectin", url: "https://dndi.org/research-development/portfolio/paediatric-ivermectin/" },
        ],
        diseases: ["onchocerciasis", "lymphatic-filariasis"],
        drugs: ["ivermectin"],
        institutions: ["lshtm", "dndi"],
        terms: ["tpp"],
      },
      {
        id: "schistoshield",
        name: "SchistoShield (Sm-p80) schistosomiasis vaccine",
        tldr: "The most advanced schistosomiasis vaccine candidate, tested with a controlled human infection model that measures protection directly.",
        summary:
          "SchistoShield is a recombinant Sm-p80 antigen with a GLA-SE adjuvant, developed as a vaccine that would reduce infection intensity and reinfection — something praziquantel cannot do, since it treats but does not protect. After early-phase clinical testing, evaluation moved to a controlled human infection model, in which consented, schistosome-naive volunteers are vaccinated and then deliberately exposed to a defined number of male Schistosoma mansoni cercariae so that protection can be measured directly rather than inferred from field trials. That design is rare in parasitology and is itself a methodological milestone; the open question is how well challenge-model protection predicts what happens in a village.",
        ...REVIEW,
        phase: "Phase 1/2, controlled human infection model",
        registry: "ClinicalTrials.gov NCT05999825",
        status: "Active",
        intervention: "Sm-p80 + GLA-SE vaccine, three doses",
        result:
          "Early clinical testing passed safety; a challenge study measures protection against deliberate exposure.",
        links: [
          { label: "Schistosomiasis challenge study (ClinicalTrials.gov)", url: "https://clinicaltrials.gov/study/NCT05999825" },
        ],
        diseases: ["schistosomiasis"],
        pathogens: ["schistosoma"],
        roadmaps: ["ntd-vaccines-roadmap"],
        institutions: ["who"],
        terms: ["vaccine-gap"],
        stats: [
          { label: "Antigen", value: "Sm-p80 with GLA-SE" },
          { label: "Design", value: "Controlled human infection model" },
        ],
      },
      {
        id: "wings4fgs-fgs",
        name: "WINGS-4-FGS: treating female genital schistosomiasis",
        tldr: "A trial testing whether adding an anti-inflammatory to praziquantel reduces the lasting damage of female genital schistosomiasis.",
        summary:
          "Praziquantel kills the schistosomes, but in female genital schistosomiasis the inflammatory reaction the eggs provoke can leave chronic granuloma and fibrosis that the drug does not undo — and the lesions increase susceptibility to HIV. The WINGS-4-FGS consortium is running a randomised trial that adds a repurposed anti-inflammatory medicine to praziquantel for women and girls living with FGS, with the aim of halting or reducing the inflammatory damage. It is a rare example of NTD research aimed explicitly at morbidity in women, a group that has been under-studied in the field.",
        ...REVIEW,
        phase: "Randomised clinical trial",
        status: "Preparing to launch",
        intervention: "Praziquantel plus anti-inflammatory add-on therapy",
        result: "Ongoing; testing whether anti-inflammatory add-on reduces chronic FGS damage.",
        links: [
          { label: "WINGS-4-FGS consortium", url: "https://www.wings4fgs.eu/" },
        ],
        diseases: ["schistosomiasis"],
        drugs: ["praziquantel"],
        terms: ["fgs", "pdp"],
        institutions: ["dndi"],
      },
      {
        id: "rabies-monoclonal-antibody",
        name: "Rabies monoclonal antibody in category III exposures",
        tldr: "A phase 4 study of an engineered antibody that could replace scarce, plasma-derived rabies immunoglobulin.",
        summary:
          "For severe (category III) bites, post-exposure prophylaxis needs antibodies as well as vaccine, and the standard product — human rabies immunoglobulin — is plasma-derived, expensive and chronically short. Monoclonal antibodies against the rabies glycoprotein offer a scalable, consistent alternative, and two are licensed in India. A 2025 phase 4 study reported outcomes for a monoclonal antibody in patients with category III exposure, and antibody cocktails are being evaluated as a second-line option when immunoglobulin is unavailable. If adopted, these products attack the single most stubborn obstacle in the rabies treatment pathway: the cost and scarcity of immunoglobulin.",
        ...REVIEW,
        phase: "Phase 4",
        registry: "ClinicalTrials.gov NCT02956746",
        status: "Reported 2025",
        intervention: "Rabies monoclonal antibody plus vaccine",
        result:
          "Reported results for category III exposures, supporting monoclonal antibodies as an alternative to human rabies immunoglobulin.",
        links: [
          { label: "Lancet — rabies monoclonal antibody PEP", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00735-4/fulltext" },
        ],
        diseases: ["rabies"],
        drugs: ["rabies-postexposure-prophylaxis"],
        targets: ["rabies-glycoprotein"],
        institutions: ["who"],
        terms: ["one-health"],
      },
    ],
  },

  /* --------------------------------- terms --------------------------------- */
  {
    kind: "terms",
    records: [
      {
        id: "eot",
        name: "Elimination of transmission (EOT)",
        tldr: "A stricter goal than control: no new transmission anywhere in a defined area, verified by an independent assessment of the evidence.",
        summary:
          "NTD programmes use several different targets, and the difference matters. Control reduces disease to an accepted level while transmission continues. Elimination as a public health problem means transmission has fallen below a defined threshold — the target for lymphatic filariasis, where a country must show antigen prevalence has dropped below a set level and survive a dossier review. Elimination of transmission (EOT) is stricter: no locally acquired transmission in a defined area, which for onchocerciasis must be verified by WHO and can require years of surveillance after treatment stops. Eradication means the pathogen no longer exists anywhere. The step from 'as a public health problem' to EOT is where programmes are spending the 2020s, and it is much harder, because it depends on diagnostics that work at very low infection levels and on the discipline to keep looking after the visible disease is gone.",
        ...REVIEW,
        category: "Policy",
        aka: "EOT, elimination of transmission",
        links: [
          { label: "WHO — NTD road map and elimination targets", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        related: ["elimination", "ntd", "sensitivity-specificity"],
        stats: [
          { label: "Stricter than", value: "Elimination as a public health problem" },
          { label: "Verified by", value: "WHO, after a dossier review" },
        ],
      },
      {
        id: "fgs",
        name: "Female genital schistosomiasis (FGS)",
        tldr: "Schistosome eggs lodged in the genital tract, causing lesions, pain and bleeding — and a raised risk of HIV — in tens of millions of women and girls.",
        summary:
          "Female genital schistosomiasis occurs when Schistosoma haematobium eggs lodge in the female genital tract and provoke an inflammatory reaction, producing lesions, pain, bleeding and discharge. WHO estimates it affects around 56 million women and girls in sub-Saharan Africa, and it is routinely misdiagnosed as a sexually transmitted infection, so many of them are treated with antibiotics that do nothing. The lesions are vascular and increase susceptibility to HIV, which makes FGS an important but under-recognised driver of the HIV epidemic in the same regions. Praziquantel clears the worms, but the scarring can persist, so research is testing whether anti-inflammatory treatment added to praziquantel reduces lasting damage. Diagnosis is difficult: it needs a speculum examination by a trained clinician, and there is no simple point-of-care test.",
        ...REVIEW,
        category: "Clinical",
        aka: "FGS",
        links: [
          { label: "WHO — female genital schistosomiasis", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis"],
        drugs: ["praziquantel"],
        trials: ["wings4fgs-fgs"],
        bottlenecks: ["stigma-and-disability"],
        terms: ["elimination"],
        stats: [
          { label: "Estimated burden", value: "≈ 56 million women and girls", note: "sub-Saharan Africa (WHO)" },
          { label: "Commonly misdiagnosed as", value: "A sexually transmitted infection" },
        ],
      },
    ],
  },

  /* ===================== review: Buruli ulcer, Chagas, ===================== */
  /* ================= dengue & chikungunya, dracunculiasis ================= */

  {
    kind: "targets",
    records: [
      {
        id: "qcrb",
        name: "QcrB (cytochrome bc1 complex subunit)",
        tldr: "The enzyme subunit that telacebec blocks, cutting off the mycobacterium's energy supply — a target shared with tuberculosis.",
        summary:
          "QcrB is part of the cytochrome bc1 complex, which mycobacteria use to generate energy. The drug telacebec binds it and shuts down respiration, which is rapidly lethal to Mycobacterium tuberculosis and, at extremely low concentrations, to Mycobacterium ulcerans. Because the target is conserved across mycobacteria, the extensive work done on QcrB for tuberculosis can be mined for Buruli ulcer and leprosy — a rare case where investment in one disease delivers a validated target for two others with almost no market.",
        ...REVIEW,
        targetType: "Enzyme (respiratory complex subunit)",
        organism: "Mycobacterium ulcerans, M. tuberculosis",
        rationale:
          "Essential for mycobacterial energy generation, conserved across the genus, and validated by a drug (telacebec) with potent activity against both.",
        druggability: "Validated in tuberculosis and highly active against M. ulcerans in vitro and in mouse models.",
        knownLigands: "Telacebec (Q203) and related imidazopyridine QcrB inhibitors.",
        links: [
          { label: "TB Alliance — telacebec for Buruli ulcer", url: "https://www.tballiance.org/news-new-clinical-trial-examines-use-novel-compound-telacebec-buruli-ulcer-patients/" },
          { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          { label: "ChEMBL — telacebec (CHEMBL3298910)", url: "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3298910/" },
        ],
        pathogens: ["mycobacterium-ulcerans", "mycobacterium-leprae"],
        diseases: ["buruli-ulcer", "leprosy"],
        drugs: ["telacebec"],
        technologies: ["drug-repurposing"],
        stats: [
          { label: "Shared with", value: "Tuberculosis" },
          {
            label: "Potency vs M. ulcerans",
            value: "0.0000075",
            number: 0.0000075,
            unit: "mg/L",
            note: "MIC — the lowest of eight drugs tested; rifampicin and clarithromycin were 0.5 mg/L",
            source: { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          },
        ],
      },
      {
        id: "bacterial-dna-gyrase",
        name: "Bacterial DNA gyrase",
        tldr: "The enzyme fluoroquinolones such as moxifloxacin block to stop bacteria untangling their DNA.",
        summary:
          "DNA gyrase is a type II topoisomerase that relieves the torsional stress generated as bacteria unwind and copy their DNA; without it, replication stalls. Fluoroquinolones bind the enzyme–DNA complex and trap it, which is lethal. It is the target of moxifloxacin, the alternative partner to rifampicin in the eight-week Buruli ulcer regimen, and of ciprofloxacin, used for Buruli ulcer in Australia. Fluoroquinolone resistance mutations in the gyrase genes are a shared concern with tuberculosis.",
        ...REVIEW,
        targetType: "Enzyme (type II topoisomerase)",
        organism: "Bacteria, including Mycobacterium ulcerans and M. tuberculosis",
        rationale:
          "Essential for DNA replication and already validated by an approved drug class that includes a WHO-recommended partner for Buruli ulcer.",
        druggability: "Extensively validated: fluoroquinolones are among the most widely used antibiotics.",
        knownLigands: "Moxifloxacin, ciprofloxacin and other fluoroquinolones.",
        links: [
          { label: "WHO — Treatment of Mycobacterium ulcerans disease: guidance for health workers (2012)", url: "https://iris.who.int/handle/10665/77771" },
          { label: "ChEMBL — moxifloxacin (CHEMBL32)", url: "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL32/" },
        ],
        proteinAbsent:
          "DNA gyrase is a multi-subunit enzyme (GyrA and GyrB), not a single protein, so no standalone sequence is attached; fluoroquinolones bind the enzyme–DNA complex rather than either subunit alone.",
        pathogens: ["mycobacterium-ulcerans", "mycobacterium-tuberculosis"],
        diseases: ["buruli-ulcer", "tuberculosis"],
        drugs: ["moxifloxacin"],
        terms: ["amr"],
      },
    ],
  },

  {
    kind: "drugs",
    records: [
      {
        id: "telacebec",
        name: "Telacebec (Q203)",
        tldr: "A tuberculosis drug with exceptional potency against the Buruli ulcer bacterium, in trials that could shorten treatment from eight weeks to a few doses.",
        summary:
          "Telacebec is an imidazopyridine developed for tuberculosis that blocks QcrB in the mycobacterial respiratory chain. Against Mycobacterium ulcerans it has the lowest minimum inhibitory concentration of any drug tested — 0.0000075 mg/L, against 0.5 mg/L for both rifampicin and clarithromycin in a 2025 head-to-head comparison — and in mouse models it sterilised the infection after only sixteen doses, which would translate into an ultrashort regimen. The Phase 2 TREAT-BU trial began in Australia in July 2024, sponsored by Barwon Health with TB Alliance as collaborator. It is the clearest example in the NTD field of the repurposing strategy: take a molecule whose safety is already established for one mycobacterial disease and prove it works for another, rather than inventing a new drug for a market that cannot pay.",
        ...REVIEW,
        drugClass: "Imidazopyridine (QcrB inhibitor)",
        mechanism:
          "Inhibits QcrB, a subunit of the cytochrome bc1 complex, disrupting mycobacterial energy metabolism.",
        indication: "Buruli ulcer (investigational); developed for tuberculosis.",
        administration: "Oral (regimen under investigation).",
        status: "Phase 2 (TREAT-BU, started July 2024)",
        resistance:
          "Target-based resistance mutations are known from tuberculosis work and are a reason to test combinations.",
        links: [
          { label: "TB Alliance — telacebec trial in Buruli ulcer", url: "https://www.tballiance.org/news-new-clinical-trial-examines-use-novel-compound-telacebec-buruli-ulcer-patients/" },
          { label: "TREAT-BU trial (ClinicalTrials.gov)", url: "https://clinicaltrials.gov/study/NCT06481163" },
          { label: "PLoS NTD — regimens sterilising mice after 16 doses (2020)", url: "https://doi.org/10.1371/journal.pntd.0007857" },
          { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          { label: "ChEMBL — telacebec (CHEMBL3298910)", url: "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3298910/" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        targets: ["qcrb"],
        trials: ["treat-bu"],
        technologies: ["drug-repurposing", "open-science-drug-discovery"],
        institutions: ["tb-alliance"],
        stats: [
          { label: "Origin", value: "Tuberculosis drug discovery" },
          {
            label: "Potency vs M. ulcerans",
            value: "0.0000075",
            number: 0.0000075,
            unit: "mg/L",
            note: "MIC — the lowest of eight drugs in a 2025 comparison",
            source: { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          },
          {
            label: "Mouse model",
            value: "Sterilised after 16 doses",
            note: "intermittent oral regimens",
            source: { label: "PLoS NTD — telacebec regimens sterilised mice after 16 doses (2020)", url: "https://doi.org/10.1371/journal.pntd.0007857" },
          },
        ],
      },
      {
        id: "clarithromycin",
        name: "Clarithromycin",
        tldr: "The macrolide paired with rifampicin in the eight-week oral cure that replaced injectable streptomycin for Buruli ulcer.",
        summary:
          "Clarithromycin is a macrolide antibiotic that binds the bacterial 50S ribosome and blocks protein synthesis. Paired with rifampicin, it is the first-line treatment for Buruli ulcer: a fully oral eight-week course that cures most lesions and removed the need for daily streptomycin injections, which were painful, required a clinic visit and risked deafness and kidney damage. It is also used against Mycobacterium avium complex and other respiratory infections. WHO's guidance gives the alternative regimen as rifampicin plus moxifloxacin when clarithromycin is unsuitable.",
        ...REVIEW,
        drugClass: "Macrolide antibiotic",
        mechanism: "Binds the 50S ribosomal subunit and blocks elongation of protein synthesis.",
        indication: "Buruli ulcer (with rifampicin); also respiratory and other bacterial infections.",
        administration: "Oral, 7.5 mg/kg twice daily for 8 weeks in Buruli ulcer (extended-release, 15 mg/kg once daily).",
        status: "Standard of care for Buruli ulcer, in combination",
        whoStatus: "On the WHO Model List of Essential Medicines",
        resistance:
          "Macrolide resistance is a general concern; in M. ulcerans it is monitored rather than commonly seen, and it is one reason combination therapy is used.",
        classSiblings: [
          { name: "Azithromycin", note: "the same macrolide class, used in single-dose mass treatment for trachoma and yaws" },
          { name: "Erythromycin", note: "the older macrolide from which clarithromycin was derived" },
        ],
        links: [
          { label: "WHO — Treatment of Mycobacterium ulcerans disease: guidance for health workers (2012)", url: "https://iris.who.int/handle/10665/77771" },
          { label: "WHO — Routine health information system data: Buruli ulcer (2025)", url: "https://iris.who.int/handle/10665/382160" },
          { label: "ChEMBL — clarithromycin (CHEMBL1741)", url: "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1741/" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        targets: ["bacterial-ribosome"],
        terms: ["macrolide-resistance"],
        stats: [
          { label: "Standard course", value: "8 weeks", unit: "weeks", note: "all oral, with rifampicin" },
          {
            label: "Potency vs M. ulcerans",
            value: "0.5",
            number: 0.5,
            unit: "mg/L",
            note: "MIC in a 2025 comparison; telacebec was 0.0000075 mg/L",
            source: { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          },
        ],
      },
      {
        id: "moxifloxacin",
        name: "Moxifloxacin",
        tldr: "The fluoroquinolone WHO names as the alternative to clarithromycin in Buruli ulcer treatment, and a repurposing candidate in its own right.",
        summary:
          "Moxifloxacin is a fluoroquinolone that inhibits bacterial DNA gyrase and topoisomerase IV. WHO's Buruli ulcer guidance gives an eight-week course of rifampicin plus moxifloxacin as the alternative when clarithromycin cannot be used, for example in pregnancy or with macrolide intolerance. It is also a component of the BPaLM regimen for drug-resistant tuberculosis, and a 2025 study found that moxifloxacin had one of the higher maximum-kill effects against M. ulcerans among eight drugs tested, alone and in combination — which makes it both a fallback and a candidate for shorter regimens.",
        ...REVIEW,
        drugClass: "Fluoroquinolone antibiotic",
        mechanism: "Inhibits DNA gyrase and topoisomerase IV, blocking DNA replication and repair.",
        indication: "Buruli ulcer (alternative regimen with rifampicin); tuberculosis and other bacterial infections.",
        administration: "Oral, 400 mg once daily for 8 weeks in adults (Buruli ulcer).",
        status: "Standard of care (alternative regimen), in combination",
        whoStatus: "On the WHO Model List of Essential Medicines",
        resistance:
          "Fluoroquinolone resistance is a shared tuberculosis concern and a reason for cautious use.",
        classSiblings: [
          { name: "Ciprofloxacin", note: "used for Buruli ulcer in Australia alongside moxifloxacin" },
          { name: "Other fluoroquinolones", note: "a broad class; only some are used for mycobacterial disease" },
        ],
        links: [
          { label: "WHO — Treatment of Mycobacterium ulcerans disease: guidance for health workers (2012)", url: "https://iris.who.int/handle/10665/77771" },
          { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          { label: "ChEMBL — moxifloxacin (CHEMBL32)", url: "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL32/" },
        ],
        diseases: ["buruli-ulcer", "tuberculosis"],
        pathogens: ["mycobacterium-ulcerans", "mycobacterium-tuberculosis"],
        targets: ["bacterial-dna-gyrase"],
        stats: [
          { label: "Alternative regimen", value: "8 weeks", unit: "weeks", note: "oral, with rifampicin" },
          {
            label: "Kill vs M. ulcerans",
            value: "Among the highest of 8 drugs",
            note: "maximum-kill effect, alone and in combination (2025)",
            source: { label: "Antimicrob Agents Chemother — repurposing drugs for Buruli ulcer (2025)", url: "https://doi.org/10.1128/aac.00029-25" },
          },
        ],
      },
      {
        id: "mosnodenvir",
        name: "Mosnodenvir (JNJ-1802)",
        tldr: "A dengue antiviral that protected volunteers in a human challenge study, but whose Phase 2 field trial was discontinued in 2025.",
        summary:
          "Mosnodenvir is a small-molecule antiviral that blocks dengue virus replication and, unusually for the field, demonstrated protection in a controlled human infection model — a strong early signal that a preventive dengue drug might be possible. It was safe and well tolerated in Phase 1 and Phase 2a studies. In 2025 the developer discontinued the Phase 2 field study, leaving dengue without an approved antiviral and illustrating a recurring problem: a promising mechanism validated in a challenge model still needs a large, expensive field trial, and there is no commercial logic for funding one in the countries where dengue kills most people.",
        ...REVIEW,
        drugClass: "Small-molecule antiviral",
        mechanism: "Blocks dengue virus replication; the precise viral target is part of the replication complex.",
        indication: "Prevention of dengue (investigational; discontinued).",
        administration: "Oral.",
        status: "Discontinued in Phase 2 field study (2025)",
        links: [
          { label: "Johnson & Johnson — discontinuation of the Phase 2 dengue study", url: "https://www.jnj.com/media-center/press-releases/johnson-johnson-to-discontinue-phase-2-field-study-evaluating-investigational-antiviral-for-the-prevention-of-dengue" },
        ],
        diseases: ["dengue"],
        pathogens: ["dengue-virus"],
        trials: ["mosnodenvir-dengue"],
        terms: ["tpp"],
        stats: [
          { label: "Early signal", value: "Protection in a human challenge model" },
          { label: "Outcome", value: "Field study discontinued, 2025" },
        ],
      },
      {
        id: "ixchiq",
        name: "Ixchiq (chikungunya vaccine)",
        tldr: "The first licensed chikungunya vaccine, whose use was paused in people aged 60 and over in 2025 after serious adverse events.",
        summary:
          "Ixchiq is a live-attenuated chikungunya vaccine and the first product of any kind licensed against the disease, given as a single dose. In 2025 the FDA and CDC recommended a pause in its use in people aged 60 and older while they investigated post-marketing reports of serious neurological and cardiac events — seventeen in total, including two deaths, in recipients aged 62 to 89 — and the FDA issued a further safety update later that year. The vaccine remains available for younger people, but the pause removed it from the age group most vulnerable to severe chikungunya, which is a substantial limitation for a disease spread by the same mosquitoes as dengue and with no specific treatment.",
        ...REVIEW,
        drugClass: "Live-attenuated vaccine",
        mechanism: "Induces neutralising antibodies against chikungunya virus after a single dose.",
        indication: "Prevention of chikungunya disease.",
        administration: "Single intramuscular dose.",
        status: "Licensed (2023); use paused in adults 60 and over (2025)",
        links: [
          { label: "FDA/CDC — pause in use of Ixchiq in people 60 and older", url: "https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/fda-and-cdc-recommend-pause-use-ixchiq-chikungunya-vaccine-live-individuals-60-years-age-and-older" },
        ],
        diseases: ["chikungunya"],
        pathogens: ["chikungunya-virus"],
        technologies: ["chikungunya-vaccination"],
        trials: ["vla1553-trial"],
        stats: [
          { label: "Dosing", value: "Single dose" },
          { label: "Pause", value: "Adults ≥ 60, May 2025" },
          { label: "Events investigated", value: "17 serious, including 2 deaths", note: "ages 62–89" },
        ],
      },
      {
        id: "vimkunya",
        name: "Vimkunya (chikungunya vaccine)",
        tldr: "A virus-like-particle chikungunya vaccine licensed in 2025 — the second product against the disease, and not subject to the pause applied to the first.",
        summary:
          "Vimkunya is a virus-like-particle vaccine against chikungunya, licensed in 2025 and given as a single dose. It is the second licensed chikungunya vaccine after Ixchiq, and because it is not a live-attenuated vaccine it was not caught by the 2025 safety pause that restricted Ixchiq in people aged 60 and over. Published data show it elicits neutralising antibodies against multiple chikungunya lineages after a single dose. It matters because chikungunya has no specific antiviral, and the older adults most at risk of severe disease were the group the first vaccine could no longer reach.",
        ...REVIEW,
        drugClass: "Virus-like particle vaccine",
        mechanism: "Presents chikungunya virus-like particles to induce neutralising antibodies after a single dose.",
        indication: "Prevention of chikungunya disease.",
        administration: "Single intramuscular dose.",
        status: "Licensed (2025); availability limited",
        whoStatus: "Under WHO review alongside Ixchiq",
        links: [
          { label: "WHO — chikungunya (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya" },
          { label: "Vaccine — Vimkunya cross-neutralisation after a single dose (2026)", url: "https://doi.org/10.1016/j.vaccine.2026.128892" },
        ],
        diseases: ["chikungunya"],
        pathogens: ["chikungunya-virus"],
        technologies: ["chikungunya-vaccination"],
        stats: [
          { label: "Dosing", value: "Single dose" },
          { label: "Platform", value: "Virus-like particle (not live-attenuated)" },
        ],
      },
    ],
  },

  {
    kind: "diagnostics",
    records: [
      {
        id: "mycolactone-detection",
        name: "Mycolactone detection",
        tldr: "A test for the toxin the Buruli ulcer bacterium produces, which could allow diagnosis at a district clinic rather than a reference laboratory.",
        summary:
          "Mycobacterium ulcerans causes disease entirely through mycolactone, its toxin, so detecting the toxin is a direct way to diagnose the infection. Fluorescent thin-layer chromatography has been used to detect it, and a mycolactone-specific lateral flow assay was reported in a 2024 case study. The value is practical: PCR requires a reference laboratory and a sample transport chain, whereas a toxin test could be done where the patient presents, allowing treatment to start before the lesion extends. A rapid test at primary-health-care level is one of WHO's stated research priorities for Buruli ulcer — WHO's 2022 target product profile sets out the performance such a test would need — precisely because late diagnosis is the main driver of disability.",
        ...REVIEW,
        method: "Detection of mycolactone toxin in a lesion sample (fluorescent thin-layer chromatography; mycolactone lateral flow assay in early evaluation)",
        sampleType: "Swab, fine-needle aspirate or tissue",
        turnaround: "Same day at health-centre level; the WHO target product profile's ideal is under 20 minutes",
        performance:
          "WHO's target product profile asks for clinical sensitivity above 65% in PCR-confirmed samples (non-inferior to Ziehl–Neelsen microscopy) and specificity above 90%, with an ideal within 10% of PCR.",
        availability: "Evaluated at district level; not yet a routine field test",
        links: [
          { label: "WHO — Target product profile for a rapid Buruli ulcer test (2022)", url: "https://iris.who.int/handle/10665/353982" },
          { label: "WHO — Buruli ulcer research priorities", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases/buruli-ulcer/research-priorities" },
          { label: "J Clin Tuberc Other Mycobact Dis — mycolactone lateral flow assay case report (2024)", url: "https://doi.org/10.1016/j.jctube.2024.100469" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        technologies: ["lateral-flow-assays"],
        institutions: ["find-dx", "bu-labnet"],
        bottlenecks: ["diagnostics-gap"],
        stats: [
          {
            label: "Sensitivity target",
            value: "> 65%",
            number: 65,
            unit: "%",
            note: "minimum, in PCR-confirmed samples; ideal within 10% of PCR",
            source: { label: "WHO — Target product profile for a rapid Buruli ulcer test (2022)", url: "https://iris.who.int/handle/10665/353982" },
          },
          {
            label: "Specificity target",
            value: "> 90%",
            number: 90,
            unit: "%",
            source: { label: "WHO — Target product profile for a rapid Buruli ulcer test (2022)", url: "https://iris.who.int/handle/10665/353982" },
          },
          {
            label: "Time to result",
            value: "< 20 minutes",
            number: 20,
            unit: "minutes",
            note: "ideal; same day is the minimum",
            source: { label: "WHO — Target product profile for a rapid Buruli ulcer test (2022)", url: "https://iris.who.int/handle/10665/353982" },
          },
        ],
      },
      {
        id: "dengue-ns1-rdt",
        name: "Dengue NS1 rapid test",
        tldr: "A lateral-flow test for the dengue NS1 antigen that gives a result in minutes during the first days of illness.",
        summary:
          "The NS1 antigen test detects a non-structural dengue protein in blood during the first days of illness, when virus is present and before antibodies appear. It is fast, needs no laboratory, and is the mainstay of point-of-care dengue diagnosis during outbreaks — but it is less sensitive after about day five, and it cannot reliably separate the four serotypes or distinguish a primary from a secondary infection, so RT-PCR remains the confirmatory test. Its value is practical: it lets a clinician classify a febrile patient and start the fluid monitoring that severe dengue requires.",
        ...REVIEW,
        method: "Lateral-flow immunoassay for dengue NS1 antigen",
        sampleType: "Blood (serum or plasma)",
        turnaround: "15–30 minutes",
        performance: "High sensitivity in the first 1–5 days of illness; falls after day 5, when IgM serology becomes more useful.",
        availability: "Widely used in endemic countries and in travellers' clinics",
        links: [
          { label: "WHO — dengue and severe dengue (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
          { label: "PAHO — dengue", url: "https://www.paho.org/en/topics/dengue" },
        ],
        diseases: ["dengue"],
        pathogens: ["dengue-virus"],
        technologies: ["lateral-flow-assays"],
        bottlenecks: ["diagnostics-gap"],
        stats: [
          { label: "Turnaround", value: "15–30 minutes", number: 30, unit: "minutes" },
          { label: "Useful window", value: "First ~5 days", note: "before IgM becomes detectable" },
        ],
      },
      {
        id: "chikungunya-rt-pcr",
        name: "Chikungunya RT-PCR",
        tldr: "Molecular detection of chikungunya virus RNA in the first week of illness, before antibodies appear.",
        summary:
          "RT-PCR detects chikungunya virus RNA in blood during the first week of illness — the window before IgM appears — and is the test of choice for early confirmation. Its importance is not only diagnostic: chikungunya, dengue and Zika co-circulate, look alike clinically and share a vector, but they need different management. Dengue requires fluid monitoring and a watch for shock, and NSAIDs must be avoided until dengue is excluded because of bleeding risk, so a test that distinguishes them changes what a clinician does.",
        ...REVIEW,
        method: "Reverse-transcription PCR for chikungunya virus RNA; increasingly part of multiplex arbovirus panels",
        sampleType: "Blood (serum or plasma)",
        turnaround: "Hours to days, laboratory-dependent",
        performance: "Most sensitive in the first ~7 days of illness; IgM serology is used later.",
        availability: "Reference and regional laboratories; multiplex arbovirus panels increasingly used",
        links: [
          { label: "WHO — chikungunya (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya" },
          { label: "PAHO — chikungunya", url: "https://www.paho.org/en/topics/chikungunya" },
        ],
        diseases: ["chikungunya"],
        pathogens: ["chikungunya-virus"],
        technologies: ["molecular-pcr"],
        bottlenecks: ["diagnostics-gap"],
        stats: [
          { label: "Useful window", value: "First ~7 days", note: "before IgM seroconversion" },
        ],
      },
    ],
  },

  {
    kind: "trials",
    records: [
      {
        id: "treat-bu",
        name: "TREAT-BU: telacebec for Buruli ulcer",
        tldr: "A Phase 2 trial testing whether a tuberculosis drug can cure Buruli ulcer in 10 to 28 days instead of eight weeks of standard antibiotics.",
        summary:
          "TREAT-BU is a Phase 2, open-label, single-arm multicentre study of telacebec in adults with Buruli ulcer, sponsored by Barwon Health in Australia with TB Alliance as collaborator. It began on 9 July 2024 and plans to enrol up to 200 participants at sites in Geelong and Melbourne. Participants receive telacebec orally either as 300 mg once daily for 14–28 days or, under a later protocol, 100 mg once daily for 10 days. The primary endpoint is complete lesion healing by 52 weeks after starting treatment, without relapse and without curative-intent excision surgery. The rationale is unusually strong: telacebec has the lowest minimum inhibitory concentration of any drug tested against Mycobacterium ulcerans and sterilised the infection in mice after only sixteen doses. If it works in people, the eight-week antibiotic course that is now standard could be replaced by one or a few weeks — which matters most for the patients who live furthest from a clinic.",
        ...REVIEW,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT06481163",
        status: "Recruiting (started 9 July 2024)",
        intervention: "Telacebec, oral — 100 mg once daily for 10 days, or 300 mg once daily for 14–28 days",
        sponsor: "Barwon Health, with TB Alliance as collaborator",
        result:
          "Ongoing. Primary endpoint: complete lesion healing at 52 weeks without relapse or curative-intent surgery; primary completion estimated December 2027.",
        links: [
          { label: "TREAT-BU trial (ClinicalTrials.gov NCT06481163)", url: "https://clinicaltrials.gov/study/NCT06481163" },
          { label: "TB Alliance — telacebec trial in Buruli ulcer", url: "https://www.tballiance.org/news-new-clinical-trial-examines-use-novel-compound-telacebec-buruli-ulcer-patients/" },
        ],
        diseases: ["buruli-ulcer"],
        drugs: ["telacebec"],
        targets: ["qcrb"],
        institutions: ["barwon-health", "tb-alliance"],
        stats: [
          {
            label: "Planned enrolment",
            value: "200",
            number: 200,
            unit: "participants",
            note: "estimated; adults with PCR- or culture-confirmed Buruli ulcer",
            source: { label: "TREAT-BU trial (ClinicalTrials.gov NCT06481163)", url: "https://clinicaltrials.gov/study/NCT06481163" },
          },
          {
            label: "Treatment studied",
            value: "10–28 days",
            unit: "days",
            note: "versus 8 weeks of standard rifampicin + clarithromycin",
            source: { label: "TREAT-BU trial (ClinicalTrials.gov NCT06481163)", url: "https://clinicaltrials.gov/study/NCT06481163" },
          },
        ],
      },
      {
        id: "vla1553-trial",
        name: "VLA1553 pivotal Phase 3 trial (chikungunya vaccine)",
        tldr: "The 4,128-person trial that supported the first licensed chikungunya vaccine, showing a seroprotective antibody response in the great majority of recipients.",
        summary:
          "VLA1553 is a live-attenuated chikungunya vaccine candidate. In this multicentre, randomised, placebo-controlled Phase 3 study, 4,128 adults aged 18 and over in the United States received a single dose; the primary endpoint was the proportion of baseline-negative participants with a seroprotective chikungunya antibody level 28 days after vaccination. The trial completed in 2021 and supported the licensure of Ixchiq — the first vaccine of any kind against chikungunya, approved in 2023 — before post-marketing reports of serious neurological and cardiac events led the FDA and CDC to pause its use in people aged 60 and over in 2025.",
        ...REVIEW,
        phase: "Phase 3",
        registry: "ClinicalTrials.gov NCT04546724",
        status: "Completed (2021)",
        intervention: "VLA1553 (live-attenuated chikungunya vaccine), single dose",
        sponsor: "Valneva Austria GmbH",
        result:
          "A single dose produced seroprotective antibody levels in the great majority of baseline-negative adults; it supported licensure of Ixchiq (2023).",
        links: [
          { label: "VLA1553 pivotal Phase 3 trial (ClinicalTrials.gov NCT04546724)", url: "https://clinicaltrials.gov/study/NCT04546724" },
          { label: "WHO — chikungunya (fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/chikungunya" },
        ],
        diseases: ["chikungunya"],
        drugs: ["ixchiq"],
        stats: [
          {
            label: "Participants",
            value: "4,128",
            number: 4128,
            unit: "adults",
            year: 2021,
            geography: "United States",
            source: { label: "VLA1553 pivotal Phase 3 trial (ClinicalTrials.gov NCT04546724)", url: "https://clinicaltrials.gov/study/NCT04546724" },
          },
        ],
      },
      {
        id: "fexinidazole-chagas",
        name: "Fexinidazole for chronic Chagas disease",
        tldr: "The trial that ended fexinidazole's Chagas candidacy: tolerated by patients, but unable to eliminate the parasite.",
        summary:
          "Fexinidazole is an oral drug that transformed sleeping sickness, so testing it in chronic Chagas disease — caused by a related trypanosome — was a reasonable bet. An early Phase 2 study was encouraging enough to generate real hope, reporting high efficacy at treatment durations of less than three days, but it was interrupted for tolerability reasons. A follow-up study confirmed that the drug was well tolerated and found that it did not eliminate Trypanosoma cruzi. The negative result closed this line of work and pushed DNDi's Chagas programme toward a new candidate, with a Phase II proof-of-concept study planned to begin in Latin America in late 2026.",
        ...REVIEW,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT03587766",
        status: "Reported negative on parasite elimination",
        intervention: "Fexinidazole, oral",
        result:
          "Well tolerated, but did not clear the parasite — fexinidazole is not effective for Chagas disease.",
        links: [
          { label: "DNDi — fexinidazole for Chagas disease", url: "https://dndi.org/research-development/portfolio/fexinidazole-chagas/" },
        ],
        diseases: ["chagas"],
        drugs: ["fexinidazole"],
        institutions: ["dndi"],
        terms: ["pdp"],
      },
      {
        id: "awed-wolbachia",
        name: "AWED: Wolbachia to eliminate dengue",
        tldr: "The gold-standard randomised trial that showed Wolbachia-infected mosquitoes cut dengue by 77% and hospitalisations by 86%.",
        summary:
          "The AWED trial was a cluster-randomised controlled trial in Yogyakarta, Indonesia, in which Wolbachia-infected Aedes aegypti mosquitoes were released across part of the city and dengue incidence compared with untreated areas. It found a 77% reduction in virologically-confirmed symptomatic dengue and an 86% reduction in hospitalisations — a result of a size and rigour rarely seen for a vector-control intervention. The trial is the foundation of the World Mosquito Program's case for scaling the method, and subsequent city-scale deployments in Brazil and Colombia have reported reductions of similar magnitude. Yogyakarta recorded only 67 dengue cases in 2023, a fraction of its historical burden.",
        ...REVIEW,
        phase: "Cluster-randomised trial",
        status: "Reported positive",
        intervention: "Release of wMel Wolbachia-infected Aedes aegypti",
        sponsor: "World Mosquito Program, Monash University and Gadjah Mada University",
        result: "77% reduction in dengue cases and 86% reduction in hospitalisations in treated areas.",
        links: [
          { label: "Efficacy of Wolbachia-infected mosquito deployments (NEJM)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2030243" },
        ],
        diseases: ["dengue"],
        technologies: ["wolbachia-method"],
        vectors: ["aedes-aegypti"],
        institutions: ["world-mosquito-program"],
        stats: [
          { label: "Dengue cases", value: "−77%" },
          { label: "Hospitalisations", value: "−86%" },
        ],
      },
      {
        id: "mosnodenvir-dengue",
        name: "Mosnodenvir dengue prevention study",
        tldr: "The field study of a promising dengue antiviral that was discontinued in 2025 despite encouraging early results.",
        summary:
          "This Phase 2 field study tested mosnodenvir, formerly JNJ-1802, for the prevention of dengue after the drug showed it could protect volunteers in a controlled human infection model — an unusually strong early signal for a dengue antiviral. It was safe and well tolerated in Phase 1 and 2a studies. In 2025 the developer discontinued the field study, a decision driven by commercial and strategic considerations rather than a safety signal. The result is that dengue still has no approved antiviral, and that a challenge-model result — however encouraging — does not by itself produce a usable medicine.",
        ...REVIEW,
        phase: "Phase 2 (field study)",
        status: "Discontinued (2025)",
        intervention: "Mosnodenvir (JNJ-1802), oral, for dengue prevention",
        result: "Discontinued despite early protection in a human challenge model; no safety signal given.",
        links: [
          { label: "Johnson & Johnson — discontinuation announcement", url: "https://www.jnj.com/media-center/press-releases/johnson-johnson-to-discontinue-phase-2-field-study-evaluating-investigational-antiviral-for-the-prevention-of-dengue" },
        ],
        diseases: ["dengue"],
        drugs: ["mosnodenvir"],
        terms: ["tpp"],
      },
    ],
  },

  {
    kind: "technologies",
    records: [
      {
        id: "wolbachia-method",
        name: "Wolbachia mosquito method",
        tldr: "Releasing mosquitoes that carry a common bacterium so that they can no longer transmit dengue, chikungunya or Zika — and so that their offspring cannot either.",
        summary:
          "The World Mosquito Program's method infects Aedes aegypti with the wMel strain of Wolbachia, a bacterium that blocks dengue, chikungunya and Zika viruses from replicating well inside the mosquito. Because Wolbachia is passed from mother to eggs, the bacterium spreads through the wild mosquito population and persists without repeated releases — a replacement rather than a suppression strategy. The evidence base is strong: a cluster-randomised trial in Yogyakarta found 77% fewer dengue cases and 86% fewer hospitalisations, and city-scale deployments in Brazil and Colombia have reported reductions of 60–90%, sustained through the severe 2024 outbreak. By 2025 the programme reported 16.1 million people protected across fifteen countries, with an estimated 1.5 million cases prevented. It is not a vaccine and does not stop every case, but no other dengue intervention has produced reductions this large and durable at city scale.",
        ...REVIEW,
        category: "Vector control",
        maturity: "Proven at city scale; deploying",
        whatItDoes:
          "Establishes Wolbachia in the local Aedes aegypti population so the mosquitoes transmit dengue, chikungunya and Zika far less.",
        limitation:
          "Requires community acceptance and substantial upfront cost, depends on mosquito biology (deployment has failed in a few sites), and long-term durability is monitored rather than guaranteed.",
        links: [
          { label: "World Mosquito Program", url: "https://www.worldmosquitoprogram.org/" },
          { label: "AWED trial results (NEJM)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2030243" },
        ],
        diseases: ["dengue", "chikungunya"],
        vectors: ["aedes-aegypti"],
        trials: ["awed-wolbachia"],
        technologies: ["vector-surveillance", "sterile-insect-technique"],
        institutions: ["world-mosquito-program", "ifakara"],
        roadmaps: ["vector-control-roadmap"],
        stats: [
          { label: "Yogyakarta", value: "−77% dengue" },
          { label: "Niterói, Brazil", value: "−89% dengue" },
          { label: "People protected", value: "16.1 million", note: "across 15 countries" },
          { label: "Cases prevented", value: "≈ 1.5 million" },
        ],
      },
      {
        id: "case-containment",
        name: "Case containment",
        tldr: "Finding every guinea worm case before the worm can release larvae into water — the intervention that makes eradication possible without a drug.",
        summary:
          "Guinea worm has no drug and no vaccine, so eradication depends on breaking the chain one case at a time. Containment means detecting a case as soon as the worm begins to emerge, preventing the person from entering any water source, dressing the wound, and treating the drinking water. It sounds simple and is operationally demanding: it requires surveillance in every village, community members motivated to report cases (often through a cash reward), and a rapid response when a case is found. Containment is why the campaign can succeed with ten reported cases a year, and why a single missed case can seed a village's infections the following year.",
        ...REVIEW,
        category: "Surveillance and response",
        maturity: "Standard of care",
        whatItDoes:
          "Detects every case before the worm releases larvae, and prevents contaminated water contact.",
        limitation:
          "Depends on community reporting, rewards and rapid response; fails where insecurity or remoteness interrupts surveillance.",
        links: [
          { label: "Carter Center — Guinea worm eradication", url: "https://www.cartercenter.org/programs/guinea-worm/" },
        ],
        diseases: ["dracunculiasis"],
        technologies: ["mhealth-surveillance", "community-health-workers", "wash-interventions"],
        institutions: ["carter-center", "cdc"],
        terms: ["eot"],
      },
      {
        id: "early-warning-hotspots",
        name: "Buruli ulcer early-warning hotspots",
        tldr: "Possum-faeces and genomic surveillance that flags emerging Buruli ulcer hotspots when M. ulcerans DNA appears, up to about three years before human cases.",
        summary:
          "Buruli ulcer moves: incidence rises in some places and falls in others, and it appears in areas that were previously free of it. In Victoria, Australia, possums are a major wildlife reservoir and shed M. ulcerans in their faeces, so surveying possum excreta with bacterial genomics can locate where the bacterium is circulating before people are infected. A 2025 study in Geelong found that M. ulcerans-positive possum faeces preceded human cases by up to 39 months, and the same approach has been used to define new endemic areas in urban south-eastern Australia. The value is that prevention can be targeted before people are affected, rather than surveillance merely confirming an outbreak that has already happened.",
        ...REVIEW,
        category: "AI & computation",
        maturity: "Prototype, applied in Australia",
        whatItDoes:
          "Uses possum-excreta sampling and bacterial genomics to locate M. ulcerans circulation and predict where human cases will emerge.",
        limitation:
          "Development has been driven by the Australian ecology, where mosquitoes and possums are implicated; transferability to African transmission cycles is unproven.",
        links: [
          { label: "Doherty Institute — early warning for Buruli ulcer hotspots", url: "https://www.doherty.edu.au/articles/early-warning-tool-detect-buruli-ulcer-hotspots-before-human-cases-occur/" },
          { label: "Emerging Infectious Diseases — possum faeces as early warning (2025)", url: "https://doi.org/10.3201/eid3103.240657" },
          { label: "Appl Environ Microbiol — genomics-informed possum excreta surveys (2025)", url: "https://doi.org/10.1128/aem.01602-25" },
        ],
        diseases: ["buruli-ulcer"],
        technologies: ["vector-surveillance", "genomic-surveillance", "ai-vector-identification"],
        institutions: ["doherty-institute"],
        bottlenecks: ["surveillance-data-gap"],
        stats: [
          {
            label: "Lead time before human cases",
            value: "Up to 39 months",
            number: 39,
            unit: "months",
            note: "M. ulcerans DNA in possum faeces, Geelong, Victoria",
            source: { label: "Emerging Infectious Diseases — possum faeces as early warning (2025)", url: "https://doi.org/10.3201/eid3103.240657" },
          },
        ],
      },
    ],
  },

  {
    kind: "institutions",
    records: [
      {
        id: "carter-center",
        name: "The Carter Center",
        tldr: "The organisation that has led the Guinea worm eradication campaign since 1986, taking the disease from millions of cases to ten.",
        summary:
          "The Carter Center, founded by former U.S. President Jimmy Carter and Rosalynn Carter, has led the global Guinea worm eradication programme since 1986 in partnership with WHO, UNICEF, CDC and national ministries of health. The campaign has reduced human cases from an estimated 3.5 million a year to ten in 2025 — the lowest ever recorded — without a drug or a vaccine, using safe water, case containment and surveillance. It also works on river blindness, trachoma and lymphatic filariasis, and it is the model of what a sustained, single-minded eradication effort looks like over four decades.",
        ...REVIEW,
        institutionType: "Non-governmental organisation",
        country: "United States",
        city: "Atlanta",
        focus:
          "Guinea worm eradication, plus river blindness, trachoma and lymphatic filariasis elimination.",
        links: [
          { label: "The Carter Center — Guinea worm disease", url: "https://www.cartercenter.org/programs/guinea-worm/" },
        ],
        diseases: ["dracunculiasis", "onchocerciasis", "trachoma", "lymphatic-filariasis"],
        institutions: ["who", "cdc"],
        technologies: ["case-containment", "wash-interventions"],
        terms: ["elimination", "eot"],
        stats: [
          { label: "Leading the campaign since", value: "1986" },
          { label: "Human cases, 2025", value: "10", note: "lowest ever recorded" },
        ],
      },
      {
        id: "tb-alliance",
        name: "TB Alliance",
        tldr: "A non-profit tuberculosis drug developer whose pipeline is being mined for Buruli ulcer — including the telacebec trial.",
        summary:
          "TB Alliance is a not-for-profit product development partnership that develops new tuberculosis regimens. Its relevance to NTDs is indirect but important: because Buruli ulcer and leprosy are caused by mycobacteria, drugs developed for tuberculosis can be tested against them. TB Alliance is the collaborator on the Phase 2 TREAT-BU trial of telacebec for Buruli ulcer, sponsored by Barwon Health and begun in 2024, after the compound showed exceptional potency against Mycobacterium ulcerans and sterilised the infection in mice after sixteen doses. It is the clearest example of how investment in one disease can deliver candidates for others.",
        ...REVIEW,
        institutionType: "Product development partnership",
        country: "United States",
        city: "New York",
        focus: "Developing new tuberculosis regimens, with repurposing into Buruli ulcer and other mycobacterial disease.",
        links: [
          { label: "TB Alliance — telacebec for Buruli ulcer", url: "https://www.tballiance.org/news-new-clinical-trial-examines-use-novel-compound-telacebec-buruli-ulcer-patients/" },
        ],
        diseases: ["buruli-ulcer", "leprosy"],
        drugs: ["telacebec"],
        targets: ["qcrb", "dpre1"],
        trials: ["treat-bu"],
        terms: ["pdp", "drug-repurposing"],
        stats: [
          { label: "Field", value: "Tuberculosis drug development" },
          { label: "Contribution", value: "Telacebec (Q203)" },
        ],
      },
      {
        id: "doherty-institute",
        name: "Doherty Institute",
        tldr: "An Australian research institute at the centre of Buruli ulcer transmission research and the tool that predicts hotspots years ahead.",
        summary:
          "The Doherty Institute in Melbourne conducts the research that has reshaped understanding of Buruli ulcer in Australia, where the disease is emerging and spreading. Its work implicated mosquitoes and possums in transmission and produced an early-warning approach that flags emerging hotspots two to six years before human cases. Australia is unusual in having a well-resourced public health system dealing with an NTD, which makes it a natural laboratory: transmission routes that are impossible to disentangle in a rural African setting can be studied with genomic and entomological tools here, and the findings then tested against the African epidemiology.",
        ...REVIEW,
        institutionType: "Research institute",
        country: "Australia",
        city: "Melbourne",
        focus: "Buruli ulcer transmission, genomics and environmental surveillance.",
        links: [
          { label: "Doherty Institute — Buruli ulcer hotspot early warning", url: "https://www.doherty.edu.au/articles/early-warning-tool-detect-buruli-ulcer-hotspots-before-human-cases-occur/" },
          { label: "Emerging Infectious Diseases — possum faeces as early warning (2025)", url: "https://doi.org/10.3201/eid3103.240657" },
        ],
        diseases: ["buruli-ulcer"],
        technologies: ["early-warning-hotspots", "genomic-surveillance", "vector-surveillance"],
        institutions: ["who"],
      },
      {
        id: "barwon-health",
        name: "Barwon Health",
        tldr: "The Australian health service that sponsors the TREAT-BU trial of telacebec, in a region where Buruli ulcer is an emerging infection.",
        summary:
          "Barwon Health is the public health service for the Geelong region of Victoria, Australia — an area where Buruli ulcer has emerged and spread. It is the sponsor of TREAT-BU, the Phase 2 trial of telacebec in adults with Buruli ulcer, run with TB Alliance as collaborator at sites in Geelong and Melbourne. Its involvement reflects an unusual feature of Buruli ulcer in Australia: a well-resourced public health system in an endemic area, able to run the clinical trial that a disease with no commercial market would otherwise not attract.",
        ...REVIEW,
        institutionType: "Public health service",
        country: "Australia",
        city: "Geelong",
        focus: "Clinical care and research on Buruli ulcer in Victoria, including the TREAT-BU trial.",
        links: [
          { label: "TREAT-BU trial (ClinicalTrials.gov NCT06481163)", url: "https://clinicaltrials.gov/study/NCT06481163" },
        ],
        diseases: ["buruli-ulcer"],
        trials: ["treat-bu"],
        drugs: ["telacebec"],
        technologies: ["early-warning-hotspots"],
      },
      {
        id: "bu-labnet",
        name: "Buruli ulcer Laboratory Network for Africa (BU-LABNET)",
        tldr: "A WHO African Region network of laboratories that quality-assures PCR diagnosis of Buruli ulcer so cases are confirmed, not just suspected.",
        summary:
          "BU-LABNET is a network of Buruli ulcer PCR laboratories in the WHO African Region, established to strengthen and standardise laboratory confirmation of the disease. It comprises 11 laboratories across nine countries — Benin, Cameroon, Côte d'Ivoire, the Democratic Republic of the Congo, Gabon, Ghana, Liberia, Nigeria and Togo — and runs an external quality assessment programme alongside capacity-building and operational research. It matters because only a minority of reported cases are laboratory-confirmed: in 2022, 46.3% of reported cases were confirmed, against WHO's target of at least 70%. Better, standardised confirmation is what separates true Buruli ulcer from the many other skin conditions it resembles.",
        ...REVIEW,
        institutionType: "Laboratory network",
        focus: "Quality-assured PCR diagnosis and laboratory capacity for Buruli ulcer in the WHO African Region.",
        links: [
          { label: "WHO — Report of the fifth BU-LABNET annual meeting (2024)", url: "https://iris.who.int/handle/10665/378524" },
          { label: "WHO AFRO — Buruli ulcer in Africa: 20 years of progress (2025)", url: "https://iris.who.int/handle/10665/383376" },
        ],
        diseases: ["buruli-ulcer"],
        pathogens: ["mycobacterium-ulcerans"],
        institutions: ["who"],
        diagnostics: ["molecular-pcr", "mycolactone-detection"],
        bottlenecks: ["diagnostics-gap"],
      },
      {
        id: "paho",
        name: "Pan American Health Organization (PAHO)",
        tldr: "The regional health agency for the Americas, which runs the elimination initiative covering Chagas disease and dengue.",
        summary:
          "PAHO is the regional office of WHO for the Americas and the body that coordinates the region's disease-elimination agenda. Its Elimination Initiative targets a set of communicable diseases including Chagas disease, and it has published a monitoring framework and a set of costed 'best buys' for accelerating them. On Chagas disease it coordinates sub-regional control initiatives, supplies nifurtimox to countries free of charge, makes benznidazole available through its Strategic Fund, and co-implements the Unitaid-funded CUIDA Chagas project on congenital transmission. On dengue it issues the regional epidemiological alerts that national programmes respond to.",
        ...REVIEW,
        institutionType: "Regional health agency",
        country: "United States",
        city: "Washington, D.C.",
        focus:
          "Regional elimination of communicable diseases in the Americas, including Chagas disease, dengue and lymphatic filariasis.",
        links: [
          { label: "PAHO — Chagas disease", url: "https://www.paho.org/en/topics/chagas-disease" },
          { label: "PAHO — dengue alerts", url: "https://www.paho.org/en/topics/dengue" },
        ],
        diseases: ["chagas", "dengue", "chikungunya", "lymphatic-filariasis"],
        drugs: ["benznidazole", "nifurtimox"],
        institutions: ["who", "fiocruz", "unitaid"],
        terms: ["elimination", "eot", "congenital-chagas"],
        stats: [
          { label: "Chagas vector transmission interrupted", value: "17 countries" },
          { label: "Blood donors screened", value: "21 endemic countries" },
        ],
      },
      {
        id: "unitaid",
        name: "Unitaid",
        tldr: "A global health funder that accelerates access to new tests and treatments, including the CUIDA Chagas project on mother-to-child transmission.",
        summary:
          "Unitaid is an international organisation hosted by WHO that invests in introducing new health products and approaches in low- and middle-income countries, with a mandate to make them affordable and available quickly. In Chagas disease it funds CUIDA Chagas, implemented with PAHO in Bolivia, Brazil, Colombia and Paraguay, which is testing simpler ways to screen pregnant women and treat newborns in order to eliminate congenital transmission. Unitaid's role is characteristic: it does not discover products, it buys down the gap between a product existing and people receiving it.",
        ...REVIEW,
        institutionType: "Global health funder",
        country: "Switzerland",
        city: "Geneva",
        focus: "Accelerating access to diagnostics and treatments, including congenital Chagas disease elimination.",
        links: [
          { label: "Unitaid — CUIDA Chagas", url: "https://unitaid.org/project/new-treatments-and-diagnostics-to-prevent-chagas-transmission-from-mother-to-child/" },
        ],
        diseases: ["chagas"],
        institutions: ["paho", "who"],
        terms: ["congenital-chagas"],
        bottlenecks: ["access-and-pricing"],
      },
      {
        id: "cuida-chagas",
        name: "CUIDA Chagas",
        tldr: "A Unitaid-funded project testing simpler ways to stop Chagas passing from mother to newborn in four Latin American countries.",
        summary:
          "CUIDA Chagas — Communities United to Integrate and Deliver Chagas Care and Treatment — is a project implemented with PAHO in Bolivia, Brazil, Colombia and Paraguay and funded by Unitaid. It targets congenital transmission with a practical goal: find a shorter, simpler pathway than the current one, which requires two confirmatory serological tests and a sixty-day treatment course, and along which most patients are lost. The project is testing new diagnostic and treatment options and, crucially, implementation models that can be replicated by national programmes — because elimination of congenital Chagas is achievable with existing tools, and the obstacle is the health system.",
        ...REVIEW,
        institutionType: "Health programme partnership",
        country: "Argentina",
        city: "Buenos Aires",
        focus:
          "Elimination of congenital Chagas disease through simpler diagnosis and treatment, implemented with national programmes.",
        links: [
          { label: "Unitaid — new tests and treatments to prevent Chagas in newborns", url: "https://unitaid.org/project/new-treatments-and-diagnostics-to-prevent-chagas-transmission-from-mother-to-child/" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole", "nifurtimox"],
        institutions: ["paho", "unitaid", "fiocruz"],
        terms: ["congenital-chagas", "pdp"],
      },
      {
        id: "world-mosquito-program",
        name: "World Mosquito Program",
        tldr: "The organisation that releases Wolbachia-carrying mosquitoes and has protected over 16 million people across fifteen countries.",
        summary:
          "The World Mosquito Program, based at Monash University, developed and scales the Wolbachia method: infecting Aedes aegypti with a bacterium that blocks dengue, chikungunya and Zika transmission, and releasing them so the trait spreads through the wild population and persists. Its evidence runs from a gold-standard randomised trial in Yogyakarta to city-scale deployments in Brazil, Colombia, Indonesia and beyond. By its 2025 review it reported 16.1 million people protected across fifteen countries, around 1.5 million dengue cases prevented and US$455 million in avoided healthcare costs, with new deployments beginning in Peru and Timor-Leste.",
        ...REVIEW,
        institutionType: "Research and implementation programme",
        country: "Australia",
        city: "Melbourne",
        focus: "Scaling the Wolbachia method for dengue, chikungunya and Zika control worldwide.",
        links: [
          { label: "World Mosquito Program", url: "https://www.worldmosquitoprogram.org/" },
        ],
        diseases: ["dengue"],
        vectors: ["aedes-aegypti"],
        technologies: ["wolbachia-method", "vector-surveillance"],
        trials: ["awed-wolbachia"],
        stats: [
          { label: "People protected", value: "16.1 million" },
          { label: "Countries deploying", value: "15" },
          { label: "Cases prevented", value: "≈ 1.5 million" },
        ],
      },
      {
        id: "butantan-institute",
        name: "Butantan Institute",
        tldr: "The Brazilian institute that developed and won approval for the world's first single-dose dengue vaccine.",
        summary:
          "The Butantan Institute, linked to the São Paulo state health department, is one of Brazil's principal vaccine and antivenom manufacturers and a national research institution. It developed Butantan-DV, a live-attenuated tetravalent dengue vaccine that is the first in the world to require only a single dose, in partnership with Brazil's Ministry of Health and a manufacturing partner. Brazil's regulator approved it in November 2025 for people aged 12 to 59, with incorporation into the national immunisation programme planned for 2026 and more than a million doses prepared. Its significance is not only clinical: it shows an endemic country developing, testing, manufacturing and deploying a vaccine for its own largest vector-borne threat.",
        ...REVIEW,
        institutionType: "Public research institute and manufacturer",
        country: "Brazil",
        city: "São Paulo",
        focus: "Vaccine, antivenom and diagnostic development and manufacturing for diseases affecting Brazil.",
        links: [
          { label: "Butantan Institute — dengue vaccine approval", url: "https://butantan.gov.br/" },
        ],
        diseases: ["dengue", "snakebite"],
        drugs: ["snake-antivenom", "ixchiq"],
        trials: ["butantan-dv-dengue"],
        technologies: ["dengue-vaccination", "recombinant-antivenoms"],
        institutions: ["fiocruz", "paho", "who"],
        terms: [],
        bottlenecks: ["access-and-pricing"],
        stats: [
          { label: "Approved", value: "26 November 2025" },
          { label: "Ages", value: "12–59" },
          { label: "Dosing", value: "Single dose" },
        ],
      },
    ],
  },

  {
    kind: "terms",
    records: [
      {
        id: "congenital-chagas",
        name: "Congenital Chagas disease",
        tldr: "Transmission of Trypanosoma cruzi from an infected mother to her newborn, now a priority route for elimination because it can be interrupted with existing tools.",
        summary:
          "When a pregnant woman carries Trypanosoma cruzi, the parasite can cross the placenta and infect the baby. Most infected newborns are asymptomatic, which is why screening must be systematic rather than based on symptoms: a baby born to a mother who has never been tested will be missed. The reason this route now receives so much attention is that it is the one that can be closed with tools already available — screening pregnant women and treating infected newborns cures them almost completely. Congenital transmission is also the route that keeps Chagas disease present in cities and in non-endemic countries, where neither patients nor clinicians expect it. The practical obstacles are the need for two concordant serological tests to confirm infection and a sixty-day treatment course, along which many patients are lost; the CUIDA Chagas project is testing simpler alternatives.",
        ...REVIEW,
        category: "Transmission",
        aka: "mother-to-child Chagas, vertical transmission",
        links: [
          { label: "PAHO — Chagas disease", url: "https://www.paho.org/en/topics/chagas-disease" },
          { label: "Unitaid — CUIDA Chagas", url: "https://unitaid.org/project/new-treatments-and-diagnostics-to-prevent-chagas-transmission-from-mother-to-child/" },
        ],
        diseases: ["chagas"],
        drugs: ["benznidazole", "nifurtimox"],
        institutions: ["paho", "cuida-chagas"],
        related: ["chagas-serology", "elimination"],
        stats: [
          { label: "Curability", value: "High if treated as a newborn" },
          { label: "Obstacle", value: "Confirming infection, then a 60-day course" },
        ],
      },
      {
        id: "paratenic-host",
        name: "Paratenic host",
        tldr: "An animal in which a parasite survives without developing — like the fish and frogs that appear to carry guinea worm larvae in Chad.",
        summary:
          "A paratenic host is an organism in which a parasite is not transmitted between hosts and does not develop, but remains alive and capable of infecting a definitive host if that host is eaten. The concept matters for dracunculiasis because guinea worm infections in Chad have been linked to fish and frogs that carry the larvae; a person or a dog that eats them can become infected. That breaks the old assumption that transmission runs only through drinking water containing infected copepods, and it means the eradication campaign's water-based interventions may not be sufficient on their own. Understanding whether this route sustains transmission — and how to interrupt it — is the central scientific question standing between the programme and eradication.",
        ...REVIEW,
        category: "Transmission",
        links: [
          { label: "CDC — progress toward dracunculiasis eradication", url: "https://www.cdc.gov/mmwr/volumes/74/wr/mm7442a2.htm" },
        ],
        diseases: ["dracunculiasis"],
        institutions: ["cdc", "carter-center"],
        related: ["zoonosis", "one-health", "eot"],
      },
    ],
  },

  /* ============ review: echinococcosis, foodborne trematodiases, ============ */
  /* ============ HAT, leishmaniasis, leprosy ============ */

  {
    kind: "targets",
    records: [
      {
        id: "atp-synthase",
        name: "Mycobacterial ATP synthase (AtpE)",
        tldr: "The enzyme bedaquiline blocks to cut off the energy supply of mycobacteria, including the leprosy bacillus.",
        summary:
          "ATP synthase is the enzyme mycobacteria use to generate their energy, and bedaquiline binds its c-subunit (AtpE) to shut it down. Because the target is essential and the drug has a very long half-life — around five and a half months — bedaquiline is attractive for leprosy, where treatment is long and adherence is the weak point. It was developed for drug-resistant tuberculosis and is now in a Phase 3 trial for multibacillary leprosy, an example of tuberculosis investment flowing into a neglected mycobacterial disease.",
        ...REVIEW,
        targetType: "Enzyme (ATP synthase c-subunit)",
        organism: "Mycobacterium leprae, M. tuberculosis",
        rationale: "Essential for mycobacterial energy generation and validated clinically in multidrug-resistant tuberculosis.",
        druggability: "Fully druggable and licensed for tuberculosis; long half-life suits a long-course disease.",
        knownLigands: "Bedaquiline and related diarylquinolines.",
        links: [
          { label: "Leprosy research updates — new therapies", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12010777/" },
        ],
        pathogens: ["mycobacterium-leprae"],
        diseases: ["leprosy"],
        drugs: ["bedaquiline"],
        technologies: ["drug-repurposing"],
        stats: [
          { label: "Half-life", value: "≈ 5.5 months", note: "far longer than rifampicin" },
        ],
      },
    ],
  },

  {
    kind: "drugs",
    records: [
      {
        id: "nitazoxanide",
        name: "Nitazoxanide (as a fascioliasis alternative)",
        tldr: "The only plausible alternative to triclabendazole for fascioliasis, and a poor one — cure rates around 30% in the patients who need it most.",
        summary:
          "Nitazoxanide is a broad-spectrum antiparasitic used for intestinal infections, and it has been tested as a fallback for fascioliasis when triclabendazole fails. The evidence is discouraging: in an Egyptian series of patients who had already failed two doses of triclabendazole, nitazoxanide cured about 30%; in a Peruvian case series it was ineffective. It is included here because it defines the problem rather than solving it — triclabendazole is the only recommended medicine for human fascioliasis, resistance is emerging, and there is no established alternative behind it.",
        ...REVIEW,
        drugClass: "Thiazolide",
        mechanism: "Inhibits parasite pyruvate:ferredoxin oxidoreductase and other anaerobic metabolism enzymes.",
        indication: "Fascioliasis (as a fallback); intestinal protozoal and helminth infections.",
        administration: "Oral.",
        status: "Poor efficacy for fascioliasis; not a reliable alternative",
        links: [
          { label: "Triclabendazole treatment failure for Fasciola hepatica (EID)", url: "https://wwwnc.cdc.gov/eid/article/27/7/20-3900_article" },
        ],
        diseases: ["foodborne-trematodiases"],
        pathogens: ["foodborne-trematodes"],
        drugs: ["triclabendazole"],
        stats: [
          { label: "Cure rate after triclabendazole failure", value: "≈ 30%", note: "one Egyptian series" },
        ],
      },
      {
        id: "lxe408",
        name: "LXE408",
        tldr: "A novel oral drug for visceral leishmaniasis, developed with Novartis, that could remove injections from treatment entirely.",
        summary:
          "LXE408 is a first-in-class oral compound developed by DNDi with Novartis as a potential new treatment for visceral leishmaniasis. It completed two Phase II proof-of-concept studies in India and Ethiopia in 2025 with promising efficacy and safety, and it represents the field's best hope of moving away from injected regimens — including the toxic antimonials that WHO's 2026 guideline update began to retire. It belongs to a class new to leishmaniasis, which also makes it useful if resistance to current drugs emerges.",
        ...REVIEW,
        drugClass: "First-in-class oral kinetoplastid inhibitor",
        mechanism: "A novel oral mechanism against Leishmania, distinct from the existing drug classes.",
        indication: "Visceral leishmaniasis (in development).",
        administration: "Oral.",
        status: "Phase 2 completed 2025; late-stage development planned",
        links: [
          { label: "DNDi — LXE408 with Novartis for visceral leishmaniasis", url: "https://dndi.org/research-development/portfolio/lxe408-novartis-visceral-leishmaniasis/" },
        ],
        diseases: ["leishmaniasis"],
        pathogens: ["leishmania"],
        institutions: ["dndi"],
        technologies: ["open-science-drug-discovery", "ai-drug-discovery"],
        terms: ["pdp"],
        stats: [
          { label: "Studies", value: "Two Phase 2, India and Ethiopia (2025)" },
          { label: "Route", value: "Oral" },
        ],
      },
      {
        id: "bedaquiline",
        name: "Bedaquiline (for leprosy)",
        tldr: "A tuberculosis drug with a very long half-life and strong activity against the leprosy bacillus, in a Phase 3 trial as a shorter treatment.",
        summary:
          "Bedaquiline was developed for drug-resistant tuberculosis and blocks mycobacterial ATP synthase. Its half-life of about five and a half months and its greater activity against Mycobacterium leprae than rifampicin make it attractive for leprosy, where the treatment course is long and people stop taking it. A Phase 2 trial in Brazil found that bedaquiline monotherapy cleared M. leprae in multibacillary patients, and a Phase 3 active-controlled trial of bedaquiline with rifampicin and clofazimine is under way. It is also being tested as post-exposure prophylaxis, which would make it the first new preventive agent for leprosy since single-dose rifampicin.",
        ...REVIEW,
        drugClass: "Diarylquinoline",
        mechanism: "Inhibits the c-subunit of mycobacterial ATP synthase, cutting off energy generation.",
        indication: "Multibacillary leprosy (in trials); multidrug-resistant tuberculosis (approved).",
        administration: "Oral.",
        status: "Phase 3 for leprosy; licensed for tuberculosis",
        resistance: "Resistance mutations in atpE are known from tuberculosis and are monitored.",
        links: [
          { label: "Leprosy research updates — bedaquiline", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12010777/" },
        ],
        diseases: ["leprosy"],
        pathogens: ["mycobacterium-leprae"],
        targets: ["atp-synthase"],
        trials: ["be-people-leprosy"],
        technologies: ["drug-repurposing"],
        terms: ["sdr-pep"],
        stats: [
          { label: "Half-life", value: "≈ 5.5 months" },
          { label: "Stage in leprosy", value: "Phase 3" },
        ],
      },
    ],
  },

  {
    kind: "technologies",
    records: [
      {
        id: "eg95-sheep-vaccine",
        name: "EG95 sheep vaccine for echinococcosis",
        tldr: "A vaccine that protects sheep against the tapeworm cysts that infect dogs, breaking the transmission cycle at its source.",
        summary:
          "EG95 is a recombinant vaccine against Echinococcus granulosus in sheep, with 96–100% protection in trials. Its importance is that it interrupts transmission on the animal side of the cycle: if lambs do not develop cysts, dogs that eat sheep organs do not become infected, and the eggs that cause human disease are never shed. The vaccine is registered and commercially produced in China and Argentina and used extensively in China, and WHO's assessment is that combining lamb vaccination with deworming dogs at least four times a year and culling older sheep could eliminate human cystic echinococcosis in under ten years. It is the clearest case in the NTD field of a purely veterinary intervention solving a human disease.",
        ...REVIEW,
        category: "Veterinary vaccine",
        maturity: "Registered and in use (China, Argentina)",
        whatItDoes:
          "Protects sheep against Echinococcus granulosus cysts, removing the step that infects dogs and produces the eggs that infect people.",
        limitation:
          "Requires sustained delivery to pastoral flocks, and does not act on the fox–rodent cycle that causes alveolar echinococcosis.",
        links: [
          { label: "WHO — echinococcosis prevention and control", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        technologies: ["one-health-ntd-integration"],
        institutions: ["who", "woah"],
        terms: ["zoonosis", "one-health"],
        stats: [
          { label: "Efficacy in sheep", value: "96–100%" },
          { label: "Registered in", value: "China and Argentina" },
          { label: "Elimination horizon (with dog deworming)", value: "< 10 years" },
        ],
      },
      {
        id: "pair",
        name: "PAIR (puncture, aspiration, injection, reaspiration)",
        tldr: "A minimally invasive technique that collapses a hydatid cyst through a needle instead of open surgery.",
        summary:
          "PAIR is a procedure for treating echinococcal liver cysts without open surgery: the cyst is punctured under ultrasound guidance, its fluid aspirated, a scolicidal solution injected to kill the contents, and the fluid reaspirated. It is used alongside albendazole, which is given before and after to reduce the risk of the procedure spreading infection, and it shortens hospital stays and recovery compared with surgery. It is not suitable for every cyst — the WHO classification determines whether a cyst is better observed, drained this way, or operated on — which is why standardised imaging and staging matter so much.",
        ...REVIEW,
        category: "Interventional procedure",
        maturity: "Established where interventional radiology is available",
        whatItDoes: "Collapses an echinococcal cyst through a needle, avoiding open surgery.",
        limitation:
          "Needs trained interventional radiology, and is unsuitable for some cyst types; must be combined with albendazole.",
        links: [
          { label: "WHO — echinococcosis", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
        ],
        diseases: ["echinococcosis"],
        drugs: ["albendazole"],
        institutions: ["who"],
        stats: [
          { label: "Alternative to", value: "Open cyst surgery" },
          { label: "Guidance", value: "Ultrasound" },
        ],
      },
      {
        id: "tiny-targets",
        name: "Tiny targets for tsetse control",
        tldr: "Low-cost insecticide-treated cloth targets that kill tsetse flies and cost a fraction of traps, letting programmes cover far more ground.",
        summary:
          "Tiny targets are small, insecticide-treated cloth panels that attract and kill tsetse flies. Their significance is cost and coverage: because they are cheap and simple, programmes can deploy them densely across the riverine and lakeside habitats where tsetse concentrate, suppressing a local fly population enough to interrupt transmission of human African trypanosomiasis without treating everyone at risk. They are typically deployed alongside case-finding, and they make vector control feasible in the remote, sparsely served areas where sleeping sickness persists.",
        ...REVIEW,
        category: "Vector control",
        maturity: "Operational",
        whatItDoes:
          "Kills tsetse flies with inexpensive insecticide-treated targets deployed in their restricted habitats.",
        limitation:
          "Requires sustained deployment and community participation; less effective against sylvatic transmission.",
        links: [
          { label: "WHO — human African trypanosomiasis", url: "https://www.who.int/health-topics/human-african-trypanosomiasis" },
        ],
        diseases: ["hat"],
        vectors: ["tsetse-fly"],
        technologies: ["vector-surveillance", "sterile-insect-technique"],
        institutions: ["who"],
        terms: ["vector-borne"],
      },
    ],
  },

  {
    kind: "trials",
    records: [
      {
        id: "people-leprosy-pep",
        name: "PEOPLE: double-dose rifampicin prophylaxis",
        tldr: "A trial in the Comoros and Madagascar showing that double-dose rifampicin prophylaxis cut leprosy incidence by 40% at population level.",
        summary:
          "The PEOPLE trial tested whether giving a second dose of rifampicin as post-exposure prophylaxis, at population scale, could reduce leprosy incidence rather than only protecting individual contacts. Run in the Comoros and Madagascar, it reported a 40% reduction in leprosy incidence — evidence that chemoprophylaxis can shift transmission in a community, not just lower one person's risk. It is the strongest support so far for scaling prophylaxis beyond household contacts to neighbourhoods and social contacts, as WHO now recommends.",
        ...REVIEW,
        phase: "Cluster-randomised trial",
        registry: "ClinicalTrials.gov NCT03662022",
        status: "Reported positive",
        intervention: "Double-dose rifampicin post-exposure prophylaxis",
        result: "40% reduction in leprosy incidence in the Comoros and Madagascar.",
        links: [
          { label: "Leprosy research updates — PEOPLE trial", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12010777/" },
        ],
        diseases: ["leprosy"],
        drugs: ["rifampicin"],
        institutions: ["who"],
        terms: ["sdr-pep", "eot"],
      },
      {
        id: "be-people-leprosy",
        name: "BE-PEOPLE: bedaquiline as leprosy prophylaxis",
        tldr: "A trial testing whether bedaquiline, with its very long half-life, protects contacts of leprosy patients better than a single dose of rifampicin.",
        summary:
          "BE-PEOPLE tests bedaquiline as post-exposure prophylaxis for leprosy contacts. The rationale is pharmacological: bedaquiline has a half-life of around five and a half months and greater activity against Mycobacterium leprae than rifampicin, so a single dose might protect for far longer. If it works, it would be the first genuinely new preventive agent for leprosy since single-dose rifampicin, and could be particularly valuable in high-burden settings where repeated contact screening is impractical.",
        ...REVIEW,
        phase: "Clinical trial",
        registry: "ClinicalTrials.gov NCT05406479 (Phase 2); NCT05597280 (Phase 3)",
        status: "Active",
        intervention: "Bedaquiline post-exposure prophylaxis",
        result: "Ongoing; testing whether a long-acting drug protects contacts more durably than rifampicin.",
        links: [
          { label: "Leprosy research updates — bedaquiline prophylaxis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12010777/" },
        ],
        diseases: ["leprosy"],
        drugs: ["bedaquiline"],
        targets: ["atp-synthase"],
        terms: ["sdr-pep"],
      },
    ],
  },

  {
    kind: "institutions",
    records: [
      {
        id: "woah",
        name: "World Organisation for Animal Health (WOAH)",
        tldr: "The intergovernmental body for animal health, which is central to controlling the NTDs that live in animals.",
        summary:
          "WOAH — founded as the OIE and renamed in 2022 — sets international standards for animal health and works with WHO and FAO under the One Health banner. It matters for echinococcosis, rabies, taeniasis/cysticercosis and the foodborne trematodiases, all of which cycle through animals and cannot be controlled by human medicine alone. Its standards on dog vaccination, livestock slaughter hygiene and veterinary drug use are what make a One Health programme operational rather than aspirational — and its role in veterinary anthelmintic stewardship is directly relevant to the triclabendazole resistance problem.",
        ...REVIEW,
        institutionType: "Intergovernmental organisation",
        country: "France",
        city: "Paris",
        focus:
          "International animal health standards, zoonosis control and One Health coordination.",
        links: [
          { label: "World Organisation for Animal Health", url: "https://www.woah.org/" },
        ],
        diseases: ["echinococcosis", "rabies", "taeniasis-cysticercosis", "foodborne-trematodiases"],
        institutions: ["who"],
        terms: ["one-health", "zoonosis"],
      },
      {
        id: "cascap",
        name: "CASCAP (Cholangiocarcinoma Screening and Care Program)",
        tldr: "A Thai programme that pairs liver-fluke control with ultrasound screening for the bile-duct cancer the flukes cause.",
        summary:
          "CASCAP, based at Khon Kaen University in northeast Thailand, is a screening and care programme for cholangiocarcinoma, the bile-duct cancer associated with Opisthorchis and Clonorchis infection. It links parasite control with systematic ultrasound screening and follow-up, on the reasoning that a cancer caused by a treatable infection should be detectable before it becomes symptomatic. It is one of the few places where a neglected parasitic disease is managed explicitly as a cancer-prevention problem, and it provides a model for combining NTD control with oncology in the same programme.",
        ...REVIEW,
        institutionType: "Screening and research programme",
        country: "Thailand",
        city: "Khon Kaen",
        focus: "Cholangiocarcinoma screening, early detection and liver-fluke-related cancer prevention.",
        links: [
          { label: "Cholangiocarcinoma Screening and Care Program", url: "https://cascap.kku.ac.th/" },
        ],
        diseases: ["foodborne-trematodiases"],
        drugs: ["praziquantel"],
        technologies: ["ai-microscopy"],
        terms: ["cholangiocarcinoma"],
      },
      {
        id: "gpzl",
        name: "Global Partnership for Zero Leprosy (GPZL)",
        tldr: "A coalition coordinating the push to interrupt leprosy transmission, including the scale-up of post-exposure prophylaxis.",
        summary:
          "The Global Partnership for Zero Leprosy brings together national programmes, WHO, non-governmental organisations, researchers and people affected by leprosy to coordinate the goal of interrupting transmission. Its work is largely operational: supporting countries to introduce contact screening and single-dose rifampicin prophylaxis, harmonising how programmes measure transmission, advocating for the funding and surveillance that elimination requires, and keeping stigma and disability on the agenda rather than treating them as secondary. It is hosted by the Task Force for Global Health.",
        ...REVIEW,
        institutionType: "Partnership",
        country: "United States",
        city: "Decatur, Georgia",
        focus:
          "Coordinating leprosy elimination, scaling post-exposure prophylaxis and supporting national programmes.",
        links: [
          { label: "Global Partnership for Zero Leprosy", url: "https://zeroleprosy.org/" },
        ],
        diseases: ["leprosy"],
        drugs: ["rifampicin"],
        institutions: ["who", "ntd-support-center"],
        terms: ["sdr-pep", "eot", "stigma-and-disability"],
      },
    ],
  },

  {
    kind: "terms",
    records: [
      {
        id: "alveolar-echinococcosis",
        name: "Alveolar echinococcosis",
        tldr: "The form of echinococcosis that behaves like a slow cancer of the liver, caused by a fox-and-rodent tapeworm and needing lifelong treatment.",
        summary:
          "Alveolar echinococcosis is caused by Echinococcus multilocularis and is a different disease from cystic echinococcosis in both behaviour and control. It forms a spongy, invasive mass in the liver that metastasises like a tumour and is fatal if untreated; treatment usually means long-term or lifelong albendazole, with surgery where possible. Its cycle runs through foxes and small rodents rather than dogs and livestock, so the veterinary interventions that work against cystic disease do not apply. Cases are rare but rising in central Europe, Russia, China, Japan and North America as fox populations grow, and diagnosis is often late because a liver mass is assumed to be cancer.",
        ...REVIEW,
        category: "Clinical",
        aka: "AE, alveolar hydatid disease",
        links: [
          { label: "WHO — echinococcosis", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
        ],
        diseases: ["echinococcosis"],
        pathogens: ["echinococcus"],
        drugs: ["albendazole"],
        institutions: ["who", "woah"],
        related: ["one-health", "zoonosis"],
      },
      {
        id: "cholangiocarcinoma",
        name: "Cholangiocarcinoma",
        tldr: "Cancer of the bile ducts, caused in part by chronic liver-fluke infection and with a very poor prognosis.",
        summary:
          "Cholangiocarcinoma is a cancer of the bile ducts, and chronic infection with the liver flukes Clonorchis sinensis and Opisthorchis viverrini is one of its leading causes — which is why both parasites are classified as Group 1 carcinogens. Years of inflammation in the bile ducts produce fibrosis and malignant change, and by the time symptoms such as jaundice appear the cancer is usually advanced. It is most common in parts of East and Southeast Asia where raw freshwater fish is eaten. Prevention is parasitic rather than oncological: treat the infection, stop the reinfection, and screen for early bile-duct changes — the approach taken by Thailand's CASCAP programme.",
        ...REVIEW,
        category: "Clinical",
        aka: "bile-duct cancer",
        links: [
          { label: "WHO — foodborne trematode infections", url: "https://www.who.int/news-room/fact-sheets/detail/foodborne-trematode-infections" },
        ],
        diseases: ["foodborne-trematodiases"],
        institutions: ["cascap", "who"],
        related: ["one-health"],
      },
      {
        id: "pkdl",
        name: "Post-kala-azar dermal leishmaniasis (PKDL)",
        tldr: "A skin condition that follows treated visceral leishmaniasis and can act as a reservoir that restarts transmission.",
        summary:
          "PKDL appears after visceral leishmaniasis has been treated, most commonly in South Asia and eastern Africa, as patches, papules or nodules on the skin. It is not dangerous to the patient in itself, but the lesions contain parasites that sandflies can pick up, which makes PKDL a reservoir capable of reigniting transmission after a programme has driven cases down. That is why it matters so much to elimination: a country cannot stop transmission while people with untreated PKDL live among sandflies. Treatment has historically been long and difficult, which is why WHO's 2026 guideline update recommending shorter, safer regimens in both regions is significant.",
        ...REVIEW,
        category: "Clinical",
        aka: "PKDL, post-kala-azar dermal leishmaniasis",
        links: [
          { label: "WHO — leishmaniasis treatment guidelines", url: "https://www.who.int/publications/i/item/9789240123298" },
        ],
        diseases: ["leishmaniasis"],
        drugs: ["liposomal-amphotericin-b", "miltefosine"],
        institutions: ["who", "dndi"],
        related: ["rk39-rapid-test", "elimination"],
      },
      {
        id: "sdr-pep",
        name: "Single-dose rifampicin post-exposure prophylaxis (SDR-PEP)",
        tldr: "One dose of rifampicin given to contacts of a leprosy patient, which cuts their risk of developing the disease by around 60%.",
        summary:
          "SDR-PEP is the practice of giving a single dose of rifampicin to people who have been in close contact with a leprosy patient. It reduces the risk of developing leprosy by roughly 57–60%, is cheap, and does not require knowing which contacts are infected — which is what makes it usable in a clinic without sophisticated diagnostics. WHO recommends contact screening with SDR-PEP, and research is extending the idea: the PEOPLE trial found that double-dose rifampicin reduced incidence by 40% at population level, and bedaquiline is being tested as a longer-acting alternative. Because most people exposed to leprosy never develop it, prophylaxis has to be safe and simple to justify giving widely, and rifampicin is both.",
        ...REVIEW,
        category: "Prevention",
        aka: "SDR-PEP, leprosy chemoprophylaxis",
        links: [
          { label: "WHO — leprosy prevention", url: "https://www.who.int/news-room/fact-sheets/detail/leprosy" },
        ],
        diseases: ["leprosy"],
        drugs: ["rifampicin", "bedaquiline"],
        trials: ["people-leprosy-pep", "be-people-leprosy"],
        institutions: ["who", "gpzl"],
        related: ["elimination", "eot"],
        stats: [
          { label: "Risk reduction", value: "≈ 57–60%" },
          { label: "Dosing", value: "Single dose of rifampicin" },
        ],
      },
    ],
  },

  /* ======== review: mycetoma, noma, scabies, snakebite, STH ======== */

  {
    kind: "drugs",
    records: [
      {
        id: "fosravuconazole",
        name: "Fosravuconazole",
        tldr: "The first drug tested against fungal mycetoma in a randomised trial — safe and once-weekly, but it did not beat itraconazole.",
        summary:
          "Fosravuconazole is a triazole antifungal designed for onychomycosis and repurposed for eumycetoma. In the first randomised, double-blind clinical trial for the disease, run at a single centre in Sudan by the Mycetoma Research Centre with DNDi and Eisai, it was compared at two once-weekly doses against daily itraconazole, with surgery at six months. Neither dose was superior to itraconazole, and both had numerically lower efficacy — but fosravuconazole showed no new safety concerns and its once-weekly dosing is far easier for patients who travel long distances to a clinic. That combination of a negative efficacy result and a real practical advantage is the honest outcome of the trial.",
        ...REVIEW,
        drugClass: "Triazole antifungal",
        mechanism: "Inhibits fungal sterol 14α-demethylase (CYP51), disrupting the fungal cell membrane.",
        indication: "Eumycetoma (investigational); onychomycosis elsewhere.",
        administration: "Oral, once weekly.",
        status: "Phase 2 completed; not superior to itraconazole",
        links: [
          { label: "First randomised mycetoma trial results (The Lancet Infectious Diseases)", url: "https://pubmed.ncbi.nlm.nih.gov/39098321/" },
          { label: "A balancing act: the pioneering mycetoma trial in Sudan (PLOS NTD)", url: "https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0013000" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        targets: ["cyp51"],
        trials: ["fosravuconazole-mycetoma"],
        institutions: ["dndi", "mrc-khartoum"],
        technologies: ["drug-repurposing"],
        stats: [
          { label: "Dosing", value: "Once weekly" },
          { label: "Result", value: "Not superior to itraconazole" },
        ],
      },
      {
        id: "olorofim",
        name: "Olorofim",
        tldr: "A new antifungal from the tuberculosis-style pipeline that has excellent activity against the main mycetoma fungus in the laboratory.",
        summary:
          "Olorofim is an orotomide antifungal that inhibits dihydroorotate dehydrogenase and is in development for multidrug-resistant mould infections. It has shown excellent in vitro activity against Madurella mycetomatis, the main cause of eumycetoma, which makes it one of the most promising compounds for a disease with no reliably effective drug. It is not being developed for mycetoma — the market cannot support it — so the field's route is to follow the antifungal pipeline and find funding to test such compounds where the disease occurs.",
        ...REVIEW,
        drugClass: "Orotomide antifungal",
        mechanism: "Inhibits dihydroorotate dehydrogenase, blocking pyrimidine synthesis in fungi.",
        indication: "Invasive mould infections (in development); laboratory activity against M. mycetomatis.",
        administration: "Oral.",
        status: "In clinical development for other mould infections; not yet trialled in mycetoma",
        links: [
          { label: "The antifungal pipeline — fosmanogepix, ibrexafungerp, olorofim", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8501344/" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        technologies: ["drug-repurposing"],
        roadmaps: ["ntd-drug-discovery-roadmap"],
        stats: [
          { label: "Activity vs Madurella", value: "Excellent in vitro" },
          { label: "Tested in mycetoma?", value: "No" },
        ],
      },
    ],
  },

  {
    kind: "diagnostics",
    records: [
      {
        id: "mycetoma-ultrasound",
        name: "Ultrasound for mycetoma",
        tldr: "A bedside scan whose 'dot-in-circle' sign identifies mycetoma and helps distinguish the fungal form from the bacterial one.",
        summary:
          "Ultrasound has become a key diagnostic for mycetoma because the grains the organism forms in tissue produce a characteristic 'dot-in-circle' appearance. It is cheap, needs no laboratory, can be done in a district hospital, and helps determine how far the disease has spread through soft tissue and bone — which shapes whether surgery is feasible. Identifying whether the infection is fungal or bacterial still needs the grains themselves, examined by microscopy, culture or molecular methods, but ultrasound is what makes an early working diagnosis possible where a reference laboratory is not.",
        ...REVIEW,
        method: "Point-of-care ultrasound; characteristic 'dot-in-circle' sign",
        sampleType: "Not a sample — imaging of the lesion",
        turnaround: "Immediate",
        performance:
          "Highly suggestive of mycetoma and useful for staging; does not by itself distinguish fungal from bacterial disease.",
        availability: "Increasingly used in endemic settings with ultrasound access",
        links: [
          { label: "WHO — mycetoma", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
        ],
        diseases: ["mycetoma"],
        pathogens: ["mycetoma-agents"],
        technologies: ["ai-microscopy"],
        bottlenecks: ["diagnostics-gap"],
      },
      {
        id: "mini-flotac",
        name: "Mini-FLOTAC",
        tldr: "A stool concentration technique more sensitive than the standard smear for counting worm eggs, and easier to standardise.",
        summary:
          "Mini-FLOTAC is a flotation-based method for counting helminth eggs in stool. It detects more low-intensity infections than the standard Kato-Katz smear and uses a closed, standardised apparatus that reduces operator variability and exposure to faecal material. As soil-transmitted helminth programmes move from controlling disease to eliminating it as a public health problem, they need diagnostics sensitive enough to certify that moderate and heavy infections have fallen below the target threshold, and Mini-FLOTAC is one of the practical options — alongside molecular methods, which are more sensitive still but cost more.",
        ...REVIEW,
        method: "Flotation and counting with a standardised apparatus",
        sampleType: "Stool",
        turnaround: "Same day",
        performance:
          "More sensitive than Kato-Katz for low-intensity infection; better standardised and safer to handle.",
        availability: "Used in research and an increasing number of programmes",
        links: [
          { label: "WHO — soil-transmitted helminth infections", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        diagnostics: ["kato-katz"],
        technologies: ["mass-drug-administration"],
        terms: ["sensitivity-specificity"],
      },
    ],
  },

  {
    kind: "technologies",
    records: [
      {
        id: "scabies-mda",
        name: "Ivermectin mass drug administration for scabies",
        tldr: "Treating a whole community at once with oral ivermectin, which is the only approach that stops scabies coming straight back.",
        summary:
          "Scabies recurs relentlessly if only the patient is treated, because the mite is reintroduced by everyone around them. Mass drug administration — treating an entire community with oral ivermectin, with topical permethrin for those who cannot take it — reduces both scabies and impetigo prevalence, and has been delivered at scale in Pacific island countries and Ethiopia. A cluster-randomised trial suggested that a single round may be as effective as two, which matters for cost and logistics, and WHO's 2024 consultation on combining NTD mass-treatment regimens raised the prospect of giving scabies treatment alongside lymphatic filariasis or trachoma campaigns using the same delivery machinery.",
        ...REVIEW,
        category: "Preventive chemotherapy",
        maturity: "Proven; being scaled",
        whatItDoes:
          "Treats an entire community simultaneously to reduce scabies and the impetigo that follows it.",
        limitation:
          "Ivermectin cannot be used in pregnancy or children under 15 kg; coverage must be high, and repeated rounds may be needed if transmission is re-established.",
        links: [
          { label: "WHO — scabies", url: "https://www.who.int/news-room/fact-sheets/detail/scabies" },
        ],
        diseases: ["scabies"],
        drugs: ["ivermectin", "permethrin"],
        trials: ["scabies-mda-one-vs-two"],
        technologies: ["mass-drug-administration"],
        institutions: ["who"],
        terms: ["mda", "preventive-chemotherapy"],
        stats: [
          { label: "Effect", value: "Reduces scabies and impetigo" },
          { label: "Rounds needed", value: "One may suffice", note: "per a 2023 non-inferiority trial" },
        ],
      },
    ],
  },

  {
    kind: "trials",
    records: [
      {
        id: "fosravuconazole-mycetoma",
        name: "Fosravuconazole versus itraconazole for eumycetoma",
        tldr: "The world's first randomised clinical trial for mycetoma, run in Sudan, which found fosravuconazole safe and simpler but not more effective.",
        summary:
          "This Phase 2, randomised, double-blind, active-controlled trial at a single centre in Sudan compared two once-weekly doses of fosravuconazole with daily itraconazole, each combined with surgery at six months, in patients with moderate eumycetoma. Neither fosravuconazole dose was superior to itraconazole, and both had numerically lower efficacy. The trial nevertheless established that a rigorous randomised study is possible in one of the world's hardest settings, that once-weekly dosing is safe and tolerable, and it built the infrastructure and the international collaboration on which the next mycetoma trial will depend.",
        ...REVIEW,
        phase: "Phase 2",
        registry: "ClinicalTrials.gov NCT03086226",
        status: "Reported — fosravuconazole not superior",
        intervention: "Fosravuconazole 200 mg or 300 mg weekly versus itraconazole 400 mg daily, plus surgery",
        sponsor: "Mycetoma Research Centre, DNDi and Eisai",
        result:
          "Neither fosravuconazole dose was superior to itraconazole; no new safety concerns and the convenience of weekly dosing.",
        links: [
          { label: "Trial results (The Lancet Infectious Diseases)", url: "https://pubmed.ncbi.nlm.nih.gov/39098321/" },
        ],
        diseases: ["mycetoma"],
        drugs: ["fosravuconazole"],
        institutions: ["mrc-khartoum", "dndi"],
        terms: ["tpp"],
      },
      {
        id: "scabies-mda-one-vs-two",
        name: "One versus two doses of ivermectin-based mass treatment for scabies",
        tldr: "A cluster-randomised trial finding that a single round of community ivermectin treatment may be as effective as two.",
        summary:
          "This cluster-randomised non-inferiority trial compared one round of ivermectin-based mass drug administration with two for the control of scabies. If one round is sufficient, programmes can reach far more communities for the same money, because the second round is a large share of the cost and the logistical burden. The result supports the case for single-round campaigns as a first response in high-prevalence settings, with surveillance to detect whether scabies returns and a second round needed.",
        ...REVIEW,
        phase: "Cluster-randomised non-inferiority trial",
        status: "Reported",
        intervention: "One versus two rounds of ivermectin-based mass drug administration",
        result: "One round may be as effective as two, with implications for cost and coverage.",
        links: [
          { label: "One versus two doses of ivermectin-based MDA (PLOS NTD)", url: "https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0011207" },
        ],
        diseases: ["scabies"],
        drugs: ["ivermectin"],
        technologies: ["scabies-mda"],
        institutions: ["who"],
        terms: ["mda"],
      },
    ],
  },

  {
    kind: "institutions",
    records: [
      {
        id: "mrc-khartoum",
        name: "Mycetoma Research Centre (University of Khartoum)",
        tldr: "The world's leading centre for mycetoma, whose work was disrupted when war broke out in Sudan in 2023.",
        summary:
          "The Mycetoma Research Centre at the University of Khartoum has been the global hub for mycetoma for decades — diagnosing and treating patients, training clinicians from other endemic countries, running the world's largest case series, and hosting the first randomised clinical trial for a eumycetoma drug with DNDi and Eisai. When war broke out in Sudan in 2023, its clinics, follow-up and research were paralysed and staff displaced. The loss illustrates how concentrated expertise in a neglected disease can be, and why the field has been trying to build capacity in other parts of the mycetoma belt.",
        ...REVIEW,
        institutionType: "Research and clinical centre",
        country: "Sudan",
        city: "Khartoum",
        focus:
          "Mycetoma diagnosis, treatment, surgery, training and clinical research, including the first randomised treatment trial.",
        links: [
          { label: "A balancing act: the pioneering mycetoma trial in Sudan", url: "https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0013000" },
        ],
        diseases: ["mycetoma"],
        drugs: ["fosravuconazole"],
        trials: ["fosravuconazole-mycetoma"],
        institutions: ["dndi", "who"],
        bottlenecks: ["funding-gap", "surveillance-data-gap"],
      },
      {
        id: "msf",
        name: "Médecins Sans Frontières (MSF)",
        tldr: "The medical humanitarian organisation that runs the world's largest noma surgical programme and treats snakebite, Chagas and leishmaniasis.",
        summary:
          "MSF treats neglected diseases where health systems have failed, and its fingerprints are on several of them. In Sokoto, northern Nigeria, it has run the world's largest noma programme since 2014, performing over 1,200 reconstructive operations on more than 800 patients and providing nutrition, physiotherapy and speech therapy alongside surgery. It also runs snakebite treatment and antivenom access projects, Chagas and leishmaniasis programmes in Latin America, and sleeping-sickness work in Central Africa. Because it operates at the point of care, MSF's experience often exposes the gap between what guidelines recommend and what patients can actually receive.",
        ...REVIEW,
        institutionType: "Medical humanitarian organisation",
        country: "Switzerland",
        city: "Geneva",
        focus:
          "Treatment and access for neglected diseases, including noma surgery, snakebite, Chagas disease and sleeping sickness.",
        links: [
          { label: "MSF — noma", url: "https://www.msf.org.uk/issues/noma" },
        ],
        diseases: ["noma", "snakebite", "chagas", "leishmaniasis", "hat"],
        institutions: ["who"],
        technologies: ["community-health-workers"],
        terms: ["stigma-and-disability"],
      },
      {
        id: "noma-children-hospital",
        name: "Noma Children's Hospital, Sokoto",
        tldr: "The hospital in northern Nigeria at the centre of the world's noma surgical and rehabilitation work.",
        summary:
          "The Noma Children's Hospital in Sokoto, northern Nigeria, is the largest facility dedicated to noma in the world, treating children in the acute phase and providing reconstructive surgery and rehabilitation to survivors. Nigeria carries the highest burden of noma and led the request for WHO to recognise it as a neglected tropical disease, and the hospital's work with MSF — more than 1,200 operations since 2014 — is the clearest demonstration of what surgical care can achieve and how many more patients need it.",
        ...REVIEW,
        institutionType: "Specialist hospital",
        country: "Nigeria",
        city: "Sokoto",
        focus: "Noma treatment, reconstructive surgery, nutrition and rehabilitation for children.",
        links: [
          { label: "MSF — our work in Nigeria, including noma surgery in Sokoto", url: "https://www.msf.org/nigeria" },
        ],
        diseases: ["noma"],
        institutions: ["msf", "who"],
        terms: ["stigma-and-disability"],
        stats: [
          { label: "MSF operations there", value: "> 1,200 since 2014" },
        ],
      },
      {
        id: "zero-noma",
        name: "ZeroNoma initiative",
        tldr: "A Nigerian-led initiative campaigning for the early detection and elimination of noma.",
        summary:
          "The ZeroNoma initiative works to put noma on the agenda in Nigeria and beyond, campaigning for early detection, training health workers to recognise the disease in its treatable stage, and linking families to surgery. It marks World NTD Day and works with WHO's new NTD framework for noma. Its importance is that noma's solution is largely operational — recognition, antibiotics and referral — so advocacy that raises awareness among primary health workers and communities is itself an intervention.",
        ...REVIEW,
        institutionType: "Advocacy initiative",
        country: "Nigeria",
        city: "Abuja",
        focus: "Early detection of noma, health-worker training, survivor support and advocacy.",
        links: [
          { label: "WHO — noma", url: "https://www.who.int/news-room/fact-sheets/detail/noma" },
        ],
        diseases: ["noma"],
        institutions: ["noma-children-hospital", "who"],
        technologies: ["community-health-workers"],
      },
      {
        id: "lstm",
        name: "Liverpool School of Tropical Medicine (LSTM)",
        tldr: "The research institute that identified a previously unknown bacterium strongly associated with noma.",
        summary:
          "Liverpool School of Tropical Medicine is a long-established centre for tropical disease research, and in 2024 its researchers identified a previously unknown bacterium strongly associated with noma and showed that the disease severely disrupts the oral microbiome. The finding is significant because noma has no single known cause and no diagnostic test; a microbial marker could allow recognition before the disease becomes gangrenous. LSTM also works on scabies, snakebite and other diseases in the NTD portfolio.",
        ...REVIEW,
        institutionType: "Research institute",
        country: "United Kingdom",
        city: "Liverpool",
        focus: "Tropical disease research, including noma microbiology, scabies and snakebite.",
        links: [
          { label: "LSTM — noma research", url: "https://www.lstmed.ac.uk/" },
        ],
        diseases: ["noma", "scabies", "snakebite"],
        technologies: ["genomic-surveillance", "molecular-pcr"],
        institutions: ["who", "lshtm"],
        bottlenecks: ["diagnostics-gap"],
      },
      {
        id: "iddo",
        name: "Infectious Diseases Data Observatory (IDDO)",
        tldr: "An Oxford data platform that pooled the noma evidence and called for standardised reporting and better surveillance.",
        summary:
          "IDDO, based at the University of Oxford, builds platforms that pool and standardise clinical data across studies so that evidence can answer questions no single study can. Its noma work with WHO produced a systematic scoping review of the global noma evidence base, which found large gaps in understanding of causation and treatment and called for standardised reporting, increased surveillance and improved early detection. For a disease only recently recognised by WHO, creating a usable evidence base is the first step toward measuring anything.",
        ...REVIEW,
        institutionType: "Data and research platform",
        country: "United Kingdom",
        city: "Oxford",
        focus: "Pooling and standardising clinical data, including a scoping review of the noma evidence base.",
        links: [
          { label: "IDDO — global action needed to tackle noma", url: "https://www.iddo.org/news/global-action-needed-tackle-noma-disease" },
        ],
        diseases: ["noma"],
        institutions: ["who", "lstm"],
        bottlenecks: ["surveillance-data-gap"],
      },
      {
        id: "sabin-vaccine-institute",
        name: "Sabin Vaccine Institute",
        tldr: "The non-profit that has carried the human hookworm vaccine programme, one of the few attempts at a vaccine for a parasitic worm.",
        summary:
          "The Sabin Vaccine Institute is a non-profit vaccine developer whose human hookworm vaccine programme has taken candidate antigens through early clinical trials. A hookworm vaccine matters because deworming treats infection without preventing reinfection, so a vaccine that reduced infection intensity would add something albendazole cannot. The scientific difficulty is that hookworm has evolved to modulate the human immune response, making durable protection hard to induce, and the commercial case is weak. Sabin's work is therefore a test of whether a vaccine for a parasite of poverty can be developed at all through non-profit funding.",
        ...REVIEW,
        institutionType: "Vaccine development non-profit",
        country: "United States",
        city: "Washington, D.C.",
        focus: "Developing vaccines against neglected parasitic and viral diseases, including human hookworm.",
        links: [
          { label: "Sabin Vaccine Institute — hookworm", url: "https://www.sabin.org/" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        technologies: ["hookworm-vaccine-candidates"],
        bottlenecks: ["vaccine-gap", "funding-gap"],
        terms: ["pdp"],
      },
    ],
  },

  {
    kind: "terms",
    records: [
      {
        id: "tungiasis",
        name: "Tungiasis",
        tldr: "Infestation by the jigger flea, which burrows into the skin of the feet and causes painful, infected lesions in people who walk barefoot.",
        summary:
          "Tungiasis is caused by the female sand flea Tunga penetrans, which burrows into the skin — most often of the feet — and swells as it develops, producing a painful lesion that commonly becomes infected. It affects people who walk barefoot on sandy soil, particularly children and older people, in parts of sub-Saharan Africa, Latin America and the Caribbean, and heavy infestation can make walking impossible and lead to secondary infection including tetanus. It is grouped with scabies under 'scabies and other ectoparasitoses' on the WHO NTD list. Treatment is physical extraction, topical dimeticone or sometimes oral ivermectin, and control depends on footwear, sanitation and reducing the animal reservoir — the same development conditions that make scabies disappear.",
        ...REVIEW,
        category: "Ectoparasitosis",
        aka: "jigger flea infestation, sand flea disease",
        links: [
          { label: "WHO — scabies and other ectoparasitoses", url: "https://www.who.int/news-room/fact-sheets/detail/scabies" },
        ],
        diseases: ["scabies"],
        drugs: ["ivermectin"],
        technologies: ["wash-interventions"],
        related: ["one-health", "stigma-and-disability"],
      },
      {
        id: "strongyloidiasis",
        name: "Strongyloidiasis",
        tldr: "A worm caught through skin contact with contaminated soil that can cause fatal hyperinfection when the immune system is suppressed.",
        summary:
          "Strongyloides stercoralis is a soil-transmitted worm whose larvae penetrate the skin, but unlike the other soil-transmitted helminths it can complete its life cycle inside a person, so infection can persist for decades through autoinfection. Most people have mild or no symptoms; the danger is that when immunity is suppressed — particularly by corticosteroids — the parasite multiplies uncontrollably into hyperinfection and disseminated disease, which is frequently fatal. Diagnosis is difficult because the standard stool tests miss it, and screening before steroid treatment is not routine even in endemic areas. WHO added control of Strongyloides morbidity as a 2030 objective and released a guideline on its public health control in 2024.",
        ...REVIEW,
        category: "Clinical",
        aka: "Strongyloides infection",
        links: [
          { label: "WHO — guideline on public health control of human strongyloidiasis", url: "https://www.who.int/news/item/02-08-2024-who-releases-guideline-on-public-health-control-of-human-strongyloidiasis" },
        ],
        diseases: ["sth"],
        pathogens: ["soil-transmitted-helminths"],
        drugs: ["ivermectin", "albendazole"],
        related: ["diagnostics-gap", "wash"],
        stats: [
          { label: "Key danger", value: "Hyperinfection under steroid treatment" },
          { label: "Diagnosis", value: "Missed by standard stool tests" },
        ],
      },
      {
        id: "chromoblastomycosis",
        name: "Chromoblastomycosis",
        tldr: "A slow fungal infection of the skin that follows an injury and produces wart-like nodules that are disfiguring and hard to cure.",
        summary:
          "Chromoblastomycosis is caused by pigmented environmental fungi that enter through a skin injury and produce slowly enlarging, wart-like nodules, most often on the legs. It is found in tropical and subtropical regions and mainly affects people who work barefoot with soil and plants. It does not spread between people, but it is difficult to treat: itraconazole, terbinafine and flucytosine are used, sometimes with cryotherapy, and courses run for a year or more with uncertain success. Like mycetoma it is grouped among the deep mycoses on the WHO NTD list, and like mycetoma it is under-diagnosed, under-counted and without a reliably effective treatment.",
        ...REVIEW,
        category: "Deep mycosis",
        aka: "chromomycosis",
        links: [
          { label: "WHO — mycetoma and other deep mycoses", url: "https://www.who.int/news-room/fact-sheets/detail/mycetoma" },
        ],
        diseases: ["mycetoma"],
        related: ["stigma-and-disability", "diagnostics-gap"],
      },
    ],
  },

  /* ===== review: taeniasis/cysticercosis, trachoma, yaws ===== */

  {
    kind: "technologies",
    records: [
      {
        id: "safe-strategy",
        name: "The SAFE strategy for trachoma",
        tldr: "Surgery, antibiotics, facial cleanliness and environmental improvement — a four-part strategy matched to each stage of trachoma.",
        summary:
          "SAFE is the intervention model that has taken trachoma to the edge of elimination. Surgery treats trichiasis in people whose eyelids have already turned inward; antibiotics — mass azithromycin — reduce the community pool of infection; facial cleanliness reduces transmission between children; and environmental improvement, meaning water supply and latrines, attacks the conditions that allow the infection to spread, including the flies that feed on eye and nose discharge. It is the clearest example in the NTD field of pairing a medical intervention with a development one, and the reason WHO now recommends combining preventive chemotherapy with water and sanitation rather than running them as separate programmes.",
        ...REVIEW,
        category: "Preventive chemotherapy and WASH",
        maturity: "Standard of care; the framework of the global elimination programme",
        whatItDoes:
          "Combines surgery, mass antibiotics, hygiene and water and sanitation so that every stage of trachoma is addressed.",
        limitation:
          "The 'F' and 'E' components depend on water and sanitation investment outside the health budget, and mass azithromycin applies selection pressure for macrolide resistance.",
        links: [
          { label: "WHO — trachoma", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        technologies: ["mass-drug-administration", "wash-interventions"],
        institutions: ["who", "iti"],
        terms: ["trichiasis", "mda"],
      },
      {
        id: "total-community-treatment",
        name: "Total community treatment (TCT) for yaws",
        tldr: "Treating every person in an endemic community with one dose of azithromycin, repeated until yaws transmission stops.",
        summary:
          "The Morges strategy for yaws eradication runs on total community treatment: mass administration of a single oral dose of azithromycin to everyone in an affected community, followed by total targeted treatment — cases and their contacts only — as prevalence falls. TCT is feasible because azithromycin is a one-dose cure that needs no injection and can be given by a community health worker, which is what distinguishes it from the injectable penicillin campaigns that nearly eradicated yaws in the 1950s. Its vulnerability is the same as its strength: the entire strategy depends on one antibiotic, and azithromycin-resistant yaws has already emerged in Papua New Guinea.",
        ...REVIEW,
        category: "Preventive chemotherapy",
        maturity: "Standard eradication strategy",
        whatItDoes:
          "Treats entire endemic communities with a single oral dose of azithromycin to interrupt yaws transmission.",
        limitation:
          "Rests on a single antibiotic to which resistance has emerged; requires repeated rounds and sustained surveillance after treatment stops.",
        links: [
          { label: "WHO — supporting countries to implement the yaws eradication strategy", url: "https://www.who.int/activities/supporting-endemic-countries-to-implement-yaws-eradication-strategy" },
        ],
        diseases: ["yaws"],
        drugs: ["azithromycin", "benzathine-penicillin"],
        technologies: ["mass-drug-administration"],
        institutions: ["who"],
        terms: ["mda", "macrolide-resistance"],
      },
      {
        id: "tsol18-vaccine",
        name: "TSOL18 pig vaccine (Cysvax)",
        tldr: "A vaccine that stops pigs developing tapeworm cysts, breaking the cycle that gives people neurocysticercosis.",
        summary:
          "TSOL18 is a recombinant vaccine against Taenia solium in pigs. Because pigs are the intermediate host, preventing cysts in pigs removes the step that lets people acquire the adult tapeworm — and therefore removes the tapeworm carriers who contaminate the environment with the eggs that cause brain cysts. It is produced commercially as Cysvax by Indian Immunologicals and is named by WHO among the specific animal-side control measures for the disease. The vaccine prevents new cysts but does not clear existing ones, so it is used with oxfendazole, which kills established cysts; a trial in Uganda found that three-monthly vaccination combined with oxfendazole eliminated transmission by pigs.",
        ...REVIEW,
        category: "Veterinary vaccine",
        maturity: "Licensed and in use in some countries",
        whatItDoes:
          "Prevents Taenia solium cysts in pigs, removing the source of human tapeworm infection.",
        limitation:
          "Does not clear existing cysts, so it must be combined with oxfendazole and repeated; depends on reaching free-roaming and backyard pigs.",
        links: [
          { label: "WHO — Taenia solium prevention through animals, One Health approach", url: "https://www.who.int/activities/promoting-prevention-and-control-of-taenia-solium-infection-through-animals-with-the-one-health-approach/promoting-prevention-and-control-of-taenia-solium-infection-through-animals-with-the-one-health-approach" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        drugs: ["oxfendazole"],
        trials: ["pig-vaccination-oxfendazole"],
        institutions: ["galvmed", "who"],
        terms: ["zoonosis", "one-health"],
        stats: [
          { label: "Manufacturer", value: "Indian Immunologicals (Cysvax)" },
          { label: "Combined with", value: "Oxfendazole" },
          { label: "Uganda trial", value: "Eliminated pig transmission" },
        ],
      },
    ],
  },

  {
    kind: "diagnostics",
    records: [
      {
        id: "yaws-dual-rdt",
        name: "Dual rapid diagnostic test for yaws",
        tldr: "A rapid test that combines a treponemal and a non-treponemal line, helping separate active yaws from past infection — and from syphilis.",
        summary:
          "Yaws is caused by Treponema pallidum subsp. pertenue, and the antibodies it provokes cross-react with those of venereal syphilis, so a simple treponemal test cannot tell the two apart or distinguish active infection from old. Dual rapid diagnostic tests address this by combining a treponemal line, which detects any exposure, with a non-treponemal line, which is more indicative of active infection — the same approach used in syphilis screening. WHO and partners have also developed a target product profile for a second, harder test: one that detects the macrolide resistance mutations that would compromise azithromycin, the antibiotic the entire eradication strategy depends on. That resistance test does not yet exist as a field product.",
        ...REVIEW,
        method: "Dual-pathway lateral-flow immunoassay (treponemal plus non-treponemal)",
        sampleType: "Finger-prick blood",
        turnaround: "15–20 minutes",
        performance:
          "Improves on single treponemal tests by indicating active infection, but cannot fully distinguish yaws from syphilis; molecular typing is needed for confirmation.",
        availability: "Used in yaws programmes; a resistance test remains a target product profile, not a product",
        links: [
          { label: "Diagnostics to support the eradication of yaws — target product profiles", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9473620/" },
        ],
        diseases: ["yaws"],
        pathogens: ["treponema-pallidum-pertenue"],
        technologies: ["lateral-flow-assays"],
        institutions: ["who", "find-dx"],
        terms: ["macrolide-resistance", "sensitivity-specificity"],
      },
      {
        id: "cysticercosis-serology",
        name: "Cysticercosis serology (EITB and rT24H)",
        tldr: "Antibody tests that confirm exposure to the pork tapeworm, used alongside imaging to diagnose brain cysts.",
        summary:
          "Diagnosing neurocysticercosis combines imaging with serology. The enzyme-linked immunoelectrotransfer blot (EITB, also called the LLGP-EITB) detects antibodies against specific Taenia solium glycoproteins and is highly specific; the rT24H assay uses a recombinant antigen and is easier to standardise and deploy. Both indicate exposure rather than active disease and cannot show whether a lesion in the brain is alive, so they are read together with CT or MRI and with the clinical picture. Detecting the tapeworm carrier — the person actually shedding eggs — is a separate and harder problem, relying on stool examination or coproantigen tests that are insensitive at low burdens. A point-of-care test for active infection and for the carrier state is one of the field's clearest unmet needs.",
        ...REVIEW,
        method: "Antibody detection by immunoblot or recombinant-antigen assay",
        sampleType: "Serum",
        turnaround: "Hours to days; requires a laboratory",
        performance:
          "High specificity for exposure to T. solium; cannot distinguish active from past infection or confirm that a brain lesion is viable.",
        availability: "Reference and research laboratories; not a point-of-care test",
        links: [
          { label: "WHO — taeniasis/cysticercosis", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        pathogens: ["taenia-solium"],
        technologies: ["lateral-flow-assays"],
        terms: ["sensitivity-specificity", "diagnostics-gap"],
      },
    ],
  },

  {
    kind: "trials",
    records: [
      {
        id: "star-trichiasis",
        name: "STAR: azithromycin after trichiasis surgery",
        tldr: "The trial showing that a single dose of azithromycin after eyelid surgery cuts trichiasis recurrence by about a third.",
        summary:
          "Trachomatous trichiasis frequently returns after surgery, meaning renewed pain and renewed risk to the cornea. The STAR trial tested whether giving a single dose of azithromycin after the operation reduced recurrence, comparing it with topical tetracycline. It found that azithromycin reduced postoperative trichiasis recurrence by about one third, and that severe recurrence at one year was reduced — evidence that the surgical and antibiotic arms of the SAFE strategy work better together than either alone. It argues for combining azithromycin with trichiasis surgery as standard practice.",
        ...REVIEW,
        phase: "Randomised controlled trial",
        status: "Reported positive",
        intervention: "Single-dose oral azithromycin following trichiasis surgery",
        result:
          "Cut trichiasis recurrence by about one third compared with topical tetracycline; severe recurrence reduced at one year.",
        links: [
          { label: "Single-dose azithromycin prevents trichiasis recurrence (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/16534049/" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        technologies: ["safe-strategy"],
        institutions: ["who"],
        terms: ["trichiasis"],
      },
      {
        id: "pig-vaccination-oxfendazole",
        name: "TSOL18 vaccination with oxfendazole in pigs",
        tldr: "A trial in Uganda showing that repeated pig vaccination plus deworming eliminated Taenia solium transmission by pigs.",
        summary:
          "This control trial combined three-monthly vaccination of pigs with TSOL18 and treatment with oxfendazole, on the reasoning that the vaccine prevents new cysts while the drug clears any that have already formed. It found that the combination eliminated Taenia solium transmission by pigs in the study area — the strongest evidence that the animal end of the cycle can be closed. Because pigs are the intermediate host, removing infection from pigs removes the human tapeworm cases that follow, and with them the egg contamination that causes neurocysticercosis. It is the clearest demonstration in the field that a human disease can be controlled through veterinary intervention.",
        ...REVIEW,
        phase: "Field control trial",
        status: "Reported positive",
        intervention: "TSOL18 vaccination plus oxfendazole every three months",
        result: "Eliminated Taenia solium transmission by pigs.",
        links: [
          { label: "Control trial of porcine cysticercosis in Uganda (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/33743828/" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        drugs: ["oxfendazole"],
        technologies: ["tsol18-vaccine"],
        institutions: ["galvmed"],
        terms: ["one-health", "zoonosis"],
      },
    ],
  },

  {
    kind: "institutions",
    records: [
      {
        id: "iti",
        name: "International Trachoma Initiative (ITI)",
        tldr: "The organisation that manages Pfizer's donation of azithromycin and has distributed more than a billion trachoma treatments.",
        summary:
          "The International Trachoma Initiative, part of the Task Force for Global Health, has managed Pfizer's donation of azithromycin for trachoma since 1998, allocating and distributing more than one billion treatments and supporting countries to deliver the full SAFE strategy. It is the logistical backbone of the trachoma elimination programme: a donated antibiotic is only useful if someone forecasts demand, orders, ships and accounts for it, and that is ITI's work. Pfizer has extended the donation to 2030, and as countries eliminate trachoma the freed supply is redirected to those still endemic.",
        ...REVIEW,
        institutionType: "Donation management and technical support programme",
        country: "United States",
        city: "Decatur, Georgia",
        focus: "Managing and distributing donated azithromycin and supporting trachoma elimination programmes.",
        links: [
          { label: "International Trachoma Initiative", url: "https://www.trachoma.org/" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        technologies: ["safe-strategy", "mass-drug-administration"],
        institutions: ["who"],
        stats: [
          { label: "Managing the donation since", value: "1998" },
          { label: "Treatments distributed", value: "> 1 billion" },
        ],
      },
      {
        id: "ictc",
        name: "International Coalition for Trachoma Control (ICTC)",
        tldr: "The coalition coordinating NGOs, researchers and donors behind the global trachoma elimination effort.",
        summary:
          "The International Coalition for Trachoma Control brings together the non-governmental organisations, academic institutions and donors delivering trachoma programmes, and coordinates their work with WHO's elimination goals. Its role is practical: aligning approaches across organisations, publishing gap analyses that estimate what the final push will cost, and advocating for the funding needed to finish. Coalitions like this matter most in the endgame, when the remaining districts are the hardest to reach and no single organisation has the reach to finish alone.",
        ...REVIEW,
        institutionType: "Coalition",
        country: "United Kingdom",
        city: "London",
        focus: "Coordinating trachoma elimination partners, gap analysis and advocacy.",
        links: [
          { label: "International Coalition for Trachoma Control", url: "https://www.trachomacoalition.org/" },
        ],
        diseases: ["trachoma"],
        institutions: ["who", "iti"],
        terms: ["elimination"],
        stats: [
          { label: "Countries validated", value: "27", note: "reported January 2026" },
        ],
      },
      {
        id: "galvmed",
        name: "GALVmed",
        tldr: "The alliance that works to make livestock vaccines and medicines available in the countries that need them, including the pig vaccine against cysticercosis.",
        summary:
          "GALVmed — the Global Alliance for Livestock Veterinary Medicines — works to make animal vaccines, medicines and diagnostics accessible in low- and middle-income countries, where livestock are central to livelihoods but veterinary products are often unavailable. Its work on Taenia solium cysticercosis promotes the combination of the TSOL18 pig vaccine and oxfendazole treatment, which prevents and clears the cysts that lead to human tapeworm infection and neurocysticercosis. Its role is a reminder that zoonotic NTD control is a veterinary-market problem as much as a medical one: a vaccine that exists but is not distributed to backyard pigs changes nothing.",
        ...REVIEW,
        institutionType: "Livestock health alliance",
        country: "United Kingdom",
        city: "Edinburgh",
        focus: "Access to livestock vaccines and medicines, including control of porcine cysticercosis.",
        links: [
          { label: "GALVmed — breaking the cycle of neurocysticercosis", url: "https://www.galvmed.org/breaking-the-cycle-of-the-zoonotic-disease-neurocysticercosis/" },
        ],
        diseases: ["taeniasis-cysticercosis"],
        technologies: ["tsol18-vaccine"],
        institutions: ["woah", "who"],
        terms: ["one-health", "zoonosis"],
      },
    ],
  },

  {
    kind: "terms",
    records: [
      {
        id: "trichiasis",
        name: "Trachomatous trichiasis",
        tldr: "The stage of trachoma in which scarring turns the eyelid inward so the lashes scrape the cornea — the stage that blinds and needs surgery.",
        summary:
          "Trichiasis is the late consequence of repeated trachoma infection: years of inflammation scar the inner eyelid, the lid margin turns inward, and the lashes rub against the cornea with every blink. It is painful, it damages the cornea, and left untreated it causes irreversible blindness. It is treated by surgery that rotates the eyelid, which is the 'S' in the SAFE strategy, and surgery is effective but not permanent — trichiasis returns in a substantial proportion of patients, so a single dose of azithromycin after the operation is now given to reduce recurrence. Because the people who need surgery are often the poorest and most remote, and because recurrence requires follow-up, trichiasis is the part of trachoma elimination where the backlog of already-damaged eyes is hardest to clear.",
        ...REVIEW,
        category: "Clinical",
        aka: "TT, in-turned eyelashes",
        links: [
          { label: "WHO — trachoma", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
        ],
        diseases: ["trachoma"],
        drugs: ["azithromycin"],
        trials: ["star-trichiasis"],
        related: ["elimination", "stigma-and-disability"],
      },
      {
        id: "macrolide-resistance",
        name: "Macrolide resistance",
        tldr: "Bacteria surviving azithromycin and related antibiotics — a side effect of mass treatment programmes that depend on them.",
        summary:
          "Macrolides are a widely used antibiotic class that includes azithromycin, the drug that carries both trachoma and yaws elimination. Mass administration of azithromycin to whole communities — which is what makes those programmes work — also exposes every other bacterium in those populations to the drug, and selects for resistance in pneumococci, staphylococci and other organisms, not just the target. In yaws the problem is direct: azithromycin-resistant Treponema pallidum pertenue has been reported in Papua New Guinea with local transmission, threatening the entire Morges strategy. In trachoma the concern is indirect but real, and it is one reason programmes stop mass treatment as soon as surveys allow. A target product profile exists for a field test that detects macrolide resistance in yaws; such a test does not yet exist.",
        ...REVIEW,
        category: "Drug resistance",
        links: [
          { label: "Diagnostics to support yaws eradication — resistance test target product profile", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9473620/" },
        ],
        diseases: ["trachoma", "yaws"],
        drugs: ["azithromycin"],
        technologies: ["mass-drug-administration"],
        related: ["azithromycin", "elimination"],
        stats: [
          { label: "Direct threat", value: "Azithromycin-resistant yaws" },
          { label: "Reported in", value: "Papua New Guinea", note: "2018" },
        ],
      },
    ],
  },

  /* ================== review: cross-cutting drivers ================== */

  {
    kind: "bottlenecks",
    records: [
      {
        id: "conflict-and-displacement",
        name: "Conflict and displacement",
        tldr: "War breaks surveillance, empties clinics, moves infected people into new places and stops programmes — and it is the single biggest operational obstacle in the field today.",
        summary:
          "The countries where neglected tropical diseases persist are disproportionately countries affected by conflict. War destroys the two things every NTD programme depends on: a functioning health system and continuous surveillance. Treatment is interrupted, follow-up is lost, cases are not counted, and displaced people move into areas with the vector but no clinical experience of the disease. The consequences are visible across this corpus: the Mycetoma Research Centre in Khartoum paralysed by the war in Sudan, the first randomised mycetoma trial reporting into a collapsing health system, visceral leishmaniasis outbreaks in displacement settings in Sudan and Yemen, sleeping-sickness case-finding impossible in parts of the Democratic Republic of the Congo and South Sudan, and Guinea worm containment dependent on reaching remote villages in conflict-affected areas. Displacement also exports disease — Chagas and leishmaniasis arriving in cities and countries where neither patients nor clinicians expect them.",
        asOf: "2026-09",
        scope: "Global, concentrated in the Sahel, the Horn of Africa and Central Africa",
        blocked:
          "Case-finding, treatment continuity, surveillance, elimination verification, and research — including the only clinical trial for mycetoma.",
        why: "Conflict destroys health infrastructure, displaces both patients and health workers, and makes the remote rural areas where NTDs concentrate unsafe to reach.",
        whatWouldUnlock:
          "Humanitarian delivery integrated with NTD programmes, mobile and community-based treatment that can move with displaced populations, regional coordination so that progress in one country is not undone by a neighbour, and a clear pathway back to national programmes after conflict ends.",
        links: [
          { label: "WHO — NTDs in humanitarian emergencies", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        diseases: ["mycetoma", "leishmaniasis", "hat", "dracunculiasis", "chagas", "noma", "snakebite", "schistosomiasis"],
        countries: ["sudan", "south-sudan", "dr-congo", "yemen", "ethiopia", "chad"],
        institutions: ["msf", "who", "mrc-khartoum"],
        bottlenecks: ["surveillance-data-gap"],
        terms: ["elimination", "ntd"],
        stats: [
          { label: "Clearest example", value: "Mycetoma in Sudan" },
          { label: "Mechanism", value: "Health system collapse, then displacement" },
        ],
      },
      {
        id: "anthelmintic-resistance",
        name: "Anthelmintic resistance in worms",
        tldr: "The deworming drugs are losing potency in the worms they target, and the programmes that rely on them have few alternatives.",
        summary:
          "Resistance to deworming drugs is not a future risk — it is documented in the field. Benzimidazole resistance is widespread in livestock nematodes, driven by decades of intensive use, and the same class is the backbone of human deworming. Single-dose albendazole is already poorly effective against Trichuris trichiura, and reduced individual responses have been reported in areas with high drug pressure. In schistosomiasis, praziquantel is the only widely used drug and reduced efficacy has been reported in some settings. In river blindness, suboptimal responses to ivermectin have been documented and suspected resistance exists. The field's response is combinations (moxidectin with albendazole, which cured 69% of trichuriasis in a recent trial), drugs with different mechanisms (tribendimidine, emodepside) and surveillance for reduced efficacy — which is not routine in human populations, only in research studies.",
        asOf: "2026-09",
        scope: "Global",
        blocked:
          "The effectiveness of mass deworming, which rests on a single drug class for most soil-transmitted helminths and a single drug for schistosomiasis.",
        why: "Intensive use of the same drugs in billions of doses, combined with agricultural use of the same classes in livestock, selects for resistance faster than new drugs are developed.",
        whatWouldUnlock:
          "Drug combinations with different mechanisms, new anthelmintics, and routine surveillance for reduced efficacy — measuring egg reduction rates rather than assuming they hold.",
        links: [
          { label: "WHO — soil-transmitted helminth infections", url: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections" },
        ],
        diseases: ["sth", "schistosomiasis", "onchocerciasis", "lymphatic-filariasis"],
        drugs: ["albendazole", "mebendazole", "praziquantel", "ivermectin", "moxidectin", "tribendimidine", "emodepside"],
        technologies: ["mass-drug-administration", "drug-repurposing"],
        terms: ["preventive-chemotherapy", "mda"],
        stats: [
          { label: "Weak link", value: "Albendazole vs Trichuris" },
          { label: "Evidence base", value: "Livestock resistance is well documented; human surveillance is thin" },
        ],
      },
      {
        id: "costs-and-financing",
        name: "What it costs, and who pays",
        tldr: "NTD programmes are cheap per person treated but expensive at scale, and they depend on a small number of donors and donated drugs.",
        summary:
          "The economics of NTD control are unusual: mass deworming is among the cheapest interventions in public health, and several of the drugs are donated outright, which makes the cost-effectiveness figures extraordinary on paper. But cheap per person is not cheap at scale, and the structural problem is dependence. Medicines come from a handful of corporate donations — ivermectin from Merck, azithromycin from Pfizer, albendazole from GSK, triclabendazole from Novartis, DEC from Eisai — and delivery is funded by a small number of donors and by domestic budgets that are weakest exactly where the burden is highest. Where a product is not donated — antivenom, rabies immunoglobulin, liposomal amphotericin B — cost becomes the binding constraint on access. Cost-effectiveness analyses, usually expressed as dollars per DALY averted, are what justify the investment, and they depend on burden estimates that are often uncertain.",
        asOf: "2026-09",
        scope: "Global",
        blocked:
          "Sustainability of programmes, access to non-donated products, and any expansion of what programmes can afford to do.",
        why: "No commercial market for the products, heavy reliance on donated medicines and a few donors, and weak domestic health financing in the highest-burden countries.",
        whatWouldUnlock:
          "Domestic financing commitments, pooled procurement to create market volume, regional manufacturing, and pricing that reflects what health systems can actually pay.",
        links: [
          { label: "WHO — preventive chemotherapy and donated medicines", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        diseases: ["sth", "lymphatic-filariasis", "onchocerciasis", "trachoma", "snakebite", "rabies", "leishmaniasis"],
        drugs: ["ivermectin", "albendazole", "azithromycin", "triclabendazole", "snake-antivenom", "rabies-postexposure-prophylaxis"],
        institutions: ["gates-foundation", "unitaid", "uniting-ntds", "who"],
        terms: ["cost-effectiveness", "drug-donation-programme", "who-essentials"],
        bottlenecks: ["access-and-pricing"],
        stats: [
          { label: "Donated drugs", value: "Several of the core NTD medicines" },
          { label: "Not donated", value: "Antivenom, rabies immunoglobulin, some antifungals" },
        ],
      },
      {
        id: "gender-and-access",
        name: "Gender and access",
        tldr: "Women and girls carry specific NTD burdens and face specific barriers to care, and the research and services rarely reflect it.",
        summary:
          "Sex and gender shape NTDs in ways that programmes have been slow to address. Female genital schistosomiasis affects an estimated 56 million women and girls in sub-Saharan Africa, is routinely misdiagnosed as a sexually transmitted infection, and increases susceptibility to HIV. Cutaneous leishmaniasis and lymphatic filariasis carry stigma that falls hardest on women, affecting marriage and work. Pregnant women have historically been excluded from treatment research out of caution, leaving the group most at risk with the least evidence — a gap that WHO's 2022 schistosomiasis guideline began to close by recommending treatment in pregnancy. Access barriers compound this: women may need permission or a chaperone to attend a clinic, and care is often designed around male-headed households. WHO's 2021–2030 road map commits to gender-responsive programmes, and a mentorship programme for women in NTDs was named after Mwele Malecela.",
        asOf: "2026-09",
        scope: "Global",
        blocked:
          "Late diagnosis and treatment for women and girls, and evidence on how interventions perform in pregnancy.",
        why: "Stigma, gendered care-seeking and mobility, exclusion of pregnant women from trials, and health services designed without regard to who actually attends them.",
        whatWouldUnlock:
          "Include pregnant and lactating women in treatment research with proper monitoring, screen for female genital schistosomiasis as part of routine reproductive health care, and design and staff services around the people who use them.",
        links: [
          { label: "WHO — schistosomiasis (guideline on treatment in pregnancy)", url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis" },
        ],
        diseases: ["schistosomiasis", "leishmaniasis", "lymphatic-filariasis", "onchocerciasis", "trachoma", "leprosy"],
        institutions: ["who", "dndi", "uniting-ntds"],
        people: ["mwele-malecela"],
        terms: ["fgs", "elimination", "tpp"],
        bottlenecks: ["stigma-and-disability"],
        stats: [
          { label: "FGS burden", value: "≈ 56 million", note: "women and girls in sub-Saharan Africa" },
          { label: "HIV link", value: "FGS lesions increase susceptibility" },
        ],
      },
      {
        id: "mental-health",
        name: "Mental health and NTDs",
        tldr: "Depression, anxiety and cognitive harm sit alongside almost every NTD, and almost no programme measures or treats them.",
        summary:
          "NTDs cause depression and anxiety through several routes: the disfigurement and stigma of leprosy, lymphatic filariasis or cutaneous leishmaniasis; the neurological damage of neurocysticercosis, sleeping sickness and cerebral malaria-adjacent disease; the chronic itch of onchocerciasis and scabies; and the epilepsy that follows neurocysticercosis in a substantial share of cases. Children with heavy soil-transmitted helminth infections show impaired learning that is at least partly attributable to the infection. Yet mental health is rarely part of an NTD programme, and stigma — named as a bottleneck in its own right — is compounded by the absence of any psychological support. The DALY framework captures some of this as years lived with disability, but it does not capture it well, which is one reason mental health remains peripheral to the field's accounting.",
        asOf: "2026-09",
        scope: "Global",
        blocked: "Recovery for people who are cured of infection but not of its psychological consequences, and recognition of the full burden.",
        why: "Health systems with no mental health capacity, NTD programmes with no mental health mandate, and burden measures that under-count disability.",
        whatWouldUnlock:
          "Integrate mental health screening into NTD clinics, include psychological support in programmes for disfiguring and neurological disease, and measure it.",
        links: [
          { label: "WHO — mental health and NTDs", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        diseases: ["leprosy", "lymphatic-filariasis", "onchocerciasis", "taeniasis-cysticercosis", "leishmaniasis", "scabies", "noma"],
        institutions: ["who"],
        people: [],
        terms: ["daly"],
        bottlenecks: ["stigma-and-disability"],
        stats: [
          { label: "Neurological route", value: "Epilepsy from neurocysticercosis" },
          { label: "Social route", value: "Disfigurement, stigma and exclusion" },
        ],
      },
      {
        id: "workforce-and-capacity",
        name: "Workforce and capacity",
        tldr: "Elimination depends on people — microscopists, entomologists, surgeons, laboratory scientists — and there are not enough of them where the diseases are.",
        summary:
          "Every intervention in this corpus is delivered by a person: a community health worker giving ivermectin, a microscopist reading a Kato-Katz smear, an entomologist identifying a mosquito species, a surgeon rotating an eyelid, a laboratory scientist running PCR or sequencing a parasite genome. The shortage of all of these is a recurring constraint. Diagnosis depends on trained microscopists in places that have few; vector control depends on entomologists in districts that have none; genomic surveillance depends on bioinformatics capacity that exists mainly outside endemic countries; and surgical capacity for noma, trichiasis and hydrocele is concentrated in a handful of centres. Migration compounds it, as clinicians and scientists trained in endemic countries often work where the salaries are. Building and retaining that workforce is unglamorous, slow and rarely funded as a distinct objective, yet elimination targets are unachievable without it.",
        asOf: "2026-09",
        scope: "Global, most acute in remote rural districts",
        blocked: "Diagnosis, surveillance, surgery and elimination verification — all of which depend on trained people rather than products.",
        why: "Health-worker shortages, migration of trained staff, vertical programmes that do not invest in career paths, and training that is funded project by project.",
        whatWouldUnlock:
          "Funded career paths and regional training hubs, task-shifting with proper supervision and remuneration, and retaining scientists in the countries where the diseases occur.",
        links: [
          { label: "WHO — NTD capacity building and workforce", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        diseases: ["noma", "trachoma", "schistosomiasis", "hat", "leishmaniasis", "mycetoma", "snakebite"],
        institutions: ["who", "tdr", "kemi", "ifakara", "icddrb", "lstm"],
        people: ["mwele-malecela"],
        terms: ["ntd", "elimination"],
        technologies: ["community-health-workers", "ai-microscopy"],
        stats: [
          { label: "Bottleneck examples", value: "Microscopists, entomologists, surgeons, bioinformaticians" },
        ],
      },
    ],
  },

  {
    kind: "terms",
    records: [
      {
        id: "cost-effectiveness",
        name: "Cost-effectiveness (dollars per DALY averted)",
        tldr: "The standard yardstick for whether an intervention is worth paying for: how much it costs to buy one healthy year of life.",
        summary:
          "Health economists compare interventions by their cost per disability-adjusted life year averted, usually benchmarked against a country's wealth — an intervention costing less than a country's annual GDP per person per healthy year gained is often called highly cost-effective. NTD interventions look extremely good by this measure: mass deworming and ivermectin distribution cost a few dollars or less per person treated, and the modelled cost per DALY averted is very low, which is the central argument for funding them. The weakness is the input: DALY estimates depend on burden figures that are often uncertain for neglected diseases, and a cost-effectiveness ratio is only as good as the burden estimate underneath it. Cost per case treated is easier to measure and harder to compare.",
        asOf: "2026-09",
        category: "Economics",
        aka: "cost per DALY averted, ICER",
        links: [
          { label: "WHO — NTD programme costs and cost-effectiveness", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        related: ["daly", "costs-and-financing", "ntd"],
        stats: [
          { label: "Why NTDs score well", value: "Few dollars per person treated" },
          { label: "The caveat", value: "Hidden denominators in DALY estimates" },
        ],
      },
      {
        id: "drug-donation-programme",
        name: "Drug donation programme",
        tldr: "The arrangement under which companies give NTD medicines free for as long as they are needed — the economic backbone of the field.",
        summary:
          "Because there is no market for an NTD medicine, several of the core treatments are donated outright rather than sold. Merck has given ivermectin free for river blindness and lymphatic filariasis since 1987; Pfizer donates azithromycin for trachoma through the International Trachoma Initiative and has extended the donation to 2030; GSK donates albendazole; Novartis donates triclabendazole; Eisai donates diethylcarbamazine; Johnson & Johnson donates mebendazole; and Novartis has donated multidrug therapy for leprosy. The model is why mass treatment campaigns are possible at all, and it is also a structural vulnerability: access depends on corporate decisions that can be revised, supply chains are single-sourced, and products that are not donated — antivenom, rabies immunoglobulin, liposomal amphotericin B — remain unaffordable where they are needed most.",
        asOf: "2026-09",
        category: "Economics",
        aka: "drug donation, donated medicines",
        links: [
          { label: "WHO — preventive chemotherapy and donated medicines", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        related: ["costs-and-financing", "access-and-pricing", "pdp"],
        stats: [
          { label: "Longest running", value: "Ivermectin, since 1987" },
          { label: "Scale", value: "> 1 billion azithromycin doses donated" },
        ],
      },
      {
        id: "neglected-populations",
        name: "Neglected populations within neglected diseases",
        tldr: "Even inside an NTD programme, some people are systematically missed — the displaced, the remote, the very young, pregnant women, and the poorest.",
        summary:
          "An NTD is neglected because the people it affects have no political or commercial voice; within that, some are missed even by programmes designed for them. Nomadic and displaced communities are hardest to reach on a fixed annual treatment schedule. Children under five were until recently excluded from schistosomiasis treatment and children under 15 kilograms from ivermectin. Pregnant women have been excluded from treatment research and often from treatment itself. People with disabilities, and those living in the poorest households or in informal settlements, face barriers of distance, cost and stigma. Mass treatment's central metric is coverage of the eligible population, and the eligible population is defined by who a programme can practically reach — which means the people most at risk are often the ones excluded from the denominator.",
        asOf: "2026-09",
        category: "Equity",
        links: [
          { label: "WHO — reaching populations in vulnerable situations", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        related: ["gender-and-access", "conflict-and-displacement", "mda", "stigma-and-disability"],
      },
      {
        id: "post-elimination-surveillance",
        name: "Post-elimination surveillance",
        tldr: "The years of looking after elimination is declared — which is when a programme is most fragile and least visible.",
        summary:
          "When a country reaches the elimination threshold, the work does not stop; it changes. Mass treatment ends, attention moves elsewhere, and the risk of resurgence rises, as the history of yaws in the 1970s and the resurgence of guinea worm in Burkina Faso both show. Post-elimination surveillance means continuing to test for infection in people and vectors after the visible disease has gone, investigating every new case to establish whether it is imported or locally transmitted, and being ready to respond — for lymphatic filariasis, trachoma, onchocerciasis, yaws and dracunculiasis alike. It is the least glamorous and least funded phase of a programme, needs diagnostics sensitive enough to certify an absence, and depends on political attention persisting after the disease has stopped being a visible problem.",
        asOf: "2026-09",
        category: "Programme",
        links: [
          { label: "WHO — NTD surveillance and elimination verification", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
        ],
        related: ["elimination", "eot", "surveillance-data-gap", "diagnostics-gap"],
        stats: [
          { label: "Historic failure", value: "Yaws resurged after the 1950s campaign ended" },
        ],
      },
    ],
  },
];
