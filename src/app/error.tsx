"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro para monitoramento técnico
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center px-4 text-center bg-codexo-dark text-white">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
          Algo deu <span className="outline-text">errado</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto uppercase tracking-widest">
          Ocorreu um erro inesperado na execução do sistema.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-codexo-primary text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-xl transition-all hover:scale-105 shadow-lg shadow-codexo-primary/20"
        >
          Tentar Novamente
        </button>
      </div>
    </main>
  );
}