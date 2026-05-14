// src/components/sections/Home/Portfolio.tsx
"use client";
import { m, useReducedMotion } from "framer-motion";
import { FaCode, FaLock, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { servicesData } from "@/data/services";

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();

  // Função auxiliar para pegar o nome da categoria baseado no serviceId
  const getCategoryName = (serviceId: string) => {
    const service = servicesData.find(s => s.id === serviceId);
    return service ? service.shortTitle : "Projeto Especial";
  };

  return (
    <section id="portfolio" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 container mx-auto">
      {/* ... (O CABEÇALHO DO PORTFOLIO FICA EXATAMENTE IGUAL O SEU) ... */}
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 sm:mb-20 gap-8">
        <div className="flex flex-col">
          <m.span 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="text-codexo-accent font-black text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4 sm:mb-6 block"
          >
            Confira nossos trabalhos
          </m.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter">
            SOLUÇÕES <br className="hidden lg:block" />
            <span className="outline-text text-white/60 italic drop-shadow-md">PUBLICADAS</span>
          </h2>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] max-w-[250px] border-l-2 border-codexo-primary/50 pl-4 md:pb-2">
            Tecnologia aplicada em projetos reais.
          </p>
          <Link 
            href="/portfolio"
            className="group flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest hover:text-white transition-colors"
          >
            <span>Ver portfolio</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-codexo-primary group-hover:border-codexo-primary transition-all">
              <span className="text-white">→</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioData.map((proj) =>
          proj.url ? (
            <m.a
              key={proj.id}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[#0a0a13] border border-white/5 overflow-hidden rounded-xl transition-all duration-500 flex flex-col hover:border-codexo-primary/30 cursor-pointer shadow-2xl shadow-black/50"
            >
              <div className="relative h-48 sm:h-56 bg-codexo-dark-light flex items-center justify-center overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  loading="lazy"
                  className="object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent z-[5]" />
              </div>
              
              <div className="p-5 sm:p-6 relative z-20 space-y-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-codexo-accent text-[9px] font-black tracking-[0.3em] uppercase block mb-1">
                      {getCategoryName(proj.serviceId)}
                    </span>
                    <h3 className="text-lg font-black text-white uppercase italic tracking-tight">
                      {proj.title}
                    </h3>
                  </div>
                  <FaCode className="text-white/10 mt-1 shrink-0" />
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed flex-grow line-clamp-3">
                  {proj.desc}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    Status: {proj.status}
                  </span>
                </div>
              </div>
            </m.a>
          ) : null
        )}
      </div>
    </section>
  );
}