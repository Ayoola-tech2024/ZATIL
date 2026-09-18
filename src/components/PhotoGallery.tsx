"use client";

import React, { useState } from "react";
import { Camera, Eye, MapPin, Tag } from "lucide-react";

export default function PhotoGallery() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Cathedral of St. Paul's Pipe Organ",
      category: "organs",
      location: "Ozoro, Delta State",
      year: "2024",
      highlight: "51st Milestone • 2-Manual Viscount Console",
      type: "Pipe Organ Façade",
    },
    {
      title: "Handcrafted Concert Violin Assembly",
      category: "strings",
      location: "Akure Workshop, Ondo State",
      year: "2024",
      highlight: "African Tonewood • Hand-Carved Scroll",
      type: "String Lutherie",
    },
    {
      title: "Sanctuary Pipe Organ Façade",
      category: "organs",
      location: "Lagos Cathedral Project",
      year: "2023",
      highlight: "Acoustic Gold Pipes • Hardwood Bracing",
      type: "Church Installation",
    },
    {
      title: "Master Cello Chamber Bracing",
      category: "strings",
      location: "Akure Craft Studio",
      year: "2023",
      highlight: "Custom Ebony Fingerboard Fitting",
      type: "Bespoke Cello",
    },
    {
      title: "Institutional Audio Enclosure Build",
      category: "audio",
      location: "Assembly Auditorium Installation",
      year: "2024",
      highlight: "High SPL Acoustic Cabinets",
      type: "Audio Engineering",
    },
    {
      title: "Luthier Bow Rehairing & Restoration",
      category: "repairs",
      location: "Zatil Repair Clinic",
      year: "2024",
      highlight: "Mongolian Horsehair • Bridge Leveling",
      type: "Restoration",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522]">
              Verified Proof of Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-2">
              Craftsmanship in Action
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
              Authentic manufacturing, church installations, and luthier work from our Akure workshop and sites across 11+ states.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Work" },
              { id: "organs", label: "Pipe Organs" },
              { id: "strings", label: "Violins & Cellos" },
              { id: "audio", label: "Audio Speakers" },
              { id: "repairs", label: "Restorations" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === btn.id
                    ? "bg-[#F26522] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#FAF8F5] border border-slate-200/80 hover:border-orange-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6"
            >
              {/* Visual Decorative Placeholder with High Contrast Acoustic Framing */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-[#1C222D] via-[#151921] to-[#0D0F12] flex flex-col justify-between p-5 relative overflow-hidden text-white mb-5 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-md text-orange-300">
                    {proj.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {proj.year}
                  </span>
                </div>

                <div className="z-10">
                  <span className="text-xs font-bold text-[#7CB342] flex items-center gap-1 mb-1">
                    <Tag className="w-3 h-3" />
                    <span>{proj.highlight}</span>
                  </span>
                  <p className="text-base font-bold font-display text-white group-hover:text-orange-300 transition-colors">
                    {proj.title}
                  </p>
                </div>

                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F26522_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>{proj.location}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered with indigenous timber, precision acoustic balance, and strict architectural standards.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="text-slate-400">Archive ID: #ZTL-{2024 - idx}</span>
                <span className="text-[#F26522] group-hover:underline">View Spec Sheet →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
