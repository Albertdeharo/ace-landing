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
        className="mainFeatures-content"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <h2>Producto</h2>
        <p>Nuestras mejores características.</p>
      </motion.div>

      <motion.div
        className="mainFeatures-image"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={product} alt="Product image" />
      </motion.div>
    </motion.section>
  );
};

export default MainFeatures;
