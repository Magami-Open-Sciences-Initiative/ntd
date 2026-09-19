import type { Kind } from "./schema";

export type Locale = "en" | "fr";

/**
 * French coverage is deliberately partial and honest: the interface, the kind
 * names and blurbs, and a French name and summary for every disease. The
 * detailed content — deep dives, sources, data fields — remains in English, and
 * every French page says so. Translating 368 records of technical prose without
 * review would be worse than not translating it.
 */

export const UI = {
  en: {
    langName: "English",
    otherLang: "Français",
    otherHref: "/fr/",
    search: "Search",
    overview: "Overview",
    connected: "Connected",
    sources: "Sources",
    lastChecked: "Last checked",
    verifyAtSource: "verify at source",
    home: "Home",
    objects: "objects",
    readIn: "Read this record in French",
    workInProgress: "Work in progress.",
    wipBody:
      "Every fact here is being built and checked in the open and may be incomplete, out of date or wrong. Verify anything that matters at its primary source, which every page links. Nothing on this site is medical advice.",
    partOf: "A project of",
    aboutLink: "About & methodology",
    apiLink: "Open data API",
    fullList: "See all",
  },
  fr: {
    langName: "Français",
    otherLang: "English",
    otherHref: "/",
    search: "Rechercher",
    overview: "Aperçu",
    connected: "Liens",
    sources: "Sources",
    lastChecked: "Vérifié en",
    verifyAtSource: "à vérifier à la source",
    home: "Accueil",
    objects: "objets",
    readIn: "Lire cette fiche en anglais",
    workInProgress: "Travail en cours.",
    wipBody:
      "Chaque fait présenté ici est construit et vérifié en public et peut être incomplet, obsolète ou erroné. Vérifiez tout élément important à sa source primaire, que chaque page indique. Rien sur ce site ne constitue un avis médical.",
    partOf: "Un projet de",
    aboutLink: "À propos et méthodologie",
    apiLink: "API de données ouvertes",
    fullList: "Voir tout",
  },
} as const;

export const KIND_FR: Record<Kind, { singular: string; plural: string; blurb: string }> = {
  diseases: {
    singular: "Maladie",
    plural: "Maladies",
    blurb:
      "Chaque maladie tropicale négligée désignée par l'OMS, avec ce qui la cause, qui elle frappe et ce qu'on peut faire.",
  },
  pathogens: {
    singular: "Agent pathogène",
    plural: "Agents pathogènes",
    blurb: "Les parasites, vers, bactéries, virus, champignons et venins à l'origine des maladies.",
  },
  vectors: {
    singular: "Vecteur",
    plural: "Vecteurs",
    blurb:
      "Les moustiques, mouches, mollusques, punaises et acariens qui transmettent les maladies — et comment les contrôler.",
  },
  drugs: {
    singular: "Traitement",
    plural: "Traitements",
    blurb:
      "Les médicaments qui guérissent ou contrôlent les MTN, des médicaments essentiels anciens aux candidats en essai.",
  },
  diagnostics: {
    singular: "Diagnostic",
    plural: "Diagnostics",
    blurb:
      "Comment une infection est confirmée : du frottis examiné au microscope au test sanguin qui décide du traitement.",
  },
  targets: {
    singular: "Cible",
    plural: "Cibles",
    blurb: "Les molécules d'un parasite qu'un médicament peut désactiver, et pourquoi elles sont faciles ou difficiles à cibler.",
  },
  technologies: {
    singular: "Technologie",
    plural: "Technologies",
    blurb:
      "Les outils de lutte contre les MTN : contrôle des vecteurs, vaccins, diagnostics, découverte de médicaments et IA.",
  },
  trials: {
    singular: "Essai",
    plural: "Essais",
    blurb: "Les études marquantes et en cours, avec leurs résultats exprimés en langage clair.",
  },
  institutions: {
    singular: "Institution",
    plural: "Institutions",
    blurb: "Les instituts, agences, bailleurs et partenariats de développement de produits qui font le travail.",
  },
  countries: {
    singular: "Pays",
    plural: "Pays",
    blurb: "Où se situe la charge de morbidité, ce qui a été éliminé, et comment les programmes sont organisés.",
  },
  people: {
    singular: "Personne",
    plural: "Personnes",
    blurb:
      "Les personnes dont le travail est documenté ici — découvreurs historiques et acteurs actuels du domaine.",
  },
  roadmaps: {
    singular: "Feuille de route",
    plural: "Feuilles de route",
    blurb: "De l'histoire à l'horizon, étape par étape, pour chaque famille de technologies.",
  },
  guidelines: {
    singular: "Recommandation",
    plural: "Recommandations",
    blurb:
      "Les recommandations qui déterminent ce que font réellement les programmes — et ce qui a changé à chaque mise à jour.",
  },
  bottlenecks: {
    singular: "Obstacle",
    plural: "Obstacles",
    blurb: "Ce qui ralentit les progrès, et ce qui pourrait les débloquer.",
  },
  ideas: {
    singular: "Idée",
    plural: "Idées",
    blurb: "Des hypothèses et des solutions, chacune avec un test proposé.",
  },
  resistance: {
    singular: "Résistance",
    plural: "Résistances",
    blurb:
      "La résistance aux médicaments, aux insecticides et aux pesticides : comment elle fonctionne, où elle a été détectée et qui la surveille.",
  },
  terms: {
    singular: "Terme",
    plural: "Glossaire",
    blurb: "Définitions en langage clair des termes employés dans ce domaine.",
  },
};

