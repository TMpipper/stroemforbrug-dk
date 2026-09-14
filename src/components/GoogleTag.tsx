"use client";
// ============================================
// GoogleTag — Google Ads tag with Consent Mode v2, defaults DENIED. Canonical copy in
// packages/ui/src/consent/GoogleTag.tsx; verbatim copies in the DB-less sites (src/components/).
// Renders nothing unless NEXT_PUBLIC_GADS_ID (AW-…) is set. ConsentBar calls
// window.__tkConsent(true) on "OK", and the click propagation fires the "Klik til elselskab"
// conversion (NEXT_PUBLIC_GADS_CLICK_LABEL, value NEXT_PUBLIC_GADS_CLICK_VALUE) on /go and /gaa clicks.
// ============================================
import Script from "next/script";

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; __tkConsent?: (granted: boolean) => void; __tkGadsClick?: () => void } }

export default function GoogleTag({ id, clickLabel, clickValue }: { id?: string; clickLabel?: string; clickValue?: number }) {
  const tagId = id ?? process.env.NEXT_PUBLIC_GADS_ID;
  if (!tagId) return null;
  const label = clickLabel ?? process.env.NEXT_PUBLIC_GADS_CLICK_LABEL ?? "";
  const value = clickValue ?? Number(process.env.NEXT_PUBLIC_GADS_CLICK_VALUE ?? 0);
  const inline = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var granted = /(?:^|; )_cc=1(?:;|$)/.test(document.cookie);
gtag('consent','default',{ad_storage:granted?'granted':'denied',ad_user_data:granted?'granted':'denied',ad_personalization:granted?'granted':'denied',analytics_storage:'denied',wait_for_update:500});
gtag('js', new Date());
gtag('config', '${tagId}', {allow_enhanced_conversions:false});
window.__tkConsent = function(g){ gtag('consent','update',{ad_storage:g?'granted':'denied',ad_user_data:g?'granted':'denied',ad_personalization:g?'granted':'denied'}); };
window.__tkGadsClick = function(){ ${label ? `gtag('event','conversion',{send_to:'${tagId}/${label}',value:${Number.isFinite(value) ? value : 0},currency:'DKK'});` : ""} };
`;
  return (
    <>
      <Script id="tk-gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
    </>
  );
}
