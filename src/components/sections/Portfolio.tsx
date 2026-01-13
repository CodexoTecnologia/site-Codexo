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
    <section id="portfolio" className="relative py-24 px-6 bg-codexo-dark border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-codexo-primary font-black text-[10px] tracking-[0.5em] uppercase">
              Cases de Sucesso //
            </span>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
              NOSSAS <span className="outline-text text-white/20 italic">SOLUÇÕES</span>
            </h3>
          </div>
          <p className="text-slate-600 text-[9px] font-bold uppercase tracking-[0.3em] max-w-[250px] border-l border-white/10 pl-4">
            Sistemas de alta performance desenhados para gerar valor real e crescimento escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`group relative bg-white/[0.01] border border-white/5 overflow-hidden rounded-xl transition-all duration-500 ${i === 2 ? 'grayscale opacity-40' : 'hover:border-codexo-primary/30'}`}
            >
              {/* ÁREA DE VISUALIZAÇÃO TÉCNICA - ATUALIZADA PARA MOSTRAR IMAGEM NO INDEX 0 E 1 */}
              <div className="relative h-64 bg-codexo-dark-light flex items-center justify-center overflow-hidden">
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
                    <span className="text-5xl font-black text-white/5 italic">?</span>
                  </>
                )}
              </div>

              {/* CONTEÚDO DO CARD */}
              <div className="p-8 relative z-20 space-y-4 bg-codexo-dark-light/80 backdrop-blur-sm h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-codexo-primary text-[9px] font-black tracking-[0.3em] uppercase">
                      {proj.category}
                    </span>
                    <h4 className="text-xl font-black text-white mt-1 uppercase italic tracking-tight">
                      {proj.title}
                    </h4>
                  </div>
                  <FaCode className="text-white/10" />
                </div>
                
                <p className="text-slate-400 text-[11px] leading-relaxed min-h-[50px]">
                  {proj.desc || "Aguardando processamento de dados e finalização de protocolos de engenharia."}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags?.map(tag => (
                    <span key={tag} className="text-[8px] border border-white/10 px-2 py-1 text-slate-500 font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5 text-slate-600">
                  <FaLock size={8} />
                  <span className="text-[8px] font-black uppercase tracking-widest">
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