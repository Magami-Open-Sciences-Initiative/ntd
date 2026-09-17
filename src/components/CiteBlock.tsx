"use client";

import { useState } from "react";

export type CitationFormats = {
  plain: string;
  apa: string;
  bibtex: string;
  ris: string;
  url: string;
  lastChecked: string;
};

const TABS: { key: keyof CitationFormats; label: string }[] = [
  { key: "plain", label: "Plain text" },
  { key: "apa", label: "APA" },
  { key: "bibtex", label: "BibTeX" },
  { key: "ris", label: "RIS" },
];

export function CiteBlock({ citation }: { citation: CitationFormats }) {
  const [tab, setTab] = useState<keyof CitationFormats>("plain");
  const [copied, setCopied] = useState(false);

  const text = String(citation[tab]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the text is selectable either way */
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex flex-wrap items-center gap-1 border-b border-line bg-bg-alt px-2 py-1.5">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            aria-pressed={tab === t.key}
            className={`rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
              tab === t.key ? "bg-surface text-ink" : "text-ink-3 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
        <button
          type="button"
          onClick={copy}
          className="ml-auto rounded-md border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-2 transition-colors hover:border-rule hover:text-ink"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-xs leading-relaxed text-ink-2 whitespace-pre-wrap">
        {text}
      </pre>
    </div>
  );
}
