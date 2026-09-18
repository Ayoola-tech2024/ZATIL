import React from "react";
import ZatilLogo from "./ZatilLogo";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#181411] text-[#FAF6F0] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <ZatilLogo variant="dark" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-light">
              Nigerian-owned musical instrument manufacturing and acoustic infrastructure company based in Akure, Ondo State. 
              Connecting African tonewood craftsmanship with modern acoustic engineering.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E0A96D] block">
                Official Motto
              </span>
              <p className="text-lg font-serif font-bold text-white italic">
                “Be Inspired.”
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E0A96D]">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">Atelier Heritage</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Bowed Strings</a></li>
              <li><a href="#pipe-organs" className="hover:text-white transition-colors">Pipe Organs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Circular Model</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Archive</a></li>
            </ul>
          </div>

          {/* Hotlines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E0A96D]">
              Direct Contact Lines
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="tel:+2348030814281" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C85A17]" />
                  <span>0803 081 4281</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348036120309" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C85A17]" />
                  <span>0803 612 0309</span>
                </a>
              </li>
              <li>
                <a href="tel:+2347037090335" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C85A17]" />
                  <span>0703 709 0335</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/2348030814281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1.5 border border-white/20 text-white hover:bg-white/10 text-xs font-mono"
                >
                  WhatsApp Direct →
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E0A96D]">
              Atelier Facility
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C85A17] mt-0.5" />
                <span>Akure, Ondo State, Nigeria</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C85A17] mt-0.5" />
                <div className="space-y-0.5">
                  <a href="mailto:zatilsystems@gmail.com" className="block hover:underline">zatilsystems@gmail.com</a>
                  <a href="mailto:zatilgroup@yahoo.com" className="block hover:underline">zatilgroup@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Zatil Group / Zatil Systems. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>African Craftsmanship</span>
            <span>•</span>
            <span>Musical Innovation</span>
            <span>•</span>
            <span>Built to Inspire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
