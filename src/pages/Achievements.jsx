import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'

export default function Achievements() {
  const { t } = useI18n()
  
  const achievements = [
    { title: t.achievements.isoCertified, description: t.achievements.isoCertifiedDesc },
    { title: t.achievements.tpaPartner, description: t.achievements.tpaPartnerDesc },
    { title: t.achievements.infosysPartner, description: t.achievements.infosysPartnerDesc },
    { title: t.achievements.covidCare, description: t.achievements.covidCareDesc },
    { title: t.achievements.emergency2020, description: t.achievements.emergency2020Desc },
    { title: t.achievements.community2019, description: t.achievements.community2019Desc },
  ]

  const stats = [
    { number: "25", suffix: "+", label: "Years of Excellence", duration: 2000 },
    { number: "10000", suffix: "+", label: "Patients Treated", duration: 2800 },
    { number: "500", suffix: "+", label: "Successful Surgeries", duration: 2500 },
    { number: "15", suffix: "+", label: "Specialties", duration: 1800 }
  ]

  const certifications = [
    { name: t.achievements.cert1Name, desc: t.achievements.cert1Desc },
    { name: t.achievements.cert2Name, desc: t.achievements.cert2Desc },
    { name: t.achievements.cert3Name, desc: t.achievements.cert3Desc },
    { name: t.achievements.cert4Name, desc: t.achievements.cert4Desc },
    { name: t.achievements.cert5Name, desc: t.achievements.cert5Desc },
    { name: t.achievements.cert6Name, desc: t.achievements.cert6Desc }
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
                <div className="stat-number">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
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