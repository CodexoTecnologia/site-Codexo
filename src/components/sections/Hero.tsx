"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative z-10 min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 text-center bg-grid-tech pb-12 pt-20 sm:pt-24 md:pt-28">

      {/* Conteúdo Principal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6 max-w-5xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight leading-[1.1] text-white select-none px-2">
          Transformamos Ideias em <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-primary to-codexo-accent uppercase">
            Realidade Digital
          </span>
        </h1>
        
        <p className="max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed px-4">
          Traduzimos a complexidade do desenvolvimento em soluções inteligentes e humanas para o mercado empresarial e cotidiano.
        </p>
      </motion.div>

      {/* CTA e Missão sutil */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8 }} 
        className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 z-20 w-full max-w-xl px-4"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center">
          <Link href="#contato" className="w-full sm:w-auto">
<motion.button 
  whileHover={{ scale: 1.02, opacity: 0.9 }} 
  className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-codexo-primary to-codexo-secondary text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase transition-all shadow-lg shadow-codexo-primary/30 rounded"
>
  Falar com Especialista
</motion.button>
          </Link>
          <Link href="#portfolio" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#fff" }} 
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 border border-white/20 text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase transition-all rounded"
            >
              Explorar Portfolio
            </motion.button>
          </Link>
        </div>

        <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-slate-500 font-bold tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] lg:tracking-[0.4em] uppercase px-2">
          Escalando o sucesso através da tecnologia de alta performance
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-4 md:mt-8 flex flex-col items-center gap-1 pb-4"
      >
        <div className="w-[1px] h-6 md:h-10 bg-gradient-to-b from-codexo-primary to-transparent opacity-40" />
      </motion.div>
    </section>
  );
}