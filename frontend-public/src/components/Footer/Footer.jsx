import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="blue-fruit-footer">
      <div className="blue-fruit-footer-top">
        <div className="blue-fruit-footer-section blue-fruit-logo-section">
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" className="blue-fruit-footer-logo" />
          <p className="blue-fruit-subscribe-title">Suscribite</p>
          <p className="blue-fruit-subscribe-text">Obten un 10% de descuento<br />en tu primer pedido</p>
          <div className="blue-fruit-subscribe-input">
            <input type="email" placeholder="Introduce tu correo" />
            <button>{">"}</button>
          </div>
        </div>

        <div className="blue-fruit-footer-section">
          <h4>Soporte</h4>
          <p>info@bluefruitnutrition.com</p>
          <p>+503 6859 7103</p>
        </div>

        <div className="blue-fruit-footer-section">
          <h4>Cuenta</h4>
          <p>Mi cuenta</p>
          <p>Iniciar sesión / Registrarse</p>
        </div>

        <div className="blue-fruit-footer-section">
          <h4>Enlaces rápido</h4>
          <p>Política de Privacidad</p>
          <p>Condiciones de uso</p>
          <p>FAQ</p>
          <p>Contacto</p>
        </div>
      </div>

      <div className="blue-fruit-footer-bottom">
        <p>© Copyright 2025 – <strong>BLUE FRUIT NUTRITION®</strong> Alimentos Funcionales para Deportistas</p>
      </div>
    </footer>
  );
};

export default Footer;