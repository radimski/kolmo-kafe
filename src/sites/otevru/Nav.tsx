import Link from "next/link";
import { otevruConfig } from "./config";

const links = [
  { href: "/otevru#sluzby", label: "Služby" },
  { href: "/otevru#o-nas", label: "O nás" },
  { href: "/otevru/kontakt", label: "Kontakt" },
] as const;

export function OtevruNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/otevru" className="text-lg font-bold tracking-tight text-white">
          {otevruConfig.brand}
          <span className="font-normal text-slate-400">.cz</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={otevruConfig.phoneHref}
          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          {otevruConfig.phone}
        </a>
      </div>
    </header>
  );
}
