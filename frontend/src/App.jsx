import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// Páginas
import Products from './pages/AddProducts/Products';
import AddProduct from './pages/AddProducts/Products';
import Products1 from './pages/Products/Products1';
import Suscripciones from './pages/Suscripcionees/Suscripcionees';
import Ordenes from './pages/Ordenes/Ordenes';
import Homep from './pages/Home/Homep'; // Ruta corregida (ya no ../../frontend)
import UsersList from "./pages/Users/UsersList";
import UserForm from "./pages/Users/UserForm";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content" style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos1" element={<Products1 />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/suscripciones" element={<Suscripciones />} />
          <Route path="/homep" element={<Homep />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/edit/:type/:id" element={<UserForm />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
