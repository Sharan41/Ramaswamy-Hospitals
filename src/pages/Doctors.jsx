import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'

export default function Doctors() {
  const { t } = useI18n()
  
  const doctors = [
    { 
      name: t.doctors.doctor1Name, 
      specialty: t.doctors.doctor1Specialty, 
      bio: t.doctors.doctor1Bio,
      education: t.doctors.doctor1Education,
      experience: "15+ Years",
      specialties: ["Internal Medicine", "Preventive Care"]
    },
    { 
      name: t.doctors.doctor2Name, 
      specialty: t.doctors.doctor2Specialty, 
      bio: t.doctors.doctor2Bio,
      education: t.doctors.doctor2Education,
      experience: "12+ Years",
      specialties: ["Joint Replacement", "Sports Medicine"]
    },
    { 
      name: t.doctors.doctor3Name, 
      specialty: t.doctors.doctor3Specialty, 
      bio: t.doctors.doctor3Bio,
      education: t.doctors.doctor3Education,
      experience: "10+ Years",
      specialties: ["Interventional Cardiology", "Heart Care"]
    },
    { 
      name: t.doctors.doctor4Name, 
      specialty: t.doctors.doctor4Specialty, 
      bio: t.doctors.doctor4Bio,
      education: t.doctors.doctor4Education,
      experience: "14+ Years",
      specialties: ["Obstetrics", "Women's Health"]
    },
    { 
      name: t.doctors.doctor5Name, 
      specialty: t.doctors.doctor5Specialty, 
      bio: t.doctors.doctor5Bio,
      education: t.doctors.doctor5Education,
      experience: "11+ Years",
      specialties: ["Child Care", "Vaccinations"]
    },
    { 
      name: t.doctors.doctor6Name, 
      specialty: t.doctors.doctor6Specialty, 
      bio: t.doctors.doctor6Bio,
      education: t.doctors.doctor6Education,
      experience: "9+ Years",
      specialties: ["Skin Care", "Cosmetic Dermatology"]
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
                <div className="doctor-card-initials">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="doctor-experience-badge">{doctor.experience}</div>
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
          <h2 className="section-heading">Why Choose Our Doctors</h2>
        </FadeIn>
        <StaggerContainer className="doctor-features-grid">
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">01</div>
            <h3>Highly Qualified</h3>
            <p>All our doctors are highly qualified with advanced degrees and certifications from renowned institutions.</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">02</div>
            <h3>Experienced Team</h3>
            <p>Our medical team brings decades of combined experience in their respective specialties.</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">03</div>
            <h3>Patient-Centered</h3>
            <p>We prioritize patient care and comfort, ensuring personalized attention for every individual.</p>
          </div>
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <FadeIn>
        <div className="doctors-cta">
          <h2>{t.doctors.ctaTitle}</h2>
          <p>{t.doctors.ctaText}</p>
          <a href="tel:+919912757854" className="btn btn-large">Call Now</a>
        </div>
      </FadeIn>
    </section>
  )
}