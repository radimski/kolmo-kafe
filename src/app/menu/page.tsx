import { kolmoConfig } from "@/config/site";

function MenuSection({
  index,
  title,
  description,
  items,
}: {
  index: string;
  title: string;
  description: string;
  items: readonly { name: string; price: string }[];
}) {
  return (
    <section className="kolmo-card rounded-2xl p-8">
      <span className="text-sm font-bold tracking-[0.2em] text-[#c8a27a]">
        {index}
      </span>
      <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-[#9a948c]">{description}</p>
      <ul className="mt-7">
        {items.map((item) => (
          <li
            key={item.name}
            className="kolmo-menu-row flex items-baseline justify-between gap-4 py-4"
          >
            <span className="font-medium text-[#f2ece3]">{item.name}</span>
            <span className="shrink-0 text-sm text-[#9a948c]">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function KolmoMenuPage() {
  return (
    <div className="kolmo-grid-lines">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
          Menu
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Jednoduché. Fresh. Na kole i pěšky.
        </h1>
        <p className="mt-4 max-w-2xl text-[#9a948c]">
          Nabídka se mění podle sezóny. Ceny jsou orientační — aktuální výběr
          najdete na místě nebo na Facebooku.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <MenuSection
            index="01"
            title="Káva"
            description="Výběrová káva připravená s péčí — od espresa po filtr."
            items={kolmoConfig.menu.coffee}
          />
          <MenuSection
            index="02"
            title="Sladké"
            description="Moučníky a sladké doplnění, které se mění podle dne."
            items={kolmoConfig.menu.sweet}
          />
          <MenuSection
            index="03"
            title="Slané"
            description="Lehké bistro pokrmy na celý den u vody."
            items={kolmoConfig.menu.savory}
          />
        </div>

        <div className="kolmo-surface mt-8 rounded-2xl p-8">
          <h2 className="text-xl font-semibold">Sezónní akce</h2>
          <p className="mt-3 text-sm text-[#9a948c]">
            Grilování, koktejly u vody a tematické večery — aktuální termíny
            na stránce{" "}
            <a href="/akce" className="text-[#c8a27a] hover:underline">
              Akce
            </a>{" "}
            nebo na Facebooku.
          </p>
        </div>
      </div>
    </div>
  );
}
