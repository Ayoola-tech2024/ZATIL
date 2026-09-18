"use client";

import React from "react";
import { ArrowRight, Check, MapPin, Compass, Building, Layers } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const lifecycle = [
    { step: "01", title: "Architectural & Acoustic CAD Design", desc: "Acoustic modeling and custom proportion drawings tailored to sanctuary sightlines and altar geometry." },
    { step: "02", title: "Joinery & Structural Cabinetry", desc: "Handcrafted timber chassis engineered to support metallic pipe ranks with rigid seismic anchoring." },
    { step: "03", title: "Staining & Classical Finishes", desc: "Custom wood staining to match church pews and altar millwork, with gilded gold or silver pipe embellishments." },
    { step: "04", title: "Logistics & Site Transit", desc: "Protected transport of custom components from the Akure workshop directly to cathedrals nationwide." },
    { step: "05", title: "On-Site Erection & Rigging", desc: "Precision assembly and architectural integration executed by Zatil’s specialized field luthier team." },
    { step: "06", title: "Console Interfacing & Voicing", desc: "Electrical and acoustic coupling for Viscount, Allen, Johannus, and Rodgers organ consoles." },
  ];

  return (
    <section id="pipe-organs" className="bg-[#181411] text-[#FAF6F0] py-24 border-b border-[#FAF6F0]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-8 border-b border-white/10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C85A17] block mb-2">
              Bespoke Architectural Lutherie
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              We Don’t Just Build Façades. <br />
              <span className="italic font-normal font-serif text-[#E0A96D]">We Transform Sacred Musical Spaces.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Zatil Group has engineered over 50 decorative and acoustic pipe-organ façades for cathedrals and worship centers across 11+ Nigerian states.
            </p>
          </div>
        </div>

        {/* The 51st Milestone Case Study Monograph */}
        <div className="bg-[#241D18] border border-white/10 p-8 sm:p-12 mb-20 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0A96D] bg-white/5 border border-white/10 px-3 py-1">
                Monumental Milestone #51
              </span>
              <span className="text-xs text-slate-400">Commissioned 2024</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C85A17]" />
              <span>Cathedral of St. Paul's Anglican Church, Ozoro, Delta State</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-4xl font-bold font-display text-white">
                Cathedral Pipe-Organ Façade & Viscount Console Integration
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Commissioned for the historic Cathedral of St. Paul's in Ozoro, this installation required 
                custom architectural pipe scaling to match the sanctuary's high vaulted acoustics. 
                Integrating a <strong>2-manual Viscount organ console</strong>, the structural casework was hand-finished 
                with select hardwood and finished to harmonize with existing cathedral architecture.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Console Model</span>
                  <span className="text-xs font-bold text-white mt-1 block">2-Manual Viscount</span>
                </div>
                <div className="p-4 bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Pipe Arrangement</span>
                  <span className="text-xs font-bold text-white mt-1 block">Architectural Symmetrical</span>
                </div>
                <div className="p-4 bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Timber Material</span>
                  <span className="text-xs font-bold text-white mt-1 block">Seasoned Hardwood</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C85A17] text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#B34D12] transition-colors"
                >
                  <span>Commission a Cathedral Façade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/40 border border-white/10 p-6 sm:p-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E0A96D] border-b border-white/10 pb-3">
                Architectural Customization Parameters
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Dimensions:</strong> Proportional scaling to altar width and gallery ceiling height.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Wood Stains:</strong> Natural mahogany, rich walnut, ebony, or bleached teak.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Finishes:</strong> Gilded gold, polished aluminum, satin silver, or matching church woodwork.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Compatibility:</strong> Viscount, Allen, Johannus, Rodgers, and digital organ consoles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6-Stage Monograph Workflow */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A796C] block">
              Methodology
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              The 6-Stage Cathedral Delivery Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#241D18] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#C85A17] font-bold block mb-3">
                    [ PHASE {item.step} ]
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
