import { Parallax } from 'react-parallax';
import './Parallax.css';
import parallaxImg from './../../images/hero-parallax.jpg';

const ParallaxSection = () => {
  return (
    <Parallax bgImage={parallaxImg} strength={300} >
      <div className="parallax-content"></div>
    </Parallax>
  );
};

export default ParallaxSection;