import type { Metadata } from "next";
import { Big_Shoulders, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { KinlesNav } from "@/sites/kinles/Nav";
import { KinlesFooter } from "@/sites/kinles/Footer";
import { kinlesConfig } from "@/sites/kinles/config";
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
  twitter: { card: "summary" },
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
  areaServed: kinlesConfig.region,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
};

export default function KinlesLayout({ children }: LayoutProps<"/kinles">) {
  return (
    <div
      className={`kinles-root ${display.variable} ${body.variable} ${mono.variable}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <KinlesNav />
      {children}
      <KinlesFooter />
    </div>
  );
}
