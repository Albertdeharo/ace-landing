import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MainFeatures.css';
import product from './../../images/banner_01.png';

const MainFeatures = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Controla cuándo debe activarse la animación (20% de visibilidad).
    triggerOnce: false, // Permite que la animación se ejecute cada vez que entra/sale de vista.
  });

  return (
    <motion.section
      ref={ref} // Vinculamos el ref para detectar la intersección.
      className="mainFeatures"
      initial={{ opacity: 0 }} // Empieza invisible
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animación controlada por `inView`
      transition={{ duration: 0.5 }} // Suaviza la transición de aparición/desaparición
    >
      {/* Vista de escritorio */}
      <motion.div
        className="mainFeatures-content"
        initial={{ opacity: 0, x: -100 }} // Comienza desde la izquierda
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Controlado por `inView`
        transition={{ duration: 1 }}
      >
        <h2>Producto</h2>
        <p>Nuestras mejores caracteristicas.</p>
      </motion.div>

      <motion.div
        className="mainFeatures-image"
        initial={{ opacity: 0, x: 100 }} // Comienza desde la derecha
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Controlado por `inView`
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={product} alt="Product image" />
      </motion.div>
    </motion.section>
  );
};

export default MainFeatures;
