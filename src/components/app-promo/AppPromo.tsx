// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import Image from "next/image";
import { ArrowRight, Check, QrCode, Smartphone } from "lucide-react";
import {
  ANDROID_NOTE, ASSET_BASE, PROMO_BUTTON, PROMO_EYEBROW, PROMO_LIVE_LABEL, PROMO_QR_TEXT, PROMO_QR_TITLE, PROMO_SCREENS,
  PROMO_SECONDARY, PROMO_SUBHEADING, PROMO_TRUST, SCREEN_HEIGHT, SCREEN_WIDTH, SCREENS, appPageUrl, effectiveContext,
  promoCopy, qrUrl, storeUrl, type AppPromoContext, type ScreenKey,
} from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";
import AppPromoBar from "./AppPromoBar";
import AppQr from "./AppQr";
import AppSmartBanner from "./AppSmartBanner";
import AppStoreBadges from "./AppStoreBadges";
import { LINK, PILL, PROMO_VARS } from "./style";

/**
 * Elpriser.dk-appen på søstersiderne — samme modul og tekster som på Elpriser.dk (elpriser-dk
 * src/components/app/AppPromo.tsx, 17. okt. 2026), porteret til el-feed 19. okt. 2026.
 *
 * `strip`: den slanke stribe øverst på indholdssiderne (ikon, én linje, knappen) — den giver også
 * Safaris smart-banner. `band`: det fulde panel med »Med appen kan du«, knappen, App Store-badget og
 * to skærmbilleder. `card`: det kompakte kort i brødteksten, uden badge.
 *
 * Knappen: på telefon et link til butikken med sitets kampagnetoken; fra md en QR-kode bag knappen
 * (native <details>, intet JavaScript), som peger på elpriser.dk/hent-app/?p=<site>. »Om appen« går
 * til https://elpriser.dk/app/ (ejerens undtagelse 19. okt. 2026) i et nyt vindue. Alt bærer
 * `data-app-cta` (AppClickTracker → app_click), roden `data-app-promo`, `data-shared` (audit-unique
 * tæller ikke teksten som sidens egen) og `data-family-app` (link-audits undtager kun dette træ).
 *
 * Komponenterne lægger ingen container om sig: sitet placerer dem i sin egen kolonne.
 * Pengesider: kun under sammenligningen, aldrig over (audit-app-promo).
 */
interface Props {
  variant: "strip" | "band" | "card";
  /** Unik pr. side, kebab-case: "post-top", "review-tail", "billigste-after-feed" … */
  placement: string;
  context?: AppPromoContext;
  vars?: { placePhrase?: string };
  screens?: readonly [ScreenKey, ScreenKey];
  /**
   * Kun båndet: prisen lige nu som spejl af sidens egne tal — FORMATERET af sitet (fx
   * `{ label, regions: [{ name: "Vestdanmark", value }] }` med sitets egne formaterede tal).
   * Står i `data-live-hours`, som pris-audits allerede undtager.
   */
  live?: { label: string; regions: { name: string; value: string }[] } | null;
  /** Kun striben: Safaris smart-banner (standard: ja). */
  smartBanner?: boolean;
  /**
   * Bundbjælken på iPhone (AppPromoBar). Standard: ja på striben (indholdssiderne), nej på bånd og kort.
   * Højst én pr. side (audit-app-promo); sæt `bar` på båndet kun på en side uden stribe.
   */
  bar?: boolean;
  className?: string;
}

function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" />
    </svg>
  );
}

