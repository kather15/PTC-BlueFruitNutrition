import React, { useState } from 'react';
import './pay.css';

const FormularioTarjeta = () => {
  const [numero, setNumero] = useState('');
  const [titular, setTitular] = useState('');
  const [vencimiento, setVencimiento] = useState('');

  return (
    <main className="container" role="main" aria-label="Formulario de tarjeta de crédito">
      <section className="card-display" aria-label="Tarjeta de crédito simulada">
        <div className="chip" aria-hidden="true"></div>
        <div className={`card-number ${numero ? 'filled' : ''}`}>
          {numero || '1234 5678 9010 1234'}
        </div>
        <div className="card-info">
          <div className="card-info-left">
            <div className="card-label">Titular de la Tarjeta:</div>
            <div className={`card-subtext ${titular ? 'filled' : ''}`}>
              {titular || 'Blue Fruit Nutrition'}
            </div>
          </div>
          <div className="card-expiration">
            <div className="card-label">Fecha de Vencimiento:</div>
            <div className={`card-exp-month ${vencimiento ? 'filled' : ''}`}>
              {vencimiento || '10/2025'}
            </div>
          </div>
        </div>
      </section>

      <form
        className="card-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Siguiente paso');
        }}
      >
        <div className="input-group">
          <label htmlFor="cardNumber">Número de Tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="1234 5678 9010 1234"
            maxLength={19}
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="cardHolder">Titular de la Tarjeta:</label>
            <input
              type="text"
              id="cardHolder"
              placeholder="Nombre completo"
              value={titular}
              onChange={(e) => setTitular(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="expiryDate">Fecha de Vencimiento:</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/AAAA"
              maxLength={7}
              value={vencimiento}
              onChange={(e) => setVencimiento(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Siguiente Paso</button>
      </form>
    </main>
  );
};

export default FormularioTarjeta;


