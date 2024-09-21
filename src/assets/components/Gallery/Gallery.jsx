import './Gallery.css';
import image1 from './../../images/1111.jpg';
import image2 from './../../images/2222.jpg';
import image3 from './../../images/3333.jpg';
import image4 from './../../images/4444.jpg';
import image5 from './../../images/5555.jpg';
import image6 from './../../images/6666.jpg';
import image7 from './../../images/7777.jpg';

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7]; // Usa las variables importadas

  return (
    <section className="gallery">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
