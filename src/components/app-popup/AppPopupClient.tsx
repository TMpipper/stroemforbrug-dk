"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { track } from "@vercel/analytics";
import { takeoverOn } from "@/components/app-promo/takeover";

/** Lukningen huskes i to uger (kun tidspunktet), som appens bundbjælke. */
const STORAGE_KEY = "elpriser-app:popup:v1";
const DISMISS_MS = 14 * 24 * 60 * 60 * 1000;
/** Kortet kommer efter så mange sekunder — eller når læseren er rullet én skærm ned, hvis det sker først. */
const DELAY_MS = 8000;
/** Takeoveren (app-promo/takeover.ts): tre sekunder indtil 5. nov. 2026. */
const TAKEOVER_DELAY_MS = 3000;

function dismissedRecently(): boolean {
  try {
    const at = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(at) && at > 0 && Date.now() - at < DISMISS_MS;
  } catch {
    return false;
  }
}

function send(action: string) {
  try {
    track("app_popup", { action, lp: location.pathname });
  } catch {
    /* analytics blokeret */
  }
}

/**
 * Viser popup'en på store skærme med mus, når læseren har været på siden i otte sekunder eller er rullet én
 * skærm ned. Skjules, mens sidens eget app-bånd, footeren eller et indtastningsfelt er i brug, så der aldrig
 * står to app-flader på skærmen. Lukkes med × eller Escape; lukningen huskes i to uger.
 */
export default function AppPopupClient({ children, closeLabel, closeIcon }: { children: ReactNode; closeLabel: string; closeIcon: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [typing, setTyping] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    // Uden for laptop/desktop starter hverken timer eller rullelytter, så `ready` forbliver falsk.
    if (!mq.matches || /iPhone|iPad|iPod|Android/.test(navigator.userAgent) || dismissedRecently()) return;

    const timer = window.setTimeout(() => setReady(true), takeoverOn() ? TAKEOVER_DELAY_MS : DELAY_MS);
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) setReady(true);
    };
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
      .querySelectorAll('[data-app-promo]:not([data-app-promo="popup"]):not([data-app-promo="bar"]), footer')
      .forEach((el) => io.observe(el));

    const isField = (el: EventTarget | null) => el instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    const onFocusIn = (e: FocusEvent) => setTyping(isField(e.target));
    const onFocusOut = () => setTyping(false);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const show = ready && !blocked && !typing && !dismissed;

  const seen = useRef(false);
  useEffect(() => {
    if (show && !seen.current) {
      seen.current = true;
      send("view");
    }
  }, [show]);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  function dismiss() {
    setDismissed(true);
    send("close");
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* privat vindue eller blokeret lager — kortet er væk på denne side alligevel */
    }
  }

  return (
    <div
      data-app-popup-wrap=""
      data-state={show ? "open" : "closed"}
      aria-hidden={!show}
      inert={!show}
      className={`fixed bottom-6 right-6 z-50 hidden lg:block motion-safe:transition-[opacity,transform] motion-safe:duration-300 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4 invisible"
      }`}
    >
      <div className="relative">
        {children}
        <button
          type="button"
          onClick={dismiss}
          aria-label={closeLabel}
          className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#5B6B80] hover:bg-black/5 hover:text-[#0B2A4A]"
        >
          {closeIcon}
        </button>
      </div>
    </div>
  );
}
