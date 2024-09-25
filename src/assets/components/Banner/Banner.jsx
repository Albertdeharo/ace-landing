import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Banner.css';
import banner from './../../images/banner_01.png';


const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Estado para controlar si es móvil
  const scrollThreshold = 400; // Cambia este valor para ajustar el desplazamiento mínimo

  // Controlar el estado del banner según el scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < scrollThreshold); // El banner desaparece después de superar el umbral
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Actualiza el estado según el tamaño de la ventana
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Escucha cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Limpia el listener
    };
  }, []);

  return (
    <motion.section
      className="banner"
      initial={{ opacity: 0 }} // Empieza invisible
      animate={{ opacity: isVisible ? 1 : 0 }} // Control de la opacidad según el scroll
      exit={{ opacity: 0 }} // Opción de salida al ser invisible
      transition={{ duration: 0.5 }} // Suaviza la transición de aparición/desaparición
    >
      {/* Vista de escritorio */}
      {!isMobile ? (
        <>
          <motion.div
            className="banner-content"
            initial={{ opacity: 0, x: -100 }} // Comienza desde la izquierda
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Bienvenido a ACE</h1>
            <p>Transforma la productividad de tu equipo con nuestra solución innovadora.</p>
            <a href="#features" className="banner-btn">Descubre más</a>
          </motion.div>

          <motion.div
            className="banner-image"
            initial={{ opacity: 0, x: 100 }} // Comienza desde la derecha
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={banner} alt="Banner" />

          </motion.div>
        </>
      ) : (
        // Vista móvil
        <motion.div className="banner-mobile">
          <motion.div
            className="banner-content"
            initial={{ opacity: 0, x: -100 }} // Comienza desde la izquierda
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Bienvenido a ACE</h1>
            <div className="banner-description-image">
            <motion.div
              className="banner-description"
              initial={{ opacity: 0, x: -100 }} // Comienza desde la izquierda
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p>Transforma la productividad de tu equipo con nuestra solución innovadora.</p>
            </motion.div>

            <motion.div
              className="banner-image"
              initial={{ opacity: 0, x: 100 }} // Comienza desde la derecha
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src={banner} alt="Banner" />
            </motion.div>
          </div>
          <div className="banner-button">
            <a href="#features" className="banner-btn">Descubre más</a>
          </div>

          </motion.div>

          

        </motion.div>
      )}
    </motion.section>
  );
};

export default Banner;
