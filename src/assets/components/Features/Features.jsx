import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Features.css';
import product from './../../images/ENVASE.png';

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const detailFeatures = [
    {
      title: 'Control total',
      description: ['Mejora la adherencia entre la mano y la pala, optimizando cada movimiento.'],
      step: 1,
    },
    {
      title: 'Mejora el Agarre',
      description: ['Antideslizante avanzado: evita que el sudor afecte tu rendimiento, asegurando un agarre sólido incluso en climas húmedos.'],
      step: 2,
    },
    {
      title: 'Fácil Aplicación',
      description: ['Aplicación rápida y sencilla: basta con rociar y disfrutar de un agarre instantáneo y duradero.'],
      step: 3,
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="features"
      className="features"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="features-header pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="custom-main-title">Pro Grip</h2>
      </motion.div>
      <motion.div
        className="features-subheader"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="custom-title pb-2">Spray antideslizante de máximo rendimiento</h2>
      </motion.div>

      <div className="features-columns">
        <motion.div
          className="features-content-left"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <p className="features-description">
            Es el aliado definitivo para jugadores que buscan un control total sobre su pala,
            incluso en condiciones muy exigentes. Su fórmula avanzada combate eficazmente el sudor
            y la humedad, generando una fricción óptima que asegura un agarre firme y estable
            durante todo el juego.
          </p>
        </motion.div>

        <motion.div
          className="features-content-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src={product} alt="Product image" />
        </motion.div>

        <motion.div
          className="features-content-right"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >

          {detailFeatures.map((item) => (
            <div className="content-block" key={item.step}>
              <div className="block-number">{String(item.step).padStart(2, '0')}</div>
              <div className="block-text">
                <h3 className="block-title">{item.title}</h3>
                {item.description.map((desc, index) => (
                  <p className="block-description" key={index}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
