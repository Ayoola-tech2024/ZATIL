import React from "react";
import ZatilLogo from "./ZatilLogo";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#0A0A0A] pt-20 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-100">
          {/* Col 1 */}
          <div className="lg:col-span-4 space-y-4">
            <ZatilLogo variant="light" />
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm">
              Nigerian-owned musical instrument manufacturing and acoustic infrastructure company based in Akure, Ondo State. Connecting African tonewood craftsmanship with modern engineering.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F26522] block">
                Official Motto
              </span>
              <p className="text-base font-bold text-[#0A0A0A] italic">
                “Be Inspired.”
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li><a href="#about" className="hover:text-black transition-colors">Atelier Story</a></li>
              <li><a href="#instruments" className="hover:text-black transition-colors">String Instruments</a></li>
              <li><a href="#pipe-organs" className="hover:text-black transition-colors">Pipe Organs</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Capabilities</a></li>
              <li><a href="#impact" className="hover:text-black transition-colors">Circular Model</a></li>
              <li><a href="#archive" className="hover:text-black transition-colors">Archive</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Direct Hotlines
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-700">
              <li>
                <a href="tel:+2348030814281" className="flex items-center gap-2 hover:text-[#F26522] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>0803 081 4281</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348036120309" className="flex items-center gap-2 hover:text-[#F26522] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>0803 612 0309</span>
                </a>
              </li>
              <li>
                <a href="tel:+2347037090335" className="flex items-center gap-2 hover:text-[#F26522] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>0703 709 0335</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/2348030814281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 text-xs font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Akure Facility
            </h4>
            <div className="space-y-2 text-xs text-neutral-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F26522] mt-0.5" />
                <span>Akure, Ondo State, Nigeria</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F26522] mt-0.5" />
                <div className="space-y-0.5">
                  <a href="mailto:zatilsystems@gmail.com" className="block hover:underline">zatilsystems@gmail.com</a>
                  <a href="mailto:zatilgroup@yahoo.com" className="block hover:underline">zatilgroup@yahoo.com</a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-neutral-400 block mb-1 uppercase tracking-wider">Social Channels:</span>
              <div className="flex gap-2 text-xs text-neutral-600">
                <span className="bg-neutral-100 px-2 py-1 rounded">Facebook: Zatil Group</span>
                <span className="bg-neutral-100 px-2 py-1 rounded">IG: @zatilgroup</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-mono">
          <p>© {new Date().getFullYear()} Zatil Group / Zatil Systems. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>African Craftsmanship</span>
            <span>•</span>
            <span className="text-[#F26522]">Musical Innovation</span>
            <span>•</span>
            <span>Built to Inspire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
