"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Portfolio() {
  const projetos = [
    {
      title: "Gestão Funcional",
      category: "Controle & Dados",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      desc: "Painéis administrativos complexos para centralização de dados e tomada de decisão estratégica.",
      tags: ["BI", "SaaS"]
    },
    {
      title: "Automação Core",
      category: "Eficiência",
      image: "https://images.unsplash.com/photo-1518433278981-2a2dfb3da321?w=800&q=80",
      desc: "Otimização de fluxos de trabalho operacionais para maximizar a eficiência das operações.",
      tags: ["Processos", "AI"]
    },
    {
      title: "Arquitetura Web",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      desc: "Estruturas digitais sólidas e escaláveis otimizadas para converter visitantes em clientes.",
      tags: ["Web", "Escalabilidade"]
    }
  ];

  return (
    <section id="portfolio" className="relative py-24 px-6 bg-codexo-dark border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-codexo-primary font-black text-[10px] tracking-[0.5em] uppercase">
              Cases de Sucesso //
            </span>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
              PROJETOS <span className="outline-text">REALIZADOS</span>
            </h3>
          </div>
          <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] max-w-[250px]">
            Sistemas de alta performance que simplificam processos e geram valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-codexo-dark-light border border-white/5 overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-codexo-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="p-8 relative z-20 space-y-4 bg-codexo-dark-light">
                <div>
                  <span className="text-codexo-primary text-[9px] font-black tracking-[0.3em] uppercase">
                    {proj.category}
                  </span>
                  <h4 className="text-xl font-black text-white mt-1 uppercase italic tracking-tight">
                    {proj.title}
                  </h4>
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[8px] border border-white/10 px-2 py-1 text-slate-600 font-bold uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest pt-4 border-t border-white/5 w-full hover:text-codexo-primary transition-colors">
                  Analisar Case <FaExternalLinkAlt size={7} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}