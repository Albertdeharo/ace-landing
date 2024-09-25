import './HowItWorks.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import clean from '../../images/clean.png';
import handGel from '../../images/hand-gel.png';
import dry from '../../images/dry.png';

const steps = [
  {
    title: 'Paso 1: Limpia la Pala',
    description: 'Asegúrate de que la superficie de la pala esté limpia y seca antes de aplicar el spray.',
    img: clean,
  },
  {
    title: 'Paso 2: Aplica el Spray',
    description: 'Sostén el spray a unos 20 cm de la pala y aplica una capa uniforme sobre el grip.',
    img: handGel,
  },
  {
    title: 'Paso 3: Deja Secar',
    description: 'Deja que el spray se seque durante unos minutos antes de comenzar a jugar.',
    img: dry,
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>¿Cómo Funciona?</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <AnimatedStep
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            img={step.img}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedStep = ({ number, title, description, img, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className={`step-container ${index % 2 === 1 ? 'reverse' : ''}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="container">
        <div className={`card ${index % 2 === 1 ? 'reverse-card' : 'normal-card'}`}>
          <div className="box">
            <div className="content">
              <span className="heading">{number < 10 ? `${number}` : number}</span>
              <img src={img} alt={`Icono de ${title}`} className="step-icon" />
              <div className="text-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
