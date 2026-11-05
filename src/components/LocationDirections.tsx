import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink, Car, Check, Info } from 'lucide-react';

export const LocationDirections: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#12100E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A93C] mb-3">
            <MapPin className="w-4 h-4" />
            <span>Finding Belmont Tavern</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6F0] mb-4 text-balance">
            Location & Getting Here
          </h2>
          <p className="text-base text-[#C8C2B7] leading-relaxed">
            Conveniently situated on Bloomfield Avenue in Belleville, NJ—just minutes from Newark, Montclair, Nutley, and Route 21.
          </p>
        </div>

        {/* 2-Column Map & Directions Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Essential Contact & Location Details */}
          <div className="lg:col-span-5 bg-[#1A1715] rounded-xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address Block */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4972C]">
                  Physical Address
                </span>
                <p className="font-display text-2xl font-bold text-[#FAF6F0] mt-1 mb-2">
                  12 Bloomfield Ave
                </p>
                <p className="text-sm text-[#C8C2B7]">
                  Belleville, NJ 07109, United States
                </p>
                <div className="mt-2 text-xs font-mono text-[#8C827A]">
                  Plus Code: QRG7+2G Belleville, New Jersey
                </div>
              </div>

              {/* Telephone Block */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4972C]">
                  Telephone (Tap to Call)
                </span>
                <div className="mt-1">
                  <a
                    href="tel:+19737599609"
                    className="font-display text-2xl font-bold text-[#E5A93C] hover:text-[#F3BD56] transition-colors inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (973) 759-9609</span>
                  </a>
                </div>
                <p className="text-xs text-[#8C827A] mt-1">
                  For catering, takeout orders, or private parties ask for Kim.
                </p>
              </div>

              {/* Amenities & Accessibility */}
              <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-[#C8C2B7]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5A93C]" />
                  <span>Wheelchair accessible entrance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5A93C]" />
                  <span>Street parking & neighborhood parking available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5A93C]" />
                  <span>Dine-in, Curbside pickup & Takeout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5A93C]" />
                  <span>ATM located within walking distance</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Belmont+Tavern+12+Bloomfield+Ave+Belleville+NJ+07109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#141210] bg-[#E5A93C] hover:bg-[#F3BD56] rounded shadow transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
              </a>

              <a
                href="tel:+19737599609"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#FAF6F0] bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4972C]" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Direction & Neighborhood Context Card */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-white/10 bg-[#1A1715] flex flex-col justify-between shadow-xl">
            {/* Visual Map Backdrop */}
            <div className="relative aspect-[16/9] lg:aspect-auto lg:flex-1 bg-[#141210] overflow-hidden min-h-[260px]">
              {/* Stylized Dark Mode Map View Graphic */}
              <div className="absolute inset-0 bg-[#141210] flex items-center justify-center">
                {/* SVG Map Lines */}
                <svg className="w-full h-full opacity-30" viewBox="0 0 600 350" fill="none">
                  <path d="M0 120 Q 250 140 600 110" stroke="#E5A93C" strokeWidth="6" />
                  <path d="M150 0 L 190 350" stroke="#78181A" strokeWidth="4" />
                  <path d="M380 0 L 360 350" stroke="#C8C2B7" strokeWidth="3" />
                  <path d="M0 260 L 600 240" stroke="#C8C2B7" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="320" cy="125" r="40" fill="#E5A93C" opacity="0.15" />
                  <circle cx="320" cy="125" r="8" fill="#E5A93C" />
                </svg>

                {/* Animated Pin Marker Overlay */}
                <div className="absolute z-10 flex flex-col items-center">
                  <div className="px-4 py-2 rounded-lg bg-[#78181A] border border-[#E5A93C] text-[#FAF6F0] text-xs font-display font-bold shadow-2xl mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-ping" />
                    <span>Belmont Tavern</span>
                  </div>
                  <div className="w-3 h-3 bg-[#E5A93C] rotate-45 transform origin-center shadow-lg" />
                  <div className="w-8 h-2 bg-black/60 rounded-full blur-sm mt-1" />
                </div>
              </div>

              {/* Map Action Overlay Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Belmont+Tavern+12+Bloomfield+Ave+Belleville+NJ+07109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-[#E5A93C] text-xs font-mono font-medium border border-[#E5A93C]/40 backdrop-blur-md transition-colors shadow-lg"
                >
                  <span>Interactive Map Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Neighborhood Transit & Proximity Banner */}
            <div className="p-6 bg-[#161311] border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-mono text-[#D4972C] block mb-1">Route 21 & GSP</span>
                  <p className="text-[#8C827A]">Easy access from Garden State Parkway & Route 21.</p>
                </div>
                <div>
                  <span className="font-mono text-[#D4972C] block mb-1">Valley Stream Area</span>
                  <p className="text-[#8C827A]">Situated at the historic Belleville / Valley Stream crossroads.</p>
                </div>
                <div>
                  <span className="font-mono text-[#D4972C] block mb-1">Minutes from Newark</span>
                  <p className="text-[#8C827A]">Just a short drive north of Newark and Montclair.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
