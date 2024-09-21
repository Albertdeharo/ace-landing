import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>¿Cómo Funciona?</h2>
      <div className="steps">
        <div className="step">
          <h3>Paso 1: Limpia la Pala</h3>
          <p>Asegúrate de que la superficie de la pala esté limpia y seca antes de aplicar el spray.</p>
        </div>
        <div className="step">
          <h3>Paso 2: Aplica el Spray</h3>
          <p>Sostén el spray a unos 20 cm de la pala y aplica una capa uniforme sobre el grip.</p>
        </div>
        <div className="step">
          <h3>Paso 3: Deja Secar</h3>
          <p>Deja que el spray se seque durante unos minutos antes de comenzar a jugar.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
