import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import { FaStoreAlt, FaDumbbell, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import './Resellers.css';

// Importa aquí los logos de tus distribuidores
import logoCelescala from './../../../assets/images/partners/celescala-logo.jpg';


const Resellers = () => {
  const { translate } = useTranslation();

  return (
    <div className="resellers-page">
      {/* SECCIÓN HERO */}
      <section className="reseller-hero">
        <div className="container">
          <h1 className="hero-title">
            {translate('reseller_hero_title')} <span>{translate('reseller_hero_subtitle')}</span>
          </h1>
        </div>
      </section>

      {/* SECCIÓN INFO / PROPUESTA DE VALOR */}
      <section className="reseller-info section-padding">
        <div className="container">
          <div className="info-grid">
            <div className="info-text">
              <p className="lead-text">{translate('reseller_intro_1')}</p>
              <p>{translate('reseller_intro_2')}</p>
              <p><strong>{translate('reseller_intro_3')}</strong></p>
            </div>
            
            <div className="info-icons">
              <div className="icon-box">
                <FaStoreAlt className="reseller-icon" />
                <span>{translate('reseller_icon_1')}</span>
              </div>
              <div className="icon-box">
                <FaDumbbell className="reseller-icon" />
                <span>{translate('reseller_icon_2')}</span>
              </div>
              <div className="icon-box">
                <FaUsers className="reseller-icon" />
                <span>{translate('reseller_icon_3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA (Llamada a la acción) */}
      <section className="reseller-cta section-padding">
        <div className="container text-center">
          <h2 className="cta-title">{translate('reseller_cta_title')}</h2>
          <p className="cta-subtitle">{translate('reseller_cta_desc')}</p>
          
          <Link to="/contact" className="btn-primary btn-large">
            {translate('reseller_cta_button')}
          </Link>
        </div>
      </section>

      {/* SECCIÓN PARTNERS (Con imágenes) */}
      <section className="reseller-partners section-padding">
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
                <h3 className="partner-name">C. E. L'escala</h3>
                <span className="partner-link">
                  {translate('dist_visit_web')} <FaExternalLinkAlt />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resellers;