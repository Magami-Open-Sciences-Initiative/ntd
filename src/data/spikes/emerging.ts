import type { Spike } from "../merge";

/**
 * Deep dives for the adjacent diseases added in the emerging-diseases review:
 * malaria, tuberculosis, Ebola, Zika and podoconiosis.
 */
export const EMERGING_SPIKES: Record<string, Spike> = {
  malaria: {
    sections: [
      {
        id: "stalled",
        title: "The century of progress that stalled",
        body:
          "Malaria control has known how to work for twenty-five years, and it did. Between 2000 and 2015, insecticide-treated nets, indoor residual spraying, rapid diagnostic tests and artemisinin-based combination therapy cut cases and deaths by roughly half, with most of the gain in sub-Saharan Africa. The tools were cheap, the delivery was systematic, and the funding rose.\n\nThen progress stopped. Deaths have plateaued and in some countries risen, and the reasons are not mysterious: funding per person at risk has flattened or fallen, insecticide resistance has made nets less lethal, artemisinin partial resistance has appeared in East Africa, and the countries with the largest burden — Nigeria, the Democratic Republic of the Congo and their neighbours — combine high transmission with weak health systems. Malaria is no longer a story of a disease being beaten; it is a story of a stalemate that depends on money and resistance.",
        refs: ["the-global-fund", "insecticide-resistance-crisis", "antimalarial-resistance", "funding-gap"],
      },
      {
        id: "resistances",
        title: "Two resistances closing in at once",
        body:
          "Malaria stands on two drugs and two chemicals, and both are weakening simultaneously. Artemisinin partial resistance — where the parasite clears more slowly rather than surviving outright — emerged in the Greater Mekong subregion and is now established in East Africa, marked by kelch13 mutations. Because artemisinins are always paired with a partner drug, slower clearance exposes the partner alone and can drag the whole combination down.\n\nIn the same places, Anopheles mosquitoes are surviving the pyrethroids used on nets and in spraying, and because the same class is used in both, there is almost nothing to rotate to. New antimalarial mechanisms such as PfATP4 inhibitors, new insecticide classes and dual-ingredient nets are the answers in development, but they arrive into a field whose funding is not growing.",
        refs: ["pfkelch13", "pfatp4", "insecticide-treated-nets", "anopheles-mosquito", "artemisinin-resistance"],
      },
      {
        id: "vaccines",
        title: "The vaccine that was called impossible",
        body:
          "For decades a malaria vaccine was considered impractical — the parasite has more than five thousand genes and a life cycle that presents different antigens at every stage. RTS,S/AS01 took thirty years to develop and protects partially: roughly a third to a half reduction in clinical malaria in young children. WHO recommended it in 2021 after a pilot in Ghana, Kenya and Malawi showed it could be delivered through routine immunisation without harming uptake of other vaccines.\n\nR21/Matrix-M, recommended in 2023, offers comparable protection with far greater manufacturing capacity and lower cost, which is what makes wide rollout realistic. Neither vaccine eliminates malaria, and both require a booster. What they change is the arithmetic: a partially effective vaccine added to nets, spraying and treatment reduces deaths across a whole birth cohort, and it is the first genuinely new tool the field has had in two decades.",
        refs: ["malaria-vaccines", "rts-s-malaria-pilot", "r21-matrix-m"],
      },
      {
        id: "chemoprevention",
        title: "Chemoprevention, and the NTD parallel",
        body:
          "Seasonal malaria chemoprevention gives monthly antimalarials to children through the transmission season in the Sahel, treating them whether or not they are infected. It is preventive chemotherapy in everything but name — the same logic that NTD programmes use for schistosomiasis and soil-transmitted helminths, delivered by the same community health workers to the same households on a comparable schedule.\n\nThe two programmes usually run separately, which duplicates every visit, every supply chain and every payment. Combining them is one of the field's most obvious efficiencies: a single community visit could deliver deworming, filariasis treatment and malaria chemoprevention together. The obstacle is not science but programme architecture — separate funders, separate targets and separate accountability.",
        refs: ["seasonal-malaria-chemoprevention", "mass-drug-administration", "integrate-ntd-malaria-campaigns"],
      },
      {
        id: "elimination",
        title: "Elimination is real, and it is not the norm",
        body:
          "Malaria has been eliminated from many countries, and WHO certifies them: Sri Lanka, Paraguay, Uzbekistan, China, El Salvador, Cabo Verde, Belize and Egypt among them. Each certification requires years of surveillance proving that local transmission has stopped, and several of those countries sit next to endemic neighbours, which makes the achievement fragile as well as real.\n\nWhat distinguishes them is not wealth alone but the combination of a health system able to find every case, a laboratory network able to confirm it, and the political attention to keep looking after cases stop. That is the same set of requirements NTD elimination faces, and the same reason the last mile is the hardest: it depends on capabilities rather than on tools.",
        refs: ["elimination", "eot", "surveillance-data-gap", "post-elimination-surveillance"],
      },
    ],
  },

  tuberculosis: {
    sections: [
      {
        id: "reversal",
        title: "The reversal after the pandemic",
        body:
          "Tuberculosis was the world's leading infectious killer before COVID-19 and has resumed that position. The pandemic disrupted diagnosis and treatment almost everywhere: fewer people tested, fewer diagnosed, fewer treated, and therefore more transmission and more deaths. WHO's global reports have documented cases rising again after years of slow decline, with the largest gaps in the countries that already carried the highest burden.\n\nThe reason this matters so much is that tuberculosis is curable, and the gap is entirely one of delivery. Millions of people who develop the disease each year are never diagnosed, and of those who are, many are treated with regimens that are too long for them to complete. The field's problem is not a missing cure — it is a health system that loses people at every step.",
        refs: ["who-tb-report", "funding-gap", "surveillance-data-gap"],
      },
      {
        id: "resistance",
        title: "Drug resistance and the six-month cure",
        body:
          "Multidrug-resistant tuberculosis is a man-made epidemic. It is generated when treatment is interrupted, drugs run out, or regimens are inadequate, which means it is produced by weak health systems rather than by biology alone. Around 400,000 people develop it each year and the great majority are never tested for resistance, so they receive drugs that will not cure them and continue to transmit resistant infection.\n\nUntil recently, treating it meant up to two years of therapy including injectable drugs with severe toxicity. The BPaLM regimen — bedaquiline, pretomanid, linezolid and moxifloxacin, all oral, six months — changed that, and PRACTECAL produced the evidence. It is one of the fastest translations of a trial into global policy in tuberculosis, and it came from a non-profit developer and a humanitarian organisation working where the market had no interest.",
        refs: ["mdr-tb", "drug-resistant-tb", "pretomanid", "bedaquiline", "linezolid", "tb-practecal"],
      },
      {
        id: "diagnostics",
        title: "Diagnosis, and the people it misses",
        body:
          "Molecular cartridge testing made same-day diagnosis and rifampicin-resistance detection routine, which transformed treatment. But it is less sensitive in children, who produce few bacteria in sputum and cannot always produce a sample at all, and in people with HIV, in whom disease is often paucibacillary and extrapulmonary. Those two groups are precisely the ones at highest risk of dying undiagnosed.\n\nThe result is a persistent gap between the number of people WHO estimates develop tuberculosis each year and the number actually notified to programmes — a gap of millions. Every undiagnosed person is untreated, infectious, and outside the system, which is why new diagnostics for children and for people with HIV are among the field's most urgent needs.",
        refs: ["xpert-mtb-rif", "diagnostics-gap", "molecular-pcr", "sensitivity-specificity"],
      },
      {
        id: "latent",
        title: "A quarter of the world carries it",
        body:
          "Most people infected with Mycobacterium tuberculosis never become ill: the immune system contains the infection, leaving latent infection that can reactivate decades later. Roughly a quarter of the world's population is estimated to carry it, and about a tenth of those will develop active disease, with the risk far higher in people with HIV, diabetes, malnutrition or immunosuppressive treatment.\n\nPreventive treatment gives one or two drugs for one to six months to the people at highest risk, and shorter rifamycin-based regimens have made it far more practical than the old nine-month course. It is the closest thing tuberculosis has to an elimination strategy, and it is under-used almost everywhere relative to need.",
        refs: ["tb-preventive-treatment", "isoniazid", "rifampicin", "tuberculin-skin-test"],
      },
      {
        id: "vaccines",
        title: "A vaccine after a century",
        body:
          "BCG is given to around a hundred million infants a year and reliably protects them against disseminated tuberculosis and meningitis. Its protection against pulmonary disease in adults is variable and wanes, and it has never been enough to control the epidemic. It is also a century old.\n\nThe M72/AS01E candidate is the first in decades to show a real signal: roughly 50% protection against progression from latent infection to active pulmonary disease in a phase 2b trial, with a confirmatory phase 3 under way. If it holds, it would be used alongside preventive treatment rather than replacing it, and it would be the first new tuberculosis vaccine since BCG — a gap that explains why the field treats a partially effective candidate as major news.",
        refs: ["bcg-vaccine", "m72-as01e-trial", "vaccine-gap"],
      },
    ],
  },

  ebola: {
    sections: [
      {
        id: "how-outbreak-ends",
        title: "How an outbreak actually ends",
        body:
          "Ebola outbreaks end the same way every time, and it is not through a drug. They end when every case is found and isolated, every contact is traced and monitored for twenty-one days, every unsafe burial is prevented, and everyone at risk is vaccinated. The 2014–2016 West African outbreak took two years to control, and it was controlled by those measures applied at enormous scale, not by treatment.\n\nThat makes Ebola a test of health-system capability rather than of pharmacology. It requires laboratories that can confirm cases quickly, contact tracers who can find people in remote areas, health workers who do not become infected, and communities that trust the response enough to report cases and accept safe burials instead of traditional ones. Every one of those is a human and organisational requirement, and each can fail independently.",
        refs: ["ring-vaccination", "community-health-workers", "outbreak-response", "mhealth-surveillance"],
      },
      {
        id: "treatments",
        title: "The treatments that changed the outcome",
        body:
          "For most of its history, Ebola treatment was supportive care, and the case fatality rate reflected it. That changed during the 2018–2020 outbreak in the Democratic Republic of the Congo, when the PALM randomised trial compared four investigational treatments and found that two monoclonal antibody products reduced mortality substantially. The trial was stopped early so that all patients could receive the better arms.\n\nIt was the first time any treatment had been shown to change the outcome of Ebola, and it happened in an active outbreak zone with armed conflict. Ansuvimab and the antibody cocktail are now licensed, which makes Ebola one of the very few haemorrhagic fevers with specific therapy — and a demonstration that trials can be run during an epidemic rather than after it.",
        refs: ["ansuvimab", "palme-ebola-trial", "ebola-glycoprotein"],
      },
      {
        id: "vaccines",
        title: "The vaccine story, and why it worked",
        body:
          "The 2015 ring vaccination trial in Guinea was the moment Ebola response changed. Rather than vaccinating whole populations, it vaccinated the contacts of each new case and their contacts, creating an immune ring around every infection, and it was designed so that efficacy could be estimated from cases occurring before the vaccine took effect. The result was decisive, and the vaccine was licensed in 2019.\n\nDuring the 2018–2020 DRC outbreak more than 300,000 people were vaccinated, and ring vaccination with a licensed vaccine is now standard response. The achievement is also an institutional one: CEPI was created specifically so that vaccines for epidemic threats could be developed before they were needed, and Ebola is the case where that model was vindicated.",
        refs: ["ebola-vaccines", "ring-vaccination", "ebola-ring-vaccination-trial", "cepi"],
      },
      {
        id: "conflict-trust",
        title: "Conflict, trust and the limits of response",
        body:
          "The 2018–2020 outbreak in the Democratic Republic of the Congo was the second largest ever and occurred in an active conflict zone, in communities with a long history of neglect and with reason to distrust outside responders. Treatment centres were attacked, health workers were killed, and some families hid illness or refused vaccination. The response succeeded anyway, but more slowly and at greater cost than it should have.\n\nThat experience is the clearest lesson in this corpus about outbreak response: a vaccine, a diagnostic and a treatment are necessary and not sufficient. What determines whether an outbreak is contained in weeks or years is whether people trust the system enough to use it — which is built before the outbreak, not during it.",
        refs: ["conflict-and-displacement", "outbreak-response", "community-health-workers", "msf"],
      },
      {
        id: "spillover",
        title: "Spillover, and the One Health question",
        body:
          "Ebola outbreaks begin with spillover from animals to people, and fruit bats are implicated as the reservoir, though the precise ecology is not fully understood for every virus species. Human index cases have been linked to contact with infected wildlife, including bushmeat, and to handling of bat-contaminated fruit. Each outbreak is therefore the visible end of an event that happened at the human–animal interface.\n\nThe implication is uncomfortable: outbreaks can be reduced but not eliminated by better surveillance of human disease alone, because the events that start them occur in wildlife. Predicting and preventing spillover requires ecological surveillance, community engagement around hunting and butchering practices, and the same One Health coordination that the zoonotic NTDs demand — with the difference that here the consequence can be an international epidemic.",
        refs: ["one-health", "zoonosis", "outbreak-response", "cepi"],
      },
    ],
  },

  zika: {
    sections: [
      {
        id: "discovery",
        title: "A mild virus with a devastating consequence",
        body:
          "Zika was known for seventy years as a curiosity: a flavivirus discovered in a Ugandan forest in 1947 that caused a mild rash and fever in a handful of people and was not considered dangerous. It spread across the Pacific after 2007 and reached Brazil in 2015, where it infected an estimated hundreds of thousands of people in a few months — and where clinicians in the northeast noticed a surge in babies born with unusually small heads.\n\nThe link was made by counting, not by laboratory work: paediatricians and birth-defect registries saw a signal that surveillance systems elsewhere had missed. By the time WHO declared a Public Health Emergency of International Concern in February 2016, congenital Zika syndrome was being characterised and the epidemic had already moved through the Americas. It is the clearest recent example of a disease whose danger was invisible until someone counted carefully.",
        refs: ["congenital-zika-syndrome", "paho", "surveillance-data-gap"],
      },
      {
        id: "emergency",
        title: "What the emergency did and did not achieve",
        body:
          "The 2016 emergency mobilised research unusually fast: vaccine candidates entered clinical trials within a year, diagnostic tests were developed and distributed, and birth-defect surveillance was strengthened across the Americas. It also exposed how little was known about a virus that had been described seven decades earlier — its sexual transmission, its persistence in body fluids, and the full range of its congenital effects were all established during the emergency itself.\n\nWhen the emergency ended in November 2016, attention moved on, and that is the pattern that matters. Vaccine development stalled without a market or a sustained epidemic to justify late-stage trials; surveillance weakened; and the virus remains in circulation with no licensed vaccine, no antiviral, and a diagnostic that only works in a narrow window. A Public Health Emergency of International Concern is a powerful instrument for raising alarm and a poor one for finishing anything.",
        refs: ["outbreak-response", "vaccine-gap", "diagnostics-gap", "paho"],
      },
      {
        id: "diagnosis",
        title: "Diagnosis: a narrow window and a cross-reaction",
        body:
          "Zika is confirmed by PCR, and only during the week or so when the virus is detectable in blood or urine. After that, the test is serology — and serology cannot reliably distinguish Zika from dengue, because the flaviviruses are closely related and antibodies cross-react. The difficulty is greatest exactly where it matters most: in the tropical cities where both viruses circulate and where a pregnant woman with a rash needs to know which one she has.\n\nThis has a direct consequence for prevention. Because diagnosis is unreliable after the acute phase, surveillance under-counts infections, congenital cases are attributed to the wrong cause, and the true burden remains uncertain. A reliable, field-deployable test that distinguished the flaviviruses would change the epidemiology of the disease — and none exists.",
        refs: ["zika-rt-pcr", "sensitivity-specificity", "diagnostics-gap", "congenital-zika-syndrome"],
      },
      {
        id: "vector",
        title: "The same mosquito, and the same problem",
        body:
          "Zika is transmitted by Aedes aegypti and Aedes albopictus — the same day-biting, container-breeding mosquitoes that carry dengue and chikungunya. That means every control method used against dengue applies, and every limitation applies too: bed nets are useless against a mosquito that bites in daylight, house spraying reaches only part of the population, and source reduction depends on households emptying water containers continuously.\n\nIt also means the newer tools developed for dengue are directly relevant. Wolbachia-infected mosquitoes, which block flavivirus transmission and spread through the wild population, reduce Zika as well as dengue and chikungunya, and the World Mosquito Program's city-scale results are the strongest evidence available for any intervention against these viruses. Zika has no vaccine; its vector control is therefore inherited from its relatives.",
        refs: ["aedes-aegypti", "wolbachia-method", "vector-surveillance", "world-mosquito-program"],
      },
      {
        id: "after",
        title: "What remains, and who is still affected",
        body:
          "The epidemic receded, the emergency ended, and the children are still there. Congenital Zika syndrome produces microcephaly, brain malformation, seizures, feeding difficulties, hearing and vision problems and developmental disability, and the children affected in 2015–2016 need years of therapy, special education and medical care. Their families carry the cost, often in poor regions of Brazil and elsewhere in the Americas with limited rehabilitation services.\n\nThat is the part of a congenital epidemic that no emergency declaration addresses. The acute event generates headlines and funding; the lifetime of care that follows is invisible to the same mechanisms. It is the same asymmetry that runs through this corpus — the intervention that prevents a case is funded, the disability that results is not — and Zika gives it a face.",
        refs: ["congenital-zika-syndrome", "stigma-and-disability", "neglected-populations", "daly"],
      },
    ],
  },

  podoconiosis: {
    sections: [
      {
        id: "soil",
        title: "A disease of soil, not infection",
        body:
          "For most of the twentieth century, people in the Ethiopian highlands with hugely swollen legs were assumed to have lymphatic filariasis, and treated as such. In the 1970s Ernest Price established that the disease occurred in highland areas where filariasis was absent, that it affected whole families and communities living on particular soils, and that it was not infectious. The cause is microscopic mineral particles — mostly silica, aluminium and iron — from red clay soils derived from volcanic rock, which penetrate the skin of bare feet and are carried to the lymph nodes, where they provoke chronic inflammation and eventually block the lymphatics.\n\nThat makes podoconiosis a geochemical disease with an environmental distribution. It clusters on specific soil types at altitude, in communities that farm barefoot, and it does not spread from person to person. Its cause was identified by a doctor asking why the disease appeared where it did and not elsewhere — a reminder that mapping a disease is sometimes the whole of the epidemiology.",
        refs: ["wash", "neglected-populations"],
      },
      {
        id: "missing",
        title: "Why it is missing from the list",
        body:
          "WHO recognised podoconiosis as a neglected condition in 2011 but has never added it to the NTD list, and the consequence is concrete: no global reporting, no dedicated funding stream, no inclusion in mass treatment campaigns, and prevalence estimates that still rest on a small number of field surveys rather than a national count. The commonly cited figure of four million people affected is an estimate from partial data.\n\nThe reason is partly definitional. The NTD list is largely a list of infectious diseases, and podoconiosis is not infectious, which makes it awkward to place in programmes built around drugs and vectors. But the practical effect is that a disease that is entirely preventable with shoes, affects millions, and is concentrated in the same poor highland communities as the diseases that are listed, has no mechanism to be counted or funded — the clearest demonstration in this corpus that being on the list is itself an intervention.",
        refs: ["funding-gap", "surveillance-data-gap", "neglected-populations"],
      },
      {
        id: "treatment",
        title: "Treatment that works and is not a drug",
        body:
          "There is no medicine for podoconiosis, and the treatment is a package of physical care: daily washing with soap and water, soaking, emollients, elevation, compression bandaging, and prompt treatment of the secondary bacterial and fungal infections that drive the painful acute attacks. Delivered consistently, this reduces swelling, cuts the frequency of acute episodes, and restores people to work and school.\n\nWhat makes it notable is that it has been delivered at scale by community members rather than clinicians. Community-based treatment programmes in Ethiopia have trained local people to provide the package, which means the constraint is training and supplies rather than doctors. The disease also has a strange asymmetry in its favour: treatment is cheap and effective, and established swelling is not fully reversible, so the case for early detection is as strong here as in any NTD.",
        refs: ["foot-hygiene-and-bandaging", "community-health-workers", "wash-interventions"],
      },
      {
        id: "shoes",
        title: "Prevention is a pair of shoes",
        body:
          "Because the cause is soil contact through the skin of the feet, prevention is footwear — consistently worn, properly fitted, and affordable to people who may own one pair of shoes between several family members. Programmes have distributed shoes alongside education, and the evidence is that footwear prevents the disease and slows its progression in people already affected.\n\nThe obstacles are behavioural and economic rather than scientific. Shoes wear out and must be replaced; children outgrow them; farming barefoot is often practical; and in some communities footwear carries social meaning. This is why podoconiosis is treated as a development problem: it is a disease whose cure exists, costs little, and is not delivered because the people who need it are poor and uncounted.",
        refs: ["foot-hygiene-and-bandaging", "costs-and-financing", "wash"],
      },
      {
        id: "stigma",
        title: "Stigma, gender and the economics of a swollen leg",
        body:
          "Visible, disabling swelling carries a social cost that is as severe as the physical one. In affected communities podoconiosis is associated with witchcraft and impurity, and people with the disease report exclusion from marriage, from church and mosque, from school and from employment. Women bear the heaviest burden, because a disfiguring condition in a woman is read as a family failing, and because care work falls to them.\n\nThe economic consequence is measurable: affected people work fewer days, children are withdrawn from school, and families spend on traditional healers and ineffective treatment before reaching care. It is the same pattern the corpus documents for leprosy, lymphatic filariasis and noma — the infection is treatable, the disability is preventable, and the poverty and stigma that follow are what make the disease matter. Podoconiosis simply adds the observation that the same is true of a disease with no infectious agent at all.",
        refs: ["stigma-and-disability", "daly", "neglected-populations", "costs-and-financing"],
      },
    ],
  },
};
