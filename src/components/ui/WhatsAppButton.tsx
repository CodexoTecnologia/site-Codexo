"use client";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541995656346?text=Olá! Gostaria de saber mais sobre os serviços da Codexo."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
      className="fixed bottom-6 left-4 md:bottom-10 md:left-8 z-[110] group"
    >

      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000" />
      
      <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95">
        <FaWhatsapp className="text-2xl md:text-3xl lg:text-4xl" />
      </div>
    </a>
  );
}