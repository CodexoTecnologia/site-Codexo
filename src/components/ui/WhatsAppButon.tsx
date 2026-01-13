"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Instale: npm install react-icons

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5541995656346?text=Olá! Gostaria de saber mais sobre os serviços da Codexo."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[110] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-30"
      />
      <FaWhatsapp size={30} className="relative z-10" />
    </motion.a>
  );
}