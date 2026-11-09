import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

interface AmbientAudioToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AmbientAudioToggle: React.FC<AmbientAudioToggleProps> = ({
  isPlaying,
  onToggle,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      className={`fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-2xl transition-all duration-500 cursor-pointer ${
        isPlaying
          ? 'bg-[#11172A]/80 border border-[#D6B66C]/40 text-[#F3E5AB] shadow-[0_0_20px_rgba(214,182,108,0.2)]'
          : 'bg-[#0B0F19]/60 border border-white/10 text-[#F8F7F2]/60 hover:text-[#F8F7F2] hover:border-white/20'
      }`}
      aria-label={isPlaying ? 'Silence Celestial Soundscape' : 'Play Celestial Atmosphere'}
      title={isPlaying ? 'Soundscape Active' : 'Soundscape Muted'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D6B66C] animate-pulse" />
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#D6B66C] rounded-full animate-bounce h-1.5" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 bg-[#D6B66C] rounded-full animate-bounce h-3" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 bg-[#D6B66C] rounded-full animate-bounce h-2" style={{ animationDelay: '300ms' }} />
          </div>
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase font-sans hidden sm:inline text-[#F3E5AB]">
            Sound On
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#F8F7F2]/40" />
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase font-sans hidden sm:inline text-[#F8F7F2]/50">
            Sound Off
          </span>
        </>
      )}
    </motion.button>
  );
};
