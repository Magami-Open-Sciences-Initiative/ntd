import type { Spike } from "./merge";

/**
 * Where each vector occurs, and where it matters most.
 *
 * Merged onto the vector records at load time: `countries` is unioned into the
 * reference list (so country pages show the vector, and the vector page lists
 * the countries), and `distribution` is the prose that explains the geography.
 *
 * Country lists cover the 27 countries in this corpus, not complete global
 * distribution.
 */
export const VECTOR_COUNTRIES: Record<string, Spike> = {
  "aedes-aegypti": {
    distribution:
      "Pantropical and subtropical, and the main vector of dengue in the Americas and much of Asia. It is an urban mosquito that breeds in domestic water containers and bites by day, so it follows piped-water failures and unplanned urban growth. In parts of Africa it coexists with Aedes albopictus.",
    countries: ["brazil", "india", "indonesia", "philippines", "bangladesh", "nepal", "yemen", "bolivia", "nigeria", "kenya", "tanzania", "ethiopia", "uganda", "cameroon", "ghana", "malawi", "angola", "chad", "sudan", "papua-new-guinea"],
  },
  "aedes-albopictus": {
    distribution:
      "Native to Southeast Asia and now established across temperate and tropical regions, including southern Europe, North America and parts of Africa and South America. Its eggs survive drying and cold, so it colonises places where Aedes aegypti cannot persist, and it has caused the first autochthonous dengue in Europe.",
    countries: ["brazil", "india", "indonesia", "philippines", "bangladesh", "nepal", "yemen", "bolivia", "nigeria", "cameroon", "papua-new-guinea"],
  },
  "tsetse-fly": {
    distribution:
      "Found only in sub-Saharan Africa, across roughly three dozen countries, in a patchy distribution tied to shade, vegetation and water. That restricted range is why sleeping sickness has been pushed down so far, and why spatially targeted control works.",
    countries: ["dr-congo", "guinea", "angola", "uganda", "kenya", "south-sudan", "chad", "cameroon", "tanzania", "malawi"],
  },
  sandfly: {
    distribution:
      "Phlebotomus species transmit leishmaniasis across North and East Africa, the Middle East, southern Europe and Asia; Lutzomyia species transmit it in Latin America. They breed in moist organic matter — animal burrows, soil, cracks in walls — which makes them harder to attack than container-breeding mosquitoes.",
    countries: ["india", "bangladesh", "nepal", "sudan", "south-sudan", "ethiopia", "kenya", "yemen", "brazil", "bolivia", "senegal", "mali", "cameroon"],
  },
  blackfly: {
    distribution:
      "Simulium blackflies breed in fast-flowing, well-oxygenated rivers, which is why onchocerciasis clusters along the rivers communities depend on. The main burden is in tropical Africa; small foci persist in the Brazilian Amazon and on the border with Venezuela, and transmission has been interrupted across most of Latin America.",
    countries: ["nigeria", "dr-congo", "ethiopia", "cameroon", "uganda", "tanzania", "chad", "angola", "south-sudan", "sudan", "brazil"],
  },
  "culex-mosquito": {
    distribution:
      "Cosmopolitan. Culex quinquefasciatus breeds in polluted, stagnant water — latrines, open drains, septic tanks — and is the principal lymphatic filariasis vector in urban Africa and Asia, which links filariasis control to sanitation and drainage rather than to nets alone.",
    countries: ["india", "indonesia", "bangladesh", "nigeria", "dr-congo", "tanzania", "kenya", "uganda", "malawi", "ethiopia", "ghana", "philippines", "papua-new-guinea", "brazil"],
  },
  "freshwater-snails": {
    distribution:
      "The snail host differs by schistosome species and region: Bulinus for Schistosoma haematobium in Africa and the Middle East, Biomphalaria for S. mansoni in Africa and South America, and Oncomelania for S. japonicum in China, the Philippines and Indonesia. Irrigation schemes and dams expand suitable habitat and have caused outbreaks.",
    countries: ["nigeria", "dr-congo", "ethiopia", "tanzania", "uganda", "malawi", "kenya", "cameroon", "ghana", "senegal", "mali", "angola", "chad", "sudan", "south-sudan", "brazil", "philippines", "indonesia"],
  },
  "triatomine-bug": {
    distribution:
      "Confined to the Americas, from the southern United States to Argentina. Triatoma infestans was the dominant domestic vector in the Southern Cone and has been largely eliminated from houses there, while sylvatic species continue to transmit in the Gran Chaco and the Amazon basin.",
    countries: ["bolivia", "brazil"],
  },
  "anopheles-mosquito": {
    distribution:
      "Anopheles gambiae and its relatives dominate transmission in sub-Saharan Africa and are among the most efficient malaria vectors in the world, because they prefer people, bite at night and live indoors. Other Anopheles species transmit across South and Southeast Asia, Latin America and the Middle East, where transmission is often lower and more seasonal.",
    countries: ["nigeria", "dr-congo", "uganda", "tanzania", "kenya", "ethiopia", "malawi", "cameroon", "ghana", "senegal", "mali", "angola", "chad", "sudan", "south-sudan", "india", "indonesia", "bangladesh", "papua-new-guinea", "brazil", "bolivia", "philippines", "yemen"],
  },
};
