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
          
          <p style={{ marginTop: 24, fontSize: '0.9rem', color: 'var(--muted)', textAlign: 'center' }}>
            You can change language anytime using the toggle button in the header
            <br />
            మీరు ఎప్పుడైనా హెడర్‌లోని టోగుల్ బటన్ ఉపయోగించి భాషను మార్చవచ్చు
          </p>
        </div>
      </div>
    </>
  )
}