import React from "react";
import { Check } from "lucide-react";

export default function ImpactCircular() {
  const pillars = [
    "Repairing and restoring damaged instruments to eliminate premature disposal",
    "Comprehensive tonal refurbishment of aged institutional equipment",
    "Recovering and repurposing acoustic-grade tonewood & seasoned timber",
    "Reusing high-grade vintage hardware, brass keys & tailpieces",
    "Designing instruments with modular parts for 20+ year lifespans",
    "Minimizing workshop timber waste through precision digital nesting",
    "Empowering youth through practical, hands-on lutherie apprenticeships",
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7CB342]">
              Circular Economy & Sovereign Capacity
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
              Making Music. <br />
              <span className="text-[#7CB342]">Reducing Waste.</span> <br />
              Extending Value.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-neutral-600 leading-relaxed">
              We believe manufacturing must build sovereign domestic capacity. Through local timber recovery, 
              instrument refurbishment, and technical luthier apprenticeships, Zatil strengthens Africa's capability to build its own sound.
            </p>
          </div>
        </div>

        {/* Impact Flow (Clean Text Line) */}
        <div className="py-6 border-y border-neutral-200 mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Socioeconomic Multiplier Model
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-neutral-800">
            <span>Local Technical Skills</span>
            <span className="text-[#F26522]">→</span>
            <span>Youth Employment</span>
            <span className="text-[#F26522]">→</span>
            <span>Domestic Manufacturing</span>
            <span className="text-[#F26522]">→</span>
            <span>Music Education</span>
            <span className="text-[#F26522]">→</span>
            <span className="text-[#7CB342]">Cultural Heritage</span>
          </div>
        </div>

        {/* 7 Circular Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {pillars.map((pil, idx) => (
            <div key={idx} className="flex items-start gap-3 py-2 border-b border-neutral-100">
              <span className="text-xs font-mono font-bold text-[#7CB342] mt-0.5">
                0{idx + 1}.
              </span>
              <span className="text-xs sm:text-sm text-neutral-700 font-medium">
                {pil}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
