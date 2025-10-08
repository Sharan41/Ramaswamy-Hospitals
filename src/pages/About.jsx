import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import CountUp from '../components/CountUp'
import crestLogo from '../assets/crest-logo.jpg'

export default function About() {
  const { t } = useI18n()
  
  const stats = [
    { number: "25", suffix: "+", label: "Years Experience", duration: 2000 },
    { number: "10000", suffix: "+", label: "Patients Treated", duration: 2800 },
    { number: "15", suffix: "+", label: "Specialties", duration: 1800 },
    { number: "24", suffix: "/7", label: "Emergency Care", duration: 1500 }
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
              <p>{t.about.intro1}</p>
              <p>{t.about.intro2}</p>
            </div>
          </div>
        </FadeIn>
        <ScaleIn>
          <div className="about-hero-image">
            <img src={crestLogo} alt="Dr.RAMASWAMY HOSPITALS" />
            <div className="about-hero-image-caption">Dr.RAMASWAMY HOSPITALS - Serving the community since 1999</div>
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

      {/* Mission & Vision */}
      <div className="mission-vision-container">
        <FadeIn>
          <div className="mission-vision-card mission-card">
            <div className="mission-vision-label">Mission</div>
            <h2>{t.about.mission}</h2>
            <p>{t.about.missionText}</p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mission-vision-card vision-card">
            <div className="mission-vision-label">Vision</div>
            <h2>{t.about.vision}</h2>
            <p>{t.about.visionText}</p>
          </div>
        </FadeIn>
      </div>

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
              <div className="leader-spotlight-initials">DR</div>
            </div>
            <div className="leader-spotlight-info">
              <h3>Dr. Ramaswamy</h3>
              <div className="leader-spotlight-title">{t.about.founderTitle}</div>
              <p>{t.about.founderBio}</p>
            </div>
          </div>
        </ScaleIn>
      </div>

      {/* Facilities Highlight */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.about.facilities}</h2>
        </FadeIn>
        <StaggerContainer className="facilities-highlight-grid">
          <div className="facility-highlight-card">
            <div className="facility-highlight-number">01</div>
            <h3>{t.about.stateOfArt}</h3>
            <p>{t.about.stateOfArtDesc}</p>
          </div>
          <div className="facility-highlight-card">
            <div className="facility-highlight-number">02</div>
            <h3>{t.about.modernInfra}</h3>
            <p>{t.about.modernInfraDesc}</p>
          </div>
          <div className="facility-highlight-card">
            <div className="facility-highlight-number">03</div>
            <h3>{t.about.comfortable}</h3>
            <p>{t.about.comfortableDesc}</p>
          </div>
        </StaggerContainer>
      </div>

      {/* Photo Gallery Placeholder */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.about.photoGallery}</h2>
        </FadeIn>
        <StaggerContainer className="photo-gallery-grid">
          <div className="photo-gallery-item">
            <div className="photo-placeholder">Hospital Exterior</div>
          </div>
          <div className="photo-gallery-item">
            <div className="photo-placeholder">Operating Theatre</div>
          </div>
          <div className="photo-gallery-item">
            <div className="photo-placeholder">Patient Rooms</div>
          </div>
          <div className="photo-gallery-item">
            <div className="photo-placeholder">Diagnostic Center</div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}