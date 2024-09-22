import './HowItWorks.css';
import { motion } from 'framer-motion'; // Importa motion de Framer Motion
import { useInView } from 'react-intersection-observer'; // Para detectar cuando los elementos están en vista

const steps = [
  {
    title: 'Paso 1: Limpia la Pala',
    description: 'Asegúrate de que la superficie de la pala esté limpia y seca antes de aplicar el spray.'
  },
  {
    title: 'Paso 2: Aplica el Spray',
    description: 'Sostén el spray a unos 20 cm de la pala y aplica una capa uniforme sobre el grip.'
  },
  {
    title: 'Paso 3: Deja Secar',
    description: 'Deja que el spray se seque durante unos minutos antes de comenzar a jugar.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>¿Cómo Funciona?</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <AnimatedStep
            key={index}
            title={step.title}
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedStep = ({ title, description, index }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2, // Aparece cuando el 20% del elemento está en pantalla
    triggerOnce: false, // Para que vuelva a animarse cuando salga y entre
  });

  return (
    <motion.div
      ref={ref} // Referencia para la intersección
      className="step"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Aparece desde un lado
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Animación de entrada y salida
      transition={{ duration: 0.6, delay: index * 0.2 }} // Duración de la transición y retraso para cada paso
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default HowItWorks;
