import { useEffect, useState, useRef } from 'react';

export function useMouseParallax(damping = 0.05) {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1 based on center of screen
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRef.current = { x: normalizedX, y: normalizedY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normalizedX = (touch.clientX / window.innerWidth - 0.5) * 2;
        const normalizedY = (touch.clientY / window.innerHeight - 0.5) * 2;
        targetRef.current = { x: normalizedX, y: normalizedY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const updateLoop = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * damping;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * damping;

      setCoords({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [damping]);

  return coords;
}

