import React from 'react';
import PasoActual from '../../../components/PasoActual/PasoActual';
import GelCard from '../../../components/GelCard/GelCard';
import './SaborPage.css';

const sabores = [
  { nombre: 'Manzana', imagen: '/Manzana.png' },
  { nombre: 'Banano', imagen: '/Banana.png' },
  { nombre: 'Ponche de Frutas', imagen: '/Ponche.png' },
];

const geles = [
  { name: 'Carbo Upp', image: '/CarboUpp.png' },
  { name: 'Ener Kik', image: '/EnerKik.png' },
  { name: 'Reppo', image: '/Reppo.png' },
  { name: 'Ener Balance', image: '/EnerBalance.png' },
];


const SaborPage = () => {
  return (
    <div className="sabor-page">
      <PasoActual paso={1} />

      <h2 className="sabor-title">Elige tu sabor</h2>
      <p className="sabor-desc">
        Estos son los sabores disponibles para el gel que elegiste. Selecciona un sabor y una base energética inicial. 
        En el siguiente paso, podrás ajustar la cantidad de cafeína, electrolitos y otros ingredientes según tus necesidades.
      </p>

      <div className="sabor-opciones">
        {sabores.map((sabor, index) => (
          <div className="sabor-item" key={index}>
            <img src={sabor.imagen} alt={sabor.nombre} className="sabor-img" />
            <p>{sabor.nombre}</p>
          </div>
        ))}
      </div>

      <p className="sabor-subtext">
        Nosotros formulamos: Tú eliges los ingredientes específicos según tu entrenamiento y nuestros expertos 
        se encargan de crear el gel ideal para ti.
      </p>

      <div className="geles-grid">
        {geles.map((gel, index) => (
          <GelCard key={index} name={gel.name} image={gel.image} />
        ))}
      </div>
    </div>
  );
};

export default SaborPage;
