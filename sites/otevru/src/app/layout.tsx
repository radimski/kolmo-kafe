import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { otevruConfig } from "@/config/site";
import "./globals.css";
import "./otevru.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-otevru",
});

export const metadata: Metadata = {
  title: `${otevruConfig.brand} | Zámečnická pohotovost Frýdek-Místek`,
  description: otevruConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${dmSans.variable} h-full`}>
      <body
        data-form-endpoint="/api/form"
        className="otevru-root flex min-h-full flex-col font-[family-name:var(--font-otevru)] antialiased"
      >
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
        <a
          href={otevruConfig.phoneHref}
          className="otevru-btn-orange fixed bottom-5 right-5 z-40 rounded-full px-5 py-3 text-sm font-bold shadow-lg sm:hidden"
        >
          Zavolat
        </a>
      </body>
    </html>
  );
}
