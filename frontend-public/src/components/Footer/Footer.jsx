import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="blue-fruit-footer">
      
      {/* Parte superior del footer dividida en varias secciones */}
      <div className="blue-fruit-footer-top">
        
        {/* Sección con el logo, suscripción por correo y texto de promoción */}
        <div className="blue-fruit-footer-section blue-fruit-logo-section">
          {/* Imagen del logo */}
          <img src="/Logo_Blue_Fruit.png" alt="Logo Blue Fruit" className="blue-fruit-footer-logo" />
          
          {/* Título de la sección de suscripción */}
          <p className="blue-fruit-subscribe-title">Suscribite</p>
          
          {/* Texto promocional para invitar a la suscripción */}
          <p className="blue-fruit-subscribe-text">
            Obten un 10% de descuento<br />en tu primer pedido
          </p>
          
          {/* Campo de entrada de correo y botón para enviar */}
          <div className="blue-fruit-subscribe-input">
            <input type="email" placeholder="Introduce tu correo" />
            <button>{">"}</button> {/* Botón con símbolo de "enviar" */}
          </div>
        </div>

        {/* Sección con información de contacto */}
        <div className="blue-fruit-footer-section">
          <h4>Soporte</h4>
          <p>info@bluefruitnutrition.com</p>
          <p>+503 6859 7103</p>
        </div>

        {/* Sección de cuenta para iniciar sesión o registrarse */}
        <div className="blue-fruit-footer-section">
          <h4>Cuenta</h4>
          <p>Iniciar sesión / Registrarse</p>
        </div>

        {/* Sección con enlaces rápidos del sitio */}
        <div className="blue-fruit-footer-section">
          <h4>Enlaces rápido</h4>
          <p>Política de Privacidad</p>
          <p>Contacto</p>
        </div>
      </div>

      {/* Parte inferior del footer con derechos de autor */}
      <div className="blue-fruit-footer-bottom">
        <p>© Copyright 2025 – <strong>BLUE FRUIT NUTRITION®</strong> Alimentos Funcionales para Deportistas</p>
      </div>
    </footer>
  );
};

export default Footer;