"use client";

import { useState } from "react";

export type VerificationState = {
  status: "verified" | "in-review" | "unverified";
  by?: string;
  date?: string;
  note?: string;
};

const STATES: { key: VerificationState["status"]; label: string; hint: string }[] = [
  {
    key: "verified",
    label: "Expert verified",
    hint: "A named subject-matter expert has reviewed this record and signed it off.",
  },
  {
    key: "in-review",
    label: "In review",
    hint: "Cross-checked against primary sources by the project, but not yet signed off by a named expert.",
  },
  {
    key: "unverified",
    label: "Not yet verified",
    hint: "Not yet checked against primary sources or reviewed by an expert.",
  },
];

const DOT: Record<VerificationState["status"], string> = {
  verified: "bg-[var(--accent)]",
  "in-review": "bg-[#f59e0b]",
  unverified: "bg-ink-3",
};

export function VerificationToggle({ verification }: { verification?: VerificationState }) {
  const status = verification?.status ?? "unverified";
  const [open, setOpen] = useState(false);
  const current = STATES.find((s) => s.key === status)!;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <div
        role="radiogroup"
        aria-label="Expert verification status"
        className="inline-flex overflow-hidden rounded-full border border-line bg-surface"
      >
        {STATES.map((s) => {
          const checked = s.key === status;
          return (
            <button
              key={s.key}
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => setOpen((o) => !o)}
              title={s.hint}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                checked
                  ? "bg-bg-alt text-ink"
                  : "text-ink-3 hover:text-ink-2"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${checked ? DOT[s.key] : "border border-ink-3"}`}
                aria-hidden
              />
              {s.label}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="font-mono text-[10px] uppercase tracking-wider text-ink-3 underline decoration-dotted underline-offset-2 hover:text-ink"
      >
        {open ? "hide" : "why"}
      </button>
      {open ? (
        <p className="basis-full text-xs leading-relaxed text-ink-3">
          <span className="text-ink-2">{current.label}.</span> {current.hint}
          {verification?.by ? <> Checked by {verification.by}</> : null}
          {verification?.date ? <> ({verification.date})</> : null}
          {verification?.note ? <>. {verification.note}</> : null}
          {" "}
          Status is set in the corpus data, never on this page.
        </p>
      ) : null}
    </div>
  );
}
