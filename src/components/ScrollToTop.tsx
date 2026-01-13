"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; // Flecha conforme solicitado

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Ativação baseada no scroll para eficiência de UX
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          // Formato redondo, borda sutil e posicionamento ao lado do WhatsApp
          className="fixed bottom-10 right-28 z-[999] w-12 h-12 rounded-full bg-codexo-dark border border-codexo-primary/40 text-codexo-primary flex items-center justify-center shadow-lg shadow-black/50 hover:bg-codexo-primary hover:text-white transition-all duration-300 group"
        >
          <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}