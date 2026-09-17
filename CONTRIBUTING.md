# Contributing to Magami NTD

The most valuable contribution is a correction. If you work on one of these
diseases, your fix is worth more than our effort.

## What you can do

- **Fix a fact** — a number, a date, a drug, a mechanism.
- **Add a source** — most records currently rest on a single citation, and more
  are welcome.
- **Deepen a record** — add prose sections to a drug, institution or country.
- **Propose an idea or a bottleneck** — the kind of thing that is missing from
  the field rather than from the page.
- **Translate** — the site is English-only today, which is a weakness for a
  project aimed at researchers in endemic countries.

## How to add or fix a record

1. Find the kind's file under `src/data/`, or the deep-dive file under
   `src/data/spikes/` if you are extending a disease. The corpus is also added to
   by `src/data/additions.ts`; the graph pools records per kind, so you can add a
   record wherever it fits best.
2. Every record needs an `id`, `name`, `tldr` (plain English, one or two
   sentences), `summary`, `asOf` (`YYYY-MM`) and at least one `links` entry.
3. Reference other objects **by id** in the relational fields (`diseases`,
   `drugs`, `targets`, `technologies`, `trials`, `terms`, `countries`, and so
   on). Link in one direction only — backlinks are derived.
4. Run the checks:

   ```bash
   npm run validate      # ids, references, placeholder sources
   npm run typecheck
   npm run lint
   npm test
   npm run build
   ```

`npm run validate` rejects duplicate ids, dangling references, malformed records
and placeholder sources, and prints the counts per kind plus how many records
rest on a single source.

## Sourcing rules

- **One primary source minimum, and it must be a specific document** — an
  article, a guideline, a fact sheet, a press release. A link to a database
  homepage is rejected by `validate`.
- **Say when something is an estimate.** Write "estimated" or give a range
  rather than inventing precision.
- **Say when something failed.** Negative results belong in the corpus.
- **Date it honestly.** `asOf` should be the month you actually checked the
  record.

## Style

- Plain English first, technical layer second.
- Don't add comments to code unless they explain something non-obvious.
- Match the surrounding records' voice: specific, unhyped, and willing to say
  what is unknown.

## Adding a whole new kind

Add a schema in `src/lib/schema.ts` (plus a `KIND_META` and `KIND_FIELDS` entry
and a field in `RefFields`), a colour in `src/lib/text.ts`, a data file spread
into `ALL_INPUTS` in `src/data/index.ts`, a group field in
`src/app/[kind]/page.tsx`, and a nav entry in `src/lib/nav.ts`.

## Licence

By contributing you agree that code is licensed under MIT and data under
CC BY-NC 4.0. See `LICENSE` and `LICENSE-DATA`.
