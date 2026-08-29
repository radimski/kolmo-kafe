import type { Metadata } from "next";
import Script from "next/script";
import { Big_Shoulders, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { FormRouteBinder } from "@websites/form-engine/client";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { kinlesConfig } from "@/config/site";
import "./globals.css";
import "./kinles.css";

const display = Big_Shoulders({
  subsets: ["latin", "latin-ext"],
  variable: "--font-kinles-display",
  fallback: ["Arial Narrow", "sans-serif"],
  adjustFontFallback: false,
});

const body = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kinles-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-kinles-mono",
});

export const metadata: Metadata = {
  title: kinlesConfig.title,
  description: kinlesConfig.description,
  robots: { index: true, follow: true },
  alternates: { canonical: kinlesConfig.url },
  openGraph: {
    type: "website",
    siteName: "KINLES Ostrava",
    title: kinlesConfig.title,
    description: kinlesConfig.shortDescription,
    url: kinlesConfig.url,
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary",
    title: kinlesConfig.title,
    description: kinlesConfig.shortDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: kinlesConfig.name,
  url: kinlesConfig.url,
  telephone: kinlesConfig.phoneRaw,
  email: kinlesConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: kinlesConfig.street,
    postalCode: kinlesConfig.zip,
    addressLocality: kinlesConfig.city,
    addressCountry: "CZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.8967, longitude: 18.1905 },
  areaServed: kinlesConfig.region,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "3.6", reviewCount: "3", bestRating: "5" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body
        data-form-endpoint="/api/form"
        data-turnstile-site-key={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
        className="kinles-root"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
        <Script src="/form.js" strategy="beforeInteractive" />
        <FormRouteBinder />
        <a className="navcta mobile-call" href={kinlesConfig.phoneHref}>
          Zavolat
        </a>
      </body>
    </html>
  );
}
