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
    <section id="contato" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 container mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        
        {/* LADO ESQUERDO */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-codexo-primary font-black text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] lg:tracking-[0.55em] xl:tracking-[0.6em] uppercase">Início de Protocolo // Contato</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black text-white leading-[0.9] uppercase mt-3 sm:mt-4 md:mt-5 lg:mt-6 tracking-tighter">
              VAMOS <br /> <span className="outline-text">CONSTRUIR?</span>
            </h3>
          </motion.div>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md italic border-l-2 border-codexo-primary pl-3 sm:pl-4 md:pl-5 lg:pl-6">
              Pronto para transformar sua ideia em realidade digital com engenharia de elite?
            </p>
            <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-xl md:rounded-2xl space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-3.5 xl:space-y-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-codexo-primary/5 blur-[35px] sm:blur-[40px] md:blur-[45px] lg:blur-[50px] group-hover:bg-codexo-primary/10 transition-colors" />
              <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.275em] lg:tracking-[0.3em] text-white uppercase opacity-50">Canais Oficiais:</p>
              <div className="space-y-1 sm:space-y-1.5 text-sm sm:text-base md:text-lg font-bold">
                <p className="text-codexo-primary break-all">codexotecnologia@gmail.com</p>
                <p className="text-slate-400 font-mono">(41) 99565-6346</p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: FORMULÁRIO */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full">
          <form 
            onSubmit={handleSubmit}
            action="https://formspree.io/f/YOUR_ID" 
            method="POST"
            className="flex flex-col h-full space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-white/[0.01] border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 md:gap-4">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1 sm:ml-1.5 md:ml-2">Nome</label>
                <input type="text" name="name" placeholder="Seu nome" required className="w-full bg-codexo-dark-light border border-white/10 p-2.5 sm:p-3 md:p-3.5 lg:p-4 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-white outline-none focus:border-codexo-primary transition-all rounded-lg sm:rounded-lg md:rounded-xl" />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1 sm:ml-1.5 md:ml-2">
                  Telefone {!isPhoneValid && <span className="text-red-500 ml-2 animate-pulse text-[6px] sm:text-[7px]"> FORMATO INVÁLIDO</span>}
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
                    countrySelectProps={{ className: "codexo-country-select" }}
                    className="codexo-phone-input"
                    placeholder="Número de telefone"
                  />
                  <input type="hidden" name="phone" value={phoneValue} />
                </div>
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1 sm:ml-1.5 md:ml-2">E-mail</label>
              <input 
                type="email" 
                name="email" 
                placeholder="exemplo@dominio.com" 
                required 
                className="w-full bg-codexo-dark-light border border-white/10 p-2.5 sm:p-3 md:p-3.5 lg:p-4 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-white outline-none focus:border-codexo-primary transition-all rounded-lg sm:rounded-lg md:rounded-xl" 
              />
            </div>
            
            <div className="space-y-1.5 sm:space-y-2 flex-grow">
              <label className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1 sm:ml-1.5 md:ml-2">
                Descrição do Projeto
              </label>
              <textarea 
                name="message" 
                placeholder="Descreva seu desafio técnico..." 
                required 
                className="w-full h-full min-h-[100px] sm:min-h-[120px] md:min-h-[135px] lg:min-h-[150px] bg-codexo-dark-light border border-white/10 p-2.5 sm:p-3 md:p-3.5 lg:p-4 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-white outline-none focus:border-codexo-primary transition-all resize-none rounded-lg sm:rounded-lg md:rounded-xl" 
              />
            </div>

            {/* BOTÃO COM ESPAÇAMENTO REFORÇADO */}
            <button 
              type="submit" 
              className="group relative w-full h-11 sm:h-12 md:h-14 lg:h-16 bg-codexo-primary overflow-hidden transition-all rounded-lg sm:rounded-lg md:rounded-xl shadow-lg shadow-codexo-primary/20 mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 active:scale-95"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-10" />
              <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-black tracking-[0.35em] sm:tracking-[0.4em] md:tracking-[0.45em] lg:tracking-[0.5em] text-white uppercase">
                  Enviar Mensagem
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
              </div>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Ajustes globais para responsividade do seletor de país do telefone */}
      <style jsx global>{`
        .codexo-phone-wrapper {
          @apply relative w-full bg-codexo-dark-light border p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-lg sm:rounded-lg md:rounded-xl flex items-center gap-2;
        }
        .codexo-phone-wrapper .PhoneInput {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .codexo-phone-wrapper .PhoneInputCountry {
          display: flex;
          align-items: center;
        }
        .codexo-phone-wrapper .PhoneInputCountrySelect {
          width: auto;
        }
        .codexo-phone-wrapper select.codexo-country-select {
          width: 100%;
          max-width: 110px;
          background: transparent;
          color: #fff;
          font-size: 12px;
          border: none;
          outline: none;
        }
        .codexo-phone-wrapper .PhoneInputInput {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 13px;
        }
        /* Dropdown de países: limitar altura e permitir scroll em telas pequenas */
        .codexo-phone-wrapper select.codexo-country-select option {
          font-size: 12px;
        }
        /* Força limite de altura do dropdown (browsers baseados em WebKit/Chromium) */
        select.codexo-country-select {
          max-height: 50vh !important;
          overflow-y: auto !important;
        }
        @media (max-width: 768px) {
          .codexo-phone-wrapper select.codexo-country-select {
            max-width: 90px;
            font-size: 10px;
          }
          .codexo-phone-wrapper select.codexo-country-select option {
            font-size: 11px;
          }
          select.codexo-country-select {
            max-height: 45vh !important;
          }
        }
        @media (max-width: 480px) {
          .codexo-phone-wrapper select.codexo-country-select {
            max-width: 78px;
            font-size: 9px;
          }
          .codexo-phone-wrapper select.codexo-country-select option {
            font-size: 10px;
          }
          select.codexo-country-select {
            max-height: 40vh !important;
          }
        }
      `}</style>
    </section>
  );
}