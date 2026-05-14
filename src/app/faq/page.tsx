// src/app/faq/page.tsx
import { Metadata } from 'next';
import FAQAccordion from '@/components/sections/FAQ/FaqAccordion'; // Ajuste o caminho se necessário
import { MessageSquare } from 'lucide-react';
import ContactLink from '@/components/ui/ContactLink';

export const metadata: Metadata = {
  title: 'FAQ e Suporte | Codexo Tecnologia',
  description: 'Tire suas dúvidas sobre desenvolvimento de software, prazos, custos e tecnologia. Central de transparência da Codexo para clientes em Colombo e todo o Brasil.',
  alternates: { canonical: 'https://codexo.com.br/faq' }
};

export default function FAQPage() {
  return (
    <main className="relative min-h-[100svh] px-4 pt-28 sm:pt-32 pb-20 sm:pb-24 max-w-7xl mx-auto flex flex-col w-full">
      
      {/* HEADER EDITORIAL (Padronizado com Serviços e Portfólio) */}
      <header className="flex flex-col md:flex-row md:items-end gap-8 mb-12 border-b border-white/10 pb-8">
        <div className="md:w-3/5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-codexo-accent animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
              Central de Ajuda
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] pb-1">
            Transparência & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-accent to-codexo-primary italic pr-2 drop-shadow-lg">
              Perguntas Frequentes
            </span>
          </h1>
        </div>
        
        <div className="md:w-2/5 md:pb-2">
          <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed text-balance border-l-2 border-codexo-primary/50 pl-4">
            Tudo o que você precisa saber para iniciar o seu projeto com segurança, clareza técnica e garantias reais de entrega.
          </p>
        </div>
      </header>

      {/* COMPONENTE DE ACCORDION (Sem o Header interno para não duplicar) */}
      <section className="mb-24 w-full">
         <FAQAccordion />
      </section>

      {/* CTA DE CONTATO CASO NÃO ENCONTRE A DÚVIDA */}
      <section className="w-full">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-codexo-primary/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-codexo-primary opacity-10 blur-[80px]" />
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-codexo-primary/20 flex items-center justify-center border border-codexo-primary/30">
              <MessageSquare className="w-8 h-8 text-codexo-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">Ainda tem dúvidas?</h3>
              <p className="text-slate-400 text-sm md:text-base max-w-md text-balance">
                Nossa equipe de engenharia está pronta para uma consultoria técnica sem compromisso.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-auto shrink-0 mt-6 md:mt-0">
            <ContactLink className="flex items-center justify-center w-full px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors shadow-lg active:scale-95">
              Falar com um Especialista
            </ContactLink>
          </div>
        </div>
      </section>
      
    </main>
  );
}