import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null
  
  const pathnames = location.pathname.split('/').filter(x => x)
  
  const breadcrumbNames = {
    'about': 'About',
    'services': 'Services',
    'testimonials': 'Testimonials',
    'achievements': 'Achievements',
    'contact': 'Contact'
  }
  
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const displayName = breadcrumbNames[name] || name
        
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
