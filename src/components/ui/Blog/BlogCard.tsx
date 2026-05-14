// src/components/ui/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/data/blog-posts';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex flex-col bg-[#0a0a13] border border-white/5 rounded-2xl transition-all duration-500 hover:bg-white/[0.02] hover:border-codexo-accent/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(216,150,255,0.2)] overflow-hidden h-full">
      
      {/* 1. IMAGEM DE CAPA (Altura reduzida e object-top para mostrar o topo do site) */}
      <div className="relative w-full h-36 sm:h-40 bg-[#0F0F1E] overflow-hidden rounded-t-2xl translate-z-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0F0F1E] after:z-20">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          // ADICIONADO: object-top garante que o print comece de cima
          className="object-cover object-top transform-gpu backface-hidden transition-transform duration-700 ease-out scale-105 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 will-change-transform"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-[#0F0F1E]/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* 2. CONTEÚDO DO TEXTO (Paddings e fontes menores para suportar 4 colunas) */}
      <div className="flex flex-col flex-grow p-4 sm:p-5 relative z-20">
        
        <div className="flex flex-wrap items-center gap-1.5 text-[8px] sm:text-[9px] font-bold tracking-[0.15em] uppercase mb-3 w-full">
          <span className="text-codexo-accent px-1.5 py-0.5 bg-codexo-accent/10 rounded-md">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
          <time dateTime={post.date} className="text-slate-400 hidden sm:block">
            {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
          </time>
          <span className="hidden sm:block text-slate-600">•</span>
          <span className="text-slate-500 font-semibold tracking-[0.12em]">{post.readTime}</span>
        </div>

        <div className="relative w-full flex-grow">
          <h3 className="text-base sm:text-lg font-black text-white leading-[1.4] tracking-tight group-hover:text-codexo-accent transition-colors duration-300 line-clamp-2 pb-1">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0 z-10" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-slate-400 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Call to Action mais sutil */}
        <div className="relative z-20 mt-4 flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest border-t border-white/5 pt-3">
          <span className="group-hover:text-white transition-colors">Ler Artigo</span>
          <svg className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5 text-codexo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

      </div>
    </article>
  );
}