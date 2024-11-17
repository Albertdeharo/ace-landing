import './MissionVision.css';
import missionImage from '../../images/FOTO_2.jpg';
import visionImage from '../../images/FOTO_3.jpg';

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-content">
        <div className="mission-text-content">
          <h2 className="custom-subtitle">Nuestra Misión</h2>
          <p className="custom-description">
            Proporcionar a los jugadores de padel y tenis el mejor agarre posible, permitiendo
            que disfruten de su deporte al máximo.
          </p>
        </div>
        <div className="image-content">
          <img src={missionImage} alt="Misión" />
        </div>
      </div>
      <div className="vision-content">
        <div className="image-content">
          <img src={visionImage} alt="Visión" />
        </div>
        <div className="vision-text-content">
          <h2 className="custom-subtitle">Nuestra Visión</h2>
          <p className="custom-description">
            Ser la marca líder en productos de agarre para deportes de raqueta, reconocidos por
            nuestra calidad e innovación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
