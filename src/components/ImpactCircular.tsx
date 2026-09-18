import React from "react";
import { Recycle, TreePine, Award, Users, GraduationCap, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function ImpactCircular() {
  const circularPillars = [
    "Repairing & saving damaged instruments from disposal",
    "Comprehensive tonal refurbishment of aged equipment",
    "Recovering and repurposing acoustic-grade tonewood",
    "Reusing high-quality hardware, bridges & tailpieces",
    "Designing products with modular parts for 20+ year lifespans",
    "Minimizing workshop sawdust and timber offcut waste",
    "Empowering youth through hands-on technical apprenticeships",
  ];

  const impactMetrics = [
    { title: "Local Employment", value: "26+", sub: "Craftsmen & Technicians in Akure", icon: Users },
    { title: "Apprentices Trained", value: "100+", sub: "Youth in Instrument Lutherie", icon: GraduationCap },
    { title: "Circular Restorations", value: "350+", sub: "Instruments Saved From Landfills", icon: Recycle },
    { title: "Indigenous Supply", value: "100%", sub: "Nigerian Made & Supported", icon: TreePine },
  ];

  return (
    <section id="impact" className="py-24 bg-[#0D0F12] text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-[#7CB342] text-xs font-bold uppercase tracking-widest mb-4">
            <Recycle className="w-3.5 h-3.5" />
            <span>Sustainability & Circular Economy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight">
            Making Music. Reducing Waste. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CB342] via-[#AEEA00] to-[#F26522]">
              Extending Value Across Africa.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We believe manufacturing should create value far beyond the product itself. Through local production, 
            circular restoration, and technical luthier training, Zatil strengthens Africa's sovereign manufacturing capacity.
          </p>
        </div>

        {/* Impact Equation */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
            The Zatil Impact Multiplier
          </span>
          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-lg font-bold text-slate-200">
            <span className="px-4 py-2 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/30">Local Skills</span>
            <span className="text-slate-500">→</span>
            <span className="px-4 py-2 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">Youth Employment</span>
            <span className="text-slate-500">→</span>
            <span className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">Domestic Manufacturing</span>
            <span className="text-slate-500">→</span>
            <span className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">Music Education</span>
            <span className="text-slate-500">→</span>
            <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cultural Development</span>
          </div>
        </div>

        {/* Grid: Circular Pillars + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Circular Economy Checklist */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#151921] to-[#1C222D] p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              From Waste to Resources. From Old Instruments to New Possibilities.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Our circular framework prevents functional acoustic hardware and premium wood from being discarded prematurely.
            </p>

            <div className="space-y-3.5">
              {circularPillars.map((pillar, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {impactMetrics.map((met, mIdx) => {
              const Icon = met.icon;
              return (
                <div
                  key={mIdx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-lime-500/40 transition-all flex flex-col justify-between"
                >
                  <Icon className="w-6 h-6 text-[#7CB342] mb-4" />
                  <div>
                    <span className="text-3xl font-extrabold font-display text-white block">
                      {met.value}
                    </span>
                    <span className="text-xs font-bold text-slate-300 mt-1 block">
                      {met.title}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight">
                      {met.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
