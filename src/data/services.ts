export interface Service {
  slug: string;
  title: string;
  tag: string;
  desc: string;
}

export const services: Service[] = [
  {
    slug: "sistemas-web",
    tag: "Crescimento Escalável",
    title: "Sistemas Web & Alta Performance",
    desc: "Construímos a estrutura digital que o seu negócio precisa para crescer. Desenvolvemos plataformas rápidas, seguras e otimizadas."
  },
  {
    slug: "automacao",
    tag: "Eficiência Operacional",
    title: "Automação & Inteligência",
    desc: "Elimine processos repetitivos e operacionais, ganhando tempo para focar no que é importante."
  },
  // Adicione os outros aqui seguindo o mesmo padrão...
];