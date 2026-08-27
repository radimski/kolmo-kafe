import Link from "next/link";
import { kolmoConfig } from "@/config/site";
import { CookieSettingsButton } from "@/components/CookieBanner";

const legalLinks = [
  { href: "/provozovatel", label: "Provozovatel" },
  { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
  { href: "/cookies", label: "Cookies" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[#f2ece3]/8 bg-[#1a1d21]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-wide text-[#f2ece3]">
            {kolmoConfig.name}
          </p>
          <p className="mt-2 text-sm text-[#9a948c]">{kolmoConfig.location}</p>
          <p className="mt-1 text-sm text-[#9a948c]">{kolmoConfig.address}</p>
          <p className="mt-2 text-sm text-[#c8a27a]/90">
            {kolmoConfig.hoursTypical}
          </p>
        </div>
        <div className="text-sm text-[#9a948c]">
          <a
            href={kolmoConfig.phoneHref}
            className="block transition hover:text-[#c8a27a]"
          >
            {kolmoConfig.phone}
          </a>
          <a
            href={`mailto:${kolmoConfig.email}`}
            className="mt-1 block transition hover:text-[#c8a27a]"
          >
            {kolmoConfig.email}
          </a>
          <a
            href={kolmoConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block transition hover:text-[#c8a27a]"
          >
            Facebook
          </a>
        </div>
        <nav aria-label="Právní informace" className="text-sm text-[#9a948c]">
          <ul className="space-y-1.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#c8a27a]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
