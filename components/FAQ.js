'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Lookout?",
      a: "Lookout is a dual-camera recording app that captures front and rear iPhone cameras simultaneously."
    },
    {
      q: "What recording modes are available?",
      a: "Split Screen, Picture-in-Picture, and Focus Mode."
    },
    {
      q: "Can I control recordings from Apple Watch?",
      a: "Yes. Lookout includes Apple Watch remote controls."
    },
    {
      q: "Does Lookout require an internet connection?",
      a: "Recording features are designed to work locally on your device."
    },
    {
      q: "Who is Lookout for?",
      a: "Content creators, vloggers, educators, reviewers, travelers, and professionals who need multi-perspective recording."
    },
    {
      q: "Which Apple devices are supported?",
      a: "Lookout is designed for compatible iPhone devices and integrates with Apple Watch."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-28 bg-white border-b border-black/5 relative overflow-hidden text-black">
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Centered Heading block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="text-xs sm:text-sm font-extrabold text-[#00D26A] tracking-[0.2em] uppercase block mb-4">
              QUESTIONS & ANSWERS
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black tracking-tight leading-[1.2] mb-6"
              style={{
                fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 max-w-xl text-sm sm:text-base leading-relaxed font-semibold mb-8 mx-auto">
              Find quick answers to common questions about Lookout camera workflows, remote watch control, and device compatibility.
            </p>
            
            <Link 
              href="/help-center"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-black hover:text-[#00D26A] transition-colors group uppercase tracking-wider"
            >
              Visit Help Center
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Centered Accordion list */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal 
                key={idx} 
                direction="up" 
                delay={idx * 0.05}
                className="w-full text-left"
              >
                <div 
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'border-black/10 bg-zinc-50/20 shadow-premium' 
                      : 'border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-premium'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-6 text-left cursor-pointer transition-colors duration-200 group"
                  >
                    <span className="text-sm sm:text-base font-bold text-black tracking-tight leading-snug">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-black transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="pb-5 px-6 sm:px-8 text-xs sm:text-sm leading-relaxed text-zinc-500 font-semibold border-t border-black/5 pt-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
