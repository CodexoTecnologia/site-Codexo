"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaLock, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();

  const projetos = [
    {
      id: "01",
      title: "Elohim Verduras",
      category: "Sistemas Web",
      image: "/assets/prints/elohim-verduras.png", 
      url: "https://codexotecnologia.github.io/site-elohimVerduras/",
      desc: "Plataforma de presença digital e catálogo otimizado para o setor de hortifruti, focada em conversão direta.",
      tags: ["Performance", "UI/UX", "Landing Page", "SEO"],
      status: "Ativo"
    },
    {
      id: "02",
      title: "SeuBairro",
      category: "Plataforma Social",
      image: "/assets/prints/seubairro.png", 
      url: "https://seubairro.codexo.com.br",
      desc: "Ecossistema digital para fomento da economia local, conectando moradores para comércio de bairro.",
      tags: ["Economia Local", "SEO", "Landing Page"],
      status: "Ativo"
    },
    { id: "03", title: "Em Breve!", category: "Novidade", status: "Bloqueado" }
  ];

  return (
    <section id="portfolio" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 container mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6">
        <div className="space-y-4">
          <span className="text-codexo-primary font-black text-[10px] tracking-[0.5em] uppercase">
            Pipeline de Execução //
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
            SOLUÇÕES <span className="outline-text text-white/20 italic">PUBLICADAS</span>
          </h2>
        </div>
        <p className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.3em] max-w-[250px] border-l border-white/10 pl-4">
          Engenharia aplicada em projetos reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((proj, i) => (
          <motion.a
            key={proj.id}
            href={proj.url || undefined}
            target={proj.url ? "_blank" : undefined}
            rel={proj.url ? "noopener noreferrer" : undefined}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            // OTIMIZAÇÃO: Animação de hover simplificada para evitar repaints pesados
            whileHover={shouldReduceMotion || !proj.url ? {} : { y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative bg-[#0F0F1E] border border-white/5 overflow-hidden rounded-xl transition-all duration-500 flex flex-col 
              ${!proj.url 
                ? 'grayscale opacity-60 cursor-default' 
                : 'hover:border-codexo-primary/30 cursor-pointer shadow-2xl shadow-black/50'
              }`}
          >
            {/* ÁREA DE VISUALIZAÇÃO TÉCNICA */}
            <div className="relative h-56 sm:h-64 bg-codexo-dark-light flex items-center justify-center overflow-hidden">
              {proj.image ? (
                <>
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill // Usa o container pai para definir tamanho (Responsive)
                    // OTIMIZAÇÃO: Removemos unoptimized para permitir WebP/AVIF
                    // OTIMIZAÇÃO: Loading lazy para não competir com a Hero Section
                    loading="lazy" 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    // OTIMIZAÇÃO: Sizes preciso para mobile baixar imagem pequena
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay de Hover para Indicar Link */}
                  {proj.url && (
                    <div className="absolute inset-0 bg-codexo-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="bg-codexo-dark/80 p-3 rounded-full backdrop-blur-sm">
                         <FaArrowUpRightFromSquare className="text-white text-lg" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent z-[5]" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:20px_20px]" />
                  <span className="text-5xl font-black text-white/5 italic">?</span>
                </>
              )}
            </div>

            {/* CONTEÚDO DO CARD */}
            {/* OTIMIZAÇÃO: Backdrop-blur removido no mobile (caro para GPU), mantido md+ */}
            <div className="p-6 sm:p-8 relative z-20 space-y-4 bg-transparent md:backdrop-blur-sm flex-grow flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-codexo-primary text-[9px] font-black tracking-[0.3em] uppercase block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight">
                    {proj.title}
                  </h3>
                </div>
                <FaCode className="text-white/10 mt-1" />
              </div>
              
              <p className="text-slate-400 text-[11px] leading-relaxed flex-grow">
                {proj.desc || "Aguardando processamento de dados e finalização de protocolos de engenharia."}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tags?.map((tag: string) => (
                  <span key={tag} className="text-[8px] border border-white/10 px-2 py-1 text-slate-300 font-bold uppercase tracking-widest bg-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5 text-slate-300 mt-auto">
                {proj.url ? <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> : <FaLock size={8} />}
                <span className="text-[8px] font-black uppercase tracking-widest opacity-70">
                  Status: {proj.status}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}