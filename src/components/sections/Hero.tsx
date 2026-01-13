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
    <section id="inicio" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center bg-grid-tech">
      {/* Background sutil com fragmentos geométricos */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <AnimatePresence>
          {fragments.map((frag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{ opacity: [0, 0.3, 0.1], scale: [0, 1.2, 1], x: frag.x, y: frag.y, rotate: 360 }}
              transition={{ duration: 5, delay: frag.delay, repeat: Infinity, repeatType: "reverse" }}
              className="absolute w-20 h-20 border border-codexo-primary/20 bg-codexo-primary/5 clip-pentagon blur-[1px]"
            />
          ))}
        </AnimatePresence>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-[600px] h-[600px] bg-codexo-primary/10 blur-[140px] rounded-full"
        />
      </div>

      {/* Conteúdo Principal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative z-10 space-y-6"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] text-white select-none">
          Transformamos Ideias em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-primary to-codexo-accent uppercase">
            Realidade Digital
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
          Traduzimos a complexidade do desenvolvimento em soluções inteligentes e humanas para o mercado empresarial e cotidiano.
        </p>
      </motion.div>

      {/* CTA e Missão sutil */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8 }} 
        className="mt-12 space-y-10 z-20"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="#contato">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }} 
              className="px-10 py-4 bg-codexo-primary text-white font-black text-[11px] tracking-[0.3em] uppercase transition-all shadow-lg shadow-codexo-primary/20"
            >
              Falar com Especialista
            </motion.button>
          </Link>
          <Link href="#portfolio">
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#fff" }} 
              className="px-10 py-4 border border-white/20 text-white font-black text-[11px] tracking-[0.3em] uppercase transition-all"
            >
              Explorar Portfolio
            </motion.button>
          </Link>
        </div>

        <p className="text-[10px] text-slate-500 font-bold tracking-[0.4em] uppercase">
          Escalando o sucesso através da tecnologia de alta performance
        </p>
      </motion.div>

            {/* INDICADOR DE SCROLL SUTIL */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-codexo-primary to-transparent opacity-50" />
      </motion.div>
    </section>
    
  );
}