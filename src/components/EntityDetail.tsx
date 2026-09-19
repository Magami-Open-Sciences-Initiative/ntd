import Link from "next/link";
import { KIND_FIELDS, KIND_META, type Stat } from "@/lib/schema";
import { backlinksByKind, resolve, type Node } from "@/lib/graph";
import { entityHref, withBase } from "@/lib/nav";
import { citeData } from "@/lib/cite";
import { Chip, KindBadge, SectionHeading, StatGrid } from "./ui";
import { CiteBlock } from "./CiteBlock";
import { VerificationToggle } from "./VerificationToggle";
import { ContributePanel } from "./ContributePanel";

type Rec = Record<string, unknown>;

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function isNonEmpty(v: unknown): boolean {
  if (v == null) return false;
  if (Array.isArray(v)) return v.length > 0;
  if (typeof v === "string") return v.trim().length > 0;
  return true;
}

export function EntityDetail({ node }: { node: Node }) {
  const rec = node.record as Rec;
  const kind = node.kind;
  const meta = KIND_META[kind];
  const specs = KIND_FIELDS[kind];

  // Resistance records are backlinks (a resistance record points at the disease,
  // pathogen or vector it concerns), so this panel is derived from the graph
  // rather than from a field on the record. It lifts them out of "Connected"
  // into their own section, next to the treatment and control fields.
  const allBacklinks = backlinksByKind(node.id);
  const resistanceNodes = allBacklinks.find((g) => g.kind === "resistance")?.nodes ?? [];
  const showsResistancePanel = specs.some((s) => s.type === "resistance");

  const visible = specs.filter((s) => {
    if (s.type === "targets") return isNonEmpty(rec.targets) || isNonEmpty(rec.targetNote);
    if (s.type === "resistance") return resistanceNodes.length > 0;
    // Institutions: when the domicile is linked to a country record, show the
    // linked chip instead of the free-text country line (avoid showing both).
    if (kind === "institutions" && s.key === "country" && isNonEmpty(rec.countries)) return false;
    return isNonEmpty(rec[s.key]);
  });

  function RefChips({ ids }: { ids: unknown }) {
    const nodes = resolve(Array.isArray(ids) ? (ids as string[]) : []);
    if (!nodes.length) return null;
    return (
      <div className="flex flex-wrap gap-2">
        {nodes.map((n) => (
          <Chip key={n.id} node={n} />
        ))}
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-3">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span>›</span>
        <Link href={`/${kind}/`} className="hover:text-ink">
          {meta.plural}
        </Link>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <KindBadge kind={kind} />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
            checked {String(rec.asOf)}
          </span>
          <VerificationToggle verification={rec.verification as never} />
        </div>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          {node.name}
        </h1>
        <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-lg leading-relaxed text-ink-2">
          {String(rec.tldr)}
        </p>
      </header>

      {visible.length > 0 ? (
        <nav className="mb-10 flex flex-wrap gap-x-4 gap-y-1.5 border-y border-line py-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
          {visible.map((s) => (
            <a key={s.key} href={`#${slug(s.label)}`} className="hover:text-ink">
              {s.label}
            </a>
          ))}
          <a href="#connected" className="hover:text-ink">
            Connected
          </a>
          <a href="#cite" className="hover:text-ink">
            Cite
          </a>
          <a href="#sources" className="hover:text-ink">
            Sources
          </a>
        </nav>
      ) : null}

      <section className="prose-magami mb-10">
        <SectionHeading id="overview">Overview</SectionHeading>
        <p>{String(rec.summary)}</p>
      </section>

      <div className="space-y-10">
        {visible.map((s) => {
          const raw = rec[s.key];
          const anchor = slug(s.label);

          if (s.type === "prose") {
            const text = Array.isArray(raw) ? raw.join(", ") : String(raw);
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <p className="prose-magami leading-relaxed text-ink-2">{text}</p>
              </section>
            );
          }

          if (s.type === "registry") {
            const text = Array.isArray(raw) ? raw.join(", ") : String(raw);
            const url = typeof rec.registryUrl === "string" ? rec.registryUrl : undefined;
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <p className="prose-magami leading-relaxed text-ink-2">
                  {text}
                  {url ? (
                    <>
                      {" — "}
                      <a
                        href={url}
                        className="link-underline text-ink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view the registry entry →
                      </a>
                    </>
                  ) : null}
                </p>
              </section>
            );
          }

          if (s.type === "products") {
            const items = raw as {
              name: string;
              manufacturer: string;
              stage?: string;
              format?: string;
              note?: string;
              url?: string;
              approvals?: { body: string; status: string; date?: string; note?: string }[];
            }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-line bg-surface text-sm">
                  {items.map((it) => (
                    <li key={`${it.name}-${it.manufacturer}`} className="px-4 py-3">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        {it.url ? (
                          <a
                            href={it.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline font-medium text-ink"
                          >
                            {it.name}
                          </a>
                        ) : (
                          <span className="font-medium text-ink">{it.name}</span>
                        )}
                        <span className="text-ink-2">{it.manufacturer}</span>
                      </div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 font-mono text-[11px] uppercase tracking-wider text-ink-3">
                        {it.stage ? <span>{it.stage}</span> : null}
                        {it.format ? <span>{it.format}</span> : null}
                        {it.url ? (
                          <a
                            href={it.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-ink-3 hover:text-ink"
                          >
                            product site ↗
                          </a>
                        ) : null}
                      </div>
                      {it.approvals?.length ? (
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {it.approvals.map((a, i) => (
                            <span
                              key={`${a.body}-${i}`}
                              title={a.note}
                              className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-3"
                            >
                              {a.body}: {a.status}
                              {a.date ? ` · ${a.date}` : ""}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      {it.note ? <p className="mt-1 text-xs leading-relaxed text-ink-2">{it.note}</p> : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs leading-relaxed text-ink-3">
                  Products listed from the FIND Test Directory (finddx.org). Inclusion is not an
                  endorsement, and a listing does not imply WHO prequalification or national approval.
                </p>
              </section>
            );
          }

          if (s.type === "pricing") {
            const items = raw as {
              catalogue: string;
              price: string;
              unit?: string;
              year?: number;
              note?: string;
              url?: string;
            }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-line bg-surface text-sm">
                  {items.map((it, i) => (
                    <li key={`${it.catalogue}-${i}`} className="px-4 py-3">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-medium text-ink">{it.price}</span>
                        {it.unit ? <span className="text-ink-2">{it.unit}</span> : null}
                        <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-ink-3">
                          {it.catalogue}
                          {it.year ? ` · ${it.year}` : ""}
                        </span>
                      </div>
                      {it.note ? (
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-2">{it.note}</p>
                      ) : null}
                      {it.url ? (
                        <a
                          href={it.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline mt-1 inline-block font-mono text-[11px] uppercase tracking-wider text-ink-3 hover:text-ink"
                        >
                          catalogue ↗
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          if (s.type === "costs") {
            const items = raw as {
              intervention: string;
              cost: string;
              per: string;
              note?: string;
              source?: { label: string; url: string };
            }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-line bg-surface text-sm">
                  {items.map((it, i) => (
                    <li key={`${it.intervention}-${i}`} className="px-4 py-3">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-medium text-ink">{it.cost}</span>
                        <span className="text-ink-2">{it.per}</span>
                        <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-ink-3">
                          {it.intervention}
                        </span>
                      </div>
                      {it.note ? (
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-2">{it.note}</p>
                      ) : null}
                      {it.source ? (
                        <a
                          href={it.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline mt-1 inline-block font-mono text-[11px] uppercase tracking-wider text-ink-3 hover:text-ink"
                        >
                          {it.source.label} ↗
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          if (s.type === "equity") {
            const e = raw as Record<string, unknown>;
            const FLAGS: [string, string][] = [
              ["coverageGap", "Coverage gap"],
              ["conflictAffected", "Conflict-affected"],
              ["genderInequality", "Gender inequity"],
              ["disabilityGap", "Disability gap"],
              ["genderResponsive", "Gender-responsive"],
              ["disabilityInclusive", "Disability-inclusive"],
              ["conflictAdapted", "Conflict-adapted"],
            ];
            const on = FLAGS.filter(([k]) => e[k] === true);
            const note = typeof e.note === "string" ? e.note : "";
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {on.map(([k, l]) => (
                    <span
                      key={k}
                      className="rounded-full border border-line px-2.5 py-1 text-xs tracking-wide text-ink-2"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                {note ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{note}</p>
                ) : null}
              </section>
            );
          }

          if (s.type === "codes") {
            const items = raw as { code: string; label: string; url: string }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-line bg-surface text-sm">
                  {items.map((it) => (
                    <li
                      key={`${it.code}-${it.label}`}
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-3"
                    >
                      <span className="font-mono text-xs font-medium text-ink">{it.code}</span>
                      <span className="text-ink-2">{it.label}</span>
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline ml-auto whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-ink-3"
                      >
                        {s.linkLabel ?? "WHO ICD-10 ↗"}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs leading-relaxed text-ink-3">
                  {s.footnote ??
                    "Codes from the WHO International Classification of Diseases, 10th revision. Each links to the code in the official WHO ICD-10 browser."}
                </p>
              </section>
            );
          }

          if (s.type === "dbs") {
            const items = raw as { id?: string; name: string; url: string; note?: string }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-line bg-surface text-sm">
                  {items.map((it, i) => (
                    <li
                      key={`${it.name}-${it.id ?? i}`}
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-3"
                    >
                      {it.id ? (
                        <span className="font-mono text-xs text-ink-3">{it.id}</span>
                      ) : null}
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-ink"
                      >
                        {it.name} ↗
                      </a>
                      {it.note ? (
                        <span className="text-xs leading-relaxed text-ink-2">{it.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          if (s.type === "website") {
            const url = String(raw);
            const note = rec.websiteNote ? String(rec.websiteNote) : "";
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <p className="text-sm">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink"
                  >
                    {url} ↗
                  </a>
                </p>
                {note ? <p className="mt-1 text-xs leading-relaxed text-ink-2">{note}</p> : null}
              </section>
            );
          }

          if (s.type === "refs") {
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <RefChips ids={raw} />
              </section>
            );
          }

          if (s.type === "stats") {
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <StatGrid stats={raw as Stat[]} />
              </section>
            );
          }

          if (s.type === "timeline") {
            const entries = raw as {
              date: string;
              text: string;
              refs?: string[];
              source?: { label: string; url: string };
            }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ol className="relative space-y-5 border-l border-rule pl-5">
                  {entries.map((e, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[1.6rem] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                        {e.date}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-2">{e.text}</p>
                      {e.refs?.length ? (
                        <div className="mt-2 flex flex-wrap gap-2">
                          <RefChips ids={e.refs} />
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </section>
            );
          }

          if (s.type === "sections") {
            const blocks = raw as { id: string; title: string; body: string; refs?: string[] }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <div className="space-y-5">
                  {blocks.map((b) => (
                    <div key={b.id} className="rounded-lg border border-line bg-surface p-4">
                      <h3 className="font-display text-lg text-ink">{b.title}</h3>
                      <div className="prose-magami mt-1">
                        {b.body.split(/\n\n+/).map((para, i) => (
                          <p key={i} className="text-sm leading-relaxed text-ink-2">
                            {para}
                          </p>
                        ))}
                      </div>
                      {b.refs?.length ? (
                        <div className="mt-3">
                          <RefChips ids={b.refs} />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (s.type === "targets") {
            const note = rec.targetNote;
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <RefChips ids={raw} />
                {typeof note === "string" && note.length ? (
                  <p className={`text-sm leading-relaxed text-ink-2 ${raw ? "mt-3" : ""}`}>{note}</p>
                ) : null}
              </section>
            );
          }

          if (s.type === "resistance") {
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink-2">
                  {resistanceNodes.length === 1
                    ? "One resistance record in this corpus links here."
                    : `${resistanceNodes.length} resistance records in this corpus link here.`}{" "}
                  Each is a standalone record of how the resistance works, where it has been seen and
                  who watches for it.
                </p>
                <div className="space-y-3">
                  {resistanceNodes.map((n) => {
                    const r = n.record as Rec;
                    return (
                      <Link
                        key={n.id}
                        href={entityHref(n.kind, n.id)}
                        className="block rounded-lg border border-line bg-surface p-4 transition-colors hover:border-rule"
                      >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-medium text-ink">{n.name}</span>
                          {isNonEmpty(r.resistanceType) ? (
                            <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                              {String(r.resistanceType)}
                            </span>
                          ) : null}
                          {isNonEmpty(r.status) ? (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--kind-fg)]">
                              {String(r.status)}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-2">{n.record.tldr}</p>
                        <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-wider text-ink-3">
                          Read the record →
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <p className="mt-3">
                  <Link
                    href="/resistance/"
                    className="link-underline font-mono text-[11px] uppercase tracking-wider text-ink-2"
                  >
                    All resistance records →
                  </Link>
                </p>
              </section>
            );
          }

          if (s.type === "structure") {
            const st = raw as {
              cid: number;
              formula: string;
              weight: string;
              smiles: string;
              image: string;
              pubchem: string;
              note?: string;
            };
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <div className="grid gap-5 sm:grid-cols-[220px_1fr]">
                  <a
                    href={st.pubchem}
                    className="block rounded-lg border border-line bg-white p-3"
                    rel="noopener noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBase(String(st.image))}
                      alt={`Chemical structure of ${node.name}`}
                      width={400}
                      height={400}
                      className="h-auto w-full"
                    />
                  </a>
                  <div className="space-y-3">
                    <dl className="grid grid-cols-[9rem_1fr] gap-x-3 gap-y-1 text-sm">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                        Formula
                      </dt>
                      <dd className="font-mono text-ink-2">{st.formula}</dd>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                        Molecular weight
                      </dt>
                      <dd className="font-mono text-ink-2">{st.weight}</dd>
                    </dl>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                        SMILES (connectivity)
                      </div>
                      <code className="mt-1 block break-all rounded-lg border border-line bg-bg-alt px-3 py-2 font-mono text-xs text-ink-2">
                        {st.smiles}
                      </code>
                      <p className="mt-1 text-xs leading-relaxed text-ink-3">
                        Connectivity only — stereochemistry is not encoded in this string. The
                        structure image carries it.
                      </p>
                    </div>
                    <a href={st.pubchem} className="link-underline text-xs text-ink-2" rel="noopener noreferrer">
                      PubChem CID {st.cid} →
                    </a>
                    {st.note ? (
                      <p className="text-xs leading-relaxed text-ink-3">{st.note}</p>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          }

          if (s.type === "siblings") {
            const items = raw as { name: string; note?: string }[];
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <ul className="divide-y divide-[var(--line)] overflow-hidden rounded-lg border border-line bg-surface text-sm">
                  {items.map((it) => (
                    <li key={it.name} className="flex flex-wrap items-baseline gap-x-2 px-4 py-2.5">
                      <span className="font-medium text-ink">{it.name}</span>
                      {it.note ? <span className="leading-relaxed text-ink-2">{it.note}</span> : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs leading-relaxed text-ink-3">
                  Same class, listed for context. Not all of these are used against neglected
                  tropical diseases.
                </p>
              </section>
            );
          }

          if (s.type === "protein") {
            const p = raw as {
              uniprot: string;
              entryName: string;
              proteinName: string;
              uniprotName?: string;
              organism: string;
              reviewed: boolean;
              gene?: string;
              length: number;
              sequence: string;
              alphafold?: {
                page: string;
                pdb: string;
                cif: string;
                version: number;
                plddt: number;
                plddtVeryHigh: number;
              };
              pdb?: { ids: string[]; total: number };
              note?: string;
            };
            const plddt = p.alphafold ? Math.round(p.alphafold.plddt) : null;
            const veryHigh =
              p.alphafold != null ? Math.round(p.alphafold.plddtVeryHigh * 100) : null;
            const lowConfidence = plddt != null && plddt < 70;
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <dl className="grid grid-cols-[9rem_1fr] gap-x-3 gap-y-1 text-sm">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                    UniProt
                  </dt>
                  <dd className="text-ink-2">
                    <a
                      href={`https://www.uniprot.org/uniprotkb/${p.uniprot}/entry`}
                      className="link-underline"
                      rel="noopener noreferrer"
                    >
                      {p.uniprot}
                    </a>
                    <span className="font-mono text-ink-3"> · {p.entryName}</span>
                    <span className="text-ink-3"> · {p.reviewed ? "reviewed" : "unreviewed"}</span>
                  </dd>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                    Protein
                  </dt>
                  <dd className="text-ink-2">
                    {p.proteinName}
                    {p.uniprotName ? (
                      <span className="text-ink-3"> · UniProt: {p.uniprotName}</span>
                    ) : null}
                  </dd>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                    Sequence from
                  </dt>
                  <dd className="text-ink-2">{p.organism}</dd>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                    Length
                  </dt>
                  <dd className="font-mono text-ink-2">
                    {p.length} aa{p.gene ? ` · ${p.gene}` : ""}
                  </dd>
                </dl>

                <details className="mt-4">
                  <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-wider text-ink-3 hover:text-ink">
                    Amino-acid sequence ({p.length} aa)
                  </summary>
                  <code className="mt-2 block max-h-64 overflow-auto break-all rounded-lg border border-line bg-bg-alt px-3 py-2 font-mono text-xs leading-relaxed text-ink-2">
                    {p.sequence}
                  </code>
                </details>

                <div className="mt-4 space-y-2 text-sm text-ink-2">
                  <p>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                      Experimental structures
                    </span>
                    <br />
                    {p.pdb
                      ? `${p.pdb.total} ${p.pdb.total === 1 ? "entry" : "entries"} in the PDB`
                      : "none deposited for this exact protein"}
                  </p>
                  {p.pdb ? (
                    <p className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs">
                      {p.pdb.ids.map((id) => (
                        <a
                          key={id}
                          href={`https://www.rcsb.org/structure/${id}`}
                          className="link-underline"
                          rel="noopener noreferrer"
                        >
                          {id}
                        </a>
                      ))}
                      {p.pdb.total > p.pdb.ids.length ? (
                        <span className="text-ink-3">
                          showing {p.pdb.ids.length} of {p.pdb.total}
                        </span>
                      ) : null}
                    </p>
                  ) : null}
                </div>

                <div className="mt-4 space-y-2 text-sm text-ink-2">
                  <p>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                      Predicted model
                    </span>
                    <br />
                    {p.alphafold ? (
                      <>
                        AlphaFold v{p.alphafold.version} · mean pLDDT {plddt}
                        {veryHigh != null ? ` · ${veryHigh}% of residues above 90` : ""}
                      </>
                    ) : (
                      "AlphaFold has no model for this entry"
                    )}
                  </p>
                  {p.alphafold ? (
                    <p className="flex flex-wrap gap-x-3 font-mono text-xs">
                      <a
                        href={p.alphafold.page}
                        className="link-underline"
                        rel="noopener noreferrer"
                      >
                        AlphaFold entry →
                      </a>
                      <a
                        href={p.alphafold.pdb}
                        className="link-underline"
                        rel="noopener noreferrer"
                      >
                        download model
                      </a>
                    </p>
                  ) : null}
                </div>

                {lowConfidence ? (
                  <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-xs leading-relaxed text-ink-2">
                    Low confidence: a mean pLDDT of {plddt} means much of this model is uncertain.
                    Do not read it like a solved structure.
                  </p>
                ) : null}

                <p className="mt-3 text-xs leading-relaxed text-ink-3">
                  A predicted model is a hypothesis, not an experiment; a low pLDDT marks regions
                  the predictor could not resolve. PDB counts match this exact protein, so a target
                  can show none here while the same protein family is well characterised in other
                  organisms.
                </p>
                {p.note ? (
                  <p className="mt-2 text-xs leading-relaxed text-ink-3">{p.note}</p>
                ) : null}
              </section>
            );
          }

          return null;
        })}
      </div>

      <Connected id={node.id} exclude={showsResistancePanel ? ["resistance"] : []} />

      <section id="cite" className="mt-12 scroll-mt-24">
        <SectionHeading>Cite this page</SectionHeading>
        <p className="mb-3 text-sm leading-relaxed text-ink-2">
          There is no DOI yet, so cite the page by its stable URL and the date the record was last
          checked. Replace the access date with the date you actually read it.{" "}
          <Link href="/cite/" className="link-underline text-ink">
            All citation formats and the licence →
          </Link>
        </p>
        <CiteBlock citation={citeData(node)} />
      </section>

      <ContributePanel
        kind={kind}
        id={node.id}
        name={node.name}
        verification={(rec.verification as { status?: string } | undefined)?.status}
      />

      <section id="sources" className="mt-12 scroll-mt-24">
        <SectionHeading>Sources</SectionHeading>
        <ul className="space-y-2 text-sm">
          {(rec.links as { label: string; url: string }[]).map((l) => (
            <li key={l.url}>
              <a href={l.url} className="link-underline text-ink-2" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-ink-3">
          Last checked {String(rec.asOf)} · verify at source
        </p>
      </section>
    </article>
  );
}

function Connected({ id, exclude = [] }: { id: string; exclude?: string[] }) {
  const groups = backlinksByKind(id).filter((g) => !exclude.includes(g.kind));
  if (!groups.length) return null;
  return (
    <section id="connected" className="mt-12 scroll-mt-24">
      <SectionHeading>Connected</SectionHeading>
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.kind}>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-3">
              {KIND_META[g.kind].plural} ({g.nodes.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {g.nodes.map((n) => (
                <Link
                  key={n.id}
                  href={entityHref(n.kind, n.id)}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-2 transition-colors hover:border-rule hover:text-ink"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
