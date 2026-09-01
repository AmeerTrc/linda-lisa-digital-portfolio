import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../home";

const languages = ["pt", "en"] as const;
type Lang = (typeof languages)[number];

const seo = {
  pt: { title: "Desconhecido", description: "Desconhecido", locale: "pt_BR" },
  en: { title: "Unknown", description: "Unknown", locale: "en_US" },
} satisfies Record<Lang, { title: string; description: string; locale: string }>;

export function generateStaticParams() { return languages.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) return {};
  const current = seo[lang as Lang];
  return {
    title: current.title,
    description: current.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/${lang}`, languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" } },
    openGraph: { title: current.title, description: current.description, type: "website", locale: current.locale },
  };
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  return <Home initialLang={lang as Lang} />;
}
