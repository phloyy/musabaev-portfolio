import { type ReactNode, type CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

/**
 * Wraps children in a scroll-reveal animation.
 * Uses IntersectionObserver — no JS animation libraries needed.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const transforms: Record<Direction, string> = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    scale: 'scale(0.95)',
    none: 'none',
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : transforms[direction],
    transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
