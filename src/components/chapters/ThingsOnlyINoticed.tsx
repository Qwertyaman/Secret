import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fiveObservations } from '../../data/celestialData';

interface ThingsOnlyINoticedProps {
  playChime: () => void;
}

// Decorative SVG metaphors for each quality
const QualityDecoration: React.FC<{ id: string; isActive: boolean }> = ({ id, isActive }) => {
  const opacity = isActive ? 1 : 0.5;
  const color = isActive ? '#E8A0C4' : '#C4B5FD';
  const gold = isActive ? '#F3E5AB' : '#D6B66C';

  if (id === 'obs-calm') {
    // Calm: soft ripple circles
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity }}>
        <circle cx="32" cy="32" r="6" fill={color} opacity="0.8" />
        <circle cx="32" cy="32" r="14" stroke={color} strokeWidth="1" opacity="0.4" fill="none" />
        <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="0.5" opacity="0.2" fill="none" />
        <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />
        <circle cx="32" cy="10" r="2" fill={gold} opacity="0.6" />
        <circle cx="54" cy="26" r="1.5" fill={gold} opacity="0.5" />
        <circle cx="10" cy="44" r="1" fill={gold} opacity="0.4" />
      </svg>
    );
  }
  if (id === 'obs-cute') {
    // Cute: little stars scattered
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity }}>
        <text x="28" y="36" fontSize="16" fill={color}>✦</text>
        <text x="8" y="20" fontSize="10" fill={gold} opacity="0.8">✦</text>
        <text x="46" y="14" fontSize="8" fill={color} opacity="0.7">✦</text>
        <text x="50" y="48" fontSize="12" fill={gold} opacity="0.6">✦</text>
        <text x="12" y="52" fontSize="7" fill={color} opacity="0.5">✦</text>
        <text x="36" y="58" fontSize="6" fill={gold} opacity="0.4">✦</text>
      </svg>
    );
  }
  if (id === 'obs-kind') {
    // Kind: small heart with radiating lines
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity }}>
        <path d="M32 44 C32 44 14 34 14 22 C14 16 18 12 24 12 C27.5 12 30.5 14 32 17 C33.5 14 36.5 12 40 12 C46 12 50 16 50 22 C50 34 32 44 32 44Z" fill={color} opacity="0.7" />
        <line x1="32" y1="4" x2="32" y2="8" stroke={gold} strokeWidth="1" opacity="0.6" />
        <line x1="52" y1="12" x2="49" y2="15" stroke={gold} strokeWidth="1" opacity="0.5" />
        <line x1="58" y1="30" x2="54" y2="30" stroke={gold} strokeWidth="1" opacity="0.4" />
        <line x1="12" y1="12" x2="15" y2="15" stroke={gold} strokeWidth="1" opacity="0.5" />
        <line x1="6" y1="30" x2="10" y2="30" stroke={gold} strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }
  if (id === 'obs-resilient') {
    // Resilience: small mountain / upward arrow with stars
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity }}>
        <path d="M32 10 L50 50 L14 50 Z" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
        <path d="M32 10 L50 50 L14 50 Z" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="10" r="3" fill={gold} opacity="0.9" />
        <circle cx="20" cy="38" r="1.5" fill={gold} opacity="0.5" />
        <circle cx="44" cy="38" r="1.5" fill={gold} opacity="0.5" />
        <text x="12" y="20" fontSize="8" fill={gold} opacity="0.6">✦</text>
        <text x="46" y="24" fontSize="6" fill={gold} opacity="0.5">✦</text>
      </svg>
    );
  }
  // obs-open: open door / window frame with light
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity }}>
      <rect x="16" y="12" width="32" height="40" rx="3" stroke={color} strokeWidth="1.5" fill={color} opacity="0.08" />
      <rect x="16" y="12" width="16" height="40" rx="2" stroke={color} strokeWidth="1" fill={color} opacity="0.12" />
      <circle cx="34" cy="32" r="2" fill={gold} opacity="0.8" />
      <line x1="40" y1="20" x2="56" y2="12" stroke={gold} strokeWidth="0.75" opacity="0.4" />
      <line x1="44" y1="32" x2="58" y2="30" stroke={gold} strokeWidth="0.75" opacity="0.3" />
      <line x1="40" y1="44" x2="56" y2="52" stroke={gold} strokeWidth="0.75" opacity="0.4" />
      <circle cx="58" cy="12" r="2" fill={gold} opacity="0.5" />
      <circle cx="58" cy="52" r="1.5" fill={gold} opacity="0.4" />
    </svg>
  );
};

