'use client';

import { motion } from 'framer-motion';
import { Globe, Video, Sliders, ShieldCheck, Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TravelHistory() {
  const stats = [
    { label: 'TOTAL CLIPS COMPILED', value: '142', desc: '22.4 GB Total Media', icon: Globe },
    { label: 'PREFERRED LAYOUT', value: 'Split', desc: 'Side-by-Side (84% of takes)', icon: Video },
    { label: 'PRIMARY RESOLUTION', value: '4K 60', desc: '94% Ultra HD streams', icon: Sliders },
    { label: 'LATENCY CORRECTION', value: '0.0ms', desc: '0 dropped frames matching audio', icon: ShieldCheck },
  ];

  return (
    <section id="history" className="py-40 lg:py-52 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="small-label text-zinc-400 block mb-4">MEDIA INTELLIGENCE</span>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-[54px] font-sans font-semibold leading-[1.15] tracking-tight text-black mb-6">
              Review your creative pipeline, frame by frame.
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg font-normal leading-[1.65]">
              Whether you record one clip a year or one thousand, Lookout provides a detailed telemetry summary of your captured streams. Enjoy a complete history of your creative milestones, right on an Apple Design-inspired dashboard.
            </p>
          </ScrollReveal>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12 lg:mt-16">
          
          {/* Light Grid SVG Arc Map */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <ScrollReveal direction="left" className="w-full">
              <div className="relative aspect-[16/10] w-full border border-black/5 rounded-3xl bg-zinc-50 p-6 overflow-hidden flex flex-col justify-between shadow-premium">
                
                {/* Clean light grid lines */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 800 500" fill="none">
                    <line x1="100" y1="0" x2="100" y2="500" stroke="black" strokeWidth="1" />
                    <line x1="200" y1="0" x2="200" y2="500" stroke="black" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="500" stroke="black" strokeWidth="1" />
                    <line x1="400" y1="0" x2="400" y2="500" stroke="black" strokeWidth="1" />
                    <line x1="500" y1="0" x2="500" y2="500" stroke="black" strokeWidth="1" />
                    <line x1="600" y1="0" x2="600" y2="500" stroke="black" strokeWidth="1" />
                    <line x1="700" y1="0" x2="700" y2="500" stroke="black" strokeWidth="1" />
                    
                    <line x1="0" y1="100" x2="800" y2="100" stroke="black" strokeWidth="1" />
                    <line x1="0" y1="200" x2="800" y2="200" stroke="black" strokeWidth="1" />
                    <line x1="0" y1="300" x2="800" y2="300" stroke="black" strokeWidth="1" />
                    <line x1="0" y1="400" x2="800" y2="400" stroke="black" strokeWidth="1" />
                  </svg>
                </div>

                {/* Animated Paths */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Front Camera Feed to Neural Core */}
                  <g>
                    <path d="M 200 150 Q 325 100 450 250" stroke="rgba(0,0,0,0.03)" strokeWidth="2" fill="none" />
                    <motion.path
                      d="M 200 150 Q 325 100 450 250"
                      stroke="#00D26A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                    />
                    <circle cx="200" cy="150" r="4" fill="black" />
                    <text x="145" y="153" fill="#8E8E93" fontSize="9" fontWeight="bold">FRONT LENS</text>
                  </g>

                  {/* Rear Camera Feed to Neural Core */}
                  <g>
                    <path d="M 200 350 Q 325 400 450 250" stroke="rgba(0,0,0,0.03)" strokeWidth="2" fill="none" />
                    <motion.path
                      d="M 200 350 Q 325 400 450 250"
                      stroke="#00D26A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: 'easeInOut', delay: 0.4 }}
                    />
                    <circle cx="200" cy="350" r="4" fill="black" />
                    <text x="150" y="354" fill="#8E8E93" fontSize="9" fontWeight="bold">REAR LENS</text>
                  </g>

                  {/* Neural Core to Merged Output */}
                  <g>
                    <path d="M 450 250 L 700 250" stroke="rgba(0,0,0,0.03)" strokeWidth="2" fill="none" />
                    <motion.path
                      d="M 450 250 L 700 250"
                      stroke="#0A84FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
                    />
                    <circle cx="450" cy="250" r="5" fill="black" />
                    <circle cx="700" cy="250" r="5" fill="black" />
                    <text x="420" y="235" fill="#8E8E93" fontSize="9" fontWeight="bold">NEURAL CPU</text>
                    <text x="712" y="254" fill="#8E8E93" fontSize="9" fontWeight="bold">OUTPUT.MP4</text>
                  </g>
                </svg>

                {/* Card tag */}
                <div className="flex justify-between items-start z-20 relative">
                  <div>
                    <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-widest block">CAMERA BUFFER GRAPH</span>
                    <span className="text-xs font-bold text-black">A visual representation of dual-lens sync streams</span>
                  </div>
                  <span className="text-[9px] px-2.5 py-0.5 rounded-full border border-black/5 bg-white font-bold text-zinc-400 shadow-navbar">
                    Real-time Pipeline
                  </span>
                </div>

                <div className="z-20 relative flex justify-between items-end">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D26A]" />
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Zero buffer offset active</span>
                  </div>
                  <span className="text-[9px] text-zinc-400 font-bold font-mono">Process: Hardware-Accelerated</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal
                  key={stat.label}
                  direction="up"
                  delay={idx * 0.1}
                  className="bg-white border border-black/5 rounded-2xl p-5 hover:scale-[1.01] transition-all duration-350 flex flex-col justify-between min-h-[140px] shadow-premium"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-widest leading-none">
                      {stat.label}
                    </span>
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <span className="text-2xl lg:text-3xl font-black text-black block tracking-tighter mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-light block leading-tight">
                      {stat.desc}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
