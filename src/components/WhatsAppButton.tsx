"use client";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541995656346?text=Olá! Gostaria de saber mais sobre os serviços da Codexo."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
      // POSICIONAMENTO:
      // - Mobile: bottom-6 left-4 (Canto inferior esquerdo)
      // - Desktop: bottom-10 left-8 (Mais respiro)
      // Isso evita conflito com o botão de 'Voltar ao Topo' que está na direita.
      className="fixed bottom-6 left-4 md:bottom-10 md:left-8 z-[110] group"
    >
      {/* EFEITO DE RADAR (PING) - CSS PURO */}
      {/* Cria uma onda que sai do botão para chamar atenção (Substitui o animate-pulse do framer) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000" />
      
      {/* BOTÃO REAL */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95">
        <FaWhatsapp className="text-2xl md:text-3xl lg:text-4xl" />
      </div>
    </a>
  );
}