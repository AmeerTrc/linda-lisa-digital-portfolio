type Lang = "pt" | "en";

export default function AboutSection({ lang }: { lang: Lang }) {
  return <section className="section about"><h2>{lang === "pt" ? "Desconhecido" : "Unknown"}</h2></section>;
}
