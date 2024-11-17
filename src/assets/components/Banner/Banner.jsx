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
    text: 'FEEL GRIP TAKE CONTROL'
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
                  aspectRatio: '2/1',
                }}
              ></div>
            ) : item.video ? (
              <div
                className="video-container"
                style={{
                  position: 'relative',
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
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
                <div className="video__content">
                  {item.text && (
                      <div
                      className="floating-text"
                      style={{
                        position: 'absolute',
                        top: '70%',
                        left: '20%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        height: '80%',
                        fontSize: '5vw'
                      }}
                      >
                        <span className='neon'>{item.text}</span>
                      </div>
                    )}
                    {item.overlayImage && (
                      <img
                        src={item.overlayImage}
                        alt="Imagen sobre el video"
                        className="floating-image"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '60%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 1,
                          width: 'auto',
                          height: '80%',
                        }}
                      />
                    )}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
