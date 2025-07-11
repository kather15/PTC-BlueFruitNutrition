import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="bf-navbar-container">
      <div className="bf-navbar-content">
        <div className="bf-logo">
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" />
        </div>
        <ul className="bf-nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobreNosotros">Sobre Nosotros</Link></li>
          <li className="bf-active-link"><Link to="/productos">Productos</Link></li> {/* Clase única para el enlace activo */}
          <li><Link to="/sabores">Sabores</Link></li>
          <li><Link to="/beneficios">Beneficios</Link></li>
        </ul>
      </div>
      <div className="bf-search-box">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button className="bf-search-button">
  <img src="/Vector.png" alt="Buscar" style={{ width: '20px', height: '20px' }} />
</button>

      </div>
    </nav>
  );
};

export default Nav;