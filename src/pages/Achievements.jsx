import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { Award } from 'lucide-react'
import CountUp from '../components/CountUp'
import { useState } from 'react'

// X-ray images import
import tkrXray from '../assets/TKR.Total knee replacement.jpeg'
import shoulderXray from '../assets/shoulder Replacement.jpeg'
import spineXray from '../assets/Cervical spine fixation.jpeg'
import pelvicXray from '../assets/Pelvic fracture.jpeg'
import polytraumaXray from '../assets/DHS .PFN.fixation.jpeg'

const xrayImages = {
  3: tkrXray,         // Golden Knee Surgery
  4: shoulderXray,    // Shoulder Replacement
  8: spineXray,       // Spine Surgeries
  9: polytraumaXray,  // Polytrauma Management
  10: pelvicXray,     // Pelvic Fixation
}

export default function Achievements() {
  const { t } = useI18n()
  const [flippedCards, setFlippedCards] = useState({})
  const [animatingCard, setAnimatingCard] = useState(null)
  
  // Major Statistics
  const stats = [
    { 
      number: "16", 
      suffix: "+", 
      label: t.achievements.majorMilestones,
      duration: 1800
    },
    { 
      number: "10000", 
      suffix: "+", 
      label: t.achievements.patientsServed,
      duration: 2800
    },
    { 
      number: "150", 
      suffix: "/mo", 
      label: t.achievements.surgicalVolume,
      duration: 2200
    },
    { 
      number: "25", 
      suffix: "+", 
      label: t.achievements.yearsExperience,
      duration: 2000
    }
  ]

  // Groundbreaking Achievements
  const achievements = [
    { 
      id: 1, 
      key: 'msmch',
      category: t.achievements.categoryFirst,
      imagePlaceholder: true
    },
    { 
      id: 2, 
      key: 'thr2005',
      category: t.achievements.categoryFirst,
      imagePlaceholder: true
    },
    { 
      id: 3, 
      key: 'goldenKnee',
      category: t.achievements.categoryFirst,
      imagePlaceholder: true
    },
    { 
      id: 4, 
      key: 'shoulderReplacement',
      category: t.achievements.categoryFirst,
      imagePlaceholder: true
    },
    { 
      id: 5, 
      key: 'reverseShoulder',
      category: t.achievements.categoryFirst,
      imagePlaceholder: true
    },
    { 
      id: 6, 
      key: 'tumourProcedures',
      category: t.achievements.categorySpecialized,
      imagePlaceholder: true
    },
    { 
      id: 7, 
      key: 'revisionTkrThr',
      category: t.achievements.categorySpecialized,
      imagePlaceholder: true
    },
    { 
      id: 8, 
      key: 'spineSurgeries',
      category: t.achievements.categorySpecialized,
      imagePlaceholder: true
    },
    { 
      id: 9, 
      key: 'polytrauma',
      category: t.achievements.categorySpecialized,
      imagePlaceholder: true
    },
    { 
      id: 10, 
      key: 'pelvicFixation',
      category: t.achievements.categorySpecialized,
      imagePlaceholder: true
    },
    { 
      id: 11, 
      key: 'surgicalVolume',
      category: t.achievements.categoryOperational,
      imagePlaceholder: true
    },
    { 
      id: 12, 
      key: 'paediatricTrauma',
      category: t.achievements.categoryCare,
      imagePlaceholder: true
    },
    { 
      id: 13, 
      key: 'geriatricTrauma',
      category: t.achievements.categoryCare,
      imagePlaceholder: true
    },
    { 
      id: 14, 
      key: 'softTissue',
      category: t.achievements.categoryAdvanced,
      imagePlaceholder: true
    },
    { 
      id: 15, 
      key: 'tendonTransfer',
      category: t.achievements.categoryAdvanced,
      imagePlaceholder: true
    },
    { 
      id: 16, 
      key: 'revisionSurgeries',
      category: t.achievements.categoryAdvanced,
      imagePlaceholder: true
    }
  ]

  // Handle card flip on mobile - improved to work reliably
  const handleCardClick = (cardId, event) => {
    // Prevent event bubbling
    if (event) {
      event.stopPropagation()
      event.preventDefault()
    }
    
    // Prevent clicking on card that's currently animating
    if (animatingCard === cardId) return
    
    // Mark this card as animating
    setAnimatingCard(cardId)
    
    // Toggle the flipped state
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
    
    // Reset animation lock after transition completes
    setTimeout(() => {
      setAnimatingCard(null)
    }, 700)
  }

  return (
    <div className="achievements-modern-page">
      {/* Hero Section */}
      <section className="achievements-hero-modern">
        <div className="achievements-hero-overlay"></div>
        <div className="achievements-hero-content">
          <FadeIn>
            <div className="achievements-hero-badge">
              <Award className="badge-icon" size={20} />
              <span>{t.achievements.heroBadge}</span>
            </div>
            <h1 className="achievements-hero-title">
              {t.achievements.heroTitle}
            </h1>
            <p className="achievements-hero-subtitle">
              {t.achievements.heroSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section - Home Style */}
      <ScaleIn>
        <section className="home-stats-section">
          <StaggerContainer className="home-stats-grid achievements-stats-inline">
            {stats.map((stat, index) => (
              <div key={index} className="home-stat-item">
                <div className="home-stat-number">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="home-stat-label">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </section>
      </ScaleIn>

      {/* Achievements Grid Section */}
      <section className="achievements-grid-section">
        <div className="container">

          <StaggerContainer className="achievements-grid-modern">
            {achievements.map((achievement, index) => (
              <FadeIn key={achievement.id} delay={index * 50}>
                <div 
                  className={`achievement-card-modern ${flippedCards[achievement.id] ? 'flipped' : ''}`}
                  onClick={(e) => handleCardClick(achievement.id, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleCardClick(achievement.id, e)
                    }
                  }}
                  aria-label={`${t.achievements[`${achievement.key}Title`]} - ${flippedCards[achievement.id] ? 'Click to return' : 'Click to flip'}`}
                  aria-pressed={flippedCards[achievement.id] ? 'true' : 'false'}
                >
                  <div className="achievement-card-inner">
                    {/* Front of card */}
                    <div className="achievement-card-front">
                      <div className="achievement-number-badge">
                        <span>{String(achievement.id).padStart(2, '0')}</span>
                      </div>
                      {xrayImages[achievement.id] ? (
                        <div className="achievement-image-container">
                          <img 
                            src={xrayImages[achievement.id]} 
                            alt={t.achievements[`${achievement.key}Title`]}
                            className="achievement-xray-image"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="achievement-image-placeholder">
                          <div className="image-placeholder-icon">
                            <Award size={48} strokeWidth={1.5} />
                          </div>
                          <span className="image-placeholder-text">X-Ray</span>
                        </div>
                      )}
                      <div className="achievement-content">
                        <span className="achievement-category">{achievement.category}</span>
                        <h3 className="achievement-title">
                          {t.achievements[`${achievement.key}Title`]}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Back of card - shows on hover */}
                    <div className="achievement-card-back">
                      <div className="achievement-back-content">
                        <Award size={40} className="achievement-back-icon" />
                        <h3 className="achievement-back-title">
                          {t.achievements[`${achievement.key}Title`]}
                        </h3>
                        <p className="achievement-description">
                          {t.achievements[`${achievement.key}Desc`]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="achievements-cta-section">
        <div className="container">
          <FadeIn>
            <div className="achievements-cta-card">
              <div className="cta-content">
                <h2>{t.achievements.ctaTitle}</h2>
                <p>{t.achievements.ctaDescription}</p>
                <div className="cta-buttons">
                  <a href="/contact" className="cta-button-primary">
                    {t.achievements.ctaButton}
                  </a>
                  <a href="/services" className="cta-button-secondary">
                    {t.achievements.ctaButtonSecondary}
                  </a>
                </div>
              </div>
              <div className="cta-decoration">
                <div className="cta-decoration-circle cta-circle-1"></div>
                <div className="cta-decoration-circle cta-circle-2"></div>
                <div className="cta-decoration-circle cta-circle-3"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
