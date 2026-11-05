import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { Phone, Search, Banknote, Sparkles, AlertCircle, ChefHat } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all'
          ? true
          : activeCategory === 'signatures'
          ? item.isPopular || item.category === 'signatures'
          : item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#161311] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#78181A]/30 border border-[#D4972C]/40 rounded text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A93C] mb-4">
            <span>Verified Authentic Menu & Prices</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6F0] mb-4 text-balance">
            Belmont Tavern Dining Room Menu
          </h2>
          <p className="text-sm sm:text-base text-[#C8C2B7] leading-relaxed">
            Every dish prepared to order using recipes passed down through generations. Prices reflect our dine-in and takeout menu.
          </p>
        </div>

        {/* CASH ONLY & CATERING NOTICE BANNER */}
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Cash Only Card */}
          <div className="p-5 rounded-xl bg-[#78181A]/20 border border-[#78181A] flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#78181A] text-[#E5A93C] flex items-center justify-center shrink-0 shadow-inner">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#E5A93C] font-semibold">
                Payment Policy
              </div>
              <h3 className="font-display text-lg font-bold text-[#FAF6F0] mb-1">
                Credit Cards Not Accepted · Cash Only
              </h3>
              <p className="text-xs text-[#C8C2B7] leading-relaxed">
                We have proudly operated as a cash-only tavern since 1967. Please plan accordingly before your visit.
              </p>
            </div>
          </div>

          {/* Catering & Takeout Card */}
          <div className="p-5 rounded-xl bg-[#1C1917] border border-[#D4972C]/30 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1C3D2E] text-[#E5A93C] flex items-center justify-center shrink-0 shadow-inner">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#D4972C] font-semibold">
                Catering & Take-Out
              </div>
              <h3 className="font-display text-lg font-bold text-[#FAF6F0] mb-1">
                Call Kim at (973) 759-9609
              </h3>
              <p className="text-xs text-[#C8C2B7] leading-relaxed">
                For large party catering, family takeout orders, and private celebrations, speak directly with Kim.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs (Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#1A1715] border border-white/10 rounded-xl w-full md:w-auto">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#E5A93C] text-[#141210] font-bold shadow-sm'
                      : 'text-[#C8C2B7] hover:text-[#FAF6F0] hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8C827A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1715] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-[#FAF6F0] placeholder-[#8C827A] focus:outline-none focus:border-[#E5A93C] transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-4xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#1A1715] rounded-xl border border-white/5">
              <p className="text-sm text-[#C8C2B7] mb-2">No dishes found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs text-[#E5A93C] hover:underline"
              >
                Reset menu filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-[#1A1715] border border-white/10 hover:border-[#D4972C]/40 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base sm:text-lg font-bold text-[#FAF6F0] group-hover:text-[#E5A93C] transition-colors">
                          {item.name}
                        </h3>
                        {item.isPopular && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5A93C] bg-[#78181A]/40 border border-[#E5A93C]/30 px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-base font-bold text-[#E5A93C] tabular-nums shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {item.description && (
                      <p className="text-xs text-[#C8C2B7] leading-relaxed mb-3">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {item.notes && (
                    <div className="text-[11px] font-mono text-[#D4972C] flex items-center gap-1.5 pt-2 border-t border-white/5">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.notes}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stovetop Espresso Detail */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-xl bg-[#141210] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#78181A]/40 border border-[#E5A93C]/30 text-[#E5A93C] flex items-center justify-center font-display text-xl font-bold shrink-0">
              ☕
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#FAF6F0]">
                Belmont Stovetop Espresso Pots
              </h3>
              <p className="text-xs text-[#C8C2B7] leading-relaxed">
                Brewed in authentic Italian moka pots and served directly to your table with fresh lemon twists.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono shrink-0">
            <div className="text-center px-3 py-1.5 rounded bg-white/5 border border-white/10">
              <span className="block text-[#8C827A]">Medium Pot</span>
              <span className="font-bold text-[#FAF6F0] text-sm tabular-nums">$20</span>
            </div>
            <div className="text-center px-3 py-1.5 rounded bg-white/5 border border-white/10">
              <span className="block text-[#8C827A]">Large Pot</span>
              <span className="font-bold text-[#FAF6F0] text-sm tabular-nums">$25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
