import type { RecordOf } from "@/lib/schema";

export const guidelines: RecordOf<"guidelines">[] = [
  {
    id: "ntd-road-map-2021-2030",
    name: "WHO NTD road map 2021–2030",
    tldr: "The document that set the field's targets: what should be eliminated, eradicated or controlled by 2030, and how progress is measured.",
    summary:
      "The road map replaced the earlier, looser set of NTD goals with explicit and measurable 2030 targets across all 21 diseases: a set of diseases to be eradicated, a set to be eliminated as a public health problem, and a set to be controlled. It also set cross-cutting targets — integrated treatment, water and sanitation, and universal health coverage — and committed WHO to reporting against them. Almost every programme target described elsewhere in this corpus traces back to this document, and the target of 100 countries having eliminated at least one NTD comes from it.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "2021",
    status: "Current",
    scope: "All 21 neglected tropical diseases",
    recommendation:
      "Eradicate dracunculiasis and yaws; eliminate at least one NTD in 100 countries by 2030; eliminate trachoma, lymphatic filariasis and others as public health problems; control the helminthiases and other diseases by integrated, cross-cutting delivery.",
    whatChanged:
      "Replaced disease-by-disease goals with measurable 2030 targets and added cross-cutting commitments on integration, WASH and universal health coverage.",
    links: [
      { label: "WHO — ending the neglect to attain the SDGs: NTD road map 2021–2030", url: "https://www.who.int/publications/i/item/9789240010352" },
    ],
    diseases: ["dracunculiasis", "yaws", "trachoma", "lymphatic-filariasis", "schistosomiasis", "sth", "onchocerciasis", "leprosy"],
    institutions: ["who"],
    technologies: ["mass-drug-administration", "wash-interventions"],
    terms: ["ntd", "elimination", "eot", "mda"],
    stats: [
      { label: "Countries targeted", value: "100", note: "to have eliminated at least one NTD by 2030" },
      { label: "Horizon", value: "2021–2030" },
    ],
  },
  {
    id: "schisto-guideline-2022",
    name: "WHO guideline on control and elimination of human schistosomiasis (2022)",
    tldr: "The guideline that widened treatment to everyone over two, included pregnant women, and brought snail control back into elimination plans.",
    summary:
      "This guideline reset the programme parameters for schistosomiasis. Annual preventive chemotherapy is recommended where prevalence exceeds 10%, aiming for at least 75% coverage across all age groups from the age of two — a wider net than the earlier school-age focus, because adults are often the ones contaminating water. It recommends treating infected pregnant and lactating women, excluding the first trimester, and using the paediatric formulation for preschool children. Critically, it treats treatment as one part of a larger strategy, recommending water and sanitation and environmental interventions including focal snail control with molluscicides.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "February 2022",
    status: "Current",
    scope: "Schistosomiasis control and elimination",
    recommendation:
      "Annual mass praziquantel treatment where prevalence exceeds 10%, at ≥75% coverage of everyone aged 2 and over; treat infected pregnant and lactating women (excluding the first trimester); combine treatment with WASH and focal snail control.",
    whatChanged:
      "Extended treatment below school age and into pregnancy, raised the target age range, and formally reintroduced snail control and WASH as elimination components rather than optional extras.",
    links: [
      { label: "WHO — guideline on control and elimination of human schistosomiasis", url: "https://www.who.int/publications/i/item/9789240041608" },
    ],
    diseases: ["schistosomiasis"],
    drugs: ["praziquantel", "arpraziquantel"],
    institutions: ["who"],
    technologies: ["mass-drug-administration", "snail-control", "wash-interventions"],
    terms: ["preventive-chemotherapy", "mda", "wash", "fgs"],
    stats: [
      { label: "Treatment threshold", value: "> 10% prevalence" },
      { label: "Coverage target", value: "≥ 75%", note: "all age groups from 2 years" },
    ],
  },
  {
    id: "leishmaniasis-guideline-2026",
    name: "WHO leishmaniasis treatment guidelines update (2026)",
    tldr: "The update that retired antimony from the guidelines and replaced injections with oral treatment for visceral leishmaniasis in eastern Africa.",
    summary:
      "Issued in July 2026, this update made three substantive changes: alternative, shorter and safer treatment of primary visceral leishmaniasis in eastern Africa; new shorter and safer treatments for post-kala-azar dermal leishmaniasis in eastern Africa and South-East Asia; and guidance on managing relapse in immunocompetent visceral leishmaniasis patients in South-East Asia. For the first time WHO recommended regimens free of sodium stibogluconate, the toxic injected antimonial that had been the backbone of treatment for seventy years, replacing it with oral miltefosine. In South Asia, PKDL can now be treated with liposomal amphotericin B alone or combined with miltefosine. Most of the newly recommended regimens were developed by DNDi and partners.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "29 July 2026",
    status: "Current",
    scope: "Visceral leishmaniasis and post-kala-azar dermal leishmaniasis",
    recommendation:
      "Use SSG-free regimens for primary visceral leishmaniasis in eastern Africa, including oral miltefosine-based treatment; use shorter, safer regimens for PKDL in eastern Africa and South Asia; follow the new guidance on relapse in South-East Asia.",
    whatChanged:
      "First WHO recommendation of regimens free of sodium stibogluconate, and shorter treatments for PKDL — the skin condition that acts as a reservoir for transmission.",
    links: [
      { label: "WHO — updates treatment guidelines on visceral and post-kala-azar dermal leishmaniasis", url: "https://www.who.int/publications/i/item/9789240123298" },
    ],
    diseases: ["leishmaniasis"],
    drugs: ["antimonials", "miltefosine", "liposomal-amphotericin-b"],
    institutions: ["who", "dndi"],
    terms: ["pkdl", "elimination"],
    stats: [
      { label: "First SSG-free regimens", value: "Yes" },
      { label: "Regions covered", value: "Eastern Africa and South-East Asia" },
    ],
  },
  {
    id: "sth-schisto-guidance-2024",
    name: "WHO guidance to accelerate elimination of schistosomiasis and intestinal helminthiasis (2024)",
    tldr: "The 2024 guidance that shifted both programmes from control toward elimination as a public health problem.",
    summary:
      "Issued in October 2024, this guidance updated how schistosomiasis and soil-transmitted helminth programmes should be run as they move from reducing disease toward elimination as a public health problem. For intestinal helminths the 2030 target is defined by reducing the prevalence of moderate-to-heavy intensity infections below 2%, which changes what programmes measure: not whether children are infected at all, but how heavily. It also placed the two diseases in a single operational frame, since they are co-endemic and treated through the same delivery platforms.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "31 October 2024",
    status: "Current",
    scope: "Schistosomiasis and soil-transmitted helminthiases",
    recommendation:
      "Move from control to elimination as a public health problem, measured for intestinal helminths by reducing moderate-to-heavy intensity infection below 2%, and operationalise the two diseases together where they overlap.",
    whatChanged:
      "Defined elimination for soil-transmitted helminths by infection intensity rather than prevalence, and reframed the two programmes as a single integrated effort.",
    links: [
      { label: "WHO — new guidance to accelerate elimination of schistosomiasis and intestinal helminthiasis", url: "https://www.who.int/news/item/31-10-2024-new-guidance-to-accelerate-elimination-of-schistosomiasis-and-intestinal-helminthiasis" },
    ],
    diseases: ["schistosomiasis", "sth"],
    drugs: ["praziquantel", "albendazole", "mebendazole"],
    institutions: ["who"],
    technologies: ["mass-drug-administration", "wash-interventions"],
    terms: ["elimination", "eot", "mda", "preventive-chemotherapy"],
    stats: [
      { label: "Elimination threshold", value: "< 2%", note: "moderate-to-heavy intensity infection" },
    ],
  },
  {
    id: "strongyloidiasis-guideline-2024",
    name: "WHO guideline on public health control of human strongyloidiasis (2024)",
    tldr: "The first WHO guideline for a worm that the standard deworming programme does not detect and treats poorly.",
    summary:
      "Strongyloides stercoralis is transmitted like hookworm but can complete its life cycle inside a person, so infection can persist for decades, and when immunity is suppressed — particularly by corticosteroids — it can multiply into fatal hyperinfection. It is invisible to the stool tests used in deworming programmes and responds poorly to albendazole, which is why WHO added control of its morbidity as a 2030 objective and issued this guideline in August 2024. It is the clearest example of a worm that a mass treatment programme is effectively missing.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "2 August 2024",
    status: "Current",
    scope: "Public health control of Strongyloides stercoralis",
    recommendation:
      "Recognise strongyloidiasis as a target for public health control, use diagnostic methods that can actually detect it, and treat with ivermectin-based regimens rather than relying on the standard deworming drugs.",
    whatChanged:
      "Brought Strongyloides into the soil-transmitted helminth agenda with its own guidance, addressing a parasite the existing programme does not see.",
    links: [
      { label: "WHO — guideline on public health control of human strongyloidiasis", url: "https://www.who.int/news/item/02-08-2024-who-releases-guideline-on-public-health-control-of-human-strongyloidiasis" },
    ],
    diseases: ["sth"],
    drugs: ["ivermectin", "albendazole"],
    institutions: ["who"],
    terms: ["strongyloidiasis", "elimination"],
    bottlenecks: ["diagnostics-gap"],
    stats: [
      { label: "Diagnostic gap", value: "Missed by standard stool tests" },
      { label: "Key danger", value: "Hyperinfection on steroids" },
    ],
  },
  {
    id: "morges-strategy-2012",
    name: "The Morges strategy for yaws eradication",
    tldr: "The strategy that set out to eradicate yaws by treating whole communities with a single dose of azithromycin.",
    summary:
      "Agreed at a WHO meeting in Morges, Switzerland, in 2012, this strategy revived the goal of eradicating yaws using oral azithromycin rather than injected penicillin. It set out a two-phase approach: total community treatment, in which everyone in an endemic community is treated, followed by total targeted treatment, in which only cases and their contacts are treated as prevalence falls. The strategy is credible because azithromycin is a one-dose cure that can be given without injection by a community health worker — and vulnerable because the entire approach rests on that one antibiotic, to which resistance has since emerged.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "2012",
    status: "Current",
    scope: "Yaws eradication",
    recommendation:
      "Deliver total community treatment with single-dose azithromycin in endemic communities, then total targeted treatment of cases and contacts, with surveillance maintained until eradication is verified.",
    whatChanged:
      "Replaced injectable penicillin campaigns with oral azithromycin mass treatment, making community-wide treatment practical in remote settings.",
    links: [
      { label: "WHO — Morges strategy for yaws eradication (PDF)", url: "https://apps.who.int/iris/bitstream/handle/10665/75528/WHO_HTM_NTD_IDM_2012.2_eng.pdf" },
    ],
    diseases: ["yaws"],
    drugs: ["azithromycin", "benzathine-penicillin"],
    institutions: ["who"],
    technologies: ["total-community-treatment"],
    terms: ["elimination", "eot", "mda", "macrolide-resistance"],
    stats: [
      { label: "Target", value: "Eradication" },
      { label: "Core drug", value: "Single-dose azithromycin" },
    ],
  },
  {
    id: "rabies-position-paper-2018",
    name: "WHO rabies vaccines position paper (2018)",
    tldr: "The position paper that endorsed shorter, cheaper post-exposure regimens and made dose-sparing standard.",
    summary:
      "WHO's 2018 rabies position paper replaced the 2010 guidance and focused on programmatic feasibility, simplification and cost. It endorsed shorter intradermal vaccine regimens that use a fraction of the dose per patient, which means the same stock can treat several times as many bite victims — a change of real consequence in countries where vaccine supply and cost limit access. It also confirmed that, for severe exposures, rabies immunoglobulin should be infiltrated into the wound, and it remains the reference for national rabies protocols.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "April 2018",
    status: "Current",
    scope: "Rabies prevention, including pre- and post-exposure prophylaxis",
    recommendation:
      "Use shortened intradermal post-exposure regimens that reduce vaccine use per patient, infiltrate immunoglobulin into the wound for severe exposures, and integrate prophylaxis with dog vaccination.",
    whatChanged:
      "Endorsed dose-sparing intradermal regimens and shorter schedules, lowering the cost and vaccine volume needed to save a bite victim.",
    links: [
      { label: "WHO — rabies vaccines position paper, April 2018", url: "https://www.who.int/publications/i/item/who-wer9316" },
    ],
    diseases: ["rabies"],
    drugs: ["rabies-postexposure-prophylaxis"],
    institutions: ["who"],
    technologies: ["rabies-vaccination", "one-health-ntd-integration"],
    terms: ["one-health", "zoonosis", "elimination"],
    stats: [
      { label: "Key change", value: "Dose-sparing intradermal regimens" },
    ],
  },
  {
    id: "dengue-position-paper-2024",
    name: "WHO dengue vaccines position paper (May 2024)",
    tldr: "The position paper that narrowed dengue vaccination to children aged 6–16 in high-transmission settings only.",
    summary:
      "WHO's third dengue vaccine position paper, issued in May 2024, set out its position on TAK-003 (Qdenga). It recommends the vaccine for children aged 6 to 16 in settings with high dengue transmission intensity, as a two-dose schedule at least three months apart, and does not recommend programmatic use in children under six because of lower efficacy in that age group. It also declines to recommend it in low-to-moderate transmission settings until the efficacy-risk profile against DENV-3 and DENV-4 in people who have never had dengue has been better assessed. For travellers, it suggests an age range of 6 to 60.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "3 May 2024",
    status: "Current",
    scope: "Dengue vaccination",
    recommendation:
      "Consider introducing TAK-003 into routine immunisation in high-transmission settings for children aged 6–16, as two doses; do not use programmatically under 6 or in low-to-moderate transmission settings pending further data.",
    whatChanged:
      "Set a narrower age range and a transmission-intensity condition for the second licensed dengue vaccine, reflecting unresolved questions about seronegative recipients.",
    links: [
      { label: "WHO — position papers: dengue", url: "https://www.who.int/teams/immunization-vaccines-and-biologicals/policies/position-papers/dengue" },
    ],
    diseases: ["dengue-chikungunya"],
    institutions: ["who"],
    technologies: ["dengue-vaccination"],
    terms: ["vector-borne"],
    bottlenecks: ["vaccine-gap"],
    stats: [
      { label: "Age range", value: "6–16 years" },
      { label: "Doses", value: "2", note: "≥ 3 months apart" },
      { label: "Setting", value: "High transmission intensity only" },
    ],
  },
  {
    id: "vector-control-response-2017",
    name: "Global vector control response 2017–2030",
    tldr: "The strategy for controlling the insects, bugs and snails that transmit disease — and the document that named resistance as the central threat.",
    summary:
      "This WHO strategy set out to reduce the burden of vector-borne disease by strengthening vector control as a public health function: more entomological capacity, better surveillance, integrated methods rather than reliance on a single chemical, and community engagement. It is the framework behind the push for new insecticide classes, dual-ingredient bed nets and non-chemical methods such as sterile-insect release and Wolbachia, and behind the recognition that insecticide resistance is not a technical nuisance but a threat to the whole approach.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "2017",
    status: "Current",
    scope: "Vector control across all vector-borne diseases",
    recommendation:
      "Build vector-control capacity, monitor insecticide resistance, use integrated methods rather than a single intervention, and engage communities as partners in control.",
    whatChanged:
      "Moved vector control from a collection of products to a public health function with surveillance, capacity and integration at its centre.",
    links: [
      { label: "WHO — Global vector control response 2017–2030", url: "https://www.who.int/publications/i/item/9789241512978" },
    ],
    diseases: ["dengue-chikungunya", "lymphatic-filariasis", "chagas", "leishmaniasis", "hat", "onchocerciasis"],
    institutions: ["who", "ivcc"],
    technologies: ["insecticide-treated-nets", "indoor-residual-spraying", "gene-drive-mosquitoes", "sterile-insect-technique", "wolbachia-method"],
    terms: ["vector-borne", "insecticide-resistance"],
    stats: [
      { label: "Central threat", value: "Insecticide resistance" },
      { label: "Horizon", value: "2017–2030" },
    ],
  },
  {
    id: "snakebite-strategy-2019",
    name: "WHO snakebite envenoming strategy (2019)",
    tldr: "The strategy to halve deaths and disability from snakebite by 2030, and the plan to fix antivenom quality and supply.",
    summary:
      "Launched in 2019 with a budget of about US$136 million, this strategy set the goal of halving deaths and disability from snakebite envenoming by 2030. Its four pillars are to empower communities to prevent bites and seek care, to ensure safe and effective treatment, to strengthen health systems, and to increase the availability of safe, effective, affordable antivenoms. The last of these is why WHO built a prequalification and risk-assessment pathway for antivenoms — a response to the discovery that substandard and inappropriate products, including antivenoms raised against snake species from other continents, were being sold in regions where they cannot work.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "2019",
    status: "Current",
    scope: "Snakebite envenoming prevention, treatment and antivenom supply",
    recommendation:
      "Halve deaths and disability by 2030 through community empowerment, safe and effective treatment, stronger health systems, and a reliable supply of quality-assured antivenoms matched to local species.",
    whatChanged:
      "Created the first global framework for snakebite, including antivenom prequalification and a defined 2030 target.",
    links: [
      { label: "WHO — snakebite envenoming: a strategy for prevention and control", url: "https://www.who.int/publications/i/item/9789241515993" },
    ],
    diseases: ["snakebite"],
    drugs: ["snake-antivenom"],
    institutions: ["who"],
    technologies: ["recombinant-antivenoms"],
    terms: ["ntd"],
    bottlenecks: ["access-and-pricing"],
    stats: [
      { label: "Target", value: "Halve deaths and disability by 2030" },
      { label: "Budget", value: "≈ US$136 million" },
    ],
  },
  {
    id: "zero-leprosy-strategy",
    name: "Towards Zero Leprosy: global leprosy strategy 2021–2030",
    tldr: "The strategy aiming to interrupt leprosy transmission and eliminate the disease in most countries by 2030.",
    summary:
      "This strategy set leprosy's 2030 targets: interruption of transmission, elimination of the disease in most countries, and meaningful reductions in new cases and in grade-2 disability. It shifted the emphasis from counting and treating cases toward stopping transmission, which is why it is coupled with the scale-up of contact screening and single-dose rifampicin post-exposure prophylaxis, and with efforts to find cases earlier so that disability is prevented rather than managed. The plateau in global case numbers at around 200,000 a year is the measure it will be judged against.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "2021",
    status: "Current",
    scope: "Leprosy (Hansen's disease) elimination",
    recommendation:
      "Interrupt transmission, eliminate leprosy in most countries and reduce new cases and grade-2 disability, scaling contact screening and rifampicin prophylaxis alongside early case detection.",
    whatChanged:
      "Reframed the goal from treating detected cases to interrupting transmission, making prevention and early detection the priority.",
    links: [
      { label: "WHO — Towards zero leprosy: global leprosy strategy 2021–2030", url: "https://www.who.int/publications/i/item/9789240020221" },
    ],
    diseases: ["leprosy"],
    drugs: ["rifampicin", "dapsone", "clofazimine"],
    institutions: ["who", "gpzl"],
    technologies: ["mass-drug-administration"],
    terms: ["sdr-pep", "elimination", "eot", "stigma-and-disability"],
    stats: [
      { label: "Horizon", value: "2021–2030" },
      { label: "New cases a year", value: "≈ 200,000", note: "plateaued" },
    ],
  },
  {
    id: "mda-combinations-guideline",
    name: "WHO guideline on mass drug administration combinations",
    tldr: "Guidance on giving several NTD medicines together in one round, so that one campaign treats several diseases at once.",
    summary:
      "Co-administering medicines for different NTDs in a single mass treatment round saves money and reaches people who would otherwise need several visits. This guideline addresses the safety and effectiveness of combining regimens — in particular albendazole, diethylcarbamazine, ivermectin and azithromycin where lymphatic filariasis overlaps with trachoma or yaws. It formalises an approach programmes were already attempting: integrating campaigns so that one delivery apparatus addresses several diseases, provided the drug combinations are safe, acceptable and don't reduce each other's effectiveness.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "Consultation November 2024",
    status: "In development — draft guideline out for comment",
    scope: "Co-administration of drugs across multiple NTDs in mass treatment",
    recommendation:
      "Where diseases overlap, consider combining regimens — such as ivermectin, DEC, albendazole and azithromycin — where the safety and effectiveness evidence supports it.",
    whatChanged:
      "Extends WHO's existing recommendation on triple-drug therapy for lymphatic filariasis to multi-disease combinations involving azithromycin.",
    links: [
      { label: "WHO — guideline on mass drug administration combinations for NTDs (public consultation)", url: "https://www.who.int/news-room/articles-detail/public-notice-and-comment-process-on-who-guideline-on-mass-drug-administration-combinations-for-neglected-tropical-diseases-grc-23-10-1093" },
    ],
    diseases: ["lymphatic-filariasis", "trachoma", "yaws"],
    drugs: ["ivermectin", "diethylcarbamazine", "albendazole", "azithromycin"],
    institutions: ["who"],
    technologies: ["mass-drug-administration", "triple-drug-therapy-ida", "safe-strategy"],
    terms: ["mda", "preventive-chemotherapy"],
    stats: [
      { label: "Status", value: "Out for public comment" },
    ],
  },
  {
    id: "preventive-chemotherapy-guidance",
    name: "WHO preventive chemotherapy guidance",
    tldr: "The programme guidance behind the largest intervention in the NTD field: treating whole communities with donated medicines on a schedule.",
    summary:
      "Preventive chemotherapy is the strategy of treating at-risk populations on a fixed schedule for the five diseases that respond to the same small set of donated drugs — lymphatic filariasis, onchocerciasis, schistosomiasis, soil-transmitted helminthiases and trachoma. WHO's guidance covers how to map who needs treatment, how often to treat, what coverage to aim for (at least 65% of the eligible population, and higher targets in many programmes), and how to integrate the campaigns. It is the operational backbone of the field, and its reliance on donated medicines is both its great strength and its structural vulnerability.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "Continuously updated programme guidance",
    status: "Current",
    scope: "Preventive chemotherapy for the five PC-NTDs",
    recommendation:
      "Treat at-risk populations on a fixed schedule with donated medicines, targeting at least 65% coverage of the eligible population and integrating campaigns across co-endemic diseases.",
    whatChanged:
      "Consolidated the previously separate campaigns into a single delivery model based on shared drugs, mapping and coverage monitoring.",
    links: [
      { label: "WHO — preventive chemotherapy", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases" },
    ],
    diseases: ["lymphatic-filariasis", "onchocerciasis", "schistosomiasis", "sth", "trachoma"],
    drugs: ["ivermectin", "albendazole", "mebendazole", "praziquantel", "azithromycin", "diethylcarbamazine"],
    institutions: ["who", "ntd-support-center"],
    technologies: ["mass-drug-administration"],
    terms: ["preventive-chemotherapy", "mda", "elimination"],
    stats: [
      { label: "Coverage target", value: "≥ 65%, often higher" },
      { label: "Drugs", value: "Donated" },
    ],
  },
  {
    id: "trachoma-elimination-guidance",
    name: "WHO trachoma elimination guidance and the SAFE strategy",
    tldr: "The framework that pairs surgery, antibiotics, face-washing and sanitation to eliminate the leading infectious cause of blindness.",
    summary:
      "WHO's trachoma guidance is built on the SAFE strategy — surgery for trichiasis, antibiotics to reduce community infection, facial cleanliness and environmental improvement — and on standardised clinical grading through the WHO simplified system, which allows comparable prevalence surveys across countries. Validation of elimination as a public health problem requires prevalence to fall below defined thresholds and the evidence to survive review. The guidance is the reason trachoma has become the NTD programme closest to finishing, and its weakness is the same as its strength: mass azithromycin applies selection pressure that programmes have to weigh against the speed of elimination.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "Continuously updated; SAFE framework since 1998",
    status: "Current",
    scope: "Trachoma control and elimination",
    recommendation:
      "Deliver the SAFE strategy, grade and map prevalence with the WHO simplified system, and validate elimination where prevalence falls below the defined thresholds.",
    whatChanged:
      "Brought surgery, antibiotics, hygiene and sanitation into a single strategy and provided standardised grading that made global comparison possible.",
    links: [
      { label: "WHO — trachoma (guidance summary)", url: "https://www.who.int/news-room/fact-sheets/detail/trachoma" },
    ],
    diseases: ["trachoma"],
    drugs: ["azithromycin"],
    institutions: ["who", "iti", "ictc"],
    technologies: ["safe-strategy", "mass-drug-administration"],
    terms: ["trichiasis", "elimination", "eot", "mda", "wash"],
    stats: [
      { label: "Framework", value: "SAFE" },
      { label: "Countries validated", value: "27", note: "reported January 2026" },
    ],
  },
  {
    id: "buruli-ulcer-treatment-guidance",
    name: "WHO Buruli ulcer treatment guidance",
    tldr: "The guidance that replaced surgery with an eight-week course of rifampicin and clarithromycin — and now seeks to shorten it.",
    summary:
      "For decades surgery was the only treatment for Buruli ulcer, with wide excision and skin grafting. WHO's guidance changed that by recommending fully oral rifampicin plus clarithromycin for eight weeks, which cures most lesions and reserves surgery for complications such as contractures. It also set the research priorities the field is now pursuing: how the disease is transmitted, a point-of-care test for early diagnosis, and new regimens that shorten treatment. The last of these is why telacebec, a tuberculosis drug with exceptional potency against the organism, is now in a Phase 2 trial.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "All-oral regimen recommended 2017; guidance continuously updated",
    status: "Current",
    scope: "Buruli ulcer treatment and research priorities",
    recommendation:
      "Treat with eight weeks of oral rifampicin and clarithromycin, reserving surgery for complications; pursue early diagnosis and shorter regimens as research priorities.",
    whatChanged:
      "Replaced injectable streptomycin and surgery-first care with an all-oral regimen that cures most lesions.",
    links: [
      { label: "WHO — Buruli ulcer (guidance summary)", url: "https://www.who.int/news-room/fact-sheets/detail/buruli-ulcer" },
    ],
    diseases: ["buruli-ulcer"],
    drugs: ["rifampicin", "clofazimine", "telacebec"],
    institutions: ["who", "tb-alliance"],
    technologies: ["drug-repurposing", "early-warning-hotspots"],
    terms: [],
    bottlenecks: ["diagnostics-gap", "stigma-and-disability"],
    stats: [
      { label: "Standard regimen", value: "8 weeks, all oral" },
      { label: "Research priority", value: "Shorter treatment" },
    ],
  },
  {
    id: "echinococcosis-control-guidance",
    name: "WHO echinococcosis prevention and control guidance",
    tldr: "The guidance whose core interventions are veterinary: deworm dogs, vaccinate sheep, and improve slaughter hygiene.",
    summary:
      "WHO's guidance for cystic echinococcosis is unusual among NTD recommendations because its main levers are animal-side. It recommends deworming dogs with praziquantel at least four times a year, improving slaughter hygiene so that dogs cannot eat infected organs, public education, and vaccinating lambs with the EG95 vaccine. WHO's assessment is that a programme combining lamb vaccination, dog deworming and culling of older sheep could eliminate human cystic echinococcosis in under ten years. For alveolar echinococcosis, which cycles through foxes and rodents, the interventions are different and harder, and surveillance depends on veterinary detection.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "Continuously updated",
    status: "Current",
    scope: "Cystic and alveolar echinococcosis prevention and control",
    recommendation:
      "Deworm dogs at least four times a year, vaccinate lambs with EG95, improve slaughter hygiene and educate communities; for alveolar disease, manage the fox and rodent cycle.",
    whatChanged:
      "Elevated the EG95 sheep vaccine and repeated dog deworming into a package that could plausibly eliminate cystic echinococcosis in under a decade.",
    links: [
      { label: "WHO — echinococcosis (guidance summary)", url: "https://www.who.int/news-room/fact-sheets/detail/echinococcosis" },
    ],
    diseases: ["echinococcosis"],
    drugs: ["albendazole", "praziquantel"],
    institutions: ["who", "woah"],
    technologies: ["eg95-sheep-vaccine", "one-health-ntd-integration", "pair"],
    terms: ["zoonosis", "one-health", "alveolar-echinococcosis"],
    stats: [
      { label: "Dog deworming", value: "≥ 4 times a year" },
      { label: "Elimination horizon", value: "< 10 years", note: "with the full animal-side package" },
    ],
  },
  {
    id: "taenia-solium-one-health-guidance",
    name: "WHO guidance on Taenia solium control through a One Health approach",
    tldr: "The guidance that treats a human brain disease as an animal-health problem: vaccinate and treat the pigs.",
    summary:
      "WHO's guidance on Taenia solium places the animal side of the cycle at the centre of control. It names vaccination of pigs with the TSOL18 vaccine (Cysvax) and treatment with oxfendazole among the specific interventions, alongside human treatment, meat inspection and sanitation. The logic is that pigs are the intermediate host, so preventing cysts in pigs removes both the human tapeworm cases and the egg contamination that causes neurocysticercosis. It is the clearest example of guidance that requires ministries of health and agriculture to work together, and of why that coordination is so often the binding constraint.",
    asOf: "2026-09",
    issuer: "WHO",
    issued: "Continuously updated",
    status: "Current",
    scope: "Taenia solium taeniasis and cysticercosis control",
    recommendation:
      "Use a One Health package: vaccinate pigs with TSOL18, treat them with oxfendazole, treat human tapeworm carriers, inspect meat and improve sanitation.",
    whatChanged:
      "Formalised pig vaccination and treatment as core control measures rather than research interventions.",
    links: [
      { label: "WHO — taeniasis/cysticercosis (guidance summary)", url: "https://www.who.int/news-room/fact-sheets/detail/taeniasis-cysticercosis" },
    ],
    diseases: ["taeniasis-cysticercosis"],
    drugs: ["albendazole", "praziquantel", "oxfendazole"],
    institutions: ["who", "galvmed", "woah"],
    technologies: ["tsol18-vaccine", "one-health-ntd-integration", "wash-interventions"],
    terms: ["zoonosis", "one-health"],
    stats: [
      { label: "Core animal measures", value: "Vaccinate and treat pigs" },
      { label: "Vaccine", value: "TSOL18 (Cysvax)" },
    ],
  },
];
