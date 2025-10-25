import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import drRamaswamy from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Ramaswamy 1.jpg'
import drJaheerBasha from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Jaheer Basha.jpg'
import drPadmavathi from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Padmavathi.jpg'
import drPushpika from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr.Pushpika.jpg'

export default function Doctors() {
  const { t } = useI18n()
  
  const doctors = [
    { 
      name: t.doctors.drRamaswamyName,
      specialty: t.doctors.drRamaswamySpecialty,
      bio: t.doctors.drRamaswamyBio,
      education: t.doctors.drRamaswamyEducation,
      specialties: [t.doctors.drRamaswamySpec1, t.doctors.drRamaswamySpec2],
      image: drRamaswamy
    },
    { 
      name: t.doctors.drPushpikaName,
      specialty: t.doctors.drPushpikaSpecialty,
      bio: t.doctors.drPushpikaBio,
      education: t.doctors.drPushpikaEducation,
      specialties: [t.doctors.drPushpikaSpec1, t.doctors.drPushpikaSpec2],
      image: drPushpika
    },
    { 
      name: t.doctors.drSurendraName,
      specialty: t.doctors.drSurendraSpecialty,
      bio: t.doctors.drSurendraBio,
      education: t.doctors.drSurendraEducation,
      specialties: [t.doctors.drSurendraSpec1, t.doctors.drSurendraSpec2],
      image: null
    },
    { 
      name: t.doctors.drJaheerName,
      specialty: t.doctors.drJaheerSpecialty,
      bio: t.doctors.drJaheerBio,
      education: t.doctors.drJaheerEducation,
      specialties: [t.doctors.drJaheerSpec1, t.doctors.drJaheerSpec2],
      image: drJaheerBasha
    },
    { 
      name: t.doctors.drPadmavathiName,
      specialty: t.doctors.drPadmavathiSpecialty,
      bio: t.doctors.drPadmavathiBio,
      education: t.doctors.drPadmavathiEducation,
      specialties: [t.doctors.drPadmavathiSpec1, t.doctors.drPadmavathiSpec2],
      image: drPadmavathi
    },
  ]
  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="doctors-hero">
          <h1>{t.doctors.title}</h1>
          <p className="doctors-subtitle">
            {t.doctors.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Doctors Grid */}
      <StaggerContainer className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card-new">
            <div className="doctor-card-header">
              <div className="doctor-card-avatar-new">
                {doctor.image ? (
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'white',
                    background: 'linear-gradient(135deg, #088395 0%, #05606E 100%)'
                  }}>
                    {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="doctor-card-body">
              <h3 className="doctor-card-name">{doctor.name}</h3>
              <p className="doctor-card-specialty">{doctor.specialty}</p>
              <p className="doctor-card-education">{doctor.education}</p>
              
              <div className="doctor-specialties-tags">
                {doctor.specialties.map((spec, idx) => (
                  <span key={idx} className="specialty-tag">{spec}</span>
                ))}
              </div>
              
              <p className="doctor-card-bio">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </StaggerContainer>

      {/* Hiring Section */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <div className="hiring-banner-section">
            <div className="hiring-banner-content">
              <h2 className="hiring-banner-title">{t.doctors.hiringTitle}</h2>
              <p className="hiring-banner-text">{t.doctors.hiringText}</p>
              <div className="hiring-contact-info">
                <div className="hiring-contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:ramaswamyhospitals@gmail.com" className="hiring-email">
                    ramaswamyhospitals@gmail.com
                  </a>
                </div>
                <div className="hiring-contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+917824055789" className="hiring-phone">
                    +91 7824055789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Why Choose Our Doctors */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.doctors.whyChoose}</h2>
        </FadeIn>
        <StaggerContainer className="doctor-features-grid">
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">01</div>
            <h3>{t.doctors.feature1Title}</h3>
            <p>{t.doctors.feature1Desc}</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">02</div>
            <h3>{t.doctors.feature2Title}</h3>
            <p>{t.doctors.feature2Desc}</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">03</div>
            <h3>{t.doctors.feature3Title}</h3>
            <p>{t.doctors.feature3Desc}</p>
          </div>
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <FadeIn>
        <div className="doctors-cta">
          <h2>{t.doctors.ctaTitle}</h2>
          <p>{t.doctors.ctaText}</p>
          <a href="tel:+919912757854" className="btn btn-large">{t.doctors.callNow}</a>
        </div>
      </FadeIn>
    </section>
  )
}