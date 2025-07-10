import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" />
        </div>
        <ul className="navbar-list">
          <li><a href="inicio">Inicio</a></li>
          <li><a href="sobreNosotros">Sobre Nosotros</a></li>
          <li><a href="productos">Productos</a></li>  
          <li><a href="sabores">Sabores</a></li>
          <li><a href="beneficios">Beneficios</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;