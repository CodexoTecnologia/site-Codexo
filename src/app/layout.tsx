import type { Metadata, Viewport } from "next"; // Adicionado Viewport type
import { Geist, Geist_Mono } from "next/font/google";
import "./css/Glocal.css"; // Confirme se o nome é esse mesmo ou globals.css
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Crucial para LCP
  // Removi preload: true pois é o padrão
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  weight: ['400', '700', '900'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
  adjustFontFallback: true,
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codexo.com.br'),
  title: {
    template: '%s | Codexo Tecnologia',
    default: 'Codexo Tecnologia - Desenvolvimento Web de Alta Performance',
  },
  description: 'Transformamos ideias em realidade digital com engenharia de elite. Sistemas web otimizados, automação inteligente e soluções sob medida para escalabilidade e performance.',
  keywords: [
    'desenvolvimento web', 'alta performance', 'next.js', 'automação', 
    'sistemas web', 'curitiba', 'react', 'typescript',
  ],
  authors: [{ name: 'Codexo Tecnologia' }],
  creator: 'Codexo Tecnologia',
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://codexo.com.br',
    siteName: 'Codexo Tecnologia',
    title: 'Codexo Tecnologia - Desenvolvimento Web de Alta Performance',
    description: 'Transformamos ideias em realidade digital com engenharia de elite.',
    images: [{
      url: '/assets/logo/logo_codexo_nome_roxo_principal.png',
      width: 1200,
      height: 630,
      alt: 'Codexo Tecnologia',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Codexo Tecnologia',
    description: 'Desenvolvimento Web de Alta Performance',
    images: ['/og-image.svg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://codexo.com.br',
    languages: {
      'pt-BR': 'https://codexo.com.br',
    },
  },
  
  icons: {
    icon: [
      { url: '/assets/logo/logo_codexo_roxo_principal.svg', type: 'image/svg+xml' },
      // Dica: para favicon padrão, mantenha apenas um ou use sizes="any" para ico
    ],
    shortcut: '/assets/logo/logo_codexo_roxo_principal.svg',
    apple: '/assets/logo/logo_codexo_roxo_principal.svg',
  },
};

// Configuração correta de Viewport no Next.js 14+
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#55305c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Links de fonte removidos: next/font cuida disso automaticamente */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload manual de imagem removido: Deixe o componente Hero com 'priority' gerenciar isso */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ minHeight: '100svh' }} // Use svh para mobile
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}