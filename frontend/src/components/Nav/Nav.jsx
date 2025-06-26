import React from 'react';
import './Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" />
        </div>
        <ul className="navbar-list">
          <li><a href="inicio">Inicio</a></li>
          <li><a href="productos">Productos</a></li>
          <li><a href="ordenes">Órdenes</a></li>
          <li><a href="ventas">Ventas</a></li>
          <li><a href="suscripciones">Suscripciones</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
