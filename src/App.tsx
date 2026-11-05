import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutHeritage } from './components/AboutHeritage';
import { SignaturesSpotlight } from './components/SignaturesSpotlight';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitHours } from './components/VisitHours';
import { LocationDirections } from './components/LocationDirections';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#12100E] text-[#F5F2EB] selection:bg-[#E5A93C] selection:text-[#141210] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* 1. Hero with Bespoke 1080p Looping Video & Parallax */}
        <Hero />

        {/* 2. Heritage & 1967 Story */}
        <AboutHeritage />

        {/* 3. The Big 3 Signatures Spotlight */}
        <SignaturesSpotlight />

        {/* 4. Full Verified Dining Room Menu & Prices */}
        <MenuSection />

        {/* 5. Verbatim Diner Reviews Highlights */}
        <ReviewsSection />

        {/* 6. Hours, Cash Only Policy & Tavern Customs */}
        <VisitHours />

        {/* 7. Location, Google Maps Directions & Transit */}
        <LocationDirections />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
