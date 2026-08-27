import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Workspace",
  description: "Weby pro otevru.cz, kinles.cz a Kolmo kafe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
