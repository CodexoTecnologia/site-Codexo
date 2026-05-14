// src/components/sections/BlogPreview.tsx
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { blogPosts } from '@/data/blog-posts';
import BlogCard from '@/components/ui/Blog/BlogCard';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {RECENT_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

    </section>
  );
}