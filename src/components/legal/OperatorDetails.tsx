import { siteConfig, formatAddress, formatRegistryEntry } from "@/config/site";

export function OperatorDetails() {
  return (
    <dl className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300">
      <div>
        <dt className="font-medium text-zinc-900 dark:text-zinc-100">
          Provozovatel
        </dt>
        <dd>
          {siteConfig.name}
          {siteConfig.legalForm ? ` ${siteConfig.legalForm}` : ""}
        </dd>
      </div>
      <div>
        <dt className="font-medium text-zinc-900 dark:text-zinc-100">Sídlo</dt>
        <dd>{formatAddress()}</dd>
      </div>
      <div>
        <dt className="font-medium text-zinc-900 dark:text-zinc-100">IČO</dt>
        <dd>{siteConfig.ico}</dd>
      </div>
      {siteConfig.dic ? (
        <div>
          <dt className="font-medium text-zinc-900 dark:text-zinc-100">DIČ</dt>
          <dd>{siteConfig.dic}</dd>
        </div>
      ) : null}
      <div>
        <dt className="font-medium text-zinc-900 dark:text-zinc-100">
          Zápis v rejstříku
        </dt>
        <dd>{formatRegistryEntry()}</dd>
      </div>
      <div>
        <dt className="font-medium text-zinc-900 dark:text-zinc-100">Kontakt</dt>
        <dd>
          <a
            className="underline underline-offset-2"
            href={`mailto:${siteConfig.contact.email}`}
          >
            {siteConfig.contact.email}
          </a>
          {siteConfig.contact.phone ? (
            <>
              {" "}
              ·{" "}
              <a
                className="underline underline-offset-2"
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              >
                {siteConfig.contact.phone}
              </a>
            </>
          ) : null}
        </dd>
      </div>
    </dl>
  );
}
