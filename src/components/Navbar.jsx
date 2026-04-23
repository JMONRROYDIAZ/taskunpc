// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'

export default function Navbar() {
  const { tareas } = useTareas()
  const pendientes = tareas.filter(t => !t.completada).length
  const { pathname } = useLocation()

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">🎓</span>
          <span className="brand-text">Task<em>UPC</em></span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Inicio
            {pendientes > 0 && <span className="badge">{pendientes}</span>}
          </Link>
          <Link to="/nueva" className={`nav-link nav-cta ${pathname === '/nueva' ? 'active' : ''}`}>
            + Nueva Tarea
          </Link>
        </nav>
      </div>
    </header>
  )
}
