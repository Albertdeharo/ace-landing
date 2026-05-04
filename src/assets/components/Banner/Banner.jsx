import { motion } from 'framer-motion';
import './Banner.css';
import bannerImage from '../../images/banner.jpeg';

const Banner = () => {
  return (
    <section className="banner">
      <motion.img 
        src={bannerImage} 
        alt="ACE PRO GRIP - El grip definitivo para tu pala" 
        className="banner__image"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
};

export default Banner;