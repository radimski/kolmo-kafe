import Link from "next/link";
import { kolmoConfig } from "./config";

export function KolmoFooter() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-wide">{kolmoConfig.name}</p>
          <p className="mt-2 text-sm text-stone-500">{kolmoConfig.location}</p>
        </div>
        <div className="text-sm text-stone-400">
          <a href={kolmoConfig.phoneHref} className="block hover:text-white">
            {kolmoConfig.phone}
          </a>
          <a
            href={`mailto:${kolmoConfig.email}`}
            className="mt-1 block hover:text-white"
          >
            {kolmoConfig.email}
          </a>
          <Link href="/" className="mt-4 block text-stone-600 hover:text-stone-400">
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
