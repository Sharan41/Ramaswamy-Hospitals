import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The care I received was exceptional and the staff was incredibly compassionate. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Rajesh Kumar",
    location: "Kavali",
    rating: 5,
    featured: true
  },
  {
    quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. The doctors here are highly skilled and took the time to explain everything.",
    author: "Lakshmi Devi",
    location: "Nellore",
    rating: 5
  },
  {
    quote: "Donec eu libero sit amet quam egestas semper. I'm grateful for the excellent treatment and the modern facilities provided here.",
    author: "Venkata Rao",
    location: "Gudur",
    rating: 5
  },
  {
    quote: "Nulla facilisi donec hendrerit orci sed velit dictum. The emergency care team saved my life and I can't thank them enough.",
    author: "Priya Sharma",
    location: "Kavali",
    rating: 5
  },
  {
    quote: "Maecenas vel lectus vel nulla facilisis ornare eu non turpis. The nursing staff was attentive and caring throughout my stay.",
    author: "Suresh Babu",
    location: "Atmakur",
    rating: 5
  },
  {
    quote: "Sed nisi nulla quis sem at nibh elementum imperdiet. From consultation to recovery, every step was handled professionally.",
    author: "Anitha Reddy",
    location: "Kavali",
    rating: 5
  }
]

export default function Testimonials() {
  const { t } = useI18n()
  
  const featuredTestimonial = testimonials[0]
  const otherTestimonials = testimonials.slice(1)
  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="testimonials-hero">
          <h1>{t.testimonials.title}</h1>
          <p className="testimonials-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Featured Testimonial */}
      <ScaleIn>
        <div className="featured-testimonial">
          <div className="featured-quote-icon">"</div>
          <div className="featured-testimonial-stars">
            {'★'.repeat(featuredTestimonial.rating)}
          </div>
          <p className="featured-testimonial-quote">{featuredTestimonial.quote}</p>
          <div className="featured-testimonial-author">
            <div className="featured-author-avatar">
              {featuredTestimonial.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="featured-author-name">{featuredTestimonial.author}</div>
              <div className="featured-author-location">{featuredTestimonial.location}</div>
            </div>
          </div>
        </div>
      </ScaleIn>

      {/* Video Testimonial Section */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">Patient Stories</h2>
          <p className="section-subheading">Hear directly from our patients about their experiences</p>
        </FadeIn>
        <ScaleIn>
          <div className="video-testimonial-container">
            <div className="video-testimonial-placeholder">
              <svg className="video-play-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
              </svg>
              <div className="video-testimonial-title">Patient Testimonial Video</div>
              <div className="video-testimonial-subtitle">Click to watch patient experiences</div>
            </div>
            <div className="video-testimonial-info">
              <h3>Real Stories, Real Care</h3>
              <p>Watch our patients share their journey to recovery and the compassionate care they received at Dr.RAMASWAMY HOSPITALS.</p>
              <div className="video-testimonial-features">
                <div className="video-feature-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Real patient experiences</span>
                </div>
                <div className="video-feature-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Authentic testimonials</span>
                </div>
                <div className="video-feature-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Healthcare success stories</span>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>

      {/* Stats Section */}
      <FadeIn>
        <div className="testimonial-stats">
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">1,500+</div>
            <div className="testimonial-stat-label">Happy Patients</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">4.9/5</div>
            <div className="testimonial-stat-label">Average Rating</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">98%</div>
            <div className="testimonial-stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </FadeIn>

      {/* Other Testimonials */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">What Our Patients Say</h2>
        </FadeIn>
        
        <StaggerContainer className="testimonials-grid">
          {otherTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-new">
              <div className="testimonial-card-stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-card-quote">"{testimonial.quote}"</p>
              <div className="testimonial-card-divider"></div>
              <div className="testimonial-card-footer">
                <div className="testimonial-card-avatar">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonial-card-author">{testimonial.author}</div>
                  <div className="testimonial-card-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <FadeIn>
        <div className="testimonials-cta">
          <h2>{t.testimonials.shareExperience}</h2>
          <p>{t.testimonials.shareText}</p>
          <button className="btn btn-large">{t.testimonials.writeReview}</button>
        </div>
      </FadeIn>
    </section>
  )
}