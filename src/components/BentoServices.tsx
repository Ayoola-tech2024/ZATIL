"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BentoServicesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export default function BentoServices({ onOpenQuoteModal }: BentoServicesProps) {
  const capabilities = [
    {
      num: "I",
      title: "Bespoke Stringed Instruments",
      scope: "Violins • Violas • Cellos • Double Basses",
      summary: "Indigenously manufactured in Akure with selected and seasoned African acoustic tonewoods. Engineered for tropical climatic stability with high resonance, paired with custom cases and a 6-month free restoration warranty.",
    },
    {
      num: "II",
      title: "Pipe-Organ Façade Engineering",
      scope: "Cathedrals • Churches • Worship Auditoriums",
      summary: "Complete custom architectural design, woodwork joinery, decorative pipe scaling, and console voicing. 51+ completed installations across 11+ Nigerian states.",
    },
    {
      num: "III",
      title: "Institutional Audio Speaker Systems",
      scope: "Worship Sanctuaries & Large Auditoriums",
      summary: "Locally manufactured high-SPL speaker enclosures engineered for vocal clarity, wide dispersion, and structural acoustic endurance in large assembly halls.",
    },
    {
      num: "IV",
      title: "Luthier Repairs & Maintenance Clinic",
      scope: "Bowed Strings & Acoustic Calibration",
      summary: "Exacting repairs adhering to classical lutherie standards: bow re-hairing with premium horsehair, soundpost resetting, fingerboard dressing, and crack stabilization.",
    },
    {
      num: "V",
      title: "Circular Restoration & Refurbishment",
      scope: "Life-Extension & Material Recovery",
      summary: "Restoring discarded or aged musical instruments to concert-grade playability, recovering usable tonewood and vintage hardware to eliminate waste.",
    },
    {
      num: "VI",
      title: "Technical & Luthier Apprenticeships",
      scope: "Youth Empowerment & Skills Development",
      summary: "Structured hands-on training in instrument making, acoustic physics, woodwork mechanics, and sound engineering for the next generation of African makers.",
    },
    {
      num: "VII",
      title: "Custom Digital CAD Fabrication",
      scope: "Architectural Music Infrastructure",
      summary: "Converting architectural blueprints into precision joinery, custom choir risers, acoustic baffles, and tailored console cabinetry.",
    },
  ];

  return (
    <section id="services" className="bg-[#FAF6F0] text-[#1E1915] py-24 border-b border-[#1E1915]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E1915]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C85A17]">
              Atelier Practice
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1E1915] mt-1">
              Manufacturing & Technical Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6A5D52] max-w-md">
            Every service is backed by our full in-house engineering team, dedicated Akure facility, and nationwide field support.
          </p>
        </div>

        {/* Editorial Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1915]/15 border border-[#1E1915]/15">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`p-8 bg-[#FAF6F0] hover:bg-[#F3ECE2] transition-colors flex flex-col justify-between group ${
                idx === 0 || idx === 1 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#1E1915]/10">
                  <span className="text-xs font-mono font-bold text-[#C85A17]">
                    [ SECTION {cap.num} ]
                  </span>
                  <span className="text-[10px] font-mono text-[#8A796C] uppercase">
                    Akure Workshop
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#1E1915] group-hover:text-[#C85A17] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs font-semibold text-[#8A796C] uppercase tracking-wider mt-1 mb-4">
                  {cap.scope}
                </p>
                <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed">
                  {cap.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1E1915]/10">
                <button
                  onClick={() => onOpenQuoteModal(cap.title)}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[#1E1915] group-hover:text-[#C85A17]"
                >
                  <span>Inquire Specification</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
