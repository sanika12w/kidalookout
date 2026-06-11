'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Video, ShieldCheck, Watch, Sparkles, Plus, Minus } from 'lucide-react';

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const comparisonData = [
    { name: 'Split Screen Recording', lookout: true, others: 'Often Paid' },
    { name: 'Picture-in-Picture Mode', lookout: true, others: 'Limited Layouts' },
    { name: 'Focus Mode (Stealth Screen)', lookout: true, others: 'Not Available' },
    { name: 'Apple Watch Viewfinder & Controls', lookout: true, others: 'Paid Upgrade' },
    { name: 'Local Zero-Latency Processing', lookout: true, others: 'Cloud Latency' },
    { name: '100% Ad-Free & Private (Local)', lookout: true, others: 'Ad-Heavy / Tracker-Filled' }
  ];

  const whatsIncluded = [
    {
      title: 'Split & PiP Recording',
      desc: 'Seamless side-by-side or inset layouts capturing both perspectives.',
      icon: Video
    },
    {
      title: 'Apple Watch Control',
      desc: 'Start, stop, and monitor live viewfinder streams directly from your wrist.',
      icon: Watch
    },
    {
      title: 'Focus Mode',
      desc: 'Record discreetly with screen backlight off to reduce heat and save battery.',
      icon: Sparkles
    },
    {
      title: '100% Private',
      desc: 'All feeds are processed locally on-device. No accounts, no data logging.',
      icon: ShieldCheck
    }
  ];

  const pricingFaqs = [
    {
      q: "How long is the free trial?",
      a: "Lookout comes with a fully-featured 3-day free trial, allowing you to test all recording modes, Apple Watch controls, and settings before committing."
    },
    {
      q: "What happens after the trial ends?",
      a: "Once your 3-day trial ends, the subscription automatically renews at $2.99/month. You can cancel at any point during the trial period to prevent charges."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. You can manage or cancel your subscription at any time directly through your iPhone's Apple ID subscription settings."
    },
    {
      q: "Do I need to enter payment information?",
      a: "Lookout utilizes Apple's secure App Store subscription system. Billed charges are handled securely through your Apple ID payment method after the 3-day trial period."
    },
    {
      q: "How do I manage my subscription?",
      a: "Open the Settings app on your iPhone, tap your Apple ID profile name at the top, select 'Subscriptions', and tap Lookout to modify or cancel."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-black">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow pt-32 lg:pt-40">
        
        {/* Hero Section */}
        <section className="py-20 lg:py-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="text-xs sm:text-sm font-extrabold text-violet-600 tracking-[0.2em] uppercase block mb-4">
                PRICING
              </span>
              <h1 
                className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-black tracking-tight leading-[1.15] mb-6"
                style={{
                  fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
                }}
              >
                Simple Pricing for Serious Creators.
              </h1>
              <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65] font-medium mb-10">
                Try Lookout free for 3 days. Continue recording with Split Screen, Picture-in-Picture, Focus Mode, and Apple Watch Control with a simple monthly subscription.
              </p>
            </ScrollReveal>

            {/* Price Box */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="max-w-md mx-auto bg-white border border-black/5 rounded-3xl p-8 sm:p-10 shadow-premium flex flex-col gap-6 text-left">
                <div className="flex flex-col items-center text-center pb-6 border-b border-black/5 gap-4">
                  <span className="text-[10px] text-violet-600 font-extrabold tracking-widest uppercase bg-zinc-50 border border-black/5 px-3.5 py-1.5 rounded-full leading-none">
                    3-Day Free Trial
                  </span>
                  <div>
                    <span className="text-5xl font-black text-black tracking-tighter">$2.99</span>
                    <span className="text-zinc-400 text-sm font-bold block mt-1 uppercase tracking-wider">/ month after trial</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 py-2">
                  <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">What&apos;s Included</h3>
                  {[
                    "Dual-Camera Recording",
                    "Split Screen Mode",
                    "Picture-in-Picture Mode",
                    "Focus Mode",
                    "Apple Watch Remote Control",
                    "Native Apple Experience",
                    "Regular Updates"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
                      <Check className="w-4 h-4 text-violet-600 stroke-[3.5] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-premium cursor-pointer"
                >
                  Start Free Trial <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </ScrollReveal>

            {/* Transparency Section */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="max-w-md mx-auto mt-12 text-center">
                <h3 className="text-base font-bold text-black mb-2">No complicated plans. One subscription.</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed max-w-xs mx-auto">
                  Full access to every recording mode and feature. Cancel anytime through your Apple ID subscription settings.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Feature Comparison Grid */}
        <section className="py-20 lg:py-28 bg-white border-y border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal direction="up" className="text-center mb-16">
              <span className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase block mb-3">COMPARE BENEFITS</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">How Lookout Compares</h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="border border-black/5 rounded-2xl overflow-hidden shadow-premium bg-zinc-50">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-black/5 bg-zinc-100/50">
                      <th className="p-4 sm:p-5 text-xs font-bold text-zinc-500 uppercase tracking-wider">Features</th>
                      <th className="p-4 sm:p-5 text-xs font-bold text-black uppercase tracking-wider">Lookout</th>
                      <th className="p-4 sm:p-5 text-xs font-bold text-zinc-400 uppercase tracking-wider">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, idx) => (
                      <tr key={idx} className="border-b border-black/5 last:border-0 bg-white">
                        <td className="p-4 sm:p-5 text-sm font-semibold text-zinc-800">{item.name}</td>
                        <td className="p-4 sm:p-5 text-sm font-bold text-violet-600 flex items-center gap-2">
                          <Check className="w-4 h-4 stroke-[3]" /> Included
                        </td>
                        <td className="p-4 sm:p-5 text-sm font-medium text-zinc-400">{item.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 lg:py-28 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal direction="up" className="text-center mb-16">
              <span className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase block mb-3">CREATOR PACK</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">What&apos;s Included</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatsIncluded.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal
                    key={idx}
                    direction="up"
                    delay={idx * 0.05}
                    className="bg-white border border-black/5 rounded-2xl p-6 flex flex-col gap-4 shadow-premium hover:scale-[1.02] transition-all duration-300 text-left"
                  >
                    <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-black/5 flex items-center justify-center text-violet-600 shadow-xs">
                      <Icon className="w-4.5 h-4.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-black block mb-2">{item.title}</h3>
                      <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom Pricing FAQ Section */}
        <section className="py-24 lg:py-28 bg-white border-y border-black/5 px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up" className="text-center mb-16">
              <span className="text-xs sm:text-sm font-extrabold text-violet-600 tracking-[0.2em] uppercase block mb-4">
                COMMON QUESTIONS
              </span>
              <h2 
                className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4"
                style={{
                  fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
                }}
              >
                Pricing Frequently Asked Questions
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed font-semibold">
                Understand the 3-day trial, App Store payments, and subscription management instructions.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
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
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-6 text-left cursor-pointer transition-colors duration-200 group"
                      >
                        <span className="text-sm sm:text-base font-bold text-black tracking-tight leading-snug">
                          {faq.q}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-black transition-colors">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 px-6 sm:px-8 text-xs sm:text-sm leading-relaxed text-zinc-500 font-semibold border-t border-black/5 pt-4">
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

        {/* Download CTA Section */}
        <section className="py-20 lg:py-28 bg-zinc-50 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="w-11 h-11 rounded-xl bg-white border border-black/5 flex items-center justify-center text-violet-600 mx-auto mb-6 shadow-premium">
                <Video className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
                Record Both Perspectives Today.
              </h2>
              <p className="text-zinc-500 max-w-lg mx-auto text-sm leading-relaxed mb-8">
                Get the full companion watch remote, dual UHD stream integrations, and privacy-first local recording directly on the App Store.
              </p>
              <a
                href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all hover:scale-[1.02] shadow-premium cursor-pointer"
              >
                Start Free Trial <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
