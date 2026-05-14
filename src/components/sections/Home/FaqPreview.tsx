// src/components/sections/Home/FAQPreview.tsx
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function FAQPreview() {
  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02]">
            <HelpCircle className="w-4 h-4 text-codexo-accent" />
            <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-tight">
            Transparência em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-accent to-codexo-primary">cada linha de código.</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg">
            Tem dúvidas sobre prazos, tecnologias ou como funciona o nosso processo de engenharia? Criamos uma central completa para te responder.
          </p>
        </div>

        <Link 
          href="/faq" 
          className="group relative flex items-center justify-center gap-4 px-10 py-6 bg-white/[0.02] border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest hover:bg-white/[0.05] transition-all"
        >
          Tirar minhas dúvidas
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
}