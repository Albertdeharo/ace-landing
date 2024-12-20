import './Gallery.css';
import { useState } from 'react';
import Modal from 'react-modal';
import image1 from './../../images/1111.jpg';
import image2 from './../../images/2222.jpg';
import image3 from './../../images/3333.jpg';
import image4 from './../../images/4444.jpg';
import image5 from './../../images/5555.jpg';
import image6 from './../../images/6666.jpg';
import image7 from './../../images/7777.jpg';
import image8 from './../../images/7777.jpg';
import image9 from './../../images/7777.jpg';

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        ariaHideApp={false}
        onClick={closeModal}
        style={{ overlay: { zIndex: 1000 } }}
      >
        {selectedImage && (
          <img 
            src={selectedImage} 
            alt="Modal" 
            onClick={closeModal}
            style={{ cursor: 'pointer' }}
          />
        )}
      </Modal>
    </section>
  );
};

export default Gallery;
