import React from "react";
import { CheckCircle2, Recycle, TreePine, Users, GraduationCap } from "lucide-react";

export default function ImpactCircular() {
  const pillars = [
    "Repairing & restoring damaged instruments to eliminate premature disposal",
    "Comprehensive tonal refurbishment of aged institutional equipment",
    "Recovering and repurposing acoustic tonewood & seasoned timber",
    "Reusing high-grade vintage hardware, brass keys & tailpieces",
    "Designing instruments with modular parts for 20+ year lifespans",
    "Minimizing workshop timber waste through precision nesting",
    "Empowering youth through practical, hands-on lutherie apprenticeships",
  ];

  return (
    <section id="impact" className="bg-[#0B0D10] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7CB342]">
            Sustainability & Social Impact
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Making Music. Reducing Waste. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CB342] to-[#AEEA00]">
              Extending Value Across Africa.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            We believe manufacturing should build sovereign domestic capability. Through timber recovery, circular refurbishment, and technical luthier apprenticeships, Zatil creates sustainable value.
          </p>
        </div>

        {/* Impact Flow */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#13161C] border border-white/10 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7CB342] block mb-4">
            The Zatil Impact Multiplier
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">Local Skills</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">Youth Jobs</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">Domestic Manufacturing</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">Music Education</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#7CB342]">Cultural Heritage</span>
          </div>
        </div>

        {/* Checklist */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#13161C] border border-white/10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            From Waste to Resources. From Old Instruments to New Possibilities.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pillars.map((pil, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span>{pil}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
