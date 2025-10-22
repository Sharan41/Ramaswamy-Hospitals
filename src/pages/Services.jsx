import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import servicesHeroImage from '../assets/WhatsApp Image 2025-10-10 at 13.48.48.jpeg'

export default function Services() {
  const { t } = useI18n()
  
  const services = [
    { 
      title: t.services.generalMedicine, 
      desc: t.services.generalMedicineDesc,
      category: "Primary Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    },
    { 
      title: t.services.orthopedics, 
      desc: t.services.orthopedicsDesc,
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6m6-6v6m-4 8h.01M10 22h4a2 2 0 002-2V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16a2 2 0 002 2z"/></svg>
    },
    { 
      title: t.services.urology, 
      desc: t.services.urologyDesc,
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/><path d="M9 16v2m6-2v2"/></svg>
    },
    { 
      title: t.services.generalSurgery, 
      desc: t.services.generalSurgeryDesc,
      category: "Surgical",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2l-1 1-2-2-2 2-1-1-4 4v6h7v7l4-4 1 1 2-2-1-1 4-4-7-7z"/></svg>
    },
    { 
      title: t.services.neurology, 
      desc: t.services.neurologyDesc,
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2m7 10v4m-4 0h8"/></svg>
    },
    { 
      title: t.services.nephrology, 
      desc: t.services.nephrologyDesc,
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2c-1.5 2-3 3.5-3 6s1.5 4 3 4 3-1.5 3-4-1.5-4-3-6zm6 0c-1.5 2-3 3.5-3 6s1.5 4 3 4 3-1.5 3-4-1.5-4-3-6z"/><path d="M12 14v8"/></svg>
    },
  ]
  
  const highlights = [
    { title: t.services.highlight1Title, desc: t.services.highlight1Desc },
    { title: t.services.highlight2Title, desc: t.services.highlight2Desc },
    { title: t.services.highlight3Title, desc: t.services.highlight3Desc },
    { title: t.services.highlight4Title, desc: t.services.highlight4Desc }
  ]

  return (
    <section className="section">
      {/* Hero Section with Background Image */}
      <FadeIn>
        <div 
          className="services-hero services-hero-with-bg"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${servicesHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="services-hero-content">
            <h1>{t.services.title}</h1>
            <p className="services-subtitle">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Service Highlights */}
      <ScaleIn>
        <div className="service-highlights-container">
          <StaggerContainer className="service-highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="service-highlight-item">
                <div className="service-highlight-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      {/* Services Grid */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">{t.services.medicalServices}</h2>
        </FadeIn>
        
        <StaggerContainer className="services-grid-new">
          {services.map((service, index) => (
            <div key={index} className="service-card-new">
              <div className="service-card-icon-wrapper">
                {service.icon}
              </div>
              <div className="service-card-content">
                <div className="service-card-category">{service.category}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}