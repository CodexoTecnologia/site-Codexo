// src/components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqData } from "@/data/faq"; // Ajuste o caminho conforme sua estrutura

export default function FAQAccordion() {
  // Estado que guarda o ID da pergunta aberta. null = todas fechadas.
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 container mx-auto max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LADO ESQUERDO: Sticky Header (Awwwards Style) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-codexo-accent animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                Central de Dúvidas
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase italic tracking-tight mb-6 leading-[1.1]">
              Perguntas <br className="hidden lg:block" />
              Frequentes
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Transparência é um dos nossos pilares. Encontre as respostas rápidas sobre nossa metodologia de engenharia de software e modelos de contratação.
            </p>
          </div>

          {/* LADO DIREITO: Accordion Dinâmico */}
          <div className="lg:w-2/3 w-full flex flex-col border-t border-white/10">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div 
                  key={item.id} 
                  className="group border-b border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between py-6 sm:py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-codexo-primary/50"
                    aria-expanded={isOpen}
                  >
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight pr-8 transition-colors duration-300 ${isOpen ? "text-codexo-primary italic" : "text-white group-hover:text-slate-300"}`}>
                      {item.question}
                    </h3>
                    
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-white/20 transition-all duration-300">
                      <m.div
                        initial={false}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Plus className={`w-5 h-5 ${isOpen ? "text-codexo-accent" : "text-slate-400"}`} />
                      </m.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={`faq-content-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        {/* O Padding inferior é mantido dentro da div animada para evitar pulos no layout */}
                        <div className="pb-8 text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl pl-4 border-l-2 border-codexo-primary/30">
                          {item.answer}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}