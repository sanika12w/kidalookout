'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Mic, Radio, Smartphone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function DelayPrediction() {
  const [selectedReason, setSelectedReason] = useState('incoming');

  const reasons = {
    incoming: {
      title: 'Hey Lookout, Start Recording',
      badge: 'SECURE VOICE CAPTURE',
      desc: 'Lookout processes all voice triggers locally on your hardware. Trigger dual-camera recording instantly from a distance with zero cloud delay.',
      details: [
        { label: 'Voice Trigger Stream', value: 'Local microphone audio buffer active', time: '0ms latency', status: 'delayed' },
        { label: 'Keyword DSP Matching', value: 'On-device neural network phrase check', time: '42ms parse', status: 'info' },
        { label: 'Dual Stream Launch', value: 'Instant front/rear camera HD stream trigger', time: 'System Active', status: 'result' },
      ]
    },
    airspace: {
      title: 'Hey Lookout, Zoom In',
      badge: 'FOCAL CROP TRIGGER',
      desc: 'Seamlessly adjust frames without touching your screen. Local command processing ensures real-time focal shifts during live recordings.',
      details: [
        { label: 'Lens Control Command', value: 'Phrase matching threshold verified', time: '98% accuracy', status: 'delayed' },
        { label: 'Haptic Signal Confirmation', value: 'Subtle tactile feedback triggered', time: '20ms pulse', status: 'info' },
        { label: 'Crop Focal Shift', value: 'Smooth transition to 2x digital zoom crop', time: 'Instant', status: 'result' },
      ]
    }
  };

  const activeReason = reasons[selectedReason] || reasons.incoming;

  return (
    <section id="alerts" className="py-40 lg:py-52 bg-[#05010d] border-b border-white/5 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF9F0A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Area */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left">
              <span className="small-label text-zinc-500 block mb-4 tracking-widest uppercase">VOICE TELEMETRY</span>
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-sans font-semibold leading-[1.15] tracking-tight text-white mb-6">
                Direct from the Voice Engine. Finally!
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg text-base sm:text-lg font-normal leading-[1.6]">
                Experience the peak of hands-free control. Lookout monitors your voice stream locally. Trigger recordings, adjust frames, and swap layouts from a distance without ever touching the screen.
              </p>

              {/* Selectors */}
              <div className="flex flex-col gap-3 max-w-md">
                {[
                  { id: 'incoming', label: 'Hey Lookout, Start Recording', icon: Mic },
                  { id: 'airspace', label: 'Hey Lookout, Zoom In', icon: Radio },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedReason(item.id)}
                      className={`flex items-center justify-between p-4.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                        selectedReason === item.id
                          ? 'border-white/10 bg-white/5 text-white font-semibold shadow-lg scale-102'
                          : 'border-white/5 bg-transparent text-zinc-400 hover:text-white hover:bg-white/2'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          selectedReason === item.id ? 'bg-white/10 text-white' : 'bg-white/5 text-zinc-500'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-[14px] font-semibold">{item.label}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500" />
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive timeline */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" className="w-full">
              <div className="bg-[#050408] border border-white/5 rounded-[28px] p-8 shadow-2xl relative overflow-hidden">
                {/* Subtle radial card glow */}
                <div className="absolute inset-0 bg-radial-gradient from-white/2 to-transparent pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <span className="text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 text-zinc-400 border border-white/5 block w-max mb-2">
                      {activeReason.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">{activeReason.title}</h3>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#00D26A]" />
                </div>

                <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-8 relative z-10">
                  {activeReason.desc}
                </p>

                <div className="flex flex-col gap-4.5 relative z-10">
                  <div className="absolute left-3 top-4 bottom-4 w-px bg-white/5" />

                  {activeReason.details.map((step, idx) => (
                    <div
                      key={step.label}
                      className="flex items-start gap-4 relative z-10"
                    >
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-extrabold shrink-0 ${
                        step.status === 'delayed'
                          ? 'border-white bg-white text-black'
                          : step.status === 'result'
                          ? 'border-[#00D26A] bg-[#00D26A] text-black'
                          : 'border-white/10 bg-white/5 text-zinc-400'
                      }`}>
                        {idx + 1}
                      </div>

                      <div className="flex-1 bg-white/2 border border-white/5 rounded-xl p-3.5 flex justify-between items-center hover:border-white/10 transition-colors">
                        <div>
                          <span className="text-[8px] text-zinc-500 font-extrabold uppercase block leading-none mb-1">{step.label}</span>
                          <span className="text-[11.5px] font-bold text-white leading-tight block">{step.value}</span>
                        </div>
                        <span className={`text-[10px] font-extrabold ${
                          step.status === 'delayed' ? 'text-white' : step.status === 'result' ? 'text-[#00D26A]' : 'text-zinc-400'
                        }`}>
                          {step.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
