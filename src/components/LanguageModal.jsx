import { useState, useEffect } from 'react'

export default function LanguageModal({ onSelectLanguage }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if modal has been shown before
    const hasSeenModal = sessionStorage.getItem('hasSeenLanguageModal')
    
    // Show modal only if user hasn't seen it in this session
    if (!hasSeenModal) {
      // Show modal after a brief delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleLanguageSelect = (lang) => {
    // Mark that user has seen the modal
    sessionStorage.setItem('hasSeenLanguageModal', 'true')
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang)
    // Update app language
    onSelectLanguage(lang)
    // Close modal
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="language-modal-backdrop"
        onClick={() => {}} // Prevent closing by clicking backdrop - force selection
      />
      
      {/* Modal */}
      <div className="language-modal" role="dialog" aria-labelledby="language-modal-title" aria-modal="true">
        <div className="language-modal-content">
          <h2 id="language-modal-title" className="language-modal-title">
            Select Your Language / మీ భాషను ఎంచుకోండి
          </h2>
          <p className="language-modal-subtitle">
            Choose your preferred language to continue / కొనసాగించడానికి మీ ఇష్టమైన భాషను ఎంచుకోండి
          </p>
          
          <div className="language-options">
            <button 
              className="language-option-btn"
              onClick={() => handleLanguageSelect('en')}
              aria-label="Select English language"
            >
              <span className="language-name">English</span>
              <span className="language-native">Continue in English</span>
            </button>
            
            <button 
              className="language-option-btn"
              onClick={() => handleLanguageSelect('te')}
              aria-label="Select Telugu language"
            >
              <span className="language-name">తెలుగు</span>
              <span className="language-native">తెలుగులో కొనసాగించండి</span>
            </button>
          </div>
          
          <div style={{ marginTop: 24, fontSize: '0.9rem', color: 'var(--muted)', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span>Use the</span>
              <svg style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>icon to switch languages anytime</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span>ఎప్పుడైనా భాషను మార్చడానికి</span>
              <svg style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>చిహ్నాన్ని ఉపయోగించండి</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}