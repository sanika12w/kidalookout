'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Radio, Search, ArrowRight, CheckCircle2, Lock, Sparkles, Sliders } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ImportFlights() {
  const [activeTab, setActiveTab] = useState('record');
  const [importState, setImportState] = useState('idle'); // 'idle', 'loading', 'success'

  const runSimulation = () => {
    setImportState('loading');
    setTimeout(() => {
      setImportState('success');
    }, 1500);
  };

  const resetSimulation = () => {
    setImportState('idle');
  };

  return (
    <section id="monitoring" className="py-44 lg:py-56 bg-zinc-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="small-label text-zinc-400 block mb-4">VOICE CONTROL</span>
            <h2 className="section-title mb-6">
              Hey Lookout. Control with your voice.
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Experience the peak of hands-free camera control. Lookout listens locally to your voice command triggers to record, zoom, and take snapshots.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12 lg:mt-16">
          
          {/* Tab Selection */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  { id: 'record', label: 'Hey Lookout, Start Recording', icon: Mic, desc: 'Triggers a seamless front-and-back dual-camera recording session instantly.' },
                  { id: 'zoom', label: 'Hey Lookout, Zoom In', icon: Sliders, desc: 'Dials up the digital and optical zoom levels on the active rear lens frame.' },
                  { id: 'snapshot', label: 'Hey Lookout, Take Snapshot', icon: Sparkles, desc: 'Saves a synced, high-resolution split picture directly to your camera roll.' },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        resetSimulation();
                      }}
                      className={`flex flex-col p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'border-black/10 bg-white shadow-premium'
                          : 'border-transparent bg-transparent hover:bg-black/2'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-black' : 'text-zinc-400'}`} />
                        <span className="text-[15px] font-bold text-black">{tab.label}</span>
                      </div>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed pl-8">
                        {tab.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Sync Simulator Box */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.2} className="w-full">
              <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-premium min-h-[350px] flex flex-col justify-between">
                
                <div className="flex-grow flex flex-col justify-center">
                  {importState === 'idle' && (
                    <div className="flex flex-col h-full" key={activeTab}>
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center justify-between p-4 bg-zinc-50 border border-black/5 rounded-xl text-xs">
                          <div className="flex items-center gap-3">
                            <Mic className="w-4 h-4 text-purple-600 animate-pulse" />
                            <span className="text-zinc-600 font-bold">On-Device DSP Processor</span>
                          </div>
                          <span className="text-[9px] text-[#00D26A] font-bold uppercase tracking-wider">STANDING BY</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 p-6 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 mb-6 text-center">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest block">TEST VOICE COMANDS</span>
                        <span className="text-base font-bold text-zinc-800">
                          {activeTab === 'record' && '"Hey Lookout, Start Recording"'}
                          {activeTab === 'zoom' && '"Hey Lookout, Zoom In"'}
                          {activeTab === 'snapshot' && '"Hey Lookout, Take Snapshot"'}
                        </span>
                      </div>

                      <button
                        onClick={runSimulation}
                        className="w-full py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        Simulate Voice Command <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Loading State */}
                  {importState === 'loading' && (
                    <div className="flex flex-col items-center justify-center py-6 h-full">
                      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mb-4" />
                      <span className="text-xs text-zinc-500 font-bold">Matching vocal spectrogram offline...</span>
                    </div>
                  )}

                  {/* Success State */}
                  {importState === 'success' && (
                    <div className="flex flex-col items-center justify-center py-6 text-center h-full">
                      <div className="w-10 h-10 rounded-full bg-[#00D26A]/10 flex items-center justify-center text-[#00D26A] mb-4">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h4 className="text-[15px] font-bold text-black mb-1">
                        {activeTab === 'record' && 'Camera Recording Initiated!'}
                        {activeTab === 'zoom' && 'optical Rear Zoom Shifted to 2x!'}
                        {activeTab === 'snapshot' && 'Dual Snapshot Captured!'}
                      </h4>
                      <p className="text-xs text-zinc-500 max-w-xs mb-6 font-light leading-relaxed">
                        {activeTab === 'record' && 'Lookout successfully initiated dual camera HD streams. Blinking red dot is active.'}
                        {activeTab === 'zoom' && 'Rear stream zoomed. Dynamic focal alignment calibrated successfully.'}
                        {activeTab === 'snapshot' && 'Split image saved directly to iOS Camera Roll. Sync offset: 0.00ms.'}
                      </p>
                      <button
                        onClick={resetSimulation}
                        className="text-xs font-bold text-black hover:underline cursor-pointer"
                      >
                        Try another command
                      </button>
                    </div>
                  )}
                </div>

                {/* Privacy disclaimer */}
                <div className="border-t border-black/5 pt-4 mt-6 flex items-center justify-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>100% On-Device Neural Match. We collect zero data.</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
