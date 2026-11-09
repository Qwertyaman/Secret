import React, { useState } from 'react';
import { motion } from 'motion/react';
import { timelineMilestones } from '../../data/celestialData';
import { Camera } from 'lucide-react';

export const HowWeGotHere: React.FC = () => {
  const [bouquetPhoto, setBouquetPhoto] = useState<string>('/assets/bouquet.jpg');
  const [braceletPhoto, setBraceletPhoto] = useState<string>('/assets/bracelet.jpg');
  const [bouquetLoaded, setBouquetLoaded] = useState<boolean>(true);
  const [braceletLoaded, setBraceletLoaded] = useState<boolean>(true);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'bouquet' | 'bracelet') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (type === 'bouquet') {
      setBouquetPhoto(url);
      setBouquetLoaded(true);
    } else {
      setBraceletPhoto(url);
      setBraceletLoaded(true);
    }
  };

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
          <span className="font-handwriting text-xl sm:text-2xl text-[#F3E5AB]">
            Chapter 3 ~ And then, our story began
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-xl mb-20 sm:mb-28"
        >
          <h2 className="font-serif-garamond text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F7F2] leading-tight mb-4">
            A few moments I want to remember
          </h2>
          <p className="font-serif-garamond text-lg text-[#F8F7F2]/60 italic font-light">
            Small things that meant something
          </p>
        </motion.div>

        {/* Timeline — Vertical with golden thread */}
        <div className="relative">
          {/* Vertical thread line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F3E5AB]/30 to-transparent pointer-events-none" />

          <div className="space-y-24 sm:space-y-32">

            {/* ── MILESTONE 1: May 9, 2026 ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
              className="relative pl-14 sm:pl-24"
            >
              {/* Thread dot */}
              <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-[#F3E5AB]/80 shadow-[0_0_12px_rgba(243,229,171,0.6)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#F3E5AB]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-left">
                  <span className="font-handwriting text-xl sm:text-2xl text-[#F3E5AB] block mb-3">
                    {timelineMilestones[0].date}
                  </span>
                  <h3 className="font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-light text-[#F8F7F2] leading-tight mb-5">
                    {timelineMilestones[0].title}
                  </h3>
                  <p className="font-sans-dm text-base sm:text-lg text-[#F8F7F2]/75 leading-relaxed font-light">
                    {timelineMilestones[0].description}
                  </p>
                </div>

                {/* Decorative "constellation" card */}
                <div className="relative p-8 rounded-3xl border border-[#F3E5AB]/15 bg-[#11172A]/40 overflow-hidden">
                  {/* Soft ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F3E5AB]/5 via-transparent to-[#E8A0C4]/5 pointer-events-none" />
                  {/* Little stars */}
                  <div className="relative flex flex-col items-start gap-3">
                    <div className="flex gap-2 mb-2">
                      {['✦', '✦', '✦'].map((s, i) => (
                        <span key={i} className="text-[#F3E5AB]" style={{ opacity: 0.3 + i * 0.25, fontSize: 10 + i * 3 }}>{s}</span>
                      ))}
                    </div>
                    <p className="font-serif-garamond text-xl sm:text-2xl text-[#F8F7F2] italic font-light leading-relaxed">
                      "The day time started counting in us."
                    </p>
                    <span className="font-handwriting text-base text-[#E8A0C4] mt-2">
                      — May 9, 2026
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── MILESTONE 2: The Bouquet ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
              className="relative pl-14 sm:pl-24"
            >
              {/* Thread dot — pink for bouquet */}
              <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-[#E8A0C4]/80 shadow-[0_0_12px_rgba(232,160,196,0.6)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#E8A0C4]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Photo frame — scrapbook style */}
                <div className="relative group lg:order-2">
                  {/* Pink floral aura */}
                  <div className="absolute -inset-3 bg-gradient-to-tr from-[#E8A0C4]/20 via-[#C4B5FD]/10 to-transparent rounded-3xl blur-xl pointer-events-none" />

                  <div className="relative rounded-2xl overflow-hidden border border-[#E8A0C4]/30 bg-[#11172A]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {bouquetLoaded ? (
                      <div className="relative">
                        <img
                          src={bouquetPhoto}
                          alt={timelineMilestones[1].imageAlt}
                          onError={() => setBouquetLoaded(false)}
                          className="w-full h-auto max-h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {/* Dreamy vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
                        {/* Handwritten label */}
                        <div className="absolute bottom-4 left-5 right-5">
                          <span className="font-handwriting text-lg text-[#F8F7F2]/90 drop-shadow-md">
                            for you ♡
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="py-16 px-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#E8A0C4]/15 border border-[#E8A0C4]/30 flex items-center justify-center mb-4 text-[#E8A0C4]">
                          <Camera className="w-7 h-7" />
                        </div>
                        <p className="font-serif-garamond text-xl text-[#F8F7F2]/70 italic mb-1">The Garden</p>
                        <p className="font-sans-dm text-xs text-[#F8F7F2]/40">Coming soon</p>
                      </div>
                    )}
                  </div>

                  {/* File upload */}
                  <label className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#E8A0C4]/15 border border-[#E8A0C4]/25 text-[#E8A0C4]/70 hover:text-[#E8A0C4] text-[11px] font-sans-dm transition-colors cursor-pointer">
                    <Camera className="w-3 h-3" />
                    <span>{bouquetLoaded ? 'Change photo' : 'Add photo'}</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'bouquet')} className="hidden" />
                  </label>
                </div>

                {/* Text */}
                <div className="text-left lg:order-1">
                  <span className="font-handwriting text-xl sm:text-2xl text-[#E8A0C4] block mb-3">
                    {timelineMilestones[1].date}
                  </span>
                  <h3 className="font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-light text-[#F8F7F2] leading-tight mb-5">
                    {timelineMilestones[1].title}
                  </h3>
                  <p className="font-sans-dm text-base sm:text-lg text-[#F8F7F2]/75 leading-relaxed font-light mb-6">
                    {timelineMilestones[1].description}
                  </p>
                  <p className="font-handwriting text-xl sm:text-2xl text-[#F3E5AB] italic">
                    "Each soft petal, a quiet thought of you."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── MILESTONE 3: The Bracelet ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
              className="relative pl-14 sm:pl-24"
            >
              {/* Thread dot — gold for bracelet */}
              <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-[#D6B66C]/80 shadow-[0_0_12px_rgba(214,182,108,0.6)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#D6B66C]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Photo frame */}
                <div className="relative group">
                  {/* Golden orbital aura */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D6B66C]/20 via-[#F3E5AB]/10 to-transparent rounded-3xl blur-xl pointer-events-none" />

                  <div className="relative rounded-2xl overflow-hidden border border-[#D6B66C]/30 bg-[#11172A]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {braceletLoaded ? (
                      <div className="relative">
                        <img
                          src={braceletPhoto}
                          alt={timelineMilestones[2].imageAlt}
                          onError={() => setBraceletLoaded(false)}
                          className="w-full h-auto max-h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-5 right-5">
                          <span className="font-handwriting text-lg text-[#F8F7F2]/90 drop-shadow-md">
                            something to keep close ♡
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="py-16 px-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#D6B66C]/15 border border-[#D6B66C]/30 flex items-center justify-center mb-4 text-[#D6B66C]">
                          <Camera className="w-7 h-7" />
                        </div>
                        <p className="font-serif-garamond text-xl text-[#F8F7F2]/70 italic mb-1">The Picture of yours (which i dont have)</p>
                        <p className="font-sans-dm text-xs text-[#F8F7F2]/40">Coming soon</p>
                      </div>
                    )}
                  </div>

                  <label className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#D6B66C]/15 border border-[#D6B66C]/25 text-[#D6B66C]/70 hover:text-[#D6B66C] text-[11px] font-sans-dm transition-colors cursor-pointer">
                    <Camera className="w-3 h-3" />
                    <span>{braceletLoaded ? 'Change photo' : 'Add photo'}</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'bracelet')} className="hidden" />
                  </label>
                </div>

                {/* Text */}
                <div className="text-left">
                  <span className="font-handwriting text-xl sm:text-2xl text-[#D6B66C] block mb-3">
                    {timelineMilestones[2].date}
                  </span>
                  <h3 className="font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-light text-[#F8F7F2] leading-tight mb-5">
                    {timelineMilestones[2].title}
                  </h3>
                  <p className="font-sans-dm text-base sm:text-lg text-[#F8F7F2]/75 leading-relaxed font-light mb-6">
                    {timelineMilestones[2].description}
                  </p>
                  <p className="font-handwriting text-xl sm:text-2xl text-[#F3E5AB] italic">
                    "Gold and a little pink, like you."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── MILESTONE 4: Birthday ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1 }}
              className="relative pl-14 sm:pl-24"
            >
              {/* Thread dot — lavender for birthday */}
              <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-[#C4B5FD]/80 shadow-[0_0_16px_rgba(196,181,253,0.7)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#C4B5FD]" />
              </div>

              <div className="max-w-2xl">
                <span className="font-handwriting text-xl sm:text-2xl text-[#C4B5FD] block mb-3">
                  {timelineMilestones[3].date}
                </span>
                <h3 className="font-serif-garamond text-4xl sm:text-5xl lg:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F8F7F2] via-[#F3E5AB] to-[#E8A0C4] leading-tight mb-6">
                  {timelineMilestones[3].title}
                </h3>
                <p className="font-sans-dm text-lg sm:text-xl text-[#F8F7F2]/80 leading-relaxed font-light mb-6">
                  {timelineMilestones[3].description}
                </p>
                <p className="font-handwriting text-2xl sm:text-3xl text-[#E8A0C4]">
                  I am so glad you were born. ♡
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
