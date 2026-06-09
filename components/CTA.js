'use client';

import { ArrowRight, Video } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section id="download" className="py-44 lg:py-56 bg-zinc-50 text-center px-6 border-b border-black/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-black mx-auto mb-6 shadow-premium">
            <Video className="w-5 h-5" />
          </div>
          
          <h2 className="section-title text-[40px] sm:text-[52px] leading-tight mb-5">
            SEE EVERYTHING. SHARE NOTHING.
          </h2>
          
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 mb-6">
            Download now and experience the peak of professional duality.
          </h3>
          
          <p className="body-text max-w-2xl mx-auto mb-10 text-zinc-500 text-sm sm:text-base leading-relaxed">
            Lookout runs dual HD/UHD streams with zero latency, offline diagnostics, voice activation, and Apple Watch previews — all processed securely on your device.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* Download App Store */}
            <a
              href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 h-13 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-premium cursor-pointer"
            >
              Download on the App Store <ArrowRight className="w-4 h-4" />
            </a>

            {/* Trial Info */}
            <a
              href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 h-13 rounded-full border border-black/10 hover:border-black/20 bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-premium cursor-pointer"
            >
              Get Lookout Pro
            </a>
          </div>

          <div className="mt-10 text-[9px] text-zinc-400 font-extrabold tracking-widest uppercase">
            100% AD-FREE • NO ACCOUNT REQUIRED TO START • SECURE & PRIVATE
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
