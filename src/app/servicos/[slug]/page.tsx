import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-[#0f0f1e] text-white flex items-center justify-center p-24">
      <h1 className="text-4xl font-black italic uppercase tracking-tighter">
        Nossos <span className="text-[#55305c]">Serviços</span>
      </h1>
    </main>
  );
}