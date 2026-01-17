import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Codexo Tecnologia',
    short_name: 'Codexo',
    description: 'Desenvolvimento Web de Alta Performance',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f1e',
    theme_color: '#55305c',
    icons: [
      {
        src: '/assets/logo/logo_codexo_roxo_principal.svg', // Garanta que essa imagem existe
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}