"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Handshake, Eye, Zap, Heart, ShieldCheck } from 'lucide-react';

type IconKey = "Parceria" | "Transparência" | "Performance" | "Empatia" | "Segurança";

// Gerar partículas aleatórias
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (Math.random() * 360),
    distance: Math.random() * 200 + 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 1.5 + 1,
    delay: Math.random() * 0.3,
  }));
};

export default function About() {
  const [selected, setSelected] = useState<IconKey>("Parceria");
  const [isScanning, setIsScanning] = useState(false);
  const [particles, setParticles] = useState(generateParticles(20));
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const iconRef = useRef<HTMLDivElement | null>(null);

  const iconKeys: IconKey[] = ["Parceria", "Transparência", "Performance", "Empatia", "Segurança"];

  const icons: Record<IconKey, React.ReactNode> = {
    Parceria: <Handshake size={80} />,
    Transparência: <Eye size={80} />,
    Performance: <Zap size={80} />,
    Empatia: <Heart size={80} />,
    Segurança: <ShieldCheck size={80} />,
  };

  const triggerChange = useCallback((nextVal: IconKey) => {
    setIsScanning(true);
    setParticles(generateParticles(20)); // Regenerar partículas
    setTimeout(() => {
      setSelected(nextVal);
    }, 350);
    setTimeout(() => {
      setIsScanning(false);
    }, 800);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = iconKeys.indexOf(selected);
      const nextIndex = (currentIndex + 1) % iconKeys.length;
      triggerChange(iconKeys[nextIndex]);
    }, 4000); 

    return () => clearInterval(interval);
  }, [selected, triggerChange]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleManualClick = (valor: IconKey) => {
    if (isScanning || selected === valor) return;
    triggerChange(valor);
  };

  return (
    <section id="sobre" className="relative pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-16 lg:pb-20 px-4 md:px-8 container mx-auto">
      {/* Background Grid Sutil */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center z-10">
        
        {/* === COLUNA ESQUERDA === */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          {/* Textos */}
          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 lg:mb-10">
            <span className="text-blue-500 font-black text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase">
              Sócio Estratégico //
            </span>
            <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight uppercase">
              Transformando Desafios em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 border-white/20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                Valor Real
              </span>
            </h3>
          </div>

          {/* Menu de Botões */}
          <div className="relative flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 lg:mb-12">
            {iconKeys.map((valor) => (
              <button
                ref={(el) => { buttonRefs.current[valor] = el; }}
                key={valor}
                onClick={() => handleManualClick(valor)}
                className={`relative text-[8px] md:text-[10px] font-black uppercase tracking-widest px-3 md:px-5 py-2 md:py-3 border transition-all duration-300 ${
                  selected === valor 
                  ? "bg-blue-900/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                  : "bg-white/5 border-white/10 text-slate-500 hover:border-white/30 hover:text-slate-300"
                }`}
              >
                {valor}
                {selected === valor && (
                  <motion.div 
                    layoutId="activeTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* === ÁREA DO SCAN === */}
          <div className="flex-1 flex items-center justify-center min-h-[240px] md:min-h-[300px] lg:min-h-[320px] relative">

            {/* Área do Scan */}
            <div ref={iconRef} className="relative w-full max-w-[180px] md:max-w-[250px] lg:max-w-[300px] h-[180px] md:h-[250px] lg:h-[300px] flex items-center justify-center">
              
              {/* Grid Decorativo de Fundo */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Círculo de Scan */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.15, 0.35] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-28 md:w-40 lg:w-48 h-28 md:h-40 lg:h-48 border border-blue-400/35 rounded-full will-change-transform pointer-events-none"
                style={{ transform: 'translateZ(0)' }}
              />

              {/* Partículas Explodindo */}
              <AnimatePresence mode="wait">
                {isScanning && particles.map((particle) => {
                  const polygonRadius = 80; // metade de w-40 (160px)
                  const startX = Math.cos(particle.angle * Math.PI / 180) * polygonRadius * 0.5;
                  const startY = Math.sin(particle.angle * Math.PI / 180) * polygonRadius * 0.5;
                  
                  return (
                    <motion.div
                      key={`${selected}-${particle.id}`}
                      initial={{ 
                        x: startX, 
                        y: startY, 
                        opacity: 1,
                        scale: 1
                      }}
                      animate={{ 
                        x: Math.cos(particle.angle * Math.PI / 180) * particle.distance,
                        y: Math.sin(particle.angle * Math.PI / 180) * particle.distance,
                        opacity: 0,
                        scale: 0
                      }}
                      transition={{ 
                        duration: particle.duration,
                        delay: particle.delay,
                        ease: "easeOut"
                      }}
                      className="absolute bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6] z-[6] will-change-transform pointer-events-none"
                      style={{ 
                        width: particle.size,
                        height: particle.size,
                        left: '50%',
                        top: '50%',
                        transform: 'translateZ(0)'
                      }}
                    />
                  );
                })}
              </AnimatePresence>
              
              {/* Ícone com Animação */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] will-change-transform [&>svg]:w-14 md:[&>svg]:w-20 lg:[&>svg]:w-[80px] [&>svg]:h-14 md:[&>svg]:h-20 lg:[&>svg]:h-[80px]"
                  style={{ transform: 'translateZ(0)' }}
                >
                  {icons[selected]}
                </motion.div>
              </AnimatePresence>

              {/* Laser de Scan Horizontal */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div 
                    initial={{ top: "-10%", opacity: 0 }}
                    animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_30px_#3b82f6,0_0_15px_white] z-20 will-change-transform pointer-events-none"
                    style={{ transform: 'translateZ(0)' }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* === COLUNA DIREITA: DISPLAY 05 === */}
        <div className="relative aspect-square flex items-center justify-center mt-12 md:mt-14 lg:mt-0 max-w-[300px] md:max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
          <div className="absolute inset-0 border border-white/5 rounded-full" />
          <div className="absolute inset-4 md:inset-8 lg:inset-10 border border-white/5 rounded-full" />
          
          <div className="relative w-full h-full max-w-[280px] md:max-w-[380px] lg:max-w-[450px] max-h-[280px] md:max-h-[380px] lg:max-h-[450px] bg-transparent flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 border-2 border-blue-500/30 flex items-center justify-center bg-blue-500/5 will-change-transform"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)", transform: 'translateZ(0)' }}
            >
              <div className="w-full h-full bg-gradient-to-t from-blue-500/20 to-transparent" />
            </motion.div>

            <div className="absolute flex flex-col items-center z-10">
               <span className="text-6xl md:text-8xl lg:text-9xl font-black text-white/10 leading-none">05</span>
               <span className="text-[8px] md:text-[10px] lg:text-[12px] font-bold text-blue-500 tracking-[0.3em] md:tracking-[0.45em] lg:tracking-[0.5em] uppercase">Especialistas</span>
            </div>

            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-blue-500/40 z-20 will-change-transform pointer-events-none"
              style={{ transform: 'translateZ(0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
