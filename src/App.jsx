import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useI18n } from './i18n'
import './App.css'
import { useState } from 'react'
import crestLogo from './assets/crest-logo.jpg'
import ScrollToTop from './components/ScrollToTop.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'
import LanguageModal from './components/LanguageModal.jsx'

function App() {
  const { t, lang, setLang } = useI18n()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  // Dynamic title based on current route and language
  const routeTitle = (() => {
    if (pathname === '/') return t.nav.home
    if (pathname.startsWith('/about')) return t.nav.about
    if (pathname.startsWith('/services')) return t.nav.services
    if (pathname.startsWith('/doctors')) return t.nav.doctors
    if (pathname.startsWith('/facilities')) return t.nav.facilities
    if (pathname.startsWith('/testimonials')) return t.nav.testimonials
    if (pathname.startsWith('/achievements')) return t.nav.achievements
    if (pathname.startsWith('/contact')) return t.nav.contact
    return 'Not Found'
  })()
  if (typeof document !== 'undefined') {
    document.title = `${routeTitle} · ${t.brand}`
  }
  return (
    <div className={`app ${mobileOpen ? 'mobile-open' : ''}`}>
      <LanguageModal onSelectLanguage={setLang} />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <div className="topbar">
        <div className="topbar-content">
          <div className="topbar-left">
            <span className="topbar-item">
              <svg className="topbar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Vishanalayam Street, Kavali, Nellore
            </span>
            <span className="topbar-item topbar-phone">
              <svg className="topbar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+919912757854" className="topbar-link">+91 99127 57854</a>
            </span>
          </div>
          <div className="topbar-right">
            <a className="topbar-emergency" href="tel:+919912757854">
              <svg className="topbar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Emergency
            </a>
            <button className="topbar-lang-toggle" onClick={() => setLang(lang === 'en' ? 'te' : 'en')} aria-label="Toggle language">
              <svg className="topbar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
          </div>
        </div>
      </div>
      
      <header className="header" role="banner">
        <div className="header-content">
          <div className="brand">
            <img src={crestLogo} alt="Dr.RAMASWAMY HOSPITALS crest" className="brand-logo" />
            <span className="brand-text">{t.brand}</span>
          </div>
          <nav className="nav" role="navigation" aria-label="Primary navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.home}</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.about}</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.services}</NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.doctors}</NavLink>
            <NavLink to="/facilities" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.facilities}</NavLink>
            <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.achievements}</NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.testimonials}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.contact}</NavLink>
          </nav>
          <button className="hamburger" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu" aria-expanded={mobileOpen}>
            ☰ Menu
          </button>
        </div>
      </header>
      
      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            ✕
          </button>
          <NavLink onClick={() => setMobileOpen(false)} to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.home}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.about}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.services}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/doctors" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.doctors}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/facilities" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.facilities}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/achievements" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.achievements}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/testimonials" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.testimonials}</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>{t.nav.contact}</NavLink>
        </div>
      )}
      
      <main className="main" id="main-content" role="main">
        <ScrollToTop />
        <Breadcrumbs />
        <Outlet />
      </main>
      
      {/* Mobile Quick Actions Bar */}
      <div className="quick-actions-bar" role="toolbar" aria-label="Quick actions">
        <a href="tel:+910000000000" className="quick-action-btn" aria-label="Call hospital">
          <span>{t.quickActions.call}</span>
        </a>
        <a href="https://wa.me/910000000000" className="quick-action-btn secondary" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <span>{t.quickActions.whatsapp}</span>
        </a>
        <a href="https://maps.google.com" className="quick-action-btn" target="_blank" rel="noreferrer" aria-label="Get directions">
          <span>{t.quickActions.directions}</span>
        </a>
      </div>
      
      <footer className="footer" role="contentinfo">
        <div>© {new Date().getFullYear()} {t.brand}</div>
        <div className="links">
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="View on Google Maps">{t.footer.maps}</a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Visit our Linktree">{t.footer.linktree}</a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">{t.footer.instagram}</a>
        </div>
      </footer>
    </div>
  )
}

export default App