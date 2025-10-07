import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'

export default function Achievements() {
  const { t } = useI18n()
  
  const achievements = [
    { year: "2024", title: t.achievements.excellence2024, description: t.achievements.excellence2024Desc },
    { year: "2023", title: t.achievements.surgeries500, description: t.achievements.surgeries500Desc },
    { year: "2022", title: t.achievements.equipment2022, description: t.achievements.equipment2022Desc },
    { year: "2021", title: t.achievements.covidCare, description: t.achievements.covidCareDesc },
    { year: "2020", title: t.achievements.emergency2020, description: t.achievements.emergency2020Desc },
    { year: "2019", title: t.achievements.community2019, description: t.achievements.community2019Desc },
  ]

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10,000+", label: "Patients Treated" },
    { number: "500+", label: "Successful Surgeries" },
    { number: "15+", label: "Specialties" }
  ]

  const certifications = [
    { name: "ISO 9001:2015", desc: "Certified Healthcare Facility" },
    { name: "NABH", desc: "Accreditation (Example)" },
    { name: "Green Hospital", desc: "Initiative Participant" },
    { name: "ACLS Certified", desc: "Advanced Cardiac Life Support Team" },
    { name: "Infection Control", desc: "Excellence Recognition" },
    { name: "Patient Safety", desc: "Compliance Award" }
  ]
  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="achievements-hero">
          <h1>{t.achievements.title}</h1>
          <p className="achievements-subtitle">
            {t.achievements.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Stats Section */}
      <ScaleIn>
        <div className="achievements-stats-container">
          <StaggerContainer className="achievements-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      {/* Timeline Section */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">{t.achievements.keyMilestones}</h2>
        </FadeIn>
        
        <div className="timeline-container">
          {achievements.map((achievement, index) => (
            <FadeIn key={index}>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">{achievement.year}</div>
                </div>
                <div className="timeline-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.achievements.certifications}</h2>
        </FadeIn>
        <StaggerContainer className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-badge">✓</div>
              <h4>{cert.name}</h4>
              <p>{cert.desc}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* Banner Section */}
      <FadeIn>
        <div className="achievements-banner">
          <h2>{t.achievements.yearsExcellence}</h2>
          <p>{t.achievements.yearsExcellenceText}</p>
        </div>
      </FadeIn>
    </section>
  )
}