import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import Products from './pages/Products';
import Footer from './components/Footer/Footer'; // asegúrate de tener esta ruta correcta

function App() {
  return (
    <Router>
      <NavBar />
      
      <div className="main-content" style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
          <Route path="/productos" element={<Products />} />
          <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
        </Routes>
      </div>

      <Footer /> {/* Footer agregado */}
    </Router>
  );
}

export default App;
