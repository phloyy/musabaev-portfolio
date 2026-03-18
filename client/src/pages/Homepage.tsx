import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useLang } from '../i18n/LanguageContext';
import Reveal from '../components/Reveal';
import NaturalLanguageForm from '../components/NaturalLanguageForm';

const skillsData = [
  { categoryKey: 'skills.design', items: ['UI/UX Design', 'Brand Identity', 'Editorial Design', 'Design Systems', 'Information Architecture'] },
  { categoryKey: 'skills.tools', items: ['Figma', 'Adobe Creative Suite', 'Webflow', 'Framer', 'After Effects'] },
  { categoryKey: 'skills.development', items: ['HTML / CSS', 'JavaScript', 'React', 'Responsive Design', 'Web Performance'] },
];

export default function Homepage() {
  const { t } = useLang();



  const servicesKeys = [
    { id: '01', titleKey: 'service.1.title', descKey: 'service.1.desc' },
    { id: '02', titleKey: 'service.2.title', descKey: 'service.2.desc' },
    { id: '03', titleKey: 'service.3.title', descKey: 'service.3.desc' },
    { id: '04', titleKey: 'service.4.title', descKey: 'service.4.desc' },
  ];

  const processKeys = [
    { id: '01', titleKey: 'process.1.title', descKey: 'process.1.desc' },
    { id: '02', titleKey: 'process.2.title', descKey: 'process.2.desc' },
    { id: '03', titleKey: 'process.3.title', descKey: 'process.3.desc' },
    { id: '04', titleKey: 'process.4.title', descKey: 'process.4.desc' },
    { id: '05', titleKey: 'process.5.title', descKey: 'process.5.desc' },
  ];

  const pricingKeys = [
    {
      tierKey: 'pricing.starter', rangeKey: 'pricing.starter.range', descKey: 'pricing.starter.desc',
      includesKeys: ['pricing.includes.brandIdentity', 'pricing.includes.landingPage', 'pricing.includes.2revisions'],
    },
    {
      tierKey: 'pricing.pro', rangeKey: 'pricing.pro.range', descKey: 'pricing.pro.desc', featured: true,
      includesKeys: ['pricing.includes.fullBranding', 'pricing.includes.multiPage', 'pricing.includes.motionDesign', 'pricing.includes.4revisions'],
    },
    {
      tierKey: 'pricing.enterprise', rangeKey: 'pricing.enterprise.range', descKey: 'pricing.enterprise.desc',
      includesKeys: ['pricing.includes.designSystem', 'pricing.includes.productDesign', 'pricing.includes.artDirection', 'pricing.includes.dedicatedSupport'],
    },
  ];

  return (
    <div className="landing-container">
      {/* ── HERO ── */}
      <section className="hero-section" id="hero">
        <div className="hero-video-bg">
          {/* Replace src with your video file path */}
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            {/* <source src="/video/hero-bg.mp4" type="video/mp4" /> */}
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="landing-section-inner hero-inner">
          <div className="hero-content">
            <Reveal direction="up" delay={0.1}><div className="hero-label">{t('hero.label')}</div></Reveal>
            <Reveal direction="up" delay={0.2}><h1 className="hero-name">{t('hero.name')}</h1></Reveal>
            <Reveal direction="up" delay={0.35}><p className="hero-bio">{t('hero.bio')}</p></Reveal>
            <Reveal direction="up" delay={0.5}><a href="#contact" className="hero-cta" data-cursor-hover="true">{t('nav.cta')}</a></Reveal>
          </div>
          <Reveal direction="right" delay={0.4}>
            <div className="hero-meta">
              <div className="hero-meta-block">
                <span>{t('hero.status')}</span>
                <span>{t('hero.statusValue')}</span>
              </div>
              <div className="hero-meta-block">
                <span>{t('hero.based')}</span>
                <span>{t('hero.basedValue')}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. SELECTED WORKS ── */}
      <section className="works-section" id="works">
        <div className="landing-section-inner">
          <Reveal><div className="section-label">{t('works.label')}</div></Reveal>
          <Reveal delay={0.1}><div className="section-title">{t('works.title')}</div></Reveal>
          <div className="project-list">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="project-row"
                data-cursor-hover="true"
              >
                <span className="p-idx">{project.id}</span>
                <span className="p-title">{project.title}</span>
                <span className="p-type">{project.type}</span>
                <span className="p-year">{project.year}</span>
                <img
                  src={project.img}
                  alt={project.title}
                  className="hover-reveal"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
          <div className="works-cta-row">
            <Link to="/work" className="works-view-all" data-cursor-hover="true">
              {t('works.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="services-section" id="services">
        <div className="landing-section-inner">
          <Reveal><div className="section-label">{t('services.label')}</div></Reveal>
          <Reveal delay={0.1}><div className="section-title">{t('services.title')}</div></Reveal>
          <div className="services-grid">
            {servicesKeys.map((service, i) => (
              <Reveal key={service.id} direction="up" delay={0.1 * i}>
                <div className="service-item">
                  <span className="service-idx">{service.id}</span>
                  <h3 className="service-title">{t(service.titleKey)}</h3>
                  <p className="service-desc">{t(service.descKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ── */}
      <section className="process-section">
        <div className="landing-section-inner">
          <Reveal><div className="section-label">{t('process.label')}</div></Reveal>
          <Reveal delay={0.1}><div className="section-title">{t('process.title')}</div></Reveal>
          <div className="process-steps">
            {processKeys.map((step, i) => (
              <Reveal key={step.id} direction="up" delay={0.1 * i}>
                <div className="process-step">
                  <span className="process-step-idx">{step.id}</span>
                  <h3 className="process-step-title">{t(step.titleKey)}</h3>
                  <p className="process-step-desc">{t(step.descKey)}</p>
                  {i < processKeys.length - 1 && (
                    <span className="process-arrow" aria-hidden="true">&rarr;</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PRICING ── */}
      <section className="pricing-section">
        <div className="landing-section-inner">
          <Reveal><div className="section-label">{t('pricing.label')}</div></Reveal>
          <Reveal delay={0.1}><div className="section-title">{t('pricing.title')}</div></Reveal>
          <div className="pricing-grid">
            {pricingKeys.map((tier, i) => (
              <Reveal key={tier.tierKey} direction="scale" delay={0.12 * i}>
              <div
                className={`pricing-card${tier.featured ? ' pricing-card--featured' : ''}`}
              >
                <div className="pricing-tier">{t(tier.tierKey)}</div>
                <div className="pricing-range">{t(tier.rangeKey)}</div>
                <p className="pricing-desc">{t(tier.descKey)}</p>
                <ul className="pricing-includes">
                  {tier.includesKeys.map((key) => (
                    <li className="pricing-item" key={key}>{t(key)}</li>
                  ))}
                </ul>
                <a href="#contact" className="pricing-cta" data-cursor-hover="true">{t('pricing.cta')}</a>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ABOUT / SKILLS ── */}
      <section className="about-landing-section" id="about">
        <div className="landing-section-inner">
          <Reveal><div className="section-label">{t('about.label')}</div></Reveal>
          <Reveal delay={0.1}><div className="section-title">{t('about.title')}</div></Reveal>
          <div className="about-split">
            <div className="about-split-text">
              <p className="section-text">{t('about.text1')}</p>
              <p className="section-text">{t('about.text2')}</p>
              <Link to="/about" className="about-read-more" data-cursor-hover="true">
                {t('about.readMore')}
              </Link>
            </div>
            <div className="skills-grid">
              {skillsData.map((group) => (
                <div className="skill-category" key={group.categoryKey}>
                  <div className="skill-category-title">{t(group.categoryKey)}</div>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <div className="skill-item" key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA / CONTACT ── */}
      <section className="cta-section" id="contact">
        <div className="landing-section-inner">
          <Reveal direction="up"><div className="cta-heading">{t('cta.heading').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}</div></Reveal>
          <Reveal direction="up" delay={0.15}><p className="cta-subtext">{t('cta.subtext')}</p></Reveal>
          <NaturalLanguageForm />
        </div>
      </section>

      {/* ── 9. FOOTER ── */}
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
