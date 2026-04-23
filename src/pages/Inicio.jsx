// src/pages/Inicio.jsx
// Componente con estado (Stateful) — patrón §3.8.4 tabla del documento
// Implementa: useState para filtro, useTareas del contexto, tareasFiltradas
// Estructura: <Header> <FiltroBar> <ListaTareas> — patrón exacto del doc §useState

import { useState } from 'react'
import { useTareas } from '../context/TareasContext'
import Header from '../components/Header'
import FiltroBar from '../components/FiltroBar'
import ListaTareas from '../components/ListaTareas'

export default function Inicio() {
  const { tareas, toggleTarea } = useTareas()

  // Estado local de filtro — patrón exacto del documento §useState
  const [filtro, setFiltro] = useState('todas') // 'todas'|'pendientes'|'completadas'

  // Filtrado de tareas — patrón exacto del documento §useState
  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'completadas') return t.completada
    return true
  })

  // Conteos para los botones de filtro
  const counts = {
    todas: tareas.length,
    pendientes: tareas.filter(t => !t.completada).length,
    completadas: tareas.filter(t => t.completada).length,
  }

  return (
    <div className="page">
      {/* Header stateless — recibe total como prop (patrón §3.8.4) */}
      <Header total={tareas.filter(t => !t.completada).length} />

      {/* Barra de progreso */}
      <div className="progress-section">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: tareas.length ? `${(counts.completadas / tareas.length) * 100}%` : '0%' }}
          />
        </div>
        <span className="progress-label">
          {counts.completadas} / {tareas.length} completadas
        </span>
      </div>

      {/* FiltroBar stateless — recibe filtro y onFiltrar vía props (§3.5-3.6) */}
      <FiltroBar filtro={filtro} onFiltrar={setFiltro} counts={counts} />

      {/* ListaTareas — onToggle como callback (lifting state up §3.5-3.6) */}
      <ListaTareas tareas={tareasFiltradas} onToggle={toggleTarea} />
    </div>
  )
}
