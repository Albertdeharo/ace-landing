import './HowItWorks.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import clean from '../../images/icon-clean.png';
import handGel from '../../images/icon-hand-gel.png';
import dry from '../../images/icon-dry.png';

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      className="how-it-works"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="how-it-works-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2>¿Cómo Funciona?</h2>
      </motion.div>

      <div className="how-it-works-content">
        <motion.div
          className="how-it-works-card"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src={clean} alt="Icono Limpia la Pala" />
          <p>Asegúrate de que la superficie de la pala esté limpia y seca antes de aplicar el spray.</p>
        </motion.div>

        <motion.div
          className="how-it-works-card"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={handGel} alt="Icono Aplica el Spray" />
          <p>Sostén el spray a unos 20 cm de la pala y aplica una capa uniforme sobre el grip.</p>
        </motion.div>

        <motion.div
          className="how-it-works-card"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <img src={dry} alt="Icono Deja Secar" />
          <p>Deja que el spray se seque durante unos minutos antes de comenzar a jugar.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
