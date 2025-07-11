import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import Products from './pages/AddProducts/Products';
import Suscripciones from './pages/Suscripciones/Suscripciones'; // Asegúrate de que esta ruta sea correcta
import Products1 from './pages/Products/Products1'; // Asegúrate de que esta ruta sea correcta
import Footer from './components/Footer/Footer'; // asegúrate de tener esta ruta correcta
import Register from './pages/Register/Register'
import RequestCode from './pages/RecoveryPassword/RequestCode'
import VerifyCode from './pages/RecoveryPassword/VerifyCode';
import NewPassword from './pages/RecoveryPassword/NewPasssword';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content" style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos1" element={<Products1 />} />
          <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
          <Route path="/suscripciones" element={<Suscripciones />}/>
          <Route path="/registro" element={<Register />}/>
          <Route path="/enviar-codigo" element={<RequestCode/>}/>
          <Route path="/verificar-codigo" element={<VerifyCode/>}/>
          <Route path="/nueva-contraseña" element={<NewPassword/>}/>


        </Routes>
      </div>
      <Footer /> {/* Footer agregado */}
    </Router>
  );
}

export default App;
