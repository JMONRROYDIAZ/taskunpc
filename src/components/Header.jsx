// src/components/Header.jsx
// Componente sin estado (Stateless) — solo recibe y muestra props
// Patrón del documento §3.8.4 Con Estado vs. Sin Estado

export default function Header({ total }) {
  return (
    <div className="page-header">
      <h1 className="page-title">Mis Tareas</h1>
      <p className="page-subtitle">
        {total === 0
          ? '¡Todo al día! No tienes tareas pendientes.'
          : `Tienes ${total} tarea${total !== 1 ? 's' : ''} pendiente${total !== 1 ? 's' : ''}`}
      </p>
    </div>
  )
}
