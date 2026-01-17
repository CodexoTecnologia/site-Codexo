// ✅ Server Component - Structured Data (JSON-LD)
export default function StructuredData() {
  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://codexo.com.br/#organization", // ID único para vincular no grafo
    "name": "Codexo Tecnologia",
    "url": "https://codexo.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": "https://codexo.com.br/assets/logo/logo_codexo_nome_branco.svg",
      "width": 112,
      "height": 36
    },
    "description": "Desenvolvimento web de alta performance, automação inteligente e soluções sob medida para escalabilidade empresarial",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-41-99565-6346",
      "contactType": "customer service",
      "email": "codexotecnologia@gmail.com",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"]
    },
    "sameAs": [
      "https://github.com/CodexoTecnologia",
      "https://www.linkedin.com/company/codexo-tecnologia",
      "https://www.instagram.com/codexotecnologia"
    ]
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://codexo.com.br/#website",
    "url": "https://codexo.com.br",
    "name": "Codexo Tecnologia",
    "publisher": {
      "@id": "https://codexo.com.br/#organization" // Vincula este site à organização acima
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://codexo.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@type": "Service",
    "serviceType": "Desenvolvimento Web e Software",
    "provider": {
      "@id": "https://codexo.com.br/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Desenvolvimento",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistemas Web & Alta Performance",
            "description": "Plataformas rápidas, seguras e otimizadas para conversão."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação & Inteligência",
            "description": "Automações para transformar fluxos de trabalho de forma inteligente."
          }
        }
      ]
    }
  };

  // Criação do Grafo Unificado
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      serviceSchema
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}