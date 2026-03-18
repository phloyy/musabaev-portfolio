import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, [slug]);

  if (!project) {
    return (
      <div className="case-study-container">
        <div className="case-content">
          <p>Project not found</p>
          <Link to="/work" className="nav-link">Back to Work</Link>
        </div>
      </div>
    );
  }

  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="case-study-container">
      {/* Vector Background Banner */}
      <div className="page-vector-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="page-vector-svg">
          <defs>
            <linearGradient id="caseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--clr-accent)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="var(--clr-accent)" stopOpacity="0.03" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,64 C360,128 720,0 1080,96 C1260,144 1380,80 1440,112 L1440,0 L0,0 Z" fill="url(#caseGrad)" />
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

      <div className="case-hero">
        <img
          src={project.img}
          alt={project.title}
          className="case-hero-bg"
          loading="lazy"
        />
        <div className="case-hero-content">
          <div className="case-meta">{project.id} / {project.slug}</div>
          <h1 className="case-title">{project.title}</h1>
          <div className="case-type">{project.type}</div>
        </div>
      </div>

      <div className="case-content">
        <div className="content-section">
          <div className="section-label">Client</div>
          <div className="section-text">{project.client}</div>
        </div>

        <div className="content-section">
          <div className="section-label">Challenge</div>
          <div className="section-title">The Problem</div>
          <div className="section-text">{project.challenge}</div>
        </div>

        <div className="content-section">
          <div className="section-label">Solution</div>
          <div className="section-title">Our Approach</div>
          <div className="section-text">{project.solution}</div>
        </div>

        {project.stats && project.stats.length > 0 && (
          <div className="content-section">
            <div className="section-label">Results</div>
            <div className="stats-grid">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="content-section">
          <div className="section-label">Tools &amp; Methods</div>
          <div className="tools-list">
            {project.tools.map((tool, idx) => (
              <div key={idx} className="tool-tag">{tool}</div>
            ))}
          </div>
        </div>

        <img
          ref={el => { imageRefs.current[0] = el; }}
          src={project.img}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />

        <div className="case-nav">
          {prevProject ? (
            <Link to={`/work/${prevProject.slug}`} className="nav-link" data-cursor-hover="true">
              &larr; {prevProject.title}
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link to={`/work/${nextProject.slug}`} className="nav-link" data-cursor-hover="true">
              {nextProject.title} &rarr;
            </Link>
          ) : (
            <Link to="/work" className="nav-link back-link" data-cursor-hover="true">
              Back to Work
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
