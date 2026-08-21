import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../home";

const languages = ["pt", "en"] as const;
type Lang = (typeof languages)[number];

const seo = {
  pt: {
    title: "Nicole Costa — Relacionamento com Clientes | NicoleTrc",
    description: "Nicole Costa atua no relacionamento com clientes e desenvolvimento de negócios na AmeerTrc em São Paulo.",
    locale: "pt_BR",
    role: "Relacionamento com Clientes e Desenvolvimento de Negócios",
  },
  en: {
    title: "Nicole Costa — Client Relations | NicoleTrc",
    description: "Nicole Costa supports client relations and business development at AmeerTrc in São Paulo.",
    locale: "en_US",
    role: "Client Relations and Business Development",
  },
} satisfies Record<Lang, { title: string; description: string; locale: string; role: string }>;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) return {};
  const current = seo[lang as Lang];
  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `https://www.nicoletrc.com/${lang}`,
      siteName: "NicoleTrc",
      type: "profile",
      locale: current.locale,
      images: [{ url: "/nicole-costa.jpg", width: 676, height: 944, alt: "Nicole Costa" }],
    },
  };
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  const current = seo[lang as Lang];
  const pageUrl = `https://www.nicoletrc.com/${lang}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.nicoletrc.com/#website",
        url: "https://www.nicoletrc.com/",
        name: "NicoleTrc",
        inLanguage: ["pt-BR", "en"],
      },
      {
        "@type": "Organization",
        "@id": "https://www.ameertrc.com/#organization",
        name: "AmeerTrc",
        url: "https://www.ameertrc.com/",
      },
      {
        "@type": "Person",
        "@id": "https://www.nicoletrc.com/#nicole-costa",
        name: "Nicole Costa",
        url: pageUrl,
        image: "https://www.nicoletrc.com/nicole-costa.jpg",
        jobTitle: current.role,
        worksFor: { "@id": "https://www.ameertrc.com/#organization" },
        sameAs: ["https://www.instagram.com/niccoxtaa"],
        address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: current.title,
        description: current.description,
        inLanguage: lang === "pt" ? "pt-BR" : "en",
        mainEntity: { "@id": "https://www.nicoletrc.com/#nicole-costa" },
        isPartOf: { "@id": "https://www.nicoletrc.com/#website" },
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <Home initialLang={lang as Lang} />
  </>;
}
