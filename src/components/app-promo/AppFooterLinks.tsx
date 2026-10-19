// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import { ANDROID_NOTE, IOS_LIVE, PROMO_EYEBROW, appPageUrl } from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";
import AppStoreBadges from "./AppStoreBadges";

/**
 * Footerens app-kolonne: overskrift, sitets egen app-side (når den findes), badget med sitets
 * kampagnetoken og »Om appen« på Elpriser.dk. Farverne arver footerens (`inherit`), så den virker
 * på både lys og mørk footer; sitet giver overskriftens og linkenes klasser.
 *
 * NB: footeren har badget — sider med `band` har derfor to App Store-badges, hvis footeren også
 * har ét; audit-app-promo tæller kun badges uden for <footer>.
 */
export default function AppFooterLinks({ headingClassName = "", linkClassName = "", placement = "footer" }: { headingClassName?: string; linkClassName?: string; placement?: string }) {
  if (!IOS_LIVE) return null;
  return (
    <div data-app-footer data-family-app>
      <p className={headingClassName}>{PROMO_EYEBROW}</p>
      <ul className="m-0 mt-3 list-none space-y-2 p-0">
        {APP_PROMO_SITE.appPage && (
          <li>
            <a href={APP_PROMO_SITE.appPage} data-app-cta={`${placement}:site-app-page`} className={linkClassName}>
              Elprisen i en app
            </a>
          </li>
        )}
        <li>
          <a href={appPageUrl(APP_PROMO_SITE, placement)} target="_blank" rel="noopener" data-app-cta={`${placement}:app-page`} className={linkClassName}>
            Om appen
          </a>
        </li>
      </ul>
      <AppStoreBadges placement={placement} className="mt-4" />
      {ANDROID_NOTE && <p className="m-0 mt-2 text-xs opacity-75">{ANDROID_NOTE}</p>}
    </div>
  );
}
