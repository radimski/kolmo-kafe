import Link from "next/link";
import { otevruConfig } from "./config";

const links = [
  { href: "/otevru#sluzby", label: "Služby" },
  { href: "/otevru#o-nas", label: "O nás" },
  { href: "/otevru/kontakt", label: "Kontakt" },
] as const;

export function OtevruNav() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="otevru-lime-bar h-1.5 w-full" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/otevru" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-[#484d55]">
            {otevruConfig.brand}
            <span className="font-semibold text-[#919499]">.cz</span>
          </span>
          <span className="text-xs font-medium text-[#919499]">
            Zámečnická pohotovost
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#484d55] transition hover:text-[#2f333b]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={otevruConfig.phoneHref}
          className="otevru-btn-primary rounded-md px-4 py-2 text-sm font-semibold"
        >
          {otevruConfig.phone}
        </a>
      </div>
    </header>
  );
}
