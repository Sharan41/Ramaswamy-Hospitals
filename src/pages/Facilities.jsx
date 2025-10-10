import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import facilitiesHeroImage from '../assets/WhatsApp Image 2025-10-10 at 13.51.29.jpeg'

export default function Facilities() {
  const { t } = useI18n()
  
  const facilities = [
    { 
      title: t.facilities.facility1Title, 
      desc: t.facilities.facility1Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2l-1 1-2-2-2 2-1-1-4 4v6h7v7l4-4 1 1 2-2-1-1 4-4-7-7z"/></svg>
    },
    { 
      title: t.facilities.facility2Title, 
      desc: t.facilities.facility2Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><path d="M12 2v10"/></svg>
    },
    { 
      title: t.facilities.facility3Title, 
      desc: t.facilities.facility3Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/><path d="M9 16v2m6-2v2"/></svg>
    },
    { 
      title: t.facilities.facility4Title, 
      desc: t.facilities.facility4Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    },
    { 
      title: t.facilities.facility5Title, 
      desc: t.facilities.facility5Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8m8 4H8m2-8H8"/></svg>
    },
    { 
      title: t.facilities.facility6Title, 
      desc: t.facilities.facility6Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/><circle cx="12" cy="12" r="3"/></svg>
    },
    { 
      title: t.facilities.facility7Title, 
      desc: t.facilities.facility7Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
    },
    { 
      title: t.facilities.facility8Title, 
      desc: t.facilities.facility8Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><path d="M6 1v3m6-3v3m-8 8h.01M10 12h.01M14 12h.01"/></svg>
    },
    { 
      title: t.facilities.facility9Title, 
      desc: t.facilities.facility9Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
    },
  ]

  const highlights = [
    { 
      title: t.facilities.highlight1Title,
      desc: t.facilities.highlight1Desc
    },
    {
      title: t.facilities.highlight2Title,
      desc: t.facilities.highlight2Desc
    },
    {
      title: t.facilities.highlight3Title,
      desc: t.facilities.highlight3Desc
    },
    {
      title: t.facilities.highlight4Title,
      desc: t.facilities.highlight4Desc
    }
  ]
  
  return (
    <section className="section">
      {/* Hero Section with Background Image */}
      <FadeIn>
        <div 
          className="facilities-hero facilities-hero-with-bg"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${facilitiesHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="facilities-hero-content">
            <h1>{t.facilities.title}</h1>
            <p className="facilities-subtitle">
              {t.facilities.subtitle}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Highlights Section */}
      <ScaleIn>
        <div className="facilities-highlights-container">
          <StaggerContainer className="facilities-highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="facility-highlight-item">
                <div className="facility-highlight-badge">{String(index + 1).padStart(2, '0')}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      {/* Facilities Grid */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">{t.facilities.facilitiesHeading}</h2>
        </FadeIn>
        
        <StaggerContainer className="facilities-grid-new">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card-new">
              <div className="facility-card-icon-wrapper">
                {facility.icon}
              </div>
              <div className="facility-card-body">
                <h3>{facility.title}</h3>
                <p>{facility.desc}</p>
              </div>
              <div className="facility-card-footer">
                <span>View details</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* Visit CTA */}
      <FadeIn>
        <div className="facilities-visit-cta">
          <div className="facilities-visit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h2>{t.facilities.visitUs}</h2>
          <p>{t.facilities.visitUsText}</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-large">
            {t.facilities.getDirections}
          </a>
        </div>
      </FadeIn>
    </section>
  )
}