import Link from "next/link";
import { otevruConfig } from "./config";

export function OtevruFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-semibold text-white">{otevruConfig.name}</p>
          <p className="mt-2 text-sm text-slate-400">
            IČO {otevruConfig.ico} · DIČ {otevruConfig.dic}
          </p>
          <p className="mt-1 text-sm text-slate-400">{otevruConfig.address}</p>
        </div>
        <div className="text-sm text-slate-400">
          <a href={otevruConfig.phoneHref} className="block hover:text-amber-400">
            {otevruConfig.phone}
          </a>
          <a
            href={`mailto:${otevruConfig.email}`}
            className="mt-1 block hover:text-amber-400"
          >
            {otevruConfig.email}
          </a>
          <Link href="/" className="mt-4 block text-slate-500 hover:text-slate-300">
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
