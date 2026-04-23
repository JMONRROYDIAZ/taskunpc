# TaskUPC — Gestión de Tareas Universitarias

Aplicación web SPA para gestionar tareas académicas, construida con **React + Vite** y desplegada en la nube.

---

## 🌐 Demo en vivo

| Plataforma | URL |
|-----------|-----|
| Netlify | http://symphonious-florentine-648133.netlify.app |
| Vercel | https://taskupc-theta.vercel.app |
| Surge | https://scandalous-pollution.surge.sh |

---

## 🚀 Correr el proyecto localmente

### Requisitos previos
- Node.js v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clona o descarga la carpeta del proyecto
cd taskupc

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre **http://localhost:5173** en tu navegador.

---

## 📦 Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Genera build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## 📁 Estructura del proyecto

```
taskupc/
├── index.html
├── vite.config.js
├── package.json
├── netlify.toml
├── vercel.json
└── src/
    ├── main.jsx                ← Entry point React
    ├── App.jsx                 ← Router + Layout principal
    ├── index.css               ← Estilos globales (tema académico violeta)
    ├── data/
    │   └── tareas.js           ← Datos iniciales mock
    ├── context/
    │   └── TareasContext.jsx   ← Estado global + localStorage + Provider
    ├── components/
    │   ├── Navbar.jsx          ← Barra de navegación + contador
    │   ├── Header.jsx          ← Título y subtítulo de página
    │   ├── TareaCard.jsx       ← Tarjeta individual de tarea
    │   ├── ListaTareas.jsx     ← Lista con .map()
    │   ├── FiltroBar.jsx       ← Botones de filtro por estado
    │   └── BotonNuevo.jsx      ← FAB flotante para nueva tarea
    └── pages/
        ├── Inicio.jsx          ← Ruta "/"          — lista principal
        ├── NuevaTarea.jsx      ← Ruta "/nueva"     — formulario
        └── DetalleTarea.jsx    ← Ruta "/tarea/:id" — vista detalle
```

---

## ✅ Funcionalidades del MVP

- Ver listado de tareas con filtro por estado (Todas / Pendientes / Completadas)
- Crear nueva tarea (título, materia, fecha de entrega, descripción)
- Marcar tarea como completada / pendiente
- Ver detalle completo de una tarea
- Eliminar tarea con confirmación
- Persistencia automática en `localStorage`
- Navegación SPA con React Router (sin recargas)
- Contador de tareas pendientes en tiempo real (Navbar + título del documento)
- Barra de progreso general
- Desplegado en Netlify y Vercel

---

## 🚢 Desplegar actualizaciones

### Netlify
```bash
npm run build
npx netlify-cli deploy --dir=dist --prod
```

### Vercel
```bash
npx vercel --prod --yes
```

### Surge
```bash
npm run build
npx surge dist scandalous-pollution.surge.sh
```

---

## 🛠 Tecnologías

| Tecnología | Uso |
|-----------|-----|
| React 18 | UI con componentes y hooks |
| Vite 5 | Bundler y servidor de desarrollo |
| React Router v6 | Navegación SPA |
| Context API | Estado global de tareas |
| localStorage | Persistencia de datos |
| Google Fonts | Bricolage Grotesque + DM Mono |

---

## 👤 Autor

Proyecto académico — TaskUPC · UPC
