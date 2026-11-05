import React from 'react';
import { Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0C0A] text-[#8C827A] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#E5A93C] bg-[#78181A] flex items-center justify-center shadow-inner">
                <span className="font-display text-lg font-bold text-[#E5A93C]">B</span>
              </div>
              <span className="font-display text-xl font-bold text-[#FAF6F0]">
                Belmont Tavern
              </span>
            </div>
            <p className="text-xs text-[#C8C2B7] leading-relaxed">
              The ORIGINAL Home of Stretch's famous Chicken Savoy & Shrimp Beeps. Proudly serving Belleville and Northern New Jersey since 1967.
            </p>
            <div className="pt-2 text-xs font-mono text-[#D4972C]">
              Identifies as Women-Owned
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#E5A93C] transition-colors">
                  Heritage & History
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#E5A93C] transition-colors">
                  The Big 3 (Chicken Savoy, Shrimp Beeps, Cavatelli)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E5A93C] transition-colors">
                  Dining Room Menu & Prices
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E5A93C] transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#E5A93C] transition-colors">
                  Hours & Cash Only Policy
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E5A93C] transition-colors">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Cash Notice */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] font-semibold block">
              Service Hours
            </span>
            <div className="text-xs space-y-1.5 text-[#C8C2B7]">
              <p><strong className="text-[#FAF6F0]">Thursday – Sunday:</strong> Opens 5:00 PM</p>
              <p><strong className="text-[#FAF6F0]">Monday – Wednesday:</strong> Closed</p>
            </div>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-[#78181A]/40 border border-[#78181A] text-[11px] font-mono text-[#E5A93C]">
                Strictly Cash Only · No Cards
              </span>
            </div>
          </div>

          {/* Col 4: Contact & Catering */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] font-semibold block">
              Contact & Catering
            </span>
            <div className="text-xs space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4972C] shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Belmont+Tavern+12+Bloomfield+Ave+Belleville+NJ+07109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF6F0] transition-colors"
                >
                  12 Bloomfield Ave, Belleville, NJ 07109
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                <a
                  href="tel:+19737599609"
                  className="text-[#FAF6F0] font-bold hover:text-[#E5A93C] transition-colors font-mono"
                >
                  +1 (973) 759-9609
                </a>
              </p>
              <p className="text-[11px] text-[#8C827A] pt-1">
                For catering, takeout orders, or private parties, call Kim at (973) 759-9609.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left">
            <p className="text-[#8C827A]">
              © 1967–{new Date().getFullYear()} Belmont Tavern. All rights reserved.
            </p>
            <p className="text-[11px] text-[#655E57] mt-1">
              Thank you in loving memory of Chef Helen & Chef Stretch.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-[#C8C2B7] hover:text-[#FAF6F0] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
