import './Banner.css';
import bannerImage from '../../images/hero-banner.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <h1 className="sr-only">ACE PRO GRIP - El grip definitivo para tu pala de pádel</h1>
      <img 
        src={bannerImage} 
        alt="ACE PRO GRIP - Spray antideslizante para pádel" 
        className="banner__image"
      />
    </section>
  );
};

export default Banner;