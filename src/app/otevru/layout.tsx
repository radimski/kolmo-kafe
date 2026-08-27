import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { OtevruNav } from "@/sites/otevru/Nav";
import { OtevruFooter } from "@/sites/otevru/Footer";
import { otevruConfig } from "@/sites/otevru/config";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-otevru",
});

export const metadata: Metadata = {
  title: `${otevruConfig.brand} | Zámečnická pohotovost Frýdek-Místek`,
  description: otevruConfig.tagline,
};

export default function OtevruLayout({ children }: LayoutProps<"/otevru">) {
  return (
    <div className={`${dmSans.variable} font-[family-name:var(--font-otevru)]`}>
      <OtevruNav />
      {children}
      <OtevruFooter />
      <a
        href={otevruConfig.phoneHref}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 sm:hidden"
      >
        Zavolat
      </a>
    </div>
  );
}
