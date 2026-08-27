import { FormEngine } from "@/components/FormEngine";
import { kolmoConfig } from "@/config/site";

const topics = [
  "Obecný dotaz",
  "Rezervace místa",
  "Soukromá akce / oslava",
  "Spolupráce",
] as const;

/**
 * Markup contract of the vendored form engine: `data-form` names a form id from
 * `config/forms.json`, every message is a `data-msg-*` attribute, and the
 * status paragraph gets `data-state="info|ok|error"`.
 */
export function KolmoContactForm({ privacyHref }: { privacyHref: string }) {
  return (
    <>
      <form
        className="kolmo-form"
        data-form="kontakt"
        noValidate
        data-msg-sending="Odesíláme…"
        data-msg-success="Děkujeme, zprávu máme. Ozveme se vám co nejdříve."
        data-msg-error={`Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo volejte ${kolmoConfig.phone}.`}
        data-msg-required="Zkontrolujte prosím zvýrazněná pole."
        data-msg-email="Zadejte platnou e-mailovou adresu."
        data-msg-min="Tato hodnota je příliš krátká."
        data-msg-max="Tato hodnota je příliš dlouhá."
        data-msg-option="Vyberte prosím jednu z možností."
        data-msg-rate="Zprávu jste odeslali příliš mnohokrát. Zkuste to prosím později."
        data-msg-offline="Vypadá to, že jste offline. Zkontrolujte připojení a zkuste to znovu."
      >
        <div className="kolmo-form-row">
          <label>
            Jméno
            <input
              type="text"
              name="jmeno"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
            />
          </label>
          <label>
            E-mail nebo telefon
            <input
              type="text"
              name="kontakt"
              autoComplete="email"
              required
              minLength={5}
              maxLength={200}
            />
          </label>
        </div>
        <label>
          Téma
          <select name="tema" defaultValue="Obecný dotaz" required>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
        <label>
          Zpráva
          <textarea
            name="zprava"
            rows={5}
            required
            minLength={5}
            maxLength={4000}
            placeholder="Kolik vás bude, kdy se chcete zastavit, na co se ptáte…"
          />
        </label>
        <label className="kolmo-consent">
          <input type="checkbox" name="souhlas" required />
          <span>
            Souhlasím se zpracováním osobních údajů za účelem odpovědi na mou
            zprávu. Více v{" "}
            <a href={privacyHref}>zásadách ochrany osobních údajů</a>.
          </span>
        </label>
        <button
          type="submit"
          data-form-submit
          className="kolmo-pill kolmo-btn-cream kolmo-form-submit"
        >
          Odeslat zprávu
        </button>
        <p
          className="kolmo-form-status"
          data-form-status
          role="status"
          aria-live="polite"
          hidden
        />
        <p className="kolmo-form-note">
          Zpráva jde na {kolmoConfig.email}. Aktuální otevírací dobu hlásíme na
          Facebooku.
        </p>
      </form>
      <FormEngine />
    </>
  );
}
