// src/components/BotonNuevo.jsx
// FAB (Floating Action Button) para crear nueva tarea
import { Link, useLocation } from 'react-router-dom'

export default function BotonNuevo() {
  const { pathname } = useLocation()
  // No mostrar el FAB en la página de nueva tarea
  if (pathname === '/nueva') return null

  return (
    <Link to="/nueva" className="fab" aria-label="Nueva tarea" title="Nueva tarea">
      +
    </Link>
  )
}
