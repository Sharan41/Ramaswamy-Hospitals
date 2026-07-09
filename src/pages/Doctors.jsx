import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import drRamaswamy from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Ramaswamy 1.jpg?format=webp&w=600&quality=80'
import drJaheerBasha from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Jaheer Basha.jpg?format=webp&w=600&quality=80'
import drPadmavathi from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Padmavathi.jpg?format=webp&w=600&quality=80'
import drRajithaKata from '../assets/WhatsApp Image 2026-07-06 at 14.44.18.jpeg'
import drRasiVeeraiahGoud from '../assets/WhatsApp Image 2026-02-19 at 20.59.14.jpeg'

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
      name: t.doctors.drRajithaKataName,
      specialty: t.doctors.drRajithaKataSpecialty,
      bio: t.doctors.drRajithaKataBio,
      education: t.doctors.drRajithaKataEducation,
      specialties: [t.doctors.drRajithaKataSpec1, t.doctors.drRajithaKataSpec2],
      image: drRajithaKata
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
    { 
      name: t.doctors.drRasiVeeraiahGoudName,
      specialty: t.doctors.drRasiVeeraiahGoudSpecialty,
      bio: t.doctors.drRasiVeeraiahGoudBio,
      education: t.doctors.drRasiVeeraiahGoudEducation,
      specialties: [t.doctors.drRasiVeeraiahGoudSpec1, t.doctors.drRasiVeeraiahGoudSpec2],
      image: drRasiVeeraiahGoud
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
          <div key={index} className="doctor-card-enhanced">
            <div className="doctor-card-header-enhanced">
              <div className="header-pattern"></div>
              <div className="doctor-avatar-wrapper">
                <div className="doctor-card-avatar-enhanced">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="doctor-avatar-image"
                    />
                  ) : (
                    <div className="doctor-avatar-placeholder">
                      <span className="initials-text">
                        {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="avatar-glow"></div>
              </div>
            </div>
            
            <div className="doctor-card-content">
              <h3 className="doctor-name-enhanced">{doctor.name}</h3>
              <p className="doctor-specialty-enhanced">{doctor.specialty}</p>
              <p className="doctor-education-enhanced">{doctor.education}</p>
              
              <div className="doctor-specialties-enhanced">
                {doctor.specialties.map((spec, idx) => (
                  <span key={idx} className="specialty-badge">
                    {spec}
                  </span>
                ))}
              </div>
              
              <p className="doctor-bio-enhanced">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </StaggerContainer>

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
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ramaswamyhospitals@gmail.com" className="btn btn-large">{t.doctors.emailResume}</a>
            <a href="tel:+917824055789" className="btn btn-large">{t.doctors.callNow}</a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}