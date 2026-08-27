import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { KinlesNav } from "@/sites/kinles/Nav";
import { KinlesFooter } from "@/sites/kinles/Footer";
import { kinlesConfig } from "@/sites/kinles/config";

const ibm = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kinles",
});

export const metadata: Metadata = {
  title: `${kinlesConfig.brand} Ostrava — ${kinlesConfig.tagline}`,
  description: kinlesConfig.lead,
};

export default function KinlesLayout({ children }: LayoutProps<"/kinles">) {
  return (
    <div className={`${ibm.variable} font-[family-name:var(--font-kinles)]`}>
      <KinlesNav />
      {children}
      <KinlesFooter />
    </div>
  );
}
