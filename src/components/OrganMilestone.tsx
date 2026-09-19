"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Check, Building2, Layers, Award } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const steps = [
    { num: "01", title: "CAD & Architectural Design", desc: "Acoustic modeling customized to church altar width & ceiling height." },
    { num: "02", title: "Casework Joinery", desc: "Solid timber chassis engineered for rigid structural pipe support." },
    { num: "03", title: "Staining & Pipe Gilding", desc: "Casework staining harmonized with sanctuary interior millwork." },
    { num: "04", title: "Nationwide Transit", desc: "Specialist logistics from Akure workshop directly to the cathedral." },
    { num: "05", title: "On-Site Erection & Rigging", desc: "Precision assembly and mounting by master luthier technicians." },
    { num: "06", title: "Console Voicing & Testing", desc: "Electrical and acoustic coupling for Viscount, Allen & Johannus." },
  ];

  return (
    <section id="pipe-organs" className="py-24 sm:py-32 bg-[#0B0D10] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold font-mono uppercase tracking-widest text-[#FFA726] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Architectural Pipe Lutherie</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
            51+ Pipe Organ Façades <br />
            <span className="text-[#F26522] italic font-serif font-light lowercase">across</span> Nigeria
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            Zatil Group is Nigeria's premier engineering firm designing, fabricating, and erecting custom architectural pipe-organ façades for cathedrals, basilicas, and worship auditoriums nationwide.
          </p>
        </div>

        {/* Monumental Split Case Study Showcase */}
        <div className="bg-[#13161C] border border-white/10 rounded-3xl p-6 sm:p-12 mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Real Installation Photography Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <Image
                  src="/images/hero/hero-organ.jpg"
                  alt="Zatil Cathedral Pipe Organ Installation"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Photo Tag Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                  <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                    <span>Cathedral of St. Paul's, Ozoro</span>
                  </div>
                  <span className="bg-[#F26522] text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl uppercase">
                    Opus #51
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA726]">
                  Flagship Case Study
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  Cathedral Pipe-Organ Façade & Viscount Console
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Cathedral of St. Paul's Anglican Church • Ozoro, Delta State
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Engineered for the high vaulted sanctuary of St. Paul’s Cathedral. 
                Integrating a <strong>2-manual Viscount organ console</strong> with symmetrical gold-scaled pipe towers, 
                seasoned hardwood casework, and digital sound voicing tailored for congregational hymnody.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Console Type</span>
                  <span className="font-bold text-white mt-1 block">2-Manual Viscount</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Casework Wood</span>
                  <span className="font-bold text-white mt-1 block">Seasoned Hardwood</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Acoustic Scale</span>
                  <span className="font-bold text-white mt-1 block">High-Vault Symmetrical</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Status</span>
                  <span className="font-bold text-[#7CB342] mt-1 block">Completed & In Use</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/25"
                >
                  <span>Commission a Cathedral Pipe Organ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Phase Pipeline Line */}
        <div>
          <div className="mb-8 flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white">
              The 6-Phase Engineering Pipeline
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Akure Workshop to Site
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {steps.map((st, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""}`}>
                <span className="text-xs font-mono font-bold text-[#FFA726] block mb-1">
                  [{st.num}]
                </span>
                <h4 className="text-xs font-bold uppercase text-white mb-1">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
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
