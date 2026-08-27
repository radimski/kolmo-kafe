export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <main className="w-full max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Pracovní prostředí pro weby
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Připraveno k tvorbě
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Next.js starter s TypeScriptem a Tailwind CSS. Základní právní rámec
          pro české weby je nastaven — upravte údaje provozovatele v{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            src/config/site.ts
          </code>{" "}
          před spuštěním ostrého provozu.
        </p>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              Právní stránky
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Ochrana osobních údajů, cookies a identifikace provozovatele podle
              české legislativy.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              Cookie lišta
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Opt-in souhlas s odmítnutím, nastavením kategorií a bez spuštění
              trackingu před souhlasem.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
