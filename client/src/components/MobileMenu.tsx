import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  /** Anchor links for homepage, route links for inner pages */
  mode: 'landing' | 'inner';
}

export default function MobileMenu({ mode }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const landingLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#works', label: t('nav.work') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const innerLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/work', label: t('nav.work') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const handleAnchorClick = () => setOpen(false);

  return (
    <>
      <button
        className={`hamburger${open ? ' hamburger--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        data-cursor-hover="true"
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <div className={`mobile-overlay${open ? ' mobile-overlay--open' : ''}`}>
        <nav className="mobile-nav">
          {mode === 'landing' ? (
            landingLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                style={{ transitionDelay: `${0.05 * i}s` }}
                onClick={handleAnchorClick}
                data-cursor-hover="true"
              >
                {link.label}
              </a>
            ))
          ) : (
            innerLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link${location.pathname === link.path ? ' active' : ''}`}
                style={{ transitionDelay: `${0.05 * i}s` }}
                data-cursor-hover="true"
              >
                {link.label}
              </Link>
            ))
          )}

          <div className="mobile-nav-footer">
            <LanguageSwitcher />
            {mode === 'landing' ? (
              <a
                href="#contact"
                className="nav-cta mobile-cta"
                onClick={handleAnchorClick}
                data-cursor-hover="true"
              >
                {t('nav.cta')}
              </a>
            ) : (
              <Link to="/contact" className="nav-cta mobile-cta" data-cursor-hover="true">
                {t('nav.cta')}
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
