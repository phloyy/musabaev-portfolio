import React, { Suspense, useRef, useEffect, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';

/* Lazy-load inner pages — they share no critical-path code with Homepage */
const WorkIndex = React.lazy(() => import('./pages/WorkIndex'));
const CaseStudy = React.lazy(() => import('./pages/CaseStudy'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Admin = React.lazy(() => import('./pages/Admin'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

/** Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);
  const [displayChildren, setDisplayChildren] = React.useState(children);
  const [transitionStage, setTransitionStage] = React.useState('in');

  React.useEffect(() => {
    if (prevPathname.current === location.pathname) return;
    prevPathname.current = location.pathname;

    setTransitionStage('out');
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('in');
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Sync children on first render and when pathname changes
  React.useEffect(() => {
    setDisplayChildren(children);
  }, [location.pathname]);

  return (
    <div
      className="page-transition"
      style={{
        animation: `${transitionStage === 'in' ? 'fadeIn' : 'fadeOut'} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
      }}
    >
      {displayChildren}
    </div>
  );
}

/** Determines whether to show transparent nav (homepage) or solid nav */
function AppNav() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  return <Nav transparent={isHomepage} />;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition>
      <Suspense fallback={<div className="lazy-fallback" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Loader />
        <Cursor />
        <ScrollToTop />
        <AppNav />
        <main id="main-content">
          <AppRoutes />
        </main>
      </Router>
    </LanguageProvider>
  );
}
