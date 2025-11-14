import RuleCard from './RuleCard.jsx'
import './RuleList.css'

export default function RuleList({ rules }) {
  return (
    <div className="rule-list">
      {rules.length === 0 ? (
        <p className="no-results">No hay resultados 😢</p>
      ) : (
        rules.map((rule) => <RuleCard key={rule.id} rule={rule} />)
      )}
    </div>
  )
}
