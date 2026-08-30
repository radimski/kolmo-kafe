import type { MetadataRoute } from "next";
import { kolmoConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", kolmoConfig.url).href,
  };
}
