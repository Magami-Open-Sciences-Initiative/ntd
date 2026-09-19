import type { Spike } from "./merge";

/**
 * Economics + equity layer.
 *
 * Two first-class, machine-queryable additions:
 *   - `costs`: implementation-economics figures — cost per denominator (per
 *     case averted, per person treated, per patient, per person-year protected),
 *     each with a citable source, so interventions can be compared.
 *   - `equity`: explicit gender / disability / conflict flags. On countries
 *     these are deficits (coverageGap, conflictAffected, genderInequality,
 *     disabilityGap); on interventions they are mitigations (genderResponsive,
 *     disabilityInclusive, conflictAdapted). Together they answer questions the
 *     prose could only hint at — e.g. which countries carry both a coverage gap
 *     and a security constraint, and whether the interventions used there are
 *     adapted to the setting.
 *
 * Flags are judgments about well-documented conditions, not measurements; the
 * note says why. They are deliberately conservative.
 */

/** Country-level equity and security constraints. */
export const COUNTRY_EQUITY: Record<string, Spike> = {
  nigeria: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Armed conflict and insecurity in the north-east and north-west; large lymphatic filariasis, onchocerciasis, schistosomiasis and STH burden with coverage gaps; high gender inequality (UNDP GII); heavy NTD-related disability (LF, leprosy, trachoma)." } },
  "dr-congo": { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Protracted conflict and displacement in the east; very high NTD burden (HAT, LF, onchocerciasis, STH, Buruli ulcer) with weak reach; high gender inequality; major NTD-related disability." } },
  sudan: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Active civil war since 2023 with mass displacement; mycetoma, leishmaniasis, trachoma and STH all affected; conflict has collapsed large parts of the health system." } },
  "south-sudan": { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Conflict and chronic instability; among the world's weakest health access; visceral leishmaniasis and STH are endemic and under-served." } },
  yemen: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "War and blockade since 2014; schistosomiasis, leishmaniasis, trachoma and dengue with severe access constraints; large gender gaps in access." } },
  chad: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Instability and hosting of displaced populations; high STH/schistosomiasis burden with very limited coverage; high gender inequality." } },
  mali: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Conflict and insecurity across the north and centre; onchocerciasis, LF, schistosomiasis and trachoma with access gaps; high gender inequality." } },
  ethiopia: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, disabilityGap: true, note: "Recent conflict in the north and ongoing insecurity; very large NTD burden (STH, schistosomiasis, trachoma, podoconiosis, CL/VL) with coverage gaps; high gender inequality; NTD-related disability is substantial." } },
  cameroon: { equity: { conflictAffected: true, coverageGap: true, genderInequality: true, note: "Anglophone-region conflict and insecurity; high LF, onchocerciasis, schistosomiasis and yaws burden; coverage constrained in conflict zones." } },
  "papua-new-guinea": { equity: { coverageGap: true, genderInequality: true, note: "Very low coverage for yaws, lymphatic filariasis, STH and trachoma; geography and weak services; high gender inequality (UNDP GII)." } },
  guinea: { equity: { coverageGap: true, genderInequality: true, note: "High onchocerciasis, LF and STH burden with coverage gaps; weak health system after Ebola and instability; high gender inequality." } },
  angola: { equity: { coverageGap: true, genderInequality: true, note: "Post-conflict, with large onchocerciasis and LF foci and uneven coverage; high gender inequality and NTD-related disability from LF and leprosy." } },
  tanzania: { equity: { coverageGap: true, note: "Large STH, schistosomiasis, LF and trachoma burden; coverage has improved but gaps persist in remote districts." } },
  uganda: { equity: { coverageGap: true, note: "High burden of onchocerciasis, LF, schistosomiasis, STH and podoconiosis; strong MDA programme but persistent gaps in the north and refugee-hosting districts." } },
  malawi: { equity: { coverageGap: true, note: "Schistosomiasis, STH and trachoma with coverage gains but residual gaps; disability from LF and trachoma." } },
  india: { equity: { coverageGap: true, genderInequality: true, disabilityGap: true, note: "The largest visceral leishmaniasis burden historically (Bihar), plus leprosy, LF, STH and snakebite; gender gaps in access; large NTD-related disability (leprosy, LF)." } },
  bangladesh: { equity: { genderInequality: true, disabilityGap: true, note: "Leprosy, STH and visceral leishmaniasis; gender gaps in access; leprosy-related disability is significant." } },
  nepal: { equity: { genderInequality: true, disabilityGap: true, note: "Leprosy, LF, STH and trachoma; gender and caste inequities in access; leprosy-related disability." } },
  indonesia: { equity: { coverageGap: true, disabilityGap: true, note: "Leprosy, LF, schistosomiasis (Sulawesi) and STH across a vast archipelago; geographic coverage gaps and leprosy-related disability." } },
  brazil: { equity: { disabilityGap: true, note: "Chagas disease, leprosy, schistosomiasis, leishmaniasis and snakebite; strong public system but large regional inequities; NTD-related disability is substantial." } },
  bolivia: { equity: { coverageGap: true, genderInequality: true, note: "Chagas disease (highest household reinfestation risk), leishmaniasis and dengue; rural indigenous populations under-served; gender gaps in access." } },
  ghana: { equity: { note: "Buruli ulcer, yaws, LF and schistosomiasis; relatively strong surveillance and research capacity." } },
  kenya: { equity: { coverageGap: true, note: "Visceral leishmaniasis, schistosomiasis, STH and rabies; pastoralist and arid regions under-served." } },
  senegal: { equity: { note: "Schistosomiasis (including S. haematobium), STH and LF; a long-standing national control programme." } },
  "south-africa": { equity: { note: "Cysticercosis, rabies and schistosomiasis; a strong health system but inequities persist." } },
  botswana: { equity: { note: "STH and neglected zoonoses; comparatively low NTD burden and high health-system capacity." } },
  "philippines": { equity: { coverageGap: true, note: "Schistosomiasis, STH, leprosy and dengue; geographic gaps across the archipelago." } },
};

