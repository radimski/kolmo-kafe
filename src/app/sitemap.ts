import type { MetadataRoute } from "next";
import { kinlesConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL(kinlesConfig.url);
  const now = new Date();

  return [
    {
      url: base.href,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/ochrana-osobnich-udaju", base).href,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: new URL("/cookies", base).href,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: new URL("/provozovatel", base).href,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
