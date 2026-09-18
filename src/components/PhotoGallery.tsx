"use client";

import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

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
      highlight: "Seasoned African Tonewood • Amber Oil",
      code: "VLN-2024-08",
    },
    {
      title: "Sanctuary Pipe-Organ Façade & Casework",
      category: "organs",
      location: "Lagos Cathedral Commission",
      year: "2023",
      highlight: "Gilded Gold Pipes • Hardwood Bracing",
      code: "OPUS-047",
    },
    {
      title: "Master Cello Arching & Soundpost Fit",
      category: "strings",
      location: "Akure Workshop",
      year: "2023",
      highlight: "Hand-Carved Spruce • Ebony Fittings",
      code: "CLO-2023-03",
    },
    {
      title: "High-SPL Sanctuary Audio Enclosures",
      category: "audio",
      location: "Regional Assembly Auditorium",
      year: "2024",
      highlight: "Acoustic Tuning & Bracing",
      code: "AUD-2024-12",
    },
    {
      title: "Classical Bow Re-Hairing & Neck Reset",
      category: "repairs",
      location: "Zatil Lutherie Clinic",
      year: "2024",
      highlight: "Mongolian Horsehair • Bridge Cut",
      code: "RPR-2024-34",
    },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="bg-[#FAF6F0] text-[#1E1915] py-24 border-b border-[#1E1915]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-12 pb-6 border-b border-[#1E1915]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C85A17]">
              Verified Proof of Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1E1915] mt-1">
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
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                  filter === btn.id
                    ? "bg-[#1E1915] text-[#FAF6F0] border-[#1E1915]"
                    : "bg-[#FAF6F0] text-[#6A5D52] border-[#1E1915]/20 hover:border-[#1E1915]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1E1915]/15 p-6 flex flex-col justify-between hover:border-[#C85A17] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#1E1915]/10 mb-4 text-xs font-mono text-[#8A796C]">
                  <span>{proj.code}</span>
                  <span>{proj.year}</span>
                </div>

                <div className="h-36 bg-[#F3ECE2] border border-[#1E1915]/10 p-4 flex flex-col justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#C85A17] uppercase tracking-widest">
                    {proj.highlight}
                  </span>
                  <p className="text-base font-bold font-display text-[#1E1915]">
                    {proj.title}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#6A5D52] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A17]" />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E1915]/10 flex items-center justify-between text-xs font-mono text-[#1E1915]">
                <span>Status: Completed</span>
                <span className="text-[#C85A17] font-bold">Archive Record →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
