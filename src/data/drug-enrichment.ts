import type { Spike } from "./merge";

/**
 * Drug enrichment: the targets a drug acts on, a note where the target is not
 * established, and the other members of its class.
 *
 * `targets` is unioned onto whatever the base record already declares, so this
 * only needs the targets a record is missing. `targetNote` explains drugs whose
 * mechanism is genuinely unsettled rather than forcing a target onto them.
 * `classSiblings` lists relatives by chemical or mechanistic class, including
 * compounds never used against an NTD, with a note saying what each one is.
 */
export const DRUG_ENRICHMENT: Record<string, Spike> = {
  praziquantel: {
    classSiblings: [
      { name: "Oxamniquine", note: "the only other antischistosomal in wide past use — a different chemical class, and largely withdrawn" },
      { name: "Arpraziquantel", note: "the (R)-enantiomer, developed as a paediatric dispersible tablet" },
    ],
  },
  arpraziquantel: {
    classSiblings: [{ name: "Praziquantel", note: "the racemate it is derived from, used for school-aged children and adults" }],
  },
  oxamniquine: {
    targets: ["schistosome-sulfotransferase"],
    classSiblings: [{ name: "Praziquantel", note: "the drug that displaced it; a different class, active against all three main species" }],
  },
  triclabendazole: {
    classSiblings: [
      { name: "Albendazole", note: "benzimidazole, used for gut worms and filariasis" },
      { name: "Mebendazole", note: "benzimidazole, used for gut worms" },
      { name: "Oxfendazole", note: "benzimidazole, in development for filarial worms" },
      { name: "Fenbendazole", note: "veterinary benzimidazole, and triclabendazole's close relative" },
      { name: "Flubendazole", note: "veterinary and human benzimidazole" },
    ],
  },
  ivermectin: {
    classSiblings: [
      { name: "Moxidectin", note: "a milbemycin macrocyclic lactone, approved for river blindness" },
      { name: "Selamectin", note: "veterinary macrocyclic lactone" },
      { name: "Doramectin", note: "veterinary macrocyclic lactone" },
      { name: "Abamectin", note: "the agricultural and veterinary parent of the avermectins" },
      { name: "Eprinomectin", note: "veterinary macrocyclic lactone" },
    ],
  },
  moxidectin: {
    classSiblings: [{ name: "Ivermectin", note: "the avermectin it competes with, donated free and far more widely used" }],
  },
  emodepside: {
    classSiblings: [
      { name: "PF1022A", note: "the natural cyclooctadepsipeptide emodepside is derived from" },
      { name: "Other cyclooctadepsipeptides", note: "a class almost entirely used in veterinary medicine" },
    ],
  },
  albendazole: {
    classSiblings: [
      { name: "Mebendazole", note: "the other donated deworming benzimidazole" },
      { name: "Triclabendazole", note: "benzimidazole for liver flukes" },
      { name: "Oxfendazole", note: "benzimidazole in development for filarial worms" },
      { name: "Fenbendazole", note: "veterinary benzimidazole; oxfendazole is its sulphoxide" },
      { name: "Flubendazole", note: "veterinary and human benzimidazole" },
      { name: "Thiabendazole", note: "the first widely used benzimidazole anthelmintic" },
    ],
  },
  mebendazole: {
    classSiblings: [
      { name: "Albendazole", note: "the other donated deworming benzimidazole" },
      { name: "Triclabendazole", note: "benzimidazole for liver flukes" },
    ],
  },
  tribendimidine: {
    targets: ["nematode-nachr"],
    classSiblings: [
      { name: "Levamisole", note: "also a nematode nicotinic agonist, used in veterinary medicine and formerly in people" },
      { name: "Pyrantel", note: "nicotinic agonist used for gut worms in people and animals" },
      { name: "Bephenium", note: "an older nicotinic anthelmintic" },
    ],
  },
  oxfendazole: {
    classSiblings: [
      { name: "Fenbendazole", note: "its parent compound, used in veterinary medicine" },
      { name: "Albendazole", note: "benzimidazole used in human deworming" },
      { name: "Mebendazole", note: "benzimidazole used in human deworming" },
    ],
  },
  diethylcarbamazine: {
    targetNote:
      "No single molecular target is established. DEC disrupts microfilarial membranes and alters parasite metabolism, but the mechanism has never been pinned to one protein — which is one reason it has been hard to design a successor.",
    classSiblings: [{ name: "Ivermectin", note: "the alternative used in African programmes, where DEC is unsafe because of onchocerciasis and loiasis" }],
  },
  doxycycline: {
    classSiblings: [
      { name: "Tetracycline", note: "the original tetracycline" },
      { name: "Minocycline", note: "longer-acting tetracycline" },
      { name: "Tigecycline", note: "glycylcycline developed for resistant bacteria" },
      { name: "Omadacycline", note: "newer tetracycline, and one of the drugs being tested against Buruli ulcer" },
    ],
  },
  benznidazole: {
    targets: ["trypanosome-nitroreductase"],
    classSiblings: [
      { name: "Nifurtimox", note: "the other nitroheterocycle for Chagas disease, and half of NECT" },
      { name: "Fexinidazole", note: "a nitroimidazole that works for sleeping sickness but failed for Chagas" },
      { name: "Posaconazole and ravuconazole", note: "triazoles that inhibit CYP51; both failed to cure chronic Chagas disease in trials" },
    ],
  },
  nifurtimox: {
    targets: ["trypanosome-nitroreductase"],
    classSiblings: [
      { name: "Benznidazole", note: "the other nitroheterocycle for Chagas disease" },
      { name: "Fexinidazole", note: "a nitroimidazole now used for sleeping sickness" },
    ],
  },
  fexinidazole: {
    classSiblings: [
      { name: "Benznidazole", note: "nitroimidazole for Chagas disease" },
      { name: "Nifurtimox", note: "nitrofuran for Chagas disease and part of NECT" },
      { name: "Metronidazole and tinidazole", note: "nitroimidazoles used against anaerobic bacteria and protozoa" },
      { name: "Pretomanid and delamanid", note: "nitroimidazoles developed for tuberculosis" },
    ],
  },
  acoziborole: {
    classSiblings: [
      { name: "Tavaborole", note: "a benzoxaborole approved for fungal nail infection" },
      { name: "Crisaborole", note: "a benzoxaborole approved for eczema" },
      { name: "DNDi-0690", note: "an oxaborole in development for visceral leishmaniasis" },
    ],
  },
  eflornithine: {
    targets: ["ornithine-decarboxylase"],
    classSiblings: [{ name: "DFMO (topical eflornithine)", note: "the same molecule sold as a cream for unwanted facial hair — the use that kept it in production" }],
  },
  pentamidine: {
    targetNote:
      "Binds parasite DNA and the kinetoplast and disrupts polyamine metabolism and mitochondrial function rather than inhibiting one protein, so it has no single target. It is also used for Pneumocystis pneumonia.",
    classSiblings: [
      { name: "Propamidine and dibrompropamidine", note: "related diamidines used as antiseptics" },
      { name: "Melarsoprol", note: "a different class, but the historical alternative for late-stage disease" },
    ],
  },
  suramin: {
    targetNote:
      "Inhibits several parasite enzymes simultaneously and has no single defined target, which is part of why it has been difficult to improve on. It has also been investigated in oncology.",
    classSiblings: [{ name: "No close relatives in antiparasitic use", note: "a polysulfonated naphthylamine with no modern successor" }],
  },
  melarsoprol: {
    targets: ["trypanothione-reductase"],
    classSiblings: [{ name: "Arsenic trioxide", note: "the same element used in a different disease — acute promyelocytic leukaemia" }],
  },
  miltefosine: {
    targetNote:
      "Acts on parasite membranes and mitochondria and depends on a parasite transporter for uptake; resistance is linked to loss of that transporter rather than to a change at a target protein, so there is no single target to name.",
    classSiblings: [
      { name: "Perifosine", note: "an alkylphosphocholine investigated in oncology" },
      { name: "Edelfosine", note: "the parent alkylphosphocholine, developed as an anticancer agent" },
    ],
  },
  "liposomal-amphotericin-b": {
    targets: ["ergosterol"],
    classSiblings: [
      { name: "Amphotericin B deoxycholate", note: "the conventional formulation, cheaper but more toxic" },
      { name: "Nystatin", note: "the other widely used polyene antifungal" },
    ],
  },
  paromomycin: {
    targets: ["parasite-ribosome"],
    classSiblings: [
      { name: "Gentamicin", note: "aminoglycoside antibiotic" },
      { name: "Amikacin", note: "aminoglycoside for resistant bacterial infections" },
      { name: "Neomycin", note: "aminoglycoside used topically and in animals" },
      { name: "Plazomicin", note: "newer aminoglycoside designed for resistant bacteria" },
    ],
  },
  antimonials: {
    targets: ["trypanothione-reductase"],
    classSiblings: [
      { name: "Meglumine antimoniate", note: "the other pentavalent antimonial, used mainly in Latin America" },
      { name: "Sodium stibogluconate", note: "the formulation used mainly in Africa and Asia" },
    ],
  },
  dapsone: {
    targets: ["dihydropteroate-synthase"],
    classSiblings: [
      { name: "Acedapsone", note: "a longer-acting sulfone used in some leprosy programmes" },
      { name: "Sulfadoxine and sulfamethoxazole", note: "sulfonamides acting on the same folate pathway" },
    ],
  },
  rifampicin: {
    classSiblings: [
      { name: "Rifabutin", note: "rifamycin used in tuberculosis and MAC infection" },
      { name: "Rifapentine", note: "longer-acting rifamycin used for tuberculosis preventive treatment" },
    ],
  },
  clofazimine: {
    targetNote:
      "Acts on mycobacterial membranes, DNA and ion transport rather than on a single protein, and also has anti-inflammatory effects that help control leprosy reactions — a drug with no single target and no close relatives.",
    classSiblings: [{ name: "No other riminophenazines are marketed", note: "clofazimine is the only widely used member of its class" }],
  },
  azithromycin: {
    targets: ["bacterial-ribosome"],
    classSiblings: [
      { name: "Erythromycin", note: "the original macrolide" },
      { name: "Clarithromycin", note: "macrolide used with rifampicin for Buruli ulcer" },
      { name: "Roxithromycin", note: "macrolide used in some countries" },
      { name: "Fidaxomicin", note: "macrolide-like antibiotic for Clostridioides difficile" },
    ],
  },
  "benzathine-penicillin": {
    targets: ["penicillin-binding-protein"],
    classSiblings: [
      { name: "Benzylpenicillin (penicillin G)", note: "the short-acting form for severe infection" },
      { name: "Procaine penicillin", note: "an intermediate-acting intramuscular form" },
      { name: "Amoxicillin and ampicillin", note: "oral penicillins with broader use" },
    ],
  },
  permethrin: {
    classSiblings: [
      { name: "Deltamethrin", note: "the pyrethroid most used on bed nets" },
      { name: "Cypermethrin", note: "pyrethroid used in agriculture and indoor spraying" },
      { name: "Lambda-cyhalothrin", note: "pyrethroid used for indoor residual spraying" },
      { name: "Etofenprox", note: "a non-ester pyrethroid" },
    ],
  },
  nitazoxanide: {
    targets: ["pfor"],
    classSiblings: [
      { name: "Tizoxanide", note: "its active metabolite" },
      { name: "Other thiazolides", note: "a small class developed from nitazoxanide" },
    ],
  },
  lxe408: {
    targets: ["parasite-proteasome"],
    classSiblings: [
      { name: "Bortezomib and carfilzomib", note: "proteasome inhibitors used in cancer — a well-understood class applied to a parasite" },
    ],
  },
  bedaquiline: {
    classSiblings: [{ name: "TBAJ-876 and other diarylquinolines", note: "next-generation members of the same class in development for tuberculosis" }],
  },
  telacebec: {
    classSiblings: [
      { name: "Other imidazopyridine QcrB inhibitors", note: "a tuberculosis series including clinical candidates" },
      { name: "DprE1 inhibitors such as BTZ-043", note: "a different target in the same organism, also being repurposed for Buruli ulcer" },
    ],
  },
  mosnodenvir: {
    targets: ["dengue-ns4b"],
    classSiblings: [
      { name: "No other NS4B inhibitors are approved", note: "a target with one advanced candidate, whose field study was discontinued" },
      { name: "NS5 polymerase and protease inhibitors", note: "other dengue antiviral targets, none yet licensed" },
    ],
  },
  ixchiq: {
    targets: ["chikungunya-glycoprotein"],
    classSiblings: [
      { name: "Other chikungunya vaccine candidates", note: "including a virus-like particle vaccine" },
      { name: "No antiviral is licensed", note: "chikungunya has been addressed by vaccination rather than by drugs" },
    ],
  },
  fosravuconazole: {
    targets: ["cyp51"],
    classSiblings: [
      { name: "Ravuconazole", note: "its parent compound" },
      { name: "Fluconazole", note: "the most widely used triazole antifungal" },
      { name: "Itraconazole", note: "the standard of care for fungal mycetoma" },
      { name: "Voriconazole and posaconazole", note: "broader-spectrum triazoles" },
    ],
  },
  olorofim: {
    targets: ["fungal-dhodh"],
    classSiblings: [
      { name: "No other orotomides are marketed", note: "a new antifungal class, developed for resistant mould infections rather than for mycetoma" },
    ],
  },
  artesunate: {
    targets: ["artemisinin-activation"],
    classSiblings: [
      { name: "Artemether", note: "an artemisinin used in combination therapy" },
      { name: "Dihydroartemisinin", note: "the active metabolite of the artemisinins" },
      { name: "Arteether", note: "another artemisinin derivative" },
      { name: "Artefenomel (OZ439)", note: "a fully synthetic endoperoxide, designed to overcome the artemisinins' short half-life" },
    ],
  },
  "artemether-lumefantrine": {
    targets: ["artemisinin-activation"],
    classSiblings: [
      { name: "Other artemisinin-based combinations", note: "with amodiaquine, mefloquine, piperaquine, pyronaridine or sulfadoxine-pyrimethamine as the partner drug" },
      { name: "Artesunate", note: "the artemisinin used intravenously for severe malaria" },
      { name: "Lumefantrine", note: "this combination's partner drug, a different class from the artemisinin" },
    ],
  },
  primaquine: {
    targetNote:
      "No single protein target is established. Primaquine is oxidised within the parasite to reactive metabolites that kill dormant liver stages and gametocytes; the same metabolites cause haemolysis in G6PD deficiency, which is the drug's main danger.", 
    classSiblings: [
      { name: "Tafenoquine", note: "a longer-acting 8-aminoquinoline that clears liver stages in a single dose" },
      { name: "Bulaquine", note: "related 8-aminoquinoline used in India" },
    ],
  },
  tafenoquine: {
    targetNote:
      "Shares primaquine's oxidative mechanism and its G6PD contraindication, with a much longer half-life that allows a single dose. No single protein target is defined.", 
    classSiblings: [
      { name: "Primaquine", note: "the older 8-aminoquinoline requiring a longer course" },
    ],
  },
  chloroquine: {
    targets: ["haem-detoxification"],
    classSiblings: [
      { name: "Hydroxychloroquine", note: "its close relative, used mainly for autoimmune disease" },
      { name: "Amodiaquine", note: "a 4-aminoquinoline still used in combination therapy in Africa" },
      { name: "Mefloquine and piperaquine", note: "quinoline antimalarials of different subclasses, used as partner drugs" },
    ],
  },
  isoniazid: {
    targets: ["inha"],
    classSiblings: [{ name: "No close relatives are in clinical use", note: "isoniazid is chemically unusual among antituberculars, which is part of its value" }],
  },
  pyrazinamide: {
    targets: ["pnca"],
    classSiblings: [{ name: "No close relatives are in clinical use", note: "a unique prodrug whose mechanism took decades to explain" }],
  },
  ethambutol: {
    targets: ["embb"],
    classSiblings: [{ name: "No close relatives are in clinical use", note: "ethambutol remains chemically distinct among first-line antituberculars" }],
  },
  pretomanid: {
    targets: ["ddn"],
    classSiblings: [
      { name: "Delamanid", note: "the other nitroimidazole developed for tuberculosis, also activated by Ddn" },
      { name: "Metronidazole and tinidazole", note: "nitroimidazoles used against anaerobic infections" },
      { name: "Fexinidazole", note: "a nitroimidazole developed for sleeping sickness" },
    ],
  },
  linezolid: {
    targets: ["bacterial-ribosome"],
    classSiblings: [
      { name: "Tedizolid", note: "a newer oxazolidinone with a similar spectrum" },
      { name: "Sutezolid and delpazolid", note: "oxazolidinones in development specifically for tuberculosis" },
    ],
  },
  ansuvimab: {
    classSiblings: [
      { name: "Inmazeb (REGN-EB3)", note: "the other licensed Ebola antibody product — a cocktail of three antibodies" },
      { name: "mAb114", note: "the antibody ansuvimab was developed from, isolated from a survivor of the 1995 Kikwit outbreak" },
    ],
  },
  "snake-antivenom": {
    targets: ["venom-toxins"],
    classSiblings: [
      { name: "Other regional antivenoms", note: "products such as EchiTAb and Inoserp, each matched to the snakes of its region" },
      { name: "Recombinant antibody cocktails", note: "in development to replace animal-derived antivenom" },
    ],
  },
  "rabies-postexposure-prophylaxis": {
    classSiblings: [
      { name: "Other inactivated rabies vaccines", note: "cell-culture vaccines given by intramuscular or intradermal routes" },
      { name: "Anti-rabies monoclonal antibodies", note: "developed to replace plasma-derived human rabies immunoglobulin" },
    ],
  },
};
