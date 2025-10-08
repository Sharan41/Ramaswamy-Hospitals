import { useI18n } from '../i18n'
import { Link } from 'react-router-dom'
import bannerLogo from '../assets/banner-logo.jpg'
import crestLogo from '../assets/crest-logo.jpg'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import CountUp from '../components/CountUp'

export default function Home() {
  const { t } = useI18n()
  
  const features = [
    { 
      number: "01",
      title: t.home.experiencedTeam, 
      desc: t.home.experiencedTeamDesc 
    },
    { 
      number: "02",
      title: t.home.advancedTech, 
      desc: t.home.advancedTechDesc 
    },
    { 
      number: "03",
      title: t.home.emergency247, 
      desc: t.home.emergency247Desc 
    },
    { 
      number: "04",
      title: t.home.patientCentered, 
      desc: t.home.patientCenteredDesc 
    },
    { 
      number: "05",
      title: t.home.affordableCare, 
      desc: t.home.affordableCareDesc 
    },
    { 
      number: "06",
      title: t.home.comprehensiveServices, 
      desc: t.home.comprehensiveServicesDesc 
    },
  ]

  return (
    <div className="home">
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919646837777" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Contact us on WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Hero Section */}
      <FadeIn>
        <section className="hero-section-new" role="banner">
          {/* Decorative shapes */}
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          
          <div className="hero-content-new">
            <div className="hero-badge">{t.home.heroBadge}</div>
            <h1 className="hero-title-new">{t.brand}</h1>
            <p className="hero-subtitle-new">
              {t.home.tagline}
            </p>
            <div className="hero-actions">
              <Link className="btn btn-large btn-with-icon" to="/services" aria-label="Browse our medical services">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                {t.home.exploreServices}
              </Link>
              <a className="btn btn-outline-large btn-with-icon" href="tel:+919912757854" aria-label="Call emergency hotline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t.home.callEmergency}
              </a>
            </div>
          </div>
          <ScaleIn>
            <div className="hero-image-new">
              <div className="hero-image-decoration"></div>
              <img src={bannerLogo} alt="Dr.RAMASWAMY HOSPITALS logo banner" loading="eager" />
            </div>
          </ScaleIn>
        </section>
      </FadeIn>

      {/* KPI Stats Section */}
      <ScaleIn>
        <section className="home-stats-section">
          <StaggerContainer className="home-stats-grid">
            <div className="home-stat-item">
              <div className="home-stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="home-stat-number">
                <CountUp end="500" duration={2500} suffix="+" />
              </div>
              <div className="home-stat-label">{t.home.surgeries}</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="home-stat-number">
                <CountUp end="25" duration={2000} suffix="+" />
              </div>
              <div className="home-stat-label">{t.home.yearsOfCare}</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="home-stat-number">
                <CountUp end="20" duration={2200} suffix="+" />
              </div>
              <div className="home-stat-label">{t.home.specialties}</div>
            </div>
          </StaggerContainer>
        </section>
      </ScaleIn>

      {/* Leader Section */}
      <FadeIn>
        <div className="home-leader-section">
          <div className="home-leader-card">
            <div className="home-leader-image">
              <img src={crestLogo} alt="Dr. Ramaswamy" />
            </div>
            <div className="home-leader-content">
              <h3>Dr. Ramaswamy</h3>
              <p className="home-leader-title">{t.about.founderTitle}</p>
              <p className="home-leader-bio">{t.about.founderBio}</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Excellence Section */}
      <section className="home-excellence-section">
        <FadeIn>
          <div className="home-excellence-header">
            <h2>{t.home.excellence}</h2>
            <p>{t.home.excellenceSubtitle}</p>
          </div>
        </FadeIn>
        
        <StaggerContainer className="home-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="home-feature-card">
              <div className="home-feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* Quick Services Preview */}
      <FadeIn>
        <section className="home-quick-services">
          <h2>{t.home.quickAccess}</h2>
          <StaggerContainer className="quick-services-grid">
            <Link to="/doctors" className="quick-service-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>{t.home.findDoctor}</h3>
              <p>{t.home.findDoctorDesc}</p>
            </Link>
            <Link to="/services" className="quick-service-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>{t.home.ourServicesCard}</h3>
              <p>{t.home.ourServicesCardDesc}</p>
            </Link>
            <a href="tel:+919912757854" className="quick-service-card">
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>{t.home.emergencyCareCard}</h3>
              <p>{t.home.emergencyCareCardDesc}</p>
            </a>
            <Link to="/facilities" className="quick-service-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="quick-service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
              <h3>{t.home.ourFacilitiesCard}</h3>
              <p>{t.home.ourFacilitiesCardDesc}</p>
            </Link>
          </StaggerContainer>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <section className="home-cta-section">
          <div className="home-cta-sparkle"></div>
          <div className="home-cta-content">
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaText}</p>
            <div className="home-cta-buttons">
              <Link to="/contact" className="btn btn-large btn-with-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                {t.home.contactUs}
              </Link>
              <Link to="/doctors" className="btn btn-outline-large btn-with-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                {t.home.meetDoctors}
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}