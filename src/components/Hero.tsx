"use client";

import React from "react";
import { ArrowRight, Music, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#0B0D10] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Minimalist Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#7CB342]" />
              <span className="font-semibold text-white">Akure, Nigeria</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#F26522] font-semibold">10+ Years Craftsmanship</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#F26522]">
                African Craftsmanship • Musical Innovation
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Made in Nigeria. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] to-[#FFA726]">
                  Built for Africa.
                </span> <br />
                Designed to Inspire.
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Zatil Group designs, crafts, installs, and restores handcrafted <strong>stringed instruments</strong>, 
              monumental <strong>church pipe-organ façades</strong>, and institutional <strong>audio speakers</strong> across Nigeria.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F26522] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#pipe-organs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Music className="w-4 h-4 text-[#F26522]" />
                <span>Explore 51+ Organ Installations</span>
              </a>
            </div>

            {/* Value Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <span>Seasoned African Tonewood</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <span>6-Month Free Restoration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <span>51+ Church Installations</span>
              </div>
            </div>
          </div>

          {/* Right Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13161C] border border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F26522] bg-orange-500/10 px-2.5 py-1 rounded">
                    Latest Milestone
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                    Cathedral of St. Paul's
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                    <span>Ozoro, Delta State, Nigeria</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white font-mono">#51</span>
                  <span className="text-[10px] text-slate-400 block">Façade Build</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Custom decorative pipe-organ façade engineered to integrate a <strong>2-manual Viscount organ console</strong> with acoustic hardwood casework.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Console</span>
                  <span className="font-bold text-white mt-0.5 block">2-Manual Viscount</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Casework</span>
                  <span className="font-bold text-white mt-0.5 block">Custom Hardwood</span>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors text-center"
              >
                Inquire About Church Organ Façades →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
