import type { Kind } from "./schema";

export type KindColor = { light: string; dark: string };

/**
 * One hue per kind. Light values are readable on the paper background;
 * dark values are the lifted equivalent so a badge stays legible on #0a0a0a.
 * Badges read these through CSS variables (see globals.css .kind-badge).
 */
export const KIND_COLORS: Record<Kind, KindColor> = {
  diseases: { light: "#0f766e", dark: "#5eead4" },
  pathogens: { light: "#9a3412", dark: "#fdba74" },
  vectors: { light: "#4d7c0f", dark: "#bef264" },
  drugs: { light: "#1d4ed8", dark: "#93c5fd" },
  diagnostics: { light: "#6d28d9", dark: "#c4b5fd" },
  targets: { light: "#be123c", dark: "#fda4af" },
  technologies: { light: "#0e7490", dark: "#67e8f9" },
  trials: { light: "#a16207", dark: "#fde047" },
  institutions: { light: "#334155", dark: "#cbd5e1" },
  countries: { light: "#a21caf", dark: "#f0abfc" },
  people: { light: "#4338ca", dark: "#a5b4fc" },
  roadmaps: { light: "#7e22ce", dark: "#d8b4fe" },
  guidelines: { light: "#b45309", dark: "#fcd34d" },
  bottlenecks: { light: "#b91c1c", dark: "#fca5a5" },
  ideas: { light: "#047857", dark: "#6ee7b7" },
  terms: { light: "#57534e", dark: "#d6d3d1" },
};

export function kindStyle(kind: Kind): React.CSSProperties {
  const c = KIND_COLORS[kind];
  return {
    ["--kind-fg" as string]: c.light,
    ["--kind-fg-dark" as string]: c.dark,
  } as React.CSSProperties;
}

export function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ");
}

export function pluralize(n: number, one: string, many?: string): string {
  return `${n.toLocaleString()} ${n === 1 ? one : (many ?? one + "s")}`;
}

/** Truncate on a word boundary, for card blurbs. */
export function clamp(text: string, max = 180): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const at = cut.lastIndexOf(" ");
  return cut.slice(0, at > 0 ? at : max).trimEnd() + "…";
}
