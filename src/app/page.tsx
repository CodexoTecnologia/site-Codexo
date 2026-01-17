import type { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Codexo Tecnologia — Engenharia Web de Alta Performance',
  description: 'Codexo Tecnologia entrega sistemas web otimizados, automação e soluções sob medida com foco em performance, SEO e escalabilidade.',
  alternates: {
    canonical: 'https://codexo.com.br',
  },
  openGraph: {
    title: 'Codexo Tecnologia — Engenharia Web de Alta Performance',
    description: 'Soluções web otimizadas, automação e consultoria em engenharia de software.',
    url: 'https://codexo.com.br',
    siteName: 'Codexo Tecnologia',
    images: [{ url: '/assets/logo/logo_codexo_nome_roxo_principal.png', width: 1200, height: 630, alt: 'Codexo Tecnologia' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// Navbar e Hero importados diretamente (críticos para LCP)
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';

// ✅ Lazy load de seções abaixo da dobra
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />,
});

const Modules = dynamic(() => import('@/components/sections/Modules'), {
  loading: () => <SectionSkeleton />,
});

const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
  loading: () => <SectionSkeleton />,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />,
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="h-96 bg-codexo-dark animate-pulse" />,
});

// ✅ Widgets lazy loaded
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'));
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));

// ✅ Skeleton para seções em carregamento
function SectionSkeleton() {
  return (
    <section className="relative py-24 px-8 container mx-auto">
      <div className="space-y-8 animate-pulse">
        <div className="h-4 bg-white/5 rounded w-32" />
        <div className="h-12 bg-white/5 rounded w-2/3" />
        <div className="space-y-4">
          <div className="h-4 bg-white/5 rounded" />
          <div className="h-4 bg-white/5 rounded w-5/6" />
          <div className="h-4 bg-white/5 rounded w-4/6" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ✅ Hero renderizado normalmente - acima da dobra */}
        <Hero />
        
        {/* ✅ Seções lazy loaded com Suspense boundaries */}
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Modules />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* ✅ Widgets client-only */}
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
