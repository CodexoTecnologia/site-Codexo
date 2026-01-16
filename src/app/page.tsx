"use client";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About"; 
import Modules from "@/components/sections/Modules";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/layout/Footer"; 
import Contact from "@/components/sections/Contact"; 
import WhatsAppButton from "@/components/ui/WhatsAppButon"; 
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-codexo-dark overflow-hidden">
      <Navbar />
      <div id="inicio"><Hero /></div>
      <div id="sobre"><About /></div>
      <div id="servicos"><Modules /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contato"><Contact /></div>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}