"use client";

import { useEffect, useRef } from "react";

/**
 * Loads the vendored `public/form.js`, which scans the DOM for `[data-form]`
 * when it executes. Because that happens once per script execution, a
 * client-side navigation onto a form page needs a fresh script element — the
 * engine marks the forms it has taken over by injecting its `_website`
 * honeypot, so that is what we check to avoid binding a form twice.
 */
export function FormEngine() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;

    const forms = Array.from(document.querySelectorAll("[data-form]"));
    const pending = forms.some(
      (form) => !form.querySelector('[name="_website"]'),
    );
    if (!pending) return;

    injected.current = true;

    const script = document.createElement("script");
    script.src = "/form.js";
    script.async = true;
    script.addEventListener("load", () => script.remove());
    document.body.appendChild(script);
  }, []);

  return null;
}
