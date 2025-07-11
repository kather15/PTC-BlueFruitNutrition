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
          <li><Link to="/productos">Productos</Link></li>  
          <li><Link to="/sabores">Sabores</Link></li>
          <li><Link to="/beneficios">Beneficios</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
