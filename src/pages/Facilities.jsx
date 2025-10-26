import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import PhotoGallery from '../components/PhotoGallery'
import facilitiesHeroImage from '../assets/WhatsApp Image 2025-10-10 at 13.48.48.jpeg?format=webp&w=800'

// Import facility images for gallery
import hospitalExterior from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/WhatsApp Image 2025-10-23 at 18.14.30.jpeg?format=webp&w=800'
import facility1 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011353.JPG?format=webp&w=800'
import facility2 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011354.JPG?format=webp&w=800'
import facility3 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011355.JPG?format=webp&w=800'
import facility4 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011356.JPG?format=webp&w=800'
import facility5 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011357.JPG?format=webp&w=800'
import facility6 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011358.JPG?format=webp&w=800'
import facility7 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011359.JPG?format=webp&w=800'
import facility8 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011360.JPG?format=webp&w=800'
import facility9 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011361.JPG?format=webp&w=800'
import facility10 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011362.JPG?format=webp&w=800'
import facility11 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011363.JPG?format=webp&w=800'
import facility12 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011365.JPG?format=webp&w=800'
import facility13 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5482.jpg?format=webp&w=800'
import facility14 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5484.jpg?format=webp&w=800'
import facility15 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5485.jpg?format=webp&w=800'
import facility16 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5486.jpg?format=webp&w=800'
import facility17 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5487.jpg?format=webp&w=800'
import facility18 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5488.jpg?format=webp&w=800'
import facility19 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5490.jpg?format=webp&w=800'
import facility20 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5491.jpg?format=webp&w=800'
import facility21 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5493.jpg?format=webp&w=800'
import facility22 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5494.jpg?format=webp&w=800'
import facility23 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5495.jpg?format=webp&w=800'
import facility24 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5496.jpg?format=webp&w=800'
import facility25 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5497.jpg?format=webp&w=800'
import facility26 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5499.jpg?format=webp&w=800'
import facility27 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5500.jpg?format=webp&w=800'
import facility28 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5501.jpg?format=webp&w=800'
import facility29 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5502.jpg?format=webp&w=800'
import facility30 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5503.jpg?format=webp&w=800'
import facility31 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5506.jpg?format=webp&w=800'
import facility32 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5507.jpg?format=webp&w=800'
import facility33 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5508.jpg?format=webp&w=800'
import facility34 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5509.jpg?format=webp&w=800'
import facility35 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5510.jpg?format=webp&w=800'
import facility36 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5512.jpg?format=webp&w=800'
import facility37 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5513.jpg?format=webp&w=800'
import facility38 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5521.jpeg?format=webp&w=800'

