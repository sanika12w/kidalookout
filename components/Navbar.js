'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gift Cards', href: '#gifts' },
    { name: 'Passport', href: '#history' },
    { name: 'Airports', href: '#airports' },
    { name: 'Help Center', href: '#help' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center pointer-events-none">
      <nav
        className={`w-full max-w-4xl rounded-full glassmorphism shadow-navbar border border-black/5 px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          scrolled ? 'scale-[0.98] bg-white/85 shadow-premium' : ''
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
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
            Flighty
          </span>
        </a>

        {/* Centered links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-semibold text-zinc-500 hover:text-black transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#download"
            className="px-5 py-2 text-[13px] font-bold text-white bg-black hover:bg-zinc-800 rounded-full transition-all duration-350 hover:scale-[1.03]"
          >
            Get the app
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-black hover:text-zinc-600 transition-colors"
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
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-zinc-500 hover:text-black transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white bg-black hover:bg-zinc-800 rounded-full transition-all mt-2"
          >
            Get the app
          </a>
        </div>
      )}
    </div>
  );
}
