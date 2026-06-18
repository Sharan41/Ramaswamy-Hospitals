import { Link } from 'react-router-dom'
import { FadeIn } from '../components/AnimatedSection'

function LegalSection({ section }) {
  return (
    <article className="legal-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.subsections?.map((subsection) => (
        <div key={subsection.subheading} className="legal-subsection">
          <h3>{subsection.subheading}</h3>
          {subsection.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {subsection.list && (
            <ul>
              {subsection.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {section.list && (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.afterList?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.contact && (
        <address className="legal-contact">
          <strong>{section.contact.name}</strong>
          {section.contact.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      )}
    </article>
  )
}

export default function LegalPage({ content, relatedLink }) {
  return (
    <section className="section legal-page">
      <FadeIn>
        <div className="legal-hero">
          <h1>{content.title}</h1>
          <p className="legal-updated">Last Updated: {content.lastUpdated}</p>
        </div>
      </FadeIn>

      <div className="legal-content">
        {content.sections.map((section) => (
          <LegalSection key={section.heading} section={section} />
        ))}

        {content.disclaimer && (
          <aside className="legal-disclaimer">
            <strong>Disclaimer:</strong> {content.disclaimer}
          </aside>
        )}

        {relatedLink && (
          <p className="legal-related">
            See also: <Link to={relatedLink.to}>{relatedLink.label}</Link>
          </p>
        )}
      </div>
    </section>
  )
}
