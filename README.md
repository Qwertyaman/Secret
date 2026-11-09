# 🌌 The Celestial Love Map — For Ishani

> A private, cinematic birthday experience crafted with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Motion for React**, and an **HTML5 Multi-Layer Cosmic Canvas Engine**.

---

## 🎨 Creative Direction & Design System

The experience is styled after luxury editorial design, cinematic astronomy, and high-end interactive websites (Awwwards-inspired):

- **Background Void**: `#0B0F19`
- **Secondary Space**: `#11172A`
- **Deep Indigo**: `#403B78`
- **Champagne Gold**: `#F3E5AB`
- **Muted Gold**: `#D6B66C`
- **Soft Pink**: `#E8A0C4`
- **Warm Ivory**: `#F8F7F2`

### Typography:
- **Romantic Editorial Headings**: `Cormorant Garamond`
- **Body & Captions**: `Manrope`
- **Handwritten Letter**: `Caveat`

---

## 🌟 The Six Cinematic Chapters

### 01 — OUR UNIVERSE
- Full-screen animated starfield with procedural deep indigo and rose nebulae.
- Central delicate constellation emblem dedicated to Ishani.
- Real-time countdown to **November 10, 2026**.
- Ambient celestial soundscape toggle (**OFF by default**).

### 02 — THINGS ONLY I NOTICED
- Interactive constellation with **5 glowing stars**.
- Connected via delicate animated astral lines.
- Clicking any star reveals an intimate observation with an editorial overlay (no generic cards).
- All observations are editable in `src/data/celestialData.ts`.

### 03 — HOW WE GOT HERE
- Cinematic vertical timeline of milestones:
  1. **May 9, 2026** — The Genesis of Our Orbit (Relationship start).
  2. **Flower Nebula** — The Bouquet (Pink floral nebula styling with your real bouquet photograph).
  3. **Orbital Rings** — The Bracelet (Golden orbital rings with pink gemstones and your real bracelet photograph).
  4. **November 10, 2026** — Her Birthday luminary.
- Directly loads `/assets/bouquet.jpg` and `/assets/bracelet.jpg`, with an inline file selector so you can also load them right from your browser.

### 04 — A THOUSAND LITTLE THINGS
- Interactive celestial star map with **10 golden stars**.
- Coordinate grid with discovering tracker ("X of 10 Stars Discovered").
- Reveals personal reasons why you love her in luxury editorial typography.

### 05 — MAKE A WISH
- Architectural luxury birthday cake (warm ivory, champagne gold, deep indigo).
- Glowing candles with gentle flame flicker.
- Interactive candle extinguishing:
  - Tap/click to extinguish
  - **Optional microphone blowing** (blow gently into the mic to extinguish!)
- Multi-stage golden stardust confetti explosion.
- Unlocks Chapter 06: "Just For You".

### 06 — JUST FOR YOU
- Animated wax-sealed envelope with golden seal: `✦ I ✦`.
- Unfolds with spring physics into:
  - **A handwritten-style romantic letter** (`Caveat` cursive script).
  - **Luxury Voice Note player** (Waveform visualizer, strictly manual playback, loads `/assets/voicenote.mp3` or direct upload).
  - **Cinematic final declaration**: *"The cosmos holds two trillion galaxies. My universe has only you."*

---

## 📸 Adding Your Real Media Assets

Place your files in `public/assets/`:
1. `bouquet.jpg` — Your real photograph of the bouquet.
2. `bracelet.jpg` — Your real photograph of the bracelet.
3. `voicenote.mp3` — Your recorded voice note for Ishani.

You can also drop or select your photographs directly using the inline "Select Photo" buttons on each card!

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```
Visit `http://localhost:5173` in your browser.
