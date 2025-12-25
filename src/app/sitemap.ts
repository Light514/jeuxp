import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jeuxp.com";

  // French pages (default)
  const frenchPages = [
    { url: "", priority: 1.0 },
    { url: "/defis", priority: 0.9 },
    { url: "/faq", priority: 0.7 },
    { url: "/groupes-evenements", priority: 0.8 },
    { url: "/a-propos", priority: 0.6 },
    { url: "/legal", priority: 0.3 },
  ];

  // English pages
  const englishPages = [
    { url: "/en", priority: 0.9 },
    { url: "/en/challenges", priority: 0.8 },
    { url: "/en/faq", priority: 0.6 },
    { url: "/en/groups-events", priority: 0.7 },
    { url: "/en/about", priority: 0.5 },
    { url: "/en/legal", priority: 0.2 },
  ];

  const allPages = [...frenchPages, ...englishPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
