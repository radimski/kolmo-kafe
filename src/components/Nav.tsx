"use client";

import { useState } from "react";
import Link from "next/link";
import { KolmoLogo } from "@/components/KolmoLogo";
import { kolmoConfig } from "@/config/site";

const links = [
  { href: "/", label: "Domů" },
  { href: "/menu", label: "Menu" },
  { href: "/akce", label: "Akce" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#f2ece3]/8 bg-[#131619]/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="kolmo-logo-nav shrink-0">
          <KolmoLogo variant="nav" />
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
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={kolmoConfig.phoneHref}
            className="kolmo-pill kolmo-btn-ghost hidden px-4 py-2 text-sm font-medium sm:inline-flex"
          >
            {kolmoConfig.phone}
          </a>
          <a
            href={kolmoConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="kolmo-pill kolmo-btn-ghost hidden px-4 py-2 text-sm font-medium md:inline-flex"
          >
            Facebook
          </a>
          <button
            type="button"
            className="kolmo-pill kolmo-btn-ghost px-4 py-2 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="kolmo-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Zavřít" : "Menu"}
          </button>
        </div>
      </div>
      <div
        id="kolmo-mobile-nav"
        className={`border-t border-[#f2ece3]/8 bg-[#131619] md:hidden ${open ? "block" : "hidden"}`}
        hidden={!open}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-[#f2ece3]/90 transition hover:bg-[#f2ece3]/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={kolmoConfig.phoneHref}
            className="mt-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[#c8a27a]"
          >
            {kolmoConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
