"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

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
      image: "/images/hero/hero-organ.jpg",
      details: "Decorative pipe façade scaled to high-vaulted altar acoustics with seasoned hardwood cabinetry.",
    },
    {
      title: "Church of the Ascension Pipe-Organ Façade",
      category: "organs",
      location: "Badore, Ajah, Lagos State",
      year: "2024",
      highlight: "Architectural Pipe Scaling & Casework",
      code: "OPUS-049",
      image: "/images/hero/hero-organ.jpg",
      details: "Custom-fitted pipe ranks and audio integration designed for contemporary sanctuary architecture.",
    },
    {
      title: "All Saints Anglican Church Digital Organ",
      category: "organs",
      location: "Yaba, Lagos State",
      year: "2023",
      highlight: "Sanus Dominos Organ & Bespoke Pipe Façade",
      code: "OPUS-048",
      image: "/images/hero/hero-organ.jpg",
      details: "Full sanctuary console voicing and symmetrical pipe casework matching cathedral interior woodwork.",
    },
    {
      title: "Our Father's Cathedral Façade Installation",
      category: "organs",
      location: "Port Harcourt, Rivers State",
      year: "2023",
      highlight: "High-Vaulted Gallery Façade Casework",
      code: "OPUS-045",
      image: "/images/hero/hero-organ.jpg",
      details: "Monumental pipe array engineered for maximum acoustic dispersion across wide nave seating.",
    },
    {
      title: "St. Andrew's Anglican Church Pipe Façade",
      category: "organs",
      location: "Rumubiakani, Rivers State",
      year: "2023",
      highlight: "Sanctuary Voicing & Solid Timber Framing",
      code: "OPUS-043",
      image: "/images/hero/hero-organ.jpg",
      details: "Casework joinery anchored directly into church chancel with gilded gold pipe ranks.",
    },
    {
      title: "Concert Violins & Cellos Hand-Carving",
      category: "strings",
      location: "39 Yaba Street Atelier, Akure",
      year: "2024",
      highlight: "Seasoned African Tonewood & Madagascar Ebony",
      code: "LUTH-2024",
      image: "/images/hero/hero-organ.jpg",
      details: "Indigenous lutherie production of violins, violas, cellos, and double basses for musicians nationwide.",
    },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="archive" className="py-24 sm:py-32 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
              Verified Proof of Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
              Project Portfolio & Archive
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Works (51+)" },
              { id: "organs", label: "Church Pipe Organs" },
              { id: "strings", label: "Bowed String Lutherie" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === btn.id
                    ? "bg-[#0A0A0A] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden hover:border-black transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white">
                    {proj.code}
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-[#FFA726]">
                    {proj.highlight}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#F26522] transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                    <span>{proj.location}</span>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {proj.details}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-200/60 mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Year: {proj.year}</span>
                <span className="text-[#7CB342] font-bold">Commissioned ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
