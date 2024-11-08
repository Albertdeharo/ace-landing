import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import fotoEffect1 from '../../images/EFFECT_1.jpg';
import fotoEffect2 from '../../images/EFFECT_2.jpg';
import fotoEffect3 from '../../images/EFFECT_3.jpg';
import foto1 from '../../images/FOTO_4.jpg';
import spray from '../../images/ENVASE.png';
import videoBackground from '../../videos/video_banner.mp4';

const bannerData = [
  {
    video: videoBackground,
    overlayImage: spray,
  },
  {
    image: fotoEffect1,
  },
  {
    image: fotoEffect3,
  },
  {
    image: fotoEffect2,
  },
  {
    image: foto1,
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    draggable: true,
    dotsClass: "custom-dots",
  };

  return (
    <section className="banner">
      <Slider {...settings}>
        {bannerData.map((item, index) => (
          <div key={index}>
            {item.image ? (
              <div
                className=""
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  height: '100vh',
                }}
              ></div>
            ) : item.video ? (
              <div
                className="video-container"
                style={{
                  position: 'relative',
                  height: '100vh',
                  width: '100%',
                }}
              >
              <video
                className="video-background"
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
                {item.overlayImage && (
                  <img
                    src={item.overlayImage}
                    alt="Imagen sobre el video"
                    className="floating-image"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                      width: 'auto',
                      height: '80%',
                    }}
                  />
                )}
              </div>
            ) : null}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
