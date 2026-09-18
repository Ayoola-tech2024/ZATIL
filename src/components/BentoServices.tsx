"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BentoServicesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export default function BentoServices({ onOpenQuoteModal }: BentoServicesProps) {
  const services = [
    {
      num: "01",
      title: "Stringed Musical Instruments",
      subtitle: "Violins • Violas • Cellos • Double Basses",
      desc: "Handcrafted in Akure with seasoned African acoustic tonewoods. Specially conditioned for African climates with protective casing and 6 months free restoration warranty.",
    },
    {
      num: "02",
      title: "Pipe Organ Façades",
      subtitle: "Cathedrals • Churches • Worship Centers",
      desc: "Architectural façade design, fabrication, and on-site rigging with 51+ completed installations across Nigeria. Custom pipe scaling and console integration.",
    },
    {
      num: "03",
      title: "Audio Speaker Systems",
      subtitle: "Institutional & Sanctuary Acoustics",
      desc: "Locally manufactured high-SPL speaker enclosures engineered for vocal intelligibility and long-term acoustic endurance in large auditoriums.",
    },
    {
      num: "04",
      title: "Luthier Repairs & Maintenance",
      subtitle: "Bowed Strings & Instrument Tuning",
      desc: "Precision workshop repairs: bow re-hairing with premium horsehair, soundpost resetting, bridge carving, crack stabilization, and free initial inspection.",
    },
    {
      num: "05",
      title: "Instrument Refurbishment",
      subtitle: "Circular Life-Extension & Restoration",
      desc: "Restoring aged and damaged instruments back to performance condition, recovering usable tonewood and vintage hardware to reduce waste.",
    },
    {
      num: "06",
      title: "Technical & Luthier Training",
      subtitle: "Youth Skills & Capacity Development",
      desc: "Hands-on apprenticeship programs in musical instrument manufacturing, acoustic physics, woodwork mechanics, and sound engineering.",
    },
    {
      num: "07",
      title: "Custom Design & Fabrication",
      subtitle: "Digital CAD & Space Planning",
      desc: "Converting space blueprints into tailored architectural musical infrastructure, acoustic cabinetry, and custom choir installations.",
    },
  ];

  return (
    <section id="services" className="bg-[#0B0D10] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
              Manufacturing Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
              What We Create & Maintain
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            From bespoke violins to massive cathedral pipe organ installations, all built in our Akure manufacturing facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-[#13161C] border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between group ${
                idx === 0 || idx === 1 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-[#F26522]">
                    [ {svc.num} ]
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Akure Facility
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFA726] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-[#7CB342] font-semibold mt-1 mb-3">
                  {svc.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10">
                <button
                  onClick={() => onOpenQuoteModal(svc.title)}
                  className="w-full flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white"
                >
                  <span>Inquire / Request Pricing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F26522]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
