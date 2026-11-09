import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  borderVariant?: 'gold' | 'rose' | 'default';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = false,
  borderVariant = 'default',
  ...props
}) => {
  const borderClasses = {
    gold: 'border-amber-400/25 hover:border-amber-400/50 shadow-[0_0_25px_rgba(245,208,97,0.12)]',
    rose: 'border-rose-400/25 hover:border-rose-400/50 shadow-[0_0_25px_rgba(244,63,94,0.12)]',
    default: 'border-slate-700/50 hover:border-slate-600/70 shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
  }[borderVariant];

  const glowBackground = glow
    ? 'bg-gradient-to-b from-slate-900/80 via-slate-950/85 to-[#060818]/90'
    : 'bg-[#0a0b1e]/75';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative backdrop-blur-xl rounded-2xl border ${borderClasses} ${glowBackground} p-6 text-slate-100 overflow-hidden ${className}`}
      {...props}
    >
      {/* Subtle top starlight highlight sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
      {children}
    </motion.div>
  );
};

