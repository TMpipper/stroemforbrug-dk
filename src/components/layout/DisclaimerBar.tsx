"use client";

/*
 * Annoncebjælken øverst på hver side: en tynd, lys bjælke som på søstersiderne og en
 * native <dialog> med sitets egen forklaring. Escape, fokusfælde og baggrundsklik følger
 * med dialogen gratis, og fokus vender tilbage til knappen, når den lukker.
 * `lang="en"` bærer den engelske sides egne strenge.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { NavLang } from "./nav";

const BAR: Record<NavLang, { site: string; button: string; close: string }> = {
  da: { site: "Strømforbrug.dk er en annonceside — et site af Elpriser.dk", button: "Sådan tjener vi penge", close: "Luk" },
};

const LINK = "font-medium text-brand-600 underline underline-offset-2 hover:text-brand";

export default function DisclaimerBar({ lang = "da" }: { lang?: NavLang }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const t = BAR[lang];

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => setOpen(false);
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <div className="bg-border/60 text-xs text-ink-muted">
        <div className="container-site flex items-center justify-center gap-1.5 py-1">
          <span>{t.site}</span>
          <span className="text-ink-muted/50" aria-hidden>·</span>
          <button
            ref={triggerRef}
            type="button"
            onClick={openModal}
            className="inline-flex min-h-6 items-center font-semibold text-ink-body underline decoration-ink-muted/50 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink-muted"
          >
            {t.button}
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => { if (e.target === dialogRef.current) closeModal(); }}
        aria-labelledby="disclaimer-title"
        className="fixed left-1/2 top-1/2 m-0 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-card bg-surface p-0 text-ink shadow-lift backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <h2 id="disclaimer-title" className="font-heading text-xl font-semibold text-ink sm:text-2xl">
              {t.button}
            </h2>
            <button
              type="button"
              onClick={closeModal}
              aria-label={t.close}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill text-ink-muted transition-colors hover:bg-brand-50 hover:text-ink"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-ink-body sm:text-base">
            <p>
              Strømforbrug.dk er et site af Elpriser.dk og lever af provision: når vi viser den billigste elaftale
              for dit forbrug, og du tegner den gennem vores knap hos et selskab, vi har en aftale med, får vi
              betaling. Knappen står kun ved aftaler fra de selskaber; alle andre aftaler vises uden knap.
            </p>
            <p>
              <strong className="font-semibold text-ink">Provisionen påvirker ikke din pris.</strong> Du betaler det
              samme, uanset om du tilmelder dig gennem os eller direkte hos selskabet.
            </p>
            <p>
              &quot;Billigst&quot; regnes over hele det marked, Forsyningstilsynets elpris.dk kender — ikke kun vores
              partnere — og apparaternes priser regnes med markedets marginalpris, aldrig en partners. Læs mere{" "}
              <Link href="/om-os/" onClick={closeModal} className={LINK}>
                om os
              </Link>{" "}
              og{" "}
              <Link href="/metode/" onClick={closeModal} className={LINK}>
                om metoden
              </Link>
              .
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
