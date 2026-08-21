import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["pt", "en"] as const;
  const lastModified = new Date("2026-08-21T00:00:00-03:00");
  return languages.map((lang) => ({
      url: `https://www.nicoletrc.com/${lang}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "pt-BR": "https://www.nicoletrc.com/pt",
          en: "https://www.nicoletrc.com/en",
        },
      },
    }));
}