/** French name and one-line summary for each disease. */
export const DISEASE_FR: Record<string, { name: string; tldr: string }> = {
  "buruli-ulcer": {
    name: "Ulcère de Buruli",
    tldr: "Un ulcère cutané indolore causé par une bactérie apparentée à celle de la lèpre, qui détruit les tissus et peut laisser un handicap permanent.",
  },
  chagas: {
    name: "Maladie de Chagas",
    tldr: "Une infection à trypanosome transmise par les réduves, par la transfusion et de la mère à l'enfant, qui endommage le cœur des décennies après le début.",
  },
  dengue: {
    name: "Dengue",
    tldr: "Une maladie virale transmise par des moustiques Aedes qui piquent le jour ; une seconde infection par un autre sérotype peut provoquer une dengue sévère, avec fuite plasmatique et choc.",
  },
  chikungunya: {
    name: "Chikungunya",
    tldr: "Une maladie virale transmise par les mêmes moustiques Aedes, qui provoque une fièvre brutale et des douleurs articulaires parfois persistantes des mois ou des années.",
  },
  dracunculiasis: {
    name: "Dracunculose (ver de Guinée)",
    tldr: "Un ver d'un mètre qui sort par la peau un an après avoir bu de l'eau contaminée — la maladie la plus proche de l'éradication.",
  },
  echinococcosis: {
    name: "Échinococcose (maladie hydatique)",
    tldr: "Des larves de ténia provenant des chiens qui forment lentement des kystes dans le foie et les poumons, comme des tumeurs.",
  },
  "foodborne-trematodiases": {
    name: "Trématodoses d'origine alimentaire",
    tldr: "Des douves contractées en mangeant du poisson cru, des crabes ou du cresson ; deux d'entre elles provoquent le cancer des voies biliaires.",
  },
  hat: {
    name: "Trypanosomiase humaine africaine (maladie du sommeil)",
    tldr: "Un parasite transmis par la mouche tsé-tsé qui atteint le cerveau sans traitement — désormais guérissable en une seule journée de comprimés.",
  },
  leishmaniasis: {
    name: "Leishmaniose",
    tldr: "Des parasites transmis par les phlébotomes qui provoquent des ulcères cutanés, des lésions muqueuses destructrices ou une infection mortelle des organes internes.",
  },
  leprosy: {
    name: "Lèpre (maladie de Hansen)",
    tldr: "Une infection bactérienne lente de la peau et des nerfs, guérissable, mais qui laisse des handicaps lorsqu'elle est découverte trop tard.",
  },
  "lymphatic-filariasis": {
    name: "Filariose lymphatique (éléphantiasis)",
    tldr: "Des filaires transmises par les moustiques qui bloquent le système lymphatique et provoquent des gonflements permanents et stigmatisants.",
  },
  mycetoma: {
    name: "Mycétome et autres mycoses profondes",
    tldr: "Des infections fongiques ou bactériennes qui entrent par une piqûre d'épine et détruisent lentement le pied ou la main pendant des années.",
  },
  noma: {
    name: "Noma (cancrum oris)",
    tldr: "Une infection gangréneuse de la bouche et du visage chez des enfants gravement malnutris, qui peut être arrêtée par des antibiotiques si elle est prise à temps.",
  },
  onchocerciasis: {
    name: "Onchocercose (cécité des rivières)",
    tldr: "Un ver transmis par la mouche noire qui provoque des démangeaisons intenses et, après des années, une cécité irréversible.",
  },
  rabies: {
    name: "Rage",
    tldr: "Un virus transmis par morsure animale, presque toujours mortel dès l'apparition des symptômes et presque toujours évitable si l'on traite à temps.",
  },
  scabies: {
    name: "Gale et autres ectoparasitoses",
    tldr: "Une infestation par un acarien très prurigineuse qui se propage dans les foyers surpeuplés et favorise les infections cutanées bactériennes.",
  },
  schistosomiasis: {
    name: "Schistosomiase (bilharziose)",
    tldr: "Des douves du sang contractées en marchant ou en nageant en eau douce, qui atteignent la vessie et l'intestin et, à long terme, provoquent cancers et lésions d'organes.",
  },
  sth: {
    name: "Géohélminthiases",
    tldr: "Ascaris, trichocéphales et ankylostomes — des vers intestinaux transmis par le sol qui retardent la croissance et provoquent l'anémie chez des millions d'enfants.",
  },
  snakebite: {
    name: "Envenimation par morsure de serpent",
    tldr: "Un empoisonnement, non une infection, mais qui tue et handicape les communautés rurales pauvres là où l'antivenin n'arrive pas.",
  },
  "taeniasis-cysticercosis": {
    name: "Téniasis et cysticercose",
    tldr: "Le ténia du porc donne un ver intestinal, mais ses œufs forment des kystes dans le cerveau qui constituent une cause majeure d'épilepsie évitable.",
  },
  trachoma: {
    name: "Trachome",
    tldr: "Une infection bactérienne de l'œil qui, après des décennies de réinfections, retourne les cils vers l'intérieur et rend aveugle.",
  },
  yaws: {
    name: "Pian et autres tréponématoses endémiques",
    tldr: "Une infection bactérienne de l'enfance touchant la peau et les os, guérie par une seule dose d'azithromycine, et cible d'éradication.",
  },
};

