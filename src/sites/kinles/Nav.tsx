import Link from "next/link";
import { kinlesConfig } from "./config";

const links = [
  { href: "/kinles/sluzby", label: "Služby" },
  { href: "/kinles#o-firme", label: "O firmě" },
  { href: "/kinles/kontakt", label: "Kontakt" },
] as const;

export function KinlesNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/kinles" className="text-xl font-bold tracking-tight text-zinc-900">
          {kinlesConfig.brand}
          <span className="ml-1 text-sm font-medium text-orange-600">OSTRAVA</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-orange-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={kinlesConfig.phoneHref}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Poptat nabídku
        </a>
      </div>
    </header>
  );
}
