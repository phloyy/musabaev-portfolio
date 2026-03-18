import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Reset cursor state on every route change
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('hovering');
    }
  }, [location.pathname]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let hoveredEl: Element | null = null;

    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      if (el.getAttribute('data-cursor-hover') === 'true') return true;
      const tag = el.tagName.toLowerCase();
      if (tag === 'a' || tag === 'button') return true;
      // Walk up max 3 parents to find interactive ancestor
      let parent = el.parentElement;
      let depth = 0;
      while (parent && depth < 3) {
        if (parent.getAttribute('data-cursor-hover') === 'true') return true;
        const ptag = parent.tagName.toLowerCase();
        if (ptag === 'a' || ptag === 'button') return true;
        parent = parent.parentElement;
        depth++;
      }
      return false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      // Check what element is under cursor to fix stuck-hover bug
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (isInteractive(el)) {
        if (!cursor.classList.contains('hovering')) {
          cursor.classList.add('hovering');
        }
        hoveredEl = el;
      } else {
        if (cursor.classList.contains('hovering')) {
          cursor.classList.remove('hovering');
        }
        hoveredEl = null;
      }
    };

    const handleMouseLeaveWindow = () => {
      cursor.classList.remove('hovering');
      hoveredEl = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}
