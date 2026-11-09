import { useState, useEffect, useRef, useCallback } from 'react';

export function useCelestialAudio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const droneOscsRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);

  // Initialize Web Audio Context on first explicit interaction
  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.connect(ctx.destination);

      audioCtxRef.current = ctx;
      masterGainRef.current = masterGain;
    } catch (e) {
      console.warn('AudioContext not supported or blocked:', e);
    }
  }, []);

  // Ambient Celestial Drone Synthesizer (Space Pad / Velvet Chords)
  const startAmbientDrone = useCallback(() => {
    initAudio();
    const ctx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (!ctx || !masterGain) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Stop existing oscillators smoothly
    droneOscsRef.current.forEach(({ osc, gain }) => {
      try {
        gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        setTimeout(() => osc.stop(), 1200);
      } catch {}
    });
    droneOscsRef.current = [];

    // Frequencies for a warm celestial dream chord:
    // D2 (73.42Hz), A2 (110Hz), F3 (174.61Hz), C4 (261.63Hz), E4 (329.63Hz)
    const baseFreqs = [73.42, 110.0, 174.61, 261.63, 329.63];

    baseFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.6, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420 + idx * 75, ctx.currentTime);

      const targetGain = 0.03 / (idx + 1);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(targetGain, ctx.currentTime + 3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start();
      droneOscsRef.current.push({ osc, gain });
    });

    masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 2);
    setIsPlaying(true);
  }, [initAudio]);

  const stopAmbientDrone = useCallback(() => {
    const ctx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (!ctx || !masterGain) return;

    masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    setTimeout(() => {
      setIsPlaying(false);
    }, 1200);
  }, []);

  const toggleSound = useCallback(() => {
    if (isPlaying) {
      stopAmbientDrone();
    } else {
      startAmbientDrone();
    }
  }, [isPlaying, startAmbientDrone, stopAmbientDrone]);

  // Crystal Chime Sound Effect
  const playStarChime = useCallback((pitchMultiplier = 1) => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const notes = [587.33, 659.25, 880.0, 1046.5, 1318.51];
    const baseFreq = notes[Math.floor(Math.random() * notes.length)] * pitchMultiplier;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.4, ctx.currentTime + 0.9);

    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.3);
  }, [initAudio]);

  // Shooting Star Shimmer
  const playMeteorShimmer = useCallback(() => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.035, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  }, [initAudio]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, []);

  return {
    isPlaying,
    toggleSound,
    startAmbientDrone,
    stopAmbientDrone,
    playStarChime,
    playMeteorShimmer,
  };
}
