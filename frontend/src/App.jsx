import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import Products from './pages/AddProducts/Products';
import Footer from './components/Footer/Footer'; // asegúrate de tener esta ruta correcta
import AddProduct from './pages/AddProducts/Products';
import Products1 from './pages/Products/Products1';
import Homep from '../../frontend/src/pages/Home/Homep';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content" style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos1" element={<Products1/>} />
          <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/homep" element={<Homep />} />
          {/* Agrega más rutas según sea necesario */}



        </Routes>
      </div>
      <Footer /> {/* Footer agregado */}
    </Router>
  );
}

export default App;
