export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <main className="w-full max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Website workspace
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Ready to build
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Your Next.js starter is set up with TypeScript and Tailwind CSS. Share
          your rules and project details, and we&apos;ll start building.
        </p>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              src/app
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Pages, layouts, and routes for your sites.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              projects/
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A folder for each website project you work on.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
