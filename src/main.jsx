import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { lazy } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { I18nProvider } from './i18n'
import { ToastProvider } from './components/Toast.jsx'
import App from './App.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Doctors = lazy(() => import('./pages/Doctors.jsx'))
const Facilities = lazy(() => import('./pages/Facilities.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'doctors', element: <Doctors /> },
      { path: 'facilities', element: <Facilities /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

// Add error boundary
console.log('Main.jsx is loading...')
const root = document.getElementById('root')
console.log('Root element:', root)
if (!root) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found</div>'
} else {
  console.log('Starting React app...')
  try {
    createRoot(root).render(
      <StrictMode>
        <I18nProvider>
          <ToastProvider>
            <Suspense fallback={<LoadingScreen />}>
              <RouterProvider router={router} />
            </Suspense>
          </ToastProvider>
        </I18nProvider>
      </StrictMode>,
    )
  } catch (error) {
    console.error('Error rendering app:', error)
    root.innerHTML = '<div style="padding: 20px; color: red;">Error loading app. Check console for details.</div>'
  }
}