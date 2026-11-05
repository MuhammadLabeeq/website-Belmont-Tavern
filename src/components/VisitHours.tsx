import React from 'react';
import { Clock, Banknote, Users, Wine, Calendar, AlertTriangle, ShieldCheck } from 'lucide-react';

export const VisitHours: React.FC = () => {
  const hoursList = [
    { day: 'Thursday', hours: 'Opens 5:00 PM', status: 'Dinner Service' },
    { day: 'Friday', hours: 'Opens 5:00 PM', status: 'Dinner Service' },
    { day: 'Saturday', hours: 'Opens 5:00 PM', status: 'Dinner Service' },
    { day: 'Sunday', hours: 'Opens 5:00 PM', status: 'Dinner Service' },
    { day: 'Monday', hours: 'Closed', status: 'Rest & Prep' },
    { day: 'Tuesday', hours: 'Closed', status: 'Rest & Prep' },
    { day: 'Wednesday', hours: 'Closed', status: 'Rest & Prep' },
  ];

  return (
    <section id="visit" className="py-20 lg:py-28 bg-[#161311] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4972C] mb-3">
            <Clock className="w-4 h-4" />
            <span>Plan Your Evening</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6F0] mb-4 text-balance">
            Hours & Belmont Tavern Customs
          </h2>
          <p className="text-base text-[#C8C2B7] leading-relaxed">
            Visiting Belmont Tavern is like stepping into a cherished 1967 family tradition. Here is everything you need to know before you arrive.
          </p>
        </div>

        {/* 2-Column: Hours Schedule & Custom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Hours Card */}
          <div className="lg:col-span-5 bg-[#1A1715] rounded-xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4972C]">
                  Weekly Schedule
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FAF6F0]">
                  Dinner Hours
                </h3>
              </div>
              <div className="px-3 py-1 rounded bg-[#78181A]/40 border border-[#E5A93C]/30 text-xs font-mono text-[#E5A93C]">
                Opens 5 PM
              </div>
            </div>

            {/* Days Table */}
            <div className="space-y-3 font-mono text-sm">
              {hoursList.map((item) => {
                const isClosed = item.hours === 'Closed';
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-2 px-3 rounded ${
                      isClosed ? 'text-[#8C827A] bg-transparent' : 'text-[#FAF6F0] bg-white/5'
                    }`}
                  >
                    <span className="font-sans font-medium">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#8C827A] hidden sm:inline">
                        {item.status}
                      </span>
                      <span
                        className={`font-semibold tabular-nums ${
                          isClosed ? 'text-[#8C827A]' : 'text-[#E5A93C]'
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Holiday Notice */}
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-[#C8C2B7] flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#D4972C] shrink-0 mt-0.5" />
              <span>
                Please check for holiday updates (e.g., 4th of July observance). When in doubt, call ahead.
              </span>
            </div>
          </div>

          {/* Right Column: 4 Custom Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Cash Only */}
            <div className="p-6 rounded-xl bg-[#78181A]/20 border border-[#78181A] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#78181A] text-[#E5A93C] flex items-center justify-center mb-4 shadow">
                  <Banknote className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#FAF6F0] mb-2">
                  1. Strictly Cash Only
                </h4>
                <p className="text-xs text-[#C8C2B7] leading-relaxed">
                  We do not take cards under any circumstances. Hit the ATM on your way over so you're ready when the check arrives.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#E5A93C]">
                Atm steps away on Bloomfield Ave
              </div>
            </div>

            {/* 2. Usually A Wait */}
            <div className="p-6 rounded-xl bg-[#1A1715] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1C1917] text-[#D4972C] flex items-center justify-center mb-4 border border-white/10 shadow">
                  <Wine className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#FAF6F0] mb-2">
                  2. Usually A Wait
                </h4>
                <p className="text-xs text-[#C8C2B7] leading-relaxed">
                  It’s a Belleville gold mine with high demand. Have a classic martini, cold beer, or wine at the historic front bar while your table is set.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#D4972C]">
                Historic full bar onsite
              </div>
            </div>

            {/* 3. Family Style Dining */}
            <div className="p-6 rounded-xl bg-[#1A1715] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1C1917] text-[#D4972C] flex items-center justify-center mb-4 border border-white/10 shadow">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#FAF6F0] mb-2">
                  3. Family Style Platters
                </h4>
                <p className="text-xs text-[#C8C2B7] leading-relaxed">
                  Dishes are meant to be shared in the center of the table. Every dinner includes our complimentary fresh escarole salad.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#D4972C]">
                Generous traditional portions
              </div>
            </div>

            {/* 4. Reservations & Parties */}
            <div className="p-6 rounded-xl bg-[#1A1715] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1C3D2E] text-[#E5A93C] flex items-center justify-center mb-4 shadow">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#FAF6F0] mb-2">
                  4. Catering & Parties
                </h4>
                <p className="text-xs text-[#C8C2B7] leading-relaxed">
                  Private dining room, takeout, and custom catering available. Call Kim directly at (973) 759-9609 for arrangements.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-[#E5A93C]">
                Call Kim at (973) 759-9609
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
