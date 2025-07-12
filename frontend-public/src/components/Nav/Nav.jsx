import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" />
        </div>
        <ul className="navbar-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobreNosotros">Sobre Nosotros</Link></li>
          <li><Link to="/products2">Productos</Link></li>  
          <li><Link to="/personalizar">Personalizar</Link></li>
          <li><Link to="/suscripciones">Suscribirse</Link></li>
          <li><Link to="/pay">pago</Link></li>
        </ul>
        <div className="navbar-login-btn">
          <Link to="/login">
            <button className="login-btn-nav">👤</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
