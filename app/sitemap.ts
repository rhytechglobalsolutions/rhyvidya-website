import type { MetadataRoute } from "next";
import { SITE, SUBJECTS } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-23");
  return [
    {
      url: `${SITE.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/teachers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...SUBJECTS.map((s) => ({
      url: `${SITE.url}/subjects/${s.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: s.status === "live" ? 0.9 : 0.7,
    })),
  ];
}
