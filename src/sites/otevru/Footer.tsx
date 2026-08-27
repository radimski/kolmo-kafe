import Link from "next/link";
import { otevruConfig } from "./config";

export function OtevruFooter() {
  return (
    <footer className="otevru-section-dark">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="otevru-title text-[#acf53d]">Firma</p>
          <p className="mt-3 font-semibold text-white">{otevruConfig.name}</p>
          <p className="mt-2 text-sm">IČO {otevruConfig.ico}</p>
          <p className="text-sm">DIČ {otevruConfig.dic}</p>
        </div>
        <div>
          <p className="otevru-title text-[#acf53d]">Adresa</p>
          <p className="mt-3 text-sm">{otevruConfig.address}</p>
          <p className="mt-2 text-sm">{otevruConfig.hours}</p>
        </div>
        <div>
          <p className="otevru-title text-[#acf53d]">Kontakt</p>
          <a
            href={otevruConfig.phoneHref}
            className="mt-3 block font-semibold text-white hover:text-[#acf53d]"
          >
            {otevruConfig.phone}
          </a>
          <a
            href={`mailto:${otevruConfig.email}`}
            className="mt-1 block text-sm hover:text-[#acf53d]"
          >
            {otevruConfig.email}
          </a>
          <Link href="/" className="mt-4 block text-sm text-white/40 hover:text-white">
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
