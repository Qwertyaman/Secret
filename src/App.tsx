import { CosmicCanvas } from './components/canvas/CosmicCanvas';
import { useMouseParallax } from './hooks/useMouseParallax';
import { useCelestialAudio } from './hooks/useCelestialAudio';

// Common Atmospheric Controls & Signature Vertical Celestial Thread
import { AmbientAudioToggle } from './components/common/AmbientAudioToggle';
import { CelestialThread } from './components/common/CelestialThread';

// The Six Continuous Storybook Chapters
import { OurUniverse } from './components/chapters/OurUniverse';
import { ThingsOnlyINoticed } from './components/chapters/ThingsOnlyINoticed';
import { HowWeGotHere } from './components/chapters/HowWeGotHere';
import { AThousandLittleThings } from './components/chapters/AThousandLittleThings';
import { MakeAWish } from './components/chapters/MakeAWish';
import { JustForYou } from './components/chapters/JustForYou';

export function App() {
  // Parallax Coordinates for Subtle Starfield Shift
  const parallax = useMouseParallax(0.035);

  // Audio Hook (Ambient Music is OFF by default)
  const {
    isPlaying,
    toggleSound,
    playStarChime,
    playMeteorShimmer,
  } = useCelestialAudio();

  return (
    <div className="relative min-h-screen w-full bg-[#0B0F19] text-[#F8F7F2] overflow-x-hidden selection:bg-[#E8A0C4]/30 selection:text-[#F3E5AB]">
      {/* 60 FPS Multi-Layer Cosmic Canvas Engine */}
      <CosmicCanvas
        parallaxOffset={parallax}
        onMeteorSpawn={() => {
          if (isPlaying) {
            playMeteorShimmer();
          }
        }}
      />

      {/* Signature Vertical Celestial Thread (Illuminates as Ishani scrolls) */}
      <CelestialThread />

      {/* Floating Ambient Audio Toggle (OFF by default) */}
      <AmbientAudioToggle
        isPlaying={isPlaying}
        onToggle={toggleSound}
      />

      {/* ONE CONTINUOUS SCROLLING STORYBOOK PAGE */}
      <main className="relative z-10 w-full pl-6 sm:pl-16 lg:pl-20">
        {/* CHAPTER 1 — ONCE UPON A UNIVERSE */}
        <div id="chapter-1">
          <OurUniverse />
        </div>

        {/* CHAPTER 2 — SOMEWHERE, I NOTICED YOU */}
        <div id="chapter-2">
          <ThingsOnlyINoticed playChime={playStarChime} />
        </div>

        {/* CHAPTER 3 — AND THEN, OUR STORY BEGAN */}
        <div id="chapter-3">
          <HowWeGotHere />
        </div>

        {/* CHAPTER 4 — A THOUSAND LITTLE REASONS */}
        <div id="chapter-4">
          <AThousandLittleThings playChime={playStarChime} />
        </div>

        {/* CHAPTER 5 — MAKE A WISH, MY LOVE */}
        <div id="chapter-5">
          <MakeAWish playChime={playStarChime} />
        </div>

        {/* CHAPTER 6 — ONE LAST THING, FROM MY HEART */}
        <div id="chapter-6">
          <JustForYou playChime={playStarChime} />
        </div>
      </main>
    </div>
  );
}

export default App;