export const ThingsOnlyINoticed: React.FC<ThingsOnlyINoticedProps> = ({ playChime }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSelect = (index: number) => {
    playChime();
    setActiveIndex(index);
  };

  const handleNext = () => {
    playChime();
    setActiveIndex((prev) => (prev + 1) % fiveObservations.length);
  };

  const handlePrev = () => {
    playChime();
    setActiveIndex((prev) => (prev - 1 + fiveObservations.length) % fiveObservations.length);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10">
      <div className="w-full max-w-6xl mx-auto">

        {/* Handwritten Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14"
        >
          <span className="font-handwriting text-xl sm:text-2xl text-[#E8A0C4]">
            Chapter 2 ~ Somewhere, I noticed you
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-xl mb-16 sm:mb-20"
        >
          <h2 className="font-serif-garamond text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F7F2] leading-tight mb-4">
            Five things about you
          </h2>
          <p className="font-serif-garamond text-lg text-[#F8F7F2]/60 italic font-light">
            that I keep thinking about
          </p>
        </motion.div>

        {/* Five quality cards — organic alternating layout */}
        <div className="space-y-20 sm:space-y-28">
          {fiveObservations.map((star, index) => {
            const isActive = activeIndex === index;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={star.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.05 * index }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center cursor-pointer group`}
                onClick={() => handleSelect(index)}
              >
                {/* Decorative Visual */}
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                  <motion.div
                    animate={isActive ? { scale: [1, 1.08, 1], transition: { duration: 2, repeat: Infinity } } : {}}
                    className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-all duration-700 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#E8A0C4]/25 via-[#C4B5FD]/20 to-[#F3E5AB]/15 shadow-[0_0_40px_rgba(232,160,196,0.25)]'
                        : 'bg-white/[0.03] group-hover:bg-[#E8A0C4]/10'
                    } border ${isActive ? 'border-[#E8A0C4]/40' : 'border-white/10 group-hover:border-[#E8A0C4]/25'}`}
                  >
                    <QualityDecoration id={star.id} isActive={isActive} />
                  </motion.div>

                  {/* Dot indicator */}
                  <div className="flex gap-1.5">
                    {fiveObservations.map((_, i) => (
                      <span
                        key={i}
                        className={`block rounded-full transition-all duration-300 ${
                          i === index ? (isActive ? 'w-5 h-1.5 bg-[#E8A0C4]' : 'w-3 h-1.5 bg-[#E8A0C4]/50') : 'w-1.5 h-1.5 bg-white/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Text content */}
                <div className={`flex-1 ${isEven ? 'text-left' : 'text-left lg:text-right'}`}>
                  <span className="font-handwriting text-lg sm:text-xl text-[#E8A0C4]/80 block mb-2">
                    {star.subtitle}
                  </span>

                  <h3
                    className={`font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-5 transition-colors duration-500 ${
                      isActive ? 'text-[#F8F7F2]' : 'text-[#F8F7F2]/75 group-hover:text-[#F8F7F2]'
                    }`}
                  >
                    {star.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="active-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans-dm text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed mb-5 font-light">
                          {star.story}
                        </p>
                        <p className="font-handwriting text-xl sm:text-2xl text-[#F3E5AB] italic">
                          "{star.quote}"
                        </p>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-sans-dm text-sm sm:text-base text-[#F8F7F2]/45 leading-relaxed font-light line-clamp-2"
                      >
                        {star.story}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {!isActive && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleSelect(index); }}
                      className="mt-4 font-handwriting text-lg text-[#E8A0C4]/60 hover:text-[#E8A0C4] transition-colors"
                    >
                      read more ↓
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation hint at the bottom */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="font-handwriting text-lg text-[#E8A0C4]/50 hover:text-[#E8A0C4] transition-colors cursor-pointer"
          >
            ← previous
          </button>
          <span className="font-handwriting text-base text-[#F8F7F2]/30">
            {activeIndex + 1} of 5
          </span>
          <button
            onClick={handleNext}
            className="font-handwriting text-lg text-[#E8A0C4]/50 hover:text-[#E8A0C4] transition-colors cursor-pointer"
          >
            next →
          </button>
        </div>
      </div>
    </section>
  );
};
