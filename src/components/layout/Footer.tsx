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
    { name: "Cultura", href: "#manifesto" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="relative bg-codexo-dark border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      {/* Detalhe de Grid no fundo para manter a unidade visual */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* LOGO E MISSÃO */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Image 
              src="/logo_codexo_nome_branco.svg" 
              alt="Codexo" 
              width={160} 
              height={45} 
              className="opacity-90" 
            />
            <p className="max-w-md text-slate-400 text-sm leading-relaxed border-l-2 border-codexo-primary pl-6 italic">
              "Transformamos a complexidade tecnológica em sistemas funcionais de alta performance, escalando o sucesso de nossos parceiros."
            </p>
            
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-slate-400 hover:text-codexo-primary hover:border-codexo-primary hover:bg-codexo-primary/5 transition-all duration-300 rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVEGAÇÃO ESTRUTURADA */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] text-codexo-primary">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO E SEDE */}
          <div className="space-y-6 md:text-right">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] text-codexo-primary">Canais de Entrada</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Sede Operacional</p>
                <p className="text-white font-bold text-xs uppercase italic">Curitiba, PR - Brasil</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Digital</p>
                <p className="text-codexo-primary font-black text-sm">codexotecnologia@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Direct</p>
                <p className="text-slate-300 font-mono text-sm">(41) 99565-6346</p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL TÉCNICA */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-codexo-primary rounded-full animate-pulse" />
             <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.3em]">
               © 2026 Codexo Tecnologia. Todos os direitos reservados.
             </p>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[9px] text-slate-700 font-black uppercase tracking-[0.5em]">
              Security Protocol: Active
            </span>
            <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] bg-white/5 px-4 py-2 rounded-md">
              System Core V.4.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}