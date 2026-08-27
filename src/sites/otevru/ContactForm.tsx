"use client";

import { useState } from "react";
import { otevruConfig } from "./config";

export function OtevruContactForm({ privacyHref }: { privacyHref: string }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Poptávka z webu — ${name || "bez jména"}`;
    const body = [
      `Jméno: ${name}`,
      `Telefon: ${phone}`,
      email ? `E-mail: ${email}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    setStatus("Otevíráme vaši e-mailovou aplikaci…");
    window.location.href = `mailto:${otevruConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="otevru-form" onSubmit={handleSubmit}>
      <div className="otevru-form-row">
        <label>
          Jméno a příjmení <span aria-hidden>*</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Telefon <span aria-hidden>*</span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <label>
        E-mail
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Co potřebujete? <span aria-hidden>*</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Např. zabouchnuté dveře, výměna vložky, montáž trezoru…"
          required
        />
      </label>
      <label className="otevru-consent">
        <input type="checkbox" name="consent" required />
        <span>
          Souhlasím se zpracováním osobních údajů za účelem vyřízení mé
          poptávky. Více v{" "}
          <a href={privacyHref}>zásadách ochrany osobních údajů</a>.
        </span>
      </label>
      <button type="submit" className="otevru-btn-orange otevru-form-submit">
        Odeslat poptávku
      </button>
      <p className="otevru-form-status" role="status" aria-live="polite">
        {status}
      </p>
      <p className="otevru-form-note">
        Formulář otevře vaši e-mailovou aplikaci s předvyplněnou zprávou na{" "}
        {otevruConfig.email}. Nic se neodešle bez vašeho potvrzení. Spěchá-li to,
        volejte {otevruConfig.phone}.
      </p>
    </form>
  );
}
