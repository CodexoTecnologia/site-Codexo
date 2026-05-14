// src/components/sections/BlogPreview.tsx
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { blogPosts } from '@/data/blog-posts';

const RECENT_POSTS = blogPosts.slice(0, 3);

export default function BlogPreview() {
  return (
    <section id="blog-preview" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 container mx-auto">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 sm:mb-14 gap-6">
        <div className="flex flex-col">
          <span className="text-codexo-accent font-black text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4 block">
            Codexo Journal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1] uppercase tracking-tighter">
            ÚLTIMOS <br className="hidden md:block" />
            <span className="outline-text text-white/60 italic drop-shadow-md">INSIGHTS</span>
          </h2>
        </div>
        
        <Link 
          href="/blog"
          className="group flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest hover:text-white transition-colors"
        >
          <span>Ver todos os artigos</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-codexo-primary group-hover:border-codexo-primary transition-all">
            <FaArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </div>

      {/* GRID DE ARTIGOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {RECENT_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="group relative flex flex-col items-start justify-between p-6 sm:p-8 bg-[#0F0F1E] border border-white/5 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:border-codexo-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(216,150,255,0.15)]"
          >
            {/* Meta Data */}
            <div className="flex flex-wrap items-center gap-2 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase mb-4 w-full">
              <span className="text-codexo-accent">{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <time dateTime={post.date} className="text-slate-400">
                {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
              </time>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500 font-semibold tracking-[0.12em]">{post.readTime}</span>
            </div>

            {/* Content */}
            <div className="relative w-full flex-grow">
              <h3 className="mt-2 text-lg sm:text-xl font-black text-white leading-tight group-hover:text-codexo-accent transition-colors duration-300 line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0 z-10" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400 line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            {/* Read More */}
            <div className="relative z-20 mt-8 flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
              <span className="group-hover:text-white transition-colors">Ler Artigo</span>
              <div className="h-[1px] w-4 bg-codexo-accent group-hover:w-8 transition-all duration-300" />
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}