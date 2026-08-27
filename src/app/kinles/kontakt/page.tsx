import { kinlesConfig } from "@/sites/kinles/config";

export default function KinlesKontaktPage() {
  return (
    <div className="bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Obraťte se na nás s poptávkou nebo technickou konzultací.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <dl className="rounded-2xl border border-zinc-200 p-8">
            <dt className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Hlučín
            </dt>
            <dd className="mt-4 space-y-3 text-zinc-700">
              <p>{kinlesConfig.office}</p>
              <p>{kinlesConfig.hours}</p>
            </dd>
          </dl>
          <dl className="rounded-2xl border border-zinc-200 p-8">
            <dt className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Sídlo společnosti
            </dt>
            <dd className="mt-4 text-zinc-700">{kinlesConfig.seat}</dd>
          </dl>
        </div>
        <dl className="mt-6 space-y-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
          <div>
            <dt className="text-sm text-zinc-500">Telefon</dt>
            <dd className="mt-1 text-xl font-semibold">
              <a href={kinlesConfig.phoneHref} className="hover:text-orange-600">
                {kinlesConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Obchod</dt>
            <dd className="mt-1 text-lg">
              <a
                href={`mailto:${kinlesConfig.emailSales}`}
                className="hover:text-orange-600"
              >
                {kinlesConfig.emailSales}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">E-mail</dt>
            <dd className="mt-1 text-lg">
              <a
                href={`mailto:${kinlesConfig.email}`}
                className="hover:text-orange-600"
              >
                {kinlesConfig.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
