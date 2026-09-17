# Magami NTD

An open, cited map of **neglected tropical diseases** — one page for every disease, pathogen,
vector, treatment, diagnostic, target, technology, trial, institution, roadmap, bottleneck and
idea, with a plain-English TL;DR on every page.

A project of [Magami Open Sciences Initiative](https://magamios.org).

> **Work in progress.** The corpus is a seeded starter and is not complete or audited. Verify
> anything that matters at its primary source, which every page links. Nothing here is medical
> advice.

## What this is

The whole site is generated from a single typed corpus in `src/data/`. Every record carries a
TL;DR, a summary, the date it was last checked, at least one primary source, and references to
the other objects it relates to. The build resolves every reference, rejects dangling links and
duplicate ids, and **derives backlinks automatically** — so a fact is written once and appears
everywhere it is relevant.

The same corpus ships as a static JSON API at `/api/v1/`.

## Stack

- **Next.js 15** (App Router) with `output: "export"` — a fully static site
- **TypeScript** + **Zod** schemas for every kind
- **Tailwind CSS v4** with MagamiOS brand tokens (deep teal `#134e4a`, lime `#a3e635`,
  Fraunces / Sora / JetBrains Mono)
- Light and dark themes, no tracking, no external runtime calls

## Commands

```bash
npm install
npm run dev          # develop
npm run validate     # parse the corpus, check ids, references and placeholder sources
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm test             # vitest: corpus integrity tests
npm run check:links  # check every primary source URL still resolves
npm run build        # validate → JSON API → llms.txt/llms-full.txt → static export into out/
```

Two fetch scripts rebuild generated data (both need network); neither runs as part of `build`.

```bash
npm run fetch:structures  # PubChem structures for the drug records → src/data/structures.ts
npm run fetch:targets     # UniProt/PDB/AlphaFold data for the target records → src/data/target-sequences.ts
npm run verify:target     # resolve a target to its UniProt accession via the PDB (see below)
```

`npm run build` also emits `sitemap.xml` and `robots.txt` (from `src/app/sitemap.ts`
and `src/app/robots.ts`), the static JSON API under `/api/v1/`, and the
language-model context files `llms.txt` and `llms-full.txt`.

**Before deploying, set `SITE.url` in `src/lib/nav.ts` to the real origin** — it is
used for canonical URLs, OpenGraph, JSON-LD and the sitemap.

## Layout

```
src/data/            The corpus — one file per kind, all spread into ALL_INPUTS in index.ts
src/lib/schema.ts    Zod schema per kind, KIND_META (labels/routes/blurbs), KIND_FIELDS (page layout)
src/lib/graph.ts     Builds the graph: validates ids, resolves references, derives backlinks, search
src/lib/nav.ts       Site metadata and navigation groups
src/app/             Routes: /, /[kind], /[kind]/[id], /about, /search
src/components/      EntityBrowser (index tables), EntityDetail (every object page), UI primitives
scripts/validate.ts  Corpus check (fails the build on any error)
scripts/build-api.ts Emits the static JSON API to public/api/v1/
```

## Adding or fixing a record

1. Find the kind's file under `src/data/` and add or edit the record. Every record needs an `id`,
   `name`, `tldr` (plain English, one or two sentences), `summary`, `asOf` (`YYYY-MM`), and at
   least one `links` entry.
2. Reference other objects **by id** in the relational fields (`diseases`, `pathogens`, `drugs`,
   `targets`, `technologies`, `trials`, `terms`, and so on). Link in one direction only —
   backlinks are derived.
3. Run `npm run validate`. It rejects duplicate ids, dangling references and malformed records,
   and prints the counts per kind.
4. Run `npm run typecheck && npm run lint && npm test && npm run build`.

Adding a whole new kind takes: a schema in `src/lib/schema.ts`, a `KIND_META` and `KIND_FIELDS`
entry, a colour in `src/lib/text.ts`, a data file spread into `ALL_INPUTS`, and a nav entry.

## The corpus so far

**26 diseases** — the 21 on the WHO NTD list, plus five adjacent diseases included for context —
25 pathogens, 9 vectors, 52 treatments, 26 diagnostics, 45 targets, 46 technologies, 39 trials,
49 institutions, 27 countries, 34 people, 7 roadmaps, 22 guidelines, 17 bottlenecks, 12 ideas and
40 glossary terms: **476 objects**, all interlinked. Counts are computed at build time.

**Sourcing:** 381 of 476 records cite more than one primary source; 95 rest on a single one.
Those are mostly biographies, where one authoritative page is the honest answer — padding them
with a generic second link would improve the number and not the sourcing. `npm run validate`
reports the split, rejects placeholder sources (a link to a database homepage is not a citation)
and checks that every `asOf` date is real and not in the future;
`npm run check:links` verifies that all ~877 primary source URLs still resolve.

### Geographic cross-referencing

Every pathogen and every vector carries a **Where it occurs** paragraph and a
**Countries where it is prevalent** list, so a pathogen or vector page names the countries in this
corpus where it circulates and each country page lists the pathogens and vectors found there.
Countries are also shown on diseases, people, bottlenecks and ideas. The lists cover the 27
countries in the corpus, not complete global distribution, and the prose carries what a list
cannot — that Uganda is the only country where both forms of sleeping sickness circulate, or that
the snail host differs by schistosome species and region.

### Treatments: structure, targets and class

Every treatment record now carries:

- **Structure** — a 2D depiction and SMILES fetched from PubChem by `npm run fetch:structures`,
  with the CID it came from. PubChem's endpoint returns *connectivity* SMILES only, with no
  stereochemistry, so two enantiomers produce identical strings; that limitation is stated on the
  page and in the generated file rather than glossed. Biologics and vaccines (antivenom, rabies
  PEP, Ixchiq, ansuvimab) have no small-molecule structure and say why instead of showing nothing.
- **Targets** — what the drug acts on. Where the mechanism is genuinely unsettled (DEC, suramin,
  pentamidine, clofazimine, miltefosine, primaquine, tafenoquine) the page says so in a
  `targetNote` rather than forcing a target onto it.
- **Others in this class** — sibling compounds, including ones with no NTD use, each with a note
  saying what it is.

`npm run validate` enforces that a drug and a target agree in **both** directions: a target
listing a drug that does not declare it is a stale backlink and fails the build. That check found
three incorrect assignments in the base records — permethrin acts on the insect voltage-gated
sodium channel, not acetylcholinesterase; oxamniquine is activated by a schistosome
sulfotransferase; and fexinidazole is a nitroreductase-activated nitroimidazole, not a CYP51
inhibitor.

### Targets: sequence, PDB and AlphaFold

A target is a protein, so where it is a single protein its page carries the **amino-acid
sequence** (UniProt), the **experimental structures** deposited for it (PDB), and the
**AlphaFold predicted model** with its confidence. `npm run fetch:targets` rebuilds this layer.

Three decisions are worth knowing:

- **Only exact pathogen or vector proteins are attached — no model-organism stand-ins.** Where a
  target is a complex (the ribosome, the proteasome), a process (haem detoxification), a lipid
  (ergosterol), a mixture (snake venom), an organism (*Wolbachia*), or simply has no usable
  standalone entry (the dengue proteins, which UniProt annotates as one polyprotein), the page
  says why instead of borrowing a substitute. 24 of 45 targets have a sequence; the other 21 each
  state why not — including the two whose exact entry is still unconfirmed.
- **PDB counts match the exact protein.** Onchocerca beta-tubulin shows none, though the tubulin
  family is heavily crystallised in other organisms. Showing 0 is the honest answer.
- **AlphaFold confidence is recorded, not just linked.** A predicted model is a hypothesis: Ebola
  GP's has a mean pLDDT of 35 and the page says so plainly. AlphaFold file URLs are read from its
  API rather than constructed — the version is not stable (it is v6 now).

The fetch **re-asserts the curation** before writing and fails without writing if anything
disagrees, so a remapped or wrong accession cannot be published. It also cross-checks two
independent sources: AlphaFold's own copy of the sequence must match UniProt's, which it did for
all 22 targets that have a model. This caught real traps — searching UniProt at the *species*
taxon silently returns arbitrary strain variants (reviewed *M. tuberculosis* entries live under
H37Rv), and name-matching returned a dengue polyprotein for NS4B and a plain thioredoxin
reductase for TGR.

**Settling a target whose paralog is unclear: read it off a structure, not a name search.**
`npm run verify:target --text "<query>"` finds PDB entries and prints, for each, the UniProt
accession its polymer entity cross-references and the chemical components bound in it. Because a
deposited structure names the exact protein that was crystallised *with a given inhibitor*, this
is conclusive where annotation search is not: six independent T. cruzi CYP51/inhibitor complexes
all point at `Q7Z1V1`, and six oxamniquine complexes all point at `G4VLE5` — both of which were
then confirmed by sequence (99.6% and 99.2% identical to the entries they replaced). Where no
structure exists, as for the praziquantel channel, the accession has to come from the paper via
the organism's locus name, and those targets are listed as unconfirmed in
`scripts/target-accessions.ts`. That file also records *how* to settle each one.

## Citing, and data currency

- **`/cite/`** documents how to cite the corpus and any single page, in plain text, APA, BibTeX
  and RIS, with the licence and attribution line. Every object page carries a **Cite this page**
  block with the same formats and a copy button, and every record's JSON includes a `citation`
  object. Each page's JSON-LD carries `citation` too.
- **`/status/`** shows when each record was last checked — distribution by date, per-kind oldest
  and newest, average sources and multi-source share. Every record carries its own `asOf`, and
  validation enforces that the date is real, so staleness becomes visible rather than assumed.

### Scope: what is and is not an NTD

The corpus began as the WHO's 21 NTDs and now also covers **podoconiosis, Zika, malaria,
tuberculosis and Ebola**, because they overlap the field completely — shared pathogens, vectors,
drugs, diagnostics, delivery platforms and countries. Each of the five carries an explicit
`scope` field stating that it is *not* on the WHO NTD list, shown at the top of its page, so the
boundary is never blurred. Malaria and tuberculosis have their own WHO programmes and vastly
larger budgets; podoconiosis is non-infectious and not formally listed at all.

## Languages

The interface, the kind names and a French summary for every disease exist in **French** at
`/fr/`, with `hreflang` alternates between the two versions. Detailed content — deep dives, data,
sources — remains in English.

This is deliberate. Machine-translating several hundred pages of scientific prose without review
would put errors where they cost most, so the French layer is limited to what can be written
carefully, and every French page says so. The next step is francophone review, not more
unreviewed text.

### Deep dives

A record can be deepened without rewriting its base file. `src/data/spikes/` holds partial
records merged onto a base disease at load time, and `src/data/deep-drugs.ts` does the same for
the treatments. The merge is generic: `stats` are unioned by label (a deep dive refreshes a
figure), `timeline` is concatenated and sorted by year, `sections` are unioned by id, reference
fields are unioned, and every other field is an override. All 21 diseases have a deep dive, and
all 41 treatments now carry prose sections rather than being stubs.

Records added by later reviews live in `src/data/additions.ts`; the graph pools records from
several files into one kind, so nothing in the base files needs editing.

## Kinds

| Kind | Holds |
|---|---|
| Diseases, Pathogens, Vectors | The diseases, the organisms that cause them, and the insects, bugs and snails that carry them |
| Treatments, Diagnostics, Targets | Drugs, tests, and the molecules in a parasite a drug can switch off |
| Technologies, Trials | Vector control, vaccines, AI, diagnostic and drug-discovery methods; and the studies behind them |
| Institutions, Countries, People | Who does the work, where the burden and elimination progress sit, and the people the corpus records — including African programme leaders and researchers |
| Roadmaps, Guidelines | History-to-horizon for each technology family, and the recommendations that set what programmes do |
| Bottlenecks, Ideas, Terms | What is stuck — including conflict, drug resistance, cost, gender, mental health and workforce — the fixes proposed, and plain-English definitions |

## Licence, citation and machine access

- Code: MIT (`LICENSE`). Data: CC BY-NC 4.0 (`LICENSE-DATA`), free for individual and
  educational use credited as "Data from Magami NTD (ntd.magamios.org)".
- Citation metadata: `CITATION.cff`.
- Machine access: `/api/v1/index.json` (JSON API), `/llms.txt` and `/llms-full.txt`
  (language-model context files), `/sitemap.xml`, `/robots.txt`.
- Every page carries schema.org JSON-LD and OpenGraph metadata.

## Contributing

See `CONTRIBUTING.md`. The most valuable contribution is a correction from someone who
works on one of these diseases. CI (`.github/workflows/ci.yml`) runs `validate`,
`typecheck`, `lint`, `test` and `build` on every push, and reports source-link health.

## Data sources

Primary sources are linked per record and include the WHO NTD programme and fact sheets, the WHO
Model List of Essential Medicines, DNDi, FIND, CDC, and the peer-reviewed literature. Where a
figure is an estimate, the record says so.
