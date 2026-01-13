"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Contact() {
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    // Validação de Rigor Analítico: impede o envio se o número não condizer com o país
    if (phoneValue) {
      const valid = isValidPhoneNumber(phoneValue);
      setIsPhoneValid(valid);
      
      if (!valid) {
        e.preventDefault();
        return;
      }
    } else {
      e.preventDefault();
      setIsPhoneValid(false);
      return;
    }
  };
  return (
    <section id="contato" className="relative py-32 px-6 container mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LADO ESQUERDO (Mantido conforme solicitado) */}
        <div className="space-y-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-codexo-primary font-black text-[10px] tracking-[0.6em] uppercase">Início de Protocolo // Contato</span>
            <h3 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase mt-6 tracking-tighter">
              VAMOS <br /> <span className="outline-text">CONSTRUIR?</span>
            </h3>
          </motion.div>
          
          <div className="space-y-8">
            <p className="text-slate-300 text-xl leading-relaxed max-w-md italic border-l-2 border-codexo-primary pl-6">
              "Pronto para transformar sua ideia em realidade digital com engenharia de elite?"
            </p>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-codexo-primary/5 blur-[50px] group-hover:bg-codexo-primary/10 transition-colors" />
              <p className="text-[10px] font-black tracking-[0.3em] text-white uppercase opacity-50">Canais Oficiais:</p>
              <div className="space-y-2 text-lg font-bold">
                <p className="text-codexo-primary">codexotecnologia@gmail.com</p>
                <p className="text-slate-400 font-mono">(41) 99565-6346</p>
              </div>
            </div>
          </div>
        </div>

{/* LADO DIREITO: FORMULÁRIO COM VALIDAÇÃO INTERNACIONAL */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full">
          <form 
            onSubmit={handleSubmit}
            action="https://formspree.io/f/YOUR_ID" 
            method="POST"
            className="flex flex-col h-full space-y-6 p-8 bg-white/[0.01] border border-white/10 rounded-3xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">Nome</label>
                <input type="text" name="name" placeholder="Seu nome" required className="w-full bg-codexo-dark-light border border-white/10 p-4 text-xs text-white outline-none focus:border-codexo-primary transition-all rounded-xl" />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">
                  Telefone {!isPhoneValid && <span className="text-red-500 ml-2 animate-pulse">// FORMATO INVÁLIDO</span>}
                </label>
                <div className={`codexo-phone-wrapper ${!isPhoneValid ? 'border-red-500/50' : 'border-white/10'}`}>
                  <PhoneInput
                    international
                    defaultCountry="BR"
                    value={phoneValue}
                    onChange={(val) => {
                      setPhoneValue(val);
                      if (val) setIsPhoneValid(isValidPhoneNumber(val));
                    }}
                    className="codexo-phone-input"
                    placeholder="Número de telefone"
                  />
                  <input type="hidden" name="phone" value={phoneValue} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">E-mail</label>
              <input 
                type="email" 
                name="email" 
                placeholder="exemplo@dominio.com" 
                required 
                className="w-full bg-codexo-dark-light border border-white/10 p-4 text-xs text-white outline-none focus:border-codexo-primary transition-all rounded-xl" 
              />
            </div>
            
            <div className="space-y-1 flex-grow">
  <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">
    Descrição do Projeto
  </label>
  <textarea 
    name="message" 
    placeholder="Descreva seu desafio técnico..." 
    required 
    className="w-full h-full min-h-[150px] bg-codexo-dark-light border border-white/10 p-4 text-xs text-white outline-none focus:border-codexo-primary transition-all resize-none rounded-xl" 
  />
</div>

{/* BOTÃO COM ESPAÇAMENTO REFORÇADO */}
<button 
  type="submit" 
  className="group relative w-full h-16 bg-codexo-primary overflow-hidden transition-all rounded-xl shadow-lg shadow-codexo-primary/20 mt-10 active:scale-95"
>
  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-10" />
  <div className="relative z-10 flex items-center justify-center gap-4">
    <span className="text-[11px] font-black tracking-[0.5em] text-white uppercase">
      Enviar Mensagem
    </span>
    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
  </div>
</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}