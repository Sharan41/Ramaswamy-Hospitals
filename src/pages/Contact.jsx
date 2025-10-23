import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import { useToast } from '../components/Toast'

export default function Contact() {
  const { t } = useI18n()
  const toast = useToast()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    toast.success('Message sent successfully! We will contact you soon.', 5000)
    // You can also use:
    // toast.error('Failed to send message. Please try again.')
    // toast.warning('Please fill in all required fields.')
    // toast.info('Processing your request...')
  }
  
  const socialLinks = [
    { 
      name: t.contact.instagram, 
      desc: t.contact.instagramText,
      icon: "IG",
      url: "https://www.instagram.com/drramaswamyhospitals/"
    },
    { 
      name: t.contact.linktree, 
      desc: t.contact.linktreeText,
      icon: "LT",
      url: "https://linktr.ee/drramaswamyhospitals"
    },
    { 
      name: t.contact.whatsapp, 
      desc: t.contact.whatsappText,
      icon: "WA",
      url: "https://wa.me/919912757854"
    }
  ]

  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="contact-hero">
          <h1>{t.contact.title}</h1>
        </div>
      </FadeIn>

      {/* Contact Info Cards */}
      <StaggerContainer className="contact-info-grid">
        <div className="contact-info-card">
          <div className="contact-info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3>{t.contact.address}</h3>
          <p>{t.contact.addressLine1}</p>
          <p>{t.contact.addressLine2}</p>
          <p>{t.contact.addressLine3}</p>
          <a href="https://www.google.com/maps/dir//14.916762299999998,79.9951669/@14.916762299999998,79.9951669,17z" target="_blank" rel="noreferrer" className="contact-link">
            {t.contact.viewMaps} →
          </a>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <h3>{t.contact.phone}</h3>
          <a href="tel:+919912757854" className="contact-phone-number" style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px', display: 'block' }}>+91 9912757854</a>
          <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>Please note that we do not take appointments beforehand.</p>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>{t.contact.email}</h3>
          <a href="mailto:ramaswamyhospitals@gmail.com" className="contact-email" style={{ fontSize: '18px', marginTop: '10px', display: 'block' }}>ramaswamyhospitals@gmail.com</a>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>{t.contact.hours}</h3>
          <div className="contact-hours-item">
            <strong>{t.contact.emergencyHours}</strong>
          </div>
          <div className="contact-hours-divider"></div>
          <div className="contact-hours-item">
            <strong>{t.contact.opdHours}</strong>
          </div>
          <div className="contact-hours-item">{t.contact.monSat}</div>
          <div className="contact-hours-item">{t.contact.sunday}</div>
        </div>
      </StaggerContainer>

      {/* Google Maps Location */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.contact.findUs}</h2>
          <p className="section-subtitle">{t.contact.findUsSubtitle}</p>
        </FadeIn>
        <ScaleIn>
          <div className="contact-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.364682218248!2d79.9951669!3d14.916762299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7bf0315d787b%3A0xfaf1df2ed7d74779!2sKandukuri%20Hospitals!5e0!3m2!1sen!2sin!4v1761138643381!5m2!1sen!2sin" 
              className="contact-map-iframe"
              title="Dr. Ramaswamy Hospitals Location"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="contact-map-overlay">
              <a 
                href="https://www.google.com/maps/dir//14.916762299999998,79.9951669/@14.916762299999998,79.9951669,17z" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-large"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {t.contact.getDirections}
              </a>
            </div>
          </div>
        </ScaleIn>
      </div>

      {/* Contact Form */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">Send Us a Message</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', color: '#666' }}>
            Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </FadeIn>
        <ScaleIn>
          <form action="https://formspree.io/f/xanykpwb" method="POST" className="contact-form-main">
            <div className="contact-form-grid">
              <div className="contact-form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              Send Message
            </button>
          </form>
        </ScaleIn>
      </div>

      {/* Social Media */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.contact.connectWithUs}</h2>
        </FadeIn>
        <StaggerContainer className="contact-social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="contact-social-card">
              <div className="contact-social-icon">{social.icon}</div>
              <h3>{social.name}</h3>
              <p>{social.desc}</p>
              <div className="contact-social-arrow">→</div>
            </a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}