import { useLang } from '../i18n/LanguageContext';
import NaturalLanguageForm from '../components/NaturalLanguageForm';

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="nlf-page">
      {/* Vector Background Banner */}
      <div className="page-vector-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="page-vector-svg">
          <defs>
            <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--clr-accent)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="var(--clr-accent)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,64 C360,128 720,0 1080,96 C1260,144 1380,80 1440,112 L1440,0 L0,0 Z" fill="url(#contactGrad)" />
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

      {/* Header */}
      <header className="nlf-header">
        <span className="nlf-label">// {t('page.contact')}</span>
        <h1 className="nlf-title">{t('contact.title')}</h1>
        <p className="nlf-subtitle">
          {t('contact.subtitle')}
        </p>
      </header>

      {/* NLF Section */}
      <section className="nlf-section">
        <NaturalLanguageForm />
      </section>

      {/* Contact Info */}
      <footer className="nlf-info-grid">
        <div className="nlf-info-card">
          <div className="nlf-info-label">{t('contact.emailLabel')}</div>
          <a href="mailto:bekzodmusabaev@outlook.com" className="nlf-info-value" data-cursor-hover="true">
            bekzodmusabaev@outlook.com
          </a>
        </div>

        <div className="nlf-info-card">
          <div className="nlf-info-label">{t('contact.location')}</div>
          <div className="nlf-info-value">Ташкент / Самарканд, Узбекистан</div>
        </div>

        <div className="nlf-info-card">
          <div className="nlf-info-label">{t('contact.social')}</div>
          <div className="nlf-info-socials">
            <a href="https://read.cv/bekmusabaev" rel="noopener noreferrer" target="_blank" className="nlf-social-link" data-cursor-hover="true">Read.cv</a>
            <a href="https://instagram.com/bekmusabaev" rel="noopener noreferrer" target="_blank" className="nlf-social-link" data-cursor-hover="true">Instagram</a>
            <a href="#" className="nlf-social-link" data-cursor-hover="true">LinkedIn {/* TODO: Add LinkedIn URL */}</a>
          </div>
        </div>

        <div className="nlf-info-card">
          <div className="nlf-info-label">{t('contact.availability')}</div>
          <div className="nlf-info-value">{t('contact.availabilityText')}</div>
        </div>
      </footer>
    </div>
  );
}
