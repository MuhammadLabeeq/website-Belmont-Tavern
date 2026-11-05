import React, { useState, useRef, useEffect } from 'react';
import { Phone, MapPin, Volume2, VolumeX, Clock, Star, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Optimized scroll listener using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Parallax transform calculations (clamped for safety)
  const bgTransform = reducedMotion ? 'none' : `translate3d(0, ${Math.min(scrollY * 0.28, 180)}px, 0)`;
  const glowTransform = reducedMotion ? 'none' : `translate3d(0, ${Math.min(scrollY * 0.15, 100)}px, 0)`;
  const textTransform = reducedMotion ? 'none' : `translate3d(0, ${Math.min(scrollY * -0.04, 40)}px, 0)`;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Parallax Layer 1: Bespoke 1080p Cinematic Looping Video */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none will-change-transform"
        style={{ transform: bgTransform }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/belmont_hero_poster.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
          aria-hidden="true"
        >
          <source src="/videos/belmont_hero_cinematic.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/videos/belmont_hero_poster.jpg"
            alt="Belmont Tavern historic exterior on Bloomfield Avenue"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Parallax Layer 2: Measured Scrim & Ambient Warm Tavern Glow */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ transform: glowTransform }}
      >
        {/* Cinematic gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#12100E]/40 to-[#12100E]/90" />
        {/* Subtle amber tavern sign glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#E5A93C]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Parallax Layer 3: Foreground Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform"
        style={{ transform: textTransform }}
      >
        {/* Vintage Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#78181A]/80 border border-[#E5A93C]/40 rounded text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A93C] mb-6 shadow-md">
          <span>Est. 1967</span>
          <span aria-hidden="true">·</span>
          <span>12 Bloomfield Ave, Belleville, NJ</span>
          <span aria-hidden="true">·</span>
          <span>Cash Only</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF6F0] leading-[1.08] mb-6 drop-shadow-lg text-balance">
          The <span className="text-[#E5A93C] italic font-normal">Original</span> Home of Chicken Savoy & Shrimp Beeps
        </h1>

        {/* Editorial Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E0D9CC] leading-relaxed mb-8 drop-shadow">
          Nothing has changed since 1967. Iconic red brick, circular porthole windows, family-style Italian cooking in memory of Chef Stretch and Chef Helen, and red-and-white checkered tables.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <a
            href="tel:+19737599609"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#141210] bg-[#E5A93C] hover:bg-[#F5BC58] active:bg-[#D4972C] rounded shadow-xl hover:shadow-[#E5A93C]/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>Call (973) 759-9609</span>
          </a>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Belmont+Tavern+12+Bloomfield+Ave+Belleville+NJ+07109"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF6F0] bg-[#1C1917]/80 hover:bg-[#1C1917] border border-[#E5A93C]/40 hover:border-[#E5A93C] rounded shadow transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-[#E5A93C]" />
            <span>Directions in Google Maps</span>
          </a>
        </div>

        {/* Trust & Proof Adjacency Strip */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#C8C2B7]">
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1 text-[#E5A93C] mb-1">
              <Star className="w-3.5 h-3.5 fill-[#E5A93C]" />
              <span className="font-bold text-sm text-[#FAF6F0] tabular-nums">4.5 / 5.0</span>
            </div>
            <span>844+ Google Reviews</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-bold text-sm text-[#FAF6F0] mb-1">CASH ONLY</span>
            <span>Credit Cards Not Accepted</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1 text-[#FAF6F0] mb-1">
              <Clock className="w-3.5 h-3.5 text-[#D4972C]" />
              <span className="font-bold text-sm">Opens 5:00 PM</span>
            </div>
            <span>Dinner Service · Thu – Sun</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1 text-[#FAF6F0] mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="font-bold text-sm">Women-Owned</span>
            </div>
            <span>Belleville Historic Eatery</span>
          </div>
        </div>
      </div>

      {/* Video Audio Control Floating Pill */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={toggleSound}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-[#E0D9CC] hover:text-[#FAF6F0] border border-white/15 text-xs transition-colors"
          aria-label={isMuted ? "Unmute cinematic background video" : "Mute cinematic background video"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#E5A93C]" />}
          <span className="hidden sm:inline font-mono text-[11px]">{isMuted ? 'Muted' : 'Sound On'}</span>
        </button>
      </div>
    </section>
  );
};
