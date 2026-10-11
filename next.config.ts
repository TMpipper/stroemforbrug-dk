import type { NextConfig } from "next";

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
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
