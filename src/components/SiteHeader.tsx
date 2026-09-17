import Link from "next/link";
import { NAV, SITE, withBase } from "@/lib/nav";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitch } from "./LangSwitch";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Magami<span className="text-primary"> NTD</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((group) => (
            <details key={group.title} className="navgroup relative">
              <summary className="rounded-md px-3 py-1.5 text-sm text-ink-2 transition-colors hover:bg-bg-alt hover:text-ink">
                {group.title}
              </summary>
              <div className="absolute left-0 top-full z-50 mt-1 min-w-56 rounded-lg border border-line bg-surface p-1.5 shadow-lg">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-bg-alt hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Link
            href="/search/"
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-2 transition-colors hover:border-rule hover:text-ink"
          >
            ⌕ Search
          </Link>
          <ThemeToggle />
          <LangSwitch />
        </div>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-line px-4 py-2 lg:hidden">
        {NAV.flatMap((g) => g.items).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap font-mono text-xs text-ink-3 transition-colors hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule bg-bg-alt">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="max-w-3xl text-sm leading-relaxed text-ink-2">
          <strong className="font-semibold text-ink">{SITE.name}</strong> — {SITE.description}
        </p>
        <p className="mt-4 max-w-3xl rounded-lg border border-line bg-surface p-4 text-xs leading-relaxed text-ink-3">
          <strong className="font-semibold uppercase tracking-wider text-ink-2">Work in progress.</strong>{" "}
          Every fact here is being built and checked in the open and may be incomplete, out of date or
          wrong. Verify anything that matters at its primary source, which every page links. Nothing on
          this site is medical advice; decisions belong with you and your clinicians.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-3">
          <span>
            A project of{" "}
            <a className="link-underline" href={SITE.parentUrl}>
              {SITE.parent}
            </a>
          </span>
          <Link className="link-underline" href="/about/">
            About &amp; methodology
          </Link>
          <Link className="link-underline" href="/cite/">
            Cite this work
          </Link>
          <Link className="link-underline" href="/status/">
            Data currency
          </Link>
          <a className="link-underline" href={withBase("/api/v1/index.json")}>
            Open data API
          </a>
          <a className="link-underline" href={SITE.repo} target="_blank" rel="noreferrer">
            Source code
          </a>
          <span>
            Last corpus update {SITE.updated}
          </span>
        </div>
      </div>
    </footer>
  );
}
