
import type { MetadataRoute } from "next";
import { SITE } from "./data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE.url.replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
