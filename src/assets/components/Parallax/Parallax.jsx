import { Parallax } from 'react-parallax';
import './Parallax.css';

import parallaxImg from './../../images/FOTO_5.jpg';

const ParallaxSection = () => {
  return (
    <Parallax bgImage={parallaxImg} strength={300}>
      <div style={{ height: 500 }}>
        <div className="parallax-content">
          <h2>Descubre el Poder de ACE</h2>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
