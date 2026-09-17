/**
 * Protein sequences, PDB entries and AlphaFold models for the drug targets,
 * fetched by `npm run fetch:targets`.
 *
 * Do not hand-edit. Each entry records the UniProt accession it came from, and
 * the fetch re-asserts the protein name and sequence length before writing, so
 * a remapped or wrong accession fails the run rather than being published.
 *
 * AlphaFold file URLs are read from the AlphaFold API and are versioned by it
 * (currently v6); do not construct them by hand.
 *
 * LIMITATION, stated plainly: these are computationally predicted models, not
 * experimental structures. The pLDDT confidence is recorded per target because
 * a low-confidence region of a model should not be read like a solved structure.
 * Experimental structures, where they exist, are the PDB entries.
 *
 * Targets with no single protein to attach are listed in NO_SEQUENCE with the
 * reason. Model-organism stand-ins are deliberately not used.
 *
 * Generated file. Last fetched: 2026-09-17.
 */

export type TargetSequence = {
  /** UniProt accession the sequence came from */
  uniprot: string;
  /** UniProt entry name, e.g. INHA_MYCTU */
  entryName: string;
  proteinName: string;
  /** UniProt's own name for the entry, when it differs from proteinName */
  uniprotName?: string;
  organism: string;
  /** true when the entry is in UniProtKB/Swiss-Prot (reviewed) */
  reviewed: boolean;
  gene?: string;
  length: number;
  /** The amino-acid sequence, one-letter code */
  sequence: string;
  /** AlphaFold predicted model, absent when AlphaFold has none for this entry */
  alphafold?: {
    page: string;
    /** Direct model download (PDB format) */
    pdb: string;
    cif: string;
    /** AlphaFold model version */
    version: number;
    /** Mean pLDDT over the model, 0-100; above 90 is confidently modelled */
    plddt: number;
    /** Fraction of residues with pLDDT above 90 */
    plddtVeryHigh: number;
  };
  /** Experimental structures in the PDB, and how many exist in total */
  pdb?: { ids: string[]; total: number };
  note?: string;
};

