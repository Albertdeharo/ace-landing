import { Parallax } from 'react-parallax';
import './Parallax.css';
import parallaxImg from './../../images/hero-parallax.jpg';

const ParallaxSection = () => {
  return (
    <Parallax bgImage={parallaxImg} strength={300} >
      {/* Crucial: We use a class, not inline styles, to make it responsive */}
      <div className="parallax-content"></div>
    </Parallax>
  );
};

export default ParallaxSection;