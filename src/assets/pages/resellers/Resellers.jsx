import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import { FaStoreAlt, FaDumbbell, FaUsers } from 'react-icons/fa';
import './Resellers.css';

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
    </div>
  );
};

export default Resellers;