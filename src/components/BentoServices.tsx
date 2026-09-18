"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BentoServicesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export default function BentoServices({ onOpenQuoteModal }: BentoServicesProps) {
  const capabilities = [
    {
      num: "01",
      title: "Bespoke Stringed Instruments",
      subtitle: "Violins • Violas • Cellos • Double Basses",
      desc: "Handcrafted in Akure with seasoned African acoustic tonewoods. Specially conditioned for African climates with protective casing and 6 months free restoration warranty.",
    },
    {
      num: "02",
      title: "Pipe Organ Façade Engineering",
      subtitle: "Cathedrals • Churches • Worship Auditoriums",
      desc: "Architectural façade design, fabrication, and on-site rigging with 51+ completed installations across Nigeria. Custom pipe scaling and console integration.",
    },
    {
      num: "03",
      title: "Audio Speaker Systems",
      subtitle: "Institutional & Sanctuary Sound Reinforcement",
      desc: "Locally manufactured high-SPL speaker enclosures engineered for vocal intelligibility and long-term acoustic endurance in large assembly halls.",
    },
    {
      num: "04",
      title: "Luthier Repairs & Maintenance Clinic",
      subtitle: "Bowed Strings & Instrument Tuning",
      desc: "Precision workshop repairs: bow re-hairing with premium horsehair, soundpost resetting, bridge carving, crack stabilization, and free initial inspection.",
    },
    {
      num: "05",
      title: "Instrument Refurbishment & Restoration",
      subtitle: "Circular Life-Extension & Material Recovery",
      desc: "Restoring aged and damaged instruments back to concert condition, recovering usable tonewood and vintage hardware to reduce unnecessary waste.",
    },
    {
      num: "06",
      title: "Technical & Luthier Apprenticeships",
      subtitle: "Youth Skills & Capacity Development",
      desc: "Hands-on apprenticeship programs in musical instrument manufacturing, acoustic physics, woodwork mechanics, and sound engineering.",
    },
    {
      num: "07",
      title: "Custom Digital CAD Fabrication",
      subtitle: "Architectural Space Planning & Casework",
      desc: "Converting space blueprints into tailored architectural musical infrastructure, acoustic cabinetry, and custom choir installations.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
              Atelier Practice
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
              Manufacturing Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
            From handcrafted violins to cathedral pipe organ installations, our Akure facility connects traditional woodworking with modern engineering.
          </p>
        </div>

        {/* Minimalist Numbered Service List (No Box Cards) */}
        <div className="divide-y divide-neutral-200">
          {capabilities.map((svc, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-neutral-50/70 transition-colors px-4 -mx-4 rounded-2xl group"
            >
              <div className="lg:col-span-2 flex items-center gap-3">
                <span className="text-lg font-mono font-bold text-[#F26522]">
                  [{svc.num}]
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Akure
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#F26522] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs font-semibold text-[#7CB342] mt-1">
                  {svc.subtitle}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
                <button
                  onClick={() => onOpenQuoteModal(svc.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#F26522] transition-colors"
                >
                  <span>Inquire Spec</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
