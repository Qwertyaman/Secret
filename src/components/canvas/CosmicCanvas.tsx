import React, { useEffect, useRef, useCallback } from 'react';

interface CosmicCanvasProps {
  parallaxOffset?: { x: number; y: number };
  onMeteorSpawn?: () => void;
}

interface BackgroundStar {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
  layer: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
  thickness: number;
}

export const CosmicCanvas: React.FC<CosmicCanvasProps> = ({
  parallaxOffset = { x: 0, y: 0 },
  onMeteorSpawn,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<BackgroundStar[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastShootingStarTime = useRef<number>(Date.now());

  // Initialize luxury celestial stars
  useEffect(() => {
    const starColors = [
      'rgba(248, 247, 242, ', // Warm ivory
      'rgba(243, 229, 171, ', // Champagne gold
      'rgba(214, 182, 108, ', // Muted gold
      'rgba(232, 160, 196, ', // Soft pink
    ];

    // Responsive count: lighter for mobile performance
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 180 : 320;
    const newStars: BackgroundStar[] = [];

    for (let i = 0; i < count; i++) {
      const layer = Math.random() < 0.6 ? 1 : Math.random() < 0.88 ? 2 : 3;
      const size =
        layer === 1
          ? Math.random() * 0.9 + 0.3
          : layer === 2
          ? Math.random() * 1.3 + 0.6
          : Math.random() * 1.8 + 1.0;
      const colorPrefix = starColors[Math.floor(Math.random() * starColors.length)];

      newStars.push({
        x: Math.random(),
        y: Math.random(),
        size,
        baseAlpha: Math.random() * 0.5 + 0.2,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        layer,
        color: colorPrefix,
      });
    }

    starsRef.current = newStars;
  }, []);

  const spawnShootingStar = useCallback(
    (customAngle?: number, customX?: number, customY?: number) => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.width / (window.devicePixelRatio || 1);
      const height = canvasRef.current.height / (window.devicePixelRatio || 1);

      const angle =
        customAngle !== undefined
          ? customAngle
          : Math.PI / 4 + (Math.random() * 0.25 - 0.12);
      const x = customX !== undefined ? customX : Math.random() * width * 0.8;
      const y = customY !== undefined ? customY : Math.random() * height * 0.35;

      const colors = ['#F3E5AB', '#D6B66C', '#F8F7F2', '#E8A0C4'];
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];

      shootingStarsRef.current.push({
        x,
        y,
        length: Math.random() * 70 + 60,
        speed: Math.random() * 8 + 10,
        angle,
        alpha: 1,
        color: chosenColor,
        thickness: Math.random() * 1.3 + 0.9,
      });

      onMeteorSpawn?.();
    },
    [onMeteorSpawn]
  );

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    spawnShootingStar(
      Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      clickX - 60,
      clickY - 60
    );
  };

  // 60 FPS Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for mobile battery efficiency

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const now = Date.now();

      // Deep obsidian void
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, width, height);

      // Subtle procedural deep space nebular gradient
      const time = now * 0.0003;

      // Deep Indigo Cloud
      const gradIndigo = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 30,
        height * 0.4 + Math.cos(time) * 20,
        20,
        width * 0.3,
        height * 0.4,
        width * 0.6
      );
      gradIndigo.addColorStop(0, 'rgba(64, 59, 120, 0.08)');
      gradIndigo.addColorStop(0.6, 'rgba(17, 23, 42, 0.03)');
      gradIndigo.addColorStop(1, 'rgba(11, 15, 25, 0)');
      ctx.fillStyle = gradIndigo;
      ctx.fillRect(0, 0, width, height);

      // Soft Pink Nebula Dust
      const gradPink = ctx.createRadialGradient(
        width * 0.75 + Math.cos(time * 0.7) * 35,
        height * 0.7 + Math.sin(time * 0.7) * 25,
        20,
        width * 0.75,
        height * 0.7,
        width * 0.55
      );
      gradPink.addColorStop(0, 'rgba(232, 160, 196, 0.05)');
      gradPink.addColorStop(0.5, 'rgba(214, 182, 108, 0.03)');
      gradPink.addColorStop(1, 'rgba(11, 15, 25, 0)');
      ctx.fillStyle = gradPink;
      ctx.fillRect(0, 0, width, height);

      // Background Starfield
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.phase += star.twinkleSpeed;
        const shimmer = Math.sin(star.phase);
        star.alpha = star.baseAlpha + shimmer * 0.3;
        const clampedAlpha = Math.max(0.1, Math.min(0.9, star.alpha));

        const px = parallaxOffset.x * (star.layer * 8);
        const py = parallaxOffset.y * (star.layer * 8);

        const x = (star.x * width + px + width) % width;
        const y = (star.y * height + py + height) % height;

        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${clampedAlpha})`;
        ctx.fill();

        // Extra delicate shimmer aura for prominent stars
        if (star.size > 1.4 && clampedAlpha > 0.65) {
          ctx.beginPath();
          ctx.arc(x, y, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${clampedAlpha * 0.12})`;
          ctx.fill();
        }
      }

      // Periodic Shooting Star Spawner (every 6-10 seconds)
      if (now - lastShootingStarTime.current > Math.random() * 4000 + 6000) {
        spawnShootingStar();
        lastShootingStarTime.current = now;
      }

      // Render Dynamic Shooting Stars
      const meteors = shootingStarsRef.current;
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        meteorGrad.addColorStop(0, 'rgba(243, 229, 171, 0)');
        meteorGrad.addColorStop(0.7, m.color + '88');
        meteorGrad.addColorStop(1, '#F8F7F2');

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = m.thickness;
        ctx.stroke();

        // Glowing Meteor Head
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = '#F8F7F2';
        ctx.fill();

        // Advance meteor
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.016;

        if (m.x > width + 100 || m.y > height + 100 || m.alpha <= 0) {
          meteors.splice(i, 1);
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [parallaxOffset, spawnShootingStar]);

  return (
    <canvas
      ref={canvasRef}
      onClick={handleCanvasClick}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
};
