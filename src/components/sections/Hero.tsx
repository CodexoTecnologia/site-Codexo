"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const fragments = [
    { x: -150, y: -100, delay: 0.2 },
    { x: 180, y: -80, delay: 0.4 },
    { x: -120, y: 150, delay: 0.6 },
    { x: 200, y: 120, delay: 0.8 },
    { x: 0, y: -180, delay: 1.0 },
  ];

  return (
    <section id="inicio" className="relative z-10 min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 text-center bg-grid-tech pb-0 pt-20 sm:pt-24 md:pt-28">
      {/* Background sutil com fragmentos geométricos */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <AnimatePresence>
          {fragments.map((frag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{ opacity: [0, 0.3, 0.1], scale: [0, 1.2, 1], x: frag.x, y: frag.y, rotate: 360 }}
              transition={{ duration: 5, delay: frag.delay, repeat: Infinity, repeatType: "reverse" }}
              className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-codexo-primary/20 bg-codexo-primary/5 clip-pentagon blur-[1px]"
            />
          ))}
        </AnimatePresence>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-codexo-primary/10 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] xl:blur-[140px] rounded-full"
        />
      </div>

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
              whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }} 
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 bg-codexo-primary text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase transition-all shadow-lg shadow-codexo-primary/20 rounded"
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

        <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-slate-500 font-bold tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] lg:tracking-[0.4em] uppercase pb-4 sm:pb-6 md:pb-8 lg:pb-10 px-2">
          Escalando o sucesso através da tecnologia de alta performance
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2"
      >
        <span className="text-[7px] sm:text-[8px] md:text-[9px] text-slate-600 font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-b from-codexo-primary to-transparent opacity-50" />
      </motion.div>
    </section>
    
  );
}