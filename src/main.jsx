// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TareasProvider } from './context/TareasContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TareasProvider>
        <App />
      </TareasProvider>
    </BrowserRouter>
  </React.StrictMode>
)
