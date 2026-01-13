"use client";
import { motion } from "framer-motion";
import { FaCode, FaLock } from "react-icons/fa";

export default function Portfolio() {
  const projetos = [
    {
      id: "01",
      title: "Elohim Verduras",
      category: "Sistemas Web",
      image: "/prints/elohim-verduras.png", 
      desc: "Plataforma de presença digital e catálogo otimizado para o setor de hortifruti, focada em conversão direta.",
      tags: ["Performance", "UI/UX", "Conversão"],
      status: "Documentando"
    },
    {
      id: "02",
      title: "SeuBairro",
      category: "Plataforma Social",
      image: "/prints/seubairro.png", 
      desc: "Ecossistema digital para fomento da economia local, conectando moradores para troca de serviços e comércio de bairro.",
      tags: ["Economia Local", "SaaS", "Conectividade"],
      status: "Em Desenvolvimento"
    },
    { id: "03", title: "Em Breve!", category: "???", status: "Encrypted" }
  ];

  return (
    <section id="portfolio" className="relative py-12 sm:py-16 md:py-20 lg:py-22 xl:py-24 px-4 sm:px-6 md:px-8 bg-codexo-dark border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 gap-4 sm:gap-5 md:gap-6">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <span className="text-codexo-primary font-black text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] uppercase">
              Cases de Sucesso //
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none uppercase tracking-tighter">
              NOSSAS <span className="outline-text text-white/20 italic">SOLUÇÕES</span>
            </h3>
          </div>
          <p className="text-slate-600 text-[7px] sm:text-[8px] md:text-[8.5px] lg:text-[9px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.275em] lg:tracking-[0.3em] max-w-[180px] sm:max-w-[200px] md:max-w-[225px] lg:max-w-[250px] border-l border-white/10 pl-3 sm:pl-3.5 md:pl-4">
            Sistemas de alta performance desenhados para gerar valor real e crescimento escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projetos.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`group relative bg-white/[0.01] border border-white/5 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 ${i === 2 ? 'grayscale opacity-40' : 'hover:border-codexo-primary/30'}`}
            >
              {/* ÁREA DE VISUALIZAÇÃO TÉCNICA */}
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 bg-codexo-dark-light flex items-center justify-center overflow-hidden">
                {proj.image ? (
                  <>
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-codexo-dark via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:20px_20px]" />
                    <span className="text-4xl sm:text-5xl font-black text-white/5 italic">?</span>
                  </>
                )}
              </div>

              {/* CONTEÚDO DO CARD */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 relative z-20 space-y-2 sm:space-y-3 md:space-y-3.5 lg:space-y-4 bg-codexo-dark-light/80 backdrop-blur-sm h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-codexo-primary text-[7px] sm:text-[8px] md:text-[9px] font-black tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.275em] lg:tracking-[0.3em] uppercase">
                      {proj.category}
                    </span>
                    <h4 className="text-base sm:text-lg md:text-xl font-black text-white mt-1 uppercase italic tracking-tight">
                      {proj.title}
                    </h4>
                  </div>
                  <FaCode className="text-white/10 text-sm sm:text-base" />
                </div>
                
                <p className="text-slate-400 text-[9px] sm:text-[10px] md:text-[10.5px] lg:text-[11px] leading-relaxed min-h-[36px] sm:min-h-[40px] md:min-h-[45px] lg:min-h-[50px]">
                  {proj.desc || "Aguardando processamento de dados e finalização de protocolos de engenharia."}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-1.5 md:pt-2">
                  {proj.tags?.map(tag => (
                    <span key={tag} className="text-[6px] sm:text-[7px] md:text-[7.5px] lg:text-[8px] border border-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 text-slate-500 font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 pt-2 sm:pt-3 md:pt-3.5 lg:pt-4 border-t border-white/5 text-slate-600">
                  <FaLock className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[7.5px] md:h-[7.5px] lg:w-2 lg:h-2" />
                  <span className="text-[6px] sm:text-[7px] md:text-[7.5px] lg:text-[8px] font-black uppercase tracking-widest">
                    Status: {proj.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}