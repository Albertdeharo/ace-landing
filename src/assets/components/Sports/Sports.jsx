import './Sports.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from '../../../TranslationContext'; 

import { MdSportsTennis, MdFitnessCenter, MdSportsBaseball, MdSportsHandball } from 'react-icons/md';

const Sports = () => {
  const { translate } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, 
  });

  const categories = [
    {
      id: 1,
      icon: <MdSportsTennis className="sports-svg-icon" aria-hidden="true" />,
      title: translate('sports_cat1_title'),
      desc: translate('sports_cat1_desc'),
    },
    {
      id: 2,
      icon: <MdFitnessCenter className="sports-svg-icon" aria-hidden="true" />,
      title: translate('sports_cat2_title'),
      desc: translate('sports_cat2_desc'),
    },
    {
      id: 3,
      icon: <MdSportsBaseball className="sports-svg-icon" aria-hidden="true" />,
      title: translate('sports_cat3_title'),
      desc: translate('sports_cat3_desc'),
    },
    {
      id: 4,
      icon: <MdSportsHandball className="sports-svg-icon" aria-hidden="true" />,
      title: translate('sports_cat4_title'),
      desc: translate('sports_cat4_desc'),
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="sports-section section">
      <motion.div
        className="sports-header mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className='custom-title'>{translate('sports_title') || 'Un agarre perfecto para cada deporte'}</h2>
      </motion.div>

      <motion.div 
        className="sports-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {categories.map((category) => (
          <motion.div key={category.id} className="sports-card mb-1" variants={cardVariants}>
            <div className="sports-icon-wrapper">
              {category.icon}
            </div>
            <h3 className="sports-card-title">{category.title}</h3>
            <p className="sports-card-desc">{category.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Sports;