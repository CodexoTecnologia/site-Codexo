"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6"; // Atualizado para fa6 conforme seus outros arquivos

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Valor ajustado para 300 para aparecer logo após o Hero
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Otimização: requestAnimationFrame para não travar o scroll em celulares antigos
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      // MOBILE FIRST:
      // 1. 'right-4': No celular fica no cantinho certo.
      // 2. 'md:right-8': No desktop ganha mais ar.
      // 3. Lógica de visibilidade via classes CSS (sem remover do DOM)
      className={`
        fixed bottom-6 right-4 md:bottom-10 md:right-8 z-[90] 
        w-10 h-10 md:w-12 md:h-12 rounded-full 
        bg-codexo-dark border border-codexo-primary/40 text-codexo-primary 
        flex items-center justify-center 
        shadow-lg shadow-black/50 backdrop-blur-sm
        transition-all duration-500 ease-in-out group
        hover:bg-codexo-primary hover:text-white hover:border-codexo-primary
        hover:shadow-codexo-primary/40 hover:-translate-y-1
        ${isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-75 pointer-events-none"}
      `}
    >
      <FaArrowUp className="text-sm md:text-base transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}