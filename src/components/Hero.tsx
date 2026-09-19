"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 text-white border-b border-white/10 overflow-hidden">
      {/* Real Background Organ Image with Luxury Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-organ.jpg"
          alt="Zatil Master Pipe Organ Installation in Cathedral Sanctuary"
          fill
          priority
          className="object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Sleek Cinematic Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-4xl space-y-6">
          {/* Provenance Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-[#7CB342] animate-pulse" />
            <span className="font-bold text-[#FFA726]">Akure, Nigeria</span>
            <span className="text-white/40">•</span>
            <span>Bespoke Lutherie & 51+ Cathedral Pipe Organs</span>
          </div>

          {/* Master Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase drop-shadow-sm">
              Made in Nigeria. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA726] via-[#F26522] to-[#7CB342] italic lowercase font-serif font-light">
                built for
              </span> Africa. <br />
              Designed to Inspire.
            </h1>
          </div>

          {/* Narrative Subtext */}
          <p className="text-sm sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed drop-shadow">
            We design, craft, erect, and restore monumental <strong>church pipe-organ façades</strong>, 
            handcrafted <strong>stringed instruments</strong> with seasoned African tonewood, and institutional <strong>audio systems</strong> across Nigeria.
          </p>

          {/* Minimalist Action Controls */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-xl shadow-orange-500/25 hover:scale-105"
            >
              <span>Request a Quote / Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pipe-organs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors"
            >
              <span>Explore 51+ Organ Installations</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFA726]" />
            </a>
          </div>
        </div>
      </div>

      {/* Integrated Transparent Metrics Ledger */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight block">
              10+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mt-1">
              Years Experience
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Continuous lutherie
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#FFA726] font-mono tracking-tight block">
              51+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mt-1">
              Organ Façades
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Cathedrals & churches
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight block">
              500+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mt-1">
              String Instruments
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Violins, cellos, basses
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight block">
              400+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mt-1">
              Audio Speakers
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Sanctuary acoustics
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight block">
              11+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mt-1">
              States Reached
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Nationwide delivery
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#7CB342] font-mono tracking-tight block">
              26
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mt-1">
              Craft Workforce
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Akure facility crew
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
