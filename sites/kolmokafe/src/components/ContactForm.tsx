"use client";

import { useState } from "react";
import { kolmoConfig } from "@/config/site";

export function KolmoContactForm({ privacyHref }: { privacyHref: string }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Zpráva z webu — ${topic || "dotaz"}`;
    const body = [
      `Jméno: ${name}`,
      `Kontakt: ${contact}`,
      `Téma: ${topic}`,
      "",
      message,
    ].join("\n");

    setStatus("Otevíráme vaši e-mailovou aplikaci…");
    window.location.href = `mailto:${kolmoConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="kolmo-form" onSubmit={handleSubmit}>
      <div className="kolmo-form-row">
        <label>
          Jméno
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          E-mail nebo telefon
          <input type="text" name="contact" autoComplete="email" required />
        </label>
      </div>
      <label>
        Téma
        <select name="topic" defaultValue="Dotaz">
          <option value="Dotaz">Obecný dotaz</option>
          <option value="Rezervace">Rezervace místa</option>
          <option value="Akce">Soukromá akce / oslava</option>
          <option value="Spolupráce">Spolupráce</option>
        </select>
      </label>
      <label>
        Zpráva
        <textarea
          name="message"
          rows={5}
          placeholder="Kolik vás bude, kdy se chcete zastavit, na co se ptáte…"
          required
        />
      </label>
      <label className="kolmo-consent">
        <input type="checkbox" name="consent" required />
        <span>
          Souhlasím se zpracováním osobních údajů za účelem odpovědi na mou
          zprávu. Více v <a href={privacyHref}>zásadách ochrany osobních údajů</a>
          .
        </span>
      </label>
      <button type="submit" className="kolmo-pill kolmo-btn-cream kolmo-form-submit">
        Odeslat zprávu
      </button>
      <p className="kolmo-form-status" role="status" aria-live="polite">
        {status}
      </p>
      <p className="kolmo-form-note">
        Formulář otevře vaši e-mailovou aplikaci s předvyplněnou zprávou na{" "}
        {kolmoConfig.email}. Aktuální otevírací dobu hlásíme na Facebooku.
      </p>
    </form>
  );
}
