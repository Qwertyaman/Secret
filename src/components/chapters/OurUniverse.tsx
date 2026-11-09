import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ishaniProfile } from '../../data/celestialData';
import { storybookAssets } from '../../data/assets';
import { Sparkles, ChevronDown } from 'lucide-react';

export const OurUniverse: React.FC = () => {
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = ishaniProfile.targetBirthdayTimestamp;

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full pt-12 sm:pt-20 pb-24 px-4 sm:px-10 lg:px-16 z-10 flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Soft Romantic Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2.5 mb-8 sm:mb-12"
        >
          <span className="w-6 h-px bg-[#E8A0C4]/60" />
          <span className="font-handwriting text-xl sm:text-2xl text-[#E8A0C4]">
            Chapter 1 ~ Once upon a universe
          </span>
          <span className="text-[#F3E5AB]/60 text-xs">✦</span>
        </motion.div>

        {/* Editorial Asymmetric Hero: Celestial Artwork on Left + Romantic Typography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Dreamy Illustrated Celestial Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* Soft Dreamy Pastel Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#E8A0C4]/25 via-[#C4B5FD]/20 to-[#F3E5AB]/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* Artwork Container with Feathered Edge Integration */}
            <div className="relative rounded-3xl overflow-hidden border border-[#E8A0C4]/35 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#11172A]/40">
              <img
                src={storybookAssets.storybookSky.src}
                alt={storybookAssets.storybookSky.alt}
                className="w-full h-auto max-h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gentle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/85 via-transparent to-transparent pointer-events-none" />

              {/* Soft Handwritten Caption */}
              <div className="absolute bottom-4 sm:bottom-5 left-5 sm:left-6 right-5 sm:right-6 flex items-center justify-between">
                <span className="font-handwriting text-lg sm:text-xl text-[#F3E5AB] flex items-center gap-1.5 drop-shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A0C4]" />
                  A sky of pastel clouds and golden moons ♡
                </span>
                <span className="font-serif-garamond italic text-sm text-[#F8F7F2]/75 hidden sm:inline">
                  Written for Ishani
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Romantic Journal Typography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Handwritten Note Above Name */}
            <div className="flex items-center gap-2 mb-1">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#E8A0C4] drop-shadow-sm">
                A little universe, made just for you ♡
              </span>
            </div>

            {/* Ishani's Name in Romantic Cormorant Garamond */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif-garamond font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F8F7F2] via-[#F3E5AB] to-[#E8A0C4] mb-6 leading-none">
              Ishani
            </h1>

            {/* Requested Personal Declaration Paragraph */}
            <p className="font-serif-garamond text-xl sm:text-2xl text-[#F8F7F2]/90 italic font-light leading-relaxed mb-8">
              &ldquo;Of all the stars scattered across this endless universe, somehow, my favourite story became the one written with you.&rdquo;
            </p>

            {/* Softened Live Birthday Countdown */}
            <div className="w-full p-6 rounded-2xl storybook-panel-pink">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="font-serif-garamond italic text-base sm:text-lg text-[#F8F7F2]/90 flex items-center gap-2">
                  <span className="text-[#E8A0C4] text-xs">♡</span>
                  Counting down to your birthday...
                </span>
                <span className="font-handwriting text-lg text-[#F3E5AB]">
                  November 10, 2026
                </span>
              </div>

              {/* Countdown Digits with Delicate Separators */}
              <div className="flex items-center justify-between text-center px-1">
                {/* Days */}
                <div className="flex-1">
                  <span className="text-3xl sm:text-4xl font-serif-garamond font-light text-[#F8F7F2]">
                    {countdown.days}
                  </span>
                  <span className="text-xs font-sans-dm text-[#F8F7F2]/60 block mt-0.5">
                    days
                  </span>
                </div>

                <span className="text-[#E8A0C4]/60 font-serif-garamond text-xl mb-4">:</span>

                {/* Hours */}
                <div className="flex-1">
                  <span className="text-3xl sm:text-4xl font-serif-garamond font-light text-[#F3E5AB]">
                    {countdown.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs font-sans-dm text-[#F8F7F2]/60 block mt-0.5">
                    hours
                  </span>
                </div>

                <span className="text-[#E8A0C4]/60 font-serif-garamond text-xl mb-4">:</span>

                {/* Minutes */}
                <div className="flex-1">
                  <span className="text-3xl sm:text-4xl font-serif-garamond font-light text-[#E8A0C4]">
                    {countdown.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs font-sans-dm text-[#F8F7F2]/60 block mt-0.5">
                    mins
                  </span>
                </div>

                <span className="text-[#E8A0C4]/60 font-serif-garamond text-xl mb-4">:</span>

                {/* Seconds */}
                <div className="flex-1">
                  <span className="text-3xl sm:text-4xl font-serif-garamond font-light text-[#C4B5FD]">
                    {countdown.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs font-sans-dm text-[#F8F7F2]/60 block mt-0.5">
                    secs
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Soft Handwritten Scroll Invitation */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-1.5 cursor-pointer group">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#E8A0C4] group-hover:text-[#F3E5AB] transition-colors drop-shadow-sm">
            There&rsquo;s a little more of us below...
          </span>
          <ChevronDown className="w-4 h-4 text-[#E8A0C4]/80 group-hover:translate-y-1 transition-transform animate-bounce" />
        </div>
      </div>
    </section>
  );
};
