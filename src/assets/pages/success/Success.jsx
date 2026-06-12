import { useTranslation } from "../../../TranslationContext";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import "./Success.css";

const Success = () => {
  const { translate } = useTranslation();

  return (
    <div className="success-page">
      <SEO title={translate("success_title") || "¡Gracias por tu compra!"} />
      <motion.div
        className="success-container"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <FaCheckCircle className="success-icon" />
        </motion.div>

        <h1 className="success-title">{translate("success_title")}</h1>

        <p className="success-message">{translate("success_message")}</p>

        <div className="success-actions">
          <Link to="/" className="success-home-btn">
            {translate("success_btn_home")}{" "}
            <FaArrowRight className="btn-icon" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;
