import LegalPage from './LegalPage'
import { privacyPolicy } from '../data/legalContent'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      content={privacyPolicy}
      relatedLink={{ to: '/terms-and-conditions', label: 'Terms & Conditions' }}
    />
  )
}
