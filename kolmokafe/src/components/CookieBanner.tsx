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
    <div
      role="dialog"
      aria-label="Souhlas s cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#c8a27a]/40 bg-[#131619]/97 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-6xl px-6 py-5">
        {!detail ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-[#9a948c]">
              Nezbytné cookies používáme pro provoz webu. Analytické a
              marketingové jen s vaším souhlasem podle GDPR a zákona č. 127/2005
              Sb. Více v{" "}
              <Link href="/cookies" className="text-[#c8a27a] underline">
                zásadách cookies
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => save(false, false)}
                className="kolmo-pill kolmo-btn-ghost px-5 py-2.5 text-sm font-medium"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={() => setDetail(true)}
                className="kolmo-pill kolmo-btn-ghost px-5 py-2.5 text-sm font-medium"
              >
                Nastavení
              </button>
              <button
                type="button"
                onClick={() => save(true, true)}
                className="kolmo-pill kolmo-btn-cream px-5 py-2.5 text-sm font-semibold"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-semibold text-[#f2ece3]">Nastavení cookies</p>
            <div className="mt-4 space-y-3">
              <label className="flex items-start justify-between gap-4 rounded-xl border border-[#f2ece3]/10 p-4 text-sm text-[#9a948c]">
                <span>
                  <strong className="block text-[#f2ece3]">Nezbytné</strong>
                  Základní funkce webu. Nelze vypnout.
                </span>
                <input type="checkbox" checked disabled className="mt-1" />
              </label>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-[#f2ece3]/10 p-4 text-sm text-[#9a948c]">
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
              <label className="flex items-start justify-between gap-4 rounded-xl border border-[#f2ece3]/10 p-4 text-sm text-[#9a948c]">
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
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setDetail(false)}
                className="kolmo-pill kolmo-btn-ghost px-5 py-2.5 text-sm font-medium"
              >
                Zpět
              </button>
              <button
                type="button"
                onClick={() => save(analytics, marketing)}
                className="kolmo-pill kolmo-btn-cream px-5 py-2.5 text-sm font-semibold"
              >
                Uložit volbu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
