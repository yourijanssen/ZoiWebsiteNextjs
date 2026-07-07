import type { MetadataRoute } from "next";
import { getDetailServices, languages } from "@/lib/site-content";
import { languageUrls, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homePages = languages.map((language) => ({
    url: languageUrls[language],
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: language === "el" ? 1 : 0.9,
  }));

  const aboutPages = languages.map((language) => ({
    url: `${siteUrl}/sxetika?lang=${language}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const servicePages = languages.flatMap((language) =>
    getDetailServices(language).map((service) => ({
      url: `${siteUrl}/ypiresies/${service.slug}?lang=${language}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...homePages, ...aboutPages, ...servicePages];
}
