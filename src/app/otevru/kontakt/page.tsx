import { otevruConfig } from "@/sites/otevru/config";

export default function OtevruKontaktPage() {
  return (
    <div className="bg-[#f4f4f4] text-[#484d55]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold text-[#2f333b]">Kontakt</h1>
        <p className="mt-4 text-lg text-[#919499]">
          Jsme k dispozici každý den. Před osobní návštěvou prosím zavolejte.
        </p>
        <dl className="mt-10 space-y-6 rounded-xl border border-[#ddd] bg-white p-8 shadow-sm">
          <div>
            <dt className="text-sm text-[#919499]">Telefon</dt>
            <dd className="mt-1 text-xl font-semibold text-[#ff8800]">
              <a href={otevruConfig.phoneHref} className="hover:underline">
                {otevruConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">E-mail</dt>
            <dd className="mt-1 text-lg">
              <a
                href={`mailto:${otevruConfig.email}`}
                className="hover:text-[#ff8800]"
              >
                {otevruConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">Adresa</dt>
            <dd className="mt-1 text-lg">{otevruConfig.address}</dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">Provozní doba</dt>
            <dd className="mt-1 text-lg">{otevruConfig.hours}</dd>
          </div>
          <div>
            <dt className="text-sm text-[#919499]">Firma</dt>
            <dd className="mt-1 text-lg">
              {otevruConfig.name} · IČO {otevruConfig.ico} · DIČ{" "}
              {otevruConfig.dic}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
