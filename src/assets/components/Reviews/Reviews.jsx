import './Reviews.css';
import Slider from 'react-slick';
import { FaInstagram } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from './../../../TranslationContext';
import reviewsData from './reviewsData';

const Reviews = () => {
  const { translate } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 }},
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 }}
    ]
  };

  return (
    <section className="reviews-section section">
      <div className="reviews-header">
        <h2 className="custom-title">{translate('reviews_title') || 'Opiniones de nuestros clientes'}</h2>
      </div>
      <div className="reviews-container container-sm">
        <Slider {...settings}>
          {reviewsData.map((review) => (
            <div className="review-card-wrapper" key={review.id}>
              <div className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div className="review-info">
                    <h3 className="review-name">{review.name}</h3>
                    {review.instagram && (
                      <a href={review.instagram} target="_blank" rel="noopener noreferrer" className="review-ig-link">
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                </div>
                <div className="review-body">
                  <p>&quot;{review.comment}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
