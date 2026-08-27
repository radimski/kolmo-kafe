import { kolmoConfig } from "@/sites/kolmokafe/config";

function MenuSection({
  title,
  description,
  items,
  accent,
}: {
  title: string;
  description: string;
  items: readonly { name: string; price: string }[];
  accent: string;
}) {
  return (
    <section className="kolmo-card kolmo-arch p-8">
      <span
        className={`kolmo-pill inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider ${accent}`}
      >
        {title}
      </span>
      <p className="mt-4 text-sm text-[#6b5c52]">{description}</p>
      <ul className="mt-6">
        {items.map((item) => (
          <li
            key={item.name}
            className="kolmo-menu-row flex items-baseline justify-between gap-4 py-4"
          >
            <span className="font-medium text-[#2c2825]">{item.name}</span>
            <span className="shrink-0 text-sm text-[#8a8178]">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function KolmoMenuPage() {
  return (
    <div className="kolmo-soft-glow">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7d9b84]">
          Menu
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[#2c2825] sm:text-5xl">
          Jednoduché. Fresh. Kolmo.
        </h1>
        <p className="mt-4 max-w-2xl text-[#6b5c52]">
          Nabídka se mění podle sezóny. Ceny jsou orientační — aktuální výběr
          na místě nebo na Facebooku.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <MenuSection
            title="Káva"
            description="Výběrová káva připravená s péčí — od espresa po filtr."
            items={kolmoConfig.menu.coffee}
            accent="bg-[#e8f0e6] text-[#4a5f4e]"
          />
          <MenuSection
            title="Sladké"
            description="Moučníky a sladké doplnění, které se mění podle dne."
            items={kolmoConfig.menu.sweet}
            accent="bg-[#f6ebe3] text-[#7a5f52]"
          />
          <MenuSection
            title="Slané"
            description="Lehké bistro pokrmy na celý den u vody."
            items={kolmoConfig.menu.savory}
            accent="bg-[#e5f1f5] text-[#4f6570]"
          />
        </div>

        <div className="kolmo-card kolmo-arch mt-8 p-8">
          <h2 className="text-xl font-semibold text-[#2c2825]">Sezónní akce</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {kolmoConfig.events.map((event) => (
              <li
                key={event}
                className="rounded-2xl bg-[#faf7f2] px-4 py-3 text-sm text-[#6b5c52]"
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
