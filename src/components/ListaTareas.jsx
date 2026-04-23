// src/components/ListaTareas.jsx
// Stateless — recibe tareas y onToggle como props

import TareaCard from './TareaCard'

export default function ListaTareas({ tareas, onToggle }) {
  if (tareas.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📭</span>
        <p>No hay tareas en esta categoría.</p>
      </div>
    )
  }

  return (
    <div className="lista-tareas">
      {tareas.map(tarea => (
        <TareaCard key={tarea.id} tarea={tarea} onToggle={onToggle} />
      ))}
    </div>
  )
}
