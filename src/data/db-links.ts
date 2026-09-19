/**
 * Standardised-database links for pathogens and vectors: NCBI Taxonomy and
 * GBIF for every organism, plus the domain-specific genome and vector
 * databases.
 *
 * GENERATED DATA — resolved from primary APIs, not typed by hand:
 *  - NCBI Taxonomy ids from E-utilities (db=taxonomy)
 *  - GBIF taxon keys from the GBIF species/match API
 *  - MolluscaBase AphiaIDs from the Aphia/WoRMS REST API
 *  - WormBase ParaSite, VectorBase, TriTrypDB, PlasmoDB and FungiDB links use
 *    the VEuPathDB organism-record route (/app/record/organism/NCBITAXON_<id>)
 *    or the WormBase ParaSite species path, both verified to resolve.
 *
 * Group records (soil-transmitted helminths, foodborne trematodes, lymphatic
 * filarial worms, mycetoma agents, snake venom, the snail and sandfly vectors)
 * list their principal constituent taxa rather than pretending to one organism.
 * `snake-venom` is a mixture, so it carries a UniProt link and no taxon.
 */
export type TaxonomyRef = { id: string; name: string; url: string };
export type OccurrenceRef = { id: string; name: string; url: string };
export type DatabaseRef = { name: string; url: string; id?: string; note?: string };
export type DbLinks = {
  taxa?: TaxonomyRef[];
  occurrence?: OccurrenceRef[];
  databases?: DatabaseRef[];
};

const TAXONOMY = (id: string) => `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${id}`;
const GBIF = (id: string) => `https://www.gbif.org/species/${id}`;

const tx = (id: string, name: string): TaxonomyRef => ({ id, name, url: TAXONOMY(id) });
const gb = (id: string, name: string): OccurrenceRef => ({ id, name, url: GBIF(id) });
const db = (name: string, url: string, id?: string, note?: string): DatabaseRef => ({ name, url, id, note });

