"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Estado para detectar mobile e evitar animações pesadas de layout
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se é mobile na montagem e no resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    // Listener passivo para scroll (Performance boost)
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    window.addEventListener("resize", checkMobile, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Variantes para controlar a animação de forma limpa
  const navbarVariants = {
    initial: {
      width: isMobile ? "95%" : "95%",
      maxWidth: "1200px",
      y: 0,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(0px)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    scrolled: {
      // No mobile, mantemos 95% fixo para evitar "layout thrashing"
      width: isMobile ? "95%" : "100%", 
      maxWidth: isMobile ? "1200px" : "1100px",
      y: isMobile ? 0 : -10, // Evita mover Y no mobile
      backgroundColor: "rgba(15, 15, 30, 0.90)", // Roxo escuro translúcido
      backdropFilter: "blur(12px)", // Blur reduzido para performance
      borderColor: "rgba(255, 255, 255, 0.05)",
    },
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4">
        <motion.div
          initial="initial"
          animate={isScrolled ? "scrolled" : "initial"}
          variants={navbarVariants}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-between border rounded-xl md:rounded-2xl overflow-hidden shadow-2xl w-full"
        >
          {/* Background Layer separado (Opcional, mas ajuda no efeito visual) */}
          <div className="absolute inset-0 pointer-events-none" />

          <div className="relative z-20 flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-3 md:py-4">
            <Link 
              href="#inicio" 
              className="relative w-24 h-8 sm:w-28 sm:h-9 transition-opacity hover:opacity-80 flex items-center"
            >
              <Image 
                src="/assets/logo/logo_codexo_nome_branco.svg" 
                alt="Codexo Tecnologia"
                width={112}
                height={36}
                priority // Carrega primeiro para melhorar LCP
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[10px] uppercase tracking-[0.25em] lg:tracking-[0.3em] font-bold text-slate-400 hover:text-white transition-all relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-codexo-primary)] transition-all group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <Link href="#contato" className="hidden sm:block">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 md:py-2.5 bg-[var(--color-codexo-primary)] text-white font-black text-[9px] md:text-[10px] tracking-[0.2em] uppercase rounded-full transition-all hover:brightness-110 shadow-lg shadow-purple-900/20"
                >
                  Contato
                </motion.button>
              </Link>

              {/* Botão Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[98] bg-black/80 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[80px] left-3 right-3 z-[99] md:hidden"
            >
              <div className="bg-[#0F0F1E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <nav className="p-2">
                  <ul className="flex flex-col">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link 
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="block px-4 py-4 text-xs uppercase tracking-[0.2em] font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border-b border-white/5 last:border-0"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="p-2 mt-2">
                    <Link href="#contato" onClick={closeMobileMenu}>
                      <button className="w-full py-3 bg-[var(--color-codexo-primary)] text-white font-black text-xs tracking-[0.2em] uppercase rounded-xl shadow-lg hover:brightness-110 transition-all">
                        Fale Conosco
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}