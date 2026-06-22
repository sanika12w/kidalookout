'use client';

import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, Smartphone, Watch, AlertTriangle, CheckCircle, 
  Settings, Compass, Plane, Share2, Shield, Cloud, Cpu,
  Activity, Car, Download
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Left side floating status cards moved outside to avoid re-creation
const LEFT_CARDS = [
  { 
    text: "Front + Rear Cameras Recording",
    sub: "Capture both perspectives simultaneously",
    type: "mom", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[0px]"
  },
  { 
    text: "Apple Watch Live Preview",
    sub: "See framing without touching your phone", 
    type: "aa", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-10px]"
  },
  { 
    text: "\"Hey Lookout\" Activated",
    sub: "Voice control enabled", 
    type: "delta", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-30px]"
  },
  { 
    text: "Screen Off. Recording Continues.",
    sub: "Focus Mode enabled", 
    type: "landed", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-46px]"
  },
  { 
    text: "Continuity Camera Ready",
    sub: "Use Lookout with your Mac", 
    type: "baggage-6", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-35px]"
  },
  { 
    text: "Privacy Protection Active",
    sub: "Local processing, no cloud tracking", 
    type: "privacy", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-15px]"
  },
  { 
    text: "Cloud Sync Disabled",
    sub: "Secure on-device storage", 
    type: "cloud", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-30px]"
  },
  { 
    text: "AI Event Detection",
    sub: "Intelligent highlight tagging", 
    type: "ai", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-20px]"
  }
];

// Right side floating status cards moved outside to avoid re-creation
const RIGHT_CARDS = [
  { 
    text: "Recording Started",
    sub: "Triggered from Apple Watch", 
    type: "gate", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-60px]"
  },
  { 
    text: "Split-Screen Mode Active",
    sub: "Creator + Scene captured together", 
    type: "weather", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-60px]"
  },
  { 
    text: "4K Dual Capture",
    sub: "High-quality recording in progress", 
    type: "delayed", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[-10px]"
  },
  { 
    text: "Location Embedded",
    sub: "GPS metadata attached", 
    type: "changed", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[10px]"
  },
  { 
    text: "Apple Maps Connected",
    sub: "Enhanced route visualization", 
    type: "baggage-14", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[40px]"
  },
  { 
    text: "Motion Detection Sensor",
    sub: "Start recording on movement", 
    type: "motion", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[20px]"
  },
  { 
    text: "Drive Safety Log",
    sub: "Perfect for dashcam usage", 
    type: "safety", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[35px]"
  },
  { 
    text: "One-Tap Quick Save",
    sub: "Instantly export clip to library", 
    type: "save", 
    opacity: "opacity-100",
    offsetClass: "md:translate-x-[15px]"
  }
];

const ALL_CARDS = [...LEFT_CARDS, ...RIGHT_CARDS];
const ALL_CARDS_REVERSED = [...ALL_CARDS].reverse();

// Rotate card array start points to prevent visual duplicate alignment across rows
const rotateArray = (arr, shift) => {
  return [...arr.slice(shift), ...arr.slice(0, shift)];
};

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
    case "privacy":
      return (
        <div className="w-7.5 h-7.5 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-500 shrink-0">
          <Shield className="w-4 h-4" />
        </div>
      );
    case "cloud":
      return (
        <div className="w-7.5 h-7.5 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-500 shrink-0">
          <Cloud className="w-4 h-4" />
        </div>
      );
    case "ai":
      return (
        <div className="w-7.5 h-7.5 rounded-lg bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-500 shrink-0">
          <Cpu className="w-4 h-4" />
        </div>
      );
    case "motion":
      return (
        <div className="w-7.5 h-7.5 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
          <Activity className="w-4 h-4" />
        </div>
      );
    case "safety":
      return (
        <div className="w-7.5 h-7.5 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-500 shrink-0">
          <Car className="w-4 h-4" />
        </div>
      );
    case "save":
      return (
        <div className="w-7.5 h-7.5 rounded-lg bg-pink-500/10 border border-pink-500/15 flex items-center justify-center text-pink-500 shrink-0">
          <Download className="w-4 h-4" />
        </div>
      );
    default:
      return null;
  }
};

