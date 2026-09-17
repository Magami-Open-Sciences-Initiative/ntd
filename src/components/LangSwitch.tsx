"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LangSwitch() {
  const pathname = usePathname() ?? "/";
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");

  let href: string;
  let label: string;

  if (isFr) {
    href = pathname.replace(/^\/fr/, "") || "/";
    label = "EN";
  } else {
    // French exists for the home page, the about page and the disease pages.
    href = pathname.startsWith("/diseases") ? `/fr${pathname}` : "/fr/";
    label = "FR";
  }

  return (
    <Link
      href={href}
      hrefLang={isFr ? "en" : "fr"}
      aria-label={isFr ? "Switch to English" : "Passer au français"}
      className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-ink-2 transition-colors hover:border-rule hover:text-ink"
    >
      {label}
    </Link>
  );
}
