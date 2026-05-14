// src/components/sections/Blog/BlogPageClient.tsx
"use client";

import { useMemo, useState } from "react";
import { Search, PenLine } from "lucide-react";
import BlogCard from "@/components/ui/Blog/BlogCard"; 
import { blogPosts } from "@/data/blog-posts";

export default function BlogPageClient() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const postsFiltrados = useMemo(() => {
    const textoBusca = termoPesquisa.trim().toLowerCase();
    if (!textoBusca) return blogPosts;

    return blogPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(textoBusca) ||
        post.excerpt.toLowerCase().includes(textoBusca) ||
        post.category.toLowerCase().includes(textoBusca)
      );
    });
  }, [termoPesquisa]);

  const isSearchMode = termoPesquisa.length > 0;

  return (
    <main className="relative min-h-[100svh] px-4 pt-28 sm:pt-32 pb-20 sm:pb-24 max-w-7xl mx-auto flex flex-col w-full">

      {/* HEADER EDITORIAL (Padrão: Serviços) */}
      <header className="flex flex-col md:flex-row md:items-end gap-8 mb-12 border-b border-white/10 pb-8">
        <div className="md:w-3/5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-codexo-accent animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
              Codexo Journal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] pb-1">
            Insights sobre <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-accent to-codexo-primary italic pr-2 drop-shadow-lg">
              Engenharia Digital
            </span>
          </h1>
        </div>

        <div className="md:w-2/5 md:pb-2">
          <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed text-balance border-l-2 border-codexo-primary/50 pl-4">
            Nossa visão técnica, estudos de caso e estratégias validadas para escalar negócios através de sistemas web de alta performance.
          </p>
        </div>
      </header>

      {/* 2. TOOLBAR DE PESQUISA (Glassmorphism integrado) */}
      <div className="relative w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-2 sm:p-3 mb-10 bg-white/[0.01] border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl z-20">
        
        {/* Info Dinâmica (Mostra ao usuário que existem posts) */}
        <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto px-2 sm:px-4">
          <div className="flex items-center gap-2">
            <PenLine className="w-4 h-4 text-codexo-accent" />
            <h2 className="text-sm sm:text-base font-black text-white uppercase tracking-widest pb-1 mt-1"> 
              {isSearchMode ? "Resultados" : "Publicações"}
            </h2>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold text-codexo-accent uppercase tracking-[0.2em] bg-codexo-primary/20 border border-codexo-accent/20 px-2 py-1 rounded-md">
            {postsFiltrados.length} ARTIGO{postsFiltrados.length !== 1 ? "S" : ""}
          </span>
        </div>

        {/* Input Otimizado */}
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={termoPesquisa}
            onChange={(event) => setTermoPesquisa(event.target.value)}
            className="w-full bg-[#0F0F1E]/80 border border-white/5 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-codexo-primary/50 focus:bg-[#0F0F1E] transition-all placeholder:text-slate-500 text-sm shadow-inner"
            placeholder="Pesquisar por SEO, Next.js, performance..."
          />
        </div>
      </div>

      {/* 3. GRID DE ARTIGOS (3 Colunas perfeitas para não achatar as imagens) */}
      {postsFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full relative z-10">
          {postsFiltrados.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-2xl font-black text-white mb-3 tracking-tight pb-1">Nenhum artigo encontrado.</h3>
          <p className="text-slate-400 text-sm max-w-sm text-balance">
            Não encontramos resultados para a busca <span className="text-codexo-accent font-bold">"{termoPesquisa}"</span>. Tente palavras-chave mais genéricas.
          </p>
        </div>
      )}
    </main>
  );
}