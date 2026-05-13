export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  url: string;
  desc: string;
  tags: string[];
  status: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Elohim Verduras",
    category: "Sites Institucionais",
    image: "/assets/prints/elohim-verduras.avif",
    url: "https://elohimverduras.com.br/",
    desc: "Plataforma de presença digital e catálogo otimizado para o setor de hortifruti.",
    tags: ["Site", "Landing Page", "SEO"],
    status: "Ativo"
  },
  // Adicione os outros...
];