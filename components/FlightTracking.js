'use client';

import { Watch, EyeOff, Layout, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Custom high-fidelity mockups for premium product marketing visual presentation.
// Designed with CSS / SVGs for maximum responsiveness, accessibility, and zero layout shift.

function DualityMockup({ className = "max-w-[300px] mx-auto" }) {
  return (
    <div 
      className={`relative w-full aspect-[9/19] select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] ${className}`}
      role="img"
      aria-label="Lookout Duality interface showing real-time front and rear camera feeds in a split-screen layout on iPhone"
    >
      {/* Phone Body with Apple bezel */}
      <div className="absolute inset-0 rounded-[44px] border-4 border-[#1a1a1c] bg-[#0c0c0e] p-[7px] shadow-inner ring-1 ring-white/20">
        {/* Dynamic Island */}
        <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] rounded-[12px] bg-black z-30 flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0d2e5c]" />
        </div>
        
        {/* Screen Bezel and Display */}
        <div className="w-full h-full rounded-[37px] bg-black overflow-hidden border border-white/5 relative flex flex-col justify-between">
          {/* Status Bar */}
          <div className="h-[40px] px-6 pt-3 flex justify-between items-center text-[10px] font-bold text-white z-25 shrink-0">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.79-1.79C9.09 19.64 10.51 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2-2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 12H3V7h14v10zm6-8.5v7l3.25-3.5L23 8.5z" />
              </svg>
            </div>
          </div>
          
          {/* Recording Status Header */}
          <div className="absolute top-[42px] inset-x-0 px-4 flex justify-between items-center z-25">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] font-bold text-white tracking-widest uppercase">REC 00:02:45</span>
            </div>
            <div className="px-2 py-0.5 rounded bg-black/60 border border-white/10 backdrop-blur-xs text-[8px] font-extrabold text-[#00D26A] uppercase tracking-wider">
              4K • 60 FPS
            </div>
          </div>
          
          {/* Split View Container */}
          <div className="flex-1 w-full relative flex flex-col p-1.5 gap-1.5 justify-center">
            {/* Top Frame: Creator View */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="creatorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="100%" stopColor="#311042" />
                  </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#creatorGrad)" />
                <circle cx="100" cy="85" r="30" fill="#a78bfa" opacity="0.85" />
                <path d="M50 150 C 50 115, 150 115, 150 150 Z" fill="#c084fc" opacity="0.8" />
                <path d="M15 15 L 30 15 M 15 15 L 15 30" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                <path d="M185 15 L 170 15 M 185 15 L 185 30" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                <path d="M15 185 L 30 185 M 15 185 L 15 170" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                <path d="M185 185 L 170 185 M 185 185 L 185 170" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
              </svg>
              <div className="absolute bottom-2 left-2 text-[8px] font-bold text-white/70 tracking-widest uppercase bg-black/40 px-1.5 py-0.5 rounded border border-white/5 backdrop-blur-2xs">
                FRONT - 24mm LENS
              </div>
              <div className="absolute top-[40%] left-[40%] w-[40px] h-[40px] border border-yellow-500/40 rounded-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" />
              </div>
            </div>
            
            {/* Bottom Frame: Environment View */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="60%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                  <linearGradient id="mountGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#065f46" />
                    <stop offset="100%" stopColor="#064e3b" />
                  </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#skyGrad)" />
                <circle cx="150" cy="60" r="16" fill="#fef08a" opacity="0.9" />
                <polygon points="10,200 80,110 150,200" fill="url(#mountGrad)" opacity="0.9" />
                <polygon points="90,200 150,130 210,200" fill="#022c22" />
                <path d="M15 15 L 30 15 M 15 15 L 15 30" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                <path d="M185 15 L 170 15 M 185 15 L 185 30" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                <path d="M15 185 L 30 185 M 15 185 L 15 170" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                <path d="M185 185 L 170 185 M 185 185 L 185 170" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
              </svg>
              <div className="absolute bottom-2 left-2 text-[8px] font-bold text-white/70 tracking-widest uppercase bg-black/40 px-1.5 py-0.5 rounded border border-white/5 backdrop-blur-2xs">
                REAR - 13mm ULTRA-WIDE
              </div>
            </div>
            
            {/* Center Sync Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 border-2 border-white/10 shadow-[0_0_20px_rgba(0,210,106,0.3)] flex items-center justify-center z-10">
              <svg className="w-5 h-5 text-[#00D26A] animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
          </div>
          
          {/* Bottom Bar Controls */}
          <div className="h-[75px] bg-[#0c0c0e] border-t border-white/5 flex flex-col justify-center px-6 gap-2 shrink-0 z-25">
            {/* Lens selector */}
            <div className="flex justify-center items-center gap-4 text-[9px] font-bold text-zinc-500 mb-1">
              <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400">0.5x</span>
              <span className="px-2 py-0.5 rounded bg-[#00D26A]/10 text-[#00D26A] border border-[#00D26A]/20">1x</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400">2x</span>
            </div>
            {/* Action buttons */}
            <div className="flex justify-between items-center px-4">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <div className="w-9 h-9 rounded-full bg-white border-[3px] border-black ring-2 ring-red-500 flex items-center justify-center" />
              <div className="w-6 h-6 rounded-lg bg-zinc-850 border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Device reflection shine */}
      <div className="absolute inset-[8px] rounded-[36px] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60 pointer-events-none z-30 mix-blend-overlay" />
    </div>
  );
}

