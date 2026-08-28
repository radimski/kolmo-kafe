import { kinlesConfig } from "@/config/site";

/**
 * Markup contract of the vendored form engine: `data-form` names a form id from
 * `config/forms.json`, every message is a `data-msg-*` attribute, and the
 * status paragraph gets `data-state="info|ok|error"`.
 */
export function InquiryForm({ privacyHref }: { privacyHref: string }) {
  return (
    <>
      <form
        className="inquiry-form"
        data-form="poptavka"
        noValidate
        data-msg-sending="Odesíláme…"
        data-msg-success="Děkujeme, poptávku máme. Odpovíme obratem v rámci otevírací doby."
        data-msg-error={`Formulář se nepodařilo odeslat. Zavolejte prosím na ${kinlesConfig.phone}.`}
        data-msg-required="Zkontrolujte prosím zvýrazněná pole."
        data-msg-email="Zadejte platnou e-mailovou adresu."
        data-msg-min="Tato hodnota je příliš krátká."
        data-msg-max="Tato hodnota je příliš dlouhá."
        data-msg-option="Vyberte prosím jednu z možností."
        data-msg-rate="Poptávku jste odeslali příliš mnohokrát. Zkuste to prosím později."
        data-msg-offline="Vypadá to, že jste offline. Zkontrolujte připojení a zkuste to znovu."
      >
        <label>
          Jméno a příjmení
          <input
            type="text"
            name="jmeno"
            placeholder="Jan Novák"
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
            placeholder="jan@email.cz nebo 601 234 567"
            autoComplete="email"
            required
            minLength={5}
            maxLength={200}
          />
        </label>
        <label>
          Typ poptávky
          <select name="typ" defaultValue="Klíče a zámečnictví" required>
            {kinlesConfig.inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Zpráva
          <textarea
            name="zprava"
            placeholder="Popište, co potřebujete zabezpečit nebo opravit…"
            required
            minLength={5}
            maxLength={4000}
          />
        </label>
        <label className="consent">
          <input type="checkbox" name="souhlas" required />
          <span>
            Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky.
            Více v <a href={privacyHref}>zásadách ochrany osobních údajů</a>.
          </span>
        </label>
        <button
          type="submit"
          data-form-submit
          className="btn btn-primary form-submit"
        >
          Odeslat poptávku
        </button>
        <p
          className="form-status"
          data-form-status
          role="status"
          aria-live="polite"
          hidden
        />
        <p className="form-note">
          Nezávazně — ozveme se v pracovní době. Poptávka jde na{" "}
          {kinlesConfig.email}. Spěchá-li to, volejte {kinlesConfig.phone}.
        </p>
      </form>
    </>
  );
}
