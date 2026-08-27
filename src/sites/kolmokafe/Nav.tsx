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
    <header className="sticky top-0 z-40 border-b border-[#2c2825]/5 bg-[#fffdf9]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/kolmokafe" className="flex items-center gap-3">
          <div className="kolmo-logo-panel rounded-lg px-3 py-2">
            <Image
              src="/kolmokafe/logo.png"
              alt={kolmoConfig.name}
              width={100}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6b5c52] transition hover:text-[#2c2825]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={kolmoConfig.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-pill bg-[#7d9b84] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6d8b74]"
        >
          Facebook
        </a>
      </div>
    </header>
  );
}
