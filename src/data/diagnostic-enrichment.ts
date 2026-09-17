import type { Spike } from "./merge";

/**
 * FIND Test Directory enrichment for the diagnostics.
 *
 * The corpus diagnostics are the *concepts* (Kato-Katz, rK39, NS1, CATT); the
 * FIND Test Directory (finddx.org) is the source for what actually exists as a
 * product — its stage of development, regulatory status, test format, instrument
 * requirement, automation, setting, validated sample types and named
 * manufacturers. These patches add those dimensions without rewriting the base
 * records, and they cite the Test Directory Explorer.
 *
 * Product listings are illustrative, not exhaustive, and inclusion is not an
 * endorsement or a statement of WHO prequalification.
 */
export const DIAGNOSTIC_ENRICHMENT: Record<string, Spike> = {
  "antibody-rdt": {
    technology: "Immunoassay (antibody detection)",
    useCase: "Screening, mapping and surveillance",
    format: "Rapid diagnostic test (strip or cassette)",
    setting: "True point of care to near point of care",
    instrument: "No instrumentation is required",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Finger-prick blood", "Serum", "Plasma"],
    stage: "Regulatory achieved for several products",
    products: [
      { name: "Filariasis IgG/IgM Rapid Test", manufacturer: "Hangzhou AllTest Biotech", stage: "Regulatory achieved", format: "Rapid diagnostic test" },
      { name: "Leishmania IgG/IgM Rapid Test", manufacturer: "Assure Tech. (Hangzhou)", stage: "Regulatory status unknown", format: "Rapid diagnostic test" },
      { name: "Bioline Onchocerciasis IgG4", manufacturer: "Abbott", stage: "Regulatory status unknown", format: "Rapid diagnostic test" },
    ],
  },

  "brugia-test-plus": {
    technology: "Immunoassay and molecular",
    useCase: "Diagnostic/confirmatory test and surveillance",
    format: "Rapid diagnostic test; NAT reagent kit",
    setting: "True point of care to lab-based",
    instrument: "None for the rapid test; proprietary platform for the molecular test",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Finger-prick blood", "Serum", "Plasma"],
    stage: "Late-stage development to regulatory achieved",
    products: [
      { name: "Brugia Rapid Test", manufacturer: "Reszon Diagnostics International", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "antibody Brugia assay, 25 minutes" },
      { name: "POCKIT Brugia spp. Reagent Set", manufacturer: "GeneReach Biotechnology", stage: "Research use only", format: "NAT reagent kit (proprietary platform)" },
    ],
  },

  catt: {
    technology: "Immunoassay (slide agglutination)",
    useCase: "Screening for Gambiense human African trypanosomiasis",
    format: "Slide agglutination",
    setting: "Near point of care",
    instrument: "A proprietary/new instrument is required",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Serum", "Plasma", "Finger-prick blood"],
    stage: "Research use only",
    products: [
      { name: "ITM CATT/T.b.gambiense", manufacturer: "Institute of Tropical Medicine, Belgium", stage: "Research use only", format: "Slide agglutination", note: "the reference screening test for Gambiense HAT; 10 minutes" },
    ],
  },

  "chagas-serology": {
    technology: "Immunoassay (serology)",
    useCase: "Diagnosis, blood-donor screening and congenital screening",
    format: "Rapid diagnostic test; ELISA, CLIA and other laboratory immunoassays",
    setting: "True point of care to lab-based",
    instrument: "None for rapid tests; analyser for laboratory platforms",
    automation: "Manual to fully automated",
    operator: "Intended for professional use only",
    samples: ["Serum", "Plasma", "Whole blood"],
    stage: "Regulatory achieved for several products",
    regulatory: "CE-IVDD and national approvals; used in blood-donor screening",
    products: [
      { name: "Elecsys Chagas", manufacturer: "Roche Diagnostics", stage: "Regulatory achieved", format: "Chemiluminescent immunoassay", note: "high-throughput laboratory platform" },
      { name: "Bioline Chagas Ab", manufacturer: "Abbott", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "true point of care, 15 minutes" },
      { name: "Chagas Virclia IgG + IgM MONOTEST", manufacturer: "Vircell", stage: "Regulatory achieved", format: "Chemiluminescent immunoassay" },
      { name: "Anti-T. cruzi (Chagas) assay", manufacturer: "Ortho Clinical Diagnostics", stage: "Regulatory achieved", format: "Laboratory immunoassay" },
    ],
  },

  "chikungunya-rt-pcr": {
    technology: "Molecular; multiplex febrile-illness panels",
    useCase: "Diagnostic/confirmatory test",
    format: "NAT reagent kit; cartridge-based processing",
    setting: "Near point of care to lab-based",
    instrument: "Proprietary instrument required for cartridge platforms",
    automation: "Manual to fully automated",
    operator: "Intended for professional use only",
    samples: ["Serum", "Plasma", "Whole blood"],
    stage: "Regulatory achieved for several multiplex panels",
    products: [
      { name: "BioFire Global Fever Special Pathogens Panel", manufacturer: "BioFire Defense", stage: "Regulatory achieved", format: "Cartridge-based processing", note: "multiplex panel including chikungunya, dengue, Zika, Ebola, Lassa, Marburg and malaria; 60 minutes" },
      { name: "BioFire Tropical Fever Panel", manufacturer: "bioMérieux", stage: "Regulatory achieved", format: "Cartridge-based processing", note: "60 minutes; WHO EUL under assessment and US FDA 510(k)" },
      { name: "Bosphore Tropical Fever Panel Kit v1", manufacturer: "Anatolia Geneworks", stage: "Regulatory achieved", format: "NAT reagent kit (open source)" },
    ],
  },

  "cysticercosis-serology": {
    technology: "Immunoassay (antibody detection)",
    useCase: "Diagnostic/confirmatory test",
    format: "ELISA; a rapid test is in early development",
    setting: "Lab-based; a point-of-care test is not yet available",
    instrument: "Plate reader for ELISA",
    automation: "Manual to semi-automated",
    operator: "Intended for professional use only",
    samples: ["Serum"],
    stage: "Research use only to early-stage development",
    products: [
      { name: "Neurocysticercosis (T. solium) IgG assay", manufacturer: "Kephera Diagnostics", stage: "Research use only", format: "ELISA", note: "150 minutes" },
      { name: "Neurocysticercosis (T. solium) RDT", manufacturer: "Kephera Diagnostics", stage: "Early-stage development", format: "Rapid diagnostic test" },
    ],
  },

  "dengue-ns1-rdt": {
    technology: "Immunoassay (antigen)",
    useCase: "Diagnostic/confirmatory test during the acute phase",
    format: "Rapid diagnostic test (strip or cassette); laboratory ELISA",
    setting: "True point of care to lab-based",
    instrument: "No instrumentation is required for rapid tests",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Whole blood", "Serum", "Plasma"],
    stage: "Regulatory achieved for many products",
    products: [
      { name: "SD BIOLINE Dengue Duo (NS1 Ag + IgG/IgM)", manufacturer: "Abbott", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "true point of care, 20 minutes; combines antigen and antibody detection" },
      { name: "ichroma Dengue NS1 Ag", manufacturer: "Boditech Med", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "near point of care, 12 minutes" },
      { name: "STANDARD F Dengue NS1 Ag", manufacturer: "SD Biosensor", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "15 minutes" },
      { name: "Platelia Dengue NS1 Ag", manufacturer: "Bio-Rad", stage: "Regulatory achieved", format: "Laboratory immunoassay", note: "microplate ELISA for reference laboratories" },
    ],
  },

  "direct-agglutination-test": {
    technology: "Immunoassay (agglutination)",
    useCase: "Diagnostic/confirmatory test for visceral leishmaniasis",
    format: "Slide agglutination",
    setting: "Near point of care to lab-based",
    instrument: "Microscope or plate reader for reading",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Serum"],
  },

  "ebola-rt-pcr": {
    technology: "Molecular; multiplex haemorrhagic-fever panels",
    useCase: "Diagnostic/confirmatory test",
    format: "NAT reagent kit; cartridge-based processing",
    setting: "Near point of care to lab-based",
    instrument: "Proprietary instrument required for cartridge platforms",
    automation: "Fully automated to manual",
    operator: "Intended for professional use only",
    samples: ["Whole blood", "Post-mortem swabs"],
    stage: "Regulatory achieved for multiplex panels",
    products: [
      { name: "BioFire Global Fever Special Pathogens Panel", manufacturer: "BioFire Defense", stage: "Regulatory achieved", format: "Cartridge-based processing", note: "panel covering Ebola, Marburg, Lassa, dengue, chikungunya and malaria; 60 minutes" },
    ],
  },

  "filarial-test-strip": {
    technology: "Immunoassay (antigen detection)",
    useCase: "Mapping, impact assessment and post-validation surveillance",
    format: "Rapid diagnostic test (strip or cassette)",
    setting: "True point of care",
    instrument: "No instrumentation is required",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Finger-prick blood"],
    stage: "Regulatory achieved",
    products: [
      { name: "Bioline Filariasis Test Strip", manufacturer: "Abbott", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "the standard W. bancrofti antigen test; 10 minutes" },
      { name: "STANDARD Q Filariasis Ag", manufacturer: "SD Biosensor", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "10 minutes" },
    ],
  },

  "formol-ether-concentration": {
    technology: "Microscopy",
    useCase: "Diagnostic/confirmatory test",
    format: "Concentration then microscopy",
    setting: "Lab-based",
    instrument: "Microscope and centrifuge",
    automation: "Manual",
    operator: "Trained laboratory technician",
    samples: ["Stool"],
    stage: "Established method; reagent kits are available",
  },

  "gene-cartridge-test": {
    technology: "Molecular",
    useCase: "Diagnostic/confirmatory test, including resistance detection",
    format: "Cartridge-based processing",
    setting: "Near point of care",
    instrument: "A proprietary/new instrument is required",
    automation: "Fully automated (including sample preparation)",
    operator: "Intended for professional use only",
    samples: ["Sputum", "Blood", "Tissue"],
    stage: "Regulatory achieved",
    regulatory: "WHO-endorsed platforms; US FDA and CE-IVDD where applicable",
  },

  "kato-katz": {
    technology: "Microscopy",
    useCase: "Diagnostic/confirmatory test and prevalence surveys",
    format: "Reagent kit plus slide; egg counting",
    setting: "True point of care",
    instrument: "Microscope",
    automation: "Manual",
    operator: "Trained microscopist",
    samples: ["Stool"],
    stage: "Established method; kits are commercially available",
    products: [
      { name: "HELM TEST Kato-Katz kit", manufacturer: "Bio-Manguinhos / Fiocruz", stage: "Regulatory status unknown", format: "Reagent kit + slide", note: "60 minutes" },
    ],
  },

  "malaria-rdt": {
    technology: "Immunoassay (antigen)",
    useCase: "Diagnostic/confirmatory test",
    format: "Rapid diagnostic test (strip or cassette)",
    setting: "True point of care to community level",
    instrument: "No instrumentation is required",
    automation: "Manual",
    operator: "Intended for professional use only; community health workers in many programmes",
    samples: ["Finger-prick blood"],
    stage: "Regulatory achieved for many products; WHO prequalification for some",
  },

  "microscopy-thick-smear": {
    technology: "Microscopy",
    useCase: "Diagnostic/confirmatory test",
    format: "Stained thick film and lymph-node aspirate; concentration variants",
    setting: "Health facility with laboratory capacity",
    instrument: "Microscope",
    automation: "Manual",
    operator: "Trained microscopist",
    samples: ["Blood", "Lymph node aspirate"],
    stage: "Established method",
  },

  "mini-flotac": {
    technology: "Microscopy (flotation)",
    useCase: "Diagnostic/confirmatory test and prevalence surveys",
    format: "Flotation apparatus plus counting chamber",
    setting: "Lab-based to near point of care",
    instrument: "Mini-FLOTAC apparatus and microscope",
    automation: "Manual",
    operator: "Trained technician",
    samples: ["Stool"],
    stage: "Established method; apparatus commercially available",
  },

  "molecular-lamp": {
    technology: "Molecular (isothermal amplification)",
    useCase: "Diagnostic/confirmatory test",
    format: "NAT reagent kit (open source)",
    setting: "Near point of care to lab-based",
    instrument: "Heat block or proprietary isothermal platform",
    automation: "Manual to semi-automated",
    operator: "Intended for professional use only",
    samples: ["Stool", "Urine", "Blood"],
    stage: "Research use only to late-stage development",
  },

  "molecular-pcr": {
    technology: "Molecular (nucleic-acid amplification)",
    useCase: "Diagnostic/confirmatory test and surveillance (including vector pools)",
    format: "NAT reagent kit (open source or proprietary platform)",
    setting: "Lab-based",
    instrument: "Thermal cycler (open or proprietary platform)",
    automation: "Manual to fully automated",
    operator: "Intended for professional use only",
    samples: ["Stool", "Urine", "Blood", "Tissue", "Vector pools"],
    stage: "Regulatory achieved for many targets",
  },

  "mycolactone-detection": {
    technology: "Molecular (LAMP) and toxin detection",
    useCase: "Diagnostic/confirmatory test for Buruli ulcer",
    format: "NAT reagent kit (open source); toxin assays in development",
    setting: "True point of care to district laboratory",
    instrument: "Heat block for LAMP",
    automation: "Manual",
    operator: "Trained health worker",
    samples: ["Swab", "Fine-needle aspirate", "Tissue"],
    stage: "Research use only to evaluated prototypes",
    products: [
      { name: "NP Mycobacterium Ulcerans LAMP Test Kit", manufacturer: "Pinpoint Molecular", stage: "Research use only", format: "NAT reagent kit (open source)", note: "M. ulcerans LAMP; true point of care, 30 minutes" },
    ],
  },

  "point-of-care-cca": {
    technology: "Immunoassay (antigen detection in urine)",
    useCase: "Diagnostic/confirmatory test for intestinal schistosomiasis",
    format: "Rapid diagnostic test (strip or cassette)",
    setting: "True point of care",
    instrument: "No instrumentation is required",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Urine"],
    stage: "Regulatory achieved",
    products: [
      { name: "Urine CCA (Schisto) ECO Teste", manufacturer: "ECO Diagnostica", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "20 minutes" },
    ],
  },

  "rk39-rapid-test": {
    technology: "Immunoassay (antibody detection)",
    useCase: "Diagnostic/confirmatory test for visceral leishmaniasis",
    format: "Rapid diagnostic test (strip or cassette)",
    setting: "True point of care to near point of care",
    instrument: "No instrumentation is required",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Finger-prick blood", "Serum", "Plasma"],
    stage: "Regulatory achieved for several products",
    products: [
      { name: "SD BIOLINE Leishmania Ab", manufacturer: "Abbott", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "10 minutes; widely used in elimination programmes" },
      { name: "OnSite Leishmania Ab Rapid Test", manufacturer: "CTK Biotech", stage: "Regulatory achieved", format: "Rapid diagnostic test", note: "15 minutes" },
      { name: "rK28 RDT", manufacturer: "CTK Biotech", stage: "Research use only", format: "Rapid diagnostic test", note: "next-generation rK28 antigen; 10 minutes" },
    ],
  },

  "skin-snip": {
    technology: "Microscopy",
    useCase: "Diagnostic/confirmatory test and epidemiological surveys",
    format: "Bloodless skin biopsy incubated in saline, then microscopy",
    setting: "Specialist surveys and research centres",
    instrument: "Microscope",
    automation: "Manual",
    operator: "Trained health worker",
    samples: ["Skin snip"],
    stage: "Established method",
  },

  "trachoma-grading": {
    technology: "Clinical examination",
    useCase: "Screening and prevalence surveys",
    format: "WHO simplified trachoma grading",
    setting: "Community and primary care",
    instrument: "Penlight and 2.5× loupe; no laboratory",
    automation: "Manual",
    operator: "Trained grader",
    samples: ["Not a sample — a clinical grading of the eye"],
    stage: "Established method",
  },

  "tuberculin-skin-test": {
    technology: "Immunoassay (delayed-type hypersensitivity)",
    useCase: "Detection of infection (not active disease)",
    format: "Intradermal test read at 48–72 hours",
    setting: "Primary care and clinics",
    instrument: "None; a ruler for reading induration",
    automation: "Manual",
    operator: "Trained health worker",
    samples: ["Not a sample — an intradermal test read by inspection"],
    stage: "Established method",
  },

  "xpert-mtb-rif": {
    technology: "Molecular",
    useCase: "Diagnostic/confirmatory test with rifampicin-resistance detection",
    format: "Cartridge-based processing",
    setting: "Near point of care",
    instrument: "A proprietary/new instrument is required (GeneXpert)",
    automation: "Fully automated (including sample preparation)",
    operator: "Intended for professional use only",
    samples: ["Sputum"],
    stage: "Regulatory achieved",
    regulatory: "WHO-endorsed; widely deployed through national tuberculosis programmes",
  },

  "yaws-dual-rdt": {
    technology: "Immunoassay (dual treponemal and non-treponemal)",
    useCase: "Diagnostic/confirmatory test for yaws",
    format: "Dual-pathway rapid diagnostic test (strip or cassette)",
    setting: "True point of care",
    instrument: "No instrumentation is required",
    automation: "Manual",
    operator: "Intended for professional use only",
    samples: ["Finger-prick blood"],
    stage: "Regulatory achieved for dual treponemal/non-treponemal tests",
  },

  "zika-rt-pcr": {
    technology: "Molecular; multiplex arbovirus panels",
    useCase: "Diagnostic/confirmatory test during the viraemic window",
    format: "NAT reagent kit; cartridge-based processing",
    setting: "Near point of care to lab-based",
    instrument: "Proprietary instrument required for cartridge platforms",
    automation: "Fully automated to manual",
    operator: "Intended for professional use only",
    samples: ["Serum", "Urine"],
    stage: "Regulatory achieved for multiplex panels",
    products: [
      { name: "BioFire Global Fever Special Pathogens Panel", manufacturer: "BioFire Defense", stage: "Regulatory achieved", format: "Cartridge-based processing", note: "multiplex panel including Zika, dengue and chikungunya; 60 minutes" },
    ],
  },
};
