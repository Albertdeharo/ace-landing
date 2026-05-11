import React from 'react';
import { useTranslation } from './../../../TranslationContext';
import { FaRocket, FaBolt, FaTintSlash, FaHands, FaCheck } from 'react-icons/fa';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const { translate } = useTranslation();

  return (
    <div className="about-page">
      {/* SECCIÓN HERO */}
      <section className="about-hero">
        <div className="container">
          <h1 className="hero-title">
            {translate('about_hero_1') || 'QUIÉNES'} <span>{translate('about_hero_2') || 'SOMOS'}</span>
          </h1>
        </div>
      </section>

      {/* SECCIÓN FILOSOFÍA */}
      <section className="about-philosophy section-padding">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h2 className="accent-title">{translate('philosophy_title_1')}</h2>
              <p dangerouslySetInnerHTML={{ __html: translate('philosophy_text_1') }}></p>
            </div>
            <div className="philosophy-card">
              <h2 className="accent-title">{translate('philosophy_title_2')}</h2>
              <p dangerouslySetInnerHTML={{ __html: translate('philosophy_text_2') }}></p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CITA / QUOTE */}
      <section className="about-quote">
        <div className="container">
          <blockquote className="main-quote">
            "Feel Grip · Take Control"
          </blockquote>
          <p className="quote-sub">ACE representa una forma de competir con más seguridad, concentración y control.</p>
        </div>
      </section>

      {/* SECCIÓN ESENCIA (CARDS CON ICONOS) */}
      <section className="about-essence section-padding">
        <div className="container">
          <h2 className="section-title">{translate('essence_title') || 'Nuestra Esencia'}</h2>
          <div className="essence-grid">
            <div className="essence-item">
              <FaRocket className="essence-icon" />
              <h3>{translate('about_ess_1_title')}</h3>
              <p>{translate('about_ess_1_text')}</p>
            </div>
            <div className="essence-item">
              <FaTintSlash className="essence-icon" />
              <h3>{translate('about_ess_2_title')}</h3>
              <p>{translate('about_ess_2_text')}</p>
            </div>
            <div className="essence-item">
              <FaBolt className="essence-icon" />
              <h3>{translate('about_ess_3_title')}</h3>
              <p>{translate('about_ess_3_text')}</p>
            </div>
            <div className="essence-item">
              <FaHands className="essence-icon" />
              <h3>{translate('about_ess_4_title')}</h3>
              <p>{translate('about_ess_4_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ORIGEN Y COMPROMISO */}
      <section className="about-commitment section-padding">
        <div className="container">
          <div className="commitment-flex">
            <div className="commitment-text">
              <h2 className="accent-title">{translate('about_com_title')}</h2>
              <p>{translate('about_com_text')}</p>
              <div className="made-in-spain">
                <FaCheck className="check-icon" />
                <span>{translate('about_com_madein')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;