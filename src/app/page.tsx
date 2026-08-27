import Link from "next/link";

const sites = [
  {
    href: "/otevru",
    name: "otevru.cz",
    description: "Zámečnická pohotovost Patrik Panenka",
    accent: "from-lime-400/15 to-stone-100",
    border: "hover:border-lime-400/40",
  },
  {
    href: "/kinles",
    name: "kinles.cz",
    description: "Protipožární dveře a stěny KINLES Ostrava",
    accent: "from-orange-600/20 to-slate-900",
    border: "hover:border-orange-500/50",
  },
  {
    href: "/kolmokafe",
    name: "Kolmo kafe",
    description: "Bistro-kavárna u přehrady Olešná",
    accent: "from-emerald-100/80 to-[#faf7f2]",
    border: "hover:border-emerald-300/60",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Website workspace
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Tři weby. Jeden workspace.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Vyberte projekt a prohlédněte si náhled. Každý web má vlastní design a
          strukturu.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {sites.map((site) => (
            <Link
              key={site.href}
              href={site.href}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br ${site.accent} p-6 transition ${site.border}`}
            >
              <div className="relative z-10">
                <h2 className="text-xl font-semibold">{site.name}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300">
                  {site.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-white">
                  Otevřít náhled →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
