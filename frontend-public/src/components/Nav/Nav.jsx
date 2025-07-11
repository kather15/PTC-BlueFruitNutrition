import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="blue-fruit-navbar">
      <div className="blue-fruit-navbar-content">
        <div className="blue-fruit-logo">
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" />
        </div>
        <ul className="blue-fruit-nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobreNosotros">Sobre Nosotros</Link></li>
          <li className="active-nav-link"><Link to="/productos">Productos</Link></li>
          <li><Link to="/sabores">Sabores</Link></li>
          <li><Link to="/beneficios">Beneficios</Link></li>
        </ul>
      </div>
      <div className="blue-fruit-search-box">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button className="blue-fruit-search-button">
          <img src="/Vector.png" alt="Buscar" style={{ width: '20px', height: '20px' }} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;