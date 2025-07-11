import React from 'react';
import './Contact.css';

const Contacto = () => {
  return (
    <>
      <header>
        <h1>Blue Fruit Nutrition</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Registrarte</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Contáctanos</h2>
        <div className="contact-container">
          <div className="info">
            <h3>Información</h3>
            <p>Estamos disponibles las 24 horas del día, los 7 días de la semana.</p>
            <p>Celular: +52 1 555 000 0000</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="nombre">Tu Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Tu Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="asunto">Tu Asunto:</label>
            <input type="text" id="asunto" name="asunto" required />

            <label htmlFor="mensaje">Tu Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>

            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contacto;
