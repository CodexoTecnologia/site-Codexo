"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from 'react';
import { Handshake, Eye, Zap, Heart, ShieldCheck } from 'lucide-react';

type IconKey = "Parceria" | "Transparência" | "Performance" | "Empatia" | "Segurança";

type Particle = {
  id: number;
  angle: number;
  distance: number;
  size: number;
  duration: number;
};

const generateParticles = (count: number): Particle[] => {
  // Reduzido de 20 para 12 partículas para melhor performance
  return Array.from({ length: Math.min(count, 12) }, (_, i) => ({
    id: i,
    angle: (Math.random() * 360),
    distance: Math.random() * 70 + 40,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 0.5 + 0.4,
  }));
};

export default function About() {
  const iconKeys: IconKey[] = ["Parceria", "Transparência", "Performance", "Empatia", "Segurança"];
  const [selected, setSelected] = useState<IconKey>("Parceria");
  const [isScanning, setIsScanning] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const pilares = {
    Parceria: { 
        icon: <Handshake className="w-full h-full" />, 
        title: "Sócios do seu Negócio",
        desc: "Não somos apenas fornecedores de código. Atuamos como braço direito estratégico, focados no ROI e no crescimento sustentável da sua operação." 
    },
    Transparência: { 
        icon: <Eye className="w-full h-full" />, 
        title: "Clareza em Cada Etapa",
        desc: "Eliminamos a 'caixa preta' do desenvolvimento. Você acompanha o progresso com relatórios claros, prazos realistas e comunicação direta." 
    },
    Performance: { 
        icon: <Zap className="w-full h-full" />, 
        title: "Engenharia de Elite",
        desc: "Sistemas otimizados para velocidade e conversão. Entregamos aplicações leves que rankeiam melhor no Google e retêm mais usuários." 
    },
    Empatia: { 
        icon: <Heart className="w-full h-full" />, 
        title: "Foco no Usuário Final",
        desc: "Traduzimos complexidade técnica em experiências intuitivas. Tecnologia deve servir às pessoas, facilitando a vida e não complicando." 
    },
    Segurança: { 
        icon: <ShieldCheck className="w-full h-full" />, 
        title: "Proteção de Dados",
        desc: "Desenvolvimento pautado nas melhores práticas de segurança da informação, garantindo a integridade do seu negócio e dos seus clientes." 
    },
  };
  
  const triggerChange = useCallback((nextVal: IconKey) => {
    if (nextVal === selected) return;
    setIsScanning(true);
    setParticles(generateParticles(12));
    setTimeout(() => setSelected(nextVal), 250);
    setTimeout(() => setIsScanning(false), 750);
  }, [selected]);

  useEffect(() => {
    // Pausa a animação automática quando a página não está visível
    let interval: NodeJS.Timeout;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (interval) clearInterval(interval);
      } else {
        interval = setInterval(() => {
          const currentIndex = iconKeys.indexOf(selected);
          const nextIndex = (currentIndex + 1) % iconKeys.length;
          triggerChange(iconKeys[nextIndex]);
        }, 10000); // Aumentado de 8s para 10s para reduzir trabalho
      }
    };
    
    // Delay inicial para não bloquear render
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        const currentIndex = iconKeys.indexOf(selected);
        const nextIndex = (currentIndex + 1) % iconKeys.length;
        triggerChange(iconKeys[nextIndex]);
      }, 10000);
    }, 2000);
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [selected, triggerChange, iconKeys]);

  return (
    <section id="sobre" className="relative pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-6 sm:pb-10 px-4 sm:px-6 md:px-8 container mx-auto overflow-hidden">
      
      <div className="flex flex-col mb-4 sm:mb-6 md:mb-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="text-codexo-primary font-black text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] uppercase mb-2 sm:mb-3"
        >
          Nossa Essência
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-white uppercase italic"
        >
          Sobre a <span className="outline-text">Codexo</span>
        </motion.h3>
      </div>

      {/* AJUSTE: gap-0 no mobile para remover espaço entre grid items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-6 lg:gap-12 items-center w-full relative z-10">
        
        <div className="flex flex-col order-1 lg:order-1">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {iconKeys.map((key) => (
                    <button
                        key={key}
                        onClick={() => !isScanning && triggerChange(key)}
                        className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                            selected === key 
                            ? "bg-codexo-primary text-white border-codexo-primary shadow-lg shadow-codexo-primary/20 scale-105" 
                            : "bg-white/[0.03] text-slate-500 border-white/5 hover:border-white/20 hover:text-white"
                        }`}
                    >
                        {key}
                    </button>
                ))}
            </div>

            <div className="relative min-h-[140px] sm:min-h-[180px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase italic tracking-tight">
                            {selected}
                        </h3>
                        
                        <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium border-l-2 border-codexo-primary/50 pl-4">
                            {pilares[selected].desc}
                        </p>

                        <div className="pt-2 flex items-center gap-2 opacity-50">
                            <div className="h-1 w-8 bg-codexo-primary rounded-full" />
                            <span className="text-[7px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                                Pilar 0{iconKeys.indexOf(selected) + 1}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

        {/* AJUSTE: mt-[-20px] no mobile para puxar o pentágono para cima */}
        <div className="order-2 lg:order-2 relative flex justify-center items-center h-[220px] sm:h-[300px] md:h-[360px] mt-[-20px] sm:mt-0 lg:mt-0">
            <div className="absolute w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-codexo-primary/10 blur-[40px] rounded-full" />

            <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-white/5 flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-t border-codexo-primary/20"
                />
            </div>
            
            <div className="absolute w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-dashed border-white/10 flex items-center justify-center">
                 <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-l border-white/10"
                />
            </div>

            <AnimatePresence>
                {isScanning && particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{ 
                            x: Math.cos(p.angle * (Math.PI / 180)) * p.distance, 
                            y: Math.sin(p.angle * (Math.PI / 180)) * p.distance, 
                            opacity: 0,
                            scale: p.size 
                        }}
                        transition={{ duration: p.duration, ease: "easeOut" }}
                        className="absolute w-1 h-1 bg-white rounded-full z-10"
                    />
                ))}
            </AnimatePresence>

            <motion.div 
                animate={isScanning ? { scale: 0.95 } : { scale: 1 }}
                className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center z-20"
                style={{ filter: "drop-shadow(0 0 10px rgba(102, 126, 234, 0.25))" }}
            >
                <div className="absolute inset-0 bg-codexo-dark-light clip-pentagon" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-white/10 to-transparent clip-pentagon backdrop-blur-xl" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: "blur(5px)" }}
                        transition={{ duration: 0.2 }}
                        className="relative z-30 w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white"
                    >
                        {pilares[selected].icon}
                    </motion.div>
                </AnimatePresence>
                
                 {isScanning && (
                    <motion.div 
                        initial={{ top: "-10%", opacity: 0 }}
                        animate={{ top: "110%", opacity: [0, 0.4, 0] }}
                        transition={{ duration: 0.6 }}
                        className="absolute left-0 right-0 h-[1px] bg-white z-40 pointer-events-none blur-[0.5px]"
                    />
                )}
            </motion.div>
        </div>
      </div>
    </section>
  );
}