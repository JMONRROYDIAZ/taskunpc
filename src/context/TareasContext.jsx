// src/context/TareasContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { tareasIniciales } from '../data/tareas';

const TareasContext = createContext();

export function TareasProvider({ children }) {
  // Inicializar desde localStorage si existe (patrón del documento §useEffect)
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('taskunpc-tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  // Guardar en localStorage cada vez que cambien las tareas (§useEffect — dependencias)
  useEffect(() => {
    localStorage.setItem('taskunpc-tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Actualizar título del documento (efecto con cleanup, del documento)
  useEffect(() => {
    document.title = `TaskUPC · ${tareas.filter(t => !t.completada).length} pendientes`;
    return () => { document.title = 'TaskUPC'; };
  }, [tareas]);

  // Toggle completado (patrón exacto del documento §useState)
  function toggleTarea(id) {
    setTareas(prev => prev.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  }

  // Agregar tarea nueva (patrón del documento §agregarTarea)
  function agregarTarea(nuevaTarea) {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
  }

  // Eliminar tarea (§DetalleTarea — botón de eliminar)
  function eliminarTarea(id) {
    setTareas(prev => prev.filter(t => t.id !== id));
  }

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

// Hook personalizado para consumir el contexto (patrón del documento)
export function useTareas() {
  return useContext(TareasContext);
}
