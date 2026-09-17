import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/nav";
import { issueUrl } from "@/lib/contribute";

export const metadata: Metadata = { title: "Contribute & verify" };

export default function ContributePage() {
  const verify = issueUrl("expert-verification.yml", { title: "[Verify] " });
  const correct = issueUrl("correction.yml", { title: "[Correction] " });

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl tracking-tight text-ink">Contribute &amp; verify</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-2">
        The most valuable contribution is a correction from someone who works on one of these
        diseases. You should not have to write code, use git, or understand how the site is built to
        give it. These routes take a few minutes and no technical knowledge.
      </p>

      <div className="prose-magami mt-8">
        <h2 className="font-display text-2xl text-ink">Verify a page</h2>
        <p>
          If you work on the disease, drug, diagnostic or trial on a page, you can vouch for it — or
          say what is wrong. Every page has a <strong>Verify this page</strong> button that opens a
          short form. Fill in your verdict, your expertise, any corrections, and the sources you rely
          on. A maintainer turns that into a one-line entry in the corpus, and the page&rsquo;s
          verification status changes. You are credited by name unless you ask not to be.
        </p>
        <p>
          <a className="link-underline" href={verify}>
            Open an expert-verification form →
          </a>
        </p>

        <h2 className="font-display text-2xl text-ink">Report a correction</h2>
        <p>
          A wrong number, a missing drug, an outdated statistic, a dead source. Quote the sentence
          and give the document that settles it — a specific paper or guidance beats a database
          homepage. You do not need to fix anything yourself.
        </p>
        <p>
          <a className="link-underline" href={correct}>
            Open a correction form →
          </a>
        </p>

        <h2 className="font-display text-2xl text-ink">No account? Copy a note</h2>
        <p>
          Every page has a <strong>Copy a verification note</strong> button. It copies a short,
          structured statement — the page, your verdict, your expertise, the corrections and the
          sources — that you can paste into an email, a document or a message to the editors, or send
          to us through{" "}
          <a className="link-underline" href={SITE.parentUrl}>
            {SITE.parent}
          </a>
          . The maintainers will transcribe it. The forms use a free GitHub account only because that
          is where the project&rsquo;s record lives; it is not otherwise required.
        </p>

        <h2 className="font-display text-2xl text-ink">What the verification status means</h2>
        <ul>
          <li>
            <strong>Not yet verified</strong> — the default, and the honest state for most of the
            corpus. It has not been checked against primary sources or reviewed by an expert.
          </li>
          <li>
            <strong>In review</strong> — the record has been cross-checked against primary sources
            (WHO, registries, the literature) by the project, but no named expert has signed it off.
          </li>
          <li>
            <strong>Expert verified</strong> — a named subject-matter expert has reviewed the page and
            signed it off. Only a named person can set this; a page is never marked verified by the
            person who wrote it, and never automatically.
          </li>
        </ul>
        <p>
          The status is data, not a button: it lives in a single file in the corpus so it is auditable
          in one diff. Nothing on a page can mark itself verified.
        </p>

        <h2 className="font-display text-2xl text-ink">If you do use git</h2>
        <p>
          The corpus is plain text files under <code>src/data/</code>. A verification is one line in{" "}
          <code>src/data/verification.ts</code>:
        </p>
        <pre className="overflow-x-auto rounded-lg border border-line bg-surface p-4 text-xs">
{`"buruli-ulcer": {
  status: "verified",
  by: "Dr A. Example, University of …",
  date: "2026-09",
  note: "reviewed epidemiology and treatment; corrected the case figure",
},`}
        </pre>
        <p>
          Then run <code>npm run validate</code>, which rejects a &ldquo;verified&rdquo; record with
          no named reviewer or date. The full contributor guide is in{" "}
          <a className="link-underline" href={`${SITE.repo}/blob/main/CONTRIBUTING.md`}>
            CONTRIBUTING.md
          </a>
          .
        </p>

        <h2 className="font-display text-2xl text-ink">Other ways to help</h2>
        <p>
          Add a source, deepen a record, propose an idea or a bottleneck, or translate. The site is
          English-only today, which is a weakness for a project aimed at researchers in endemic
          countries. See{" "}
          <Link href="/about/" className="link-underline">
            About &amp; methodology
          </Link>{" "}
          for how the corpus is built.
        </p>
      </div>
    </div>
  );
}
