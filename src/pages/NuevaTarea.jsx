// src/pages/NuevaTarea.jsx
// Formulario controlado — código EXACTO del documento §Taller 3
// Campos: titulo, materia, fecha
// Al enviar: agregarTarea(form) + navigate('/')

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useTareas } from '../context/TareasContext'

const MATERIAS = [
  'Matemáticas',
  'Física',
  'Química',
  'Informática',
  'Programación',
  'Redes',
  'Base de Datos',
  'Cálculo',
  'Inglés',
  'Otra',
]

export default function NuevaTarea() {
  const { agregarTarea } = useTareas()
  const navigate = useNavigate()

  // Estado del formulario — patrón EXACTO del documento
  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '', descripcion: '' })
  const [error, setError] = useState('')

  // handleChange — patrón EXACTO del documento (spread + nombre dinámico)
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  // handleSubmit — patrón EXACTO del documento
  function handleSubmit(e) {
    e.preventDefault()
    if (!form.titulo.trim()) {
      setError('El título es obligatorio.')
      return
    }
    agregarTarea(form)  // agrega al contexto global
    navigate('/')        // redirige al inicio con useNavigate
  }

  return (
    <div className="page">
      <Link to="/" className="back-link">← Volver al inicio</Link>

      <div className="page-header">
        <h1 className="page-title">Nueva Tarea</h1>
        <p className="page-subtitle">Añade una nueva tarea a tu lista de pendientes</p>
      </div>

      <div className="form-wrapper">
        {/* Formulario controlado */}
        <form onSubmit={handleSubmit} noValidate>

          {/* Campo: titulo */}
          <div className="form-group">
            <label className="form-label" htmlFor="titulo">
              Título <span className="required">*</span>
            </label>
            <input
              id="titulo"
              name="titulo"
              type="text"
              className={`form-input ${error ? 'input-error' : ''}`}
              placeholder="Ej: Entregar práctica de cálculo..."
              value={form.titulo}
              onChange={handleChange}
              autoFocus
            />
            {error && <span className="error-msg">{error}</span>}
          </div>

          {/* Campo: materia */}
          <div className="form-group">
            <label className="form-label" htmlFor="materia">Materia</label>
            <select
              id="materia"
              name="materia"
              className="form-input form-select"
              value={form.materia}
              onChange={handleChange}
            >
              <option value="">Selecciona una materia...</option>
              {MATERIAS.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Campo: fecha */}
          <div className="form-group">
            <label className="form-label" htmlFor="fecha">Fecha de entrega</label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              className="form-input"
              value={form.fecha}
              onChange={handleChange}
              style={{ colorScheme: 'light' }}
            />
          </div>

          {/* Campo: descripcion */}
          <div className="form-group">
            <label className="form-label" htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="form-input"
              placeholder="Detalles adicionales sobre la tarea..."
              value={form.descripcion}
              onChange={handleChange}
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Agregar tarea
            </button>
            <Link to="/" className="btn-ghost">Cancelar</Link>
          </div>

          {/* Vista previa del estado del form — útil para inspección */}
          <details className="form-debug">
            <summary>Estado del form (useState)</summary>
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </details>
        </form>
      </div>
    </div>
  )
}
