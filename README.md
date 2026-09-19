# Magami NTD

An open, cited map of **neglected tropical diseases** — one page for every disease, pathogen,
vector, treatment, diagnostic, target, technology, trial, institution, country, person, roadmap,
guideline, bottleneck, resistance finding and idea, with a plain-English TL;DR on every page.

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
npm run equity       # economics × equity analysis (see below)
npm run build        # validate → JSON API → llms.txt/llms-full.txt → static export into out/
```

Fetch scripts rebuild generated data (they need network); none runs as part of `build`.

```bash
npm run fetch:structures  # PubChem structures for the drug records → src/data/structures.ts
npm run fetch:targets     # UniProt/PDB/AlphaFold data for the target records → src/data/target-sequences.ts
npm run verify:target     # resolve a target to its UniProt accession via the PDB (see below)

# Price lists: parse UNICEF's official price PDFs into drug price patches
python3 scripts/scrape-unicef-prices.py --price-data \
    --emit-ts src/data/access-prices.generated.ts
```

`scripts/scrape-unicef-prices.py` also scrapes the UNICEF Supply Hub catalogue directly
(BeautifulSoup parse layer + a Playwright fetch layer, since the catalogue sits behind a
Cloudflare challenge) and can batch-parse a directory of price PDFs (`--pdf-dir`) or emit the
per-drug `pricing` patches the corpus merges (`--emit-ts`). `npm run equity` runs the
economics × equity analysis over the built corpus.

`npm run build` also emits `sitemap.xml` and `robots.txt` (from `src/app/sitemap.ts`
and `src/app/robots.ts`), the static JSON API under `/api/v1/`, and the
language-model context files `llms.txt` and `llms-full.txt`.

**Before deploying, set `SITE.url` in `src/lib/nav.ts` to the real origin** — it is
used for canonical URLs, OpenGraph, JSON-LD and the sitemap.

## Layout

```
src/data/                      The corpus — one file per kind, all spread into ALL_INPUTS in index.ts
src/data/access-2026.ts        Cost/access patch: drug pricing, donation & IP status
src/data/access-prices.generated.ts  Generated drug price patches from the UNICEF scraper
src/data/implementation-economics.ts Country equity flags, intervention costs & equity, analysis idea
src/lib/schema.ts              Zod schema per kind, KIND_META (labels/routes/blurbs), KIND_FIELDS (page layout)
src/lib/graph.ts               Builds the graph: validates ids, resolves references, derives backlinks, search
src/lib/nav.ts                 Site metadata and navigation groups
src/app/                       Routes: /, /[kind], /[kind]/[id], /about, /search, /cite, /status, /contribute, /fr
src/components/                EntityBrowser (index tables), EntityDetail (every object page), UI primitives
scripts/validate.ts            Corpus check (fails the build on any error)
scripts/build-api.ts           Emits the static JSON API to public/api/v1/
scripts/equity-analysis.ts     Economics × equity analysis over the corpus
scripts/scrape-unicef-prices.py Price-list scraper/parser (UNICEF catalogue + official PDFs)
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

**27 diseases** — the WHO NTD list (dengue and chikungunya are given separate pages, so the 21 WHO
entries become 22 pages), plus five adjacent diseases included for context — 28 pathogens, 9 vectors,
67 treatments, 48 diagnostics, 56 targets, 52 technologies, 105 trials, 100 institutions, 28 countries,
210 people, 7 roadmaps, 33 guidelines, 17 bottlenecks, 17 resistance findings, 96 ideas and 48 glossary
terms: **948 objects**, all interlinked. Counts are computed at build time.

**Sourcing:** 557 of 948 records cite more than one primary source; 391 rest on a single one.
Those are mostly biographies, where one authoritative page is the honest answer — padding them
with a generic second link would improve the number and not the sourcing. `npm run validate`
reports the split, rejects placeholder sources (a link to a database homepage is not a citation)
and checks that every `asOf` date is real and not in the future;
`npm run check:links` verifies that every primary source URL still resolves.

### Figures are data, not decoration

A `stat` is not a string in a tile: each carries optional `number`, `unit`, `year`,
`geography` and its own `source`, so figures are filterable and comparable across pages and
through the JSON API — every case count in 2023, every figure in mg/L, every estimate for the
WHO African Region — and each can be checked without trusting the rest of the page. `npm run
validate` enforces it: a numeric figure must state its unit, a year must be plausible, and a
per-figure citation must be a real document. The Buruli ulcer page is the worked example
(cases by year and region from WHO AFRO's 2025 review, laboratory-confirmation and category-III
rates from WHO's 2025 routine-data guidance, the telacebec MIC from the 2025 repurposing study,
and the possum-faeces lead time from *Emerging Infectious Diseases* 2025).

