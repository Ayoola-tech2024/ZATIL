"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import OrganMilestone from "@/components/OrganMilestone";
import BentoServices from "@/components/BentoServices";
import ProductCatalog from "@/components/ProductCatalog";
import WhoWeServe from "@/components/WhoWeServe";
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
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 overflow-x-hidden">
      {/* Top Fixed Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Key Metrics & Statistics Bar */}
      <StatsCounter />

      {/* Flagship Specialization: Pipe Organs & 51st Milestone Showcase */}
      <OrganMilestone onOpenQuoteModal={() => handleOpenQuote("Pipe Organ Façade Installation")} />

      {/* Bento Grid Services & Craft Capabilities */}
      <BentoServices onOpenQuoteModal={(svc) => handleOpenQuote(svc)} />

      {/* Product Catalog & ZUSP (Zatil Strings Unique Selling Points) */}
      <ProductCatalog onOpenQuoteModal={(prod) => handleOpenQuote(prod)} />

      {/* Who We Serve & Target Sectors */}
      <WhoWeServe />

      {/* Sustainability, Circular Economy & Socioeconomic Impact */}
      <ImpactCircular />

      {/* Craftsmanship Photo Gallery & Proof of Work */}
      <PhotoGallery />

      {/* Company Story, Timeline & Leadership Team */}
      <CompanyStory />

      {/* Master Interactive Quote / Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />

      {/* Footer & Contact Channels */}
      <Footer />
    </main>
  );
}
