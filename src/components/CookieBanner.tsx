"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  clearConsent,
  hasConsentChoice,
  subscribeToConsent,
  writeConsent,
} from "@websites/legal-cz";
import { SITE_ID } from "@/config/operator";

function shouldShow() {
  return !hasConsentChoice(SITE_ID);
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => clearConsent(SITE_ID)}
      className="text-left transition hover:text-[#c8a27a]"
    >
      Nastavení cookies
    </button>
  );
}

export function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribeToConsent,
    shouldShow,
    () => false,
  );
  const [detail, setDetail] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!visible) return null;

  function save(a: boolean, m: boolean) {
    writeConsent(SITE_ID, { analytics: a, marketing: m });
    setDetail(false);
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <section
        role="region"
        aria-label="Souhlas s cookies"
        className="pointer-events-auto mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#c8a27a]/30 bg-[#131619] shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
      >
        {!detail ? (
          <div className="px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-sm leading-6 text-[#9a948c]">
                Nezbytné cookies pro provoz webu. Analytické a marketingové jen
                se souhlasem.{" "}
                <Link href="/cookies" className="text-[#c8a27a] underline">
                  Zásady cookies
                </Link>
                .
              </p>
              <div className="flex shrink-0 flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => save(false, false)}
                  className="kolmo-pill kolmo-btn-ghost px-4 py-2 text-sm font-medium"
                >
                  Odmítnout
                </button>
                <button
                  type="button"
                  onClick={() => setDetail(true)}
                  className="kolmo-pill kolmo-btn-ghost px-4 py-2 text-sm font-medium"
                >
                  Nastavení
                </button>
                <button
                  type="button"
                  onClick={() => save(true, true)}
                  className="kolmo-pill kolmo-btn-cream px-4 py-2 text-sm font-semibold"
                >
                  Přijmout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-h-[min(70vh,28rem)] overflow-y-auto px-4 py-4 sm:px-5">
            <p className="font-semibold text-[#f2ece3]">Nastavení cookies</p>
            <p className="mt-1 text-xs text-[#9a948c]">
              Volba se uloží lokálně v prohlížeči.
            </p>
            <div className="mt-3 space-y-2">
              <label className="flex items-start justify-between gap-4 rounded-xl border border-[#f2ece3]/10 p-3 text-sm text-[#9a948c]">
                <span>
                  <strong className="block text-[#f2ece3]">Nezbytné</strong>
                  Základní funkce webu. Nelze vypnout.
                </span>
                <input type="checkbox" checked disabled className="mt-1" />
              </label>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-[#f2ece3]/10 p-3 text-sm text-[#9a948c]">
                <span>
                  <strong className="block text-[#f2ece3]">Analytické</strong>
                  Měření návštěvnosti webu.
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1"
                />
              </label>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-[#f2ece3]/10 p-3 text-sm text-[#9a948c]">
                <span>
                  <strong className="block text-[#f2ece3]">Marketingové</strong>
                  Personalizace reklamy a měření kampaní.
                </span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1"
                />
              </label>
            </div>
            <div className="mt-4 flex flex-wrap justify-end gap-2 border-t border-[#f2ece3]/10 pt-3">
              <button
                type="button"
                onClick={() => setDetail(false)}
                className="kolmo-pill kolmo-btn-ghost px-4 py-2 text-sm font-medium"
              >
                Zpět
              </button>
              <button
                type="button"
                onClick={() => save(analytics, marketing)}
                className="kolmo-pill kolmo-btn-cream px-4 py-2 text-sm font-semibold"
              >
                Uložit volbu
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
