import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import { FaHandshake, FaStoreAlt, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';
import './Distributors.css';

// Importa aquí los logos de tus distribuidores
import logoCelescala from './../../../assets/images/partners/celescala-logo.jpg';

const Distributors = () => {
  const { translate } = useTranslation();

  return (
    <div className="distributors-page">
      {/* SECCIÓN HERO */}
      <section className="dist-hero">
        <div className="container">
          <h1 className="hero-title">
            {translate('dist_hero_title')} <span>{translate('dist_hero_subtitle')}</span>
          </h1>
        </div>
      </section>

      {/* SECCIÓN INFO */}
      <section className="dist-info section-padding">
        <div className="container">
          <div className="info-grid">
            <div className="info-text">
              <p className="lead-text">{translate('dist_intro_1')}</p>
              <p>{translate('dist_intro_2')}</p>
              <p><strong>{translate('dist_intro_3')}</strong></p>
            </div>
            
            <div className="info-icons">
              <div className="icon-box">
                <FaStoreAlt className="dist-icon" />
                <span>{translate('dist_icon_1')}</span>
              </div>
              <div className="icon-box">
                <FaGlobe className="dist-icon" />
                <span>{translate('dist_icon_2')}</span>
              </div>
              <div className="icon-box">
                <FaHandshake className="dist-icon" />
                <span>{translate('dist_icon_3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PARTNERS (Con imágenes) */}
      <section className="dist-current section-padding">
        <div className="container">
          <h2 className="section-title">{translate('dist_current_title')}</h2>
          
          <div className="partners-grid">
            {/* Tarjeta de Celescala */}
            {/* Tarjeta de Celescala simplificada */}
            <a href="https://celescala.com/" target="_blank" rel="noopener noreferrer" className="partner-card">
              <div className="partner-image-container">
                {/* ¡Este es el fix clave! Solo el logo, sin texto redundante a la izquierda */}
                {/* <div className="partner-logo-placeholder">CELESCALA</div> <-- ¡BORRA ESTO! --> */}
                {/* Pon aquí tu logo con fondo transparente o estilo para que destaque */}
                <img src={logoCelescala} alt="Celescala Logo" className="partner-logo" />
              </div>
              <div className="partner-content">
                {/* Este es el título principal con el efecto glitch que haremos visible */}
                <h3 className="partner-name">Celescala</h3>
                <span className="partner-link">
                  {translate('dist_visit_web')} <FaExternalLinkAlt />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA */}
      <section className="dist-cta section-padding">
        <div className="container text-center">
          <h2 className="simple-accent-title">{translate('dist_cta_title')}</h2>
          <p className="cta-subtitle">{translate('dist_cta_desc')}</p>
          
          <Link to="/contact" className="btn-primary btn-large">
            {translate('dist_cta_button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Distributors;