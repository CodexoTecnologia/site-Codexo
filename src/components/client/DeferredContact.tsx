// para evitar carregar o form de contato pesado no LCP, usamos um componente de placeholder com Intersection Observer para só carregar o form quando chegar perto da seção. O placeholder tem uma estrutura similar para evitar "layout shift" e manter a experiência fluida.
"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/sections/Home/Contact"), {
  ssr: false,
});

function ContactPlaceholder() {
  return (
    <section
      id="contato"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 container mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="h-3 w-24 bg-white/5 rounded animate-pulse" />
            <div className="h-10 sm:h-12 w-64 bg-white/5 rounded animate-pulse" />
            <div className="h-10 sm:h-12 w-52 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="h-24 w-full max-w-md bg-white/[0.03] border border-white/5 rounded-2xl animate-pulse" />
        </div>

        <div className="h-[420px] sm:h-[460px] lg:h-[520px] w-full bg-white/[0.01] border border-white/10 rounded-3xl animate-pulse" />
      </div>
    </section>
  );
}

export default function DeferredContact() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        // Carrega um pouco antes de chegar na seção
        rootMargin: "600px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      {shouldLoad ? <Contact /> : <ContactPlaceholder />}
    </>
  );
}
