import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface CelestialButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'gold' | 'rose' | 'glass';
  icon?: React.ReactNode;
  sparkle?: boolean;
}

export const CelestialButton: React.FC<CelestialButtonProps> = ({
  children,
  variant = 'gold',
  icon,
  sparkle = true,
  className = '',
  ...props
}) => {
  const variantStyles = {
    gold: 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-semibold shadow-[0_0_25px_rgba(245,208,97,0.4)] border border-amber-300 hover:shadow-[0_0_35px_rgba(245,208,97,0.7)]',
    rose: 'bg-gradient-to-r from-rose-600 via-pink-500 to-rose-700 text-white font-semibold shadow-[0_0_25px_rgba(244,63,94,0.4)] border border-rose-300 hover:shadow-[0_0_35px_rgba(244,63,94,0.7)]',
    glass: 'bg-slate-900/60 backdrop-blur-xl text-amber-200 border border-amber-400/30 hover:border-amber-400/60 shadow-[0_0_20px_rgba(245,208,97,0.15)] hover:bg-slate-800/80',
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-cinzel tracking-wider uppercase transition-all duration-300 overflow-hidden cursor-pointer ${variantStyles} ${className}`}
      {...props}
    >
      {/* Dynamic Starlight Shimmer Line */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {sparkle && <Sparkles className="w-3.5 h-3.5 relative z-10 opacity-75 animate-pulse" />}
    </motion.button>
  );
};

