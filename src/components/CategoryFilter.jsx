export default function CategoryFilter({ category, setCategory }) {
  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      <label htmlFor="category-select" style={{ marginRight: 8 }}>Filtrar por:</label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filtrar por categoría"
      >
        <option value="Todas">Todas</option>
        <option value="Disciplina">Disciplina</option>
        <option value="Seguridad">Seguridad</option>
        <option value="Convivencia">Convivencia</option>
      </select>
    </div>
  )
}
