import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from './../../../TranslationContext'; // Ajusta la ruta
import './Features.css';
import product from './../../images/ENVASE.png'; // Ajusta la ruta

const Features = () => {
  const { translate } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Mejor true para que no repita la animación al hacer scroll arriba/abajo
  });

  // Idealmente, esto vendría de tu archivo JSON de idiomas. Te dejo textos por defecto.
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
      title: translate('feature_3_title') || 'Fácil Aplicación',
      description: translate('feature_3_desc') || 'Aplicación rápida y sencilla: basta con rociar y disfrutar de un agarre instantáneo y duradero.',
      step: 3,
    },
    {
      title: translate('feature_4_title') || 'Máximo rendimiento',
      description: translate('feature_4_desc') || 'Fórmula testada por profesionales para aguantar los partidos más exigentes sin dejar residuos pegajosos.',
      step: 4,
    },
    {
      title: translate('feature_5_title') || 'Máximo rendimiento',
      description: translate('feature_5_desc') || 'Fórmula testada por profesionales para aguantar los partidos más exigentes sin dejar residuos pegajosos.',
      step: 5,
    },
  ];

  // Variantes para la animación en cascada de la lista
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
    <section id="features" className="features" ref={ref}>
      {/* HEADER */}
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="features-main-title">ACE Pro Grip</h2>
        <h3 className="features-subtitle">
          {translate('features_subtitle') || 'El spray antideslizante definitivo'}
        </h3>
      </motion.div>

      {/* COLUMNAS */}
      <div className="features-columns">
        
        {/* IZQUIERDA: Descripción */}
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

        {/* CENTRO: Imagen (Con animación de flote infinito) */}
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
            animate={{ y: [0, -15, 0] }} // Animación de flotar
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          {/* Sombra debajo del producto para dar efecto 3D */}
          <div className="product-shadow"></div>
        </motion.div>

        {/* DERECHA: Lista de Características (Cascada) */}
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