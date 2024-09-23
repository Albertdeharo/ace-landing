import { useEffect, useRef } from 'react';
import './Features.css';
import VanillaTilt from 'vanilla-tilt';

const Features = () => {
  const cards = [
    {
      number: '🖐️',
      title: '',
      price: 'Mejora el Agarre',
      features: ['Nuestra fórmula única aumenta el agarre de la pala, mejorando tu control y precisión.']
    },
    {
      number: '⏱️',
      title: '',
      price: 'Fácil Aplicación',
      features: ['El spray se aplica de manera rápida y uniforme, ahorrando tiempo en tu rutina.']
    },
    {
      number: '⏳',
      title: '',
      price: 'Durabilidad',
      features: ['La protección dura varias horas de juego, asegurando un agarre constante.']
    }
  ];

  // Crear referencias individuales para cada card
  const cardRefs = useRef([]);

  useEffect(() => {
    // Aplicar VanillaTilt a cada tarjeta
    cardRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      }
    });
  }, []);

  return (
    <section className="features">
      {cards.map((card, index) => (
        <div 
          className="card-features" 
          key={index} 
          ref={(el) => (cardRefs.current[index] = el)}
        >
          <div className="content">
            <h2>{card.number}</h2>
            <h3>{card.title}</h3>
            <div className="price">{card.price}</div>
            <ul>
              {card.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
