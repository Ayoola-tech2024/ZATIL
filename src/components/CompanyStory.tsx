import React from "react";

export default function CompanyStory() {
  const chapters = [
    {
      era: "01. THE ORIGIN",
      title: "Family Craftsmanship Heritage",
      narrative: "Deep-seated familial experience in fine woodwork and acoustic instruments laid the groundwork for an indigenous Nigerian lutherie tradition.",
    },
    {
      era: "02. THE FOUNDATION",
      title: "Zatil Group Established in Akure",
      narrative: "Founded on the core belief that high-quality concert instruments and specialist church infrastructure can be designed, manufactured, and serviced locally.",
    },
    {
      era: "03. THE BREAKTHROUGH",
      title: "Architectural Pipe-Organ Façades",
      narrative: "Pioneered decorative organ façade engineering in Nigeria, creating monumental installations for cathedrals and worship spaces nationwide.",
    },
    {
      era: "04. THE SCALE",
      title: "500+ Instruments & 51+ Organ Façades",
      narrative: "Expanded across 11+ states with a dedicated 26-person team of master craftsmen, apprentices, and acoustic field engineers.",
    },
    {
      era: "05. THE HORIZON",
      title: "Pan-African Circular Manufacturing",
      narrative: "Integrating tonewood recovery, zero-waste restoration, and youth apprenticeships to solidify Africa's capacity to build its own sound.",
    },
  ];

  const leadership = [
    { name: "Isaac Akinbobola", title: "Managing Partner", focus: "Corporate Strategy & Institutional Partnerships" },
    { name: "Henry Akinbobola", title: "Founding Partner / Technical Director", focus: "Master Lutherie, Organ Façade Engineering & Voicing" },
    { name: "Grace Akinbobola", title: "Human Resources & Operations", focus: "Talent Development, Apprenticeship & Administration" },
    { name: "Ayomikun Akinbobola", title: "Finance & Commercials", focus: "Project Financing & Material Supply Chain" },
  ];

  return (
    <section id="about" className="bg-[#FAF6F0] text-[#1E1915] py-24 border-b border-[#1E1915]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C85A17]">
            Heritage & Lineage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1E1915] mt-1">
            From Family Craftsmanship to African Manufacturing
          </h2>
          <p className="mt-3 text-base text-[#5A4E45] leading-relaxed">
            Zatil Group is an indigenous Nigerian musical instrument manufacturing company based in Akure, Ondo State. 
            We combine classical lutherie, modern acoustic engineering, and practical technical education.
          </p>
        </div>

        {/* Chronological Timeline Strip */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#1E1915]/15 border border-[#1E1915]/15 mb-20">
          {chapters.map((chap, idx) => (
            <div key={idx} className="bg-[#FAF6F0] p-6 flex flex-col justify-between hover:bg-[#F3ECE2] transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#C85A17] font-bold block mb-3">
                  {chap.era}
                </span>
                <h3 className="text-sm font-bold font-display text-[#1E1915] mb-2">
                  {chap.title}
                </h3>
                <p className="text-xs text-[#5A4E45] leading-relaxed">
                  {chap.narrative}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Directory */}
        <div>
          <div className="mb-8 pb-4 border-b border-[#1E1915]/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A796C]">
              Governance & Direction
            </span>
            <h3 className="text-2xl font-bold font-display text-[#1E1915] mt-1">
              Leadership & Technical Directorate
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((lead, idx) => (
              <div key={idx} className="p-6 bg-[#F3ECE2] border border-[#1E1915]/10">
                <span className="text-xs font-mono text-[#C85A17] block mb-2">[ 0{idx + 1} ]</span>
                <h4 className="text-base font-bold font-display text-[#1E1915]">
                  {lead.name}
                </h4>
                <span className="text-xs font-semibold text-[#8A796C] block mt-0.5 mb-2">
                  {lead.title}
                </span>
                <p className="text-xs text-[#5A4E45] leading-relaxed">
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
