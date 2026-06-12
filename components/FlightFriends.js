'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Navigation, CheckCircle, Video, Film, Share2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FlightFriends() {
  const [activeFriend, setActiveFriend] = useState('vlog');

  const friends = {
    vlog: {
      name: 'Travel Vlog Template',
      status: 'EXPORT READY',
      badgeColor: 'bg-[#00D26A]/10 text-[#00D26A] border-[#00D26A]/10',
      route: 'FRONT LENS → REAR LENS',
      airline: 'Dual-Stream MP4 • 4K 60FPS',
      details: 'Rendered side-by-side horizontal grid. Ready to export directly to social feeds or editing software.',
      time: '1.2 GB size',
      progress: 1,
      stats: { altitude: 'Split Screen', speed: '0.00ms sync', estArrival: '4K H.264' }
    },
    interview: {
      name: 'Interview Overlay PIP',
      status: 'RENDERING',
      badgeColor: 'bg-[#0A84FF]/10 text-[#0A84FF] border-[#0A84FF]/10',
      route: 'FRONT LENS → PIP INSET',
      airline: 'Dual-Stream MP4 • 1080p 60FPS',
      details: 'Compiling picture-in-picture circular inset in top right corner. GPU hardware processing active.',
      time: '78% complete',
      progress: 0.78,
      stats: { altitude: 'PIP Inset', speed: '0.00ms sync', estArrival: '1080p HEVC' }
    }
  };

  const activeData = friends[activeFriend] || friends.vlog;

  return (
    <section id="friends" className="py-44 lg:py-56 bg-zinc-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Area */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left">
              <span className="small-label text-zinc-400 block mb-4">SHARED STREAMS</span>
              <h2 className="section-title text-3xl sm:text-5xl lg:text-[54px] font-sans font-semibold leading-[1.15] tracking-tight text-black mb-6">
                Share your dual-perspective creations in seconds.
              </h2>
              <p className="text-zinc-500 mb-8 text-base sm:text-lg font-normal leading-relaxed">
                Lookout makes it effortless to export and share your multi-camera records with friends, fans, and editors in perfectly synced formats.
              </p>

              {/* List */}
              <div className="flex flex-col gap-3">
                {Object.entries(friends).map(([key, friend]) => (
                  <button
                    key={key}
                    onClick={() => setActiveFriend(key)}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      activeFriend === key
                        ? 'border-black/10 bg-white shadow-premium'
                        : 'border-transparent bg-transparent hover:bg-black/2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-black border border-black/5">
                        {key === 'vlog' ? <Film className="w-4.5 h-4.5" /> : <Video className="w-4.5 h-4.5" />}
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-black block">{friend.name}</span>
                        <span className="text-[10px] text-zinc-400 font-semibold">{friend.route} • {friend.airline.split(' • ')[1]}</span>
                      </div>
                    </div>

                    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 border rounded ${friend.badgeColor}`}>
                      {friend.status}
                    </span>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Details Board */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" className="w-full">
              <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-premium">
                
                {/* Header */}
                <div className="flex justify-between items-center border-b border-black/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 border border-black/5 flex items-center justify-center font-bold text-black">
                      {activeFriend === 'vlog' ? <Film className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-black">{activeData.name}</h3>
                      <span className="text-xs text-zinc-400 font-light">{activeData.airline}</span>
                    </div>
                  </div>
                  <Share2 className="w-5 h-5 text-black" />
                </div>

                <div key={activeFriend}>
                  {/* Route Details */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center bg-zinc-50 border border-black/5 rounded-xl px-4 py-2 flex-1">
                      <span className="text-[8px] text-zinc-400 font-bold uppercase block">PRIMARY STREAM</span>
                      <span className="text-sm font-black text-black">{activeData.route.split(' → ')[0]}</span>
                    </div>
                    <div className="flex items-center justify-center px-4">
                      <Navigation className="w-4 h-4 text-zinc-400 rotate-90" />
                    </div>
                    <div className="text-center bg-zinc-50 border border-black/5 rounded-xl px-4 py-2 flex-1">
                      <span className="text-[8px] text-zinc-400 font-bold uppercase block">SECONDARY STREAM</span>
                      <span className="text-sm font-black text-black">{activeData.route.split(' → ')[1]}</span>
                    </div>
                  </div>

                  {/* Progress Slider */}
                  <div className="relative w-full h-1 bg-zinc-100 rounded-full mb-6">
                    <div
                      className="absolute h-full rounded-full bg-black"
                      style={{ width: `${activeData.progress * 100}%` }}
                    />
                  </div>

                  {/* Alert Update */}
                  <div className="bg-zinc-50 border border-black/5 rounded-xl p-4 flex gap-3 items-start mb-6">
                    <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-black mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-[8px] text-zinc-400 font-bold uppercase block">EXPORT LOG • {activeData.time}</span>
                      <p className="text-xs text-zinc-600 font-light mt-0.5 leading-relaxed">{activeData.details}</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-zinc-50 border border-black/5 rounded-xl p-2.5">
                      <span className="text-[8px] text-zinc-400 font-bold block mb-1">LAYOUT</span>
                      <span className="text-xs font-bold text-black">{activeData.stats.altitude}</span>
                    </div>
                    <div className="bg-zinc-50 border border-black/5 rounded-xl p-2.5">
                      <span className="text-[8px] text-zinc-400 font-bold block mb-1">SYNC CALIB</span>
                      <span className="text-xs font-bold text-black">{activeData.stats.speed}</span>
                    </div>
                    <div className="bg-zinc-50 border border-black/5 rounded-xl p-2.5">
                      <span className="text-[8px] text-zinc-400 font-bold block mb-1">CODEC</span>
                      <span className="text-xs font-bold text-black">{activeData.stats.estArrival}</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
