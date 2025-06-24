import { useState } from 'react'
import NavBar from './components/Nav/Nav'
import Products from './pages/Products';  // Importamos el componente Products
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importamos React Router

function App() {

  return (
    <Router> {/* Configuramos React Router */}
      <NavBar /> {/* Barra de navegación */}
      <div className="main-content">
        <Routes>
          {/* Rutas para las diferentes páginas */}
          <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
          <Route path="/productos" element={<Products />} /> {/* Rutas para productos */}
          <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

