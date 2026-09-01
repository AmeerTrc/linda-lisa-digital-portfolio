"use client";

import { useEffect } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: { unknown: "Desconhecido", languageLabel: "Selecionar idioma" },
  en: { unknown: "Unknown", languageLabel: "Select language" },
} satisfies Record<Lang, { unknown: string; languageLabel: string }>;

export default function Home({ initialLang = "pt" }: { initialLang?: Lang }) {
  const text = copy[initialLang];

  useEffect(() => {
    document.documentElement.lang = initialLang === "pt" ? "pt-BR" : "en";
    document.documentElement.dir = "ltr";
  }, [initialLang]);

  return (
    <main>
      <header>
        <div className="logo">Ameer<b>Trc</b></div>
        <div className="tools">
          <div className="langs" role="group" aria-label={text.languageLabel}>
            <a href="/en" hrefLang="en" lang="en" aria-current={initialLang === "en" ? "page" : undefined}>EN</a>
            <a href="/pt" hrefLang="pt-BR" lang="pt-BR" aria-current={initialLang === "pt" ? "page" : undefined}>PT</a>
          </div>
        </div>
      </header>
      <section className="hero" id="top">
        <div className="glow" />
        <div className="hero-copy"><h1><span>{text.unknown}</span></h1></div>
        <div className="art" aria-hidden="true">
          <div className="portrait-card"><b>?</b><i>{text.unknown}</i></div>
        </div>
      </section>
    </main>
  );
}
