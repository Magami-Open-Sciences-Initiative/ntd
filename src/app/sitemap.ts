import type { MetadataRoute } from "next";
import { allNodes, listKind } from "@/lib/graph";
import { KINDS } from "@/lib/schema";
import { SITE } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages = ["/", "/about/", "/search/", ...KINDS.map((k) => `/${k}/`)];
  const frPages = ["/fr/", "/fr/about/", "/fr/diseases/", ...listKind("diseases").map((d) => `/fr/diseases/${d.id}/`)];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...frPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...allNodes().map((n) => ({
      url: `${base}/${n.kind}/${n.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: n.kind === "diseases" ? 0.8 : 0.5,
    })),
  ];
}
