'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Smartphone, Watch, AlertTriangle, CheckCircle, 
  Settings, Battery, Radio, Compass, Lock, MapPin, Navigation,
  Calendar, Bell, ShieldAlert, Wifi, Plane, ArrowRight, Share2
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('preflight');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Left side floating status cards
  const leftCards = [
    { 
      text: "Front + Rear Cameras Recording",
      sub: "Capture both perspectives simultaneously",
      type: "mom", 
      opacity: "opacity-100",
      offsetClass: "md:translate-x-[80px]"
    },
    { 
      text: "Apple Watch Live Preview",
      sub: "See framing without touching your phone", 
      type: "aa", 
      opacity: "opacity-78",
      offsetClass: "md:translate-x-[40px]"
    },
    { 
      text: "\"Hey Lookout\" Activated",
      sub: "Voice control enabled", 
      type: "delta", 
      opacity: "opacity-60",
      offsetClass: "md:translate-x-[70px]"
    },
    { 
      text: "Screen Off. Recording Continues.",
      sub: "Focus Mode enabled", 
      type: "landed", 
      opacity: "opacity-100",
      offsetClass: "md:translate-x-[78px]"
    },
    { 
      text: "Continuity Camera Ready",
      sub: "Use Lookout with your Mac", 
      type: "baggage-6", 
      opacity: "opacity-75",
      offsetClass: "md:translate-x-[70px]"
    }
  ];

  // Right side floating status cards
  const rightCards = [
    { 
      text: "Recording Started",
      sub: "Triggered from Apple Watch", 
      type: "gate", 
      opacity: "opacity-50",
      offsetClass: "md:translate-x-[-40px]"
    },
    { 
      text: "Split-Screen Mode Active",
      sub: "Creator + Scene captured together", 
      type: "weather", 
      opacity: "opacity-90",
      offsetClass: "md:translate-x-[-10px]"
    },
    { 
      text: "4K Dual Capture",
      sub: "High-quality recording in progress", 
      type: "delayed", 
      opacity: "opacity-85",
      offsetClass: "md:translate-x-[10px]"
    },
    { 
      text: "Location Embedded",
      sub: "GPS metadata attached", 
      type: "changed", 
      opacity: "opacity-50",
      offsetClass: "md:translate-x-[30px]"
    },
    { 
      text: "Apple Maps Connected",
      sub: "Enhanced route visualization", 
      type: "baggage-14", 
      opacity: "opacity-100",
      offsetClass: "md:translate-x-[40px]"
    }
  ];

  const renderCardIcon = (type) => {
    switch (type) {
      case "mom":
        return (
          <div className="w-7.5 h-7.5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white overflow-hidden shrink-0">
            <span className="text-xs font-bold">👩</span>
          </div>
        );
      case "gate":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-orange-500 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
        );
      case "aa":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-[#0078D2]/5 border border-[#0078D2]/10 flex items-center justify-center overflow-hidden shrink-0">
            <svg viewBox="0 0 100 100" className="w-5 h-5">
              <path d="M10,50 Q45,20 85,45 Q55,60 10,50" fill="#0078D2" />
              <path d="M20,65 Q55,30 95,55 Q65,70 20,65" fill="#FF1D25" />
            </svg>
          </div>
        );
      case "weather":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0">
            <Compass className="w-4 h-4" />
          </div>
        );
      case "delta":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-[#E01933]/5 border border-[#E01933]/10 flex items-center justify-center overflow-hidden shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#E01933">
              <polygon points="12,2 2,22 12,18 22,22" />
            </svg>
          </div>
        );
      case "landed":
        return (
          <div className="w-7.5 h-7.5 rounded-full bg-flighty-green flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-3.5 h-3.5 rotate-135">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </div>
        );
      case "delayed":
        return (
          <div className="w-7.5 h-7.5 rounded-full bg-flighty-red flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-3.5 h-3.5 -rotate-45">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </div>
        );
      case "changed":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0">
            <Settings className="w-4 h-4" />
          </div>
        );
      case "baggage-6":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-[#FFCC00] flex items-center justify-center text-black font-extrabold text-[11px] shrink-0 shadow-xs">
            6
          </div>
        );
      case "baggage-14":
        return (
          <div className="w-7.5 h-7.5 rounded-lg bg-[#FFCC00] flex items-center justify-center text-black font-extrabold text-[11px] shrink-0 shadow-xs">
            14
          </div>
        );
      default:
        return null;
    }
  };

  const renderCard = (card, idx) => (
    <div
      key={idx}
      className={`w-full ${card.opacity} transition-all duration-500 z-10 ${card.offsetClass} flex-shrink-0`}
    >
      <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 px-5 py-3.5 flex items-center justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          {renderCardIcon(card.type)}
          <div className="text-left">
            <span className="text-[12px] font-bold text-white block leading-none mb-0.5">{card.text}</span>
            <span className="text-[10px] text-white/60 font-semibold">{card.sub}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      className="relative min-h-screen bg-[#05010d] w-full overflow-hidden px-6 pt-40 pb-20 flex flex-col items-center justify-start" 
      style={{ backgroundColor: '#05010d' }}
    >
      {/* Background atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* 1. Text Container - sits in normal flow */}
        <div className="w-full flex flex-col items-center">
          {/* Headline */}
          <ScrollReveal direction="up" delay={0.1} className="max-w-[900px] w-full">
            <h1 
              className="text-[40px] sm:text-[52px] lg:text-[65px] font-bold text-center tracking-[-1px] leading-[1.1em] text-white mb-6"
              style={{
                fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "System Default", sans-serif'
              }}
            >
            Dual Camera Recording App
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.15} className="max-w-[700px] w-full">
            <p 
              className="mb-10 text-center tracking-[0px]"
              style={{
                fontFamily: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "System Default", sans-serif',
                fontSize: '17px',
                fontWeight: 500,
                lineHeight: '1.5em',
                color: 'rgba(255, 255, 255, 0.65)'
              }}
            >
              Record front and rear cameras simultaneously, control recording from Apple Watch, and create split-screen videos for vlogs, reactions, travel content, and social media.
            </p>
          </ScrollReveal>
        </div>

        {/* 2. Product Stage */}
        <div className="relative w-full flex flex-col md:block items-center justify-start overflow-visible mt-12 min-h-[1150px] md:min-h-[580px] lg:min-h-[640px]">
          
          {/* Left Cards Column */}
          <div 
            className="relative w-full max-w-[310px] sm:max-w-[330px] md:absolute md:w-[260px] lg:w-[320px] xl:w-[350px] md:left-1/2 md:-translate-x-[400px] lg:-translate-x-[440px] xl:-translate-x-[470px] md:top-[30px] flex flex-col gap-6 items-center md:items-end z-20 transition-all duration-300"
          >
            {leftCards.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Central Hand-held Phone Mockup - Centered horizontally */}
          <div 
            className="relative w-[340px] sm:w-[420px] aspect-[930/1260] z-25 overflow-visible md:my-0 md:absolute md:left-[60%] md:-translate-x-1/2 md:top-0 my-8"
          >
            {/* Expanded Layered gradient glows behind phone */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-to-tr from-violet-600/50 via-purple-500/30 to-indigo-500/40 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/40 via-indigo-600/30 to-purple-600/50 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none -z-10" />

            {/* The transparent screen hand overlay */}
            <img 
              src="https://framerusercontent.com/images/y9W9YGgxy5FXNg6RqqZ6gYk.png" 
              className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none" 
              alt="Hand holding phone"
            />
            
            {/* The screen container positioned behind the hand's transparent phone cutout */}
            <div 
              className="absolute z-10 overflow-hidden bg-black flex flex-col justify-start select-none"
              style={{
                left: '12.6%',
                top: '2.0%',
                width: '45.35%',
                height: '72.3%',
                borderRadius: '1.8rem',
              }}
            >
              
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center px-3 pt-3.5 pb-1 text-[8px] text-zinc-400 font-bold select-none z-10">
                <span className="text-[7.5px] scale-95 origin-left font-sans text-zinc-400">09:41</span>
                <div className="flex items-center gap-1 text-zinc-400">
                  <span>5G</span>
                  <div className="w-3.5 h-1.5 rounded-3xs border border-zinc-500 p-px flex items-center">
                    <div className="w-full h-full bg-white rounded-4xs" />
                  </div>
                </div>
              </div>

              {/* Dynamic Screen Content Wrapper based on Tab state */}
              <div className="flex-1 flex flex-col pt-1.5 px-2.5 text-left overflow-y-auto relative z-5">
                <AnimatePresence mode="wait">
                  {activeTab === 'preflight' && (
                    <motion.div
                      key="preflight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col"
                    >
                      <span className="text-[7px] text-zinc-500 font-extrabold tracking-wider uppercase block mb-0.5">PREFLIGHT COUNTDOWN</span>
                      <h3 className="text-[11px] font-black text-white leading-tight mb-2">San Francisco to New York</h3>
                      
                      {/* Preflight card */}
                      <div className="rounded-xl border border-white/5 p-2.5 flex flex-col bg-white/5 backdrop-blur-xl shadow-xs mb-2">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[6px] font-extrabold uppercase px-1 py-0.2 bg-blue-500/5 text-blue-500 border border-blue-500/10 rounded">
                            CHECK-IN OPEN
                          </span>
                          <span className="text-[6.5px] font-bold text-zinc-400">DL 305</span>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                          <span className="text-base font-black text-white leading-none">SFO</span>
                          <Plane className="w-3 h-3 text-zinc-650" />
                          <span className="text-base font-black text-white leading-none">JFK</span>
                        </div>

                        <div className="text-center py-1.5 border-y border-white/5 my-1.5 bg-black/40 rounded-md">
                          <span className="text-[6px] text-zinc-500 font-bold uppercase block mb-0.5">DEPARTS IN</span>
                          <span className="text-sm font-black text-white tracking-widest font-mono">03:14:22</span>
                        </div>

                        <div className="flex justify-between items-center text-[7.5px] pt-0.5">
                          <div>
                            <span className="text-zinc-500 block uppercase font-bold text-[5.5px]">SEAT ASSIGNED</span>
                            <span className="font-extrabold text-white">14A (Window)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-zinc-500 block uppercase font-bold text-[5.5px]">TERMINAL</span>
                            <span className="font-extrabold text-white">T1 • Concourse C</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'airport' && (
                    <motion.div
                      key="airport"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col h-full overflow-hidden"
                    >
                      {/* Map Header - Custom SVG representation of Bay Area SFO */}
                      <div className="relative w-full h-[85px] sm:h-[105px] bg-[#C5E1F5] rounded-xl overflow-hidden mb-2 border border-white/5 shrink-0 shadow-xs">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Land mass shape */}
                          <path d="M 0 30 Q 30 20 50 45 T 100 10 L 100 100 L 0 100 Z" fill="#E8EDE4" />
                          {/* Bridge / Freeway lines */}
                          <path d="M 10 30 L 90 70 M 0 60 Q 40 40 100 80" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.8" />
                          {/* SFO airport runways */}
                          <line x1="40" y1="65" x2="70" y2="35" stroke="#90A4AE" strokeWidth="3" />
                          <line x1="45" y1="70" x2="75" y2="40" stroke="#90A4AE" strokeWidth="3" />
                          {/* Aircraft track */}
                          <path d="M 50 85 Q 52 75 58 55" stroke="#00D26A" strokeWidth="1" strokeDasharray="2" fill="none" />
                          {/* Aircraft location dot */}
                          <circle cx="58" cy="55" r="2.5" fill="#00D26A" />
                          <circle cx="58" cy="55" r="4.5" fill="none" stroke="#00D26A" strokeWidth="0.8" className="animate-ping" />
                        </svg>

                        {/* Floating mini map buttons */}
                        <div className="absolute right-1 top-1 flex flex-col gap-1">
                          {['🌐', '💨', '🌧️', '✈️'].map((btn, bidx) => (
                            <div key={bidx} className="w-4 h-4 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[7px] text-white shadow-xs shrink-0 scale-90">
                              {btn}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Main Live Widget */}
                      <div className="rounded-xl border border-white/5 p-2 flex flex-col bg-white/5 backdrop-blur-xl shadow-xs shrink-0 mb-1">
                        
                        {/* Delta header */}
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded bg-red-600 flex items-center justify-center scale-90 overflow-hidden">
                              <svg viewBox="0 0 24 24" className="w-2 h-2" fill="#FFFFFF">
                                <polygon points="12,2 2,22 12,18 22,22" />
                              </svg>
                            </div>
                            <span className="text-[7px] font-black text-white">DL 305 • WED, 25 FEB</span>
                          </div>
                          <span className="text-[8px] text-zinc-500 font-bold scale-90">✕</span>
                        </div>

                        <h4 className="text-[8.5px] font-extrabold text-white block leading-none mb-1">San Francisco to New York</h4>

                        <div className="flex items-center gap-1 py-0.5 mb-1.5 border-b border-white/5 pb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-flighty-green animate-pulse" />
                          <span className="text-[7.5px] font-black text-flighty-green">Gate Departure in 1h 38m</span>
                          <span className="text-[6px] text-zinc-500 font-medium">Inbound aircraft has arrived &gt;</span>
                        </div>

                        {/* SFO row */}
                        <div className="flex justify-between items-center mb-1.5">
                          <div className="text-left">
                            <span className="text-[6.5px] text-zinc-400 font-bold uppercase block leading-none">SFO • San Francisco Intl. &gt;</span>
                            <span className="text-[13px] font-black text-white leading-tight block">09:10</span>
                            <span className="text-[6px] text-zinc-500 font-medium block leading-none">On Time • Departs in 1h 38m</span>
                          </div>
                          <div className="bg-[#FFCC00] text-black font-extrabold text-[8px] px-1.5 py-0.5 rounded leading-none text-right shadow-2xs shrink-0 scale-90">
                            C8
                            <span className="block text-[4.5px] font-medium opacity-80 uppercase">Terminal 1</span>
                          </div>
                        </div>

                        {/* JFK row */}
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <span className="text-[6.5px] text-zinc-400 font-bold uppercase block leading-none">JFK • John F. Kennedy Intl. &gt;</span>
                            <span className="text-[13px] font-black text-white leading-tight block">17:25</span>
                            <span className="text-[6px] text-zinc-500 font-medium block leading-none">22m Early • Arrives in 5h 53m</span>
                          </div>
                          <div className="bg-[#FFCC00] text-black font-extrabold text-[8px] px-1.5 py-0.5 rounded leading-none text-right shadow-2xs shrink-0 scale-90">
                            B38
                            <span className="block text-[4.5px] font-medium opacity-80 uppercase">Terminal 4</span>
                          </div>
                        </div>

                      </div>

                      {/* Mini bottom tab controls inside the phone */}
                      <div className="mt-auto border-t border-white/5 pt-1.5 pb-1 flex justify-between items-center shrink-0">
                        <button className="text-[7.5px] font-bold text-zinc-400 flex items-center gap-1 scale-90">
                          <span>✈️</span> Tap to Edit
                        </button>
                        <button className="text-[7.5px] font-bold text-zinc-400 flex items-center gap-1 scale-90">
                          <span>💺</span> Seats
                        </button>
                        <button className="px-2.5 py-0.8 bg-[#00D26A] text-black font-extrabold text-[7px] rounded-full flex items-center gap-1 shadow-2xs scale-90 hover:scale-95 transition-transform">
                          <Share2 className="w-2 h-2 text-black" /> Share
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'landing' && (
                    <motion.div
                      key="landing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col"
                    >
                      <span className="text-[7px] text-zinc-550 font-extrabold tracking-wider uppercase block mb-0.5">AFTER LANDING</span>
                      <h3 className="text-[11px] font-black text-white leading-tight mb-2">San Francisco to New York</h3>
                      
                      {/* Landed Card */}
                      <div className="rounded-xl border border-white/5 p-2.5 flex flex-col bg-white/5 backdrop-blur-xl shadow-xs mb-2">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[6px] font-extrabold uppercase px-1 py-0.2 bg-flighty-green/5 text-flighty-green border border-flighty-green/10 rounded">
                            LANDED EARLY
                          </span>
                          <span className="text-[6.5px] font-bold text-zinc-500">DL 305</span>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                          <span className="text-base font-black text-white leading-none">SFO</span>
                          <CheckCircle className="w-3 h-3 text-flighty-green" />
                          <span className="text-base font-black text-white leading-none">JFK</span>
                        </div>

                        <div className="text-center py-2 border-y border-white/5 my-1.5 bg-black/40 rounded-md">
                          <span className="text-[6px] text-zinc-500 font-bold uppercase block mb-0.5">ARRIVED GATE</span>
                          <span className="text-[11px] font-black text-white leading-none">6:32am (22m early)</span>
                          <span className="text-[5.5px] text-zinc-500 block font-semibold mt-0.5">Baggage claim active</span>
                        </div>

                        <div className="flex justify-between items-center text-[7.5px] pt-0.5">
                          <div>
                            <span className="text-zinc-500 block uppercase font-bold text-[5.5px]">CLAIM BELT</span>
                            <span className="font-extrabold text-white">Belt 6</span>
                          </div>
                          <div className="text-right">
                            <span className="text-zinc-500 block uppercase font-bold text-[5.5px]">LOCAL WEATHER</span>
                            <span className="font-extrabold text-white">☀️ 88ºF</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'download' && (
                    <motion.div
                      key="download"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col justify-center items-center text-center px-1"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center mb-2 shadow-xs shrink-0 scale-90">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 -rotate-45">
                          <path d="M22 2 11 13" />
                          <path d="M22 2 15 22 11 13 2 9z" />
                        </svg>
                      </div>

                      <h4 className="text-[11px] font-extrabold text-white mb-0.5">Get Flighty Pro</h4>
                      <p className="text-[6.5px] text-zinc-400 font-light mb-3 max-w-[130px] leading-tight">
                        Download on iPhone, iPad, Mac and Apple Watch.
                      </p>

                      <div className="flex flex-col gap-1 w-full scale-90">
                        <div className="px-3 py-1 rounded bg-white text-black font-bold text-[7px] text-center cursor-pointer shadow-xs">
                          App Store Download
                        </div>
                        <div className="px-3 py-1 rounded border border-white/10 bg-white/10 text-white backdrop-blur-md font-semibold text-[7px] text-center cursor-pointer shadow-xs">
                          Learn More
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Home Indicator Line */}
              <div className="w-20 h-0.8 bg-white/20 rounded-full mx-auto mt-auto mb-1.5 shrink-0 z-10" />

            </div>
          </div>

          {/* Right Cards Column */}
          <div 
            className="relative w-full max-w-[310px] sm:max-w-[330px] md:absolute md:w-[260px] lg:w-[320px] xl:w-[350px] md:left-1/2 md:translate-x-[150px] lg:translate-x-[170px] xl:translate-x-[190px] md:top-[30px] flex flex-col gap-6 items-center md:items-start z-20 transition-all duration-300 pb-24 md:pb-0"
          >
            {rightCards.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Bottom Floating Navigation Pill - Overlapping wrist area exactly */}
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-zinc-950 text-white rounded-full px-5 py-3.5 flex items-center justify-between gap-4 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)] border border-white/10 pointer-events-auto text-[11px] font-bold"
          >
            {[
              { id: 'preflight', label: 'Preflight', icon: () => (
                <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 22h20M21 16l-8-8H7l-3 3h2l3-1 4 4-6 6h7l5-4z" />
                </svg>
              )},
              { id: 'airport', label: 'At the airport', icon: () => (
                <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" />
                </svg>
              )},
              { id: 'landing', label: 'After landing', icon: () => (
                <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 22H2M21 12l-8 8H7l-3-3h2l3 1 4-4-6-6h7l5 4z" />
                </svg>
              )},
              { id: 'download', label: 'Download', icon: () => (
                <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              )}
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`cursor-pointer uppercase tracking-wider text-[9px] sm:text-[10px] transition-all duration-250 px-3 py-1.5 rounded-full flex items-center ${
                    isActive 
                      ? 'bg-[#FFCC00] text-black font-extrabold shadow-sm scale-102'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <TabIcon />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
