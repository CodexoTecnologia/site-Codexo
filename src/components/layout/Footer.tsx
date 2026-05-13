import Link from "next/link";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";
import { footerNav } from "@/data/navigation";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: siteConfig.social.linkedin },
    { name: "Instagram", icon: <FaInstagram />, url: siteConfig.social.instagram },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: siteConfig.contact.whatsappUrl }
  ];

  return (
    <footer className="relative bg-codexo-base border-t border-white/5 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 overflow-hidden">      {/* Detalhe de Grid no fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.35] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          
          {/* LOGO E MISSÃO */}
            <div className="col-span-1 sm:col-span-2 space-y-5 sm:space-y-6 md:space-y-8">
              <Logo width={160} height={45} /> {/* Bem mais limpo! */}
                <p className="max-w-[280px] sm:max-w-sm md:max-w-md text-codexo-muted text-xs sm:text-sm leading-relaxed border-l-2 border-codexo-primary pl-4 sm:pl-5 md:pl-6 italic">
                  {siteConfig.description}
                </p>
            
            <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visite nosso perfil no ${social.name}`}
                  className="w-11 h-11 sm:w-12 sm:h-12 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#55305c] hover:border-[#55305c] hover:bg-[#55305c]/5 transition-all duration-300 rounded-lg text-sm sm:text-base"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVEGAÇÃO ESTRUTURADA */}
          <nav className="space-y-4 sm:space-y-5 md:space-y-6" aria-label="Navegação do Rodapé">
            <h3 className="text-white font-black text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em]">
              Navegação
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 text-[10px] sm:text-[12px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTATO E SEDE */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-left lg:text-right">
            <h3 className="text-white font-black text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em]">
              Canais de Entrada
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-slate-500 text-[10px] sm:text-[11px] uppercase tracking-widest">Digital</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-codexo-accent font-black text-xs sm:text-sm break-all lg:break-normal hover:underline hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] sm:text-[11px] uppercase tracking-widest">Direct</p>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 font-mono text-xs sm:text-sm hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL TÉCNICA */}
        <div className="flex justify-center md:justify-between items-center pt-6 sm:pt-8 md:pt-10 border-t border-white/5">
          <p className="text-[10px] sm:text-[10px] text-slate-300 font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-center">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}