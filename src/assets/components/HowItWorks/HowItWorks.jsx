import './HowItWorks.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from './../../../TranslationContext'; // Ajusta la ruta a tu contexto

import clean from '../../images/icon-clean.png';
import handGel from '../../images/icon-hand-gel.png';
import dry from '../../images/icon-dry.png';

const HowItWorks = () => {
  const { translate } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Mejor true para que la animación solo ocurra una vez al hacer scroll
  });

  const steps = [
    {
      id: 1,
      icon: clean,
      title: translate('hiw_step1_title'),
      desc: translate('hiw_step1_desc'),
    },
    {
      id: 2,
      icon: handGel,
      title: translate('hiw_step2_title'),
      desc: translate('hiw_step2_desc'),
    },
    {
      id: 3,
      icon: dry,
      title: translate('hiw_step3_title'),
      desc: translate('hiw_step3_desc'),
    }
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="how-it-works">
      <motion.div
        className="how-it-works-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className='custom-title'>{translate('hiw_title')}</h2>
      </motion.div>

      <motion.div 
        className="how-it-works-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Línea conectora de fondo (solo visible en escritorio mediante CSS) */}
        <div className="how-it-works-line"></div>

        {steps.map((step) => (
          <motion.div key={step.id} className="how-it-works-card" variants={cardVariants}>
            <div className="step-badge">0{step.id}</div>
            
            <div className="icon-wrapper">
              <img src={step.icon} alt={step.title} />
            </div>
            
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;