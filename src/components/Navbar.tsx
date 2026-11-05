import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141210]/95 backdrop-blur-md border-b border-[#D4972C]/20 shadow-lg py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="Belmont Tavern Home"
          >
            <div className="w-10 h-10 rounded-full border border-[#E5A93C] bg-[#78181A] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <span className="font-display text-xl font-bold text-[#E5A93C]">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2EB] group-hover:text-[#E5A93C] transition-colors leading-tight">
                Belmont Tavern
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4972C] font-mono">
                Belleville, NJ · Est. 1967
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#C8C2B7]">
            <a
              href="#about"
              className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0"
            >
              Heritage
            </a>
            <a
              href="#signatures"
              className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0"
            >
              The Big 3
            </a>
            <a
              href="#menu"
              className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0"
            >
              Menu
            </a>
            <a
              href="#reviews"
              className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0"
            >
              Reviews
            </a>
            <a
              href="#visit"
              className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0"
            >
              Hours & Customs
            </a>
            <a
              href="#location"
              className="hover:text-[#E5A93C] transition-colors whitespace-nowrap shrink-0"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+19737599609"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#141210] bg-[#E5A93C] hover:bg-[#F3BD56] active:bg-[#D4972C] rounded shadow transition-all duration-150 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(973) 759-9609</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+19737599609"
              className="p-2 text-[#E5A93C] bg-[#78181A]/80 border border-[#E5A93C]/30 rounded"
              aria-label="Call Belmont Tavern"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F2EB] hover:text-[#E5A93C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#141210]/98 border-b border-[#D4972C]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 text-base font-medium text-[#C8C2B7]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-white/5 hover:text-[#E5A93C]"
            >
              Heritage & History
            </a>
            <a
              href="#signatures"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-white/5 hover:text-[#E5A93C]"
            >
              The Big 3 (Chicken Savoy, Shrimp Beeps, Cavatelli)
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-white/5 hover:text-[#E5A93C]"
            >
              Full Menu & Prices
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-white/5 hover:text-[#E5A93C]"
            >
              Guest Reviews
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-white/5 hover:text-[#E5A93C]"
            >
              Hours, Cash Only & Wait Policy
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-white/5 hover:text-[#E5A93C]"
            >
              Location & Directions
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+19737599609"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-[#141210] bg-[#E5A93C] rounded shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Tap to Call (973) 759-9609</span>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Belmont+Tavern+12+Bloomfield+Ave+Belleville+NJ+07109"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#F5F2EB] bg-white/5 hover:bg-white/10 border border-white/10 rounded"
            >
              <MapPin className="w-4 h-4 text-[#D4972C]" />
              <span>Directions in Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