export const TARGET_SEQUENCES: Record<string, TargetSequence> = {
  "inha": {
    "uniprot": "P9WGR1",
    "entryName": "INHA_MYCTU",
    "proteinName": "Enoyl-[acyl-carrier-protein] reductase InhA",
    "uniprotName": "Enoyl-[acyl-carrier-protein] reductase [NADH]",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "inhA",
    "length": 269,
    "sequence": "MTGLLDGKRILVSGIITDSSIAFHIARVAQEQGAQLVLTGFDRLRLIQRITDRLPAKAPLLELDVQNEEHLASLAGRVTEAIGAGNKLDGVVHSIGFMPQTGMGINPFFDAPYADVSKGIHISAYSYASMAKALLPIMNPGGSIVGMDFDPSRAMPAYNWMTVAKSALESVNRFVAREAGKYGVRSNLVAAGPIRTLAMSAIVGGALGEEAGAQIQLLEEGWDQRAPIGWNMKDATPVAKTVCALLSDWLPATTGDIIYADGGAHTQLL",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WGR1",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WGR1-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WGR1-F1-model_v6.cif",
      "version": 6,
      "plddt": 94.19,
      "plddtVeryHigh": 0.836
    },
    "pdb": {
      "ids": [
        "1BVR",
        "1ENY",
        "1ENZ",
        "1P44",
        "1P45",
        "1ZID"
      ],
      "total": 135
    }
  },
  "dpre1": {
    "uniprot": "P9WJF1",
    "entryName": "DPRE1_MYCTU",
    "proteinName": "Decaprenylphosphoryl-beta-D-ribose oxidase DprE1",
    "uniprotName": "Decaprenylphosphoryl-beta-D-ribose oxidase",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "dprE1",
    "length": 461,
    "sequence": "MLSVGATTTATRLTGWGRTAPSVANVLRTPDAEMIVKAVARVAESGGGRGAIARGLGRSYGDNAQNGGGLVIDMTPLNTIHSIDADTKLVDIDAGVNLDQLMKAALPFGLWVPVLPGTRQVTVGGAIACDIHGKNHHSAGSFGNHVRSMDLLTADGEIRHLTPTGEDAELFWATVGGNGLTGIIMRATIEMTPTSTAYFIADGDVTASLDETIALHSDGSEARYTYSSAWFDAISAPPKLGRAAVSRGRLATVEQLPAKLRSEPLKFDAPQLLTLPDVFPNGLANKYTFGPIGELWYRKSGTYRGKVQNLTQFYHPLDMFGEWNRAYGPAGFLQYQFVIPTEAVDEFKKIIGVIQASGHYSFLNVFKLFGPRNQAPLSFPIPGWNICVDFPIKDGLGKFVSELDRRVLEFGGRLYTAKDSRTTAETFHAMYPRVDEWISVRRKVDPLRVFASDMARRLELL",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WJF1",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WJF1-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WJF1-F1-model_v6.cif",
      "version": 6,
      "plddt": 94.81,
      "plddtVeryHigh": 0.92
    },
    "pdb": {
      "ids": [
        "21GQ",
        "21GR",
        "21GT",
        "43FX",
        "4FDN",
        "4FDO"
      ],
      "total": 31
    }
  },
  "qcrb": {
    "uniprot": "P9WP37",
    "entryName": "QCRB_MYCTU",
    "proteinName": "Cytochrome bc1 complex cytochrome b subunit QcrB",
    "uniprotName": "Cytochrome bc1 complex cytochrome b subunit",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "qcrB",
    "length": 549,
    "sequence": "MSPKLSPPNIGEVLARQAEDIDTRYHPSAALRRQLNKVFPTHWSFLLGEIALYSFVVLLITGVYLTLFFDPSMVDVTYNGVYQPLRGVEMSRAYQSALDISFEVRGGLFVRQIHHWAALMFAAAIMVHLARIFFTGAFRRPRETNWVIGSLLLILAMFEGYFGYSLPDDLLSGLGLRAALSSITLGMPVIGTWLHWALFGGDFPGTILIPRLYALHILLLPGIILALIGLHLALVWFQKHTQFPGPGRTEHNVVGVRVMPVFAFKSGAFFAAIVGVLGLMGGLLQINPIWNLGPYKPSQVSAGSQPDFYMMWTEGLARIWPPWEFYFWHHTIPAPVWVAVIMGLVFVLLPAYPFLEKRFTGDYAHHNLLQRPRDVPVRTAIGAMAIAFYMVLTLAAMNDIIALKFHISLNATTWIGRIGMVILPPFVYFITYRWCIGLQRSDRSVLEHGVETGIIKRLPHGAYIELHQPLGPVDEHGHPIPLQYQGAPLPKRMNKLGSAGSPGSGSFLFADSAAEDAALREAGHAAEQRALAALREHQDSIMGSPDGEH",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WP37",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WP37-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WP37-F1-model_v6.cif",
      "version": 6,
      "plddt": 94.75,
      "plddtVeryHigh": 0.942
    },
    "pdb": {
      "ids": [
        "7E1V",
        "7E1W",
        "7E1X",
        "8HCR"
      ],
      "total": 4
    }
  },
  "atp-synthase": {
    "uniprot": "P9WPS1",
    "entryName": "ATPL_MYCTU",
    "proteinName": "ATP synthase subunit c (AtpE)",
    "uniprotName": "ATP synthase subunit c",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "atpE",
    "length": 81,
    "sequence": "MDPTIAAGALIGGGLIMAGGAIGAGIGDGVAGNALISGVARQPEAQGRLFTPFFITVGLVEAAYFINLAFMALFVFATPVK",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WPS1",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WPS1-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WPS1-F1-model_v6.cif",
      "version": 6,
      "plddt": 95.31,
      "plddtVeryHigh": 0.914
    },
    "pdb": {
      "ids": [
        "8J0S",
        "8J0T",
        "8J57",
        "8J58",
        "8JR0",
        "8JR1"
      ],
      "total": 6
    }
  },
  "rna-polymerase": {
    "uniprot": "P9WGY9",
    "entryName": "RPOB_MYCTU",
    "proteinName": "DNA-directed RNA polymerase subunit beta (RpoB)",
    "uniprotName": "DNA-directed RNA polymerase subunit beta",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "rpoB",
    "length": 1178,
    "sequence": "MLEGCILADSRQSKTAASPSPSRPQSSSNNSVPGAPNRVSFAKLREPLEVPGLLDVQTDSFEWLIGSPRWRESAAERGDVNPVGGLEEVLYELSPIEDFSGSMSLSFSDPRFDDVKAPVDECKDKDMTYAAPLFVTAEFINNNTGEIKSQTVFMGDFPMMTEKGTFIINGTERVVVSQLVRSPGVYFDETIDKSTDKTLHSVKVIPSRGAWLEFDVDKRDTVGVRIDRKRRQPVTVLLKALGWTSEQIVERFGFSEIMRSTLEKDNTVGTDEALLDIYRKLRPGEPPTKESAQTLLENLFFKEKRYDLARVGRYKVNKKLGLHVGEPITSSTLTEEDVVATIEYLVRLHEGQTTMTVPGGVEVPVETDDIDHFGNRRLRTVGELIQNQIRVGMSRMERVVRERMTTQDVEAITPQTLINIRPVVAAIKEFFGTSQLSQFMDQNNPLSGLTHKRRLSALGPGGLSRERAGLEVRDVHPSHYGRMCPIETPEGPNIGLIGSLSVYARVNPFGFIETPYRKVVDGVVSDEIVYLTADEEDRHVVAQANSPIDADGRFVEPRVLVRRKAGEVEYVPSSEVDYMDVSPRQMVSVATAMIPFLEHDDANRALMGANMQRQAVPLVRSEAPLVGTGMELRAAIDAGDVVVAEESGVIEEVSADYITVMHDNGTRRTYRMRKFARSNHGTCANQCPIVDAGDRVEAGQVIADGPCTDDGEMALGKNLLVAIMPWEGHNYEDAIILSNRLVEEDVLTSIHIEEHEIDARDTKLGAEEITRDIPNISDEVLADLDERGIVRIGAEVRDGDILVGKVTPKGETELTPEERLLRAIFGEKAREVRDTSLKVPHGESGKVIGIRVFSREDEDELPAGVNELVRVYVAQKRKISDGDKLAGRHGNKGVIGKILPVEDMPFLADGTPVDIILNTHGVPRRMNIGQILETHLGWCAHSGWKVDAAKGVPDWAARLPDELLEAQPNAIVSTPVFDGAQEAELQGLLSCTLPNRDGDVLVDADGKAMLFDGRSGEPFPYPVTVGYMYIMKLHHLVDDKIHARSTGPYSMITQQPLGGKAQFGGQRFGEMECWAMQAYGAAYTLQELLTIKSDDTVGRVKVYEAIVKGENIPEPGIPESFKVLLKELQSLCLNVEVLSSDGAAIELREGEDEDLERAAANLGINLSRNESASVEDLA",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WGY9",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WGY9-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WGY9-F1-model_v6.cif",
      "version": 6,
      "plddt": 91.12,
      "plddtVeryHigh": 0.778
    },
    "pdb": {
      "ids": [
        "10MI",
        "10MJ",
        "10MK",
        "10ML",
        "4KBJ",
        "4KBM"
      ],
      "total": 96
    }
  },
  "embb": {
    "uniprot": "P9WNL7",
    "entryName": "EMBB_MYCTU",
    "proteinName": "Probable arabinosyltransferase B (EmbB)",
    "uniprotName": "Probable arabinosyltransferase B",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "embB",
    "length": 1098,
    "sequence": "MTQCASRRKSTPNRAILGAFASARGTRWVATIAGLIGFVLSVATPLLPVVQTTAMLDWPQRGQLGSVTAPLISLTPVDFTATVPCDVVRAMPPAGGVVLGTAPKQGKDANLQALFVVVSAQRVDVTDRNVVILSVPREQVTSPQCQRIEVTSTHAGTFANFVGLKDPSGAPLRSGFPDPNLRPQIVGVFTDLTGPAPPGLAVSATIDTRFSTRPTTLKLLAIIGAIVATVVALIALWRLDQLDGRGSIAQLLLRPFRPASSPGGMRRLIPASWRTFTLTDAVVIFGFLLWHVIGANSSDDGYILGMARVADHAGYMSNYFRWFGSPEDPFGWYYNLLALMTHVSDASLWMRLPDLAAGLVCWLLLSREVLPRLGPAVEASKPAYWAAAMVLLTAWMPFNNGLRPEGIIALGSLVTYVLIERSMRYSRLTPAALAVVTAAFTLGVQPTGLIAVAALVAGGRPMLRILVRRHRLVGTLPLVSPMLAAGTVILTVVFADQTLSTVLEATRVRAKIGPSQAWYTENLRYYYLILPTVDGSLSRRFGFLITALCLFTAVFIMLRRKRIPSVARGPAWRLMGVIFGTMFFLMFTPTKWVHHFGLFAAVGAAMAALTTVLVSPSVLRWSRNRMAFLAALFFLLALCWATTNGWWYVSSYGVPFNSAMPKIDGITVSTIFFALFAIAAGYAAWLHFAPRGAGEGRLIRALTTAPVPIVAGFMAAVFVASMVAGIVRQYPTYSNGWSNVRAFVGGCGLADDVLVEPDTNAGFMKPLDGDSGSWGPLGPLGGVNPVGFTPNGVPEHTVAEAIVMKPNQPGTDYDWDAPTKLTSPGINGSTVPLPYGLDPARVPLAGTYTTGAQQQSTLVSAWYLLPKPDDGHPLVVVTAAGKIAGNSVLHGYTPGQTVVLEYAMPGPGALVPAGRMVPDDLYGEQPKAWRNLRFARAKMPADAVAVRVVAEDLSLTPEDWIAVTPPRVPDLRSLQEYVGSTQPVLLDWAVGLAFPCQQPMLHANGIAEIPKFRITPDYSAKKLDTDTWEDGTNGGLLGITDLLLRAHVMATYLSRDWARDWGSLRKFDTLVDAPPAQLELGTATRSGLWSPGKIRIGP",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WNL7",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WNL7-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WNL7-F1-model_v6.cif",
      "version": 6,
      "plddt": 92.69,
      "plddtVeryHigh": 0.87
    },
    "pdb": {
      "ids": [
        "7BVF"
      ],
      "total": 1
    }
  },
  "ddn": {
    "uniprot": "P9WP15",
    "entryName": "DDN_MYCTU",
    "proteinName": "Deazaflavin-dependent nitroreductase Ddn",
    "uniprotName": "Deazaflavin-dependent nitroreductase",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "ddn",
    "length": 151,
    "sequence": "MPKSPPRFLNSPLSDFFIKWMSRINTWMYRRNDGEGLGGTFQKIPVALLTTTGRKTGQPRVNPLYFLRDGGRVIVAASKGGAEKNPMWYLNLKANPKVQVQIKKEVLDLTARDATDEERAEYWPQLVTMYPSYQDYQSWTDRTIPIVVCEP",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P9WP15",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P9WP15-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P9WP15-F1-model_v6.cif",
      "version": 6,
      "plddt": 91.69,
      "plddtVeryHigh": 0.709
    },
    "pdb": {
      "ids": [
        "3R5L",
        "3R5P",
        "3R5R",
        "3R5W"
      ],
      "total": 4
    }
  },
  "pnca": {
    "uniprot": "I6XD65",
    "entryName": "PNCA_MYCTU",
    "proteinName": "Nicotinamidase/pyrazinamidase PncA",
    "uniprotName": "Nicotinamidase/pyrazinamidase",
    "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
    "reviewed": true,
    "gene": "pncA",
    "length": 186,
    "sequence": "MRALIIVDVQNDFCEGGSLAVTGGAALARAISDYLAEAADYHHVVATKDFHIDPGDHFSGTPDYSSSWPPHCVSGTPGADFHPSLDTSAIEAVFYKGAYTGAYSGFEGVDENGTPLLNWLRQRGVDEVDVVGIATDHCVRQTAEDAVRNGLATRVLVDLTAGVSADTTVAALEEMRTASVELVCSS",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/I6XD65",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-I6XD65-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-I6XD65-F1-model_v6.cif",
      "version": 6,
      "plddt": 97.31,
      "plddtVeryHigh": 0.968
    },
    "pdb": {
      "ids": [
        "3PL1"
      ],
      "total": 1
    }
  },
  "dihydropteroate-synthase": {
    "uniprot": "P0C0X1",
    "entryName": "DHPS1_MYCLE",
    "proteinName": "Dihydropteroate synthase FolP1",
    "uniprotName": "Dihydropteroate synthase",
    "organism": "Mycobacterium leprae (strain TN)",
    "reviewed": true,
    "gene": "folP1",
    "length": 284,
    "sequence": "MSLAPVQVIGVLNVTDNSFSDGGRYLDPDDAVQHGLAMVAEGAAIVDVGGESTRPGAIRTDPRVELSRIVPVVKELAAQGITVSIDTTRADVARAALQSGARIVNDVSGGRADPAMAPLVAEAGVAWVLMHWRLMSAERPYEAPNYRDVVAEVRADLLAGVDQAVAAGVDPGSLVIDPGLGFAKTGQHNWALLNALPELVATGVPILLGASRKRFLGRLLAGADGAVRPPDGRETATAVISALAALHGAWGVRVHDVRASVDALKVVGAWLHAGPQIEKVRCDG",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P0C0X1",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P0C0X1-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P0C0X1-F1-model_v6.cif",
      "version": 6,
      "plddt": 90.56,
      "plddtVeryHigh": 0.778
    }
  },
  "penicillin-binding-protein": {
    "uniprot": "Q5FAC7",
    "entryName": "PBPA_NEIG1",
    "proteinName": "Penicillin-binding protein 1A",
    "organism": "Neisseria gonorrhoeae (strain ATCC 700825 / FA 1090)",
    "reviewed": true,
    "gene": "mrcA",
    "length": 798,
    "sequence": "MIKKILTTCFGLFFGFCVFGVGLVAIAILVTYPKLPSLDSLQHYQPKMPLTIYSADGEVIGMYGEQRREFTKIGDFPEVLRNAVIAAEDKRFYRHWGVDVWGVARAAVGNVVSGSVQSGASTITQQVAKNFYLSSEKTFTRKFNEVLLAYKIEQSLSKDKILELYFNQIYLGQRAYGFASAAQIYFNKNVRDLTLAEAAMLAGLPKAPSAYNPIVNPERAKLRQKYILNNMLEEKMITVQQRDQALNEELHYERFVRKIDQSALYVAEMVRRELYEKYGEDAYTQGFKVYTTVRTDHQKAATEALRKALRNFDRGSSYRGAENYIDLSKSEDVEETVSQYLSGLYTVDKMVPAVVLDVTKKKNVVIQLPGGRRVALDRRALGFAARAVDNEKMGEDRIRRGAVIRVKNNGGRWAVVQEPLLQGALVSLDAKTGAVRALVGGYDFHSKTFNRAVQAMRQPGSTFKPFVYSAALSKGMTASTVVNDAPISLPGKGPNGSVWTPKNSDGRYSGYITLRQALTASKNMVSIRILMSIGVGYAQQYIRRFGFRPSELPASLSMALGTGETTPLKVAEAYSVFANGGYRVSSHVIDKIYDRDGRLRAQMQPLVAGQNAPQAIDPRNAYIMYKIMQDVVRVGTARGAAALGRTDIAGKTGTTNDNKDAWFVGFNPDVVTAVYIGFDKPKSMGRAGYGGTIAVPVWVDYMRFALKGKQGKGMKMPEGVVSSNGEYYMKERMVTDPGLMLDNSGIAPQPSRRAKEDDEAAVENEQQGRSDETRQDVQETPVLPSNTDSKQQQLDSLF",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/Q5FAC7",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-Q5FAC7-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-Q5FAC7-F1-model_v6.cif",
      "version": 6,
      "plddt": 87.81,
      "plddtVeryHigh": 0.669
    },
    "note": "from strain SS14; the Nichols reference strain carries the homologous TP_0574"
  },
  "cruzain": {
    "uniprot": "P25779",
    "entryName": "CYSP_TRYCR",
    "proteinName": "Cruzain (cruzipain), cathepsin L-like cysteine protease",
    "uniprotName": "Cruzipain",
    "organism": "Trypanosoma cruzi",
    "reviewed": true,
    "length": 467,
    "sequence": "MSGWARALLLAAVLVVMACLVPAATASLHAEETLTSQFAEFKQKHGRVYESAAEEAFRLSVFRENLFLARLHAAANPHATFGVTPFSDLTREEFRSRYHNGAAHFAAAQERARVPVKVEVVGAPAAVDWRARGAVTAVKDQGQCGSCWAFSAIGNVECQWFLAGHPLTNLSEQMLVSCDKTDSGCSGGLMNNAFEWIVQENNGAVYTEDSYPYASGEGISPPCTTSGHTVGATITGHVELPQDEAQIAAWLAVNGPVAVAVDASSWMTYTGGVMTSCVSEQLDHGVLLVGYNDSAAVPYWIIKNSWTTQWGEEGYIRIAKGSNQCLVKEEASSAVVGGPGPTPEPTTTTTTSAPGPSPSYFVQMSCTDAACIVGCENVTLPTGQCLLTTSGVSAIVTCGAETLTEEVFLTSTHCSGPSVRSSVPLNKCNRLLRGSVEFFCGSSSSGRLADVDRQRRHQPYHSRHRRL",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P25779",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P25779-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P25779-F1-model_v6.cif",
      "version": 6,
      "plddt": 87.94,
      "plddtVeryHigh": 0.702
    },
    "pdb": {
      "ids": [
        "1AIM",
        "1EWL",
        "1EWM",
        "1EWO",
        "1EWP",
        "1F29"
      ],
      "total": 31
    }
  },
  "trypanothione-reductase": {
    "uniprot": "P28593",
    "entryName": "TYTR_TRYCR",
    "proteinName": "Trypanothione reductase",
    "organism": "Trypanosoma cruzi",
    "reviewed": true,
    "gene": "TPR",
    "length": 492,
    "sequence": "MMSKIFDLVVIGAGSGGLEAAWNAATLYKKRVAVIDVQMVHGPPFFSALGGTCVNVGCVPKKLMVTGAQYMEHLRESAGFGWEFDRTTLRAEWKKLIAVKDEAVLNINKSYEEMFRDTEGLEFFLGWGSLESKNVVNVRESADPASAVKERLETENILLASGSWPHMPNIPGIEHCISSNEAFYLPEPPRRVLTVGGGFISVEFAGIFNAYKPKDGQVTLCYRGEMILRGFDHTLREELTKQLTANGIQILTKENPAKVELNADGSKSVTFESGKKMDFDLVMMAIGRSPRTKDLQLQNAGVMIKNGGVQVDEYSRTNVSNIYAIGDVTNRVMLTPVAINEAAALVDTVFGTNPRKTDHTRVASAVFSIPPIGTCGLIEEVASKRYEVVAVYLSSFTPLMHNISGSKYKTFVAKIITNHSDGTVLGVHLLGDNAPEIIQGVGICLKLNAKISDFYNTIGVHPTSAEELCSMRTPSYYYVKGEKMEKPSEASL",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P28593",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P28593-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P28593-F1-model_v6.cif",
      "version": 6,
      "plddt": 97.62,
      "plddtVeryHigh": 0.974
    },
    "pdb": {
      "ids": [
        "1AOG",
        "1BZL",
        "1GXF",
        "1NDA",
        "4NEW"
      ],
      "total": 5
    }
  },
  "cyp51": {
    "uniprot": "Q7Z1V1",
    "entryName": "CP51_TRYCC",
    "proteinName": "Sterol 14-alpha demethylase (CYP51)",
    "uniprotName": "Sterol 14-alpha demethylase",
    "organism": "Trypanosoma cruzi (strain CL Brener)",
    "reviewed": true,
    "gene": "CYP51",
    "length": 481,
    "sequence": "MFIEAIVLALTALILYSVYSVKSFNTTRPTDPPVYPVTVPFLGHIVQFGKNPLEFMQRCKRDLKSGVFTISIGGQRVTIVGDPHEHSRFFSPRNEILSPREVYTIMTPVFGEGVAYAAPYPRMREQLNFLAEELTIAKFQNFVPAIQHEVRKFMAENWKEDEGVINLLEDCGAMIINTACQCLFGEDLRKRLNARHFAQLLSKMESSLIPAAVFMPWLLRLPLPQSARCREARAELQKILGEIIVAREKEEASKDNNTSDLLGGLLKAVYRDGTRMSLHEVCGMIVAAMFAGQHTSTITTSWSMLHLMHPKNKKWLDKLHKEIDEFPAQLNYDNVMDEMPFAERCVRESIRRDPPLLMVMRMVKAEVKVGSYVVPKGDIIACSPLLSHHDEEAFPNPRLWDPERDEKVDGAFIGFGAGVHKCIGQKFALLQVKTILATAFREYDFQLLRDEVPDPDYHTMVVGPTLNQCLVKYTRKKKLPS",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/Q7Z1V1",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-Q7Z1V1-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-Q7Z1V1-F1-model_v6.cif",
      "version": 6,
      "plddt": 92.12,
      "plddtVeryHigh": 0.723
    },
    "pdb": {
      "ids": [
        "2WUZ",
        "2WX2",
        "3K1O",
        "3KHM",
        "3KSW",
        "3ZG2"
      ],
      "total": 21
    },
    "note": "settled by the PDB: six inhibitor-complex structures (3KSW, 3ZG2, 3ZG3, 4CK8, 4CK9, 4CKA) all cross-reference this accession, which is 99.6% identical to the other T. cruzi CYP51 entry"
  },
  "ornithine-decarboxylase": {
    "uniprot": "P07805",
    "entryName": "DCOR_TRYBB",
    "proteinName": "Ornithine decarboxylase (ODC)",
    "uniprotName": "Ornithine decarboxylase",
    "organism": "Trypanosoma brucei brucei",
    "reviewed": true,
    "length": 423,
    "sequence": "MDIVVNDDLSCRFLEGFNTRDALCKKISMNTCDEGDPFFVADLGDIVRKHETWKKCLPRVTPFYAVKCNDDWRVLGTLAALGTGFDCASNTEIQRVRGIGVPPEKIIYANPCKQISHIRYARDSGVDVMTFDCVDELEKVAKTHPKAKMVLRISTDDSLARCRLSVKFGAKVEDCRFILEQAKKLNIDVTGVSFHVGSGSTDASTFAQAISDSRFVFDMGTELGFNMHILDIGGGFPGTRDAPLKFEEIAGVINNALEKHFPPDLKLTIVAEPGRYYVASAFTLAVNVIAKKVTPGVQTDVGAHAESNAQSFMYYVNDGVYGSFNCILYDHAVVRPLPQREPIPNEKLYPSSVWGPTCDGLDQIVERYYLPEMQVGEWLLFEDMGAYTVVGTSSFNGFQSPTIYYVVSGLPDHVVRELKSQKS",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/P07805",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-P07805-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-P07805-F1-model_v6.cif",
      "version": 6,
      "plddt": 91,
      "plddtVeryHigh": 0.771
    },
    "pdb": {
      "ids": [
        "1F3T",
        "1QU4",
        "1SZR",
        "2TOD"
      ],
      "total": 4
    }
  },
  "nmt": {
    "uniprot": "Q4Q5S8",
    "entryName": "Q4Q5S8_LEIMA",
    "proteinName": "Glycylpeptide N-tetradecanoyltransferase (N-myristoyltransferase)",
    "uniprotName": "Glycylpeptide N-tetradecanoyltransferase",
    "organism": "Leishmania major",
    "reviewed": false,
    "gene": "NMT",
    "length": 421,
    "sequence": "MSRNPSNSDAAHAFWSTQPVPQTEDETEKIVFAGPMDEPKTVADIPEEPYPIASTFEWWTPNMEAADDIHAIYELLRDNYVEDDDSMFRFNYSEEFLQWALCPPNYIPDWHVAVRRKADKKLLAFIAGVPVTLRMGTPKYMKVKAQEKGEGEEAAKYDEPRHICEINFLCVHKQLREKRLAPILIKEATRRVNRTNVWQAVYTAGVLLPTPYASGQYFHRSLNPEKLVEIRFSGIPAQYQKFQNPMAMLKRNYQLPSAPKNSGLREMKPSDVPQVRRILMNYLDSFDVGPVFSDAEISHYLLPRDGVVFTYVVENDKKVTDFFSFYRIPSTVIGNSNYNLLNAAYVHYYAATSIPLHQLILDLLIVAHSRGFDVCNMVEILDNRSFVEQLKFGAGDGHLRYYFYNWAYPKIKPSQVALVML",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/Q4Q5S8",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-Q4Q5S8-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-Q4Q5S8-F1-model_v6.cif",
      "version": 6,
      "plddt": 94.06,
      "plddtVeryHigh": 0.881
    },
    "pdb": {
      "ids": [
        "2WSA",
        "3H5Z",
        "4A2Z",
        "4A30",
        "4A31",
        "4A32"
      ],
      "total": 56
    }
  },
  "schistosome-tgr": {
    "uniprot": "Q962Y6",
    "entryName": "Q962Y6_SCHMA",
    "proteinName": "Thioredoxin glutathione reductase (TGR)",
    "uniprotName": "thioredoxin-disulfide reductase (NADPH)",
    "organism": "Schistosoma mansoni",
    "reviewed": false,
    "gene": "TGR",
    "length": 598,
    "sequence": "MPPADGTSQWLRKTVDSAAVILFSKTTCPYCKKVKDVLAEAKIKHATIELDQLSNGSAIQKCLASFSKIETVPQMFVRGKFIGDSQTVLKYYSNDELAGIVNESKYDYDLIVIGGGSGGLAAGKEAAKYGAKTAVLDYVEPTPIGTTWGLGGTCVNVGCIPKKLMHQAGLLSHALEDAEHFGWSLDRSKISHNWSTMVEGVQSHIGSLNWGYKVALRDNQVTYLNAKGRLISPHEVQITDKNQKVSTITGNKIILATGERPKYPEIPGAVEYGITSDDLFSLPYFPGKTLVIGASYVALECAGFLASLGGDVTVMVRSILLRGFDQQMAEKVGDYMENHGVKFAKLCVPDEIKQLKVVDTENNKPGLLLVKGHYTDGKKFEEEFETVIFAVGREPQLSKVLCETVGVKLDKNGRVVCTDDEQTTVSNVYAIGDINAGKPQLTPVAIQAGRYLARRLFAGATELTDYSNVATTVFTPLEYGACGLSEEDAIEKYGDKDIEVYHSNFKPLEWTVAHREDNVCYMKLVCRKSDNMRVLGLHVLGPNAGEITQGYAVAIKMGATKADFDRTIGIHPTCSETFTTLHVTKKSGVSPIVSGCXG",
    "pdb": {
      "ids": [
        "2V6O",
        "2X8C",
        "2X8G",
        "2X8H",
        "2X99",
        "3H4K"
      ],
      "total": 44
    },
    "note": "a selenoprotein fusion of thioredoxin reductase and glutaredoxin domains; the crystal structures use the 630 aa precursor A0A3Q0KFL1, which differs only by a 34-residue signal peptide"
  },
  "schistosome-hdac8": {
    "uniprot": "A5H660",
    "entryName": "A5H660_SCHMA",
    "proteinName": "Histone deacetylase 8 (SmHDAC8)",
    "uniprotName": "histone deacetylase",
    "organism": "Schistosoma mansoni",
    "reviewed": false,
    "gene": "HDAC8",
    "length": 440,
    "sequence": "MSVGIVYGDQYRQLCCSSPKFGDRYALVMDLINAYKLIPELSRVPPLQWDSPSRMYEAVTAFHSTEYVDALKKLQMLHCEEKELTADDELLMDSFSLNYDCPGFPSVFDYSLAAVQGSLAAASALICRHCEVVINWGGGWHHAKRSEASGFCYLNDIVLAIHRLVSSTPPETSPNRQTRVLYVDLDLHHGDGVEEAFWYSPRVVTFSVHHASPGFFPGTGTWNMVDNDKLPIFLNGAGRGRFSAFNLPLEEGINDLDWSNAIGPILDSLNIVIQPSYVVVQCGADCLATDPHRIFRLTNFYPNLNLDSDCDSECSLSGYLYAIKKILSWKVPTLILGGGGYNFPDTARLWTRVTALTIEEVKGKKMTISPEIPEHSYFSRYGPDFELDIDYFPHESHNKTLDSIQKHHRRILEQLRNYADLNKLIYDYDQVYQLYNLTGM",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/A5H660",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-A5H660-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-A5H660-F1-model_v6.cif",
      "version": 6,
      "plddt": 92,
      "plddtVeryHigh": 0.8
    },
    "pdb": {
      "ids": [
        "4BZ5",
        "4BZ6",
        "4BZ7",
        "4BZ8",
        "4BZ9",
        "4CQF"
      ],
      "total": 35
    }
  },
  "schistosome-sulfotransferase": {
    "uniprot": "G4VLE5",
    "entryName": "G4VLE5_SCHMA",
    "proteinName": "Sulfotransferase (the oxamniquine-activating enzyme)",
    "uniprotName": "Sulfotransferase oxamniquine resistance protein",
    "organism": "Schistosoma mansoni",
    "reviewed": false,
    "gene": "SULT-OR",
    "length": 257,
    "sequence": "MIESSTTIQVISAGLPRTGTKSLKNALEIIYHKPCYHMFEIIFNKQSDIIKWQNLIHDSHMITTPPPLTTKTIAIYDKLKELLDGYIATTDLPTCGFYKDLMNIYPNAKVLLTIRDKYDWLHSLRKVVLPKSNDPWKLKIEEGDKVLGLNSDFYKLTEDSLKFAFQKDDLNFDDDQVLLECYDEYNRLVQETVPSDRLLVLRLGDGWEPLCKFLNVEIPNGIDYPCVNSHHQMTQLTEQLIKYKSLDAIIHMFPDLI",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/G4VLE5",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-G4VLE5-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-G4VLE5-F1-model_v6.cif",
      "version": 6,
      "plddt": 94.75,
      "plddtVeryHigh": 0.907
    },
    "pdb": {
      "ids": [
        "4MUA",
        "4MUB",
        "5BYJ",
        "5BYK",
        "6B4X",
        "6B4Y"
      ],
      "total": 16
    },
    "note": "settled by the PDB: six oxamniquine-complex structures (5BYJ, 5BYK, 6B4X, 6B4Y, 6B4Z, 6B50) all cross-reference this accession; the UniProt entry is unnamed, and the PDB names it the oxamniquine resistance protein"
  },
  "beta-tubulin": {
    "uniprot": "A0A8R1TPS6",
    "entryName": "A0A8R1TPS6_ONCVO",
    "proteinName": "Tubulin beta chain",
    "organism": "Onchocerca volvulus",
    "reviewed": false,
    "length": 444,
    "sequence": "MREIVHIQAGQCGNQIGSKFWEVISDEHGIDPLGQYHGDSDLQLERINVYYNEVQKKRYVPRAILVDLEPGTMDSVRAGAFGQLFRPDNYVFGQSGAGNNWAKGHYTEGAELVDSVLDVIRKEAEACDCLQGFQFTHSLGGGTGSGMGTLLISKIREEYPDRIMTTFSVVPSPKVSDTVVEPYNATLSVHQLVENTDETFCIDNEALYDICFRTLKLTTPTYGDLNHLVSATMSGVTTCLRFPGQLNADLRKLAVNMVPFPRLHFFMPGFAPLTSRSNQQYRAVTVAELTQQLFDAKNMMAACDPRHGRYLTAAAIFRGRMSMKDVDEQMLNIQNKNSAYFVDWIPNNVKTAVCDIPPRGLKMAATFIGNSTAIQELFKRVSEQFTAMFRRKAFLHWYTGEGMDEMEFTEAESNMNDLVSEYQQYQDASADDELNETIEQAETE",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/A0A8R1TPS6",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-A0A8R1TPS6-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-A0A8R1TPS6-F1-model_v6.cif",
      "version": 6,
      "plddt": 92.56,
      "plddtVeryHigh": 0.847
    }
  },
  "pfatp4": {
    "uniprot": "A0A143ZZK9",
    "entryName": "ATP4_PLAF7",
    "proteinName": "P-type sodium-transporting ATPase 4 (PfATP4)",
    "uniprotName": "P-type sodium-transporting ATPase4",
    "organism": "Plasmodium falciparum (isolate 3D7)",
    "reviewed": true,
    "gene": "ATP4",
    "length": 1264,
    "sequence": "MSSQNNNKQGGQDINNKKDSDDIKPSVSKEDLINSLKNDELNKNTTMDQNDMKKNENMNIKKNEVLNNSNNVEDGDNENSKFMNKSKEGLNNINGEKNDDNNSIVKVEESPKSIGYNYYASESIENLCKEFGLESINTGLNSEQVKINRDKYGENFIEKDEVVPVWLIFLSQYCSPVVLLLLVAAVASLALNEVVEGVAIISIVTLNACLATYMEKSSGDAIGKLAEMASPQCTVLRNGQKVVIPSREVVVGDVVLINTGDSISADLRLFDVIELKTNESLLTGESEDIKKTIVADNLSTPFATNLCFATTSVTSGSGKGIVISTGLDTQVGKIASQLKKSSKGSKLTPLQVALNKLGGLIGLIAIIVLVVIISLAVIIKYRDPAHADKDPTFVIIIIGVGFAVSSIPEGLPMVVTITLSAGAKDMVKKNANVRKLPAVETLGCCSVICSDKTGTLTEGKMTAINAVTICKNSSLSDENNKLTKTFDFYPTKGFEPCGGLFDSNELTSEKKKEIVIAKNQNTSYDKVLYNYGNPSNKSVIVDKTRSLMFAAYLNSYDTTLSRDPKTLKWGIHGNMSEGPIVVAAAKVGYSFINNPNHKSYLDNFQRLDDLEVTFNSSRKMKITFYKLKTVNVFENVYLDKPGKVYTHVALIKGAPDRLLDRSTHLLEETSMKKVQVSWNSTITQEERNVLIKKNLELSQKALRVLSICIKPLTDQNIEELKKLEDADERLKYVNYDENGGFIPMGYVASFDPPRPGVKEAIQTCREAQVKVIMITGDQKPTAVAIGKLIGLIEEKSEQVEDINSLAIECSELHINKNPNEPILPNDQLDEFTDKILIYSRAQPEDKITIVQSLKRKGYLVAMTGDGVNDAPALKAADIGVAMGINGTEVAKGASEMILIDDNFCTVVSAIDVGRTIFSNIQKFVCFLLGTNIGEIIYLSVAIVAQMPFPLEALQILFLNLMTDGCPAVALSREPPNDDNMKTPPRPKKQPIMTKRWWFYGILPHTIFEALCVLLSLAFSLYICTGFYNLNGIHNLCKTVNLVDVNDANVYHEYKYFCSSYEYRISTDYVGWVTNVSFWDPQNNEAVNFWGAAKGKVENINPLSDIVHPELRLRMQDGCSGDLTLDENGWCRPKDNKTSDGYNDELEGILKKGFEDVTAKGSKRGRTMAFISAVWCEMLRAYTVRSWEPFYKVFNRNMWMHLACSISATLTFLSTCIPGITSILNTTCLLWWQYLLAIFWALLNLFLDEIVPKVIYRRKYMTIKN",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/A0A143ZZK9",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-A0A143ZZK9-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-A0A143ZZK9-F1-model_v6.cif",
      "version": 6,
      "plddt": 77.25,
      "plddtVeryHigh": 0.206
    }
  },
  "pfkelch13": {
    "uniprot": "Q8IDQ2",
    "entryName": "Q8IDQ2_PLAF7",
    "proteinName": "Kelch protein K13 (artemisinin resistance marker)",
    "uniprotName": "Kelch protein K13",
    "organism": "Plasmodium falciparum (isolate 3D7)",
    "reviewed": false,
    "length": 726,
    "sequence": "MEGEKVKTKANSISNFSMTYDRESGGNSNSDDKSGSSSENDSNSFMNLTSDKNEKTENNSFLLNNSSYGNVKDSLLESIDMSVLDSNFDSKKDFLPSNLSRTFNNMSKDNIGNKYLNKLLNKKKDTITNENNNINHNNNNNNLTANNITNNLINNNMNSPSIMNTNKKENFLDAANLINDDSGLNNLKKFSTVNNVNDTYEKKIIETELSDASDFENMVGDLRITFINWLKKTQMNFIREKDKLFKDKKELEMERVRLYKELENRKNIEEQKLHDERKKLDIDISNGYKQIKKEKEEHRKRFDEERLRFLQEIDKIKLVLYLEKEKYYQEYKNFENDKKKIVDANIATETMIDINVGGAIFETSRHTLTQQKDSFIEKLLSGRHHVTRDKQGRIFLDRDSELFRIILNFLRNPLTIPIPKDLSESEALLKEAEFYGIKFLPFPLVFCIGGFDGVEYLNSMELLDISQQCWRMCTPMSTKKAYFGSAVLNNFLYVFGGNNYDYKALFETEVYDRLRDVWYVSSNLNIPRRNNCGVTSNGRIYCIGGYDGSSIIPNVEAYDHRMKAWVEVAPLNTPRSSAMCVAFDNKIYVIGGTNGERLNSIEVYEEKMNKWEQFPYALLEARSSGAAFNYLNQIYVVGGIDNEHNILDSVEQYQPFNKRWQFLNGVPEKKMNFGAATLSDSYIITGGENGEVLNSCHFFSPDTNEWQLGPSLLVPRFGHSVLIANI",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/Q8IDQ2",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-Q8IDQ2-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-Q8IDQ2-F1-model_v6.cif",
      "version": 6,
      "plddt": 74.94,
      "plddtVeryHigh": 0.499
    },
    "pdb": {
      "ids": [
        "4ZGC"
      ],
      "total": 1
    },
    "note": "the entry is unnamed in UniProt; identified by locus PF3D7_1343700"
  },
  "insect-sodium-channel": {
    "uniprot": "A0A1Y9HT44",
    "entryName": "A0A1Y9HT44_ANOGA",
    "proteinName": "Voltage-gated sodium channel, para-type",
    "uniprotName": "Sodium channel protein",
    "organism": "Anopheles gambiae",
    "reviewed": false,
    "length": 2128,
    "sequence": "MTEDSDSISEEERSLFRPFTRESLQAIEARIADEEAKQRELERKRAEGEIRYDDEDEDEGPQPDPTLEQGVPVPVRMQGSFPPELASTPLEDIDSFYSNQRTFVVISKGKDIFRFSATNALYVLDPFNPIRRVAIYILVHPLFSLFIITTILVNCILMIMPTTPTVESTEVIFTGIYTFESAVKVMARGFILQPFTYLRDAWNWLDFVVIALAYVTMGIDLGNLAALRTFRVLRALKTVAIVPGLKTIVGAVIESVKNLRDVIILTMFSLSVFALMGLQIYMGVLTQKCIKEFPLDGSWGNLTDESWELFNSNDTNWFYSESGDIPLCGNSSGAGQCDEGYICLQGYGKNPNYGYTSFDTFGWAFLSAFRLMTQDYWENLYQLVLRSAGPWHMLFFIVIIFLGSFYLVNLILAIVAMSYDELQKKAEEEEAAEEEALREAEEAAAAKAAKLEAQQAAAAAAANPEIAKSPSDFSCHSYELFVGQEKGNDDNNKEKMSIRSEGLESVSEITRTTAPTATAAGTAKARKVSAGVATIQKASLSLPGSPFNLRRGSRGSHQFTIRNGRGRFVGVPGSDRKPLVLSTYLDAQEHLPYADDSNAVTPMSEENGAIIVPVYYANLGSRHSSYTSHQSRISYTSHGDLLGGMTKESRLRNRSARNTNHSIVPPPNANNLSYAETNHKGQRDFDLTQDCTDDAGKIKHNDNPFIEPAQTQTVVDMKDVMVLNDIIEQAAGRHSRASDHGVSVYYFPTEDDDEDGPTFKDKALEFLMKMIDIFCVWDCCWVWLKFQEWVAFIVFDPFVELFITLCIVVNTLFMALDHHDMDPDMEKALKSGNYFFTATFAIEATMKLIAMSPKYYFQEGWNIFDFIIVALSLLELGLEGVQGLSVLRSFRLLRVFKLAKSWPTLNLLISIMGRTVGALGNLTFVLCIIIFIFAVMGMQLFGKNYTDNVDRFPDHDLPRWNFTDFMHSFMIVFRVLCGEWIESMWDCMLVGDVSCIPFFLATVVIGNLVVLNLFLALLLSNFGSSSLSAPTADNETNKIAEAFNRISRFSNWIKMNLANALKFVKNKLTSQIASVQPTGKGVCPCISSEHGENELELTPDDILADGLLKKGIKEHNQLEVAIGDGMEFTIHGDLKNKAKKNKQIMNNSKVIGNSISNHQDNKLDHELNHRGVSLQDDDTASIKSYGSHKNRPFKDESHKGSAETMEGEEKRDASKEDLGIDEELDDEGEGDEGPLDGELIIHAEEDEVIEDSPADCCPDNCYKKFPVLAGDDDAPFWQGWGNLRLKTFQLIENKYFETAVITMILLSSLALALEDVHLPQRPILQDILYYMDRIFTVIFFLEMLIKWLALGFKVYFTNAWCWLDFIIVMLSLINLAAIWVGAADIPAFRSMRTLRALRPLRAVSRWEGMRVVVNALVQAIPSIFNVLLVCLIFWLIFAIMGVQLFAGKYFKCVDKNKTTLPHEIIPDVNACKAENYSWENSPMNFDHVGKAYLCLFQVATFKGWIQIMNDAIDSRDVGKQPIRETNIYMYLYFVFFIIFGSFFTLNLFIGVIIDNFNEQKKKAGGSLEMFMTEDQKKYYNAMKKMGSKKPLKAIPRPRWRPQAIVFEIVTNKKFDMIIMLFIGFNMLTMTLDHYKQSETFSAVLDYLNMIFICIFSSECLMKIFALRYHYFIEPWNLFDFVVVILSILGLVLSDIIEKYFVSPTLLRVVRVAKVGRVLRLVKGAKGIRTLLFALAMSLPALFNICLLLFLVMFIFAIFGMSFFMHVKDKSGLDDVYNFKTFGQSMILLFQMSTSAGWDGVLDGIINEEDCLPPDNDKGYPGNCGSSTIGITYLLAYLVISFLIVINMYIAVILENYSQATEDVQEGLTDDDYDMYYEIWQQFDPDGTQYVRYDQLSDFLDVLEPPLQIHKPNRYKIISMDIPICRGDMMFCVDILDALTKDFFARKGNPIEETAELGEVQQRPDEVGYEPVSSTLWRQREEYCARLIQHAWKRYKQRHGGGTDASGDDLEIDACDNGCGGGNGNENDDSGDGATGSGDNGSQHGGGSISGGGGTPGGGKSKGIIGSTQANIGIVDSNISPKESPDSIGDPQGRQTAVLVESDGFVTKNGHRVVIHSRSPSITSRTADV"
  },
  "insect-acetylcholinesterase": {
    "uniprot": "Q869C3",
    "entryName": "ACES_ANOGA",
    "proteinName": "Acetylcholinesterase (ace-1, the insecticide-resistance locus)",
    "uniprotName": "Acetylcholinesterase",
    "organism": "Anopheles gambiae",
    "reviewed": true,
    "gene": "Ace",
    "length": 737,
    "sequence": "MEIRGLLMGRLRLGRRMVPLGLLGVTALLLILPPFALVQGRHHELNNGAAIGSHQLSAAAGVGLASQSAQSGSLASGVMSSVPAAGASSSSSSSLLSSSAEDDVARITLSKDADAFFTPYIGHGESVRIIDAELGTLEHVHSGATPRRRGLTRRESNSDANDNDPLVVNTDKGRIRGITVDAPSGKKVDVWLGIPYAQPPVGPLRFRHPRPAEKWTGVLNTTTPPNSCVQIVDTVFGDFPGATMWNPNTPLSEDCLYINVVAPRPRPKNAAVMLWIFGGGFYSGTATLDVYDHRALASEENVIVVSLQYRVASLGFLFLGTPEAPGNAGLFDQNLALRWVRDNIHRFGGDPSRVTLFGESAGAVSVSLHLLSALSRDLFQRAILQSGSPTAPWALVSREEATLRALRLAEAVGCPHEPSKLSDAVECLRGKDPHVLVNNEWGTLGICEFPFVPVVDGAFLDETPQRSLASGRFKKTEILTGSNTEEGYYFIIYYLTELLRKEEGVTVTREEFLQAVRELNPYVNGAARQAIVFEYTDWTEPDNPNSNRDALDKMVGDYHFTCNVNEFAQRYAEEGNNVYMYLYTHRSKGNPWPRWTGVMHGDEINYVFGEPLNPTLGYTEDEKDFSRKIMRYWSNFAKTGNPNPNTASSEFPEWPKHTAHGRHYLELGLNTSFVGRGPRLRQCAFWKKYLPQLVAATSNLPGPAPPSEPCESSAFFYRPDLIVLLVSLLTATVRFIQ",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/Q869C3",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-Q869C3-F1-model_v6.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-Q869C3-F1-model_v6.cif",
      "version": 6,
      "plddt": 81.5,
      "plddtVeryHigh": 0.722
    },
    "pdb": {
      "ids": [
        "5X61",
        "5YDH",
        "5YDI",
        "5YDJ",
        "6ARX",
        "6ARY"
      ],
      "total": 6
    }
  },
  "ebola-glycoprotein": {
    "uniprot": "Q05320",
    "entryName": "VGP_EBOZM",
    "proteinName": "Envelope glycoprotein GP",
    "uniprotName": "Envelope glycoprotein",
    "organism": "Zaire ebolavirus (strain Mayinga-76)",
    "reviewed": true,
    "gene": "GP",
    "length": 676,
    "sequence": "MGVTGILQLPRDRFKRTSFFLWVIILFQRTFSIPLGVIHNSTLQVSDVDKLVCRDKLSSTNQLRSVGLNLEGNGVATDVPSATKRWGFRSGVPPKVVNYEAGEWAENCYNLEIKKPDGSECLPAAPDGIRGFPRCRYVHKVSGTGPCAGDFAFHKEGAFFLYDRLASTVIYRGTTFAEGVVAFLILPQAKKDFFSSHPLREPVNATEDPSSGYYSTTIRYQATGFGTNETEYLFEVDNLTYVQLESRFTPQFLLQLNETIYTSGKRSNTTGKLIWKVNPEIDTTIGEWAFWETKKNLTRKIRSEELSFTVVSNGAKNISGQSPARTSSDPGTNTTTEDHKIMASENSSAMVQVHSQGREAAVSHLTTLATISTSPQSLTTKPGPDNSTHNTPVYKLDISEATQVEQHHRRTDNDSTASDTPSATTAAGPPKAENTNTSKSTDFLDPATTTSPQNHSETAGNNNTHHQDTGEESASSGKLGLITNTIAGVAGLITGGRRTRREAIVNAQPKCNPNLHYWTTQDEGAAIGLAWIPYFGPAAEGIYIEGLMHNQDGLICGLRQLANETTQALQLFLRATTELRTFSILNRKAIDFLLQRWGGTCHILGPDCCIEPHDWTKNITDKIDQIIHDFVDKTLPDQGDNDNWWTGWRQWIPAGIGVTGVIIAVIALFCICKFVF",
    "alphafold": {
      "page": "https://alphafold.ebi.ac.uk/entry/Q05320",
      "pdb": "https://alphafold.ebi.ac.uk/files/AF-0000000365763770-model_v1.pdb",
      "cif": "https://alphafold.ebi.ac.uk/files/AF-0000000365763770-model_v1.cif",
      "version": 1,
      "plddt": 35.06,
      "plddtVeryHigh": 0
    },
    "pdb": {
      "ids": [
        "2EBO",
        "2RLJ",
        "3CSY",
        "5FHC",
        "5HJ3",
        "5JQ3"
      ],
      "total": 55
    },
    "note": "Mayinga reference strain"
  }
};

