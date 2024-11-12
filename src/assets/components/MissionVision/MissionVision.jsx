import './MissionVision.css';
import missionImage from '../../images/FOTO_5.jpg'; // Asegúrate de importar la imagen

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision-content">
        <div className="text-content">
          <h2 className='custom-title'>Nuestra Misión</h2>
          <p className='w50 custom-description'>
            Proporcionar a los jugadores de padel y tenis el mejor agarre posible, permitiendo
            que disfruten de su deporte al máximo.
          </p>
          <h2 className='custom-title'>Nuestra Visión</h2>
          <p className='w50 custom-description'>
            Ser la marca líder en productos de agarre para deportes de raqueta, reconocidos por
            nuestra calidad e innovación.
          </p>
        </div>
        <div className="image-content">
          <img src={missionImage} alt="Misión y Visión" />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
