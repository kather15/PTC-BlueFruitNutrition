import React from 'react';
import PasoActual from '../../components/PasoActual/PasoActual';
import GelCard from '../../components/GelCard/GelCard';
import './SeleccionarGel.css';

// Usa imágenes reales o placeholders
const gels = [
  { name: 'Carbo Upp', image: '/CarboUpp.png' },
  { name: 'Ener Kik', image: '/EnerKik.png' },
  { name: 'Reppo', image: '/Reppo.png' },
  { name: 'Ener Balance', image: '/EnerBalance.png' },

];

const SeleccionarGel = () => {
  return (
    <div className="seleccionar-container">
      <PasoActual paso={0} />

      <h1>Elige tu gel ideal</h1>
      <p className="subtitle">
        ¡Buenas noticias para atletas exigentes! Los tiempos de envío de nuestros geles energéticos han mejorado notablemente.
      </p>
      <p className="description">
        Tu próximo entrenamiento o competencia podría estar acompañado por tu gel ideal en tan solo 48 horas. El primer paso es elegir el tipo de gel y el sabor aquí. Una vez que comiences tu pedido personalizado, no podrás modificar la selección sin volver a esta página. ¿No encuentras el gel que buscas? Explora nuestras opciones y haz clic en “Personalizar” para crear tu combinación perfecta.
      </p>

      <div className="gel-grid">
        {gels.map((gel, idx) => (
          <GelCard key={idx} name={gel.name} image={gel.image} />
        ))}
      </div>
    </div>
  );
};

export default SeleccionarGel;
