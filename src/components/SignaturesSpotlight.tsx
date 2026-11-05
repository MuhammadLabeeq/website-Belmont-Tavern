import React from 'react';
import { Utensils, Star, Flame, Sparkles } from 'lucide-react';

export const SignaturesSpotlight: React.FC = () => {
  const signatures = [
    {
      id: 'chicken-savoy',
      name: 'Stretch’s Famous "Chicken Savoy"',
      subtitle: 'The Original North Jersey Culinary Icon',
      price: '$24',
      image: '/images/chicken-savoy.jpg',
      badge: 'Created Right Here',
      description:
        'The legendary dish invented at Belmont Tavern by Chef Stretch. Tender bone-in chicken cut into small pieces, roasted golden-crisp with sweet garlic cloves, fresh oregano, pecorino Romano, and a sizzled red wine vinegar pan reduction.',
      highlights: ['Original Recipe Since 1967', 'Roasted Sizzling Bone-In', 'Red Wine Vinegar Glaze'],
    },
    {
      id: 'shrimp-beeps',
      name: 'Belmont’s Famous Shrimp "Beeps"',
      subtitle: 'Fiery & Fragrant Tavern Seafood',
      price: '$19',
      image: '/images/shrimp-beeps.jpg',
      badge: 'House Specialty',
      description:
        'Plump, tender jumbo shrimp sautéed and simmered in Belmont’s signature spicy marinara pepper sauce with garlic and extra virgin olive oil. Served piping hot—crusty Italian bread is essential for dipping.',
      highlights: ['Spicy Pepper Marinara', 'Jumbo Sautéed Shrimp', 'Crusty Bread Essential'],
    },
    {
      id: 'cavatelli-pot-cheese',
      name: 'Cavatelli with Pot Cheese',
      subtitle: 'Chef Special Ricotta Pasta',
      price: '$21',
      image: '/images/cavatelli-pot-cheese.jpg',
      badge: 'Chef Special',
      description:
        'Handcrafted rolled ricotta cavatelli pasta folded with rich homemade tomato marinara and generous dollops of fresh, fluffy pot cheese (sweet whole-milk ricotta) and torn fresh basil.',
      highlights: ['Fresh Pot Cheese (Ricotta)', 'Slow-Simmered Sugo', 'Handcrafted Pasta'],
    },
  ];

  return (
    <section id="signatures" className="py-20 lg:py-28 bg-[#12100E] relative overflow-hidden">
      {/* Decorative accent banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A93C] mb-3">
              <Flame className="w-4 h-4 text-[#D4972C]" />
              <span>The Big Three</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6F0] text-balance">
              The Legendary House Signatures
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#C8C2B7] leading-relaxed">
            People travel from all over New Jersey, New York, and beyond for these three untouchable classics. If it’s your first visit, this is where you begin.
          </p>
        </div>

        {/* 3-Column Dish Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatures.map((dish) => (
            <article
              key={dish.id}
              className="group flex flex-col bg-[#1A1715] rounded-xl overflow-hidden border border-white/10 hover:border-[#D4972C]/40 transition-all duration-300 shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent opacity-80" />
                
                {/* Subtle tag */}
                <div className="absolute top-3 left-3 bg-[#78181A]/90 backdrop-blur-sm border border-[#E5A93C]/40 text-[#E5A93C] px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded">
                  {dish.badge}
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-[#D4972C]/40 text-[#FAF6F0] px-3 py-1 font-mono text-base font-bold tabular-nums rounded">
                  {dish.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAF6F0] mb-1 group-hover:text-[#E5A93C] transition-colors">
                    {dish.name}
                  </h3>
                  <div className="text-xs text-[#D4972C] font-mono uppercase tracking-wider mb-3">
                    {dish.subtitle}
                  </div>
                  <p className="text-sm text-[#C8C2B7] leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* Dish Highlights */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs text-[#E0D9CC]/80 font-mono">
                  {dish.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#E5A93C]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Complimentary Escarole Salad Note */}
        <div className="mt-12 p-4 rounded-lg bg-[#78181A]/15 border border-[#D4972C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1C3D2E] text-[#E5A93C] flex items-center justify-center font-bold text-sm shrink-0">
              ✓
            </div>
            <div>
              <span className="font-display font-bold text-[#FAF6F0] text-sm sm:text-base">
                “Escarole Salad served complimentary with all Dinners”
              </span>
              <p className="text-xs text-[#C8C2B7]">
                A Belmont Tavern tradition that has accompanied every family dinner since 1967.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#E5A93C] shrink-0">
            Included with Entrées
          </span>
        </div>
      </div>
    </section>
  );
};
