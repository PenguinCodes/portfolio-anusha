import React, { useEffect } from 'react';
import { portfolioData } from './data/spec.js';
import './index.css'; // Global premium styles

function App() {
  const { header, profileSummary, technicalSkills, experience, education, languages } = portfolioData;

  useEffect(() => {
    // Add a modern font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Background ambient elements */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <header className="hero-section glass-panel">
        <h1 className="name-title animate-pop-in">{header.name}</h1>
        <h2 className="role-subtitle animate-slide-up">{header.title}</h2>
        <div className="contact-info animate-fade-in">
          <a href={`mailto:${header.contact.email}`} className="contact-link">
            <span className="icon">✉</span> {header.contact.email}
          </a>

          <a href={header.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">in</span> LinkedIn
          </a>
          <span className="contact-link static">
            <span className="icon">📍</span> {header.contact.location}
          </span>
        </div>
      </header>

      <main className="main-content">
        <section className="section-block glass-panel slide-in-bottom">
          <h3 className="section-title">Profile Summary</h3>
          <p className="summary-text">{profileSummary}</p>
        </section>

        <section className="section-block glass-panel slide-in-bottom delay-1">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((cat, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-category">{cat.category}</h4>
                <div className="skill-tags">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block glass-panel slide-in-bottom delay-2">
          <h3 className="section-title">Work Experience</h3>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h4 className="job-role">{job.role}</h4>
                    <span className="job-duration">{job.duration}</span>
                  </div>
                  <h5 className="job-company">{job.company}</h5>
                  <ul className="job-responsibilities">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="two-col-grid">
          <section className="section-block glass-panel slide-in-bottom delay-3">
            <h3 className="section-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="edu-item">
                <h4 className="edu-institution">{edu.institution}</h4>
                <span className="edu-duration">{edu.duration}</span>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-achievements">
                  {edu.achievements.map((ach, i) => (
                    <span key={i} className="achievement-badge">{ach}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="section-block glass-panel slide-in-bottom delay-4">
            <h3 className="section-title">Spoken Languages</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="lang-icon">💬</span>
                  <span className="lang-name">{lang}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="footer-section">
        <p>&copy; {new Date().getFullYear()} {header.name}. All rights reserved.</p>

      </footer>
    </div>
  );
}

export default App;
