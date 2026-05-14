export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Por que o Next.js e a escolha definitiva para SEO em 2026?",
    excerpt: "Descubra como o Server-Side Rendering e a arquitetura App Router estao revolucionando o ranqueamento de sites institucionais no Google.",
    date: "2026-05-10",
    category: "Engenharia",
    readTime: "5 min",
    slug: "nextjs-escolha-definitiva-seo",
    imageUrl: "/assets/prints/seubairro.avif"
  },
  {
    id: "2",
    title: "O Fim dos Sites Lentos: Como alcancar 100/100 no Lighthouse",
    excerpt: "Um guia pratico sobre como otimizar fontes, imagens e eliminar o JavaScript bloqueador para entregar experiencias ultrarrapidas.",
    date: "2026-05-02",
    category: "Performance",
    readTime: "7 min",
    slug: "como-alcancar-100-lighthouse",
    imageUrl: "/assets/prints/mapfi.avif"
  },
  {
    id: "3",
    title: "Automacao para Agencias: Escalando seu tempo com Codigo",
    excerpt: "Como pequenas e medias empresas estao utilizando integracoes via API para automatizar processos manuais e focar no core business.",
    date: "2026-04-25",
    category: "Business",
    readTime: "4 min",
    slug: "automacao-agencias-escalando-tempo",
    imageUrl: "/assets/prints/elohim-verduras.avif"
  },
  {
    id: "4",
    title: "Arquitetura Modular em SaaS B2B: Escalando Times e Features",
    excerpt: "Boas praticas para separar dominios, reduzir acoplamento e acelerar entregas sem quebrar a base do produto.",
    date: "2026-04-18",
    category: "Arquitetura",
    readTime: "6 min",
    slug: "arquitetura-modular-saas-b2b",
    imageUrl: "/assets/prints/mapfi.avif"
  },
  {
    id: "5",
    title: "SEO Tecnico para Apps Modernos: O que realmente importa",
    excerpt: "Checklist direto ao ponto para indexacao, performance, dados estruturados e renderizacao hibrida.",
    date: "2026-04-10",
    category: "SEO",
    readTime: "5 min",
    slug: "seo-tecnico-apps-modernos",
    imageUrl: "/assets/prints/juliane-costa-podologa.avif"
  },
  {
    id: "6",
    title: "Design System Corporativo: Consistencia sem engessar o time",
    excerpt: "Como definir tokens, componentes e guidelines que escalam o front sem perder identidade.",
    date: "2026-04-02",
    category: "Design",
    readTime: "7 min",
    slug: "design-system-corporativo",
    imageUrl: "/assets/prints/seubairro.avif"
  },
  {
    id: "7",
    title: "Observabilidade pratica: metrificar o que move receita",
    excerpt: "Do tracing ao funil, veja como instrumentar produto e infraestrutura para decidir mais rapido.",
    date: "2026-03-26",
    category: "Performance",
    readTime: "6 min",
    slug: "observabilidade-pratica-receita",
    imageUrl: "/assets/prints/elohim-verduras.avif"
  },
  {
    id: "8",
    title: "Multi-tenant sem dor: estrategias de isolamento e cobranca",
    excerpt: "Modelos de isolamento, claims e headers, billing por uso e caminhos para evitar surpresas no crescimento.",
    date: "2026-03-18",
    category: "SaaS",
    readTime: "8 min",
    slug: "multi-tenant-estrategias-isolamento",
    imageUrl: "/assets/prints/mapfi.avif"
  }
];
