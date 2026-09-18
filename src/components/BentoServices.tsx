"use client";

import React from "react";
import { Music, Speaker, Wrench, RefreshCw, GraduationCap, Cpu, ArrowUpRight, Sparkles } from "lucide-react";

interface BentoServicesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export default function BentoServices({ onOpenQuoteModal }: BentoServicesProps) {
  const services = [
    {
      id: "strings",
      icon: Music,
      number: "01",
      title: "Stringed Musical Instruments",
      subtitle: "Violins • Violas • Cellos • Double Basses",
      description:
        "Handcrafted in Akure with seasoned African acoustic tonewood specifically conditioned for African humidity and climatic resilience. Paired with lightweight protective casing and 6 months free restoration warranty.",
      tags: ["Violin", "Viola", "Cello", "Double Bass", "Bespoke Builds"],
      highlightColor: "from-orange-500/20 to-amber-500/10",
      borderColor: "hover:border-orange-500/50",
      ctaText: "Order String Instruments",
    },
    {
      id: "organs",
      icon: Sparkles,
      number: "02",
      title: "Pipe Organ Façades",
      subtitle: "Cathedrals • Churches • Auditoriums",
      description:
        "Nigeria’s leader in decorative and acoustic pipe-organ façade engineering with 51+ completed installations. Custom wood finishes, pipe arrangements, and seamless console integration.",
      tags: ["51+ Completed", "Viscount / Allen", "Custom Finishes"],
      highlightColor: "from-amber-500/20 to-yellow-500/10",
      borderColor: "hover:border-amber-500/50",
      ctaText: "Consult on Pipe Organ",
    },
    {
      id: "audio",
      icon: Speaker,
      number: "03",
      title: "Audio Speakers & Systems",
      subtitle: "Worship Sanctuaries & Music Spaces",
      description:
        "Locally manufactured audio speaker enclosures engineered for high SPL clarity, vocal articulation, and heavy-duty acoustic power across large assembly halls.",
      tags: ["High SPL", "Acoustic Tuning", "Institutional Grade"],
      highlightColor: "from-blue-500/20 to-cyan-500/10",
      borderColor: "hover:border-blue-500/50",
      ctaText: "Inquire Audio Systems",
    },
    {
      id: "repairs",
      icon: Wrench,
      number: "04",
      title: "Luthier Repairs & Maintenance",
      subtitle: "Bowed Strings & Instrument Tuning",
      description:
        "Precision craftsmanship for prized instruments: bow re-hairing, soundpost adjustments, fingerboard leveling, crack sealing, and acoustic bridge replacements.",
      tags: ["Bow Re-hairing", "Soundpost Tuning", "Crack Sealing"],
      highlightColor: "from-purple-500/20 to-indigo-500/10",
      borderColor: "hover:border-purple-500/50",
      ctaText: "Book Instrument Repair",
    },
    {
      id: "refurbish",
      icon: RefreshCw,
      number: "05",
      title: "Instrument Refurbishment",
      subtitle: "Circular Life-Extension & Restoration",
      description:
        "Giving old, damaged, or abandoned instruments a second life. We restore tonal resonance, re-varnish wood surfaces, and replace aged hardware to eliminate waste.",
      tags: ["Waste Reduction", "Varnish Restoration", "Hardware Overhaul"],
      highlightColor: "from-emerald-500/20 to-lime-500/10",
      borderColor: "hover:border-emerald-500/50",
      ctaText: "Restore an Old Instrument",
    },
    {
      id: "training",
      icon: GraduationCap,
      number: "06",
      title: "Technical & Music Training",
      subtitle: "Empowering Next-Gen African Luthiers",
      description:
        "Practical apprenticeship and skills training in instrument maintenance, acoustics, woodwork, and stage audio infrastructure for students and technicians.",
      tags: ["Apprenticeship", "Youth Empowerment", "Acoustic Skills"],
      highlightColor: "from-rose-500/20 to-orange-500/10",
      borderColor: "hover:border-rose-500/50",
      ctaText: "Inquire Training Programs",
    },
    {
      id: "fabrication",
      icon: Cpu,
      number: "07",
      title: "Custom Design & Digital Fabrication",
      subtitle: "CAD Modeling & Space Optimization",
      description:
        "Utilizing precision digital drawings and fabrication workflows to design musical infrastructure customized to the exact architectural parameters of your space.",
      tags: ["CAD Blueprints", "Space Acoustic Analysis", "Custom CNC"],
      highlightColor: "from-teal-500/20 to-emerald-500/10",
      borderColor: "hover:border-teal-500/50",
      ctaText: "Request Custom Fabrication",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522]">
            Comprehensive Musical Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-2">
            What We Create & Maintain
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From single bespoke violin builds to massive church pipe organ installations, our Akure facility connects traditional lutherie with modern manufacturing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={svc.id}
                className={`group relative rounded-3xl p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? "md:col-span-1 lg:col-span-1 border-orange-200" : ""
                } ${svc.borderColor}`}
              >
                {/* Gradient Accent Pill */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${svc.highlightColor} rounded-tr-3xl rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-900 text-white group-hover:bg-[#F26522] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      {svc.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-[#F26522] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                    {svc.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(svc.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#F26522] transition-colors py-1"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