/** Intervention-level costs and equity/inclusion flags. */
export const TECH_ECONOMICS: Record<string, Spike> = {
  "mass-drug-administration": {
    costs: [
      {
        intervention: "Community-based MDA for schistosomiasis",
        cost: "US$0.70–1.20",
        per: "per person treated",
        note: "financial (US$0.70) and economic (US$1.20) cost per person treated, Uganda; economic cost includes donated drugs' opportunity cost",
        source: { label: "Cost analysis of community-based MDA (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42406797" },
      },
      {
        intervention: "Annual azithromycin MDA for trachoma",
        cost: "US$0.41",
        per: "per person treated",
        note: "financial cost, Amhara, Ethiopia; US$0.48 per treatment",
        source: { label: "Cost of annual and more-frequent-than-annual trachoma MDA (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41666439" },
      },
      {
        intervention: "Routine MDA for lymphatic filariasis",
        cost: "US$0.83",
        per: "per person treated",
        note: "2024 projection; integrated test-and-treat variants cost US$1.62–2.88 per person treated",
        source: { label: "Modelling the cost of LF test-and-treat and engage-and-treat (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38787898" },
      },
    ],
    equity: {
      genderResponsive: true,
      conflictAdapted: true,
      note: "Community and school platforms can reach girls and women who cannot travel to clinics; MDA has been delivered in humanitarian settings, but conflict and displacement still break coverage.",
    },
  },
  "insecticide-treated-nets": {
    equity: {
      genderResponsive: true,
      note: "Mass and continuous distribution (including via antenatal care) targets pregnant women and children, the groups at highest risk; net use depends on household decision-making that can disadvantage women and girls.",
    },
  },
  "wash-interventions": {
    equity: {
      genderResponsive: true,
      note: "Water collection and face-washing fall disproportionately on women and girls; WASH for trachoma and STH is only equitable if it reduces that burden rather than adding to it.",
    },
  },
  "community-health-workers": {
    equity: {
      genderResponsive: true,
      disabilityInclusive: true,
      conflictAdapted: true,
      note: "CHW programmes employ and reach women, can be adapted for disability (home visits, accessible venues) and are the main delivery model where conflict blocks fixed facilities.",
    },
  },
  "indoor-residual-spraying": {
    equity: { conflictAdapted: false, note: "Requires sustained access to households and trained spray teams; conflict and displacement often suspend campaigns, leaving the highest-risk populations unprotected." },
  },
  "total-community-treatment": {
    equity: { conflictAdapted: true, note: "Whole-community dosing has been run in remote and insecure settings (e.g. yaws in the Congo Basin) but needs population access to reach everyone." },
  },
  "safe-strategy": {
    equity: { disabilityInclusive: true, note: "Trichiasis surgery reverses a disabling condition and is a rare NTD intervention explicitly aimed at restoring function, not only interrupting transmission." },
  },
  "case-containment": {
    equity: { conflictAdapted: true, note: "Outbreak case-finding and containment have been delivered in conflict and displacement settings, but insecurity delays detection." },
  },
  "ring-vaccination": {
    equity: { conflictAdapted: true, note: "Used in Ebola outbreaks in conflict-affected eastern DR Congo; feasibility depends on security and community trust." },
  },
  "scabies-mda": {
    equity: { genderResponsive: true, conflictAdapted: true, note: "Scabies and impetigo MDA has been delivered in schools and communities, including Pacific and humanitarian settings; children and women bear the highest burden." },
  },
  "leprosy-skin-test-antigens": {
    equity: { disabilityInclusive: true, note: "Earlier diagnosis is the main lever against leprosy-related disability; a field test matters most where disability is already common (India, Brazil, Indonesia, Bangladesh)." },
  },
  "tb-preventive-treatment": {
    equity: { genderResponsive: true, disabilityInclusive: true, conflictAdapted: true, note: "Preventive treatment can be delivered through community and household contact tracing, reaching women and people with disabilities who are missed by facility-based care." },
  },
};

