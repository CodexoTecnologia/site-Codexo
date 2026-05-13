import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimização de Imagens (WebP é o padrão ouro de compatibilidade/performance)
  images: {
    formats: ['image/avif', 'image/webp'], 
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance Pura
  compress: true, 
  reactStrictMode: true,
  poweredByHeader: false, 

  // Tree Shaking (Remove peso morto das libs que você usa)
  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      'react-icons', 
      'framer-motion', 
      'date-fns', 
      'lodash',
      'react-phone-number-input'
    ],
    // Otimização extra de servidor
    optimizeServerReact: true,
  },
  
  // Headers de Cache e Segurança (Essencial para Best Practices 100)
  async headers() {
    const contentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://formspree.io https://script.google.com",
      "form-action 'self' https://formspree.io https://script.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          // Cache longo (1 ano) para imagens estáticas
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;