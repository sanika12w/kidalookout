'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Wallet, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBgDark, setIsBgDark] = useState(true); // starts dark for Hero
  const pathname = usePathname();
  
  const offsetsRef = useRef([]);

  // Calculate and cache section vertical boundaries on mount & window resize
  useEffect(() => {
    if (pathname !== '/') {
      setIsBgDark(false);
      return;
    }

    const updateSectionOffsets = () => {
      const sections = document.querySelectorAll('section, footer');
      const offsets = [];
      const currentScrollY = window.scrollY;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        // Calculate absolute top and bottom coordinates relative to the page document
        const absoluteTop = rect.top + currentScrollY;
        const absoluteBottom = rect.bottom + currentScrollY;

        let isDark = true;
        const className = sec.className;
        const classes = (typeof className === 'string' ? className : className?.baseVal) || '';

        if (
          classes.includes('bg-[#080710]') || 
          classes.includes('bg-[#05010d]') || 
          classes.includes('bg-zinc-900') || 
          classes.includes('bg-black') || 
          sec.tagName.toLowerCase() === 'footer'
        ) {
          isDark = true;
        } else if (
          classes.includes('bg-white') || 
          classes.includes('bg-zinc-50') || 
          classes.includes('bg-zinc-100') || 
          classes.includes('bg-flighty-bg')
        ) {
          isDark = false;
        } else {
          // Check computed style fallback
          const bg = window.getComputedStyle(sec).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1]);
              const g = parseInt(match[2]);
              const b = parseInt(match[3]);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              isDark = brightness < 140;
            }
          }
        }
        offsets.push({
          top: absoluteTop,
          bottom: absoluteBottom,
          isDark
        });
      });

      offsetsRef.current = offsets;
    };

    // Delay calculation slightly to allow layout styles to fully settle on mount
    const timer = setTimeout(updateSectionOffsets, 200);

    window.addEventListener('resize', updateSectionOffsets, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSectionOffsets);
    };
  }, [pathname]);

  // Handle scrolling with a high-performance O(1) cached boundary check
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (pathname !== '/') {
        setIsBgDark(false);
        return;
      }

      const yOffset = 40;
      const targetY = currentScrollY + yOffset;
      let isDark = true;
      let found = false;

      const offsets = offsetsRef.current;
      for (let i = 0; i < offsets.length; i++) {
        if (targetY >= offsets[i].top && targetY <= offsets[i].bottom) {
          isDark = offsets[i].isDark;
          found = true;
          break;
        }
      }

      if (found) {
        setIsBgDark(isDark);
      } else {
        setIsBgDark(currentScrollY < 950);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
      <div className="w-full px-6 sm:px-8 pt-6 pb-4 flex items-center justify-between pointer-events-auto relative">
        {/* Left Side: Compact circular logo appearing on scroll, or empty spacer otherwise */}
        <div className="w-10 h-10 relative flex items-center justify-center">
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="pointer-events-auto"
              >
                <Link href="/" className="cursor-pointer">
                  <img
                    src="/lookoutAppIcon.webp"
                    alt="Lookout logo"
                    width={40}
                    height={40}
                    className={`w-9 h-9 rounded-full object-cover shrink-0 border transition-all duration-300 ${
                      isBgDark 
                        ? 'border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]' 
                        : 'border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                    }`}
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center: Lookout Logo centered horizontally relative to the viewport */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-10 flex items-center pointer-events-auto"
            >
              <Link href="/" className="flex items-center group cursor-pointer">
                <img
                  src="/lookoutAppIcon.webp"
                  alt="Lookout logo"
                  width={150}
                  height={150}
                  className={`w-30 h-30 rounded-[14px] object-cover shrink-0 transition-transform duration-300 group-hover:scale-105 border ${
                    isBgDark 
                      ? 'border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]' 
                      : 'border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                  }`}
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Side: Floating Navigation Links wrapped in a premium capsule container */}
        <div className={`hidden md:flex items-center gap-1 p-1.5 pointer-events-auto rounded-full border backdrop-blur-md transition-all duration-300 ${
          isBgDark 
            ? 'bg-[#12111d]/60 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-white/60 border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
        }`}>
          <Link
            href="/pricing"
            className={`text-[14px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              isActive('/pricing')
                ? (isBgDark ? 'text-white bg-white/10' : 'text-black bg-black/5')
                : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
            }`}
          >
            <Wallet className="w-4 h-4 opacity-70 shrink-0" />
            <span>Pricing</span>
          </Link>
          <Link
            href="/help-center"
            className={`text-[14px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              isActive('/help-center')
                ? (isBgDark ? 'text-white bg-white/10' : 'text-black bg-black/5')
                : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
            }`}
          >
            <HelpCircle className="w-4 h-4 opacity-70 shrink-0" />
            <span>Help Center</span>
          </Link>
        </div>

        {/* Mobile Menu Button aligned with logo vertical center */}
        <button
          className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md transition-all duration-300 pointer-events-auto cursor-pointer shadow-md ${
            isBgDark 
              ? 'bg-[#12111d]/60 border-white/10 text-white hover:bg-[#12111d]/80 hover:text-white' 
              : 'bg-white/60 border-black/5 text-black hover:bg-white/80 hover:text-black'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
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
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[15px] font-bold py-2 px-3.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                isActive('/pricing')
                  ? (isBgDark ? 'text-white bg-white/[0.08] border border-white/10' : 'text-black bg-black/[0.06] border border-black/5')
                  : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
              }`}
            >
              <Wallet className="w-4 h-4 opacity-70 shrink-0" />
              <span>Pricing</span>
            </Link>
            <Link
              href="/help-center"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[15px] font-bold py-2 px-3.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                isActive('/help-center')
                  ? (isBgDark ? 'text-white bg-white/[0.08] border border-white/10' : 'text-black bg-black/[0.06] border border-black/5')
                  : (isBgDark ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-black')
              }`}
            >
              <HelpCircle className="w-4 h-4 opacity-70 shrink-0" />
              <span>Help Center</span>
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
