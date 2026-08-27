import Link from "next/link";
import { otevruConfig } from "./config";

export function OtevruFooter() {
  return (
    <footer className="bg-[#2f333b] text-white">
      <div className="otevru-lime-bar h-1 w-full" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-semibold">{otevruConfig.name}</p>
          <p className="mt-2 text-sm text-[#b1b4b9]">
            IČO {otevruConfig.ico} · DIČ {otevruConfig.dic}
          </p>
          <p className="mt-1 text-sm text-[#b1b4b9]">{otevruConfig.address}</p>
        </div>
        <div className="text-sm text-[#b1b4b9]">
          <a href={otevruConfig.phoneHref} className="block hover:text-[#acf53d]">
            {otevruConfig.phone}
          </a>
          <a
            href={`mailto:${otevruConfig.email}`}
            className="mt-1 block hover:text-[#acf53d]"
          >
            {otevruConfig.email}
          </a>
          <Link href="/" className="mt-4 block text-[#919499] hover:text-white">
            ← Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
