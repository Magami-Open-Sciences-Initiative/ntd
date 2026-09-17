"use client";

import { useState } from "react";
import { correctionMailtoUrl, issueUrl, mailtoUrl, pageUrl, verificationStatement } from "@/lib/contribute";
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
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  const url = pageUrl(kind, id);
  const status = verification ?? "unverified";
  const record = { kind, id, name, url, status };

  const statement = verificationStatement(record);
  const mailHref = mailtoUrl(record);
  const correctMailHref = correctionMailtoUrl(record);

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
    let ok = false;
    // Modern API — only available in a secure context (https or localhost).
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(statement);
        ok = true;
      }
    } catch {
      ok = false;
    }
    // Fallback for insecure contexts (e.g. opening the static build from disk).
    if (!ok) {
      try {
        const ta = document.createElement("textarea");
        ta.value = statement;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "0";
        ta.style.left = "0";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ta.setSelectionRange(0, statement.length);
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setState(ok ? "ok" : "fail");
    if (ok) setTimeout(() => setState("idle"), 2500);
  }

  return (
    <section id="contribute" className="mt-12 scroll-mt-24 rounded-lg border border-line bg-surface p-5">
      <h2 className="font-display text-lg text-ink">Verify or correct this page</h2>
      <p className="mt-1 max-w-3xl text-sm leading-relaxed text-ink-2">
        You do not need to write code. If you work on {name}, your judgement is worth more than our
        effort — tell us whether this page is accurate and, if not, what is wrong. A maintainer turns
        your review into a one-line entry in the corpus and credits you by name.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <a
          href={mailHref}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-alt px-3 py-1.5 text-sm text-ink transition-colors hover:border-rule"
        >
          Email a verification to {SITE.contactEmail}
        </a>
        <a
          href={verifyHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          Verify via a form
        </a>
        <a
          href={correctMailHref}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          Email a correction
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
        >
          {state === "ok" ? "Copied — paste it anywhere" : "Copy a verification note"}
        </button>
        <a
          href={correctHref}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-sm text-ink-2 hover:text-ink"
        >
          Correction form →
        </a>
        <a href={SITE.contribute} className="link-underline text-sm text-ink-2 hover:text-ink">
          How contributing works →
        </a>
      </div>

      {state === "fail" ? (
        <div className="mt-4">
          <p className="text-xs leading-relaxed text-ink-3">
            Your browser blocked the clipboard. Select the text below and copy it, or use the
            &ldquo;Email a verification&rdquo; button above.
          </p>
          <textarea
            readOnly
            value={statement}
            rows={14}
            onFocus={(e) => e.currentTarget.select()}
            className="mt-2 w-full rounded-lg border border-line bg-bg p-3 font-mono text-xs text-ink-2"
          />
        </div>
      ) : (
        <p className="mt-3 text-xs leading-relaxed text-ink-3">
          &ldquo;Email a verification&rdquo; opens your mail app with the note already written and
          addressed to {SITE.contactEmail} — no account needed. The form route uses a free GitHub
          account. Nothing is marked &ldquo;expert verified&rdquo; until a named person has signed it
          off.
        </p>
      )}
    </section>
  );
}
