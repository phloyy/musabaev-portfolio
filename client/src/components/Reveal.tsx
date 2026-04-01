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
  duration = 1.2,
  className = '',
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const transforms: Record<Direction, string> = {
    up: 'translateY(60px)',
    down: 'translateY(-60px)',
    left: 'translateX(-60px)',
    right: 'translateX(60px)',
    scale: 'scale(0.9)',
    none: 'none',
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : transforms[direction],
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
