// src/pages/Suscripciones.jsx
import React from 'react';
import './Suscripcionees.css';

const suscripciones = [
  {
    id: '0001',
    fecha: '12/05/22',
    usuario: 'abcd@gmail.com',
    precio: '$19.99',
    plan: 'Unico',
    estado: 'Activo'
  },
  
  {
    id: '0001',
    fecha: '12/05/22',
    usuario: 'abcd@gmail.com',
    precio: '$19.99',
    plan: 'Unico',
    estado: 'Activo'
  },
  {
    id: '0001',
    fecha: '12/05/22',
    usuario: 'abcd@gmail.com',
    precio: '$19.99',
    plan: 'Unico',
    estado: 'Activo'
  },
];

const Suscripciones = () => {
  return (
    <div className="suscripciones-container">
      <h2>SUSCRIPCIONES</h2>
      <table className="suscripciones-tabla">
        <thead>
          <tr>
            <th>Suscripción</th>
            <th>Fecha de inicio</th>
            <th>Usuario</th>
            <th>Precio</th>
            <th>Plan de suscripción</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {suscripciones.map((s, i) => (
            <tr key={i}>
              <td>{s.id}</td>
              <td>{s.fecha}</td>
              <td>{s.usuario}</td>
              <td>{s.precio}</td>
              <td>{s.plan}</td>
              <td>{s.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suscripciones;
