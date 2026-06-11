'use client';

import { ArrowRight, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="text-white pt-28 pb-12 px-8 sm:px-12 md:px-16 border-t border-white/10 relative overflow-hidden transition-all duration-300"
      style={{
        background: 'radial-gradient(circle at top right, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(10, 132, 255, 0.08) 0%, transparent 50%), #04040e'
      }}
    >
      {/* Soft background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: Split between Branding/CTA and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10 mb-16">
          
          {/* Left Side: Logo, Description and App Store CTA Block */}
          <div className="lg:col-span-5 flex flex-col items-start text-left max-w-md gap-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-black shadow-lg">
                <Video className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase font-sans">
                Lookout
              </span>
            </a>
            
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Dual Camera Recording for iPhone Creators. Lookout records front and rear cameras simultaneously with zero latency and direct Apple Watch triggers, processed securely on-device.
            </p>

            {/* App Store CTA Card */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 mt-2">
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[#00D26A] font-extrabold tracking-widest uppercase mb-1">DOWNLOAD NOW</span>
                <span className="text-sm font-bold text-white leading-tight">Ready to double your perspective?</span>
              </div>
              <a
                href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 h-10 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-premium cursor-pointer"
              >
                Get Lookout on the App Store <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
          
          {/* Right Side: Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 w-full lg:pt-3">
            {/* Column 1: Product */}
            <div className="text-left flex flex-col">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Product</h4>
              <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-400">
                <a href="#workflows" className="hover:text-white transition-colors duration-200">Features</a>
                <a href="#workflows" className="hover:text-white transition-colors duration-200">Recording Modes</a>
                <a href="#watch-control" className="hover:text-white transition-colors duration-200">Apple Watch</a>
                <a href="#download" className="hover:text-white transition-colors duration-200">Download</a>
              </div>
            </div>

            {/* Column 2: Resources */}
            <div className="text-left flex flex-col">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Resources</h4>
              <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-400">
                <a 
                  href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-200"
                >
                  App Store
                </a>
                <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
                <a href="mailto:support@kidastudios.com" className="hover:text-white transition-colors duration-200">Support</a>
              </div>
            </div>

            {/* Column 3: Company */}
            <div className="text-left flex flex-col">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Company</h4>
              <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-400">
                <a href="#" className="hover:text-white transition-colors duration-200">About</a>
                <a href="mailto:contact@kidastudios.com" className="hover:text-white transition-colors duration-200">Contact</a>
              </div>
            </div>

            {/* Column 4: Legal */}
            <div className="text-left flex flex-col">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Legal</h4>
              <div className="flex flex-col gap-4 text-sm font-semibold text-zinc-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
              </div>
            </div>
          </div>

        </div>

        {/* Huge Large Typography Watermark - signature of thewone.co */}
        <div className="w-full mb-12 overflow-hidden select-none pointer-events-none">
          <h2 className="text-[12vw] font-black text-white/[0.02] tracking-tighter leading-none text-center uppercase">
            LOOKOUT
          </h2>
        </div>

        {/* Bottom Area */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
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
