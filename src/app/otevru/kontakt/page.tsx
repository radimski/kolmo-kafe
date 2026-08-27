import { otevruConfig } from "@/sites/otevru/config";

export default function OtevruKontaktPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="mt-4 text-lg text-slate-400">
          Jsme k dispozici každý den. Před osobní návštěvou prosím zavolejte.
        </p>
        <dl className="mt-10 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div>
            <dt className="text-sm text-slate-500">Telefon</dt>
            <dd className="mt-1 text-xl font-semibold">
              <a href={otevruConfig.phoneHref} className="hover:text-amber-400">
                {otevruConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">E-mail</dt>
            <dd className="mt-1 text-lg">
              <a
                href={`mailto:${otevruConfig.email}`}
                className="hover:text-amber-400"
              >
                {otevruConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Adresa</dt>
            <dd className="mt-1 text-lg">{otevruConfig.address}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Provozní doba</dt>
            <dd className="mt-1 text-lg">{otevruConfig.hours}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Firma</dt>
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
