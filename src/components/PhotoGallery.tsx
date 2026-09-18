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
      highlight: "51st Installation • 2-Manual Viscount Console",
      code: "OPUS-051",
    },
    {
      title: "Handcrafted Concert Violin Assembly",
      category: "strings",
      location: "Akure Workshop, Ondo State",
      year: "2024",
      highlight: "Seasoned African Tonewood • Hand-Rubbed Varnish",
      code: "VLN-2024",
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
      title: "Master Cello Arching & Soundpost Calibration",
      category: "strings",
      location: "Akure Craft Studio",
      year: "2023",
      highlight: "Hand-Carved Spruce • Ebony Fittings",
      code: "CLO-2023",
    },
    {
      title: "High-SPL Institutional Audio Enclosures",
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
    <section id="archive" className="py-20 sm:py-28 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
              Verified Proof of Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
              Project Archive
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "organs", label: "Pipe Organs" },
              { id: "strings", label: "String Lutherie" },
              { id: "audio", label: "Audio Enclosures" },
              { id: "repairs", label: "Restorations" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === btn.id
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Archive Table / Rows (No Box Cards) */}
        <div className="border-t border-neutral-200 divide-y divide-neutral-200">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-neutral-50 px-4 -mx-4 transition-colors"
            >
              <div className="md:col-span-2 text-xs font-mono font-bold text-[#F26522]">
                {proj.code} • {proj.year}
              </div>

              <div className="md:col-span-5">
                <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A]">
                  {proj.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {proj.highlight}
                </p>
              </div>

              <div className="md:col-span-3 text-xs text-neutral-600 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{proj.location}</span>
              </div>

              <div className="md:col-span-2 text-left md:text-right text-xs font-mono text-[#7CB342] font-bold">
                Completed ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
