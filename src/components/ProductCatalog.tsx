"use client";

import React, { useState } from "react";
import { Music, ShieldCheck, Feather, RefreshCcw, BookOpen, Check, ArrowRight, Sparkles } from "lucide-react";

interface ProductCatalogProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function ProductCatalog({ onOpenQuoteModal }: ProductCatalogProps) {
  const [activeTab, setActiveTab] = useState<"strings" | "organs" | "speakers">("strings");

  const zuspFeatures = [
    {
      icon: Sparkles,
      title: "Seasoned African Tonewood",
      desc: "Carefully seasoned indigenous and select acoustic woods chosen to endure tropical humidity while producing rich resonant projection.",
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Manufacturer Warranty",
      desc: "Full warranty backing on woodwork structural integrity, bracing, and craftsmanship.",
    },
    {
      icon: Feather,
      title: "Lightweight Protective Casing",
      desc: "Every stringed instrument is paired with custom durable lightweight flight cases for easy transport.",
    },
    {
      icon: RefreshCcw,
      title: "6-Month Free Restoration",
      desc: "Complimentary setup tuning, string adjustments, and inspection within the first 6 months of ownership.",
    },
    {
      icon: BookOpen,
      title: "Owner’s Manual & Setup Guide",
      desc: "Detailed documentation detailing proper temperature, cleaning, and maintenance care in Nigeria.",
    },
  ];

  const stringInstruments = [
    {
      name: "Handcrafted Zatil Violin",
      category: "Full Size (4/4) & Student Sizes (3/4, 1/2)",
      desc: "Indigenously crafted acoustic violin with precision-carved spruce/African tonewood top, ebony pegs, hand-varnished amber finish, and balanced bow.",
      specs: ["Acoustic Spruce Top", "Seasoned African Maple/Tone Wood Back", "Ebony Fingerboard & Chinrest", "Includes Case & Rosin"],
      target: "Orchestras, Churches, Music Students & Soloists",
    },
    {
      name: "Bespoke Zatil Viola",
      category: "15” to 16.5” Body Lengths",
      desc: "Deep, warm tenor resonance crafted with enhanced chamber acoustics for chamber ensembles and institutional worship bands.",
      specs: ["Deeper Rib Depth for Warm Lows", "Fine Tuner Tailpiece", "Precision Carved Bridge", "Padded Case Included"],
      target: "Classical Violists, Symphony Players, Schools",
    },
    {
      name: "Master Zatil Cello",
      category: "4/4 Concert & Study Grades",
      desc: "Rich, sonorous cello designed with robust internal bracing for thunderous projection across large cathedral sanctuaries without distortion.",
      specs: ["Hand-Carved Acoustic Scroll", "Seasoned Hardwood Bridge", "Endpin Stability Lock", "Deluxe Padded Gig Bag"],
      target: "Cathedral Orchestras, String Quartets, Conservatories",
    },
    {
      name: "Concert Zatil Double Bass",
      category: "3/4 Orchestral & Jazz Standard",
      desc: "Massive acoustic presence delivering thunderous foundational low frequencies. Built with reinforced neck joins for maximum durability.",
      specs: ["Solid Spruce/Acoustic Hardwood", "Adjustable Height Bridge", "Heavy-Duty Brass Tuning Gears", "Reinforced Endpin"],
      target: "Churches, Symphony Orchestras, Jazz Ensembles",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522]">
            Locally Manufactured Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-2">
            The Zatil Product Catalog
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every instrument leaving our Akure workshop embodies our commitment to acoustic perfection, durability in African climates, and continuous lifetime support.
          </p>
        </div>

        {/* ZUSP (Zatil Strings Unique Selling Point) Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0D0F12] via-[#151921] to-[#1C222D] text-white p-8 sm:p-12 mb-16 shadow-xl border border-orange-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest text-orange-400 uppercase">
                Quality Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                Zatil Strings' Unique Selling Points (ZUSP)
              </h3>
            </div>
            <span className="self-start md:self-auto px-4 py-1.5 rounded-full bg-[#7CB342]/20 border border-[#7CB342]/40 text-[#7CB342] text-xs font-bold">
              Standard On All String Builds
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zuspFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 flex-shrink-0 h-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stringInstruments.map((inst, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 bg-[#FAF8F5] border border-slate-200 hover:border-orange-400/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-sm text-[#F26522]">
                    <Music className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#7CB342] bg-lime-100 px-3 py-1 rounded-full">
                    {inst.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-slate-900">
                  {inst.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 mb-4">
                  Best For: {inst.target}
                </p>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {inst.desc}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Acoustic Build Specs:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {inst.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#7CB342] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-slate-500">
                  Custom Sizing & Tuning Available
                </span>
                <button
                  onClick={() => onOpenQuoteModal(inst.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#F26522] hover:bg-orange-600 transition-colors shadow-sm"
                >
                  <span>Request Pricing</span>
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
