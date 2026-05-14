// src/data/portfolio.ts

export interface PortfolioProject {
  id: string;
  title: string;
  serviceId: string; // <-- A nossa "Chave Estrangeira" ligando aos Serviços
  image: string;
  url: string;
  desc: string;
  tags: string[];
  status: string;
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "01",
    title: "Elohim Verduras",
    serviceId: "sites-institucionais", // Bate com o ID do serviço de Sites
    image: "/assets/prints/elohim-verduras.avif", 
    url: "https://elohimverduras.com.br/",
    desc: "Plataforma de presença digital e catálogo otimizado para o setor de hortifruti, focada em conversão direta.",
    tags: ["Site", "Landing Page", "SEO", "Agronegócio"],
    status: "Ativo"
  },
  {
    id: "02",
    title: "mapfi",
    serviceId: "sistemas-web", // Bate com o ID do serviço de SaaS
    image: "/assets/prints/mapfi.avif", 
    url: "https://mapfi.codexo.com.br",
    desc: "Plataforma digital para gestão financeira.",
    tags: ["Web App", "Finanças", "Gestão", "Educação Financeira"],
    status: "Ativo"
  },
  {
    id: "03",
    title: "Juliane Costa Podóloga",
    serviceId: "sites-institucionais", // Bate com o ID do serviço de Sites
    image: "/assets/prints/juliane-costa-podologa.avif", 
    url: "https://julianecostapodologa.com.br",
    desc: "Site institucional para clínica de podologia com apresentação de serviços, informações, galeria e canais diretos de agendamento.",
    tags: ["Site", "SEO", "Landing Page", "Saúde"],
    status: "Ativo"
  },
  {
    id: "04",
    title: "SeuBairro",
    serviceId: "sistemas-web", // Bate com o ID do serviço de SaaS
    image: "/assets/prints/seubairro.avif", 
    url: "https://seubairro.codexo.com.br",
    desc: "Ecossistema digital para fomento da economia local, conectando moradores para comércio de bairro.",
    tags: ["Web App", "SEO", "Economia Local", "Marketplace"],
    status: "Ativo"
  }
];