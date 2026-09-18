"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface InstrumentStudioProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function InstrumentStudio({ onOpenQuoteModal }: InstrumentStudioProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const instruments = [
    {
      id: "violin",
      name: "Handcrafted Zatil Violin",
      scale: "Full Size (4/4) & Student Graduations (3/4, 1/2)",
      lead: "Artisan-carved acoustic violin engineered with seasoned African spruce and tonewood for vibrant projection and tropical climatic stability.",
      specs: [
        { label: "Soundboard", val: "Seasoned African Acoustic Tonewood" },
        { label: "Fingerboard & Pegs", val: "Madagascar Ebony" },
        { label: "Varnish", val: "Hand-Rubbed Amber Oil Varnish" },
        { label: "Package", val: "Hardwood case, octagonal bow, rosin cake" },
        { label: "Warranty", val: "Full structural guarantee + 6 months free restoration" },
      ],
      idealFor: "Cathedral Orchestras, Music Students, Concert Soloists",
    },
    {
      id: "viola",
      name: "Bespoke Zatil Viola",
      scale: "15” to 16.5” Body Patterns",
      lead: "Deep, sonorous tenor voice crafted with an enlarged chamber depth for rich lower-register resonance in worship spaces and classical ensembles.",
      specs: [
        { label: "Body Chamber", val: "Enlarged rib depth for warm acoustic lows" },
        { label: "Tailpiece", val: "Precision 4-Fine-Tuner Assembly" },
        { label: "Bridge", val: "Hand-carved acoustic hardwood bridge" },
        { label: "Package", val: "Durable travel flight case & balanced bow" },
        { label: "Warranty", val: "Full structural guarantee + 6 months free restoration" },
      ],
      idealFor: "Orchestras, Chamber Quartets, Music Faculties",
    },
    {
      id: "cello",
      name: "Master Zatil Cello",
      scale: "4/4 Concert & Study Grades",
      lead: "Commanding bass presence designed with reinforced internal bass-bar bracing to project effortlessly across large cathedral halls without acoustic distortion.",
      specs: [
        { label: "Scroll & Neck", val: "Hand-carved acoustic scroll with reinforced joinery" },
        { label: "Endpin", val: "Heavy-duty brass lock endpin" },
        { label: "Soundpost", val: "Individually calibrated and voiced in Akure" },
        { label: "Package", val: "Padded high-denier gig case & concert bow" },
        { label: "Warranty", val: "Full structural guarantee + 6 months free restoration" },
      ],
      idealFor: "Cathedrals, String Ensembles, Conservatories",
    },
    {
      id: "double-bass",
      name: "Concert Zatil Double Bass",
      scale: "3/4 Orchestral & Jazz Standard",
      lead: "Massive acoustic foundation delivering thunderous projection and warmth. Built with reinforced joints specifically tempered for tropical climates.",
      specs: [
        { label: "Soundboard", val: "Solid acoustic tonewood with heavy bracing" },
        { label: "Tuning Gears", val: "Heavy-duty brass machine tuners" },
        { label: "Bridge", val: "Adjustable height acoustic bridge" },
        { label: "Package", val: "Reinforced transport bag with accessory pockets" },
        { label: "Warranty", val: "Full structural guarantee + 6 months free restoration" },
      ],
      idealFor: "Churches, Symphony Orchestras, Jazz Bands",
    },
  ];

  const current = instruments[activeTab];

  return (
    <section id="instruments" className="py-20 sm:py-28 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
              Luthier Specimen Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
              Bespoke String Instruments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
            Hand-carved in our Akure workshop from seasoned African acoustic tonewoods. Select an instrument to view technical build specifications.
          </p>
        </div>

        {/* Minimalist Tab Bar (No Card Clutter) */}
        <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-4 mb-10">
          {instruments.map((inst, idx) => (
            <button
              key={inst.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === idx
                  ? "bg-black text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {inst.name.replace("Zatil ", "")}
            </button>
          ))}
        </div>

        {/* Interactive Studio Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Spec Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#F26522] uppercase tracking-wider">
                Specification Scale: {current.scale}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight mt-1">
                {current.name}
              </h3>
              <p className="text-xs font-semibold text-neutral-500 mt-1">
                Target Application: {current.idealFor}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {current.lead}
            </p>

            {/* Clean Spec Table */}
            <div className="border-t border-neutral-200 divide-y divide-neutral-100 text-xs sm:text-sm">
              {current.specs.map((sp, sIdx) => (
                <div key={sIdx} className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-semibold text-neutral-500">{sp.label}</span>
                  <span className="font-medium text-[#0A0A0A]">{sp.val}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal(current.name)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request Commission Pricing for {current.name.split(" ")[2] || "Instrument"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: ZUSP Quality Guarantee Panel (Minimalist White Box) */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 p-8 rounded-3xl space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7CB342]">
                Quality Assurance
              </span>
              <h4 className="text-xl font-bold text-[#0A0A0A] mt-1">
                Zatil Strings' Unique Selling Points (ZUSP)
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                Every stringed instrument produced includes our 5-pillar manufacturing guarantee:
              </p>
            </div>

            <ul className="space-y-3.5 text-xs text-neutral-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span><strong>African Seasoned Tonewood:</strong> High resonance and natural resistance to tropical heat and humidity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span><strong>Manufacturer Warranty:</strong> Comprehensive warranty on all woodwork joinery.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span><strong>Protective Flight Case:</strong> Custom lightweight protective casing included.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span><strong>6-Month Free Restoration:</strong> Complimentary setup inspection & tonal re-adjustment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span><strong>Owner's Care Guide:</strong> Complete maintenance documentation for Nigerian climates.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
