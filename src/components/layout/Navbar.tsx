"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Cultura", href: "#manifesto" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4">
        <motion.div
          animate={{
            width: isScrolled ? "100%" : "95%",
            maxWidth: isScrolled ? "1100px" : "1200px",
            y: isScrolled ? -10 : 0
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-between border border-white/10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl w-full"
        >
          {/* BACKGROUND DINÂMICO */}
          <motion.div
            animate={{
              backgroundColor: isScrolled ? "rgba(10, 10, 20, 0.95)" : "rgba(255, 255, 255, 0.03)",
              backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
            }}
            className="absolute inset-0 z-0 backdrop-blur-3xl"
          />

          <div className="relative z-20 flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-3 md:py-4">
            {/* LOGO */}
            <Link href="#inicio" className="relative w-20 h-6 sm:w-24 sm:h-8 transition-opacity hover:opacity-80">
              <Image 
                src="/logo_codexo_nome_branco.svg" 
                alt="Codexo" 
                fill 
                className="object-contain" 
              />
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[9px] lg:text-[10px] uppercase tracking-[0.25em] lg:tracking-[0.3em] font-bold text-slate-400 hover:text-white transition-all relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-codexo-primary transition-all group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA E MENU MOBILE */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <div className="hidden xl:flex items-center gap-2 border-l border-white/10 pl-6">
                <span className="w-1.5 h-1.5 bg-codexo-primary rounded-full animate-pulse shadow-[0_0_8px_#667eea]" />
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">System Active</p>
              </div>
              
              <Link href="#contato" className="hidden sm:block">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(102, 126, 234, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 sm:px-6 md:px-8 py-2 md:py-2.5 bg-codexo-primary text-white font-black text-[9px] md:text-[10px] tracking-[0.2em] uppercase rounded-full border border-white/20 transition-all"
                >
                  Contato
                </motion.button>
              </Link>

              {/* BOTÃO MENU MOBILE */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[70px] sm:top-[80px] left-0 right-0 z-[99] md:hidden mx-3 sm:mx-4"
          >
            <div className="bg-codexo-dark-light/98 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              <nav className="p-4">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all rounded-lg"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <Link href="#contato" onClick={closeMobileMenu} className="sm:hidden block mt-4">
                  <button className="w-full px-6 py-3 bg-codexo-primary text-white font-black text-[9px] tracking-[0.2em] uppercase rounded-full border border-white/20">
                    Contato
                  </button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}