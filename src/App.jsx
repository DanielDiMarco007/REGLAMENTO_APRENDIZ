import { useState } from 'react'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import RuleList from './components/RuleList.jsx'
import Footer from './components/Footer.jsx'
import rulesData from './data/reglas.jsx'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')

  const filteredRules = rulesData.filter((rule) => {
    const q = search.trim().toLowerCase()
    const matchesText =
      q === '' ||
      rule.title.toLowerCase().includes(q) ||
      rule.category.toLowerCase().includes(q) ||
      rule.description.toLowerCase().includes(q)
    const matchesCategory = category === 'Todas' || rule.category === category
    return matchesText && matchesCategory
  })

  return (
    <div className="app">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <RuleList rules={filteredRules} />
      <Footer />
    </div>
  )
}
