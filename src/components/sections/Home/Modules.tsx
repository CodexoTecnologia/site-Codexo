// src/components/sections/Home/Modules.tsx
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { servicesData } from "@/data/services"; // Puxando do nosso arquivo central

export default function Modules() {
  
  // Pegamos apenas os 4 primeiros serviços para a Home
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section id="servicos" className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 container mx-auto">
      
      {/* CABEÇALHO EDITORIAL */}
      <div className="flex flex-col mb-12 sm:mb-16 max-w-3xl">
        <span className="text-codexo-accent font-black text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-codexo-accent animate-pulse" />
          Expertise Técnica
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase italic leading-[1.1] pb-2">
          Nossas <span className="outline-text drop-shadow-md text-white/80">Soluções</span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl text-balance border-l-2 border-codexo-primary/50 pl-4">
          Dominamos as tecnologias mais modernas do mercado para entregar ecossistemas digitais que resolvem problemas reais e escalam resultados.
        </p>
      </div>

      {/* GRID DE SERVIÇOS (Mapeando do arquivo central, usando o 'excerpt') */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {featuredServices.map((item) => {
          const IconComponent = item.icon;
          
          return (
            <div 
              key={item.id} 
              className={`group relative flex flex-col p-6 sm:p-8 lg:p-10 bg-[#0a0a13] border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-[#131320] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ${item.theme.borderHover}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.theme.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10 ${item.theme.bg} backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 ease-out`}>
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${item.theme.text}`} />
                  </div>
                  
                  <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.02] text-slate-400 ${item.theme.arrowHover} transition-colors duration-300`}>
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase italic tracking-tight transition-colors duration-300 leading-[1.3] pb-1">
                  {item.title}
                </h3>
                
                {/* Repare que aqui usamos o EXCERPT (resumo curto) */}
                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed text-balance flex-grow">
                  {item.excerpt}
                </p>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <Link 
                    href={item.href}
                    className={`inline-flex items-center gap-2 text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest transition-colors ${item.theme.arrowHover}`}
                  >
                    <span className="group-hover:text-white transition-colors">Explorar solução</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/5 transition-colors pointer-events-none rounded-tr-3xl mix-blend-overlay" />
            </div>
          );
        })}
      </div>

      {/* BOTÃO VER TODOS (Claro em Desktop e Mobile) */}
      <div className="mt-12 sm:mt-16 flex justify-center w-full">
        <Link 
          href="/servicos" 
          className="group flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0a0a13] hover:bg-[#131320] border border-white/10 hover:border-codexo-primary/50 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-xl"
        >
          <LayoutGrid className="w-4 h-4 text-codexo-accent group-hover:scale-110 transition-transform" />
          <span>Ver catálogo completo ({servicesData.length} soluções)</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

    </section>
  );
}