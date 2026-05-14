// src/app/blog/page.tsx
import type { Metadata } from 'next';
import BlogPageClient from '@/components/sections/Blog/BlogPageClient';

export const metadata: Metadata = {
  title: 'Insights e Engenharia Web | Codexo Blog',
  description: 'Artigos, tutoriais e insights sobre desenvolvimento de alta performance, SEO, Next.js e automação empresarial.',
  alternates: {
    canonical: 'https://codexo.com.br/blog',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}