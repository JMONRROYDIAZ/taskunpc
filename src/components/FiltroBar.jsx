// src/components/FiltroBar.jsx
// Stateless — recibe filtro y onFiltrar vía props (patrón §3.5-3.6 Flujo Padre→Hijo)

const FILTROS = [
  { id: 'todas', label: 'Todas' },
  { id: 'pendientes', label: 'Pendientes' },
  { id: 'completadas', label: 'Completadas' },
]

export default function FiltroBar({ filtro, onFiltrar, counts }) {
  return (
    <div className="filtro-bar">
      {FILTROS.map(f => (
        <button
          key={f.id}
          className={`filtro-btn ${filtro === f.id ? 'activo' : ''}`}
          onClick={() => onFiltrar(f.id)}
        >
          {f.label}
          <span className="filtro-count">{counts[f.id]}</span>
        </button>
      ))}
    </div>
  )
}
