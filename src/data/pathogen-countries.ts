import type { Spike } from "./merge";

/**
 * Where each pathogen occurs, and where the burden is heaviest.
 *
 * Merged onto the pathogen records at load time: `countries` is unioned into the
 * record's reference list (so country pages show the pathogen as a backlink and
 * the pathogen page lists the countries), and `distribution` is the prose that
 * explains the geography — including the parts that a country list cannot show,
 * such as which form of a disease dominates where.
 *
 * Country lists are the countries in this corpus where the pathogen is
 * prevalent, not a complete global distribution: the corpus currently covers 27
 * countries.
 */
export const PATHOGEN_COUNTRIES: Record<string, Spike> = {
  "trypanosoma-brucei": {
    distribution:
      "The Gambiense form is concentrated in West and Central Africa, above all in the Democratic Republic of the Congo, which reports more than half of all cases; the acute Rhodesiense form occurs in East and Southern Africa. Uganda is the only country where both forms circulate.",
    countries: ["dr-congo", "guinea", "angola", "uganda", "south-sudan", "chad", "cameroon", "tanzania", "malawi"],
  },
  "trypanosoma-cruzi": {
    distribution:
      "Endemic across Latin America from Mexico to Argentina. Bolivia has the highest prevalence in the world, and Brazil carries the largest absolute number of infected people and the region's largest programme.",
    countries: ["bolivia", "brazil"],
  },
  leishmania: {
    distribution:
      "Cutaneous disease is widespread across North Africa, the Middle East, Central Asia and Latin America. Visceral leishmaniasis — the fatal form — is concentrated in South Asia and East Africa, where nearly all the burden sits.",
    countries: ["india", "bangladesh", "nepal", "sudan", "south-sudan", "ethiopia", "kenya", "brazil", "bolivia", "yemen"],
  },
  schistosoma: {
    distribution:
      "Sub-Saharan Africa carries over 90% of the burden, with the heaviest prevalence in Nigeria, Tanzania, the Democratic Republic of the Congo and Mozambique. Schistosoma japonicum persists in the Philippines and parts of Indonesia.",
    countries: ["nigeria", "dr-congo", "ethiopia", "tanzania", "uganda", "malawi", "kenya", "cameroon", "ghana", "senegal", "mali", "angola", "chad", "sudan", "south-sudan", "philippines", "indonesia", "brazil"],
  },
  "soil-transmitted-helminths": {
    distribution:
      "Among the most widespread infections on earth, present wherever sanitation and clean water are inadequate. The largest numbers of children needing treatment are in India, Nigeria, Indonesia, Bangladesh, Ethiopia and the Philippines.",
    countries: ["india", "nigeria", "indonesia", "bangladesh", "ethiopia", "philippines", "dr-congo", "tanzania", "uganda", "kenya", "malawi", "nepal", "ghana", "cameroon", "senegal", "mali", "angola", "chad", "south-sudan", "papua-new-guinea", "bolivia", "brazil"],
  },
  "onchocerca-volvulus": {
    distribution:
      "Endemic across tropical Africa, with the heaviest burden in Nigeria, the Democratic Republic of the Congo, Ethiopia, Cameroon and Uganda. A small focus persists in the Brazilian Amazon, on the border with Venezuela, and is close to interruption.",
    countries: ["nigeria", "dr-congo", "ethiopia", "cameroon", "uganda", "tanzania", "chad", "angola", "south-sudan", "sudan", "brazil"],
  },
  "lymphatic-filarial-worms": {
    distribution:
      "Endemic across tropical Africa, South and Southeast Asia and parts of the Pacific. India, Nigeria, Indonesia, Bangladesh and the Democratic Republic of the Congo carry the largest populations at risk; Wuchereria bancrofti dominates in Africa and Brugia species matter most in South and Southeast Asia.",
    countries: ["india", "nigeria", "indonesia", "bangladesh", "dr-congo", "ethiopia", "tanzania", "kenya", "uganda", "malawi", "cameroon", "ghana", "senegal", "mali", "angola", "chad", "philippines", "papua-new-guinea"],
  },
  "dracunculus-medinensis": {
    distribution:
      "Down to a handful of countries. Chad, Ethiopia and South Sudan reported human cases in 2025, and animal infections — mostly in dogs — persist in Chad, Cameroon, Ethiopia, Mali and Angola.",
    countries: ["chad", "ethiopia", "south-sudan", "cameroon", "mali", "angola"],
  },
  "taenia-solium": {
    distribution:
      "Occurs wherever pigs are raised free-range and sanitation is poor: highest in rural Latin America, sub-Saharan Africa and parts of Asia. Neurocysticercosis is one of the leading preventable causes of epilepsy in these areas.",
    countries: ["nigeria", "dr-congo", "ethiopia", "tanzania", "uganda", "kenya", "malawi", "cameroon", "ghana", "mali", "angola", "india", "nepal", "indonesia", "philippines", "bolivia", "brazil"],
  },
  echinococcus: {
    distribution:
      "Cystic echinococcosis occurs in pastoral regions of Africa, Asia, Latin America and the Mediterranean basin; Ethiopia, Kenya, Sudan and South Sudan carry substantial burden. Alveolar echinococcosis is a northern-hemisphere disease of foxes and rodents.",
    countries: ["ethiopia", "kenya", "sudan", "south-sudan", "bolivia", "brazil", "india", "nepal"],
  },
  "foodborne-trematodes": {
    distribution:
      "The liver flukes Clonorchis and Opisthorchis are concentrated in East and Southeast Asia, including India, Indonesia, the Philippines, Nepal and Bangladesh. Fasciola is hyperendemic on the Bolivian Altiplano and in parts of Ethiopia, where it is a livestock-linked disease.",
    countries: ["india", "indonesia", "philippines", "nepal", "bangladesh", "bolivia", "ethiopia"],
  },
  "mycobacterium-leprae": {
    distribution:
      "Cases are reported from more than 120 countries. India, Brazil and Indonesia each report over 10,000 new cases a year, and twelve further countries — among them Bangladesh, the Democratic Republic of the Congo, Ethiopia, Nepal, Nigeria, the Philippines and Tanzania — report between 1,000 and 10,000.",
    countries: ["india", "brazil", "indonesia", "bangladesh", "dr-congo", "ethiopia", "nepal", "nigeria", "philippines", "tanzania"],
  },
  "mycobacterium-ulcerans": {
    distribution:
      "Concentrated in West and Central Africa — Nigeria, Cameroon, Ghana, the Democratic Republic of the Congo and Angola among the main reporting countries — with a separate and rising focus in coastal Victoria, Australia.",
    countries: ["nigeria", "cameroon", "ghana", "dr-congo", "angola"],
  },
  "sarcoptes-scabiei": {
    distribution:
      "Found wherever people live in crowded conditions with limited water. The highest prevalence is in tropical Africa, the Pacific and parts of Asia and Latin America, and children carry the largest share of infection.",
    countries: ["nigeria", "ethiopia", "dr-congo", "tanzania", "kenya", "uganda", "cameroon", "ghana", "angola", "malawi", "india", "bangladesh", "nepal", "indonesia", "philippines", "papua-new-guinea", "brazil", "bolivia"],
  },
  "treponema-pallidum-pertenue": {
    distribution:
      "Persists in warm, humid, poor rural communities in West and Central Africa, the Pacific and Southeast Asia. Ghana, Cameroon, the Democratic Republic of the Congo, Papua New Guinea and Indonesia are among the main remaining foci.",
    countries: ["ghana", "cameroon", "dr-congo", "papua-new-guinea", "indonesia", "philippines", "nigeria", "ethiopia"],
  },
  "chlamydia-trachomatis": {
    distribution:
      "Historically the leading infectious cause of blindness across Africa, Asia and the Middle East. The remaining burden is concentrated in sub-Saharan Africa — Ethiopia, Nigeria, Chad, Mali and Niger among the worst affected — with residual foci in Yemen and Papua New Guinea.",
    countries: ["ethiopia", "nigeria", "chad", "mali", "sudan", "south-sudan", "kenya", "tanzania", "uganda", "malawi", "angola", "yemen", "papua-new-guinea"],
  },
  "rabies-virus": {
    distribution:
      "Present on every continent except Antarctica. Most human deaths occur in Asia and Africa: India accounts for roughly a third of the world's total, followed by a broad belt of high burden across sub-Saharan Africa.",
    countries: ["india", "nigeria", "dr-congo", "ethiopia", "kenya", "tanzania", "uganda", "malawi", "cameroon", "ghana", "angola", "chad", "sudan", "south-sudan", "bangladesh", "nepal", "indonesia", "philippines", "bolivia", "brazil"],
  },
  "dengue-virus": {
    distribution:
      "Now endemic in more than 100 countries across the tropics and subtropics. Brazil, India, Indonesia, the Philippines and Bangladesh report the largest epidemics, and transmission is expanding into temperate regions as Aedes albopictus establishes itself.",
    countries: ["brazil", "india", "indonesia", "philippines", "bangladesh", "nepal", "yemen", "bolivia", "kenya", "sudan", "nigeria", "ethiopia", "tanzania", "papua-new-guinea"],
  },
  "chikungunya-virus": {
    distribution:
      "Endemic and epidemic across Africa, Asia and the Americas, with explosive urban outbreaks. Brazil, India, Indonesia, the Philippines and Bangladesh have recorded the largest recent epidemics.",
    countries: ["brazil", "india", "indonesia", "philippines", "bangladesh", "kenya", "tanzania", "yemen", "bolivia", "sudan"],
  },
  "snake-venom": {
    distribution:
      "The burden falls on South Asia and sub-Saharan Africa. India records more bites and deaths than any other country, with Nigeria, Bangladesh and the Democratic Republic of the Congo following; the species differ by region, which is why antivenom must be manufactured locally.",
    countries: ["india", "nigeria", "bangladesh", "dr-congo", "nepal", "kenya", "tanzania", "uganda", "ethiopia", "cameroon", "ghana", "malawi", "angola", "chad", "sudan", "south-sudan", "brazil", "bolivia", "indonesia", "philippines", "papua-new-guinea", "yemen"],
  },
  "mycetoma-agents": {
    distribution:
      "Concentrated in the 'mycetoma belt' that runs around the Sahel. Sudan carries the largest burden in the world, followed by Nigeria, Ethiopia, Chad, Cameroon, Senegal and Mali, with cases also reported from India and Yemen.",
    countries: ["sudan", "nigeria", "ethiopia", "chad", "cameroon", "senegal", "mali", "india", "yemen"],
  },
  plasmodium: {
    distribution:
      "The African Region accounts for about 94% of cases. Nigeria, the Democratic Republic of the Congo, Uganda and Mozambique are among the largest contributors; outside Africa the burden is concentrated in India, Indonesia and Papua New Guinea. Plasmodium vivax dominates in much of Asia and Latin America.",
    countries: ["nigeria", "dr-congo", "uganda", "tanzania", "kenya", "ethiopia", "malawi", "cameroon", "ghana", "senegal", "mali", "angola", "chad", "sudan", "south-sudan", "india", "indonesia", "bangladesh", "papua-new-guinea", "brazil", "bolivia", "philippines", "yemen"],
  },
  "mycobacterium-tuberculosis": {
    distribution:
      "Eight countries account for about two thirds of global cases, with India first, followed by Indonesia, China and the Philippines. In Africa the largest burdens are in the Democratic Republic of the Congo, Nigeria, South Africa and Ethiopia, and the epidemic is closely coupled to HIV.",
    countries: ["india", "indonesia", "philippines", "dr-congo", "nigeria", "south-africa", "ethiopia", "kenya", "tanzania", "uganda", "malawi", "bangladesh", "brazil", "angola", "chad", "sudan", "south-sudan", "cameroon", "ghana", "mali", "senegal", "guinea", "yemen", "nepal", "papua-new-guinea", "bolivia"],
  },
  "zika-virus": {
    distribution:
      "First isolated in Uganda and now widespread across the tropics. The largest epidemic was in Brazil in 2015–2016, and transmission has since been documented across Latin America and the Caribbean and in India, Indonesia and the Philippines.",
    countries: ["brazil", "bolivia", "india", "indonesia", "philippines", "bangladesh", "uganda", "nigeria"],
  },
  ebolavirus: {
    distribution:
      "Outbreaks occur chiefly in Central and West Africa. The Democratic Republic of the Congo has had the most outbreaks of any country, followed by Uganda; the 2014–2016 epidemic centred on Guinea, Sierra Leone and Liberia, and the virus was first identified in what is now South Sudan and the DRC in 1976.",
    countries: ["dr-congo", "uganda", "guinea", "south-sudan", "sudan", "nigeria"],
  },
};
