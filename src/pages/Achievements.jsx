import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'

export default function Achievements() {
  const { t } = useI18n()
  
  const achievements = [
    { title: t.achievements.excellence2024, description: t.achievements.excellence2024Desc },
    { title: t.achievements.surgeries500, description: t.achievements.surgeries500Desc },
    { title: t.achievements.equipment2022, description: t.achievements.equipment2022Desc },
    { title: t.achievements.covidCare, description: t.achievements.covidCareDesc },
    { title: t.achievements.emergency2020, description: t.achievements.emergency2020Desc },
    { title: t.achievements.community2019, description: t.achievements.community2019Desc },
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

      {/* Milestones Section */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">{t.achievements.keyMilestones}</h2>
        </FadeIn>
        
        <StaggerContainer className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">{index + 1}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </StaggerContainer>
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