### Trials cite their register

Every trial carries a `registry` field and a direct link back to its registration record — the
ClinicalTrials.gov study page, the PACTR record, or, where a registry blocks automated retrieval
(ChiCTR), the registration number and the peer-reviewed report of the trial. The trial list was
reconciled against ClinicalTrials.gov, the Pan African Clinical Trials Registry and ChiCTR, so a
reader can check a trial's status, phase, enrolment and results at the source rather than trusting
the summary. Registry cross-checking also surfaced trials that were absent from the list — the
moxidectin mass-administration trial, the acoziborole transmission-interruption study, the TAKeOFF
test-and-treat trial for lymphatic filariasis, the Tokomeza Sudan ebolavirus ring trial, and the
Sm14 schistosomiasis vaccine trial, among others.

### Diagnostics: what actually exists

A diagnostic record used to describe a method; it now also carries the dimensions that decide
whether the method is usable where the disease is — its **technology, use case, test format,
setting (lab or point of care), instrument requirement, automation, operator, validated sample
types, stage of development and regulatory status**, plus a short list of **named products** with
their manufacturer. Those dimensions come from the [FIND Test Directory](https://finddx.org)
(fetched from its explorer), which is the field's catalogue of what is actually manufactured and
approved, and each diagnostic cites it. The pass also added the diagnostics the catalogue showed
were missing: rapid HAT screening tests, the Ov16 onchocerciasis antibody test, multiplex fever
panels, M. ulcerans LAMP, chikungunya serology, dengue molecular tests and fungal biomarkers for
mycetoma. Product lists are illustrative, not exhaustive, and a listing is not an endorsement or a
statement of WHO prequalification.

Each product row also carries a **product website** and, where the source records it,
**regulatory approvals** — CE (IVDD), US FDA 510(k) or EUA, WHO EUL, or a national authority such
as Brazil's ANVISA or Korea's MFDS — shown as chips beside the manufacturer. That distinction
matters: a test can be manufactured and still not be cleared for use where the disease is, and the
approval chip is the difference between "exists" and "usable here".

### Expert verification, and contributing without code

Every page carries a verification control with three states — **expert verified**, **in review**,
**not yet verified** (the default) — and a **Verify or correct this page** panel. Status is data in
`src/data/verification.ts`, one line per record, so it is auditable in a single diff; `validate`
rejects a record marked `verified` that names no reviewer or date, and no page can mark itself
verified. Clinicians and researchers who do not write code contribute by **emailing a verification
note to hello@magamios.org** (the per-page button opens their mail app pre-filled, no account
needed), through **GitHub Issue Forms** (the same buttons pre-fill the record id, page URL and
status), or by copying the note to paste wherever they prefer. The
maintainers transcribe a review into the corpus and credit the reviewer by name. `/contribute/`
explains it for a non-technical reader, and `CONTRIBUTING.md` for a developer.

### Geographic cross-referencing

Every pathogen and every vector carries a **Where it occurs** paragraph and a
**Countries where it is prevalent** list, so a pathogen or vector page names the countries in this
corpus where it circulates and each country page lists the pathogens and vectors found there.
Countries are also shown on diseases, people, bottlenecks and ideas. The lists cover the 28
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

### Cost and access on treatments

Every treatment carries cost and access as structured, filterable data rather than prose:

- **Price & procurement** — unit prices from public catalogues: the UNICEF Supply Catalogue,
  the MSH International Medical Products Price Guide, Brazil's CMED/ANVISA regulated price list,
  India's NPPA ceiling prices, China's national centralized procurement (集采) winning bids, and
  Stop TB's Global Drug Facility figures. Each row names the catalogue, unit, year and a source
  link, and the kind of price is stated — a no-profit public-sector price (Gilead's AmBisome at
  US$18 per vial), a national regulated ceiling (India, Brazil), or a pooled procurement price.
  They are deliberately not presented as if they were comparable.
- **Donation & access** — the donation programme and the endemic-country landscape (Mectizan,
  GSK's albendazole, Pfizer's azithromycin, Novartis's leprosy MDT, the GDF price reductions).
- **IP status** — off-patent versus licensed or patented, and where access is governed by a
  donation or a licence rather than by generic competition.

Prices arrive two ways: `scripts/scrape-unicef-prices.py` parses UNICEF's official price-list
PDFs (and can scrape the Supply Hub catalogue itself through a browser session), while the
national lists (CMED, NPPA, 集采, GDF) are extracted and written to `src/data/access-2026.ts`.
30 of the 67 treatments currently carry at least one catalogue price, and all 67 carry donation
and IP status; figures are only added where a source exists.

### Resistance as a first-class object

Resistance is its own kind rather than a paragraph on another page. A resistance record states
the category (antimalarial, insecticide, anthelmintic, antifungal, antibiotic or antiviral), how
widely it has emerged (documented, suspected, widespread, laboratory), what selects for it, how it
works, where it has been detected, how it is monitored and what it threatens — and links to the
drugs, vectors, pathogens, diseases, countries and institutions it involves. Because the graph
derives backlinks, a drug page and a vector page both surface the resistance that affects them,
and the reciprocal links are validated.

### Targets: sequence, PDB and AlphaFold

A target is a protein, so where it is a single protein its page carries the **amino-acid
sequence** (UniProt), the **experimental structures** deposited for it (PDB), and the
**AlphaFold predicted model** with its confidence. `npm run fetch:targets` rebuilds this layer.

Three decisions are worth knowing:

- **Only exact pathogen or vector proteins are attached — no model-organism stand-ins.** Where a
  target is a complex (the ribosome, the proteasome), a process (haem detoxification), a lipid
  (ergosterol), a mixture (snake venom), an organism (*Wolbachia*), or simply has no usable
  standalone entry (the dengue proteins, which UniProt annotates as one polyprotein), the page
  says why instead of borrowing a substitute. 24 of the 56 targets carry a sequence; 28 state why
  they do not, and a few are still to be curated.
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

### Implementation economics

Interventions carry a `costs` list: each entry names the intervention, the cost, **what it is per**
(per person treated, per case averted, per patient, per person-year protected) and a citable source,
so cost per denominator can be compared across interventions and countries rather than only
described. Current entries come from cost studies and render on diseases, treatments, diagnostics,
technologies and guidelines: community-based MDA for schistosomiasis at **US$0.70–1.20 per person
treated** (Uganda), trachoma MDA at **US$0.41** (Amhara, Ethiopia), routine lymphatic filariasis MDA
at **US$0.83**, and visceral leishmaniasis treatment at **US$104.7 per patient** (Ethiopia; US$331
second-line, US$214 household cost). Figures are added only where a source exists.

### Economics × equity

Countries and interventions carry explicit, machine-queryable **equity flags**. On countries they
are deficits — `coverageGap`, `conflictAffected`, `genderInequality`, `disabilityGap`; on
interventions they are mitigations — `genderResponsive`, `disabilityInclusive`, `conflictAdapted`.
All 27 countries and a growing set of interventions and diagnostics carry flags with a short
evidence note (the flags are conservative judgments, not measurements).

`npm run equity` joins countries → the diseases they carry → the interventions those diseases use,
and answers questions the prose could only hint at:

```bash
npm run equity                        # where a coverage gap and a security constraint coincide
npm run equity -- --query gender      # genderInequality ∧ coverageGap
npm run equity -- --query disability
npm run equity -- --country dr-congo
npm run equity -- --json
```

It reports the countries flagged both `coverageGap` and the chosen constraint, marks each disease's
interventions as adapted or not, and lists the **unadapted country–disease pairs** — the operational
gaps where the standard delivery model assumes an access that does not exist. The default query
returns nine countries (Cameroon, Chad, DR Congo, Ethiopia, Mali, Nigeria, South Sudan, Sudan,
Yemen) and pairs such as `Yemen → Leishmaniasis`, `DR Congo → HAT` and `Sudan → Mycetoma`.

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
fields are unioned, and every other field is an override. Most diseases have a deep dive (23 spike
files), and every treatment carries prose sections rather than being a stub.

Records added by later reviews live in `src/data/additions.ts`, `src/data/additions-emerging.ts`
and the per-disease `src/data/*-2026.ts` files; the graph pools records from several files into one
kind, so nothing in the base files needs editing. The same per-record patch mechanism carries the
drug access data (`access-2026.ts`, `access-prices.generated.ts`) and the economics × equity layer
(`implementation-economics.ts`).

## Kinds

| Kind | Holds |
|---|---|
| Diseases, Pathogens, Vectors | The diseases, the organisms that cause them, and the insects, bugs and snails that carry them |
| Treatments, Diagnostics, Targets | Drugs, tests, and the molecules in a parasite a drug can switch off |
| Technologies, Trials | Vector control, vaccines, AI, diagnostic and drug-discovery methods; and the studies behind them |
| Institutions, Countries, People | Who does the work, where the burden and elimination progress sit, and the people the corpus records — including African programme leaders and researchers |
| Roadmaps, Guidelines | History-to-horizon for each technology family, and the recommendations that set what programmes do |
| Resistance | Drug, insecticide and pesticide resistance as its own object — what is resisted, how it works, where it has been found, and who is watching for it |
| Bottlenecks, Ideas, Terms | What is stuck — including conflict, drug resistance, cost, gender, mental health and workforce — the fixes proposed, and plain-English definitions |

## Licence, citation and machine access

- Code: AGPL-3.0-only (`LICENSE`). Data: CC BY-SA 4.0 (`LICENSE-DATA`) — free to reuse,
  including commercially, with attribution and share-alike, so derivatives stay open.
  Credit it as "Data from Magami NTD (ntd.magamios.org)".
- Citation metadata: `CITATION.cff`.
- Machine access: `/api/v1/index.json` (JSON API), `/llms.txt` and `/llms-full.txt`
  (language-model context files), `/sitemap.xml`, `/robots.txt`.
- Every page carries schema.org JSON-LD and OpenGraph metadata.

## Contributing

See `CONTRIBUTING.md`. The most valuable contribution is a correction from someone who
works on one of these diseases. CI (`.github/workflows/ci.yml`) runs `validate`,
`typecheck`, `lint`, `test` and `build` on every push, and reports source-link health.

## Deploying to GitHub Pages

The site is a fully static export (`next.config.ts` sets `output: "export"`), so it deploys to
GitHub Pages with no server. `.github/workflows/deploy-pages.yml` builds `out/` and publishes it
with GitHub's Pages Actions pipeline on every push to `main` (or manually via
**Actions → Deploy to GitHub Pages → Run workflow**). Nothing is committed to a branch.

**One-time setup, in the repository:**

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. **Settings → Pages → Custom domain:** `ntd.magamios.org`, then tick **Enforce HTTPS** once the
   certificate is provisioned (minutes to a day).

**DNS, at whoever hosts `magamios.org`:** add a record

```
CNAME   ntd   magami-open-sciences-initiative.github.io.
```

**It works at both URLs automatically.** The workflow runs `actions/configure-pages` before the
build and passes its outputs in as environment variables, so the export adapts to wherever GitHub
serves it:

| Where the site is served | `base_path` | Assets resolve as |
|---|---|---|
| Project URL `https://<org>.github.io/ntd/` | `/ntd` | `/ntd/_next/…`, `/ntd/diseases/…` |
| Custom domain `https://ntd.magamios.org/` | *(empty)* | `/_next/…`, `/diseases/…` |

`next.config.ts` sets `basePath`/`assetPrefix` from `NEXT_PUBLIC_BASE_PATH`, and `SITE.url` (used
for canonical URLs, OpenGraph, JSON-LD, the sitemap and the contribution links) comes from
`NEXT_PUBLIC_SITE_URL`, defaulting to `https://ntd.magamios.org`. A plain `npm run build` with no
environment variables produces the root/custom-domain build.

Until the DNS record and the custom domain are set, the site is served at the project URL and the
build uses `basePath: "/ntd"`. **If you deploy and see unstyled, bare-text pages, the cause is
always this mismatch** — assets without the `/ntd` prefix 404 under the project URL — and re-running
the deploy (or adding the custom domain) fixes it.

A `.nojekyll` file is written into the artifact so the `_next/` directory is served. The workflow
writes a `CNAME` file only when a custom domain is actually configured, so a project-URL deployment
is never hijacked by an unverified domain.

CI (`.github/workflows/ci.yml`) still runs `validate`, `typecheck`, `lint`, `test` and the build on
every push and pull request, and reports source-link health; the deploy workflow only runs on
`main`.

## Data sources

Primary sources are linked per record and include the WHO NTD programme and fact sheets, the WHO
Model List of Essential Medicines, DNDi, FIND, CDC, and the peer-reviewed literature. Where a
figure is an estimate, the record says so.
