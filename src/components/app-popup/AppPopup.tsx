import { ArrowRight, X } from "lucide-react";
import {
  PROMO_EYEBROW, PROMO_QR_TEXT, PROMO_QR_TITLE, PROMO_SECONDARY,
  appPageUrl, promoBarTitle, promoCopy, qrUrl, type AppPromoContext,
} from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";
import AppQr from "@/components/app-promo/AppQr";
import { LINK, PROMO_VARS } from "@/components/app-promo/style";
import AppPopupClient from "./AppPopupClient";

const PLACEMENT = "laptop-popup";

/**
 * Elpriser.dk-appens popup på laptop og desktop (ejeren 3. nov. 2026: »push the app even more … with the popup as well«;
 * samme komponent som Elselskaber.dk's fra 31. okt.). Et kort i nederste højre hjørne med QR-koden — ikke en blokerende
 * modal. Kun fra lg (1024 px) og med mus; telefoner har striben og bundbjælken. Ingen App Store-badge her
 * (audit-app-promo: højst ét pr. side, og striben har det). Sendes lukket i HTML'en; klienten åbner den.
 * Site-egen komponent (ikke i el-feed-kittet), men med kittets tekster og data-attributter.
 */
export default function AppPopup({ context = "generic" }: { context?: AppPromoContext }) {
  const copy = promoCopy(context);
  const qr = qrUrl(APP_PROMO_SITE.key);
  return (
    <AppPopupClient closeLabel="Luk" closeIcon={<X className="h-4 w-4" aria-hidden />}>
      <aside
        id={`app-promo-${PLACEMENT}`}
        data-app-promo="popup"
        data-shared=""
        data-family-app=""
        data-context={context}
        aria-labelledby={`app-promo-${PLACEMENT}-titel`}
        style={PROMO_VARS}
        className="not-prose w-[20rem] overflow-hidden rounded-(--ap-radius) border border-black/5 bg-(--ap-surface) shadow-[0_16px_40px_rgba(11,42,74,0.22)]"
      >
        <div className="px-5 pb-4 pt-4 pr-12">
          <p className="m-0 inline-flex rounded-(--ap-pill) bg-(--ap-tint) px-3 py-1 text-xs font-medium text-(--ap-link)">{PROMO_EYEBROW}</p>
          <p id={`app-promo-${PLACEMENT}-titel`} className="m-0 mt-2.5 font-(family-name:--ap-font-heading) text-lg font-semibold leading-snug text-(--ap-ink)">
            {promoBarTitle(context)}
          </p>
          <p className="m-0 mt-1.5 text-sm leading-relaxed text-(--ap-body)">{copy.strip}</p>
        </div>
        <div className="flex items-center gap-4 bg-(--ap-tint) px-5 py-3.5">
          <AppQr value={qr} label={PROMO_QR_TITLE} className="h-[5.5rem] w-[5.5rem] shrink-0 rounded-md" />
          <div>
            <p className="m-0 text-sm font-semibold text-(--ap-ink)">{PROMO_QR_TITLE}</p>
            <p className="m-0 mt-1 text-xs leading-relaxed text-(--ap-muted)">{PROMO_QR_TEXT}</p>
            <a href={appPageUrl(APP_PROMO_SITE, PLACEMENT)} target="_blank" rel="noopener" data-app-cta={`${PLACEMENT}:about`} className={`${LINK} mt-1.5 whitespace-nowrap`}>
              {PROMO_SECONDARY}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </aside>
    </AppPopupClient>
  );
}
