import type { NextConfig } from "next";
import routes from "./content/routes.json";

/**
 * Sikkerhedsheadere som på Elpriser.dk. `frame-src` tillader Elpriser.dk's elpris-widget (iframe) —
 * den eneste fremmede ramme på sitet; `frame-ancestors 'self'` holder sitet selv ude af andres rammer.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'; frame-src https://elpriser.dk" },
  { key: "Content-Signal", value: "ai-train=no, search=yes, ai-input=yes" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  // CI-løberen (4 CPU, 16 GB → 3 workers) døde midt i den statiske generering ved 303 sider (23.–24. nov. 2026):
  // med standardens 8 samtidige sider pr. worker toppede én worker på 3,1 GB i UTC; med 2 er toppen 1,8 GB (+13 s).
  // 26. nov.: på CI fylder hver worker ~5–6 GB (lokalt ≤ 1,7 GB) — 3 workers sprængte 16 GB og ét bygge hang i swap.
  // 2 workers på CI holder toppen under RAM; lokalt bestemmer Next selv.
  experimental: { staticGenerationMaxConcurrency: 2, ...(process.env.CI ? { cpus: 2 } : {}) },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Sammenlagte dubletter (22. nov. 2026), fra content/routes.json.
  async redirects() {
    return Object.entries(routes.redirects as Record<string, string>).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