function PromoCta({ placement }: { placement: string }) {
  const store = storeUrl(APP_PROMO_SITE.key);
  return (
    <>
      <a href={store} target="_blank" rel="noopener" data-app-cta={`${placement}:store`} className={`${PILL} md:hidden`}>
        <Smartphone className="h-4 w-4" aria-hidden />
        {PROMO_BUTTON}
      </a>
      <details data-app-qr="1" className="relative hidden md:block">
        <summary data-app-cta={`${placement}:qr`} className={`${PILL} cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden`}>
          <QrCode className="h-4 w-4" aria-hidden />
          {PROMO_BUTTON}
        </summary>
        <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-(--ap-radius) bg-(--ap-surface) p-4 shadow-(--ap-shadow)">
          <AppQr value={qrUrl(APP_PROMO_SITE.key)} label="QR-kode til Elpriser.dk-appen" className="h-40 w-40 rounded-(--ap-radius)" />
          <p className="mt-3 font-semibold text-(--ap-ink)">{PROMO_QR_TITLE}</p>
          <p className="mt-1 text-sm text-(--ap-muted)">{PROMO_QR_TEXT}</p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <a href={store} target="_blank" rel="noopener" data-app-cta={`${placement}:store`} className={LINK}>
              Åbn App Store
            </a>
            <AppPageLink placement={placement} />
          </p>
        </div>
      </details>
    </>
  );
}

function AppPageLink({ placement, className = "" }: { placement: string; className?: string }) {
  return (
    <a
      href={appPageUrl(APP_PROMO_SITE, placement)}
      target="_blank"
      rel="noopener"
      data-app-cta={`${placement}:app-page`}
      className={`${LINK} ${className}`}
    >
      {PROMO_SECONDARY} <ArrowRight className="h-4 w-4" aria-hidden />
    </a>
  );
}

function Screens({ keys, big }: { keys: readonly ScreenKey[]; big: boolean }) {
  return (
    <div className={big ? "flex items-start justify-center gap-4" : ""}>
      {keys.map((k, i) => (
        <Image
          key={k}
          src={SCREENS[k].src}
          alt={SCREENS[k].alt}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          loading="lazy"
          sizes={big ? "(min-width: 1024px) 176px, (min-width: 640px) 22vw, 0px" : "(min-width: 768px) 112px, 0px"}
          className={
            big
              ? `h-auto w-36 rounded-(--ap-radius) shadow-(--ap-shadow) lg:w-44 ${i === 1 ? "translate-y-8" : ""}`
              : "h-auto w-28 rounded-(--ap-radius) shadow-(--ap-shadow)"
          }
        />
      ))}
    </div>
  );
}

