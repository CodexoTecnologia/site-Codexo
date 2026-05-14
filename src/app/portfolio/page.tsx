// src/app/portfolio/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { FaCode, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { LayoutGrid, Plus } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { servicesData } from '@/data/services';

const ITEMS_PER_PAGE = 15;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  // 1. Lógica de Filtro
  const filteredProjects = activeFilter === "all" 
    ? portfolioData 
    : portfolioData.filter(proj => proj.serviceId === activeFilter);

  // 2. Lógica de Paginação (Mostra apenas os X primeiros)
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // 3. Reset da paginação ao trocar de categoria
  const handleFilterChange = (slug: string) => {
    setActiveFilter(slug);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // 4. Mapeamento de categorias ativas
  const availableCategories = servicesData.filter(service => 
    portfolioData.some(proj => proj.serviceId === service.slug)
  );

  return (
    <LazyMotion features={domAnimation}>
      <main className="relative min-h-[100svh] px-4 pt-28 sm:pt-32 pb-20 sm:pb-24 max-w-7xl mx-auto flex flex-col w-full overflow-hidden">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-codexo-primary/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          
          {/* HEADER PADRONIZADO (Editorial 60/40 idêntico a Serviços e Blog) */}
          <header className="flex flex-col md:flex-row md:items-end gap-8 mb-12 sm:mb-16 border-b border-white/10 pb-8">
            <div className="md:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-codexo-accent animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                  Nosso Portfólio
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] pb-1">
                Soluções <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-accent to-codexo-primary italic pr-2 drop-shadow-lg">
                  Publicadas
                </span>
              </h1>
            </div>
            
            <div className="md:w-2/5 md:pb-2">
              <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed text-balance border-l-2 border-codexo-primary/50 pl-4">
                Não vendemos promessas, vendemos tecnologia aplicada em projetos reais. Explore os ecossistemas digitais que já construímos para nossos parceiros.
              </p>
            </div>
          </header>

          {/* LAYOUT PRINCIPAL: SIDEBAR ESQUERDA + GRID DIREITA */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            
            {/* SIDEBAR DE FILTROS */}
            <aside className="lg:w-1/4 shrink-0">
              <div className="sticky top-32 flex flex-col">
                <h3 className="hidden lg:block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">
                  Filtrar por Categoria
                </h3>
                
                {/* No mobile vira scroll horizontal, no desktop vira lista vertical */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  
                  <button
                    onClick={() => handleFilterChange("all")}
                    className={`shrink-0 snap-start text-left px-5 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                      activeFilter === "all"
                        ? "bg-white/10 text-white border-l-2 border-codexo-primary shadow-lg"
                        : "bg-white/[0.02] text-slate-400 border-l-2 border-transparent hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    Todas as Soluções
                  </button>

                  {availableCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleFilterChange(category.slug)}
                      className={`shrink-0 snap-start text-left px-5 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                        activeFilter === category.slug
                          ? `${category.theme.bg} ${category.theme.text} border-l-2 ${category.theme.border} shadow-lg`
                          : "bg-white/[0.02] text-slate-400 border-l-2 border-transparent hover:bg-white/5 hover:text-slate-200"
                      }`}
                    >
                      {category.shortTitle}
                    </button>
                  ))}
                  
                </div>
              </div>
            </aside>

            {/* ÁREA DE CONTEÚDO (GRID + LOAD MORE) */}
            <div className="lg:w-3/4 flex flex-col min-h-[50vh]">
              
              <m.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <AnimatePresence mode='popLayout'>
                  {visibleProjects.map((proj) => {
                    const parentService = servicesData.find(s => s.slug === proj.serviceId);

                    return (
                      <m.a
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        key={proj.id}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white/[0.02] border border-white/5 overflow-hidden rounded-2xl transition-all duration-500 flex flex-col hover:border-white/20 shadow-2xl"
                      >
                        {/* Imagem do Projeto */}
                        <div className="relative h-56 sm:h-64 bg-codexo-dark-light flex items-center justify-center overflow-hidden shrink-0">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            loading="lazy"
                            className="object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-codexo-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                            <div className="bg-codexo-dark/80 p-4 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <FaArrowUpRightFromSquare className="text-white text-xl" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-transparent to-transparent z-[5]" />
                        </div>
                        
                        {/* Descrição e Tags */}
                        <div className="p-6 sm:p-8 relative z-20 space-y-4 flex-grow flex flex-col bg-white/[0.02]">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className={`${parentService?.theme.text || "text-codexo-accent"} text-[9px] font-black tracking-[0.3em] uppercase block mb-2`}>
                                {parentService?.shortTitle || "Projeto Especial"}
                              </span>
                              <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">
                                {proj.title}
                              </h3>
                            </div>
                            <FaCode className="text-white/10 mt-1 text-xl shrink-0" />
                          </div>
                          
                          <p className="text-slate-400 text-sm leading-relaxed flex-grow line-clamp-3">
                            {proj.desc}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            {proj.tags?.map((tag: string) => (
                              <span key={tag} className="text-[9px] border border-white/10 px-2.5 py-1 text-slate-300 font-bold uppercase tracking-widest bg-white/[0.02] rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </m.a>
                    );
                  })}
                </AnimatePresence>
              </m.div>

              {/* ESTADO VAZIO */}
              {filteredProjects.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                  <LayoutGrid className="w-12 h-12 text-slate-600 mb-4" />
                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-2">Sem projetos visíveis</h3>
                  <p className="text-slate-400 text-sm max-w-md">
                    Nenhum projeto foi cadastrado nesta categoria ainda. Fique de olho, em breve teremos novidades.
                  </p>
                </div>
              )}

              {/* BOTÃO "VER MAIS" (Aparece apenas se houver itens ocultos) */}
              {visibleCount < filteredProjects.length && (
                <div className="mt-12 flex justify-center w-full">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                    className="group flex items-center gap-3 px-8 py-4 bg-white/[0.02] hover:bg-white/5 border border-white/10 hover:border-codexo-primary/50 rounded-xl text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white transition-all duration-300 active:scale-95"
                  >
                    <Plus className="w-4 h-4 text-codexo-primary group-hover:rotate-90 transition-transform duration-300" />
                    Carregar mais projetos
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
    </LazyMotion>
  );
}