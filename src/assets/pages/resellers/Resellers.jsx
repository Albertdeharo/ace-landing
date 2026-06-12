import { Link } from "react-router-dom";
import { useTranslation } from "./../../../TranslationContext";
import {
  FaStoreAlt,
  FaDumbbell,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "../distributors/Distributors.css";
import "./Resellers.css";

import logoCelescala from "./../../../assets/images/partners/celescala-logo.jpg";
import logoMaresmePadelClub from "./../../../assets/images/partners/maresme-padel-club.jpg";
import logoOnePadelValencia from "./../../../assets/images/partners/one-padel-valencia.jpg";
import logoPadelCañaveral from "./../../../assets/images/partners/padel-cañaveral.jpg";
import logoCatalunyaPadelClub from "./../../../assets/images/partners/catalunya-padel-club.jpeg";
import logoPadelMotril from "./../../../assets/images/partners/padel-motril.jpeg";
import logoIniestaSportCenter from "./../../../assets/images/partners/padel-iniesta.jpeg";
import logoPadelEstany from "./../../../assets/images/partners/padel-estany.jpeg";
import logoIfAcademy from "./../../../assets/images/partners/if-academy.jpeg";
import logoIndoorPadelBarcelona from "./../../../assets/images/partners/indoor-padel-bacelona.jpeg";

const Resellers = () => {
  const { translate } = useTranslation();

  return (
    <div className="resellers-page">
      <section className="dist-hero section">
        <h1 className="hero-title custom-title">
          {translate("reseller_hero_title")}{" "}
          <span>{translate("reseller_hero_subtitle")}</span>
        </h1>
      </section>

      <section className="dist-info section">
        <div className="info-grid">
          <div className="info-text">
            <p className="lead-text">{translate("reseller_intro_1")}</p>
            <p className="custom-description p-0">
              {translate("reseller_intro_2")}
            </p>
            <p className="custom-description p-0">
              <strong>{translate("reseller_intro_3")}</strong>
            </p>
          </div>

          <div className="info-icons">
            <div className="icon-box">
              <FaStoreAlt className="dist-icon" aria-hidden="true" />
              <span>{translate("reseller_icon_1")}</span>
            </div>
            <div className="icon-box">
              <FaDumbbell className="dist-icon" aria-hidden="true" />
              <span>{translate("reseller_icon_2")}</span>
            </div>
            <div className="icon-box">
              <FaUsers className="dist-icon" aria-hidden="true" />
              <span>{translate("reseller_icon_3")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reseller-cta section bg-light text-center">
        <h2 className="custom-title mb-2 text-white">
          {translate("reseller_cta_title")}
        </h2>
        <p className="custom-subtitle mb-4 text-gray">
          {translate("reseller_cta_desc")}
        </p>

        <Link to="/contact" className="btn-primary">
          {translate("reseller_cta_button")}
        </Link>
      </section>

      <section className="dist-current section bg-dark">
        <h2 className="custom-title mb-4 text-white">
          {translate("reseller_current_title")}
        </h2>

        <div className="partners-grid">
          {/* CE L'escala */}
          <a
            href="https://celescala.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoCelescala}
                alt="C. E. L'escala Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">C. E. L'escala</h3>
              <span className="partner-link">
                {translate("dist_visit_web")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Maresme padel club */}
          <a
            href="https://www.instagram.com/maresmepadelclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoMaresmePadelClub}
                alt="Maresme Padel Club Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Maresme Padel Club</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* One Padel Valencia */}
          <a
            href="https://www.instagram.com/onepadelvalencia/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoOnePadelValencia}
                alt="One Padel Valencia Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">One Padel Valencia</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Padel Cañaveral */}
          <a
            href="https://www.instagram.com/padelelcanaveral?igsh=MXVzaGdqcG5xY3Voeg=="
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoPadelCañaveral}
                alt="Padel Cañaveral Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Padel Cañaveral</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
          {/* Catalunya Padel club */}
          <a
            href="https://www.instagram.com/catalunyapadelclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoCatalunyaPadelClub}
                alt="Catalunya Padel Club Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Catalunya Padel Club</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Padel Motril */}
          <a
            href="https://www.instagram.com/padelmotril?igsh=MWo1dmVqd2ZscjlzdQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoPadelMotril}
                alt="Padel Motril Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Padel Motril</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
          {/* Iniesta Sport Center */}
          <a
            href="https://www.instagram.com/iniestasportcenter?igsh=MWozOGx6cnhvOXQ3NQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoIniestaSportCenter}
                alt="Iniesta Sport Center Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Iniesta Sport Center</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
          {/* Padel estany */}
          <a
            href="https://www.instagram.com/padel.estany?igsh=dW4wNjM3aXJsd2x6"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoPadelEstany}
                alt="Padel Estany Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Padel Estany</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
          {/* If Academy */}
          <a
            href="https://www.instagram.com/if_academy_padel?igsh=MWR2ajJneXBkaW1sMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoIfAcademy}
                alt="If Academy Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">If Academy</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
          {/* indoor Padel Barcelona */}
          <a
            href="https://www.instagram.com/ipadelbarcelona?igsh=MWZ6bmpuNTY4NGt2dA=="
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <div className="partner-image-container">
              <img
                src={logoIndoorPadelBarcelona}
                alt="Indoor Padel Barcelona Logo"
                className="partner-logo"
              />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Indoor Padel Barcelona</h3>
              <span className="partner-link">
                {translate("dist_visit_instagram")}{" "}
                <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resellers;
