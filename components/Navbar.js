'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Apple Watch', href: '/#alerts' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Help Center', href: '/help-center' },
  ];

  const isActive = (href) => {
    if (href.startsWith('/#')) {
      return pathname === '/';
    }
    return pathname === href;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center pointer-events-none">
      <nav
        className={`w-full max-w-4xl rounded-full glassmorphism shadow-navbar border border-black/5 px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          scrolled ? 'scale-[0.98] bg-white/85 shadow-premium' : ''
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group pointer-events-auto">
          <div className="w-7.5 h-7.5 rounded-lg bg-black flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
              <rect x="2" y="6" width="20" height="12" rx="3" />
              <circle cx="8" cy="12" r="2.5" />
              <circle cx="16" cy="12" r="2.5" />
            </svg>
          </div>
          <span className="font-display font-extrabold text-base tracking-tight text-black">
            Lookout
          </span>
        </Link>

        {/* Centered links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[14px] font-semibold transition-colors duration-200 ${
                isActive(link.href) ? 'text-black font-extrabold' : 'text-zinc-500 hover:text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#download"
            className="px-5 py-2 text-[13px] font-bold text-white bg-black hover:bg-zinc-800 rounded-full transition-all duration-350 hover:scale-[1.03] flex items-center gap-1.5 pointer-events-auto"
          >
            Get the app
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-black hover:text-zinc-600 transition-colors pointer-events-auto cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-18 left-6 right-6 bg-white/95 backdrop-blur-xl border border-black/5 rounded-3xl p-6 shadow-premium flex flex-col gap-4 md:hidden pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold transition-colors py-1 ${
                isActive(link.href) ? 'text-black font-extrabold' : 'text-zinc-500 hover:text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold text-white bg-black hover:bg-zinc-800 rounded-full transition-all mt-2"
          >
            Get the app
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
