import type { Metadata } from "next";
import { Fraunces, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { JsonLd, siteJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — an open map of neglected tropical diseases`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — an open map of neglected tropical diseases`,
    description: SITE.tagline,
    url: SITE.url,
    locale: "en",
  },
  twitter: {
    card: "summary",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

const themeInit = `try{var t=localStorage.getItem('magami-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${fraunces.variable} ${sora.variable} ${jbmono.variable} flex min-h-screen flex-col`}
      >
        <JsonLd data={siteJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
