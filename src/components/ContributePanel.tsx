"use client";

import { useState } from "react";
import { issueUrl, pageUrl, verificationStatement } from "@/lib/contribute";
import { SITE } from "@/lib/nav";

export function ContributePanel({
  kind,
  id,
  name,
  verification,
}: {
  kind: string;
  id: string;
  name: string;
  verification?: string;
}) {
  const [copied, setCopied] = useState(false);
  const url = pageUrl(kind, id);
  const status = verification ?? "unverified";

  const verifyHref = issueUrl("expert-verification.yml", {
    title: `[Verify] ${name} (${kind}/${id})`,
    record: id,
    kind,
    page_url: url,
    current_status: status,
  });
  const correctHref = issueUrl("correction.yml", {
    title: `[Correction] ${name} (${kind}/${id})`,
    record: id,
    kind,
    page_url: url,
  });

  async function copy() {
    try {
      await navigator.clipboard.writeText(
        verificationStatement({ kind, id, name, url, status }),
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contribute" className="mt-12 scroll-mt-24 rounded-lg border border-line bg-surface p-5">
      <h2 className="font-display text-lg text-ink">Verify or correct this page</h2>
      <p className="mt-1 max-w-3xl text-sm leading-relaxed text-ink-2">
        You do not need to write code. If you work on {name}, your judgement is worth more than our
        effort — tell us whether this page is accurate and, if not, what is wrong. A maintainer
        turns your review into a one-line entry in the corpus and credits you by name.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <a
          href={verifyHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-alt px-3 py-1.5 text-sm text-ink transition-colors hover:border-rule"
        >
          Verify this page
        </a>
        <a
          href={correctHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          Report a correction
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          {copied ? "Copied — paste it anywhere" : "Copy a verification note"}
        </button>
        <a href={SITE.contribute} className="link-underline text-sm text-ink-2 hover:text-ink">
          How contributing works →
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-3">
        Opening a verification form needs a free GitHub account; if you would rather not create one,
        copy the verification note and send it to the editors however you prefer. Nothing is marked
        &ldquo;expert verified&rdquo; until a named person has signed it off.
      </p>
    </section>
  );
}
