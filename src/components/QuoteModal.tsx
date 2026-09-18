"use client";

import React, { useState, useEffect } from "react";
import { X, MessageSquare, Send, Phone, CheckCircle2, Music, Building2, Sparkles } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService = "",
}: QuoteModalProps) {
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [service, setService] = useState(preselectedService || "Pipe Organ Façade Installation");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*NEW INQUIRY FOR ZATIL GROUP*\n\n` +
      `*Full Name:* ${fullName || "Not specified"}\n` +
      `*Church/Institution:* ${orgName || "Individual"}\n` +
      `*Location:* ${location || "Nigeria"}\n` +
      `*Contact Phone:* ${phone || "Not specified"}\n` +
      `*Required Service/Product:* ${service}\n` +
      `*Project Details:* ${details || "Standard Inquiry"}\n\n` +
      `_Sent from zatilgroup.com web consultation engine_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2348030814281?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Project Quote Request: ${service} - ${orgName || fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nInstitution: ${orgName}\nLocation: ${location}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`
    );
    window.open(`mailto:zatilsystems@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-zatil-dark text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-xl pointer-events-none" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] block mb-1">
              Direct Consultation
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              Request a Project Quote
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Connect directly with our master craftsmen in Akure for pricing, technical drawings, and timelines.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-lime-100 text-[#7CB342] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-display text-slate-900">
              Inquiry Dispatched!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you for reaching out to Zatil Group. Our technical team will review your project requirements and connect with you shortly.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSend} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Pastor Emmanuel / Dr. Joy"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Church / Institution / Organization
                </label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. St. Paul Cathedral / Private Studio"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0803 081 4281"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Location (City / State) *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Akure, Lagos, Delta, Abuja"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Select Service or Product *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
              >
                <option value="Pipe Organ Façade Installation">Pipe Organ Façade Installation (Church / Cathedral)</option>
                <option value="Handcrafted Violin / Viola / Cello Purchase">Stringed Instrument Purchase (Violin, Viola, Cello, Bass)</option>
                <option value="Audio Speakers & Sound Reinforcement">Audio Speakers & Sound Reinforcement Systems</option>
                <option value="Luthier Repair / Bow Rehairing / Maintenance">Luthier Repair / Maintenance / Bow Re-hairing</option>
                <option value="Instrument Refurbishment & Restoration">Instrument Refurbishment & Waste-to-Resource Restoration</option>
                <option value="Music & Technical Training Consultation">Music & Technical Luthier Training</option>
                <option value="Custom Architectural Fabrication">Custom Architectural CAD Fabrication</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Project Details / Dimensions / Specific Requests
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe your sanctuary dimensions, organ console model (e.g. Viscount), or instrument preferences..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Connect on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Official Email</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
