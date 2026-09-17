/**
 * Deep-dive spikes.
 *
 * A "spike" is a partial record merged onto a base record at load time — the way
 * a disease page grows from a stub into a deep dive without turning one data file
 * into a wall. Array fields are merged rather than replaced:
 *
 *   stats      union by `label` (a spike value refreshes the base figure)
 *   timeline   concatenated and sorted by the year in `date`
 *   sections   union by `id`
 *   refs       union (deduplicated)
 *
 * Every other field is an override.
 */
export type Spike = Record<string, unknown>;

function year(date: unknown): number {
  const m = String(date).match(/\d{4}/);
  return m ? Number(m[0]) : 9999;
}

function mergeArray(key: string, base: unknown, extra: unknown): unknown[] {
  const a = Array.isArray(base) ? base : [];
  const b = Array.isArray(extra) ? extra : [];

  if (key === "stats") {
    const byLabel = new Map<unknown, unknown>();
    for (const s of [...a, ...b]) {
      if (s && typeof s === "object" && "label" in s) byLabel.set((s as { label: unknown }).label, s);
    }
    return [...byLabel.values()];
  }

  if (key === "timeline") {
    return [...a, ...b].sort((x, y) => {
      const xd = (x as { date?: unknown })?.date;
      const yd = (y as { date?: unknown })?.date;
      return year(xd) - year(yd);
    });
  }

  if (key === "sections") {
    const byId = new Map<unknown, unknown>();
    for (const s of [...a, ...b]) {
      if (s && typeof s === "object" && "id" in s) byId.set((s as { id: unknown }).id, s);
      else byId.set(s, s);
    }
    return [...byId.values()];
  }

  return [...new Set([...a, ...b])];
}

export function applySpike(base: Record<string, unknown>, spike: Spike): Record<string, unknown> {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(spike)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) out[key] = mergeArray(key, base[key], value);
    else out[key] = value;
  }
  return out;
}

export function applySpikes(
  records: { id: string }[],
  spikes: Record<string, Spike>,
): Record<string, unknown>[] {
  return records.map((r) => {
    const spike = spikes[r.id];
    return spike ? applySpike(r as unknown as Record<string, unknown>, spike) : (r as unknown as Record<string, unknown>);
  });
}
