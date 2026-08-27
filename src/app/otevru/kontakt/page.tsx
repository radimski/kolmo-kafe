import { otevruConfig } from "@/sites/otevru/config";

export default function OtevruKontaktPage() {
  return (
    <div className="otevru-section-light">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="otevru-title text-[#004c93]">Rychlý kontakt</p>
        <h1 className="mt-3 text-4xl font-bold text-[#2f333b]">Kontakt</h1>
        <p className="mt-4 text-lg text-[#717479]">
          Jsme k dispozici každý den. Před osobní návštěvou prosím zavolejte.
        </p>

        <a
          href={otevruConfig.phoneHref}
          className="otevru-btn-orange mt-8 inline-flex items-center justify-center rounded-md px-6 py-4 text-lg font-bold"
        >
          Zavolat {otevruConfig.phone}
        </a>

        <dl className="otevru-card mt-8 space-y-6 rounded-lg p-8">
          <div>
            <dt className="text-sm text-[#919499]">E-mail</dt>
            <dd className="mt-1 text-lg">
              <a
                href={`mailto:${otevruConfig.email}`}
                className="font-semibold text-[#004c93] hover:underline"
              >
                {otevruConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">Adresa</dt>
            <dd className="mt-1 text-lg text-[#484d55]">
              {otevruConfig.address}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">Provozní doba</dt>
            <dd className="mt-1 text-lg text-[#484d55]">
              {otevruConfig.hours}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">Firma</dt>
            <dd className="mt-1 text-lg text-[#484d55]">
              {otevruConfig.name} · IČO {otevruConfig.ico} · DIČ{" "}
              {otevruConfig.dic}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
