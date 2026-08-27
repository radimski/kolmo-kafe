export type CookieCategory = "necessary" | "analytics" | "marketing";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "cz-cookie-consent";

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: new Date(0).toISOString(),
};

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.necessary !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: Omit<CookieConsent, "updatedAt">) {
  const value: CookieConsent = {
    ...consent,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: value }));
  return value;
}

export function hasConsentChoice() {
  return readCookieConsent() !== null;
}
