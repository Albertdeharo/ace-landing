import { Parallax } from 'react-parallax';
import './Parallax.css';

import parallaxImg from './../../images/parallax.jpg';

const ParallaxSection = () => {
  return (
    <Parallax 
      bgImage={parallaxImg} 
      strength={300}
      bgImageStyle={{ 
        objectFit: 'cover', 
        objectPosition: 'center center' 
      }}
    >
      <div className="parallax-content"></div>
    </Parallax>
  );
};

export default ParallaxSection;