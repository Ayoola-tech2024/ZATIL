"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ZatilLogo from "./ZatilLogo";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Atelier & Story", href: "#about" },
    { name: "Instruments", href: "#products" },
    { name: "Pipe Organ Façades", href: "#pipe-organs" },
    { name: "Capabilities", href: "#services" },
    { name: "Circular Economy", href: "#impact" },
    { name: "Selected Works", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#1E1915]/10 shadow-sm py-3.5"
          : "bg-[#FAF6F0] border-b border-[#1E1915]/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="focus:outline-none flex items-center gap-3 group">
            <ZatilLogo variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4A3E36] hover:text-[#C85A17] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+2348030814281"
              className="text-xs font-semibold tracking-wider text-[#6A5D52] hover:text-[#1E1915] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C85A17]" />
              <span>0803 081 4281</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-[#1E1915] text-xs font-bold uppercase tracking-[0.15em] text-[#1E1915] hover:bg-[#1E1915] hover:text-[#FAF6F0] transition-all duration-200"
            >
              <span>Commission a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#1E1915] text-[#FAF6F0]"
            >
              Commission
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1915] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#1E1915]/15 px-6 pt-5 pb-8 space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold uppercase tracking-wider text-[#1E1915] border-b border-[#1E1915]/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+2348030814281"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#F3ECE2] text-[#1E1915] font-semibold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#C85A17]" />
              <span>Direct Hotline: 0803 081 4281</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 bg-[#1E1915] text-[#FAF6F0] font-bold text-xs uppercase tracking-[0.15em]"
            >
              Commission a Project / Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