export default function AppPromo({ variant, placement, context = "generic", vars, screens, live = null, smartBanner = true, bar, className = "" }: Props) {
  const withBar = bar ?? variant === "strip";
  const ctx = effectiveContext(context);
  const copy = promoCopy(ctx, vars);
  const keys = screens ?? PROMO_SCREENS[ctx];
  const id = `app-promo-${placement}`;
  const titleId = `${id}-titel`;
  const root = { "data-app-promo": variant, "data-shared": "", "data-family-app": "", "data-context": ctx, id, "aria-labelledby": titleId, style: PROMO_VARS };
  const trust = `${PROMO_TRUST}${ANDROID_NOTE ? ` ${ANDROID_NOTE}` : ""}`;

  const bullets = (
    <>
      <p className="mt-5 font-semibold text-(--ap-ink)">{PROMO_SUBHEADING}</p>
      <ul className="mt-2 list-none space-y-1.5 p-0">
        {copy.bullets.map((b) => (
          <li key={b} className="m-0 flex gap-2 text-(--ap-body)">
            <Check className="mt-1 h-4 w-4 shrink-0 text-(--ap-accent)" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </>
  );

  if (variant === "strip") {
    return (
      <>
      <aside {...root} className={`not-prose ${className}`}>
        {smartBanner && <AppSmartBanner />}
        <div className="flex flex-wrap items-center gap-3 rounded-(--ap-radius) bg-(--ap-surface) px-4 py-3 shadow-(--ap-shadow) sm:flex-nowrap sm:gap-4 sm:px-5">
          {/* eslint-disable-next-line @next/next/no-img-element -- appens ikon som SVG */}
          <img src={`${ASSET_BASE}/icon.svg`} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-[10px]" aria-hidden />
          <div className="min-w-0 flex-1">
            <p id={titleId} className="m-0 font-(family-name:--ap-font-heading) text-base font-semibold leading-tight text-(--ap-ink)">
              {PROMO_EYEBROW}: {copy.heading.charAt(0).toLowerCase() + copy.heading.slice(1)}
            </p>
            <p className="m-0 mt-0.5 text-sm text-(--ap-muted)">{copy.strip}</p>
          </div>
          <div className="flex w-full items-center gap-3 sm:w-auto">
            <PromoCta placement={placement} />
            <AppPageLink placement={placement} className="hidden whitespace-nowrap lg:inline-flex" />
          </div>
        </div>
      </aside>
      {withBar && <AppPromoBar />}
      </>
    );
  }

  if (variant === "card") {
    return (
      <>
      <aside {...root} className={`not-prose rounded-(--ap-radius) bg-(--ap-tint) p-5 sm:p-6 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-6 ${className}`}>
        <div className="min-w-0">
          <p className="m-0 inline-flex rounded-(--ap-pill) bg-(--ap-surface) px-3 py-1 text-xs font-medium text-(--ap-link) shadow-sm">{PROMO_EYEBROW}</p>
          <h3 id={titleId} className="m-0 mt-3 font-(family-name:--ap-font-heading) text-xl font-semibold text-(--ap-ink)">
            {copy.heading}
          </h3>
          <p className="m-0 mt-2 text-sm leading-relaxed text-(--ap-body)">{copy.line}</p>
          <div className="text-sm">{bullets}</div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <PromoCta placement={placement} />
            <AppPageLink placement={placement} />
          </div>
          <p className="m-0 mt-3 text-xs text-(--ap-muted)">{trust}</p>
        </div>
        <div className="hidden md:block">
          <Screens keys={[keys[0]]} big={false} />
        </div>
      </aside>
      {withBar && <AppPromoBar />}
      </>
    );
  }

  return (
    <>
    <section {...root} className={`not-prose ${className}`}>
      <div className="grid overflow-hidden rounded-(--ap-radius) bg-(--ap-surface) shadow-(--ap-shadow) md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <div className="p-6 md:p-10">
          <p className="m-0 inline-flex rounded-(--ap-pill) bg-(--ap-tint) px-3.5 py-1.5 text-sm font-medium text-(--ap-link)">{PROMO_EYEBROW}</p>
          <h2 id={titleId} className="m-0 mt-4 font-(family-name:--ap-font-heading) text-3xl font-semibold text-(--ap-ink) md:text-[2.25rem] md:leading-[1.2]">
            {copy.heading}
          </h2>
          <p className="m-0 mt-4 text-lg text-(--ap-body)">{copy.line}</p>
          {bullets}
          {live && live.regions.length > 0 && (
            <div data-live-hours className="mt-6 rounded-(--ap-radius) bg-(--ap-tint) p-4">
              <p className="m-0 text-sm font-medium text-(--ap-muted)">
                {PROMO_LIVE_LABEL} · {live.label}
              </p>
              <dl className="m-0 mt-2 grid grid-cols-2 gap-4">
                {live.regions.map((r) => (
                  <div key={r.name}>
                    <dt className="text-xs text-(--ap-muted)">{r.name}</dt>
                    <dd className="m-0 font-(family-name:--ap-font-heading) text-2xl font-semibold tabular-nums text-(--ap-ink)">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PromoCta placement={placement} />
            <AppStoreBadges placement={placement} className="hidden md:flex" />
            <AppPageLink placement={placement} />
          </div>
          <p className="m-0 mt-3 text-xs text-(--ap-muted)">{trust}</p>
        </div>
        <div className="relative hidden overflow-hidden bg-(--ap-accent) p-6 sm:block md:p-10">
          <Bolt className="pointer-events-none absolute -right-10 -top-12 h-56 w-56 text-white/10" />
          <div className="relative">
            <Screens keys={keys} big />
          </div>
        </div>
      </div>
    </section>
    {withBar && <AppPromoBar />}
    </>
  );
}

export { AppPageLink, PromoCta, Screens };
