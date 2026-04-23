// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import DetalleTarea from './pages/DetalleTarea'
import NuevaTarea from './pages/NuevaTarea'
import Navbar from './components/Navbar'
import BotonNuevo from './components/BotonNuevo'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tarea/:id" element={<DetalleTarea />} />
          <Route path="/nueva" element={<NuevaTarea />} />
        </Routes>
      </main>

      {/* FAB flotante — visible en todas las páginas excepto /nueva */}
      <BotonNuevo />
    </div>
  )
}

export default App
