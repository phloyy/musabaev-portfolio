import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Reusable IntersectionObserver hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element and a boolean `isVisible`.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.style.willChange = 'opacity, transform';
          
          const handleTransitionEnd = (e: TransitionEvent) => {
            if (e.propertyName === 'opacity' || e.propertyName === 'transform') {
              el.style.willChange = 'auto';
              el.removeEventListener('transitionend', handleTransitionEnd);
            }
          };
          el.addEventListener('transitionend', handleTransitionEnd);

          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
          el.style.willChange = 'auto';
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
