"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck, Hammer, Trees } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative bg-[#FAF6F0] text-[#1E1915] pt-32 pb-20 border-b border-[#1E1915]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Provenance Tag */}
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C85A17]">
              <span className="w-8 h-px bg-[#C85A17]" />
              <span>Bespoke Lutherie & Pipe-Organ Engineering • Akure, Nigeria</span>
            </div>

            {/* Master Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold font-display leading-[1.06] tracking-tight text-[#1E1915]">
                Made in Nigeria. <br />
                <span className="italic font-normal font-serif text-[#C85A17]">Built for Africa.</span> <br />
                Designed to Inspire.
              </h1>
            </div>

            {/* Narrative Editorial Copy */}
            <p className="text-base sm:text-lg text-[#5A4E45] leading-relaxed max-w-xl font-normal">
              Zatil Group operates at the intersection of classical craftsmanship and acoustic engineering. 
              From handcrafted stringed instruments shaped with seasoned African tonewood to monumental 
              church pipe-organ façades, we build enduring sound infrastructure across Nigeria.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1E1915] text-[#FAF6F0] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#C85A17] transition-colors duration-200"
              >
                <span>Commission an Organ / Instrument</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#pipe-organs"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#1E1915]/30 text-xs font-bold uppercase tracking-[0.14em] text-[#1E1915] hover:border-[#1E1915] transition-colors"
              >
                <span>51+ Church Installations</span>
                <ArrowUpRight className="w-4 h-4 text-[#C85A17]" />
              </a>
            </div>

            {/* Craft Pillars Strip */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#1E1915]/10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A796C] block">01. Material</span>
                <p className="text-xs font-semibold text-[#1E1915] mt-0.5">Seasoned African Tonewood</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A796C] block">02. Discipline</span>
                <p className="text-xs font-semibold text-[#1E1915] mt-0.5">Architectural Organ Lutherie</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A796C] block">03. Warranty</span>
                <p className="text-xs font-semibold text-[#1E1915] mt-0.5">6-Month Free Restoration</p>
              </div>
            </div>
          </div>

          {/* Architectural Monograph Spotlight (Right Column) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F3ECE2] border border-[#1E1915]/15 p-8 sm:p-10 relative">
              {/* Corner Stamp */}
              <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-[#8A796C] uppercase">
                ARCHIVE NO. 051
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#C85A17] bg-[#C85A17]/10 px-2.5 py-1">
                    Featured Opus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#1E1915] mt-3">
                    Cathedral of St. Paul's
                  </h3>
                  <p className="text-xs font-semibold text-[#6A5D52] uppercase tracking-wider mt-0.5">
                    Anglican Church • Ozoro, Delta State
                  </p>
                </div>

                <div className="space-y-3 py-4 border-y border-[#1E1915]/10 text-xs text-[#4A3E36]">
                  <div className="flex justify-between py-1 border-b border-[#1E1915]/5">
                    <span className="text-[#8A796C]">Project Scope:</span>
                    <span className="font-semibold text-[#1E1915]">Custom Decorative Pipe-Organ Façade</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1E1915]/5">
                    <span className="text-[#8A796C]">Console Integration:</span>
                    <span className="font-semibold text-[#1E1915]">2-Manual Viscount Console</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1E1915]/5">
                    <span className="text-[#8A796C]">Cabinetry Finish:</span>
                    <span className="font-semibold text-[#1E1915]">Architectural Stained Hardwood</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#8A796C]">Execution Status:</span>
                    <span className="font-bold text-[#2D5A27]">Commissioned & Consecrated</span>
                  </div>
                </div>

                <div className="bg-[#FAF6F0] p-4 border border-[#1E1915]/10 text-xs text-[#5A4E45] italic leading-relaxed">
                  “Zatil has developed unrivaled domain authority in designing, manufacturing, and erecting organ façades that harmonize with Nigerian church architecture.”
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#1E1915] border border-[#1E1915] hover:bg-[#1E1915] hover:text-[#FAF6F0] transition-colors"
                >
                  Consult on Cathedral Pipe Organs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
