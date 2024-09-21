import './Features.css';

const Features = () => {
  const featuresList = [
    {
      title: 'Mejora el Agarre',
      description: 'Nuestra fórmula única aumenta el agarre de la pala, mejorando tu control y precisión.',
      icon: '🖐️' // Puedes reemplazar con un ícono o imagen
    },
    {
      title: 'Fácil Aplicación',
      description: 'El spray se aplica de manera rápida y uniforme, ahorrando tiempo en tu rutina.',
      icon: '⏱️' // Puedes reemplazar con un ícono o imagen
    },
    {
      title: 'Durabilidad',
      description: 'La protección dura varias horas de juego, asegurando un agarre constante.',
      icon: '⏳' // Puedes reemplazar con un ícono o imagen
    }
  ];

  return (
    <section className="features">
      <h2>Características del Producto</h2>
      <div className="features-list">
        {featuresList.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
