import Link from "next/link";
import { kolmoConfig } from "./config";

export function KolmoFooter() {
  return (
    <footer className="border-t border-[#f2ece3]/8 bg-[#1a1d21]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-wide text-[#f2ece3]">
            {kolmoConfig.name}
          </p>
          <p className="mt-2 text-sm text-[#9a948c]">{kolmoConfig.location}</p>
          <p className="mt-1 text-sm text-[#9a948c]">{kolmoConfig.address}</p>
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
          <Link
            href="/"
            className="mt-4 block text-[#f2ece3]/30 transition hover:text-[#9a948c]"
          >
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