/** Targets with no single protein to attach, and why. */
export const NO_SEQUENCE: Record<string, string> = {
  "haem-detoxification": "a biochemical process, not a protein",
  "artemisinin-activation": "a mechanism of action, not a protein",
  "bacterial-ribosome": "a multi-subunit complex, not a single protein",
  "parasite-ribosome": "a multi-subunit complex, not a single protein",
  "parasite-proteasome": "a multi-subunit complex, not a single protein",
  "ergosterol": "a membrane lipid, not a protein",
  "venom-toxins": "a mixture of peptides, not one protein",
  "wolbachia": "a bacterial endosymbiont, not a protein",
  "fungal-dhodh": "no Madurella mycetomatis dihydroorotate dehydrogenase entry exists",
  "glucl": "characterised in C. elegans, a model organism rather than the NTD worm",
  "slo-1": "characterised in C. elegans, a model organism rather than the NTD worm",
  "nematode-nachr": "characterised in C. elegans, a model organism rather than the NTD worm",
  "dengue-ns5": "the DENV2 proteome is annotated as one polyprotein (P07564); the mature NS5 is a cleavage product with no full-length standalone entry",
  "dengue-ns4b": "as above — NS4B exists only within the DENV2 polyprotein P07564",
  "dengue-protease": "as above — NS3 exists only within the DENV2 polyprotein P07564; the standalone hits are partial constructs",
  "rabies-glycoprotein": "only unreviewed strain variants are deposited; a reference strain would have to be chosen arbitrarily",
  "chikungunya-glycoprotein": "only 172 aa E1 fragments and an unreviewed nonstructural polyprotein are deposited",
  "cpsf3": "no T. brucei CPSF3 entry is available to check against",
  "pfor": "no reviewed pyruvate:ferredoxin oxidoreductase entry exists, and the NTD-relevant organism is unsettled"
};

/**
 * Targets that ARE a single protein, but whose exact entry could not be
 * confirmed, so nothing is attached. The reason is shown on the page; the fix
 * (how to settle the accession) is recorded in scripts/target-accessions.ts.
 */
export const UNCONFIRMED: Record<string, string> = {
  "schistosome-trp-channel": "no PDB structure exists for the praziquantel-binding channel, and two S. mansoni TRP-channel paralogs (1150 and 1201 aa) are annotated, so annotation alone cannot say which one PZQ binds",
  "trypanosome-nitroreductase": "no PDB structure for a trypanosome nitroreductase; and the record may conflate two organisms — fexinidazole is activated by the T. brucei enzyme, benznidazole by the T. cruzi one"
};
