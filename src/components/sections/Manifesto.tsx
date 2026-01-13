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
    <section id="manifesto" className="relative z-10 py-16 md:py-24 lg:py-28 bg-codexo-dark overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
        
        {/* GEOMETRIA COM DESTAQUE MÁXIMO */}
        <div className="relative flex justify-center items-center h-[320px] md:h-[450px] lg:h-[520px] order-2 lg:order-1">
          
          {/* LUZ DE FUNDO (GLOW) */}
          <div className="absolute w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-codexo-primary/15 blur-[60px] md:blur-[80px] lg:blur-[120px] rounded-full" />

          {/* NÚCLEO CENTRAL - PENTÁGONO PRINCIPAL */}
          <div className="relative w-32 md:w-44 lg:w-56 h-32 md:h-44 lg:h-56 bg-codexo-dark-light clip-pentagon border-2 border-white/20 backdrop-blur-xl flex items-center justify-center z-20 shadow-[0_0_60px_rgba(102,126,234,0.3)]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePilar}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center px-2 md:px-4 lg:px-6 z-30"
              >
                <span className="text-codexo-primary font-black text-[7px] md:text-[9px] lg:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-1 md:mb-2">
                  VALOR 0{activePilar + 1}
                </span>
                <h4 className="text-white font-black text-base md:text-xl lg:text-2xl uppercase italic tracking-tighter leading-none">
                  {pilares[activePilar].title}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 5 VÉRTICES NAS PONTAS - FIXOS E AFASTADOS */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = -90 + (i * 72);
            const sin = Math.sin((angle * Math.PI) / 180).toFixed(4);
            const cos = Math.cos((angle * Math.PI) / 180).toFixed(4);

            return (
              <motion.div
                key={`vertex-${i}`}
                className="absolute cursor-pointer z-30 [--r:140px] md:[--r:190px] lg:[--r:230px]"
                style={{
                  top: `calc(50% + (var(--r) * ${sin}))`,
                  left: `calc(50% + (var(--r) * ${cos}))`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setActivePilar(i)}
                onClick={() => setActivePilar(i)}
              >
                <motion.div
                  animate={{
                    backgroundColor: activePilar === i ? "#667eea" : "#0a0a14",
                    borderColor: activePilar === i ? "#ffffff" : "#667eea",
                    boxShadow: activePilar === i ? "0 0 25px rgba(102, 126, 234, 0.7)" : "0 0 10px rgba(102, 126, 234, 0.2)",
                  }}
                  className="w-9 md:w-11 lg:w-14 h-9 md:h-11 lg:h-14 clip-pentagon flex items-center justify-center border-2 transition-colors duration-300"
                >
                  <span className={`font-black text-[10px] md:text-xs lg:text-sm ${activePilar === i ? "text-white" : "text-codexo-primary"}`}>
                    0{i + 1}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* LADO DIREITO: TEXTO INSTITUCIONAL */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10 order-1 lg:order-2">
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.85] uppercase tracking-tighter">
              NOSSA <br />
              <span className="outline-text">CULTURA</span>
            </h3>
            <p className="text-slate-500 text-[8px] md:text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Diretrizes de Excelência e Rigor
            </p>
          </div>

          <motion.div
            key={activePilar}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-h-[90px] md:min-h-[130px] lg:min-h-[150px] flex items-center"
          >
            <p className="text-slate-300 text-sm md:text-lg lg:text-xl leading-relaxed font-medium border-l-2 md:border-l-4 border-codexo-primary pl-4 md:pl-6 lg:pl-8 italic">
              {pilares[activePilar].desc}
            </p>
          </motion.div>

          <div className="flex gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/5">
             <div className="flex flex-col">
                <span className="text-white font-black text-[8px] md:text-[9px] lg:text-[10px] uppercase">Missão</span>
                <span className="text-slate-500 text-[7px] md:text-[8px] lg:text-[9px] uppercase tracking-wider">Escalando o sucesso através da performance</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}