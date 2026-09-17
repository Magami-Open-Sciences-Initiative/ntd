import Link from "next/link";
import { KIND_FIELDS, KIND_META } from "@/lib/schema";
import { backlinksByKind, resolve, type Node } from "@/lib/graph";
import { entityHref } from "@/lib/nav";
import { citeData } from "@/lib/cite";
import { Chip, KindBadge, SectionHeading, StatGrid } from "./ui";
import { CiteBlock } from "./CiteBlock";

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

  const visible = specs.filter((s) => {
    if (s.type === "targets") return isNonEmpty(rec.targets) || isNonEmpty(rec.targetNote);
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
            return (
              <section key={s.key}>
                <SectionHeading id={anchor}>{s.label}</SectionHeading>
                <p className="prose-magami leading-relaxed text-ink-2">{String(raw)}</p>
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
                <StatGrid stats={raw as { label: string; value: string; note?: string }[]} />
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
                      src={st.image}
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

      <Connected id={node.id} />

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

function Connected({ id }: { id: string }) {
  const groups = backlinksByKind(id);
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
