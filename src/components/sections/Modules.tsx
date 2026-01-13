"use client";
import { motion } from "framer-motion";

export default function Modules() {
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
    <section id="servicos" className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-6 container mx-auto">
      {/* CABEÇALHO SIMPLIFICADO E PROFISSIONAL */}
      <div className="flex flex-col mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        <motion.span 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="text-codexo-primary font-black text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] uppercase mb-3 sm:mb-3.5 md:mb-4"
        >
          Expertise Técnica
        </motion.span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white uppercase italic">
          Nossas <span className="outline-text">Soluções</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {solutions.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }} 
            className="group relative p-6 sm:p-7 md:p-8 lg:p-10 bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm hover:border-codexo-primary/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-codexo-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
              <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">
              <span className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-codexo-primary uppercase tracking-[0.25em] sm:tracking-[0.275em] md:tracking-[0.3em] px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-0.75 md:py-1 bg-codexo-primary/10 rounded-full inline-block">
                {item.tag}
              </span>
              
              <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-codexo-primary transition-colors">
                {item.title}
              </h4>
              
              <p className="text-slate-400 text-sm sm:text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              <div className="pt-3 sm:pt-3.5 md:pt-4 flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <div className="w-6 sm:w-7 md:w-8 h-[1px] bg-codexo-primary/30" />
                <span className="text-[7px] sm:text-[7.5px] md:text-[8px] text-slate-600 font-bold uppercase tracking-widest">Protocolo Ativo // Codexo 2026</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 border-t border-r border-white/5 group-hover:border-codexo-primary/20 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}