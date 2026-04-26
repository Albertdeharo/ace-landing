import "./App.css";
import AppRoutes from "./Routes";

function App() {
  const MAINTENANCE = true;

  if (MAINTENANCE) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.icon}>🚧</div>

          <h1 className="custom-main-title">Estamos mejorando ACE Pro Grip</h1>

          <p style={styles.text}>
            Estamos trabajando en una nueva versión de la web para ofrecerte una
            mejor experiencia, más rápida y más moderna.
          </p>

          <div style={styles.loader}></div>

          <p style={styles.subtext}>Volvemos muy pronto ⚡</p>
        </div>
      </div>
    );
  }

  return <AppRoutes />;
}

export default App;

/* =======================
   ESTILOS
======================= */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #1a1a1a, #0b0b0b)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  card: {
    textAlign: "center",
    maxWidth: "520px",
    padding: "40px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    animation: "fadeIn 0.8s ease",
  },

  icon: {
    fontSize: "52px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
  },

  text: {
    fontSize: "14px",
    opacity: 0.8,
    lineHeight: "1.6",
    marginTop: "25px",
    marginBottom: "25px",
  },

  subtext: {
    marginTop: "20px",
    fontSize: "13px",
    opacity: 0.6,
  },

  loader: {
    width: "42px",
    height: "42px",
    margin: "0 auto",
    border: "3px solid rgba(255,255,255,0.2)",
    borderTop: "3px solid #ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
