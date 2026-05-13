import HeroButtons from './HeroButtons'; // Ajuste o path se necessário

// 100% Server Side Rendering - O LCP agradece!
export default function Hero() {
  return (
    <section id="inicio" className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center overflow-hidden pt-20 sm:pt-0">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-codexo-dark" /> 
        
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-codexo-dark via-transparent to-codexo-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-codexo-dark via-transparent to-codexo-dark" />
      </div>

      {/* TEXT CONTENT (LCP Critical) */}
      <div className="relative z-10 space-y-5 sm:space-y-6 max-w-5xl mx-auto flex flex-col items-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-white select-none px-2 drop-shadow-sm"
          style={{ contentVisibility: 'auto' }} 
        >
          Transformamos Ideias em <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-primary via-codexo-secondary to-codexo-accent uppercase pb-2">
            Realidade Digital
          </span>
        </h1>
        
        <p className="max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed px-4 text-balance">
          Traduzimos a complexidade do desenvolvimento em soluções inteligentes e humanas para o mercado empresarial e cotidiano.
        </p>
      </div>

      {/* ISOLAMENTO DE CLIENT COMPONENT (Botões) */}
      <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8 z-20 w-full max-w-xl px-4 flex flex-col items-center">
        <HeroButtons />

        <p className="text-[10px] sm:text-[10px] md:text-[11px] text-slate-300 font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase px-2">
          Escalando o sucesso através da tecnologia de alta performance
        </p>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-codexo-primary to-transparent" />
      </div>
    </section>
  );
}