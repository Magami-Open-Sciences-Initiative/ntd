import type { Spike } from "./merge";

/**
 * Cost and access patch for treatments: unit prices from public procurement
 * catalogues (UNICEF Supply Catalogue; Global Drug Facility), the donation
 * programme and endemic-country landscape, and intellectual-property status.
 *
 * Prices are indicative catalogue figures, not offers, and change with each
 * catalogue edition — follow the source link. Donation and IP statements are
 * qualitative and are kept to what is well established; entries are omitted
 * where the position is unknown rather than guessed.
 */
const UNICEF_ANTHELMINTHICS = {
  label: "UNICEF Supply Catalogue — anthelminthics",
  url: "https://supply.unicef.org/all-materials/pharmaceuticals/anti-infectives/anthelminthics.html",
};

export const DRUG_ACCESS: Record<string, Spike> = {
  artesunate: {
    pricing: [
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹242.69", unit: "per 60 mg injection vial", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation: "Not donated; procured by national malaria programmes and UNICEF at ceiling prices.",
    ipStatus: "Off-patent, with multiple WHO-prequalified generic manufacturers.",
  },
  "artemether-lumefantrine": {
    pricing: [
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹13.90", unit: "per 20/120 mg tablet", year: 2022, note: "national ceiling price under DPCO; 40/240 mg ₹17.92; 80/480 mg ₹25.72", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation: "Not donated; the backbone of artemisinin-based combination therapy, procured at ceiling prices.",
    ipStatus: "Off-patent, with many WHO-prequalified generic manufacturers.",
  },
  chloroquine: {
    donation: "Not donated; widely available as a low-cost generic.",
    ipStatus: "Off-patent.",
  },
  primaquine: {
    donation: "Not donated; procured at ceiling prices for relapse prevention and gametocytocidal use.",
    ipStatus: "Off-patent, with multiple generic manufacturers.",
  },
  ivermectin: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$18.27", unit: "per pack of 4 × 6 mg tablets", year: 2026, note: "PMVG (max government sale price); PF R$23.28", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.049", unit: "per 6 mg tablet", year: 2015, note: "buyer price", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
    ],
    donation:
      "Donated free by Merck through the Mectizan Donation Program since 1987 for onchocerciasis and since 1998 for lymphatic filariasis where it co-occurs, pledged \"for as long as needed.\" The donation — not the market — is what makes river-blindness and LF mass treatment possible across Africa and Latin America.",
    ipStatus:
      "Off-patent. Access is determined by the donation programme rather than by generic competition; programmes receive it free instead of buying it.",
  },
  albendazole: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$6.13", unit: "per 400 mg chewable tablet", year: 2026, note: "PMVG (max government sale price); PF R$7.81", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
      {
        catalogue: "UNICEF Supply Catalogue",
        price: "US$3.63",
        unit: "per pack of 100 chewable 400 mg tablets (≈ US$0.036 per tablet)",
        note: "indicative price; changes with each catalogue edition",
        url: UNICEF_ANTHELMINTHICS.url,
      },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹8.55", unit: "per 400 mg tablet", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "Donated by GSK for lymphatic filariasis elimination and soil-transmitted helminth control, under a long-standing pledge that covers mass campaigns in endemic countries.",
    ipStatus: "Off-patent, with multiple WHO-prequalified generic manufacturers.",
  },
  mebendazole: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$4.34", unit: "per pack of 6 × 100 mg tablets", year: 2026, note: "PMVG (max government sale price); PF R$5.53", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0305", unit: "per 500 mg chewable tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹3.26", unit: "per 100 mg tablet", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "Donated by Johnson & Johnson for soil-transmitted helminth control, chiefly through school-based deworming.",
    ipStatus: "Off-patent; supplied through the donation and by generic manufacturers.",
  },
  diethylcarbamazine: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0062", unit: "per 50 mg tablet", year: 2015, note: "supplier price", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹0.62", unit: "per 50 mg tablet", year: 2022, note: "national ceiling price under DPCO; 100 mg tablet ₹1.57", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "Donated by Eisai for lymphatic filariasis elimination in countries where onchocerciasis and loiasis do not co-circulate.",
    ipStatus: "Off-patent.",
  },
  azithromycin: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.117", unit: "per 250 mg tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.2267", unit: "per 500 mg tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹11.72", unit: "per 250 mg tablet", year: 2022, note: "national ceiling price under DPCO; 500 mg tablet ₹23.64", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
      { catalogue: "China — national centralized drug procurement (Guangdong exchange, 中选价)", price: "¥0.32", unit: "per 0.25 g tablet", note: "winning bid, national round 2; 6-tablet pack", url: "https://www.gdmede.com.cn/supportAndService/nationalCentralizedProcurement" },
    ],
    donation:
      "Donated by Pfizer through the International Trachoma Initiative for trachoma elimination; WHO separately secured 153 million donated tablets for yaws eradication. Generic azithromycin is also widely available commercially.",
    ipStatus:
      "Off-patent, with many generic manufacturers; the elimination programmes run on the donation.",
  },
  praziquantel: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$700.34", unit: "per pack of 50 × 600 mg tablets (Far-Manguinhos)", year: 2026, note: "PMVG (max government sale price); PF R$892.49; schistosomiasis", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
      {
        catalogue: "UNICEF Supply Catalogue",
        price: "US$3.63",
        unit: "per pack of 100 × 600 mg tablets (≈ US$0.036 per tablet)",
        note: "indicative price; the catalogue figure changes with each edition",
        url: UNICEF_ANTHELMINTHICS.url,
      },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹38.57", unit: "per 600 mg tablet", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "Donated by Merck KGaA for schistosomiasis control under a pledge of hundreds of millions of tablets a year, routed through WHO for preventive chemotherapy.",
    ipStatus:
      "Off-patent, with multiple quality-assured generic manufacturers alongside the donation.",
  },
  triclabendazole: {
    donation:
      "Donated by Novartis for fascioliasis and paragonimiasis and distributed through WHO.",
    ipStatus:
      "Originator product (Egaten, Novartis) and historically a single supplier — a supply-security risk for a disease with no alternative drug.",
  },
  clofazimine: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.1771", unit: "per 100 mg capsule", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹4.12", unit: "per 100 mg capsule", year: 2022, note: "national ceiling price under DPCO; 50 mg capsule ₹2.41", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation: "Donated by Novartis as part of WHO multidrug therapy for leprosy.",
    ipStatus: "Off-patent; the leprosy MDT donation covers endemic-country need.",
  },
  rifampicin: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0624", unit: "per 150 mg capsule", year: 2015, note: "buyer median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0974", unit: "per 300 mg capsule", year: 2015, note: "buyer median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹2.23", unit: "per 150 mg capsule", year: 2022, note: "national ceiling price under DPCO; 300 mg ₹4.22", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "For leprosy, supplied as part of the donated Novartis multidrug therapy; for tuberculosis, procured through the Stop TB Partnership's Global Drug Facility, which pools demand to set quality-assured prices.",
    ipStatus: "Off-patent, with multiple WHO-prequalified generic manufacturers.",
  },
  moxifloxacin: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$1.7562", unit: "per 400 mg tablet", year: 2015, note: "buyer median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "China — national centralized drug procurement (Guangdong exchange, 中选价)", price: "¥2.22", unit: "per 400 mg tablet", note: "winning bid, national round 2 (2022 renewal); 3-tablet pack", url: "https://www.gdmede.com.cn/supportAndService/nationalCentralizedProcurement" },
    ],
    donation:
      "Not donated; procured through the Global Drug Facility for drug-resistant tuberculosis and used off-label as the WHO-recommended alternative partner in Buruli ulcer therapy.",
    ipStatus: "Off-patent, with generic manufacturers.",
  },
  bedaquiline: {
    pricing: [
      { catalogue: "Stop TB Partnership — Global Drug Facility", price: "US$63", unit: "per adult treatment course", year: 2025, note: "Lupin-produced generic; down from US$90 (Feb 2025) and US$194 (Aug 2023)", url: "https://www.stoptb.org/gdfs-results" },
    ],
    donation:
      "Originated by Johnson & Johnson; the price for eligible countries was cut to about US$1.50 a day through the Stop TB Partnership's Global Drug Facility.",
    ipStatus:
      "Under patent; the originator's pricing agreements, not generic competition, historically set the cost, though licences have widened supply.",
  },
  pretomanid: {
    pricing: [
      { catalogue: "Stop TB Partnership — Global Drug Facility", price: "US$169", unit: "per adult treatment course", year: 2025, note: "Lupin-produced; down from US$224 (Oct 2024); the six-month BPaLM regimen reached US$310", url: "https://www.theglobalfund.org/media/uh1lxjub/tb_2025-07-quarterly-tuberculosis_update_en.pdf" },
    ],
    donation:
      "Developed by the non-profit TB Alliance and supplied at a not-for-profit price through the Global Drug Facility, including generic-licensed supply for drug-resistant TB.",
    ipStatus: "Licensed by TB Alliance, with generic sub-licences for eligible countries.",
  },
  linezolid: {
    pricing: [
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹36.69", unit: "per 600 mg tablet", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation: "Not donated; procured through the Global Drug Facility and national programmes.",
    ipStatus:
      "Off-patent: generic competition has cut the price for drug-resistant TB from hundreds of dollars to well under a dollar a day.",
  },
  isoniazid: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0218", unit: "per 300 mg tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "China — national centralized drug procurement (Guangdong exchange, 中选价)", price: "¥0.0339", unit: "per 100 mg tablet", note: "winning bid, national round 2; 100-tablet bottle", url: "https://www.gdmede.com.cn/supportAndService/nationalCentralizedProcurement" },
    ],
    donation: "Not donated; procured through the Global Drug Facility.",
    ipStatus: "Off-patent, multiple generic manufacturers.",
  },
  pyrazinamide: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0307", unit: "per 500 mg tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "China — national centralized drug procurement (Guangdong exchange, 中选价)", price: "¥0.1999", unit: "per 250 mg tablet", note: "winning bid, national round 4; 100-tablet bottle", url: "https://www.gdmede.com.cn/supportAndService/nationalCentralizedProcurement" },
    ],
    donation: "Not donated; procured through the Global Drug Facility.",
    ipStatus: "Off-patent, multiple generic manufacturers.",
  },
  ethambutol: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0331", unit: "per 400 mg tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "China — national centralized drug procurement (Guangdong exchange, 中选价)", price: "¥0.1157", unit: "per 250 mg tablet", note: "winning bid, national round 3 (renewal); 100-tablet bottle", url: "https://www.gdmede.com.cn/supportAndService/nationalCentralizedProcurement" },
    ],
    donation: "Not donated; procured through the Global Drug Facility.",
    ipStatus: "Off-patent, multiple generic manufacturers.",
  },
  nifurtimox: {
    donation:
      "Bayer donates nifurtimox (Lampit, including the paediatric formulation) for Chagas disease and supplies it through WHO for sleeping sickness.",
    ipStatus: "Originator Bayer; the donation governs access in endemic countries.",
  },
  benznidazole: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$63.62", unit: "per pack of 100 × 100 mg tablets (Lafepe)", year: 2026, note: "PMVG (max government sale price); PF R$81.07; Chagas endemic-country price", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
    ],
    donation:
      "Manufactured mainly by Lafepe (Brazil) and Exeltis and supplied through PAHO's Strategic Fund and WHO, with donation in some programmes.",
    ipStatus: "Off-patent, but few manufacturers keep supply fragile.",
  },
  fexinidazole: {
    donation:
      "Developed by DNDi with Sanofi; Sanofi supplies and donates it for human African trypanosomiasis through national programmes.",
    ipStatus:
      "Sanofi is the licensee, with a non-exclusive, affordable supply arrangement for endemic countries negotiated by DNDi.",
  },
  acoziborole: {
    donation:
      "Not yet registered; an access and donation plan for sleeping sickness is being developed with DNDi and Sanofi.",
    ipStatus: "DNDi/Sanofi candidate with a planned non-exclusive access arrangement.",
  },
  eflornithine: {
    donation:
      "Supplied by Sanofi and WHO for second-stage sleeping sickness, as part of nifurtimox–eflornithine combination therapy.",
    ipStatus: "Off-patent; single-supplier concentration has caused past shortages.",
  },
  melarsoprol: {
    donation: "Supplied through WHO for sleeping sickness; not marketed commercially in most countries.",
    ipStatus: "Off-patent, with production concentrated in very few sites.",
  },
  suramin: {
    donation: "Supplied by Bayer and WHO for first-stage sleeping sickness.",
    ipStatus: "Off-patent; limited commercial production.",
  },
  pentamidine: {
    donation: "Supplied through WHO for first-stage sleeping sickness.",
    ipStatus: "Off-patent.",
  },
  "liposomal-amphotericin-b": {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$18139.37", unit: "per pack of 10 × 50 mg vials (AmBisome)", year: 2026, note: "PMVG (max government sale price); PF R$23116.31", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
      { catalogue: "Gilead / WHO agreement (no-profit public-sector price)", price: "US$18", unit: "per 50 mg vial", year: 2023, note: "no-profit price for visceral leishmaniasis and cryptococcal meningitis in low- and middle-income countries", url: "https://www.msf.org/msf-statement-response-gilead-donation-ambisome-visceral-leishmaniasis" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹8290.00", unit: "per 50 mg liposomal vial", year: 2022, note: "national ceiling price under DPCO; conventional amphotericin B 50 mg ₹343.91", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "Gilead donates liposomal amphotericin B (AmBisome) for visceral leishmaniasis in some endemic countries and has agreed price reductions through WHO; where the donation does not reach, cost remains a barrier.",
    ipStatus:
      "Originator product (AmBisome, Gilead); donation and negotiated pricing, not generic competition, govern access.",
  },
  miltefosine: {
    donation: "Not donated; procured at negotiated prices for visceral leishmaniasis and PKDL.",
    ipStatus:
      "Patented originator (Impavido). DNDi negotiated substantial price reductions, but it remains more expensive than antimonials.",
  },
  antimonials: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$319.31", unit: "per pack of 50 × 5 mL ampoules of 300 mg/mL meglumine antimoniate (Glucantime)", year: 2026, note: "PMVG (max government sale price); PF R$406.92; visceral leishmaniasis", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
    ],
    donation:
      "Sodium stibogluconate, the traditional visceral leishmaniasis treatment, was price-reduced by GSK for endemic countries; it is procured by national programmes and WHO.",
    ipStatus:
      "Off-patent; toxic and increasingly displaced by liposomal amphotericin B and combination regimens.",
  },
  fosravuconazole: {
    donation: "Eisai supplies the investigational drug; no donation programme exists yet.",
    ipStatus:
      "Developed by DNDi with Eisai and partners for mycetoma; not yet widely registered or available.",
  },
  moxidectin: {
    donation:
      "Not donated; access for mass programmes is unresolved because ivermectin is donated free for the same indication.",
    ipStatus:
      "Developed by Medicines Development for Global Health, FDA-approved for onchocerciasis in 2018; patents and registration limit generic availability.",
  },
  arpraziquantel: {
    donation:
      "Merck KGaA has committed to donate arpraziquantel for schistosomiasis in preschool-aged children once approved.",
    ipStatus: "Paediatric praziquantel (Merck KGaA), developed with an access-and-donation commitment.",
  },
  "snake-antivenom": {
    pricing: [
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹480.46", unit: "per 10 mL liquid polyvalent antivenom vial", year: 2022, note: "national ceiling price under DPCO; lyophilized 10 mL pack ₹618.71", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation:
      "No donation programme: antivenom must be purchased and is often unaffordable for the patients who need it, a central access failure in snakebite envenoming.",
    ipStatus:
      "Biological, generally off-patent; the barrier is manufacturing, quality assurance and price, not patents.",
  },
  doxycycline: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0092", unit: "per 100 mg capsule", year: 2015, note: "supplier price", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹2.78", unit: "per 100 mg capsule", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation: "Not donated; a widely available generic.",
    ipStatus: "Off-patent, multiple generic manufacturers.",
  },
  nitazoxanide: {
    pricing: [
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$13.18", unit: "per 20 mg/mL oral suspension bottle", year: 2026, note: "PMVG (max government sale price); PF R$16.79", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
    ],
    donation: "Not donated; available as a generic.",
    ipStatus: "Off-patent.",
  },
  permethrin: {
    pricing: [
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹1.01", unit: "per gram of 1% lotion", year: 2022, note: "national ceiling price under DPCO; 5% cream ₹1.93/g, 1% cream ₹1.78/g", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
      { catalogue: "Brazil — CMED/ANVISA regulated price list (Sep 2026)", price: "R$15.62", unit: "per 10 mg/mL lotion bottle", year: 2026, note: "PMVG (max government sale price); PF R$19.91", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos" },
    ],
    donation: "Not donated; available as a generic topical scabicide.",
    ipStatus: "Off-patent.",
  },
  paromomycin: {
    donation:
      "Not donated; one component of combination therapy for visceral leishmaniasis, procured at generic prices.",
    ipStatus: "Off-patent.",
  },
  itraconazole: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.1446", unit: "per 100 mg capsule", year: 2015, note: "buyer median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
    ],
    donation: "Not donated; generic capsules are available.",
    ipStatus: "Off-patent.",
  },
  "benzathine-penicillin": {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.175", unit: "per 1.2 million IU vial", year: 2015, note: "supplier median; 720 mg benzathine benzylpenicillin", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
    ],
    donation:
      "Not donated; procured by national programmes and UNICEF/PAHO. Global supply is fragile — made by very few manufacturers — and shortages have interrupted syphilis and rheumatic-fever prevention.",
    ipStatus:
      "Off-patent; the barrier is manufacturing capacity and quality-assured supply, not patents.",
  },
  clarithromycin: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.255", unit: "per 500 mg tablet", year: 2015, note: "supplier median", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹31.09", unit: "per 250 mg tablet", year: 2022, note: "national ceiling price under DPCO; 500 mg tablet ₹54.80", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
      { catalogue: "China — national centralized drug procurement (Guangdong exchange, 中选价)", price: "¥0.4967", unit: "per 0.25 g capsule", note: "winning bid, national round 3; 6-capsule pack", url: "https://www.gdmede.com.cn/supportAndService/nationalCentralizedProcurement" },
    ],
    donation:
      "Not donated; a widely available generic, procured by Buruli ulcer programmes and national health systems.",
    ipStatus: "Off-patent, multiple generic manufacturers.",
  },
  dapsone: {
    pricing: [
      { catalogue: "MSH International Medical Products Price Guide", price: "US$0.0217", unit: "per 100 mg tablet", year: 2015, note: "supplier price", url: "https://msh.org/wp-content/uploads/2020/03/msh-2015-international-medical-products-price-guide.pdf" },
      { catalogue: "India — NPPA ceiling price (Compendium of Prices, 2022)", price: "₹0.40", unit: "per 100 mg tablet", year: 2022, note: "national ceiling price under DPCO", url: "https://nppa.gov.in/storage/uploads/pdf/Compendium-Prices-2022pdf-464b22085495ff4e3f8700c0e00cf45d.pdf" },
    ],
    donation: "Donated by Novartis as part of WHO multidrug therapy for leprosy.",
    ipStatus: "Off-patent; covered in endemic countries by the leprosy MDT donation.",
  },
  oxamniquine: {
    donation: "Not donated; manufacture has largely ceased as praziquantel displaced it.",
    ipStatus: "Off-patent; effectively discontinued.",
  },
  emetine: {
    donation:
      "Not donated; an old generic alkaloid used off-label for amoebiasis and studied preclinically for chikungunya.",
    ipStatus: "Off-patent.",
  },
  tribendimidine: {
    donation:
      "Not donated; registered in China and under evaluation elsewhere, but not widely available outside it.",
    ipStatus:
      "Developed in China; patent position varies and international registration is limited.",
  },
  tafenoquine: {
    donation:
      "Not donated; supplied commercially, with tiered pricing for malaria-endemic countries.",
    ipStatus:
      "Patented (GSK/Kozenis); on the WHO essential medicines list, with not-for-profit pricing for endemic countries.",
  },
  "rabies-postexposure-prophylaxis": {
    donation:
      "Not donated, but vaccines are procured at reduced prices with Gavi and WHO support for high-burden countries; immunoglobulin and monoclonal antibodies remain costly and scarce.",
    ipStatus:
      "Vaccines are off-patent with multiple manufacturers; the access barrier is price and supply, not patents.",
  },
  "rabies-monoclonal-antibodies": {
    donation:
      "Not donated; two products are licensed in India and WHO-listed as an alternative to rabies immunoglobulin, but cost limits use.",
    ipStatus: "Patented biologics; access depends on licensing and tiered pricing.",
  },
  ansuvimab: {
    donation:
      "Not donated; a BARDA-supported Ebola therapeutic stockpiled by governments and deployed through WHO in outbreaks.",
    ipStatus:
      "Licensed biologic (Ridgeback); public funding underpins development and outbreak access.",
  },
  inmazeb: {
    donation:
      "Not donated; the first FDA-approved Ebola treatment, stockpiled by the US and deployed through WHO in outbreaks.",
    ipStatus: "Licensed biologic (Regeneron); access runs through public stockpiles, not the market.",
  },
  qdenga: {
    donation:
      "Not donated; Takeda offers tiered pricing for public programmes and has committed doses to affected countries.",
    ipStatus: "Patented (Takeda); WHO-recommended in 2024, supplied at tiered public-sector prices.",
  },
  ixchiq: {
    donation:
      "Not donated; licensed in the EU, UK, Canada and Brazil (US licence withdrawn in 2026), with limited public-sector supply.",
    ipStatus: "Patented (Bavarian Nordic); a commercial vaccine rather than a donor-funded one.",
  },
  vimkunya: {
    donation: "Not donated; licensed in the US, EU, UK and Switzerland (2025–2026).",
    ipStatus: "Patented (Bavarian Nordic); commercial pricing, not a donation.",
  },
  "butantan-dv": {
    donation:
      "Not donated; produced by Brazil's public Butantan Institute for the national health system at low cost.",
    ipStatus: "Developed and manufactured by a public institute (Butantan), priced for Brazil's programme.",
  },
  "butantan-chik-vla1555": {
    donation:
      "Not donated; licensed in Brazil in 2026 and expected to be incorporated into the public system.",
    ipStatus: "Produced by Brazil's public Butantan Institute under licence; public-sector pricing.",
  },
  "an2-502998": {
    donation: "Not marketed; Phase 2 proof-of-concept planned, so no donation or access price exists.",
    ipStatus: "Patented candidate; licensing and access terms are not yet set.",
  },
  cipargamin: {
    donation: "Not marketed; in Phase 2 development, so no donation or access price exists.",
    ipStatus: "Patented candidate (Novartis); access terms not yet set.",
  },
  ganaplacide: {
    donation: "Not donated; regulatory submissions being sought, so no access programme exists yet.",
    ipStatus: "Patented candidate (Novartis), with a stated access plan for malaria-endemic countries.",
  },
  iid432: {
    donation: "Preclinical; no supply or donation exists.",
    ipStatus: "Investigational; licensing not yet set.",
  },
  lxe408: {
    donation:
      "Not marketed; Phase 2 completed, with access terms for visceral leishmaniasis to be set at registration.",
    ipStatus: "Investigational, developed with DNDi; a non-exclusive affordable-supply plan is expected.",
  },
  mosnodenvir: {
    donation: "Development halted by the sponsor in 2024; no supply or donation.",
    ipStatus: "Patented (J&J); the programme stalled before access terms were needed.",
  },
  olorofim: {
    donation: "Not marketed; in development for other mould infections and not yet trialled in mycetoma.",
    ipStatus: "Patented (F2G); mycetoma access terms do not yet exist.",
  },
  oxfendazole: {
    donation: "Not donated; a veterinary anthelmintic in Phase 2 for human filarial infections.",
    ipStatus: "Veterinary product under clinical development; human access terms not yet set.",
  },
  telacebec: {
    donation:
      "Not marketed for Buruli ulcer; a Phase 2 trial is under way, with TB Alliance planning access terms.",
    ipStatus: "Investigational (TB Alliance/Qurient); access for Buruli ulcer to be set at registration.",
  },
  emodepside: {
    donation:
      "Not marketed; in Phase 2/3 development for onchocerciasis and soil-transmitted helminths, with DNDi planning access terms.",
    ipStatus: "Investigational, developed with DNDi; non-exclusive affordable-supply terms are expected.",
  },
  flubendazole: {
    donation:
      "Not available for humans; veterinary-licensed and investigational for guinea worm, so no donation exists.",
    ipStatus: "Veterinary product; human access terms are not yet set.",
  },
};
