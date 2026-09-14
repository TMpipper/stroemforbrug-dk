"use client";
// ============================================
// ConsentBar — first-party ad-attribution consent for every site.
//
// Canonical copy: packages/ui/src/consent/ConsentBar.tsx. The DB-less sites
// (elselskaber.dk, elselskab.dk, billigste-elselskab.nu) carry a verbatim copy
// in src/components/ConsentBar.tsx — keep them identical.
//
// Behaviour (cookie-free until the visitor says yes):
//   • Only visitors who land with an ad/campaign id (gclid, gbraid, wbraid,
//     fbclid, utm_*) or an influencer code (?ref=) see the bar.
//   • "OK" sets `_cc=1` (1 year) and `_att` (90 days, the ids from the URL);
//     "Nej tak" sets `_cc=0` so the bar stays away. Nothing else is stored.
//   • Before a decision, outbound /go/ and /gaa/ links get the ids appended at
//     click time (URL propagation, no storage), so a sale is still attributed
//     to the right site and click — just never uploaded to Google Ads.
//   • Influencer code: with consent, `tk_ref` (30 days, last touch wins).
// ============================================

import { useEffect, useState } from "react";

const ATT_KEYS = ["gclid", "gbraid", "wbraid", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const SAFE = /^[A-Za-z0-9_.-]{1,200}$/;
const REF_RE = /^[a-z0-9-]{3,32}$/;
const ATT_MAX_AGE = 90 * 24 * 3600;
const CC_MAX_AGE = 365 * 24 * 3600;
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

/** Append the current URL's attribution + ref to outbound /go/ and /gaa/ links at click time. */
function installLinkPropagation(getExtra: () => Att) {
  const handler = (ev: MouseEvent) => {
    const a = (ev.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!a) return;
    let href: URL;
    try { href = new URL(a.getAttribute("href") ?? "", location.href); } catch { return; }
    if (href.origin !== location.origin || !/^\/(go|gaa)\//.test(href.pathname)) return;
    const extra = getExtra();
    let changed = false;
    for (const [k, v] of Object.entries(extra)) {
      if (!href.searchParams.has(k)) { href.searchParams.set(k, v); changed = true; }
    }
    if (!href.searchParams.has("lp")) { href.searchParams.set("lp", location.pathname); changed = true; }
    if (changed) a.setAttribute("href", href.pathname + href.search);
    // Google Ads browser conversion ("Klik til elselskab") – only with consent, only when the tag is present
    try { if (readCookie("_cc") === "1") (window as unknown as { __tkGadsClick?: () => void }).__tkGadsClick?.(); } catch { /* no tag */ }
  };
  document.addEventListener("click", handler, true);
  return () => document.removeEventListener("click", handler, true);
}

export default function ConsentBar({ privacyHref = "/privatlivspolitik/", siteName, visitEndpoint }: { privacyHref?: string; siteName?: string; /** POST target that logs a partner-code landing (tjekelregning: "/api/ref/visit/"). */ visitEndpoint?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const att = attFromUrl();
    const ref = refFromUrl();
    const hasSignal = Object.keys(att).length > 0 || !!ref;
    const decision = readCookie("_cc");
    if (ref && visitEndpoint && !sessionStorage.getItem("tk_visit_" + ref)) {
      try {
        sessionStorage.setItem("tk_visit_" + ref, "1");
        const body = JSON.stringify({ code: ref, path: location.pathname, referer: document.referrer || null });
        if (!navigator.sendBeacon?.(visitEndpoint, new Blob([body], { type: "application/json" }))) fetch(visitEndpoint, { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => undefined);
      } catch { /* storage blocked */ }
    }
    if (hasSignal && decision === "1") storeAttribution(att, ref);
    else if (hasSignal && decision === null) setOpen(true);
    return installLinkPropagation(() => {
      const extra: Att = { ...attFromUrl() };
      const r = refFromUrl();
      if (r) extra.ref = r;
      extra.consent = readCookie("_cc") === "1" ? "1" : "0";
      return extra;
    });
  }, [visitEndpoint]);

  if (!open) return null;

  const accept = () => { writeCookie("_cc", "1", CC_MAX_AGE); storeAttribution(attFromUrl(), refFromUrl()); try { (window as unknown as { __tkConsent?: (g: boolean) => void }).__tkConsent?.(true); } catch { /* no tag */ } setOpen(false); };
  const decline = () => { writeCookie("_cc", "0", CC_MAX_AGE); setOpen(false); };

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie-valg" className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-lg sm:flex-row sm:items-center sm:gap-4">
        <p className="flex-1 leading-snug">
          Må vi sætte én cookie, der husker hvilken annonce eller anbefaling du kom fra? Den bruges kun til at måle, om
          {siteName ? ` ${siteName}s` : " vores"} annoncer virker – ingen profilering, ingen tredjeparter.{" "}
          <a href={privacyHref} className="underline underline-offset-2 hover:text-slate-900">Læs mere</a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={decline} className="rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700 hover:bg-slate-50">Nej tak</button>
          <button type="button" onClick={accept} className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">OK</button>
        </div>
      </div>
    </div>
  );
}