export function hasFrench(id: string): boolean {
  return id in DISEASE_FR || id in DISEASE_FR_EXTRA;
}
export function frFor(id: string) {
  return DISEASE_FR[id] ?? DISEASE_FR_EXTRA[id];
}

/** French name and one-line summary for the adjacent diseases added later. */
export const DISEASE_FR_EXTRA: Record<string, { name: string; tldr: string }> = {
  podoconiosis: {
    name: "Podoconiose (éléphantiasis non filarien)",
    tldr: "Une tuméfaction non infectieuse des jambes causée par la marche pieds nus sur un sol volcanique irritant — évitable avec des chaussures et traitable par le lavage et les bandages.",
  },
  zika: {
    name: "Maladie à virus Zika",
    tldr: "Une infection transmise par les moustiques, le plus souvent bénigne, devenue une urgence mondiale lorsqu'elle s'est révélée causer de graves malformations congénitales.",
  },
  malaria: {
    name: "Paludisme",
    tldr: "Un parasite transmis par les moustiques qui tue un enfant environ chaque minute, et la maladie de la pauvreté la plus financée au monde.",
  },
  tuberculosis: {
    name: "Tuberculose",
    tldr: "La maladie infectieuse la plus meurtrière au monde après le COVID-19, et celle qui a produit le plus de souches résistantes aux médicaments.",
  },
  ebola: {
    name: "Maladie à virus Ebola",
    tldr: "Une fièvre hémorragique virale dont la létalité peut atteindre 90 %, maîtrisée par les vaccins, les anticorps et le traçage des contacts plutôt que par un traitement.",
  },
};
