"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Provenance Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#F26522]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
            Akure, Nigeria • Musical Lutherie & Acoustic Infrastructure
          </span>
        </div>

        {/* Master Minimalist Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] leading-[1.05] uppercase">
            Made in Nigeria. <br />
            <span className="text-neutral-400 font-light italic lowercase">built for</span> Africa. <br />
            Designed to Inspire.
          </h1>

          <p className="mt-8 text-base sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed">
            Zatil Group designs, crafts, installs, and restores bespoke <strong>stringed musical instruments</strong>, 
            monumental <strong>church pipe-organ façades</strong>, and institutional <strong>audio speakers</strong> across Nigeria.
          </p>

          {/* Minimalist Action Controls */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.16em] transition-all"
            >
              <span>Request a Quote / Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pipe-organs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-300 hover:border-black text-xs font-bold uppercase tracking-[0.14em] text-neutral-800 transition-colors"
            >
              <span>View 51+ Organ Installations</span>
              <ArrowUpRight className="w-4 h-4 text-[#F26522]" />
            </a>
          </div>
        </div>

        {/* Horizontal Credibility Ledger (No Cards, Pure Minimalist Line) */}
        <div className="mt-20 pt-10 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-mono tracking-tight block">
              10+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mt-1">
              Years Experience
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Continuous lutherie
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F26522] font-mono tracking-tight block">
              51+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mt-1">
              Organ Façades
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Cathedrals & churches
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-mono tracking-tight block">
              500+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mt-1">
              String Instruments
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Violins, cellos, basses
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-mono tracking-tight block">
              400+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mt-1">
              Audio Speakers
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Institutional acoustics
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-mono tracking-tight block">
              11+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mt-1">
              States Reached
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Nationwide delivery
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#7CB342] font-mono tracking-tight block">
              26
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mt-1">
              Craft Workforce
            </span>
            <span className="text-[11px] text-neutral-400 block mt-0.5">
              Akure facility team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
