// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import { ANDROID_LIVE, ASSET_BASE, IOS_LIVE, PLAY_STORE_URL, storeUrl } from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";

/**
 * Apples og Googles officielle badges (må ikke tegnes om). Kun når butikssiden findes: indtil
 * ANDROID_LIVE står Google Play-badget ikke (promoerne siger »på vej« i tekst). Højst ét App
 * Store-badge pr. side (audit-app-promo) — derfor har striben og kortet intet.
 */
export default function AppStoreBadges({ placement, className = "" }: { placement: string; className?: string }) {
  if (!IOS_LIVE && !ANDROID_LIVE) return null;
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {IOS_LIVE && (
        <a
          href={storeUrl(APP_PROMO_SITE.key)}
          data-store="ios"
          data-app-cta={`${placement}:store`}
          aria-label="Hent Elpriser.dk-appen i App Store"
          className="inline-flex rounded-[8px] transition-opacity hover:opacity-85 motion-reduce:transition-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- officielt SVG-badge, skal ikke optimeres */}
          <img src={`${ASSET_BASE}/badges/app-store-da.svg`} alt="Hent i App Store" width={150} height={50} className="h-[50px] w-auto" />
        </a>
      )}
      {ANDROID_LIVE && (
        <a
          href={PLAY_STORE_URL}
          data-store="android"
          data-app-cta={`${placement}:play`}
          aria-label="Hent Elpriser.dk-appen i Google Play"
          className="inline-flex transition-opacity hover:opacity-85 motion-reduce:transition-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- officielt badge */}
          <img src={`${ASSET_BASE}/badges/google-play-da.png`} alt="Nu på Google Play" width={168} height={65} className="h-[65px] w-auto" />
        </a>
      )}
    </div>
  );
}
