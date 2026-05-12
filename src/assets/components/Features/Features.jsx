import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from './../../../TranslationContext';
import './Features.css';
import product from './../../images/ENVASE.png';
import logo from './../../images/logo_ace_transparente_prev_ui.png';

const Features = () => {
  const { translate } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const detailFeatures = [
    {
      title: translate('feature_1_title') || 'Control total',
      description: translate('feature_1_desc') || 'Mejora la adherencia entre la mano y la pala, optimizando cada movimiento.',
      step: 1,
    },
    {
      title: translate('feature_2_title') || 'Mejora el Agarre',
      description: translate('feature_2_desc') || 'Antideslizante avanzado: evita que el sudor afecte tu rendimiento, asegurando un agarre sólido incluso en climas húmedos.',
      step: 2,
    },
    {
      title: translate('feature_5_title') || 'Fragancia deportiva fresca',
      description: translate('feature_5_desc') || 'Olvídate de los fuertes olores químicos. ACE PRO GRIP deja un aroma fresco, agradable y estimulante en tus manos para que te sientas limpio y listo para el siguiente punto.',
      step: 3,
    },
    {
      title: translate('feature_6_title') || 'Secado ultra rápido',
      description: translate('feature_6_desc') || 'Su fórmula avanzada de evaporación actúa en menos de 5 segundos. Aplica el spray, siente el efecto seco casi de inmediato y vuelve al juego sin perder el ritmo.',
      step: 4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="features" className="features section" ref={ref}>
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="flex-center">
            <img src={logo} alt="ACE Pro Grip" />
          </h2>
          <h3 className="features-subtitle">
            {translate('features_subtitle')}
          </h3>
        </motion.div>

        <div className="features-columns">
          
          <motion.div
            className="features-content-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="features-description-box">
              <p className="features-description">
                {translate('features_main_text') || 'Es el aliado definitivo para jugadores que buscan un control total sobre su pala, incluso en condiciones muy exigentes. Su fórmula avanzada combate eficazmente el sudor y la humedad, generando una fricción óptima que asegura un agarre firme y estable durante todo el juego.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="features-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src={product} 
              alt="ACE Pro Grip Envase" 
              className="product-image"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <div className="product-shadow"></div>
          </motion.div>

          <motion.div
            className="features-content-right"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {detailFeatures.map((item) => (
              <motion.div className="content-block" key={item.step} variants={itemVariants}>
                <div className="block-number">{String(item.step).padStart(2, '0')}</div>
                <div className="block-text">
                  <h4 className="block-title">{item.title}</h4>
                  <p className="block-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
    </section>
  );
};

export default Features;