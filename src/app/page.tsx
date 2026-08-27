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
          Next.js starter s TypeScriptem a Tailwind CSS. Právní šablony jsou
          připravené pro českou legislativu — až budete sdílet svá pravidla,
          přizpůsobíme je pro ČR.
        </p>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              src/app
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Stránky, layouty a routy pro vaše weby.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              projects/
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Složka pro jednotlivé webové projekty a poznámky.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
