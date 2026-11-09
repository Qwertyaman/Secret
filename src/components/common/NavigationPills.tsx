import React from 'react';
import { motion } from 'motion/react';

export type SectionIndex = 1 | 2 | 3 | 4 | 5 | 6;

interface NavigationPillsProps {
  currentSection: SectionIndex;
  onSelectSection: (section: SectionIndex) => void;
}

const sections: { id: SectionIndex; label: string; numeral: string }[] = [
  { id: 1, label: 'Our Universe', numeral: '01' },
  { id: 2, label: 'Noticed', numeral: '02' },
  { id: 3, label: 'Timeline', numeral: '03' },
  { id: 4, label: 'Reasons', numeral: '04' },
  { id: 5, label: 'Make A Wish', numeral: '05' },
  { id: 6, label: 'Just For You', numeral: '06' },
];

export const NavigationPills: React.FC<NavigationPillsProps> = ({
  currentSection,
  onSelectSection,
}) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] pointer-events-auto">
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#11172A]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
        {sections.map((sec) => {
          const isActive = currentSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`relative px-3 sm:px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                isActive ? 'text-[#0B0F19] font-semibold' : 'text-[#F8F7F2]/50 hover:text-[#F3E5AB]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeLuxurySectionPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D6B66C] to-[#F3E5AB] shadow-[0_0_20px_rgba(214,182,108,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="text-[10px] opacity-80">{sec.numeral}</span>
                <span className="hidden md:inline font-sans font-medium">{sec.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
