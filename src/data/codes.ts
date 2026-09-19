/**
 * Standard identifier codes for country records.
 *
 * `iso2` / `iso3` build the ISO 3166-1 alpha-2 and alpha-3 entries, linking to
 * the ISO Online Browsing Platform; `geonames` builds the GeoNames ID entry,
 * linking to the GeoNames country page. Values are resolved from the GeoNames
 * `countryInfo.txt` dump, which carries the ISO codes and GeoNames id together.
 */
export type CodeRef = { code: string; label: string; url: string };

export const iso2 = (c: string): CodeRef => ({
  code: c,
  label: "ISO 3166-1 alpha-2",
  url: `https://www.iso.org/obp/ui/#iso:code:3166:${c}`,
});

export const iso3 = (c: string): CodeRef => ({
  code: c,
  label: "ISO 3166-1 alpha-3",
  url: `https://www.iso.org/obp/ui/#iso:code:3166:${c}`,
});

export const geonames = (id: string): CodeRef => ({
  code: id,
  label: "GeoNames",
  url: `https://www.geonames.org/${id}`,
});
