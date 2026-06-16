'use client';

import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Static features array moved outside the component body
const FEATURES = [
  "Split Screen Recording",
  "Picture-in-Picture Mode",
  "Focus Mode",
  "Front + Rear Camera Capture",
  "Real-Time Preview",
  "Optimized for Creators"
];

export default function TravelHistory() {
  return (
    <section id="workflows" className="py-32 lg:py-48 bg-zinc-50 border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column (Left on Large screens, top on mobile) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left w-full">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="text-xs sm:text-sm font-extrabold text-[#00D26A] tracking-[0.2em] uppercase block mb-4">
                CREATOR TOOLS
              </span>
              <h2 className="text-[11px] font-extrabold text-zinc-400 tracking-[0.27em] uppercase mb-5 leading-none">
                DUAL CAMERA WORKFLOWS
              </h2>
              <h3 
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black tracking-tight leading-[1.15] mb-6"
                style={{
                  fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
                }}
              >
                Capture Both Perspectives. In One Recording.
              </h3>
              <p className="text-zinc-500 text-base sm:text-lg leading-[1.65] font-medium mb-8">
                Lookout records front and rear iPhone cameras simultaneously, making it easy to create reaction videos, travel POVs, tutorials, interviews, product demos, and social content without complicated editing workflows.
              </p>
              
              {/* Features List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURES.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-zinc-800">
                    <div className="w-5 h-5 rounded-full bg-[#00D26A]/10 flex items-center justify-center text-[#00D26A] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Graphic Column (Right on Large screens) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <ScrollReveal direction="right" delay={0.1} className="w-full">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-black/5 shadow-premium p-4 md:p-6 flex items-center justify-center">
                <img 
                  src="/creator_workflows_preview.webp" 
                  alt="iPhone running Lookout dual camera recording split-screen interface"
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
