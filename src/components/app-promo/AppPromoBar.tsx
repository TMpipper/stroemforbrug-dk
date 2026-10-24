// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import {
  ANDROID_LIVE,
  APP_BAR_PLACEMENT,
  ASSET_BASE,
  IOS_LIVE,
  PROMO_BAR_BUTTON,
  PROMO_BAR_CLOSE,
  PROMO_BAR_LINE,
  PROMO_BAR_TITLE,
  playStoreUrl,
  storeUrl,
} from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";
import AppPromoBarClient from "./AppPromoBarClient";
import { PROMO_VARS } from "./style";

/**
 * Den lukbare bundbjælke på iPhone (og Android, når ANDROID_LIVE er sand) — samme bjælke som på Elpriser.dk (elpriser-dk 847d10d), porteret til
 * søstersiderne 19. okt. 2026 (ejerens ønske). Tegnes af AppPromo sammen med striben øverst på
 * indholdssiderne, så den følger stribens regler af sig selv: aldrig på pengesider, anmeldelser, app-siden
 * eller de juridiske sider. Butikslinkene (med sitets kampagnetoken) regnes her på serveren.
 */
export default function AppPromoBar() {
  if (!IOS_LIVE && !ANDROID_LIVE) return null;
  return (
    <AppPromoBarClient
      iosHref={IOS_LIVE ? storeUrl(APP_PROMO_SITE.key) : null}
      androidHref={ANDROID_LIVE ? playStoreUrl(APP_PROMO_SITE.key) : null}
      placement={APP_BAR_PLACEMENT}
      icon={`${ASSET_BASE}/icon.svg`}
      title={PROMO_BAR_TITLE}
      line={PROMO_BAR_LINE}
      button={PROMO_BAR_BUTTON}
      closeLabel={PROMO_BAR_CLOSE}
      style={PROMO_VARS}
    />
  );
}
