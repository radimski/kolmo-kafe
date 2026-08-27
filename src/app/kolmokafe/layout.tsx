import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { KolmoNav } from "@/sites/kolmokafe/Nav";
import { KolmoFooter } from "@/sites/kolmokafe/Footer";
import { kolmoConfig } from "@/sites/kolmokafe/config";
import "./kolmo.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-kolmo",
});

export const metadata: Metadata = {
  title: `${kolmoConfig.name} | Bistro u přehrady Olešná`,
  description: kolmoConfig.tagline,
};

export default function KolmoLayout({ children }: LayoutProps<"/kolmokafe">) {
  return (
    <div
      className={`${spaceGrotesk.variable} kolmo-root font-[family-name:var(--font-kolmo)]`}
    >
      <KolmoNav />
      {children}
      <KolmoFooter />
    </div>
  );
}
