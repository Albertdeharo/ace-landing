import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MainFeatures.css';
import product from './../../images/ENVASE.png';

const MainFeatures = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      id="main-features"
      className="mainFeatures"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mainFeatures-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="heading1 custom-title">Pro Grip</h2>
      </motion.div>

      <div className="mainFeatures-columns">
        <motion.div
          className="mainFeatures-content"
          initial={{ opacity: 0, x: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="heading2"
            initial={{ opacity: 0, y: 20 }}  // Aquí agregamos el desplazamiento hacia abajo.
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}  // Movimiento hacia arriba y fade-in.
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Spray antideslizante de máximo rendimiento
          <p className="mainFeatures-description">
            Es el aliado definitivo para jugadores que buscan un control total sobre su pala, incluso en condiciones muy exigentes. Su fórmula avanzada combate eficazmente el sudor y la humedad, generando una fricción óptima que asegura un agarre firme y estable durante todo el juego.
          </p>
          </motion.h2>
        </motion.div>


        <motion.div
          className="mainFeatures-image"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={product} alt="Product image" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainFeatures;
