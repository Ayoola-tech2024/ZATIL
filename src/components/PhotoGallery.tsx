"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function PhotoGallery() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Cathedral of St. Paul's Anglican Church",
      category: "organs",
      location: "Ozoro, Delta State",
      year: "2024",
      highlight: "Milestone Opus #51 • 2-Manual Viscount Console",
      code: "OPUS-051",
    },
    {
      title: "Church of the Ascension Pipe-Organ Façade",
      category: "organs",
      location: "Badore, Ajah, Lagos State",
      year: "2024",
      highlight: "Custom Architectural Pipe Scaling & Casework",
      code: "OPUS-049",
    },
    {
      title: "All Saints Anglican Church Digital Organ",
      category: "organs",
      location: "Yaba, Lagos State",
      year: "2023",
      highlight: "Sanus Dominos Organ & Bespoke Pipe Façade",
      code: "OPUS-048",
    },
    {
      title: "Our Father's Cathedral Façade Installation",
      category: "organs",
      location: "Port Harcourt, Rivers State",
      year: "2023",
      highlight: "High-Vaulted Gallery Façade Casework",
      code: "OPUS-045",
    },
    {
      title: "St. Andrew's Anglican Church Pipe Façade",
      category: "organs",
      location: "Rumubiakani, Rivers State",
      year: "2023",
      highlight: "Sanctuary Voicing & Solid Timber Framing",
      code: "OPUS-043",
    },
    {
      title: "Concert Violins & Cellos Hand-Carving",
      category: "strings",
      location: "39 Yaba Street Atelier, Akure",
      year: "2024",
      highlight: "Seasoned African Tonewood & Madagascar Ebony",
      code: "LUTH-2024",
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
              { id: "organs", label: "Pipe Organs (51+)" },
              { id: "strings", label: "Bowed Strings" },
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

        {/* Minimalist Archive Table Rows */}
        <div className="border-t border-neutral-200 divide-y divide-neutral-200">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-neutral-50 px-4 -mx-4 transition-colors rounded-xl"
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
                Completed & Consecrated ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
