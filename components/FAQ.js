'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
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
    <section id="faq" className="py-32 lg:py-48 bg-[#05010d] border-b border-white/5 relative overflow-hidden text-white">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/2 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="text-xs sm:text-sm font-extrabold text-[#00D26A] tracking-[0.2em] uppercase block mb-4">
              QUESTIONS & ANSWERS
            </span>
            <h2 
              className="text-3xl sm:text-5xl font-bold tracking-tight mb-6"
              style={{
                fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              Find quick answers to common questions about Lookout camera workflows and compatibility.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal 
                key={idx} 
                direction="up" 
                delay={idx * 0.05}
                className="w-full"
              >
                <div 
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'border-white/15 bg-white/5' 
                      : 'border-white/5 bg-white/2'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-6 px-6 sm:px-8 flex items-center justify-between gap-6 text-left cursor-pointer transition-colors duration-200"
                  >
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-white transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-6 sm:px-8 text-sm sm:text-base leading-relaxed text-zinc-400 font-medium">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
