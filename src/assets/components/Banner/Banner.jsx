import './Banner.css';
import bannerImage from '../../images/hero-banner.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <img 
        src={bannerImage} 
        alt="ACE PRO GRIP - El grip definitivo para tu pala" 
        className="banner__image"
      />
    </section>
  );
};

export default Banner;