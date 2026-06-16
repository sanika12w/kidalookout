'use client';

import { memo } from 'react';
import { Smartphone, Watch, Laptop } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Static cards list moved outside the component body
const CARDS = [
  {
    title: 'IPHONE',
    desc: 'Capture dual-camera content using Split, PiP, and Focus modes.',
    icon: Smartphone,
    color: 'text-purple-500 bg-purple-500/5 border-purple-500/10'
  },
  {
    title: 'APPLE WATCH',
    desc: 'Start and control recordings remotely.',
    icon: Watch,
    color: 'text-blue-500 bg-blue-500/5 border-blue-500/10'
  },
  {
    title: 'MACOS',
    desc: 'Manage content and extend your workflow across your desktop environment.',
    icon: Laptop,
    color: 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10'
  }
];

const EcosystemCard = memo(({ card, idx }) => {
  const Icon = card.icon;
  return (
    <ScrollReveal
      key={card.title}
      direction="up"
      delay={idx * 0.1}
      className="bg-zinc-50 border border-black/5 rounded-2xl p-6 flex gap-5 hover:scale-[1.01] transition-all duration-350 shadow-premium"
    >
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${card.color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-zinc-400 font-extrabold tracking-widest block mb-1">
          {card.title}
        </span>
        <span className="text-base font-bold text-black block mb-2 leading-none">
          {card.title === 'IPHONE' ? 'iOS Capture' : card.title === 'APPLE WATCH' ? 'Wrist Controls' : 'Desktop Flow'}
        </span>
        <span className="text-sm text-zinc-500 font-medium leading-relaxed">
          {card.desc}
        </span>
      </div>
    </ScrollReveal>
  );
});
EcosystemCard.displayName = 'EcosystemCard';

export default function Awards() {
  return (
    <section id="ecosystem" className="py-32 lg:py-48 bg-white border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Header */}
        <div className="max-w-3xl mb-16 text-left">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="text-xs sm:text-sm font-extrabold text-[#00D26A] tracking-[0.2em] uppercase block mb-4">
              APPLE ECOSYSTEM
            </span>
            <h2 className="text-[11px] font-extrabold text-zinc-400 tracking-[0.27em] uppercase mb-5 leading-none">
              ONE APP. THREE DEVICES.
            </h2>
            <h3 
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black tracking-tight leading-[1.15] mb-6"
              style={{
                fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
              }}
            >
              Built for iPhone, Apple Watch, and Mac.
            </h3>
            <p className="text-zinc-500 text-base sm:text-lg leading-[1.65] font-medium max-w-2xl">
              Lookout is designed to feel native across the Apple ecosystem. Record from iPhone, control from Apple Watch, and manage your workflow across devices with a consistent Apple-inspired experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid and Visual layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Cards Grid Column (Left on Large screens, bottom on mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            {CARDS.map((card, idx) => (
              <EcosystemCard key={card.title} card={card} idx={idx} />
            ))}
          </div>

          {/* Ecosystem Visual Column (Right on Large screens, top on mobile) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center order-1 lg:order-2">
            <ScrollReveal direction="right" delay={0.15} className="w-full">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-50 border border-black/5 shadow-premium p-4 md:p-6 flex items-center justify-center">
                <img 
                  src="/apple_ecosystem_preview.webp" 
                  alt="Lookout running across iPhone, Apple Watch and MacBook Pro"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
