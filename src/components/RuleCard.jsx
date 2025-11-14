import { useState } from 'react'
import './RuleCard.css'

export default function RuleCard({ rule }) {
  const [compliant, setCompliant] = useState(false)

  return (
    <article className="rule-card" aria-labelledby={`rule-${rule.id}-title`}>
      <h3 id={`rule-${rule.id}-title`}>{rule.title}</h3>
      <div className="meta">
        <span className="category">{rule.category}</span>
      </div>
      <p className="desc">{rule.description}</p>
      <div className="actions">
        <button
          className={compliant ? 'ok' : 'btn'}
          onClick={() => setCompliant((p) => !p)}
          aria-pressed={compliant}
          aria-label={compliant ? `Marcada como cumplida: ${rule.title}` : `Marcar como cumplida: ${rule.title}`}
        >
          {compliant ? 'Cumplida✅' : 'Marcar como cumplida'}
        </button>
      </div>
    </article>
  )
}
