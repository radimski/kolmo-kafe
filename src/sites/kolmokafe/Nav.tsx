import Image from "next/image";
import Link from "next/link";
import { kolmoConfig } from "./config";

const links = [
  { href: "/kolmokafe", label: "Domů" },
  { href: "/kolmokafe/menu", label: "Menu" },
  { href: "/kolmokafe/kontakt", label: "Kontakt" },
] as const;

export function KolmoNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#f2ece3]/8 bg-[#131619]/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/kolmokafe" className="flex items-center">
          <Image
            src="/kolmokafe/logo.png"
            alt={kolmoConfig.name}
            width={110}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[#9a948c] transition hover:text-[#f2ece3]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={kolmoConfig.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-pill kolmo-btn-ghost px-4 py-2 text-sm font-medium"
        >
          Facebook
        </a>
      </div>
    </header>
  );
}
