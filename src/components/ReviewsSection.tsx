import React from 'react';
import { VERBATIM_REVIEWS } from '../data/reviewsData';
import { Star, MessageSquareQuote, ExternalLink, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#12100E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A93C] mb-3">
              <Star className="w-4 h-4 fill-[#E5A93C]" />
              <span>Verbatim Diner Reviews</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6F0] text-balance">
              What Loyal Locals & Visitors Say
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1A1715] border border-white/10 shrink-0">
            <div className="text-3xl font-display font-bold text-[#E5A93C] tabular-nums">
              4.5
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#E5A93C] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? 'fill-[#E5A93C]' : 'fill-[#E5A93C]/40 text-[#E5A93C]'
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs text-[#C8C2B7] font-mono">
                844+ Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERBATIM_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-[#1A1715] border border-white/10 hover:border-[#D4972C]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#FAF6F0]">
                      {review.author}
                    </h3>
                    <div className="text-xs text-[#D4972C] font-mono">
                      {review.badge}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#E5A93C]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5A93C]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <MessageSquareQuote className="w-8 h-8 text-white/5 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-sm text-[#E0D9CC] leading-relaxed relative z-10 italic">
                    “{review.quote}”
                  </p>
                </div>
              </div>

              {/* Tag / Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8C827A] font-mono">
                <span className="text-[#E5A93C] font-semibold">{review.highlightTag}</span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Callout Strip */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Belmont+Tavern+12+Bloomfield+Ave+Belleville+NJ+07109"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4972C] hover:text-[#E5A93C] transition-colors"
          >
            <span>Read all 844 reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
