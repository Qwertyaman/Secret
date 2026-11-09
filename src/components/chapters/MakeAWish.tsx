import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Mic } from 'lucide-react';
import { ishaniProfile } from '../../data/celestialData';

interface MakeAWishProps {
  playChime: () => void;
}

export const MakeAWish: React.FC<MakeAWishProps> = ({ playChime }) => {
  const [candlesExtinguished, setCandlesExtinguished] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [micPermissionDenied, setMicPermissionDenied] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const handleExtinguish = () => {
    if (candlesExtinguished) return;
    setCandlesExtinguished(true);
    playChime();
    stopMicListening();

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F3E5AB', '#D6B66C', '#E8A0C4', '#C4B5FD', '#F8F7F2'],
      shapes: ['circle', 'star'],
      scalar: 1.1,
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 50,
        origin: { x: 0.1, y: 0.65 },
        colors: ['#F3E5AB', '#E8A0C4', '#F8F7F2'],
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 50,
        origin: { x: 0.9, y: 0.65 },
        colors: ['#C4B5FD', '#F3E5AB', '#F8F7F2'],
      });
    }, 300);
  };

  const startMicListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;

      const source = ctx.createMediaStreamSource(stream);
      source.connect(analyser);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
      setMicActive(true);

      const buffer = new Uint8Array(analyser.frequencyBinCount);

      const checkBlow = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(buffer);

        let sum = 0;
        for (let i = 0; i < buffer.length; i++) sum += buffer[i];
        const average = sum / buffer.length;

        if (average > 55) {
          handleExtinguish();
          return;
        }
        animFrameRef.current = requestAnimationFrame(checkBlow);
      };

      animFrameRef.current = requestAnimationFrame(checkBlow);
    } catch (err) {
      console.warn('Microphone permission not granted:', err);
      setMicPermissionDenied(true);
      setMicActive(false);
    }
  };

  const stopMicListening = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach((track) => track.stop());
      micStreamRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      try { audioContextRef.current.close(); } catch {}
    }
    setMicActive(false);
  };

  useEffect(() => {
    return () => { stopMicListening(); };
  }, []);

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 z-10">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 self-start sm:self-auto"
        >
          <span className="font-handwriting text-xl sm:text-2xl text-[#F3E5AB]">
            Chapter 5 ~ Make a wish, my love
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="font-serif-garamond text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F7F2] leading-tight mb-4">
            Close your eyes.
          </h2>
          <p className="font-serif-garamond text-xl sm:text-2xl text-[#F8F7F2]/60 italic font-light">
            Make a wish. I really hope it comes true.
          </p>
        </motion.div>

        {/* Birthday Cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12 w-full max-w-sm mx-auto"
        >
          {/* Ambient glow behind cake */}
          <div className="absolute -inset-8 bg-gradient-to-t from-[#E8A0C4]/10 via-[#F3E5AB]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Candles */}
          <div className="flex justify-center gap-10 sm:gap-14 mb-1 relative z-10">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Flame */}
                <div className="h-10 flex items-end justify-center mb-1">
                  <AnimatePresence>
                    {!candlesExtinguished ? (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [1, 1.12, 0.92, 1],
                          y: [0, -1.5, 1, 0],
                          opacity: 1,
                        }}
                        exit={{ opacity: 0, y: -16, scale: 0.1 }}
                        transition={{
                          duration: 1.3 + idx * 0.25,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="relative"
                      >
                        {/* Outer glow */}
                        <div className="absolute inset-0 rounded-full bg-[#F3E5AB]/40 blur-md scale-150" />
                        {/* Flame body */}
                        <div
                          className="relative w-4 h-7 rounded-full"
                          style={{
                            background: 'linear-gradient(to top, #D6B66C, #F3E5AB, #F8F7F2)',
                            boxShadow: '0 0 18px rgba(243,229,171,0.8)',
                          }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 0, y: -18, x: (idx - 1) * 5 }}
                        transition={{ duration: 2.2 }}
                        className="text-[#F8F7F2]/30 text-sm font-serif-garamond"
                      >
                        ~
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Candle stick */}
                <div
                  className="w-2.5 h-14 rounded-t-sm shadow-md"
                  style={{ background: 'linear-gradient(to bottom, #F3E5AB, #E8A0C4 60%, #403B78)' }}
                />
              </div>
            ))}
          </div>

          {/* Cake tiers */}
          <div className="relative flex flex-col items-center z-10">
            {/* Top tier */}
            <div
              className="w-44 sm:w-56 h-12 rounded-t-2xl flex items-center justify-center border-t border-x border-[#D6B66C]/30"
              style={{ background: 'linear-gradient(to bottom, #F8F7F2, #F3E5AB)' }}
            >
              <span className="font-handwriting text-base text-[#403B78]">
                ✦ {ishaniProfile.name} ✦
              </span>
            </div>

            {/* Middle tier */}
            <div
              className="w-60 sm:w-72 h-14 flex items-center justify-center gap-2 border-x border-t border-[#E8A0C4]/30"
              style={{ background: 'linear-gradient(to right, #1E1B4B, #403B78, #1E1B4B)' }}
            >
              <span className="font-serif-garamond text-sm text-[#F3E5AB] italic font-light tracking-wide">
                November 10, 2026
              </span>
            </div>

            {/* Base tier */}
            <div
              className="w-72 sm:w-80 h-7 rounded-b-2xl flex items-center justify-center border border-[#D6B66C]/25 shadow-2xl"
              style={{ background: 'linear-gradient(to right, #0B0F19, #11172A, #0B0F19)' }}
            >
              <span className="w-20 h-px bg-[#D6B66C]/30 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Action area */}
        <div className="flex flex-col items-center gap-4 z-10 w-full max-w-sm">
          {!candlesExtinguished ? (
            <>
              <button
                onClick={handleExtinguish}
                className="w-full py-4 px-8 rounded-2xl font-serif-garamond text-xl text-[#0B0F19] font-light tracking-wide transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-[0_0_30px_rgba(243,229,171,0.3)]"
                style={{ background: 'linear-gradient(135deg, #F3E5AB, #E8A0C4, #F3E5AB)' }}
              >
                Blow out the candles ✦
              </button>

              {!micActive ? (
                <button
                  onClick={startMicListening}
                  className="inline-flex items-center gap-2 font-sans-dm text-sm text-[#F8F7F2]/45 hover:text-[#E8A0C4] transition-colors cursor-pointer"
                >
                  <Mic className="w-3.5 h-3.5 text-[#E8A0C4]/50" />
                  <span>
                    {micPermissionDenied
                      ? 'Microphone unavailable — tap the button above'
                      : 'or blow through your microphone'}
                  </span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-2 font-sans-dm text-sm text-[#E8A0C4] animate-pulse">
                  <Mic className="w-3.5 h-3.5" />
                  Listening... blow gently
                </span>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <p className="font-serif-garamond text-2xl sm:text-3xl text-[#F3E5AB] italic font-light">
                "May it come true."
              </p>
              <p className="font-handwriting text-lg text-[#F8F7F2]/50">
                scroll down to open your letter ↓
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
