import { Parallax } from 'react-parallax';
import './Parallax.css';

import parallaxImg from './../../images/parallax.jpg';

const ParallaxSection = () => {
  return (
    <Parallax 
      bgImage={parallaxImg} 
      strength={300}
      bgImageStyle={{ objectFit: 'cover' }} // <-- ¡Aquí está la magia!
    >
      <div style={{ height: 600 }}>
        {/* Tu contenido aquí */}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;