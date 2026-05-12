import { useState, useEffect } from 'react';
import './Banner.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import bannerImage1 from '../../images/fondo_1.jpg';
import bannerImage2 from '../../images/fondo_2.jpg';
import bannerImage3 from '../../images/fondo_3.jpg';
import bannerImage4 from '../../images/fondo_4.jpg';
import bannerImage5 from '../../images/fondo_5.jpg';
const slides = [
    { id: 1, src: bannerImage1, alt: "ACE PRO GRIP - El grip definitivo para tu pala" },
    { id: 2, src: bannerImage2, alt: "Siente el agarre, toma el control" },
    { id: 3, src: bannerImage3, alt: "Mejora tu rendimiento en la pista" },
    { id: 4, src: bannerImage4, alt: "Jugador de pádel aplicando el spray antideslizante en su pala" },
    { id: 5, src: bannerImage5, alt: "Olvídate del sudor y asegura la máxima firmeza en cada golpe" },
  ];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const length = slides.length;

  const extendedSlides = [
    { ...slides[length - 1], id: 'clone-last' },
    ...slides,
    { ...slides[0], id: 'clone-first' }
  ];

  // Auto-play
  useEffect(() => {
    if (length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); 

  const nextSlide = () => {
    setIsTransitioning(true); 
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true); 
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); 
  };

  const handleTransitionEnd = () => {
    if (currentIndex === length + 1) {
      setIsTransitioning(false); 
      setCurrentIndex(1); 
    } 
    else if (currentIndex === 0) {
      setIsTransitioning(false); 
      setCurrentIndex(length); 
    }
  };

  let realIndex = currentIndex - 1;
  if (currentIndex === 0) realIndex = length - 1;
  if (currentIndex === length + 1) realIndex = 0;

  return (
    <section className="banner">
      <h1 className="sr-only">ACE PRO GRIP - Spray antideslizante para pádel</h1>
      
      <div className="carousel-container">
        <div 
          className={`carousel-track ${!isTransitioning ? 'no-transition' : ''}`}
          onTransitionEnd={handleTransitionEnd}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <img 
              key={`${slide.id}-${index}`}
              src={slide.src} 
              alt={slide.alt} 
              className="carousel-image"
            />
          ))}
        </div>

        {length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button className="carousel-btn next" onClick={nextSlide} aria-label="Siguiente">
              <FaChevronRight aria-hidden="true" />
            </button>

            <div className="carousel-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === realIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Banner;