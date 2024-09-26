import './Banner.css';

const Banner = () => {
  const handleScroll = () => {
    const mainFeaturesSection = document.getElementById('main-features');
    if (mainFeaturesSection) {
      window.scrollTo({
        top: mainFeaturesSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Bienvenido a ACE</h1>
        <p>Transforma la productividad de tu equipo con nuestra solución innovadora.</p>
        <button className="banner-btn" onClick={handleScroll}>
          Descubre más
        </button>
      </div>
    </section>
  );
};

export default Banner;
