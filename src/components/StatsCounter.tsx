import React from "react";

export default function StatsCounter() {
  const metrics = [
    { num: "10+", label: "Years of Master Lutherie", note: "Continuous Nigerian production" },
    { num: "51+", label: "Pipe-Organ Façade Installations", note: "Churches, Cathedrals & Spaces" },
    { num: "500+", label: "Stringed Instruments Crafted", note: "Violins, Violas, Cellos & Basses" },
    { num: "400+", label: "Acoustic Audio Systems Built", note: "High SPL institutional speakers" },
    { num: "11+", label: "Nigerian States Reached", note: "Nationwide logistical footprint" },
    { num: "26", label: "Craftsmen & Technical Staff", note: "Akure manufacturing facility" },
  ];

  return (
    <section className="bg-[#F3ECE2] text-[#1E1915] border-b border-[#1E1915]/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[#1E1915]/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C85A17]">
              Internal Production Ledger (2014 – Present)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1E1915] mt-1">
              Zatil Group by the Numbers
            </h2>
          </div>
          <p className="text-xs text-[#6A5D52] italic max-w-md">
            * Selected figures verified from Zatil's internal business records, church commissioning contracts, and workshop production archive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0 lg:divide-x divide-[#1E1915]/10">
          {metrics.map((item, idx) => (
            <div key={idx} className="lg:px-6 first:pl-0 last:pr-0">
              <span className="text-3xl sm:text-5xl font-extrabold font-display text-[#1E1915] tracking-tight block">
                {item.num}
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1915] mt-2">
                {item.label}
              </h3>
              <p className="text-[11px] text-[#6A5D52] mt-0.5 leading-snug">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