function WatchMockup() {
  return (
    <div 
      className="relative w-full max-w-[145px] sm:max-w-[155px] md:max-w-[160px] aspect-[4/5] mx-auto select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      role="img"
      aria-label="Oversized Apple Watch Ultra mockup showing remote recording controls, sync viewfinder, and audio levels"
    >
      {/* Soft blue glow behind the watch */}
      <div className="absolute -inset-6 bg-[#0A84FF]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Rugged Titanium Chassis (Apple Watch Ultra style) */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-[#e5e5e7] via-[#c7c7cc] to-[#8e8e93] p-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] ring-1 ring-white/15">
        {/* Right side: Digital Crown Guard & Orange accent */}
        <div className="absolute -right-1 top-[22%] w-2 h-[65px] bg-[#c7c7cc] rounded-l-xs border-r border-[#8e8e93]" />
        {/* Digital Crown with orange stripe */}
        <div className="absolute -right-3 top-[27%] w-[14px] h-[34px] bg-[#2c2c2e] rounded-md border border-zinc-700 shadow-md z-10 flex flex-col justify-between p-0.5">
          <div className="w-full h-1 bg-orange-500 rounded-2xs" />
          <div className="w-full h-[22px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-3xs" />
          <div className="w-full h-1 bg-orange-500 rounded-2xs" />
        </div>
        {/* Side Button */}
        <div className="absolute -right-1 top-[48%] w-2 h-[30px] bg-[#a2a2a6] rounded-l-xs border border-zinc-600 shadow-xs" />
        {/* Left Side Action Button (Orange) */}
        <div className="absolute -left-1.5 top-[35%] w-2.5 h-[40px] bg-[#ff453a] rounded-r-xs border border-red-700 shadow-md" />
        
        {/* Antenna band outlines */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-zinc-500/20" />
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-zinc-500/20" />
        
        {/* Inner bezel and screen */}
        <div className="w-full h-full rounded-[42px] bg-black p-[5px] overflow-hidden border border-[#555] relative flex flex-col justify-between">
          <div className="w-full h-full rounded-[37px] bg-[#000] border border-white/5 p-3.5 flex flex-col justify-between relative overflow-hidden">
            {/* watchOS Top Bar */}
            <div className="flex justify-between items-center text-[10px] font-bold text-white mb-2 shrink-0">
              <span className="text-[#FF9F0A]">9:41</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
                <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-wider">LIVE</span>
              </div>
            </div>
            
            {/* Remote Feed Display */}
            <div className="flex-1 w-full rounded-2xl bg-zinc-950 border border-white/10 p-1.5 flex flex-col gap-1 overflow-hidden justify-center relative">
              {/* Stacked Preview Feeds */}
              <div className="flex-1 rounded-lg bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 60" fill="none" preserveAspectRatio="none">
                  <rect width="100" height="60" fill="#311042" />
                  <circle cx="50" cy="25" r="10" fill="#a78bfa" opacity="0.6" />
                  <path d="M25 55 C 25 35, 75 35, 75 55 Z" fill="#c084fc" opacity="0.5" />
                </svg>
                <span className="absolute top-1 left-1.5 text-[7px] text-white/50 font-bold tracking-wider">FRONT</span>
              </div>
              <div className="flex-1 rounded-lg bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 60" fill="none" preserveAspectRatio="none">
                  <rect width="100" height="60" fill="#1e3a8a" />
                  <polygon points="10,60 50,20 90,60" fill="#065f46" opacity="0.7" />
                </svg>
                <span className="absolute top-1 left-1.5 text-[7px] text-white/50 font-bold tracking-wider">REAR</span>
              </div>
              
              {/* Haptic trigger indicator radiating circles */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-[#00D26A]/20 animate-ping opacity-60" style={{ animationDuration: '3s' }} />
                <div className="w-16 h-16 rounded-full border border-[#00D26A]/35 animate-ping opacity-80" style={{ animationDuration: '2s' }} />
              </div>
            </div>
            
            {/* Record / Stop Button */}
            <div className="mt-2 shrink-0 flex flex-col items-center justify-center gap-1.5">
              <div className="w-11 h-11 rounded-full bg-[#FF453A] border-[3px] border-black ring-2 ring-[#FF453A] flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer">
                {/* Stop icon (square) */}
                <div className="w-3.5 h-3.5 bg-white rounded-xs" />
              </div>
              <span className="text-[8px] font-extrabold text-white tracking-widest uppercase">TAP TO STOP</span>
            </div>
          </div>
        </div>
      </div>
      {/* Gloss glass reflection overlay */}
      <div className="absolute inset-[6px] rounded-[40px] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 pointer-events-none z-20 mix-blend-overlay" />
    </div>
  );
}

function FocusMockup() {
  return (
    <div 
      className="relative w-full max-w-[95px] sm:max-w-[105px] md:max-w-[110px] aspect-[9/19] mx-auto select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
      role="img"
      aria-label="Lookout Focus Mode display showing deep black stealth recording state and glowing ambient audio wave visualization"
    >
      {/* Matte Black Phone Body */}
      <div className="absolute inset-0 rounded-[38px] border-4 border-[#121214] bg-[#080809] p-[6px] shadow-inner ring-1 ring-white/10">
        
        {/* Dynamic Island */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[80px] h-[20px] rounded-[10px] bg-black z-30 flex items-center justify-between px-2">
          <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0d2e5c]" />
        </div>
        
        {/* Display screen (Deep black focus state) */}
        <div className="w-full h-full rounded-[31px] bg-[#020202] border border-white/5 overflow-hidden relative flex flex-col justify-between items-center py-8 px-4">
          
          {/* Top recording badge (Dimmed/discrete) */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
            <span className="text-[7.5px] font-bold text-zinc-500 tracking-widest uppercase">DISCRETE REC</span>
          </div>
          
          {/* Middle: Lock & Focus State */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#00D26A] shadow-[0_0_15px_rgba(0,210,106,0.15)] animate-pulse">
              <svg className="w-5 h-5 text-[#00D26A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-extrabold text-white tracking-widest uppercase block">SCREEN OFF ACTIVE</span>
              <span className="text-[8px] font-medium text-zinc-500 tracking-wider">Tap to wake screen</span>
            </div>
          </div>
          
          {/* Bottom: Audio spectrogram (Cinematic waves) */}
          <div className="w-full h-16 flex items-end justify-center px-1">
            <svg className="w-full h-full" viewBox="0 0 120 60" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d26a" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0a84ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Back wave */}
              <path d="M0,30 Q15,10 30,30 T60,30 T90,30 T120,30" stroke="url(#waveGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" className="opacity-40 animate-pulse" />
              {/* Middle wave */}
              <path d="M0,30 Q15,45 30,30 T60,30 T90,15 T120,30" stroke="url(#waveGrad)" strokeWidth="2" strokeLinecap="round" fill="none" className="opacity-70" />
              {/* Front wave */}
              <path d="M0,30 Q15,25 30,35 T60,15 T90,40 T120,30" stroke="url(#waveGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          
        </div>
      </div>
      {/* Ambient glow behind the phone */}
      <div className="absolute -inset-8 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </div>
  );
}

function PersonalizeMockup() {
  const icons = [
    { color: '#00D26A', name: 'Emerald', bg: 'bg-[#001f10] border-[#00d26a]/30' },
    { color: '#FF9F0A', name: 'Sunset', bg: 'bg-[#241300] border-[#ff9f0a]/30' },
    { color: '#0A84FF', name: 'Cobalt', bg: 'bg-[#00142e] border-[#0a84ff]/30' },
    { color: '#FF453A', name: 'Stealth Red', bg: 'bg-[#240003] border-[#ff453a]/30' },
  ];
  return (
    <div 
      className="w-full max-w-[210px] sm:max-w-[220px] md:max-w-[230px] mx-auto relative flex flex-col gap-3 items-center select-none pointer-events-none"
      role="img"
      aria-label="Lookout app custom home screen widget and various colorful application icon selections"
    >
      {/* Main Home Screen Widget mockup */}
      <div className="w-full rounded-2xl bg-zinc-950 border border-white/5 p-3.5 shadow-xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-[-50%] left-[-50%] w-[200px] h-[200px] rounded-full bg-[#00D26A]/5 blur-[80px]" />
        
        {/* Widget Header */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[8px] font-extrabold text-zinc-500 uppercase tracking-widest">LOOKOUT WIDGET</span>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/5 text-[7px] text-[#00D26A] font-bold uppercase">
            <span className="w-1 h-1 rounded-full bg-[#00D26A] animate-pulse" />
            STANDBY
          </div>
        </div>
        
        {/* Widget Grid Layout */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
            <span className="text-[8px] text-zinc-500 font-bold uppercase">Record Limit</span>
            <span className="text-sm font-black text-white mt-1">Unlimited</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
            <span className="text-[8px] text-zinc-500 font-bold uppercase">Sync Offset</span>
            <span className="text-sm font-black text-[#0A84FF] mt-1">0.00 ms</span>
          </div>
        </div>
        
        {/* Widget Graph/Bar */}
        <div className="mt-3 p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1.5">
          <div className="flex justify-between text-[7px] font-bold text-zinc-500">
            <span>STORAGE IN USE</span>
            <span className="text-white">14.2 GB AVAILABLE</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div className="w-[35%] h-full rounded-full bg-gradient-to-r from-[#0A84FF] to-[#00D26A]" />
          </div>
        </div>
      </div>
      
      {/* Floating App Icon Selection */}
      <div className="grid grid-cols-4 gap-2 w-full justify-center">
        {icons.map((item, idx) => (
          <div key={idx} className={`p-1 rounded-xl border ${item.bg} flex flex-col items-center gap-1 shadow-md hover:scale-105 transition-transform duration-300`}>
            {/* App Icon Body */}
            <div className="w-7 h-7 rounded-lg bg-black border border-white/10 flex items-center justify-center relative shadow-inner">
              <svg viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5" className="w-4 h-4 -rotate-45">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22 11 13 2 9z" />
              </svg>
            </div>
            <span className="text-[7px] font-bold text-zinc-400 tracking-wider whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrivacyMockup() {
  return (
    <div 
      className="relative w-full max-w-[145px] sm:max-w-[155px] md:max-w-[160px] aspect-square mx-auto select-none pointer-events-none"
      role="img"
      aria-label="Secure Enclave architecture diagram displaying A18-style isolated processors and secure local pipelines"
    >
      {/* CPU Silicon Visual */}
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9f0a" />
            <stop offset="100%" stopColor="#ff453a" />
          </linearGradient>
          <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9f0a" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff9f0a" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Glow behind chip */}
        <circle cx="100" cy="100" r="80" fill="url(#shieldGlow)" />
        
        {/* Silicon board gold lines */}
        <path d="M 30,50 L 55,50 M 30,70 L 55,70 M 30,130 L 55,130 M 30,150 L 55,150" stroke="#ff9f0a" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <path d="M 170,50 L 145,50 M 170,70 L 145,70 M 170,130 L 145,130 M 170,150 L 145,150" stroke="#ff9f0a" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <path d="M 50,30 L 50,55 M 70,30 L 70,55 M 130,30 L 130,55 M 150,30 L 150,55" stroke="#ff9f0a" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <path d="M 50,170 L 50,145 M 70,170 L 70,145 M 130,170 L 130,145 M 150,170 L 150,145" stroke="#ff9f0a" strokeWidth="1" opacity="0.3" strokeLinecap="round" />

        {/* Encrypted animated pathways (gold glowing dashes) */}
        <path d="M 25,100 L 55,100 L 55,70 M 175,100 L 145,100 L 145,130 M 100,25 L 100,55 L 70,55 M 100,175 L 100,145 L 130,145" stroke="url(#pathGrad)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.8" strokeLinecap="round">
          <animate attributeName="stroke-dashoffset" values="100;0" dur="8s" repeatCount="indefinite" />
        </path>
        
        {/* Chip Outer Frame */}
        <rect x="50" y="50" width="100" height="100" rx="14" fill="url(#chipGrad)" stroke="#334155" strokeWidth="3" />
        <rect x="53" y="53" width="94" height="94" rx="11" fill="none" stroke="#ff9f0a" strokeWidth="1.5" opacity="0.4" />
        
        {/* Core Sections (Four quadrants inside CPU) */}
        <rect x="60" y="60" width="36" height="36" rx="6" fill="#020617" stroke="#1e293b" strokeWidth="1" />
        <text x="78" y="81" fill="#64748b" fontSize="7" fontWeight="bold" textAnchor="middle">CAMERA</text>
        
        <rect x="104" y="60" width="36" height="36" rx="6" fill="#020617" stroke="#1e293b" strokeWidth="1" />
        <text x="122" y="81" fill="#64748b" fontSize="7" fontWeight="bold" textAnchor="middle">AUDIO</text>
        
        <rect x="60" y="104" width="36" height="36" rx="6" fill="#020617" stroke="#1e293b" strokeWidth="1" />
        <text x="78" y="125" fill="#64748b" fontSize="7" fontWeight="bold" textAnchor="middle">ON-DEV AI</text>
        
        <rect x="104" y="104" width="36" height="36" rx="6" fill="#020617" stroke="#1e293b" strokeWidth="1" />
        <text x="122" y="125" fill="#64748b" fontSize="7" fontWeight="bold" textAnchor="middle">STORAGE</text>
        
        {/* Secure Enclave Core (Center circle badge) */}
        <circle cx="100" cy="100" r="24" fill="#090d16" stroke="#ff9f0a" strokeWidth="2" />
        <circle cx="100" cy="100" r="20" fill="#ff9f0a" opacity="0.1" />
        
        {/* Shield Icon SVG overlay */}
        <path d="M 100,90 L 108,93 L 108,99 C 108,105 104,109 100,111 C 96,109 92,105 92,99 L 92,93 Z" fill="none" stroke="#ff9f0a" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 100,94 L 100,106" stroke="#ff9f0a" strokeWidth="1" strokeDasharray="1 1" />
      </svg>
      {/* Visual hardware isolation dome glow */}
      <div className="absolute inset-0 border border-orange-500/10 rounded-full scale-105 pointer-events-none animate-pulse" />
    </div>
  );
}

export default function FlightTracking() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#05010d] border-b border-white/5 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0A84FF]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00D26A]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-10 md:gap-12 lg:gap-14">
        
        {/* Main Section Header Area */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <ScrollReveal direction="up">
            <span className="text-xs sm:text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase block mb-6">
              FEATURES OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-sans font-semibold text-white mb-8 tracking-tight leading-[1.15]">
              Everything you&apos;ve wanted in a camera—and more.
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-normal leading-[1.65]">
              Lookout keeps you in control by capturing both sides of the story simultaneously, utilizing advanced on-device processing and watch integration.
            </p>
          </ScrollReveal>
        </div>

        {/* 1. First Feature: Wide Hero Feature Card */}
    <ScrollReveal direction="up" delay={0.1}>
  <div className="relative w-full max-w-3xl mx-auto group">

    {/* OUTER GLOW (this creates diffused border like Flighty) */}
    <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-r from-purple-500/30 via-fuchsia-500/20 to-blue-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700" />

    {/* BORDER WRAPPER */}
    <div className="relative p-[2px] rounded-[24px] bg-gradient-to-r from-purple-500/60 via-indigo-500/40 to-blue-500/60 shadow-[0_0_80px_rgba(168,85,247,0.15)]">

      {/* INNER CARD */}
      <div className="relative rounded-[22px] bg-[#050408] w-full flex flex-col md:flex-row items-center md:items-start justify-between overflow-hidden md:h-[380px]">

        {/* Ambient glow */}
        <div className="absolute top-[-20%] left-[-20%] w-[280px] h-[280px] bg-purple-500/5 blur-[110px] pointer-events-none" />

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left p-5 sm:p-6 md:p-8 md:pl-12 relative z-10">

          <span className="text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
            THE POWER OF DUALITY
          </span>

          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold mb-4 leading-[1.2] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Dual-Camera Split Recording
          </h3>

          <p className="text-white/70 text-[12px] font-semibold leading-[1.5] tracking-tight antialiased mt-2 md:mt-23">
            Record front and rear cameras simultaneously using Apple&apos;s multi-camera system with synced audio and video in one take.
          </p>
        

         <div className="inline-flex items-center gap-1.5 px-2.5 py-[2px] rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] font-medium text-purple-400 uppercase tracking-normal mt-6">
  <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
  Dual-Stream HD/UHD Enabled
</div>
        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end pr-0 md:pr-10 pb-4 md:pb-0 relative z-10">

          <DualityMockup
            className="max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] md:translate-y-[10px]"
          />

        </div>

      </div>
    </div>
  </div>
</ScrollReveal>
        {/* 2. Secondary Bento Cards: 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          
          {/* Card 1: Apple Watch Remote Control */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="bg-[#0d0a16]/90 border border-white/10 rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[440px] md:min-h-[500px] lg:min-h-[520px] h-full shadow-[0_15px_40px_-15px_rgba(255,255,255,0.06)] relative overflow-hidden group hover:border-[#0a84ff]/30 hover:shadow-[0_20px_50px_-10px_rgba(10,132,255,0.12),0_15px_40px_-15px_rgba(255,255,255,0.06)] transition-all duration-500">
              {/* Colored ambient backglow */}
              <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-[#0A84FF]/2 blur-[100px] group-hover:bg-[#0A84FF]/4 transition-colors duration-500 pointer-events-none" />
              
              <div className="flex flex-col text-left relative z-10">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-[#0A84FF] mb-4 shadow-[0_0_12px_rgba(10,132,255,0.06)] group-hover:scale-105 transition-transform duration-300">
  <Watch className="w-4.5 h-4.5" />
</div>
                <span className="text-[9px] font-bold text-[#0A84FF] uppercase tracking-[0.18em] block mb-2">
                   REMOTE CONTROLS
                </span>
                <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-semibold mb-2 tracking-[-0.03em] leading-[1.15] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
                  Apple Watch Camera Remote
                </h3>
                <p className="text-white/50 text-[12px] font-semibold leading-[1.5] tracking-tight antialiased max-w-xl">
                  Lookout turns your Apple Watch into a fully synced camera remote. The watch companion app offers a live wireless viewfinder, real-time audio levels monitoring, battery alerts, and instant start-stop recording triggers, allowing you to capture stable hands-free footage from a distance.
                </p>
              </div>

              {/* Apple Watch Graphic */}
              <div className="w-full h-[180px] sm:h-[200px] md:h-[210px] flex items-center justify-center mt-6 shrink-0 relative z-10">
                <WatchMockup />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Focus Mode Discretion */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-[#0d0a16]/90 border border-white/10 rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[440px] md:min-h-[500px] lg:min-h-[520px] h-full shadow-[0_15px_40px_-15px_rgba(255,255,255,0.06)] relative overflow-hidden group hover:border-purple-500/30 hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.12),0_15px_40px_-15px_rgba(255,255,255,0.06)] transition-all duration-500">
              {/* Colored ambient backglow */}
              <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-purple-500/2 blur-[100px] group-hover:bg-purple-500/4 transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col text-left relative z-10">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_12px_rgba(168,85,247,0.06)] group-hover:scale-105 transition-transform duration-300">
  <EyeOff className="w-4.5 h-4.5" />
</div>
                <span className="text-[9px] font-bold text-purple-400 uppercase tracking-[0.18em] block mb-2">
  STEALTH RECORDING
</span>
                <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-semibold mb-2 tracking-[-0.03em] leading-[1.15] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
  Focus Mode Stealth Screen
</h3>
                <p className="text-white/50 text-[12px] font-semibold leading-[1.5] tracking-tight antialiased max-w-xl">
                  Record secure dual-lens video streams while keeping your screen completely dark. Lookout&apos;s Focus Mode turns off screen backlighting and UI glare during active recording sessions, conserving device battery life, reducing camera heat, and enabling completely discreet, distraction-free capturing.
                </p>
              </div>

              {/* Focus Mode Graphic */}
              <div className="w-full h-[180px] sm:h-[200px] md:h-[210px] flex items-center justify-center mt-6 shrink-0 relative z-10">
                <FocusMockup />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Personalize Your Core */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="bg-[#0d0a16]/90 border border-white/10 rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[440px] md:min-h-[500px] lg:min-h-[520px] h-full shadow-[0_15px_40px_-15px_rgba(255,255,255,0.06)] relative overflow-hidden group hover:border-[#00d26a]/30 hover:shadow-[0_20px_50px_-10px_rgba(0,210,106,0.12),0_15px_40px_-15px_rgba(255,255,255,0.06)] transition-all duration-500">
              {/* Colored ambient backglow */}
              <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-[#00D26A]/2 blur-[100px] group-hover:bg-[#00D26A]/4 transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col text-left relative z-10">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-[#00D26A] mb-4 shadow-[0_0_12px_rgba(0,210,106,0.06)] group-hover:scale-105 transition-transform duration-300">
  <Layout className="w-4.5 h-4.5" />
</div>

<span className="text-[9px] font-bold text-[#00D26A] uppercase tracking-[0.18em] block mb-2">
  INTERFACES & ICONS
</span>

<h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-semibold mb-2 tracking-[-0.03em] leading-[1.15] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
  Custom iOS Widgets & Themes
</h3>
                <p className="text-white/50 text-[12px] font-semibold leading-[1.5] tracking-tight antialiased max-w-xl">
                  Make Lookout fit your custom iOS setup. Swap between premium, high-fidelity app icon colorways and configure interactive Home Screen widgets that display active storage status, latency calibrations, and instant quick-launch recording triggers with a single tap.
                </p>
              </div>

              {/* App Icons Grid Graphic */}
              <div className="w-full h-[180px] sm:h-[200px] md:h-[210px] flex items-center justify-center mt-6 shrink-0 relative z-10">
                <PersonalizeMockup />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Fortress of Privacy */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-[#0d0a16]/90 border border-white/10 rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[440px] md:min-h-[500px] lg:min-h-[520px] h-full shadow-[0_15px_40px_-15px_rgba(255,255,255,0.06)] relative overflow-hidden group hover:border-[#ff9f0a]/30 hover:shadow-[0_20px_50px_-10px_rgba(255,159,10,0.12),0_15px_40px_-15px_rgba(255,255,255,0.06)] transition-all duration-500">
              {/* Colored ambient backglow */}
              <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-[#FF9F0A]/2 blur-[100px] group-hover:bg-[#FF9F0A]/4 transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col text-left relative z-10">
               
               <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-[#FF9F0A] mb-4 shadow-[0_0_12px_rgba(255,159,10,0.06)] group-hover:scale-105 transition-transform duration-300">
  <ShieldCheck className="w-4.5 h-4.5" />
</div>

<span className="text-[9px] font-semibold text-[#FF9F0A] uppercase tracking-[0.18em] block mb-2">
  PRIVACY SANCTUARY
</span>

<h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-semibold mb-2 tracking-[-0.03em] leading-[1.15] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
  Secure On-Device Privacy
</h3>

                <p className="text-white/50 text-[12px] font-semibold leading-[1.5] tracking-tight antialiased max-w-xl">
                  Protect your media with hardware-isolated processing. Lookout collects no user data, requiring no account creation or server connections. Every frame, audio waveform, and metadata log is compiled directly on your device&apos;s Secure Enclave, keeping your recordings fully private and accessible offline.
                </p>
              </div>

              {/* Secure Lock Graphic */}
              <div className="w-full h-[180px] sm:h-[200px] md:h-[210px] flex items-center justify-center mt-6 shrink-0 relative z-10">
                <PrivacyMockup />
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
