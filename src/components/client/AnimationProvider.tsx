"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

export default function AnimationProvider({ children }: { children: ReactNode }) {
  // LazyMotion evita que o motor pesado do Framer Motion vá para o HTML inicial
  // domAnimation carrega apenas o essencial para as animações rodarem suaves
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}