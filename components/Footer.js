'use client';

import { ArrowRight, Video } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="text-white pt-24 pb-12 px-6 sm:px-12 md:px-16 relative overflow-hidden transition-all duration-300"
      style={{
        background: 'radial-gradient(circle at 50% 0%, #133457 0%, #030810 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Centered CTA Area */}
        <div className="flex flex-col items-center justify-center text-center pb-20 border-b border-white/5 mb-16">
          <h2 
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-4"
            style={{
              fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
            }}
          >
            Record every angle.<br />At the same time.
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base font-semibold mb-8 max-w-md">
            Dual-camera recording made easier than ever.
          </p>

          <a
            href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 bg-white hover:bg-zinc-100 text-black px-6 py-3.5 rounded-full text-sm font-bold shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
            Download Lookout
          </a>
        </div>

        {/* Bottom Area: Grid split between brand information and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
          
          {/* Left Column: Logo, Description, Divider Line & Social Link */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-sm gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                  <rect x="2" y="6" width="20" height="12" rx="3" />
                  <circle cx="8" cy="12" r="2.5" />
                  <circle cx="16" cy="12" r="2.5" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white uppercase">
                Lookout
              </span>
            </Link>
            
            <p className="text-[14px] text-zinc-400 font-semibold leading-relaxed">
              Your own, personal camera crew. Completely native.
            </p>

            <div className="w-8 border-t border-zinc-700 my-1" />

            <a
              href="https://twitter.com/kidastudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Follow us on Twitter
            </a>
          </div>

          {/* Right Column 1: Features */}
          <div className="lg:col-span-3 text-left flex flex-col">
            <h4 className="text-[14px] font-bold text-white mb-4 uppercase tracking-[0.05em]">
              Features
            </h4>
            <div className="flex flex-col gap-3.5 text-[14px] font-semibold text-zinc-400">
              <Link href="/#features" className="hover:text-white transition-colors duration-200">
                Overview
              </Link>
              <Link href="/help-center/split-screen-recording" className="hover:text-white transition-colors duration-200">
                Split Screen
              </Link>
              <Link href="/help-center/picture-in-picture-mode" className="hover:text-white transition-colors duration-200">
                Picture-in-Picture
              </Link>
              <Link href="/help-center/focus-mode" className="hover:text-white transition-colors duration-200">
                Focus Mode
              </Link>
              <Link href="/help-center/apple-watch-control" className="hover:text-white transition-colors duration-200">
                Apple Watch
              </Link>
            </div>
          </div>

          {/* Right Column 2: Product */}
          <div className="lg:col-span-3 text-left flex flex-col">
            <h4 className="text-[14px] font-bold text-white mb-4 uppercase tracking-[0.05em]">
              Product
            </h4>
            <div className="flex flex-col gap-3.5 text-[14px] font-semibold text-zinc-400">
              <Link href="/pricing" className="hover:text-white transition-colors duration-200">
                Pricing
              </Link>
              <Link href="/help-center" className="hover:text-white transition-colors duration-200">
                Help Center
              </Link>
              <Link href="/help-center/data-privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <a href="mailto:support@kidastudios.com" className="hover:text-white transition-colors duration-200">
                Support
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Copyright Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-zinc-600 uppercase tracking-widest">
          <div>
            &copy; 2026 Lookout. All rights reserved.
          </div>
          <div>
            Built for creators across the Apple ecosystem.
          </div>
        </div>

      </div>
    </footer>
  );
}
