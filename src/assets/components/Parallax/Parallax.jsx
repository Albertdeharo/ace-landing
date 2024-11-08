import { Parallax } from 'react-parallax';
import './Parallax.css';

import parallaxImg from './../../images/FOTO_1.jpg';

const ParallaxSection = () => {
  return (
    <Parallax bgImage={parallaxImg} strength={400}>
      <div style={{ height: 500 }}>
        <div className="parallax-content">
          <h2>¡Descubre el Poder de ACE!</h2>
          <p>Reforzar el agarre nunca fue tan fácil. Experimenta la diferencia con nuestro spray.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
