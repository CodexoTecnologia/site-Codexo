import Link from "next/link";
import { siteConfig } from "@/data/site"; // Caso já tenha criado. Se não, pode remover e trocar pelo nome direto.

// 100% Server Component - Rápido e leve para SEO
export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-codexo-dark">
      
      {/* Background elements para manter a identidade visual */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-[size:30px_30px] opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-codexo-primary/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 space-y-6 md:space-y-8 flex flex-col items-center">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-codexo-primary via-codexo-secondary to-codexo-accent drop-shadow-lg select-none">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-[0.2em] italic">
            Página não <span className="outline-text">encontrada</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs md:text-sm tracking-widest uppercase">
            A rota que você tentou acessar se perdeu no hiperespaço digital.
          </p>
        </div>

        <div className="pt-4">
          <Link href="/">
            <button className="group relative px-8 py-4 bg-codexo-primary text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(85,48,92,0.4)] active:scale-95">
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-10 rounded-xl" />
              <span className="relative z-10">Retornar à Base</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}