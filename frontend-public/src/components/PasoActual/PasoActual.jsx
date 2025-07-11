import React from 'react';
import './PasoActual.css';

const pasos = ['Elegir Producto', 'Sabores', 'Producto Final'];

const PasoActual = ({ paso }) => {
  return (
    <div className="stepper-container">
      {pasos.map((p, index) => (
        <div className="step" key={index}>
          {/* Línea izquierda */}
          {index !== 0 && <div className="line" />}

          {/* Círculo */}
          <div className={`circle ${paso === index ? 'active' : ''}`} />

          {/* Línea derecha */}
          {index !== pasos.length - 1 && <div className="line" />}

          {/* Texto */}
          <span className="label">{p}</span>
        </div>
      ))}
    </div>
  );
};

export default PasoActual;
