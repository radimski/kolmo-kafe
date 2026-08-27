import Link from "next/link";
import { siteConfig } from "@/config/site";

const legalLinks = [
  { href: "/provozovatel", label: "Provozovatel" },
  { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
  { href: "/cookies", label: "Cookies" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-50">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            IČO {siteConfig.ico}
            {siteConfig.dic ? ` · DIČ ${siteConfig.dic}` : ""}
          </p>
        </div>
        <nav aria-label="Právní informace">
          <ul className="flex flex-col gap-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
