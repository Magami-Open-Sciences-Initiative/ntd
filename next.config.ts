import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site at https://<owner>.github.io/<repo>/ and a
 * custom domain at its root. The deployment workflow reads the base path from
 * `actions/configure-pages` and passes it in as NEXT_PUBLIC_BASE_PATH, so the
 * same build works in both places without a code change. Local `npm run dev`
 * and `npm run build` set nothing and stay at the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
