"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Modules() {
  const shouldReduceMotion = useReducedMotion();
  
  // Dados estáticos fora do render para evitar recriação
  const solutions = [
    { 
      title: "Sistemas Web & Alta Performance", 
      desc: "Muito mais que um site: construímos a estrutura digital que o seu negócio precisa para crescer. Desenvolvemos plataformas rápidas, seguras e otimizadas para converter visitantes em clientes.",
      tag: "Crescimento Escalável" 
    },
    { 
      title: "Automação & Inteligência", 
      desc: "Elimine processos repetitivos e operacionais, ganhando tempo para focar no que é importante. Desenvolvemos automações para transformar fluxos de trabalho de forma inteligente.",
      tag: "Eficiência Operacional" 
    },
    { 
      title: "Soluções para o Cotidiano", 
      desc: "Criamos softwares como serviço pensados para facilitar a vida das pessoas. Nossas soluções proprietárias focam em resolver problemas reais com tecnologia intuitiva e humana.",
      tag: "Tecnologia Humana" 
    },
    { 
      title: "Gestão e Controle", 
      desc: "Soluções completas para organizações, com gestão funcional, centralização de dados e painéis administrativos complexos para tomada de decisão estratégica.",
      tag: "Inteligência de Dados" 
    }
  ];

  return (
    <section id="servicos" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 container mx-auto">
      {/* CABEÇALHO */}
      <div className="flex flex-col mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <motion.span 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="text-codexo-primary font-black text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] uppercase mb-2 sm:mb-3 md:mb-3.5 lg:mb-4"
        >
          Expertise Técnica
        </motion.span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white uppercase italic">
          Nossas <span className="outline-text">Soluções</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        {solutions.map((item, i) => (
          <motion.div 
            key={i} 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={shouldReduceMotion ? {} : { delay: i * 0.1 }} 
            viewport={{ once: true, margin: "-50px" }} // Margin ajuda a disparar a animação um pouco antes
            // OTIMIZAÇÃO: Removemos backdrop-blur-sm no mobile ou usamos um valor fixo de cor
            // backdrop-blur é muito custoso para gpu mobile em grid
            className="group relative p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 bg-[#0F0F1E] border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden hover:border-codexo-primary/30 transition-colors duration-300"
          >
            {/* Gradiente de fundo ao invés de blur para performance */}
            <div className="absolute inset-0 bg-gradient-to-br from-codexo-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-codexo-primary uppercase tracking-[0.25em] sm:tracking-[0.275em] md:tracking-[0.3em] px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-0.75 md:py-1 bg-codexo-primary/10 rounded-full inline-block">
                {item.tag}
              </span>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-codexo-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed text-balance">
                {item.desc}
              </p>

            </div>

            {/* Elemento decorativo simplificado */}
            <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 border-t border-r border-white/5 group-hover:border-codexo-primary/20 transition-colors pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}