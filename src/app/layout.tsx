import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: `${kolmoConfig.name} | Bistro na cyklostezce u Olešné`,
  description: kolmoConfig.tagline,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: kolmoConfig.name,
  url: "https://www.kolmokafe.cz/",
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
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "256", bestRating: "5" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${spaceGrotesk.variable} h-full`}>
      <body
        data-form-endpoint="/api/form"
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
