"use client";
// ============================================
// Attribution — headless first-party ad/influencer attribution for every site. No UI.
//
// Verbatim copy of packages/ui/src/tracking/Attribution.tsx (mondo-media monorepo) — keep them identical.
//
// Owner decision 2026-09-15: no consent bar — attribution must work for every visitor.
//   • Landing with an ad/campaign id (gclid, gbraid, wbraid, fbclid, utm_*) writes `_att`
//     (90 days, last ad click wins); landing with an influencer code (?ref=) writes `tk_ref`
//     (30 days, last code wins).
//   • Outbound /go/ and /gaa/ links get the current URL's ids appended at click time as well,
//     so even a same-page click is attributed without any cookie.
//   • Every /go/ or /gaa/ click opens in a new tab (target=_blank, rel=noopener) and fires the
//     Google Ads browser conversion when the tag is present.
//   • Optional visit beacon for direct ?ref= landings (tjekelregning: /api/ref/visit/).
// ============================================

import { useEffect } from "react";

const ATT_KEYS = ["gclid", "gbraid", "wbraid", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const SAFE = /^[A-Za-z0-9_.-]{1,200}$/;
const REF_RE = /^[a-z0-9-]{3,32}$/;
const ATT_MAX_AGE = 90 * 24 * 3600;
const REF_MAX_AGE = 30 * 24 * 3600;

type Att = Record<string, string>;

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&") + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name: string, value: string, maxAge: number) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

function attFromUrl(): Att {
  const p = new URLSearchParams(location.search);
  const out: Att = {};
  for (const k of ATT_KEYS) {
    const v = p.get(k);
    if (v && SAFE.test(v)) out[k] = v;
  }
  return out;
}

function refFromUrl(): string | null {
  const v = (new URLSearchParams(location.search).get("ref") ?? "").toLowerCase();
  return REF_RE.test(v) ? v : null;
}

function encodeAtt(data: Record<string, string | number | undefined>): string {
  return btoa(unescape(encodeURIComponent(JSON.stringify(data)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeAtt(raw: string | null): Att {
  if (!raw) return {};
  try {
    const b64 = raw.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((raw.length + 3) % 4);
    const obj = JSON.parse(decodeURIComponent(escape(atob(b64)))) as Record<string, unknown>;
    const out: Att = {};
    for (const k of ATT_KEYS) if (typeof obj[k] === "string" && SAFE.test(obj[k] as string)) out[k] = obj[k] as string;
    return out;
  } catch {
    return {};
  }
}

function storeAttribution(att: Att, ref: string | null) {
  if (Object.keys(att).length) {
    // A new ad click replaces the old one (last click wins), but keep older keys that are absent now.
    const merged = { ...decodeAtt(readCookie("_att")), ...att, lp: location.pathname, ts: Math.floor(Date.now() / 1000) };
    writeCookie("_att", encodeAtt(merged), ATT_MAX_AGE);
  }
  if (ref) writeCookie("tk_ref", ref, REF_MAX_AGE);
}

/** Append the current URL's attribution + ref to outbound /go/ and /gaa/ links at click time, and fire the Google Ads click conversion. */
function installLinkPropagation() {
  const handler = (ev: MouseEvent) => {
    const a = (ev.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!a) return;
    let href: URL;
    try { href = new URL(a.getAttribute("href") ?? "", location.href); } catch { return; }
    if (href.origin !== location.origin || !/^\/(go|gaa)\//.test(href.pathname)) return;
    const extra: Att = { ...attFromUrl() };
    const r = refFromUrl();
    if (r) extra.ref = r;
    let changed = false;
    for (const [k, v] of Object.entries(extra)) {
      if (!href.searchParams.has(k)) { href.searchParams.set(k, v); changed = true; }
    }
    if (!href.searchParams.has("lp")) { href.searchParams.set("lp", location.pathname); changed = true; }
    if (changed) a.setAttribute("href", href.pathname + href.search);
    // Affiliate links always open in a new tab (owner decision 2026-09-15) so the visitor keeps our site open.
    a.target = "_blank";
    if (!/\bnoopener\b/.test(a.rel)) a.rel = (a.rel + " noopener").trim(); // keep nofollow/sponsored
    // Google Ads browser conversion ("Klik til elselskab") – only when the tag is present
    try { (window as unknown as { __tkGadsClick?: () => void }).__tkGadsClick?.(); } catch { /* no tag */ }
  };
  document.addEventListener("click", handler, true);
  return () => document.removeEventListener("click", handler, true);
}

export default function Attribution({ visitEndpoint }: { /** POST target that logs a partner-code landing (tjekelregning: "/api/ref/visit/"). */ visitEndpoint?: string }) {
  useEffect(() => {
    const att = attFromUrl();
    const ref = refFromUrl();
    if (ref && visitEndpoint && !sessionStorage.getItem("tk_visit_" + ref)) {
      try {
        sessionStorage.setItem("tk_visit_" + ref, "1");
        const body = JSON.stringify({ code: ref, path: location.pathname, referer: document.referrer || null });
        if (!navigator.sendBeacon?.(visitEndpoint, new Blob([body], { type: "application/json" }))) fetch(visitEndpoint, { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => undefined);
      } catch { /* storage blocked */ }
    }
    try { storeAttribution(att, ref); } catch { /* cookies blocked */ }
    return installLinkPropagation();
  }, [visitEndpoint]);

  return null;
}
