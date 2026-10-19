"use client";
// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her.
import { useEffect, useState, type CSSProperties } from "react";
import { X } from "lucide-react";
import {
  APP_BAR_DISMISS_DAYS,
  APP_BAR_STORAGE_KEY,
} from "@/lib/feed/app-promo";

const DISMISS_MS = APP_BAR_DISMISS_DAYS * 24 * 60 * 60 * 1000;

interface Props {
  /** Butikslinket med sitets kampagnetoken — regnet på serveren. */
  iosHref: string | null;
  /** Google Play, kun når ANDROID_LIVE er sand. */
  androidHref: string | null;
  placement: string;
  icon: string;
  title: string;
  line: string;
  button: string;
  closeLabel: string;
  style: CSSProperties;
}

function dismissedRecently(): boolean {
  try {
    const at = Number(localStorage.getItem(APP_BAR_STORAGE_KEY));
    return Number.isFinite(at) && at > 0 && Date.now() - at < DISMISS_MS;
  } catch {
    return false;
  }
}

/**
 * Klientdelen: vises kun på iPhone (og Android, når Play-linket findes), først når læseren er rullet forbi
 * den første skærm, og aldrig mens en af sidens egne app-flader (stribe, kort, bånd), footeren eller et
 * indtastningsfelt er i brug — så der aldrig står to »Hent«-knapper på skærmen. Lukkes med ×, huskes i to
 * uger. Fast placeret i bunden med safe-area: intet på siden flytter sig. Sendes lukket i HTML'en.
 */
export default function AppPromoBarClient({
  iosHref,
  androidHref,
  placement,
  icon,
  title,
  line,
  button,
  closeLabel,
  style,
}: Props) {
  const [href, setHref] = useState<string | null>(null);
  const [past, setPast] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [typing, setTyping] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const target = /iPhone|iPod/.test(ua)
      ? iosHref
      : /Android/.test(ua) && /Mobile/.test(ua)
        ? androidHref
        : null;
    if (!target || dismissedRecently()) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setHref(target);
        setPast(window.scrollY > window.innerHeight * 0.9);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const inView = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) inView.add(e.target);
        else inView.delete(e.target);
      }
      setBlocked(inView.size > 0);
    });
    document
      .querySelectorAll(
        '[data-app-promo]:not([data-app-promo="bar"]), [data-app-page], footer',
      )
      .forEach((el) => io.observe(el));

    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    const onFocusIn = (e: FocusEvent) => setTyping(isField(e.target));
    const onFocusOut = () => setTyping(false);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      io.disconnect();
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, [iosHref, androidHref]);

  const show = !!href && past && !blocked && !typing && !dismissed;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(APP_BAR_STORAGE_KEY, String(Date.now()));
    } catch {
      /* privat vindue eller blokeret lager — bjælken er væk på denne side alligevel */
    }
  };

  return (
    <aside
      data-app-promo="bar"
      data-shared=""
      data-family-app=""
      data-state={show ? "open" : "closed"}
      id={`app-promo-${placement}`}
      aria-label="Elpriser.dk-appen"
      style={style}
      className={`not-prose fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] transition-[transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
        show ? "visible translate-y-0" : "invisible translate-y-full"
      } border-t border-black/10 bg-(--ap-surface) shadow-[0_-8px_24px_rgba(11,42,74,0.12)]`}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-3 py-2 min-[360px]:gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- appens ikon som SVG */}
        <img
          src={icon}
          alt=""
          width={36}
          height={36}
          className="hidden h-9 w-9 shrink-0 rounded-[8px] min-[360px]:block"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="m-0 text-sm font-semibold leading-tight text-(--ap-ink)">
            {title}
          </p>
          <p className="m-0 line-clamp-2 text-xs leading-snug text-(--ap-muted)">
            {line}
          </p>
        </div>
        <a
          href={href ?? iosHref ?? androidHref ?? undefined}
          target="_blank"
          rel="noopener"
          data-app-cta={`${placement}:store`}
          className="inline-flex min-h-10 shrink-0 items-center rounded-(--ap-pill) bg-(--ap-accent) px-4 text-sm font-semibold text-(--ap-on-accent) no-underline shadow-sm transition-colors hover:bg-(--ap-accent-hover) motion-reduce:transition-none"
        >
          {button}
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label={closeLabel}
          className="-mr-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-(--ap-pill) bg-transparent text-(--ap-muted) hover:text-(--ap-ink)"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </aside>
  );
}
