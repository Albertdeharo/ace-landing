import { useRef } from 'react';
import './Features.css';
import foto1 from '../../images/FOTO_4.jpg';


const Features = () => {
  const cards = [
    {
      title: 'Control total',
      description: ['Mejora la adherencia entre la mano y la pala, optimizando cada movimiento.'],
      image: foto1
    },
    {
      title: 'Mejora el Agarre',
      description: ['Antideslizante avanzado: evita que el sudor afecte tu rendimiento, asegurando un agarre sólido incluso en climas húmedos.'],
      image: foto1
    },
    {
      title: 'Fácil Aplicación',
      description: ['Aplicación rápida y sencilla: basta con rociar y disfrutar de un agarre instantáneo y duradero.'],
      image: foto1
    }
  ];

  const cardRefs = useRef([]);

  return (
    <section className="features">
      {cards.map((card, index) => (
        <div 
          className="card-features" 
          key={index} 
          ref={(el) => (cardRefs.current[index] = el)}
        >
          {card.image ? (
              <div
                className=""
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  aspectRatio: '16/9'
                }}
                ></div>
              )
              : null }
          <h3 className='mb-1 pt-1'>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
