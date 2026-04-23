// src/components/TareaCard.jsx
// Componente sin estado (Stateless) — recibe props y callback onCompletar
// Patrón §3.5–3.6: comunicación hijo→padre via callback
// Patrón §3.8.4: TareaCard es Stateless en la tabla del documento

import { Link } from 'react-router-dom'

export default function TareaCard({ tarea, onToggle }) {
  // onToggle = callback del padre (lifting state up)
  // equivalente al onCompletar del documento §3.5-3.6

  function formatFecha(fecha) {
    if (!fecha) return '—'
    const [y, m, d] = fecha.split('-')
    return `${d}/${m}/${y}`
  }

  return (
    <article className={`tarea-card ${tarea.completada ? 'completada' : ''}`}>
      {/* Checkbox — onClick llama toggleTarea(id) del contexto vía onToggle */}
      <button
        className={`check-btn ${tarea.completada ? 'checked' : ''}`}
        onClick={() => onToggle(tarea.id)}
        aria-label={tarea.completada ? 'Marcar pendiente' : 'Marcar completada'}
      >
        {tarea.completada && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4L4 7.5L10 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <div className="card-body">
        {/* Título con tachado cuando completada */}
        <span className="card-titulo">{tarea.titulo}</span>
        <div className="card-meta">
          <span className="card-materia">{tarea.materia || 'Sin materia'}</span>
          <span className="card-fecha">📅 {formatFecha(tarea.fecha)}</span>
        </div>
      </div>

      {/* Link al detalle — React Router */}
      <Link to={`/tarea/${tarea.id}`} className="card-detail-link" title="Ver detalle">
        →
      </Link>
    </article>
  )
}
