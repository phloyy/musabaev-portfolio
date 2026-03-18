import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLang();

  return (
    <div className="about-container">
      {/* Vector Background Banner */}
      <div className="page-vector-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="page-vector-svg">
          <defs>
            <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--clr-accent)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="var(--clr-accent)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,64 C360,128 720,0 1080,96 C1260,144 1380,80 1440,112 L1440,0 L0,0 Z" fill="url(#aboutGrad)" />
          <path d="M0,32 C240,96 480,16 720,64 C960,112 1200,48 1440,80 L1440,0 L0,0 Z" fill="none" stroke="var(--clr-accent)" strokeOpacity="0.06" strokeWidth="1" />
          <circle cx="200" cy="60" r="2" fill="var(--clr-accent)" fillOpacity="0.15" />
          <circle cx="600" cy="40" r="1.5" fill="var(--clr-accent)" fillOpacity="0.12" />
          <circle cx="1000" cy="70" r="2.5" fill="var(--clr-accent)" fillOpacity="0.1" />
          <circle cx="1300" cy="50" r="1.8" fill="var(--clr-accent)" fillOpacity="0.13" />
          <line x1="180" y1="80" x2="300" y2="40" stroke="var(--clr-accent)" strokeOpacity="0.04" strokeWidth="0.5" />
          <line x1="580" y1="60" x2="720" y2="30" stroke="var(--clr-accent)" strokeOpacity="0.04" strokeWidth="0.5" />
          <line x1="980" y1="90" x2="1100" y2="50" stroke="var(--clr-accent)" strokeOpacity="0.04" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="about-header">
        <h1 className="about-title">{t('page.about')}</h1>
        <p className="about-intro">{t('about.intro')}</p>
      </div>

      <div className="about-content">
        <div className="content-section">
          <div className="section-label">{t('about.bg.label')}</div>
          <div className="section-title">{t('about.bg.title')}</div>
          <div className="section-text">{t('about.bg.text1')}</div>
          <div className="section-text">{t('about.bg.text2')}</div>
        </div>

        <div className="content-section">
          <div className="section-label">{t('about.expertise.label')}</div>
          <div className="section-title">{t('about.expertise.title')}</div>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-category-title">{t('skills.design')}</div>
              <div className="skill-list">
                <div className="skill-item">UI/UX Design</div>
                <div className="skill-item">Brand Identity</div>
                <div className="skill-item">Editorial Design</div>
                <div className="skill-item">Design Systems</div>
                <div className="skill-item">Information Architecture</div>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-title">{t('skills.tools')}</div>
              <div className="skill-list">
                <div className="skill-item">Figma</div>
                <div className="skill-item">Adobe Creative Suite</div>
                <div className="skill-item">Webflow</div>
                <div className="skill-item">Framer</div>
                <div className="skill-item">After Effects</div>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-title">{t('skills.development')}</div>
              <div className="skill-list">
                <div className="skill-item">HTML / CSS</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">React</div>
                <div className="skill-item">Responsive Design</div>
                <div className="skill-item">Web Performance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="section-label">{t('about.exp.label')}</div>
          <div className="section-title">{t('about.exp.title')}</div>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024 — Now</div>
              <div className="timeline-content">
                <div className="timeline-title">Senior Designer</div>
                <div className="timeline-description">Leading design strategy and execution for digital products</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022 — 2024</div>
              <div className="timeline-content">
                <div className="timeline-title">Product Designer</div>
                <div className="timeline-description">Designed interfaces for fintech and e-commerce platforms</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2020 — 2022</div>
              <div className="timeline-content">
                <div className="timeline-title">Graphic Designer</div>
                <div className="timeline-description">Worked on brand identity and editorial design projects</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2018 — 2020</div>
              <div className="timeline-content">
                <div className="timeline-title">Design Intern</div>
                <div className="timeline-description">Started career in design at boutique creative agency</div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="section-label">{t('about.edu.label')}</div>
          <div className="section-title">{t('about.edu.title')}</div>
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <div className="timeline-content">
              <div className="timeline-title">BFA in Graphic Design</div>
              <div className="timeline-description">School of Visual Arts, New York</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-section-inner landing-footer-inner">
          <div className="footer-left">
            <Link to="/" className="footer-logo" data-cursor-hover="true">G.UX</Link>
            <span className="footer-copy">{t('footer.copy')}</span>
          </div>
          <nav className="footer-links">
            <Link to="/work" data-cursor-hover="true">{t('nav.work')}</Link>
            <Link to="/about" data-cursor-hover="true">{t('nav.about')}</Link>
            <Link to="/contact" data-cursor-hover="true">{t('nav.contact')}</Link>
          </nav>
          <div className="footer-social">
            <a href="#" data-cursor-hover="true">Read.cv</a>
            <a href="#" data-cursor-hover="true">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
