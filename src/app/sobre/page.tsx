// src/app/sobre/page.tsx
import type { Metadata } from 'next';
import { ArrowRight, MapPin, Terminal, Users, Handshake, Eye, Zap, Heart, ShieldCheck } from 'lucide-react';
import ContactLink from '@/components/ui/ContactLink';

export const metadata: Metadata = {
  title: 'Manifesto Codexo | Engenharia de Software em Colombo e Região',
  description: 'Somos um squad de 5 engenheiros de software baseados em Colombo-PR, criando ecossistemas digitais de elite para empresas de todo o Brasil.',
  alternates: {
    canonical: 'https://codexo.com.br/sobre',
  },
};

export default function SobrePage() {
  return (
    <main className="relative min-h-[100svh] px-4 pt-28 sm:pt-32 pb-20 sm:pb-24 max-w-7xl mx-auto flex flex-col w-full overflow-hidden selection:bg-codexo-primary/30 selection:text-white">
      
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-codexo-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-codexo-primary/10 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10">

        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end gap-8 mb-12 border-b border-white/10 pb-8">
          <div className="md:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-codexo-primary/30 bg-white/[0.02] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-codexo-accent animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                Manifesto Codexo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] pb-1">
              Engenharia <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-codexo-accent to-codexo-primary italic pr-2 drop-shadow-lg">
                Sem Concessões
              </span>
            </h1>
          </div>

          <div className="md:w-2/5 md:pb-2">
            <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed text-balance border-l-2 border-codexo-primary/50 pl-4">
              Nascemos para nivelar o jogo. Construímos produtos digitais e operações de software — ERPs, SaaS e apps para usuários finais — com padrão de engenharia de empresa grande.
            </p>
          </div>
        </header>

        {/* História */}
        <section className="relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-32 sm:mb-40">
          
          {/* Coluna esquerda */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-8">
            <div className="inline-flex items-center gap-3 text-codexo-accent border border-codexo-accent/20 px-4 py-2 rounded-lg bg-codexo-accent/5">
              <MapPin className="w-4 h-4" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em]">Colombo, Região Metropolitana & Brasil</h2>
            </div>
            
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic leading-[1.1] tracking-tight">
              A indignação que <span className="text-codexo-primary">virou código.</span>
            </h3>

            {/* Dados */}
            <dl className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <dt className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Fundação</dt>
                <dd className="text-3xl font-black text-white">2025</dd>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <dt className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Squad Focada</dt>
                <dd className="text-3xl font-black text-white">05 <span className="text-sm font-medium text-slate-400">Sócios</span></dd>
              </div>
            </dl>
          </div>

          {/* Coluna direita */}
          <article className="lg:w-7/12 prose prose-invert prose-lg max-w-none">
            <div className="space-y-10 text-slate-300 leading-relaxed font-medium">
              <p className="text-xl sm:text-2xl text-white leading-snug border-l-4 border-codexo-primary pl-6">
                A Codexo não é apenas uma agência. É o reflexo da união de cinco engenheiros de software que se recusaram a aceitar o padrão do mercado de TI.
              </p>
              <p>
                Observamos uma falha estrutural: plataformas e ecossistemas fechados concentraram o controle em poucos players — com taxas, dependências técnicas, algoritmos opacos e regras unilaterais que limitam quem quer crescer.
              </p>
              <p>
                No outro extremo, soluções genéricas prometem “resolver tudo” e entregam lentidão, restrição e dívida técnica. Isso vale para quem precisa rodar uma operação interna (ERP) e também para quem precisa escalar um produto para milhares de usuários.
              </p>
              
              <div className="p-8 my-10 rounded-3xl bg-gradient-to-br from-codexo-primary/10 to-transparent border border-codexo-primary/20 relative overflow-hidden group">
                <Terminal className="absolute -right-6 -top-6 w-32 h-32 text-codexo-primary/10 transform group-hover:rotate-12 transition-transform duration-700" />
                <h4 className="text-xl font-black text-white uppercase tracking-tight mb-3 relative z-10">Nosso Contra-Ataque</h4>
                <p className="text-slate-300 relative z-10 m-0">
                  Decidimos construir ecossistemas digitais independentes. Não criamos “só um site”. Arquitetamos plataformas de alta performance — do backoffice ao produto voltado ao cliente — para devolver controle de operação, dados e evolução contínua ao time que toca o negócio.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Pilares */}
        <section className="mb-32 sm:mb-40">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Código de Ética
            </h2>
            <p className="text-slate-400 text-lg">
              A base da nossa engenharia dividida em 5 pilares inegociáveis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">

            <div className="md:col-span-3 group p-8 rounded-3xl bg-[#131320] border border-white/5 hover:border-codexo-primary/30 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <Zap className="w-24 h-24 text-codexo-primary" />
              </div>
              <Zap className="w-8 h-8 text-codexo-accent mb-6 relative z-10" />
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 relative z-10">Performance</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 max-w-[85%]">Sistemas otimizados para velocidade extrema. Aplicações leves que rankeiam melhor no Google e blindam a retenção.</p>
            </div>

            <div className="md:col-span-3 group p-8 rounded-3xl bg-[#131320] border border-white/5 hover:border-codexo-primary/30 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <ShieldCheck className="w-24 h-24 text-codexo-primary" />
              </div>
              <ShieldCheck className="w-8 h-8 text-codexo-accent mb-6 relative z-10" />
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 relative z-10">Segurança & Posse</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 max-w-[85%]">Blindagem de ponta a ponta. A inteligência, o código e os dados dos seus clientes pertencem única e exclusivamente a você.</p>
            </div>
            <div className="md:col-span-2 group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500">
              <Handshake className="w-7 h-7 text-codexo-primary mb-5" />
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Parceria Real</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Atuamos como seu braço tecnológico estratégico, focados 100% no ROI da operação.</p>
            </div>

            <div className="md:col-span-2 group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500">
              <Eye className="w-7 h-7 text-codexo-primary mb-5" />
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Transparência</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Fim da caixa preta. Você acompanha o código, os prazos e os relatórios sem letras miúdas.</p>
            </div>

            <div className="md:col-span-2 group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500">
              <Heart className="w-7 h-7 text-codexo-primary mb-5" />
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Empatia UI/UX</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Traduzimos regras de negócio complexas em interfaces bonitas, intuitivas e fáceis de usar.</p>
            </div>

          </div>
        </section>

        {/* Squad */}
        <section className="mb-24 sm:mb-28">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 p-8 sm:p-16 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-codexo-accent/30 bg-codexo-accent/10 text-codexo-accent text-[10px] font-black uppercase tracking-widest">
                <Users className="w-3 h-3" />
                <span>O Squad</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tight">
                Cinco Mentes.<br />
                Uma Arquitetura.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Operamos como uma unidade tática. Cinco sócios com expertises complementares — do Banco de Dados ao Design de Interface, do SEO Técnico à Arquitetura em Nuvem. Trabalhamos nos bastidores para que a sua marca assuma o protagonismo do mercado.
              </p>
            </div>

            {/* Metáfora Visual de 5 Nodos de Conexão */}
            <div className="md:w-1/2 flex justify-center items-center h-64 relative w-full">
              <div className="absolute w-20 h-20 rounded-full bg-codexo-primary/20 border border-codexo-primary shadow-[0_0_50px_rgba(var(--codexo-primary-rgb),0.5)] flex items-center justify-center z-20 animate-pulse">
                <span className="text-codexo-accent font-black text-2xl italic">CX</span>
              </div>
              
              {[
                "top-4 left-1/2 -translate-x-1/2", 
                "top-1/3 right-12", 
                "bottom-8 right-24", 
                "bottom-8 left-24", 
                "top-1/3 left-12"
              ].map((position, i) => (
                <div key={i} className={`absolute ${position} w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#fff] z-20`} />
              ))}
              
              <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-slate-500" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" className="text-codexo-primary" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative pt-14 sm:pt-16 border-t border-white/10">
          <div className="absolute -top-24 right-0 w-[55vw] max-w-[520px] h-64 bg-codexo-primary/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-6 text-white">
              Engenharia aplicada<br /> à sua operação.
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-lg mx-auto md:mx-0">
              Converse com nosso time técnico. Avaliamos seu cenário, mapeamos gargalos de performance e segurança e propomos um plano de evolução sob medida — com clareza de escopo e prioridades.
            </p>
            </div>

            <div className="shrink-0">
              <ContactLink className="group flex items-center justify-center gap-4 px-10 py-5 bg-codexo-primary text-white rounded-2xl font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-codexo-primary/20 active:scale-95">
                Agendar conversa técnica
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ContactLink>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}