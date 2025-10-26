import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'
import PhotoGallery from '../components/PhotoGallery'
import leaderImage from '../assets/WhatsApp Image 2025-10-14 at 13.15.06 (1).jpeg?format=webp&w=400'
import directorImage from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/WhatsApp Image 2025-10-23 at 12.57.23.jpeg?format=webp&w=600'
import bannerLogo from '../assets/WhatsApp Image 2025-10-24 at 17.45.03.jpeg?format=webp&w=450'

// Import all facility images - optimized for gallery display
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

export default function About() {
  const { t } = useI18n()
  
  const stats = [
    { number: 50000, suffix: "+", label: t.about.stat1Label, duration: 2800 },
    { number: 25, suffix: "+", label: t.about.stat2Label, duration: 2000 },
    { number: 85000, suffix: "+", label: t.about.stat3Label, duration: 2800 },
    { number: 24, suffix: "/7", label: t.about.stat4Label, duration: 1500 }
  ]

  const galleryImages = [
    { src: hospitalExterior, alt: "Hospital Building", caption: "Dr. Ramaswamy Hospitals - Kavali" },
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

  const values = [
    { 
      title: t.about.value1Title,
      description: t.about.value1Desc
    },
    {
      title: t.about.value2Title, 
      description: t.about.value2Desc
    },
    {
      title: t.about.value3Title,
      description: t.about.value3Desc
    },
    {
      title: t.about.value4Title,
      description: t.about.value4Desc
    }
  ]

  return (
    <section className="section">
      {/* Hero Section */}
      <div className="about-hero-container">
        <FadeIn>
          <div className="about-hero">
            <h1>{t.about.title}</h1>
            <div className="about-intro-text">
              <p dangerouslySetInnerHTML={{ __html: t.about.intro1 }}></p>
              {t.about.intro2 && <p dangerouslySetInnerHTML={{ __html: t.about.intro2 }}></p>}
            </div>
          </div>
        </FadeIn>
        <ScaleIn>
          <div className="about-hero-image animated-hospital-image">
            <div className="about-hero-image-pattern"></div>
            <div className="image-glow-effect"></div>
            <img src={hospitalExterior} alt="Dr. RAMASWAMY HOSPITALS - Main Building" className="hospital-building-img" />
            <div className="about-hero-image-caption">{t.about.heroCaption}</div>
          </div>
        </ScaleIn>
      </div>

      {/* Stats Section */}
      <ScaleIn>
        <div className="about-stats-container">
          <StaggerContainer className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                <div className="about-stat-number">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      {/* Mission, Vision & Motto */}
      <FadeIn>
        <div className="mission-vision-container">
          <div className="mission-vision-card mission-card">
            <h2>{t.about.mission}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.missionText }}></p>
          </div>
          <div className="mission-vision-card vision-card">
            <h2>{t.about.vision}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.visionText }}></p>
          </div>
          <div className="mission-vision-card mission-card">
            <h2>{t.about.motto}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.mottoText }}></p>
          </div>
        </div>
      </FadeIn>

      {/* Our Values */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.about.coreValues}</h2>
        </FadeIn>
        <StaggerContainer className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* Leadership */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.about.leadership}</h2>
        </FadeIn>
        <ScaleIn>
          <div className="leader-spotlight">
            <div className="leader-spotlight-avatar">
              <img src={leaderImage} alt={t.about.founderName} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{t.about.founderName}</h3>
              <div className="leader-spotlight-title">{t.about.founderTitle}</div>
              <p dangerouslySetInnerHTML={{ __html: t.about.founderBio }}></p>
            </div>
          </div>
        </ScaleIn>
        
        <ScaleIn>
          <div className="leader-spotlight" style={{ marginTop: 40 }}>
            <div className="leader-spotlight-avatar">
              <img src={directorImage} alt="Mr. Manchikanti Venkata Sowrav" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{t.about.directorName}</h3>
              <div className="leader-spotlight-title">{t.about.directorTitle}</div>
              <p dangerouslySetInnerHTML={{ __html: t.about.directorBio }}></p>
            </div>
          </div>
        </ScaleIn>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery 
        images={galleryImages} 
        title={t.about.photoGallery}
        previewCount={6}
      />
    </section>
  )
}