
import type { MetadataRoute } from "next";
import { SITE, SUBJECTS } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Keep the website's canonical domain consistent.
  const baseUrl = SITE.url.replace(/\/+$/, "");

  // Important static website pages.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/subjects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/teachers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/plans`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic subject pages.
  const subjectPages: MetadataRoute.Sitemap = SUBJECTS.map((subject) => ({
    url: `${baseUrl}/subjects/${subject.slug}`,
    lastModified,
    changeFrequency:
      subject.status === "live" ? "weekly" : "monthly",
    priority: subject.status === "live" ? 0.9 : 0.65,
  }));

  // Combine all routes and prevent duplicate URLs.
  const allPages = [...staticPages, ...subjectPages];

  const uniquePages = Array.from(
    new Map(allPages.map((page) => [page.url, page])).values()
  );

  return uniquePages;
}
