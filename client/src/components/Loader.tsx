import { useState, useEffect } from 'react';

/**
 * Full-screen loading screen with G.UX logo animation.
 * Only shows on first visit (sessionStorage flag).
 */
export default function Loader() {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem('portfolio-loaded');
  });
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setHiding(true);
      sessionStorage.setItem('portfolio-loaded', '1');
      setTimeout(() => setVisible(false), 600);
    }, 1400);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`loader${hiding ? ' loader--hiding' : ''}`}>
      <div className="loader-logo">
        <span className="loader-g">G</span>
        <span className="loader-dot">.</span>
        <span className="loader-ux">UX</span>
      </div>
      <div className="loader-line" />
    </div>
  );
}
