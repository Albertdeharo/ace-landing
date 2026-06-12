import { Link } from "react-router-dom";
import { useTranslation } from "./../../../TranslationContext";
import { FaHandshake, FaStoreAlt, FaGlobe } from "react-icons/fa";
import SEO from "../../components/SEO/SEO";
import "./Distributors.css";

const Distributors = () => {
  const { translate } = useTranslation();

  return (
    <div className="distributors-page">
      <SEO title={translate("dist_hero_title") || "Distribuidores"} />
      {/* SECCIÓN HERO (Reutilizando clase genérica) */}
      <section className="dist-hero section">
        <h1 className="hero-title custom-title">
          {translate("dist_hero_title")}{" "}
          <span>{translate("dist_hero_subtitle")}</span>
        </h1>
      </section>

      {/* SECCIÓN INFO */}
      <section className="dist-info section">
        <div className="info-grid">
          <div className="info-text">
            <p className="lead-text">{translate("dist_intro_1")}</p>
            <p className="custom-description p-0">
              {translate("dist_intro_2")}
            </p>
            <p className="custom-description p-0">
              <strong>{translate("dist_intro_3")}</strong>
            </p>
          </div>

          <div className="info-icons">
            <div className="icon-box">
              <FaStoreAlt className="dist-icon" aria-hidden="true" />
              <span>{translate("dist_icon_1")}</span>
            </div>
            <div className="icon-box">
              <FaGlobe className="dist-icon" aria-hidden="true" />
              <span>{translate("dist_icon_2")}</span>
            </div>
            <div className="icon-box">
              <FaHandshake className="dist-icon" aria-hidden="true" />
              <span>{translate("dist_icon_3")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA */}
      <section className="dist-cta section bg-light text-center">
        <h2 className="custom-title">{translate("dist_cta_title")}</h2>
        <p className="custom-subtitle mb-4">{translate("dist_cta_desc")}</p>

        <Link to="/contact" className="btn-primary">
          {translate("dist_cta_button")}
        </Link>
      </section>
    </div>
  );
};

export default Distributors;
