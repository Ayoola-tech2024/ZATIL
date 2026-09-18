import React from "react";
import { Hammer, Sparkles, Building2, MapPin, Recycle, Globe2, Users, ShieldCheck, Heart } from "lucide-react";

export default function CompanyStory() {
  const timeline = [
    {
      year: "The Roots",
      title: "Family Craftsmanship & Musical Passion",
      desc: "Deep-seated family heritage in woodwork and musical instruments laid the foundation for precision acoustic lutherie.",
      icon: Heart,
    },
    {
      year: "Establishment",
      title: "Zatil Group Founded in Akure",
      desc: "Founded on the core belief that high-quality musical instruments and specialized acoustic infrastructure can be designed, manufactured, and serviced locally in Nigeria.",
      icon: Hammer,
    },
    {
      year: "Expansion",
      title: "Pipe-Organ Façade Innovation",
      desc: "Pioneered architectural organ façade engineering, delivering monumental sound and visual beauty to churches and cathedrals.",
      icon: Building2,
    },
    {
      year: "Milestone",
      title: "500+ Instruments & 51+ Organ Façades",
      desc: "Expanded across 11+ Nigerian states, supplying cathedrals, schools, orchestras, and individual artists with warranty-backed builds.",
      icon: Sparkles,
    },
    {
      year: "The Future",
      title: "Pan-African Manufacturing & Circular Economy",
      desc: "Integrating zero-waste restoration, circular tonewood recovery, and technical training to empower Africa's next generation of makers.",
      icon: Globe2,
    },
  ];

  const leaders = [
    {
      name: "Isaac Akinbobola",
      role: "Managing Partner",
      bio: "Oversees executive strategy, institutional partnerships, and nationwide project delivery.",
    },
    {
      name: "Henry Akinbobola",
      role: "Founding Partner / Technical Director",
      bio: "Master technical architect behind acoustic pipe façade design, woodwork engineering, and sound calibration.",
    },
    {
      name: "Grace Akinbobola",
      role: "Human Resources & Operations",
      bio: "Guides talent development, apprenticeships, and workshop personnel administration.",
    },
    {
      name: "Ayomikun Akinbobola",
      role: "Finance & Commercials",
      bio: "Directs fiscal planning, procurement, and client project financing structures.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522]">
            Our Heritage & Purpose
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-2">
            From Family Craftsmanship to African Manufacturing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Zatil Group is an indigenous Nigerian musical instrument manufacturing company based in Akure, Ondo State. 
            We connect traditional craftsmanship, modern acoustic engineering, and music education.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-orange-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {timeline.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-orange-50 text-[#F26522]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {step.year}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-display text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7CB342]">
              Leadership & Governance
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 mt-1">
              The People Behind the Craft
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Supported by our 26 master craftsmen, luthiers, cabinetmakers, and field engineers in Akure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((ldr, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 text-center flex flex-col justify-between shadow-sm hover:border-orange-300 transition-all"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F26522] to-[#FFA726] text-white flex items-center justify-center font-display font-extrabold text-2xl mx-auto mb-4 shadow-md">
                    {ldr.name.split(" ")[0][0]}
                    {ldr.name.split(" ")[1][0]}
                  </div>
                  <h4 className="text-base font-bold font-display text-slate-900">
                    {ldr.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#F26522] block mt-0.5 mb-3">
                    {ldr.role}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ldr.bio}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                  Zatil Executive Board
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
