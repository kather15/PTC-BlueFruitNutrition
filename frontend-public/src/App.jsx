import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Pay from "./pages/Pay/pay";
//import Products from "./pages/Products/Product2";
import Register from './pages/Register/Register'
import RequestCode from '../../frontend-public/src/pages/RecoveryPassword/RequestCode'
import VerifyCode from '../../frontend-public/src/pages/RecoveryPassword/VerifyCode';
import NewPassword from '../../frontend-public/src/pages/RecoveryPassword/NewPasssword';
import Personalizar from '../../frontend-public/src/pages/Personalizar/SeleccionarGel';
import Sabores from '../../frontend-public/src/pages/Personalizar/Sabores/SaborPage';
import Suscripciones from '../../frontend-public/src/pages/Suscripciones/Suscripciones';
import ProductDetail from '../../frontend-public/src/pages/Personalizar/productGallery/Product';
import Login from '../../frontend-public/src/pages/Login/Login'; // Asegúrate de que esta ruta sea correcta



function App() {
  return (
    <>
      <Nav />
        
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/pay" element={<Pay />} />
          <Route path="/registro" element={<Register />}/>
          <Route path="/enviar-codigo" element={<RequestCode/>}/>
          <Route path="/personalizar" element={<Personalizar/>}/>
          <Route path="/verificar-codigo" element={<VerifyCode/>}/>
          <Route path="/nueva-contraseña" element={<NewPassword/>}/>
          <Route path="/sabores" element={<Sabores/>}/>
          <Route path="/suscripciones" element={<Suscripciones />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/detail" element={<ProductDetail />} />

          {/* Puedes agregar más rutas aquí según sea necesario */}

          
      </Routes>

      <Footer />
    </>
  );
}

export default App;