import React from "react";

export default function WhoWeServe() {
  const sectors = [
    {
      title: "Churches & Cathedrals",
      desc: "Custom architectural pipe-organ façades, acoustic sound reinforcement systems, sanctuary voicing, and regular maintenance retainers.",
      scope: "Cathedral & Sanctuary Projects",
    },
    {
      title: "Music Schools & Conservatories",
      desc: "Student-proof, durable bowed string instrument sets (violins, cellos) designed to endure rigorous daily practice while developing clean pitch.",
      scope: "Institutional Outfitting",
    },
    {
      title: "Orchestral Musicians & Soloists",
      desc: "Bespoke instruments voiced to artist preferences, with responsive setups, custom chinrests, and resonant projection.",
      scope: "Concert Luthiery",
    },
    {
      title: "Music Educators & Tutors",
      desc: "Dependable study instruments that stay in tune, featuring ergonomic string height and action for young learners.",
      scope: "Educational Resources",
    },
    {
      title: "Auditoriums & Event Halls",
      desc: "Specialized acoustic cabinetry, sound enclosures, and custom woodwork designed around unique architectural sightlines.",
      scope: "Acoustic Engineering",
    },
    {
      title: "Individual Instrument Owners",
      desc: "Full luthier repairs: bow re-hairing, crack repair, soundpost calibration, and free initial condition inspections.",
      scope: "Luthier Clinic",
    },
  ];

  return (
    <section className="bg-[#FAF6F0] text-[#1E1915] py-24 border-b border-[#1E1915]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C85A17]">
            Institutional & Artist Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1E1915] mt-1">
            Built for the People Who Make Music Happen
          </h2>
          <p className="mt-3 text-base text-[#5A4E45] leading-relaxed">
            From premier cathedrals across Nigeria to individual student musicians, our workshop provides end-to-end craftsmanship and technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F3ECE2] border border-[#1E1915]/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A796C] block mb-3">
                  {sec.scope}
                </span>
                <h3 className="text-xl font-bold font-display text-[#1E1915] mb-2">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E1915]/10 text-xs font-mono text-[#C85A17]">
                Verified Akure Support →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
