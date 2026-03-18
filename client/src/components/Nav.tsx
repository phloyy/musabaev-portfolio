import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

interface NavProps {
  /** When true, nav starts transparent and becomes solid on scroll (for homepage hero) */
  transparent?: boolean;
}

export default function Nav({ transparent = false }: NavProps) {
  const location = useLocation();
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll(); // check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/work', label: t('nav.work') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const navClass = [
    'site-nav',
    transparent && !scrolled ? 'site-nav--transparent' : '',
    transparent && scrolled ? 'site-nav--scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass}>
      <Link to="/" className="nav-logo" data-cursor-hover="true">
        G.UX
      </Link>
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
            data-cursor-hover="true"
          >
            {link.label}
          </Link>
        ))}
        <LanguageSwitcher />
        <Link to="/contact" className="nav-cta" data-cursor-hover="true">
          {t('nav.cta')}
        </Link>
      </div>
      <MobileMenu mode="inner" />
    </nav>
  );
}
