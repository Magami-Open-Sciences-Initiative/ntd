/**
 * Institution → country links (domicile).
 *
 * GENERATED from each institution's `country` field, mapped to the corpus
 * country record of the same name. Only the 27 corpus (burden) countries have
 * records, so institutions domiciled elsewhere (the United States, Switzerland,
 * the United Kingdom and others) keep their free-text country field and carry
 * no graph link — the corpus deliberately scopes country records to countries
 * where these diseases are prevalent.
 */
export const INSTITUTION_COUNTRIES: Record<string, string[]> = {
  "acegid": ["nigeria"],
  "addis-ababa-university": ["ethiopia"],
  "africa-cdc": ["ethiopia"],
  "ahri": ["ethiopia"],
  "bahir-dar-derm": ["ethiopia"],
  "butantan-institute": ["brazil"],
  "fiocruz": ["brazil"],
  "icddrb": ["bangladesh"],
  "icipe-arbovirus": ["kenya"],
  "icmr": ["india"],
  "ifakara": ["tanzania"],
  "inrb": ["dr-congo"],
  "ipd": ["senegal"],
  "ivo-de-carneri": ["tanzania"],
  "kccr": ["ghana"],
  "kccr-snakebite": ["ghana"],
  "kccr-yaws": ["ghana"],
  "kemi": ["kenya"],
  "kemri-tungiasis": ["kenya"],
  "kenya-antivenom-qc-lab": ["kenya"],
  "knust-filarial": ["ghana"],
  "knust-scabies": ["ghana"],
  "krisp-stellenbosch": ["south-africa"],
  "makerere-tungiasis": ["uganda"],
  "makerere-university": ["uganda"],
  "mrc-khartoum": ["sudan"],
  "noguchi": ["ghana"],
  "noma-children-hospital": ["nigeria"],
  "noma-survivors-association": ["nigeria"],
  "nwu-pharmacen": ["south-africa"],
  "pasteur-dakar-arbo": ["senegal"],
  "pnltha-drc": ["dr-congo"],
  "rhodes-rubi": ["south-africa"],
  "snakebite-research-hospital-kaltungo": ["nigeria"],
  "udus-sokoto-noma": ["nigeria"],
  "university-of-gondar": ["ethiopia"],
  "unn-pharmacy": ["nigeria"],
  "uvri": ["uganda"],
  "zero-noma": ["nigeria"],
};
