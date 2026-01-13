"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4">
      <motion.div
        animate={{
          width: isScrolled ? "100%" : "95%",
          maxWidth: isScrolled ? "1100px" : "1200px",
          y: isScrolled ? -10 : 0
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-between border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* BACKGROUND DINÂMICO */}
        <motion.div
          animate={{
            backgroundColor: isScrolled ? "rgba(10, 10, 20, 0.95)" : "rgba(255, 255, 255, 0.03)",
            backdropBlur: "24px",
          }}
          className="absolute inset-0 z-0 backdrop-blur-3xl"
        />

        <div className="relative z-20 flex items-center justify-between w-full px-8 py-4">
          {/* LOGO */}
          <Link href="#inicio" className="relative w-24 h-8 transition-opacity hover:opacity-80">
            <Image 
              src="/logo_codexo_nome_branco.svg" 
              alt="Codexo" 
              fill 
              className="object-contain" 
            />
          </Link>

          {/* NAV CENTRALIZADA SUTIL */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-white transition-all relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-codexo-primary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA TÉCNICO E LIMPO */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-6">
              <span className="w-1.5 h-1.5 bg-codexo-primary rounded-full animate-pulse shadow-[0_0_8px_#667eea]" />
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">System Active</p>
            </div>
            
            <Link href="#contato">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(102, 126, 234, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-codexo-primary text-white font-black text-[10px] tracking-[0.2em] uppercase rounded-full border border-white/20 transition-all"
              >
                Contato
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}