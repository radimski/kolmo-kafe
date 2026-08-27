"use client";

import { useState } from "react";
import { kinlesConfig } from "./config";

export function InquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const reply = String(data.get("reply") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Poptávka z webu — ${name || "bez jména"}`;
    const body = `Jméno: ${name}\nKontakt: ${reply}\n\n${message}`;

    setStatus("Otevíráme e-mailovou aplikaci…");
    window.location.href = `mailto:${kinlesConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label>
        Jméno a příjmení
        <input
          type="text"
          name="name"
          placeholder="Jan Novák"
          autoComplete="name"
          required
        />
      </label>
      <label>
        E-mail nebo telefon
        <input
          type="text"
          name="reply"
          placeholder="jan@email.cz nebo 601 234 567"
          autoComplete="email"
          required
        />
      </label>
      <label>
        Zpráva
        <textarea
          name="message"
          placeholder="Popište, co potřebujete zabezpečit nebo opravit…"
          required
        />
      </label>
      <button type="submit" className="btn btn-primary form-submit">
        Odeslat poptávku
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
      <p className="form-note">
        Tlačítko otevře vaši e-mailovou aplikaci s předvyplněnou zprávou
        adresovanou na {kinlesConfig.email} — nic se neodešle bez vašeho
        potvrzení.
      </p>
    </form>
  );
}
