import React from "react";

export default function CompanyStory() {
  const chapters = [
    {
      era: "01. ORIGINS",
      title: "Family Craftsmanship",
      narrative: "Deep family experience in fine woodwork and acoustic instruments laid the groundwork for an indigenous Nigerian lutherie tradition.",
    },
    {
      era: "02. ESTABLISHED",
      title: "Akure Workshop Founded",
      narrative: "Founded on the core belief that high-quality concert instruments and specialist church infrastructure can be built and maintained locally.",
    },
    {
      era: "03. INNOVATION",
      title: "Pipe-Organ Façades",
      narrative: "Pioneered decorative organ façade engineering in Nigeria, creating monumental installations for cathedrals nationwide.",
    },
    {
      era: "04. EXPANSION",
      title: "500+ Instruments & 51+ Organs",
      narrative: "Expanded across 11+ states with a dedicated 26-person team of master craftsmen, apprentices, and acoustic field engineers.",
    },
    {
      era: "05. FUTURE",
      title: "Circular Pan-African Impact",
      narrative: "Integrating tonewood recovery, zero-waste restoration, and youth apprenticeships to solidify Africa's capacity to build its own sound.",
    },
  ];

  const leadership = [
    { name: "Isaac Akinbobola", title: "Managing Partner", focus: "Corporate Strategy & Institutional Partnerships" },
    { name: "Henry Akinbobola", title: "Founding Partner / Technical Director", focus: "Master Lutherie, Organ Façade Engineering & Voicing" },
    { name: "Grace Akinbobola", title: "Human Resources", focus: "Talent Development, Apprenticeship & Administration" },
    { name: "Ayomikun Akinbobola", title: "Finance", focus: "Project Financing & Supply Chain Logistics" },
  ];

  return (
    <section id="about" className="bg-[#0F1217] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
            Heritage & Mission
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            From Family Roots to African Manufacturing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Zatil Group is an indigenous Nigerian musical instrument manufacturing company based in Akure, Ondo State. We connect traditional craftsmanship with modern acoustic engineering.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {chapters.map((chap, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#13161C] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#FFA726] font-bold block mb-2">
                  {chap.era}
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {chap.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {chap.narrative}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">
            Leadership & Technical Directorate
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((lead, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#13161C] border border-white/10">
                <span className="text-xs font-mono text-[#F26522] block mb-1.5">[ 0{idx + 1} ]</span>
                <h4 className="text-base font-bold text-white">
                  {lead.name}
                </h4>
                <span className="text-xs font-semibold text-[#7CB342] block mt-0.5 mb-2">
                  {lead.title}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lead.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
