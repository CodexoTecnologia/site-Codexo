// src/data/faq.ts

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Quanto custa e qual o tempo de desenvolvimento de um sistema web sob medida?",
    answer: "O tempo e o investimento dependem da complexidade da arquitetura. Um MVP (Produto Mínimo Viável) pode levar de 4 a 8 semanas, enquanto ERPs e plataformas SaaS complexas levam meses. Na Codexo, não damos orçamentos cegos. Fazemos uma fase de 'Descoberta' para mapear cada requisito e garantir um cronograma blindado, sem custos surpresas no meio do caminho."
  },
  {
    id: "faq-2",
    question: "Qual a diferença entre um site institucional comum e uma plataforma SaaS?",
    answer: "Um site institucional é a sua 'vitrine digital' (focado em marketing, SEO e conversão de leads). Já um SaaS (Software as a Service) é o seu 'produto digital' — um sistema robusto onde os usuários fazem login, pagam assinaturas e executam tarefas complexas. Nós desenvolvemos ambos, sempre utilizando arquitetura Cloud de alta disponibilidade."
  },
  {
    id: "faq-3",
    question: "É melhor contratar uma agência, montar equipe interna ou usar um freelancer?",
    answer: "Montar equipe interna (CTO, Devs, UX) custa dezenas de milhares de reais mensais. Freelancers costumam ser mais baratos, mas trazem riscos de abandono de projeto e código sujo. A Codexo atua como o seu 'Squad de Engenharia as a Service': você tem a segurança, a multidisciplinaridade e o código de elite de uma agência, pagando apenas pelo escopo da sua plataforma."
  },
  {
    id: "faq-4",
    question: "Como funciona a manutenção, hospedagem e suporte após a entrega do projeto?",
    answer: "Nenhum sistema vive sozinho. Após o deploy, oferecemos planos de SLA (Service Level Agreement) contínuos. Cuidamos da sua infraestrutura na nuvem (Vercel, AWS), monitoramento de performance 24/7, atualizações de segurança e evolução contínua de novas features para que o seu sistema nunca fique obsoleto."
  },
  {
    id: "faq-5",
    question: "Por que contratar a Codexo para desenvolver meu sistema sob medida?",
    answer: "A Codexo entrega projetos sob medida combinando engenharia sênior, processos ágeis e foco em resultados de negócio. Projetamos arquiteturas escaláveis e seguras, escolhemos tecnologias modernas compatíveis com seu contexto (frontend em React/Next.js, backends em Node/.NET ou conforme necessário) e validamos cada etapa com provas de conceito e milestones claros. Garantimos comunicação transparente, documentação técnica e planos de manutenção/SLA para manter o sistema confiável após o lançamento. Se você precisa reduzir riscos, cumprir prazos e transformar requisitos em valor mensurável, a Codexo atua como seu time de engenharia dedicado — começamos com um diagnóstico gratuito para mapear escopo e estimativa." 
  }
];