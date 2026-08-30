import type { MetadataRoute } from "next";
import { kolmoConfig } from "@/config/site";

const paths = [
  "/",
  "/kontakt",
  "/menu",
  "/akce",
  "/ochrana-osobnich-udaju",
  "/cookies",
  "/provozovatel",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL(kolmoConfig.url);
  const now = new Date();

  return paths.map((path) => ({
    url: new URL(path, base).href,
    lastModified: now,
    changeFrequency:
      path === "/" || path === "/akce" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/kontakt" || path === "/menu" || path === "/akce"
          ? 0.85
          : 0.4,
  }));
}
