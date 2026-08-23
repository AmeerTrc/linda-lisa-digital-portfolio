import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["pt", "en"] as const;
  const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : "https://linda-lisa-digital-portfolio-production.up.railway.app";
  const lastModified = new Date("2026-08-23T00:00:00-03:00");
  return languages.map((lang) => ({
      url: `${siteUrl}/${lang}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "pt-BR": `${siteUrl}/pt`,
          en: `${siteUrl}/en`,
        },
      },
    }));
}
