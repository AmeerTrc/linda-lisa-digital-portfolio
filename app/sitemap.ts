import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["pt", "en"] as const;
  return languages.map((lang) => ({
      url: `https://www.nicoletrc.com/${lang}`,
      lastModified: new Date(),
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
