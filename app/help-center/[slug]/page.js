import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, ChevronRight, Mail, ArrowRight, BookOpen, CheckCircle, HelpCircle, AlertTriangle 
} from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from '../articles';

// Static generation parameters
export async function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export default async function HelpArticlePage(props) {
  const params = await props.params;
  const { slug } = params;

  // Retrieve the requested article
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related article details
  const relatedArticles = article.related
    ? articles.filter((art) => article.related.includes(art.slug))
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-black">
      {/* Dynamic Navigation */}
      <Navbar />

      <main className="flex-grow pt-32 lg:pt-40 pb-20">
        <div className="max-w-2xl mx-auto px-6 text-left">
          
          {/* Back to Help Center Link */}
          <div className="mb-5 flex">
            <Link 
              href="/help-center" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-zinc-500 hover:text-black transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Help Center
            </Link>
          </div>

          {/* Breadcrumb Row */}
          <nav className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-zinc-400 mb-6 select-none border-b border-black/[0.03] pb-4">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-zinc-300" />
            <Link href="/help-center" className="hover:text-black transition-colors">Help Center</Link>
            <ChevronRight className="w-3 h-3 text-zinc-300" />
            <span className="text-zinc-500">{article.category}</span>
            <ChevronRight className="w-3 h-3 text-zinc-300" />
            <span className="text-black truncate max-w-[150px]">{article.title}</span>
          </nav>

          {/* Main Article Content Card */}
          <div className="bg-white border border-black/5 rounded-2xl p-6 sm:p-10 shadow-premium">
            
            {/* Category block tag */}
            <span className="text-[9px] font-extrabold text-violet-600 uppercase tracking-wider block mb-3 bg-violet-50 border border-violet-500/10 px-2 py-0.5 rounded-full w-fit">
              {article.category}
            </span>

            {/* Question Title */}
            <h1 
              className="text-2xl sm:text-3xl font-bold text-black tracking-tight leading-[1.25] mb-2"
              style={{
                fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
              }}
            >
              {article.title}
            </h1>

            {/* Short article description (excerpt) */}
            <p className="text-sm sm:text-base text-zinc-500 font-semibold leading-relaxed mb-4">
              {article.excerpt}
            </p>

            {/* Last updated date */}
            <span className="text-[11px] text-zinc-400 font-bold block mb-6">
              Last Updated {article.lastUpdated}
            </span>

            {/* Content Divider */}
            <hr className="border-black/5 mb-8" />

            {/* Answer Content Body */}
            <div className="space-y-8">
              
              {/* Section 1: Overview */}
              <div>
                <h2 className="text-sm sm:text-base font-bold text-black mb-3.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-600" /> Overview
                </h2>
                <div className="text-xs sm:text-sm leading-[1.6] text-zinc-600 font-semibold whitespace-pre-line">
                  {article.overview}
                </div>
              </div>

              {/* Section 2: Steps to Take */}
              {article.steps && article.steps.length > 0 && (
                <div className="border-t border-black/5 pt-8">
                  <h2 className="text-sm sm:text-base font-bold text-black mb-3.5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-600" /> How to Use
                  </h2>
                  <ol className="space-y-3">
                    {article.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full bg-violet-50 text-violet-600 text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm leading-[1.65] text-zinc-600 font-semibold pt-0.5">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Section 3: Pro Tips */}
              {article.tips && article.tips.length > 0 && (
                <div className="border-t border-black/5 pt-8">
                  <h2 className="text-sm sm:text-base font-bold text-black mb-3.5 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-violet-600" /> Pro Tips for Creators
                  </h2>
                  <ul className="space-y-2.5">
                    {article.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                        <p className="text-xs sm:text-sm leading-[1.6] text-zinc-600 font-semibold">
                          {tip}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section 4: Troubleshooting */}
              {article.troubleshooting && article.troubleshooting.length > 0 && (
                <div className="border-t border-black/5 pt-8 bg-zinc-50/50 p-5 rounded-xl border border-black/[0.02]">
                  <h2 className="text-sm sm:text-base font-bold text-black mb-3.5 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-violet-600" /> Troubleshooting & Issues
                  </h2>
                  <ul className="space-y-3">
                    {article.troubleshooting.map((issue, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                        <p className="text-xs sm:text-sm leading-[1.6] text-zinc-600 font-semibold">
                          {issue}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Related Articles Divider & Block */}
            {relatedArticles.length > 0 && (
              <div className="border-t border-black/5 mt-10 pt-8">
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-4">
                  Related Articles
                </h3>
                <div className="flex flex-col gap-2">
                  {relatedArticles.map((art) => (
                    <Link
                      key={art.slug}
                      href={`/help-center/${art.slug}`}
                      className="group flex items-center justify-between py-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-black transition-colors"
                    >
                      <span className="flex items-center gap-2 pr-4">
                        <span className="w-1 h-1 rounded-full bg-violet-600 shrink-0 animate-pulse" />
                        {art.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </div>

          {/* Need More Help Support Card */}
          <div className="max-w-xl bg-white border border-black/5 rounded-2xl p-8 shadow-premium flex flex-col items-center gap-5 mt-12 text-center w-full mx-auto">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-black/5 flex items-center justify-center text-violet-600 shadow-sm">
              <Mail className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-black mb-1">Still need help?</h3>
              <p className="text-xs text-zinc-400 font-semibold max-w-sm mx-auto leading-relaxed">
                If this article didn&apos;t answer your question, reach out to our team at support@kidastudios.com. We usually respond within 24 hours.
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
