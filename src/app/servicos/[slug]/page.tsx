// src/app/servicos/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronLeft, Code2, PenTool, Rocket, Search } from 'lucide-react';
import { servicesData } from '@/data/services';
import ContactLink from '@/components/ui/ContactLink';
import { portfolioData } from '@/data/portfolio';

// 1. GERADOR DE ROTAS ESTÁTICAS (SSG)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 2. METADADOS DINÂMICOS PARA SEO (Atualizado para Promise)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params; 
  
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Serviço não encontrado | Codexo' };

  return {
    title: `${service.title} | Codexo Tecnologia`,
    description: service.excerpt,
    alternates: {
      canonical: `https://codexo.com.br/servicos/${slug}`,
    },
  };
}

// 3. A PÁGINA PRINCIPAL (Agora é uma função Async)
export default async function ServicoDetalhePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  // Projetos relacionados
  const serviceProjects = portfolioData.filter(proj => proj.serviceId === service.slug);

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden flex flex-col pt-24 sm:pt-32">
      
      {/* BACKGROUND EFFECTS DINÂMICOS */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b ${service.theme.glow} via-transparent to-transparent opacity-40 blur-[100px] pointer-events-none`} />

      {/* --- SEÇÃO 1: HERO DINÂMICO --- */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
        <Link 
          href="/servicos" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors mb-8 sm:mb-12"
        >
          <ChevronLeft className="w-4 h-4" /> Voltar para Serviços
        </Link>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="lg:w-1/2">
            <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${service.theme.bg} ${service.theme.border} border mb-8`}>
              <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.theme.text}`} />
            </div>
            
            <span className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] ${service.theme.text} block mb-4`}>
              {service.tag}
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] pb-2 mb-6 uppercase italic">
              {service.title}
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance border-l-2 border-white/10 pl-4">
              {service.description}
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className={`p-8 sm:p-10 rounded-3xl bg-white/[0.02] border ${service.theme.border} backdrop-blur-sm shadow-2xl`}>
              <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6">O que está incluso:</h3>
              <ul className="space-y-4">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${service.theme.text} shrink-0`} />
                    <span className="text-slate-300 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <ContactLink className={`mt-10 flex items-center justify-center gap-3 w-full py-4 ${service.theme.bg} ${service.theme.text} border ${service.theme.border} rounded-xl font-black uppercase tracking-widest hover:brightness-125 transition-all active:scale-95`}>
                Solicitar Orçamento <ArrowRight className="w-4 h-4" />
              </ContactLink>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: MÉTODO (Cronograma / Passo a Passo) --- */}
      <section className="relative z-10 border-y border-white/5 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tight mb-4">
              O Método <span className={service.theme.text}>Codexo</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Processo de engenharia validado para garantir entregas no prazo, com qualidade de código impecável e alinhamento total de expectativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Search, title: "1. Descoberta", desc: "Mapeamento das regras de negócio, escopo e requisitos técnicos do projeto." },
              { icon: PenTool, title: "2. UI/UX Design", desc: "Prototipagem de alta fidelidade para validar a jornada do usuário antes do código." },
              { icon: Code2, title: "3. Engenharia", desc: "Desenvolvimento utilizando Next.js e arquitetura moderna com entregas ágeis." },
              { icon: Rocket, title: "4. Deploy & Escala", desc: "Testes rigorosos de QA, otimização de SEO e lançamento em infraestrutura Cloud." }
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                <step.icon className={`w-8 h-8 ${service.theme.text} mb-6`} />
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: CARROSSEL DE PORTFÓLIO CONDICIONAL --- */}
      {serviceProjects.length > 0 && (
        <section className="relative z-10 py-20 sm:py-24 container mx-auto px-4 sm:px-6 md:px-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12 border-t border-white/5 pt-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight mb-2">
                Projetos de <span className={service.theme.text}>{service.shortTitle}</span>
              </h2>
              <p className="text-slate-400 text-sm">Arraste para o lado e veja nossos casos de sucesso reais.</p>
            </div>
            <Link href="/portfolio" className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
              Ver todo portfólio <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {serviceProjects.map((item) => (
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id} 
                className="w-[85vw] sm:w-[400px] md:w-[450px] shrink-0 snap-center group relative border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col"
              >
                <div className="relative w-full h-56 sm:h-64 bg-black overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] to-transparent" />
                </div>
                <div className="p-6 relative z-10 flex flex-col flex-grow bg-white/[0.02]">
                  <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${service.theme.text} mb-2 block`}>
                    {service.shortTitle}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase italic mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}