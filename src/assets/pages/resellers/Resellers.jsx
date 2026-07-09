import { Link } from "react-router-dom";
import { useTranslation } from "./../../../TranslationContext";
import {
  FaStoreAlt,
  FaDumbbell,
  FaUsers,
  //FaExternalLinkAlt,
} from "react-icons/fa";
import SEO from "../../components/SEO/SEO";

import "../distributors/Distributors.css";
import "./Resellers.css";

//import resellersData from "./resellersData";

const Resellers = () => {
  const { translate } = useTranslation();

  return (
    <div className="resellers-page">
      <SEO title={translate("reseller_hero_title") || "Resellers"} />
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

      {/* <section className="dist-current section bg-dark">
        <h2 className="custom-title mb-4 text-white">
          {translate("reseller_current_title")}
        </h2>

        <div className="partners-grid">
          {resellersData.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              <div className="partner-image-container">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="partner-logo"
                />
              </div>
              <div className="partner-content">
                <h3 className="partner-name">{partner.name}</h3>
                <span className="partner-link">
                  {translate(partner.linkTranslationKey)}{" "}
                  <FaExternalLinkAlt aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Resellers;
