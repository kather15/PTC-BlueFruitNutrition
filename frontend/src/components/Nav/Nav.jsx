import React from 'react';
import './Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Logo_Blue_Fruit.png" alt="Logo" /> 
      </div>
      <ul className="navbar-list">
        <li><a href="inicio">Inicio</a></li>
        <li><a href="sobre-nosotros">Sobre Nosotros</a></li>
        <li><a href="productos">Productos</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;


