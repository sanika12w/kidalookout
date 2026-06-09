'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, ShieldAlert, Compass, MapPin, Tv, Users, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AirportIntelligence() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState('A18');

  const airports = {
    A18: {
      name: 'Apple A18 Pro Chipset',
      city: 'iPhone 16 Pro / Pro Max',
      delayIndex: 'Optimal Efficiency',
      delayColor: 'text-[#00D26A] border-[#00D26A]/15 bg-[#00D26A]/5',
      avgDelay: '0.04 ms',
      weather: 'Thermals cool • 34°C • 60 FPS Stable',
      taxiOut: '12 ms buffer',
      taxiIn: '4 ms compile',
      activeStatus: 'Optimal neural core allocation active. 0 dropped frames recorded.',
      warnings: 'None. Maximum bandwidth unlocked for dual 4K 60FPS recording.',
      board: [
        { flight: 'Neural Core', dest: 'Voice triggers', time: 'Active', status: 'Active' },
        { flight: 'Front Camera', dest: '4K @ 60FPS stream', time: '60.0 fps', status: 'Stable' },
        { flight: 'Rear Camera', dest: '4K @ 60FPS stream', time: '60.0 fps', status: 'Stable' }
      ]
    },
    A17: {
      name: 'Apple A17 Pro Chipset',
      city: 'iPhone 15 Pro / Pro Max',
      delayIndex: 'High Efficiency',
      delayColor: 'text-[#0A84FF] border-[#0A84FF]/15 bg-[#0A84FF]/5',
      avgDelay: '0.12 ms',
      weather: 'Thermals stable • 37°C • 60 FPS Active',
      taxiOut: '16 ms buffer',
      taxiIn: '6 ms compile',
      activeStatus: 'High efficiency GPU cores engaged. Minor thermal shift detected.',
      warnings: 'High ambient temperature warning; automatic bitrate scaling active.',
      board: [
        { flight: 'Neural Core', dest: 'Voice triggers', time: 'Active', status: 'Active' },
        { flight: 'Front Camera', dest: '4K @ 60FPS stream', time: '60.0 fps', status: 'Stable' },
        { flight: 'Rear Camera', dest: '4K @ 60FPS stream', time: '60.0 fps', status: 'Stable' }
      ]
    },
    A16: {
      name: 'Apple A16 Bionic Chipset',
      city: 'iPhone 14 Pro / Pro Max',
      delayIndex: 'Moderate Load',
      delayColor: 'text-[#FF9F0A] border-[#FF9F0A]/15 bg-[#FF9F0A]/5',
      avgDelay: '0.28 ms',
      weather: 'Thermals warm • 40°C • 30 FPS Cap',
      taxiOut: '22 ms buffer',
      taxiIn: '9 ms compile',
      activeStatus: 'Thermal management engaged. Cap dual feeds at 30 FPS to save power.',
      warnings: 'CPU throttling detected; recording capped at UHD 30FPS.',
      board: [
        { flight: 'Neural Core', dest: 'Voice triggers', time: 'Active', status: 'Active' },
        { flight: 'Front Camera', dest: '4K @ 30FPS stream', time: '30.0 fps', status: 'Stable' },
        { flight: 'Rear Camera', dest: '4K @ 30FPS stream', time: '30.0 fps', status: 'Stable' }
      ]
    }
  };

  const activeAirport = airports[selectedAirport] || airports.A18;

  return (
    <section id="airports" className="py-44 lg:py-56 bg-zinc-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Banner Card */}
        <div className="border border-black/5 rounded-3xl p-8 sm:p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-premium">
          <div className="max-w-2xl text-center md:text-left">
            <span className="small-label text-zinc-400 block mb-4">HARDWARE OPTIMIZATION</span>
            <h2 className="section-title text-[30px] sm:text-[38px] leading-tight mb-5">
              Know how Lookout utilizes your silicon. In real time.
            </h2>
            <p className="text-zinc-500 text-[15px] font-normal leading-relaxed mb-0">
              Track your device&apos;s processor performance, audio latency, thermal temperature, and battery efficiency — all in real time with our offline diagnostics panel.
            </p>
          </div>
          <button
            onClick={() => setOverlayOpen(true)}
            className="w-full md:w-auto px-8 h-13 rounded-full bg-black hover:bg-zinc-800 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] cursor-pointer shadow-premium"
          >
            Open Performance Diagnostic Panel <Compass className="w-4 h-4" />
          </button>
        </div>

        {/* Feature Sub-points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center text-black shadow-premium mb-4">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-bold text-black uppercase tracking-wider mb-2">Zero Latency</h4>
            <p className="text-xs text-zinc-500 font-normal leading-relaxed">
              We align raw front and back camera buffers dynamically. Lookout matches audio triggers and lens offsets on the millisecond using offline local hardware anchors.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center text-black shadow-premium mb-4">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-bold text-black uppercase tracking-wider mb-2">Thermal Warnings</h4>
            <p className="text-xs text-zinc-500 font-normal leading-relaxed">
              Real-time warning sensors monitor hardware temperature levels, CPU throttle rates, low storage thresholds, or battery drain states during intensive recording.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center text-black shadow-premium mb-4">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-bold text-black uppercase tracking-wider mb-2">Codec Adaptability</h4>
            <p className="text-xs text-zinc-500 font-normal leading-relaxed">
              Automatically calibrates video encoding options (HEVC, H.264) depending on your active storage constraints, battery cycles, and temperature metrics.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center text-black shadow-premium mb-4">
              <Tv className="w-4 h-4" />
            </div>
            <h4 className="text-[14px] font-bold text-black uppercase tracking-wider mb-2">Layout Presets</h4>
            <p className="text-xs text-zinc-500 font-normal leading-relaxed">
              Switch in real time between split-screen ratios, side-by-side feeds, and picture-in-picture circle overlays to customize your production output format.
            </p>
          </div>
        </div>

        {/* Dashboard Overlay */}
        <AnimatePresence>
          {overlayOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xl flex justify-center items-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full max-w-4xl bg-white border border-black/5 rounded-[32px] overflow-hidden flex flex-col shadow-premium max-h-[90vh] md:max-h-[85vh]"
              >
                
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-black/5 bg-zinc-50/50">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-black" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">HARDWARE DIAGNOSTIC PANEL</span>
                  </div>
                  <button
                    onClick={() => setOverlayOpen(false)}
                    className="w-8 h-8 rounded-full border border-black/5 hover:bg-zinc-100 flex items-center justify-center text-black transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                  
                  {/* Selector */}
                  <div className="flex gap-2 p-1 bg-zinc-100 border border-black/5 rounded-full mb-8 max-w-xs">
                    {Object.keys(airports).map((code) => (
                      <button
                        key={code}
                        onClick={() => setSelectedAirport(code)}
                        className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          selectedAirport === code
                            ? 'bg-black text-white'
                            : 'text-zinc-500 hover:text-black'
                        }`}
                      >
                        {code === 'A18' && 'A18 Pro'}
                        {code === 'A17' && 'A17 Pro'}
                        {code === 'A16' && 'A16 Bionic'}
                      </button>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* Left details */}
                    <div className="md:col-span-7">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-zinc-400 text-xs font-semibold mb-1">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>{activeAirport.city}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-black tracking-tight">{activeAirport.name}</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-50 border border-black/5 rounded-2xl p-4">
                          <span className="text-[9px] text-zinc-400 font-extrabold uppercase block mb-1">LENS ALIGNMENT OFFSET</span>
                          <span className="text-lg font-bold text-black">{activeAirport.taxiOut}</span>
                        </div>
                        <div className="bg-zinc-50 border border-black/5 rounded-2xl p-4">
                          <span className="text-[9px] text-zinc-400 font-extrabold uppercase block mb-1">LOCAL EXPORT TIME</span>
                          <span className="text-lg font-bold text-black">{activeAirport.taxiIn}</span>
                        </div>
                      </div>

                      <div className="mt-4 bg-zinc-50 border border-black/5 rounded-2xl p-4 flex gap-3 items-start">
                        <Activity className="w-5 h-5 text-zinc-500 mt-0.5" />
                        <div>
                          <span className="text-[9px] text-zinc-400 font-extrabold uppercase block">CHIP THERMAL METRICS</span>
                          <p className="text-xs text-black font-semibold mt-0.5">{activeAirport.weather}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right delays */}
                    <div className="md:col-span-5 flex flex-col justify-between gap-6">
                      <div className={`rounded-2xl border p-5 ${activeAirport.delayColor} flex flex-col`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[9px] font-extrabold uppercase">SILICON CAPACITY</span>
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        <span className="text-lg font-black block tracking-tight mb-1">{activeAirport.delayIndex}</span>
                        <p className="text-[11.5px] text-zinc-600 font-medium leading-relaxed mb-3">{activeAirport.activeStatus}</p>
                        <span className="text-[9px] text-zinc-400 font-bold uppercase block mb-0.5">SILICON WARNINGS</span>
                        <p className="text-[11px] text-zinc-500 font-light italic leading-normal">{activeAirport.warnings}</p>
                      </div>

                      <div className="bg-zinc-50 border border-black/5 rounded-2xl p-4 flex flex-col">
                        <span className="text-[9px] text-zinc-400 font-extrabold uppercase block mb-3">THREAD EXECUTION TIMELINE</span>
                        <div className="flex flex-col gap-2.5">
                          {activeAirport.board.map((item) => (
                            <div key={item.flight} className="flex justify-between items-center text-xs">
                              <span className="font-bold text-black">{item.flight}</span>
                              <span className="text-zinc-500 font-light">{item.dest}</span>
                              <span className="font-semibold text-[#00D26A]">{item.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
