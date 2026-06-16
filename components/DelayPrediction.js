'use client';

import { useState, useRef, memo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Static carousel configuration moved outside the component to prevent re-creation and memory thrashing
const SLIDES = [
  {
    id: 'iphone',
    badge: 'IPHONE MODE',
    heading: 'Dual-camera recording. Right from your iPhone.',
    description: 'Use Lookout independently on iPhone to record with the front and rear cameras simultaneously. Capture both perspectives in a single recording without any additional devices.',
    image: '/lookout_iphone_mode.webp',
    alt: 'Lookout app dual-camera recording split-screen interface shown on a centered iPhone displaying front and rear camera capture',
    glow: 'from-purple-500/5 via-indigo-500/2 to-transparent',
    hoverBorder: 'hover:border-purple-500/25 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]',
    badgeStyle: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    dotColor: 'bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.5)]',
    glowColor: 'rgba(168,85,247,0.05)',
    arrowHoverGlow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:border-purple-500/30 hover:text-purple-400'
  },
  {
    id: 'watch',
    badge: 'APPLE WATCH REMOTE',
    heading: 'Control your recording from your wrist.',
    description: 'Pair Lookout with Apple Watch to remotely control your iPhone recordings. Start, stop, and monitor your recording session without touching your phone.',
    image: '/lookout_watch_remote.webp',
    alt: 'iPhone displaying dual camera stream beside a floating Apple Watch Ultra remote controller showing active recording triggers',
    glow: 'from-blue-500/5 via-indigo-500/2 to-transparent',
    hoverBorder: 'hover:border-blue-500/25 hover:shadow-[0_0_40px_rgba(10,132,255,0.06)]',
    badgeStyle: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    dotColor: 'bg-blue-500 shadow-[0_0_12px_rgba(10,132,255,0.5)]',
    glowColor: 'rgba(10,132,255,0.05)',
    arrowHoverGlow: 'hover:shadow-[0_0_15px_rgba(10,132,255,0.3)] hover:border-blue-500/30 hover:text-blue-400'
  },
  {
    id: 'macos',
    badge: 'MACOS RECORDING',
    heading: 'Two cameras. One seamless Mac recording.',
    description: 'Run Lookout on macOS and record from two camera sources simultaneously. Combine your Mac camera with Apple\'s Continuity Camera to capture both perspectives directly on your Mac.',
    image: '/lookout_macos_continuity.webp',
    alt: 'MacBook Pro displaying dual camera recording with one feed from the webcam and one from an iPhone via Continuity Camera',
    glow: 'from-emerald-500/5 via-teal-500/2 to-transparent',
    hoverBorder: 'hover:border-emerald-500/25 hover:shadow-[0_0_40px_rgba(0,210,106,0.06)]',
    badgeStyle: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    dotColor: 'bg-emerald-500 shadow-[0_0_12px_rgba(0,210,106,0.5)]',
    glowColor: 'rgba(0,210,106,0.05)',
    arrowHoverGlow: 'hover:shadow-[0_0_15px_rgba(0,210,106,0.3)] hover:border-emerald-500/30 hover:text-emerald-400'
  }
];

// Memoized slide item to prevent re-renders of other slides when carousel state shifts
const CarouselSlide = memo(({ slide, sIdx }) => {
  return (
    <div
      className="w-full shrink-0 snap-center snap-always grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center px-1"
    >
      {/* Info Text Area (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col justify-center text-left w-full pr-2">
        <span className={`inline-flex items-center self-start px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.15em] uppercase border mb-3 ${slide.badgeStyle}`}>
          {slide.badge}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-sans font-semibold mb-3 tracking-tight leading-[1.2] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
          {slide.heading}
        </h3>
        <p className="text-zinc-400 text-base font-normal leading-[1.6]">
          {slide.description}
        </p>
      </div>

      {/* Visual Image Showcase Area (lg:col-span-7) */}
      <div className="lg:col-span-7 w-full flex items-center justify-center relative min-h-[260px] sm:min-h-[340px] lg:min-h-0">
        {/* Backdrop glow specific to slide - Hardware Accelerated */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr ${slide.glow} rounded-full blur-[100px] pointer-events-none`} 
          style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
        />
        
        {/* Slide Image inside premium card bezel */}
        <div className={`relative w-full max-w-[480px] mx-auto select-none rounded-[24px] overflow-hidden border border-white/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0d0a16]/90 backdrop-blur-md transition-all duration-500 group ${slide.hoverBorder}`}>
          <Image
            src={slide.image}
            alt={slide.alt}
            width={960}
            height={640}
            className="w-full h-auto object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            priority={sIdx === 0}
          />
          {/* Glass reflection cover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
});
CarouselSlide.displayName = 'CarouselSlide';

export default function DelayPrediction() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  // Throttled scroll indicator handler using dynamic index checking
  const handleScroll = (e) => {
    const container = e.target;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    if (index !== activeSlide && index >= 0 && index < SLIDES.length) {
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: containerWidth * index,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const currentGlowColor = SLIDES[activeSlide]?.glowColor || 'rgba(168,85,247,0.05)';

  return (
    <section id="alerts" className="pt-12 pb-10 lg:pt-16 lg:pb-12 bg-[#05010d] border-b border-white/5 relative overflow-hidden z-10">
      {/* Hide native scrollbars in Webkit engines */}
      <style>{`
        #ecosystem-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Static active slide ambient background glow - Hardware Accelerated */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[600px] rounded-full blur-[140px] opacity-70 pointer-events-none transition-all duration-700 ease-in-out -z-10"
        style={{
          background: `radial-gradient(circle, ${currentGlowColor} 0%, transparent 70%)`,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform'
        }} 
      />

      {/* Outer subtle static glows - Hardware Accelerated */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-950/3 blur-[120px] pointer-events-none -z-10" 
        style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
      />
      <div 
        className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-950/3 blur-[120px] pointer-events-none -z-10" 
        style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <ScrollReveal direction="up">
            <span className="text-xs font-semibold text-zinc-500 tracking-[0.2em] uppercase block mb-3">
              APPLE ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-sans font-semibold mb-4 tracking-tight leading-[1.15] bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
              Designed for the Apple Ecosystem.
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg font-normal leading-[1.6]">
              Experience professional dual-camera power in three distinct workflows, built natively for your Apple devices.
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Carousel Shell */}
        <div className="relative w-full">
          
          {/* Left arrow button */}
          <button
            onClick={() => scrollToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            className={`hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/10 bg-[#0d0a16]/95 backdrop-blur-md items-center justify-center text-white transition-all duration-300 z-20 cursor-pointer shadow-lg scale-95 active:scale-90 ${
              activeSlide === 0 
                ? 'opacity-0 pointer-events-none' 
                : 'opacity-80 hover:opacity-100 hover:scale-105 ' + SLIDES[activeSlide]?.arrowHoverGlow
            }`}
            aria-label="Previous panel"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow button */}
          <button
            onClick={() => scrollToSlide(activeSlide + 1)}
            disabled={activeSlide === SLIDES.length - 1}
            className={`hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/10 bg-[#0d0a16]/95 backdrop-blur-md items-center justify-center text-white transition-all duration-300 z-20 cursor-pointer shadow-lg scale-95 active:scale-90 ${
              activeSlide === SLIDES.length - 1 
                ? 'opacity-0 pointer-events-none' 
                : 'opacity-80 hover:opacity-100 hover:scale-105 ' + SLIDES[activeSlide]?.arrowHoverGlow
            }`}
            aria-label="Next panel"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrolling Slides viewport */}
          <div
            id="ecosystem-scroll"
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {SLIDES.map((slide, sIdx) => (
              <CarouselSlide key={slide.id} slide={slide} sIdx={sIdx} />
            ))}
          </div>

        </div>

        {/* Carousel indicators/dots (Pill Navigation) */}
        <div className="flex justify-center items-center gap-3 mt-4 lg:mt-6 relative z-25">
          {SLIDES.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeSlide === idx 
                  ? `w-8 ${slide.dotColor}` 
                  : 'w-1.5 bg-white/20 hover:bg-white/45'
              }`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
