'use client';

import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Signed up for Lookout to record travel vlogs in Paris, and having both my reaction and the scenery in a single perfectly synced take saved me hours in post-production edits! Truly a surgical tool for modern creators.",
      author: "Sarah Jenkins",
      role: "@TravelVlogs, Creator",
      stars: 5,
    },
    {
      quote: "I’m a professional solo creator, and this app is essential for navigating production. Screen previews are instant, and the voice trigger 'Hey Lookout' works perfectly offline. Absolutely worth the download.",
      author: "Marcus Chen",
      role: "Solo Creator & Podcaster",
      stars: 5,
    },
    {
      quote: "The best dual camera app I have ever experienced. Extremely stable, very pretty, and easy to use. Best of all, the app runs cool and has zero frame drops or audio offset. It leverages native Apple APIs to the fullest.",
      author: "Devon Reynolds",
      role: "Mobile Journalist",
      stars: 5,
    },
    {
      quote: "Lookout just saved my production! The Apple Watch companion app is outstanding. Direct live preview on my wrist lets me frame shots perfectly when the phone is mounted high on a tripod or gimbal.",
      author: "Stacy Brooks",
      role: "Independent Filmmaker",
      stars: 5,
    },
    {
      quote: "Focus Mode is a complete game-changer. I can record dual-stream HD/UHD interviews without the screen glare distracting my guests. It conserves battery life and maintains complete discretion.",
      author: "David Vance",
      role: "Interview Host",
      stars: 5,
    },
    {
      quote: "No cloud, no accounts, no data harvesting. As a privacy-first content producer, knowing my dual-perspective recordings stay strictly local is the absolute baseline of trust I needed. Lookout rules!",
      author: "Elena Rostova",
      role: "Privacy Advocate & Documentarian",
      stars: 5,
    }
  ];

  return (
    <section className="py-44 lg:py-56 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="small-label text-zinc-400 block mb-4">TESTIMONIALS</span>
            <h2 className="section-title mb-6">
              From solo creators to mobile journalists, people love Lookout.
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              See what professional video producers, vloggers, and documentarians say about their experience using Lookout.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-16">
          {reviews.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.05}
              className="bg-white border border-black/5 rounded-3xl p-8 shadow-premium hover:scale-[1.01] transition-all duration-350 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-1 text-black mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black" />
                  ))}
                </div>

                <p className="text-zinc-500 text-[14px] font-normal leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="border-t border-black/5 pt-4 flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-black block">{item.author}</span>
                  <span className="text-[10px] text-zinc-400 font-semibold">{item.role}</span>
                </div>
                <Quote className="w-4 h-4 text-zinc-200" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* App Stats banner */}
        <div className="mt-20 text-center">
          <ScrollReveal direction="up">
            <span className="text-2xl sm:text-3xl font-black text-black block tracking-tight mb-2">
              Join the future of dual-perspective creation
            </span>
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
              Available on iPhone, iPad, Mac and Apple Watch
            </span>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
