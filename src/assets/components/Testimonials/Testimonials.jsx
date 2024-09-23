import './Testimonials.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  { name: 'Juan Pérez', testimonial: 'El spray ACE mejoró mi agarre en la pala de forma increíble. ¡No puedo jugar sin él!' },
  { name: 'María López', testimonial: 'La aplicación es muy fácil y los resultados son inmediatos. ¡Recomendado!' },
  { name: 'Carlos García', testimonial: 'Desde que uso ACE, mi rendimiento ha mejorado notablemente. ¡Excelente producto!' },
  { name: 'Laura Fernández', testimonial: 'Me sorprendió lo rápido que noté la diferencia en mi juego. ¡ACE es un antes y un después!' },
  { name: 'Pedro Martínez', testimonial: 'El mejor producto que he utilizado. ACE ha mejorado mi rendimiento en cada partido.' },
  { name: 'Ana Torres', testimonial: 'La facilidad de uso y los resultados me convencieron desde el primer día. ¡ACE es imprescindible!' },
  { name: 'Sofía Rodríguez', testimonial: 'Recomiendo ACE a todos mis amigos. Me ha ayudado mucho en los torneos.' },
  { name: 'David Gómez', testimonial: 'Un producto excelente. Mejoré mi precisión y confianza desde que empecé a usar ACE.' },
  { name: 'Isabel Sánchez', testimonial: 'Increíble lo rápido que se ven los resultados. No puedo estar más contenta con ACE.' }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 }},
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 }}
    ]
  };

  return (
    <section className="testimonials">
      <h2>Testimonios</h2>
      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div className="testimonial-item" key={index}>
            <div className="card-testimonial">
              <div className="profileImage"></div>
              <div className="textContainer">
                <p className="name">{item.name}</p>
                <p className="profile">{item.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
