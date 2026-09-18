"use client";

import React from "react";
import { CheckCircle2, MapPin, Sparkles, Layers, ArrowUpRight, Shield } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const steps = [
    { title: "Architectural Design", desc: "CAD modeling & acoustic mapping customized to the worship sanctuary." },
    { title: "Precision Fabrication", desc: "Crafting structural cabinetry & polished metallic organ pipe ranks." },
    { title: "Finishing & Coating", desc: "Stained to match church woodwork with gold/silver accents." },
    { title: "Safe Transportation", desc: "Specialist logistics from Akure workshop directly to the site." },
    { title: "On-Site Installation", desc: "Rigid mounting and console alignment by master luthier crew." },
    { title: "Integration & Voicing", desc: "Audio console calibration (Viscount, Allen, Johannus) & voicing." },
  ];

  return (
    <section id="pipe-organs" className="py-24 bg-zatil-dark text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-balance">
            We Don’t Just Build Façades. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] via-[#FFA726] to-[#7CB342]">
              We Build Monumental Musical Spaces.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Zatil has developed unrivaled authority in designing, manufacturing, and installing custom decorative 
            pipe-organ façades for cathedrals and worship centers across Nigeria.
          </p>
        </div>

        {/* Milestone Spotlight Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1C222D] via-[#151921] to-[#0D0F12] border border-orange-500/30 p-8 sm:p-12 relative shadow-2xl overflow-hidden mb-16">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/15 rounded-full blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F26522] text-white text-xs font-black tracking-wider uppercase">
                ⭐ Milestone Showcase #51
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-bold font-display text-white">
                  Cathedral of St. Paul's Anglican Church
                </h3>
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>Ozoro, Delta State, Nigeria</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Complete custom pipe-organ façade engineering integrating a premium <strong>2-Manual Viscount Organ Console</strong>. 
                Designed with proportional architectural pipe arrangements and hand-finished hardwood cabinetry harmonized with the cathedral sanctuary.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Console Type</span>
                  <span className="text-sm font-bold text-white">2-Manual Viscount</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Scope</span>
                  <span className="text-sm font-bold text-white">Façade + Installation</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Status</span>
                  <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#F26522] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  <span>Commission a Church Organ Façade</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Specs Card */}
            <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4" />
                <span>Customization Options</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Architectural Sizing:</strong> Proportional to altar and gallery width/height.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Wood Finishes:</strong> Rich mahogany, warm oak, walnut, ebony, or custom lacquer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Pipe Layouts:</strong> Tiered ranks, symmetrical wings, curved architectural towers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Console Compatibility:</strong> Viscount, Allen, Johannus, Rodgers, and custom MIDI setups.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6-Step Installation Lifecycle */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-display text-white">
              End-to-End Architectural Organ Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              From the initial 3D measurement in your auditorium to final sound testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-widest group-hover:text-slate-300">
                    Step {idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
