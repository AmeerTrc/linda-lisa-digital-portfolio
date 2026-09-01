const content = {
  pt: {
    label: "Sobre mim",
    title: "Pessoas primeiro. Negócios com propósito.",
    text: "Sou Desconhecido, assistente de Ameer Mustafa e responsável pelo desenvolvimento de negócios e relacionamento com clientes na AmeerTrc. Ajudo empresas e profissionais a entender como sites, aplicativos e soluções digitais podem fortalecer seus negócios. Meu trabalho é ouvir cada cliente, apresentar as melhores possibilidades e apoiar a comunicação em todas as etapas do projeto.",
    process: "Comunicação · Planejamento · Relacionamento · Acompanhamento",
  },
  en: {
    label: "About me",
    title: "People first. Business with purpose.",
    text: "I’m Unknown, assistant to Ameer Mustafa and responsible for business development and client relations at AmeerTrc. I help businesses and professionals understand how websites, applications and digital solutions can strengthen their operations. My role is to listen to each client, present the best possibilities and support communication throughout every stage of the project.",
    process: "Communication · Planning · Client Relations · Support",
  },
};

export default function AboutSection({lang}:{lang:"pt"|"en"}){
  const t=content[lang];
  return <section className="section about" id="about">
    <p className="kicker">{t.label}</p>
    <div className="about-grid"><h2>{t.title}</h2><div><p>{t.text}</p><b>{t.process}</b></div></div>
  </section>;
}
