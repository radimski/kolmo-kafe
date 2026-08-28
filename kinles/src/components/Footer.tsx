import Link from "next/link";
import { kinlesConfig } from "@/config/site";
import { CookieSettingsButton } from "@/components/CookieBanner";

const legalLinks = [
  { href: "/provozovatel", label: "Provozovatel" },
  { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
  { href: "/cookies", label: "Cookies" },
] as const;

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-row">
        <span>
          © {new Date().getFullYear()} {kinlesConfig.name} · IČO{" "}
          {kinlesConfig.ico} · {kinlesConfig.street}, {kinlesConfig.zip}{" "}
          {kinlesConfig.city}
        </span>
        <span className="foot-links">
          {kinlesConfig.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <CookieSettingsButton />
        </span>
      </div>
    </footer>
  );
}
