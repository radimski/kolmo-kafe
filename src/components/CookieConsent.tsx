"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  defaultConsent,
  hasConsentChoice,
  writeCookieConsent,
} from "@/lib/cookie-consent";

function subscribeToConsentChanges(onStoreChange: () => void) {
  window.addEventListener("cookie-consent-changed", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("cookie-consent-changed", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function shouldShowBanner() {
  return !hasConsentChoice();
}

export function CookieConsent() {
  const visible = useSyncExternalStore(
    subscribeToConsentChanges,
    shouldShowBanner,
    () => false,
  );
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  function saveConsent(nextAnalytics: boolean, nextMarketing: boolean) {
    writeCookieConsent({
      necessary: true,
      analytics: nextAnalytics,
      marketing: nextMarketing,
    });
    setShowSettings(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="mx-auto max-w-5xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2
                id="cookie-consent-title"
                className="text-base font-semibold text-zinc-900 dark:text-zinc-50"
              >
                Soubory cookies
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
              >
                Používáme nezbytné cookies pro provoz webu. Analytické a
                marketingové cookies používáme pouze s vaším souhlasem podle
                nařízení GDPR a zákona č. 127/2005 Sb. Více v{" "}
                <Link href="/cookies" className="underline underline-offset-2">
                  zásadách cookies
                </Link>{" "}
                a{" "}
                <Link
                  href="/ochrana-osobnich-udaju"
                  className="underline underline-offset-2"
                >
                  ochraně osobních údajů
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => saveConsent(false, false)}
                className="rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnalytics(defaultConsent.analytics);
                  setMarketing(defaultConsent.marketing);
                  setShowSettings(true);
                }}
                className="rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Nastavení
              </button>
              <button
                type="button"
                onClick={() => saveConsent(true, true)}
                className="rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Nastavení cookies
            </h2>
            <div className="mt-4 space-y-4">
              <label className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <span>
                  <span className="block font-medium text-zinc-900 dark:text-zinc-50">
                    Nezbytné
                  </span>
                  <span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-400">
                    Nutné pro základní funkce webu. Nelze vypnout.
                  </span>
                </span>
                <input type="checkbox" checked disabled className="mt-1" />
              </label>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <span>
                  <span className="block font-medium text-zinc-900 dark:text-zinc-50">
                    Analytické
                  </span>
                  <span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-400">
                    Pomáhají pochopit, jak návštěvníci web používají.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1"
                />
              </label>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <span>
                  <span className="block font-medium text-zinc-900 dark:text-zinc-50">
                    Marketingové
                  </span>
                  <span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-400">
                    Slouží k personalizaci reklamy a měření kampaní.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  className="mt-1"
                />
              </label>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Zpět
              </button>
              <button
                type="button"
                onClick={() => saveConsent(analytics, marketing)}
                className="rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
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
