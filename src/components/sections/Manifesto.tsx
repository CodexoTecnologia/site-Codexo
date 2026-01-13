"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Culture() {
  const [activePilar, setActivePilar] = useState(0);

  const pilares = [
    { title: "Parceria", desc: "Atuamos como sócios estratégicos, comprometidos com o sucesso e o crescimento real de quem confia em nossa engenharia." },
    { title: "Transparência", desc: "Processos claros e comunicação aberta para garantir que a complexidade técnica seja compreendida em cada etapa." },
    { title: "Performance", desc: "Desenvolvimento de sistemas funcionais de alta performance que simplificam processos e geram valor real." },
    { title: "Empatia", desc: "Entendemos a necessidade do parceiro para traduzir desafios técnicos em uma linguagem humana e acessível." },
    { title: "Segurança", desc: "Rigor analítico aplicado na construção de estruturas sólidas, protegendo a integridade digital de cada projeto." }
  ];

  return (
    <section id="manifesto" className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-codexo-dark overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        
        {/* GEOMETRIA COM DESTAQUE MÁXIMO */}
        <div className="relative flex justify-center items-center h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
          
          {/* LUZ DE FUNDO (GLOW) PARA DESTACAR O PENTÁGONO */}
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-codexo-primary/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full z-0 animate-pulse" />

          {/* NÚCLEO CENTRAL - BORDA MAIS GROSSA E BRILHO */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-codexo-dark-light clip-pentagon border-2 border-white/20 backdrop-blur-3xl flex items-center justify-center z-20 shadow-[0_0_50px_rgba(102,126,234,0.25)]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 sm:inset-3 md:inset-3.5 lg:inset-4 border-2 border-codexo-primary/40 clip-pentagon"
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePilar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-center px-4 sm:px-6 md:px-8 lg:px-10 z-30"
              >
                <span className="text-codexo-primary font-black text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.5em] sm:tracking-[0.55em] md:tracking-[0.6em] uppercase block mb-2 sm:mb-3 md:mb-4">
                  VALOR 0{activePilar + 1}
                </span>
                <h4 className="text-white font-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl uppercase italic tracking-tighter leading-none drop-shadow-2xl">
                  {pilares[activePilar].title}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* VÉRTICES COM ALTO CONTRASTE E ESCALA */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <div key={i} className="absolute inset-0 flex items-center justify-center">
              {/* Linha de Conexão Mais Evidente */}
              <motion.div 
                animate={{ 
                  opacity: activePilar === i ? 1 : 0.1,
                  scaleX: activePilar === i ? 1 : 0.85,
                  backgroundColor: activePilar === i ? "#667eea" : "#ffffff"
                }}
                className="absolute h-[1.5px] sm:h-[2px] origin-left left-1/2 w-[145px] sm:w-[175px] md:w-[190px] lg:w-[205px]"
                style={{ transform: `rotate(${angle - 90}deg)` }}
              />

              <motion.div
                className="absolute cursor-pointer z-40"
                style={{ transform: `rotate(${angle}deg) translateY(-165px) sm:translateY(-185px) md:translateY(-205px) lg:translateY(-235px) rotate(-${angle}deg)` }}
                onMouseEnter={() => setActivePilar(i)}
              >
                <motion.div 
                  animate={{ 
                    scale: activePilar === i ? 1.35 : 1,
                    backgroundColor: activePilar === i ? "#667eea" : "#0f0f1e",
                    borderColor: activePilar === i ? "#ffffff" : "#667eea",
                    boxShadow: activePilar === i ? "0 0 40px rgba(102, 126, 234, 0.6)" : "none"
                  }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 lg:w-16 lg:h-16 clip-pentagon flex items-center justify-center border-2 transition-all duration-300 shadow-2xl"
                >
                  <span className={`font-black text-sm sm:text-base md:text-lg ${activePilar === i ? "text-white" : "text-codexo-primary"}`}>
                    0{i + 1}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* LADO DIREITO: TEXTO INSTITUCIONAL */}
        <div className="lg:pl-12 space-y-6 sm:space-y-8 md:space-y-10 mt-8 lg:mt-0">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.8] uppercase tracking-tighter">
              NOSSA <br />
              <span className="outline-text">CULTURA</span>
            </h3>
            <p className="text-slate-500 text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em]">
              Diretrizes de Excelência e Rigor
            </p>
          </div>

          <motion.div
            key={activePilar}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center"
          >
            <p className="text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium border-l-2 sm:border-l-3 md:border-l-4 border-codexo-primary pl-4 sm:pl-6 md:pl-8 italic">
              "{pilares[activePilar].desc}"
            </p>
          </motion.div>

          <div className="flex gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-3.5 md:pt-4 border-t border-white/5">
             <div className="flex flex-col">
                <span className="text-white font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase">Missão</span>
                <span className="text-slate-500 text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider">Escalando o sucesso através da performance</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}