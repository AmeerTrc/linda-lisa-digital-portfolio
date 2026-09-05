type Lang = "pt" | "en";

const content = {
  pt: {
    label: "Portfólio de demonstração",
    title: "Experiências criadas para apresentar possibilidades.",
    note: "Estes sites não são oficiais. São projetos demonstrativos criados exclusivamente para apresentação e avaliação pelos proprietários dos estabelecimentos. Marcas, nomes e imagens pertencem aos seus respectivos titulares.",
    badge: "Projeto demonstrativo",
    open: "Visualizar projeto",
    footerNote: "Os projetos apresentados são demonstrações criadas exclusivamente para avaliação pelos proprietários e não representam sites oficiais.",
    credit: "Projetos desenvolvidos por Ameer Mustafa.",
    descriptions: [
      "Conceito digital premium criado para apresentar uma nova presença online ao proprietário do Majestoso.",
      "Experiência web conceitual desenvolvida para demonstrar o potencial digital do Charme da Paulista.",
      "Projeto de apresentação inspirado na história e na presença cultural do Bar Brahma em São Paulo.",
      "Conceito digital sofisticado criado para apresentar uma presença online profissional a um escritório de advocacia criminal em São Paulo.",
      "Experiência gastronômica digital criada para apresentar os sabores, a história e a atmosfera italiana contemporânea do Gusto Cucina Itaim.",
      "Landing page conceitual premium para restaurante, com identidade visual própria inspirada em São Paulo, Tatuapé, grill e bar.",
      "Experiência digital premium criada para apresentar o Praia da Tiquatira como um Beach Club completo dentro de São Paulo.",
      "Experiência digital interativa criada para apresentar a tradição boêmia, o cardápio na lousa e os pastéis artesanais do lendário Bar do Giba em Moema.",
      "Experiência digital japonesa criada para apresentar o rodízio, os combinados e a atmosfera acolhedora do Toshiro Sushi em Santa Cecília.",
      "Experiência gastronômica síria autêntica criada para apresentar os shawarmas nobres de carne e frango, os doces artesanais e a tradição do Aboud Síria no Centro Histórico de São Paulo.",
    ],
  },
  en: {
    label: "Demonstration portfolio",
    title: "Experiences created to present what is possible.",
    note: "These are not official websites. They are demonstration projects created exclusively for presentation and evaluation by the establishment owners. All brands, names and images belong to their respective owners.",
    badge: "Demonstration project",
    open: "View project",
    footerNote: "These projects are demonstrations created exclusively for evaluation by their owners and do not represent official websites.",
    credit: "Projects developed by Ameer Mustafa.",
    descriptions: [
      "A premium digital concept created to present a new online presence to the owner of Majestoso.",
      "A conceptual web experience developed to demonstrate the digital potential of Charme da Paulista.",
      "A presentation project inspired by the history and cultural presence of Bar Brahma in São Paulo.",
      "A sophisticated digital concept created to present a professional online presence for a criminal law firm in São Paulo.",
      "A digital dining experience created to showcase the flavors, history and contemporary Italian atmosphere of Gusto Cucina Itaim.",
      "A premium conceptual restaurant landing page with an original visual identity inspired by São Paulo, Tatuapé, grill and bar culture.",
      "A premium digital experience created to present Praia da Tiquatira as a complete Beach Club destination inside São Paulo.",
      "An interactive digital dining experience created to showcase the bohemian heritage, chalkboard menu, and legendary artisan pastéis of Bar do Giba in Moema.",
      "A Japanese dining experience created to showcase the rodízio, sushi selections and welcoming atmosphere of Toshiro Sushi in Santa Cecília.",
      "An authentic Syrian digital dining experience created to showcase the flame-roasted beef and chicken shawarmas, handcrafted baklavas, and heritage of Aboud Síria in the Historic Center of São Paulo.",
    ],
  },
};

const projects = [
  { name: "Majestoso", image: "/majestoso-demo.jpg", url: "https://majestoso-demo-production.up.railway.app/" },
  { name: "Charme da Paulista", image: "/charme-da-paulista-demo.jpg", url: "https://charme-da-paulista-production-d477.up.railway.app/?lang=pt" },
  { name: "Bar Brahma", image: "/bar-brahma-demo.jpg", url: "https://bar-brahma-demo-production.up.railway.app/" },
  { name: "Almeida e Matos", image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://escrit-riodeadvocacia-production.up.railway.app/", url: "https://escrit-riodeadvocacia-production.up.railway.app/" },
  { name: "Gusto Cucina Itaim", image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://gustocucinataim1-production.up.railway.app/", url: "https://gustocucinataim1-production.up.railway.app/" },
  { name: "Serras Bar e Grill Tatuapé", image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://serras-bar-grill-tatuape-demo-production.up.railway.app/", url: "https://serras-bar-grill-tatuape-demo-production.up.railway.app/" },
  { name: "Praia da Tiquatira Beach Club", image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://praia-tiquatira-demo-production.up.railway.app/", url: "https://praia-tiquatira-demo-production.up.railway.app/" },
  { name: "Bar do Giba", image: "/bar-do-giba-demo.jpg", url: "https://bar-do-giba-production.up.railway.app/" },
  { name: "Toshiro Sushi — Santa Cecília", image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://toshiro-sushi-deo-production.up.railway.app/", url: "https://toshiro-sushi-deo-production.up.railway.app/" },
  { name: "Aboud Síria", image: "/aboud-siria-demo.jpg", url: "https://aboud-siria-production.up.railway.app/" },
];

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;

export default function DemoSection({ lang }: { lang: Lang }) {
  const t = content[lang];
  return <section className="section demos" id="demos">
    <div className="demo-heading">
      <p className="kicker">{t.label}</p>
      <h2>{t.title}</h2>
      <div className="demo-disclaimer"><span>{String(projects.length).padStart(2, "0")}</span><p>{t.note}</p></div>
    </div>
    <div className="demo-grid">
      {projects.map((project, index) => <a className="demo-card" href={project.url} target="_blank" rel="noreferrer" key={project.name} aria-label={`${t.open}: ${project.name}`}>
        <div className="demo-image">
          <img src={project.image} alt={`${project.name} — ${t.badge}`} loading="lazy" />
          <span>{t.badge}</span>
        </div>
        <div className="demo-copy">
          <small>{String(index + 1).padStart(2, "0")}</small>
          <h3>{project.name}</h3>
          <p>{t.descriptions[index]}</p>
          <b>{t.open}<Arrow /></b>
        </div>
      </a>)}
    </div>
    <div className="demo-footer-note">
      <p>{t.footerNote}</p>
      <span>{t.credit}</span>
    </div>
  </section>;
}
