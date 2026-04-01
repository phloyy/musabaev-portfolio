import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { useProjects } from '../hooks/useProjects';

export default function WorkIndex() {
  const { t } = useLang();
  const { projects, loading } = useProjects();
  const [view, setView] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'UX', 'WEB', 'BRAND', 'PRINT'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="work-container">
      {/* Vector Background Banner */}
      <div className="page-vector-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="page-vector-svg">
          <defs>
            <linearGradient id="workGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--clr-accent)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="var(--clr-accent)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,64 C360,128 720,0 1080,96 C1260,144 1380,80 1440,112 L1440,0 L0,0 Z" fill="url(#workGrad)" />
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

      <div className="work-header">
        <h1 className="work-title">{t('page.work')}</h1>
        <div className="view-toggle">
          <button
            className={`toggle-btn ${view === 'grid' ? 'active' : ''}`}
            onClick={() => setView('grid')}
            data-cursor-hover="true"
          >
            {t('work.grid')}
          </button>
          <button
            className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
            data-cursor-hover="true"
          >
            {t('work.list')}
          </button>
        </div>
      </div>

      <div className="filter-bar">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            data-cursor-hover="true"
          >
            {filter}
          </button>
        ))}
      </div>

      {view === 'grid' ? (
        <div className="grid-view">
          {loading ? (
             [1, 2, 3].map(i => (
              <div key={i} className="project-card" style={{ opacity: 0.5, pointerEvents: 'none' }}>
                <div style={{ width: '100%', aspectRatio: '4/3', background: 'rgba(255,255,255,0.05)' }} />
                <div className="card-content">
                  <div className="card-idx">0{i}</div>
                  <div className="card-title" style={{ background: 'rgba(255,255,255,0.1)', color: 'transparent', borderRadius: '4px', width: '60%' }}>Loading...</div>
                </div>
              </div>
            ))
          ) : filteredProjects.map((project, idx) => {
            const num = project.id || String(idx + 1).padStart(2, '0');
            const type = project.type || project.description || project.category;
            const imgUrl = project.image_url || project.img;
            return (
            <Link
              key={project.id || project.slug}
              to={`/work/${project.slug}`}
              className="project-card"
              data-cursor-hover="true"
            >
              <img
                src={imgUrl}
                alt={project.title}
                className="card-image"
                loading="lazy"
              />
              <div className="card-content">
                <div className="card-idx">{num}</div>
                <div className="card-title">{project.title}</div>
                <div className="card-meta">
                  <span>{type}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          )})}
        </div>
      ) : (
        <div className="list-view">
          {loading ? (
             [1, 2, 3].map(i => (
              <div key={i} className="list-row" style={{ opacity: 0.5 }}>
                 <div className="list-idx">0{i}</div>
                 <div className="list-title" style={{ background: 'rgba(255,255,255,0.1)', color: 'transparent', borderRadius: '4px', width: '200px' }}>Loading...</div>
              </div>
             ))
          ) : filteredProjects.map((project, idx) => {
            const num = project.id || String(idx + 1).padStart(2, '0');
            const type = project.type || project.description || project.category;
            return (
            <Link
              key={project.id || project.slug}
              to={`/work/${project.slug}`}
              className="list-row"
              data-cursor-hover="true"
            >
              <div className="list-idx">{num}</div>
              <div className="list-title">{project.title}</div>
              <div className="list-type">{type}</div>
              <div className="list-year">{project.year}</div>
              <div className="list-arrow">&rarr;</div>
            </Link>
          )})}
        </div>
      )}

      <div className="work-footer">
        <span>{t('work.selected')} — {filteredProjects.length} {t('work.projects')}</span>
        <span>© MMXXV</span>
      </div>
    </div>
  );
}
