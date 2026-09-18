"use client";

import React from "react";
import { ArrowRight, MapPin, Check } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const steps = [
    { num: "01", title: "CAD & Architectural Design", desc: "Proportions customized to church altar width & high ceiling acoustics." },
    { num: "02", title: "Casework Joinery", desc: "Solid hardwood framing engineered for rigid pipe support." },
    { num: "03", title: "Staining & Pipe Gilding", desc: "Finishes coordinated with church interior woodworking." },
    { num: "04", title: "Nationwide Transit", desc: "Specialist logistics from Akure facility to your site." },
    { num: "05", title: "On-Site Erection", desc: "Rigging and structural alignment by our master technicians." },
    { num: "06", title: "Console Voicing & Tuning", desc: "Integration with Viscount, Allen, Johannus & Rodgers organs." },
  ];

  return (
    <section id="pipe-organs" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
            Flagship Specialization
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
            51+ Pipe Organ Façades <br />
            <span className="text-neutral-500 font-light lowercase italic">and counting</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Zatil is Nigeria's leading authority in designing, manufacturing, and installing custom decorative and acoustic pipe-organ façades for cathedrals and churches across 11+ states.
          </p>
        </div>

        {/* Milestone Monograph Feature (Clean White Minimalist Layout) */}
        <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded-3xl mb-16 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F26522] text-xs font-bold uppercase font-mono">
                Milestone #51
              </span>
              <span className="text-xs text-neutral-400">Completed & Consecrated 2024</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
              <MapPin className="w-4 h-4 text-[#F26522]" />
              <span>Cathedral of St. Paul's Anglican Church • Ozoro, Delta State</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tight">
                Architectural Pipe Façade with 2-Manual Viscount Console
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Designed for the high vaulted sanctuary of St. Paul’s Cathedral in Ozoro. 
                Featuring handcrafted seasoned hardwood casework, tiered symmetrical pipe scaling, 
                and full digital console voicing tailored for Nigerian cathedral worship acoustics.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="text-neutral-400 block text-[10px] uppercase">Console</span>
                  <span className="font-bold text-[#0A0A0A] mt-0.5 block">2-Manual Viscount</span>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl">
                  <span className="text-neutral-400 block text-[10px] uppercase">Timber</span>
                  <span className="font-bold text-[#0A0A0A] mt-0.5 block">Seasoned Hardwood</span>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl col-span-2 sm:col-span-1">
                  <span className="text-neutral-400 block text-[10px] uppercase">Scope</span>
                  <span className="font-bold text-[#7CB342] mt-0.5 block">Design + Full Erection</span>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Commission a Church Pipe Organ Façade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 rounded-2xl space-y-3.5 text-xs text-neutral-700">
              <h4 className="font-bold uppercase tracking-wider text-[#0A0A0A] border-b border-neutral-200 pb-3">
                Architectural Specifications
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Custom Dimensions:</strong> Proportional scaling to altar width and gallery ceiling height.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Wood Staining:</strong> Natural mahogany, rich walnut, ebony, or custom cathedral lacquer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Pipe Finishes:</strong> Gilded gold, polished aluminum, satin silver, or matching church woodwork.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Compatibility:</strong> Viscount, Allen, Johannus, Rodgers, and digital organ consoles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6-Phase Pipeline Line (No Box Cards) */}
        <div>
          <h3 className="text-xl font-bold uppercase tracking-wider text-[#0A0A0A] mb-8">
            The 6-Phase Engineering Pipeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {steps.map((st, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""}`}>
                <span className="text-xs font-mono font-bold text-[#F26522] block mb-1">
                  [{st.num}]
                </span>
                <h4 className="text-xs font-bold uppercase text-[#0A0A0A] mb-1">
                  {st.title}
                </h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
