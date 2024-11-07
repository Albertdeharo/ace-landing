import './Testimonials.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  { name: 'Juan Pérez', testimonial: 'El spray ACE mejoró mi agarre en la pala de forma increíble. ¡No puedo jugar sin él!'},
  { name: 'María López', testimonial: 'La aplicación es muy fácil y los resultados son inmediatos. ¡Recomendado!'},
  { name: 'Carlos García', testimonial: 'Desde que uso ACE, mi rendimiento ha mejorado notablemente. ¡Excelente producto!'},
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      <Slider {...settings}>
        {testimonialsData.map((item, index) => (
          <div 
            className="testimonial-item" 
            key={index} 

          >
            <div className="notification">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle">{item.name}</div>
              <div className="notibody">{item.testimonial}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
