"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Hammer, Music, Award } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-acoustic-mesh text-white pt-28 pb-20 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-500/15 via-lime-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-inner text-xs md:text-sm font-medium text-slate-200">
            <span className="flex h-2 w-2 rounded-full bg-[#7CB342] animate-pulse" />
            <span className="font-semibold text-[#F26522]">Akure, Nigeria</span>
            <span className="text-slate-500">•</span>
            <span>Over 10+ Years of Acoustic Craftsmanship</span>
          </div>

          {/* Master Headline */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-orange-400">
              African Craftsmanship • Musical Innovation • Built to Inspire
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08] text-balance">
              MADE IN NIGERIA. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] via-[#FFA726] to-[#7CB342]">
                BUILT FOR AFRICA.
              </span> <br />
              DESIGNED TO INSPIRE.
            </h1>
          </div>

          {/* Subtitle & Value Proposition */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We design, craft, install, and restore bespoke <strong>stringed instruments</strong>, 
            monumental <strong>church pipe-organ façades</strong>, and institutional <strong>audio systems</strong> with seasoned African tonewood.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#F26522] to-[#E65100] hover:from-[#E65100] hover:to-[#D84315] shadow-xl shadow-orange-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Request a Quote / Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pipe-organs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-orange-400/40 backdrop-blur-md transition-all duration-300"
            >
              <Music className="w-4 h-4 text-orange-400" />
              <span>Explore 51+ Organ Installations</span>
            </a>
          </div>

          {/* Quick Pillars Micro-Bar */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-orange-400 mb-1">
                <Hammer className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Craftsmanship</span>
              </div>
              <p className="text-xs text-slate-400">Locally built in Akure workshop</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-lime-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">ZUSP Warranty</span>
              </div>
              <p className="text-xs text-slate-400">6-Month free restoration included</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">51+ Façades</span>
              </div>
              <p className="text-xs text-slate-400">Installed in Cathedrals nationwide</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#7CB342] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Circular Model</span>
              </div>
              <p className="text-xs text-slate-400">Waste-to-resource recovery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
