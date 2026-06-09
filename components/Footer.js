'use client';

import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 -rotate-45"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-base tracking-tight text-black">
                Lookout
              </span>
            </a>
            <p className="text-zinc-500 text-xs leading-relaxed font-light mb-4">
              Dual camera video recording with zero-latency local processing, offline diagnostics, voice activation, and Apple Watch companion triggers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
 
          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs font-extrabold text-black uppercase tracking-widest mb-4">Product</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-500 font-medium">
              <a href="#features" className="hover:text-black transition-colors">Duality Recording</a>
              <a href="#alerts" className="hover:text-black transition-colors">Voice Control</a>
              <a href="#friends" className="hover:text-black transition-colors">Shared Streams</a>
              <a href="#airports" className="hover:text-black transition-colors">Processor Diagnostics</a>
            </div>
          </div>
 
          {/* Links Column 2: Resources */}
          <div>
            <h4 className="text-xs font-extrabold text-black uppercase tracking-widest mb-4">Resources</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-500 font-medium">
              <a href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632" className="hover:text-black transition-colors">App Store Download</a>
              <a href="#help" className="hover:text-black transition-colors">Help Center</a>
              <a href="#pricing" className="hover:text-black transition-colors">Get Premium</a>
              <a href="#developer" className="hover:text-black transition-colors">Kida Studios</a>
            </div>
          </div>
 
          {/* Links Column 3: Legal */}
          <div>
            <h4 className="text-xs font-extrabold text-black uppercase tracking-widest mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-500 font-medium">
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Data Security</a>
              <a href="#" className="hover:text-black transition-colors">Zero Logs Policy</a>
            </div>
          </div>
 
        </div>
 
        {/* Legal disclosures & copyright */}
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} Lookout. All rights reserved.
            <span className="block mt-1.5 text-[9.5px] text-zinc-400 normal-case font-semibold">
              Lookout and Kida Studios are trademarks of KIDA STUDIOS.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-black transition-colors">English (US)</span>
            <div className="w-px h-3 bg-zinc-200" />
            <span className="cursor-pointer hover:text-black transition-colors">System Light Mode</span>
          </div>
        </div>
 
      </div>
    </footer>
  );
}
