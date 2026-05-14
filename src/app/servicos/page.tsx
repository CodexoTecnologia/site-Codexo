// src/app/servicos/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Importação correta da nossa Fonte Única de Verdade (SSOT)
import { servicesData } from '@/data/services'; 

export const metadata: Metadata = {
  title: 'Nossas Soluções e Serviços | Codexo Tecnologia',
  description: 'Desenvolvimento de Sistemas Web, SaaS, ERPs sob medida, Sites Institucionais, Automação, E-commerce Headless e Consultoria de Software.',
  alternates: {
    canonical: 'https://codexo.com.br/servicos',
  },
};

export default function ServicosPage() {
  return (
    <main className="relative min-h-[100svh] px-4 pt-28 sm:pt-32 pb-20 sm:pb-24 max-w-7xl mx-auto flex flex-col w-full">
      
      {/* HEADER EDITORIAL */}
      <header className="flex flex-col md:flex-row md:items-end gap-8 mb-12 border-b border-white/10 pb-8">
        <div className="md:w-3/5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-codexo-accent animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
              Catálogo de Soluções
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] pb-1">
            Engenharia de Software <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-accent to-codexo-primary italic pr-2 drop-shadow-lg">
              Sob Medida
            </span>
          </h1>
        </div>
        
        <div className="md:w-2/5 md:pb-2">
          <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed text-balance border-l-2 border-codexo-primary/50 pl-4">
            Não entregamos apenas código. Entregamos infraestrutura digital projetada para escalar o seu negócio, otimizar processos e dominar o seu mercado.
          </p>
        </div>
      </header>

      {/* LISTA EXPANSIVA DE SERVIÇOS */}
      <section className="flex flex-col gap-8 w-full">
        {servicesData.map((service) => {
          const Icon = service.icon;
          
          return (
            <article 
              key={service.id} 
              id={service.id}
              className="group relative flex flex-col lg:flex-row bg-[#0F0F1E] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-[#131320] hover:border-white/10 shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.theme.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="lg:w-2/5 p-6 sm:p-10 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 relative z-10">
                <span className={`w-fit text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md border ${service.theme.border} ${service.theme.bg} ${service.theme.text} mb-8`}>
                  {service.tag}
                </span>
                
                <div className="mb-6">
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${service.theme.text} mb-6`} strokeWidth={1.5} />
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight leading-[1.2] pb-1">
                    {service.title}
                  </h2>
                </div>
                
                <div className="mt-auto pt-6">
                  <Link 
                    href={service.href}
                    className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 bg-white/[0.03] ${service.theme.bgHover} border border-white/10 ${service.theme.borderHover} rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all duration-300`}
                  >
                    Ver Detalhes
                    <ArrowRight className={`w-4 h-4 ${service.theme.text}`} />
                  </Link>
                </div>
              </div>

              <div className="lg:w-3/5 p-6 sm:p-10 flex flex-col justify-center relative z-10 bg-black/20">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance mb-8">
                  {service.description}
                </p>
                
                <div className="space-y-4 border-t border-white/5 pt-6 mt-auto">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Principais Entregáveis:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 ${service.theme.text} shrink-0`} />
                        <span className="text-[13px] sm:text-sm text-slate-400 font-medium leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </article>
          );
        })}
      </section>

    </main>
  );
}