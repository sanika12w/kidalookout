'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Video, Watch, Settings, ShieldAlert, Search, ArrowRight, X, Mail, Info 
} from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { articles } from './articles';

const categoryMeta = [
  {
    name: 'Getting Started',
    icon: BookOpen,
    description: 'Learn about Lookout features, device compatibility, and starting your first video.'
  },
  {
    name: 'Recording Modes',
    icon: Video,
    description: 'Explore Split Screen layout, Picture-in-Picture customization, and Focus Mode.'
  },
  {
    name: 'Apple Watch',
    icon: Watch,
    description: 'Set up remote control streams and troubleshoot wrist connectivity.'
  },
  {
    name: 'Troubleshooting',
    icon: Settings,
    description: 'Resolve recording failures, heat concerns, and audio synchronization issues.'
  },
  {
    name: 'Privacy & Permissions',
    icon: ShieldAlert,
    description: 'Manage camera/microphone permissions and understand local offline security.'
  }
];

export default function HelpCenterIndex() {
  const [searchQuery, setSearchQuery] = useState('');

  // Group articles by category
  const categoriesMap = categoryMeta.map(cat => {
    const catArticles = articles.filter(art => art.category === cat.name);
    return {
      ...cat,
      articles: catArticles
    };
  });

  // Filter articles based on search query
  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isSearching = searchQuery.trim() !== '';

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-black">
      {/* Top sticky Navbar */}
      <Navbar />

      <main className="flex-grow pt-32 lg:pt-40 pb-20">
        
        {/* Help Center Hero */}
        <section className="py-12 lg:py-16 text-center px-6">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="text-xs sm:text-sm font-extrabold text-violet-600 tracking-[0.2em] uppercase block mb-4">
                HELP CENTER
              </span>
              <h1 
                className="text-4xl sm:text-5xl font-bold text-black tracking-tight leading-[1.15] mb-6"
                style={{
                  fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
                }}
              >
                How can we help?
              </h1>
              <p className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-[1.6] font-semibold mb-8">
                Search documentation or browse categories below to find guides on camera setups, remote recording, and settings.
              </p>
            </ScrollReveal>

            {/* Premium Search Bar */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles (e.g. 'watch', 'split')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-13 pl-12 pr-12 rounded-full border border-black/5 bg-white shadow-premium text-sm sm:text-base font-semibold placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                />
                {isSearching && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Dynamic Support Content */}
        <section className="pb-16 px-6">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            
            {isSearching ? (
              // Search Results list
              <div className="w-full min-h-[300px]">
                <div className="border-b border-black/5 pb-4 mb-6 text-left">
                  <h2 className="text-lg font-bold text-black">
                    Search Results for &ldquo;{searchQuery}&rdquo;
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Found {filteredArticles.length} matching {filteredArticles.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>

                {filteredArticles.length > 0 ? (
                  <div className="bg-white border border-black/5 rounded-2xl p-6 sm:p-8 shadow-premium text-left w-full flex flex-col">
                    {filteredArticles.map((art) => (
                      <Link
                        key={art.slug}
                        href={`/help-center/${art.slug}`}
                        className="group flex items-center justify-between py-3.5 border-b border-black/[0.03] last:border-0 text-left"
                      >
                        <div className="pr-4">
                          <span className="text-[9px] font-extrabold text-violet-500 uppercase tracking-wider block mb-1">
                            {art.category}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-black group-hover:text-violet-600 transition-colors">
                            {art.title}
                          </span>
                          <span className="text-xs text-zinc-400 font-semibold block mt-1 line-clamp-1">
                            {art.excerpt}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-2xl border border-black/5 p-8 w-full">
                    <Info className="w-8 h-8 text-zinc-300 mx-auto mb-3" />
                    <h3 className="text-sm font-bold text-black">No documentation matches your query</h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Try searching for broader terms like &ldquo;Watch&rdquo;, &ldquo;Permissions&rdquo;, or &ldquo;Recording&rdquo;.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // Category Directory List
              <div className="w-full flex flex-col gap-6">
                {categoriesMap.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={category.name}
                      className="bg-white border border-black/5 rounded-2xl p-6 sm:p-8 shadow-premium text-left w-full"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black/5">
                        <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-black/5 flex items-center justify-center text-violet-600 shadow-xs">
                          <Icon className="w-4.5 h-4.5 stroke-[2]" />
                        </div>
                        <h2 className="text-base sm:text-lg font-bold text-black">
                          {category.name}
                        </h2>
                      </div>
                      
                      {/* List of Questions */}
                      <div className="flex flex-col">
                        {category.articles.length > 0 ? (
                          category.articles.map((art) => (
                            <Link
                              key={art.slug}
                              href={`/help-center/${art.slug}`}
                              className="group flex items-center justify-between py-3 border-b border-black/[0.03] last:border-0 text-sm sm:text-base font-semibold text-zinc-700 hover:text-black transition-colors"
                            >
                              <span className="flex items-center gap-2 pr-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 shrink-0" />
                                {art.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                            </Link>
                          ))
                        ) : (
                          <span className="text-xs text-zinc-400 italic">No articles available.</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Need More Help Support Card */}
            <div className="max-w-xl bg-white border border-black/5 rounded-2xl p-8 shadow-premium flex flex-col items-center gap-5 mt-16 text-center w-full">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-black/5 flex items-center justify-center text-violet-600 shadow-sm">
                <Mail className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-black mb-1">Still need help?</h3>
                <p className="text-xs text-zinc-400 font-semibold max-w-sm mx-auto leading-relaxed">
                  If you cannot find the answer to your question, feel free to contact our support team. We typically reply within 24 hours.
                </p>
              </div>
              <a
                href="mailto:support@kidastudios.com"
                className="px-6 h-10 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] shadow-premium cursor-pointer"
              >
                Contact Support <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
