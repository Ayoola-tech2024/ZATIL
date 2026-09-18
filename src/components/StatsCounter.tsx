import React from "react";
import { Award, Building2, Music2, Volume2, MapPin, Users } from "lucide-react";

export default function StatsCounter() {
  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Years of Craftsmanship",
      desc: "Dedicated artisanal manufacturing",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Building2,
      value: "51+",
      label: "Pipe-Organ Façades",
      desc: "Installed in Cathedrals & Churches",
      color: "text-[#F26522]",
      bg: "bg-orange-500/10",
    },
    {
      icon: Music2,
      value: "500+",
      label: "String Instruments",
      desc: "Violins, Violas, Cellos & Basses",
      color: "text-[#7CB342]",
      bg: "bg-lime-500/10",
    },
    {
      icon: Volume2,
      value: "400+",
      label: "Audio Speakers",
      desc: "Engineered for acoustics & reliability",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: MapPin,
      value: "11+",
      label: "States Reached",
      desc: "Active across Nigerian regions",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Users,
      value: "26",
      label: "Craft Specialists",
      desc: "Nigerian luthiers & technicians",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? "pt-6 sm:pt-0 sm:pl-4" : ""
                }`}
              >
                <div className={`p-3 rounded-2xl ${item.bg} ${item.color} mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Credibility disclaimer badge */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p className="italic">
            * Selected figures verified from Zatil's internal production logs and project installation archive (2014 – Present).
          </p>
          <span className="font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            📍 Akure Facility, Ondo State
          </span>
        </div>
      </div>
    </section>
  );
}
