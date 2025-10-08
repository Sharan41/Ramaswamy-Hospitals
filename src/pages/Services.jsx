import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'

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
      title: t.services.cardiology, 
      desc: t.services.cardiologyDesc,
      category: "Specialized Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    },
    { 
      title: t.services.gynecology, 
      desc: t.services.gynecologyDesc,
      category: "Women's Health",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><path d="M12 15v6m-3 0h6"/></svg>
    },
    { 
      title: t.services.pediatrics, 
      desc: t.services.pediatricsDesc,
      category: "Child Care",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/></svg>
    },
    { 
      title: t.services.emergencyCare, 
      desc: t.services.emergencyCareDesc,
      category: "Emergency",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>
    },
    { 
      title: t.services.laboratory, 
      desc: t.services.laboratoryDesc,
      category: "Diagnostics",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/><path d="M9 16v2m6-2v2"/></svg>
    },
    { 
      title: t.services.radiology, 
      desc: t.services.radiologyDesc,
      category: "Diagnostics",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    },
    { 
      title: t.services.surgery, 
      desc: t.services.surgeryDesc,
      category: "Surgical",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2l-1 1-2-2-2 2-1-1-4 4v6h7v7l4-4 1 1 2-2-1-1 4-4-7-7z"/></svg>
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
      {/* Hero Section */}
      <FadeIn>
        <div className="services-hero">
          <h1>{t.services.title}</h1>
          <p className="services-subtitle">
            {t.services.subtitle}
          </p>
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
              <div className="service-card-footer">
                <span>Learn more</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}