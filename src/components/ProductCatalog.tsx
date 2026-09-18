"use client";

import React from "react";
import { ArrowRight, Check, ShieldCheck, Sparkles, BookOpen, Feather, RefreshCw } from "lucide-react";

interface ProductCatalogProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function ProductCatalog({ onOpenQuoteModal }: ProductCatalogProps) {
  const instruments = [
    {
      name: "Handcrafted Zatil Violin",
      scale: "Full 4/4 & Student Graduations (3/4, 1/2)",
      description: "Artisan-carved acoustic violin featuring seasoned African spruce/tonewood soundboards, ebony pegs, hand-rubbed amber oil varnish, and balanced octagonal bow.",
      wood: "Select African Tonewood & Seasoned Maple",
      fingerboard: "Madagascar Ebony",
      inclusions: "Hardwood case, rosin cake, owner's manual",
      target: "Cathedral Orchestras, Concert Soloists, Conservatories",
    },
    {
      name: "Bespoke Zatil Viola",
      scale: "15” to 16.5” Body Patterns",
      description: "Deep, sonorous tenor voice with enlarged acoustic rib depth for maximum resonance in sacred music and classical chamber settings.",
      wood: "Seasoned African Hardwood & Flamed Back",
      fingerboard: "Solid Ebony with Fine-Tuner Tailpiece",
      inclusions: "Durable travel case, Brazilian wood bow",
      target: "Orchestras, Chamber Quartets, Music Faculties",
    },
    {
      name: "Master Zatil Cello",
      scale: "4/4 Concert & Study Grades",
      description: "Commanding bass presence built with reinforced internal bass-bar bracing to project effortlessly across large cathedral halls without acoustic compression.",
      wood: "Acoustic Spruce Top & Aged Hardwood Ribs",
      fingerboard: "Ebony Fingerboard & Precision Endpin Lock",
      inclusions: "Padded high-denier gig case, professional bow",
      target: "Cathedrals, String Ensembles, Solo Performers",
    },
    {
      name: "Concert Zatil Double Bass",
      scale: "3/4 Orchestral Standard",
      description: "Massive acoustic foundation delivering thunderous projection and warmth. Built with reinforced neck joins specifically tempered for tropical climates.",
      wood: "Solid Acoustic Tonewood with Heavy Bracing",
      fingerboard: "Seasoned Hardwood with Brass Tuning Machines",
      inclusions: "Heavy-duty endpin & transport bag",
      target: "Churches, Symphony Orchestras, Jazz Bands",
    },
  ];

  return (
    <section id="products" className="bg-[#FAF6F0] text-[#1E1915] py-24 border-b border-[#1E1915]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C85A17]">
            Luthier Catalog
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1E1915] mt-1">
            Bespoke Bowed String Instruments
          </h2>
          <p className="mt-3 text-base text-[#5A4E45] leading-relaxed">
            Every Zatil stringed instrument is hand-carved, voiced, and varnished in our Akure workshop from seasoned African acoustic tonewoods.
          </p>
        </div>

        {/* ZUSP Artisanal Manifesto Strip */}
        <div className="bg-[#F3ECE2] border border-[#1E1915]/15 p-8 sm:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#1E1915]/10 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C85A17] font-bold">
                Quality Assurance Standard
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1E1915] mt-0.5">
                Zatil Strings' Unique Selling Points (ZUSP)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8A796C]">
              STANDARD ACROSS ALL BUILDS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-xs text-[#4A3E36]">
            <div>
              <span className="font-bold uppercase tracking-wider text-[#1E1915] block mb-1">01. Tonewood</span>
              <p className="text-[#6A5D52] leading-relaxed">Seasoned African acoustic wood conditioned for tropical stability.</p>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-[#1E1915] block mb-1">02. Warranty</span>
              <p className="text-[#6A5D52] leading-relaxed">Full manufacturer guarantee covering joinery & acoustic integrity.</p>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-[#1E1915] block mb-1">03. Protection</span>
              <p className="text-[#6A5D52] leading-relaxed">Custom lightweight protective casing included with every piece.</p>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-[#1E1915] block mb-1">04. Restoration</span>
              <p className="text-[#6A5D52] leading-relaxed">Free setup inspection & tonal restoration within first 6 months.</p>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-[#1E1915] block mb-1">05. Documentation</span>
              <p className="text-[#6A5D52] leading-relaxed">Complete owner's guide & climatic care manual included.</p>
            </div>
          </div>
        </div>

        {/* Instruments Specimen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instruments.map((inst, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1E1915]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#C85A17] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1E1915]/10 mb-6">
                  <span className="text-xs font-mono font-bold text-[#C85A17]">
                    OPUS 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-[#8A796C]">
                    {inst.scale}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-[#1E1915]">
                  {inst.name}
                </h3>
                <p className="text-xs text-[#8A796C] font-semibold uppercase tracking-wider mt-1 mb-4">
                  For: {inst.target}
                </p>

                <p className="text-sm text-[#5A4E45] leading-relaxed mb-6">
                  {inst.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="bg-[#FAF6F0] p-4 border border-[#1E1915]/10 space-y-2 text-xs text-[#4A3E36] mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#8A796C]">Tonewood Spec:</span>
                    <span className="font-medium text-[#1E1915]">{inst.wood}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A796C]">Fingerboard:</span>
                    <span className="font-medium text-[#1E1915]">{inst.fingerboard}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A796C]">Package Inclusions:</span>
                    <span className="font-medium text-[#1E1915]">{inst.inclusions}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E1915]/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8A796C]">
                  Bespoke Sizing & Setup Available
                </span>
                <button
                  onClick={() => onOpenQuoteModal(inst.name)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1E1915] hover:text-[#C85A17] transition-colors"
                >
                  <span>Request Commission Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
