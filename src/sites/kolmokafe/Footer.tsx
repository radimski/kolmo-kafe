import Link from "next/link";
import { kolmoConfig } from "./config";

export function KolmoFooter() {
  return (
    <footer className="border-t border-[#2c2825]/8 bg-[#fffdf9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#2c2825]">{kolmoConfig.name}</p>
          <p className="mt-2 text-sm text-[#8a8178]">{kolmoConfig.location}</p>
        </div>
        <div className="text-sm text-[#6b5c52]">
          <a href={kolmoConfig.phoneHref} className="block hover:text-[#2c2825]">
            {kolmoConfig.phone}
          </a>
          <a
            href={`mailto:${kolmoConfig.email}`}
            className="mt-1 block hover:text-[#2c2825]"
          >
            {kolmoConfig.email}
          </a>
          <Link href="/" className="mt-4 block text-[#8a8178] hover:text-[#6b5c52]">
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
