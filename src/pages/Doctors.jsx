import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import drRamaswamy from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Ramaswamy 1.jpg?format=webp&w=600'
import drJaheerBasha from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Jaheer Basha.jpg?format=webp&w=600'
import drPadmavathi from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Padmavathi.jpg?format=webp&w=600'
import drPushpika from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr.Pushpika.jpg?format=webp&w=600'

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