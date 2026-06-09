'use client';

import { Award, ShieldCheck, Star, Users, Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Awards() {
  const awards = [
    { title: 'Apple Silicon Optimized', desc: 'Harnesses iOS multi-camera API structures and GPU cores for efficient dual-stream capture.', icon: Cpu },
    { title: '100% Private & Ad-Free', desc: 'All of your videos and audio voice triggers remain local. Zero tracking, zero ads, zero logs.', icon: ShieldCheck },
    { title: 'Offline by Design', desc: 'Lookout works perfectly without an internet connection. Your media never touches a server.', icon: Users },
    { title: "Creator Choice Utility", desc: 'Selected globally by content creators, journalists, and vloggers for mobile production.', icon: Star },
  ];

  return (
    <section id="trust" className="py-44 lg:py-56 bg-zinc-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Circular Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left">
              <div className="w-56 h-56 rounded-full border border-black/5 bg-white flex flex-col items-center justify-center text-center p-6 relative shadow-premium">
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-widest block mb-1">DESIGN NOMINATION</span>
                <span className="text-base font-extrabold text-black leading-tight">Crafted for Creators<br />Built with Privacy</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Details */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <span className="small-label text-zinc-400 block mb-4">AWARDS & PRIVACY</span>
              <h2 className="section-title mb-6">
                Surgical Precision for the Modern Creator.
              </h2>
              <p className="body-text mb-8">
                Lookout is built with a deep commitment to mobile performance, hardware security, and clean aesthetics. We believe creative software should be fast, offline-native, ad-free, and respectful of your data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {awards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white border border-black/5 flex items-center justify-center text-black shadow-premium mt-0.5 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[13px] font-bold text-black block">{item.title}</span>
                        <span className="text-xs text-zinc-500 font-light leading-normal block mt-1">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
