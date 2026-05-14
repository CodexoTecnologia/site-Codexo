// src/data/services.ts
import { AppWindow, LayoutDashboard, Globe, Cpu, ShoppingCart, PenTool, Terminal } from 'lucide-react';

export interface ServiceData {
  id: string;           // Identificador único real (Ex: "01")
  slug: string;         // Nome para a URL e relacionamento com portfólio (Ex: "sistemas-web")
  title: string;
  shortTitle: string; 
  tag: string;
  excerpt: string; 
  description: string; 
  href: string;
  icon: any; 
  bullets: string[]; 
  theme: {
    text: string;
    bg: string;
    border: string;
    borderHover: string;
    glow: string;
    arrowHover: string;
    bgHover: string;
  };
}

export const servicesData: ServiceData[] = [
  { 
    id: "01",
    slug: "sistemas-web",
    title: "Aplicações Web & SaaS", 
    shortTitle: "SaaS & Web",
    tag: "Inovação & Escala",
    excerpt: "Desenvolvimento de plataformas SaaS e portais focados na experiência do usuário e alta retenção. Escalabilidade desde o dia 1.",
    description: "Transformamos a sua ideia em um produto digital escalável e lucrativo. Arquitetamos plataformas SaaS (Software as a Service) do zero, com foco absoluto na experiência do usuário (UX) e infraestrutura em nuvem preparada para milhares de acessos simultâneos.",
    href: "/servicos/sistemas-web",
    icon: AppWindow,
    bullets: ["Arquitetura Multi-tenant", "Painéis de Assinatura e Pagamento", "APIs RESTful de alta performance"],
    theme: {
      text: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-500/20",
      borderHover: "hover:border-blue-500/50",
      glow: "from-blue-500/10",
      arrowHover: "group-hover:text-blue-400",
      bgHover: "hover:bg-blue-400/10"
    }
  },
  { 
    id: "02",
    slug: "erp",
    title: "Sistemas de Gestão (ERP)", 
    shortTitle: "ERPs Sob Medida",
    tag: "Controle Absoluto",
    excerpt: "Painéis administrativos sob medida e CRMs focados em controle total, segurança e métricas em tempo real para sua operação.",
    description: "Chega de planilhas e softwares genéricos que não entendem a sua operação. Desenvolvemos ERPs e CRMs 100% sob medida para digitalizar as regras exclusivas do seu negócio, garantindo segurança de dados e métricas precisas em tempo real.",
    href: "/servicos/erp",
    icon: LayoutDashboard,
    bullets: ["Controle de Estoque e Financeiro", "Dashboards e Relatórios Dinâmicos", "Níveis de Acesso e Auditoria"],
    theme: {
      text: "text-codexo-accent",
      bg: "bg-codexo-accent/10",
      border: "border-codexo-accent/20",
      borderHover: "hover:border-codexo-accent/50",
      glow: "from-codexo-accent/10",
      arrowHover: "group-hover:text-codexo-accent",
      bgHover: "hover:bg-codexo-accent/10"
    }
  },
  { 
    id: "03",
    slug: "sites-institucionais",
    title: "Sites Institucionais", 
    shortTitle: "Sites Institucionais",
    tag: "Presença Digital",
    excerpt: "Sua vitrine de alta conversão. Criamos landing pages otimizadas para SEO e com velocidade máxima de carregamento.",
    description: "O seu site é o seu melhor vendedor. Não usamos templates prontos. Desenvolvemos landing pages e sites corporativos com design premium, otimização extrema para os motores de busca (SEO) e velocidade máxima de carregamento para converter leads.",
    href: "/servicos/sites-institucionais",
    icon: Globe,
    bullets: ["Otimização SEO On-page (Nota 100)", "Design Responsivo e Mobile-First", "Integração com CRMs e Analytics"],
    theme: {
      text: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-500/20",
      borderHover: "hover:border-emerald-500/50",
      glow: "from-emerald-500/10",
      arrowHover: "group-hover:text-emerald-400",
      bgHover: "hover:bg-emerald-400/10"
    }
  },
  { 
    id: "04",
    slug: "automacao",
    title: "Automação & Integração", 
    shortTitle: "Automações",
    tag: "Eficiência Operacional",
    excerpt: "Elimine trabalhos manuais. Conectamos APIs e automatizamos fluxos operacionais para sua equipe focar apenas no que gera lucro.",
    description: "Tempo é o ativo mais caro da sua empresa. Desenvolvemos robôs e conectamos APIs para automatizar fluxos operacionais, emissão de notas, disparo de mensagens e sincronização de dados entre plataformas.",
    href: "/servicos/automacao",
    icon: Cpu,
    bullets: ["Integração de Sistemas Legados", "Webhooks e Sincronização em Tempo Real", "Redução de Falhas Humanas"],
    theme: {
      text: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-500/20",
      borderHover: "hover:border-amber-500/50",
      glow: "from-amber-500/10",
      arrowHover: "group-hover:text-amber-400",
      bgHover: "hover:bg-amber-400/10"
    }
  },
  { 
    id: "05",
    slug: "ecommerce-headless",
    title: "E-commerce & Headless", 
    shortTitle: "E-commerce",
    tag: "Vendas em Escala",
    excerpt: "Aumente suas vendas com lojas virtuais que carregam instantaneamente utilizando arquitetura Headless Commerce.",
    description: "Aumente suas vendas com lojas virtuais que carregam instantaneamente. Utilizamos arquitetura Headless Commerce para desacoplar o visual do servidor, criando experiências de compra fluidas que não perdem clientes por lentidão.",
    href: "/servicos/ecommerce",
    icon: ShoppingCart,
    bullets: ["Velocidade extrema de carregamento", "Integração Vtex, Shopify Plus", "Checkout otimizado para conversão"],
    theme: {
      text: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-500/20",
      borderHover: "hover:border-rose-500/50",
      glow: "from-rose-500/10",
      arrowHover: "group-hover:text-rose-400",
      bgHover: "hover:bg-rose-400/10"
    }
  },
  { 
    id: "06",
    slug: "ui-ux-design",
    title: "Design de Produto (UI/UX)", 
    shortTitle: "UI/UX Design",
    tag: "Experiência do Usuário",
    excerpt: "Prototipagem de alta fidelidade e interfaces modernas focadas na acessibilidade, retenção de usuários e estética premium.",
    description: "Projetamos a jornada do seu usuário antes de escrevermos a primeira linha de código. Entregamos protótipos de alta fidelidade e interfaces modernas focadas na acessibilidade, retenção de usuários e estética premium.",
    href: "/servicos/design-ui-ux",
    icon: PenTool,
    bullets: ["Prototipagem de Alta Fidelidade (Figma)", "Design Systems Escaláveis", "Pesquisa e Testes de Usabilidade"],
    theme: {
      text: "text-fuchsia-400",
      bg: "bg-fuchsia-400/10",
      border: "border-fuchsia-500/20",
      borderHover: "hover:border-fuchsia-500/50",
      glow: "from-fuchsia-500/10",
      arrowHover: "group-hover:text-fuchsia-400",
      bgHover: "hover:bg-fuchsia-400/10"
    }
  },
  { 
    id: "07",
    slug: "consultoria",
    title: "Consultoria & Tech Lead", 
    shortTitle: "Consultoria TI",
    tag: "Direção Estratégica",
    excerpt: "Auditoria de código, revisão de arquitetura e mentoria técnica para equipes de TI tomarem as melhores decisões.",
    description: "Alugue o cérebro da nossa engenharia. Ajudamos equipes internas e gestores a tomarem as melhores decisões técnicas: desde a escolha da stack ideal até a revisão de código e estruturação de arquitetura em nuvem.",
    href: "/servicos/consultoria",
    icon: Terminal,
    bullets: ["Auditoria de Código e Performance", "Arquitetura Cloud (Vercel/AWS)", "Mentoria Técnica para Equipes"],
    theme: {
      text: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-500/20",
      borderHover: "hover:border-cyan-500/50",
      glow: "from-cyan-500/10",
      arrowHover: "group-hover:text-cyan-400",
      bgHover: "hover:bg-cyan-400/10"
    }
  }
];