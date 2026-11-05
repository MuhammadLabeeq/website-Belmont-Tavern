import React from 'react';
import { ChefHat, History, Sparkles, HeartHandshake } from 'lucide-react';

export const AboutHeritage: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#161311] relative overflow-hidden border-t border-b border-white/5">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#78181A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4972C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4972C] mb-3">
            <History className="w-4 h-4" />
            <span>Since 1967 · Belleville Landmark</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6F0] mb-4 text-balance">
            “Nothing Has Changed Since 1967 and We Like It Like That”
          </h2>
          <p className="text-base sm:text-lg text-[#C8C2B7] leading-relaxed">
            For nearly six decades, Belmont Tavern on Bloomfield Avenue has remained an unyielding temple of authentic North Jersey Italian family dining.
          </p>
        </div>

        {/* 2-Column Content + Media Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heritage Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#E0D9CC] text-base leading-relaxed">
            <p>
              Walking up to <strong className="text-[#FAF6F0] font-semibold">12 Bloomfield Avenue</strong>, you’re greeted by the unmistakable red brick facade, the glowing golden lettering of the vintage hanging sign, and the iconic circular porthole windows dressed in deep green scalloped awnings.
            </p>

            <p>
              Inside, the clock stopped in 1967. Dark wood-paneled walls lined with decades of framed boxing legends, sports icons, and beloved family portraits; warm amber pendant lamps casting a glow over tables dressed in red-and-white checkered cloths; and the unmistakable aroma of garlic, sizzling vinegar, and Sunday gravy escaping from the kitchen.
            </p>

            {/* In Memoriam Callout */}
            <div className="p-6 rounded-lg bg-[#78181A]/20 border border-[#D4972C]/30 my-8">
              <div className="flex items-start gap-3">
                <ChefHat className="w-6 h-6 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xl font-bold text-[#FAF6F0] mb-1">
                    In Loving Memory of Chef Helen & Chef Stretch
                  </h3>
                  <p className="text-sm text-[#C8C2B7] leading-relaxed">
                    It was right here that Chef Stretch created <strong className="text-[#E5A93C]">Chicken Savoy</strong>—the legendary bone-in dish with its crisp skin and pungent red wine vinegar glaze that went on to become Northern New Jersey’s unofficial state dish. Alongside Chef Helen’s hearty sugo and Chef Di Giacomo’s seafood, their timeless recipes remain strictly unaltered.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Today, proudly operating as a <strong className="text-[#FAF6F0] font-semibold">women-owned establishment</strong>, Belmont Tavern is managed with that same fierce neighborhood pride. There are no corporate shortcuts, no card readers, and no reservations over the internet. You come with cash in hand, enjoy a drink at the historic front bar while you wait, and sit down to platters meant to be shared family style.
            </p>

            {/* Unboxed Metadata Trust Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#D4972C]">
              <span>Established 1967</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Women-Owned & Operated</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Belleville, NJ</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Strictly Cash Only</span>
            </div>
          </div>

          {/* Right Column: Visual Heritage Collage */}
          <div className="lg:col-span-5 space-y-6">
            {/* Exterior Card */}
            <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C1917]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/belmont-exterior.jpg"
                  alt="Belmont Tavern exterior at 12 Bloomfield Ave with circular porthole windows and awning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="flex items-center justify-between text-xs text-[#D4972C] font-mono mb-1">
                  <span>12 Bloomfield Ave</span>
                  <span>Est. 1967</span>
                </div>
                <p className="font-display text-sm font-semibold text-[#FAF6F0]">
                  Original Red Brick Facade & Porthole Windows
                </p>
              </div>
            </div>

            {/* Interior Dining Room Card */}
            <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C1917]">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/images/tavern-interior.jpg"
                  alt="Belmont Tavern historic wood paneled dining room with checkered tablecloths and patrons"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="flex items-center justify-between text-xs text-[#D4972C] font-mono mb-1">
                  <span>Classic Tavern Digs</span>
                  <span>The Soprano Feel</span>
                </div>
                <p className="font-display text-sm font-semibold text-[#FAF6F0]">
                  Throwback Wood Paneling & Checkered Tables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
