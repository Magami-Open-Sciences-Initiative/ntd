import type { Spike } from "./merge";

/**
 * Prose deep dives for the drug records, so a treatment page carries the same
 * kind of substance as a disease page. Each entry adds one or two focused
 * sections plus, where useful, extra figures or history.
 */
export const DRUG_DEEPDIVES: Record<string, Spike> = {
  praziquantel: {
    sections: [
      {
        id: "one-drug",
        title: "One drug carrying 200 million people",
        body:
          "Praziquantel is the only medicine used at scale against schistosomiasis anywhere in the world. A single oral dose cures most infections, it costs a few cents, and it has been on the WHO essential medicines list for decades — which is why a programme treating a quarter of a billion people a year depends on it entirely.\n\nA single point of failure is a recognised risk in drug programmes, and this one is unusual because it is a monopoly not by patent but by adequacy: praziquantel works well enough and costs little enough that nothing has replaced it. Reduced efficacy has been reported in some settings, and the drug is also the mainstay for tapeworm infections, so the stakes extend beyond schistosomiasis.",
      },
      {
        id: "target",
        title: "The target finally identified",
        body:
          "For forty years after praziquantel entered use, nobody knew how it worked. In 2020 researchers traced its action to a schistosome transient receptor potential (TRP) ion channel: the drug opens the channel, calcium floods into the worm, and the worm contracts and dies. Naming the target matters because it makes rational design of a second drug possible for the first time — and because it explains why praziquantel works poorly against immature worms, which is one reason reinfection is so hard to prevent.",
      },
    ],
  },
  oxamniquine: {
    sections: [
      {
        id: "disappeared",
        title: "Why a working drug disappeared",
        body:
          "Oxamniquine treated Schistosoma mansoni and worked, but only against that one species, and it required a parasite enzyme to activate it, so susceptibility varied between strains. When praziquantel arrived covering all three main species in a single dose, oxamniquine was simply dropped. It is now largely unavailable, which is a small illustration of how thin the treatment pipeline is: the alternative to the one drug in use has already been retired.",
      },
    ],
  },
  triclabendazole: {
    sections: [
      {
        id: "resistance",
        title: "The resistance problem",
        body:
          "Triclabendazole is the only recommended medicine for human fascioliasis, and it is losing potency. Decades of intensive use in livestock selected for resistant Fasciola in sheep and cattle, and human infections now show reduced cure rates — particularly after a single dose, with juvenile flukes intrinsically less susceptible than adults. Cohorts in highland Peru and the Bolivian Altiplano have reported cure rates well below what earlier studies found.\n\nThere is no established alternative. Nitazoxanide, the only plausible substitute, cured about 30% of patients in one Egyptian series who had already failed triclabendazole. For a disease affecting millions, a single drug that is failing is the field's most concrete pharmaceutical vulnerability.",
      },
      {
        id: "donation",
        title: "A donation with a limit",
        body:
          "Novartis donates triclabendazole (Egaten) to WHO for fascioliasis and paragonimiasis, and the programme treated roughly 1.15 million patients between 2006 and 2016. WHO recommends preventive chemotherapy with a single dose where cases cluster. The limit of a donated drug is that it reaches only the people a health system can find — and fascioliasis is concentrated in Andean, Nile Delta and Central Asian communities with weak primary care.",
      },
    ],
  },
  ivermectin: {
    sections: [
      {
        id: "donation",
        title: "The donation that made a disease eliminable",
        body:
          "Merck's commitment in 1987 to give ivermectin free for as long as it was needed is the single most consequential act of corporate philanthropy in the NTD field.           It turned river blindness from a cause of mass blindness into a target for elimination, and it later extended to lymphatic filariasis where the two diseases overlap. Hundreds of millions of doses are given each year through community-directed treatment.",
      },
      {
        id: "beyond",
        title: "A drug with a strange second life",
        body:
          "Ivermectin kills more than worms: it is first-line for scabies and a component of triple-drug therapy for lymphatic filariasis. It is also the subject of one of the field's cautionary tales — during the COVID-19 pandemic it was promoted as a treatment on the basis of laboratory and observational signals, a use not supported by the trials that followed. For a medicine that is genuinely transformative in its proper indications, that episode showed how easily a real drug can be attached to an unreal one.",
      },
    ],
  },
  moxidectin: {
    sections: [
      {
        id: "not-displaced",
        title: "Why a better drug has not displaced the old one",
        body:
          "Moxidectin suppresses onchocercal microfilariae longer than ivermectin and was approved for the disease in 2018, so the clinical case for using it in mass treatment is reasonable. It has not displaced ivermectin, for a simple reason: ivermectin is donated free for as long as it is needed, and moxidectin is not. For a mass programme treating millions of people, a price of zero is hard to beat with a better half-life.",
      },
    ],
  },
  emodepside: {
    sections: [
      {
        id: "vet",
        title: "Borrowing from veterinary medicine",
        body:
          "Emodepside has been used in dogs, cats and livestock for years, which means its safety in those species is established and its mechanism — opening the SLO-1 potassium channel — is understood. That gives human development a head start over a novel molecule, and it also offers something ivermectin cannot: a different mechanism, usable where ivermectin is contraindicated because of Loa loa co-infection.",
      },
    ],
  },
  albendazole: {
    sections: [
      {
        id: "workhorse",
        title: "The workhorse and its weak point",
        body:
          "Albendazole is one of the most widely used medicines on earth, donated by GSK for lymphatic filariasis and soil-transmitted helminth control and given to hundreds of millions of children a year. It is excellent against Ascaris, moderate against hookworm, and poor against Trichuris trichiura — a single dose cures only a minority of whipworm infections.\n\nThat unevenness is the central problem of deworming. The worm the drug treats least well is one that causes real morbidity, and it survives every round of treatment. Benzimidazole resistance is also well documented in livestock, and reduced responses have been observed in people in high-drug-pressure areas.",
      },
    ],
  },
  mebendazole: {
    sections: [
      {
        id: "schools",
        title: "Built for school programmes",
        body:
          "Mebendazole's practical advantage is its chewable formulation, which makes it usable by teachers and community distributors with young children — the delivery model that made school deworming one of the cheapest public health interventions available. It shares albendazole's class, its target and its weakness against whipworm.",
      },
    ],
  },
  tribendimidine: {
    sections: [
      {
        id: "different-receptor",
        title: "Active where the standard drugs are not",
        body:
          "Tribendimidine was developed and used in China and acts on nematode nicotinic acetylcholine receptors rather than tubulin, so it offers a different mechanism from the benzimidazoles. Trials have shown good activity against Ascaris, hookworm and Trichuris, including against worms that respond poorly to albendazole — which makes it a candidate for rotation or combination if benzimidazole resistance becomes a clinical problem in people, not just in livestock.",
      },
    ],
  },
  diethylcarbamazine: {
    sections: [
      {
        id: "geography",
        title: "A drug whose use is decided by geography",
        body:
          "DEC is a component of the albendazole-plus-DEC regimen that is the main mass treatment for lymphatic filariasis in most of the world — but not in Africa. In people who also carry onchocerciasis or Loa loa, DEC can cause severe reactions, so African programmes use albendazole plus ivermectin instead. It is an unusually clear case of a drug's deployment being determined by what else is circulating in the same community.",
      },
    ],
  },
  doxycycline: {
    sections: [
      {
        id: "symbiont",
        title: "An antibiotic that kills a worm by killing its bacteria",
        body:
          "Filarial worms carry Wolbachia, an endosymbiotic bacterium they depend on for energy metabolism and reproduction. Doxycycline kills the bacteria, which sterilises the adult worms and eventually kills them — an antibiotic functioning as an antiparasitic by attacking a third organism. It is the reason Wolbachia is both a drug target and a driver of the inflammatory reactions that cause some filarial disease. The four-to-six week course makes it impossible to use in mass campaigns, so it remains a targeted treatment.",
      },
    ],
  },
  benznidazole: {
    sections: [
      {
        id: "sixty-days",
        title: "Sixty days that most people never finish",
        body:
          "Benznidazole cures most people treated in the acute phase and in congenital infection, and reduces progression in young children and early chronic disease. In adults with established cardiac disease the benefit is much less certain, and the sixty-day course causes rash, neuropathy or bone-marrow suppression in a substantial minority — which means many people stop treatment, and many who are diagnosed are never treated at all. The field's most important unmet need in Chagas is not a better drug for late disease but a shorter, safer course that people can complete.",
      },
    ],
  },
  nifurtimox: {
    sections: [
      {
        id: "two-diseases",
        title: "One drug, two trypanosomes",
        body:
          "Nifurtimox is second-line for Chagas disease and, more importantly, half of NECT — nifurtimox-eflornithine combination therapy — which replaced weeks of melarsoprol infusions for late-stage sleeping sickness with a simpler, safer regimen. Its double role reflects the fact that Trypanosoma cruzi and T. brucei are related, so a drug developed against one can be repurposed against the other, which is how a medicine with no commercial market has stayed in production.",
      },
    ],
  },
  fexinidazole: {
    sections: [
      {
        id: "two-jobs",
        title: "A drug that succeeded once and failed once",
        body:
          "Fexinidazole is a landmark for sleeping sickness: the first all-oral cure, covering both stages of Gambiense disease in a ten-day course and approved in 2019. Because Chagas disease is caused by a related trypanosome, it was tested there too — and after an early trial raised hopes by showing activity at very short durations, a follow-up study found it well tolerated but unable to eliminate the parasite. Fexinidazole is now a model of what the product development partnership model can achieve, and a reminder that success against one trypanosome predicts the other imperfectly.",
      },
    ],
  },
  acoziborole: {
    sections: [
      {
        id: "what-changes",
        title: "What a single dose changes",
        body:
          "Acoziborole cures up to 96% of Gambiense sleeping sickness in both stages with three tablets taken once. The cure rate matters clinically, but the logistics matter more: no injections, no hospitalisation, no lumbar-puncture staging and no cold chain. For the last cases in the most remote places — the Democratic Republic of the Congo, South Sudan, conflict-affected areas with no referral pathway — those properties are what make treatment possible at all. The DRC registered it in June 2026, the first country to do so.",
      },
    ],
  },
  eflornithine: {
    sections: [
      {
        id: "almost-abandoned",
        title: "The drug that was almost abandoned",
        body:
          "Eflornithine treats late-stage Gambiense sleeping sickness by blocking the parasite's polyamine synthesis, but as a multi-day intravenous infusion it was burdensome and expensive to deliver. It was nearly discontinued before being revived, and its combination with oral nifurtimox as NECT made it practical. Its later rediscovery as a cosmetic treatment for unwanted facial hair kept production alive — an accident of commerce that is part of why the drug is still available for the patients who need it.",
      },
    ],
  },
  pentamidine: {
    sections: [
      {
        id: "staging",
        title: "The staging problem",
        body:
          "Pentamidine works for first-stage Gambiense sleeping sickness, before the parasite reaches the brain, which means treatment depends on knowing the stage — and staging has historically meant a lumbar puncture. It also requires a week of intramuscular injections. Both of these are why the single-dose oral drugs matter so much: they remove the diagnostic step and the injection alike, which is the difference between treating patients in a hospital and treating them in a village.",
      },
    ],
  },
  suramin: {
    sections: [
      {
        id: "acute-form",
        title: "For the form that kills in weeks",
        body:
          "Suramin treats first-stage Rhodesiense sleeping sickness, the acute form that can kill within weeks and needs urgent treatment. It is given intravenously after a test dose because of a risk of immediate reactions, and it does not cross into the brain — so late-stage Rhodesiense disease still needs a different drug, historically melarsoprol. There is no single-dose oral cure for this half of the disease, and no rapid diagnostic test comparable to the antibody screening used for Gambiense disease.",
      },
    ],
  },
  melarsoprol: {
    sections: [
      {
        id: "arsenic",
        title: "Arsenic, and why it was still used",
        body:
          "Melarsoprol is an arsenic compound given by intravenous injection for late-stage sleeping sickness, and it causes a fatal post-treatment encephalopathy in a small proportion of patients. The fact that it remained the standard of care for decades is the sharpest illustration of how neglected the disease was: a drug with a lethal complication was better than the alternatives available, and the effort to find something safer is what produced NECT, fexinidazole and acoziborole in succession.",
      },
    ],
  },
  miltefosine: {
    sections: [
      {
        id: "oral-but-fragile",
        title: "Oral, and losing ground",
        body:
          "Miltefosine was the first oral treatment for visceral leishmaniasis and a genuine advance, especially in South Asia. Its limits are now clear: a 28-day course, gastrointestinal side effects, teratogenicity that makes pregnancy testing and contraception mandatory, and declining efficacy in South Asia linked to reduced expression of the parasite transporter that takes the drug up. WHO's 2026 guideline update nevertheless moved it to the centre of treatment in eastern Africa, where it replaces injected antimony — a reversal of fortune that reflects how much worse the alternative is.",
      },
    ],
  },
  "liposomal-amphotericin-b": {
    sections: [
      {
        id: "single-dose",
        title: "A single dose, and a price",
        body:
          "Liposomal amphotericin B concentrates in the organs where Leishmania lives and in South Asia a single infusion cures visceral leishmaniasis, turning weeks of injections into one visit. Its constraints are cost, a cold chain and infusion equipment — the logistics of a hospital rather than a village. This is why combination regimens with miltefosine and paromomycin have been pursued: they stretch the supply of an expensive drug.",
      },
    ],
  },
  paromomycin: {
    sections: [
      {
        id: "combinations",
        title: "Useful mainly in combination",
        body:
          "Paromomycin kills Leishmania by disrupting its ribosomes and mitochondria, and given intramuscularly for three weeks it cures visceral disease. It is rarely used alone: its value is in shortening and cheapening treatment when combined with liposomal amphotericin B or miltefosine, and in topical forms for some cutaneous lesions.",
      },
    ],
  },
  antimonials: {
    sections: [
      {
        id: "lesson",
        title: "Seventy years, and a resistance lesson",
        body:
          "Sodium stibogluconate and meglumine antimoniate treated leishmaniasis for over seventy years. They are cheap, they work, and they are toxic to the heart and pancreas across a course of twenty or more painful injections. In Bihar, India, use was so intensive that resistance became widespread and the drugs were abandoned — and it was the search for replacements that built the field's current arsenal of liposomal amphotericin B, miltefosine and paromomycin. WHO's 2026 guidelines formally retired SSG in eastern Africa, which is the end of the antimony era.",
      },
    ],
  },
  dapsone: {
    sections: [
      {
        id: "monotherapy",
        title: "Why leprosy is never treated with one drug",
        body:
          "Dapsone was used alone against leprosy for decades, which selected for resistant bacteria and made it progressively less effective. That experience is why leprosy is treated with multidrug therapy — rifampicin, dapsone and clofazimine together — and why the field is vigilant about resistance in the drugs it relies on now. Dapsone remains one of the three components and is also used in some skin conditions; it can cause anaemia and, rarely, a severe hypersensitivity syndrome.",
      },
    ],
  },
  rifampicin: {
    sections: [
      {
        id: "shared",
        title: "Shared with tuberculosis",
        body:
          "Rifampicin is the most important drug in leprosy treatment and the reason a single dose can prevent the disease in contacts, and it is also a first-line tuberculosis drug. That shared identity is a strength and a risk: research and stewardship of the drug in tuberculosis benefit leprosy, but rifampicin resistance in either disease is a threat to both, and leprosy is treated with a regimen that is in effect protected by tuberculosis stewardship. Its use in Buruli ulcer follows the same logic.",
      },
    ],
  },
  clofazimine: {
    sections: [
      {
        id: "stain",
        title: "The drug that stains",
        body:
          "Clofazimine is part of leprosy multidrug therapy and has anti-inflammatory activity that helps control the leprosy reactions that damage nerves — an unusual dual role for an antibiotic. Its most memorable property is cosmetic: it stains the skin a reddish-brown, which is reversible but noticeable, and it is one reason adherence can be challenging even for a disease with an effective cure. Prescribing it means explaining the discolouration in advance.",
      },
    ],
  },
  azithromycin: {
    sections: [
      {
        id: "three-diseases",
        title: "One dose, three diseases, one resistance risk",
        body:
          "Azithromycin is the 'A' in the SAFE strategy for trachoma, the backbone of yaws eradication and part of Buruli ulcer regimens — three very different diseases, all addressed with a single oral dose. That breadth is why programmes can integrate campaigns, and why resistance is a shared concern: mass administration of a macrolide selects for resistance in every bacterium exposed to it, and resistant yaws has already emerged. Donated by Pfizer through the International Trachoma Initiative, it is also the clearest example of a donation driving a disease to the edge of elimination.",
      },
    ],
  },
  "benzathine-penicillin": {
    sections: [
      {
        id: "one-injection",
        title: "One injection that lasts weeks",
        body:
          "Benzathine penicillin G is a long-acting intramuscular penicillin that maintains bactericidal levels for weeks, so a single injection cures yaws and early syphilis. That persistence is what makes it usable where follow-up is unreliable. Its limits are the need for injection, a cold chain and trained staff — which is why the oral alternative, azithromycin, carries the eradication strategy, and why benzathine penicillin is the fallback when azithromycin cannot be used or is failing.",
      },
    ],
  },
  permethrin: {
    sections: [
      {
        id: "topical-limits",
        title: "Topical, and hard to use at scale",
        body:
          "Permethrin 5% cream kills scabies mites and is the first-line topical treatment, and the same chemical class protects bed nets. Its difficulty is practical: it must be applied to the whole body and left on for hours, and it has to be applied to every close contact at the same time — which is why oral ivermectin, given as a single dose to a whole household or community, has become the preferred approach in high-burden settings even though permethrin has a lower failure rate when applied correctly.",
      },
    ],
  },
  "snake-antivenom": {
    sections: [
      {
        id: "must-match",
        title: "Why it must match the snake",
        body:
          "Antivenom is species-specific, so a product raised against Indian snakes does not neutralise African venom no matter how much is given. Investigations in 2025 documented exactly that problem across sub-Saharan Africa, alongside products of unverified potency — meaning patients were treated and still died, often having paid out of pocket. WHO's prequalification pathway is the response, and it exists because for this product quality assurance is not a formality but the intervention itself.",
      },
    ],
  },
  "rabies-postexposure-prophylaxis": {
    sections: [
      {
        id: "prevention-not-treatment",
        title: "Prevention, not treatment",
        body:
          "Rabies PEP is the only medicine in this corpus that must be given before the disease exists, because once symptoms begin there is no effective treatment. That makes it a test of health-system access rather than pharmacology: wound washing, a short vaccine course given intradermally to stretch supply, and immunoglobulin infiltrated into the wound for severe bites. Every rabies death is a failure of reach, cost or awareness rather than of the medicine, which is why the strategy pairs human prophylaxis with vaccinating the dogs that cause almost all cases.",
      },
    ],
  },
  arpraziquantel: {
    sections: [
      {
        id: "why-children",
        title: "Why children were left out",
        body:
          "Schistosomiasis causes its heaviest infections in young children, and until recently the under-fives were systematically untreated: the standard tablet was too large and bitter, and the dosing evidence did not exist. That is a rare kind of neglect — not of a disease but of an age group within it. Arpraziquantel is a 150 mg dispersible tablet with an acceptable taste and tropical stability, developed for children from three months to six years, and its first patient was treated in Uganda in 2025.",
      },
    ],
  },
  oxfendazole: {
    sections: [
      {
        id: "macrofilaricide",
        title: "The macrofilaricide hope",
        body:
          "Every drug in the filariasis and river blindness programmes suppresses microfilariae; none reliably kills the adult worms, which is why treatment must continue for the worm's lifetime. Oxfendazole, a benzimidazole long used in animals, is being tested precisely for macrofilaricidal activity. If it works at a practical dose, it would shorten elimination programmes from fifteen years to a handful — which is why its Phase II trials in onchocerciasis, loiasis, trichuriasis and lymphatic filariasis are among the most consequential studies in the field.",
      },
    ],
  },
  nitazoxanide: {
    sections: [
      {
        id: "fallback",
        title: "A fallback that does not work",
        body:
          "Nitazoxanide is a broad-spectrum antiparasitic with real uses in intestinal infections, and it has been tested as the alternative for fascioliasis when triclabendazole fails. The evidence is poor: around 30% cure in patients who had already failed triclabendazole in one series, and ineffective in another. It is in this corpus not because it works but because it defines the problem — the sole recommended drug for human fascioliasis is failing and there is nothing behind it.",
      },
    ],
  },
  lxe408: {
    sections: [
      {
        id: "aiming-at-injections",
        title: "Aimed at the last injections",
        body:
          "LXE408 is a first-in-class oral compound developed by DNDi with Novartis, and its goal is to remove injections from leishmaniasis treatment altogether. Two Phase II proof-of-concept studies completed in India and Ethiopia in 2025 with promising efficacy and safety, and because it belongs to a class new to the disease it would also serve if resistance to current drugs emerges. It is the clearest example of a non-profit partnership building the drug a market would not.",
      },
    ],
  },
  bedaquiline: {
    sections: [
      {
        id: "borrowed",
        title: "Borrowed from tuberculosis, twice over",
        body:
          "Bedaquiline was developed for drug-resistant tuberculosis and blocks mycobacterial ATP synthase. Its half-life of around five and a half months and its greater activity against Mycobacterium leprae than rifampicin make it attractive where treatment is long and adherence is the weak point — a Phase 2 trial in Brazil found monotherapy cleared the organism in multibacillary patients, and a Phase 3 combination trial is under way. It is also being tested as leprosy prophylaxis, which would make it the first genuinely new preventive agent since single-dose rifampicin. Like telacebec, it is tuberculosis science applied to a neglected mycobacterium.",
      },
    ],
  },
  telacebec: {
    sections: [
      {
        id: "potency",
        title: "The most potent thing ever tested against the organism",
        body:
          "Telacebec has the lowest minimum inhibitory concentration of any drug tested against Mycobacterium ulcerans — orders of magnitude below rifampicin or clarithromycin — and in mouse models it sterilised the infection after only sixteen doses. Against a disease whose current treatment is eight weeks of two antibiotics, that is the difference between a course and a handful of tablets. It entered a Phase 2 trial in 2024, and it is the clearest illustration of why repurposing tuberculosis drugs matters for Buruli ulcer and leprosy.",
      },
    ],
  },
  mosnodenvir: {
    sections: [
      {
        id: "challenge-failure",
        title: "Challenge-model success, field failure",
        body:
          "Mosnodenvir protected volunteers in a controlled human infection model, which is an unusually strong early signal for a dengue antiviral and raised hopes of a preventive drug. In 2025 the developer discontinued the Phase 2 field study, citing strategic rather than safety reasons. The lesson is not that the science failed but that a challenge-model result does not by itself produce a medicine: the field trial, and the funding to run it for a disease of poor countries, is a separate and harder step.",
      },
    ],
  },
  ixchiq: {
    sections: [
      {
        id: "paused",
        title: "A licensed vaccine, paused",
        body:
          "Ixchiq was the first product of any kind licensed against chikungunya, and in 2025 the FDA and CDC recommended pausing its use in people aged 60 and over after seventeen serious neurological and cardiac events, including two deaths, in recipients aged 62 to 89. The vaccine remains available for younger people, but the pause removed it from the age group most vulnerable to severe chikungunya. It is a reminder that licensure is the middle of a vaccine's story, and that post-marketing surveillance does real, sometimes unwelcome, work.",
      },
    ],
  },
  fosravuconazole: {
    sections: [
      {
        id: "weekly",
        title: "Simpler, but not better",
        body:
          "Fosravuconazole was the first drug ever tested against eumycetoma in a randomised trial, run in Khartoum by the Mycetoma Research Centre with DNDi and Eisai. Neither dose beat itraconazole on efficacy, and both were numerically worse — but it needed only once-weekly dosing, against twice-daily itraconazole for a year or more, and it caused no new safety concerns. The trial's value is therefore real even though its primary endpoint was not met: it proved a rigorous trial is possible in one of the hardest settings in the world.",
      },
    ],
  },
  olorofim: {
    sections: [
      {
        id: "never-trialled",
        title: "An antifungal that will never be trialled here",
        body:
          "Olorofim has shown excellent in vitro activity against Madurella mycetomatis, the main cause of eumycetoma, which makes it one of the most promising compounds for a disease with no reliably effective drug. It is in clinical development for other mould infections and will almost certainly never be tested in mycetoma, because there is no commercial reason to run a trial in the Sahel. It is the purest example in this corpus of the funding gap: the molecule exists, the activity is known, and the patients are in the wrong market.",
      },
    ],
  },
};
