import { kolmoConfig } from "@/sites/kolmokafe/config";

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; price: string }[];
}) {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
        {title}
      </h2>
      <ul className="mt-6 divide-y divide-white/5">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-4 py-4"
          >
            <span className="font-medium">{item.name}</span>
            <span className="shrink-0 text-stone-500">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function KolmoMenuPage() {
  return (
    <div className="kolmo-grid-bg">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.4em] text-stone-500">Menu</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Jednoduché. Fresh. Kolmo.
        </h1>
        <p className="mt-4 text-stone-400">
          Nabídka se mění podle sezóny. Ceny jsou orientační — aktuální výběr
          na místě nebo na Facebooku.
        </p>

        <div className="mt-14 space-y-14">
          <MenuSection title="Káva" items={kolmoConfig.menu.coffee} />
          <MenuSection title="Sladké" items={kolmoConfig.menu.sweet} />
          <MenuSection title="Slané" items={kolmoConfig.menu.savory} />
        </div>

        <div className="kolmo-menu-card mt-16 rounded-2xl p-8">
          <h2 className="text-lg font-semibold">Sezónní akce</h2>
          <ul className="mt-4 space-y-2 text-stone-400">
            {kolmoConfig.events.map((event) => (
              <li key={event}>· {event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
