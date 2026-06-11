'use client';

import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AirportIntelligence() {
  const features = [
    "Start Recording",
    "Stop Recording",
    "Monitor Status",
    "Remote Camera Control",
    "Hands-Free Workflow",
    "Built for Solo Creators"
  ];

  return (
    <section id="watch-control" className="py-32 lg:py-48 bg-[#05010d] border-b border-white/5 relative overflow-hidden text-white">
      {/* Sleek background glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Graphic Column (Left on Large screens, bottom on mobile) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center order-2 lg:order-1">
            <ScrollReveal direction="left" delay={0.1} className="w-full">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-4 md:p-6 flex items-center justify-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
                <img 
                  src="/watch_control_preview.png" 
                  alt="Apple Watch remote camera control for Lookout recording"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Text Column (Right on Large screens, top on mobile) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left w-full order-1 lg:order-2">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="text-xs sm:text-sm font-extrabold text-[#00D26A] tracking-[0.2em] uppercase block mb-4">
                REMOTE RECORDING
              </span>
              <h2 className="text-[11px] font-extrabold text-zinc-500 tracking-[0.27em] uppercase mb-5 leading-none">
                APPLE WATCH CONTROL
              </h2>
              <h3 
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-6"
                style={{
                  fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
                }}
              >
                Control Recording Without Touching Your iPhone.
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg leading-[1.65] font-medium mb-8">
                Start, stop, and monitor recordings directly from Apple Watch. Perfect for creators recording themselves from a distance, filming demonstrations, workouts, tutorials, presentations, and travel content.
              </p>
              
              {/* Features List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-[#00D26A]/20 flex items-center justify-center text-[#00D26A] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
