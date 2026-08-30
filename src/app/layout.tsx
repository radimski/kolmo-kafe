import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Space_Grotesk } from "next/font/google";
import { FormRouteBinder } from "@websites/form-engine/client";
import { Nav } from "@/components/Nav";
import { HoursBar } from "@/components/HoursBar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { kolmoConfig } from "@/config/site";
import "./globals.css";
import "./kolmo.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-kolmo",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-kolmo-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(kolmoConfig.url),
  title: `${kolmoConfig.name} | Bistro na cyklostezce u Olešné`,
  description: kolmoConfig.tagline,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: kolmoConfig.name,
    title: `${kolmoConfig.name} | Bistro na cyklostezce u Olešné`,
    description: kolmoConfig.shortDescription,
    url: kolmoConfig.url,
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: kolmoConfig.name,
    description: kolmoConfig.shortDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: kolmoConfig.name,
  url: kolmoConfig.url,
  telephone: "+420725311139",
  email: kolmoConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nad Přehradou 2483",
    postalCode: "738 01",
    addressLocality: "Frýdek-Místek",
    addressCountry: "CZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.6881, longitude: 18.3536 },
  sameAs: [kolmoConfig.facebook],
  description: kolmoConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${spaceGrotesk.variable} ${lora.variable} h-full`}>
      <body
        data-form-endpoint="/api/form"
        data-turnstile-site-key={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
        data-turnstile-theme="dark"
        className="kolmo-root flex min-h-full flex-col font-[family-name:var(--font-kolmo)] antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Nav />
        <HoursBar />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
        <Script src="/form.js" strategy="beforeInteractive" />
        <FormRouteBinder />
        <a
          href={kolmoConfig.phoneHref}
          className="kolmo-pill kolmo-btn-cream fixed bottom-5 right-5 z-40 px-5 py-3 text-sm font-semibold shadow-lg sm:hidden"
        >
          Zavolat
        </a>
      </body>
    </html>
  );
}
