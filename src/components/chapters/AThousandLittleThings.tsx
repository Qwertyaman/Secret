import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { tenLoveReasons } from '../../data/celestialData';
import { LoveReasonStar } from '../../types/celestial';

interface AThousandLittleThingsProps {
  playChime: () => void;
}

export const AThousandLittleThings: React.FC<AThousandLittleThingsProps> = ({ playChime }) => {
  const [selectedStarId, setSelectedStarId] = useState<string>(tenLoveReasons[0].id);
  const [discoveredStars, setDiscoveredStars] = useState<Set<string>>(new Set([tenLoveReasons[0].id]));

  const activeReason: LoveReasonStar = tenLoveReasons.find((r) => r.id === selectedStarId) || tenLoveReasons[0];
  const activeIndex = tenLoveReasons.findIndex((r) => r.id === selectedStarId);

  const handleSelectStar = (reason: LoveReasonStar) => {
    playChime();
    setSelectedStarId(reason.id);
    setDiscoveredStars((prev) => new Set(prev).add(reason.id));
  };

  const handleNext = () => {
    playChime();
    const nextIdx = (activeIndex + 1) % tenLoveReasons.length;
    const next = tenLoveReasons[nextIdx];
    setSelectedStarId(next.id);
    setDiscoveredStars((prev) => new Set(prev).add(next.id));
  };

  const handlePrev = () => {
    playChime();
    const prevIdx = (activeIndex - 1 + tenLoveReasons.length) % tenLoveReasons.length;
    const prev = tenLoveReasons[prevIdx];
    setSelectedStarId(prev.id);
    setDiscoveredStars((prev2) => new Set(prev2).add(prev.id));
  };

  const remaining = tenLoveReasons.length - discoveredStars.size;

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10">
      <div className="w-full max-w-6xl mx-auto">

        {/* Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14"
        >
          <span className="font-handwriting text-xl sm:text-2xl text-[#E8A0C4]">
            Chapter 4 ~ A thousand little reasons
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-xl mb-14"
        >
          <h2 className="font-serif-garamond text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F7F2] leading-tight mb-4">
            Ten reasons I love you
          </h2>
          <p className="font-serif-garamond text-lg text-[#F8F7F2]/60 italic font-light">
            {remaining > 0 ? `${discoveredStars.size} opened so far — ${remaining} more waiting` : 'All ten found ♡'}
          </p>
        </motion.div>

        {/* Two-column: celestial star map on left, story card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Star Map */}
          <div className="lg:col-span-7 relative w-full aspect-square max-w-lg mx-auto">
            {/* Soft ambient night sky card */}
            <div className="absolute inset-0 rounded-3xl border border-white/[0.06] bg-[#0d1120]/60 overflow-hidden">
              {/* Gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8A0C4]/5 via-transparent to-[#C4B5FD]/5 pointer-events-none" />
              {/* Faint grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
                <defs>
                  <pattern id="grid" width="10%" height="10%" patternUnits="userSpaceOnUse">
                    <path d="M 10% 0 L 0 0 0 10%" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Stars */}
            <div className="relative w-full h-full p-6">
              {tenLoveReasons.map((reason) => {
                const isSelected = selectedStarId === reason.id;
                const isDiscovered = discoveredStars.has(reason.id);
                const starSize = reason.size ?? 5;

                return (
                  <div
                    key={reason.id}
                    style={{ left: `${reason.x}%`, top: `${reason.y}%` }}
                    onClick={() => handleSelectStar(reason)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  >
                    {/* Pulsing glow on selected */}
                    {isSelected && (
                      <div className="absolute -inset-5 rounded-full bg-[#F3E5AB]/15 blur-md animate-pulse pointer-events-none" />
                    )}

                    {/* Star */}
                    <motion.div
                      animate={isSelected ? { scale: [1, 1.2, 1], transition: { duration: 2, repeat: Infinity } } : {}}
                      className={`flex items-center justify-center transition-all duration-400 ${isSelected ? 'scale-125' : 'group-hover:scale-110'}`}
                    >
                      <span
                        style={{ fontSize: starSize * 3.5 }}
                        className={`leading-none transition-all duration-300 drop-shadow-sm ${
                          isSelected
                            ? 'text-[#F3E5AB] drop-shadow-[0_0_8px_#F3E5AB]'
                            : isDiscovered
                            ? 'text-[#E8A0C4]'
                            : 'text-white/30 group-hover:text-[#F3E5AB]/70'
                        }`}
                      >
                        ✦
                      </span>
                    </motion.div>

                    {/* Number */}
                    <span
                      className={`absolute top-5 left-1/2 -translate-x-1/2 font-handwriting text-xs whitespace-nowrap transition-all ${
                        isSelected ? 'text-[#F3E5AB] opacity-100' : 'text-white/25 opacity-70'
                      }`}
                    >
                      {reason.number}
                    </span>
                  </div>
                );
              })}

              {/* Hint */}
              <span className="absolute bottom-4 left-5 font-handwriting text-sm text-[#F8F7F2]/25">
                tap a star to open it
              </span>
            </div>
          </div>

          {/* Story reveal card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReason.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-3xl border border-[#E8A0C4]/15 bg-[#11172A]/50 text-left"
              >
                {/* Number indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-handwriting text-base text-[#E8A0C4]/60">
                    reason {activeReason.number} of {tenLoveReasons.length}
                  </span>
                  <span className="font-handwriting text-sm text-[#F3E5AB]/50">
                    {discoveredStars.size} opened
                  </span>
                </div>

                <h3 className="font-serif-garamond text-2xl sm:text-3xl lg:text-4xl font-light text-[#F8F7F2] leading-tight mb-5">
                  {activeReason.shortTitle}
                </h3>

                <p className="font-sans-dm text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed font-light mb-8">
                  {activeReason.extendedText}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                  <button
                    onClick={handlePrev}
                    className="font-handwriting text-lg text-[#E8A0C4]/50 hover:text-[#E8A0C4] transition-colors cursor-pointer"
                  >
                    ← previous
                  </button>

                  <div className="flex items-center gap-1">
                    {tenLoveReasons.map((_, i) => (
                      <span
                        key={i}
                        className={`block rounded-full transition-all ${
                          activeIndex === i ? 'w-3 h-1.5 bg-[#E8A0C4]' : 'w-1.5 h-1.5 bg-white/15'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="font-handwriting text-lg text-[#E8A0C4]/50 hover:text-[#E8A0C4] transition-colors cursor-pointer"
                  >
                    next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
