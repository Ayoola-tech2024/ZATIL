"use client";

import React from "react";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const steps = [
    { num: "01", title: "CAD & Acoustic Design", desc: "Custom proportions modeled to sanctuary acoustics & altar width." },
    { num: "02", title: "Hardwood Casework", desc: "Precision joinery built with seasoned timber to house pipe arrays." },
    { num: "03", title: "Finishing & Gilded Pipes", desc: "Stained to match church woodwork with metallic or gold accents." },
    { num: "04", title: "Site Transportation", desc: "Specialist logistics from Akure facility directly to the cathedral." },
    { num: "05", title: "Erection & Structural Rigging", desc: "Assembled and anchored on-site by master luthier technicians." },
    { num: "06", title: "Console Voicing & Testing", desc: "Acoustic calibration for Viscount, Allen, Johannus & Rodgers." },
  ];

  return (
    <section id="pipe-organs" className="bg-[#0B0D10] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
            Flagship Specialization
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            We Don’t Just Build Façades. <br />
            <span className="text-[#FFA726]">We Build Sacred Musical Spaces.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            With 51+ completed church installations across Nigeria, Zatil is the trusted pioneer in pipe-organ façade engineering and console integration.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#13161C] border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F26522]">
                <span className="px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20">
                  MILESTONE #51
                </span>
                <span className="text-slate-400">• Completed 2024</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-3xl font-bold text-white">
                  Cathedral of St. Paul's Anglican Church
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>Ozoro, Delta State, Nigeria</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Full-scale decorative pipe-organ façade integrating a <strong>2-manual Viscount organ console</strong>. 
                Custom-scaled to high vaulted ceiling acoustics and finished in seasoned architectural hardwood.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Console</span>
                  <span className="font-bold text-white mt-0.5 block">2-Manual Viscount</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase">Casework</span>
                  <span className="font-bold text-white mt-0.5 block">Hardwood Stained</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] uppercase">Status</span>
                  <span className="font-bold text-[#7CB342] mt-0.5 block">Completed</span>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#F26522] hover:bg-orange-600 transition-colors"
                >
                  <span>Commission a Church Organ Façade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-xl p-6 space-y-3 text-xs text-slate-300">
              <h4 className="font-bold uppercase tracking-wider text-[#FFA726] border-b border-white/10 pb-2">
                Customization Capabilities
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Custom Dimensions:</strong> Scaled to church altar and ceiling height.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Wood Finishes:</strong> Rich mahogany, warm oak, walnut, or custom lacquer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Pipe Layouts:</strong> Symmetrical wings, tiered towers, classical arches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span><strong>Console Compatibility:</strong> Viscount, Allen, Johannus, Rodgers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6-Step Workflow */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
            End-to-End Organ Engineering Lifecycle
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#13161C] border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#F26522] block mb-2">
                  [ Step {st.num} ]
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
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
