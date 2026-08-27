import Image from "next/image";
import Link from "next/link";
import { kolmoConfig } from "./config";

const links = [
  { href: "/kolmokafe", label: "Domů" },
  { href: "/kolmokafe/menu", label: "Menu" },
  { href: "/kolmokafe#kde", label: "Kde nás najdete" },
] as const;

export function KolmoNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#1a1d21]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/kolmokafe" className="flex items-center gap-3">
          <Image
            src="/kolmokafe/logo.png"
            alt={kolmoConfig.name}
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-stone-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={kolmoConfig.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-stone-300 transition hover:border-white/30 hover:text-white"
        >
          Facebook
        </a>
      </div>
    </header>
  );
}
