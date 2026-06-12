import { useTranslation } from "./../../../TranslationContext";
import {
  FaRocket,
  FaBolt,
  FaTintSlash,
  FaHands,
  FaCheck,
} from "react-icons/fa";
import SEO from "../../components/SEO/SEO";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const { translate } = useTranslation();

  return (
    <div className="about-page">
      <SEO title={translate("about_hero_1") || "Quiénes Somos"} />
      {/* SECCIÓN HERO (Usamos .dist-hero de tu app.css para estandarizar con Resellers/Distribuidores) */}
      <section className="dist-hero">
        <div className="container">
          <h1 className="hero-title">
            {translate("about_hero_1")} <span>{translate("about_hero_2")}</span>
          </h1>
        </div>
      </section>

      <section className="about-philosophy section">
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h2 className="accent-title">{translate("philosophy_title_1")}</h2>
            <p
              className="custom-description p-0"
              dangerouslySetInnerHTML={{
                __html: translate("philosophy_text_1"),
              }}
            ></p>
          </div>
          <div className="philosophy-card">
            <h2 className="accent-title">{translate("philosophy_title_2")}</h2>
            <p
              className="custom-description p-0"
              dangerouslySetInnerHTML={{
                __html: translate("philosophy_text_2"),
              }}
            ></p>
          </div>
        </div>
      </section>

      <section className="about-quote section">
        <blockquote className="main-quote">
          &quot;Feel Grip · Take Control&quot;
        </blockquote>
        <p className="quote-sub">
          ACE representa una forma de competir con más seguridad, concentración
          y control.
        </p>
      </section>

      <section className="about-essence section">
        <h2 className="custom-title mb-4">{translate("essence_title")}</h2>
        <div className="essence-grid">
          <div className="essence-item">
            <FaRocket className="essence-icon" aria-hidden="true" />
            <h3>{translate("about_ess_1_title")}</h3>
            <p>{translate("about_ess_1_text")}</p>
          </div>
          <div className="essence-item">
            <FaTintSlash className="essence-icon" aria-hidden="true" />
            <h3>{translate("about_ess_2_title")}</h3>
            <p>{translate("about_ess_2_text")}</p>
          </div>
          <div className="essence-item">
            <FaBolt className="essence-icon" aria-hidden="true" />
            <h3>{translate("about_ess_3_title")}</h3>
            <p>{translate("about_ess_3_text")}</p>
          </div>
          <div className="essence-item">
            <FaHands className="essence-icon" aria-hidden="true" />
            <h3>{translate("about_ess_4_title")}</h3>
            <p>{translate("about_ess_4_text")}</p>
          </div>
        </div>
      </section>

      <section className="about-commitment section">
        <div className="commitment-flex flex-center text-center">
          <div className="commitment-text">
            <h2 className="accent-title" style={{ border: "none", padding: 0 }}>
              {translate("about_com_title")}
            </h2>
            <p className="custom-description p-0">
              {translate("about_com_text")}
            </p>
            <div className="made-in-spain flex-center">
              <FaCheck className="check-icon" aria-hidden="true" />
              <span>{translate("about_com_madein")}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
