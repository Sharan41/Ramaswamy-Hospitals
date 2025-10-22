import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'

export default function Breadcrumbs() {
  const location = useLocation()
  const { t } = useI18n()
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null
  
  const pathnames = location.pathname.split('/').filter(x => x)
  
  const getBreadcrumbName = (name) => {
    const mapping = {
      'about': t.nav.about,
      'services': t.nav.services,
      'doctors': t.nav.doctors,
      'facilities': t.nav.facilities,
      'testimonials': t.nav.testimonials,
      'achievements': t.nav.achievements,
      'contact': t.nav.contact
    }
    return mapping[name] || name
  }
  
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">{t.common.home}</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const displayName = getBreadcrumbName(name)
        
        return (
          <span key={name}>
            <span aria-hidden="true"> / </span>
            {isLast ? (
              <span aria-current="page">{displayName}</span>
            ) : (
              <Link to={routeTo}>{displayName}</Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
