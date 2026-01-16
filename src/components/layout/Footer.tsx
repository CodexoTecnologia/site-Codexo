"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/CodexoTecnologia" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/codexo-tecnologia" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/codexotecnologia" },
    { icon: <FaWhatsapp />, url: "https://wa.me/5541995656346" }
  ];

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="relative bg-codexo-dark border-t border-white/5 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Detalhe de Grid no fundo para manter a unidade visual */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          
          {/* LOGO E MISSÃO */}
          <div className="col-span-1 sm:col-span-2 space-y-5 sm:space-y-6 md:space-y-8">
            <Image 
              src="/logo_codexo_nome_branco.svg" 
              alt="Codexo" 
              width={140} 
              height={40}
              className="opacity-90 sm:w-[160px] sm:h-[45px]" 
            />
            <p className="max-w-[280px] sm:max-w-sm md:max-w-md text-slate-400 text-xs sm:text-sm leading-relaxed border-l-2 border-codexo-primary pl-4 sm:pl-5 md:pl-6 italic">
              Transformamos a complexidade tecnológica em sistemas funcionais de alta performance, escalando o sucesso de nossos parceiros.
            </p>
            
            <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-white/10 flex items-center justify-center text-slate-400 hover:text-codexo-primary hover:border-codexo-primary hover:bg-codexo-primary/5 transition-all duration-300 rounded-lg text-sm sm:text-base"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVEGAÇÃO ESTRUTURADA */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h4 className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-codexo-primary">Navegação</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO E SEDE */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-left lg:text-right">
            <h4 className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-codexo-primary">Canais de Entrada</h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest">Digital</p>
                <p className="text-codexo-primary font-black text-xs sm:text-sm break-all lg:break-normal">codexotecnologia@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-widest">Direct</p>
                <p className="text-slate-300 font-mono text-xs sm:text-sm">(41) 99565-6346</p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL TÉCNICA */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 md:pt-10 border-t border-white/5 gap-4 sm:gap-5 md:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
             <p className="text-[8px] sm:text-[9px] text-slate-600 font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-center md:text-left">
               © 2026 Codexo Tecnologia. Todos os direitos reservados.
             </p>
          </div>
         
        </div>
      </div>
    </footer>
  );
}