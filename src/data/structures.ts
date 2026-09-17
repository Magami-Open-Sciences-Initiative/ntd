/**
   * Small-molecule structures, fetched from PubChem by `npm run fetch:structures`.
   *
   * Do not hand-edit the SMILES: each entry records the PubChem CID it came from
   * so it can be re-fetched and checked.
   *
   * LIMITATION, stated plainly: PubChem's REST endpoint returns connectivity
   * SMILES only, with no stereochemistry. Two enantiomers therefore produce
   * identical strings here - praziquantel and arpraziquantel are the case in
   * point - and the 2D structure image is what carries the configuration. Do
   * not treat smiles as a stereochemical identifier.
   *
   * Compounds with no small-molecule structure are listed in NO_STRUCTURE.
   *
   * Generated file. Last fetched: 2026-09-17.
   */

  export type Structure = {
    cid: number;
    formula: string;
    weight: string;
    smiles: string;
      image: string;
    pubchem: string;
    note?: string;
  };

  export const STRUCTURES: Record<string, Structure> = {
  "praziquantel": {
    "cid": 4891,
    "formula": "C19H24N2O2",
    "weight": "312.4",
    "smiles": "C1CCC(CC1)C(=O)N2CC3C4=CC=CC=C4CCN3C(=O)C2",
    "image": "/structures/4891.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/4891"
  },
  "arpraziquantel": {
    "cid": 445900,
    "formula": "C19H24N2O2",
    "weight": "312.4",
    "smiles": "C1CCC(CC1)C(=O)N2CC3C4=CC=CC=C4CCN3C(=O)C2",
    "image": "/structures/445900.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/445900",
    "note": "The (R)-enantiomer of praziquantel, developed as a paediatric dispersible tablet. It shares a connectivity SMILES with praziquantel and differs only in configuration, which the structure image shows."
  },
  "oxamniquine": {
    "cid": 4612,
    "formula": "C14H21N3O3",
    "weight": "279.33",
    "smiles": "CC(C)NCC1CCC2=CC(=C(C=C2N1)[N+](=O)[O-])CO",
    "image": "/structures/4612.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/4612"
  },
  "triclabendazole": {
    "cid": 50248,
    "formula": "C14H9Cl3N2OS",
    "weight": "359.7",
    "smiles": "CSC1=NC2=CC(=C(C=C2N1)Cl)OC3=C(C(=CC=C3)Cl)Cl",
    "image": "/structures/50248.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/50248"
  },
  "ivermectin": {
    "cid": 6321424,
    "formula": "C48H74O14",
    "weight": "875.1",
    "smiles": "CCC(C)C1C(CCC2(O1)CC3CC(O2)CC=C(C(C(C=CC=C4COC5C4(C(C=C(C5O)C)C(=O)O3)O)C)OC6CC(C(C(O6)C)OC7CC(C(C(O7)C)O)OC)OC)C)C",
    "image": "/structures/6321424.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/6321424",
    "note": "Structure shown is ivermectin B1a, the major component; the drug is a mixture of B1a and B1b."
  },
  "moxidectin": {
    "cid": 9832912,
    "formula": "C37H53NO8",
    "weight": "639.8",
    "smiles": "CC1CC(=CCC2CC(CC3(O2)CC(=NOC)C(C(O3)C(=CC(C)C)C)C)OC(=O)C4C=C(C(C5C4(C(=CC=C1)CO5)O)O)C)C",
    "image": "/structures/9832912.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/9832912"
  },
  "emodepside": {
    "cid": 6918632,
    "formula": "C60H90N6O14",
    "weight": "1119.4",
    "smiles": "CC1C(=O)N(C(C(=O)OC(C(=O)N(C(C(=O)OC(C(=O)N(C(C(=O)OC(C(=O)N(C(C(=O)O1)CC(C)C)C)CC2=CC=C(C=C2)N3CCOCC3)CC(C)C)C)C)CC(C)C)C)CC4=CC=C(C=C4)N5CCOCC5)CC(C)C)C",
    "image": "/structures/6918632.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/6918632"
  },
  "albendazole": {
    "cid": 2082,
    "formula": "C12H15N3O2S",
    "weight": "265.33",
    "smiles": "CCCSC1=CC2=C(C=C1)N=C(N2)NC(=O)OC",
    "image": "/structures/2082.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/2082"
  },
  "mebendazole": {
    "cid": 4030,
    "formula": "C16H13N3O3",
    "weight": "295.29",
    "smiles": "COC(=O)NC1=NC2=C(N1)C=C(C=C2)C(=O)C3=CC=CC=C3",
    "image": "/structures/4030.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/4030"
  },
  "tribendimidine": {
    "cid": 3086564,
    "formula": "C28H32N6",
    "weight": "452.6",
    "smiles": "CC(=NC1=CC=C(C=C1)N=CC2=CC=C(C=C2)C=NC3=CC=C(C=C3)N=C(C)N(C)C)N(C)C",
    "image": "/structures/3086564.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/3086564"
  },
  "oxfendazole": {
    "cid": 40854,
    "formula": "C15H13N3O3S",
    "weight": "315.3",
    "smiles": "COC(=O)NC1=NC2=C(N1)C=C(C=C2)S(=O)C3=CC=CC=C3",
    "image": "/structures/40854.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/40854"
  },
  "diethylcarbamazine": {
    "cid": 3052,
    "formula": "C10H21N3O",
    "weight": "199.29",
    "smiles": "CCN(CC)C(=O)N1CCN(CC1)C",
    "image": "/structures/3052.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/3052"
  },
  "doxycycline": {
    "cid": 54671203,
    "formula": "C22H24N2O8",
    "weight": "444.4",
    "smiles": "CC1C2C(C3C(C(=O)C(=C(C3(C(=O)C2=C(C4=C1C=CC=C4O)O)O)O)C(=O)N)N(C)C)O",
    "image": "/structures/54671203.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/54671203"
  },
  "benznidazole": {
    "cid": 31593,
    "formula": "C12H12N4O3",
    "weight": "260.25",
    "smiles": "C1=CC=C(C=C1)CNC(=O)CN2C=CN=C2[N+](=O)[O-]",
    "image": "/structures/31593.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/31593"
  },
  "nifurtimox": {
    "cid": 6842999,
    "formula": "C10H13N3O5S",
    "weight": "287.29",
    "smiles": "CC1CS(=O)(=O)CCN1N=CC2=CC=C(O2)[N+](=O)[O-]",
    "image": "/structures/6842999.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/6842999"
  },
  "fexinidazole": {
    "cid": 68792,
    "formula": "C12H13N3O3S",
    "weight": "279.32",
    "smiles": "CN1C(=CN=C1COC2=CC=C(C=C2)SC)[N+](=O)[O-]",
    "image": "/structures/68792.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/68792"
  },
  "acoziborole": {
    "cid": 44178354,
    "formula": "C17H14BF4NO3",
    "weight": "367.1",
    "smiles": "B1(C2=C(C=CC(=C2)NC(=O)C3=C(C=C(C=C3)F)C(F)(F)F)C(O1)(C)C)O",
    "image": "/structures/44178354.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/44178354"
  },
  "eflornithine": {
    "cid": 3009,
    "formula": "C6H12F2N2O2",
    "weight": "182.17",
    "smiles": "C(CC(C(F)F)(C(=O)O)N)CN",
    "image": "/structures/3009.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/3009"
  },
  "pentamidine": {
    "cid": 4735,
    "formula": "C19H24N4O2",
    "weight": "340.4",
    "smiles": "C1=CC(=CC=C1C(=N)N)OCCCCCOC2=CC=C(C=C2)C(=N)N",
    "image": "/structures/4735.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/4735"
  },
  "suramin": {
    "cid": 5361,
    "formula": "C51H40N6O23S6",
    "weight": "1297.3",
    "smiles": "CC1=C(C=C(C=C1)C(=O)NC2=C3C(=CC(=CC3=C(C=C2)S(=O)(=O)O)S(=O)(=O)O)S(=O)(=O)O)NC(=O)C4=CC(=CC=C4)NC(=O)NC5=CC=CC(=C5)C(=O)NC6=C(C=CC(=C6)C(=O)NC7=C8C(=CC(=CC8=C(C=C7)S(=O)(=O)O)S(=O)(=O)O)S(=O)(=O)O)C",
    "image": "/structures/5361.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/5361"
  },
  "melarsoprol": {
    "cid": 10311,
    "formula": "C12H15AsN6OS2",
    "weight": "398.3",
    "smiles": "C1C(S[As](S1)C2=CC=C(C=C2)NC3=NC(=NC(=N3)N)N)CO",
    "image": "/structures/10311.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/10311"
  },
  "miltefosine": {
    "cid": 3599,
    "formula": "C21H46NO4P",
    "weight": "407.6",
    "smiles": "CCCCCCCCCCCCCCCCOP(=O)([O-])OCC[N+](C)(C)C",
    "image": "/structures/3599.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/3599"
  },
  "liposomal-amphotericin-b": {
    "cid": 5280965,
    "formula": "C47H73NO17",
    "weight": "924.1",
    "smiles": "CC1C=CC=CC=CC=CC=CC=CC=CC(CC2C(C(CC(O2)(CC(CC(C(CCC(CC(CC(=O)OC(C(C1O)C)C)O)O)O)O)O)O)O)C(=O)O)OC3C(C(C(C(O3)C)O)N)O",
    "image": "/structures/5280965.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/5280965",
    "note": "The structure shown is amphotericin B; the product is the drug packaged in liposomes."
  },
  "paromomycin": {
    "cid": 165580,
    "formula": "C23H45N5O14",
    "weight": "615.6",
    "smiles": "C1C(C(C(C(C1N)OC2C(C(C(C(O2)CO)O)O)N)OC3C(C(C(O3)CO)OC4C(C(C(C(O4)CN)O)O)N)O)O)N",
    "image": "/structures/165580.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/165580"
  },
  "antimonials": {
    "cid": 16683012,
    "formula": "C12H36Na3O26Sb2+",
    "weight": "908.89",
    "smiles": "C(C(C1C(C(O[Sb](=O)(O1)O[Sb]2(=O)OC(C(C(O2)C(=O)[O-])O)C(CO)O)C(=O)[O-])O)O)O.O.O.O.O.O.O.O.O.O.[Na+].[Na+].[Na+]",
    "image": "/structures/16683012.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/16683012",
    "note": "Structure shown is sodium stibogluconate, the most widely used pentavalent antimonial."
  },
  "dapsone": {
    "cid": 2955,
    "formula": "C12H12N2O2S",
    "weight": "248.30",
    "smiles": "C1=CC(=CC=C1N)S(=O)(=O)C2=CC=C(C=C2)N",
    "image": "/structures/2955.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/2955"
  },
  "rifampicin": {
    "cid": 135398735,
    "formula": "C43H58N4O12",
    "weight": "822.9",
    "smiles": "CC1C=CC=C(C(=O)NC2=C(C(=C3C(=C2O)C(=C(C4=C3C(=O)C(O4)(OC=CC(C(C(C(C(C(C1O)C)O)C)OC(=O)C)C)OC)C)C)O)O)C=NN5CCN(CC5)C)C",
    "image": "/structures/135398735.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/135398735"
  },
  "clofazimine": {
    "cid": 2794,
    "formula": "C27H22Cl2N4",
    "weight": "473.4",
    "smiles": "CC(C)N=C1C=C2C(=NC3=CC=CC=C3N2C4=CC=C(C=C4)Cl)C=C1NC5=CC=C(C=C5)Cl",
    "image": "/structures/2794.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/2794"
  },
  "azithromycin": {
    "cid": 447043,
    "formula": "C38H72N2O12",
    "weight": "749.0",
    "smiles": "CCC1C(C(C(N(CC(CC(C(C(C(C(C(=O)O1)C)OC2CC(C(C(O2)C)O)(C)OC)C)OC3C(C(CC(O3)C)N(C)C)O)(C)O)C)C)C)O)(C)O",
    "image": "/structures/447043.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/447043"
  },
  "benzathine-penicillin": {
    "cid": 25137901,
    "formula": "C48H56N6O8S2",
    "weight": "909.1",
    "smiles": "CC1(C(N2C(S1)C(C2=O)NC(=O)CC3=CC=CC=C3)C(=O)[O-])C.CC1(C(N2C(S1)C(C2=O)NC(=O)CC3=CC=CC=C3)C(=O)[O-])C.C1=CC=C(C=C1)C[NH2+]CC[NH2+]CC2=CC=CC=C2",
    "image": "/structures/25137901.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/25137901"
  },
  "permethrin": {
    "cid": 40326,
    "formula": "C21H20Cl2O3",
    "weight": "391.3",
    "smiles": "CC1(C(C1C(=O)OCC2=CC(=CC=C2)OC3=CC=CC=C3)C=C(Cl)Cl)C",
    "image": "/structures/40326.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/40326"
  },
  "nitazoxanide": {
    "cid": 41684,
    "formula": "C12H9N3O5S",
    "weight": "307.28",
    "smiles": "CC(=O)OC1=CC=CC=C1C(=O)NC2=NC=C(S2)[N+](=O)[O-]",
    "image": "/structures/41684.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/41684"
  },
  "lxe408": {
    "cid": 118162630,
    "formula": "C23H18FN7O2",
    "weight": "443.4",
    "smiles": "CC1=C(N=CC=C1)C2=CN3C(=NC(=N3)C4=C(C=CC(=C4)NC(=O)C5=C(N=C(O5)C)C)F)N=C2",
    "image": "/structures/118162630.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/118162630"
  },
  "bedaquiline": {
    "cid": 5388906,
    "formula": "C32H31BrN2O2",
    "weight": "555.5",
    "smiles": "CN(C)CCC(C1=CC=CC2=CC=CC=C21)(C(C3=CC=CC=C3)C4=C(N=C5C=CC(=CC5=C4)Br)OC)O",
    "image": "/structures/5388906.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/5388906"
  },
  "telacebec": {
    "cid": 68234908,
    "formula": "C29H28ClF3N4O2",
    "weight": "557.0",
    "smiles": "CCC1=C(N2C=C(C=CC2=N1)Cl)C(=O)NCC3=CC=C(C=C3)N4CCC(CC4)C5=CC=C(C=C5)OC(F)(F)F",
    "image": "/structures/68234908.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/68234908"
  },
  "mosnodenvir": {
    "cid": 133083036,
    "formula": "C26H22ClF3N2O6S",
    "weight": "583.0",
    "smiles": "COC1=CC(=CC(=C1)NC(C2=C(C=C(C=C2)Cl)OC)C(=O)C3=CNC4=C3C=C(C=C4)OC(F)(F)F)S(=O)(=O)C",
    "image": "/structures/133083036.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/133083036"
  },
  "fosravuconazole": {
    "cid": 9807507,
    "formula": "C23H20F2N5O5PS",
    "weight": "547.5",
    "smiles": "CC(C1=NC(=CS1)C2=CC=C(C=C2)C#N)C(CN3C=NC=N3)(C4=C(C=C(C=C4)F)F)OCOP(=O)(O)O",
    "image": "/structures/9807507.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/9807507"
  },
  "olorofim": {
    "cid": 91885568,
    "formula": "C28H27FN6O2",
    "weight": "498.6",
    "smiles": "CC1=CC(=C(N1C)C(=O)C(=O)NC2=CC=C(C=C2)N3CCN(CC3)C4=NC=C(C=N4)F)C5=CC=CC=C5",
    "image": "/structures/91885568.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/91885568"
  },
  "artesunate": {
    "cid": 6917864,
    "formula": "C19H28O8",
    "weight": "384.4",
    "smiles": "CC1CCC2C(C(OC3C24C1CCC(O3)(OO4)C)OC(=O)CCC(=O)O)C",
    "image": "/structures/6917864.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/6917864"
  },
  "artemether-lumefantrine": {
    "cid": 68911,
    "formula": "C16H26O5",
    "weight": "298.37",
    "smiles": "CC1CCC2C(C(OC3C24C1CCC(O3)(OO4)C)OC)C",
    "image": "/structures/68911.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/68911",
    "note": "Structure shown is artemether, the fast-acting component; the combination also contains lumefantrine (PubChem CID 6437380)."
  },
  "primaquine": {
    "cid": 4908,
    "formula": "C15H21N3O",
    "weight": "259.35",
    "smiles": "CC(CCCN)NC1=C2C(=CC(=C1)OC)C=CC=N2",
    "image": "/structures/4908.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/4908"
  },
  "tafenoquine": {
    "cid": 115358,
    "formula": "C24H28F3N3O3",
    "weight": "463.5",
    "smiles": "CC1=CC(=NC2=C1C(=C(C=C2NC(C)CCCN)OC)OC3=CC=CC(=C3)C(F)(F)F)OC",
    "image": "/structures/115358.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/115358"
  },
  "chloroquine": {
    "cid": 2719,
    "formula": "C18H26ClN3",
    "weight": "319.9",
    "smiles": "CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl",
    "image": "/structures/2719.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/2719"
  },
  "isoniazid": {
    "cid": 3767,
    "formula": "C6H7N3O",
    "weight": "137.14",
    "smiles": "C1=CN=CC=C1C(=O)NN",
    "image": "/structures/3767.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/3767"
  },
  "pyrazinamide": {
    "cid": 1046,
    "formula": "C5H5N3O",
    "weight": "123.11",
    "smiles": "C1=CN=C(C=N1)C(=O)N",
    "image": "/structures/1046.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/1046"
  },
  "ethambutol": {
    "cid": 14052,
    "formula": "C10H24N2O2",
    "weight": "204.31",
    "smiles": "CCC(CO)NCCNC(CC)CO",
    "image": "/structures/14052.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/14052"
  },
  "pretomanid": {
    "cid": 456199,
    "formula": "C14H12F3N3O5",
    "weight": "359.26",
    "smiles": "C1C(COC2=NC(=CN21)[N+](=O)[O-])OCC3=CC=C(C=C3)OC(F)(F)F",
    "image": "/structures/456199.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/456199"
  },
  "linezolid": {
    "cid": 441401,
    "formula": "C16H20FN3O4",
    "weight": "337.35",
    "smiles": "CC(=O)NCC1CN(C(=O)O1)C2=CC(=C(C=C2)N3CCOCC3)F",
    "image": "/structures/441401.png",
    "pubchem": "https://pubchem.ncbi.nlm.nih.gov/compound/441401"
  }
};

  /** Drugs with no small-molecule structure, and why. */
  export const NO_STRUCTURE: Record<string, string> = {
  "snake-antivenom": "Not a single molecule: a polyclonal mixture of antibodies purified from the plasma of immunised animals.",
  "rabies-postexposure-prophylaxis": "Not a single molecule: an inactivated virus vaccine given with human rabies immunoglobulin.",
  "ixchiq": "Not a single molecule: a live-attenuated chikungunya virus vaccine.",
  "ansuvimab": "Not a small molecule: a monoclonal antibody, a protein of about 1,400 amino acids."
};
  