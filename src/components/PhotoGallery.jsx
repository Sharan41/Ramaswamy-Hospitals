import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FadeIn, StaggerContainer } from './AnimatedSection'
import '../styles/photoGallery.css'

function Lightbox({ images, currentIndex, onClose, onNext, onPrev, onSelectImage }) {
  const lightboxRef = useRef(null)
  const [imageLoading, setImageLoading] = useState(true)

  // Reset loading state when image changes
  useEffect(() => {
    setImageLoading(true)
  }, [currentIndex])

  // Preload adjacent images for faster navigation
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image()
      img.src = src
    }

    // Preload next 2 images
    const nextIndex1 = (currentIndex + 1) % images.length
    const nextIndex2 = (currentIndex + 2) % images.length
    if (images[nextIndex1]?.src) {
      preloadImage(images[nextIndex1].src)
    }
    if (images[nextIndex2]?.src) {
      preloadImage(images[nextIndex2].src)
    }

    // Preload previous 2 images
    const prevIndex1 = (currentIndex - 1 + images.length) % images.length
    const prevIndex2 = (currentIndex - 2 + images.length) % images.length
    if (images[prevIndex1]?.src) {
      preloadImage(images[prevIndex1].src)
    }
    if (images[prevIndex2]?.src) {
      preloadImage(images[prevIndex2].src)
    }
  }, [currentIndex, images])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  const handleBackdropClick = (e) => {
    if (e.target === lightboxRef.current) {
      onClose()
    }
  }

  return createPortal(
    <div 
      ref={lightboxRef}
      className="photo-lightbox-portal" 
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        className="lightbox-close-btn"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Previous Button */}
      <button
        className="lightbox-nav-btn lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      {/* Next Button */}
      <button
        className="lightbox-nav-btn lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Main Image Container */}
      <div className="lightbox-main-content">
        <div className="lightbox-image-container">
          {imageLoading && (
            <div className="lightbox-loading-spinner">
              <div className="spinner"></div>
            </div>
          )}
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
            className="lightbox-main-image"
            loading="eager"
            decoding="async"
            onLoad={() => setImageLoading(false)}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        </div>
        
        {/* Counter Only */}
        <div className="lightbox-info">
          <span className="lightbox-image-counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="lightbox-thumbnails-bar">
        <div className="lightbox-thumbnails-scroll">
          {images.map((image, index) => (
            <button
              key={index}
              className={`lightbox-thumb ${index === currentIndex ? 'lightbox-thumb-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                onSelectImage(index)
              }}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function PhotoGallery({ images, title, previewCount = 6 }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState({})
  const [visibleImages, setVisibleImages] = useState(new Set([0, 1, 2]))
  const scrollPositionRef = useRef(0)
  const observerRef = useRef(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleImages((prev) => new Set([...prev, index]))
          }
        })
      },
      { rootMargin: '50px', threshold: 0.1 }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (isLightboxOpen) {
      // Save scroll position
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop
      
      // Lock body scroll
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      // Restore scroll when lightbox closes
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.height = ''
      
      if (scrollPositionRef.current > 0) {
        window.scrollTo(0, scrollPositionRef.current)
      }
    }
    
    // Cleanup on component unmount to ensure scroll is restored
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [isLightboxOpen])

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }))
  }

  const displayImages = images.slice(0, previewCount)

  return (
    <div className="photo-gallery-section">
      {title && (
        <FadeIn>
          <h2 className="section-heading">{title}</h2>
        </FadeIn>
      )}

      <StaggerContainer className="photo-gallery-grid-modern">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="photo-gallery-item-modern"
            onClick={() => openLightbox(index)}
            data-index={index}
            ref={(el) => {
              if (el && observerRef.current && index > 2) {
                observerRef.current.observe(el)
              }
            }}
          >
            <div className="photo-gallery-image-wrapper">
              {!imageLoaded[index] && (
                <div className="photo-gallery-skeleton"></div>
              )}
              {visibleImages.has(index) ? (
                <img
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  onLoad={() => handleImageLoad(index)}
                  style={{ 
                    opacity: imageLoaded[index] ? 1 : 0,
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              ) : (
                <div className="photo-gallery-skeleton"></div>
              )}
              <div className="photo-gallery-overlay">
                <div className="photo-gallery-zoom-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </StaggerContainer>

      {images.length > previewCount && (
        <div className="photo-gallery-view-all">
          <button 
            className="btn btn-outline-large"
            onClick={() => openLightbox(0)}
          >
            View All {images.length} Photos
          </button>
        </div>
      )}

      {isLightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrevious}
          onSelectImage={goToImage}
        />
      )}
    </div>
  )
}
