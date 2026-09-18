"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstrumentStudio from "@/components/InstrumentStudio";
import OrganMilestone from "@/components/OrganMilestone";
import BentoServices from "@/components/BentoServices";
import ImpactCircular from "@/components/ImpactCircular";
import PhotoGallery from "@/components/PhotoGallery";
import CompanyStory from "@/components/CompanyStory";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService("Pipe Organ Façade Installation");
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A] overflow-x-hidden">
      {/* Minimalist Top Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Hero Section with Integrated Metrics Ledger */}
      <Hero onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Interactive Instrument Studio (Tabbed Switcher, Zero Box Cards) */}
      <InstrumentStudio onOpenQuoteModal={(prod) => handleOpenQuote(prod)} />

      {/* 51st Pipe Organ Milestone & Monograph Feature */}
      <OrganMilestone onOpenQuoteModal={() => handleOpenQuote("Pipe Organ Façade Installation")} />

      {/* Manufacturing Capabilities & Practice (Numbered Editorial List) */}
      <BentoServices onOpenQuoteModal={(svc) => handleOpenQuote(svc)} />

      {/* Sustainability, Circular Economy & Multiplier */}
      <ImpactCircular />

      {/* Project Archive (Clean Index Rows) */}
      <PhotoGallery />

      {/* Heritage & Leadership Timeline */}
      <CompanyStory />

      {/* Lead Generation & Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