export default function Facilities() {
  const { t } = useI18n()
  
  const galleryImages = [
    { src: facility1, alt: "Hospital Exterior", caption: "Dr. Ramaswamy Hospitals - Main Building" },
    { src: facility2, alt: "Reception Area", caption: "Modern Reception & Waiting Area" },
    { src: facility3, alt: "Patient Care", caption: "Patient Care Excellence" },
    { src: facility4, alt: "Medical Equipment", caption: "State-of-the-Art Medical Equipment" },
    { src: facility5, alt: "Hospital Facility", caption: "Advanced Healthcare Facility" },
    { src: facility6, alt: "Treatment Room", caption: "Modern Treatment Rooms" },
    { src: facility7, alt: "ICU Ward", caption: "Intensive Care Unit" },
    { src: facility8, alt: "Operation Theatre", caption: "Fully Equipped Operation Theatre" },
    { src: facility9, alt: "Diagnostic Center", caption: "Advanced Diagnostic Center" },
    { src: facility10, alt: "Dialysis Unit", caption: "Modern Dialysis Facility" },
    { src: facility11, alt: "Laboratory", caption: "Automated Laboratory Services" },
    { src: facility12, alt: "Patient Ward", caption: "Comfortable Patient Wards" },
    { src: facility13, alt: "Consultation Room", caption: "Doctor Consultation Rooms" },
    { src: facility14, alt: "Imaging Center", caption: "Advanced Imaging Technology" },
    { src: facility15, alt: "Emergency Department", caption: "24/7 Emergency Services" },
    { src: facility16, alt: "Pharmacy", caption: "In-House Pharmacy" },
    { src: facility17, alt: "Physiotherapy", caption: "Physiotherapy & Rehabilitation" },
    { src: facility18, alt: "Medical Staff", caption: "Experienced Medical Team" },
    { src: facility19, alt: "Surgical Suite", caption: "Modern Surgical Facilities" },
    { src: facility20, alt: "Patient Care Area", caption: "Compassionate Patient Care" },
    { src: facility21, alt: "Hospital Corridor", caption: "Clean & Spacious Corridors" },
    { src: facility22, alt: "Medical Technology", caption: "Latest Medical Technology" },
    { src: facility23, alt: "Treatment Area", caption: "Specialized Treatment Areas" },
    { src: facility24, alt: "Healthcare Services", caption: "Comprehensive Healthcare" },
    { src: facility25, alt: "Medical Facility", caption: "Modern Medical Infrastructure" },
    { src: facility26, alt: "Patient Room", caption: "Comfortable Patient Rooms" },
    { src: facility27, alt: "Healthcare Unit", caption: "Dedicated Healthcare Units" },
    { src: facility28, alt: "Medical Center", caption: "Advanced Medical Center" },
    { src: facility29, alt: "Treatment Facility", caption: "Quality Treatment Facilities" },
    { src: facility30, alt: "Hospital Interior", caption: "Modern Hospital Interior" },
    { src: facility31, alt: "Medical Equipment", caption: "High-End Medical Equipment" },
    { src: facility32, alt: "Care Unit", caption: "Patient Care Units" },
    { src: facility33, alt: "Healthcare Facility", caption: "Quality Healthcare Facility" },
    { src: facility34, alt: "Medical Services", caption: "Comprehensive Medical Services" },
    { src: facility35, alt: "Treatment Center", caption: "Advanced Treatment Center" },
    { src: facility36, alt: "Hospital Wing", caption: "Spacious Hospital Wings" },
    { src: facility37, alt: "Medical Infrastructure", caption: "Modern Medical Infrastructure" },
    { src: facility38, alt: "Hospital View", caption: "Dr. Ramaswamy Hospitals" }
  ]
  
  const facilities = [
    { 
      title: t.facilities.facility1Title, 
      desc: t.facilities.facility1Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
    },
    { 
      title: t.facilities.facility2Title, 
      desc: t.facilities.facility2Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><path d="M12 2v10"/></svg>
    },
    { 
      title: t.facilities.facility3Title, 
      desc: t.facilities.facility3Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    },
    { 
      title: t.facilities.facility4Title, 
      desc: t.facilities.facility4Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    },
    { 
      title: t.facilities.facility5Title, 
      desc: t.facilities.facility5Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2l-1 1-2-2-2 2-1-1-4 4v6h7v7l4-4 1 1 2-2-1-1 4-4-7-7z"/></svg>
    },
    { 
      title: t.facilities.facility6Title, 
      desc: t.facilities.facility6Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/></svg>
    },
    { 
      title: t.facilities.facility7Title, 
      desc: t.facilities.facility7Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    { 
      title: t.facilities.facility8Title, 
      desc: t.facilities.facility8Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    },
    { 
      title: t.facilities.facility9Title, 
      desc: t.facilities.facility9Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
    },
    { 
      title: t.facilities.facility10Title, 
      desc: t.facilities.facility10Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/><circle cx="12" cy="12" r="3"/></svg>
    },
    { 
      title: t.facilities.facility11Title, 
      desc: t.facilities.facility11Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility12Title, 
      desc: t.facilities.facility12Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8m8 4H8m2-8H8"/></svg>
    },
    { 
      title: t.facilities.facility13Title, 
      desc: t.facilities.facility13Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility14Title, 
      desc: t.facilities.facility14Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    },
    { 
      title: t.facilities.facility15Title, 
      desc: t.facilities.facility15Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility16Title, 
      desc: t.facilities.facility16Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility17Title, 
      desc: t.facilities.facility17Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility18Title, 
      desc: t.facilities.facility18Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility19Title, 
      desc: t.facilities.facility19Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility20Title, 
      desc: t.facilities.facility20Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
    },
    { 
      title: t.facilities.facility21Title, 
      desc: t.facilities.facility21Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2l-1 1-2-2-2 2-1-1-4 4v6h7v7l4-4 1 1 2-2-1-1 4-4-7-7z"/></svg>
    },
    { 
      title: t.facilities.facility22Title, 
      desc: t.facilities.facility22Desc,
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2h10M7 2v12a4 4 0 004 4 4 4 0 004-4V2M7 2L5 4M17 2l2 2"/></svg>
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
        <div className="facilities-hero facilities-hero-with-bg enhanced-hero-image">
          <div className="hero-image-backdrop"></div>
          <img 
            src={facilitiesHeroImage} 
            alt="Hospital Facilities" 
            className="hero-background-image"
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay-gradient"></div>
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
              <div className="facility-card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="facility-card-body">
                <h3>{facility.title}</h3>
                <p>{facility.desc}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery 
        images={galleryImages} 
        title={t.facilities.galleryTitle}
        previewCount={6}
      />

      {/* Visit CTA */}
      <FadeIn>
        <div className="facilities-visit-cta" style={{ marginTop: '80px' }}>
          <div className="facilities-visit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h2>{t.facilities.visitUs}</h2>
          <p>{t.facilities.visitUsText}</p>
          <a href="https://www.google.com/maps/dir//14.916762299999998,79.9951669/@14.916762299999998,79.9951669,17z" target="_blank" rel="noreferrer" className="btn btn-large">
            {t.facilities.getDirections}
          </a>
        </div>
      </FadeIn>
    </section>
  )
}