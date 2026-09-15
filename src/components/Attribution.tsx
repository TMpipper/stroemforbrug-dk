"use client";
// ============================================
// Attribution — headless first-party ad/influencer attribution for every site. No UI.
//
// Verbatim copy of packages/ui/src/tracking/Attribution.tsx (mondo-media monorepo) — keep them identical.
//
// Owner decision 2026-09-15: no consent bar — attribution must work for every visitor.
//   • Landing with an ad/campaign id (gclid, gbraid, wbraid, fbclid, utm_*) writes `_att`
//     (90 days, last ad click wins); landing with an influencer code (?ref=) writes `tk_ref`
//     (30 days, last code wins) plus `tk_pl` (the placement from ?pl=, e.g. story/bio).
//   • Outbound /go/ and /gaa/ links get the current URL's ids appended at click time as well,
//     so even a same-page click is attributed without any cookie.
//   • Every /go/ or /gaa/ click opens in a new tab (target=_blank, rel=noopener) and fires the
//     Google Ads browser conversion when the tag is present.
//   • Optional visit beacon for direct ?ref= landings (tjekelregning: /api/ref/visit/).
// ============================================

import { useEffect } from "react";

// Ids, numeric Google ids and ValueTrack enum codes — strict charset.
const ID_KEYS = ["gclid", "gbraid", "wbraid", "fbclid",
  // appended by Google auto-tagging itself, no account configuration needed
  "gad_campaignid", "gad_source", "gclsrc",
  // ValueTrack from the account-level final URL suffix
  "tk_cid", "tk_aid", "tk_mt", "tk_dev", "tk_net", "tk_cr", "tk_tid",
  "utm_source", "utm_medium"] as const;
// Free text — the bid keyword and utm_term/content need spaces and æøå.
const TEXT_KEYS = ["tk_kw", "tk_plc", "utm_campaign", "utm_term", "utm_content"] as const;
const ATT_KEYS = [...ID_KEYS, ...TEXT_KEYS] as const;
const TEXT_KEY_SET: ReadonlySet<string> = new Set(TEXT_KEYS);
const SAFE_ID = /^[A-Za-z0-9_.-]{1,200}$/;
// Anchored allowlist, first char a letter or digit, hard 120-char cap. Safe to allow this much:
// the value only ever reaches URLSearchParams.set() here (which percent-encodes) and
// parameterised SQL server-side — never raw HTML, never raw SQL.
const SAFE_TEXT = /^[\p{L}\p{N}][\p{L}\p{N} ._+&%/()-]{0,119}$/u;
/** Per-key caps: this cookie rides every same-origin request, including RSC fetches. */
const TEXT_MAX: Record<string, number> = { tk_kw: 80, tk_plc: 60, utm_campaign: 120, utm_term: 80, utm_content: 60 };
const LP_MAX = 100;
/** Cookie values above this shed the free-text keys — losing the keyword beats losing the gclid. */
const ATT_ENCODED_MAX = 3000;

/** Validate + normalise one attribution value with the validator that matches its key class. */
function cleanValue(k: string, v: string | null | undefined): string | null {
  if (!v) return null;
  if (!TEXT_KEY_SET.has(k)) return SAFE_ID.test(v) ? v : null;
  const s = v.trim().replace(/\s+/g, " ").slice(0, TEXT_MAX[k] ?? 120);
  return s && SAFE_TEXT.test(s) ? s : null;
}
const REF_RE = /^[a-z0-9-]{3,32}$/;
const PL_RE = /^[a-z0-9-]{1,32}$/;
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
    const v = cleanValue(k, p.get(k));
    if (v) out[k] = v;
  }
  // tk_cid duplicates gad_campaignid on Search — drop it to keep the cookie small.
  if (out.gad_campaignid && out.tk_cid === out.gad_campaignid) delete out.tk_cid;
  return out;
}

function refFromUrl(): string | null {
  const v = (new URLSearchParams(location.search).get("ref") ?? "").toLowerCase();
  return REF_RE.test(v) ? v : null;
}

/** Influencer placement (story, bio, …) from ?pl= on landing, remembered with the code. */
function placementFromUrl(): string | null {
  const v = (new URLSearchParams(location.search).get("pl") ?? "").toLowerCase();
  return PL_RE.test(v) ? v : null;
}

function toB64Url(s: string): string {
  return btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function encodeAtt(data: Record<string, string | number | undefined>): string {
  const encoded = toB64Url(JSON.stringify(data));
  if (encoded.length <= ATT_ENCODED_MAX) return encoded;
  const slim = { ...data };
  for (const k of TEXT_KEYS) delete slim[k];
  return toB64Url(JSON.stringify(slim));
}

function decodeAtt(raw: string | null): Att {
  if (!raw) return {};
  try {
    const b64 = raw.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((raw.length + 3) % 4);
    const obj = JSON.parse(decodeURIComponent(escape(atob(b64)))) as Record<string, unknown>;
    const out: Att = {};
    for (const k of ATT_KEYS) {
      const v = cleanValue(k, typeof obj[k] === "string" ? (obj[k] as string) : null);
      if (v) out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

function storeAttribution(att: Att, ref: string | null, placement: string | null) {
  if (Object.keys(att).length) {
    // A new ad click replaces the old one (last click wins), but keep older keys that are absent now.
    const merged = { ...decodeAtt(readCookie("_att")), ...att, lp: location.pathname.slice(0, LP_MAX), ts: Math.floor(Date.now() / 1000) };
    writeCookie("_att", encodeAtt(merged), ATT_MAX_AGE);
  }
  if (ref) { writeCookie("tk_ref", ref, REF_MAX_AGE); writeCookie("tk_pl", placement ?? "", placement ? REF_MAX_AGE : 0); }
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
    const r = refFromUrl() ?? readCookie("tk_ref");
    if (r && REF_RE.test(r)) extra.ref = r;
    const pl = placementFromUrl() ?? readCookie("tk_pl");
    if (pl && PL_RE.test(pl)) extra.pl = pl;
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
    try { storeAttribution(att, ref, ref ? placementFromUrl() : null); } catch { /* cookies blocked */ }
    return installLinkPropagation();
  }, [visitEndpoint]);

  return null;
}
