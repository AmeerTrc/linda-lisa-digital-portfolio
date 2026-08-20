type Lang = "pt" | "en";

const content = {
  pt: {
    label: "Portfólio de demonstração",
    title: "Experiências criadas para apresentar possibilidades.",
    note: "Estes sites não são oficiais. São projetos demonstrativos criados exclusivamente para apresentação e avaliação pelos proprietários dos estabelecimentos. Marcas, nomes e imagens pertencem aos seus respectivos titulares.",
    badge: "Projeto demonstrativo",
    open: "Visualizar projeto",
    descriptions: [
      "Conceito digital premium criado para apresentar uma nova presença online ao proprietário do Majestoso.",
      "Experiência web conceitual desenvolvida para demonstrar o potencial digital do Charme da Paulista.",
      "Projeto de apresentação inspirado na história e na presença cultural do Bar Brahma em São Paulo.",
    ],
  },
  en: {
    label: "Demonstration portfolio",
    title: "Experiences created to present what is possible.",
    note: "These are not official websites. They are demonstration projects created exclusively for presentation and evaluation by the establishment owners. All brands, names and images belong to their respective owners.",
    badge: "Demonstration project",
    open: "View project",
    descriptions: [
      "A premium digital concept created to present a new online presence to the owner of Majestoso.",
      "A conceptual web experience developed to demonstrate the digital potential of Charme da Paulista.",
      "A presentation project inspired by the history and cultural presence of Bar Brahma in São Paulo.",
    ],
  },
};

const projects = [
  { name: "Majestoso", image: "/majestoso-demo.jpg", url: "https://majestoso-demo-production.up.railway.app/" },
  { name: "Charme da Paulista", image: "/charme-da-paulista-demo.jpg", url: "https://charme-da-paulista-production-d477.up.railway.app/?lang=pt" },
  { name: "Bar Brahma", image: "/bar-brahma-demo.jpg", url: "https://bar-brahma-demo-production.up.railway.app/" },
];

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;

export default function DemoSection({ lang }: { lang: Lang }) {
  const t = content[lang];
  return <section className="section demos" id="demos">
    <div className="demo-heading">
      <p className="kicker">{t.label}</p>
      <h2>{t.title}</h2>
      <div className="demo-disclaimer"><span>03</span><p>{t.note}</p></div>
    </div>
    <div className="demo-grid">
      {projects.map((project, index) => <a className="demo-card" href={project.url} target="_blank" rel="noreferrer" key={project.name} aria-label={`${t.open}: ${project.name}`}>
        <div className="demo-image">
          <img src={project.image} alt={`${project.name} — ${t.badge}`} loading="lazy" />
          <span>{t.badge}</span>
        </div>
        <div className="demo-copy">
          <small>0{index + 1}</small>
          <h3>{project.name}</h3>
          <p>{t.descriptions[index]}</p>
          <b>{t.open}<Arrow /></b>
        </div>
      </a>)}
    </div>
  </section>;
}
