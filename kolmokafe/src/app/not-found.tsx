import Link from "next/link";
import { kolmoConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="kolmo-grid-lines flex flex-1 items-center">
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold">Stránka nenalezena</h1>
        <p className="mt-4 text-[#9a948c]">
          Odkaz je neplatný nebo stránka už neexistuje.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="kolmo-pill kolmo-btn-cream inline-flex px-6 py-3 text-sm font-semibold"
          >
            Domů
          </Link>
          <Link
            href="/kontakt"
            className="kolmo-pill kolmo-btn-ghost inline-flex px-6 py-3 text-sm font-semibold"
          >
            Kontakt
          </Link>
          <a
            href={kolmoConfig.phoneHref}
            className="text-sm font-medium text-[#c8a27a] hover:underline"
          >
            {kolmoConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