/** Intervention-level equity flags for diagnostics (a diagnostic is not a technology). */
export const DIAGNOSTIC_EQUITY: Record<string, Spike> = {
  "leprosy-skin-test-antigens": {
    equity: { disabilityInclusive: true, note: "Earlier diagnosis is the main lever against leprosy-related disability; a field test matters most where disability is already common (India, Brazil, Indonesia, Bangladesh)." },
  },
};

/** Disease-level cost figures. */
export const DISEASE_COSTS: Record<string, Spike> = {
  schistosomiasis: {
    costs: [
      {
        intervention: "Community-based praziquantel MDA",
        cost: "US$0.70–1.20",
        per: "per person treated",
        note: "financial (US$0.70) and economic (US$1.20) cost, Uganda; drug itself is donated",
        source: { label: "Cost analysis of community-based MDA (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42406797" },
      },
    ],
  },
  sth: {
    costs: [
      {
        intervention: "Mass deworming (albendazole/mebendazole)",
        cost: "US$0.70–1.20",
        per: "per person treated",
        note: "community-based MDA cost per person treated, Uganda; the drugs are donated, so this is delivery cost",
        source: { label: "Cost analysis of community-based MDA (2026)", url: "https://pubmed.ncbi.nlm.nih.gov/42406797" },
      },
    ],
  },
  leishmaniasis: {
    costs: [
      {
        intervention: "First-line visceral leishmaniasis treatment",
        cost: "US$104.7",
        per: "per patient treated",
        note: "Ethiopia; second-line regimen US$331 per patient",
        source: { label: "Elimination of visceral leishmaniasis in Ethiopia: cost analysis (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/39864498" },
      },
      {
        intervention: "Household cost of a visceral leishmaniasis episode",
        cost: "US$214",
        per: "per patient episode (household cost)",
        note: "median total household cost, showing the catastrophic out-of-pocket burden on families",
        source: { label: "Economic burden of visceral leishmaniasis (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/39405280" },
      },
    ],
  },
  trachoma: {
    costs: [
      {
        intervention: "Annual azithromycin MDA",
        cost: "US$0.41",
        per: "per person treated",
        note: "financial cost, Amhara, Ethiopia; US$0.48 per treatment",
        source: { label: "Cost of annual and more-frequent-than-annual trachoma MDA (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41666439" },
      },
    ],
  },
  "lymphatic-filariasis": {
    costs: [
      {
        intervention: "Routine MDA for lymphatic filariasis",
        cost: "US$0.83",
        per: "per person treated",
        note: "2024 projection; integrated test-and-treat variants cost US$1.62–2.88 per person treated",
        source: { label: "Modelling the cost of LF test-and-treat and engage-and-treat (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38787898" },
      },
    ],
  },
};

