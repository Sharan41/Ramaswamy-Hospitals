import { useI18n } from '../i18n'
import { Link } from 'react-router-dom'
import bannerLogo from '../assets/WhatsApp Image 2025-10-14 at 13.15.06.jpeg'
import leaderImage from '../assets/WhatsApp Image 2025-10-14 at 13.15.06 (1).jpeg'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
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
      title: t.home.emergency247, 
      desc: t.home.emergency247Desc 
    },
    { 
      number: "03",
      title: t.home.patientCentered, 
      desc: t.home.patientCenteredDesc 
    },
    { 
      number: "04",
      title: t.home.affordableCare, 
      desc: t.home.affordableCareDesc 
    },
    { 
      number: "05",
      title: t.home.comprehensiveServices, 
      desc: t.home.comprehensiveServicesDesc 
    },
  ]

  return (
    <div className="home">
      {/* Hiring Banner */}
      <div className="hiring-banner">
        <div className="hiring-banner-content">
          <span>🩺 {t.home.hiringBanner} <a href="tel:+917824055789" className="hiring-phone">+91 7824055789</a> {t.home.hiringBannerPhone} 🩺</span>
          <span>🩺 {t.home.hiringBanner} <a href="tel:+917824055789" className="hiring-phone">+91 7824055789</a> {t.home.hiringBannerPhone} 🩺</span>
          <span>🩺 {t.home.hiringBanner} <a href="tel:+917824055789" className="hiring-phone">+91 7824055789</a> {t.home.hiringBannerPhone} 🩺</span>
          <span>🩺 {t.home.hiringBanner} <a href="tel:+917824055789" className="hiring-phone">+91 7824055789</a> {t.home.hiringBannerPhone} 🩺</span>
        </div>
      </div>

      {/* Hero Section */}
      <FadeIn>
        <section className="hero-section-new hero-parallax" role="banner">
          {/* Multi-layered decorative shapes with parallax for depth */}
          <ParallaxSection speed={0.2}>
            <div className="hero-shape hero-shape-1"></div>
          </ParallaxSection>
          <ParallaxSection speed={0.4}>
            <div className="hero-shape hero-shape-2"></div>
          </ParallaxSection>
          <ParallaxSection speed={0.6}>
            <div className="hero-shape hero-shape-3"></div>
          </ParallaxSection>
          <ParallaxSection speed={0.35}>
            <div className="hero-shape hero-shape-4"></div>
          </ParallaxSection>
          
          <div className="hero-content-new">
            <div className="hero-badge">{t.home.heroBadge}</div>
            <h1 className="hero-title-new">{t.brand}</h1>
            <p className="hero-subtitle-new" dangerouslySetInnerHTML={{ __html: t.home.tagline }}>
            </p>
            <div className="hero-actions">
              <Link className="btn btn-large btn-with-icon" to="/services" aria-label="Browse our medical services">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                {t.home.exploreServices}
              </Link>
              <Link className="btn btn-outline-large btn-with-icon" to="/facilities" aria-label="Discover our world-class facilities">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                {t.home.discoverFacilities}
              </Link>
            </div>
          </div>
          <ScaleIn>
            <ParallaxSection speed={0.15}>
              <div className="hero-image-new">
                <div className="hero-image-decoration"></div>
                <img src={bannerLogo} alt="Dr.RAMASWAMY HOSPITALS logo banner" loading="eager" />
              </div>
            </ParallaxSection>
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
                <CountUp end={50000} duration={2500} suffix="+" />
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
                <CountUp end={25} duration={2000} suffix="+" />
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
                <CountUp end={85000} duration={2200} suffix="+" />
              </div>
              <div className="home-stat-label">{t.home.patientsCured}</div>
            </div>
          </StaggerContainer>
        </section>
      </ScaleIn>

      {/* Leader Section */}
      <FadeIn>
        <div className="home-leader-section">
          <div className="home-leader-card">
            <div className="home-leader-image">
              <img src={leaderImage} alt="Dr. Ramaswamy" />
            </div>
            <div className="home-leader-content">
              <h3>Dr. Manchikanti Ramaswamy</h3>
              <p className="home-leader-title">{t.about.founderTitle}</p>
              <p className="home-leader-bio" dangerouslySetInnerHTML={{ __html: t.about.founderBio }}></p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Excellence Section */}
      <section className="home-excellence-section">
        <FadeIn>
          <div className="home-excellence-header">
            <h2>{t.home.excellence}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.home.excellenceSubtitle }}></p>
          </div>
        </FadeIn>
        
        <StaggerContainer className="home-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="home-feature-card">
              <div className="home-feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
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

      {/* Social Corner - Instagram Feed */}
      <FadeIn>
        <section className="social-corner-section">
          <div className="social-corner-header">
            <h2>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', marginRight: '12px', verticalAlign: 'middle' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              {t.home.socialCornerTitle}
            </h2>
            <p>{t.home.socialCornerSubtitle}</p>
          </div>
          
          <div className="instagram-feed-container">
            {/* Instagram Embed - Will show latest posts from the handle */}
            <div className="instagram-embed-wrapper">
              <iframe
                src="https://www.instagram.com/drramaswamyhospitals/embed/"
                width="100%"
                height="480"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                title="Instagram Feed"
                style={{ border: 'none', overflow: 'hidden', borderRadius: '12px' }}
              ></iframe>
            </div>
            
            <div className="social-corner-cta">
              <a 
                href="https://www.instagram.com/drramaswamyhospitals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-follow-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                {t.home.followInstagram}
              </a>
              
              <a 
                href="https://www.facebook.com/photo/?fbid=122093829873037831&set=a.122093829915037831" 
                target="_blank" 
                rel="noopener noreferrer"
                className="facebook-follow-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {t.home.followFacebook}
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}