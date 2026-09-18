import React from "react";
import { Check } from "lucide-react";

export default function ImpactCircular() {
  const pillars = [
    "Repairing and restoring damaged instruments to eliminate premature disposal",
    "Comprehensive tonal refurbishment of aged institutional equipment",
    "Recovering and repurposing acoustic-grade tonewood and aged timber",
    "Reusing high-quality vintage hardware, brass tuning keys & tailpieces",
    "Designing instruments with modular, maintainable parts for multi-decade life",
    "Minimizing workshop timber waste through precision digital nesting",
    "Empowering youth through practical, hands-on lutherie apprenticeships",
  ];

  return (
    <section id="impact" className="bg-[#192B21] text-[#FAF6F0] py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A6C99B] block mb-2">
              Circular Economy & Sovereign Capacity
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight text-white">
              Making Music. Reducing Waste. <br />
              <span className="italic font-normal font-serif text-[#A6C99B]">Extending Value Across Africa.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We believe manufacturing must build sovereign African capacity. Through local timber recovery, 
              instrument refurbishment, and technical luthier apprenticeships, Zatil creates sustainable value.
            </p>
          </div>
        </div>

        {/* The Impact Multiplier Strip */}
        <div className="p-8 bg-black/20 border border-white/10 mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6C99B] block mb-4">
            Socioeconomic Impact Multiplier
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-white">
            <span className="px-3 py-1.5 bg-white/10 border border-white/10">Local Technical Skills</span>
            <span className="text-[#A6C99B]">→</span>
            <span className="px-3 py-1.5 bg-white/10 border border-white/10">Youth Employment</span>
            <span className="text-[#A6C99B]">→</span>
            <span className="px-3 py-1.5 bg-white/10 border border-white/10">Domestic Manufacturing</span>
            <span className="text-[#A6C99B]">→</span>
            <span className="px-3 py-1.5 bg-white/10 border border-white/10">Music Education</span>
            <span className="text-[#A6C99B]">→</span>
            <span className="px-3 py-1.5 bg-white/10 border border-white/10">Cultural Heritage</span>
          </div>
        </div>

        {/* Circular Pillars List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/30 border border-white/10 p-8 sm:p-10">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              From Waste to Resources. From Old Instruments to New Possibilities.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rather than allowing damaged instruments to end in landfills, Zatil’s lutherie clinic restores structural resonance, re-varnishes aged soundboards, and recovers fine acoustic timber.
            </p>
          </div>

          <div className="space-y-3">
            {pillars.map((pil, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-xs font-mono text-[#A6C99B] font-bold mt-0.5">[{idx + 1}]</span>
                <span className="text-xs text-slate-200 leading-snug">{pil}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
