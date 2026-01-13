"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="relative py-32 px-6 container mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <span className="text-codexo-primary font-black text-[10px] tracking-[0.5em] uppercase">Sócio Estratégico //</span>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
              Transformando Desafios em <span className="outline-text">Valor Real</span>
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed italic border-l-2 border-codexo-primary pl-6">
              "A Codexo nasceu do propósito de resolver desafios reais através da tecnologia. Mais do que desenvolvedores, somos parceiros comprometidos com o sucesso de quem confia em nossa engenharia."
            </p>
            
            <p className="text-slate-400 text-base leading-relaxed">
              Nosso time de especialistas une **empatia e rigor analítico** para traduzir a complexidade do desenvolvimento em sistemas funcionais de alta performance. Focamos em parcerias sólidas e soluções que simplificam o cotidiano empresarial.
            </p>
          </div>

          {/* Badge de Valores Rápidos */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["Parceria", "Transparência", "Performance", "Empatia", "Segurança"].map((valor) => (
              <span key={valor} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 text-slate-500">
                {valor}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual Técnico Evoluído */}
        <div className="relative aspect-square flex items-center justify-center">
          {/* Círculos de Órbita Sutis */}
          <div className="absolute inset-0 border border-white/5 rounded-full" />
          <div className="absolute inset-10 border border-white/5 rounded-full" />
          
          <div className="relative w-80 h-80 bg-codexo-dark border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            
            {/* O Pentágono de 5 Lados (Simbolizando os 5 especialistas) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border-2 border-codexo-primary/30 clip-pentagon flex items-center justify-center bg-codexo-primary/5"
            >
              <div className="w-full h-full bg-gradient-to-t from-codexo-primary/20 to-transparent" />
            </motion.div>

            <div className="absolute flex flex-col items-center">
               <span className="text-8xl font-black text-white/10 leading-none">05</span>
               <span className="text-[10px] font-bold text-codexo-primary tracking-[0.5em] uppercase">Especialistas</span>
            </div>

            {/* Linhas de Scanner Animadas */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-codexo-primary/40 z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}