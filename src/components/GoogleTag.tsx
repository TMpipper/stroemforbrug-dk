"use client";
// ============================================
// GoogleTag — Google Ads tag (gtag.js) with Consent Mode v2 signals set to GRANTED (owner decision
// 2026-09-15: no consent bar). Verbatim copy of packages/ui/src/tracking/GoogleTag.tsx (mondo-media monorepo). Renders nothing unless NEXT_PUBLIC_GADS_ID (AW-…)
// is set. Attribution.tsx calls window.__tkGadsClick() on /go and /gaa clicks, which fires the
// "Klik til elselskab" conversion (NEXT_PUBLIC_GADS_CLICK_LABEL, value NEXT_PUBLIC_GADS_CLICK_VALUE).
// ============================================
import Script from "next/script";

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; __tkGadsClick?: () => void } }

export default function GoogleTag({ id, clickLabel, clickValue }: { id?: string; clickLabel?: string; clickValue?: number }) {
  const tagId = id ?? process.env.NEXT_PUBLIC_GADS_ID;
  if (!tagId) return null;
  const label = clickLabel ?? process.env.NEXT_PUBLIC_GADS_CLICK_LABEL ?? "";
  const value = clickValue ?? Number(process.env.NEXT_PUBLIC_GADS_CLICK_VALUE ?? 0);
  const inline = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'denied'});
gtag('js', new Date());
gtag('config', '${tagId}', {allow_enhanced_conversions:false});
window.__tkGadsClick = function(){ ${label ? `gtag('event','conversion',{send_to:'${tagId}/${label}',value:${Number.isFinite(value) ? value : 0},currency:'DKK'});` : ""} };
`;
  return (
    <>
      <Script id="tk-gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
    </>
  );
}