// Memoized status card component to prevent unnecessary repaints and re-renders
const StatusCard = memo(({ card, isRight = false }) => {
  return (
    <div
      className={`w-fit max-w-[280px] sm:max-w-[310px] ${card.opacity} transition-all duration-500 z-10 ${card.offsetClass} flex-shrink-0`}
    >
      <div className="bg-[#0d0a16]/60 backdrop-blur-sm rounded-full border border-white/[0.08] px-4.5 py-2.5 flex items-center gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_32px_0_rgba(0,0,0,0.4)]">
        {isRight ? (
          <>
            <div className="text-right flex-1">
              <span className="text-[12px] font-bold text-white block leading-none mb-0.5">{card.text}</span>
              <span className="text-[10px] text-zinc-300 font-semibold">{card.sub}</span>
            </div>
            {renderCardIcon(card.type)}
          </>
        ) : (
          <>
            {renderCardIcon(card.type)}
            <div className="text-left flex-1">
              <span className="text-[12px] font-bold text-white block leading-none mb-0.5">{card.text}</span>
              <span className="text-[10px] text-zinc-300 font-semibold">{card.sub}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
StatusCard.displayName = 'StatusCard';

// Horizontal Marquee Row Component for smooth looping animations
const MarqueeRow = memo(({ direction, delay, cards, mounted }) => {
  return (
    <div 
      className="w-full flex overflow-hidden pointer-events-none select-none py-1.5"
    >
      <div 
        className="flex gap-6 pr-6 shrink-0" 
        style={{
          animation: mounted ? `${direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'} 60s linear infinite` : 'none',
          animationDelay: delay,
          willChange: 'transform'
        }}
      >
        {cards.map((card, idx) => (
          <StatusCard key={`a-${idx}`} card={{ ...card, offsetClass: "" }} isRight={direction === 'rtl'} />
        ))}
      </div>
      <div 
        className="flex gap-6 pr-6 shrink-0" 
        style={{
          animation: mounted ? `${direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'} 60s linear infinite` : 'none',
          animationDelay: delay,
          willChange: 'transform'
        }}
      >
        {cards.map((card, idx) => (
          <StatusCard key={`b-${idx}`} card={{ ...card, offsetClass: "" }} isRight={direction === 'rtl'} />
        ))}
      </div>
    </div>
  );
});
MarqueeRow.displayName = 'MarqueeRow';

// Isolated subcomponent for the mockup phone screen to prevent parent re-renders when activeTab changes
const PhoneScreen = memo(({ activeTab }) => {
  return (
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
            <span className="text-[7px] text-zinc-550 font-extrabold tracking-wider uppercase block mb-0.5">PREFLIGHT COUNTDOWN</span>
            <h3 className="text-[11px] font-black text-white leading-tight mb-2">San Francisco to New York</h3>
            
            {/* Preflight card */}
            <div className="rounded-xl border border-white/5 p-2.5 flex flex-col bg-white/5 backdrop-blur-sm shadow-xs mb-2">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[6px] font-extrabold uppercase px-1 py-0.2 bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/20 rounded">
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
            <div className="rounded-xl border border-white/5 p-2 flex flex-col bg-white/5 backdrop-blur-sm shadow-xs shrink-0 mb-1">
              
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
            <div className="rounded-xl border border-white/5 p-2.5 flex flex-col bg-white/5 backdrop-blur-sm shadow-xs mb-2">
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

            <h4 className="text-[11px] font-extrabold text-white mb-0.5">Get Lookout Pro</h4>
            <p className="text-[6.5px] text-zinc-400 font-light mb-3 max-w-[130px] leading-tight">
              Download on iPhone, iPad, Mac and Apple Watch.
            </p>

            <div className="flex flex-col gap-1 w-full scale-90">
              <div className="px-3 py-1 rounded bg-white text-black font-bold text-[7px] text-center cursor-pointer shadow-xs">
                App Store Download
              </div>
              <div className="px-3 py-1 rounded border border-white/10 bg-white/10 text-white backdrop-blur-sm font-semibold text-[7px] text-center cursor-pointer shadow-xs">
                Learn More
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
PhoneScreen.displayName = 'PhoneScreen';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('preflight');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section 
      className="relative bg-[#05010d] w-full overflow-hidden px-6 pt-40 pb-0 flex flex-col items-center justify-start" 
      style={{ backgroundColor: '#05010d' }}
    >
      {/* Layer 1 — Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        style={{ opacity: 0.72, filter: 'blur(2px) brightness(0.5) saturate(0.8)' }}
      >
        <source src="/hero_bg.mp4" type="video/mp4" />
      </video>

      {/* Layer 2 — Black Overlay */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none z-1" />

      {/* Layer 3 — Purple Ambient Glows - Hardware Accelerated */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none z-2" 
        style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-[140px] pointer-events-none z-2" 
        style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
      />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative">
        
        {/* 1. Text Container - sits in normal flow */}
        <div className="text-center max-w-4xl mx-auto mb-5 relative z-30">
          {/* Headline */}
          <ScrollReveal direction="up" delay={0.1} className="max-w-[900px] w-full">
            <h1
              className="
                text-3xl
                sm:text-5xl
                lg:text-[64px]
                font-semibold
                text-white
                tracking-tight
                leading-[1.15]
                mb-8
              "
            >
              Dual Camera Recording App
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.15} className="max-w-2xl mx-auto">
            <p
              className="
                text-base
                sm:text-lg
                lg:text-xl
                font-normal
                leading-[1.65]
                text-zinc-400
              "
            >
              Record front and rear cameras simultaneously, control recording from Apple Watch, and create split-screen videos for vlogs, reactions, travel content, and social media.
            </p>
          </ScrollReveal>

          {/* Platform Support Row */}
          <ScrollReveal direction="up" delay={0.2} className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[12px] sm:text-[13px] font-semibold mt-8 mb-2 select-none">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm text-zinc-300 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.08)] cursor-default group">
                <Smartphone className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <span>iPhone</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm text-zinc-300 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.08)] cursor-default group">
                <Laptop className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <span>macOS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm text-zinc-300 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.08)] cursor-default group">
                <Watch className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                <span>Apple Watch</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. Product Stage */}
        <div className="relative w-full overflow-visible mt-12 h-auto md:h-[710px]">
          
          {/* 5 Horizontal Marquee Rows - Centered screen-spanning flex column with gap-6 for compact vertical spacing */}
          <div className="absolute top-[35%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100vw] flex flex-col gap-6 pointer-events-none z-20 overflow-hidden py-4">
            <MarqueeRow direction="ltr" delay="-15s" cards={ALL_CARDS_REVERSED} mounted={mounted} />
            <MarqueeRow direction="rtl" delay="-30s" cards={rotateArray(ALL_CARDS_REVERSED, 3)} mounted={mounted} />
            <MarqueeRow direction="ltr" delay="-45s" cards={rotateArray(ALL_CARDS_REVERSED, 6)} mounted={mounted} />
            <MarqueeRow direction="rtl" delay="-10s" cards={rotateArray(ALL_CARDS_REVERSED, 9)} mounted={mounted} />
            <MarqueeRow direction="ltr" delay="-25s" cards={rotateArray(ALL_CARDS_REVERSED, 12)} mounted={mounted} />
          </div>

          {/* Central Hand-held Phone Mockup - Centered horizontally */}
          <div 
            className="relative w-[450px] sm:w-[520px] mx-auto aspect-[930/1260] z-25 overflow-visible translate-x-4
              sm:translate-x-6 md:my-0 md:absolute md:left-[56%] md:-translate-x-1/2 md:top-0 my-8"
          >
            {/* Expanded Layered gradient glows behind phone - Hardware Accelerated */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-to-tr from-violet-600/50 via-purple-500/30 to-indigo-500/40 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10" 
              style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
            />
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/40 via-indigo-600/30 to-purple-600/50 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none -z-10" 
              style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
            />

            {/* The transparent screen hand overlay - Served locally, in WebP format, LCP optimized */}
            <img 
              src="/hero_hand_phone.webp" 
              width={1000}
              height={1460}
              fetchPriority="high"
              loading="eager"
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

              {/* Dynamic Screen Content Wrapper based on Tab state - Memoized to prevent re-renders */}
              <PhoneScreen activeTab={activeTab} />

              {/* Bottom Home Indicator Line */}
              <div className="w-20 h-0.8 bg-white/20 rounded-full mx-auto mt-auto mb-1.5 shrink-0 z-10" />

            </div>

      {/* Hand Fade Overlays ONLY (z-[26]) spanning the entire viewport width */}

{/* Layer 1 — Softer cinematic wrist fade */}
<div
  className="
    absolute 
    -bottom-[8%] 
    left-1/2 
    w-screen 
    -translate-x-1/2 
    h-[36%] 
    pointer-events-none 
    z-[26]
    bg-gradient-to-t
    from-[#05010d]
    via-[#05010d]/80
    to-transparent
  "
/>

{/* Layer 2 — Seamless section transition */}
<div
  className="
    absolute
    -bottom-[18%]
    left-1/2
    w-screen
    -translate-x-1/2
    h-[22vh]
    pointer-events-none
    z-[26]
    bg-gradient-to-b
    from-transparent
    via-[#05010d]/85
    to-[#05010d]
  "
/>
          </div>

          {/* Bottom Floating Navigation Pill - Overlapping wrist area exactly */}
          {/* <div 
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
          </div> */}

        </div>

      </div>

    </section>
  );
}
