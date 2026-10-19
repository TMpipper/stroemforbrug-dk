// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import { IOS_LIVE, smartBannerContent } from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";

/**
 * Safaris smart-banner (»Hent« øverst i iPhone-browseren). React hejser <meta> op i <head>, så
 * banneret følger siderne, der viser appens stribe — aldrig pengesiderne, hvor intet må stå over
 * sammenligningen (ejerens beslutning 19. okt. 2026). Striben renderer det selv; brug kun denne
 * direkte på en side uden stribe.
 */
export default function AppSmartBanner() {
  if (!IOS_LIVE) return null;
  return <meta name="apple-itunes-app" content={smartBannerContent(APP_PROMO_SITE.key)} />;
}
