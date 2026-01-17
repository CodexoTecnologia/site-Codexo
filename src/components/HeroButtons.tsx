import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center w-full">
      {/* BOTÃO PRIMÁRIO */}
      <Link 
        href="#contato" 
        className="w-full sm:w-auto group"
      >
        <div 
          className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 
          bg-gradient-to-r from-codexo-primary to-codexo-secondary text-white 
          font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] 
          tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase 
          rounded shadow-lg shadow-codexo-primary/30 
          transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-codexo-primary/50 hover:opacity-90
          active:scale-95 text-center flex items-center justify-center"
        >
          Falar com Especialista
        </div>
      </Link>

      {/* BOTÃO SECUNDÁRIO */}
      <Link 
        href="#portfolio" 
        className="w-full sm:w-auto group"
      >
        <div 
          className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 
          border border-white/20 text-white 
          font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] 
          tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase 
          rounded transition-all duration-300 ease-out
          hover:bg-white/5 hover:border-white
          active:scale-95 text-center flex items-center justify-center"
        >
          Explorar Portfolio
        </div>
      </Link>
    </div>
  );
}