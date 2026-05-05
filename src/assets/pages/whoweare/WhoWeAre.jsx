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
          <p className="hero-subtitle">Feel Grip · Take Control</p>
        </div>
      </section>

      {/* SECCIÓN FILOSOFÍA */}
      <section className="about-philosophy section-padding">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h2 className="accent-title">{translate('philosophy_title_1') || 'La Filosofía ACE'}</h2>
              <p>En <strong>ACE PRO GRIP</strong> creemos que el control empieza por el agarre. El éxito en el deporte se define por la precisión de cada movimiento.</p>
            </div>
            <div className="philosophy-card">
              <h2 className="accent-title">{translate('philosophy_title_2') || 'Máximo Rendimiento'}</h2>
              <p>Desarrollamos soluciones pensadas para deportistas que buscan seguridad y confianza incluso en las condiciones más exigentes de sudor y humedad.</p>
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

      {/* SECCIÓN ATRIBUTOS (TABLA) */}
      <section className="about-table section-padding">
        <div className="container">
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{translate('table_feature')}</th>
                  <th className="highlight">ACE PRO GRIP</th>
                  <th>{translate('table_liquid_magnesium')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{translate('table_drying_speed')}</td>
                  <td><strong>{translate('table_drying_speed_ace')}</strong></td>
                  <td>{translate('table_drying_speed_liquid_magnesium')}</td>
                </tr>
                <tr>
                  <td>{translate('table_residue')}</td>
                  <td><strong>{translate('table_residue_ace')}</strong></td>
                  <td>{translate('table_residue_liquid_magnesium')}</td>
                </tr>
                <tr>
                  <td>{translate('table_duration')}</td>
                  <td><strong>{translate('table_duration_ace')}</strong></td>
                  <td>{translate('table_duration_liquid_magnesium')}</td>
                </tr>
                <tr>
                  <td>{translate('table_touch')}</td>
                  <td><strong>{translate('table_touch_ace')}</strong></td>
                  <td>{translate('table_touch_liquid_magnesium')}</td>
                </tr>
              </tbody>
            </table>
          </div>
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