export const DB_LINKS: Record<string, DbLinks> = {
  "trypanosoma-brucei": {
    taxa: [
    tx("5691", "Trypanosoma brucei"),
    ],
    occurrence: [
    gb("7822322", "Trypanosoma brucei"),
    ],
    databases: [
    db("TriTrypDB", "https://tritrypdb.org/tritrypdb/app/record/organism/NCBITAXON_5691",undefined,"Reference genome database for kinetoplastids"),
    ],
  },
  "trypanosoma-cruzi": {
    taxa: [
    tx("5693", "Trypanosoma cruzi"),
    ],
    occurrence: [
    gb("8205154", "Trypanosoma cruzi"),
    ],
    databases: [
    db("TriTrypDB", "https://tritrypdb.org/tritrypdb/app/record/organism/NCBITAXON_5693"),
    ],
  },
  "leishmania": {
    taxa: [
    tx("5661", "Leishmania donovani"),
    ],
    occurrence: [
    gb("3235457", "Leishmania donovani"),
    ],
    databases: [
    db("TriTrypDB", "https://tritrypdb.org/tritrypdb/app/record/organism/NCBITAXON_5661",undefined,"Leishmania is a genus of ~20 species; L. donovani is the reference here"),
    ],
  },
  "schistosoma": {
    taxa: [
    tx("6183", "Schistosoma mansoni"),
    tx("6185", "Schistosoma haematobium"),
    tx("6182", "Schistosoma japonicum"),
    ],
    occurrence: [
    gb("5967489", "Schistosoma mansoni"),
    gb("6101583", "Schistosoma haematobium"),
    gb("12226118", "Schistosoma japonicum"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Schistosoma_mansoni_prjea36577/Info/Index/",undefined,"S. haematobium and S. japonicum also hosted"),
    ],
  },
  "soil-transmitted-helminths": {
    taxa: [
    tx("6252", "Ascaris lumbricoides"),
    tx("36087", "Trichuris trichiura"),
    tx("51031", "Necator americanus"),
    tx("51022", "Ancylostoma duodenale"),
    tx("6248", "Strongyloides stercoralis"),
    ],
    occurrence: [
    gb("4558786", "Ascaris lumbricoides"),
    gb("4554218", "Trichuris trichiura"),
    gb("5188627", "Necator americanus"),
    gb("4558924", "Ancylostoma duodenale"),
    gb("2283792", "Strongyloides stercoralis"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Ascaris_lumbricoides_prjeb4950/Info/Index/",undefined,"A group record: the principal species are listed"),
    ],
  },
  "onchocerca-volvulus": {
    taxa: [
    tx("6282", "Onchocerca volvulus"),
    ],
    occurrence: [
    gb("7031770", "Onchocerca volvulus"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Onchocerca_volvulus_prjeb513/Info/Index/"),
    ],
  },
  "lymphatic-filarial-worms": {
    taxa: [
    tx("6293", "Wuchereria bancrofti"),
    tx("6279", "Brugia malayi"),
    tx("42155", "Brugia timori"),
    ],
    occurrence: [
    gb("2284455", "Wuchereria bancrofti"),
    gb("7031774", "Brugia malayi"),
    gb("7031780", "Brugia timori"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Brugia_malayi_prjna10729/Info/Index/",undefined,"W. bancrofti also hosted"),
    ],
  },
  "dracunculus-medinensis": {
    taxa: [
    tx("318479", "Dracunculus medinensis"),
    ],
    occurrence: [
    gb("7032861", "Dracunculus medinensis"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Dracunculus_medinensis_prjeb500/Info/Index/"),
    ],
  },
  "taenia-solium": {
    taxa: [
    tx("6204", "Taenia solium"),
    ],
    occurrence: [
    gb("6101576", "Taenia solium"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Taenia_solium_prjna170813/Info/Index/"),
    ],
  },
  "echinococcus": {
    taxa: [
    tx("6210", "Echinococcus granulosus"),
    tx("6211", "Echinococcus multilocularis"),
    ],
    occurrence: [
    gb("5817851", "Echinococcus granulosus"),
    gb("7725417", "Echinococcus multilocularis"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Echinococcus_granulosus_prjeb121/Info/Index/",undefined,"E. multilocularis also hosted"),
    ],
  },
  "foodborne-trematodes": {
    taxa: [
    tx("79923", "Clonorchis sinensis"),
    tx("6198", "Opisthorchis viverrini"),
    tx("34504", "Paragonimus westermani"),
    tx("6192", "Fasciola hepatica"),
    ],
    occurrence: [
    gb("2505601", "Clonorchis sinensis"),
    gb("2505611", "Opisthorchis viverrini"),
    gb("2504051", "Paragonimus westermani"),
    gb("6475141", "Fasciola hepatica"),
    ],
    databases: [
    db("WormBase ParaSite", "https://parasite.wormbase.org/Clonorchis_sinensis_prjna386618/Info/Index/",undefined,"O. viverrini, P. westermani and F. hepatica also hosted"),
    ],
  },
  "mycobacterium-leprae": {
    taxa: [
    tx("1769", "Mycobacterium leprae"),
    ],
    occurrence: [
    gb("3225137", "Mycobacterium leprae"),
    ],
    databases: [
    db("NCBI RefSeq", "https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=1769",undefined,"RefSeq genome assemblies"),
    ],
  },
  "mycobacterium-ulcerans": {
    taxa: [
    tx("1809", "Mycobacterium ulcerans"),
    ],
    occurrence: [
    gb("3225170", "Mycobacterium ulcerans"),
    ],
    databases: [
    db("NCBI RefSeq", "https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=1809"),
    ],
  },
  "mycobacterium-tuberculosis": {
    taxa: [
    tx("1773", "Mycobacterium tuberculosis"),
    ],
    occurrence: [
    gb("3225140", "Mycobacterium tuberculosis"),
    ],
    databases: [
    db("NCBI RefSeq", "https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=1773"),
    ],
  },
  "treponema-pallidum-pertenue": {
    taxa: [
    tx("168", "Treponema pallidum subsp. pertenue"),
    ],
    occurrence: [
    gb("3228214", "Treponema pallidum"),
    ],
    databases: [
    db("NCBI RefSeq", "https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=168",undefined,"Subspecies causing yaws"),
    ],
  },
  "chlamydia-trachomatis": {
    taxa: [
    tx("813", "Chlamydia trachomatis"),
    ],
    occurrence: [
    gb("9098612", "Chlamydia trachomatis"),
    ],
    databases: [
    db("NCBI RefSeq", "https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=813"),
    ],
  },
  "sarcoptes-scabiei": {
    taxa: [
    tx("52283", "Sarcoptes scabiei"),
    ],
    occurrence: [
    gb("9660512", "Sarcoptes scabiei"),
    ],
  },
  "mycetoma-agents": {
    taxa: [
    tx("100816", "Madurella mycetomatis"),
    ],
    occurrence: [
    gb("3455882", "Madurella mycetomatis"),
    ],
    databases: [
    db("FungiDB", "https://fungidb.org/fungidb/app/record/organism/NCBITAXON_100816",undefined,"A group record: >70 agents cause mycetoma; M. mycetomatis is the main fungal one"),
    ],
  },
  "plasmodium": {
    taxa: [
    tx("5820", "Plasmodium"),
    tx("5833", "Plasmodium falciparum"),
    ],
    occurrence: [
    gb("10540993", "Plasmodium falciparum"),
    ],
    databases: [
    db("PlasmoDB", "https://plasmodb.org/plasmo/app/record/organism/NCBITAXON_5833",undefined,"Plasmodium genus; P. falciparum is the reference for the malaria toolkit"),
    ],
  },
  "rabies-virus": {
    taxa: [
    tx("11292", "Rabies lyssavirus"),
    ],
    occurrence: [
    gb("10111380", "Rabies lyssavirus"),
    ],
    databases: [
    db("NCBI Virus", "https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/virus?VirusLineage_ss=Rabies%20lyssavirus"),
    ],
  },
  "dengue-virus": {
    taxa: [
    tx("12637", "Dengue virus"),
    ],
    occurrence: [
    gb("10333010", "Dengue virus"),
    ],
    databases: [
    db("NCBI Virus", "https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/virus?VirusLineage_ss=Dengue%20virus",undefined,"Four serotypes (DENV-1 to 4)"),
    ],
  },
  "chikungunya-virus": {
    taxa: [
    tx("37124", "Chikungunya virus"),
    ],
    occurrence: [
    gb("10445893", "Chikungunya virus"),
    ],
    databases: [
    db("NCBI Virus", "https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/virus?VirusLineage_ss=Chikungunya%20virus"),
    ],
  },
  "zika-virus": {
    taxa: [
    tx("64320", "Zika virus"),
    ],
    occurrence: [
    gb("9884175", "Zika virus"),
    ],
    databases: [
    db("NCBI Virus", "https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/virus?VirusLineage_ss=Zika%20virus"),
    ],
  },
  "ebolavirus": {
    taxa: [
    tx("186538", "Zaire ebolavirus"),
    ],
    occurrence: [
    gb("10628304", "Zaire ebolavirus"),
    ],
    databases: [
    db("NCBI Virus", "https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/virus?VirusLineage_ss=Zaire%20ebolavirus",undefined,"Genus Orthoebolavirus; Zaire is the type species"),
    ],
  },
  "snake-venom": {
    databases: [
    db("UniProt (venom toxins)", "https://www.uniprot.org/uniprotkb?query=keyword:KW-0804%20AND%20taxonomy_name:Serpentes",undefined,"Venom is a mixture of toxins, not one organism; UniProt indexes the toxin proteins"),
    ],
  },
  "aedes-aegypti": {
    taxa: [
    tx("7159", "Aedes aegypti"),
    ],
    occurrence: [
    gb("1651891", "Aedes aegypti"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_7159"),
    ],
  },
  "aedes-albopictus": {
    taxa: [
    tx("7160", "Aedes albopictus"),
    ],
    occurrence: [
    gb("1651430", "Aedes albopictus"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_7160"),
    ],
  },
  "anopheles-mosquito": {
    taxa: [
    tx("7165", "Anopheles gambiae"),
    ],
    occurrence: [
    gb("1650518", "Anopheles gambiae"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_7165",undefined,"An. gambiae is the reference; the genus has many vector species"),
    ],
  },
  "culex-mosquito": {
    taxa: [
    tx("7176", "Culex quinquefasciatus"),
    ],
    occurrence: [
    gb("1652950", "Culex quinquefasciatus"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_7176"),
    ],
  },
  "tsetse-fly": {
    taxa: [
    tx("7394", "Glossina morsitans"),
    ],
    occurrence: [
    gb("5056025", "Glossina morsitans"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_7394",undefined,"Glossina genus; G. morsitans is the reference"),
    ],
  },
  "sandfly": {
    taxa: [
    tx("29031", "Phlebotomus papatasi"),
    tx("7200", "Lutzomyia longipalpis"),
    ],
    occurrence: [
    gb("5981170", "Phlebotomus papatasi"),
    gb("5089079", "Lutzomyia longipalpis"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_29031",undefined,"Old- and New-World sandflies; Lutzomyia longipalpis also hosted"),
    ],
  },
  "blackfly": {
    taxa: [
    tx("37338", "Simulium damnosum"),
    ],
    occurrence: [
    gb("1644037", "Simulium damnosum"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_37338",undefined,"Simulium genus; S. damnosum is the main African vector"),
    ],
  },
  "triatomine-bug": {
    taxa: [
    tx("13249", "Rhodnius prolixus"),
    tx("30076", "Triatoma infestans"),
    ],
    occurrence: [
    gb("8743956", "Rhodnius prolixus"),
    gb("7603975", "Triatoma infestans"),
    ],
    databases: [
    db("VectorBase", "https://vectorbase.org/vectorbase/app/record/organism/NCBITAXON_13249",undefined,"Triatominae; T. infestans also hosted"),
    ],
  },
  "freshwater-snails": {
    taxa: [
    tx("6526", "Biomphalaria glabrata"),
    tx("55810", "Bulinus truncatus"),
    ],
    occurrence: [
    gb("2291021", "Biomphalaria glabrata"),
    gb("7695428", "Bulinus truncatus"),
    ],
    databases: [
    db("MolluscaBase", "https://www.molluscabase.org/aphia.php?p=taxdetails&id=848622",undefined,"Biomphalaria glabrata; Bulinus truncatus (AphiaID 716338) also on MolluscaBase"),
    ],
  },
};
