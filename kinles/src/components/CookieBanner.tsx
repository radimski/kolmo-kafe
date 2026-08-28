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
      className="cookie-settings-btn"
      onClick={() => clearConsent(SITE_ID)}
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
    <div className="cookie-bar" role="dialog" aria-label="Souhlas s cookies">
      <div className="wrap cookie-bar-inner">
        {!detail ? (
          <>
            <p className="cookie-text">
              Nezbytné cookies používáme pro provoz webu. Analytické a
              marketingové jen s vaším souhlasem podle GDPR a zákona č. 127/2005
              Sb. Více v <Link href="/cookies">zásadách cookies</Link>.
            </p>
            <div className="cookie-actions">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => save(false, false)}
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDetail(true)}
              >
                Nastavení
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => save(true, true)}
              >
                Přijmout vše
              </button>
            </div>
          </>
        ) : (
          <div className="cookie-detail">
            <h3>Nastavení cookies</h3>
            <label className="cookie-option">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Nezbytné</strong> Základní funkce webu. Nelze vypnout.
              </span>
            </label>
            <label className="cookie-option">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span>
                <strong>Analytické</strong> Měření návštěvnosti webu.
              </span>
            </label>
            <label className="cookie-option">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
              <span>
                <strong>Marketingové</strong> Personalizace reklamy a měření
                kampaní.
              </span>
            </label>
            <div className="cookie-actions">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDetail(false)}
              >
                Zpět
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => save(analytics, marketing)}
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
