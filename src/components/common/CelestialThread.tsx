import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

const milestones = [
  { id: 1, label: 'Once Upon A Universe', topPercent: 4 },
  { id: 2, label: 'Somewhere, I Noticed You', topPercent: 20 },
  { id: 3, label: 'And Then, Our Story Began', topPercent: 38 },
  { id: 4, label: 'A Thousand Little Reasons', topPercent: 58 },
  { id: 5, label: 'Make A Wish, My Love', topPercent: 78 },
  { id: 6, label: 'One Last Thing, From My Heart', topPercent: 95 },
];

export const CelestialThread: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed left-4 sm:left-8 top-0 bottom-0 w-8 z-30 flex flex-col items-center justify-between">
      {/* Background Dim Thread Line */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Illuminating Active Starlight Thread */}
      <motion.div
        className="absolute top-0 w-[1.5px] bg-gradient-to-b from-[#F3E5AB] via-[#E8A0C4] to-[#C4B5FD] origin-top shadow-[0_0_12px_rgba(243,229,171,0.6)]"
        style={{
          scaleY: smoothProgress,
          height: '100%',
        }}
      />

      {/* Traveling Starlight Bead */}
      <motion.div
        className="absolute w-3 h-3 -left-1 rounded-full bg-[#F3E5AB] shadow-[0_0_15px_#F3E5AB] flex items-center justify-center"
        style={{
          top: useSpring(scrollYProgress, { stiffness: 100, damping: 20 }),
        }}
      >
        <span className="w-1 h-1 rounded-full bg-white" />
      </motion.div>

      {/* Chapter Star Waypoints */}
      {milestones.map((m) => (
        <div
          key={m.id}
          className="absolute -translate-y-1/2 flex items-center group pointer-events-auto"
          style={{ top: `${m.topPercent}%` }}
        >
          <div className="w-2.5 h-2.5 rounded-full border border-[#D6B66C]/60 bg-[#0B0F19] flex items-center justify-center transition-all duration-300 hover:scale-150 hover:border-[#F3E5AB]">
            <span className="w-1 h-1 rounded-full bg-[#E8A0C4]" />
          </div>
        </div>
      ))}
    </div>
  );
};

