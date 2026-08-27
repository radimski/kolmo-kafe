import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { kolmoConfig } from "@/config/site";
import "./globals.css";
import "./kolmo.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-kolmo",
});

export const metadata: Metadata = {
  title: `${kolmoConfig.name} | Bistro u přehrady Olešná`,
  description: kolmoConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${spaceGrotesk.variable} h-full`}>
      <body
        data-form-endpoint="/api/form"
        className="kolmo-root flex min-h-full flex-col font-[family-name:var(--font-kolmo)] antialiased"
      >
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
        <Script src="/form.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
