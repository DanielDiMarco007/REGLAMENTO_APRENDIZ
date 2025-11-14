import './SearchBar.css'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar-wrapper">
      <label htmlFor="search-input" className="sr-only">Buscar normas</label>
      <div className="search-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          id="search-input"
          type="text"
          placeholder="Buscar normas (título, categoría o descripción)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar normas"
        />
      </div>
    </div>
  )
}
