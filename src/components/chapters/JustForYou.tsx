import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Play, Pause, Upload } from 'lucide-react';
import { romanticLetterData, voiceNoteData, ishaniProfile } from '../../data/celestialData';

interface JustForYouProps {
  playChime: () => void;
}

export const JustForYou: React.FC<JustForYouProps> = ({ playChime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(88);
  const [audioSrc, setAudioSrc] = useState<string>(voiceNoteData.audioUrl || '/assets/voicenote.mp3');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenEnvelope = () => {
    playChime();
    setIsOpen(true);
  };

  const handleToggleVoiceNote = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Audio play failed or file missing:', err);
      });
      setIsPlayingAudio(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration) setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlayingAudio(false);
    setCurrentTime(0);
  };

  const handleCustomAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAudioSrc(url);
    setIsPlayingAudio(false);
    setCurrentTime(0);
    playChime();
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
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
          <span className="font-handwriting text-xl sm:text-2xl text-[#E8A0C4]">
            Chapter 6 ~ One last thing, from my heart
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
            I wrote you a letter.
          </h2>
          <p className="font-serif-garamond text-xl text-[#F8F7F2]/60 italic font-light">
            It has been waiting for you.
          </p>
        </motion.div>

        {/* Envelope / Letter */}
        <div className="w-full mb-14">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Sealed envelope */
              <motion.div
                key="sealed-envelope"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleOpenEnvelope}
                className="relative cursor-pointer w-full p-12 sm:p-16 rounded-3xl border border-[#E8A0C4]/25 bg-[#11172A]/50 flex flex-col items-center justify-center hover:border-[#E8A0C4]/50 transition-all duration-500 group overflow-hidden"
              >
                {/* Top gold line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F3E5AB]/50 to-transparent" />

                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8A0C4]/5 via-transparent to-transparent pointer-events-none group-hover:from-[#E8A0C4]/10 transition-all duration-700" />

                {/* Wax seal */}
                <div className="relative mb-7">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #F3E5AB, #E8A0C4, #403B78)',
                      padding: '2px',
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0d1120] border border-[#F3E5AB]/25 flex items-center justify-center">
                      <span className="font-serif-garamond text-2xl italic text-[#F3E5AB]">I</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif-garamond text-2xl sm:text-3xl font-light text-[#F8F7F2] mb-2">
                  For {ishaniProfile.name}
                </h3>
                <span className="font-handwriting text-base text-[#F8F7F2]/40 mb-8 block">
                  sealed on {ishaniProfile.birthdayDateString}
                </span>

                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E8A0C4]/40 text-[#E8A0C4] font-sans-dm text-sm group-hover:bg-[#E8A0C4]/10 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>Open the letter</span>
                </div>
              </motion.div>
            ) : (
              /* Unfolded letter */
              <motion.div
                key="open-letter"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full p-8 sm:p-14 rounded-3xl border border-[#E8A0C4]/20 text-left overflow-hidden"
                style={{ background: 'linear-gradient(to bottom, #0f1424, #0d1120)' }}
              >
                {/* Top decorative line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F3E5AB]/40 to-transparent" />

                {/* Date header */}
                <div className="flex items-center justify-between pb-5 mb-8 border-b border-white/[0.07]">
                  <span className="font-handwriting text-lg text-[#F3E5AB]/60">
                    {ishaniProfile.birthdayDateString}
                  </span>
                  <span className="font-handwriting text-base text-[#E8A0C4]/50">
                    written for you
                  </span>
                </div>

                {/* Salutation */}
                <h3 className="font-handwriting text-3xl sm:text-4xl text-[#F3E5AB] mb-7">
                  {romanticLetterData.salutation}
                </h3>

                {/* Letter body */}
                <div className="space-y-5 font-handwriting text-xl sm:text-2xl text-[#F8F7F2]/88 leading-relaxed font-light">
                  {romanticLetterData.paragraphs.map((p, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + idx * 0.15 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>

                {/* Closing */}
                <div className="mt-10 pt-6 border-t border-white/[0.07]">
                  <div className="font-serif-garamond text-base text-[#F8F7F2]/50 italic mb-1">
                    {romanticLetterData.closing}
                  </div>
                  <div className="font-handwriting text-3xl text-[#F3E5AB]">
                    {romanticLetterData.signature}
                  </div>
                  {romanticLetterData.postScript && (
                    <div className="font-handwriting text-base text-[#E8A0C4]/60 italic mt-5">
                      {romanticLetterData.postScript}
                    </div>
                  )}
                </div>

                {/* Voice note player */}
                <div className="mt-12 pt-8 border-t border-white/[0.07]">
                  <span className="font-handwriting text-lg text-[#F3E5AB]/70 block mb-5">
                    And one more thing — I recorded something for you.
                  </span>

                  <div className="p-5 sm:p-6 rounded-2xl border border-[#E8A0C4]/15 bg-[#0B0F19]/60 flex flex-col sm:flex-row items-center gap-5">
                    {/* Play button */}
                    <button
                      onClick={handleToggleVoiceNote}
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shrink-0 shadow-[0_0_20px_rgba(232,160,196,0.3)]"
                      style={{ background: 'linear-gradient(135deg, #E8A0C4, #C4B5FD)' }}
                    >
                      {isPlayingAudio ? (
                        <Pause className="w-5 h-5 fill-current text-[#0B0F19]" />
                      ) : (
                        <Play className="w-5 h-5 fill-current text-[#0B0F19] ml-0.5" />
                      )}
                    </button>

                    {/* Waveform + info */}
                    <div className="flex-1 w-full text-left">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans-dm text-sm text-[#F8F7F2]/80 font-medium">{voiceNoteData.title}</span>
                        <span className="font-sans-dm text-xs text-[#F8F7F2]/40">
                          {formatSeconds(currentTime)} / {formatSeconds(duration)}
                        </span>
                      </div>

                      {/* Waveform bars */}
                      <div className="h-6 flex items-center gap-0.5 w-full overflow-hidden">
                        {[40, 65, 30, 80, 50, 90, 70, 35, 85, 60, 45, 95, 30, 75, 55, 85, 40, 60, 90, 50, 35, 70, 85, 45].map((h, i) => (
                          <span
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-200 ${
                              isPlayingAudio ? 'bg-[#E8A0C4]' : 'bg-white/15'
                            }`}
                            style={{
                              height: isPlayingAudio ? `${h}%` : '20%',
                              animationDelay: `${i * 45}ms`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="mt-2 font-handwriting text-sm text-[#F8F7F2]/30 italic">
                        {voiceNoteData.transcriptSnippet}
                      </div>
                    </div>

                    {/* Upload replacement */}
                    <label
                      className="shrink-0 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-[#F8F7F2]/40 hover:text-[#F3E5AB] transition-colors cursor-pointer flex items-center gap-1.5"
                      title="Load your voice note file"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span className="font-sans-dm text-[10px]">Load audio</span>
                      <input type="file" accept="audio/*" onChange={handleCustomAudioUpload} className="hidden" />
                    </label>

                    <audio
                      ref={audioRef}
                      src={audioSrc}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleAudioEnded}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Final declaration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="w-10 h-px bg-[#E8A0C4]/30 mx-auto mb-8" />

          <h2 className="font-serif-garamond text-3xl sm:text-4xl lg:text-5xl font-light text-[#F8F7F2] leading-tight mb-5">
            "Of all the people in this world,{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(to right, #F3E5AB, #E8A0C4)',
            }}>
              I am so glad it was you.
            </span>
            "
          </h2>

          <p className="font-handwriting text-xl sm:text-2xl text-[#E8A0C4] mb-8">
            Happy Birthday, Ishani. ♡
          </p>

          <span className="font-sans-dm text-xs text-[#F8F7F2]/25 tracking-wider">
            Made with love · November 10, 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
};