/** Analysis questions the economics + equity layer is built to answer, and the terms it uses. */
export const EQUITY_ECONOMICS_2026: { kind: "ideas" | "terms"; records: unknown[] }[] = [
  {
    kind: "ideas",
    records: [
      {
        id: "equity-security-overlap-analysis",
        name: "Map where a coverage gap and a security constraint coincide",
        tldr: "The equity flags exist to be queried: find the countries that are both under-covered and conflict-affected, and check whether their interventions are conflict-adapted.",
        summary:
          "The corpus now carries explicit flags — coverageGap, conflictAffected, genderInequality and disabilityGap on countries; genderResponsive, disabilityInclusive and conflictAdapted on interventions — so an analysis can be run rather than argued: join countries to the NTDs they carry and the interventions those NTDs use, and ask which records are flagged both coverageGap and conflictAffected while their interventions are NOT flagged conflictAdapted. That intersection is the operational gap: places where the standard delivery model assumes access that does not exist. The same join can be run for gender and disability. The proposed test is to publish the overlap matrix and a shortlist of the highest-overlap country–disease pairs, and to treat any pair with no conflict-adapted intervention as a delivery-design problem to be solved before scale-up, not a funding problem alone.",
        asOf: "2026-09",
        stage: "Proposal",
        proposedTest:
          "Programmatically join countries × diseases × interventions using the equity flags; rank country–disease pairs by overlap of coverageGap/conflictAffected against intervention conflictAdapted; publish the matrix and the unadapted pairs.",
        owner: "Corpus maintainers with an implementation-research group",
        links: [
          { label: "WHO — integrated control of skin NTDs (framework)", url: "https://www.who.int/publications/i/item/9789240051423" },
        ],
        diseases: ["leishmaniasis", "schistosomiasis", "onchocerciasis", "lymphatic-filariasis"],
        bottlenecks: ["access-and-pricing", "surveillance-data-gap"],
        terms: ["ntd", "elimination", "health-equity"],
        stats: [
          { label: "Query", value: "coverageGap ∧ conflictAffected", note: "against intervention conflictAdapted" },
        ],
      },
    ],
  },
  {
    kind: "terms",
    records: [
      {
        id: "health-equity",
        name: "Health equity (gender, disability, conflict)",
        tldr: "Fairness in access: who is missed, who is disproportionately exposed, and whether delivery is adapted to gender, disability and insecurity.",
        summary:
          "Health equity asks not only whether an intervention works but who reaches it and who does not. In NTDs three axes recur. Gender: exposure and care-seeking differ — women may face mobility, decision-making and stigma barriers, while men may be harder to reach through school- and clinic-based platforms. Disability: several NTDs cause disability (trachoma, lymphatic filariasis, leprosy, Buruli ulcer, Chagas), and people with disabilities are also less likely to be reached by prevention. Conflict and insecurity: displacement, destroyed services and restricted access leave the highest-burden populations uncovered, and standard delivery models assume an access that does not exist. The corpus records these as explicit flags — coverageGap, conflictAffected, genderInequality and disabilityGap on countries; genderResponsive, disabilityInclusive and conflictAdapted on interventions — so that coverage and its constraints can be analysed together rather than described separately.",
        asOf: "2026-09",
        category: "Equity",
        aka: "equity, inclusion, leaving no one behind",
        links: [
          { label: "WHO — integrated control of skin NTDs (framework)", url: "https://www.who.int/publications/i/item/9789240051423" },
        ],
        related: ["ntd", "elimination"],
        stats: [
          { label: "Dimensions", value: "Gender · disability · conflict" },
        ],
      },
    ],
  },
];
