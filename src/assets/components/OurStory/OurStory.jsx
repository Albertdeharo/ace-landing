import './OurStory.css';
import ourStoryImage from '../../images/ourStory.webp'; // Asegúrate de colocar la ruta correcta
import { Parallax } from 'react-parallax';

const OurStory = () => {
  return (
    <section className="our-story">
      <Parallax bgImage={ourStoryImage} strength={300}>
        <div style={{ height: 400 }}>
          <div className="parallax-content">
          </div>
        </div>
      </Parallax>
      <div className="our-story-content p1">
        <h2 className='custom-title'>NUESTRA HISTORIA</h2>
        <div className="text-center custom-description">
          <p>
            ACE nació de la pasión por los deportes de raqueta y la necesidad de un producto que
            mejorara el agarre y el rendimiento de los jugadores. Desde nuestros inicios, hemos
            estado comprometidos con la calidad y la innovación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
