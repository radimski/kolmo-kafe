import Link from "next/link";
import { kinlesConfig } from "./config";

export function KinlesFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-semibold text-zinc-900">{kinlesConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-600">
            IČO {kinlesConfig.ico} · DIČ {kinlesConfig.dic}
          </p>
          <p className="mt-1 text-sm text-zinc-600">{kinlesConfig.registry}</p>
        </div>
        <div className="text-sm text-zinc-600">
          <p>{kinlesConfig.office}</p>
          <a href={kinlesConfig.phoneHref} className="mt-2 block hover:text-orange-600">
            {kinlesConfig.phone}
          </a>
          <a
            href={`mailto:${kinlesConfig.email}`}
            className="mt-1 block hover:text-orange-600"
          >
            {kinlesConfig.email}
          </a>
          <Link href="/" className="mt-4 block text-zinc-400 hover:text-zinc-600">
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
