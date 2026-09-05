import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../home";

const languages = ["pt", "en"] as const;
const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : "https://linda-lisa-digital-portfolio-production.up.railway.app";
type Lang = (typeof languages)[number];

const seo = {
  pt: {
    title: "Larissa Becker — Relacionamento com Clientes | Larissa Becker",
    description: "Larissa Becker atua no relacionamento com clientes e desenvolvimento de negócios na AmeerTrc em São Paulo.",
    locale: "pt_BR",
    role: "Relacionamento com Clientes e Desenvolvimento de Negócios",
  },
  en: {
    title: "Larissa Becker — Client Relations | Larissa Becker",
    description: "Larissa Becker supports client relations and business development at AmeerTrc in São Paulo.",
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
      url: `${siteUrl}/${lang}`,
      siteName: "Larissa Becker",
      type: "profile",
      locale: current.locale,
    },
  };
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  const current = seo[lang as Lang];
  const pageUrl = `${siteUrl}/${lang}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Larissa Becker",
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
        "@id": `${siteUrl}/#larissa-becker`,
        name: "Larissa Becker",
        url: pageUrl,
        jobTitle: current.role,
        worksFor: { "@id": "https://www.ameertrc.com/#organization" },
        sameAs: ["https://www.instagram.com/ameer_trc"],
        address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: current.title,
        description: current.description,
        inLanguage: lang === "pt" ? "pt-BR" : "en",
        mainEntity: { "@id": `${siteUrl}/#larissa-becker` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <Home initialLang={lang as Lang} />
  </>;
}
