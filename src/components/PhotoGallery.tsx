"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function PhotoGallery() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Cathedral of St. Paul's Pipe-Organ Façade",
      category: "organs",
      location: "Ozoro, Delta State",
      year: "2024",
      highlight: "51st Installation • Viscount Console",
      code: "OPUS-051",
    },
    {
      title: "Concert Violin Hand-Voicing & Varnish",
      category: "strings",
      location: "Akure Atelier, Ondo State",
      year: "2024",
      highlight: "African Tonewood • Amber Oil Finish",
      code: "VLN-2024",
    },
    {
      title: "Sanctuary Pipe-Organ Façade & Casework",
      category: "organs",
      location: "Lagos Cathedral Commission",
      year: "2023",
      highlight: "Gilded Gold Pipes • Hardwood Casework",
      code: "OPUS-047",
    },
    {
      title: "Master Cello Arching & Soundpost Fit",
      category: "strings",
      location: "Akure Workshop",
      year: "2023",
      highlight: "Hand-Carved Spruce • Ebony Fittings",
      code: "CLO-2023",
    },
    {
      title: "High-SPL Sanctuary Audio Enclosures",
      category: "audio",
      location: "Regional Assembly Auditorium",
      year: "2024",
      highlight: "Acoustic Tuning & Bracing",
      code: "AUD-2024",
    },
    {
      title: "Classical Bow Re-Hairing & Neck Reset",
      category: "repairs",
      location: "Zatil Lutherie Clinic",
      year: "2024",
      highlight: "Mongolian Horsehair • Bridge Cut",
      code: "RPR-2024",
    },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="bg-[#0B0D10] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
              Verified Proof of Work
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
              Selected Works & Archive
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "organs", label: "Pipe Organs" },
              { id: "strings", label: "String Lutherie" },
              { id: "audio", label: "Audio Enclosures" },
              { id: "repairs", label: "Restorations" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === btn.id
                    ? "bg-[#F26522] text-white"
                    : "bg-[#13161C] text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#13161C] border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono text-slate-400">
                  <span className="text-[#F26522] font-bold">{proj.code}</span>
                  <span>{proj.year}</span>
                </div>

                <span className="text-xs text-[#7CB342] font-semibold block mb-1">
                  {proj.highlight}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {proj.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Akure Workshop</span>
                <span className="text-[#FFA726] font-bold">Completed ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
