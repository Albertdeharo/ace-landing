import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Juan Pérez',
    testimonial: 'El spray ACE mejoró mi agarre en la pala de forma increíble. ¡No puedo jugar sin él!',
  },
  {
    name: 'María López',
    testimonial: 'La aplicación es muy fácil y los resultados son inmediatos. ¡Recomendado!',
  },
  {
    name: 'Carlos García',
    testimonial: 'Desde que uso ACE, mi rendimiento ha mejorado notablemente. ¡Excelente producto!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonials-list">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-item" key={index}>
            <p>{item.testimonial}</p>
            <h4>- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
