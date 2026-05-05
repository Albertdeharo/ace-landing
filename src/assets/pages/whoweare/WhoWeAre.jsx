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
          <h2 className="section-title">{translate('table_title') || 'Atributos del Producto'}</h2>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th className="highlight">ACE PRO GRIP</th>
                  <th>Magnesio Líquido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Velocidad de Secado</td>
                  <td><strong>Ultra Rápido (&lt; 5s)</strong></td>
                  <td>Moderado (15-30s)</td>
                </tr>
                <tr>
                  <td>Residuos</td>
                  <td><strong>Mínimo (Efecto Seco)</strong></td>
                  <td>Alto (Polvo Blanco)</td>
                </tr>
                <tr>
                  <td>Duración</td>
                  <td><strong>Alta Duración</strong></td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td>Tacto</td>
                  <td><strong>Limpio y Preciso</strong></td>
                  <td>Áspero / Seco</td>
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
              <h3>Máximo Agarre</h3>
              <p>Rinde con la confianza de un agarre profesional en cada punto.</p>
            </div>
            <div className="essence-item">
              <FaTintSlash className="essence-icon" />
              <h3>Efecto Seco</h3>
              <p>Control inmediato frente al sudor y la humedad más extrema.</p>
            </div>
            <div className="essence-item">
              <FaBolt className="essence-icon" />
              <h3>Secado Rápido</h3>
              <p>Fórmula de evaporación instantánea para no perder ni un segundo.</p>
            </div>
            <div className="essence-item">
              <FaHands className="essence-icon" />
              <h3>Fácil Uso</h3>
              <p>Aplicación limpia y sencilla diseñada para el fragor del juego.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ORIGEN Y COMPROMISO */}
      <section className="about-commitment section-padding">
        <div className="container">
          <div className="commitment-flex">
            <div className="commitment-text">
              <h2 className="accent-title">Nuestro Compromiso</h2>
              <p>Crear soluciones deportivas eficaces que ayuden a mejorar la experiencia de agarre, aportando confianza, estabilidad y control en cada uso.</p>
              <div className="made-in-spain">
                <FaCheck className="check-icon" />
                <span>Producto fabricado en España por Watermelon Designers, S.L.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;