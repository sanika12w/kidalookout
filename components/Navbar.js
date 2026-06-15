'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBgDark, setIsBgDark] = useState(true); // starts dark for Hero
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // On pages other than home (pricing, help center), the background is always light.
      if (pathname !== '/') {
        setIsBgDark(false);
        return;
      }

      // On homepage, detect color dynamically at y=40, center of screen
      const yOffset = 40;
      const x = window.innerWidth / 2;
      
      const header = document.querySelector('header');
      let el = null;
      if (header) {
        // Temporarily disable pointer events on header so elementFromPoint looks through it
        const originalStyle = header.style.pointerEvents;
        header.style.pointerEvents = 'none';
        el = document.elementFromPoint(x, yOffset);
        header.style.pointerEvents = originalStyle;
      } else {
        el = document.elementFromPoint(x, yOffset);
      }

      if (el) {
        let currentEl = el;
        let isDark = true; // default to dark if unsure
        let found = false;

        while (currentEl && currentEl !== document.body) {
          const classes = currentEl.className || '';
          
          // Check for explicit dark/light classes:
          if (classes.includes('bg-[#080710]') || classes.includes('bg-[#05010d]') || classes.includes('bg-zinc-900') || classes.includes('bg-black')) {
            isDark = true;
            found = true;
            break;
          }
          if (classes.includes('bg-white') || classes.includes('bg-zinc-50') || classes.includes('bg-zinc-100') || classes.includes('bg-flighty-bg')) {
            isDark = false;
            found = true;
            break;
          }

          // Fallback to computed background color if available:
          const bg = window.getComputedStyle(currentEl).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1]);
              const g = parseInt(match[2]);
              const b = parseInt(match[3]);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              isDark = brightness < 140;
              found = true;
              break;
            }
          }
          currentEl = currentEl.parentElement;
        }

        if (found) {
          setIsBgDark(isDark);
        } else {
          // If no section background is found, default based on page scroll position:
          setIsBgDark(window.scrollY < 600); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call on mount or route change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div className="w-full px-6 sm:px-8 pt-6 pb-4 flex items-center justify-between pointer-events-auto">
        {/* Left Side: Standalone Logo anchored to top-left */}
        <Link href="/" className="flex items-center group cursor-pointer ml-2">
          <img
            src="/lookoutAppIcon.png"
            alt="Lookout logo"
            className={`w-30 h-30 rounded-[14px] object-cover shrink-0 transition-transform duration-300 group-hover:scale-105 border ${
              isBgDark 
                ? 'border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]' 
                : 'border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
            }`}
          />
        </Link>

        {/* Right Side: Floating Navigation Links wrapped in a premium capsule container */}
        <div className={`hidden md:flex items-center gap-1 p-1.5 pointer-events-auto rounded-full border backdrop-blur-md transition-all duration-300 mr-4 ${
          isBgDark 
            ? 'bg-[#12111d]/60 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-white/60 border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
        }`}>
          <Link
            href="/"
            className={`text-[14px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 ${
              isActive('/')
                ? (isBgDark ? 'text-white bg-white/10' : 'text-black bg-black/5')
                : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
            }`}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className={`text-[14px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 ${
              isActive('/pricing')
                ? (isBgDark ? 'text-white bg-white/10' : 'text-black bg-black/5')
                : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/help-center"
            className={`text-[14px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 ${
              isActive('/help-center')
                ? (isBgDark ? 'text-white bg-white/10' : 'text-black bg-black/5')
                : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
            }`}
          >
            Help Center
          </Link>
        </div>

        {/* Mobile Menu Button aligned with logo vertical center */}
        <button
          className={`md:hidden transition-colors pointer-events-auto cursor-pointer pt-9 ${
            isBgDark ? 'text-white hover:text-zinc-300' : 'text-black hover:text-zinc-600'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`border-b overflow-hidden p-6 flex flex-col gap-4 md:hidden shadow-lg pointer-events-auto ${
              isBgDark
                ? 'bg-[#05010d]/95 border-white/5 text-white'
                : 'bg-white/95 border-black/5 text-black'
            }`}
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[15px] font-bold py-2 px-3.5 rounded-full transition-all duration-200 ${
                isActive('/')
                  ? (isBgDark ? 'text-white bg-white/[0.08] border border-white/10' : 'text-black bg-black/[0.06] border border-black/5')
                  : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[15px] font-bold py-2 px-3.5 rounded-full transition-all duration-200 ${
                isActive('/pricing')
                  ? (isBgDark ? 'text-white bg-white/[0.08] border border-white/10' : 'text-black bg-black/[0.06] border border-black/5')
                  : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/help-center"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[15px] font-bold py-2 px-3.5 rounded-full transition-all duration-200 ${
                isActive('/help-center')
                  ? (isBgDark ? 'text-white bg-white/[0.08] border border-white/10' : 'text-black bg-black/[0.06] border border-black/5')
                  : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
              }`}
            >
              Help Center
            </Link>
            <Link
              href="/#download"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-full transition-all mt-2 shadow-xs ${
                isBgDark
                  ? 'bg-white text-black hover:bg-zinc-100'
                  : 'bg-black text-white hover:bg-zinc-800'
              }`}
            >
              Get the app
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
