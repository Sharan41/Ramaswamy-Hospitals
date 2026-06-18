import LegalPage from './LegalPage'
import { termsAndConditions } from '../data/legalContent'

export default function TermsAndConditions() {
  return (
    <LegalPage
      content={termsAndConditions}
      relatedLink={{ to: '/privacy-policy', label: 'Privacy Policy' }}
    />
  )
}
