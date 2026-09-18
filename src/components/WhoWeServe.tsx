import React from "react";
import { Church, School, User, GraduationCap, Building, Wrench } from "lucide-react";

export default function WhoWeServe() {
  const audiences = [
    {
      icon: Church,
      title: "Churches & Cathedrals",
      desc: "Bespoke pipe-organ façades, acoustic speaker systems, sanctuary sound enhancement, instrument repairs, and permanent maintenance retainers.",
      highlight: "51+ Cathedrals across Nigeria",
    },
    {
      icon: School,
      title: "Schools & Music Departments",
      desc: "Durable stringed instrument sets (violins, violas, cellos) and structured musical resources engineered for intensive student practice.",
      highlight: "Educational volume discounts",
    },
    {
      icon: User,
      title: "Musicians & Soloists",
      desc: "Professional-grade bowed string instruments crafted to individual tonal preferences, with responsive setups and custom chinrests.",
      highlight: "Personalized acoustic tuning",
    },
    {
      icon: GraduationCap,
      title: "Music Teachers & Tutors",
      desc: "Reliable, easy-to-tune study instruments with precise action and intonation, helping young students learn without physical fatigue.",
      highlight: "Teacher-approved intonation",
    },
    {
      icon: Building,
      title: "Event Spaces & Auditoriums",
      desc: "Custom audio enclosures, specialized acoustic infrastructure, and architectural cabinetry designed to fit unique hall aesthetics.",
      highlight: "Custom digital CAD fabrication",
    },
    {
      icon: Wrench,
      title: "Instrument Owners",
      desc: "Comprehensive luthier repair services: soundpost reset, bridge re-carving, varnish touch-up, crack sealing, and bow re-hairing.",
      highlight: "Free initial inspection",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F26522]">
            Targeted Acoustic Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-2">
            Built for the People Who Make Music Happen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From premier cathedrals to aspiring music students, Zatil bridges local manufacturing with international acoustic standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-orange-50 text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-colors w-fit mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {aud.title}
                  </h3>
                  <p className="text-xs font-bold text-[#7CB342] mt-1 mb-3">
                    {aud.highlight}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Custom Service Scope</span>
                  <span className="text-[#F26522]">Explore →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
