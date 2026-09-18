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
    { name: "About", href: "#about" },
    { name: "Instruments", href: "#instruments" },
    { name: "Pipe Organs", href: "#pipe-organs" },
    { name: "Services", href: "#services" },
    { name: "Impact", href: "#impact" },
    { name: "Archive", href: "#archive" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? "border-b border-neutral-200 py-3 shadow-sm" : "border-b border-neutral-100 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="focus:outline-none">
            <ZatilLogo variant="light" />
          </Link>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+2348030814281"
              className="text-xs font-semibold tracking-wider text-neutral-500 hover:text-black transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#F26522]" />
              <span>0803 081 4281</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-sm"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black text-white"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-neutral-800 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <a
              href="tel:+2348030814281"
              className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#F26522]" />
              <span>Call Akure: 0803 081 4281</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 bg-[#F26522] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow"
            >
              Request a Project Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
