// src/pages/DetalleTarea.jsx
// Usa useParams para obtener el :id de la URL — patrón exacto del documento
// Muestra todos los datos de la tarea
// Incluye botón de eliminar (CRUD - eliminar)

import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'

export default function DetalleTarea() {
  const { id } = useParams()          // Obtener :id de la URL — doc §useParams
  const navigate = useNavigate()       // Navegar programáticamente — doc §useNavigate
  const { tareas, toggleTarea, eliminarTarea } = useTareas()

  // Buscar la tarea por id (el id viene como string desde la URL)
  const tarea = tareas.find(t => String(t.id) === id)

  function formatFecha(fecha) {
    if (!fecha) return 'Sin fecha'
    const [y, m, d] = fecha.split('-')
    return `${d}/${m}/${y}`
  }

  function handleEliminar() {
    if (window.confirm(`¿Eliminar "${tarea.titulo}"? Esta acción no se puede deshacer.`)) {
      eliminarTarea(tarea.id)
      navigate('/')   // Redirige al inicio tras eliminar
    }
  }

  // Tarea no encontrada
  if (!tarea) {
    return (
      <div className="page">
        <div className="not-found">
          <span className="not-found-icon">🔍</span>
          <h2>Tarea no encontrada</h2>
          <p>El ID <code>{id}</code> no corresponde a ninguna tarea.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: 20 }}>
            ← Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      {/* Botón volver — navigate() programático del doc */}
      <button className="back-link" onClick={() => navigate('/')}>
        ← Volver
      </button>

      <div className="page-header">
        <h1 className="page-title">Detalle de tarea</h1>
      </div>

      <div className="detalle-card">
        {/* Estado visual */}
        <div className={`estado-badge ${tarea.completada ? 'badge-ok' : 'badge-pending'}`}>
          {tarea.completada ? '✓ Completada' : '○ Pendiente'}
        </div>

        {/* Título */}
        <h2 className={`detalle-titulo ${tarea.completada ? 'tachado' : ''}`}>
          {tarea.titulo}
        </h2>

        {/* Todos los datos de la tarea */}
        <dl className="detalle-fields">
          <div className="detalle-row">
            <dt>Materia</dt>
            <dd>{tarea.materia || '—'}</dd>
          </div>
          <div className="detalle-row">
            <dt>Fecha de entrega</dt>
            <dd>{formatFecha(tarea.fecha)}</dd>
          </div>
          <div className="detalle-row">
            <dt>Estado</dt>
            <dd>{tarea.completada ? 'Completada ✓' : 'Pendiente'}</dd>
          </div>
          <div className="detalle-row">
            <dt>ID</dt>
            <dd className="id-value">{tarea.id}</dd>
          </div>
          {tarea.descripcion && (
            <div className="detalle-row detalle-row--full">
              <dt>Descripción</dt>
              <dd>{tarea.descripcion}</dd>
            </div>
          )}
        </dl>

        {/* Acciones: toggle + eliminar */}
        <div className="detalle-actions">
          <button
            className="btn-primary"
            onClick={() => { toggleTarea(tarea.id); navigate('/') }}
          >
            {tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
          </button>

          <button className="btn-danger" onClick={handleEliminar}>
            🗑 Eliminar tarea
          </button>
        </div>
      </div>
    </div>
  )
}
